require('dotenv').config();

router.get("/emailfetch", authCheck, async (req, res, next) => {
    try {
    //listing messages in users mailbox 
      let emailFetch = await gmaiLHelper.getEmails(req.user._doc.profile_id , '/messages', req.user.accessToken)
      emailFetch = emailFetch.data
      res.send(emailFetch)
    } catch (err) {
      next(err);
    }
  })

const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

//bot commands

client.on('message', (message) => {
    if (message.content === "$randpick") {
        message.channel.send("Here's your pick", {files: ["https://sweethentai.com/uploads/heantaihaven_75759_Thighs_hentai.jpg"]});
    }
});

client.login(process.env.ONIICHA_BOT_TOKEN);