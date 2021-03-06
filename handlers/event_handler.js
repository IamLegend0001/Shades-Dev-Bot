const { Client } = require("discord.js");
const fs = require("fs");
/**
 *
 * @param {Client} client
 */

module.exports = (client) => {
  try {
    fs.readdirSync("./events/").forEach((file) => {
      const events = fs
        .readdirSync("./events/")
        .filter((file) => file.endsWith(".js"));
      for (let file of events) {
        let pull = require(`../events/${file}`);
        if (pull) {
          client.events.set(file, pull);
        }
      }
    });
    console.log(`${client.events.size} Events Were Loaded`);
  } catch (e) {
    console.log(e);
  }
};
