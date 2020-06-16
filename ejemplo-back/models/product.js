var queryMaker = require('./../queries/querycontroller');

class ProductP {
    constructor(bodyRequest) {

        this.name = bodyRequest.name || "";
        this.description = bodyRequest.description || "";
        this.explanation = bodyRequest.explanation || "";

        /*
        this.email = bodyRequest.email || "";
        this.key = this.getUniqueId(64);
        this.username = bodyRequest.username;
        this.password = bodyRequest.password;
        this.id_rol = (bodyRequest.id_rol == undefined || bodyRequest.id_rol == null ) ? 2 : bodyRequest.id_rol;
        this.job = bodyRequest.job || "";
        this.enterprise = bodyRequest.enterprise || "";
        this.name = bodyRequest.name || "";
        */
    }
}

function getAllProducts(cb){
    queryMaker.getAllProducts((e,res) =>{
        if (!res) cb(e, null);
        else if(res.length>0) cb(e, res);
        else cb(e, null);
    });
}

module.exports = {
    getAllProducts: function(callback){
        getAllProducts(callback);
    }
};