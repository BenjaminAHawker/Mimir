import * as dotenv from 'dotenv';
import {Client} from 'discord.js';
dotenv.config()

const COMMAND_PREFIX = '$'

const client = new Client();
client.on('ready',()=>{
    console.log(`${client.user.tag} has logged in`)
});

client.on('message',(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith(COMMAND_PREFIX)){
        const [CMD_NAME,...args] = message.content
            .trim()
            .substring(COMMAND_PREFIX.length)
            .split(/\s+/)
    }
});

client.login(process.env.DISCORD_BOT_TOKEN)







