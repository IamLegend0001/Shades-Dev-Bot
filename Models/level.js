const mongoose = require('mongoose')

const level = new mongoose.Schema({
    user: { type: String, unique: true},
    GuildId: { type: String },
    xp: { type: String, default: 10}
})