var express = require('express');
var app = express()
var bodyParser = require('body-parser');
const discord = require('discord.js');
const ready = require("./handlers/ready");
const message = require("./handlers/message");
const config = require("./config.json");
const utils = require("./global/utils");
var sqlite3 = require("sqlite3");
const bot = new discord.Client();
app.use(bodyParser.json());
const fs = require("fs");
require("./global/functions.js")(bot, utils, config);

// Makes the database
var db = new sqlite3.Database("./database.db");

// Gets Everything Ready
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
ready.ready(bot);
message.message(bot, utils, config, discord);

// Port Listening
var listener = app.listen(`3000`, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});