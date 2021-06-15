const Discord = require('discord.js');
const { Client, MessageAttachment, Message } = require('discord.js');
const bot = new Discord.Client();



const PREFIX = 'v!';


//const channel = client.channels.find('roleplay-off-topic', channelName)
//channel.send(message)

var version = 'Version 1.8.71 [BETA]';
var pass;
var int, key = 0;
/*
0 = allows herb chains
1 = herb, used by Gabe
2 = breaks herb chains
*/
var boolean, war = false;
var boolean, rpnotif = true;
var pingmes;
olds = 129;
deds = 485;
var trail = 0;
var strail = 0;
var fruits = ["🍎", "🍐", "🍊", "🍋", "🍇", "🍓", "🍒"];
var callids = ["636573475993288734", "732805819313160283", "634821648385572883", "640725111397285888", "643100072988639242"];
var callA;
var callB;
var callAmes;
var callBmes;
var boolean, callkey = false;
var insults = ["lil' shit", "fetus reject", "hecking meatloaf inhaler", "hellspawn of a bitch", "illiterate fuck", "grandma upskirter", "fat piece o shit lookin ass cunt", "'ugly bastard' hentai tagger", "slut", "fucking boomer", "retard liberal", "gay furry", "Boku no Pico streamer"];
var nonfacts = ["The Ultimate Show was waaaaaaaay better than the Shadow Queen fight theme.", "911 might have possibly been an inside job. I mean, it all lined up since there were no memes during the September period.", "Singing Despacito in a family gathering implies that you want to fuck your sister.", "Being a real grown up isn't cooking a fancy dinner, it's having a clean kitchen when you go to bed after cooking a fancy dinner.", "The Simpsons has been on the air for so long, that Bart, Lisa and Maggie have been gen x'ers, millennials, AND gen z'ers.", "The idea of sex is oftentimes more alluring than sex itself.", "Seeing your password after accidentally typing it into the username bar kind of feels like accidentally seeing someone naked.", "Girls are so used to compliments that insults stick out to them. Guys are so used to insults that compliments stick out to them.", "With the advent of grocery delivery services, it is now possible for a pizza to be both delivery AND DiGiorno."];
var questionchannels = ["636573475993288734", "635683701987999804", "634821648385572883", "640725111397285888", "643100072988639242", "353324382208131073", "607676160234618889"];
var questionmessage, answermessage, QA, AQ, QQ = false;
var pinarr = [];
var pined;
const fs = require("fs");
//const ytdl = require("ytdl-core");
bot.afile = require ("./afile.json");
const BotID = '634502800872833033';
var word1 = ["Kir b", "TruthTomato", "Name", "Dru", "Irri", "Poochy", "Mario", "Luigi", "Reni", "Cain", "Sayori", "Ghost", "Yuri", "Knux", "Y'all", "Sonic", "Minecraft", "Ellie", "Sushi", "Izzle", "Moon", "Obama", "An undying passion for hentai is why Name", "Gabe", "The mastermind named Irri", "Your wife", "Dru is laughing because Izzle", "It turns out that Cain", "Unfortunate news, Kevin", "I've come to make an announcement. Moon", "After performing an Animal Crossing 100% speedrun, Ellie", "My waifu", "You can't attend the Smash tourney because Knux", "ARE YOU OK? Well you won't be now because Ghost", "Terry", "What's that noise? Oh. Snoop", "Everytime I close my eyes, Jet", "Shrek", "Call me a liar, but Jimbo", "This disgraceful bitch", "A simp", "I can't believe that Kir b", "Hold the phone, Snoop", "You don't have time to defeat me because Reni", "The fuck, Korbs"];
var word2 = ["is", "is gonna be", "is about to be", "is thinking of", "wants to be", "is officially", "will be"];
var word3 = ["hecking", "fucking", "playing", "imitating", "buying", "promoting", "sponsoring", "hanging out with", "having a crush on", "fighting", "smashing", "buying a Mario Amiibo for", "reporting", "warning Irri about", "banning", "dying for", "taking a shower with"];
var word4 = ["h", "you", "Kir b", "TruthTomato", "the big iron on Truth's hip", "Moonlite, the pussy destroyer", "Raid Shadow Legends", "Name", "Dru", "Irri", "Poochy", "Jet", "Mario", "Luigi", "Reni", "Obama", "free coochie", "the 15% discount from GEICO", "some gamer", "an e-girl...the horny shit.", "the man in Lego City", "Cheems", "some simp called Dru", "both Izzle and Moon", "Cain", "Sayori", "Ghost", "Yuri", "Knux", "Y'all", "Sonic", "Minecraft", "me", "gay", "something inappropriate", "Spider-Man", "here", "Celeste", "a hat in time", "a perv", "Squidward", "communism", "Ellie", "Sushi", "Izzle", "Moon", "Moon's oddly advertised dick", "Ellie's will to be a god", "Dru, but not really", "Izzle, and Gabe agrees", "Virus, but Virus doesn't care", "Dys, but thank god he's gone", "Earthbound", "Gabe, and he hates you for that", "Monika, but she refuses", "Monika, who sang a song for them", "Nutella, but that's gay", "a gay guy", "a freaking bag", "Generic", "Jet, but she'll most likely sue you before it happens", "Name, but that's a crime", "Dru, but [sexual joke here]", "Barry...wait. Who's Barry?", "a loli", "Snoop, who screams during the event", "Arrowsden, but it didnt work", "Link, the princess", "Gabe, but he loves them too much for that to happen", "Irri, but please, buy Mother 3", "your reality", "the n word", "Vessel, but why would that happen", "us for soup", "TwoSoup", "Reni, but I don't recommend it"];
var choicemes = ["I pick ", "Gonna go with ", "I'll go with ","Definitely, ","I'll personally go with "]
var fighter1, fighter2;
var fighter1hp = 100, fighter2hp = 100;
var isf1turn = false, battle = false;
var bab = 0;
var vchannel = "0";
var wisequouts = ["*I'm outta here!* -Sonic, https://i.ytimg.com/vi/9Sj-NByEA0E/hqdefault.jpg ", "*I've done nothing but teleport bread for three days* - Soldier \n https://carboncostume.com/wordpress/wp-content/uploads/2019/10/tf2-soldier-1.jpg", "*And from that day forward, any time a bunch of animals are together in one place it's called a 'zoo'!*\n…***Unless it's a farm!*** - Soldier \n https://cdn.mos.cms.futurecdn.net/yzhLqcUrF7tiAAGaHtffNo-1200-80.jpg", "*You cannot burn me, I'm already on fire* - Soldier \n https://pbs.twimg.com/profile_images/1249807428079595520/9Luw0SGu_400x400.jpg", "*If God had wanted you to live, He would not have created me!* - Soldier \n https://wiki.teamfortress.com/w/images/thumb/4/42/Community_Soldier_Strategy_Header.png/280px-Community_Soldier_Strategy_Header.png", "*If you know what's good for ya, you will run!* - Soldier \n https://wiki.teamfortress.com/w/images/thumb/2/25/Soldiergrenadekilltaunt.png/250px-Soldiergrenadekilltaunt.png", "*Last one alive, lock the door!* - Soldier \n https://pngimage.net/wp-content/uploads/2018/06/soldier-tf2-png-1.png", "*It's no use!* -Silver, https://i.ytimg.com/vi/_jeudr6M-HQ/maxresdefault.jpg ", "*Find the computer room!* -Vector,\nhttps://i.ytimg.com/vi/JEqnrgaTsw4/hqdefault.jpg ", "*Aww yeah, this is happening!* -Sonic,\nhttps://i.ytimg.com/vi/89bPDrtbeGw/hqdefault.jpg ", "*Even without wings, I can still fly!* -Sonic,\nhttps://i.ytimg.com/vi/zXWEjozYaXA/hqdefault.jpg ", "*Snooping as usual, I see?* -Robotnik,\nhttps://i.ytimg.com/vi/LyM1UGD8sqM/hqdefault.jpg ", "*No copyright law in the universe is going to stop me!* -Sonic,\nhttps://i.ytimg.com/vi/VXGkJmRtU0o/maxresdefault.jpg ", "*Don't touch it!* -Shadow,\nhttps://thumbs.gfycat.com/ZanyFaroffAcaciarat-poster.jpg ", "*You may know everything I'm gonna do, but that's not gonna help you since I know everything you're gonna do! STRANGE, ISN'T IT!?* -Sonic, \nhttps://coubsecure-s.akamaihd.net/get/b183/p/coub/simple/cw_timeline_pic/f0239b84615/f8e9a61afcfcbb585291c/med_1500751109_image.jpg ", "*SHUT UP TAILS!* -Sonic, \nhttps://i.ytimg.com/vi/xVntTk25pfA/hqdefault.jpg ", "*Where's that DAMN fourth chaos emerald?* -Shadow, \nhttps://i.ytimg.com/vi/np8SjpJYGeU/maxresdefault.jpg ", "Hey, I'll play with you some other time.* -Sonic, \nhttps://i.ytimg.com/vi/iXC77gHSfzw/maxresdefault.jpg ", "*Sonic will never again be a pain in my eeeeegggggg* -Eggman, \nhttps://i.ytimg.com/vi/C9HJU4TPbsA/maxresdefault.jpg ", "*True dat.* -Tails, \nhttps://i.ytimg.com/vi/IToLkpJCwIs/maxresdefault.jpg ", "*Get a load of this!* -Eggman, \nhttps://i.ytimg.com/vi/OkqiCqmRS8k/maxresdefault.jpg ", "*Oh no!* -Knuckles, \nhttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgkqX3_oTMGZh-hjyZVtLV_fyavRMdWl41KKF0JZOsaKuxV1sQ&usqp=CAU ", "*I'm the coolest.* -Shadow, \nhttps://pm1.narvii.com/6678/026b4a91ab8a6a75e6a638caac8e6c62f0c295c7_hq.jpg ", "*That's Eggman! I wonder what happened to Sonic?* -Tails, \nhttps://i.ytimg.com/vi/soXVWOHgmIk/hqdefault.jpg ", "*Watch out! You're gonna crash! AH!* -Sonic, \nhttps://steamuserimages-a.akamaihd.net/ugc/960838399165302619/E110FA8CD76789A8AFB5A4F0A47A34C83F2B5836/?imw=1024&imh=575&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true ", "*Take this!* -Silver, \nhttps://i.ytimg.com/vi/XoWYdzGi0MU/hqdefault.jpg ", "*Number one, Stay in school! Number two, Stay in school! Number three, Don't forget one and two!* -Sonic, \nhttps://m.media-amazon.com/images/M/MV5BNDQwOTAzODY3N15BMl5BanBnXkFtZTgwOTMyMTI1ODE@._V1_UY1200_CR485,0,630,1200_AL_.jpg ", "*GAMMA!* -Eggman, \nhttps://66.media.tumblr.com/5f82b02acddabd69d352faf30580873d/865fd22977bc79b2-78/s1280x1920/be75c310ebba3a6e9760133bb9b1a18a2634a04d.jpg ", "*Disappear!* -Shadow, \nhttps://images.nintendolife.com/screenshots/35641/large.jpg ", "*Shut up!* -Knuckles, \nhttps://i.ytimg.com/vi/I4JS60-Rc-c/maxresdefault.jpg ", "*Now we'll........finish it!* -??? (Sonic the Hedgehog series), \nhttps://s1.dmcdn.net/v/Db1dW1MlKkErEAqA2/x1080 ", "*You're smart.* -??? (Sonic the Hedgehog series), \nhttps://static.tvtropes.org/pmwiki/pub/images/tvtropes&knuckles.png ", "*Good. Great! Awesome! Outstanding! AMAZING!* -Nintendo Wii while you play Sonic Colors, \nhttps://i.ytimg.com/vi/xoQVvRSw8OA/maxresdefault.jpg ", "*Hey guys. Take care.* -Sonic, \nhttps://i.ya-webdesign.com/images/sonic-adventure-2-png-6.png ", "*We're on our way to the ark, so I guess that means we're going too!* -Sonic, \nhttps://vignette.wikia.nocookie.net/sonic/images/7/72/TailsSpaceshipRight.png/revision/latest/top-crop/width/220/height/220?cb=20170422094311 ", "*I told you. I'm not a rat! I'm a hedgehog!* -Sonic, \nhttps://i.ytimg.com/vi/rPVIqR9ybn0/maxresdefault.jpg ", "*Ahhh! I'm afraid of lightning!* -Tails, \nhttps://static.tvtropes.org/pmwiki/pub/images/lightningtails_8.png ", "*Use your head! Don't end up dead!* -Sonic, \nhttps://images-na.ssl-images-amazon.com/images/I/51nWMWb2rOL._RI_.jpg ", "*Hasta la bye bye, suckers!* -Eggman, \nhttps://i.ytimg.com/vi/WP7I60w9yrE/maxresdefault.jpg ", "*Knock Knock it's Knuckles* -Knuckles, \nhttps://i.redd.it/z8b7rih6ad211.jpg ", "*You're lying! It won't take that long to figure out.* -??? (Sonic the Hedgehog series), \nhttps://cache.escapistmagazine.com/2018/10/31161445/Sonic-800x400.jpg ", "*I've been looking for you Baldy McNosehair!* -Sonic, \nhttps://i.ytimg.com/vi/ian4plCSmzI/maxresdefault.jpg ", "*Can never grab too many rings.* -Sonic, \nhttps://i.ytimg.com/vi/ctdfaXsl9es/hqdefault.jpg ", "*Spindash time!* -Sonic, \nhttps://vignette.wikia.nocookie.net/sonic/images/e/ea/Rise_of_Lyric_Spin_Dash.png/revision/latest?cb=20141221132341 ", "*RIINGS!* -Sonic, \nhttps://board.sonicstadium.org/applications/core/interface/imageproxy/imageproxy.php?img=http://www.captainwilliams.co.uk/sonic/sonic16bit/sonic/images/ringslost.png&key=22b19518cf9257fc19d11de7504b691cf4be60bebb5322ba349212c5e3870da3 ", "*Want some moooore?* -Tails, \nhttps://media.sonicscanf.org//gallery/miles-tails-prower/sonic-heroes.png ", "*Man up, Tails.* -Eggman, \nhttps://pm1.narvii.com/6715/fa808f0577d4f459dc2936464463ef44b0d4d3bb_hq.jpg ", "*That tornado's carrying a car!* -Sonic, \nhttps://i.ytimg.com/vi/k44y-tAxcSc/maxresdefault.jpg ", "*Finally . . . I’ve got all the chaos emeralds!* - Shadow\nhttps://i.ytimg.com/vi/QjCR7wOiNxg/maxresdefault.jpg ", "*What have you done to Sonic? I'll never forgive you for this!* -Tails, \nhttps://vignette.wikia.nocookie.net/sonic/images/a/aa/TSR_Tails.png/revision/latest/top-crop/width/360/height/360?cb=20190201051846 ", "*Get ready to be schooled!* -Eggman, \nhttps://i.ytimg.com/vi/vl2gq0cOWq8/maxresdefault.jpg ", "*I don't like the way you attacked Chris and Cosmo!* -Sonic, \nhttps://s2.dmcdn.net/v/rup11ENMr2PInhG8/x1080 ", "*Ramps! We can use these as ramps!* -??? (Sonic the Hedgehog series), \nhttps://vignette.wikia.nocookie.net/sonic/images/2/24/Trick_Jump_Panel.png/revision/latest?cb=20160721102821 ", "*Cool, it's raining fire!* -Sonic, \nhttps://img.qj.net/uploads/articles_module/64132/sonic%20fire_qjpreviewth.jpg ", "*That was tight!* -Sonic, \nhttps://i.redd.it/r6rs58zdyx811.png ", "*Thrust increasing.* -Robot from Sonic 06, \nhttps://history.nasa.gov/SP-4404/p274b.jpg ", "*I thought your middle name was 'The'.* -Knuckles, \nhttps://cdn.discordapp.com/attachments/414499837082468363/697831614612373555/unknown.png ", "*Capable is my middle name.* -Sonic, \nhttps://cdn.discordapp.com/attachments/414499837082468363/697831600930684999/unknown.png ", "*Hunting games are all over the place but Buck Fever's the only one that has a funny title if you swap the first letters of 'Buck' and 'Fever'.* -Scott The Woz, \nhttps://static.tvtropes.org/pmwiki/pub/images/scott_the_woz_2018.jpg ", "*Wii Play, Do you? Is that a threat?* -Scott The Woz, \nhttps://www.famousbirthdays.com/faces/wozniak-scott-image.jpg ", "*...but when we slide the virgin goggles on we can make out that it potentially says 'L is Real 2401'. Now, what does that mean? No sex for me, thanks.* -Scott the Woz, \nhttps://vignette.wikia.nocookie.net/scott-the-woz/images/2/24/Scott_The_Woz_2019_Summer_Profile.jpg/revision/latest?cb=20190625142008 ", "*Okay!* -Terry, \nhttps://i.ytimg.com/vi/9OtYYyahg6k/maxresdefault.jpg ", "*Hey, come on, come on!* -Terry, \nhttps://upload.wikimedia.org/wikipedia/en/thumb/2/21/Terry2000fix.png/220px-Terry2000fix.png ", "*Phew...* -Terry, \nhttps://vignette.wikia.nocookie.net/metalslug/images/5/5f/TerryWinXIII.png/revision/latest/top-crop/width/360/height/450?cb=20190302170629 ", "*Get ready!* -Terry,\nhttps://vignette.wikia.nocookie.net/snk/images/b/bb/Terry-xii.jpg/revision/latest?cb=20081030203728 ", "*Here's the big one.* -Terry, \nhttps://pbs.twimg.com/profile_images/1523699828/FF1_terry_reasonably_small_copy_400x400.jpg ", "*Power Dunk!* -Terry, \nhttps://www.destructoid.com//ul/521909-terry%20statue.jpg ", "*Are you okay? Buster Wolf!* -Terry, \nhttps://destructoid.com/ul/565814-Terry_smash_SNK.jpg ", "*Burn Knuckle!* -Terry,\nhttps://i.pinimg.com/474x/37/2b/e7/372be7a32cd77208579909b9e7bf24e4.jpg ", "*So long, Gay Bowser!* -Mario, \nhttps://www.nintendoenthusiast.com/wp-content/uploads/2019/04/kingaboswer-800x400.jpg ", "*I'm-a tired...* -Mario, \nhttps://i.ytimg.com/vi/hvjkre5ycCc/maxresdefault.jpg ", "*Thank you so much for-to-playing my game.* -Mario, \nhttps://i.ytimg.com/vi/HpApwWD-ajA/hqdefault.jpg ", "*The horror.* -Mario, \nhttps://nintendoreviewsblog.files.wordpress.com/2013/06/mario-surprised.png ", "*Woo-hoo! Just what I needed.* -Mario, \nhttps://i.pinimg.com/originals/f7/0f/ca/f70fcab46fcabeb0f99de136bf401803.png ", "*Oh, you Mama Mia (Italian gibberish)* -Mario, \nhttps://i.ytimg.com/vi/xsKLyPNvx-4/maxresdefault.jpg ", "*Let's-a play!* -Mario, \nhttps://i.redd.it/rqf825i2l7e11.png ", "*It's about time!* -Mario, \nhttps://i.ytimg.com/vi/bDNgSdynzcU/hqdefault.jpg ", "*Come here, doggy.* -Luigi, \nhttps://mypotatogames.com/wp-content/uploads/2019/11/Luigis-Mansion-3-reading-780x470.jpg ", "*Hey! You know what would look good? A spaceship with MY face on it!* -Luigi, \nhttps://www.mariowiki.com/images/thumb/e/e1/Luigi_New_Super_Mario_Bros_U_Deluxe.png/200px-Luigi_New_Super_Mario_Bros_U_Deluxe.png ", "*Oh, what happened?* -Luigi, \nhttps://i.gzn.jp/img/2019/06/12/nintendo-direct-e3-2019/snap20803_m.jpg ", "*OH MY GOD! WAAAAAAAHHHH* -Wario, \nhttps://i.ytimg.com/vi/QWD88E6Arv0/hqdefault.jpg ", "*I'm the best!* -Toad, \nhttps://i.ytimg.com/vi/j9HKrp6M28s/hqdefault.jpg ", "*I am looking cool.* -Joker, Persnikity 5, \nhttps://i.pinimg.com/originals/80/e8/b2/80e8b2efd080823af55db7c391bf4f23.jpg ", "*fuck ultra* -Fuck Every Word 2.0\nhttps://pbs.twimg.com/media/ERr2if9XkAI5fd-.jpg ", "*I need a weapon.* -Master Chief \nhttps://i.ytimg.com/vi/WE4BemZzJkw/maxresdefault.jpg ", "*Sir, finishing this fight.* -Master Chief  \nhttps://pbs.twimg.com/media/DaOoJ7yU8AYOY3K.jpg:large ", "*Oh I know what the ladies like.* -Sergeant Johnson  \nhttps://res.cloudinary.com/dzsbo8htc/image/upload/c_scale,h_338,q_100,w_600/v1458487313/halo_2_anniversary_v1xqvq.jpg ", "*Follow the Master Chief. He’ll know what to do.* -Sergeant Johnson  \nhttps://i.ytimg.com/vi/Ciz8szrR7Vo/maxresdefault.jpg ", "*Don’t make a girl a promise….if you know you can’t keep it.* -Cortana  \nhttps://tr2.cbsistatic.com/hub/i/r/2016/12/08/c6ea1403-facb-4c82-a77f-659765d8c4ec/thumbnail/768x432/312cbc1332a5afb6a1eac60e0158d527/cortana.jpg ", "*This cave is not a natural formation.* -Cortana  \nhttps://i.ytimg.com/vi/1v2ChD5XRXQ/maxresdefault.jpg ", "*Ugly?! That does it!* -Gnasty Gnorc \nhttps://i.pinimg.com/originals/82/2e/99/822e99d108353ce8b0136ff9092c91d7.jpg ", "*Thank you for releasing me, Spyro.* -Nestor \nhttps://vignette.wikia.nocookie.net/spyro/images/0/07/Nestor.png/revision/latest?cb=20180731235209 ", "*Thank you for releasing me.* -Thor  \nhttps://vignette.wikia.nocookie.net/spyro/images/0/0b/Thor.png/revision/latest?cb=20130108091544 ", "*Thank you for releasing me.* -Conan  \nhttps://vignette.wikia.nocookie.net/spyro/images/c/c5/Conan.png/revision/latest?cb=20130923081359 ", "*Thank you for releasing me.* -Asher  \nhttps://vignette.wikia.nocookie.net/spyro/images/2/28/AsherHQ.png/revision/latest?cb=20140204190620 ", "*Thank you for releasing me.* -Andor  \nhttps://vignette.wikia.nocookie.net/spyro/images/6/65/AndorHQ.png/revision/latest?cb=20140204191300 ", "*Thank you for releasing me.* -Eldrid  \nhttps://vignette.wikia.nocookie.net/spyro/images/b/b6/EldridHQ.png/revision/latest?cb=20140205000207 ", "*Thank you for releasing me.* -Hexus \nhttps://vignette.wikia.nocookie.net/spyro/images/0/05/Hexus.png/revision/latest?cb=20130924091713 ", "*Thank you for releasing me, Spyro* -Altair  \nhttps://vignette.wikia.nocookie.net/spyro/images/d/d1/AltairHQ.png/revision/latest?cb=20140205214113 ", "*Thanks for releasing me.* -Damon  \nhttps://vignette.wikia.nocookie.net/spyro/images/3/30/DamonHQ.png/revision/latest?cb=20140205212749 ", "*Thank you for releasing me.* -Zeke \nhttps://vignette.wikia.nocookie.net/spyro/images/a/aa/ZekeHQ.png/revision/latest?cb=20140205213122  ", "*Thank you for releasing me.* -Azizi \nhttps://vignette.wikia.nocookie.net/spyro/images/8/81/Azizi.jpg/revision/latest?cb=20140205014150  ", "*Thank you for releasing me.* -Obasi  \nhttps://vignette.wikia.nocookie.net/spyro/images/d/d1/Obasi.jpg/revision/latest?cb=20140205015045 ", "*Thank you for releasing me.* -Baruti  \nhttps://vignette.wikia.nocookie.net/spyro/images/7/76/Barutihq.png/revision/latest?cb=20140217003442 ", "*Thank you for releasing me.* -Unika  \nhttps://vignette.wikia.nocookie.net/spyro/images/f/f8/Unika.jpg/revision/latest?cb=20140205015932 ", "*Thank you for releasing me.* -Cosmos \nhttps://vignette.wikia.nocookie.net/spyro/images/5/5a/Gallery0024.jpg/revision/latest?cb=20110213040627 ", "*It’s working! It’s working! I’ve got a dragon!* -Professor  \nhttps://vignette.wikia.nocookie.net/spyro/images/3/3f/Professor_PS1-2.jpg/revision/latest?cb=20181011181032 ", "*I’m a faun, you dork!* -Elora  \nhttps://vignette.wikia.nocookie.net/spyro/images/a/a6/Elora_PS1.jpg/revision/latest?cb=20180824195930 ", "*Bring it on shorty!* -Spyro \nhttps://vignette.wikia.nocookie.net/spyro/images/6/61/Spyro_PS1.png/revision/latest?cb=20181120122137  ", "*Gulp, lunchtime!* -Ripto \nhttps://i.ytimg.com/vi/mowUOfjD6t0/hqdefault.jpg  ", "*You singed my cape!* -Ripto \nhttps://vignette.wikia.nocookie.net/spyro/images/3/34/Ripto_Ripto%27s_Rage.png/revision/latest?cb=20180709173303  ", "*Dragon, you are really starting to get on my nerves!* -Ripto \nhttps://vignette.wikia.nocookie.net/spyro/images/3/34/Ripto_Ripto%27s_Rage.png/revision/latest?cb=20180709173303", "*Hey shorty, maybe I can help!* -Spyro \nhttps://vignette.wikia.nocookie.net/spyro/images/6/61/Spyro_PS1.png/revision/latest?cb=20181120122137 ", "*What, YOU again?!* -Ripto  \nhttps://vignette.wikia.nocookie.net/spyro/images/3/34/Ripto_Ripto%27s_Rage.png/revision/latest?cb=20180709173303 ", "*To get the best glide, press the X/jump button at the very top of your jump.* -Hunter \nhttps://vignette.wikia.nocookie.net/spyro/images/a/a7/Hunter_PS1.jpg/revision/latest?cb=20180824200042 ", "*If I find you here again, I'm going to be very angry, and you won't like me when I'm angry!* -Bianca  \nhttps://vignette.wikia.nocookie.net/spyro/images/0/0f/Bianca_PS1.jpg/revision/latest?cb=20180919171951 ", "*Drat! Double drat! Drat! Drat! Drat! Drat! Drat! Drat! Drat! Drat! Drat!* -Moneybags  \nhttps://vignette.wikia.nocookie.net/fightclubchampfanom/images/c/cd/Moneybags.png/revision/latest?cb=20190703032801 ", "*I will endeavour to assist you by means of a steady provision of combustible projectiles.* -Bentley  \nhttps://vignette.wikia.nocookie.net/spyro/images/e/e7/Bentley_PS1.jpg/revision/latest?cb=20181119071056 ", "*Woohoo! Time to kick some Sorceress butt!* -Agent 9  \nhttps://vignette.wikia.nocookie.net/spyro/images/7/7d/Agent_9_PS1.jpg/revision/latest?cb=20181011180557 ", "*Uka Uka is free? No... it cannot be!* -Aku Aku \nhttps://i.ytimg.com/vi/QPDfg3VwGzU/maxresdefault.jpg ", "*Prepare the female bandicoot!* -Dr Neo Cortex \nhttps://vignette.wikia.nocookie.net/crashban/images/2/20/Crash_Bandicoot_2_Cortex_Strikes_Back_Doctor_Neo_Cortex.png/revision/latest?cb=20180726002101 ", "*But D-D-Doctor Cortex, heheh, the Vortex is not ready. Heh. We have no idea what it could do! Hehehehehaaaaaa!* -Dr Nitrus Brio  \nhttps://vignette.wikia.nocookie.net/crash-bandicoot-games/images/2/2d/Crash_1_Nitrus_Brio.png/revision/latest?cb=20180131030750 ", "*From deep inside my temple prison, I sent you simple instructions to follow. But you lost the Gems, you lost the Crystals, AND I HAVE LOST MY PATIENCE!* -Uka Uka \nhttps://wizarddojo.files.wordpress.com/2015/07/maxresdefault1.jpg ", "*Yes, it is true! The bandicoot has brought all of the Crystals and all of the Gems to me! ULTIMATE POWER IS MINE!!! The world as we know it, IS ABOUT TO END!!!!!* -Uka Uka  \nhttps://vignette.wikia.nocookie.net/crashban/images/6/64/Uka_Uka_CTR.png/revision/latest?cb=20161224053635"]
var vibesongs = ["https://youtu.be/-_xpK41qLQk", "https://youtu.be/4pNDzL8w6XI", "https://youtu.be/biLZYxHGj3w", "https://youtu.be/0hflfbEBmsk", "https://youtu.be/6Kwj66aLYvI", "https://youtu.be/idipMrfAZHk", "https://youtu.be/vEn1rA1BUmk", "https://youtu.be/mx82b-3A--Q", "https://youtu.be/GGSbyJXN86o", "https://youtu.be/lXJRIAvaEY0", "https://youtu.be/FQdEzYN1CkI", "https://youtu.be/ggqTSLydqr0", "https://youtu.be/lpTT2wTlNZM", "https://youtu.be/bGgDtXvDNz4", "https://youtu.be/-XdN6GzeN7Y", "https://youtu.be/nfm0nyKz7Mg", "https://youtu.be/RhMh2O-kn64", "https://youtu.be/2wWLYg-kgy0", "https://youtu.be/Xb3pJuBzOcY", "https://youtu.be/nj6OA-n916k", "https://youtu.be/giwG7djXPKc", "https://youtu.be/JFP4wn0dejc", "https://youtu.be/JCwlck3Xpms", "https://youtu.be/_7ujua6cTZs", "https://youtu.be/IAfo6YI4KGs", "https://youtu.be/0o_B_qGoZ8A", "https://youtu.be/95HuSMQSUVo", "https://youtu.be/05YkWebV86w", "https://youtu.be/XT08seC4JDg", "https://youtu.be/fVLNw8B1S5Y", "https://youtu.be/W-DfeRp8t4Q", "https://youtu.be/gEUv22jBUtY", "https://youtu.be/qWbkcFdEkgM", "https://youtu.be/WA2WjP6sgrc", "https://youtu.be/xwMzeLa8rBY", "https://youtu.be/zWckr41oNCc", "https://youtu.be/_V9ZBEo4wKg", "https://youtu.be/9GVzDMr1YJA", "https://youtu.be/Boqy0Q-4c_M", "https://youtu.be/di6VFegOMfk", "https://youtu.be/9nQVQb2yxjY", "https://youtu.be/pCLETISZSVU", "https://youtu.be/6Cy07t8jmA8", "https://youtu.be/-2r-FKU1QpE", "https://youtu.be/DsdMTmz4k5Q", "https://youtu.be/acfG3QeH7Uw", "https://youtu.be/zQvPBEJVwn8", "https://youtu.be/gFFOXwniVKw", "https://youtu.be/tWBKtLiYe5w", "https://youtu.be/fx7rE49CbYw", "https://youtu.be/xOxtI0x7R9Q", "https://youtu.be/4GH49pNsj-I", "https://youtu.be/hJTg1mhzLZ8", "https://youtu.be/LDgyHhJh8rM", "https://youtu.be/r-CU9-YWCB8", "https://youtu.be/_hZ79Bv-Puc", "https://youtu.be/uStRGe7o2lc", "https://youtu.be/o_hXGZ8NXAA", "https://youtu.be/xGkiOGe7FdU", "https://youtu.be/GDxS8oK6hCc", "https://youtu.be/yo34XZYOnjg", "https://youtu.be/PZu47D9OdEQ", "https://youtu.be/_oLzX0RPquk", "https://youtu.be/BQF0EFToYB0", "https://youtu.be/HtUH9z_Oey8", "https://youtu.be/18JQUYgpOlw", "https://youtu.be/wZZ8V2AFUq0", "https://youtu.be/y2oLbP7tvMk", "https://youtu.be/diuexInkshA", "https://youtu.be/2MtOpB5LlUA", "https://youtu.be/nOL7KQc5Wfo", "https://youtu.be/fE_spqJTU6k", "https://youtu.be/HnyGSl3K-IE", "https://youtu.be/kbHttO65eUM", "https://youtu.be/AoV4E8y_alM", "https://youtu.be/vWrhnJAN4qk", "https://youtu.be/dBHWQx4zbqE", "https://youtu.be/rnJYlQ_bVP4", "https://youtu.be/TgbqBx4NthI", "https://youtu.be/JFgaxeA-BW4", "https://youtu.be/cwGWZr24d2o", "https://youtu.be/_CzSCWpF7TM", "https://youtu.be/edgMzNquVzk", "https://youtu.be/KGCWnMXICrg", "https://youtu.be/TuwoH2iZuKU", "https://youtu.be/qa52CKvb3qg", "https://youtu.be/4poG9l7-ZZg", "https://youtu.be/k3eym4mqS4A", "https://youtu.be/RklG6SprjMk", "https://youtu.be/AzUVwWwkuKM", "https://youtu.be/uU7E__eIkVE", "https://youtu.be/Ul0sp782hIQ", "https://youtu.be/pSm8QMT6gG0", "https://youtu.be/JVovZkcU5tk", "https://youtu.be/X3tPa9DEmxQ", "https://youtu.be/YhScNIi2rgI", "https://youtu.be/WKkrRpyBkws", "https://youtu.be/qQbUTutaKKo", "https://youtu.be/tmI92GX-xF0", "https://youtu.be/m20g62c5JsM", "https://youtu.be/TcoASjlFysk", "https://youtu.be/3QR2m03V76I", "https://youtu.be/nzlZFGX6PaM", "https://youtu.be/EyNnA39gcM8", "https://youtu.be/D4Ximn7nZdc", "https://youtu.be/TfDCqtjn6S0", "https://youtu.be/cPWBG6_jn4Y", "https://youtu.be/sMwry4NZYmQ", "https://youtu.be/OEboG4LnUBI", "https://youtu.be/O50dqIdhIAI", "https://youtu.be/KToROLFBsgc", "https://youtu.be/AlYHQDsA13U", "https://youtu.be/4zW7Dmx9WYQ", "https://youtu.be/0gp7PSzi-uc", "https://youtu.be/psuRGfAaju4", "https://youtu.be/jwYASgA9ONA", "https://youtu.be/tUuP1A23lfI", "https://youtu.be/gemeua7r_eA", "https://youtu.be/yQ0iTDafXuM", "https://youtu.be/SYnVYJDxu2Q", "https://youtu.be/NvS351QKFV4", "https://youtu.be/Yhqfd3DbzJw", "https://youtu.be/xZEPgLkzhwE", "https://youtu.be/NXCjZESUeFg", "https://youtu.be/pTt2mEH7vFc", "https://youtu.be/YapeV5XBgQ4", "https://youtu.be/uPj1EQyRpIQ", "https://youtu.be/m-6gqYtwPBE", "https://youtu.be/wFxzHKx1BYQ", "https://youtu.be/pkizz-EzmPA", "https://youtu.be/gMlf-QOd5GU", "https://youtu.be/EjkGGMxyxiA", "https://youtu.be/S-h55eVAJmM", "https://youtu.be/5K9Ujm6RjNc", "https://youtu.be/H6aVLi31LGw", "https://youtu.be/2b8TKhIz_ZY", "https://youtu.be/CMS3Fh8WDWI", "https://youtu.be/Ati9zmHO2jA", "https://youtu.be/qy8Sn6DHIi0", "https://youtu.be/Oaf2gUhy74o", "https://youtu.be/QGaxo05-sNM", "https://youtu.be/89VuI2nyINw", "https://youtu.be/XD-OFP-0H5g", "https://youtu.be/l7I8dYKeke8", "https://youtu.be/bmP3UHXYi28", "https://youtu.be/E3tkgU0pQmQ", "https://youtu.be/59RIVbWC4oE", "https://youtu.be/vxL_r-0VC1k", "https://youtu.be/wLg8oUE4H9E", "https://youtu.be/Lh7GF-JW0to", "https://youtu.be/EJCq_hnFZyk", "https://youtu.be/_2aH4fTeAjM", "https://youtu.be/lGS9flfg8Vg", "https://youtu.be/hoMGlDiZAw4", "https://youtu.be/q2D0mAJxWo8", "https://youtu.be/Gnv14x5pvIw", "https://youtu.be/Z33qMMfGDp4", "https://youtu.be/HPwwZf6ACN8", "https://youtu.be/94saxVLQRJg", "https://youtu.be/8XKzBu_zAhU", "https://youtu.be/0fVvkQLW9vc", "https://youtu.be/LQso8PPQQpQ", "https://youtu.be/IMGF0c64rAk", "https://youtu.be/UavXpBrm8ss", "https://youtu.be/L3X8G9Xl5d0", "https://youtu.be/QUkXdnYQk58", "https://youtu.be/3bddXrH8BfU", "https://youtu.be/dlE4NaqAZ2Q", "https://youtu.be/MtFDTDxq4Qs", "https://youtu.be/RrSZw5K5Am8", "https://youtu.be/cnl_m6U5AU0", "https://youtu.be/i3xA0kwyDrI", "https://youtu.be/L4SZZ2DtQJ4", "https://youtu.be/HumEEkPTvzg", "https://youtu.be/ZvrkpETHBik", "https://youtu.be/5kMSreL5THM", "https://youtu.be/gWeGBUIbGds", "https://youtu.be/lFEUe0mMGM4", "https://youtu.be/ZpQ0ogOxxOI", "https://youtu.be/LGY2zglbAFc", "https://youtu.be/wiFaXN_g-_o", "https://youtu.be/_tQgr2RZJf8", "https://youtu.be/AI1-cy_dMyc", "https://youtu.be/th9B2J7yShM", "https://youtu.be/X2YBBWInroI", "https://youtu.be/QiKTp5SyRCw", "https://youtu.be/lPjBUOIuaGA", "https://youtu.be/9TFjZPiXRGE", "https://youtu.be/x4964aVwGPY", "https://youtu.be/R9eC3WBRKeY", "https://youtu.be/dVVZaZ8yO6o", "https://youtu.be/hkD7ee0Qz64", "https://youtu.be/L3hdpGJILtY", "https://youtu.be/HrXLX9D8ibU", "https://youtu.be/JshcjLz5Jtc", "https://youtu.be/CVLH5V6YvOI", "https://youtu.be/y2RQ-B_vLTc", "https://youtu.be/7d8ZDD1IhHM", "https://youtu.be/jefJ7FH1LxI", "https://youtu.be/Lr4ngQe1RuQ", "https://youtu.be/lNPyzu8_M3M", "https://youtu.be/pxBMfwfPG_k", "https://youtu.be/YNcoPA1bk58", "https://youtu.be/YOm3EWVfJBY", "https://youtu.be/rmszi6jOubg", "https://youtu.be/Rh6P9jw6_5w", "https://youtu.be/FT6PZUTdd04", "https://youtu.be/IF-YoPMPAlU", "https://youtu.be/sHwvUFjaNdU", "https://youtu.be/WZGQSYDOm50", "https://youtu.be/k2KRDetyGhs", "https://youtu.be/tyneiz9FRMw", "https://youtu.be/56DnL2U8lH8", "https://youtu.be/ml9nOWpLCU4", "https://youtu.be/62zttCJT1Sg", "https://youtu.be/UBEFTNz_pmU", "https://youtu.be/1z8zZBBkIRw", "https://youtu.be/nO1jCiAwIX4", "https://youtu.be/xe2FPP4lX14", "https://youtu.be/Gx7sUmun6zE", "https://youtu.be/lndBgOrTWxo", "https://youtu.be/2GhhV_WGsa0", "https://youtu.be/QG77HTdreh0", "https://youtu.be/nDtj-2qnTXk", "https://youtu.be/waKumDkYrDY", "https://youtu.be/Tfzk5WyqM_8", "https://youtu.be/_NvuRvT-miw", "https://youtu.be/Ny-Fvyx9IXY", "https://youtu.be/8PWBzQH5iF8", "https://youtu.be/bMF_PRSXbXk", "https://youtu.be/upOhRRYVGkA", "https://youtu.be/7fF7rwx9q5k", "https://youtu.be/uZxXZKcxiTA", "https://youtu.be/IxqXnLx8qDQ", "https://youtu.be/2DTjNriHboA", "https://youtu.be/EV6E13xODyA", "https://youtu.be/e9r5hx47kxM", "https://youtu.be/lUTr1X-6sbg", "https://youtu.be/-TTvUuilQxg", "https://youtu.be/Z4uSCQ-5TO0", "https://youtu.be/SXKrsJZWqK0", "https://youtu.be/kdhSnZpDX0A", "https://youtu.be/LY_qs-ra_88", "https://youtu.be/t1rjTDfLhLM", "https://youtu.be/_1uNUhIgC2g", "https://youtu.be/cT6r-eOLLiM", "https://youtu.be/s7rftL1HoFo", "https://youtu.be/0hEYvdMoF2g", "https://youtu.be/ODVAnn_yb8c", "https://youtu.be/B8eTxPdU4sQ", "https://youtu.be/z29bt-wjS88", "https://youtu.be/tCxLKje7JKA", "https://youtu.be/DCVYOCF_7uM", "https://youtu.be/CAL4WMpBNs0", "https://youtu.be/0rF96AqSwmI", "https://youtu.be/Y4gigy5XxFA", "https://youtu.be/-kemuZS2YRs", "https://youtu.be/swPlzzavzWg", "https://youtu.be/pWVTuxoSuUw", "https://youtu.be/_Q7J97WD3Gg", "https://youtu.be/wmrMTGOoHqY", "https://youtu.be/V-7nSV5M3Bk", "https://youtu.be/V60N12UFNN4", "https://youtu.be/w0WyKTSuX4U", "https://youtu.be/EiNwUpco4OI", "https://youtu.be/UlEoNdJGxTk", "https://youtu.be/OsSDYf5yMOE", "https://youtu.be/qkEtJ0JT_dI", "https://youtu.be/kaNuYpHWcac", "https://youtu.be/aQ2tXk-2UEg", "https://youtu.be/fwZ8jLFFL1Y", "https://youtu.be/YzJKStx9IyU", "https://youtu.be/OIsp8KrwSVY", "https://youtu.be/dOPrN6aJ7TI", "https://youtu.be/DWdMu4X4jQ0", "https://youtu.be/jQ4QBD-Cu5I", "https://youtu.be/zui6wlB1hSo", "https://youtu.be/jgAwS4--HmA", "https://youtu.be/EJiXO3vwNFo", "https://youtu.be/DKs-Tkw4X3I", "https://youtu.be/lWja270s6qA", "https://youtu.be/IAKS8OeAVgY", "https://youtu.be/rsOlhCUNCUI", "https://youtu.be/lA1JHzM7v-Q", "https://youtu.be/ZDDu_UkqACs", "https://youtu.be/whQvJLXtLNw", "https://youtu.be/rxNP-Qs1iL8", "https://youtu.be/QRP55p5Da4M", "https://youtu.be/gW9AIlJaAXU", "https://youtu.be/M1dEfSey8Nc", "https://youtu.be/6LbXujfutWk", "https://youtu.be/6eeIEMOQw4s", "https://youtu.be/X-fmYK81MUQ", "https://youtu.be/iKnwVvXkWq0", "https://youtu.be/n9wljU5XBjg", "https://youtu.be/Pg2utHOMapQ", "https://youtu.be/fAOn6xZy3FE", "https://youtu.be/Z5mP0YiXwCE", "https://youtu.be/oqS1Jri8yRg", "https://youtu.be/SeAAi7jWOl8", "https://youtu.be/MV_3Dpw-BRY", "https://youtu.be/AINfHRXx1kQ", "https://youtu.be/sxKoNhk03aM", "https://youtu.be/kcSfTpMuJkM", "https://youtu.be/oyvMKX_jozg", "https://youtu.be/UOJBflIp50w", "https://youtu.be/zQRHM5c18IQ", "https://youtu.be/sqbsVjwXo3o", "https://youtu.be/bK8vpWIvA9o", "https://youtu.be/W6GGX0J8SjU", "https://youtu.be/zhIScvlFn2w", "https://youtu.be/Atvsg_zogxo", "https://youtu.be/y7nIywla0DU", "https://youtu.be/3nlSDxvt6JU", "https://youtu.be/N8nGig78lNs", "https://youtu.be/JYxqP2vGKv4", "https://youtu.be/6Cm4zNQD5gY", "https://youtu.be/CWf5YawiHvY", "https://youtu.be/4Q7PsyuSYFI", "https://youtu.be/mRpiBvwKX6c", "https://youtu.be/eYDI8b5Nn5s", "https://youtu.be/psd2d-MFSRk", "https://youtu.be/Onj-LthpnIM", "https://youtu.be/drT1uOViuz4", "https://youtu.be/7yje-g6s6mY", "https://youtu.be/Ivv-F-q81tA", "https://youtu.be/B6vtGV4ehR0", "https://youtu.be/Rf793VXarkQ", "https://youtu.be/yi-8QxcVBSU", "https://youtu.be/301s-GDML5w", "https://youtu.be/5IYh_hV2H9I", "https://youtu.be/ZQedfsvdMAI", "https://youtu.be/0LNa-mmpw2A", "https://youtu.be/2OebZ5HwdPs", "https://youtu.be/pwU_WueGQQM", "https://youtu.be/x7ok5AV7ZrM", "https://youtu.be/Mx9Z0izL7No", "https://youtu.be/-K9Ux5aZGYw", "https://youtu.be/iN4jmEkjYTk", "https://youtu.be/rT36_lrV1AA", "https://youtu.be/wsX0G2_B_eo", "https://youtu.be/cQ0db1egwp4", "https://youtu.be/iL0_R0T3MpI", "https://youtu.be/_pLDBCkvyUg", "https://youtu.be/DbHa-pllnDU"];
var mathans;
var rollboll = false;
var currentroll;
var indexroll = 0;
var currentmoon;
var dewtext = ["£","€","=","#","+","×","Ω","%","Г","&",":","$","(",")","-","[","]","^","°","¬","<",">","÷","§","¤","}"];
var engtext = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uengtext = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var rollpics = ["https://cdn.discordapp.com/attachments/616765923491053671/819108384787398666/video0.mp4", "https://cdn.discordapp.com/attachments/616765923491053671/817443426084585482/video0.mp4", "https://cdn.discordapp.com/attachments/650890589000433675/816713132130959433/smol.mp4", "https://cdn.discordapp.com/attachments/374677483804557313/816824655931375686/ZBXPV-8e2ixoWFSj.mp4", "https://cdn.discordapp.com/attachments/680963945234038901/815817563492843580/video0.mp4", "https://cdn.discordapp.com/attachments/680963945234038901/815816605610934303/video0.mp4", "https://cdn.discordapp.com/attachments/616765923491053671/815091717358616616/video0.mp4", "https://cdn.discordapp.com/attachments/616765923491053671/814411865730842675/video0.mp4", "https://video.twimg.com/ext_tw_video/1336429563119869953/pu/vid/640x640/w5SXtVoP8CJsifL0.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1365545306046271488/pu/vid/1280x720/dDqp5ASVyVrPULE5.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1365716059702112260/pu/vid/576x576/SCh4JQInS4_-maxE.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1366134054572204038/pu/vid/640x628/8_lyMM6_RcQSFRco.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1366802382361878528/pu/vid/1280x720/hgJcIvJOjenIzqDq.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1357845829726269441/pu/vid/640x480/vGwgz4muO2NFQ2dF.mp4?tag=12", "https://video.twimg.com/ext_tw_video/1349507060594049029/pu/vid/640x640/eJgYo3a3yjqilOmv.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1353044420220874752/pu/vid/640x634/5ZlddXZ1McvNHR48.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1355219711865151488/pu/vid/1280x720/49GB-RW6cz-oYbSF.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1355219313381281802/pu/vid/640x640/tFxl4DwVvtXGEgnc.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1356814686096936961/pu/vid/640x640/dGB8qusurlkk4KgO.mp4?tag=12", "https://video.twimg.com/ext_tw_video/1358116924446699520/pu/vid/640x640/676PGeNprpL0x8WX.mp4?tag=12", "https://video.twimg.com/ext_tw_video/1361479572269789184/pu/vid/640x360/2mN3eC1pdWX7Ont-.mp4?tag=10", "https://cdn.discordapp.com/attachments/631891669184151592/810995549200187443/prison_shippers.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/810995548143747112/youre_brown.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/810995542171451433/madbattle.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/810995537225711626/no.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/810995531860934666/rosa_dance.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/804714911543853056/video0_1.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/804714907395424316/video0_3.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/804714906976911410/video0_2.mp4", "https://cdn.discordapp.com/attachments/616765923491053671/803005470612520980/video0.mp4", "https://cdn.discordapp.com/attachments/616765923491053671/803035546430734366/video0.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/802959686461554718/video0_-_2021-01-24T125225.597.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/798636186180255794/video0.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/802341081655410719/video0_3.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/802341079881482240/video0.mov", "https://cdn.discordapp.com/attachments/631891669184151592/802341076537966623/video0_2.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/802341065402744863/wad-1.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/802341063477690388/video0_5.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/802341041352343613/video0_4.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/801275074162065419/YODA_NO.mp4", "https://cdn.discordapp.com/attachments/631891669184151592/801275068663332894/video0_1.mp4", "https://video.twimg.com/ext_tw_video/1356633795861053446/pu/vid/640x360/ZshDekzr0keQbsgt.mp4?tag=10", "https://cdn.discordapp.com/attachments/783686275110535218/800047146890952784/video070.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/799755939124084756/video0_-_2021-01-14T125649.025.mp4", "https://cdn.discordapp.com/attachments/609985878689054748/799649890824880178/video0-682.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/799285209111592970/Dadbattle.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/796529603887235132/so_theres_this_thing_in_pokemon.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/796543339633049600/video0-163.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/796595964772089887/angrydrip.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/796607059151552523/gwgsvs.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/796622304532627476/video0.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/796680949818458142/video0-13-2.mov", "https://cdn.discordapp.com/attachments/182553078384295937/796730085239029821/video0_10.mp4", "https://video.twimg.com/ext_tw_video/1345780096154517504/pu/vid/1272x720/qq1qtZZcKHz9ncrF.mp4?tag=10", "https://cdn.discordapp.com/attachments/182553078384295937/793746591735349249/video0.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/790740169496985620/theres-nothing-for-me-here-so-i-will-disappear.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/788960656245391420/1_5100340639720014063.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/789674860297060372/680040_sensacja-o.mp4", "https://cdn.discordapp.com/attachments/783686275110535218/788770583604101130/Shitpost_para_status_dog_wins.mp4", "https://cdn.discordapp.com/attachments/783686275110535218/786272848314368050/Shitpost_Status.mp4", "https://cdn.discordapp.com/attachments/783686275110535218/785967554416869447/NOT_Shitpost_status_again.mp4", "https://cdn.discordapp.com/attachments/783686275110535218/785523892881195078/Shitpost_Status.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731596169150474/redditsave.com-blm-19lebn2ehtk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731582614208522/redditsave.com-the_sex-j7jz5yq13nk61-360.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731559054671932/redditsave.com-vape_nic_suck_dic-md3641nldok61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731536325476392/redditsave.com-chese-bzq9h37fsnk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731507140853790/redditsave.com-horny_joseph-9ksvc857rpk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731480113545226/redditsave.com-ayo-b90kjwny9qk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731456855867422/redditsave.com-an_interesting_title-m2q6ifbyfpk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731434659217438/redditsave.com-shut_up_youre_ruining_his_flow-f9wmshkjjrk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731414090350662/6yeuKUZV53hZ6o1r.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731391504547860/redditsave.com-pov_youre_straight-teorsg8lhhk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731367206420542/redditsave.com-big_round_ovals-0zcxvfa6jfk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731343219195924/redditsave.com-he_do_be_moss-17oyn2egdhk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731320955699200/redditsave.com-_-3x8ln5w1dgk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731305357213746/redditsave.com-f_r_o_g-ydjm3bk5pik61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731283463602186/redditsave.com-stfu_bitch_im_the_baby-10nav3jcqjk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731259132837989/redditsave.com-boom-l7widl700lk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731241641934918/redditsave.com-its_time_to_stop-ahzl8islugk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731220964278293/redditsave.com-me_when-2jhiwc9qhfk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731201196261427/redditsave.com-lol_xd_tictoek_bed-4phjsob7ygk61-360.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731173258002432/redditsave.com-white_boy_on_the_beat-vpw9gdebn8k61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731154433966151/redditsave.com-homie_had_the_right_idea-mgmaihk3bck61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731142975520798/redditsave.com-anime_girls-lc2tv0potck61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731124629110814/redditsave.com-baseden-su2ij4igsbk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731110910328862/redditsave.com-hello_and_welcome-d6ihw0mj9dk61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731092479377408/redditsave.com-hold_up-odua4shuzck61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/816731080697708604/redditsave.com-wholesome_100-yxwrskahdak61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392640753270834/video0_11.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392598759899166/video2.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392549988270091/X_A7XInrs4qREONj.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819620305236525056/redditsave.com-new_epic_drawing-ub7cgdj6bxk61.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819620320163528736/redditsave.com-help_me-biqr0l5qpuk61.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819620346424328242/redditsave.com_stickmin-5jhts55k5dm61.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819620425222586370/redditsave.com-chicken_trick_be_speed-5sal3yudv7k61-360.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819620470352773160/redditsave.com-g_r_o_o_v_i_n-56axm3vzk3k61.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819620516800364575/redditsave.com-a-kwjkuwmi38k61.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819620596958101504/redditsave.com-wwwletmesliceoffyourdickcom-i54l0g9wr7k61.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819620727102636052/redditsave.com-_-nn3pxehplhj61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392506309312512/vzrcs_90nyrJLvUS.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392468095008798/video0.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392394439491634/video0_-_2021-01-24T133423.470.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392298057924658/redditsave.com-good_cut-njzxqod276g61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392262838878269/redditsave.com-hmm_yes_very_safe-gxjd2p3rg6g61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392114897256448/1359155850636644356-480x480.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813392044725764126/redditsave.com-title-8ttvsvoxhth61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813391941059608596/dIuvKfra-OJtqe34.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813391909460377640/redditsave.com-do_it-bck5jpgxjwh61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813391880909094972/redditsave.com-reverse_card-nro9ll738xh61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813391844846862366/redditsave.com-man_went_from_horny_to_terrified_real_quick-jsym1292obh61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813391820703924275/redditsave.com-luigi_moment-t6w43ijp37i61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813391786163568680/redditsave.com-shitposting-nz8xbi0g53i61.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813391750331629568/Df4plpzIF0AsXMwF.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813391731994263562/LYVp9tqW7ZX9widt.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/813391714961326130/wCtuWUmBS62xprt4.mp4", "https://cdn.discordapp.com/attachments/242285927056015361/635974118289833994/8PCek4N8CMIK_x1a.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/810707133603119154/AMOGUS.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/809967837556768768/tired_of_amogus.mp4", "https://cdn.discordapp.com/attachments/758417502328979487/783782265381584896/Untitled.mp4", "https://cdn.discordapp.com/attachments/499684048390848523/775485626174275604/FlashBang.mp4", "https://cdn.discordapp.com/attachments/765014721886814229/774264046374617088/v09044820000bu46oaj00jhjn13l3bgg.mov", "https://cdn.discordapp.com/attachments/680963945234038901/774128711133560842/video0.mp4", "https://cdn.discordapp.com/attachments/680963945234038901/774130514017386506/video0.mp4", "https://cdn.discordapp.com/attachments/680963945234038901/774131533397229588/video0.mp4", "https://cdn.discordapp.com/attachments/680963945234038901/774132121194594304/video0.mp4", "https://cdn.discordapp.com/attachments/680963945234038901/774132314644938802/video0.mp4", "https://cdn.discordapp.com/attachments/680963945234038901/774133303745052692/video0.mp4", "https://cdn.discordapp.com/attachments/680963945234038901/774133995754749982/video0.mov", "https://video.twimg.com/ext_tw_video/1323714809771286530/pu/vid/640x640/Eh0jxqlnEKYWIkcq.mp4?tag=10", "https://cdn.discordapp.com/attachments/680963945234038901/774135161776242688/video0-319.mp4", "https://cdn.discordapp.com/attachments/680963945234038901/774135693949665310/video0_2.mov", "https://cdn.discordapp.com/attachments/680963945234038901/774136985744703498/video0.mp4", "https://cdn.discordapp.com/attachments/263161542697156608/768434856131821568/drunken_sailor.mov", "https://video.twimg.com/ext_tw_video/1315116803773943810/pu/vid/640x634/MRMNLBrYwXR3ZzN_.mp4?tag=10", "https://cdn.discordapp.com/attachments/732805819313160283/767830106780467250/video0.mov", "https://cdn.discordapp.com/attachments/732805819313160283/767247720188215296/video0.mov", "https://cdn.discordapp.com/attachments/732805819313160283/766735270195888128/video0.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/765702976869892136/video0.mp4", "https://cdn.discordapp.com/attachments/296056831514509312/761740566458400768/video0.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/762096602608959499/video1.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/761374735749480468/video2.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/761374735195570216/video1.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/761374734540603442/video0.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/760622277154177084/video0.mp4", "https://cdn.discordapp.com/attachments/562324705357594642/758828192458604574/video0.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/751021110266560545/video0.mp4", "https://video.twimg.com/ext_tw_video/1297891554917588995/pu/vid/1088x656/lDiRzum-8Q5YxNop.mp4?tag=10", "https://video.twimg.com/ext_tw_video/1295955099961790465/pu/vid/640x480/HRQp-ZP4sHXjMQKR.mp4?tag=10", "https://cdn.discordapp.com/attachments/732805819313160283/744255165716234451/video0.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/743578361317818438/video0.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/743196520471592970/video0.mov", "https://video.twimg.com/ext_tw_video/1291464836224876545/pu/vid/640x640/KA2JqG4j2kXpLeXe.mp4?tag=10", "https://cdn.discordapp.com/attachments/732805819313160283/740129234067914792/video0.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/739466011782283264/video0.mp4", "https://cdn.discordapp.com/attachments/710832025329860608/726716352550928394/Walnut.mp4", "https://cdn.discordapp.com/attachments/227912785290330113/737823835675426867/pillow.mp4", "https://cdn.discordapp.com/attachments/732805819313160283/736989942822993960/video0.mp4", "https://cdn.discordapp.com/attachments/592773318545899520/815305430687285248/redditsave.com-gustavo-3f1oia0u7tj61.mp4", "https://cdn.discordapp.com/attachments/592773318545899520/813635588044881981/redditsave.com-what_did_he_say-r8a197894vi61.mp4", "https://cdn.discordapp.com/attachments/592773318545899520/806978296746344468/video0.mp4", "https://cdn.discordapp.com/attachments/592773318545899520/806976050960531456/video0.mov", "https://cdn.discordapp.com/attachments/182553078384295937/783770243431923752/chocolate_fountain.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/782837006521860106/RPReplay_Final1604535632.mov", "https://cdn.discordapp.com/attachments/182553078384295937/783932221542236170/video0.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/783921584107814932/video0-18-1.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/784030506697883668/video0.mp4", "https://cdn.discordapp.com/attachments/182553078384295937/783982756715429900/video0-14.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819625580156158013/redditsave.com-imagine_being_briish_bruv-0nlvlmdtwlj61.mp4", "https://cdn.discordapp.com/attachments/819609676978323496/819625642076536882/redditsave.com-wholesome-zbnmi4bm3ij61.mp4", "https://cdn.discordapp.com/attachments/628395853958217738/819634059062935552/Big_Bill_Hells.mp4"];
var activitylist = ["lmao who's Corona? Never heard of them.", "around", "as Steve", "Hello, Jet :)", "rootin' tootin' and shootin'", "big iron on his hip."]



bot.on('ready', () =>{
    console.log('Let er rip!');
    bot.channels.cache.get('607654317079396410').send("`VirusBot has been rebooted.`")
    thatone = Math.abs(Math.floor ((Math.random() * activitylist.length) -1));
    bot.user.setActivity(activitylist[thatone]);

    bot.api.applications(bot.user.id).guilds('606955931145732111').commands.post({
        data: {
            name: "hello",
            description: "Replies with Hello World...?"
        }
    })

    bot.api.applications(bot.user.id).guilds('606955931145732111').commands.post({
        data: {
            name: "echo",
            description: "Says what you said. How original.",

            options: [
                {
                name: "content",
                description: "Content of the embed",
                type: 3,
                required: true
                }
            ]
        }
    });

    bot.ws.on('INTERACTION_CREATE', async interaction =>{
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if(command == 'hello'){
            bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "I'm not saying that."
                    }
                }
            })
        }

        if(command == "echo") {
            const description = args.find(arg => arg.name.toLowerCase() == "content").value;
            const embed = new Discord.MessageEmbed()
                .setTitle("Echo!")
                .setDescription(description)
                .setAuthor(interaction.member.user.username);

            bot.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, embed)
                }
            });
            
        }

    })

})

async function createAPIMessage(interaction, content){
    const apiMessage = await Discord.APIMessage.create(bot.channels.resolve(interaction.channel.id), content)
    .resolveData()
    .resolveFiles();

    return { ...apiMessage.data, files: apiMessage.files };
}

bot.on('message', message=> {
    
    let args = message.content.substring(PREFIX.length).split(" ");
    let choices = message.content.substring(PREFIX.length).split("| ");

    
    
    

    if (message.content.startsWith(PREFIX)){

    switch(args[0]){
        case 'ping':
            // message.channel.send('Pong!');
            message.reply('Pong!');
        break

        case 'help':
            message.channel.send('There is no help. Only chaos. \n \n ||(v!commands)||');
            break;
        
        case 'info':
            if(args[1] === 'version'){
                const embed = new Discord.MessageEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                .setColor('#00FA9A')
                .setTitle("Current Bot Version")
                .setDescription("I'm on "+version+ "!")
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                message.channel.send(embed);
            }
            else if(args[1] === 'nupdate'){
                botup = "There are no current public plans for the next update. Please try again another time.";
                
                const embed = new Discord.MessageEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                .setColor('#FF00FF')
                .setTitle("Upcoming Update Information")
                .setDescription(botup)
                .setTimestamp()
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                message.channel.send(embed);
            }
            else if(args[1] === 'oldies'){
                message.channel.send("There's a black hole where the oldie forder used to be...");
                //message.channel.send("There are **"+olds+"** oldie pictures in the folder so far! \n\nDo you have a picture you want to add to the command? Feel free to DM Gabe with your suggestion!");
            }
            else if(args[1] === 'changelog'){
                const embed = new Discord.MessageEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                .setColor('#DC143C')
                .setTitle("VirusBot "+version+" Changelog")
                .setDescription("VB's April Update is here!")
                .addField('\u200b', '\u200b')
                .addField("We'll ask again!", "There are more questions in the trivia command! How much do you actually know?")
                .addField('\u200b', '\u200b')
                .addField("I'LL KILL YOU! LIGHTNING FIST!", "A new command approaches! 'v!deathbattle' is here!")
                .addField('\u200b', '\u200b')
                .addField("How fond are you two?", "'v!pair' is finally ready for use! Test the relationships of people you barely even know!")
                .addField('\u200b', '\u200b')
                .addField("As a wise guy once said...", "Say hello to 'v!quote'! (Requested by TheUnchuckled!)")
                .addField('\u200b', '\u200b')
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                message.channel.send(embed);
            }
            else if(args[1] === 'bot'){
                const embed = new Discord.MessageEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                .setColor('#00FF00')
                .setTitle("Who am I?")
                .setDescription("VirusBot is a bot created as a test project. For some reason, I'm still here.")
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                message.channel.send(embed);
            }
            else {
                _info = "Current info available: \n\n-version: The current version of the bot.\n-nupdate: Provides little information about the next upcoming update.\n-bot: Gives info on the bot. \n-oldies: Shows how many pictures are in the 'oldie' command.\n-changelog: See what new features got added to the bot! \n\n[Please leave a space between the command and the selected word.]\nEg. 'v!info bot'";
                const embed = new Discord.MessageEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                .setColor('#00BFFF')
                .setTitle("Information Command's Options")
                .setDescription(_info)
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                message.channel.send(embed);
            }
        break;    

        case 'post':
            if (args[1] != undefined){
                bot.channels.cache.get('636573475993288734').send(message.content.slice(7));
            }
        break;

        
        case 'love':
            if (args[1] === 'you'){
                if (message.author.id === '356389068634062848'){
                    message.channel.send('Love you too, <@' + message.author.id +'>! ❤');
                }
                else {
                message.channel.send('Gay.');
                }
            }
            else {
                user = message.mentions.users.first();
                if (user !== undefined){
                message.channel.send('**' +message.author.username +'** has confessed their love to **'+ user.username+'**! :heart:'); 
                }
                else {
                    message.reply(':heart:');
                }


            }
        break;


        case 'HappyBirthdayMoon':
            message.channel.send("Clean up the confetti! This command was fun, but now it's time to say goodbye. The command still exists, but its code will be used for something else soon. Thanks for the support!")
            break;

        case 'shitpostStatus':
            indexroll = 0;
            rollboll = true;
            currentmoon = new MessageAttachment(rollpics[0]);
            message.channel.send(currentmoon).then(message => {message.react("◀️");
        message.react("▶️");
        message.react("🔀"); 
        message.react("🛑");
        currentroll = message.id;})
            
        break;

        case 'choose':
            if (args[1] == undefined){
                message.channel.send("To properly use this command, please include at least two choices seperated by ' | '.\n\nExample:\n```v!choose (choice 1) | (choice 2)```")
            }
            else{
            cm = Math.floor ((Math.random() * choicemes.length));
            choos = Math.floor ((Math.random() * choices.length));
            thechoice = choices[choos];
            if (choos == 0){
                thechoice = choices[0].slice(7);
                message.channel.send(choicemes[cm]+"**"+thechoice+"**");
            }
            else{
            message.channel.send(choicemes[cm]+"**"+thechoice+"**");
            }
        }
        break;

        

        case 'dewtrans':
            var texttotrans = message.content.slice(11);
            var transedsen = "";

            for (i = 0; i < texttotrans.length; i++){
                a = texttotrans.charAt(i);
                b = dewtext.indexOf(a);

                if (engtext[b] != undefined){
                    transedsen += engtext[b];
                }
                else{
                    transedsen += texttotrans.charAt(i);
                }
            }

            message.channel.send(transedsen);

            break;

        case 'dewdrop':
            var texttotrans = message.content.slice(10);
            var transedsen = "";

            for (i = 0; i < texttotrans.length; i++){
                a = texttotrans.charAt(i);
                b = uengtext.indexOf(a);
                c = engtext.indexOf(a);


                if (uengtext[b] != undefined){
                    transedsen += dewtext[b];
                }
                else if (engtext[c] != undefined){
                    transedsen += dewtext[c];
                }
                else {
                    transedsen += texttotrans.charAt(i);
                }
            }

            message.channel.send(transedsen);
        break; 
            

        case 'changeAvatar':
            if (args[1] != undefined){
            bot.user.setAvatar(args[1]);
            message.channel.send("I'm diggin' the new look!");
            }
            else (
                message.channel.send("Can't find the URL. Did you post one?")
            )
        break;
        
        case 'setChannelname':
            if (args[1] != undefined){
                bot.member.setNickname(message.content.slice(17));
                message.channel.send("A-OK!");
                }
                else (
                    message.channel.send("No nick is found. Provide a space!")
                )
        break;

        case 'changeNick':
            if (args[1] != undefined){
                bot.guilds.cache.get(message.guild.id).member(BotID).nickname = (message.content.slice(13))
                message.channel.send("A-OK!");
            }
            else (
                message.channel.send("No nick was found.")
            )
        break;

        case 'me':
            const embed = new Discord.MessageEmbed()
                .setAuthor("About You", message.author.avatarURL())
                .setColor('#00BFFF')
                .setTitle(message.author.username)
                .setImage(message.author.avatarURL())
                .setDescription(message.author.tag)
                .addField('\u200b', '\u200b')
                .addField('User ID', message.author.id)
                .addField('Nickname in this server', message.member.nickname)
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                message.channel.send(embed);
        break;

        case 'nsfw':
            message.channel.send("What the absolute fuck is wrong with you? Looking up porn on Discord? Kindly re-think your life choices.");
        break;

        case 'timetorockwiththebiggitybuckbumble':
            message.channel.send("Right about now, it's time to rock with the biggity Buck Bumble");
            message.channel.send("Right about now, its time to rock with the biggity Buck Bumble");
            message.channel.send("Bump to the bump to the bump to the bass");
            message.channel.send("bump to the bump to the Bumble");
            message.channel.send("Bump to the bump to the bump to the bass");
            message.channel.send("bump to the bump to the Bumble");
            message.channel.send("Bump to the bump to the bump to the bass");
            message.channel.send("bump to the bump to the Bumble");
            message.channel.send("Bump to the bump to the bump to the bass");
            message.channel.send("bump to the bump to the Bumble");
            message.channel.send("Bump to boop to the boop to the boop boop");
            message.channel.send("Bump to the base to the base base base base");
            message.channel.send("Bump to boop to the boop to the boop boop");
            message.channel.send("Bump to the base to the base base base base");
            message.channel.send("Badabadaba");
            message.channel.send("Badabadaba");
            message.channel.send("He say");
            message.channel.send("Badabadaba");
            message.channel.send("Badabadaba");
            message.channel.send("He say ma te ulla eh");
            message.channel.send('Ey!');
            break;
        
        case 'jcount':
            let jc = bot.afile["JojoCount"].jCount;
            message.channel.send("The J word has been said a total of **"+jc+"** times.");
            break;
        

        case 'joe':
                if(args[1] === 'who'){
                    message.channel.send('Joe Mama 😎');
                }
                else {
                    message.channel.send("Who's Joe?");
                }
            break;

        case 'dead':
                user = message.mentions.users.first();
                if (user !== undefined){
                    message.channel.send(user.username + ' fucking dies! 🇫 😔');
                }
                else {
            message.channel.send(message.author.username + ' fucking dies! 🇫 😔');
                }
            break;

        case 'gamestop':
            message.channel.send(message.author.username + " in GameStop! \nWhat will they buy?")
            break;

        case 'beep':
            message.channel.send("beep.");
            break;

        case 'gay':
                user = message.mentions.users.first();
                if (user != undefined){
                    message.channel.send(user.username+ ' do be looking kinda fresh doe 😳')
                }
                else {
                message.channel.send(message.author.username + ' do be looking kinda fresh doe 😳')
                }
                break;
        
        case 'gluck':
            message.channel.send('All the best! 🌿');
            break;

        case 'bluck':
            message.channel.send('🖕 Hope you fail lol, mom gay.');
            break;

        case 'hi':
            message.channel.send('What the heck do you want, '+ message.author.username+ '?');
            break;

        case 'uwuify':
                //9
                beforemes = message.content.slice(9);
                aftermes = "";
                aftermes1 = "";
                aftermes2 = "";
                aftermes3 = "";
                aftermes4 = "";
                aftermes5 = "";
                for (i = 0; i < beforemes.length; i++){
                    aftermes += beforemes.charAt(i).replace("r", "w");
                }
                for (i = 0; i < aftermes.length; i++){
                    aftermes1 += aftermes.charAt(i).replace("R", "W");
                }
                for (i = 0; i < aftermes1.length; i++){
                    aftermes2 += aftermes1.charAt(i).replace("y", "i");
                }
                for (i = 0; i < aftermes2.length; i++){
                    aftermes3 += aftermes2.charAt(i).replace("o", "u");
                }
                message.channel.send(aftermes3);
        break;

        case 'bruh':
            bruhs = 7;
                bruhNumber = Math.floor (Math.random() * (bruhs - 1 + 1)) +1;
                message.channel.send ( { files: ["./bruh/bruh (" + bruhNumber + ").jpg"]})
            break;

        case 'knux':
                message.channel.send("An artist in training that likes woke music and is a great companion to all. Unless you're some bitch to the community, which in that case, seek medical help. \n\n**Example:** \nGuy 1: Yo dude. I read your message. \nGuy 2: Ye, so did Knux. He even gave a heart-warming response. \nGuy 1: Oshit he did? Damn that guy's good.");
                break;

        case 'moonuwu':
                const attachment1 = new MessageAttachment('https://cdn.discordapp.com/attachments/606957183900450864/634960062519050261/2019071723184300-BF19FBEA37724338D87F26F17A3B97B2_2.jpg');
                message.channel.send(attachment1);
                break;

        case 'sad':
                const attachment2 = new MessageAttachment('https://cdn.discordapp.com/attachments/606957047082123264/631320733808721931/EGXV4R3WkAIyAP5.png');
                message.channel.send(attachment2);
                break;

        case 'ajoke':
                const attachment3 = new MessageAttachment('https://cdn.discordapp.com/attachments/398526069910798348/635638676201668685/FB_IMG_1554240681853.jpg');
                message.channel.send(attachment3);
                break;

        case 'buddy':
                const attachment4 = new MessageAttachment('https://cdn.discordapp.com/attachments/398526069910798348/635640325846728722/FB_IMG_1563678345828.jpg');
                message.channel.send(attachment4);
                break;

        case 'clown2':
                const attachment5 = new MessageAttachment('https://cdn.discordapp.com/attachments/437799192035983370/635644513217413122/image0.png');
                message.channel.send("Go ahead. Take a seat. It's your time for an interview. \n")
                message.channel.send(attachment5);
                break;

        case 'thouthefuck':
                const attachment6 = new MessageAttachment('https://cdn.discordapp.com/attachments/635602329927811113/635651754377085044/image0.jpg');
                message.channel.send(attachment6);
                break;
        
        case 'nice':
                const attachment7 = new MessageAttachment('https://cdn.discordapp.com/attachments/408750397675536404/601466819181805578/baca561.jpg');
                message.channel.send(attachment7);
                break;

        case 'dong':
                const attachment8 = new MessageAttachment('https://cdn.discordapp.com/attachments/607654317079396410/635844808635580426/z6n_7Qz8SlwW5uu7KjzVnz7rOnEhXbYBIj5IquOSkVI.jpg');
                 message.channel.send(attachment8);
                break;

        case 'funky':
                const attachment9 = new MessageAttachment('https://media.discordapp.net/attachments/635602329927811113/635700121056837633/image0.png');
                message.channel.send(attachment9);
                break;

        case 'toxicegg':
                const attachment10 = new MessageAttachment('https://cdn.discordapp.com/attachments/635602329927811113/635700840140767232/T_O_X_I_C.webm');
                message.channel.send(attachment10);
                break;

        case 'egirl':
                const attachment11 = new MessageAttachment('https://cdn.discordapp.com/attachments/398526069910798348/635702342372818944/image0.png');
                message.channel.send(attachment11);
                break;

        case 'WAHOO':
                const attachment12 = new MessageAttachment('https://cdn.discordapp.com/attachments/616764759106256913/635214611804717067/video0.mp4');
                message.channel.send(attachment12);
                break;

        case 'famished':
                message.channel.send("[ARCHIVED] \nOk, so you know those movies which has that ONE villain you love to hate, and then suddenly the villain joins the good side and now you're just straight up in love with the person? (Not LOVE love ofc cuz you can't be with a fictional character.) Meet Jet. \nJet's that kind of person you might be scared of at first, but as you get to meet them, you can't leave them alone. One of her 'special abilities' is that she can be an entire mood at times. She even had a nickname for it! She's also pretty tough and sarcastic, but the times she breaks out into a playful mood can be arguably considered to be pretty cute. (but ***DO NOT CALL HER CUTE***, or else you might end up with a gun pointed at your face.) She's no Izzle, no Moon, no Pip, nor an Irri. She's *Jet*, and I'm glad she's in the gang. Once a mood, always a mood!");
                const attachment13 = new MessageAttachment('https://cdn.discordapp.com/attachments/607654317079396410/638828874129604608/unknown.png');
                message.channel.send(attachment13);
                break;

        case 'whatcanIsay':
                const attachment14 = new MessageAttachment('https://66.media.tumblr.com/69f01a4c46e75a6bb4025125fe4c1d6a/tumblr_inline_p355yfsMQ61s1rco5_1280.gif');
                message.channel.send(attachment14);
                break;

        case 'clown':
                const attachment15 = new MessageAttachment('https://cdn.discordapp.com/attachments/455154217003384853/613906735937224704/FB_IMG_1565934985882.jpg');
                message.channel.send(attachment15);
                break;

        case 'rock':
            const attachment16 = new MessageAttachment('http://pa1.narvii.com/6448/39ff33fbbd17386ffd3838a18d92de1b041f133a_00.gif');
            message.channel.send("GO KLAVIER!!");
            message.channel.send(attachment16);
            break;

        case 'laugh':
            const attachment17 = new MessageAttachment('https://cdn.discordapp.com/attachments/686423110198624266/707806244039295036/Laugh_1.mp4');
                message.channel.send(attachment17);
                break;

                case 'denyhug':
                    const attachment18 = new MessageAttachment('https://tenor.com/view/boy-punish-mad-pissed-off-slap-gif-14667643');
                    message.channel.send("The hug was denied! Off with you, ya thot!");
                    message.channel.send(attachment18);
                    break;

        case 'imthisclose':
                const attachment19 = new MessageAttachment('https://cdn.discordapp.com/attachments/616765923491053671/716435153404035172/video0.mp4');
                message.channel.send(attachment19);
                break;

        case 'diggy':
                const attachment20 = new MessageAttachment('https://cdn.discordapp.com/attachments/635683701987999804/716436252832039042/video0.mp4');
                message.channel.send(attachment20);
             break;


        case 'bottomtext':
            message.channel.send('Your free bottom text, sir. \n  \nbottom text');
            break;

        case 'h':
            message.channel.send(message.member.nickname + " has h'ed. I suggest we all h as well.");
            break;

        case 'crash':
            message.channel.send("Unfortunately, this command no longer exists.");
            break;

        case 'ts':

                switch (args[1]){
                    case '0':
                            message.channel.send('**Tomato Soup** is an ongoing (kinda) series about a girl named Irri who is on a quest to find the mythical tomato soup, a legendary food that has been rumoured to cure any cold. During her quest, she will meet many different friends and take a crap ton of detours from her main goal. The series is well praised for having a determined yet lovable main character alongside an unexpected plot for each episode.');
                            break;
                    
                            case '1':
                                    message.channel.send("**Tomato Soup Part 1**: We meet our protagonist, Irri, who shortly comes with a never-ending cold. In an attempt to get rid of it, she goes on a quest to find the mythical 'Tomato Soup', which is rumored to be the soup that can cure any illness. Somewhere at the beginning of her journey, she meets the legendary Mewtwo, who then warns her that most of the village, including Irri's friends, had turned into birds from the work of a bitch named Melody. Quickly putting aside her current quest to save her friends, she follows Mewtwo to an island that contains the cure to turn them back to normal: Water. With the help of her Pokémon friend, she was able to carry a huge tub of water to the village and save her friends. After doing so, she heads out once again to find the soup.");
                            break;

                            case '2':
                                    message.channel.send("**Tomato Soup Part 2**: As she continues her hunt for the soup, she meets a new friend called Dandebish. During their conversation, Dandebish reveals to be a C-rank, who ran away from his group in hopes of joining B-ranks who are a group of players that live near Irri's village. Irri, being a B-rank herself, promises Dandebish to help him become one of them, and in return Dandebish agrees to join her in her quest. Unfortunately, both of them are ambushed by a small group of C-ranks shortly after, and Irri becomes separated from her new friend. Randomly determined by the power of friendship, Irri sneaks her way into the C-ranks' base and saves her friend, who she then gives directions to the location of the B-ranks and sends him off. Making sure no other C-rank follows him along the way, she then heads off to her main quest.");
                            break;

                            case '3':
                                    message.channel.send("**Tomato Soup Part 3**: Irri spots a village during her journey and decides to head there for the night. While she introduces herself to the villagers, she encounters a group of kids who informs her about a shortcut to find the mythical soup known as 'The Abyss'. The next morning, she heads out into the Abyss, accompanied by a loli who claims that her mother is also somewhere into the Abyss and 'she must find her'. During the adventure, they meet many different creatures. Some being cute, while most being insanely deadly. Somewhere during the episode, Irri informs the loli to stat put while she goes to gather food. The loli, of course, doesn't listen, and ventures further into the Abyss. There, she meets a poisonous monster, who didn't hesitate to attack the dumb loli. Irri quickly finds her laying on the ground, but is unable to do anything that can help her get rid of the poison...that is until a bunny girl appears who agrees to help cure the badly damaged girl.");
                            break;

                            case '4':
                                    message.channel.send("**Tomato Soup Part 4**: Continuing from the last episode, Irri leaves the loli to be cured at the bunny girl's house. Shortly after, she receives a text message from her friends which asks how the quest for the soup is going. As she's about to respond, she receives another message asking for her urgent help, as their village is being 'attacked by an anime girl with spinning swords'. The scene then goes to the village, where Irri's friends meet different characters from different anime genres, who were bought here from the same anime girl they reported to Irri. One of the anime genre characters, being a loli princess, tries to stop the sword girl from her plans to destroy the world, but she was killed off shortly after. It's now up to the other genres to stop her before it's too late, but the progress isn't going well since some of the characters have joined forces with the sword girl to help her evil scheme to occur, not knowing of her full plan. Will the good genres be able to save the world with the help of Irri's friends? Will Irri be able to make it back to the village in time? What about her quest to find the Tomato Soup? I guess we'll have to wait until part 5 to find out...");
                            break;

                            case '5':
                                    message.channel.send("**Tomato Soup Part 5**: One short recap of episodes 1-4 later by an over-exaggerated busty Irri, and with a new bangin' OP, we are taken back to the village, where all of Irri's friends are plotting to get rid of the girl with spinning swords once and for all. It is believed that she was created by a girl who brutally killed herself, and if taken carefully, they can create a knock-off RP series with her as a villain character to defeat her. Somewhere during their preparations for the plan, we meet a new anime girl, who comes from a hentai game. Eventually, the plan turned out to be a success, persuading 100+ roleplayers to join the arc! The sword girl, who already knew about the scheme the same day it was created, decided to join in on the fun with her own gang of anime genre characters, and thus without any delay the arc (hilariously titled 'Korbs takes an hour to Piss.') begins! Not too long during the arc, the sword girl decides to break the fourth wall with all the roleplayers, but it doesn't cause too much damage to the plan, as shortly later, almost every character that was in her evil gang decided to join the good side, some by force. The episode then ends with another cliff-hanger, as the sword girl reveals one more character that was in her small gang, who turns out to be the secondary protagonist in one of Irri's most-watched animes...");
                            break;

                            default:
                                message.channel.send("There's no pot on the stove! Not a valid arg. Only numbers 0-5 are currently available.");
                                break;
                }

            break; 

            /*
            case 'etr':
                switch (args[1]){
                    default: 
                    message.channel.send("```Invalid number/arg.```");
                    break;

                    case '0':
                        message.channel.send("**Enter The Rimworld** is a story about surviving a group of people who all have the singular goal of surviving the jungle. Together, they'll have to build stable habitats, hunt for edible food, and fend off violent raiders. Who knows if some of them will even survive at the end...? The future is unreadable.");
                        break;

                    case '1':
                        message.channel.send(`**Enter The Rimworld: Chapter 1**\nThe Jungle. Damp, luscious, and full of predators. It's a fool's paradise. No matter how green the grass could be, or how tall the trees can get, no one would want to live in such a place without any form of protection. That didn't stop three people from picking that place as their new home, though. These three were given a simple mission: Survive. With their given resources and skills, at seems like a cakewalk at first glance. However, not everything is as it seems. One of the people, an old man called by his people with the name 'Nokobo', took one big sniff of his new habitat before looking back at his teammates.\n"Ah, nothing like the fresh smell of death!" He gleefully shouted at the trees behind the engaged couple; the Pirate Doctor named Irri, and his wife, the careless hunter named Cain.\n"The crickets around this place are awfully loud." The huntress quickly complained, darting her eyes around the surrounding trees, looking for anything that she can grab for dinner.\n"Good!" Nokobo replied, "That means it's time to stop lounging around and finally build a shelter. Irri, the blueprints, please."\nWithout hesitation, the horned doctor handed the old man a blue piece of paper. And with one quick glance at the plan, he got started on cutting down the nearby trees...
                        ~~~`);
                        message.channel.send(`"cAIN!!"\n"WHAT?!"\nIrri kicked open the door to both Cain and his room, allowing a small, frail cat to run inside said room and quickly crash on the bed where Cain's slumber was interrupted by her husband's voice. \n"We have a cat now!" Irri gives off a smile of pure happiness.\n"You-You woke me up for this?" Cain's tired and grumpy voice informed Irri's smile to fade away.\n"Well, it's also sunrise, dear. C'mon, we have a full day ahead of us."\nCain groaned in disgust, reflecting on the week she had to put up through. First, she had to get used to the new environment, then she was given the job as the food hunter for the team, and now, there's a cat on her bed. But she wasn't too bothered on the second part, though. Shooting stuff is her specialty, even when the target begins to beg for mercy. After one more minute of lazing about on the bed, she hops off to reach for her gun, which was at its usual place of being under the bed, before walking out of her wooden cabin, followed by her new pet.\n"CAAIN, I'M HUNGRYYY!" The voice of an old man next to an unfinished kitchen whimpered loudly in the near distance.\n"Not my fault." Cain checked the number of remaining bullets in her gun, scaring away the cat that was behind her in the process with its noise. No ammo.\n"Ugh. What does it take to have good guns here?"\n"Time." Irri walked towards Cain with a blueprint in his hands, "A lot of time, unfortunately."\n"Then hurry up." Cain snapped. \n"Hah! Welcome to the new world!" Nokobo joked while nailing together two flimsy boards of wood. Truly, there's a lot of work to do if they want to continue on in this world. But for now, it's just three people stranded in a jungle...preparing themselves for one hell of a journey they're about to take.`);
                        break;
                }
                break;
                */

        case 'bye':
                message.channel.send('lmao bye ' + message.author.username + ' af.')
                break;

        case 'vibecheck':
            message.channel.send("Number of vibesongs: "+ vibesongs.length);
            break;
        
        case 'weeb':
            message.channel.send('⣿⣿⣿⣿⣿⣿⡷⣯⢿⣿⣷⣻⢯⣿⡽⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠸⣿⣿⣆⠹⣿⣿⢾⣟⣯⣿⣿⣿⣿⣿⣿⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌\n⣿⣿⣿⣿⣿⣿⣻⣽⡿⣿⣎⠙⣿⣞⣷⡌⢻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡄⠹⣿⣿⡆⠻⣿⣟⣯⡿⣽⡿⣿⣿⣿⣿⣽⡷⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣟⣷⣿⣿⣿⡀⠹⣟⣾⣟⣆⠹⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢠⡘⣿⣿⡄⠉⢿⣿⣽⡷⣿⣻⣿⣿⣿⣿⡝⣷⣯⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣯⢿⣾⢿⣿⡄⢄⠘⢿⣞⡿⣧⡈⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣧⠘⣿⣷⠈⣦⠙⢿⣽⣷⣻⣽⣿⣿⣿⣿⣌⢿⣯⢿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣟⣯⣿⢿⣿⡆⢸⡷⡈⢻⡽⣷⡷⡄⠻⣽⣿⣿⡿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣏⢰⣯⢷⠈⣿⡆⢹⢷⡌⠻⡾⢋⣱⣯⣿⣿⣿⣿⡆⢻⡿⣿⣿⣿⣿⡟⣿\n⣿⣿⣿⣿⣿⣿⡎⣿⢾⡿⣿⡆⢸⣽⢻⣄⠹⣷⣟⣿⣄⠹⣟⣿⣿⣟⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⢸⣯⣟⣧⠘⣷⠈⡯⠛⢀⡐⢾⣟⣷⣻⣿⣿⣿⡿⡌⢿⣻⣿⣿⣿⣿⡌\n⣿⣿⣿⣿⣿⣿⣧⢸⡿⣟⣿⡇⢸⣯⣟⣮⢧⡈⢿⣞⡿⣦⠘⠏⣹⣿⣽⢿⣿⣿⣿⣿⣯⣿⣿⣿⡇⢸⣿⣿⣾⡆⠹⢀⣠⣾⣟⣷⡈⢿⣞⣯⢿⣿⣿⣿⢷⠘⣯⣿⣿⣿⣿⣷\n⣿⣿⣿⣿⣿⣿⣿⡈⣿⢿⣽⡇⠘⠛⠛⠛⠓⠓⠈⠛⠛⠟⠇⢀⢿⣻⣿⣯⢿⣿⣿⣿⣷⢿⣿⣿⠁⣾⣿⣿⣿⣧⡄⠇⣹⣿⣾⣯⣿⡄⠻⣽⣯⢿⣻⣿⣿⡇⢹⣾⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⡇⢹⣿⡽⡇⢸⣿⣿⣿⣿⣿⣞⣆⠰⣶⣶⡄⢀⢻⡿⣯⣿⡽⣿⣿⣿⢯⣟⡿⢀⣿⣿⣿⣿⣿⣧⠐⣸⣿⣿⣷⣿⣿⣆⠹⣯⣿⣻⣿⣿⣿⢀⣿⢿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⠘⣯⡿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣧⡈⢿⣳⠘⡄⠻⣿⢾⣽⣟⡿⣿⢯⣿⡇⢸⣿⣿⣿⣿⣿⣿⡀⢾⣿⣿⣿⣿⣿⣿⣆⠹⣾⣷⣻⣿⡿⡇⢸⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡇⢹⣿⠇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠻⡇⢹⣆⠹⣟⣾⣽⣻⣟⣿⣽⠁⣾⣿⣿⣿⣿⣿⣿⣇⣿⣿⠿⠛⠛⠉⠙⠋⢀⠁⢘⣯⣿⣿⣧⠘⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⡈⣿⡃⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⠌⣿⣆⠘⣿⣞⡿⣞⡿⡞⢠⣿⣿⣿⣿⣿⡿⠛⠉⠁⢀⣀⣠⣤⣤⣶⣶⣶⡆⢻⣽⣞⡿⣷⠈⣿⣻⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠘⠁⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⢿⣄⢻⣿⣧⠘⢯⣟⡿⣽⠁⣾⣿⣿⣿⣿⣿⡃⢀⢀⠘⠛⠿⢿⣻⣟⣯⣽⣻⣵⡀⢿⣯⣟⣿⢀⣿⣽⣿⣿\n⣿⣿⣿⣟⣿⣿⣿⣿⣶⣶⡆⢀⣿⣾⣿⣾⣷⣿⣶⠿⠚⠉⢀⢀⣤⣿⣷⣿⣿⣷⡈⢿⣻⢃⣼⣿⣿⣿⣿⣻⣿⣿⣿⡶⣦⣤⣄⣀⡀⠉⠛⠛⠷⣯⣳⠈⣾⡽⣾⢀⣿⢾⣿⣿\n⣿⢿⣿⣿⣻⣿⣿⣿⣿⣿⡿⠐⣿⣿⣿⣿⠿⠋⠁⢀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣌⣥⣾⡿⣿⣿⣷⣿⣿⢿⣷⣿⣿⣟⣾⣽⣳⢯⣟⣶⣦⣤⡾⣟⣦⠘⣿⢾⡁⢺⣿⣿⣿\n⣿⣻⣿⣿⡷⣿⣿⣿⣿⣿⡗⣦⠸⡿⠋⠁⢀⢀⣠⣴⢿⣿⣽⣻⢽⣾⣟⣷⣿⣟⣿⣿⣿⣳⠿⣵⣧⣼⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣽⣳⣯⣿⣿⣿⣽⢀⢷⣻⠄⠘⣯⣿⣿\n⣿⢷⣻⣿⣿⣷⣻⣿⣿⣿⡷⠛⣁⢀⣀⣤⣶⣿⣛⡿⣿⣮⣽⡻⣿⣮⣽⣻⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢀⢸⣿⢀⡆⣿⣿⣿\n⠸⣟⣯⣿⣿⣷⢿⣽⣿⣿⣷⣿⣷⣆⠹⣿⣶⣯⠿⣿⣶⣟⣻⢿⣷⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣯⣟⢀⡇⢼⣿⣿\n⣇⠹⣟⣾⣻⣿⣿⢾⡽⣿⣿⣿⣿⣿⣆⢹⣶⣿⣻⣷⣯⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⡿⡇⢸⡇⢸⣿⡇\n⣿⣆⠹⣷⡻⣽⣿⣯⢿⣽⣻⣿⣿⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢸⣿⠇⣼⡇⢸⡿⢠\n⡙⠾⣆⠹⣿⣦⠛⣿⢯⣷⢿⡽⣿⣿⣿⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠎⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣿⣾⣣⡿⡇⢸⢃⣾\n⣿⣷⡌⢦⠙⣿⣿⣌⠻⣽⢯⣿⣽⣻⣿⣿⣿⣧⠩⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢰⢣⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢀⢀⢿⣞⣷⢿⡇⠉⣼⣿\n⣿⣽⣆⠹⣧⠘⣿⣿⡷⣌⠙⢷⣯⡷⣟⣿⣿⣿⣷⡀⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣈⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢀⣴⡧⢀⠸⣿⡽⣿⢀⣾⣿⣿\n⢻⣽⣿⡄⢻⣷⡈⢿⣿⣿⢧⢀⠙⢿⣻⡾⣽⣻⣿⣿⣄⠌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢁⣰⣾⣟⡿⢀⡄⢿⣟⣿⢀⣿⣿⣿\n⡄⢿⣿⣷⢀⠹⣟⣆⠻⣿⣿⣆⢀⣀⠉⠻⣿⡽⣯⣿⣿⣷⣈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⣠⠘⣯⣷⣿⡟⢀⢆⠸⣿⡟⢸⣿⣿⣿\n⣷⡈⢿⣿⣇⢱⡘⢿⣷⣬⣙⠿⣧⠘⣆⢀⠈⠻⣷⣟⣾⢿⣿⣆⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⡞⢡⣿⢀⣿⣿⣿⠇⡄⢸⡄⢻⡇⣼⣿⣿⣿\n⣿⣷⡈⢿⣿⡆⢣⡀⠙⢾⣟⣿⣿⣷⡈⠂⠘⣦⡈⠿⣯⣿⢾⣿⣆⠙⠻⠿⠿⠿⠿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢋⣠⣾⡟⢠⣿⣿⢀⣿⣿⡟⢠⣿⢈⣧⠘⢠⣿⣿⣿⣿\n⣿⣿⣿⣄⠻⣿⡄⢳⡄⢆⡙⠾⣽⣿⣿⣆⡀⢹⡷⣄⠙⢿⣿⡾⣿⣆⢀⡀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⣠⣴⡿⣯⠏⣠⣿⣿⡏⢸⣿⡿⢁⣿⣿⢀⣿⠆⢸⣿⣿⣿⣿\n⣿⣿⣿⣿⣦⡙⣿⣆⢻⡌⢿⣶⢤⣉⣙⣿⣷⡀⠙⠽⠷⠄⠹⣿⣟⣿⣆⢙⣋⣤⣤⣤⣄⣀⢀⢀⢀⢀⣾⣿⣟⡷⣯⡿⢃⣼⣿⣿⣿⠇⣼⡟⣡⣿⣿⣿⢀⡿⢠⠈⣿⣿⣿⡟\n⣿⣿⣿⣿⣿⣷⣮⣿⣿⣿⡌⠁⢤⣤⣤⣤⣬⣭⣴⣶⣶⣶⣆⠈⢻⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣷⣶⣤⣌⣉⡘⠛⠻⠶⣿⣿⣿⣿⡟⣰⣫⣴⣿⣿⣿⣿⠄⣷⣿⠆⢻⣿⣿⡇')
            break;

        case 'todaysong':
            let tdmessage = bot.afile["TodaySong"].today_song;
            //message.channel.send("Today's Song is currently unavailabe. Until it's ready, just enjoy this bop. \nhttps://youtu.be/Ejv0Gk-mGko");
            message.channel.send(tdmessage);
            
            break;

        case 'numbers':
            message.channel.send(message.createdTimestamp);
            break;


        case 'oldie':
            
            //imageNumber = Math.floor (Math.random() * (olds - 1 + 1)) +1;
            //message.channel.send ( { files: ["./oldies/oldie (" + imageNumber + ").png"]})
            message.channel.send("...")
            break;
            
        
            case 'generate':
                message.channel.send("Your generated sentence is: \n");
                w1 = Math.floor ((Math.random() * word1.length));
                w2 = Math.floor ((Math.random() * word2.length));
                w3 = Math.floor ((Math.random() * word3.length));
                w4 = Math.floor ((Math.random() * word4.length));

                message.channel.send(word1[w1]+" "+word2[w2]+" "+word3[w3]+" "+word4[w4]+".");
            break;

            case 'generatw':
                
                w1 = Math.floor ((Math.random() * word1.length));
                w2 = Math.floor ((Math.random() * word2.length));
                w3 = Math.floor ((Math.random() * word3.length));
                w4 = Math.floor ((Math.random() * word4.length));

                message.channel.send(word2[w2]+" "+word4[w4]+" "+word3[w3]+" "+word1[w1]);
            break;

           case 'dedmeme':
            
                imageNumber1 = Math.floor (Math.random() * (deds - 1 + 1)) +1;
                message.channel.send ( { files: ["./ded/ded (" + imageNumber1 + ").jpg"]})
                break;

                case 'wtf':
                        wtfs = 43;
                        imageNumber2 = Math.floor (Math.random() * (wtfs - 1 + 1)) +1;
                        message.channel.send ( { files: ["./wtf/wtf (" + imageNumber2 + ").jpg"]})
                        break;

                        case 'hoesMad':
                            hoe = 3;
                            imageNumber3 = Math.floor (Math.random() * (hoe - 1 + 1)) +1;
                            message.channel.send ( { files: ["./hoes/hoes (" + imageNumber3 + ").jpg"]})
                            break;

            case 'hug':
                hugs = 16;
                user = message.mentions.users.first();
                if (user !== undefined && user.id === message.author.id){
                    message.channel.send("Oh...you hugged yourself? Damn, you're lonely...")
                }
                else if (user !== undefined && user.id === BotID) {
                    if (message.author.id === '356389068634062848') {
                        gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                    message.channel.send("*Hugs "+message.author.username+" back!* 💙");
                    message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    }
                    else {

                    message.channel.send("Nope! You ain't hugging me ya crap! Hug someone else!")
                }
            }
                else if (user !== undefined && user.id != BotID){
                    if (user.id == '346324933598773251'){
                        gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                        message.channel.send("*You got this, Prince! Stay strong, and believe in yourself because everyone believes in you!* ❤️");
                        message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    }
                    else{
                    gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                    message.channel.send("*"+message.author.username+" gives "+user.username+" a hug!* 💙");
                    message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    suplexChance = Math.floor (Math.random() * (10 - 1 + 1)) +1;
                    if (suplexChance <= 1){
                        const suplex = new MessageAttachment('https://cdn6.omidoo.com/sites/default/files/imagecache/1200x630/images/headline/201803/thesuplex2.jpg');
                        message.channel.send("But surprise! It turned into a hecking suplex!")
                        message.channel.send(suplex);
                    }
                    }
                }
                else {
                    message.channel.send("...but there's no one to hug! How pitiful...");
                        }


                break;

                case 'purehug':
                    hugs = 16;
                    user = message.mentions.users.first();
                    if (user !== undefined && user.id === message.author.id){
                        message.channel.send("Oh...you hugged yourself? Damn, you're lonely...")
                    }
                    else if (user !== undefined && user.id === BotID) {
                        if (message.author.id === '356389068634062848') {
                            gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                        message.channel.send("*Hugs "+message.author.username+" back!* 💙");
                        message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                        }
                        else {
    
                        message.channel.send("Nope! You ain't hugging me ya crap! Hug someone else!")
                    }
                }
                    else if (user !== undefined){
                        gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                        message.channel.send("*"+message.author.username+" gives "+user.username+" a hug!* 💙");
                        message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    }
                    
            
                
                
                else {
            message.channel.send("...but there's no one to hug! How pitiful...");
                }
            break;

            

            case 'call':
                
                if (callkey === true) {
                    message.channel.send("A call is already in session! It'd be rude to interrupt them...")
                }
                else {
                message.channel.send("Calling via the VirusNet...");
                callA = message.channel.id;
                callB = Math.floor ((Math.random() * callids.length));

                while (callA === callids[callB]){
                callB = Math.floor ((Math.random() * callids.length));
                }

                if (message.channel.id === '338046744849809408') {
                    message.channel.send("The call function has been blocked from this channel. Sorry!")
                }
                else {
                bot.channels.cache.get(callids[callB]).send("**Someone has called this channel! Who could it be...?**");
                message.channel.send("**I caught something! Say hello!**");
                callkey = true;
                }
            }
                

               

                break;


                case 'hang':
                    if (callkey === true){
                        if (message.channel.id === callA) {
                            bot.channels.cache.get(callA).send("**Hanged up.**");
                            bot.channels.cache.get(callids[callB]).send("**The other party has hanged up the call!**");
                            callkey = false;
                        }
                        else if (message.channel.id === callids[callB]){
                            bot.channels.cache.get(callA).send("**The other party has hanged up the call!**");
                            bot.channels.cache.get(callids[callB]).send("**Hanged up.**");
                            callkey = false;
                        }
                        else {
                            bot.channels.cache.get(callA).send("**A third party has ended the call!**");
                            bot.channels.cache.get(callids[callB]).send("**A third party has ended the call!**");
                            callkey = false;
                        }
                    }
                    else {
                        message.channel.send("**No one has been called!**")
                    }
                    
                    break;
                    
                case 'sAsk':
                    questionmessage = message.content.slice(7);
                    QA = Math.floor((Math.random() * questionchannels.length));
                    AQ = message.channel.id;

                    while (message.guild.id == bot.channels.cache.get(questionchannels[QA]).guild.id){
                        QA = Math.floor((Math.random() * questionchannels.length));
                    }

                    bot.channels.cache.get(AQ).send("Question Sent! Let's await for an answer...");
                    const questionembed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setColor('#DC143C')
                    .addField("Incoming Question from this user!", "\n**Question:** "+questionmessage+"\n")
                    .setFooter("You can reply with 'v!sAns [answer]'")
                    bot.channels.cache.get(questionchannels[QA]).send(questionembed);
                    QQ = true;

                break;

                case 'sAns':
                    if (!QQ){
                        message.channel.send("No question to answer!");
                    }
                    else{
                        answermessage = message.content.slice(7)

                        const answerembed = new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL())
                        .setColor('#DC143C')
                        .addField("A question has been answered!", "\n**Question:** "+questionmessage+"\n\n**Answer:** "+answermessage+"\n")
                        
                        bot.channels.cache.get(AQ).send(answerembed);
                        message.channel.send("Answer Sent!")
                        QQ = false;
                    }
                    
                break;
                
            case 'slots':
            case 'slot':

                emonum0 = Math.floor ((Math.random() * fruits.length));
                emonum1 = Math.floor ((Math.random() * fruits.length));
                emonum2 = Math.floor ((Math.random() * fruits.length));
                message.channel.send("🎰 `Welcome to Jack's Casino!` 🎰 \n**" +message.author.username+"** rolled the slots...\n   ["+fruits[emonum0]+" "+fruits[emonum1]+" "+fruits[emonum2]+"]")
                if (fruits[emonum0] === fruits[emonum1] && fruits[emonum0] === fruits[emonum2]) {
                    message.channel.send("...***and WON!*** :tada: :tada:")
                }
                else if (fruits[emonum0] === fruits[emonum1] || fruits[emonum0] === fruits[emonum2] || fruits[emonum1] === fruits[emonum2]){
                    message.channel.send("...and *almost* won...")
                }
                else {
                    message.channel.send("...and lost...")
                }
                break;

            case 'imposslots':

                imo1 = Math.floor ((Math.random() * fruits.length));
                imo2 = Math.floor ((Math.random() * fruits.length));
                imo3 = Math.floor ((Math.random() * fruits.length));
                imo4 = Math.floor ((Math.random() * fruits.length));
                imo5 = Math.floor ((Math.random() * fruits.length));
                imo6 = Math.floor ((Math.random() * fruits.length));
                imo7 = Math.floor ((Math.random() * fruits.length));
                imo8 = Math.floor ((Math.random() * fruits.length));
                imo9 = Math.floor ((Math.random() * fruits.length));
                imo10 = Math.floor ((Math.random() * fruits.length));
                message.channel.send("🎰 `Welcome to Jack's Casino!` 🎰 \n**" +message.author.username+"** rolled the impossible slots...\n   ["+fruits[imo1]+" "+fruits[imo2]+" "+fruits[imo3]+" "+fruits[imo4]+" "+fruits[imo5]+" "+fruits[imo6]+" "+fruits[imo7]+" "+fruits[imo8]+" "+fruits[imo9]+" "+fruits[imo10]+"]")
                if (fruits[imo1] === fruits[imo2] === fruits[imo3] === fruits[imo4] === fruits[imo5] === fruits[imo6] === fruits[imo7] === fruits[imo8] === fruits[imo9] === fruits[imo10]) {
                    message.channel.send("***WHAT THE HECK?! YOU ACTUALLY WON?!*** \nYou have achieved greatness! Be proud, you RNG god!")
                }
                else {
                    message.channel.send("...yep. They don't call it the 'Impossible Slots' for nothing...")
                }
                break;


        case 'heylook':
            hbuddy = 21;
            var hbran = Math.floor (Math.random() * (hbuddy - 1 + 1)) +1;
            switch (hbran) {
                case 1: message.channel.send("Hey look buddy, I'm an engineer. That means I solve problems, not problems like 'What is beauty?' Because that would fall within the purview of your conundrums of philosophy. I solve practical problems, for instance: how am I going to stop some mean mother Hubbard from tearing me a structurally superfluous be-hind? The answer, use a gun, and if that don't work... Use more gun. Take for instance this heavy caliber tripod mounted lil' old number designed by me, built by me, and you best hope... Not pointed at you."); break;
                case 2: message.channel.send("Hey look buddy, \n \n \n \n \n ||I'm Sans. ☠||"); break;
                case 3: message.channel.send("Hey look buddy, \n \n Bottom Text"); break;
                case 4: message.channel.send("Hey look buddy,\n\nSo we're back in the mine\nGot our pickaxe swinging from side to side, side, side to side\nThis task's a grueling one, hope to find some diamonds tonight\nNight, night, diamonds tonight\nHeads up, you hear a sound, turn around and look up\nTotal shock fills your body\nOh, no, it's you again\nI can never forget those eyes, eyes, eyes, eyes, eyes, eyes\n\n'Cause baby tonight, the creepers tryin' to steal all your stuff again\n'Cause baby tonight, you grab your pick, shovel and bolt again\nAnd run, run until it's done, done\nUntil the sun comes up in the morn'\n'Cause baby tonight, the creepers tryin' to steal all your stuff again"); break;
                case 5: message.channel.send("Hey look buddy, we live in a society."); break;
                case 6: message.channel.send("Hey look buddy, top window broken, broken glass falls and only one group shall prosper. But only one group is the most oppressed of them all. **GAYMERS.**"); break;
                case 7: message.channel.send("Hey look buddy, 🍎🍑👖 🔞Shawty🔞 had them 🍎apple🍏🍑 bottom🍑👖 jeans👖 jeans 👢Boots👢 with the 👖 jeans 👖 with the 👖 jeans 👖 The whole🎊 club was 👀👀👀looking👀👀👀 at 👖 jeans 👖 She hit 👖 the jeans 👖 she hit 👖 the jeans 👖 Next thing you jeans 👖🔞Shawty🔞 got jeans, jeans, jeans, jeans, jeans, jeans, jeans, jeans Them baggy sweat pants 🍆 And the👟 Reebok's with the pants 👟 with the pants She 😉turned around 😉and gave that 🍑big booty🍑 a pants hey She💦 hit the pants 💦she hit the pants Next thing you pants 👅 Shawty got pants, pants, pants, pants, pants, pants, pants, pants 🍑🍑🍑"); break;
                case 8: message.channel.send("Hey look buddy, What the 🖕🏻 did ➡️👤 just 👉🏻️👌🏻 💬 about 👤⬅️, ➡️👤 little 🐩👩🏻? I'll have ➡️👤 💡 I 👨🏻‍🎓️ 🔝 of my class in the Navy Seals, ➕ I've been involved in numerous secret raids on Al-Quaeda, ➕ I have over 3️⃣0️⃣0️⃣ confirmed kills. I am 🚋 in 🦍 warfare ➕ I'm the 🔝 sniper in the entire 👥⬅️ armed forces. ➡️👤 are nothing to 👤⬅️ but just another 🎯. I will wipe ➡️👤 the 🖕🏻 out with precision the likes of which has never been 👀 before on this 🌐, ❣️ my 👉🏻️👌🏻 words. ➡️👤 💭 ➡️👤 🥫 get away with 💬 that 💩 to 👤⬅️ over the Internet? 💭 🔂, fucker. As 👥⬅️ 🗣️ I am contacting my secret network of 🕵🏻️‍♂️ across the 🇺🇸 ➕ your IP is being traced ➡️ now so ➡️👤 better prepare for the storm, maggot. The storm that wipes out the pathetic little thing ➡️👤 📞 your 🧬. You're 👉🏻️👌🏻 ☠️, kid. I 🥫 be anywhere, anytime, ➕ I 🥫 kill ➡️👤 in over 7️⃣ 💯 ways, ➕ that's just with my bare ✋🏻. ❌ only am I extensively 🚋 in unarmed combat, but I have ♿️ to the entire arsenal of the United States Marine Corps ➕ I will use it to its 🌝 extent to wipe your miserable 🍑 off the 😀 of the continent, ➡️👤 little 💩. If only ➡️👤 could have 💡 what unholy retribution your little 'clever' comment was about to bring 👇🏻️ upon ➡️👤, maybe ➡️👤 would have held your 👉🏻️👌🏻 👅. But ➡️👤 couldn't, ➡️👤 didn't, ➕ now you're 💰️➡️ the price, ➡️👤 goddamn idiot. I will 💩 fury all over ➡️👤 ➕ ➡️👤 will drown in it. You're 👉🏻️👌🏻 ☠️, kiddo."); break;
                case 9: message.channel.send("Hey look buddy, \n⣿⣿⣿⣿⣿⣿⣿⡿⡛⠟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠿⠨⡀⠄⠄⡘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠿⢁⠼⠊⣱⡃⠄⠈⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⠛⡧⠁⡴⣦⣔⣶⣄⢠⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣤⠭⠏⠙⢿⣿⣿ ⣿⡧⠠⠠⢠⣾⣾⣟⠝⠉⠉⠻⡒⡂⠄⠙⠻⣿⣿⣿⣿⣿⡪⠘⠄⠉⡄⢹⣿ ⣿⠃⠁⢐⣷⠉⠿⠐⠑⠠⠠⠄⣈⣿⣄⣱⣠⢻⣿⣿⣿⣿⣯⠷⠈⠉⢀⣾⣿ ⣿⣴⠤⣬⣭⣴⠂⠇⡔⠚⠍⠄⠄⠁⠘⢿⣷⢈⣿⣿⣿⣿⡧⠂⣠⠄⠸⡜⡿ ⣿⣇⠄⡙⣿⣷⣭⣷⠃⣠⠄⠄⡄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣧⣁⣿⡄⠼⡿⣦ ⣿⣷⣥⣴⣿⣿⣿⣿⠷⠲⠄⢠⠄⡆⠄⠄⠄⡨⢿⣿⣿⣿⣿⣿⣎⠐⠄⠈⣙ ⣿⣿⣿⣿⣿⣿⢟⠕⠁⠈⢠⢃⢸⣿⣿⣶⡘⠑⠄⠸⣿⣿⣿⣿⣿⣦⡀⡉⢿ ⣿⣿⣿⣿⡿⠋⠄⠄⢀⠄⠐⢩⣿⣿⣿⣿⣦⡀⠄⠄⠉⠿⣿⣿⣿⣿⣿⣷⣨ ⣿⣿⣿⡟⠄⠄⠄⠄⠄⠋⢀⣼⣿⣿⣿⣿⣿⣿⣿⣶⣦⣀⢟⣻⣿⣿⣿⣿⣿ ⣿⣿⣿⡆⠆⠄⠠⡀⡀⠄⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⡅⠄⠄⢀⡰⠂⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"); break;
                case 10: message.channel.send("Hey look buddy, (ﾉ◕ヮ◕)ﾉ*.✧"); break;
                case 11: message.channel.send("Hey look buddy, as you might have noticed, my main Discord account has been disabled, and is currently under investigation. There is a high chance it will be permanently disabled."); break;
                case 12: message.channel.send("Hey look buddy, At this point there's no excuse for baby boomers still in the workforce to be technologically inept anymore It's just willful ignorance, this shit is not fucking hard 'Why is it asking for a password?', Because you're logging into something, Martha. That's how it's been for the last 20 fucking years. 'How do I do this, Can you show me?' No, Jeb, you can Google it like the rest of us. You've been an engineer and working with computers for 35 years. Why would I waste time when some 12 year old indian kid on youtube can walk you through it far more clearly? It requires one exposure to the concept of googling to understand how it work Your generation was smart enough to create a giant hole in the ozone, but not smart enough to realize you have the near entirety of human knowledge at your disposal just by typing in a few words? Give me a break 'I'm not tech savvy', No, you just refuse to learn despite most modern software being idiot proof, stuck in your ways out of entitlement.\n\nThe worst part is after you help an old fuck 9 times out of 10, they'll give you some kind of bullshit passive-aggressive thank you along the lines of 'Oh, I guess you young people have to know something about those phones you're always on, huh?' Give me a fucking break Greg. Maybe we're staring at them because it's less depressing to be distracted instead of coming to terms with the fact our planet is literally dying. It's not my fault your wife hasn't had sex with you since 2006. Go away."); break;
                case 13: message.channel.send("Hey look buddy, Just thought I’d get this off my chest here, but in my business communications class, everyone is making pamphlets for issues in teenagers. This girl in my class is doing 'porn addiction' as her topic, and she’s using LOTS of pictures of Luigi for her pamphlet. It’s very clear she doesn’t know a lot about porn in the first place, but the thing that bothers me is that I don’t know what Luigi did to her. I think there’s one picture of Funky Kong but other than that, just Luigi beside things like 'porn make people nut' and 'porn is sin, people these days need to pray more'.\n\nUPDATE: I asked her what her problem with Luigi is and to my surprise, she said that Luigi raped her! Imagine that! She also admitted to having sexual attraction to him, which contradicts everything in her pamphlet. I can't criticize her for liking him that way because I have the same level of attraction to him, but still.\n\nUPDATE 2: The day of our presentation went by, and what a crazy turn of events. She happened to be the last one to present and I was pretty shocked at what happened next. Luigi jumped through the window into the room during the middle of her presentation and they started...well I think you know what they did. After they were done Luigi left and everyone clapped, she never even finished presenting. She got a 100% A+ grade and walked away feeling satisfied. Everyone has a newfound respect for her."); break;
                case 14: message.channel.send("Hey look buddy, Imagine being a villager. You have an amazing partner and you recently purchased a new house. You love you job and are extremely happy. One day a traveler from a far away land came into your peaceful village. He has terrifying weapons and wears powerful armor. He carries thousand emeralds on his back and purchased many of your wares. One night the mysterious stranger disappears and with him a fellow villager goes missing. Life soon gos back to normal and the village is once again peaceful for many months. Then one day the traveler returns. He looks scarred and haggard. He has a bad omen about him. On his back he wears the banner of the pillagers. He walks past your home and enters the city center. RING RING RING. The traveler begins to ring the villages warning bell. You begin hearing the thundering footprints of an army. Could it be? Your window shatters as an arrow flies through it. The pillagers rumble through the streets. Cutting through doors with their axes and crushing villagers under the footprints for their ravaging beasts. You see the traveler chopping through the army with all his strength, but it's not enough. He falls on his knees riddled with arrows, and fades away into red particles and items. Suddenly your door is bashed down by a crossbow wielding pillager. He shoots you partner in their chests, and your beloved falls into your arms. The pillager lears over you, and you know this is the end. You close your eyes and accept your fate. Then you begin to hear music. Duh duh duh duh duh duh, duh duh duh duh, duuhh duhh. He default dances above you and your dying partner and then takes aim. Thruw, schip. Your life is over in an instant. Your last living moment was taken up by some stupid pillager default dancing on your dying body. Screw that stupid traveler."); break;
                case 15: message.channel.send("Hey look buddy, PETER NO! Its the thirst💧😰, thirstiest💦 time⏰, of the year🗓. (Aye🤣, yuh👌🏾) 👀I have just ☝🏾one query❓ (😳What's that?🤔) Wanna 🙋🏾‍♂️Sprite 🥤😎Cranberry🍒💦? (😏Uh huh😏) The 😩answer 🤤is clear. 😋😉It's the 🥵😳thirst, 🤫🤭thirstiest 💦💦💯time⏰, of the year📅 (🥤Sprite🍒, let's go )!"); break;
                case 16: message.channel.send("Hey look buddy, Ok, I know this might freak you out BUT, I'm a Simmer (yes, I play the Sims) and I made a ____ Sim. Her roommate is _____. I thought you deserved that."); break;
                case 17: message.channel.send("Hey look buddy, I was ordering at the local McDonald's one day when I complimented the cashier for her great beauty and compared her to waifus that most females can only dream of looking like. Instead of acknowledging my kind words or appreciating that I even gave her a chance in the first place, she handed me my chicken tenders and rudely exclaimed, 'That would 5.99'."); break;
                case 18: message.channel.send('Hey look buddy, A popular concept in the known world is the idea of the "bruh moment." A "bruh moment" is defined as "bruh velocity" multiplied by "bruh mass." In other words, the larger a "bruh velocity" or a "bruh mass" is, the overall larger a "bruh moment" will be. For example, something that hits harder has a larger "bruh mass," such as karen taking the kids as opposed to spilling your drink. The faster something hits is known to have a larger "bruh velocity," such as a fast moving train vs the slow inevitability of death as it crushes our very souls second by second and we’ll eventually succumb to the cold embrace of the Reaper himself. In these examples, we can clearly demonstrate exactly how much of a "bruh moment" something really is.'); break;
                case 19: message.channel.send("Hey look buddy, TONS OF ROBUX"); break;
                case 20: message.channel.send("Hey look buddy, \n☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭"); break;
                case 21: message.channel.send("Hey look buddy, \nHello! I have been following your tweets for the past two days, and have come to the conclusion you do not deserve to have Raymond on your island. He is my comfort character and seeing him in an environment not meant for him brings me anxiety, so I will be expecting a reply to this DM when you have him in boxes and ready to relinquish him to someone who will treasure him like he deserves."); break;
            }
            break;

        case 'fuckyou':
            fu = Math.floor ((Math.random() * insults.length));
            message.channel.send("Fuck you too, you "+insults[fu]+"!");
            break;

        case 'facts':
            ohs = Math.floor ((Math.random() * nonfacts.length));
            message.channel.send(nonfacts[ohs]).then((nmessage) => {setTimeout(function(){
                nmessage.edit("*[MESSAGE REDACTED]*");
              }, 5000)
            }); 
            break;

        case 'boomerpass':
            pass = message.author.id;
            message.react('👍')
            break;

        case 'boomerbreak':
            pass = '0';
            message.react('👍')
            break;



        case 'announce':
                user = message.mentions.users.first();
                if (user !== undefined){
                    message.channel.send("I've come to make an announcement, " +user.username + "'s a bitch-ass motherfucker. They pissed on my fucking wife. That's right. They took their smallass fuckin' futa dick out and they pissed on my FUCKING wife, and they said their dick was t h i s b i g and I said that's disgusting. So I'm making a callout post on my Discord dot com: **" + user.username + "**, you got a small dick. It's the size of this SmolDru except WAY smaller. And guess what? Here's what my dong looks like. [explosion sounds] That's right, baby. Tall points, no futa, no tax, Look at that, it looks like two balls and a bong. They fucked my wife, so guess what, I'm gonna fuck the earth. That's right, this is what you get! My SUPER LAZER PISS! Except I'm not gonna piss on the earth. I'm gonna go higher. I'm pissing on the MOOOON! [piss boom] **How do you like that, IRRI?** I PISSED ON THE MOON, YOU IDIOT! You have twenty-three hours before the piss d r o p l e t s hit the fucking earth, now get out of my fucking sight before I piss on you too!");
                }
                else {
            message.channel.send("I've come to make an announcement, " +message.author.username + "'s a bitch-ass motherfucker. They pissed on my fucking wife. That's right. They took their smallass fuckin' futa dick out and they pissed on my FUCKING wife, and they said their dick was t h i s b i g and I said that's disgusting. So I'm making a callout post on my Discord dot com: **" + message.author.username + "**, you got a small dick. It's the size of this SmolDru except WAY smaller. And guess what? Here's what my dong looks like. [explosion sounds] That's right, baby. Tall points, no futa, no tax, Look at that, it looks like two balls and a bong. They fucked my wife, so guess what, I'm gonna fuck the earth. That's right, this is what you get! My SUPER LAZER PISS! Except I'm not gonna piss on the earth. I'm gonna go higher. I'm pissing on the MOOOON! [piss boom] **How do you like that, IRRI?** I PISSED ON THE MOON, YOU IDIOT! You have twenty-three hours before the piss d r o p l e t s hit the fucking earth, now get out of my fucking sight before I piss on you too!");
                }
                break;


        case 'count':
            let num1 = bot.afile["countNumber"].CountingNumber;
            num1 = num1 + 1;
            message.channel.send('We are at: '+num1);
            bot.afile ["countNumber"] = {
                CountingNumber: num1
            }
            fs.writeFile ("./afile.json", JSON.stringify (bot.afile, null, 4), err => {
                if (err) throw err;
            });
            break;

        case 'server':
                if(message.member.hasPermission("ADMINISTRATOR"))
                {
                    gid = message.guild.id;
                }
                else{ gid = '[NOT VIEWABLE]'}
                const serverembed = new Discord.MessageEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                .setColor('#00BFFF')
                .setTitle(message.guild.name)
                .setImage(message.guild.iconURL)
                .setDescription("Owned by "+message.guild.owner.user.tag)
                .addField('\u200b', '\u200b')
                .addField('Guild ID', gid)
                .addField('Created At', message.guild.createdAt)
                .addField('People in this server', message.guild.memberCount)
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                message.channel.send(serverembed);
        break;

        case 'IDvatar':
                if (args[1] != undefined){
                    Idget = args[1];
                    const IDaembed = new Discord.MessageEmbed()
                    .setAuthor("Avatar of user "+Idget)
                    .setColor('#00BFFF')
                    .setTitle(bot.users.cache.get(Idget).username)
                    .setImage(bot.users.cache.get(Idget).avatarURL())
                    .setDescription(bot.users.cache.get(Idget).tag)
                    .addField('\u200b', '\u200b')
                    
                    
                    .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                    message.channel.send(IDaembed);

                }
                else {message.channel.send("This command posts the profile picture of a user using their ID. To use it, send `v!IDvatar [User ID here]`.")}
        break;

        case 'purewars':
            message.channel.send("Quick! Place your bets! Who do you think is the purest? 'Pip', or 'Pkoby'? Type that person's name NOW! (Will only count if you start a sentence with that name.)")
            war = true;
            break;

        case 'purestandings':
            let pipwins = bot.afile["PipWins"].pips;
            let pkwins = bot.afile["PkWins"].pkobys;
            message.channel.send("```Current Standings for the Pure Wars.```\nPip: **"+pipwins+"**    Pkoby: **"+pkwins+"**");
            break;

        case 'dru':
            message.channel.send("1. The guy who fills in the quota for a server femboy. \n2. Some good artist guy or smth I dunno, never met him. \n3. A rebel who pisses off his boyfriend by not sleeping at 2AM EST (Caribbean) \n4. Mother of a puntable son. \n\n**Example:** \nEveryone: We need this command to be more gay to suit Dru better. \nGabe: I don't think there are enough words in the English vocabulary to describe how gay Dru is.");
            break;
    
        case 'dys':
            message.channel.send("1. A former person of the community who made the 24/7 music stream that started it all. Now, he's just a laughing stock that triggers a few people just by saying his nickname. He also ruined Minish Cap with peanut butter. \n2. Jojo villain who owns a stand named 'Grooma'. \n\n**Example:** \nGuy 1: Hey, what happened to Dys? \nGuy 2: Gone. Reduced to atoms. \nGuy 1: Why? \nAll Mods: Ah shit, here we go again.");
            break;
    
        case 'cain':
            message.channel.send("Reni's Mom (along with a few others). Also feared by many for...whatever reason.\n\n**Example:** \nReni: MOOOOOOOOOOOOM! \nCain: whAT?! \nReni: hi. \nCain: Hello.");
            break;
    
        case 'snoop':
            message.channel.send("A scientific experiment gone wrong that escaped from his lab after he destroyed it to pieces. No, I'm not talking about Mewtwo, he's worse. This one's a shitposting weeb, and loves to hunt down simps for fun. (Despite being one for SCP-173) \n\n**Example:** \nGuy 1: *breathes* \nSnoop: *nukes island*");
            break;
    
        case 'ethan':
            message.channel.send("1. The kid named 'cheese' in the sentence: 'I fucking love cheese.'\n2. Living proof that Banjo is gay and Gabe is black. \n\n**Example:**\nYou don't need one. He's right behind you.")
            break;
    
        case 'pip':
            message.channel.send("1. A type of post that is pure in every way\n2. A Roleplayer/DnD Player/Storyteller/Game Dev(?)/Sailor Moon Fan/Purist that can cleanse your sins from discord just by clicking on her channel. \n\n**Example:**\nGuy 1: My eyes are burning! \nGuy 2: Here, have a pip post from Pip. \nGuy 1: Oooh, that's nice, but how does it out the fire?")
            break;
    
        case 'irri':
            message.channel.send("A fucking STALLION of a man that decided to take up the responsibilities of leading a server full of 1000+ people after the virgin Dys was banned. This absolute chad is also a best friend to many people, and is basically a walking Skillshare.com. \n\n**Example:** \nGuy 1: Hey, I need some help to draw a hand. Can anyone help? \nGuy 2: Ask Irri. \nGuy 1: Isn't he currently busy in a server of 500+ people? \nIrri: You called?");
            break;
    
        case 'mimik':
            message.channel.send("Some Pokemon who dislikes off-topic in rp. \n\n**Example:** \nArrow: (no, don't no that.) \nMimik: You've fucking crossed the line.");
            break;
    
        case 'reun':
            message.channel.send("[ARCHIVED] \nDon't worry, "+ message.author.username+". You're as fucked as the rest of "+message.channel.name+" if you ask who Joe is. To save yourself, please post an rp cap into <#396838771108085760> so we can either all laugh or all remind Reun that he has a fucking job as a rp manager. (Also please, don't swear in off topic. You did? What's wrong with you?) In all seriousness, I love this boi, and he's prob my fav bro to ever exist...or fav sis? :O! **PLOT TWIST!**");
            break;
    
        case 'reni':
            message.channel.send("A fucking great and loveable person who's afraid to share their wonderful ideas to everyone. Previously known as 'Mimik' or 'Reun', and if he changes his name once more I swear to gosh I'm just gonna rename this command to 'v!silvester' and call it a day. \n\n**Example:** \nReni: Hey, Red or Purple? \nJet: Purple. Purple fits a lot more with your stuff. \nReni: But...blood isn't purple. \nJet: what")
            break;
    
        case 'phobos':
            message.channel.send("Some weird clone that took over Jet some time ago. The difference between these two is that one wants to kill you less than the other (Also some other noticeable things, but I can't say them rn.). \n\n**Example:** \nSnoop: Hello. \nJet: Fuck off. \n\n**One week later...**\nSnoop: Hello. \nPho: Hi, Snoop. Now fuck off.")
            break;
    
        case 'ghost':
            message.channel.send("1. He's a friend you laugh at dumb shit with! \n2. Proud owner of Cheems (With Cheems TWOOO in development). \n3. The maintenance guy whenever Dru fucking breaks in VC again. \n4. Has a PPP, which means in total he has 5 Ps. \n5. Guy with the highest 'FUCK' count in any VC \n6. Rising Tackle. \n7. The one who fucking beat Kirby and doesn't even talk about the lore. \n8. The only one with 8 definitions.\n9. The only one with 9 definitions. \n10. Male senko. \n\n**Example:** \nGhost: Hey Gabe \nGabe: What? \nGhost: Life is like a sandwich... \nGabe: *leaves*")
            break;
        
        case 'name':
            message.channel.send("1. A nickname that still stands to this day because literally NO ONE says 'frontier' instead. \n2. A Sonic/Okayu-loving madlass who should be hugged. \n3. nhentai.org (Don't search this.) \n\n**Example:** \nGuy 1: NAAAAAAAAAAAME STOP RTING HENTAI \nName: no.")
            break;

        case 'goat':
            message.channel.send("Wario, but sexy. \n\n**Example:** \nGuy 1: I wanna Mount Wario. \nGuy 2: You mean 'Mount Goat'? \nGuy 1: Yeah, that too. \nIrri: ...what?")
            break;

        case 'mon':
            message.channel.send("[ARCHIVED] \nNice choice. Moon is one of those friends you didn't know at first existed and now you're happy to have in your life. She's also a big mood. But be careful, Moon has an edgy side you might not want to generally encounter at times. ~~That's why she's perfect for a waifu!~~ Three cheers for Moon! (And someone, please give her a hug when necessary.)")
            break;

        case 'moon':
            message.channel.send("1. The reason why you can rest peacefully at night. \n2. v!mon \n\n**Example:** \nGuy 1: I'm going to bed. \nMoon: Okay, rest well. \nGod to the angels: You heard Moon, protect that boy.")
            break;

        case 'pkoby':
            message.channel.send("1. A pure child who we slowly corrupt without noticing. \n2. An echo fighter of Pip. \n\n**Example:** \nPkoby: Hey! Check this out! \nMoon: Where'd you find that? It's kinda creepy. \nPkoby: Gabe DMed it to me. \nMoon: Of course, I'll fucking kill him in the morning.")
            break;

        case 'ender':
            message.channel.send("Izzle's rival with no context. \n\n**Example:** \nDid Ender defeat that cuphead boss yet?")
            break;

        case 'korbs':
            message.channel.send("Meowser with drawing skills. \n\n**Example:** \nDru: Kirbs, what are you doing? \nKorbs: :3")
            break;

        case 'prince':
            message.channel.send("Perfection. \n\n**Example:** \nThere's nothing else, he's just perfect.")
            break;

        case 'eliz':
            message.channel.send("1. Longer version of saying 'E' \n2. Shorter version of saying 'Elizabeth' \n3. Alternative version of saying 'Ellie' \n4. 'Your Mom.' \n\n**Example:** \nEliz kicked my ass at Smash again...")
            break;

        case 'nokobo':
            message.channel.send("1. The Icon used for Hobo Thursdays. \n2. A lovely uncle. \n\n**Example:** \nGuy 1: Where's my beer? \nNokobo: Fug off!")
            break;

        case 'lucy':
            message.channel.send("E's horny license. \n\n**Example:** \nLucy's a very loveable person.")
            break;

        case 'jacob':
            message.channel.send("Hotness. \n\n**Example:** \nGirl 1: Yo! Jacob just looked at my general direction! \nGirl 2: Holy shit! Really? I'd do anything to be with that guy.")
            break;

        case 'izzle':
            message.channel.send("1. A girl, I hope. \n2. A young teen who starts a simp war in both her school and her twitter page. \n\n**Example:** \nGuy 1: Dude, Izzle's pretty cute. \nGuy 2: Don't say that out loud! You'll explode the school a second time! \nGuy 1: This is an online clas-")
            break;

        case 'rowlet':
            message.channel.send("The result of Dru porn. \n\n**Example:** \nHow's your day, Rowlet?")
            break;

        case 'kirB':
        case 'kirb':
        case 'kir':
            message.channel.send("1. The pronunciation of a pink...thing. \n2. The one who doesn't agree with their previous command because I leaked their smash strategy. \n3. A chill, mostly calm lad who will always join you to hang around in VCs. If you wanna lure him, invite FredBoat to the call, or just ripidly ping him until he gives up. \n4. ... \n\n**Example:** \nGuy 1: Hey, where's Kir b? \nGuy 2: Idk, just say something to call him over. \nGuy 1: ...Dru is gay...? \nKir b: *joins VC*")
            break;

        case 'rb':
            message.channel.send("An eagle that can smash your mom better than Sushi. \n\n**Example:** \nGuy 1: Where's RB? \nGuy 2: Prob banging your mom again. \nGuy 1: DAMMIT! Always happens. >:(")
            break;

         case 'generic':
            message.channel.send("1. Walking communism. \n2. A Jedi that dies to rats. \n\n**Example:** \nBless the world, Generic!")
         break;

         case 'truth':
            message.channel.send("1. A tomato from Brazil. Don't get close, or you'll get shot. \n2. A guy who doesn't like stickers. \n\n**Example:** \nOi, tomato of truths, what is your wisdom?")
            break;

        case 'sushi':
            message.channel.send("A racial slur that normally means 'banging your mom.' \n\n**Example:** \nSushi go bang someone's mom.")
            break;

        case 'kyu':
            message.channel.send("1. The word used to reference the Friday night simp war of '20. \n2. A female Gabe that somehow appears when people talk about DDLC.\n\n**Example:** \nKyu: *breathes* \nEthan: Oh shit, hi.")
            break;

        case 'goji':
            message.channel.send("QT\n\n**Example:** \nGoji's pretty hot.")
            break;

        case 'ina':
            message.channel.send("The owner of a cafe with is more reliable than every Starbucks in the world combined. And that's coming from a bot whose owner's country only has one of those. Also a provider of BANGERS!\n\n**Example:** \nGuy 1: Dude, I'm so sleepy.\nGuy 2: You should check out Ina's cafe. That'll wake you up. \nGuy 1: But I'm not a fan of coffee. \nGuy 2: Not the coffee, you dipshit. The music.")
        break;

        case 'isaac':
            message.channel.send("A guy with a bigass magic hand. Oh, you mean the discord user. A guy with a bigass magic heart.\n\n**Example:** \nYou're such an Isaac at times, marry me!")
            break;

        case 'kaden':
            message.channel.send("1. An underpaid employee from Ina's cafe. Wait, nevermind, he's the only employee. \n2. A tech guy who you would be glad to meet as a friend. \n3. One hairy boi\n\n**Example:** \nKADEN, INA'S CAFE IS OPEN! No rush, though. <3")
            break;

        case 'traz':
            message.channel.send("1. One of the best stickmen I've even seen. Maybe the only one. 2. Him. \n3. He might be watching this. \n4. Run.\n\n**Example:** \nHey have you seen Tra- crap wait oh gosh why do I hear boss music")
            break;

        case 'jerry':
            message.channel.send("An ancient god that takes the form of a wooden puppet. Normally summoned by others for the viewing of an event often referred to as 'Hunger Games.'.\n\n**Example:** \nHey where's the v!jerry command?")
            break;

        case 'banjo':
            message.channel.send("1. An instrument that should now be played in the background whenever someone denies to be gay, even though they are. \n2. The victim of the first definition. \n\n**Example:** \nGuy 1: Yo, have you tried the Puff-Shroom strat? It's so good! \nGuy 2: Ikr? Banjo taught me it!")
            break;

        case 'vessel':
             message.channel.send("1. Dru's son...somehow. \n3. Persona 5. \n\n**Example:** \nVessel: Your waifu sucks....well at least one of them. \nGuy 1: Your Mom sucks. \nVessel: Yes, he does.")
            break;

        case 'jet':
            message.channel.send("1. Supportive, funny, hates this command. \n2. Heck off Jet you're a good person and deserves to be loved. \n3. v!famished bias \n\n**Example:** \nBREAKING NEWS: Jet makes another post yet again in her endless channel, telling Dru to stop simping for her. More at 7.")
            break;

        case 'bridgey':
            message.channel.send("1. A British, I repeat, BRITISH person who just appeared one day. \n2. World Record Holder of 'FUCK!' \n3. Someone who scares me. \n\n**Example:** \n...she took a knife because she had a knife...")
            break;

        case 'gerald':
        message.channel.send("Fuck this guy. \n\n**Example:** \nFuck Gerald.")
        break;

        case 'ellie':
            message.channel.send("1. An alt command because you beautiful fricks keep forgetting that the og command is 'v!eliz' \n2. An AHIT bias memester that's actually pretty chill \n3. Guess what? \n\n**Example:** \nEllie: ||Chicken butt HA GOTEM||")
            break;

        case 'kooper':
            message.channel.send("1. An artist that can draw Koopas with more personality than Paper Mario's current plans. \n2. Owner of an endless channel that counts faster than [REDACTED]'s server...well two servers. \n\n**Example:** \nShameless ad but follow Kooper's Twitter.")
            break;

         case 'benji':
            message.channel.send("1. A notorious chain breaker, banned from 1500+ servers for his crimes. \n2. Some Hero of Mania. \n\n**Example:** \nGuy 1: Yes \nGuy 2: Yes \nGuy 3: Yes \nBenji: No. \nGuy 2: Heck you.")
            break;

        case 'chase':
            message.channel.send("1. A chill guy that's so chill he actually has a life. \n2. My secret crush \n3. A guy who actually beat PiT, now THAT'S a keeper. \n\n**Example:** \nClever, Chase.")
            break;

        case 'miek':
            message.channel.send("1. A name your phone's auto-correct hates. \n2. An old pal who's endless is actually dead, but he doesn't want to accept the facts. \n\n**Example:** \nGuy 1: Hey, have you seen Miek? \nGuy 2: That's a Kirby Copy Ability. \nGuy 3: No, I mean...wait what?")
            break;

        case 'zek':
            message.channel.send("Not enough of these guys exist and I'm sad.  \n\n**Example:** \nIf I load Zek on Project64, does that make him a ZekROM?")
            break;

        case 'link':
            message.channel.send("1. He come to town. \n2. To save the Princess Zelda. \n3. Ganon took her away. \n4. Now the children don't play. \n\n**Example:** \nBut Link, he come to save the day. \nHALLELUIAH!")
            break;

        case 'snow':
            message.channel.send("1. For a cold Fox, they sure look human.  \n\n**Example:** \nI guess that's why they're a *chill* mod (I'm not sorry...)")
            break;

        case 'pichu':
            message.channel.send("1. Pichu. \n2. Pichu. \n Pichu. \n\n**Example:** \nPichu.")
            break;

        case 'dw':
            message.channel.send("1. DragonWario? I thought you said 'Don't Worry'! \n2. That was an original joke. \n\n**Example:** \nWhere is DW nowadays? Did I miss a memo?")
            break;

        case 'maeva':
            message.channel.send("1. Kir b's first crush <3 \n2. A pretty awesome person that existed for way longer than I thought. \n\n**Example:** \nHoly SHIT Maeva. - Someone 2019")
            break;

        case 'acidic':
            message.channel.send("1. Moon's bro. I know, it surprises me that there are two of them as well. \n2. Famous owner of the OK hand house in Trinidad 3. \n\n**Example:** \nGuy 1: Alright who's the impostor? \nAcidic: Dude this is Minecraft. \nGuy 1: Ok but who the HECK was at Medbay?")
            break;

        case 'listServers':
            if (message.author.id == "178539479827611648"){
            var glmess = "";
            lista = bot.guilds.array();
            for (i = 0; i < lista.length; i++){
                glmess += lista[i].name + "\n"
            }
            message.channel.send(glmess);
        }

        break;

        case 'herbbreak':
            key = 2;
            message.react('👍')
            break;

        case 'edgy':
            message.channel.send("SUP MA SON\nSUP MA MA\nSON THE HEDGE\n**OW THE EDGE** :knife:")
            break;

        case 'druxwario':
            message.channel.send("Sit tight, folks. Let me tell you a story. One night, Dru decided to take a shower to wash off the depression he obtained from an 'article' about how the world now accepts cursed images. The article was mostly bullshit, and for some reason it decided to talk about politics for no reason. But let's not go there. As Dru stepped in the shower and turned on the nozzle, allowing the warm, steaming water to cover hie entire body from the head-down, he heard an unexpected noise. A hyper-realistic 'wah', to be exact, followed by the opening of a creaky door. Upon hearing this, Dru smiles. He knows what's about to happen to him. He hears the incoming footsteps of Wario, slowly approaching him while inside the shower. Another nearby 'WAH' could be heard. As Dru feels the closeness of Wario in the shower, he also feels a large, muscular hand grabbing him by the ass, followed by a husky but sexy voice, which says 'Time to unrotten this hole!' Gabe, what the fuck is wrong with you. I'm not finishing this. Fuck you.")
            break;

        case 'BK':
            message.channel.send("`The following is a list of all genders dedicated to support gay rights:`")
            message.channel.send("**Burgers**\nWhopper\nWhopper with Cheese\nDouble Whopper\nDouble Whopper with Cheese\nTriple Whopper\nTexas Whopper\nTexas Double Whopper Sandwich\nWhopper Jr.\nWhopper Jr. with Cheese\nHamburger\nCheeseburger\nDouble Hamburger\nDouble Cheeseburger\nBK Bacon Burger\nBacon Cheeseburger\nDouble Bacon Cheeseburger\nBK Single Stacker\nBK Double Stacker\nBK Triple Stacker\nBK Quad Stacker\n\n**Chicken, Fish, and Veggie**\nTendergrill Chicken\nTendercrisp Chicken\nOriginal Chicken\nChicken Crisp Classic\nChicken Crisp Spicy\nHome-style Chicken Strips\nChicken Nuggets\nTacos\nCountry Pork Sandwich\nPremium Alaskan Fish Sandwich\nBK Veggie Burger\n\n**Breakfast**\nQuaker Oatmeal Maple and Brown Sugar\nQuaker Oatmeal Original\nSausage Breakfast Burrito\nSouthwestern Breakfast Burrito\nBK Breakfast Muffin Sandwich\nCroissan'wich\nDouble Croissan'wich\nBiscuit Sandwich\nCinnabon Roll\nHash Browns\nFrench Toast Sticks\n\n**BK Garden Fresh Salads and Wraps**\nGarden Fresh Salad Chicken Caesar with Tendergrill\nGarden Fresh Salad Chicken Caesar with Tendercrisp\nGarden Fresh Salad Chicken BLT with Tendergrill\nGarden Fresh Salad Chicken BLT with Tendercrisp\nGarden Fresh Salad Chicken Apple & Cranberry with Tendergrill\nGarden Fresh Salad Chicken Apple & Cranberry with Tendercrisp\nSide Garden Fresh Salad and Ranch Dressing\nRanch Crispy Chicken Wrap\nRanch Grilled Chicken Wrap\nHoney Mustard Crispy Chicken Wrap\nHoney Mustard Grilled Chicken Wrap\nCeasar Crispy Chicken Wrap\nCeasar Grilled Chicken Wrap\nCrispy Chicken Apple and Cranberry Wrap\nGrilled Chicken Apple and Cranberry Wrap\nCrispy BLT Salad Wrap\nGrilled BLT Salad Wrap");
            message.channel.send("** **\n**Desserts**\nDutch Apple Pie\nHershey's Sundae Pie\nSoft Serve Cone\nSoft Serve Cup\nCaramel Sundae\nChocolate Fudge Sundae\nStrawberry Sundae\nOreo Sundae\nMini M&M's Sundae\nWarm Oreo Brownie Sundae\nChocolate Chip Cookies\nWhite Chocolate Macadamia Nut Cookies\nOatmeal Raisin Cookies\n\n**Beverages**\nStrawberry Banana Smoothie\nTropical Mango Smoothie\nVanilla Milk Shake\nChocolate Milk Shake\nStrawberry Milk Shake\nMocha Frappé\nCaramel Frappé\nWhipped topping coffee shot");
            break;

        case 'analyse':
            message.channel.send("`Analyzing Post...`")
            message.channel.send("Yep. The results are in. That post is a 100% bruh moment.")
            break;

        case 'sco':
            message.channel.send("And I oop.")
            message.channel.send("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.send("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.send("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.send("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.send("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.send("***sAvE THe TurTLeS! SToP UsinG pLAsTiC stRAwS!!!!!!!!***")
            message.channel.send("*Virus is currently having an aneurism. Please check back later.*")
            break;

        case 'discotime':
            message.channel.send('*Priest walks in* \n"Open your bibles."\n*Disco ball drops\n"Now get on the fucking dance floor and* ***p r a y***"')
            break;

        case 'report':
            message.channel.send("Alright. The report was sent via DM to the bot owner. Thank you for your input.");
            rep = message.content.slice(9)
            const reportEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setColor(0xFF0000)
            .setTitle("Report Submission")
            .setDescription(rep + '   \n[Jump to Message](https://discordapp.com/channels/'+message.guild.id+'/'+message.channel.id+'/'+message.id+')')
            .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
            bot.users.cache.get("178539479827611648").send(reportEmbed);
            break;

            case 'suggest':
                    message.channel.send("Alright. The suggestion was sent via DM to the bot owner. Thank you for your support!");
                    sug = message.content.slice(10)
                    const suggestEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setColor(0xFF0000)
                    .setTitle("Suggestion Submission")
                    .setDescription(sug + '   \n[Jump to Message](https://discordapp.com/channels/'+message.guild.id+'/'+message.channel.id+'/'+message.id+')')
                    .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                    bot.users.cache.get("178539479827611648").send(suggestEmbed);
                    break;

            

                case 'gabe':
                    bot.users.cache.get(message.author.id).send("Hello? \nIs this thing working?\nOf course it is, you're reading this.\n\nBut to be fair, I knew you would figure it out.\nI just wanna say, thank you.\nPeople like you were the reason I stayed up and going in this life. Honestly, I wasn't gonna make it that far in life if I never met you. Thank you. Gosh I wish I can do more, rather than just hidding a message inside a bot, but seriously, I loBe you.\nContinue being you!");
                    break;

            case 'easteregg':
                message.channel.send("What, you wanted one? Nah, too lazy.");
                break;

            case 'hiMonika':
                message.channel.send(`uð³«ükÇqKD†"ËàM§c\¬‹Ë¼};ò2X»Ë£×[ÿ}ÙqŒID†"œ@Dd0ª˜C,íÃ‘wº ¾OL:Î1‰ÈÐ‘åt "ÃX²ÓÈÑsïãl‹gà$x¯çÃîË¦0—Çi…•µÔ€"2¨…œ@dS
                Övw"fAäõpÌlhN£ü nØó4@¼zú¥!"" ¿†¼^›c-´ÝzÁ@D$"""2ôý€É=ÜÚ—"-éjYÏ7©S³ˆˆˆÈÑÀUÐmã†ÙP2ÐáˆˆˆŒh*r&bÕîËº[w½î°}ûòÔ‹JDDddR›†ác=œù°1á¦z8ÖpF`)
                break;

            case 'fuck':
                if (message.author.id == '178539479827611648'){
                    message.channel.send("You can't use this command in this server.")
                }
                else {
                message.channel.send("You don't have permission to use that command. Please try another.");
                }
                break;

            case 'math':
                if (args[3] != undefined){
                    if (!isNaN(args[1]) && !isNaN(args[3])){
                        switch (args[2]){
                            case '+':
                                mathans = Number(args[1]) + Number(args[3]);
                                message.channel.send("Your answer is: "+mathans)
                            break;

                            case '-':
                                mathans = Number(args[1]) - Number(args[3]);
                                message.channel.send("Your answer is: "+mathans)
                            break;

                            case '*':
                            case 'x':
                                mathans = Number(args[1]) * Number(args[3]);
                                message.channel.send("Your answer is: "+mathans)
                            break;

                            case '/':
                            case 'DIV':
                                mathans = Number(args[1]) / Number(args[3]);
                                message.channel.send("Your answer is: "+mathans)
                            break;

                            case '^':
                            case 'exponent':
                                mathans = Math.pow(Number(args[1]), Number(args[3]));
                                message.channel.send("Your answer is: "+mathans)
                            break;

                            default:
                                message.channel.send("Invalid operator.")
                            break;

                        }
                    }
                    else {
                        message.channel.send("One of the values aren't a number!")
                    }
                }
                else {
                    message.channel.send("I do not see enough args.")
                }
            break;

            case 'deathbattle':
                if (message.mentions.users.first() == undefined){
                    message.channel.send("You must mention/ping a user to do that.")
                }
                else {
                    fighter1 = message.author.username;
                    fighter2 = message.mentions.users.first().username;

                    message.channel.send("A battle between **"+message.author.username+"** and **"+fighter2+"** has begun!")
                    fighter1hp = 100;
                    fighter2hp = 100;
                    message.channel.send(fighter1+", it's your turn!")
                    battle = true;
                    isf1turn = true;
                }
            break;

            case 'quote':
                message.channel.send("As a wise man once said...")
                wq = Math.floor ((Math.random() * wisequouts.length));
                message.channel.send(wisequouts[wq]);
            break;

            case 'pair':
                pairscore = Math.floor ((Math.random() * 100));
                
                if (message.mentions.members.size > 2){
                    message.channel.send("*Reading the pair scores of multiple users...*")
                }
                else if (message.mentions.members.size == 2){
                    pairguys = message.mentions.members.first(2)
                    pair1 = pairguys[0]
                    pair2 = pairguys[1]
                    message.channel.send("*Reading the pair score of "+pair1.user.username+" and "+pair2.user.username+"...*")
                }
                else if (message.mentions.members.size == 1){
                    pair1 = message.mentions.members.first();
                    
                    uusers = bot.guilds.cache.get(message.guild.id).members.array();
                    uwusers = Math.floor ((Math.random() * uusers.length));
                    pair2 = bot.users.cache.get(uusers[uwusers].id).username;
                    
                    message.channel.send("*Reading the pair score of "+pair1.user.username+" and "+pair2+"...*")
                }
                else {
                    uusers = bot.guilds.cache.get(message.guild.id).members.array();
                    uwusers = Math.floor ((Math.random() * uusers.length));
                    pair1 = bot.users.cache.get(uusers[uwusers].id).username;

                    uusers = bot.guilds.cache.get(message.guild.id).members.array();
                    uwusers = Math.floor ((Math.random() * uusers.length));
                    pair2 = bot.users.cache.get(uusers[uwusers].id).username;

                    message.channel.send("*Reading the pair score of "+pair1+" and "+pair2+"...*")
                }
                    
                    message.channel.send("And the score is...**"+pairscore+"!**")
                    giveScoreResults(pairscore);
            break;

            function giveScoreResults(score){
                if (score == 100){
                    message.channel.send("WHOA! You guys should just date at this point!");
                }
                else if (score > 89 && score < 100){
                    message.channel.send("An unbreakable bond...");
                }
                else if (score > 79 && score < 90){
                    message.channel.send("The bestest of friends!");
                }
                else if (score > 69 && score < 80){
                    message.channel.send("You guys trust each other pretty well!");
                }
                else if (score == 69){
                    message.channel.send("Nice.");
                }
                else if (score > 59 && score < 69){
                    message.channel.send("A passable friendship.");
                }
                else if (score > 49 && score < 60){
                    message.channel.send("Getting along, I see.");
                }
                else if (score > 39 && score < 50){
                    message.channel.send("Not quite there as yet...");
                }
                else if (score > 29 && score < 40){
                    message.channel.send("Alright, who stole who's girl?");
                }
                else if (score > 19 && score < 30){
                    message.channel.send("Ouch!");
                }
                else if (score > 9 && score < 20){
                    message.channel.send("Meh.");
                }
                else if (score > 0 && score < 10){
                    message.channel.send("Do you guys even know each other...?");
                }
                else if (score == 0){
                    message.channel.send("YIKES! Okay, back to phase one.");
                }
            }

            case 'trailtoggle':
                if (trail === 0){
                    trail = 1;
                    message.react("📝");
                }
                else {trail = 0;
                message.react("👍")}
                break;

                case 'simptoggle':
                    if (strail === 0){
                        strail = 1;
                        message.react("📝");
                    }
                    else {strail = 0;
                    message.react("👍")}
                    break;


            


                


        case 'commands':
            //General and Fun
            //message.channel.send("``` 《《 VIRUS COMMANDS 》》 \n\nPAGE 1. \n\n────────\n\n☆ The following commands have to be prefaced with [ v! ] .\n\n-> General Commands:\ncommands[number] - Brings up that number's page of commands.\nhi - Says hello.\nbye - Says goodbye.\nhelp - Gives help.\ninfo - Gives info.\nping - Pings you!\nme - Gives information about the command-user. \ntodaysong - Posts Today's Song \n\n-> Fun Commands:\nlove - Virus loves you back!\nhug - Hug someone! \ncall - Call a random server! [To hang up, use 'v!hang'.]\ncount - Virus starts counting - let's see how far we can go!\ntimetorockwiththebiggitybuckbumble - Virus sings the best song known to man! (Do not do this in public channels.)\nbored - Virus will cure your boredom.\nfuckyou - Why the hate? \nfacts - Virus will tell you a fact, then redact it after a while. \nslot - Feeling lucky? Take a roll in the slot machine!\nimopsslots - Feeling MORE lucky? HA! This should kill the mood...\nvibecheck - Time for a vibe check. \ndruxwario - Virus will you a story about a heartwarming event. \nts - Virus will tell you a story. Follow the initial command with a number to read the next part of the story!\nweeb - Gets Virus excited!\njoe - Joe who? \ndiscotime - It's time to pray! \npurewars - Begin the Pure Wars! \npurestandings - Shows the current standings for the Pure Wars. \nboomerpass - Get the boomer-pass, but other people can steal it.\nboomerbreak - Throw away the boomer-pass!\ndead - Did you die?\ngamestop - What will you buy?\ngay - You're looking kinda fresh doe...\nnoswears - For the one dude who keeps on swearing\ngluck - Virus wishes you good luck!\nbluck - Now you're just a horrible person...\nanalyse - Analyses a post \nBK - A command that supports trans people. \nbottomtext - Virus provides you with a bottom-text - fresh off the iron!\nedgy - Sup, ma son? \nsco - Virus will act gay for a bit. \nheylook - Hey look buddy. \nannounce - Virus has a special announcement!\n\n──────\n\nPLEASE USE [ v!commands2 ] TO VIEW THE NEXT PAGE.```");
            message.channel.send("Gotcha! Posting the commands via DMs...");
            
            const embed1 = new Discord.MessageEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                .setColor('#FF1493')
                .setTitle("Commands - Page 1")
                .setDescription("☆ The following commands have to be prefaced with [ "+PREFIX+" ] .")
                .addField('\u200b', '\u200b')
                .addField('**General Commands** 📝', 'Commands you may not use a lot.')
                .addField('\u200b', '\u200b')
                .addField('• commands[#]', 'Provides commands.', true)
                .addField('• hi', 'Says hi', true)
                .addField('• bye', 'Says bye', true)
                .addField('• help', 'Gives help', true)
                .addField('• info', 'Gives info', true)
                .addField('• ping', 'Pings you!', true)
                .addField('• me', 'About you', true)
                .addField('• todaysong', "Posts Today's Song", true)
                .addField('\u200b', '\u200b')
                .addField('**Fun Commands** 🎉', 'What makes VirusBot...Virusbot.')
                .addField('\u200b', '\u200b')
                .addField('• love', 'Promotes peace...?', true)
                .addField('• hug', 'Hugs a guy.', true)
                .addField('• call', "Use 'v!hang' to hang up.", true)
                .addField('• count', 'Ew, numbers.', true)
                .addField('• slot', 'For you gambling fans.', true)
                .addField('• imposslots', 'Triggers addiction.', true)
                .addField('• purewars', 'Starts a war.', true)
                .addField('• purestandings', 'Shows the war.', true)
                .addField('• heylook', 'Hey look buddy...', true)
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                
                bot.users.cache.get(message.author.id).send(embed1);
            
            //People and Image
            //message.channel.send("``` 《《 VIRUS COMMANDS 》》 \n\nPAGE 2. \n\n────────\n\n☆ The following commands have to be prefaced with [ v! ] .\n\n-> People Commands:\ndru - Do it Dru!\nmoon - Bring it in, Moon!\npkoby - The pure lad.\nkirB - Whoa, a Kirby?\nender - A wild Ender appears!\nkorbs - my boi korbs.\nprince - Please don't say the n word.\neliz - Where's Ellie Bean?\nnokobo - Some random boomer I know.\njasper - Hyper...critical?.\njacob - Hot lad.\nghost - Spoookkkkyyyyy.....\ngoat - What? An epic gamer? \nname - Just an ego booster. \nizzle - What happens if I say 'furry' here? \nethan - You all know who he is!\ncain - Channel-indeed. \nkevin - Everyone...bow? \nsnoop - Ugh, Persona...\njet - Pings Jet. That's all.\nrowlet - Oh my. \nirri - Save us Irri!\npip - The purest person. So, so pure.\nmimik - Who's that?\nreun - The best boy!\nknux - You don't have one yet?!\n\n-> Image Commands:\nclown - Virus will provide you with the most important item of clothing for a clown.\nclown2 - Virus will bring you up for an interview.\nbruh - Bruh.\nwtf - Reacts with a 'Wtf' picture. Most are offensive, do be careful.\nmoonuwu - Virus gives you a shiney uwu!\najoke - A joke is a joke, Budtard.\nbuddy - Ok, Buddy.\nwhatcanIsay - A magical gif. \noldie - Posts a picture from the Glory Days...\ndedmeme - Posts a dead meme from Gabe's one year old folder.\nsad - Virus will provide an image for the saddened.\nnice - Virus will react with a 'Nice' image. \ndong - Where's the dong? \nfunky - Funky got that sicko I need. \ntoxicegg - Dru, get out. \nWAHOO - Mario for the PS4 cancels KH3\negirl - SHUT UP, E-GIRL! \nthouthefuck - BY THE POPE!\n\n──────\n\nPLEASE USE [ v!commands3 ] TO VIEW THE NEXT PAGE.```")
            const embed2 = new Discord.MessageEmbed()
            .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                .setColor('#FF1493')
                .setTitle("Commands - Page 2")
                .setDescription("☆ The following commands have to be prefaced with [ "+PREFIX+" ] .")
                .addField('\u200b', '\u200b')
                .addField('**Copypasta Commands** 📰', 'Commands that are just a scripted block of words.')
                .addField('\u200b', '\u200b')
                .addField('• timetorockwiththebiggitybuckbumble', '🐝', true)
                .addField('• weeb', 'Uhhh...', true)
                .addField('• discotime', "Let's pray.", true)
                .addField('• dead', 'Aaand you died.', true)
                .addField('• gamestop', 'What will you buy?', true)
                .addField('• gay', 'For the fresh people!', true)
                .addField('• gluck', 'Gives good luck', true)
                .addField('• bluck', 'Guess.', true)
                .addField('• analyse', 'Looks at a post', true)
                .addField('• BK', 'A list of genders.', true)
                .addField('• bottomtext', 'Free bottom text!', true)
                .addField('• edgy', 'Sup, ma son?', true)
                .addField('• sco', 'I-', true)
                .addField('• announce', 'Posts a special announcement.', true)
                .addField('• vibecheck', 'Vibe Check.', true)
                .addField('• fuckyou', 'Why the hate?', true)
                .addField('• facts', "Gotta note 'em down.", true)
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                
                bot.users.cache.get(message.author.id).send(embed2);
           
            //Replies and Reactions
            //message.channel.send("``` 《《 VIRUS COMMANDS 》》 \n\nPAGE 3.\n\n────────\n\n☆ The following commands do not have to be prefaced with [ v! ] .\n\n-> Fun Commands:\nLET ROCK - Start a party!\nboomer - Shut up. This command can only be used if you have the boomer-pass (see Page 1).\nHOL UP - Virus will hold for you.\n\n-> User-Specific Commands:\nowo - uwu? - [ Only Izzle and Moon can use this command. ] \nDrizzle - Excuse me? - [ Only Jet can use this command. ]\nJoe - Joe Who? - [ Only Reun can use this command. ] \n\n────────\n\n☆ Adding the following reactions to any message will trigger Virus to send the correlated response!\n\n-> General Commands:\n:herb: - Join the support gang! (In case of spam, type 'v!herbbreak')\n\n-> User-Specific Commands:\njoystick - For the downed gamer. - [ This response can only be triggered by Gabe. ] \nguitar - Quick! Vibe Check. - [ This response can only be triggered by Snoop and Reun. ]\n\n────────\n\nEND OF COMMAND LIST.```");
            const embed3 = new Discord.MessageEmbed()
            .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                .setColor('#FF1493')
                .setTitle("Commands - Page 3")
                .setDescription("☆ The following commands have to be prefaced with [ "+PREFIX+" ] .")
                .addField('\u200b', '\u200b')
                .addField('**Media Commands** 📷', 'Commands that show pics/vids.')
                .addField('\u200b', '\u200b')
                .addField('• clown', 'Put these on.', true)
                .addField('• clown2', 'Please sit down.', true)
                .addField('• bruh', 'Bruh.', true)
                .addField('• wtf', 'Okay wtf was that post?', true)
                .addField('• moonuwu', 'Oooh, shiney.', true)
                .addField('• ajoke', "It's...a joke.", true)
                .addField('• buddy', 'Ok, buddy.', true)
                .addField('• whatcanIsay', "You're welcome.", true)
                .addField('• oldie', '.', true)
                .addField('• dedmeme', 'Posts an old meme.', true)
                .addField('• sad', 'D:', true)
                .addField('• nice', 'OOOOOO-', true)
                .addField('• dong', "Where's the dong?", true)
                .addField('• funky', 'Hmmm.', true)
                .addField('• toxicegg', 'Oh baby.', true)
                .addField('• WAHOO', 'PS4s suck.', true)
                .addField('• egirl', 'SHUT IT!', true)
                .addField('• thouthefuck', 'BY THE POPE!', true)
                .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                
                bot.users.cache.get(message.author.id).send(embed3);
            
                    const embed4 = new Discord.MessageEmbed()
                    .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                        .setColor('#FF1493')
                        .setTitle("Commands - Page 4")
                        .setDescription("☆ The following commands have to be prefaced with [ "+PREFIX+" ] .")
                        .addField('\u200b', '\u200b')
                        .addField('**Other Commands** 🌟', "They're special!...kinda.")
                        .addField('\u200b', '\u200b')
                        .addField('• joe', 'Joe?', true)
                        .addField('• boomerpass', 'Grab the pass!', true)
                        .addField('• boomerbreak', 'Throw away the pass', true)
                        .addField('• list', 'Enter the VirusGames!', true)
                        .addField('• ts', 'Tells a story.', true)
                        .addField('• druxwario', 'What the hell even is this?', true)
                        .addField('• generate', 'Get a cool sentence!', true)
                        .addField('\u200b', '\u200b')
                        .addField('**Personal Commands** 👤', 'Commands about friends, for friends.')
                        .addField('\u200b', '\u200b')
                        .addField('The following people have their own commands:', '• dru\n• moon\n• pkoby\n• kirB\n• ender\n• korbs\n• prince\n• eliz\n• nokobo\n• jasper\n• jacob\n• ghost\n• goat\n• name\n• izzle\n• ethan\n• cain\n• kyu\n• sushi\n• goji\n• snoop\n• jet\n• rowlet\n• irri\n• pip\n• mimik\n• reun\n• knux\n• dys\n• reni\n• rb\n• generic\n• truth\n• ina\n• isaac\n• kaden\n• traz\n• jerry\n• vessel\n• banjo\n• bridgey', true)
                        .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                        
                        bot.users.cache.get(message.author.id).send(embed4);
            
                    const embed5 = new Discord.MessageEmbed()
                    .setAuthor("Requested by "+message.author.username, message.author.avatarURL())
                        .setColor('#FF1493')
                        .setTitle("Commands - Page 5")
                        .setDescription("☆ The following commands DO NOT have to be prefaced with [ "+PREFIX+" ] .")
                        .addField('\u200b', '\u200b')
                        .addField('**Response Commands** 💬', "Uh oh. He talks back?!")
                        .addField("Saying any of these things will result with a response from Virus.", "• LET ROCK - Starts a party!\n• boomer - Only works if you have the boomer-pass (See Page 4.)\n• HOL UP - Virus will hold...whatever it is for you.")
                        .addField('\u200b', '\u200b')
                        .addField('**Personal Commands** 🗣️', 'Bias.')
                        .addField('The following quotes are user-specific:', '• owo - Only Izzle and Moon can use this.\n• Drizzle - Only Jet can use this.\n• Joe - Only Reun can use this.')
                        .addField('\u200b', '\u200b')
                        .addField('**Reaction Commands** 👀', "I saw that.")
                        .addField("Adding any of these reactions to a message will make the bot react to it:", "• :herb: - Join the support gang! (If there is spam, use 'v!herbbreak')\n• :moneybag: - Makes Virus DM you the selected pic/video that was posted.")
                        .addField('\u200b', '\u200b')
                        .addField('**Personal Commands** 🦀', "Huh.")
                        .addField('The following reactions are user-specific:', '• :joystick: - Only Gabe can use this.\n• :guitar: - Only Snoop and Reun can use this.')
                        .setFooter("VirusDaBot", bot.users.cache.get(BotID).avatarURL());
                        
                        bot.users.cache.get(message.author.id).send(embed5);
            break;
    

        


    }
}
    if (message.author.bot) return;

    /*
    if (message.content.startsWith("bruh")) {
        if (message.author.id !== '437286707264749570' || message.author.id !== '613841370905444423'){
        const attachment = new MessageAttachment('https://media.discordapp.net/attachments/606957397826863195/631320823386341408/EGXRYZoU0AANBFT.png');
        message.channel.send(attachment);
        }
    }
    */



   if (message.channel.id === callA && callkey === true && message.author.id !== BotID){
       if (message.content.includes("@everyone") || message.content.includes("@here")){
        message.channel.send("Please refrain from raiding through calls. \n(Thanks to all my friends who found this oversight. I'm not angry at y'all <3)")
       }
       else {
    bot.channels.cache.get(callids[callB]).send(message.author.tag +": "+message.cleanContent);
    if (message.attachments.first() != undefined){
        callattach = new MessageAttachment (message.attachments.first().url);
        bot.channels.cache.get(callids[callB]).send(callattach);
    }
}
}

if (message.channel.id === callids[callB] && callkey === true && message.author.id !== BotID){
    if (message.content.includes("@everyone") || message.content.includes("@here")){
        message.channel.send("Please refrain from raiding through calls. \n(Thanks to all my friends who found this oversight. I'm not angry at y'all <3)")
       }
       else {
    bot.channels.cache.get(callA).send(message.author.tag +": "+message.cleanContent);
    if (message.attachments.first() != undefined){        
        callattach = new MessageAttachment (message.attachments.first().url);
        bot.channels.cache.get(callA).send(callattach);
    }
}
}

    if (battle == true){
        if (isf1turn == true && message.author.username == fighter1) {
            if (message.author.id == "178539479827611648" && message.content.toLowerCase().startsWith("ban hammer")) {
                message.channel.send(fighter2+" got banned!")
                damagePlayer(2, 999);
            }
            else if (!message.content.startsWith("v!deathbattle")){
                attack = message.content.toString();
                attacklow = attack.toLowerCase();
                switch (attack){
                    default:
                        useThisQuote(attacklow, fighter1, fighter2, 2)
                    break; 
                    
                    case "https://youtu.be/dQw4w9WgXcQ":
                        dam = Math.floor ((Math.random() * 100));
                        message.channel.send(fighter2+" got rick rolled! **"+fighter1+"** deals "+dam+" damage and gains 10 hp!")
                        
                        damagePlayer(1, -10)
                        damagePlayer(2, dam);
                    break; 
                }
                isf1turn = false;
            }
        }

        else if (isf1turn == false && message.author.username == fighter2) {
            if (message.author.id == "178539479827611648" && message.content.toLowerCase().startsWith("ban hammer")) {
                message.channel.send(fighter1+" got banned!")
                damagePlayer(1, 999);
            }
            else if (!message.content.startsWith("v!deathbattle")){
                attack = message.content.toString();
                attacklow = attack.toLowerCase();
                switch (attack){
                    default:
                        useThisQuote(attacklow, fighter2, fighter1, 1)
                    break; 
                    
                    case "https://youtu.be/dQw4w9WgXcQ":
                    case "https://www.youtube.com/watch?v=dQw4w9WgXcQ":
                        dam = Math.floor ((Math.random() * 100));
                        message.channel.send(fighter1+" got rick rolled! **"+fighter2+"** deals "+dam+" damage and gains 10 hp!")
                        
                        damagePlayer(2, -10)
                        damagePlayer(1, dam);
                    break; 
                }
                
                isf1turn = true;
            }
        }
    }

    function useThisQuote(attacklow, fighter, fightie, towhom) {
        if (towhom == 1){
            theother = 2;
        }
        else if (towhom == 2){
            theother = 1;
        }
        
        switch (attacklow) {
            default:
                dam = Math.floor ((Math.random() * 50));
                message.channel.send("**"+fighter+"** uses **"+attack+"!** \n"+fightie+" takes "+dam+" damage!");
                damagePlayer(towhom, dam);
            break;

            case "ban hammer":
                dam = Math.floor ((Math.random() * 95));
                message.channel.send("**"+fighter+"** uses a weaker ban hammer! \n"+fightie+" takes "+dam+" damage!")
                damagePlayer(towhom, dam);
            break;

            case "hentai":
                message.channel.send("**"+fighter+"** watches hentai! \n"+fighter+" recovers 5 hp!")
                damagePlayer(theother, -5)
            break;

            case "waluigi launcher":
                dam = Math.floor ((Math.random() * 30));
                dam = dam * 2
                message.channel.send("**"+fighter+"** uses a freaking WAHluigi Launcher! \n"+fightie+" takes double damage! ("+dam+" DMG)")
                damagePlayer(towhom, dam);
            break;

            case "no u":
                message.channel.send(fightie+"'s attack was countered! **"+fighter+"** gains back their hp, and deals back half the damage!")
                damagePlayer(theother, (dam * -1))
                damagePlayer(towhom, (dam / 2))
            break;

            case "chuckle":
                if (message.author.id == "340900469968732161"){
                    message.channel.send("**OH NO!**")
                    knux = Math.floor ((Math.random() * 2));
                    if (knux == 0){
                        knux = 1
                    }
                    damagePlayer(knux, 999)
                }
                else {
                    dam = Math.floor ((Math.random() * 50));
                    message.channel.send("**"+fighter+"** uses **"+attack+"!** \n"+fightie+" takes "+dam+" damage!");
                    damagePlayer(towhom, dam);
                }
            break;

            case "gnome":
            case "gnomed":
                dam = Math.floor ((Math.random() * 65));
                message.channel.send("**"+fighter+"'s** a gnome! And "+fightie+"'s been....GNOMED! \nThey take "+dam+" damage!")
                damagePlayer(towhom, dam);
            break;

            case "babybabybaby":
                if (message.author.id == "350802851964125184"){
                    if (bab == 0){
                    message.channel.send("**YEEEAAAAAAAAAAAAAHH!** \n"+fightie+" gets mass destructed! (78 DMG)")
                    damagePlayer(towhom, 78)
                    bab = 1}
                    else{
                        dam = Math.floor ((Math.random() * 10));
                        message.channel.send("**"+fighter+"** uses an all out attack! \n"+fightie+" takes "+dam+" damage!")
                    }
                }
                else{
                    dam = Math.floor ((Math.random() * 50));
                    message.channel.send("**"+fighter+"** uses **"+attack+"!** \n"+fightie+" takes "+dam+" damage!");
                    damagePlayer(towhom, dam);
                }

                break;
                


        
        }
    }

    function damagePlayer(player, damage){
    if (battle == true){
        if (player == 1){
            fighter1hp -= damage;
        }
        else if (player == 2){
            fighter2hp -= damage;
        }

        checkTheHealths();
    }
    }

    function checkTheHealths(){
        if (fighter1hp <= 0){
            message.channel.send(fighter1+" has been defeated! **"+fighter2+"** WINS! :tada:");
            battle = false;
            fighter1hp = 100;
            fighter2hp = 100;
            bab = 0;
        }
        else if (fighter2hp <= 0){
            message.channel.send(fighter2+" has been defeated! **"+fighter1+"** WINS! :tada:");
            battle = false;
            fighter1hp = 100;
            fighter2hp = 100;
            bab = 0;
        }
    }


    if (message.content.includes("LET ROCK") && message.author.id !== BotID) {
        
        message.channel.send('!youtube SPICY CALAMARI INKANTION');
    }

    if (message.content.includes("HOL UP") && message.author.id !== BotID) {
        
        message.channel.send('*Holding...*');
    }

    if (message.content.toLowerCase().includes("hello there") && message.author.id !== BotID) {
        
        message.channel.send("General Kenobi. You are a bold one");
    }

    if (message.content.includes("owo")) {
        if (message.author.id === '485252094509449237' || message.author.id === '536306768351985670')
        message.channel.send('UwU *nuzzles you*');
    }

    if (message.content.startsWith("@someone")){
        uusers = bot.guilds.cache.get(message.guild.id).members.array();
        uwusers = Math.floor ((Math.random() * uusers.length));
        thisone = bot.users.cache.get(uusers[uwusers].id);

        message.channel.send("<@"+thisone.id+">");
    }


    if (message.content.includes("Drizzle")){
        if (message.author.id === '356389068634062848'){
            message.channel.send("Okay, Jet. You need to face the facts. **The ship is dead.**")
        }
    }

    if (message.content.includes("RIP AND TEAR")){
        if (message.author.id === '356389068634062848'){
            tears = 4;
                        gifNumber = Math.floor (Math.random() * (tears - 1 + 1)) +1;
                        message.channel.send ( { files: ["./tears/tear (" + gifNumber + ").gif"]})
        }
    }

    if (message.content.toLowerCase().includes("fuck you, virus")){
    
            message.react('🖕')
        
    }

    

    if (message.content.toLowerCase().includes("love you, virus")){
        
            message.react('❤')
        
    }

    if (message.content.includes("Joe")){
        if (message.author.id === '351941317305040896'){
            message.channel.send("Who's Joe?")
        }
    }

    if (message.content.includes("Joe Mama")){
        if (message.author.id === '351941317305040896'){
            message.channel.send("Dam, well played, Reun")
        }
    }

    if ((message.author.id === "536306768351985670" || message.author.id === "485252094509449237") && (trail === 1)){
        message.channel.send("https://cdn.discordapp.com/attachments/635591464201486366/638214220915408907/unknown_5.png")
    }

    if ((message.author.id === "374042150083756042") && (strail === 1)){
        message.channel.send("https://cdn.discordapp.com/attachments/686423110198624266/688530989240418368/Untitled12_20200314193248.png")
    }

    
    if (message.content.toLowerCase().includes("jojo")){
        let jc = bot.afile["JojoCount"].jCount;
        jc++;
        bot.afile ["JojoCount"] = {
            jCount: jc
        }
        fs.writeFile ("./afile.json", JSON.stringify (bot.afile, null, 4), err => {
            if (err) throw err;
        });
    }

    
    if (message.content.includes("boomer") && pass === message.author.id) {

        if (message.author.id !== '437286707264749570' || message.author.id !== '613841370905444423'){
            const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/398526069910798348/634885215994642459/boomer.png');
            message.channel.send(attachment);
        }
    }

    if (message.content.startsWith("Pip") && war === true){
        message.channel.send("Alright! **Pip** has won this match! Tough luck, Pkoby. Bernie's not gonna be happy about this one.");
        war = false;
        let pipwins = bot.afile["PipWins"].pips;
        pipwins = pipwins + 1;
        bot.afile ["PipWins"] = {
            pips: pipwins   
        }
        fs.writeFile ("./afile.json", JSON.stringify (bot.afile, null, 4), err => {
            if (err) throw err;
        });
    }

    if (message.content.startsWith("Pkoby") && war === true){
        message.channel.send("Alright! **Pkoby** has won this battle! Too bad, Pip. Looks like your 'pure-place' needs some cleaning...");
        war = false;
        let pkwins = bot.afile["PkWins"].pkobys;
        pkwins = pkwins + 1;
        bot.afile ["PkWins"] = {
            pkobys: pkwins
        }
        fs.writeFile ("./afile.json", JSON.stringify (bot.afile, null, 4), err => {
            if (err) throw err;
        });
    }
    
    if (message.content.startsWith("__Today's Song")){
        if (message.author.id === '178539479827611648'){
            tdmessage = message.toString();
            bot.afile ["TodaySong"] = {
                today_song: tdmessage
            }
            fs.writeFile ("./afile.json", JSON.stringify (bot.afile, null, 4), err => {
                if (err) throw err;
            });
            message.channel.send("Message Recorded!");
        }
    }

    

    /*if (message.content.toLowerCase().includes("creeper")){
        message.channel.send("Aww man.");
    }
    */

    if (message.mentions.users.first() != undefined)
    {
        if (message.mentions.users.first().id == BotID){
        pingmes = true;
        message.channel.send("wHAT?!");
        pingmeschannel = message.channel.id;
        }
    }

    if (pingmes == true && message.content.toLowerCase().includes("help") && message.author.id != BotID && message.channel.id == pingmeschannel){
        message.channel.send("Looking for help? To see a list of commands, type 'v!commands', or to see other information, type 'v!info' to see a list of available options");
        pingmes = false;
    }

    if (pingmes == true && message.content.toLowerCase().includes("commands") && message.author.id != BotID && message.channel.id == pingmeschannel){
        message.channel.send("Looking for a command list? To see a list of commands, type 'v!commands'");
        pingmes = false;
    }

    if (pingmes == true && (message.content.toLowerCase().includes("hi") || message.content.toLowerCase().includes("hello") || message.content.toLowerCase().includes("hey")) && message.author.id != BotID && message.channel.id == pingmeschannel){
        message.channel.send("Hello, "+message.author.username);
        pingmes = false;
    }

    
    

})







bot.on('messageReactionAdd', (messageReaction, user) => {
    if(user.bot) return;
    const {message, emoji} = messageReaction;
    
    if (emoji.name === "🌿") {
        if (user.id === '178539479827611648') {
        //message.channel.send(user.username)
        key = 1;
        message.channel.send("We're all here for you, **" + message.author.username + "**! Best of luck, and don't give up!")
        //message.channel.send('People in the session: '+user.username).then((message) => {message.edit(user.username);});
        }
        if(user.id === message.author.id && key === 1 || key === 0){
            message.channel.send('**'+ user.username + "** has joi- Wait. You're supporting yourself?! How sweet! ♥");
        }
        if (user.id !== message.author.id && (key === 1 || key === 0)){
            
            message.channel.send('**'+ user.username + '** has joined the support gang! 💙');
        }
        }
        
        

        if (emoji.name === "🎸") {
            if (user.id === '350802851964125184') {
            
            message.channel.send("Snoop has requested <@"+message.author.id+"> for a vibe check! Prob because the post he reacted to was not epic. 🎸")
            }
            else if (user.id === '351941317305040896') {
                message.channel.send("Reun has requested <@"+message.author.id+"> for a vibe check! Why? REASONS ARE UNNECESSARY! 🎸")
            }
            }

        if (emoji.name === "💰") {
            stolenmeme = new MessageAttachment (message.attachments.first().url);
            message.channel.send("This is a message to alert that "+user.username+" has stolen "+message.author.username+"'s meme. No further action is required.");
            bot.users.cache.get(user.id).send(stolenmeme);
        }

        if (emoji.name == "🔎"){
            message.channel.send(message.author.username + ", I have just analysed all "+ message.content.length + " characters of that post you made, and I still don't get how drunk you got to even type that.")
        }

        

        if (emoji.name === "🕹") {
            if (user.id === '178539479827611648') {
            
            message.channel.send("Don't fall in, **"+message.author.username+"**. Now pick your head up, gamer. Your headset is falling.")
            }
            }

        if (emoji.name === "🌭"){
            message.react(":one:");
        }

        if (emoji.name == "🤗"){
        hugs = 16;
                user1 = message.author;
                if (user1 !== undefined && user1.id === user.id){
                    message.channel.send("Oh...you hugged yourself? Damn, you're lonely...")
                }
                else if (user1 !== undefined && user1.id === BotID) {
                    if (user.id === '356389068634062848') {
                        gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                    message.channel.send("*Hugs "+user.username+" back!* 💙");
                    message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    }
                    else {

                    message.channel.send("Nope! You ain't hugging me ya crap! Hug someone else!")
                }
            }
                else if (user1 !== undefined){
                    if (user1.id == '346324933598773251'){
                        gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                        message.channel.send("*You got this, Prince! Stay strong, and believe in yourself because everyone believes in you!* ❤️");
                        message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    }
                    else{
                    gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                    message.channel.send("*"+user.username+" gives "+user1.username+" a hug!* 💙");
                    message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    suplexChance = Math.floor (Math.random() * (10 - 1 + 1)) +1;
                    if (suplexChance <= 1){
                        const suplex = new MessageAttachment('https://cdn6.omidoo.com/sites/default/files/imagecache/1200x630/images/headline/201803/thesuplex2.jpg');
                        message.channel.send("But surprise! It turned into a hecking suplex!")
                        message.channel.send(suplex);
                    }}
                }
                
                
                else {
            message.channel.send("...but there's no one to hug! How pitiful...");
                }
            }

            if (emoji.name == "▶️" && rollboll == true && currentroll == message.id){
                message.delete();
                if (indexroll == rollpics.length - 1){
                    indexroll = 0;
                }
                else { indexroll++; }
                currentmoon = new MessageAttachment(rollpics[indexroll]);
            message.channel.send(currentmoon).then(message => {message.react("◀️");
            message.react("▶️");
            message.react("🔀");
            message.react("🛑");
            currentroll = message.id;})
            }

            if (emoji.name == "◀️" && rollboll == true && currentroll == message.id){
                message.delete();
                if (indexroll == 0){
                    indexroll = rollpics.length - 1;
                }
                else { indexroll--; }
                currentmoon = new MessageAttachment(rollpics[indexroll]);
            message.channel.send(currentmoon).then(message => {message.react("◀️");
            message.react("▶️");
            message.react("🔀");
            message.react("🛑");
            currentroll = message.id;})
            }

            if (emoji.name == "🔀" && rollboll == true && currentroll == message.id){
                message.delete();
                indexroll = Math.floor(Math.random() * (rollpics.length -1))
                currentmoon = new MessageAttachment(rollpics[indexroll]);
            message.channel.send(currentmoon).then(message => {message.react("◀️");
            message.react("▶️");
            message.react("🔀");
            message.react("🛑");
            currentroll = message.id;})
            }

            if (emoji.name == "🛑" && rollboll == true && currentroll == message.id){
                message.delete();
                rollboll = false;
            }


           

        });






























































































































































        var int, emoques = 0;
        var int, triv = 0;
        var emoid;
        var quid;
        var slotfruits = ["🍎", "🍐", "🍊", "🍋", "🍇", "🍓", "🍒"];
        //dicegame
        var d6 = [1, 2, 3, 4, 5, 6];

        //mmtrivia
        var mmoquests = ["`What is the name of the game that is featured on a Nintendo Switch, contains Mario sfx, but is NOT from Nintendo?`", "`Who is the composer of Megalovania?`", "`What was the text which normally appeared with the dancing roach meme?`" , "`Who once roleplayed as a Novakid?`" , "`Fill in the blanks: 'For his neutral special, Mario wields ____'`" , "`Fill in the blanks: 'Hey all, _____ ____.'`" , "`What's the name of the Mario spinoff that has Pac-Man as a playable character?`" , "`Is Pip pure?`" , "`True or False: Moon once had a username called 'Mooncake Festival' in Nintendo Discord.`" , "`True or False: The 3DS game: Super Mario 3D Land has a feature that asks you to take a break every once in a while.`" , "`Who is Irri's wife?`" , "`What is the name of the teacher in Chapter 3 of Parappa the Rapper 2?`" , "`What is the name of the fictional character both Korbs and Name are in love with?`" , "`What is the name of the command which requires you to get 10 fruits in a row to win?`" , "`Relating to jokes like 'Joe', 'Yuri', and 'Ligma', which joke is the LEAST offensive to the victim?`" , "`In the show 'Hazbin Hotel' which character is a crossdresser?`" , "`Jasmin is an OC from whom?`" , "`Who is the ONLY discord user that can hug VirusBot, with the bot hugging them back?`" , "`Which cartoon show has a theme song with the lyrics 'No time for relaxation'?`" , "`True or False: Reun has the ability to manage the Roleplay community.`"];
        var mmoans = ["just shapes and beats", "toby fox", "hoes mad", "snoop", "fire", "scott here", "mario kart arcade gp", "yes", "false", "true", "cain", "guru ant", "mym", "imposslots", "updog", "angel dust", "izzle", "jet", "sonic x", "true"];
        var mmids = ["636573475993288734", "635683701987999804", "634821648385572883", "640725111397285888", "607676160234618889"];
        var mmA;
        var mmB;
        var boolean, mmgame = false;
        var int, mmnum = 0;
        var boolean, mmchat = false;
        var mmans;
        var mmpicked;
        var int, mmAscore = 0;
        var int, mmBscore = 0;
        //trivia
        questions1 = ["Who posts daily questions in their endless channel?", "Who is/was associated with the song 'Captain Save A Hoe'?", "What's the second song in Week 6 of Friday Night Funkin'?", "What adjective would you call Banjo to ruin his day?", "Which FEH character does Gabe hate?", "Which Fire Emblem character is known as Dru's waifu?", "March 10th is the day of which video game character?", "Are you epic?", "In Super Mario Galaxy (Wii version only), deleting the model of a certain item will completely crash the game. What's that item?", "Mario Party 3 is for which Nintendo Console?", "Ice Climbers first appeared in which Smash game?", "Who has an OC that's capable of destroying the world?", "The 'Ruler of the Rhythm' event is mainly hosted by whom?", "In the UK, the word 'Color' a spelt with a...?", "Who's fantasy world contains a creature made by Ghost?", "Is Name cute?", "Which Rhythm Heaven game is on the Wii?", "What is the name of the fan-made song that plays on the anti-piracy screen of Mario Party DS?", "Which polygon has eight fantastic sides and eight awesome angles?"]
        answers1 = ["jet", "ethan", "roses", "gay", "loki", "lyn", "mario", "yes", "mushroom", "64", "melee", "everyone", "knux", "u", "dru", "yes", "fever", "piracy is no party", "octagon"]

        //snek
        ladderA = [2, 7, 8, 15, 21, 28, 36, 51, 71, 78, 87];
        ladderB = [38, 14, 31, 26, 42, 84, 44, 67, 91, 98, 94];
        snekA = [16, 46, 49, 62, 64, 74, 89, 92, 95, 99];
        snekB = [6, 25, 11, 19, 60, 53, 68, 88, 75, 80];
        start = 0;
        path = 0;

        //9+
        var cards9 = [0, 1, 2, 3];
        var players9 = [0];
        var rawplayers9 = [0];
        var innercardpile = [];
        var outercardpile = [];
        p1cardpile = [];
        p2cardpile = [];
        p3cardpile = [];
        p4cardpile = [];
        var a9match = false;
        var a9game = false;
        var a9channel;
        var j;
        var maintotal = 0;
        var onegone = false;
        var limit9plus = 9;
        var choosingC = false;

        //o64
        var cards64 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var players64 = [];
        var o64channel = undefined;
        var o64join = false;
        var o64game = false;
        var o64truedeck = 0;
        var o64liedeck = 0;
        var dm;
        var tn = 0;
        var ln = 0;
        var claim = 0;

        //pwp
        var numspwp = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "T", "W", "R", "X", "D"];
        var typespwp = ["Red", "Green", "Blue", "Yellow"];
        var cardspwp = [];
        var othernum = "";
        var currentnum = "";
        var othertype = "";
        var checking = false;
        var checker = 0;
        var currenttype = "";
        var playerspwp = [];
        var pwpplayer = 0;
        var pwpchannel = undefined;
        var pwpjoin = false;
        var pwpgame = false;
        var danger = false;
        var pwpreverse = false;
        var choosingType = false;
        var cpluschannel = undefined;

        //number guess
        var guesschannel;
        var guessnum = 0;
        var guesscount = 0;
        var guessgame = false;

        //rpg
        var heroesname = ["???", "???", "???", "???"];
        var heroesclass = ["WARRIOR", "MAGE", "HEALER", "TANK"]
        var rpgmyt = "Meet Your Team!"
        var heroesdata = []
        var heroeshp = [1, 1, 1, 1];
        var heroesmp = [1, 1, 1, 1];
        var heroesmaxmp = [1, 1, 1, 1];
        var heroesmaxhp = [1, 1, 1, 1];
        var rpgbosses = ["Chi", "Nightmare", "Mistake", "Terror", "King's Toilet", "Superman 64", "Twin Woods", "JoyCon's Drift", "Lagswitch", "Stan", "Broken TV"];
        var rpgbosshp = 1;
        var rpgmaxbosshp;
        var rpgbosscurrent;   
        var rpggame = false;
        var rpgcurfighter = 0;
        var rpgui = 0;
        //0 = null, 1 = charcter select, 2 = battle
        var rpgchannel;
        var rpgcurmes;   
        var rpgbeamchance = 50;
        var rpgdmg = 0;        
        
        bot.on('message', message=> {
            
            let args = message.content.substring(PREFIX.length).split(" ");
            if (message.author.bot) return;
        
            if (message.content.startsWith(PREFIX)){
                switch (args[0]){
        
                    case 'list':
                        message.channel.send("```May the Games Begin! \n \nCURRENT GAME LIST\n\nemoji - Guess that Emoji!\ngayslots - The gayest of slots, it makes sense to be here...kinda.\ntrivia - You think you're a true Discord boomer? Try out these questions about the past!```");
                        break;

                    case 'trivcheck':
                        message.channel.send("There are **"+questions1.length+"** trivia questions with **"+answers1.length+"** answers.")
                    break;
        
                    case 'emoji':
                            emoid = message.channel.id;
                        message.channel.send("Let's go! Can you guess what this means?")
                            emogi = 35;
                            var emo = Math.floor (Math.random() * (emogi - 1 + 1)) +1;
                            switch (emo) {
                                case 1:
                                     message.channel.send("🎸 ✅");
                                     message.channel.send("`---- ------`");
                                     emoques = 1;
                                     break;
        
                                case 2:
                                    message.channel.send("💥🔫🐉");
                                    message.channel.send("`---- -----`");
                                    emoques = 2;
                                    break;
        
                                case 3:
                                    message.channel.send("🍕 🕰");
                                    message.channel.send("`----- ----`");
                                    emoques = 3;
                                    break;
        
                                case 4:
                                    message.channel.send("🌈 🛣");
                                    message.channel.send("`------- ----`");
                                    emoques = 4;
                                    break;
        
                                case 5:
                                     message.channel.send("🌍🛣, 🏠⬅🚶");
                                     message.channel.send("`---- --------`");
                                     emoques = 5;
                                     break;
        
                                case 6:
                                     message.channel.send("⛰🍓💙");
                                     message.channel.send("`-------`");
                                     emoques = 6;
                                     break;
        
                                case 7:
                                     message.channel.send("☁🎵☁");
                                     message.channel.send("`------ ------`");
                                     emoques = 7;
                                     break;
        
                                case 8:
                                     message.channel.send("☕");
                                     message.channel.send("`---`");
                                     emoques = 8;
                                     break;
        
                                case 9:
                                    message.channel.send("🍽🎮");
                                    message.channel.send("`------ -----`");
                                    emoques = 9;
                                    break;
        
                                case 10:
                                     message.channel.send("💥🕛💥");
                                     message.channel.send("`----- -- --- ----`");
                                     emoques = 10;
                                     break;
        
                                case 11:
                                    message.channel.send("🐱🕰");
                                    message.channel.send("`-------- ----`");
                                    emoques = 11;
                                    break;
        
                                    case 12:
                                    message.channel.send("🚶🎸");
                                    message.channel.send("`---- -----`");
                                    emoques = 12;
                                    break;
        
                                    case 13:
                                    message.channel.send(":punch: :negative_squared_cross_mark: :laughing: ");
                                    message.channel.send("`-------- --- ----------`");
                                    emoques = 13;
                                    break;
        
                                    case 14:
                                    message.channel.send(":penguin: :loud_sound: ");
                                    message.channel.send("`--------- -------`");
                                    emoques = 14;
                                    break;
        
                                    case 15:
                                    message.channel.send(":grin: :bee:");
                                    message.channel.send("`----- ---`");
                                    emoques = 15;
                                    break;
        
                                    case 16:
                                    message.channel.send(":bee: :cake: :bee:");
                                    message.channel.send("`------- ----`");
                                    emoques = 16;
                                    break;
        
                                    case 17:
                                    message.channel.send(":crab: :crab: :crab:");
                                    message.channel.send("`---- ----`");
                                    emoques = 17;
                                    break;
        
                                    case 18:
                                    message.channel.send(":fork_knife_plate: :watermelon:");
                                    message.channel.send("`--------`");
                                    emoques = 18;
                                    break;
        
                                    case 19:
                                    message.channel.send(":goat: :octopus: :love_letter: :heart_eyes_cat:");
                                    message.channel.send("`---------`");
                                    emoques = 19;
                                    break;
        
                                    case 20:
                                    message.channel.send(":tomato: :shallow_pan_of_food:");
                                    message.channel.send("`------ ----`");
                                    emoques = 20;
                                    break;
        
                                    case 21:
                                    message.channel.send(":dancer: :alarm_clock: :arrow_forward: :skull_crossbones:");
                                    message.channel.send("`----- ----- --- --- ----`");
                                    emoques = 21;
                                    break;
        
                                    case 22:
                                    message.channel.send(":sheep: :zzz:");
                                    message.channel.send("`------ ------`");
                                    emoques = 22;
                                    break;
        
                                    case 23:
                                    message.channel.send(":tophat: :hourglass:");
                                    message.channel.send("`- --- -- ----`");
                                    emoques = 23;
                                    break;
        
                                    case 24:
                                    message.channel.send(":raised_hand: :neutral_face: :raised_hand:");
                                    message.channel.send("`--- ----- ---'-- ----?`");
                                    emoques = emo;
                                    break;
        
                                    case 25:
                                    message.channel.send(":one: :one: :crown:");
                                    message.channel.send("`------ ----`");
                                    emoques = emo;
                                    break;
        
                                    case 26:
                                    message.channel.send(":ballot_box: :left_right_arrow: :ballot_box:");
                                    message.channel.send("`---- ---`");
                                    emoques = emo;
                                    break;
        
                                    case 27:
                                    message.channel.send(":checkered_flag: :snail:");
                                    message.channel.send("`-----`");
                                    emoques = emo;
                                    break;
        
                                    case 28:
                                    message.channel.send(":star: :mushroom: :japanese_castle:");
                                    message.channel.send("`----- ----- --`");
                                    emoques = emo;
                                    break;
        
                                    case 29:
                                    message.channel.send(":sunrise_over_mountains: :clock9: :calendar_spiral:");
                                    message.channel.send("`--'- - -'----- -- - --------`");
                                    emoques = emo;
                                    break;
        
                                    case 30:
                                    message.channel.send(":pensive: :sunny: :point_right: :shopping_bags:");
                                    message.channel.send("`- --- -------- -- - ---`");
                                    emoques = emo;
                                    break;
        
                                    case 31:
                                    message.channel.send(":cross: :cloud_rain: :earth_africa:");
                                    message.channel.send("`- ----- --- ----- ---- -- ------`");
                                    emoques = emo;
                                    break;
        
                                    case 32:
                                    message.channel.send(":mushroom: :shopping_bags: :book:");
                                    message.channel.send("`---- ---- -----`");
                                    emoques = emo;
                                    break;
        
                                    case 33:
                                    message.channel.send(":newspaper: :mushroom: :calendar: :door:");
                                    message.channel.send("`----- -----: --- -------- ---- ----`");
                                    emoques = emo;
                                    break;
        
                                    case 34:
                                    message.channel.send(":apple: :peach: :jeans:");
                                    message.channel.send("`----- ------ -----`");
                                    emoques = emo;
                                    break;
        
                                    case 35:
                                    message.channel.send(":sunglasses: :one: :two: :video_game: :computer:");
                                    message.channel.send("`-------------.---`");
                                    emoques = emo;
                                    break;
        
        
                                    
                                 }
                            break;
        
                        
        
        
                        case 'emojilost':
                            emoquest = 0;
                            message.channel.send("Too bad!");
                        break;
        
                        case 'trivialost':
                            triv = 0;
                            message.channel.send("Too bad...");
                        break;



                        case 'rpg':
                                 rpggame = true;
                                 rpgui = 1;
                                 rpgchannel = message.channel;
                                 rpgGatherHeroes();
                        break;
        
                        
        
        
        
        
        
                            case 'gayslots':
        
                                    imos1 = Math.floor ((Math.random() * slotfruits.length));
                                    imos2 = Math.floor ((Math.random() * slotfruits.length));
                                    imos3 = Math.floor ((Math.random() * slotfruits.length));
                                    imos4 = Math.floor ((Math.random() * slotfruits.length));
                                    imos5 = Math.floor ((Math.random() * slotfruits.length));
                                    imos6 = Math.floor ((Math.random() * slotfruits.length));
                                    imos7 = Math.floor ((Math.random() * slotfruits.length));
                                    imos8 = Math.floor ((Math.random() * slotfruits.length));
                                    imos9 = Math.floor ((Math.random() * slotfruits.length));
                                    imos10 = Math.floor ((Math.random() * slotfruits.length));
                                    imos11 = Math.floor ((Math.random() * slotfruits.length));
                                    imos12 = Math.floor ((Math.random() * slotfruits.length));
                                    imos13 = Math.floor ((Math.random() * slotfruits.length));
                                    imos14 = Math.floor ((Math.random() * slotfruits.length));
                                    imos15 = Math.floor ((Math.random() * slotfruits.length));
                                    imos16 = Math.floor ((Math.random() * slotfruits.length));
                                    imos17 = Math.floor ((Math.random() * slotfruits.length));
                                    imos18 = Math.floor ((Math.random() * slotfruits.length));
                                    imos19 = Math.floor ((Math.random() * slotfruits.length));
                                    imos20 = Math.floor ((Math.random() * slotfruits.length));
                                    message.channel.send("🎰 `Welcome to Jack's Hell!` 🎰 \n**" +message.author.username+"** rolled the impossible slots...\n   ["+slotfruits[imos1]+" "+slotfruits[imos2]+" "+slotfruits[imos3]+" "+slotfruits[imos4]+" "+slotfruits[imos5]+" "+slotfruits[imos6]+" "+slotfruits[imos7]+" "+slotfruits[imos8]+" "+slotfruits[imos9]+" "+slotfruits[imos10]+" "+slotfruits[imos11]+" "+slotfruits[imos12]+" "+slotfruits[imos13]+" "+slotfruits[imos14]+" "+slotfruits[imos15]+" "+slotfruits[imos16]+" "+slotfruits[imos17]+" "+slotfruits[imos18]+" "+slotfruits[imos19]+" "+slotfruits[imos20]+"]")
                                    if (slotfruits[imos1] === slotfruits[imos2] === slotfruits[imos3] === slotfruits[imos4] === slotfruits[imos5] === slotfruits[imos6] === slotfruits[imos7] === slotfruits[imos8] === slotfruits[imos9] === slotfruits[imos10] === slotfruits[imos11] === slotfruits[imos12] === slotfruits[imos13] === slotfruits[imos14] === slotfruits[imos15] === slotfruits[imos16] === slotfruits[imos17] === slotfruits[imos18] === slotfruits[imos19] === slotfruits[imos20]) {
                                        message.channel.send("YOU'VE ***GOTTA BE KIDDING ME!***\nYou should prob ping Gabe for a reward. This wasn't expected to happen.")
                                    }
                                    else {
                                        message.channel.send("Nice! You lost! That was expected...")
                                    }
                                    break;
        
                                    case 'snek':
                                        /*
                                        ladders:
                                        2 -> 38
                                        7 -> 14
                                        8 -> 31
                                        15 -> 26
                                        21 -> 42
                                        28 -> 84
                                        36 -> 44
                                        51 -> 67
                                        71 -> 91
                                        78 -> 98
                                        87 -> 94
                                    
                                        sneks:
                                        16 -> 6
                                        46 -> 25
                                        49 -> 11
                                        62 -> 19
                                        64 -> 60
                                        74 -> 53
                                        89 -> 68
                                        92 -> 88
                                        95 -> 75
                                        99 -> 80
                                    
                                        */
                                    me = message.member.nickname;
                                    if (me == null || me == undefined){
                                        me = message.author.username;
                                    }

                                    message.channel.send("**"+me+"** takes the lead and the gang follows...");
                                    sp = Math.floor ((Math.random() * d6.length));
                                    path += d6[sp];
        
                                    for (i = 0; i < ladderA.length; i++){
                                        if (path == ladderA[i]){
                                            message.channel.send("WHOA! The gang found a ladder! They go from **"+ladderA[i]+"** to **"+ladderB[i]+"**!!")
                                            path = ladderB[i];
                                        }
                                        
                                    }
        
                                    for (i = 0; i < snekA.length; i++){
                                        if (path == snekA[i]){
                                            message.channel.send("**HOLY CRAP!** IT'S A SNEK! The gang gets ambushed at **"+snekA[i]+"** and got yeeted to **"+snekB[i]+"**!!")
                                            path = snekB[i];
                                        }
                                    }
        
                                    if (path >= 100){
                                        message.channel.send("WOOOO! The gang successfully made it out alive! Let's do it again...")
                                        path = 0;
                                    }
                                    else{
                                        message.channel.send("The gang stops at **"+path+"** for a lovely campfire.")
                                    }
                                        
                                    
                                       break;
        
        
                            case '9+':
                                message.channel.send("Welcome to 9+! A simple card game where you cannot exceed the number 9!\n\n```Commands: \nv!9+rules - View the rules.\nv!9+create - Create a room.\nv!9+join - Join an existing room.\nv!9+start - Begin the match\nv!9+stop - Cancel a match.```");
                                break;

                            case '9+rules':
                                    message.channel.send("**How do I play 9+?**\n\n-At the start of the game, you will receive 4 cards between 0-3.\n-When it's your turn, you type a card number which you currently own, and that number will be added towards a total.\n-If you play a number that makes the total go over 9, you will be removed and the game will reset with the remaining players.\n**-The last player standing wins!**")
                            break;

                            case '9+create':
                                if (a9match == true){
                                    message.channel.send("Oops! It seems like a room is already created! \n`You can join using 'v!9+join'.`")
                                }
                                else {
                                    message.channel.send("Alright! Creating a room!")
                                    a9match = true;
                                    a9channel = message.channel.id;
                                    addPlayerto9match(message.author)
                                }
                                
                                break;

                            case '9+join':
                                if (a9match == false && a9channel == undefined){
                                    message.channel.send("There is no match going on at the moment \n Feel free to make one using 'v!9+create'.")
                                }
                                else if (a9match == true && a9channel != message.channel.id){
                                    message.channel.send("A match is going on, but it's not at this channel/guild!")
                                }
                                else if (a9game == true){
                                    message.channel.send("A match is already in session!")
                                }
                                else{
                                addPlayerto9match(message.author);
                                }
                                break;

                            case '9+stop':
                                if (a9match == true && message.channel.id == a9channel){
                                message.channel.send("`Scrapping the match...`")
                                end9Match();
                                }
                                else {
                                    message.channel.send("`There was an error while doing this.`")
                                }
                                break;

                            case '9+start':
                                if (players9.length <= 1){
                                    message.channel.send("`You can't start a match as one person.`")
                                }
                                else if (players9.length > 1 && a9match == true && message.channel.id == a9channel){
                                    message.channel.send("`Let's begin!`")
                                    shareOutCards();
                                    a9game = true;
                                    begin9Match();
                                }
                            break;

                            case 'c+':
                                message.channel.send("`Please specify the number.`")
                                choosingC = true;
                                cpluschannel = message.channel.id;
                            break;

                            case 'c9reset':
                                message.channel.send("`Done.`")
                                limit9plus = 9;
                            break;



                            case 'o64':
                                message.channel.send("Welcome to o64! A game where you can't trust ANYBODY.\n\n```Game Hosting Commands:\nv!o64rules - View the rules.\nv!o64create - Create a Room\nv!o64join - Join a Room\nv!o64start - Start the Game\nv!o64stop - Cancel the Game\n\nIn-Game:\nv!o64w - Claim to be over 64```");
                            break;

                            case 'o64rules':
                                message.channel.send("**What is this game and how does it work?**\n-This game has 2 main totals: The 'true' total and the 'visible' total.\n-One by one, each player will receive a number from Virus (1-10), which will be automatically added to the 'true' total.\n-The player who just received a number can say what it is, or lie about which number they got. Either way, the number they claimed to have will be added onto the 'visible' total for everyone to see.\n\n**How do you win?**\n-If you believe the 'true' total has reached a number over 64, type `v!o64w` to claim so.\n-If it's true, you win! If not, however, you will be executed for lying.\n-The game will end if a player claims correctly, or if there are no players left.")
                            break;

                            case 'o64create':
                                if (o64join == false){
                                    message.channel.send("`Creating Room...`")
                                    addPlayerto064(message.author)
                                    o64channel = message.channel.id;
                                    o64join = true;
                                }
                                else {
                                    message.channel.send("`ERROR: A game is already starting/has already started.`")
                                }

                            break;

                            case 'o64join':
                                if (o64join == false){
                                    message.channel.send("There is no game to join. Maybe try creating a new one?")
                                }
                                else if (o64join == true && message.channel.id != o64channel){
                                    message.channel.send("There is a game going on elsewhere.")
                                }
                                else if (o64game == true){
                                    message.channel.send("You cannot join a match that has already started.")
                                }
                                else{
                                    addPlayerto064(message.author);
                                }

                            break;

                            case 'o64start':
                                if (o64game == true){
                                    message.channel.send("A game is going on.")
                                }
                                else if (o64join == false){
                                    message.channel.send("There is no match to start.")
                                }
                                else if (o64join == true && message.channel.id != o64channel){
                                    message.channel.send("That command wouldn't work here.")
                                }
                                else if (players64.length < 2){
                                    message.channel.send("There are too little people to start a match.")
                                }
                                else {
                                    dm = 0;
                                    o64game = true;
                                    maino64();
                                }
                            break;

                            case 'o64w':
                                call64Bluff();
                            break;

                            case 'o64stop':
                                message.channel.send("Scrapping the match.")
                                end64game();
                            break;






                            case 'pwp':
                                message.channel.send('Welcome to PWP (Playing with Power)! The game where you have to run out of cards as fast as possible!\n\n```Commands: v!pwprules - Shows the rules\nv!pwpcreate - Create a room\nv!pwpjoin - Join a room\npwpstart - Start the game\nv!pwpstop - Stop the game```')
                            break;

                            case 'pwprules':
                                message.channel.send("**What is this game?**\n-PWP is a multiplayer game where your goal is to get rid of your cards as fast as possible. (Basically, it's like UNO.)\n-As the game starts, you'll be given 7 'cards' each, and one-by-one, each player will place a card on their turn.\n\n**How do I play?**\n-The way to place cards is like UNO. Each card will have one of four colours at the beginning (Red, Green, Blue, Yellow) and one of 15 chars at the end (0-9, T, R, X, W, D). You'll be able to play a card if your card matches either the colour or the char on the previous card.\n-If you're out of matching cards, use 'v!pwpick' to gain a new card.\n\n**What are these letters, and what is the 'Danger Zone'?**\nIf a 'D' card is played, you'll either enter, or exit the 'Danger Zone'. In this zone, the powers of the other power cards (The cards which end with a letter) will greatly intensify.\n\n**What do the Power Cards do?** \n*When out of the Danger Zone...*\nD - Puts players in the Danger Zone\nT - Forces the next player to receive two cards, and skips them\nW - Allows the player to change the color of cards to be played\nR - Reverses the order of players\nX - Skips the next player\n\n*When in the Danger Zone...*\nD - Takes players out of the danger zone\nT - Forces the next player to receive eight cards, and skips them\nW - The colour randomly changes, and the next player receives 4 cards\nR - Randomly picks the next player\nX - Skips the next three players");
                            break;

                            case 'pwpcreate':
                                if (pwpjoin == true || pwpgame == true){
                                    message.channel.send("A game is already in session.")
                                }
                                else{
                                    pwpjoin = true;
                                    pwpchannel = message.channel.id;
                                    addPlayertopwp(message.author)
                                }
                            break;

                            case 'pwpjoin':
                                if (pwpgame == true || pwpchannel != message.channel.id){
                                    message.channel.send("`An error occured.\nCODE: 33354`")
                                }
                                else {
                                    addPlayertopwp(message.author);
                                }
                            break;

                            case 'pwpstart':
                                if (pwpgame == true || pwpchannel != message.channel.id || pwpjoin == false){
                                    message.channel.send("`An error occured.\nCODE: 42069`")
                                }
                                else {
                                    pwpgame = true;
                                    sharepwpcards();
                                }
                            break;

                            case 'pwpick':
                                if (pwpgame == true){
                                if (message.author == playerspwp[pwpplayer]){
                                giveCards(1);
                                chooseNextPlayer();
                                }
                            }
                            break;
                            
                            case 'pwpstop':
                                if (message.channel.id == pwpchannel){
                                message.channel.send("Stopping the match.")
                                endPwp();
                                }
                                else {
                                    message.channel.send("`An error occured.\nCODE: 1337`")
                                }
                            break;






                            case 'numguess':
                                guessnum = Math.floor(Math.random() * 100);
                                guessgame = true;
                                guesscount = 0;
                                guesschannel = message.channel.id;
                                message.channel.send("Ok! I'm thinking of a number between 0 and 100...")
                            break;







                           




        
        
                            case 'trivia':
                                    quid = message.channel.id;
                                message.channel.send("Alright! Let's see how much you know.")
                                questions = questions1.length;
                            var quests = Math.floor (Math.random() * (questions - 1 + 1)) +1;
                            message.channel.send(questions1[quests]);
                            trivans = answers1[quests];
                            
                            
                            break;
        
                            case 'mmtrivia':
                                if (mmgame === true) {
                                    message.channel.send("A game is already in session!");
                                }
                                else{
                                 message.channel.send("Searching via VirusNet...")
                                mmA = message.channel.id;
                                mmB = Math.floor ((Math.random() * mmids.length));
        
                                while (mmids[mmB] === mmA){
                                    mmB = Math.floor ((Math.random() * mmids.length));
                                }
        
        
                                bot.channels.cache.get(mmA).send("`Opponent found! Waiting for response... \n \n (You can type 'v!decline' to cancel the game.)`")
                                bot.channels.cache.get(mmids[mmB]).send("```This channel has been picked for a round of trivia! Do you accept? \n\n(Type 'v!accept to accept the challenge)\n(Type 'v!decline' to decline the challenge.)```");
                                mmchat = true;
                            }
        
                            break;
        
                            case 'decline':
                                if (mmchat == false)
                                { message.channel.send("There's no match to cancel!");}
                                else {
                                if (mmA !== undefined && mmids[mmB] !== undefined) {
                                    if (message.channel.id === mmids[mmB]){
                                    bot.channels.cache.get(mmA).send("`The second party has declined!`");
                                    bot.channels.cache.get(mmids[mmB]).send("`You have declined the challenge!`")
                                    mmgame = false;
                                    mmchat = false;
                                }
                                else if (message.channel.id === mmA) {
                                    bot.channels.cache.get(mmA).send("`You have canceled the challenge!`");
                                    bot.channels.cache.get(mmids[mmB]).send("`Nevermind...the challenge was canceled`")
                                    mmgame = false;
                                    mmchat = false;
                                }
                            }
                                
                            }
                            break;
        
                            case 'accept':
                                if (mmA !== undefined && mmids[mmB] !== undefined) {
                                    if (message.channel.id === mmids[mmB]){
                                    bot.channels.cache.get(mmA).send("`Challenge accepted! Let's begin!`");
                                    bot.channels.cache.get(mmids[mmB]).send("`Alright! Let's begin!`")  
                                    mmgame = true;
                                    mmnum = 0;
                                    nextQuestion();
                                }}
                                break;
        
                            case 'endmatch':
                                if (mmgame == false){
                                    message.channel.send("There's no match to end!")
                                }
                                else{
                                    bot.channels.cache.get(mmA).send("`The match has been canceled.`");
                                    bot.channels.cache.get(mmids[mmB]).send("`The match has been canceled.`");
                                    mmchat = false;
                                    mmgame = false;
                                    mmnum = 11;
                                }
                                    break;
        
        
        
        
                           
        
                }
        
        
        
                 
        
        
        
                
            }
        
            if (message.channel.id === mmA && mmchat === true && message.author.id !== BotID && !message.content.includes(mmoans[mmans])){
                bot.channels.cache.get(mmids[mmB]).send("[CHAT] "+message.author.tag +": "+message);
            }
            
            if (message.channel.id === mmids[mmB] && mmchat === true && message.author.id !== BotID){
                bot.channels.cache.get(mmA).send("[CHAT] "+message.author.tag +": "+message);
            }
        
            function nextQuestion(){
            
                    if(mmnum < 10) {
                        mmpicked = Math.floor ((Math.random() * mmoquests.length));
                        bot.channels.cache.get(mmA).send(mmoquests[mmpicked]);
                        bot.channels.cache.get(mmids[mmB]).send(mmoquests[mmpicked]);
                        mmans = mmpicked;
                    }
                }
            
        
        
            if (message.content.toLowerCase().includes(mmoans[mmans]) && mmA !== undefined && mmids[mmB] !== undefined && mmgame === true) {
                if (message.channel.id === mmA && message.author.id !== BotID) {
                    bot.channels.cache.get(mmA).send("**"+message.author.username+"** got the correct answer!")
                    bot.channels.cache.get(mmids[mmB]).send("**"+message.author.username+"** got the correct answer!")
                    mmAscore++;
                }
                else if (message.channel.id === mmids[mmB] && message.author.id !== BotID) {
                    bot.channels.cache.get(mmA).send("**"+message.author.username+"** got the correct answer!")
                    bot.channels.cache.get(mmids[mmB]).send("**"+message.author.username+"** got the correct answer!")
                    mmBscore++;
                }
        
                mmans = 0;
                mmnum++;
                nextQuestion();
            }
        
            if (mmnum >= 10 && mmgame === true){
                bot.channels.cache.get(mmA).send("`The results are in! The challenge is over.`")
                bot.channels.cache.get(mmids[mmB]).send("`The results are in! The challenge is over.`")
                if (mmAscore > mmBscore) {
                    bot.channels.cache.get(mmA).send("`This channel wins!` :tada:")
                    bot.channels.cache.get(mmids[mmB]).send("`The opposing party wins...Too bad!`")
                }
                if (mmAscore < mmBscore) {
                    bot.channels.cache.get(mmA).send("`The opposing party wins...Too bad!`")
                    bot.channels.cache.get(mmids[mmB]).send("`This channel wins!` :tada:")
                }
                if (mmAscore === mmBscore) {
                    bot.channels.cache.get(mmA).send("`It's a draw! GG!`")
                    bot.channels.cache.get(mmids[mmB]).send("`It's a draw! GG!`")
                }
        
                bot.channels.cache.get(mmA).send("`The game has ended. Thanks for playing! Logging off...`")
                bot.channels.cache.get(mmids[mmB]).send("`The game has ended. Thanks for playing! Logging off...`")
        
                mmchat = false;
                mmgame = false;
                mmnum = 11;
        
        
            }
        
        
        
            //emoji
            if (emoid === message.channel.id && message.author.id !== BotID){
                if (message.content.toLowerCase().includes("okay guitar") && emoques === 1) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("onix shots") && emoques === 2) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out, you RP bommer!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("pizza time") && emoques === 3) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! Now, it's Pizza Time!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("rainbow road") && emoques === 4) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! MK8's is the worst, tho.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("west virginia") && emoques === 5) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the song! MOUNTAIN MAMAAAAAA")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("celeste") && emoques === 6) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the word! What a great indie...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("rhythm heaven") && emoques === 7) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! This series is underrated.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("jet") && emoques === 8) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the word! Poor Jet...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("hunger games") && emoques === 9) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! WHEN IS THE NEXT ONE?")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("lobby of the gods") && emoques === 10) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! Nova needs a nurf.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("galactic nova") && emoques === 11) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! What a neko clock.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("vibe check") && emoques === 12) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! Time for a vibe check!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("knuckles the unchuckled") && emoques === 13) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! Oh no.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("vibrating penguin") && emoques === 14) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("happy bee") && emoques === 15) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! What a happy boi...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("beesday cake") && emoques === 16) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("crab role") && emoques === 17) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! Now, let's leave Reun alone.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("eatmelon") && emoques === 18) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the emoji from emojis!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("samfuller") && emoques === 19) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the legend!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("tomato soup") && emoques === 20) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! Irri sure does love her soup...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("dance until you are dead") && emoques === 21) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! Dance break!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("sleepy sheepy") && emoques === 22) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! Night, Night, sheepy...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("a hat in time") && emoques === 23) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found the words! What a great game...")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("you think you're safe?") || message.content.toLowerCase().includes("you think youre safe")) && emoques === 24) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! But I have unfortunate news. You failed the vibe check.")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("double king") && emoques === 25) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! Now I'm hungry...")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("warp box") && emoques === 26) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! Thank gosh it's not a Mystery Box!")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("turbo") && emoques === 27) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! What a fast boi")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("super mario 64") && emoques === 28) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! Here we go! :star:")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("it's 9 o'clock on a saturday") || message.content.toLowerCase().includes("its 9 oclock on a saturday")) && emoques === 29) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! What, you don't know the song?")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("i got sunshine in a bag") && emoques === 30) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! Ah...depression amirite?")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("i bless the rains down in africa") && emoques === 31) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out!")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("mega mall story")) && emoques === 32) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out!")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("paper mario: the thousand year door") || message.content.toLowerCase().includes("paper mario the thousand year door") || message.content.toLowerCase().includes("ttyd")) && emoques === 33) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! Great Game.")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("apple bottom jeans") && emoques === 34) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! Shorty got them-")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("coolmathgames.com") || message.content.toLowerCase().includes("Coolmathgamescom")) && emoques === 35) {
                   message.channel.send("Well done, **"+message.author.username+"**! You found it out! Let's play some!")
                   emoques = 0;
               }
           }
        
        
        
        //guessgame
        if (guessgame == true && message.channel.id == guesschannel && !isNaN(message.content)){
            if (guessnum == message.content){
                message.channel.send("Aw crap! You found the number! You win! :tada:");
                clearGuessNum();
            }
            else{
                sentnum = Number(message.content);
                if (sentnum > guessnum){
                    message.channel.send("Go Lower!")
                }
                else{
                    message.channel.send("Go Higher!")
                }
                guesscount++;

                if (guesscount >= 5){
                    message.channel.send("Oooh...Out of tries! Try again...")
                    clearGuessNum();
                }
            }
        }
        
        
        
        
        
        
        
        
           //trivia
           if (quid === message.channel.id && message.author.id !== BotID){
                if (message.content.toLowerCase().includes(trivans))
                {
                    message.channel.send("**"+message.author.username+"**, you are correct!")
                    trivans = "Phobos, you are correct!";
                }
        
               }
        
            
               //9+

            if (message.author.username == players9[j]){
                icp = innercardpile[j];
                y = j;
                ycp = innercardpile[y];
                onegone = false;
                for (i = 0; i < icp.length; i++){
                    if (message == icp[i]){
                        jazz = icp[i]
                        addCard(jazz)
                        pos = i;
                        let removedCard = icp.splice(pos, 1)
                        if (ycp.length == 0){
                            bot.users.cache.get(rawplayers9[y]).send("You're out of cards. Refreshing...");
                            carda = Math.floor (Math.random() * cards9.length);
                            cardb = Math.floor (Math.random() * cards9.length);
                            cardc = Math.floor (Math.random() * cards9.length);
                            cardd = Math.floor (Math.random() * cards9.length);

                            innercardpile[y] = [cards9[carda], cards9[cardb], cards9[cardc], cards9[cardd]];

                            bot.users.cache.get(rawplayers9[y]).send(innercardpile[y]);
                        }
                        else if (onegone == true){
                            i = 5;
                        }
                        else{
                        bot.users.cache.get(rawplayers9[y]).send("`Your cards:` \n"+ycp);
                        i = 5;
                        }
                    }

                }
            }

            if (choosingC == true && cpluschannel == message.channel.id){
                if(isNaN(message.content)){
                    message.channel.send("`Not a number.`");
                }
                else{
                    message.channel.send("`Done!`");
                    limit9plus = message.content;
                    choosingC = false;
                    cpluschannel = undefined;
                }
            }


            function clearGuessNum(){
                guessgame = false;
                guessnum = 0;
                guesschannel = undefined;
                guesscount = 0;
            }


            function addPlayerto9match(user){
                tester = false;
                var playerlist = "[/////PLAYERS/////]\n"
                for (i = 0; i < players9.length; i++){
                    if (players9[i] == user.username){
                        tester = true;
                    }
                }
                if (tester == true){
                    message.channel.send("You're already added to the list!");
                }
                else{
                    if (players9[0] == 0){
                        players9[0] = user.username;
                        rawplayers9[0] = user.id;
                    }
                    else{
                        players9.push(user.username);
                        rawplayers9.push(user.id);
                    }
                    
                    
                    for (i = 0; i < players9.length; i++){
                        
                        playerlist += players9[i]+"\n";
                        
                    }
                    message.channel.send(playerlist)

                }
            }

            function end9Match(){
                players9 = [0];
                rawplayers9 = [0];
                a9match = false;
                a9game = false;
                a9channel = undefined;
            }

            function shareOutCards(){
                for (i = 0; i < players9.length; i++){
                    carda = Math.floor (Math.random() * cards9.length);
                    cardb = Math.floor (Math.random() * cards9.length);
                    cardc = Math.floor (Math.random() * cards9.length);
                    cardd = Math.floor (Math.random() * cards9.length);

                    innercardpile[i] = [cards9[carda], cards9[cardb], cards9[cardc], cards9[cardd]];
                    bot.users.cache.get(rawplayers9[i]).send("`Your cards:` \n"+innercardpile[i]);
                }
            }

            function begin9Match(){
                j = 0;
                message.channel.send("**"+players9[0]+"**, it's your turn!")
            }

            function continue9Match(){
                if (players9[j] == undefined){
                    j = 0;
                }
                checkPlayerAmount();
                if (a9game == true){
                bot.channels.cache.get(a9channel).send("**"+players9[j]+"**, it's your turn!")
                }
            }

            function addCard(card){
                maintotal += card;
                bot.channels.cache.get(a9channel).send("A "+card+" card was added. \n`The total is now: "+maintotal+"`");
                //message.channel.send("A "+card+" card was added. \n`The total is now: "+maintotal+"`")
                checkTotal();
            }

            function checkTotal(){
                if (maintotal > limit9plus){
                    message.channel.send("**The limit of "+limit9plus+" was exceeded. "+players9[j]+" has been removed.** \nThe board will now reset.")
                    pos = j;
                    let removedPlayerName = players9.splice(pos, 1)
                    let removedPlayerID = rawplayers9.splice(pos, 1)
                    let removedDeck = innercardpile.splice(pos, 1)
                    onegone = true;
                    shareOutCards();
                    maintotal = 0;
                    j++;
                    continue9Match();
                }
                else {
                    
                    j++;
                    continue9Match();
                }
            }

            function checkPlayerAmount(){
                if (players9.length == 1){
                    message.channel.send("The game is over! \n`"+players9[0]+" WINS!` :tada:")
                    end9Match();
                }
            }







               //o64
               if (message.author == players64[dm] && args[1] == undefined && o64game == true){
                   if (isNaN(message)){
                       message.channel.send("That's...not even a number. \n`Provide a number between 1-10.`")
                   }
                   else {
                       ln = message.content;
                       if ((ln < 1) || (ln > 10)){
                           message.channel.send("No one's gonna believe that.\n`Provide a number between 1-10.`")
                       }
                       else{
                           switch (ln){
                               case "1":
                                    o64liedeck += 1;
                               break;
                               case "2":
                                    o64liedeck += 2;
                               break;
                               case "3":
                                    o64liedeck += 3;
                               break;
                               case "4":
                                    o64liedeck += 4;
                               break;
                               case "5":
                                    o64liedeck += 5;
                               break;
                               case "6":
                                    o64liedeck += 6;
                               break;
                               case "7":
                                    o64liedeck += 7;
                               break;
                               case "8":
                                    o64liedeck += 8;
                               break;
                               case "9":
                                    o64liedeck += 9;
                               break;
                               case "10":
                                    o64liedeck += 10;
                               break;
                           }
                        bot.channels.cache.get(o64channel).send("**"+players64[dm].username+"** has claimed to place a **"+ln+".**\n`The total is now told to be: "+o64liedeck+".`")
                        dm++;
                        maino64();
                       }
                   }
               }
        
            function addPlayerto064(user){
                tester = false;
                
                var playerlist64 = "[/////PLAYERS/////]\n"
                for (i = 0; i < players64.length; i++){
                    if (players64[i] == user){
                        tester = true;
                    }
                }
                if (tester == true){
                    message.channel.send("You're already in the player list.");
                }
                else{
                    players64.push(user)
                    
                    
                    for (i = 0; i < players64.length; i++){
                        
                        playerlist64 += players64[i].username+"\n";
                        
                    }
                    message.channel.send(playerlist64)

                }
            }

            function maino64(){
                o64number = Math.floor (Math.random() * cards64.length);
                
                
                if (players64[dm] == undefined){
                    dm = 0;
                }

                bot.channels.cache.get(o64channel).send("It's **"+players64[dm].username+"'s** turn to pick a card...")
                tn = cards64[o64number];
                o64truedeck = o64truedeck + tn;
                bot.users.cache.get(players64[dm].id).send("You got a **"+tn+"!** \nNow...what do you tell everyone it is?")
                
            }

            function end64game(){
                dm = 0;
                o64channel = undefined;
                o64game = false;
                o64join = false;
                o64liedeck = 0;
                o64truedeck = 0;
                players64 = [];
                tn = 0;
                ln = 0;
            }

            function call64Bluff(){
                claim = players64.indexOf(message.author);
                if (players64[claim] != undefined){
                    if (o64truedeck <= 64){
                        message.channel.send("`Oh, too bad! The real deck is NOT over 64 yet!` \n**"+players64[claim].username+" has been executed for lying.**")
                        players64.splice(claim, 1);
                        check64Players();
                    }
                    else if (o64truedeck > 64){
                        message.channel.send("`Hold the phone! The deck IS truly over 64!\nThe game is over!`\n**"+players64[claim].username+" WINS!!!** :tada:")
                        end64game();
                    }
                }
            }
               
            function check64Players(){
                if (players64.length == 1){
                    message.channel.send("`One person is left alive. The game is now over.`\n**"+players64[0].username+" WINS!!!** :tada:")
                    end64game();
                }
                else{
                    maino64();
                }
            }

            function rpgGameOverCheck(f, s, t, fo){
                if (f == 0 && s == 0 && t == 0 && fo == 0){
                    message.channel.send("`All heroes were defeated...Game Over!`")
                    rpggame = false;
                    rpgmyt = "Meet Your Team!";
                    rpgui = 0;
                    rpgchannel = undefined;
                }
            }

            function rpgGatherHeroes(){
                if (rpgui == 1){
                for (i = 0; i < heroesname.length; i++){
                    //get names
                    uusers = bot.guilds.cache.get(message.guild.id).members.array();
                    uwusers = Math.floor ((Math.random() * uusers.length));
                    heroesname[i] = bot.users.cache.get(uusers[uwusers].id).username;
                    
                    //get hp
                    heroesmaxhp[i] = Math.floor ((Math.random() * 150) + 100);
                    heroeshp[i] = heroesmaxhp[i]; 

                    //get mp
                    heroesmaxmp[i] = Math.floor ((Math.random() * 100) + 100);
                    heroesmp[i] = heroesmaxmp[i]; 
                }

                //print them
                rpgmyt = "Meet Your Team!"
                for (i = 0; i < heroesname.length; i++){
                    rpgmyt += "\n" + heroesclass[i] + ": " + heroesname[i] + "  [**HP**: `" + heroeshp[i] + "/" + heroesmaxhp[i] + "`] [**MP**: `" + heroesmp[i] + "/" + heroesmaxmp[i] +"`]";
                }

                rpgmyt += "\n\n`Let's get going!`";

                rpgchannel.send(rpgmyt).then(message => {rpgcurmes = message.id; })

                rpgSummonBoss();
            }
            else {
                message.channel.send("That can't happen right now.")
            }
            }

            function rpgSummonBoss(){
                bpicka = Math.floor ((Math.random() * rpgbosses.length));
                rpgbosscurrent = rpgbosses[bpicka];
                rpgbosshp = (Math.floor(Math.random() * 170) + 100);
                rpgmaxbosshp = rpgbosshp;

                rpgchannel.send("__Enemy **" + rpgbosscurrent + "** approaches!__\n[" + rpgbosshp + "/" + rpgmaxbosshp + "]")
                rpgcurfighter = 0;
                rpgPrompt(0);
            }

            function rpgPrompt(i){
                rpgui = 2;
                switch(i){
                    default:
                        rpgPrompt(0);
                    break;

                    case 0:
                        if (heroeshp[i] <= 0){
                            rpgchannel.send("**" + heroesname[i] + "** is pretending to be dead!")
                            i++;
                            rpgPrompt(i);
                        }
                        else{
                        rpgchannel.send("What will " + heroesclass[i] + " **" + heroesname[i] + "** ([HP]: `" + heroeshp[i] + "/" + heroesmaxhp[i] + "` | [MP]: `" + heroesmp[i] + "/" + heroesmaxmp[i] + "`) do? \n\nA: Slash \nB: Wicked Cutter (45 MP)");
                        }
                    break;

                    case 1:
                        if (heroeshp[i] <= 0){
                            rpgchannel.send("**" + heroesname[i] + "** is pretending to be dead!")
                            i++;
                            rpgPrompt(i);
                        }
                        else {
                        rpgchannel.send("What will " + heroesclass[i] + " **" + heroesname[i] + "** ([HP]: `" + heroeshp[i] + "/" + heroesmaxhp[i] + "` | [MP]: `" + heroesmp[i] + "/" + heroesmaxmp[i] + "`) do? \n\nA: Staff Wack \nB: Beam (50 MP)");
                        }
                    break;

                    case 2:
                        if (heroeshp[i] <= 0){
                            rpgchannel.send("**" + heroesname[i] + "** is pretending to be dead!")
                            i++;
                            rpgPrompt(i);
                        }
                        else{
                        rpgchannel.send("What will " + heroesclass[i] + " **" + heroesname[i] + "** ([HP]: `" + heroeshp[i] + "/" + heroesmaxhp[i] + "` | [MP]: `" + heroesmp[i] + "/" + heroesmaxmp[i] + "`) do? \n\nA: Attack \nB: Heal (60 MP)");
                        }
                    break;

                    case 3:
                        if (heroeshp[i] <= 0){
                            rpgchannel.send("**" + heroesname[i] + "** is pretending to be dead!")
                            i++;
                            rpgPrompt(i);
                        }
                        else{
                        rpgchannel.send("What will " + heroesclass[i] + " **" + heroesname[i] + "** ([HP]: `" + heroeshp[i] + "/" + heroesmaxhp[i] + "` | [MP]: `" + heroesmp[i] + "/" + heroesmaxmp[i] + "`) do? \n\nA: Blast \nB: Nuke (40 MP)");
                        }
                    break;
                }
            }

            function rpgBossAttack(){
                message.channel.send("[TEST MESSAGE] "+ rpgbosscurrent + " attacks!")
                rpgcurfighter = 0;
                rpgPrompt(rpgcurfighter);
            }

            



            //rpg I know I'm messing this up but

            if (rpggame == true && rpgchannel == message.channel && rpgui == 2){
                switch(message.cleanContent){

                    default:
                        console.log("Invalid RPG option sent. Skipping...")
                    break;

                    case "A":
                    case "a":
                        //text pls
                        //message.channel.send("[TEST MESSAGE] A sent!");
                        switch (rpgcurfighter){
                            case 0:
                                rpgdmg = (Math.floor(Math.random() * 25) + 10);
                                rpgbosshp -= rpgdmg;
                                message.channel.send("**" + heroesname[0] + "** deals "+ rpgdmg + " damage to "+ rpgbosscurrent +"! [`" + rpgbosshp + "/" + rpgmaxbosshp +"`]")
                            break;

                            case 1:
                                rpgdmg = (Math.floor(Math.random() * 15) + 10);
                                rpgbosshp -= rpgdmg;
                                message.channel.send("**" + heroesname[1] + "** deals "+ rpgdmg + " damage onto "+ rpgbosscurrent +"! [`" + rpgbosshp + "/" + rpgmaxbosshp +"`]")
                            break;

                            case 2:
                                rpgdmg = (Math.floor(Math.random() * 10) + 10);
                                rpgbosshp -= rpgdmg;
                                message.channel.send("**" + heroesname[2] + "** deals "+ rpgdmg + " damage to "+ rpgbosscurrent +"! [`" + rpgbosshp + "/" + rpgmaxbosshp +"`]")
                            break;

                            case 3:
                                rpgdmg = (Math.floor(Math.random() * 30) + 10);
                                rpgbosshp -= rpgdmg;
                                message.channel.send("**" + heroesname[3] + "** deals "+ rpgdmg + " damage to "+ rpgbosscurrent +"! [`" + rpgbosshp + "/" + rpgmaxbosshp +"`]")
                            break;
                        }

                        if (rpgcurfighter == 3){
                            rpgBossAttack()
                        }
                        else {
                            rpgcurfighter++;
                            rpgPrompt(rpgcurfighter)
                        }
                    break;

                    case "B":
                    case "b":
                        switch (rpgcurfighter){
                            case 0:
                                //45 mp
                                if(heroesmp[0] < 45){
                                    message.channel.send("There's not enough MP for this move!");
                                    rpgcurfighter--;
                                }
                                else {
                                    //deal high damage
                                    heroesmp[0] -= 45;
                                    rpgdmg = (Math.floor(Math.random() * 30) + 35); 
                                    rpgbosshp -= rpgdmg;
                                    message.channel.send("YAH! **" + heroesname[0] + "** deals "+ rpgdmg + " damage to "+ rpgbosscurrent +"! [`" + rpgbosshp + "/" + rpgmaxbosshp +"`]")
                                }
                            break;

                            case 1:
                                //50 mp
                                if(heroesmp[1] < 50){
                                    message.channel.send("There's not enough MP for this move!");
                                    rpgcurfighter--;
                                }
                                else{
                                    //raise beam chance
                                    heroesmp[1] -= 50;
                                    rpgbeamchance--;
                                    message.channel.send("A bright light engulfs the area! The enemy might miss more often!")
                                }
                            break;

                            case 2:
                                //60 mp
                                if(heroesmp[2] < 60){
                                    message.channel.send("There's not enough MP for this move!");
                                    rpgcurfighter--;
                                }
                                else{
                                    //heal lowest HP
                                    low = Math.min(heroeshp[0], heroeshp[1], heroeshp[2], heroeshp[3], 250);

                                    if (low == heroeshp[0] && heroeshp[0] != heroesmaxhp[0]){
                                        heroeshp[0] += 50;
                                        if (heroeshp[0] > heroesmaxhp[0]){
                                            heroeshp[0] = heroesmaxhp[0];
                                        }
                                        heroesmp[2] -= 60;
                                        message.channel.send("Gave **"+ heroesname[0]+ "** a little boost!")
                                    }
                                    else if (low == heroeshp[1] && heroeshp[1] != heroesmaxhp[1]){
                                        heroeshp[1] += 50;
                                        if (heroeshp[1] > heroesmaxhp[1]){
                                            heroeshp[1] = heroesmaxhp[1];
                                        }
                                        heroesmp[2] -= 60;
                                        message.channel.send("Gave **"+ heroesname[1]+ "** a little boost!")
                                    }
                                    else if (low == heroeshp[2] && heroeshp[2] != heroesmaxhp[2]){
                                        heroeshp[2] += 50;
                                        if (heroeshp[2] > heroesmaxhp[2]){
                                            heroeshp[2] = heroesmaxhp[2];
                                        }
                                        heroesmp[2] -= 60;
                                        message.channel.send("Gave **"+ heroesname[2]+ "** a little boost!")
                                    }
                                    else if (low == heroeshp[3] && heroeshp[3] != heroesmaxhp[3]){
                                        heroeshp[3] += 50;
                                        if (heroeshp[3] > heroesmaxhp[3]){
                                            heroeshp[3] = heroesmaxhp[3];
                                        }
                                        heroesmp[2] -= 60;
                                        message.channel.send("Gave **"+ heroesname[3]+ "** a little boost!")
                                    }
                                    else if (low == 250){
                                        message.channel.send("There's no reason to heal!");
                                        rpgcurfighter--;
                                    }
                                }
                            break;

                            case 3:
                                //40 mp
                                if(heroesmp[3] < 40){
                                    message.channel.send("There's not enough MP for this move!");
                                    rpgcurfighter--;
                                }
                                else{
                                    //deal high damage, hurt players
                                    heroesmp[3] -= 40;
                                    rpgdmg = (Math.floor(Math.random() * 30) + 50); 
                                    rpgbosshp -= rpgdmg;
                                    heroeshp[0] -= 15;
                                    heroeshp[1] -= 15;
                                    heroeshp[2] -= 15;
                                    message.channel.send("**" + heroesname[3] + "** deals "+ rpgdmg + " damage to "+ rpgbosscurrent +"! [`" + rpgbosshp + "/" + rpgmaxbosshp +"`], but the other players take damage!")
                                    }
                            break;
                        }

                        if (rpgcurfighter == 3){
                            rpgBossAttack()
                        }
                        else {
                            rpgcurfighter++;
                            rpgPrompt(rpgcurfighter)
                        }
                    break;
                }

                
            }






            //pwp

            if (message.author == playerspwp[pwpplayer] && pwpgame == true && choosingType == true){
                switch (message.content.split(" ")[0]){
                    case "Yellow":
                    case "yellow":
                    case "Y":
                    case "y":
                        currenttype = "Yellow";
                        bot.channels.cache.get(pwpchannel).send("`The color has been changed to: "+currenttype+".`")
                        choosingType = false;
                        chooseNextPlayer();
                    break;

                    case "Red":
                    case "red":
                    case "R":
                    case "r":
                        currenttype = "Red";
                        bot.channels.cache.get(pwpchannel).send("`The color has been changed to: "+currenttype+".`")
                        choosingType = false;
                        chooseNextPlayer();
                    break;

                    case "Green":
                    case "green":
                    case "G":
                    case "g":
                        currenttype = "Green";
                        bot.channels.cache.get(pwpchannel).send("`The color has been changed to: "+currenttype+".`")
                        choosingType = false;
                        chooseNextPlayer();
                    break;

                    case "Blue":
                    case "blue":
                    case "B":
                    case "b":
                        currenttype = "Blue";
                        bot.channels.cache.get(pwpchannel).send("`The color has been changed to: "+currenttype+".`")
                        choosingType = false;
                        chooseNextPlayer();
                    break;
                }
                
                
                
            }

            if (message.author == playerspwp[pwpplayer] && pwpgame == true && choosingType == false && args[1] != undefined){
                pc = cardspwp[pwpplayer];
                for (i = 0; i < pc.length; i++){
                    if (message.content == pc[i]){
                        othertype = message.content.split(" ")[0];
                        othernum = args[1];
                        checking = true;
                        checker = i;

                        i = 999;
                    }
                }

                if (checking == true){
                    

                   // bot.channels.cache.get(pwpchannel).send(othernum)
                  //  bot.channels.cache.get(pwpchannel).send(othertype)

                    if (othernum == "W"){
                        Wild();
                        pc.splice(checker, 1);
                        
                    }
                    else if (othertype == currenttype || othernum == currentnum){
                        if (othertype == currenttype){
                            caseOtherNum();
                            pc.splice(checker, 1);
                            displayCards();
                            chooseNextPlayer();
                        }
                        else if (currentnum == othernum){
                            currenttype = othertype;
                            caseOtherNum();
                            pc.splice(checker, 1);
                            displayCards();
                            chooseNextPlayer();
                        }
                    }

                    
                    
                }
            }


            function addPlayertopwp(user){
                tester = false;
                
                var playerlistpwp = "[/////PLAYERS/////]\n"
                for (i = 0; i < playerspwp.length; i++){
                    if (playerspwp[i] == user){
                        tester = true;
                    }
                }
                if (tester == true){
                    message.channel.send("You're already in the list.");
                }
                else{
                    playerspwp.push(user)
                    
                    
                    for (i = 0; i < playerspwp.length; i++){
                        
                        playerlistpwp += playerspwp[i].username+"\n";
                        
                    }
                    message.channel.send(playerlistpwp)

                }
            }

            function displayDanger(){
                if (danger == false){
                    bot.channels.cache.get(pwpchannel).send("**Everyone is now in the Danger Zone!**\n`Power Cards have been buffed!`");
                    danger = true;
                }
                else {
                    bot.channels.cache.get(pwpchannel).send("**Everyone is now out of the Danger Zone!**\n`Power Cards have been nurfed.`");
                    danger = false;
                }
            }

            function caseOtherNum(){
                switch (othernum){
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        bot.channels.cache.get(pwpchannel).send("A **"+othertype+" "+othernum+"** has been played.")
                    break;
                    case "D":
                    case "d":
                        bot.channels.cache.get(pwpchannel).send("A **"+othertype+" "+othernum+"** has been played.")
                        displayDanger();
                    break;
                    case "T":
                    case "t":
                        bot.channels.cache.get(pwpchannel).send("A **"+othertype+" "+othernum+"** has been played.")
                        pickUpTwo();
                    break;
                    case "X":
                    case "x":
                        bot.channels.cache.get(pwpchannel).send("A **"+othertype+" "+othernum+"** has been played.")
                        skipNextPlayer();
                    break;
                    case "R":
                    case "r":
                        bot.channels.cache.get(pwpchannel).send("A **"+othertype+" "+othernum+"** has been played.")
                        reverse();
                    break;
                }
                currentnum = othernum;
            }

            function Wild(){
                if (danger == true){
                    thiscolor = Math.floor (Math.random() * typespwp.length);
                    currenttype = typespwp[thiscolor];
                    bot.channels.cache.get(pwpchannel).send("`CHAOS APPROACHES! The colour is now: "+currenttype+"!\nThe next player gets 4 cards!`")
                    displayCards();
                    if (pwpreverse == true){
                        pwpplayer--;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    else {
                        pwpplayer++;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    giveCards(4);
                    chooseNextPlayer();
                }
                else{
                    bot.channels.cache.get(pwpchannel).send("**A WILD card has been played.**\nPlease specify your next colour.")
                    choosingType = true;
                }
            }

            function sharepwpcards(){
                for (i = 0; i < playerspwp.length; i++){
                    pwpcardnum1 = Math.floor (Math.random() * numspwp.length);
                    pwpcardtype1 = Math.floor (Math.random() * typespwp.length);
                    pwpcard1 = typespwp[pwpcardtype1] + " " + numspwp[pwpcardnum1];

                    pwpcardnum2 = Math.floor (Math.random() * numspwp.length);
                    pwpcardtype2 = Math.floor (Math.random() * typespwp.length);
                    pwpcard2 = typespwp[pwpcardtype2] + " " + numspwp[pwpcardnum2];

                    pwpcardnum3 = Math.floor (Math.random() * numspwp.length);
                    pwpcardtype3 = Math.floor (Math.random() * typespwp.length);
                    pwpcard3 = typespwp[pwpcardtype3] + " " + numspwp[pwpcardnum3];

                    pwpcardnum4 = Math.floor (Math.random() * numspwp.length);
                    pwpcardtype4 = Math.floor (Math.random() * typespwp.length);
                    pwpcard4 = typespwp[pwpcardtype4] + " " + numspwp[pwpcardnum4];

                    pwpcardnum5 = Math.floor (Math.random() * numspwp.length);
                    pwpcardtype5 = Math.floor (Math.random() * typespwp.length);
                    pwpcard5 = typespwp[pwpcardtype5] + " " + numspwp[pwpcardnum5];

                    pwpcardnum6 = Math.floor (Math.random() * numspwp.length);
                    pwpcardtype6 = Math.floor (Math.random() * typespwp.length);
                    pwpcard6 = typespwp[pwpcardtype6] + " " + numspwp[pwpcardnum6];

                    pwpcardnum7 = Math.floor (Math.random() * numspwp.length);
                    pwpcardtype7 = Math.floor (Math.random() * typespwp.length);
                    pwpcard7 = typespwp[pwpcardtype7] + " " + numspwp[pwpcardnum7];

                    
                    cardspwp[i] = [pwpcard1, pwpcard2, pwpcard3, pwpcard4, pwpcard5, pwpcard6, pwpcard7];
                    pwpdmmes = ""
                    for (j = 0; j < cardspwp[i].length; j++){
                        hi = cardspwp[i];
                        pwpdmmes += " **"+hi[j]+"** |"
                    }
                    bot.users.cache.get(playerspwp[i].id).send("`Your cards:`\n"+pwpdmmes);

                }

                pwppickAcolor();
            }

            function pickUpTwo(){
                if (danger == true){
                    bot.channels.cache.get(pwpchannel).send("`DANGER'S IN! The next player picks up 4 cards!`")
                    if (pwpreverse == true){
                        pwpplayer--;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                        giveCards(4);
                    }
                    else {
                        pwpplayer++;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                        giveCards(4);
                    }
                }
                else {
                    bot.channels.cache.get(pwpchannel).send("**The next player picks up 2 cards!**")
                    if (pwpreverse == true){
                        pwpplayer--;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                        giveCards(2);
                    }
                    else {
                        pwpplayer++;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                        giveCards(2);
                    }
                }
            }

            function giveCards(num){
                for (i = 0; i < num; i++){
                    pwpcardnumx = Math.floor (Math.random() * numspwp.length);
                    pwpcardtypex = Math.floor (Math.random() * typespwp.length);
                    pwpcardx = typespwp[pwpcardtypex] + " " + numspwp[pwpcardnumx];
                    cardspwp[pwpplayer].unshift(pwpcardx);
                }
                displayCards();
            }

            function displayCards(){
                hi = cardspwp[pwpplayer];
                pwpdmmes = "";
                for (j = 0; j < hi.length; j++){
                    
                    pwpdmmes += " **"+hi[j]+"** |"
                }
                bot.users.cache.get(playerspwp[pwpplayer].id).send("`Your cards:`\n"+pwpdmmes);
            }


            function pwppickAcolor() {
                thiscolor = Math.floor (Math.random() * typespwp.length);
                currenttype = typespwp[thiscolor];
                currentnum = "0";
                bot.channels.cache.get(pwpchannel).send("We'll begin with a **"+currenttype+" 0**.")
                displayNextPwpPlayer();
            }

            function chooseNextPlayer(){
                if (cardspwp[pwpplayer].length == 0){
                    bot.channels.cache.get(pwpchannel).send("`The game is now over.`\n**"+playerspwp[pwpplayer].username+" WINS!** :tada:")
                    endPwp();
                }

                else{
                if (pwpreverse == true){
                    pwpplayer --;
                    displayNextPwpPlayer();
                    checking = false;
                }
                else{
                    pwpplayer++;
                    displayNextPwpPlayer();
                    checking = false;
                }
            }
            }

            function displayNextPwpPlayer(){
                if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                    pwpplayer = 0;
                }
                else if (pwpplayer == -1){
                    pwpplayer = playerspwp.length - 1;
                }

                bot.channels.cache.get(pwpchannel).send("It's **"+playerspwp[pwpplayer].username+"'s** turn!")
            }

            function skipNextPlayer(){
                if (danger == true){

                    bot.channels.cache.get(pwpchannel).send("`DANGER'S IN! Three players are skipped!`");
                    if (pwpreverse == true){
                        pwpplayer--;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    else {
                        pwpplayer++;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    if (pwpreverse == true){
                        pwpplayer--;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    else {
                        pwpplayer++;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    if (pwpreverse == true){
                        pwpplayer--;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    else {
                        pwpplayer++;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    
                }

                else {
                    bot.channels.cache.get(pwpchannel).send("**A player is skipped!**");
                    if (pwpreverse == true){
                        pwpplayer--;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    else {
                        pwpplayer++;
                        if (pwpplayer > 0 && playerspwp[pwpplayer] == undefined){
                            pwpplayer = 0;
                        }
                        else if (pwpplayer == -1){
                            pwpplayer = playerspwp.length - 1;
                        }
                    }
                    
                }
            }

            function reverse(){
                if (danger == true){
                    bot.channels.cache.get(pwpchannel).send("`Randomly picking a player...`");
                    pwpplayer = Math.floor (Math.random() * playerspwp.length);
                    
                }
                else{
                    bot.channels.cache.get(pwpchannel).send("**The order of players have been flipped!**");
                    if (pwpreverse == true){
                        pwpreverse = false;
                    }
                    else{
                        pwpreverse = true;
                    }
                    
                }
            }

            function endPwp(){
                pwpchannel = undefined;
                playerspwp = [];
                currenttype = "";
                currentnum = "";
                pwpplayer = 0;
                pwpgame = false;
                pwpjoin = false;
                cardspwp = [];
                pwpreverse = false;
                choosingType = false;
                checking = false;
                checker = 0;
            }
        
            
        
            
            
        }
        );
        
        
const ytdl = require("ytdl-core");

const queue = new Map();

bot.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;
  
    const serverQueue = queue.get(message.guild.id);
  
    if (message.content.startsWith(`${PREFIX}play`)) {
      execute(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${PREFIX}skip`)) {
      skip(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${PREFIX}stop`)) {
      stop(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${PREFIX}vibe`)) {
        vibe(message, serverQueue);
        return;
    } else if (message.content.startsWith(`${PREFIX}np`)) {
        vibenp(message);
        return;
    }
  });
  
  async function execute(message, serverQueue) {
    const args = message.content.split(" ");
  
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to play music!"
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
        "I need the permissions to join and speak in your voice channel!"
      );
    }
  
    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
     };
  
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
  
      queue.set(message.guild.id, queueContruct);
  
      queueContruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      return message.channel.send(`${song.title} has been added to the queue!`);
    }
  }


  async function vibe(message, serverQueue) {
    const args = message.content.split(" ");
  
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to play music!"
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
        "I need the permissions to join and speak in your voice channel!"
      );
    }
  
    if (args[1] != undefined && !isNaN(args[1]) && (args[1] > -1 || args[1] < (vibesongs.length - 1))){
        vibepicked = args[1];
    } else {
        vibepicked = Math.floor(Math.random() * vibesongs.length);
    }
    
    const songInfo = await ytdl.getInfo(vibesongs[vibepicked]);
    const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
     };
  
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
  
      queue.set(message.guild.id, queueContruct);
  
      queueContruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      return message.channel.send(`${song.title} has been added to the queue!`);
    }
  }
  
  function skip(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    if (!serverQueue)
      return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
  }
  
  function stop(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
      
    if (!serverQueue)
      return message.channel.send("There is no song that I could stop!");
      
    serverQueue.songs = [];
    serverQueue.voiceChannel.leave();
      queue.delete(message.guild.id);
      return;
  }

  function vibenp(message){
      var npmessage;
      serverQueue = queue.get(message.guild.id);
      

      if (serverQueue == undefined){
          message.channel.send("There's no queue! Try vibing first!")
      } else {
        song = serverQueue.songs[0];

      if(song == undefined){
          npmessage = "`Unavailable. Try vibing first!`"
      }
      else {
          npmessage = "Currently Playing: **" + song.title + "**";
      }

      serverQueue.textChannel.send(npmessage);
    }
  }
  
  

  async function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        vibepicked = Math.floor(Math.random() * vibesongs.length);
        const songInfo = await ytdl.getInfo(vibesongs[vibepicked]);
        const song1 = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
     };
        
        
        //console.log("Received as: "+song1.title+ " ("+song1.url+")");
        serverQueue.songs.push(song1);
        play(guild, song1);
    }
    else {
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    console.log(`Start playing: ${song.title} (${song.url})`);
  }}
        

bot.login(process.env.BOT_TOKEN);
