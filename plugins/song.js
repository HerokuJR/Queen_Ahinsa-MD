//------ *BY PINK VENOM OFC*----}

const {cmd , commands} = require('../command')
const fg =  require('api-dylux')
const yts = require('yt-search')





cmd({
    pattern: "yta2",
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Need a YouTube URL!*');

            const prog = await dlyta(q);

            await conn.sendMessage(from, { audio: { url: prog.dl_link }, mimetype: 'audio/mpeg' }, { quoted: mek });
        } catch (e) {
            console.log('First attempt failed:', e);

            try {
                const prog = await dlyta(q);

            await conn.sendMessage(from, { audio: { url: prog.dl_link }, mimetype: 'audio/mpeg' }, { quoted: mek });
            } catch (error) {
                console.log('Second attempt failed:', error);
                await reply('*Failed to process the request. Please try again later!*');
            }
        }
    }
)
