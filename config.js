const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "A-S-W-I-N-S-P-A-R-K-Y:f4babd886f8d3c5548a5f4fd041f4d68",
MONGODB: process.env.MONGODB || "mongodb://mongo:xAspwrXVpAyKRvrWGnucEnWyLTihRwsi@junction.proxy.rlwy.net:11262",

};
