const Pool  = require('pg').Pool;

function getPool (){
    return new Pool({
        user: 'esgqpwek',
        host: 'drona.db.elephantsql.com',
        database: 'esgqpwek',
        password: 'bgPnMsCtVMjFIXBLn6j5wSzeMyCHWybT',
        port: 5432,
        ssl: true,
        max: 4, // max number of clients in the pool
        idleTimeoutMillis: 30000
    });
}

function getConnectionObj(){
    return {
        user: 'esgqpwek',
        host: 'drona.db.elephantsql.com',
        database: 'esgqpwek',
        password: 'bgPnMsCtVMjFIXBLn6j5wSzeMyCHWybT',
        port: 5432
    }
}

module.exports = {
    jwtSecret: 'annuit-coeptis',
    dbp: 'postgres://esgqpwek:bgPnMsCtVMjFIXBLn6j5wSzeMyCHWybT@drona.db.elephantsql.com:5432/esgqpwek',
    dbm: 'mongodb://localhost/ionict-jwt',
    _dbpos: function() { return getConnectionObj(); },
    dbpos: function() { return getPool(); },
    _db: function() { return getPool(); }
};