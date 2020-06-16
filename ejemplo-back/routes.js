var express = require('express');
    routes = express.Router();
var userController = require('./controller/user-controller');
var productController = require('./controller/product-controller');
var datasetcontroller = require('./controller/dataset-controller');
var externalController = require('./controller/external-query-controller');
var passport = require('passport');

routes.get('/', (req, res)=>{
    return res.send('hello api server talking');
});

//product-controller
//get
routes.get('/getAllProducts',passport.authenticate('jwt', { session: false }), productController.getAllProducts);//unused
routes.get('/getAllProductsForMarketPlace', productController.getAllProductsForMarketPlace);//used
routes.get('/getModels',passport.authenticate('jwt', { session: false }), productController.getModels);//marketplace service but unused
routes.get('/getDatasets',passport.authenticate('jwt', { session: false }), productController.getDatasets);//marketplace service but unused
routes.get('/getMyProducts',passport.authenticate('jwt', { session: false }), productController.getMyProducts);//unused since get cannot have a body
routes.get('/getModelClasses',passport.authenticate('jwt', { session: false }), productController.getModelClasses);//used
routes.get('/getModelClassesName',passport.authenticate('jwt', { session: false }), productController.getModelClassesName);//used

//post
routes.post('/getNewUpdateStructureId',passport.authenticate('jwt', { session: false }), productController.getNewUpdateStructureId);
routes.post('/getNewUpdateInputGroupId',passport.authenticate('jwt', { session: false }), productController.getNewUpdateInputGroupId);
routes.post('/getNewUpdateOutputGroupId',passport.authenticate('jwt', { session: false }), productController.getNewUpdateOutputGroupId);
routes.post('/getNewUpdateForecastSeriesId',passport.authenticate('jwt', { session: false }), productController.getNewUpdateForecastSeriesId);
routes.post('/getNewUpdateStatsId',passport.authenticate('jwt', { session: false }), productController.getNewUpdateStatsId);
//^Routes for creating new model_update
routes.post('/createNewUpdateForModel',passport.authenticate('jwt', { session: false }), productController.createNewUpdateForModel);//used and updated
routes.post('/createProductPerUser',passport.authenticate('jwt', { session: false }), productController.createProductPerUser);//used and updated
routes.post('/getAllProductsForUser',passport.authenticate('jwt', { session: false }), productController.getAllProductsForUser);//used and updated
routes.post('/getModelsForUser',passport.authenticate('jwt', { session: false }), productController.getModelsForUser);//used and updated
routes.post('/getAllUpdatesForModel',passport.authenticate('jwt', { session: false }), productController.getAllUpdatesForModel);//used and updated
routes.post('/getAllUpdatesForUser',passport.authenticate('jwt', { session: false }), productController.getAllUpdatesForUser);//unused
routes.post('/getModelFromProduct',passport.authenticate('jwt', { session: false }), productController.getModelFromProduct);//used and updated
routes.post('/getStatisticsForUpdate',passport.authenticate('jwt', { session: false }), productController.getStatisticsForUpdate);//used and updated
routes.post('/getDatasetsForUser',passport.authenticate('jwt', { session: false }), productController.getDatasetsForUser);//used and updated
routes.post('/getInputsForUpdate', productController.getInputsForUpdate);//used and updated
routes.post('/getOutputsForUpdate',productController.getOutputsForUpdate);//used and updated
routes.post('/getDataset', productController.getDataset);//used and updated
routes.post('/createNewProduct',passport.authenticate('jwt', { session: false }),productController.createNewProduct);//used and updated
routes.post('/createNewDataset',passport.authenticate('jwt', { session: false }),productController.createNewDataset);//used and updated
routes.post('/updateInputDataForUpdate',passport.authenticate('jwt', { session: false }),productController.updateInputDataForUpdate);//used and updated
routes.post('/updateOutputDataForUpdate',passport.authenticate('jwt', { session: false }),productController.updateOutputDataForUpdate);//used and updated
routes.post('/updateStructureDataForModelVersion',passport.authenticate('jwt', { session: false }),productController.updateStructureDataForModelVersion);//used and updated
routes.post('/updateForecastSeriesDataForModelVersion',passport.authenticate('jwt', { session: false }),productController.updateForecastSeriesDataForModelVersion);//used and updated
routes.post('/getUpdateForecastingByUpdateId',productController.getUpdateForecastingByUpdateId)//used and updated
//routes.post('/getUpdateForecastingByUpdateId',passport.authenticate('jwt', { session: false }),productController.getUpdateForecastingByUpdateId)//used and updated
//routes.post('/getPredictions',passport.authenticate('jwt', { session: false }),productController.getPredictions);
routes.post('/getPredictions', productController.getPredictions);
//routes.post('/getPredictions',passport.authenticate('jwt', { session: false }),productController.getPredictions);
routes.post('/getModelClassesJoinProducts',passport.authenticate('jwt', { session: false }),productController.getModelClassesJoinProducts);//used and updated
routes.post('/createProduct',passport.authenticate('jwt', { session: false }),productController.createProduct);
routes.post('/createNewModel',passport.authenticate('jwt', { session: false }),productController.createNewModel);



//user-controller
//post
//getApiRecordsByUser
//no need for update
routes.post('/getApiRecordsByUser', passport.authenticate('jwt', { session: false }),userController.getApiRecordsByUser);
routes.post('/createApiRecord',passport.authenticate('jwt', { session: false }), userController.createApiRecord);
routes.post('/updateApiRecord',passport.authenticate('jwt', { session: false }), userController.updateApiRecord);
routes.post('/deleteApiRecord', passport.authenticate('jwt', { session: false }),userController.deleteApiRecord);
routes.post('/createSymbol', passport.authenticate('jwt', { session: false }),  userController.createSymbol);
routes.post('/deleteSymbol', passport.authenticate('jwt', { session: false }),  userController.deleteSymbol);
routes.post('/getSymbols',passport.authenticate('jwt', { session: false }),  userController.getSymbols);
routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);

//dataset-controller
//put
routes.post('/updateDatasetData', passport.authenticate('jwt', { session: false }),datasetcontroller.updateDatasetsData);


//external-query-controller
routes.get('/getAllUserProductsExternal', externalController.getAllUserProductsExternal);

module.exports = routes;