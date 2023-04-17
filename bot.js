const Discord = require('discord.js')
const client = new Discord.Client({ intents: 131071 })
const { botid, token } = require("./ayarlar.json")
const botOwnerID= '1097578371149467738'
require("./slash")(client)



client.on('message', msg => {
    if (msg.content === '!sil' && msg.author.id === botOwnerID){
        msg.channel.bulkDelete(25)
        .then(console.log)
        .catch(console.error);
    }
});

client.login("MTA5NzU3ODM3MTE0OTQ2NzczOA.GhQr5X.YRd7Ovu4HO-LiI4tv7Fy3HdDPB0X2fSCNTOWBU")