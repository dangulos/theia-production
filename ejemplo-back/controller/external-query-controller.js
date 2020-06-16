var query = require('../queries/querycontroller');

exports.getAllUserProductsExternal = (req,res) =>{
    query.getAllUserProductsExternal({user_id: req.body.user_id},(err, data) => {
        return process(res, err, data)
    });
};

function process(res, err, result) {
    if (err)
        return res.status(400).json({ 'msg': err  });
    else if (result)
        return res.status(200).json({ result });
    return res.status(400).json({ 'msg': "empty query" });
}