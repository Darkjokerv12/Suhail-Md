const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_04_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4LFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIncwemlJQkM5NTVuSklLSzhGelhSbERRWmt6MzJETWsySUNreVhUNFNhZlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFLLWpkUjI2U0MyY2N2QWo3N05UZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjI0NTY1YTAtOTI5ZS00MzI0LTk2MmUtYTVkMjQwMzllMzY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMjQ1LFxuICAgICAgMTk1LFxuICAgICAgMjE0LFxuICAgICAgMjEyLFxuICAgICAgMzgsXG4gICAgICAyMzgsXG4gICAgICAxNTcsXG4gICAgICA0MyxcbiAgICAgIDk5LFxuICAgICAgMTk4LFxuICAgICAgNTcsXG4gICAgICA2MCxcbiAgICAgIDE0NyxcbiAgICAgIDk0LFxuICAgICAgMTk0LFxuICAgICAgMjMxLFxuICAgICAgMTgwLFxuICAgICAgMTUyLFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAyNDIsXG4gICAgICAxNzgsXG4gICAgICA4NyxcbiAgICAgIDgwLFxuICAgICAgNzgsXG4gICAgICAzOCxcbiAgICAgIDIyMCxcbiAgICAgIDE1OCxcbiAgICAgIDEzMyxcbiAgICAgIDIzNSxcbiAgICAgIDMyLFxuICAgICAgMzgsXG4gICAgICAyMTIsXG4gICAgICAyMjMsXG4gICAgICAyMDMsXG4gICAgICAyMzAsXG4gICAgICA5MCxcbiAgICAgIDE4NCxcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3ODVURVZGNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMzM3NDU5MDkwNTQ6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMDYzNzE2NzczOTI4OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pdjU1QUhFUFMrdGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1UyZk4yd2JKcmJFUnJEQmhZT2NJSUFnN2FmYlVKcXIrdWhTdVdjTGhSaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmQUpkcFVEOHNVTWhzMDB5M295YkViYUI5RTJYc3JwR0FQOStqRi9zTTlsK0VLVVZoTm82WFkzOGFjNmpsVWxLU2wwSWhRZ05KTktxSGJtT3MzVjRCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3d2E1YzhlZUpjSExVQSsyZk1kMzUydFZGOVNZVHN4NlBjRzRQanVjdGozc2Y0R3c2SWt4NWI5TndrUGFkRDBhR2RacFBueUt1NHQxS2xYTCtpSkxpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIzMzc0NTkwOTA1NDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU0MTA0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB0clwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHRyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiemFvRVZvMFl5UTdWTUUydGFlTzVaYlgzWTJXdjU1L0RWZGo1QkN5QWJXWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE0Mjk2Mjc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
