const Discord = require('discord.js');
const auth = require('./auth.json');
const {prefix, token} = require('./auth.json');
const client = new Discord.Client();

// import fs module
var fs = require("fs");
fs.readFile("./pokemon.txt", function(text) {
    var pokemon = fs.readFileSync("./pokemon.txt").toString('utf-8');
});

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    //client.user.setActivity("Ready!");
});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { return }
    
    catchPokemon(receivedMessage);

    processMessage(receivedMessage);
});

async function catchPokemon(receivedMessage) {
    console.log()
    receivedMessage.reply("you caught a " + pokemon[Math.floor.random() * pokemon.length]);
}

async function processMessage(receivedMessage) {
    console.log(receivedMessage.content + " received");

    if(receivedMessage.content == "hello") {
        receivedMessage.reply("hi" + receivedMessage.author);
    }
    else if(receivedMessage.content == "jetay") {
        receivedMessage.reply("hi my name's jetay and i'm a rock paper scissors GOD");
    }
    else if(receivedMessage.content == "eeyarn") {
        receivedMessage.reply("BEEPSHOP");
    }
}

client.login(token);