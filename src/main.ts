import * as dotenv from 'dotenv';
import {ChannelManager, Client} from 'discord.js';
dotenv.config()

const main = async() => {

    type available_commands = 'help' | 'info' 
    const validCommands:available_commands[] = ["help","info"]

    const COMMAND_PREFIX = '$'

    const client = new Client();
    
    client.on('ready',()=>{
        console.log(`${client.user.tag} has logged in`)
        client.user.setActivity('$ Commands',{type:"WATCHING"})
    });


    
    client.on('message',(message)=>{
        if(message.author.bot) return;
        if(message.content.startsWith(COMMAND_PREFIX)){
            const [CMD_NAME,...args]:any = message.content
                .trim()
                .substring(COMMAND_PREFIX.length)
                .split(/\s+/)
            if(validCommands.includes(CMD_NAME.toLowerCase())){
                console.log('Command Valid')
            }else{
                console.log("Invalid Command")
            }
        }
        message.mentions.users.forEach((i)=>{
            if(i.id === client.user.id){
                // message.reply("Hello")
            }
        })
    });


    client.login(process.env.DISCORD_BOT_TOKEN)

};


main()
.catch((err)=>{
    console.log(err)
})