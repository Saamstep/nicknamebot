exports.run = (client, message, args) => {

  const error = require('../modules/errorMod.js');
  const config = require('../config.json');
  let guild = message.guild
  let star = message.guild.roles.find('name', `*`);

  if (message.channel.id !== config.nickChannelid) {
    return error('You cannot do that here!', message);
  } else {
    let name = args[0];
    message.guild.fetchMember(message.author)
      .then(member => {
        member.setNickname(message.author.username + " (" + name + ")");
      }).catch(err => console.error);

  }




  // message.guild.membe  rs.get(message.author.id).setNickname(name).catch(err => console.error);

  message.member.addRole(star).then(setTimeout(function () { message.delete(0) }, 3000)).catch(err => console.error);

};

exports.description = "Set your real name when you join for the first time."
