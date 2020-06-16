const conf = require('../config/config');
var Pg = require('pg');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    }, accountNumber: {
        type: String,
        unique: true,
        required: true
    }, username: {
        type: String,
        unique: true,
        required: true
    }, password: {
        type: String,
        required: true,
        trim: true
    }
});

UserSchema.pre('save', function(next) {
    var user = this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) return cb(err);
        cb(null, isMatch);
    });
}

module.exports = mongoose.model('User',UserSchema);