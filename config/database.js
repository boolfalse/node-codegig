
const Sequelize = require('sequelize');
const env = require('../env');

// Connect with DB using Sequelize
module.exports = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,

    //ss https://stackoverflow.com/a/40044062/7574023
    define: {
        createdAt: 'createdat',
        updatedAt: 'updatedat'
    },
    //ss https://stackoverflow.com/a/53420409/7574023
    // timestamps: false
});
