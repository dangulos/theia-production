var User = require('../models/userMongo');
var UserP = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var query = require('../queries/querycontroller');

function createToken(user) {
    return jwt.sign({
        key: user.key,
        username: user.username,
        role_id: user.role_id,
        email: user.emal,
        account_id: user.id_account,
        user_id: user.user_id
    }, config.jwtSecret, {
        expiresIn: 6000
    });
}

exports.registerUser = (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.username || !req.body.enterprise)
        return res.status(400).json({ 'msg': 'register empty', 'body': req.body });

    UserP.findUser({username: req.body.username}, (err, user) => {
        if (err)
            return res.status(400).json({ 'msg': err });
        if (user)
            return res.status(400).json({ 'msg': 'The user already exists' });
        let newUser = UserP.createUser(req.body);
        newUser.saveUser((err, user) => {
            if (err)
                return res.status(400).json({ 'msg': 'Error found saving user\n ' + 'Error\n' + JSON.stringify(err) });
            return res.status(201).json(user);
        });
    });
};

exports.loginUser = (req, res) => {
    if (!req.body.password || !req.body.username)
        return res.status(400).json({ 'msg': 'login incomplete' });

    UserP.getUser({ username: req.body.username }, (err, user) => {
        console.log("got user", user, err);
        if (err)
            return res.status(400).json({ 'msg': err });
        if (!user)
            return res.status(400).json({ 'msg': 'The user does not exists' });
        
        let actualUser = UserP.createUser(user);
        actualUser.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err && req.body.username == actualUser.username)
                return res.status(200).json({ token: createToken(user) });
            return res.status(400).json({ 'msg': 'Email or password incorrect' });
        });
    });
};

exports.createSymbol = (req, res) => {
    query.createSymbol({
        symbol: req.body.symbol,
    }, (err, result) => {
        return process(res, err, result);
    });
};

exports.deleteSymbol = (req, res) => {
    query.deleteSymbol({
        symbolId: req.body.symbolId
    }, (err, result) => {
        return process(res, err, result);
    });
};

exports.getSymbols = (req, res) => {
    query.getSymbols({}, (err, result) => {
        return process(res, err, result);
    })
}

exports.saveApiRegistry = (req, res) =>{
    query.saveApiRegistry(req.body.registry, (err, result)=>{
        return process(res, err, result);
    })
}

exports.getApiRecordsByUser = (req, res) =>{
    query.getApiRecordsByUserId({user_id: req.body.user_id}, (err, result)=>{
        return process(res, err, result);
    })
}

exports.createApiRecord = (req, res) =>{
    query.createApiRecord({user_id: req.body.user_id, key: req.body.key, domain: req.body.domain}, (err, result)=>{
        return process(res, err, result);
    })
}

exports.updateApiRecord = (req, res) =>{
    query.updateApiRecord({user_id: req.body.user_id, key: req.body.key, domain: req.body.domain, api_registry_id: req.body.api_registry_id}, (err, result)=>{
        return process(res, err, result);
    })
}

exports.deleteApiRecord = (req, res) =>{
    query.deleteApiRecord({user_id: req.body.user_id, api_registry_id: req.body.api_registry_id}, (err, result)=>{
        return process(res, err, result);
    })
}


function process(res, err, result) {
    if (err)
        return res.status(400).json({'msg': err });
    else if (result)
        return res.status(200).json({ result });
    return res.status(400).json({ 'msg': "empty query" });
}