const mongoose = require('mongoose')
const config = require('../config.json')

module.exports = async (client) => {
    const { mongooseConnectionString } = require('../config.json')
    if (!mongooseConnectionString) return;

    mongoose.connect(mongooseConnectionString).then(() => console.log(`Connected to Database: | Mongoose | Version -  ${mongoose.version}`));
}
