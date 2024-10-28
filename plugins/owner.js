const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const config = require('../config')

cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let owner = ` 
--------------------------------
*HEAR IS BOT OWNER INFO*
--------------------------------
*NAME:-* *Queen_Ahinsa-MD User*
________________________________
*BOT CATACORY*:- *All Round*
________________________________
*REPO*:-*https://github.com/HerokuSL/Queen_Ahinsa-MD/tree/main*
--------------------------------
*CONTACT*:-*+94775713391*
--------------------------------
>WHATSAPP BOT BY DILISHA
--------------------------------
`
await conn.sendMessage(from, { text: owner ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "Queen_Ahinsa-MD",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SILENTLOVER432',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "0742346814 I'M MSG YOU FROM OWNER ADS" ,
thumbnailUrl: "https://i.ibb.co/SR76mBh/Pu3-ZYHBS5139.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
