var ProductP = require('../models/product');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var query = require('../queries/querycontroller');

exports.updateDatasetsData = (req,res) =>{
    query.updateDatasetsData({
        data: JSON.stringify(req.body.data),
        product_id: req.body.product_id
    },(err,data)=>{
        return process(res, err, data)
    })
}

function process(res, err, result) {
    if (err)
        return res.status(400).json({ 'msg': err  });
    else if (result)
        return res.status(200).json({ result });
    return res.status(400).json({ 'msg': "empty query" });
}