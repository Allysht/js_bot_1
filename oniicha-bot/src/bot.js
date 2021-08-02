require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const API = require('anime-images-api')
const images_api = new API() 

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

//bot commands

client.on('message', (message) => {
    if (message.content === "$randpick") {
        images_api.sfw.hug().then(response => {
            message.channel.send(response.img);
        });
    }
});

client.login(process.env.ONIICHA_BOT_TOKEN);