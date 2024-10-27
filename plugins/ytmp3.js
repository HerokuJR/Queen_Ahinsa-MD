// MEDIAFIRE DOWNLOAD COMMAND

const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://api-pink-venom.vercel.app/api/ytmp3?url=https://youtube.com/watch?v=05dpQG1FcfU' // API LINK ( DO NOT CHANGE THIS!! )


cmd({
    pattern: "audio",
    alias: ["audio","mp3,yta"],
    desc: "audio",
    category: "audio download",
    use: '.audio < audio url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me mediafire url");
  if(!q.includes('youtube.com')) return await reply("This url is invalid");
  
const mfire = await fetchJson(`${apilink}/download/audio?url=${q}`);
  
const msg = `
           🔥 *AUDIO DOWNLOADER* 🔥

  
    ╭════ 🅼🆄🆂🅸🅲 ════─❃
┃▢╭─────────────┈
┃▢│ tittle: ${data.tittle}
┃▢│ despcription: ${data.description} 
┃▢│ time: ${data.time}
┃▢| ago: ${data.ago}     
┃▢│ views: ${data.views}
┃▢│ like: ${data.like}
┃▢╰─────────────┈
╰══════════════════─❃

`
  
// SEND DETAILS

await conn.sendMessage(from,{image:{url: data. thumbnail},caption:desc},{quoted:mek});

// SEND FILE

await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"𝑨𝑼𝑫𝑰𝑶 🎵"},{quoted:mek})


} catch (e) {
console.log(e)
reply('This url type is not working !!')
}
})

