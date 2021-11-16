const Discord = require('discord.js');
const auth = require('./auth.json');
const {prefix, token} = require('./auth.json');
const client = new Discord.Client();

// import fs module
var fs = require("fs");
var pokemon = fs.readFileSync("./pokemon.txt", 'utf-8').split('\n');
var images = fs.readFileSync("./pokemonpics.txt", 'utf-8').split('\n');

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    //client.user.setActivity("Ready!");
});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { return }
    
    catchPokemon(receivedMessage);

    //processMessage(receivedMessage);
});

async function catchPokemon(receivedMessage) {
    console.log(receivedMessage.content + " received");
    //receivedMessage.reply("you caught a " + pokemon[Math.floor(Math.random() * 152)]);
    receivedMessage.reply("you caught a " + pokemon[Math.floor(Math.random() * 152)], {files: ["https://c.tenor.com/_B4QaT_C3WsAAAAM/bulbasaur-pokemon.gif"]});
}

/*
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
*/

client.login(token);