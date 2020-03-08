
const Sequelize = require('sequelize');
const env = require('../env');

// Connect with DB using Sequalize
module.exports = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT
});

// Testing DB connection
// db.authenticate().then((req, res) => {
//     console.log("DB connected successfully...");
// }).catch(err => {
//     console.log(err);
// });
