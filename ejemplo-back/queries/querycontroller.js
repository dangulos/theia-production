const conf = require('./../config/config');
var bcrypt = require('bcryptjs');
const pool = conf.dbpos();

function singleSelect(table, columns, condition) {
    return 'SELECT ' + columns + ' FROM ' + table + ' WHERE ' + condition + '= $1';
}


function Insert(table, columns, values) {
    return 'INSERT INTO ' + table + '(' + columns.join(',') + ') VALUES (' + values.join(',') + ')';
}

function searchForUser(user, callback) {
    const query = "SELECT * FROM users WHERE username = '" + user.username + "'";
    pool.query(query, (err, res) => {
        if(res != undefined && res != null)
            callback(err, res.rows);
        else
            callback(err, JSON.stringify(res));
    });
}

function identifyUser(user, callback) {
    const query = singleSelect('users', '*', 'user_id');
    //console.log('\nidentifyUser: ',user,query)
    pool.query(query, [user.user_id], (err, res) => {
        if (res)
            callback(err, res.rows);
        else
            callback(err, null);
    });
    return callback;
}

function insertUser(user, callback) {
    const columns = [ 'username', 'password', 'key', 'email', 'name', 'enterprise', 'job', 'id_rol' ];
    const values = getValuesArray(columns, user);
    const query = Insert('users', columns, values);
    pool.query(query, (err, res) => {
        if(res) callback(err, res.rows);
        else callback(err, res);
    });
    return callback;
}

function getValuesArray(columns, obj) {
    let values = [];
    for(var i = 0; i < columns.length; i++)
        if(typeof obj[columns[i]] == "object")
            values.push(pVal(JSON.stringify(obj[columns[i]])));
        else
            values.push(pVal(obj[columns[i]]));
    return values;
}

function pVal(val) {
    return "'" + val + "'";
}

function changeUser(requirements, callback) {
    cypher(requirements.password, (err, res) => {
        if (err) {
            const query = "UPDATE users SET" +
            " name='" + requirements.name + "'," +
            " email='" + requirements.email + "'" +
            " WHERE key='" + requirements.key + "';";
            request(callback, query, true);
        } else {
            const query = "UPDATE users SET" +
            " name='" + requirements.name + "'," +
            " email='" + requirements.email + "'," +
            " password='" +res+ "'" +
            " WHERE key='" + requirements.key + "';";
            request(callback, query, true);
        }
    });
}

function cypher(data, callback){
    bcrypt.genSalt(10, function(err_, salt) {
        if (err_)
            callback(err_, null);
        else {
            bcrypt.hash(data, salt, function(error, hash) {
                if (error)
                    callback(error, null);
                else if(data == '')
                    callback('no pass update', null);
                else
                    callback(null, hash);
            });
        }
    });     
}

function insertSymbol(requirements, callback) {
    const query = "INSERT INTO symbols (symbol) VALUES ('" + requirements.symbol + "')";
    request(callback, query, true);
}

function removeSymbol(requirements, callback) {
    const query = "DELETE FROM symbols WHERE id_symbol=" + requirements.symbolId;
    request(callback, query, true);
}

function request(callback, query, ignoreEmptiness) {
    pool.query(query, null, (err, res) => {
        if(err)
            callback(err, { msg: "error en engine postgresql" });
        else if(res || ignoreEmptiness)
            callback(err, res);
        else
            callback(err, { msg: "consulta vacia" });
    });
}

function requestAllProducts(requirements, callback) {
    let query = "SELECT * FROM products LEFT JOIN product_type ON products.product_type_id = product_type.product_type_id";
    request(callback, query, true);
}

function requestAllProductsForMarketPlace(requirements, callback) {
    let query = "SELECT * FROM products LEFT JOIN product_type ON products.product_type_id = product_type.product_type_id WHERE CAST (market_status -> 'isPublished' AS BOOLEAN) = true";
    request(callback, query, true);
}

function requestAllProductsForUser(requirements, callback) {
    let query = "WITH product_extended AS (SELECT * FROM products LEFT JOIN product_type ON products.product_type_id = product_type.product_type_id) ";
    query += "SELECT * FROM product_assignments LEFT JOIN product_extended ON product_assignments.product_id = product_extended.product_id WHERE product_assignments.user_id = "+requirements.user_id;
    request(callback, query, true);
}

function requestModelsForUser(requirements, callback) {
    let query = 
        `SELECT * FROM models
        LEFT JOIN products ON models.product_id = products.product_id
        LEFT JOIN product_assignments ON product_assignments.product_id = products.product_id
        WHERE product_assignments.user_id = `+requirements.user_id;
        console.log('requestModelsForUser: ', query);
    request(callback, query, true);
}

function requestAllUpdatesForModel(requirements, callback){
    let query = 
        `SELECT * FROM models
        LEFT JOIN model_updates ON models.product_id = model_updates.model_product_id 
        WHERE model_updates.model_product_id=`+requirements.product_id;
    console.log('requestAllUpdatesForModel: ', query);
    request(callback, query, true);
}

function requestAllUpdatesForUser(requirements, callback){
    let query = "SELECT * FROM model_updates WHERE user_id="+requirements.user_id;
    request(callback, query, true);
}

function requestModelForProductAndUser(requirements, callback){
    let query = 
        `SELECT * FROM models 
        LEFT JOIN model_class ON models.class_id = model_class.model_class_id 
        LEFT JOIN datasets ON datasets.product_id = models.dataset_product_id  
        WHERE models.user_id=`+requirements.user_id+` AND models.product_id=`+requirements.product_id;
    console.log('requestModelForProductAndUser:', query);
    request(callback, query, true);
}

function requestSymbols(requirements, callback) {
    const query = "SELECT * FROM symbols";
    request(callback, query, true);
}

function requestMarketPlaceModels(requirements, callback){
    const query = "select model_id, name from models"
    request(callback, query, true);
}

function requestMarketPlaceDatasets(requirements, callback){
    const query = 
        `SELECT * FROM products
        RIGHT JOIN datasets ON products.product_id = datasets.product_id`;
    request(callback, query, true);
}

function requestUserDatasets(requirements, callback){
    const query = "select * from datasets WHERE user_id = "+requirements.user_id;
    request(callback, query, true);
}

//products

//gets
function requestProducts(requirements, callback){
    const query = `SELECT *
                   FROM products
                   LEFT JOIN models ON products.product_id = models.product_id
                   LEFT JOIN datasets ON products.product_id = datasets.product_id`;
    request(callback, query, true)
}

//get
function requestProduct(requirements, callback, id){
    const query = `SELECT *
                   FROM products
                   LEFT JOIN models ON products.product_id = models.product_id
                   LEFT JOIN datasets ON products.product_id = datasets.product_id
                   WHERE products.product_id = `+ id +``;
    request(callback, query, true)
}

//post
function insertProduct(requirements, callback){
    const query = 
        `INSERT INTO products 
        (product_type_id, name,creation_date) 
        VALUES (`+requirements.product_type_id+`,'`+requirements.name+`',`+requirements.creation_date+`)`;
    console.log("insertProduct", query);
    request(callback, query, true)
}

//get id by creation date

function requestNewProductId(requirements, callback){
    const query = 
        `SELECT product_id FROM products
        WHERE creation_date = `+ requirements.creation_date;
    console.log('insertProduct: ',query);
    request(callback, query, true)
}

//put
//nota: Params llevará el estilo que requiere el set 
//y los datos se modificarán en el controlador. (sujeto a cambio)
function updateProduct(requirements, callback, params, id){
    const query =  `select product_type_id,name,description from users
                    left join product_per_user on users.user_id = product_per_user.user_id
                    left join products on product_per_user.product_id = products.product_id
                    left join dataset on products.product_id = dataset.product_id
                    where username = '`+ requirements.username +`'`;
    request(callback, query, true)
}
//delete
function removeProduct(requirements, callback, params, id){
    const query = `DELETE FROM Products
                   WHERE Products.Product_id=`+id+``
    request(callback, query, true)
}

//Get all my products
function requestMyProducts(requirements, callback){
    const query =  `select product_type_id,name,description from users
                    left join product_per_user on users.user_id = product_per_user.user_id
                    left join products on product_per_user.product_id = products.product_id
                    left join dataset on products.product_id = dataset.product_id
                    where username = '`+ requirements.username +`'`;
    request(callback, query, true)
}

//Get last product_id by name

function requestLastProductByName(requirements, callback){
    const query = 
        `SELECT product_id 
        FROM products 
        WHERE name = '`+requirements.name+`' 
        ORDER BY product_id DESC`;
        console.log('requested by name', query);
    request(callback, query, true);
}

//models

//gets
function requestModels(requirements, callback){
    const query = `SELECT *
                   FROM models`;
    request(callback, query, true)
}

//get
function requestModel(requirements, callback, id){
    const query = `SELECT *
                   FROM models
                   WHERE models.model_id = `+ id +``;
    request(callback, query, true)
}

//post
function insertModel(requirements, callback){
    const query = 
        `INSERT INTO models
        (dataset_product_id,product_id, user_id, class_id,last_update_id) 
        VALUES (`+requirements.dataset_product_id+`,`+requirements.product_id+`,`+requirements.user_id+`,`+requirements.class_id+`,0)`;
    console.log("insertModel", query);
    request(callback, query, true)
}

//put
function updateModel(requirements, callback, params, id){
    const query = `UPTADE models
                   SET `+ params +`
                   WHERE models.model_id=`+id+``
    request(callback, query, true)
}
//delete
function removeModel(requirements, callback, params, id){
    const query = `DELETE FROM models
                   WHERE models.model_id=`+id+``
    request(callback, query, true)
}

//get All model classes
function requestModelClasses(requirements, callback){
    const query = `SELECT model_class_id,class,class_name FROM model_class`;
    console.log(query);
    request(callback, query, true);
}

//get model classes with name param changed
function requestModelClassesName(requirements, callback){
    const query = 
        `SELECT model_class_id,class,class_name AS name,class_symbol FROM model_class`;
    console.log(query);
    request(callback, query, true);
}

//get model classes joined products
function requestModelClassesJoinProducts(requirements, callback){
    const query = 
        `SELECT model_class_id,class,class_name AS name,class_symbol, datasets.product_id as dataset_product_id
        ,dataset_name, symbol, name AS product_name,description,market_status FROM model_class
        LEFT JOIN models ON models.class_id = model_class.model_class_id
        LEFT JOIN datasets ON datasets.product_id = models.dataset_product_id
        LEFT JOIN products ON products.product_id = models.model_id
        WHERE model_class_id = `+requirements.model_class_id;
    console.log(query);
    request(callback, query, true);
}


//datasets

//gets
function requestDatasets(requirements, callback){
    const query = `SELECT *
                   FROM datasets`;
    request(callback, query, true)
}

//get by product id
function requestDataset(requirements, callback){
    const query = `SELECT *
                   FROM datasets
                   WHERE datasets.product_id = `+ requirements.product_id +``;
    request(callback, query, true)
}

//get id by product id
function requestDatasetId(requirements, callback){
    const query = `SELECT dataset_id
                   FROM datasets
                   WHERE datasets.product_id = `+ requirements.product_id +``;
    request(callback, query, true)
}

//post
function insertDataset(requirements, callback){
    const query = 
        `INSERT INTO datasets 
        (product_id, user_id, dataset_name, symbol ,data) 
        VALUES (`+requirements.product_id+`,`+requirements.user_id+`,'`+requirements.name+`','`+requirements.symbol+`','`+requirements.data+`')`;
    console.log("inserting new version", query);
    request(callback, query, true)
}

//put
function updateDataset(requirements, callback, params, id){
    const query = `UPTADE datasets
                   SET `+ params +`
                   WHERE datasets.dataset_id=`+id+``
    request(callback, query, true)
}
//delete
function removeDataset(requirements, callback, id){
    const query = `DELETE FROM datasets
                   WHERE datasets.dataset_id=`+id+``
    request(callback, query, true)
}

//users

//gets
function requestUsers(requirements, callback){
    const query = `SELECT *
                   FROM users`;
    request(callback, query, true)
}

//get
function requestUser(requirements, callback, id){
    const query = `SELECT *
                   FROM users
                   WHERE users.user_id = `+ id +``;
    request(callback, query, true)
}

//training

//gets
function requestTrainings(requirements, callback){
    const query = `SELECT *
                   FROM model_updates
                   LEFT JOIN training_output ON training_output.training_output_id = trainings.training_output_id
                   LEFT JOIN trainig_stats ON trainig_stats.trainig_stats_id = trainigs.trainig_stats_id
                   LEFT JOIN model_structure_per_training ON model_structure_per_training.model_structure_id = models.model_structure_id`;
    request(callback, query, true)
}

//get
function requestTraining(requirements, callback, id){
    const query = `SELECT *
                   FROM model_updates
                   LEFT JOIN training_output ON training_output.training_output_id = trainings.training_output_id
                   LEFT JOIN trainig_stats ON trainig_stats.trainig_stats_id = trainigs.trainig_stats_id
                   LEFT JOIN model_structure_per_training ON model_structure_per_training.model_structure_id = models.model_structure_id
                   WHERE trainings.training_id = `+ id +``;
    request(callback, query, true)
}

//post
function insertTraining(requirements, callback, columns, values){
    const query = this.insert('trainings', columns, values);
    request(callback, query, true)
}

//put
function updateTraining(requirements, callback, params, id){
    const query = `UPTADE trainings
                   SET `+ params +`
                   WHERE trainings.training_id=`+id+``
    request(callback, query, true)
}

//delete
function removeTraining(requirements, callback, id){
    const query = `DELETE FROM trainings
                   WHERE trainings.training_id=`+id+``
    request(callback, query, true)
}

//product_per_user
//post
function insertProductPerUser(requirements, callback){
    const query = `INSERT INTO product_assignments(product_id, user_id, is_author)
                    VALUES (`+ requirements.product_id +`, `+ requirements.user_id +`, `+ requirements.is_author +`)`
    request(callback, query, true)
}

//update_forecasting
//get
function requestUpdateForecastingByUpdateId(requirements, callback){
    const query = 
            `SELECT forecast_series FROM update_forecasting
            WHERE model_updates_id = ` + requirements.model_update_id;
        console.log('\nrequestUpdateForecastingByUpdateId: ',query)
        request(callback, query, true)
}

function requestsDatasetsForUser(requirements, callback){
    const query = "SELECT dataset_id, dataset_name, data FROM datasets WHERE user_id ="+requirements.user_id;
    request(callback, query, true);
}

function requestStatisticsForUpdate(requirements, callback){
    const query = "SELECT update_date, request_date, stats FROM update_stats WHERE update_stats_id ="+requirements.update_stats_id;
    request(callback, query, true);
}

function requestInputsFromId(requirements, callback){
    const query = "SELECT input_data FROM update_input_group WHERE model_updates_id ="+requirements.model_updates_id;
    console.log("requestInputsFromId:\n",query);
    request(callback, query, true);
}

function requestOutputsFromId(requirements, callback){
    const query = "SELECT output_data FROM update_output_group WHERE model_updates_id ="+requirements.model_updates_id;
    console.log("requestOutputsFromId:\n",query);
    request(callback, query, true);
}

function changeDatasetData(requirements, callback){
    const query = `UPDATE datasets  
                   SET data = '`+requirements.data+`'
                   WHERE product_id = `+ requirements.product_id;
                   console.log("outputs for update", query);
    request(callback, query, true);
}

function insertNewUpdateStats(requirements, callback) {
    const query = 'INSERT INTO update_stats (model_updates_id ,update_date, request_date) VALUES ('+requirements.model_updates_id+',0, '+requirements.request_date+')';
    console.log('insertNewUpdateStats: ',query);
    request(callback, query, true);
}

function selectUpdateStatsId(requirements, callback) {
    const query = 'SELECT update_stats_id FROM update_stats WHERE update_stats.request_date = '+requirements.request_date;
    request(callback, query, true);
}

function insertUpdateStructure(requirements, callback) {
    const query = 'INSERT INTO model_structure (model_updates_id,creation_date) VALUES ('+requirements.model_updates_id+','+requirements.creation_date+')';
    request(callback, query, true);
}

function selectUpdateStructureId(requirements, callback) {
    const query = 'SELECT * FROM structure_per_update WHERE structure_per_update.creation_date = '+requirements.creation_date;
    request(callback, query, true);
}

function insertUpdateInputGroup(requirements, callback) {
    const query = 'INSERT INTO update_input_group (model_updates_id,creation_date) VALUES ('+requirements.model_updates_id+','+requirements.creation_date+')';
    request(callback, query, true);
}

function selectUpdateInputGroupId(requirements, callback) {
    const query = 'SELECT * FROM update_input_group WHERE update_input_group.creation_date = '+requirements.creation_date;
    request(callback, query, true);
}

function insertUpdateOutputGroup(requirements, callback) {
    const query = 'INSERT INTO update_output_group (creation_date, model_updates_id) VALUES ('+requirements.creation_date+','+requirements.model_updates_id+')';
    request(callback, query, true);
}

function selectUpdateOutputGroupId(requirements, callback) {
    const query = 'SELECT * FROM update_output_group WHERE update_output_group.creation_date = '+requirements.creation_date;
    request(callback, query, true);
}

function insertUpdateForecastSeries(requirements, callback) {
    const query = 'INSERT INTO update_forecasting (creation_date,model_updates_id) VALUES ('+requirements.creation_date+','+requirements.model_updates_id+')';
    request(callback, query, true);
}

function selectForecastSeriesId(requirements, callback) {
    const query = 'SELECT * FROM update_forecasting WHERE update_forecasting.creation_date = '+requirements.creation_date;
    request(callback, query, true);
}

//insert new Update
function insertNewUpdateForModel(req, callback){
    const query = 
        `INSERT INTO model_updates 
        (model_product_id, creation_date, request_date) 
        VALUES (`+req.model_product_id+`,`+req.creation_date+`,`+req.request_date+`)`;
    console.log('insertNewUpdateForModel: ', query)
    request(callback, query, true);
}
//request said update
function requestUpdateByDate(req, callback){
    const query = 
        `SELECT model_update_id FROM model_updates
        WHERE creation_date=`+req.creation_date;
    console.log('requestUpdateByDate: ', query)
    request(callback, query, true);
}

function insertApiRegistry (req, callback){
    const query = `INSERT INTO api_registry (user_id, domain, key) VALUES (`+req.user_id+`, '`+req.domain+`', '`+req.key+`')`;
    request(callback, query, true);
}

function deleteApiRegistry (req, callback){
    const query = `DELETE FROM api_registry WHERE user_id = `+req.user_id+` AND api_registry_id = `+req.api_registry_id;
    request(callback, query, true);
}

function updateApiRegistry (req, callback){
    const query = "UPDATE api_registry SET domain='"+req.domain+"', key='"+req.key+"', user_id="+req.user_id+" WHERE api_registry_id = "+req.api_registry_id;
    request(callback, query, true);
}

function selectApiRecordsByUserId(req, callback){
    const query = `SELECT * FROM api_registry WHERE user_id = `+req.user_id;
    request(callback, query, true);
}

function updateInputDataForModelUpdate (req, callback){
    const query = "UPDATE update_input_group SET input_data='"+req.input_data+"' WHERE model_updates_id = "+req.model_updates_id;
    request(callback, query, true);
}

function updateOutputDataForModelUpdate (req, callback){
    const query = "UPDATE update_output_group SET output_data='"+req.output_data+"' WHERE model_updates_id = "+req.model_updates_id;
    request(callback, query, true);
}

function updateStructureDataForModel (req, callback){
    const query = "UPDATE model_structure SET structure='"+JSON.stringify(req.structure)+"' WHERE model_updates_id = "+req.model_updates_id;
    request(callback, query, true);
}

function selectApiRecordsByKey(req, callback){
    const query ="SELECT * FROM api_registry WHERE key = '"+req.apiKey+"'";
    request(callback, query, true);
}

function selectDatasetIdByUserAndName(req, callback){
    const query = "SELECT product_id FROM datasets WHERE user_id="+req.user_id+" AND symbol='"+req.dataset_name+"'";
    request(callback, query, true);
}

function selectModelIdByUserAndClass(req, callback){
    const query = "SELECT product_id, model_id, class_name FROM models LEFT JOIN model_class ON class_id = model_class_id  WHERE user_id="+req.user_id+" AND class_symbol  = '"+req.class.toUpperCase()+"' AND dataset_product_id = "+req.dataset_id;
    request(callback, query, true);
}

function selectUpdateFromUserModelClass(req, callback){
    const query = "SELECT * FROM model_updates WHERE model_product_id="+req.model_id+" ORDER by creation_date DESC OFFSET "+req.offset;
    request(callback, query, true);
}

function selectStructureFromId(requirements, callback) {
    const query = 'SELECT * FROM model_structure WHERE model_updates_id = '+requirements.model_updates_id;
    request(callback, query, true);
}

function updateForecastSeriesForModelVersion(req, callback){
    const query = "UPDATE update_forecasting SET forecast_series='"+JSON.stringify(req.forecast_series)+"' WHERE model_updates_id = "+req.model_updates_id;
    request(callback, query, true);
}

//External queries

//get all products from an user

function requestAllUserProductsExternal(req,callback){
    const query = 
    `SELECT name, description,market_status, creation_date, type, is_author FROM products 
    LEFT JOIN product_type ON products.product_type_id = product_type.product_type_id
    RIGHT JOIN product_assignments ON product_assignments.product_id = products.product_id
    WHERE product_assignments.product_id = `+ req.user_id;
    console.log("getAllUserProductsExternal: \n", query);
    request(callback, query, true);
}


module.exports = {
    Find: function(user, callback) {
        return searchForUser(user, callback);
    }, createSymbol: function(requirements, callback) {
        return insertSymbol(requirements, callback);
    }, deleteSymbol: function(requirements, callback) {
        return removeSymbol(requirements, callback);
    }, getAllProducts: function(requirements, callback) {
        return requestAllProducts(requirements, callback);
    }, getAllProductsForMarketPlace: function(requirements, callback) {
        return requestAllProductsForMarketPlace(requirements, callback);
    }, getAllProductsForUser: function(requirements, callback) {
        return requestAllProductsForUser(requirements, callback);
    }, getSymbols: function(requirements, callback) {
        return requestSymbols(requirements, callback);
    }, Identify: function(user, callback) {
        return identifyUser(user, callback);
    }, InsertUser: function(user, callback) {
        return insertUser(user, callback);
    }, updateUser: function (requirements, callback) {
        return changeUser(requirements, callback);
    },getModels: function(requirements,callback){
        return requestMarketPlaceModels(requirements, callback);
    },getDatasets: function(requirements,callback){
        return requestMarketPlaceDatasets(requirements, callback);
    },getUserDatasets: function(requirements,callback){
        return requestUserDatasets(requirements, callback);
    },getMyProducts: function(requirements,username, callback){
        return requestMyProducts(requirements, username, callback);
    },createProductPerUser: function(requirements, product_id, user_id, callback){
        return insertProductPerUser(requirements, product_id, user_id, callback);
    },getAllUpdatesForModel: function(requirements, callback){
        return requestAllUpdatesForModel(requirements, callback);
    },getAllUpdatesForUser: function(requirements, callback){
        return requestAllUpdatesForUser(requirements, callback);
    },getModelForProductAndUser: function(requirements, callback){
        return requestModelForProductAndUser(requirements, callback);
    },getDatasetsForUser: function(requirements, callback){
        return requestsDatasetsForUser(requirements, callback);
    },getStatisticsForUpdate: function(requirements, callback){
        return requestStatisticsForUpdate(requirements, callback);
    },getInputsForUpdate: function(requirements, callback){
        return requestInputsFromId(requirements, callback);
    },getOutputsForUpdate: function(requirements, callback){
        return requestOutputsFromId(requirements, callback);
    },updateDatasetsData: function(requirements, callback){
        return changeDatasetData(requirements, callback);
    },getDataset: function(requirements, callback){
        return requestDataset(requirements, callback);
    },createNewUpdateStats: function(requirements, callback){
        return insertNewUpdateStats(requirements, callback);
    },getUpdateStatsId:  function(requirements, callback){
        return selectUpdateStatsId(requirements, callback);
    },createNewUpdateStructure:  function(requirements, callback){
        return insertUpdateStructure(requirements, callback);
    },getUpdateStructureId:  function(requirements, callback){
        return selectUpdateStructureId(requirements, callback);
    },createNewUpdateInputGroup:  function(requirements, callback){
        return insertUpdateInputGroup(requirements, callback);
    },getUpdateInputGroupId:  function(requirements, callback){
        return selectUpdateInputGroupId(requirements, callback);
    },createNewUpdateOutputGroup:  function(requirements, callback){
        return insertUpdateOutputGroup(requirements, callback);
    },getUpdateOutputGroupId:  function(requirements, callback){
        return selectUpdateOutputGroupId(requirements, callback);
    },createNewUpdateForecastSeries:  function(requirements, callback){
        return insertUpdateForecastSeries(requirements, callback);
    },getUpdateForecastSeries:  function(requirements, callback){
        return selectForecastSeriesId(requirements, callback);
    }, createNewUpdateForModel: function(requirements, callback){
        return insertNewUpdateForModel(requirements, callback);
    }, createNewProduct:function(requirements, callback){
        return insertProduct(requirements, callback);
    }, getLastProductByName:function(requirements, callback){
        return requestLastProductByName(requirements, callback)
    }, createNewDataset: function(requirements,callback){
        return insertDataset(requirements, callback);
    }, getdatasetByProductId: function(requirements, callback){
        return requestDatasetId(requirements, callback);
    }, createApiRecord: function(requirements, callback){
        return insertApiRegistry(requirements, callback);
    }, updateApiRecord: function(requirements, callback){
        return updateApiRegistry(requirements, callback);
    }, deleteApiRecord: function(requirements, callback){
        return deleteApiRegistry(requirements, callback);
    }, getApiRegisters: function(requirements, callback){
        return selectApiRegisters(requirements, callback);
    }, getApiRecordsByUserId: function (requirements, callback){
        return selectApiRecordsByUserId(requirements, callback);
    }, getModelClasses: function(requirements,callback){
        return requestModelClasses(requirements,callback);
    }, updateInputDataForUpdate: function(requirements,callback){
        return updateInputDataForModelUpdate(requirements,callback);
    }, updateOutputDataForUpdate: function(requirements,callback){
        return updateOutputDataForModelUpdate(requirements,callback);
    }, updateStructureDataForModelVersion: function(requirements, callback){
        return updateStructureDataForModel(requirements, callback);
    }, getApiRecordByKey: function (requirements, callback){
        return selectApiRecordsByKey(requirements, callback);
    }, getDatasetIdByUserAndName: function(requirements, callback){
        return selectDatasetIdByUserAndName(requirements, callback);
    }, getModelIdByUserAndClass: function(requirements, callback){
        return selectModelIdByUserAndClass(requirements, callback);
    }, getUpdateFromUserModelClass: function(requirements, callback){
        return selectUpdateFromUserModelClass(requirements, callback)
    }, getInputsFromId: function (requirements, callback){
        return requestInputsFromId(requirements, callback);
    }, getOutputsFromId: function (requirements, callback){
        return requestOutputsFromId(requirements, callback);
    }, getStructureFromId: function (requirements, callback){
        return selectStructureFromId(requirements, callback);
    }, updateForecastSeriesDataForModelVersion: function(requirements, callback){
        return updateForecastSeriesForModelVersion(requirements, callback);
    }, getUpdateForecastingByUpdateId: function(requirements, callback){
        return requestUpdateForecastingByUpdateId(requirements, callback)
    }, getUpdateByDate: function (requirements,callback){
        return requestUpdateByDate(requirements,callback);
    }, getModelClassesJoinProducts: function(requirements, callback){
        return requestModelClassesJoinProducts(requirements, callback);
    }, getModelClassesName: function (requirements, callback){
        return requestModelClassesName(requirements, callback);
    }, getModelsForUser: function(requirements, callback){
        return requestModelsForUser(requirements, callback);
    }, getNewProductId: function(requirements, callback){
        return requestNewProductId(requirements, callback);
    }, createModel: function(requirements, callback){
        return insertModel(requirements, callback);
    }, getAllUserProductsExternal: function(req,callback){
        return requestAllUserProductsExternal(req,callback);
    } 
}

 