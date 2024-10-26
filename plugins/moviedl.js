const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')
const fg =  require('sinhalasub.lk')


cmd({
    pattern: "movie",
    desc: "download movie",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me a url or tittle")
const search = await googlesearch(q)
const data = search.videos[0];
const url  = data.url

let desc = ` 
  
    ╭════ 🅼🅾🆅🅸🅴 ════─❃
┃▢╭─────────────┈
┃▢│ tittle: ${data.tittle}
┃▢│ genres: ${data.genres} 
┃▢│ time: ${data.time}
┃▢| date: ${data.date}     
┃▢│ country: ${data.country}
┃▢│ imdb: ${data.imdb}
┃▢╰─────────────┈
╰══════════════════─❃


   𝑷𝑶𝑾𝑬𝑫 𝑩𝒀 𝑫𝑰𝑳𝑰𝑺𝑯𝑨

 `


await conn.sendMessage(from,{image:{url: data. thumbnail},caption:desc},{quoted:mek});

/////////////----------------

let down = await fg.movie(url)
let downloadUrl = down.dl_url
    
//----------------------------- 
    
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"🅼🅾🆅🅸🅴"},{quoted:mek})

    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
