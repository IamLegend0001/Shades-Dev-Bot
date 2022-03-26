const mongoose = require('mongoose')


const role = new mongoose.Schema({
    gid: { type: String },
    lvlrole: { type: Array },
})

module.exports = mongoose.model('Simply-XP-LevelRole', role)