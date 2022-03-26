const mongoose = require('mongoose')
const { model, Schema } = require("mongooose")

const welcomeSchema = new Schema({
    Guild: String,
    Channel: String,
    Message: String
})

module.exports = model("welcome", welcomeSchema)