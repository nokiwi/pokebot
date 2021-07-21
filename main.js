const Discord = require('discord.js');
const auth = require('./auth.json');
const {prefix, token} = require('./auth.json');
const client = new Discord.Client();

/*
client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    client.user.setActivity("Listening for input...");
});
*/

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { return }
    
    processMessage(receivedMessage);
});

async function processMessage(receivedMessage) {
    console.log(receivedMessage.content + " received");

    if(receivedMessage.content == "snap crackle pop") {
        receivedMessage.reply("POPOPOPOP");
    }
    else if(receivedMessage.content == "jetay") {
        receivedMessage.reply("hi my name's jetay and i'm a rock paper scissors GOD");
    }
    else if(receivedMessage.content == "eeyarn") {
        receivedMessage.reply("BEEPSHOP");
    }
}

client.login(token);