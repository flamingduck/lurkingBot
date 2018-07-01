require('dotenv').config();
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    owner: process.env.OWNER,
    commandPrefix: process.env.prefix,
    disableEveryone: true
});﻿

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['random', 'random commands'],
        ['regular', 'simple commands'],
        ['admin', 'commands for admins']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'))
    ;


client.on('ready', () => {
    console.log('Logged in!');
    client.user.setActivity('§ is the prefix');
});

client.login(process.env.token);
