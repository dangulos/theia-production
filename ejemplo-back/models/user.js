var queryMaker = require('./../queries/querycontroller');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');

class UserP {

    constructor(bodyRequest) {
        this.email = bodyRequest.email || "";
        this.key = this.getUniqueId(64);
        this.username = bodyRequest.username;
        this.password = bodyRequest.password;
        this.id_rol = (bodyRequest.id_rol == undefined || bodyRequest.id_rol == null ) ? 2 : bodyRequest.id_rol;
        this.job = bodyRequest.job || "";
        this.enterprise = bodyRequest.enterprise || "";
        this.name = bodyRequest.name || "";
    }

    set email(e) {
        this._email = e.toLowerCase();
    }
    
    get email() {
        return this._email;
    }

    set enterprise(ent) {
        this._enterprise = ent.toUpperCase();
    }
    
    get enterprise() {
        return this._enterprise;
    }

    set username(usr) {
        this._username = usr.toLowerCase();
    }
    
    get username() {
        return this._username;
    }

    set password(pass) {
        this._password = pass;
    }
    
    get password() {
        return this._password;
    }

    set id_rol(id_rol) {
        this._id_rol = id_rol;
    }
    
    get id_rol() {
        return this._id_rol;
    }

    getUniqueId(len){
        return crypto
            .randomBytes(Math.ceil((len * 3) / 4))
            .toString('base64') // convert to base64 format
            .slice(0, len) // return required number of characters
            .replace(/\+/g, '0') // replace '+' with '0'
            .replace(/\//g, '0') // replace '/' with '0'
    }

    comparePassword(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
            if(err) return cb(err);
            cb(null, isMatch);
        });
    }

    preSave(callback) {
        var user = this;
        bcrypt.genSalt(10, function(err_, salt) {
            if (err_) {
                callback(err_);
                return err_;
            } else {
                bcrypt.hash(user.password, salt, function(err__, hash) {
                    if(err__) {
                        callback(err__);
                        return err__;
                    }
                    user.password = hash;
                    callback(err__);
                    return err__;
                });
            }
        });     
    }

    saveUser(callback){
        this.preSave(e => {
            if (e) {
                console.log("Error in hash procedure, impossible to register user ", e);
                callback(e, "Error in hash procedure, impossible to register user ");
            } else {
                let userResponse = this.generateStructure();
                queryMaker.InsertUser(userResponse, (err, res) => {
                    if (err) callback(err, res);
                    else callback(err, userResponse);
                }); 
            }
        });
    }

    generateStructure(){
        return {email: this.email, id_rol:this.id_rol, key: this.key, name:this.name, enterprise: this.enterprise, username: this.username, password: this.password, job: this.job };
    }
}

function searchUser(user, cb){
    queryMaker.Find(user, (e, res)=>{
        if (!res) cb(e, null);
        else if(res.length>0) cb(e, res[0]);
        else cb(e, null);
    });
}

function userExists(user, cb){
    queryMaker.Find(user, (e, res)=>{
        cb(e, res.length>0);
    });
}

function identifyUser(user, cb){
    queryMaker.Identify(user, (e, res) => {
        if (!res || res == null || res == undefined) cb(e, null);
        else if (res.length>0) cb(e, res[0]);
        else cb(e, null);
    });
}

module.exports = {
    findUser: function(userName, callback) {
        userExists(userName, callback);
    }, getUser: function(userName, callback) {
        searchUser(userName, callback);
    }, identifyU: function(username, callback) {
        identifyUser(username, callback);
    }, createUser: function(bodRequest) {
        return new UserP(bodRequest);
    }
}