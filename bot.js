const Discord = require('discord.js');
const { Client, Attachment, Message } = require('discord.js');
const bot = new Discord.Client();



const PREFIX = 'v!';


//const channel = client.channels.find('roleplay-off-topic', channelName)
//channel.send(message)

var version = 'Version 1.6.1 [BETA]';
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
//635602329927811113, 353201224142684160, 607676160234618889
var callids = ["636573475993288734", "635683701987999804", "634821648385572883", "640725111397285888", "643100072988639242", "353324382208131073"];
var callA;
var callB;
var callAmes;
var callBmes;
var boolean, callkey = false;
var insults = ["lil' shit", "fetus reject", "hecking meatloaf inhaler", "hellspawn of a bitch", "illiterate fuck", "grandma upskirter", "fat piece o shit lookin ass cunt", "'ugly bastard' hentai tagger", "slut", "fucking boomer", "retard liberal", "gay furry", "Boku no Pico streamer"];
var nonfacts = ["The joke of Kirbs being a furry lasted longer than Izzle's because it wasn't actually true at first.", "The Ultimate Show was waaaaaaaay better than the Shadow Queen fight theme.", "911 might have possibly been an inside job. I mean, it all lined up since there were no memes during the September period.", "Singing Despacito in a family gathering implies that you want to fuck your sister.", "Being a real grown up isn't cooking a fancy dinner, it's having a clean kitchen when you go to bed after cooking a fancy dinner.", "The Simpsons has been on the air for so long, that Bart, Lisa and Maggie have been gen x'ers, millennials, AND gen z'ers.", "The idea of sex is oftentimes more alluring than sex itself.", "Seeing your password after accidantally typing it into the username bar kind of feels like accidantally seeing someone naked.", "Girls are so used to compliments that insults stick out to them. Guys are so used to insults that compliments stick out to them.", "With the advent of grocery delivery services, it is now possible for a pizza to be both delivery AND DiGiorno."];
var questionchannels = ["636573475993288734", "635683701987999804", "634821648385572883", "640725111397285888", "643100072988639242", "353324382208131073", "607676160234618889"];
var questionmessage, answermessage, QA, AQ, QQ = false;
var pinarr = [];
var pined;
const fs = require("fs");
bot.afile = require ("./afile.json");
const BotID = '634502800872833033';
var word1 = ["Kir b", "TruthTomato", "Name", "Dru", "Irri", "Poochy", "Phobos", "Mario", "Luigi", "Reni", "Cain", "Sayori", "Ghost", "Yuri", "Knux", "Y'all", "Sonic", "Minecraft", "Ellie", "Sushi", "Izzle", "Moon", "Obama", "An undying passion for hentai is why Name", "Gabe", "The mastermind named Irri", "Your wife", "Dru is laughing because Izzle", "It turns out that Cain", "Unfortunate news, Kevin", "I've come to make an announcement. Moon", "After performing an Animal Crossing 100% speedrun, Ellie", "My waifu", "You can't attend the Smash tourney because Knux", "ARE YOU OK? Well you won't be now because Ghost", "Terry", "What's that noise? Oh. Snoop", "Everytime I close my eyes, Phobos", "Shrek", "Call me a liar, but Jimbo", "This disgraceful bitch", "A simp", "I can't believe that Kir b", "Hold the phone, Snoop", "You don't have time to defeat me because Reni", "The fuck, Korbs"];
var word2 = ["is", "is gonna be", "is about to be", "is thinking of", "wants to be", "is officially", "will be"];
var word3 = ["hecking", "fucking", "playing", "imitating", "buying", "promoting", "sponsoring", "hanging out with", "having a crush on", "fighting", "smashing", "buying a Mario Amiibo for", "reporting", "warning Irri about", "banning", "dying for", "taking a shower with"];
var word4 = ["h", "you", "Kir b", "TruthTomato", "the big iron on Truth's hip", "Moonlite, the pussy destroyer", "Raid Shadow Legends", "Name", "Dru", "Irri", "Poochy", "Phobos", "Mario", "Luigi", "Reni", "Obama", "free coochie", "the 15% discount from GEICO", "some gamer", "an e-girl...the horny shit.", "the man in Lego City", "Cheems", "some simp called Dru", "both Izzle and Moon", "Cain", "Sayori", "Ghost", "Yuri", "Knux", "Y'all", "Sonic", "Minecraft", "me", "gay", "something inappropriate", "Spider-Man", "here", "Celeste", "a hat in time", "a perv", "Squidward", "communism", "Ellie", "Sushi", "Izzle", "Moon", "Moon's oddly advertised dick", "Ellie's will to be a god", "Dru, but not really", "Izzle, and Gabe agrees", "Virus, but Virus doesn't care", "Dys, but thank god he's gone", "Earthbound", "Gabe, and he hates you for that", "Monika, but she refuses", "Monika, who sang a song for them", "Nutella, but that's gay", "a gay guy", "a freaking bag", "Generic", "Jet, but she'll most likely sue you before it happens", "Name, but that's a crime", "Dru, but [sexual joke here]", "Barry...wait. Who's Barry?", "a loli", "Snoop, who screams during the event", "Arrowsden, but it didnt work", "Link, the princess", "Gabe, but he loves them too much for that to happen", "Irri, but please, buy Mother 3", "your reality", "the n word", "Vessel, but why would that happen", "us for soup", "TwoSoup", "Reni, but I don't recommend it"];
var choicemes = ["I pick ", "Gonna go with ", "I'll go with ","Definitely, ","I'll personally go with "]
var fighter1, fighter2;
var fighter1hp = 100, fighter2hp = 100;
var isf1turn = false, battle = false;
var bab = 0;
var wisequouts = ["*I'm outta here!* -Sonic", "*It's no use!* -Silver", "*Find the computer room!* -Vector", "*Aww yeah, this is happening!* -Sonic", "*Even without wings, I can still fly!* -Sonic", "*Snooping as usual, I see?* -Robotnik", "*No copyright law in the universe is going to stop me!* -Sonic", "*Don't touch it!* -Shadow", "*You may know everything I'm gonna do, but that's not gonna help you since I know everything you're gonna do! STRANGE, ISN'T IT!?* -Sonic", "*SHUT UP TAILS!* -Sonic", "*Where's that DAMN fourth chaos emerald?* -Shadow", "*Hey, I'll play with you some other time.* -Sonic", "*Sonic will never again be a pain in my eeeeegggggg* -Eggman", "*True dat.* -Tails", "*Get a load of this!* -Eggman", "*Oh no!* -Knuckles", "*I'm the coolest.* -Shadow", "*That's Eggman! I wonder what happened to Sonic?* -Tails", "*Watch out! You're gonna crash! AH!* -Sonic", "*Take this!* -Silver", "*Number one, Stay in school! Number two, Stay in school! Number three, Don't forget one and two!* -Sonic", "*GAMMA!* -Eggman", "*Disappear!* -Shadow", "*Shut up!* -Knuckles", "*Now we'll........finish it!* -??? (Sonic the Hedgehog series)", "*You're smart.* -??? (Sonic the Hedgehog series)", "*Good. Great! Awesome! Outstanding! AMAZING!* -Nintendo Wii while you play Sonic Colors", "*Hey guys. Take care.* -Sonic", "*We're on our way to the ark, so I guess that means we're going too!* -Sonic", "*I'm not a rat! I'm a hedgehog!* -Sonic", "*Ahhh! I'm afraid of lightning!* -Tails", "*Use your head! Don't end up dead!* -Sonic", "*Hasta la bye bye, suckers!* -Eggman", "*Knock Knock it's Knuckles* -Knuckles", "*You're lying! It won't take that long to figure out.* -??? (Sonic the Hedgehog series)", "*I've been looking for you Baldy McNosehair!* -Sonic", "*Can never grab too many rings.* -Sonic", "*Spindash time!* -Sonic", "*RIINGS!* -Sonic", "*Want some moooore?* -Tails", "*Man up, Tails.* -Eggman", "*That tornado's carrying a car!* -Sonic", "*You finally had all chaos emeralds....and you threw it away?* -Shadow(?)", "*What have you done to Sonic? I'll never forgive you for this!* -Tails", "*Get ready to be schooled!* -Eggman", "*I don't like the way you attacked Chris and Cosmo!* -Sonic", "*Ramps! We can use these as ramps!* -??? (Sonic the Hedgehog series)", "*Cool, it's raining fire!* -Sonic", "*That was tight!* -Sonic", "*Thrust increasing.* -Robot from Sonic 06", "*I thought your middle name was 'The'.* -Knuckles", "*Capable is my middle name.* -Sonic", "*Hunting games are all over the place but Buck Fever's the only one that has a funny title if you swap the first letters of 'Buck' and 'Fever'.* -Scott The Woz", "*Wii Play, Do you? Is that a threat?* -Scott The Woz", "*...but when we slide the virgin goggles on we can make out that it potentially says 'L is Real 2401'. Now, what does that mean? No sex for me, thanks.* -Scott the Woz", "*Okay!* -Terry", "*Hey, come on, come on!* -Terry", "*Phew...* -Terry", "*Get ready!* -Terry", "*Here's the big one.* -Terry", "*Power Dunk!* -Terry", "*Are you okay? Buster Wolf!* -Terry", "*Burn Knuckle!* -Terry", "*So long, Gay Bowser!* -Mario", "*I'm-a tired...* -Mario", "*Thank you so much for-to-playing my game.* -Mario", "*The horror.* -Mario", "*Woo-hoo! Just what I needed.* -Mario", "*Oh, you Mama Mia (Italian gibberish)* -Mario", "*Let's-a play!* -Mario", "*It's about time!* -Mario", "*Come here, doggy.* -Luigi", "*Hey! You know what would look good? A spaceship with MY face on it!* -Luigi", "*Oh, what happened?* -Luigi", "*OH MY GOD! WAAAAAAAHHHH* -Wario", "*I'm the best!* -Toad", "*I am looking cool.* -Joker, Persnikity 5", "*fuck ultra* -Fuck Every Word 2.0"]



bot.on('ready', () =>{
    console.log('Let er rip!');
    bot.channels.get('607654317079396410').sendMessage("`VirusBot has been rebooted.`")
    bot.user.setActivity("lmao who's Corona? Never heard of 'em.");
})


bot.on('message', message=> {
    
    let args = message.content.substring(PREFIX.length).split(" ");
    let choices = message.content.substring(PREFIX.length).split("| ");

    
    
    

    if (message.content.startsWith(PREFIX)){

    switch(args[0]){
        case 'ping':
            // message.channel.sendMessage('Pong!');
            message.reply('Pong!');
        break

        case 'help':
            message.channel.sendMessage('There is no help. Only chaos. \n \n ||(v!commands)||');
            break;
        
        case 'info':
            if(args[1] === 'version'){
                const embed = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#00FA9A')
                .setTitle("Current Bot Version")
                .setDescription("I'm on "+version+ "!")
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                message.channel.send(embed);
            }
            else if(args[1] === 'nupdate'){
                botup = "There are no current public plans for the next update. Please try again another time.";
                
                const embed = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#FF00FF')
                .setTitle("Upcoming Update Information")
                .setDescription(botup)
                .setTimestamp()
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                message.channel.send(embed);
            }
            else if(args[1] === 'oldies'){
                message.channel.sendMessage("There's a black hole where the oldie forder used to be...");
                //message.channel.sendMessage("There are **"+olds+"** oldie pictures in the folder so far! \n\nDo you have a picture you want to add to the command? Feel free to DM Gabe with your suggestion!");
            }
            else if(args[1] === 'changelog'){
                const embed = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#DC143C')
                .setTitle("VirusBot "+version+" Changelog")
                .setDescription("VB's April Update is here!")
                .addBlankField()
                .addField("We'll ask again!", "There are more questions in the trivia command! How much do you actually know?")
                .addBlankField()
                .addField("I'LL KILL YOU! LIGHTNING FIST!", "A new command approaches! 'v!deathbattle' is here!")
                .addBlankField()
                .addField("How fond are you two?", "'v!pair' is finally ready for use! Test the relationships of people you barely even know!")
                .addBlankField()
                .addField("As a wise guy once said...", "Say hello to 'v!quote'! (Requested by TheUnchuckled!) More quotes from different series will be added in soon, so stay tuned!")
                .addBlankField()
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                message.channel.send(embed);
            }
            else if(args[1] === 'bot'){
                const embed = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#00FF00')
                .setTitle("Who am I?")
                .setDescription("VirusBot is a bot created as a test project. For some reason, I'm still here.")
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                message.channel.send(embed);
            }
            else {
                _info = "Current info available: \n\n-version: The current version of the bot.\n-nupdate: Provides little information about the next upcoming update.\n-bot: Gives info on the bot. \n-oldies: Shows how many pictures are in the 'oldie' command.\n-changelog: See what new features got added to the bot! \n\n[Please leave a space between the command and the selected word.]\nEg. 'v!info bot'";
                const embed = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#00BFFF')
                .setTitle("Information Command's Options")
                .setDescription(_info)
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                message.channel.send(embed);
            }
        break;    

        
        case 'love':
            if (args[1] === 'you'){
                if (message.author.id === '356389068634062848'){
                    message.channel.sendMessage('Love you too, <@' + message.author.id +'>! ❤');
                }
                else {
                message.channel.sendMessage('Gay.');
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

        case 'choose':
            if (args[1] == undefined){
                message.channel.sendMessage("To properly use this command, please include at least two choices seperated by ' | '.\n\nExample:\n```v!choose (choice 1) | (choice 2)```")
            }
            else{
            cm = Math.floor ((Math.random() * choicemes.length));
            choos = Math.floor ((Math.random() * choices.length));
            thechoice = choices[choos];
            if (choos == 0){
                thechoice = choices[0].slice(7);
                message.channel.sendMessage(choicemes[cm]+"**"+thechoice+"**");
            }
            else{
            message.channel.sendMessage(choicemes[cm]+"**"+thechoice+"**");
            }
        }
        break;


        case 'changeAvatar':
            if (args[1] != undefined){
            bot.user.setAvatar(args[1]);
            message.channel.sendMessage("I'm diggin' the new look!");
            }
            else (
                message.channel.sendMessage("Can't find the URL. Did you post one?")
            )
        break;
        
        case 'setChannelname':
            if (args[1] != undefined){
                bot.member.setNickname(message.content.slice(17));
                message.channel.sendMessage("A-OK!");
                }
                else (
                    message.channel.sendMessage("No nick is found. Provide a space!")
                )
        break;

        case 'changeNick':
            if (args[1] != undefined){
                bot.guilds.get(message.guild.id).member(BotID).nickname = (message.content.slice(13))
                message.channel.sendMessage("A-OK!");
            }
            else (
                message.channel.sendMessage("No nick was found.")
            )
        break;

        case 'me':
            const embed = new Discord.RichEmbed()
                .setAuthor("About You", message.author.avatarURL)
                .setColor('#00BFFF')
                .setTitle(message.author.username)
                .setImage(message.author.avatarURL)
                .setDescription(message.author.tag)
                .addBlankField()
                .addField('User ID', message.author.id)
                .addField('Nickname in this server', message.member.nickname)
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                message.channel.send(embed);
        break;

        case 'nsfw':
            message.channel.sendMessage("What the absolute fuck is wrong with you? Looking up porn on Discord? Kindly re-think your life choices.");
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

        case 'dru':
            message.channel.send("A horny/somewhat confused stickman who now has the form of an anime man. Everyone basically knows who Dru is nowadays either by his old form, 'The Galactic Nova' or his new form, 'That guy who draws pretty good'. He's also a Twitter boomer. \n\n**Example:** \nGuy 1: Hey, have you seen Dru's new drawing? \nGuy 2: Indeed I have! He draws so good! \nGuy 1: I know, right? I want Maki to step on me. \nGuy 2: Okay pal that's enough of you.");
            break

        case 'dyst':
            message.channel.sendMessage("A former person of the community who made the 24/7 music stream that started it all. Now, he's just a laughing stock that triggers a few people just by saying his nickname. He also ruined Minish Cap with peanut butter. \n\n**Example:** \nGuy 1: Hey, what happened to Dys? \nGuy 2: Gone. Reduced to atoms. \nGuy 1: Why? \nAll Mods: Ah shit, here we go again.");
            
            break

        case 'cain':
            message.channel.send("Reni's Mom (along with a few others). Also feared by many for...whatever reason.\n\n**Example:** \nReni: MOOOOOOOOOOOOM! \nCain: whAT?! \nReni: hi. \nCain: Hello.");
            break

        case 'snoop':
            message.channel.send("A scientific experiment gone wrong that escaped from his lab after he destroyed it to pieces. No, I'm not talking about Mewtwo. This one's a persona weeb, and loves to hunt down simps for fun. (Despite being one for SCP-173) \n\n**Example:** \nGuy 1: *breathes* \nSnoop: *busts down door* SIMP! *nukes island*");
            break;

        
        case 'jcount':
            let jc = bot.afile["JojoCount"].jCount;
            message.channel.send("The J word has been said a total of **"+jc+"** times.");
            break;
        

        case 'joe':
                if(args[1] === 'who'){
                    message.channel.sendMessage('Joe Mama 😎');
                }
                else {
                    message.channel.sendMessage("Who's Joe?");
                }
            break;

        case 'dead':
                user = message.mentions.users.first();
                if (user !== undefined){
                    message.channel.sendMessage(user.username + ' fucking dies! 🇫 😔');
                }
                else {
            message.channel.sendMessage(message.author.username + ' fucking dies! 🇫 😔');
                }
            break;

            
        case 'irri':
                message.channel.sendMessage("A fucking STALLION of a man that decided to take up the responsibilities of leading a server full of 1000+ people after the virgin Dys was banned. This absolute chad is also a best friend to many people, and is basically a walking Skillshare.com. \n\n**Example:** \nGuy 1: Hey, I need some help to draw a hand. Can anyone help? \nGuy 2: Ask Irri. \nGuy 1: Isn't he currently busy in a server of 500+ people? \nIrri: You called?");
                break;

        case 'gamestop':
            message.channel.send(message.author.username + " in GameStop! \nWhat will they buy?")
            break;

        case 'gay':
                user = message.mentions.users.first();
                if (user != undefined){
                    message.channel.sendMessage(user.username+ ' do be looking kinda fresh doe 😳')
                }
                else {
                message.channel.send(message.author.username + ' do be looking kinda fresh doe 😳')
                }
                break;

        case 'mimik':
                message.channel.send("Some Pokemon who dislikes off-topic in rp. \n\n**Example:** \nArrow: (no, don't no that.) \nMimik: You've fucking crossed the line.");
                break;

        case 'reun':
            message.channel.send("[ARCHIVED] \nDon't worry, "+ message.author.username+". You're as fucked as the rest of "+message.channel.name+" if you ask who Joe is. To save yourself, please post an rp cap into <#396838771108085760> so we can either all laugh or all remind Reun that he has a fucking job as a rp manager. (Also please, don't swear in off topic. You did? What's wrong with you?) In all seriousness, I love this boi, and he's prob my fav bro to ever exist...or fav sis? :O! **PLOT TWIST!**");
            break;

        case 'reni':
                message.channel.send("A cute and loveable person who's afraid to share their wonderful ideas to everyone. Previously known as 'Mimik' or 'Reun', and if he changes his name once more I swear to gosh I'm just gonna rename this command to 'v!silvester' and call it a day. \n\n**Example:** \nReni: Hey, Jet! \nPhobos: Who's Jet, Reun? \nReni: Who's Reun, Jet? \nKir b: (oh my fucking gosh...)")
            break;

        case 'phobos':
            message.channel.send("Some weird clone that took over Jet some time ago. The difference between these two is that one wants to kill you less than the other (Also some other noticeable things, but I can't say them rn.). \n\n**Example:** \nSnoop: Hello. \nJet: Fuck off. \n\n**One week later...**\nSnoop: Hello. \nPho: Hi, Snoop. Now fuck off.")
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

        case 'bruh':
            bruhs = 7;
                bruhNumber = Math.floor (Math.random() * (bruhs - 1 + 1)) +1;
                message.channel.send ( { files: ["./bruh/bruh (" + bruhNumber + ").jpg"]})
            break;

        case 'knux':
                message.channel.send("An artist in training that likes woke music and is a great companion to all. Unless you're some bitch to the community, which in that case, seek medical help. \n\n**Example:** \nGuy 1: Yo dude. I read your message. \nGuy 2: Ye, so did Knux. He even gave a heart-warming response. \nGuy 1: Oshit he did? Damn that guy's good.");
                break;

        case 'moonuwu':
                const attachment1 = new Attachment('https://cdn.discordapp.com/attachments/606957183900450864/634960062519050261/2019071723184300-BF19FBEA37724338D87F26F17A3B97B2_2.jpg');
                message.channel.send(attachment1);
                break;

        case 'sad':
                const attachment2 = new Attachment('https://cdn.discordapp.com/attachments/606957047082123264/631320733808721931/EGXV4R3WkAIyAP5.png');
                message.channel.send(attachment2);
                break;

        case 'ajoke':
                const attachment3 = new Attachment('https://cdn.discordapp.com/attachments/398526069910798348/635638676201668685/FB_IMG_1554240681853.jpg');
                message.channel.send(attachment3);
                break;

        case 'buddy':
                const attachment4 = new Attachment('https://cdn.discordapp.com/attachments/398526069910798348/635640325846728722/FB_IMG_1563678345828.jpg');
                message.channel.send(attachment4);
                break;

        case 'clown2':
                const attachment5 = new Attachment('https://cdn.discordapp.com/attachments/437799192035983370/635644513217413122/image0.png');
                message.channel.send("Go ahead. Take a seat. It's your time for an interview. \n")
                message.channel.send(attachment5);
                break;

        case 'thouthefuck':
                const attachment6 = new Attachment('https://cdn.discordapp.com/attachments/635602329927811113/635651754377085044/image0.jpg');
                message.channel.send(attachment6);
                break;
        
        case 'nice':
                const attachment7 = new Attachment('https://cdn.discordapp.com/attachments/408750397675536404/601466819181805578/baca561.jpg');
                message.channel.send(attachment7);
                break;

        case 'dong':
                const attachment8 = new Attachment('https://cdn.discordapp.com/attachments/607654317079396410/635844808635580426/z6n_7Qz8SlwW5uu7KjzVnz7rOnEhXbYBIj5IquOSkVI.jpg');
                 message.channel.send(attachment8);
                break;

        case 'funky':
                const attachment9 = new Attachment('https://media.discordapp.net/attachments/635602329927811113/635700121056837633/image0.png');
                message.channel.send(attachment9);
                break;

        case 'toxicegg':
                const attachment10 = new Attachment('https://cdn.discordapp.com/attachments/635602329927811113/635700840140767232/T_O_X_I_C.webm');
                message.channel.send(attachment10);
                break;

        case 'egirl':
                const attachment11 = new Attachment('https://cdn.discordapp.com/attachments/398526069910798348/635702342372818944/image0.png');
                message.channel.send(attachment11);
                break;

        case 'WAHOO':
                const attachment12 = new Attachment('https://cdn.discordapp.com/attachments/616764759106256913/635214611804717067/video0.mp4');
                message.channel.send(attachment12);
                break;

        case 'jet':
                message.channel.send("[ARCHIVED] \nOk, so you know those movies which has that ONE villain you love to hate, and then suddenly the villain joins the good side and now you're just straight up in love with the person? (Not LOVE love ofc cuz you can't be with a fictional character.) Meet Jet. \nJet's that kind of person you might be scared of at first, but as you get to meet them, you can't leave them alone. One of her 'special abilities' is that she can be an entire mood at times. She even had a nickname for it! She's also pretty tough and sarcastic, but the times she breaks out into a playful mood can be arguably considered to be pretty cute. (but ***DO NOT CALL HER CUTE***, or else you might end up with a gun pointed at your face.) She's no Izzle, no Moon, no Pip, nor an Irri. She's *Jet*, and I'm glad she's in the gang. Once a mood, always a mood!");
                const attachment13 = new Attachment('https://cdn.discordapp.com/attachments/607654317079396410/638828874129604608/unknown.png');
                message.channel.send(attachment13);
                break;

        case 'whatcanIsay':
                const attachment14 = new Attachment('https://66.media.tumblr.com/69f01a4c46e75a6bb4025125fe4c1d6a/tumblr_inline_p355yfsMQ61s1rco5_1280.gif');
                message.channel.send(attachment14);
                break;

        case 'clown':
                const attachment15 = new Attachment('https://cdn.discordapp.com/attachments/455154217003384853/613906735937224704/FB_IMG_1565934985882.jpg');
                message.channel.send(attachment15);
                break;

        case 'rock':
            const attachment16 = new Attachment('http://pa1.narvii.com/6448/39ff33fbbd17386ffd3838a18d92de1b041f133a_00.gif');
            message.channel.send("GO KLAVIER!!");
            message.channel.send(attachment16);
            break;


        case 'bottomtext':
            message.channel.send('Your free bottom text, sir. \n  \nbottom text');
            break;

        case 'h':
            message.channel.sendMessage(message.member.nickname + " has h'ed. I suggest we all h as well.");
            break;

        case 'crash':
            message.channel.send("What's wrong? Did I go overboard? Please type 'v!failsafe' to crash the bot. If you can, please report the bot using 'v!report' to inform the bot owner about this event.");
            break;

        case 'failsafe':
            bot.destroy;
            break;

        case 'ts':

                switch (args[1]){
                    case '0':
                            message.channel.sendMessage('**Tomato Soup** is an ongoing (kinda) series about a girl named Irri who is on a quest to find the mythical tomato soup, a legendary food that has been rumoured to cure any cold. During her quest, she will meet many different friends and take a crap ton of detours from her main goal. The series is well praised for having a determined yet lovable main character alongside an unexpected plot for each episode.');
                            break;
                    
                            case '1':
                                    message.channel.sendMessage("**Tomato Soup Part 1**: We meet our protagonist, Irri, who shortly comes with a never-ending cold. In an attempt to get rid of it, she goes on a quest to find the mythical 'Tomato Soup', which is rumored to be the soup that can cure any illness. Somewhere at the beginning of her journey, she meets the legendary Mewtwo, who then warns her that most of the village, including Irri's friends, had turned into birds from the work of a bitch named Melody. Quickly putting aside her current quest to save her friends, she follows Mewtwo to an island that contains the cure to turn them back to normal: Water. With the help of her Pokémon friend, she was able to carry a huge tub of water to the village and save her friends. After doing so, she heads out once again to find the soup.");
                            break;

                            case '2':
                                    message.channel.sendMessage("**Tomato Soup Part 2**: As she continues her hunt for the soup, she meets a new friend called Dandebish. During their conversation, Dandebish reveals to be a C-rank, who ran away from his group in hopes of joining B-ranks who are a group of players that live near Irri's village. Irri, being a B-rank herself, promises Dandebish to help him become one of them, and in return Dandebish agrees to join her in her quest. Unfortunately, both of them are ambushed by a small group of C-ranks shortly after, and Irri becomes separated from her new friend. Randomly determined by the power of friendship, Irri sneaks her way into the C-ranks' base and saves her friend, who she then gives directions to the location of the B-ranks and sends him off. Making sure no other C-rank follows him along the way, she then heads off to her main quest.");
                            break;

                            case '3':
                                    message.channel.sendMessage("**Tomato Soup Part 3**: Irri spots a village during her journey and decides to head there for the night. While she introduces herself to the villagers, she encounters a group of kids who informs her about a shortcut to find the mythical soup known as 'The Abyss'. The next morning, she heads out into the Abyss, accompanied by a loli who claims that her mother is also somewhere into the Abyss and 'she must find her'. During the adventure, they meet many different creatures. Some being cute, while most being insanely deadly. Somewhere during the episode, Irri informs the loli to stat put while she goes to gather food. The loli, of course, doesn't listen, and ventures further into the Abyss. There, she meets a poisonous monster, who didn't hesitate to attack the dumb loli. Irri quickly finds her laying on the ground, but is unable to do anything that can help her get rid of the poison...that is until a bunny girl appears who agrees to help cure the badly damaged girl.");
                            break;

                            case '4':
                                    message.channel.sendMessage("**Tomato Soup Part 4**: Continuing from the last episode, Irri leaves the loli to be cured at the bunny girl's house. Shortly after, she receives a text message from her friends which asks how the quest for the soup is going. As she's about to respond, she receives another message asking for her urgent help, as their village is being 'attacked by an anime girl with spinning swords'. The scene then goes to the village, where Irri's friends meet different characters from different anime genres, who were bought here from the same anime girl they reported to Irri. One of the anime genre characters, being a loli princess, tries to stop the sword girl from her plans to destroy the world, but she was killed off shortly after. It's now up to the other genres to stop her before it's too late, but the progress isn't going well since some of the characters have joined forces with the sword girl to help her evil scheme to occur, not knowing of her full plan. Will the good genres be able to save the world with the help of Irri's friends? Will Irri be able to make it back to the village in time? What about her quest to find the Tomato Soup? I guess we'll have to wait until part 5 to find out...");
                            break;

                            case '5':
                                    message.channel.sendMessage("**Tomato Soup Part 5**: One short recap of episodes 1-4 later by an over-exaggerated busty Irri, and with a new bangin' OP, we are taken back to the village, where all of Irri's friends are plotting to get rid of the girl with spinning swords once and for all. It is believed that she was created by a girl who brutally killed herself, and if taken carefully, they can create a knock-off RP series with her as a villain character to defeat her. Somewhere during their preparations for the plan, we meet a new anime girl, who comes from a hentai game. Eventually, the plan turned out to be a success, persuading 100+ roleplayers to join the arc! The sword girl, who already knew about the scheme the same day it was created, decided to join in on the fun with her own gang of anime genre characters, and thus without any delay the arc (hilariously titled 'Korbs takes an hour to Piss.') begins! Not too long during the arc, the sword girl decides to break the fourth wall with all the roleplayers, but it doesn't cause too much damage to the plan, as shortly later, almost every character that was in her evil gang decided to join the good side, some by force. The episode then ends with another cliff-hanger, as the sword girl reveals one more character that was in her small gang, who turns out to be the secondary protagonist in one of Irri's most-watched animes...");
                            break;

                            default:
                                message.channel.sendMessage("There's no pot on the stove! Not a valid arg. Only numbers 0-5 are currently available.");
                                break;
                }

            break; 

            /*
            case 'etr':
                switch (args[1]){
                    default: 
                    message.channel.sendMessage("```Invalid number/arg.```");
                    break;

                    case '0':
                        message.channel.sendMessage("**Enter The Rimworld** is a story about surviving a group of people who all have the singular goal of surviving the jungle. Together, they'll have to build stable habitats, hunt for edible food, and fend off violent raiders. Who knows if some of them will even survive at the end...? The future is unreadable.");
                        break;

                    case '1':
                        message.channel.sendMessage(`**Enter The Rimworld: Chapter 1**\nThe Jungle. Damp, luscious, and full of predators. It's a fool's paradise. No matter how green the grass could be, or how tall the trees can get, no one would want to live in such a place without any form of protection. That didn't stop three people from picking that place as their new home, though. These three were given a simple mission: Survive. With their given resources and skills, at seems like a cakewalk at first glance. However, not everything is as it seems. One of the people, an old man called by his people with the name 'Nokobo', took one big sniff of his new habitat before looking back at his teammates.\n"Ah, nothing like the fresh smell of death!" He gleefully shouted at the trees behind the engaged couple; the Pirate Doctor named Irri, and his wife, the careless hunter named Cain.\n"The crickets around this place are awfully loud." The huntress quickly complained, darting her eyes around the surrounding trees, looking for anything that she can grab for dinner.\n"Good!" Nokobo replied, "That means it's time to stop lounging around and finally build a shelter. Irri, the blueprints, please."\nWithout hesitation, the horned doctor handed the old man a blue piece of paper. And with one quick glance at the plan, he got started on cutting down the nearby trees...
                        ~~~`);
                        message.channel.sendMessage(`"cAIN!!"\n"WHAT?!"\nIrri kicked open the door to both Cain and his room, allowing a small, frail cat to run inside said room and quickly crash on the bed where Cain's slumber was interrupted by her husband's voice. \n"We have a cat now!" Irri gives off a smile of pure happiness.\n"You-You woke me up for this?" Cain's tired and grumpy voice informed Irri's smile to fade away.\n"Well, it's also sunrise, dear. C'mon, we have a full day ahead of us."\nCain groaned in disgust, reflecting on the week she had to put up through. First, she had to get used to the new environment, then she was given the job as the food hunter for the team, and now, there's a cat on her bed. But she wasn't too bothered on the second part, though. Shooting stuff is her specialty, even when the target begins to beg for mercy. After one more minute of lazing about on the bed, she hops off to reach for her gun, which was at its usual place of being under the bed, before walking out of her wooden cabin, followed by her new pet.\n"CAAIN, I'M HUNGRYYY!" The voice of an old man next to an unfinished kitchen whimpered loudly in the near distance.\n"Not my fault." Cain checked the number of remaining bullets in her gun, scaring away the cat that was behind her in the process with its noise. No ammo.\n"Ugh. What does it take to have good guns here?"\n"Time." Irri walked towards Cain with a blueprint in his hands, "A lot of time, unfortunately."\n"Then hurry up." Cain snapped. \n"Hah! Welcome to the new world!" Nokobo joked while nailing together two flimsy boards of wood. Truly, there's a lot of work to do if they want to continue on in this world. But for now, it's just three people stranded in a jungle...preparing themselves for one hell of a journey they're about to take.`);
                        break;
                }
                break;
                */

        case 'bye':
                message.channel.send('lmao bye ' + message.author.username + ' af.')
                break;

        case 'vibecheck':
            message.channel.sendMessage("At Everyone. Stop what you're doing. Time for a vibe check. 🎸")
            message.channel.sendMessage("*bonk.*")
            break;
        
        case 'weeb':
            message.channel.send('⣿⣿⣿⣿⣿⣿⡷⣯⢿⣿⣷⣻⢯⣿⡽⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠸⣿⣿⣆⠹⣿⣿⢾⣟⣯⣿⣿⣿⣿⣿⣿⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌\n⣿⣿⣿⣿⣿⣿⣻⣽⡿⣿⣎⠙⣿⣞⣷⡌⢻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡄⠹⣿⣿⡆⠻⣿⣟⣯⡿⣽⡿⣿⣿⣿⣿⣽⡷⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣟⣷⣿⣿⣿⡀⠹⣟⣾⣟⣆⠹⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢠⡘⣿⣿⡄⠉⢿⣿⣽⡷⣿⣻⣿⣿⣿⣿⡝⣷⣯⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣯⢿⣾⢿⣿⡄⢄⠘⢿⣞⡿⣧⡈⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣧⠘⣿⣷⠈⣦⠙⢿⣽⣷⣻⣽⣿⣿⣿⣿⣌⢿⣯⢿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣟⣯⣿⢿⣿⡆⢸⡷⡈⢻⡽⣷⡷⡄⠻⣽⣿⣿⡿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣏⢰⣯⢷⠈⣿⡆⢹⢷⡌⠻⡾⢋⣱⣯⣿⣿⣿⣿⡆⢻⡿⣿⣿⣿⣿⡟⣿\n⣿⣿⣿⣿⣿⣿⡎⣿⢾⡿⣿⡆⢸⣽⢻⣄⠹⣷⣟⣿⣄⠹⣟⣿⣿⣟⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⢸⣯⣟⣧⠘⣷⠈⡯⠛⢀⡐⢾⣟⣷⣻⣿⣿⣿⡿⡌⢿⣻⣿⣿⣿⣿⡌\n⣿⣿⣿⣿⣿⣿⣧⢸⡿⣟⣿⡇⢸⣯⣟⣮⢧⡈⢿⣞⡿⣦⠘⠏⣹⣿⣽⢿⣿⣿⣿⣿⣯⣿⣿⣿⡇⢸⣿⣿⣾⡆⠹⢀⣠⣾⣟⣷⡈⢿⣞⣯⢿⣿⣿⣿⢷⠘⣯⣿⣿⣿⣿⣷\n⣿⣿⣿⣿⣿⣿⣿⡈⣿⢿⣽⡇⠘⠛⠛⠛⠓⠓⠈⠛⠛⠟⠇⢀⢿⣻⣿⣯⢿⣿⣿⣿⣷⢿⣿⣿⠁⣾⣿⣿⣿⣧⡄⠇⣹⣿⣾⣯⣿⡄⠻⣽⣯⢿⣻⣿⣿⡇⢹⣾⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⡇⢹⣿⡽⡇⢸⣿⣿⣿⣿⣿⣞⣆⠰⣶⣶⡄⢀⢻⡿⣯⣿⡽⣿⣿⣿⢯⣟⡿⢀⣿⣿⣿⣿⣿⣧⠐⣸⣿⣿⣷⣿⣿⣆⠹⣯⣿⣻⣿⣿⣿⢀⣿⢿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⠘⣯⡿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣧⡈⢿⣳⠘⡄⠻⣿⢾⣽⣟⡿⣿⢯⣿⡇⢸⣿⣿⣿⣿⣿⣿⡀⢾⣿⣿⣿⣿⣿⣿⣆⠹⣾⣷⣻⣿⡿⡇⢸⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡇⢹⣿⠇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠻⡇⢹⣆⠹⣟⣾⣽⣻⣟⣿⣽⠁⣾⣿⣿⣿⣿⣿⣿⣇⣿⣿⠿⠛⠛⠉⠙⠋⢀⠁⢘⣯⣿⣿⣧⠘⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⡈⣿⡃⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⠌⣿⣆⠘⣿⣞⡿⣞⡿⡞⢠⣿⣿⣿⣿⣿⡿⠛⠉⠁⢀⣀⣠⣤⣤⣶⣶⣶⡆⢻⣽⣞⡿⣷⠈⣿⣻⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠘⠁⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⢿⣄⢻⣿⣧⠘⢯⣟⡿⣽⠁⣾⣿⣿⣿⣿⣿⡃⢀⢀⠘⠛⠿⢿⣻⣟⣯⣽⣻⣵⡀⢿⣯⣟⣿⢀⣿⣽⣿⣿\n⣿⣿⣿⣟⣿⣿⣿⣿⣶⣶⡆⢀⣿⣾⣿⣾⣷⣿⣶⠿⠚⠉⢀⢀⣤⣿⣷⣿⣿⣷⡈⢿⣻⢃⣼⣿⣿⣿⣿⣻⣿⣿⣿⡶⣦⣤⣄⣀⡀⠉⠛⠛⠷⣯⣳⠈⣾⡽⣾⢀⣿⢾⣿⣿\n⣿⢿⣿⣿⣻⣿⣿⣿⣿⣿⡿⠐⣿⣿⣿⣿⠿⠋⠁⢀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣌⣥⣾⡿⣿⣿⣷⣿⣿⢿⣷⣿⣿⣟⣾⣽⣳⢯⣟⣶⣦⣤⡾⣟⣦⠘⣿⢾⡁⢺⣿⣿⣿\n⣿⣻⣿⣿⡷⣿⣿⣿⣿⣿⡗⣦⠸⡿⠋⠁⢀⢀⣠⣴⢿⣿⣽⣻⢽⣾⣟⣷⣿⣟⣿⣿⣿⣳⠿⣵⣧⣼⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣽⣳⣯⣿⣿⣿⣽⢀⢷⣻⠄⠘⣯⣿⣿\n⣿⢷⣻⣿⣿⣷⣻⣿⣿⣿⡷⠛⣁⢀⣀⣤⣶⣿⣛⡿⣿⣮⣽⡻⣿⣮⣽⣻⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢀⢸⣿⢀⡆⣿⣿⣿\n⠸⣟⣯⣿⣿⣷⢿⣽⣿⣿⣷⣿⣷⣆⠹⣿⣶⣯⠿⣿⣶⣟⣻⢿⣷⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣯⣟⢀⡇⢼⣿⣿\n⣇⠹⣟⣾⣻⣿⣿⢾⡽⣿⣿⣿⣿⣿⣆⢹⣶⣿⣻⣷⣯⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⡿⡇⢸⡇⢸⣿⡇\n⣿⣆⠹⣷⡻⣽⣿⣯⢿⣽⣻⣿⣿⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢸⣿⠇⣼⡇⢸⡿⢠\n⡙⠾⣆⠹⣿⣦⠛⣿⢯⣷⢿⡽⣿⣿⣿⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠎⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣿⣾⣣⡿⡇⢸⢃⣾\n⣿⣷⡌⢦⠙⣿⣿⣌⠻⣽⢯⣿⣽⣻⣿⣿⣿⣧⠩⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢰⢣⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢀⢀⢿⣞⣷⢿⡇⠉⣼⣿\n⣿⣽⣆⠹⣧⠘⣿⣿⡷⣌⠙⢷⣯⡷⣟⣿⣿⣿⣷⡀⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣈⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢀⣴⡧⢀⠸⣿⡽⣿⢀⣾⣿⣿\n⢻⣽⣿⡄⢻⣷⡈⢿⣿⣿⢧⢀⠙⢿⣻⡾⣽⣻⣿⣿⣄⠌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢁⣰⣾⣟⡿⢀⡄⢿⣟⣿⢀⣿⣿⣿\n⡄⢿⣿⣷⢀⠹⣟⣆⠻⣿⣿⣆⢀⣀⠉⠻⣿⡽⣯⣿⣿⣷⣈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⣠⠘⣯⣷⣿⡟⢀⢆⠸⣿⡟⢸⣿⣿⣿\n⣷⡈⢿⣿⣇⢱⡘⢿⣷⣬⣙⠿⣧⠘⣆⢀⠈⠻⣷⣟⣾⢿⣿⣆⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⡞⢡⣿⢀⣿⣿⣿⠇⡄⢸⡄⢻⡇⣼⣿⣿⣿\n⣿⣷⡈⢿⣿⡆⢣⡀⠙⢾⣟⣿⣿⣷⡈⠂⠘⣦⡈⠿⣯⣿⢾⣿⣆⠙⠻⠿⠿⠿⠿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢋⣠⣾⡟⢠⣿⣿⢀⣿⣿⡟⢠⣿⢈⣧⠘⢠⣿⣿⣿⣿\n⣿⣿⣿⣄⠻⣿⡄⢳⡄⢆⡙⠾⣽⣿⣿⣆⡀⢹⡷⣄⠙⢿⣿⡾⣿⣆⢀⡀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⣠⣴⡿⣯⠏⣠⣿⣿⡏⢸⣿⡿⢁⣿⣿⢀⣿⠆⢸⣿⣿⣿⣿\n⣿⣿⣿⣿⣦⡙⣿⣆⢻⡌⢿⣶⢤⣉⣙⣿⣷⡀⠙⠽⠷⠄⠹⣿⣟⣿⣆⢙⣋⣤⣤⣤⣄⣀⢀⢀⢀⢀⣾⣿⣟⡷⣯⡿⢃⣼⣿⣿⣿⠇⣼⡟⣡⣿⣿⣿⢀⡿⢠⠈⣿⣿⣿⡟\n⣿⣿⣿⣿⣿⣷⣮⣿⣿⣿⡌⠁⢤⣤⣤⣤⣬⣭⣴⣶⣶⣶⣆⠈⢻⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣷⣶⣤⣌⣉⡘⠛⠻⠶⣿⣿⣿⣿⡟⣰⣫⣴⣿⣿⣿⣿⠄⣷⣿⠆⢻⣿⣿⡇')
            break;

        case 'ghost':
            message.channel.send("A guy who will calmly check your health to see if you are both mentally and emotionally stable, then will fucking grab you and punch the shit out of you to Mars while fire erupts from his fucking fists. There, I described two of his main pfps: Senko and Terry. But this doesn't fully describe who Ghost is. In all honesty, he's just a friend you can laugh at dumb shit with, and with the help of Discord VCs and his crappy modem, you can do that in 33674399dB! \n\n**Example:** \nThe latest Ghost review was a good read.")
            break;

        case 'name':
            message.channel.send("A living definition of 'cute'. \n\n**Example:** \nName is cute.")
            break;

        case 'todaysong':
            let tdmessage = bot.afile["TodaySong"].today_song;
            //message.channel.send("Today's Song is currently unavailabe. Until it's ready, just enjoy this bop. \nhttps://youtu.be/Ejv0Gk-mGko");
            message.channel.send(tdmessage);
            
            break;

        case 'numbers':
            message.channel.sendMessage(message.createdTimestamp);
            break;

        case 'bored':
            message.channel.send("https://cdn.discordapp.com/attachments/558815026241339423/576124245055242250/owo.mp4 \nGo ahead. Enjoy. It's the full movie.")
            break;

        case 'oldie':
            
            //imageNumber = Math.floor (Math.random() * (olds - 1 + 1)) +1;
            //message.channel.send ( { files: ["./oldies/oldie (" + imageNumber + ").png"]})
            message.channel.sendMessage("...")
            break;
            
        
            case 'generate':
                message.channel.sendMessage("Your generated sentence is: \n");
                w1 = Math.floor ((Math.random() * word1.length));
                w2 = Math.floor ((Math.random() * word2.length));
                w3 = Math.floor ((Math.random() * word3.length));
                w4 = Math.floor ((Math.random() * word4.length));

                message.channel.sendMessage(word1[w1]+" "+word2[w2]+" "+word3[w3]+" "+word4[w4]+".");
            break;

            case 'generatw':
                
                w1 = Math.floor ((Math.random() * word1.length));
                w2 = Math.floor ((Math.random() * word2.length));
                w3 = Math.floor ((Math.random() * word3.length));
                w4 = Math.floor ((Math.random() * word4.length));

                message.channel.sendMessage(word2[w2]+" "+word4[w4]+" "+word3[w3]+" "+word1[w1]);
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
                    message.channel.sendMessage("Oh...you hugged yourself? Damn, you're lonely...")
                }
                else if (user !== undefined && user.id === BotID) {
                    if (message.author.id === '356389068634062848') {
                        gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                    message.channel.sendMessage("*Hugs "+message.author.username+" back!* 💙");
                    message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    }
                    else {

                    message.channel.sendMessage("Nope! You ain't hugging me ya crap! Hug someone else!")
                }
            }
                else if (user !== undefined){
                    gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                    message.channel.sendMessage("*"+message.author.username+" gives "+user.username+" a hug!* 💙");
                    message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    suplexChance = Math.floor (Math.random() * (10 - 1 + 1)) +1;
                    if (suplexChance <= 1){
                        const suplex = new Attachment('https://cdn6.omidoo.com/sites/default/files/imagecache/1200x630/images/headline/201803/thesuplex2.jpg');
                        message.channel.send("But surprise! It turned into a hecking suplex!")
                        message.channel.send(suplex);
                    }
                }
                
                
                else {
            message.channel.sendMessage("...but there's no one to hug! How pitiful...");
                }
            break;

            case 'call':
                
                if (callkey === true) {
                    message.channel.sendMessage("A call is already in session! It'd be rude to interrupt them...")
                }
                else {
                message.channel.sendMessage("Calling via the VirusNet...");
                callA = message.channel.id;
                callB = Math.floor ((Math.random() * callids.length));

                while (callA === callids[callB]){
                callB = Math.floor ((Math.random() * callids.length));
                }

                if (message.channel.id === '338046744849809408') {
                    message.channel.sendMessage("The call function has been blocked from this channel. Sorry!")
                }
                else {
                bot.channels.get(callids[callB]).send("**Someone has called this channel! Who could it be...?**");
                message.channel.sendMessage("**I caught something! Say hello!**");
                callkey = true;
                }
            }
                

               

                break;


                case 'hang':
                    if (callkey === true){
                        if (message.channel.id === callA) {
                            bot.channels.get(callA).send("**Hanged up.**");
                            bot.channels.get(callids[callB]).send("**The other party has hanged up the call!**");
                            callkey = false;
                        }
                        else if (message.channel.id === callids[callB]){
                            bot.channels.get(callA).send("**The other party has hanged up the call!**");
                            bot.channels.get(callids[callB]).send("**Hanged up.**");
                            callkey = false;
                        }
                        else {
                            bot.channels.get(callA).send("**A third party has ended the call!**");
                            bot.channels.get(callids[callB]).send("**A third party has ended the call!**");
                            callkey = false;
                        }
                    }
                    else {
                        message.channel.sendMessage("**No one has been called!**")
                    }
                    
                    break;
                    
                case 'sAsk':
                    questionmessage = message.content.slice(7);
                    QA = Math.floor((Math.random() * questionchannels.length));
                    AQ = message.channel.id;

                    while (message.guild.id == bot.channels.get(questionchannels[QA]).guild.id){
                        QA = Math.floor((Math.random() * questionchannels.length));
                    }

                    bot.channels.get(AQ).send("Question Sent! Let's await for an answer...");
                    const questionembed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setColor('#DC143C')
                    .addField("Incoming Question from this user!", "\n**Question:** "+questionmessage+"\n")
                    .setFooter("You can reply with 'v!sAns [answer]'")
                    bot.channels.get(questionchannels[QA]).send(questionembed);
                    QQ = true;

                break;

                case 'sAns':
                    if (!QQ){
                        message.channel.sendMessage("No question to answer!");
                    }
                    else{
                        answermessage = message.content.slice(7)

                        const answerembed = new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL)
                        .setColor('#DC143C')
                        .addField("A question has been answered!", "\n**Question:** "+questionmessage+"\n\n**Answer:** "+answermessage+"\n")
                        
                        bot.channels.get(AQ).send(answerembed);
                        message.channel.sendMessage("Answer Sent!")
                        QQ = false;
                    }
                    
                break;
                
            case 'slots':
            case 'slot':

                emonum0 = Math.floor ((Math.random() * fruits.length));
                emonum1 = Math.floor ((Math.random() * fruits.length));
                emonum2 = Math.floor ((Math.random() * fruits.length));
                message.channel.sendMessage("🎰 `Welcome to Jack's Casino!` 🎰 \n**" +message.author.username+"** rolled the slots...\n   ["+fruits[emonum0]+" "+fruits[emonum1]+" "+fruits[emonum2]+"]")
                if (fruits[emonum0] === fruits[emonum1] && fruits[emonum0] === fruits[emonum2]) {
                    message.channel.sendMessage("...***and WON!*** :tada: :tada:")
                }
                else if (fruits[emonum0] === fruits[emonum1] || fruits[emonum0] === fruits[emonum2] || fruits[emonum1] === fruits[emonum2]){
                    message.channel.sendMessage("...and *almost* won...")
                }
                else {
                    message.channel.sendMessage("...and lost...")
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
                message.channel.sendMessage("🎰 `Welcome to Jack's Casino!` 🎰 \n**" +message.author.username+"** rolled the impossible slots...\n   ["+fruits[imo1]+" "+fruits[imo2]+" "+fruits[imo3]+" "+fruits[imo4]+" "+fruits[imo5]+" "+fruits[imo6]+" "+fruits[imo7]+" "+fruits[imo8]+" "+fruits[imo9]+" "+fruits[imo10]+"]")
                if (fruits[imo1] === fruits[imo2] === fruits[imo3] === fruits[imo4] === fruits[imo5] === fruits[imo6] === fruits[imo7] === fruits[imo8] === fruits[imo9] === fruits[imo10]) {
                    message.channel.sendMessage("***WHAT THE HECK?! YOU ACTUALLY WON?!*** \nJack is looking at your direction!")
                }
                else {
                    message.channel.sendMessage("...yep. They don't call it the 'Impossible Slots' for nothing...")
                }
                break;


        case 'heylook':
            hbuddy = 20;
            var hbran = Math.floor (Math.random() * (hbuddy - 1 + 1)) +1;
            switch (hbran) {
                case 1: message.channel.sendMessage("Hey look buddy, I'm an engineer. That means I solve problems, not problems like 'What is beauty?' Because that would fall within the purview of your conundrums of philosophy. I solve practical problems, for instance: how am I going to stop some mean mother Hubbard from tearing me a structurally superfluous be-hind? The answer, use a gun, and if that don't work... Use more gun. Take for instance this heavy caliber tripod mounted lil' old number designed by me, built by me, and you best hope... Not pointed at you."); break;
                case 2: message.channel.sendMessage("Hey look buddy, \n \n \n \n \n ||I'm Sans. ☠||"); break;
                case 3: message.channel.sendMessage("Hey look buddy, \n \n Bottom Text"); break;
                case 4: message.channel.sendMessage("Hey look buddy,\n\nSo we're back in the mine\nGot our pickaxe swinging from side to side, side, side to side\nThis task's a grueling one, hope to find some diamonds tonight\nNight, night, diamonds tonight\nHeads up, you hear a sound, turn around and look up\nTotal shock fills your body\nOh, no, it's you again\nI can never forget those eyes, eyes, eyes, eyes, eyes, eyes\n\n'Cause baby tonight, the creepers tryin' to steal all your stuff again\n'Cause baby tonight, you grab your pick, shovel and bolt again\nAnd run, run until it's done, done\nUntil the sun comes up in the morn'\n'Cause baby tonight, the creepers tryin' to steal all your stuff again"); break;
                case 5: message.channel.sendMessage("Hey look buddy, we live in a society."); break;
                case 6: message.channel.sendMessage("Hey look buddy, top window broken, broken glass falls and only one group shall prosper. But only one group is the most oppressed of them all. **GAYMERS.**"); break;
                case 7: message.channel.sendMessage("Hey look buddy, 🍎🍑👖 🔞Shawty🔞 had them 🍎apple🍏🍑 bottom🍑👖 jeans👖 jeans 👢Boots👢 with the 👖 jeans 👖 with the 👖 jeans 👖 The whole🎊 club was 👀👀👀looking👀👀👀 at 👖 jeans 👖 She hit 👖 the jeans 👖 she hit 👖 the jeans 👖 Next thing you jeans 👖🔞Shawty🔞 got jeans, jeans, jeans, jeans, jeans, jeans, jeans, jeans Them baggy sweat pants 🍆 And the👟 Reebok's with the pants 👟 with the pants She 😉turned around 😉and gave that 🍑big booty🍑 a pants hey She💦 hit the pants 💦she hit the pants Next thing you pants 👅 Shawty got pants, pants, pants, pants, pants, pants, pants, pants 🍑🍑🍑"); break;
                case 8: message.channel.sendMessage("Hey look buddy, What the 🖕🏻 did ➡️👤 just 👉🏻️👌🏻 💬 about 👤⬅️, ➡️👤 little 🐩👩🏻? I'll have ➡️👤 💡 I 👨🏻‍🎓️ 🔝 of my class in the Navy Seals, ➕ I've been involved in numerous secret raids on Al-Quaeda, ➕ I have over 3️⃣0️⃣0️⃣ confirmed kills. I am 🚋 in 🦍 warfare ➕ I'm the 🔝 sniper in the entire 👥⬅️ armed forces. ➡️👤 are nothing to 👤⬅️ but just another 🎯. I will wipe ➡️👤 the 🖕🏻 out with precision the likes of which has never been 👀 before on this 🌐, ❣️ my 👉🏻️👌🏻 words. ➡️👤 💭 ➡️👤 🥫 get away with 💬 that 💩 to 👤⬅️ over the Internet? 💭 🔂, fucker. As 👥⬅️ 🗣️ I am contacting my secret network of 🕵🏻️‍♂️ across the 🇺🇸 ➕ your IP is being traced ➡️ now so ➡️👤 better prepare for the storm, maggot. The storm that wipes out the pathetic little thing ➡️👤 📞 your 🧬. You're 👉🏻️👌🏻 ☠️, kid. I 🥫 be anywhere, anytime, ➕ I 🥫 kill ➡️👤 in over 7️⃣ 💯 ways, ➕ that's just with my bare ✋🏻. ❌ only am I extensively 🚋 in unarmed combat, but I have ♿️ to the entire arsenal of the United States Marine Corps ➕ I will use it to its 🌝 extent to wipe your miserable 🍑 off the 😀 of the continent, ➡️👤 little 💩. If only ➡️👤 could have 💡 what unholy retribution your little 'clever' comment was about to bring 👇🏻️ upon ➡️👤, maybe ➡️👤 would have held your 👉🏻️👌🏻 👅. But ➡️👤 couldn't, ➡️👤 didn't, ➕ now you're 💰️➡️ the price, ➡️👤 goddamn idiot. I will 💩 fury all over ➡️👤 ➕ ➡️👤 will drown in it. You're 👉🏻️👌🏻 ☠️, kiddo."); break;
                case 9: message.channel.sendMessage("Hey look buddy, \n⣿⣿⣿⣿⣿⣿⣿⡿⡛⠟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠿⠨⡀⠄⠄⡘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠿⢁⠼⠊⣱⡃⠄⠈⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⠛⡧⠁⡴⣦⣔⣶⣄⢠⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣤⠭⠏⠙⢿⣿⣿ ⣿⡧⠠⠠⢠⣾⣾⣟⠝⠉⠉⠻⡒⡂⠄⠙⠻⣿⣿⣿⣿⣿⡪⠘⠄⠉⡄⢹⣿ ⣿⠃⠁⢐⣷⠉⠿⠐⠑⠠⠠⠄⣈⣿⣄⣱⣠⢻⣿⣿⣿⣿⣯⠷⠈⠉⢀⣾⣿ ⣿⣴⠤⣬⣭⣴⠂⠇⡔⠚⠍⠄⠄⠁⠘⢿⣷⢈⣿⣿⣿⣿⡧⠂⣠⠄⠸⡜⡿ ⣿⣇⠄⡙⣿⣷⣭⣷⠃⣠⠄⠄⡄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣧⣁⣿⡄⠼⡿⣦ ⣿⣷⣥⣴⣿⣿⣿⣿⠷⠲⠄⢠⠄⡆⠄⠄⠄⡨⢿⣿⣿⣿⣿⣿⣎⠐⠄⠈⣙ ⣿⣿⣿⣿⣿⣿⢟⠕⠁⠈⢠⢃⢸⣿⣿⣶⡘⠑⠄⠸⣿⣿⣿⣿⣿⣦⡀⡉⢿ ⣿⣿⣿⣿⡿⠋⠄⠄⢀⠄⠐⢩⣿⣿⣿⣿⣦⡀⠄⠄⠉⠿⣿⣿⣿⣿⣿⣷⣨ ⣿⣿⣿⡟⠄⠄⠄⠄⠄⠋⢀⣼⣿⣿⣿⣿⣿⣿⣿⣶⣦⣀⢟⣻⣿⣿⣿⣿⣿ ⣿⣿⣿⡆⠆⠄⠠⡀⡀⠄⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⡅⠄⠄⢀⡰⠂⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"); break;
                case 10: message.channel.sendMessage("Hey look buddy, (ﾉ◕ヮ◕)ﾉ*.✧"); break;
                case 11: message.channel.sendMessage("Hey look buddy, as you might have noticed, my main Discord account has been disabled, and is currently under investigation. There is a high chance it will be permanently disabled."); break;
                case 12: message.channel.sendMessage("Hey look buddy, At this point there's no excuse for baby boomers still in the workforce to be technologically inept anymore It's just willful ignorance, this shit is not fucking hard 'Why is it asking for a password?', Because you're logging into something, Martha. That's how it's been for the last 20 fucking years. 'How do I do this, Can you show me?' No, Jeb, you can Google it like the rest of us. You've been an engineer and working with computers for 35 years. Why would I waste time when some 12 year old indian kid on youtube can walk you through it far more clearly? It requires one exposure to the concept of googling to understand how it work Your generation was smart enough to create a giant hole in the ozone, but not smart enough to realize you have the near entirety of human knowledge at your disposal just by typing in a few words? Give me a break 'I'm not tech savvy', No, you just refuse to learn despite most modern software being idiot proof, stuck in your ways out of entitlement.\n\nThe worst part is after you help an old fuck 9 times out of 10, they'll give you some kind of bullshit passive-aggressive thank you along the lines of 'Oh, I guess you young people have to know something about those phones you're always on, huh?' Give me a fucking break Greg. Maybe we're staring at them because it's less depressing to be distracted instead of coming to terms with the fact our planet is literally dying. It's not my fault your wife hasn't had sex with you since 2006. Go away."); break;
                case 13: message.channel.sendMessage("Hey look buddy, Just thought I’d get this off my chest here, but in my business communications class, everyone is making pamphlets for issues in teenagers. This girl in my class is doing “porn addiction” as her topic, and she’s using LOTS of pictures of Luigi for her pamphlet. It’s very clear she doesn’t know a lot about porn in the first place, but the thing that bothers me is that I don’t know what Luigi did to her. I think there’s one picture of Funky Kong but other than that, just Luigi beside things like “porn make people nut” and “porn is sin, people these days need to pray more”.\n\nUPDATE: I asked her what her problem with Luigi is and to my surprise, she said that Luigi raped her! Imagine that! She also admitted to having sexual attraction to him, which contradicts everything in her pamphlet. I can't criticize her for liking him that way because I have the same level of attraction to him, but still.\n\nUPDATE 2: The day of our presentation went by, and what a crazy turn of events. She happened to be the last one to present and I was pretty shocked at what happened next. Luigi jumped through the window into the room during the middle of her presentation and they started...well I think you know what they did. After they were done Luigi left and everyone clapped, she never even finished presenting. She got a 100% A+ grade and walked away feeling satisfied. Everyone has a newfound respect for her."); break;
                case 14: message.channel.sendMessage("Hey look buddy, Imagine being a villager. You have an amazing partner and you recently purchased a new house. You love you job and are extremely happy. One day a traveler from a far away land came into your peaceful village. He has terrifying weapons and wears powerful armor. He carries thousand emeralds on his back and purchased many of your wares. One night the mysterious stranger disappears and with him a fellow villager goes missing. Life soon gos back to normal and the village is once again peaceful for many months. Then one day the traveler returns. He looks scarred and haggard. He has a bad omen about him. On his back he wears the banner of the pillagers. He walks past your home and enters the city center. RING RING RING. The traveler begins to ring the villages warning bell. You begin hearing the thundering footprints of an army. Could it be? Your window shatters as an arrow flies through it. The pillagers rumble through the streets. Cutting through doors with their axes and crushing villagers under the footprints for their ravaging beasts. You see the traveler chopping through the army with all his strength, but it's not enough. He falls on his knees riddled with arrows, and fades away into red particles and items. Suddenly your door is bashed down by a crossbow wielding pillager. He shoots you partner in their chests, and your beloved falls into your arms. The pillager lears over you, and you know this is the end. You close your eyes and accept your fate. Then you begin to hear music. Duh duh duh duh duh duh, duh duh duh duh, duuhh duhh. He default dances above you and your dying partner and then takes aim. Thruw, schip. Your life is over in an instant. Your last living moment was taken up by some stupid pillager default dancing on your dying body. Screw that stupid traveler."); break;
                case 15: message.channel.sendMessage("Hey look buddy, PETER NO! Its the thirst💧😰, thirstiest💦 time⏰, of the year🗓. (Aye🤣, yuh👌🏾) 👀I have just ☝🏾one query❓ (😳What's that?🤔) Wanna 🙋🏾‍♂️Sprite 🥤😎Cranberry🍒💦? (😏Uh huh😏) The 😩answer 🤤is clear. 😋😉It's the 🥵😳thirst, 🤫🤭thirstiest 💦💦💯time⏰, of the year📅 (🥤Sprite🍒, let's go )!"); break;
                case 16: message.channel.sendMessage("Hey look buddy, Ok, I know this might freak you out BUT, I'm a Simmer (yes, I play the Sims) and I made a ____ Sim. Her roommate is _____. I thought you deserved that."); break;
                case 17: message.channel.sendMessage("Hey look buddy, I was ordering at the local McDonald's one day when I complimented the cashier for her great beauty and compared her to waifus that most females can only dream of looking like. Instead of acknowledging my kind words or appreciating that I even gave her a chance in the first place, she handed me my chicken tenders and rudely exclaimed, 'That would 5.99'."); break;
                case 18: message.channel.sendMessage('Hey look buddy, A popular concept in the known world is the idea of the “bruh moment.” A “bruh moment” is defined as “bruh velocity” multiplied by “bruh mass.” In other words, the larger a “bruh velocity” or a “bruh mass” is, the overall larger a “bruh moment” will be. For example, something that hits harder has a larger “bruh mass,” such as karen taking the kids as opposed to spilling your drink. The faster something hits is known to have a larger “bruh velocity,” such as a fast moving train vs the slow inevitability of death as it crushes our very souls second by second and we’ll eventually succumb to the cold embrace of the Reaper himself. In these examples, we can clearly demonstrate exactly how much of a “bruh moment” something really is.'); break;
                case 19: message.channel.sendMessage("Hey look buddy, TONS OF ROBUX"); break;
                case 20: message.channel.sendMessage("Hey look buddy, \n☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭ ☭"); break;
            }
            break;

        case 'fuckyou':
            fu = Math.floor ((Math.random() * insults.length));
            message.channel.sendMessage("Fuck you too, you "+insults[fu]+"!");
            break;

        case 'facts':
            ohs = Math.floor ((Math.random() * nonfacts.length));
            message.channel.sendMessage(nonfacts[ohs]).then((nmessage) => {setTimeout(function(){
                nmessage.edit("*[MESSAGE REDACTED]*");
              }, 5000)
            }); 
            break;

        case 'ethan':
            message.channel.send("1. The kid named 'school' in the sentence: 'Fuck school.'\n2. A word Dru can say to avoid Kyu's horniness. \n\n**Example:**\nKyu: Hi Dru. \nDru: ETHAN! \nKyu: ...what? \nEthan: What?")
            break;

        case 'pip':
            message.channel.send("1. A type of post that is pure in every way\n2. A Roleplayer/DnD Player/Storyteller/Game Dev(?)/Sailor Moon Fan/Purist that can cleanse your sins from discord just by clicking on her channel. \n\n**Example:**\nGuy 1: My eyes are burning! \nGuy 2: Here, have a pip post from Pip. \nGuy 1: Oooh, that's nice, but how does it out the fire?")
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
                    message.channel.sendMessage("I've come to make an announcement, " +user.username + "'s a bitch-ass motherfucker. They pissed on my fucking wife. That's right. They took their smallass fuckin' futa dick out and they pissed on my FUCKING wife, and they said their dick was t h i s b i g and I said that's disgusting. So I'm making a callout post on my Discord dot com: **" + user.username + "**, you got a small dick. It's the size of this SmolDru except WAY smaller. And guess what? Here's what my dong looks like. [explosion sounds] That's right, baby. Tall points, no futa, no tax, Look at that, it looks like two balls and a bong. They fucked my wife, so guess what, I'm gonna fuck the earth. That's right, this is what you get! My SUPER LAZER PISS! Except I'm not gonna piss on the earth. I'm gonna go higher. I'm pissing on the MOOOON! [piss boom] **How do you like that, IRRI?** I PISSED ON THE MOON, YOU IDIOT! You have twenty-three hours before the piss d r o p l e t s hit the fucking earth, now get out of my fucking sight before I piss on you too!");
                }
                else {
            message.channel.sendMessage("I've come to make an announcement, " +message.author.username + "'s a bitch-ass motherfucker. They pissed on my fucking wife. That's right. They took their smallass fuckin' futa dick out and they pissed on my FUCKING wife, and they said their dick was t h i s b i g and I said that's disgusting. So I'm making a callout post on my Discord dot com: **" + message.author.username + "**, you got a small dick. It's the size of this SmolDru except WAY smaller. And guess what? Here's what my dong looks like. [explosion sounds] That's right, baby. Tall points, no futa, no tax, Look at that, it looks like two balls and a bong. They fucked my wife, so guess what, I'm gonna fuck the earth. That's right, this is what you get! My SUPER LAZER PISS! Except I'm not gonna piss on the earth. I'm gonna go higher. I'm pissing on the MOOOON! [piss boom] **How do you like that, IRRI?** I PISSED ON THE MOON, YOU IDIOT! You have twenty-three hours before the piss d r o p l e t s hit the fucking earth, now get out of my fucking sight before I piss on you too!");
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
                const serverembed = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#00BFFF')
                .setTitle(message.guild.name)
                .setImage(message.guild.iconURL)
                .setDescription("Owned by "+message.guild.owner.user.tag)
                .addBlankField()
                .addField('Guild ID', gid)
                .addField('Created At', message.guild.createdAt)
                .addField('People in this server', message.guild.memberCount)
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                message.channel.send(serverembed);
        break;

        case 'IDvatar':
                if (args[1] != undefined){
                    Idget = args[1];
                    const IDaembed = new Discord.RichEmbed()
                    .setAuthor("Avatar of user "+Idget)
                    .setColor('#00BFFF')
                    .setTitle(bot.users.get(Idget).username)
                    .setImage(bot.users.get(Idget).avatarURL)
                    .setDescription(bot.users.get(Idget).tag)
                    .addBlankField()
                    
                    
                    .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                    message.channel.send(IDaembed);

                }
                else {message.channel.sendMessage("This command posts the profile picture of a user using their ID. To use it, send `v!IDvatar [User ID here]`.")}
        break;

        case 'noswears':
            message.channel.sendMessage("Ok, bud. That's enough swearing for now. Go sit in the corner and think about what you did.")
            break;

        case 'purewars':
            message.channel.sendMessage("Quick! Place your bets! Who do you think is the purest? 'Pip', or 'Pkoby'? Type that person's name NOW! (Will only count if you start a sentence with that name.)")
            war = true;
            break;

        case 'purestandings':
            let pipwins = bot.afile["PipWins"].pips;
            let pkwins = bot.afile["PkWins"].pkobys;
            message.channel.sendMessage("```Current Standings for the Pure Wars.```\nPip: **"+pipwins+"**    Pkoby: **"+pkwins+"**");
            break;

        case 'goat':
            message.channel.send("Wario, but sexy. \n\n**Example:** \nGuy 1: I wanna Mount Wario. \nGuy 2: You mean 'Mount Goat'? \nGuy 1: Yeah, that too. \nIrri: ...what?")
            break;

        case 'mon':
            message.channel.sendMessage("[ARCHIVED] \nNice choice. Moon is one of those friends you didn't know at first existed and now you're happy to have in your life. She's also a big mood. But be careful, Moon has an edgy side you might not want to generally encounter at times. ~~That's why she's perfect for a waifu!~~ Three cheers for Moon! (And someone, please give her a hug when necessary.)")
            break;

        case 'moon':
            message.channel.sendMessage("1. The reason why you can rest peacefully at night. \n2. v!mon \n\n**Example:** \nGuy 1: I'm going to bed. \nMoon: Okay, rest well. \nGod to the angels: You heard Moon, protect that boy.")
            break;

        case 'pkoby':
            message.channel.sendMessage("1. A pure child who we slowly corrupt without noticing. \n2. An echo fighter of Pip. \n\n**Example:** \nPkoby: Hey! Check this out! \nMoon: Where'd you find that? It's kinda creepy. \nPkoby: Gabe DMed it to me. \nMoon: Of course, I'll fucking kill him in the morning.")
            break;

        case 'ender':
            message.channel.sendMessage("Izzle's rival with no context. \n\n**Example:** \nDid Ender defeat that cuphead boss yet?")
            break;

        case 'korbs':
            message.channel.sendMessage("Meowser with drawing skills. \n\n**Example:** \nDru: Kirbs, what are you doing? \nKorbs: :3")
            break;

        case 'prince':
            message.channel.sendMessage("Perfection. \n\n**Example:** \nThere's nothing else, he's just perfect.")
            break;

        case 'eliz':
            message.channel.sendMessage("1. Longer version of saying 'E' \n2. Shorter version of saying 'Elizabeth' \n3. Alternative version of saying 'Ellie' \n4. 'Your Mom.' \n\n**Example:** \nEliz kicked my ass at Smash again...")
            break;

        case 'nokobo':
            message.channel.sendMessage("1. The Icon used for Hobo Thursdays. \n2. A lovely uncle. \n\n**Example:** \nGuy 1: Where's my beer? \nNokobo: Fug off!")
            break;

        case 'jasper':
            message.channel.sendMessage("E's horny license. \n\n**Example:** \nJasper's a very loveable person.")
            break;

        case 'jacob':
            message.channel.sendMessage("Hotness. \n\n**Example:** \nGirl 1: Yo! Jacob just looked at my general direction! \nGirl 2: Holy shit! Really? I'd do anything to be with that guy.")
            break;

        case 'izzle':
            message.channel.sendMessage("1. A mood. \n2. A young teen who starts a simp war in her school. \n\n**Example:** \nGuy 1: Dude, Izzle's pretty cute. \nGuy 2: Don't say that out loud!")
            break;

        case 'rowlet':
            message.channel.sendMessage("The result of Dru porn. \n\n**Example:** \nHow's your day, Rowlet?")
            break;

        case 'kirB':
            message.channel.sendMessage("1. A cool lad who will comfort you in VCs. \n2. A demonic madlad who will cream yo ass in both Smash and SMM2. \n\n**Example:** \nGuy 1: I heard that Izzle died.\nKir b: Good.")
            break;

            case 'rb':
                message.channel.sendMessage("An eagle that can smash your mom better than Sushi. \n\n**Example:** \nGuy 1: Where's RB? \nGuy 2: Prob banging your mom again. \nGuy 1: DAMMIT! Always happens. >:(")
                break;

         case 'generic':
            message.channel.sendMessage("1. Walking communism. \n2. A Jedi that dies to rats. \n\n**Example:** \nBless the world, Generic!")
         break;

         case 'truth':
            message.channel.sendMessage("A tomato from Brazil. Don't get close, or you'll get shot. \n\n**Example:** \nOi, tomato of truths, what is your wisdom?")
            break;

        case 'sushi':
            message.channel.sendMessage("A racial slur that normally means 'banging your mom.' \n\n**Example:** \nSushi go bang someone's mom.")
            break;

        case 'kyu':
            message.channel.sendMessage("1. The word used to reference the Friday night simp war of '20. \n2. A female Gabe that somehow appears when people talk about DDLC.\n\n**Example:** \nKyu: *breathes* \nEthan: Oh shit, hi.")
            break;

        case 'goji':
            message.channel.sendMessage("QT\n\n**Example:** \nGoji's pretty hot.")
            break;



        case 'herbbreak':
            key = 2;
            message.react('👍')
            break;

        case 'edgy':
            message.channel.send("SUP MA SON\nSUP MA MA\nSON THE HEDGE\n**OW THE EDGE** :knife:")
            break;

        case 'druxwario':
            message.channel.sendMessage("Sit tight, folks. Let me tell you a story. One night, Dru decided to take a shower to wash off the depression he obtained from an 'article' about how the world now accepts cursed images. The article was mostly bullshit, and for some reason it decided to talk about politics for no reason. But let's not go there. As Dru stepped in the shower and turned on the nozzle, allowing the warm, steaming water to cover hie entire body from the head-down, he heard an unexpected noise. A hpyer-realistic 'wah', to be exact, followed by the opening of a creaky door. Upon hearing this, Dru smiles. He knows what's about to happen to him. He hears the incoming footsteps of Wario, slowly approaching him while inside the shower. Another nearby 'WAH' could be heard. As Dru feels the closeness of Wario in the shower, he also feels a large, muscular hand grabbing him by the ass, followed by a husky but sexy voice, which says 'Time to unrotten this hole!' Gabe, what the fuck is wrong with you. I'm not finishing this. Fuck you.")
            break;

        case 'BK':
            message.channel.sendMessage("`The following is a list of all genders dedicated to support gay rights:`")
            message.channel.send("**Burgers**\nWhopper\nWhopper with Cheese\nDouble Whopper\nDouble Whopper with Cheese\nTriple Whopper\nTexas Whopper\nTexas Double Whopper Sandwich\nWhopper Jr.\nWhopper Jr. with Cheese\nHamburger\nCheeseburger\nDouble Hamburger\nDouble Cheeseburger\nBK Bacon Burger\nBacon Cheeseburger\nDouble Bacon Cheeseburger\nBK Single Stacker\nBK Double Stacker\nBK Triple Stacker\nBK Quad Stacker\n\n**Chicken, Fish, and Veggie**\nTendergrill Chicken\nTendercrisp Chicken\nOriginal Chicken\nChicken Crisp Classic\nChicken Crisp Spicy\nHome-style Chicken Strips\nChicken Nuggets\nTacos\nCountry Pork Sandwich\nPremium Alaskan Fish Sandwich\nBK Veggie Burger\n\n**Breakfast**\nQuaker Oatmeal Maple and Brown Sugar\nQuaker Oatmeal Original\nSausage Breakfast Burrito\nSouthwestern Breakfast Burrito\nBK Breakfast Muffin Sandwich\nCroissan'wich\nDouble Croissan'wich\nBiscuit Sandwich\nCinnabon Roll\nHash Browns\nFrench Toast Sticks\n\n**BK Garden Fresh Salads and Wraps**\nGarden Fresh Salad Chicken Caesar with Tendergrill\nGarden Fresh Salad Chicken Caesar with Tendercrisp\nGarden Fresh Salad Chicken BLT with Tendergrill\nGarden Fresh Salad Chicken BLT with Tendercrisp\nGarden Fresh Salad Chicken Apple & Cranberry with Tendergrill\nGarden Fresh Salad Chicken Apple & Cranberry with Tendercrisp\nSide Garden Fresh Salad and Ranch Dressing\nRanch Crispy Chicken Wrap\nRanch Grilled Chicken Wrap\nHoney Mustard Crispy Chicken Wrap\nHoney Mustard Grilled Chicken Wrap\nCeasar Crispy Chicken Wrap\nCeasar Grilled Chicken Wrap\nCrispy Chicken Apple and Cranberry Wrap\nGrilled Chicken Apple and Cranberry Wrap\nCrispy BLT Salad Wrap\nGrilled BLT Salad Wrap");
            message.channel.send("** **\n**Desserts**\nDutch Apple Pie\nHershey's Sundae Pie\nSoft Serve Cone\nSoft Serve Cup\nCaramel Sundae\nChocolate Fudge Sundae\nStrawberry Sundae\nOreo Sundae\nMini M&M's Sundae\nWarm Oreo Brownie Sundae\nChocolate Chip Cookies\nWhite Chocolate Macadamia Nut Cookies\nOatmeal Raisin Cookies\n\n**Beverages**\nStrawberry Banana Smoothie\nTropical Mango Smoothie\nVanilla Milk Shake\nChocolate Milk Shake\nStrawberry Milk Shake\nMocha Frappé\nCaramel Frappé\nWhipped topping coffee shot");
            break;

        case 'analyse':
            message.channel.sendMessage("`Analyzing Post...`")
            message.channel.sendMessage("Yep. The results are in. That post is a 100% bruh moment.")
            break;

        case 'sco':
            message.channel.sendMessage("And I oop.")
            message.channel.sendMessage("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.sendMessage("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.sendMessage("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.sendMessage("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.sendMessage("**sksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksksk**")
            message.channel.sendMessage("***sAvE THe TurTLeS! SToP UsinG pLAsTiC stRAwS!!!!!!!!***")
            message.channel.sendMessage("*Virus is currently having an aneurism. Please check back later.*")
            break;

        case 'discotime':
            message.channel.sendMessage('*Priest walks in* \n"Open your bibles."\n*Disco ball drops\n"Now get on the fucking dance floor and* ***p r a y***"')
            break;

        case 'report':
            message.channel.sendMessage("Alright. The report was sent via DM to the bot owner. Thank you for your input.");
            rep = message.content.slice(9)
            const reportEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setColor(0xFF0000)
            .setTitle("Report Submission")
            .setDescription(rep + '   \n[Jump to Message](https://discordapp.com/channels/'+message.guild.id+'/'+message.channel.id+'/'+message.id+')')
            .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
            bot.users.get("178539479827611648").send(reportEmbed);
            break;

            case 'suggest':
                    message.channel.sendMessage("Alright. The suggestion was sent via DM to the bot owner. Thank you for your support!");
                    sug = message.content.slice(10)
                    const suggestEmbed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setColor(0xFF0000)
                    .setTitle("Suggestion Submission")
                    .setDescription(sug + '   \n[Jump to Message](https://discordapp.com/channels/'+message.guild.id+'/'+message.channel.id+'/'+message.id+')')
                    .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                    bot.users.get("178539479827611648").sendMessage(suggestEmbed);
                    break;

            

                case 'gabe':
                    bot.users.get(message.author.id).sendMessage("Hello? \nIs this thing working?\nOf course it is, you're reading this.\n\nBut to be fair, I knew you would figure it out.\nI just wanna say, thank you.\nPeople like you were the reason I stayed up and going in this life. Honestly, I wasn't gonna make it that far in life if I never met you. Thank you. Gosh I wish I can do more, rather than just hidding a message inside a bot, but seriously, I loBe you.\nContinue being you!");
                    break;

            case 'easteregg':
                message.channel.sendMessage("What, you wanted one? Nah, too lazy.");
                break;

            case 'hiMonika':
                message.channel.sendMessage(`uð³«ükÇqKD†”ËàM§c\¬‹Ë¼};ò2X»Ë£×[ÿ}ÙqŒID†”œ@Dd0ª˜C,íÃ‘wº ¾OL:Î1‰ÈÐ‘åt "ÃX²ÓÈÑsïãl‹gà$x¯çÃîË¦0—Çi…•µÔ€"2¨…œ@dS
                Övw”fAäõpÌlhN£ü nØó4@¼zú¥!"" ¿†¼^›c-´ÝzÁ@D$"""2ôý€É=ÜÚ—"-éjYÏ7©S³ˆˆˆÈÑÀUÐmã†ÙP2ÐáˆˆˆŒh*r&bÕîËº[w½î°}ûòÔ‹JDDddR›†ác=œù°1á¦z8ÖpF`)
                break;

            case 'fuck':
                message.channel.sendMessage("You don't have permission to use that command. Please try another.");
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
                    
                    uusers = bot.guilds.get(message.guild.id).members.array();
                    uwusers = Math.floor ((Math.random() * uusers.length));
                    pair2 = bot.users.get(uusers[uwusers].id).username;
                    
                    message.channel.send("*Reading the pair score of "+pair1.user.username+" and "+pair2+"...*")
                }
                else {
                    uusers = bot.guilds.get(message.guild.id).members.array();
                    uwusers = Math.floor ((Math.random() * uusers.length));
                    pair1 = bot.users.get(uusers[uwusers].id).username;

                    uusers = bot.guilds.get(message.guild.id).members.array();
                    uwusers = Math.floor ((Math.random() * uusers.length));
                    pair2 = bot.users.get(uusers[uwusers].id).username;

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
            
            const embed1 = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#FF1493')
                .setTitle("Commands - Page 1")
                .setDescription("☆ The following commands have to be prefaced with [ "+PREFIX+" ] .")
                .addBlankField()
                .addField('**General Commands** 📝', 'Commands you may not use a lot.')
                .addBlankField()
                .addField('• commands[#]', 'Provides commands.', true)
                .addField('• hi', 'Says hi', true)
                .addField('• bye', 'Says bye', true)
                .addField('• help', 'Gives help', true)
                .addField('• info', 'Gives info', true)
                .addField('• ping', 'Pings you!', true)
                .addField('• me', 'About you', true)
                .addField('• todaysong', "Posts Today's Song", true)
                .addBlankField()
                .addField('**Fun Commands** 🎉', 'What makes VirusBot...Virusbot.')
                .addBlankField()
                .addField('• love', 'Promotes peace...?', true)
                .addField('• hug', 'Hugs a guy.', true)
                .addField('• call', "Use 'v!hang' to hang up.", true)
                .addField('• count', 'Ew, numbers.', true)
                .addField('• slot', 'For you gambling fans.', true)
                .addField('• imopsslots', 'Triggers addiction.', true)
                .addField('• purewars', 'Starts a war.', true)
                .addField('• purestandings', 'Shows the war.', true)
                .addField('• heylook', 'Hey look buddy...', true)
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                
                bot.users.get(message.author.id).send(embed1);
            
            //People and Image
            //message.channel.send("``` 《《 VIRUS COMMANDS 》》 \n\nPAGE 2. \n\n────────\n\n☆ The following commands have to be prefaced with [ v! ] .\n\n-> People Commands:\ndru - Do it Dru!\nmoon - Bring it in, Moon!\npkoby - The pure lad.\nkirB - Whoa, a Kirby?\nender - A wild Ender appears!\nkorbs - my boi korbs.\nprince - Please don't say the n word.\neliz - Where's Ellie Bean?\nnokobo - Some random boomer I know.\njasper - Hyper...critical?.\njacob - Hot lad.\nghost - Spoookkkkyyyyy.....\ngoat - What? An epic gamer? \nname - Just an ego booster. \nizzle - What happens if I say 'furry' here? \nethan - You all know who he is!\ncain - Channel-indeed. \nkevin - Everyone...bow? \nsnoop - Ugh, Persona...\njet - Pings Jet. That's all.\nrowlet - Oh my. \nirri - Save us Irri!\npip - The purest person. So, so pure.\nmimik - Who's that?\nreun - The best boy!\nknux - You don't have one yet?!\n\n-> Image Commands:\nclown - Virus will provide you with the most important item of clothing for a clown.\nclown2 - Virus will bring you up for an interview.\nbruh - Bruh.\nwtf - Reacts with a 'Wtf' picture. Most are offensive, do be careful.\nmoonuwu - Virus gives you a shiney uwu!\najoke - A joke is a joke, Budtard.\nbuddy - Ok, Buddy.\nwhatcanIsay - A magical gif. \noldie - Posts a picture from the Glory Days...\ndedmeme - Posts a dead meme from Gabe's one year old folder.\nsad - Virus will provide an image for the saddened.\nnice - Virus will react with a 'Nice' image. \ndong - Where's the dong? \nfunky - Funky got that sicko I need. \ntoxicegg - Dru, get out. \nWAHOO - Mario for the PS4 cancels KH3\negirl - SHUT UP, E-GIRL! \nthouthefuck - BY THE POPE!\n\n──────\n\nPLEASE USE [ v!commands3 ] TO VIEW THE NEXT PAGE.```")
            const embed2 = new Discord.RichEmbed()
            .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#FF1493')
                .setTitle("Commands - Page 2")
                .setDescription("☆ The following commands have to be prefaced with [ "+PREFIX+" ] .")
                .addBlankField()
                .addField('**Copypasta Commands** 📰', 'Commands that are just a scripted block of words.')
                .addBlankField()
                .addField('• timetorockwiththebiggitybuckbumble', '🐝', true)
                .addField('• weeb', 'Uhhh...', true)
                .addField('• discotime', "Let's pray.", true)
                .addField('• dead', 'Aaand you died.', true)
                .addField('• gamestop', 'What will you buy?', true)
                .addField('• gay', 'For the fresh people!', true)
                .addField('• noswears', 'Stop swearing!', true)
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
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                
                bot.users.get(message.author.id).send(embed2);
           
            //Replies and Reactions
            //message.channel.send("``` 《《 VIRUS COMMANDS 》》 \n\nPAGE 3.\n\n────────\n\n☆ The following commands do not have to be prefaced with [ v! ] .\n\n-> Fun Commands:\nLET ROCK - Start a party!\nboomer - Shut up. This command can only be used if you have the boomer-pass (see Page 1).\nHOL UP - Virus will hold for you.\n\n-> User-Specific Commands:\nowo - uwu? - [ Only Izzle and Moon can use this command. ] \nDrizzle - Excuse me? - [ Only Jet can use this command. ]\nJoe - Joe Who? - [ Only Reun can use this command. ] \n\n────────\n\n☆ Adding the following reactions to any message will trigger Virus to send the correlated response!\n\n-> General Commands:\n:herb: - Join the support gang! (In case of spam, type 'v!herbbreak')\n\n-> User-Specific Commands:\njoystick - For the downed gamer. - [ This response can only be triggered by Gabe. ] \nguitar - Quick! Vibe Check. - [ This response can only be triggered by Snoop and Reun. ]\n\n────────\n\nEND OF COMMAND LIST.```");
            const embed3 = new Discord.RichEmbed()
            .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#FF1493')
                .setTitle("Commands - Page 3")
                .setDescription("☆ The following commands have to be prefaced with [ "+PREFIX+" ] .")
                .addBlankField()
                .addField('**Media Commands** 📷', 'Commands that show pics/vids.')
                .addBlankField()
                .addField('• bored', 'Cures boredom!', true)
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
                .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                
                bot.users.get(message.author.id).send(embed3);
            
                    const embed4 = new Discord.RichEmbed()
                    .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                        .setColor('#FF1493')
                        .setTitle("Commands - Page 4")
                        .setDescription("☆ The following commands have to be prefaced with [ "+PREFIX+" ] .")
                        .addBlankField()
                        .addField('**Other Commands** 🌟', "They're special!...kinda.")
                        .addBlankField()
                        .addField('• joe', 'Joe?', true)
                        .addField('• boomerpass', 'Grab the pass!', true)
                        .addField('• boomerbreak', 'Throw away the pass', true)
                        .addField('• list', 'Enter the VirusGames!', true)
                        .addField('• ts', 'Tells a story.', true)
                        .addField('• druxwario', 'What the hell even is this?', true)
                        .addField('• generate', 'Get a cool sentence!', true)
                        .addBlankField()
                        .addField('**Personal Commands** 👤', 'Commands about friends, for friends.')
                        .addBlankField()
                        .addField('The following people have their own commands:', '• dru\n• moon\n• pkoby\n• kirB\n• ender\n• korbs\n• prince\n• eliz\n• nokobo\n• jasper\n• jacob\n• ghost\n• goat\n• name\n• izzle\n• ethan\n• cain\n• kyu\n• sushi\n• goji\n• snoop\n• jet\n• rowlet\n• irri\n• pip\n• mimik\n• reun\n• knux\n• dyst\n• reni\n• phobos\n• rb\n• generic\n• truth', true)
                        .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                        
                        bot.users.get(message.author.id).send(embed4);
            
                    const embed5 = new Discord.RichEmbed()
                    .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                        .setColor('#FF1493')
                        .setTitle("Commands - Page 5")
                        .setDescription("☆ The following commands DO NOT have to be prefaced with [ "+PREFIX+" ] .")
                        .addBlankField()
                        .addField('**Response Commands** 💬', "Uh oh. He talks back?!")
                        .addField("Saying any of these things will result with a response from Virus.", "• LET ROCK - Starts a party!\n• boomer - Only works if you have the boomer-pass (See Page 4.)\n• HOL UP - Virus will hold...whatever it is for you.")
                        .addBlankField()
                        .addField('**Personal Commands** 🗣️', 'Bias.')
                        .addField('The following quotes are user-specific:', '• owo - Only Izzle and Moon can use this.\n• Drizzle - Only Jet can use this.\n• Joe - Only Reun can use this.')
                        .addBlankField()
                        .addField('**Reaction Commands** 👀', "I saw that.")
                        .addField("Adding any of these reactions to a message will make the bot react to it:", "• :herb: - Join the support gang! (If there is spam, use 'v!herbbreak')\n• :moneybag: - Makes Virus DM you the selected pic/video that was posted.")
                        .addBlankField()
                        .addField('**Personal Commands** 🦀', "Huh.")
                        .addField('The following reactions are user-specific:', '• :joystick: - Only Gabe can use this.\n• :guitar: - Only Snoop and Reun can use this.')
                        .setFooter("VirusDaBot", bot.users.get(BotID).avatarURL);
                        
                        bot.users.get(message.author.id).send(embed5);
            break;
    

        


    }
}
    if (message.author.bot) return;

    /*
    if (message.content.startsWith("bruh")) {
        if (message.author.id !== '437286707264749570' || message.author.id !== '613841370905444423'){
        const attachment = new Attachment('https://media.discordapp.net/attachments/606957397826863195/631320823386341408/EGXRYZoU0AANBFT.png');
        message.channel.send(attachment);
        }
    }
    */



   if (message.channel.id === callA && callkey === true && message.author.id !== BotID){
       if (message.content.includes("@everyone") || message.content.includes("@here")){
        message.channel.sendMessage("Please refrain from raiding through calls. \n(Thanks to all my friends who found this oversight. I'm not angry at y'all <3)")
       }
       else {
    bot.channels.get(callids[callB]).send(message.author.tag +": "+message);
    if (message.attachments.first() != undefined){
        callattach = new Attachment (message.attachments.first().url);
        bot.channels.get(callids[callB]).send(callattach);
    }
}
}

if (message.channel.id === callids[callB] && callkey === true && message.author.id !== BotID){
    if (message.content.includes("@everyone") || message.content.includes("@here")){
        message.channel.sendMessage("Please refrain from raiding through calls. \n(Thanks to all my friends who found this oversight. I'm not angry at y'all <3)")
       }
       else {
    bot.channels.get(callA).send(message.author.tag +": "+message);
    if (message.attachments.first() != undefined){        
        callattach = new Attachment (message.attachments.first().url);
        bot.channels.get(callA).send(callattach);
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
        uusers = bot.guilds.get(message.guild.id).members.array();
        uwusers = Math.floor ((Math.random() * uusers.length));
        thisone = bot.users.get(uusers[uwusers].id);

        message.channel.send("<@"+thisone.id+">");
    }


    if (message.content.includes("Drizzle")){
        if (message.author.id === '356389068634062848'){
            message.channel.sendMessage("Okay, Jet. You need to face the facts. **The ship is dead.**")
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
            message.channel.sendMessage("Who's Joe?")
        }
    }

    if (message.content.includes("Joe Mama")){
        if (message.author.id === '351941317305040896'){
            message.channel.sendMessage("Dam, well played, Reun")
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
            const attachment = new Attachment('https://cdn.discordapp.com/attachments/398526069910798348/634885215994642459/boomer.png');
            message.channel.send(attachment);
        }
    }

    if (message.content.startsWith("Pip") && war === true){
        message.channel.sendMessage("Alright! **Pip** has won this match! Tough luck, Pkoby. Bernie's not gonna be happy about this one.");
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
        message.channel.sendMessage("Alright! **Pkoby** has won this battle! Too bad, Pip. Looks like your 'pure-place' needs some cleaning...");
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
            message.channel.sendMessage("Message Recorded!");
        }
    }

    

    /*if (message.content.toLowerCase().includes("creeper")){
        message.channel.sendMessage("Aww man.");
    }
    */

    if (message.mentions.users.first() != undefined)
    {
        if (message.mentions.users.first().id == BotID){
        pingmes = true;
        message.channel.sendMessage("wHAT?!");
        pingmeschannel = message.channel.id;
        }
    }

    if (pingmes == true && message.content.toLowerCase().includes("help") && message.author.id != BotID && message.channel.id == pingmeschannel){
        message.channel.sendMessage("Looking for help? To see a list of commands, type 'v!commands', or to see other information, type 'v!info' to see a list of available options");
        pingmes = false;
    }

    if (pingmes == true && message.content.toLowerCase().includes("commands") && message.author.id != BotID && message.channel.id == pingmeschannel){
        message.channel.sendMessage("Looking for a command list? To see a list of commands, type 'v!commands'");
        pingmes = false;
    }

    if (pingmes == true && (message.content.toLowerCase().includes("hi") || message.content.toLowerCase().includes("hello") || message.content.toLowerCase().includes("hey")) && message.author.id != BotID && message.channel.id == pingmeschannel){
        message.channel.sendMessage("Hello, "+message.author.username);
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
        if (user.id !== message.author.id && key === 1 || key === 0){
            
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
            stolenmeme = new Attachment (message.attachments.first().url);
            message.channel.send("This is a message to alert that "+user.username+" has stolen "+message.author.username+"'s meme. No further action is required.");
            bot.users.get(user.id).send(stolenmeme);
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
                    message.channel.sendMessage("Oh...you hugged yourself? Damn, you're lonely...")
                }
                else if (user1 !== undefined && user1.id === BotID) {
                    if (user.id === '356389068634062848') {
                        gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                    message.channel.sendMessage("*Hugs "+user.username+" back!* 💙");
                    message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    }
                    else {

                    message.channel.sendMessage("Nope! You ain't hugging me ya crap! Hug someone else!")
                }
            }
                else if (user !== undefined){
                    gifNumber = Math.floor (Math.random() * (hugs - 1 + 1)) +1;
                    message.channel.sendMessage("*"+user.username+" gives "+user1.username+" a hug!* 💙");
                    message.channel.send ( { files: ["./hugs/hugif (" + gifNumber + ").gif"]})
                    suplexChance = Math.floor (Math.random() * (10 - 1 + 1)) +1;
                    if (suplexChance <= 1){
                        const suplex = new Attachment('https://cdn6.omidoo.com/sites/default/files/imagecache/1200x630/images/headline/201803/thesuplex2.jpg');
                        message.channel.send("But surprise! It turned into a hecking suplex!")
                        message.channel.send(suplex);
                    }
                }
                
                
                else {
            message.channel.sendMessage("...but there's no one to hug! How pitiful...");
                }
            }

        });






























































































































































        var int, emoques = 0;
        var int, triv = 0;
        var emoid;
        var quid;
        var slotfruits = ["🍎", "🍐", "🍊", "🍋", "🍇", "🍓", "🍒"];
        //dicegame
        var d6 = [1, 2, 3, 4, 5, 6];
        var d8 = [1, 2, 3, 4, 5, 6, 7, 8];
        var d10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var d12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        var high = 0;
        var highname = "Virus";
        var dgid;
        var int, dgprogress = 0;
        var player1name;
        var player2name;
        var int, player1score = 0;
        var int, player2score = 0;
        var p1die;
        var p2die;
        var int, rounds;
        var int, roundcounter = 0;
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
        questions1 = ["`Instead of singing, Dru messes around with an instrument you can't fit in your pocket. What is it?`", "`What's the indie rhythm game that both Gabe and Reni can be seen gushing over?`", "`Other than bees, there is another animal which, if seen in a meme, you could say 'Oh yeah, that's a meme for Cain.' What is that animal?`", "`What was the name of the roleplay arc that featured a pen as a bad guy? (It's also the subheading for a Smash game!)`", "`Other than Pip, who else is the purest of them all?`", "`What is the name of the bird that made its debut in Angry Birds 2, and is mentioned as Chuck's sister in the game's second movie?`", "`What activity does Dru, Moon, Izzle, Hatless, Pip, Pkoby and Irri have in common? (Other than Roleplay!)`", "`Who's the person that requested the 'v!slot' command?`", "`Who's the only child from Irri and Cain's family that is NOT in Jerry's Server?`", "`What word does Izzle hate to be called, Dru wants to be called, and applies to both Korbs and Name?`", "`What's the subheading for the Mario spinoff that once had an innuendo in one of its ads?`", "`Irri's Birthday is near the end of which month?`", "`Before Reni changed his name, what nickname was he FIRST referred to as?`", "`Who was the person who had their first custom status as an animated emoji followed by the words 'love you all'?`", "`Who once had a nickname titled 'Moody Girl' in Jerry's Server?`", "`Who was the female discord user that brung the most joy in VCs when paired with Kir b in the older days? (She's also a non-trans female without an endless channel.)`", "`What was the name of the fictional character that owns the Inn? (And is an OC owned my Reni?)`", "`Fill in the blanks: 'Dys' character, known as 'Dyshero' was formerly called _______ Hero before his sprite got updated to what we know today.'`", "`What is the name of the cartoon that was shown on Disney Channel which had over 300 songs?`", "`What is the subheading for the Smash game which had a gliding mechanic for winged characters?`", "`What is the nickname for the roleplayer who disagrees with the off-topic rule more than the others? (His nickname is also an ammo for bows.)`", "`Fill in the blank: 'What does Mr. Game and Watch, Lucina, and Paper Mario have in common? Well, for one thing, they're all ____.'`", "`During the time when Mimik first changed his name to Reun, he also changed the name of his endless to encourage everyone else to mention him by the name 'Reun'. What was the name of his endless channel at that time?`", "`What is the name of the Mario spinoff that contained an underwater section for Bowser's Castle?`",  "`In the Mario Kart Wii's Instruction Booklet, at the last page which shows a picture of the gang in a race, what item is Bowser holding?`", "`Who is 'Gerald' in Jerry's Server?`", "`Who has an endless channel with the discription saying 'I guess this is kinda the unofficial Smash channel? Working on backlog though so it isn't fully smash stuff.'?`", "`Other than 'pure', what's another adjective people use for Pip, even though she sometimes doesn't like to be called that word?`", "`Who's birthday is on the day before Halloween?`", "`What is the item that is seen on a Pixar logo?`", "`Who was the female discord user that once got Dru upset (When he was known as the Galactic Nova) because the chat exploded on her appearance?`", "`Who is the discord user that has the word 'waifu' in a strikethrough in their personal command?`", "`Fill in the blank: 'Despite not being the official name, the Nintendo Discord server can be mentioned as Irri's _____.'`", "`Izzle's roleplay character can be argued to be similar to TruDru because she can be seen holding an art supply. What is it?`", "`Other than Gabe, who else is planning the creation of a game in Jerry's Server?`", "`What is the name of the command that requires you to get 20 fruits in a row to win?`", "`What weapon does Joker use in his neutral special in Smash?`", "`On the (former) Nintendo Music Stream, which character gif isn't taken from an official Nintendo game?`", "`What is the subheading for the WarioWare game which included both Tilting and Touching as game input?`", "`Other than doors, what method of travel in the same subarea is available in Super Mario 3D World's theme in Super Mario Maker 2?`", "`What song did Jimbo sing that was then shown in Jerry's YouTube Channel?`", "`Which person in Irri's Harem can be seen often using the joke 'Your Mom' in VCs?`", "`Who streams the most in #secret-base?`", "`What is the name of the urban location that contains a stream of water which is infamous for a man falling in?`", "`What is Jet's new nickname?`", "`Who's the anime girl that has a recent meme of her walking around Minecraft, and various other places? (She comes from a song!)`", "`Who once called themself 'the man behind the slaughter.'?`", "`Who's most likely to say 'Ok Dru' when Dru says something in a VC?`", "`Who is our lord and saviour?`", "`Fill in the blanks: ___ is best in. gaem.`", "`Is Name cute?`", "`Fill in the blanks: Hoes ___!`", "`If you're at a urinal and you see a picture of Shadow the Hedgehog, what words are most likely to be seen above him?`", "`What do you call a guy, two guys, two guys, one falls?`", "`Phobos' 'RIP AND TEAR' command is a reference to what game series?`", "`In hentai, what does a 18-year old sister call her brother before smut happens?`", "`What board game has you to become a simp for a queen figure?`", "`What's the name of Terry Bogard's dog?`", "`Who once celebrated Izzle's death?`", "`Fill in the blanks: CAN'T ESCAPE FROM CROSSING ____.`", "`What would be the first word you will hear when you play the song 'Mass Destruction'?`",  "`What adjective does Moon (alongside Ghost) normally call Dru?`", "`Who's the OG hottie that will normally have a pfp of Celeste?`", "`What block has the power to nuke your house if you click on it 5 times with Glowstone?`", "`Which indie game allows you to pick up and keep a female character's underwear?`", "`What fictional character makes TruthTomato feel happy?`", "`Who can show you how to scratch it?`", "`Who's is Moon's waifu that can stab herself if pressured enough by loving someone?`", "`Who is referred to as 'The Pussy Destroyer'?`"]
        answers1 = ["piano", "rhythm doctor", "duck", "ultimate arc", "pkoby", "silver", "drawing", "korbs", "jimbo", "furry", "strikers", "november", "mimik", "ender", "jet", "maeva", "vis", "gameboy", "phineas and ferb", "brawl", "arrow", "flat", "call me reun", "mario kart 7", "blue shell", "mee6", "rb", "cute", "dru", "lamp", "florp", "moon", "harem", "paintbrush", "pip", "gayslots", "gun", "yoshi", "gold", "warp box", "photograph", "ellie", "vessel", "lego city", "phobos", "mio", "snoop", "ghost", "jesus christ", "dmc", "yes", "mad", "nice cock", "loss", "doom", "onii-chan", "chess", "buster wolf", "kir b", "fate", "baby", "simp", "jasper", "respawn anchor", "cave story", "isabelle", "thanos", "yuri", "moon"]

        ladderA = [2, 7, 8, 15, 21, 28, 36, 51, 71, 78, 87];
        ladderB = [38, 14, 31, 26, 42, 84, 44, 67, 91, 98, 94];
        snekA = [16, 46, 49, 62, 64, 74, 89, 92, 95, 99];
        snekB = [6, 25, 11, 19, 60, 53, 68, 88, 75, 80];
        start = 0;
        path = 0;

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

        
        
        bot.on('message', message=> {
            
            let args = message.content.substring(PREFIX.length).split(" ");
            if (message.author.bot) return;
        
            if (message.content.startsWith(PREFIX)){
                switch (args[0]){
        
                    case 'list':
                        message.channel.sendMessage("```May the Games Begin! \n \nCURRENT GAME LIST\n\nemoji - Guess that Emoji!\ngayslots - The gayest of slots, it makes sense to be here...kinda.\ntrivia - You think you're a true Discord boomer? Try out these questions about the past!```");
                        break;

                    case 'trivcheck':
                        message.channel.send("There are **"+questions1.length+"** trivia questions with **"+answers1.length+"** answers.")
                    break;
        
                    case 'emoji':
                            emoid = message.channel.id;
                        message.channel.sendMessage("Let's go! Can you guess what this means?")
                            emogi = 35;
                            var emo = Math.floor (Math.random() * (emogi - 1 + 1)) +1;
                            switch (emo) {
                                case 1:
                                     message.channel.sendMessage("🎸 ✅");
                                     message.channel.sendMessage("`---- ------`");
                                     emoques = 1;
                                     break;
        
                                case 2:
                                    message.channel.sendMessage("💥🔫🐉");
                                    message.channel.sendMessage("`---- -----`");
                                    emoques = 2;
                                    break;
        
                                case 3:
                                    message.channel.sendMessage("🍕 🕰");
                                    message.channel.sendMessage("`----- ----`");
                                    emoques = 3;
                                    break;
        
                                case 4:
                                    message.channel.sendMessage("🌈 🛣");
                                    message.channel.sendMessage("`------- ----`");
                                    emoques = 4;
                                    break;
        
                                case 5:
                                     message.channel.sendMessage("🌍🛣, 🏠⬅🚶");
                                     message.channel.sendMessage("`---- --------`");
                                     emoques = 5;
                                     break;
        
                                case 6:
                                     message.channel.sendMessage("⛰🍓💙");
                                     message.channel.sendMessage("`-------`");
                                     emoques = 6;
                                     break;
        
                                case 7:
                                     message.channel.sendMessage("☁🎵☁");
                                     message.channel.sendMessage("`------ ------`");
                                     emoques = 7;
                                     break;
        
                                case 8:
                                     message.channel.sendMessage("☕");
                                     message.channel.sendMessage("`---`");
                                     emoques = 8;
                                     break;
        
                                case 9:
                                    message.channel.sendMessage("🍽🎮");
                                    message.channel.sendMessage("`------ -----`");
                                    emoques = 9;
                                    break;
        
                                case 10:
                                     message.channel.sendMessage("💥🕛💥");
                                     message.channel.sendMessage("`----- -- --- ----`");
                                     emoques = 10;
                                     break;
        
                                case 11:
                                    message.channel.sendMessage("🐱🕰");
                                    message.channel.sendMessage("`-------- ----`");
                                    emoques = 11;
                                    break;
        
                                    case 12:
                                    message.channel.sendMessage("🚶🎸");
                                    message.channel.sendMessage("`---- -----`");
                                    emoques = 12;
                                    break;
        
                                    case 13:
                                    message.channel.sendMessage(":punch: :negative_squared_cross_mark: :laughing: ");
                                    message.channel.sendMessage("`-------- --- ----------`");
                                    emoques = 13;
                                    break;
        
                                    case 14:
                                    message.channel.sendMessage(":penguin: :loud_sound: ");
                                    message.channel.sendMessage("`--------- -------`");
                                    emoques = 14;
                                    break;
        
                                    case 15:
                                    message.channel.sendMessage(":grin: :bee:");
                                    message.channel.sendMessage("`----- ---`");
                                    emoques = 15;
                                    break;
        
                                    case 16:
                                    message.channel.sendMessage(":bee: :cake: :bee:");
                                    message.channel.sendMessage("`------- ----`");
                                    emoques = 16;
                                    break;
        
                                    case 17:
                                    message.channel.sendMessage(":crab: :crab: :crab:");
                                    message.channel.sendMessage("`---- ----`");
                                    emoques = 17;
                                    break;
        
                                    case 18:
                                    message.channel.sendMessage(":fork_knife_plate: :watermelon:");
                                    message.channel.sendMessage("`--------`");
                                    emoques = 18;
                                    break;
        
                                    case 19:
                                    message.channel.sendMessage(":goat: :octopus: :love_letter: :heart_eyes_cat:");
                                    message.channel.sendMessage("`---------`");
                                    emoques = 19;
                                    break;
        
                                    case 20:
                                    message.channel.sendMessage(":tomato: :shallow_pan_of_food:");
                                    message.channel.sendMessage("`------ ----`");
                                    emoques = 20;
                                    break;
        
                                    case 21:
                                    message.channel.sendMessage(":dancer: :alarm_clock: :arrow_forward: :skull_crossbones:");
                                    message.channel.sendMessage("`----- ----- --- --- ----`");
                                    emoques = 21;
                                    break;
        
                                    case 22:
                                    message.channel.sendMessage(":sheep: :zzz:");
                                    message.channel.sendMessage("`------ ------`");
                                    emoques = 22;
                                    break;
        
                                    case 23:
                                    message.channel.sendMessage(":tophat: :hourglass:");
                                    message.channel.sendMessage("`- --- -- ----`");
                                    emoques = 23;
                                    break;
        
                                    case 24:
                                    message.channel.sendMessage(":raised_hand: :neutral_face: :raised_hand:");
                                    message.channel.sendMessage("`--- ----- ---'-- ----?`");
                                    emoques = emo;
                                    break;
        
                                    case 25:
                                    message.channel.sendMessage(":one: :one: :crown:");
                                    message.channel.sendMessage("`------ ----`");
                                    emoques = emo;
                                    break;
        
                                    case 26:
                                    message.channel.sendMessage(":ballot_box: :left_right_arrow: :ballot_box:");
                                    message.channel.sendMessage("`---- ---`");
                                    emoques = emo;
                                    break;
        
                                    case 27:
                                    message.channel.sendMessage(":checkered_flag: :snail:");
                                    message.channel.sendMessage("`-----`");
                                    emoques = emo;
                                    break;
        
                                    case 28:
                                    message.channel.sendMessage(":star: :mushroom: :japanese_castle:");
                                    message.channel.sendMessage("`----- ----- --`");
                                    emoques = emo;
                                    break;
        
                                    case 29:
                                    message.channel.sendMessage(":sunrise_over_mountains: :clock9: :calendar_spiral:");
                                    message.channel.sendMessage("`--'- - -'----- -- - --------`");
                                    emoques = emo;
                                    break;
        
                                    case 30:
                                    message.channel.sendMessage(":pensive: :sunny: :point_right: :shopping_bags:");
                                    message.channel.sendMessage("`- --- -------- -- - ---`");
                                    emoques = emo;
                                    break;
        
                                    case 31:
                                    message.channel.sendMessage(":cross: :cloud_rain: :earth_africa:");
                                    message.channel.sendMessage("`- ----- --- ----- ---- -- ------`");
                                    emoques = emo;
                                    break;
        
                                    case 32:
                                    message.channel.sendMessage(":mushroom: :shopping_bags: :book:");
                                    message.channel.sendMessage("`---- ---- -----`");
                                    emoques = emo;
                                    break;
        
                                    case 33:
                                    message.channel.sendMessage(":newspaper: :mushroom: :calendar: :door:");
                                    message.channel.sendMessage("`----- -----: --- -------- ---- ----`");
                                    emoques = emo;
                                    break;
        
                                    case 34:
                                    message.channel.sendMessage(":apple: :peach: :jeans:");
                                    message.channel.sendMessage("`----- ------ -----`");
                                    emoques = emo;
                                    break;
        
                                    case 35:
                                    message.channel.sendMessage(":sunglasses: :one: :two: :video_game: :computer:");
                                    message.channel.sendMessage("`-------------.---`");
                                    emoques = emo;
                                    break;
        
        
                                    
                                 }
                            break;
        
                        
        
        
                        case 'emojilost':
                            emoquest = 0;
                            message.channel.sendMessage("Too bad!");
                        break;
        
                        case 'trivialost':
                            triv = 0;
                            message.channel.sendMessage("Too bad...");
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
                                    message.channel.sendMessage("🎰 `Welcome to Jack's Hell!` 🎰 \n**" +message.author.username+"** rolled the impossible slots...\n   ["+slotfruits[imos1]+" "+slotfruits[imos2]+" "+slotfruits[imos3]+" "+slotfruits[imos4]+" "+slotfruits[imos5]+" "+slotfruits[imos6]+" "+slotfruits[imos7]+" "+slotfruits[imos8]+" "+slotfruits[imos9]+" "+slotfruits[imos10]+" "+slotfruits[imos11]+" "+slotfruits[imos12]+" "+slotfruits[imos13]+" "+slotfruits[imos14]+" "+slotfruits[imos15]+" "+slotfruits[imos16]+" "+slotfruits[imos17]+" "+slotfruits[imos18]+" "+slotfruits[imos19]+" "+slotfruits[imos20]+"]")
                                    if (slotfruits[imos1] === slotfruits[imos2] === slotfruits[imos3] === slotfruits[imos4] === slotfruits[imos5] === slotfruits[imos6] === slotfruits[imos7] === slotfruits[imos8] === slotfruits[imos9] === slotfruits[imos10] === slotfruits[imos11] === slotfruits[imos12] === slotfruits[imos13] === slotfruits[imos14] === slotfruits[imos15] === slotfruits[imos16] === slotfruits[imos17] === slotfruits[imos18] === slotfruits[imos19] === slotfruits[imos20]) {
                                        message.channel.sendMessage("YOU'VE ***GOTTA BE KIDDING ME!***\nYou should prob ping Gabe for a reward. This wasn't expected to happen.")
                                    }
                                    else {
                                        message.channel.sendMessage("Nice! You lost! That was expected...")
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
                                    if (me == null){
                                        me = message.author.username;
                                    }

                                    message.channel.sendMessage("**"+me+"** takes the lead and the gang follows...");
                                    sp = Math.floor ((Math.random() * d6.length));
                                    path += d6[sp];
        
                                    for (i = 0; i < ladderA.length; i++){
                                        if (path == ladderA[i]){
                                            message.channel.sendMessage("WHOA! The gang found a ladder! They go from **"+ladderA[i]+"** to **"+ladderB[i]+"**!!")
                                            path = ladderB[i];
                                        }
                                        
                                    }
        
                                    for (i = 0; i < snekA.length; i++){
                                        if (path == snekA[i]){
                                            message.channel.sendMessage("**HOLY CRAP!** IT'S A SNEK! The gang gets ambushed at **"+snekA[i]+"** and got yeeted to **"+snekB[i]+"**!!")
                                            path = snekB[i];
                                        }
                                    }
        
                                    if (path >= 100){
                                        message.channel.sendMessage("WOOOO! The gang successfully made it out alive! Let's do it again...")
                                        path = 0;
                                    }
                                    else{
                                        message.channel.sendMessage("The gang stops at **"+path+"** for a lovely campfire.")
                                    }
                                        
                                    
                                       break;
        
        
                            case '9+':
                                message.channel.send("Welcome to 9+! A simple card game where you cannot exceed the number 9!\n\n```Commands: \nv!9+create - Create a room.\nv!9+join - Join an existing room.\nv!9+start - Begin the match\nv!9+cancel - Cancel a match.```");
                                break;

                            case '9+create':
                                if (a9match == true){
                                    message.channel.sendMessage("Oops! It seems like a room is already created! \n`You can join using 'v!9+join'.`")
                                }
                                else {
                                    message.channel.sendMessage("Alright! Creating a room!")
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

                            case '9+cancel':
                                if (a9match == true && message.channel.id == a9channel){
                                message.channel.send("`Scrapping the match...`")
                                end9Match();
                                }
                                else {
                                    message.channel.send("`There was an error while doing this.`")
                                }
                                break;

                            case '9+start':
                                if (a9match == true && message.channel.id == a9channel){
                                    message.channel.send("`Let's begin!`")
                                    shareOutCards();
                                    a9game = true;
                                    begin9Match();
                                }
                            break;



                            case 'o64':
                                message.channel.send("Welcome to o64! A game where you can't trust ANYBODY.\n\n```Game Hosting Commands:\nv!o64create - Create a Room\nv!o64join - Join a Room\nv!o64start - Start the Game\nv!o64stop - Cancel the Game\n\nIn-Game:\nv!o64w - Claim to be over 64```");
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
                                else {
                                    dm = 0;
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










                           




        
        
                            case 'trivia':
                                    quid = message.channel.id;
                                message.channel.sendMessage("Alright! Let's see how much you know.")
                                questions = questions1.length;
                            var quests = Math.floor (Math.random() * (questions - 1 + 1)) +1;
                            message.channel.send(questions1[quests]);
                            trivans = answers1[quests];
                            
                            
                            break;
        
                            case 'mmtrivia':
                                if (mmgame === true) {
                                    message.channel.sendMessage("A game is already in session!");
                                }
                                else{
                                 message.channel.sendMessage("Searching via VirusNet...")
                                mmA = message.channel.id;
                                mmB = Math.floor ((Math.random() * mmids.length));
        
                                while (mmids[mmB] === mmA){
                                    mmB = Math.floor ((Math.random() * mmids.length));
                                }
        
        
                                bot.channels.get(mmA).send("`Opponent found! Waiting for response... \n \n (You can type 'v!decline' to cancel the game.)`")
                                bot.channels.get(mmids[mmB]).send("```This channel has been picked for a round of trivia! Do you accept? \n\n(Type 'v!accept to accept the challenge)\n(Type 'v!decline' to decline the challenge.)```");
                                mmchat = true;
                            }
        
                            break;
        
                            case 'decline':
                                if (mmchat == false)
                                { message.channel.send("There's no match to cancel!");}
                                else {
                                if (mmA !== undefined && mmids[mmB] !== undefined) {
                                    if (message.channel.id === mmids[mmB]){
                                    bot.channels.get(mmA).send("`The second party has declined!`");
                                    bot.channels.get(mmids[mmB]).send("`You have declined the challenge!`")
                                    mmgame = false;
                                    mmchat = false;
                                }
                                else if (message.channel.id === mmA) {
                                    bot.channels.get(mmA).send("`You have canceled the challenge!`");
                                    bot.channels.get(mmids[mmB]).send("`Nevermind...the challenge was canceled`")
                                    mmgame = false;
                                    mmchat = false;
                                }
                            }
                                
                            }
                            break;
        
                            case 'accept':
                                if (mmA !== undefined && mmids[mmB] !== undefined) {
                                    if (message.channel.id === mmids[mmB]){
                                    bot.channels.get(mmA).send("`Challenge accepted! Let's begin!`");
                                    bot.channels.get(mmids[mmB]).send("`Alright! Let's begin!`")  
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
                                    bot.channels.get(mmA).send("`The match has been canceled.`");
                                    bot.channels.get(mmids[mmB]).send("`The match has been canceled.`");
                                    mmchat = false;
                                    mmgame = false;
                                    mmnum = 11;
                                }
                                    break;
        
        
        
        
                           
        
                }
        
        
        
                 
        
        
        
                
            }
        
            if (message.channel.id === mmA && mmchat === true && message.author.id !== BotID && !message.content.includes(mmoans[mmans])){
                bot.channels.get(mmids[mmB]).send("[CHAT] "+message.author.tag +": "+message);
            }
            
            if (message.channel.id === mmids[mmB] && mmchat === true && message.author.id !== BotID){
                bot.channels.get(mmA).send("[CHAT] "+message.author.tag +": "+message);
            }
        
            function nextQuestion(){
            
                    if(mmnum < 10) {
                        mmpicked = Math.floor ((Math.random() * mmoquests.length));
                        bot.channels.get(mmA).send(mmoquests[mmpicked]);
                        bot.channels.get(mmids[mmB]).send(mmoquests[mmpicked]);
                        mmans = mmpicked;
                    }
                }
            
        
        
            if (message.content.toLowerCase().includes(mmoans[mmans]) && mmA !== undefined && mmids[mmB] !== undefined && mmgame === true) {
                if (message.channel.id === mmA && message.author.id !== BotID) {
                    bot.channels.get(mmA).send("**"+message.author.username+"** got the correct answer!")
                    bot.channels.get(mmids[mmB]).send("**"+message.author.username+"** got the correct answer!")
                    mmAscore++;
                }
                else if (message.channel.id === mmids[mmB] && message.author.id !== BotID) {
                    bot.channels.get(mmA).send("**"+message.author.username+"** got the correct answer!")
                    bot.channels.get(mmids[mmB]).send("**"+message.author.username+"** got the correct answer!")
                    mmBscore++;
                }
        
                mmans = 0;
                mmnum++;
                nextQuestion();
            }
        
            if (mmnum >= 10 && mmgame === true){
                bot.channels.get(mmA).send("`The results are in! The challenge is over.`")
                bot.channels.get(mmids[mmB]).send("`The results are in! The challenge is over.`")
                if (mmAscore > mmBscore) {
                    bot.channels.get(mmA).send("`This channel wins!` :tada:")
                    bot.channels.get(mmids[mmB]).send("`The opposing party wins...Too bad!`")
                }
                if (mmAscore < mmBscore) {
                    bot.channels.get(mmA).send("`The opposing party wins...Too bad!`")
                    bot.channels.get(mmids[mmB]).send("`This channel wins!` :tada:")
                }
                if (mmAscore === mmBscore) {
                    bot.channels.get(mmA).send("`It's a draw! GG!`")
                    bot.channels.get(mmids[mmB]).send("`It's a draw! GG!`")
                }
        
                bot.channels.get(mmA).send("`The game has ended. Thanks for playing! Logging off...`")
                bot.channels.get(mmids[mmB]).send("`The game has ended. Thanks for playing! Logging off...`")
        
                mmchat = false;
                mmgame = false;
                mmnum = 11;
        
        
            }
        
        
        
            //emoji
            if (emoid === message.channel.id && message.author.id !== BotID){
                if (message.content.toLowerCase().includes("okay guitar") && emoques === 1) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("onix shots") && emoques === 2) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out, you RP bommer!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("pizza time") && emoques === 3) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! Now, it's Pizza Time!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("rainbow road") && emoques === 4) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! MK8's is the worst, tho.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("west virginia") && emoques === 5) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the song! MOUNTAIN MAMAAAAAA")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("celeste") && emoques === 6) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the word! What a great indie...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("rhythm heaven") && emoques === 7) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! This series is underrated.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("jet") && emoques === 8) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the word! Poor Jet...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("hunger games") && emoques === 9) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! WHEN IS THE NEXT ONE?")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("lobby of the gods") && emoques === 10) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! Nova needs a nurf.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("galactic nova") && emoques === 11) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! What a neko clock.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("vibe check") && emoques === 12) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! Time for a vibe check!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("knuckles the unchuckled") && emoques === 13) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! Oh no.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("vibrating penguin") && emoques === 14) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("happy bee") && emoques === 15) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! What a happy boi...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("beesday cake") && emoques === 16) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("crab role") && emoques === 17) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! Now, let's leave Reun alone.")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("eatmelon") && emoques === 18) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the emoji from emojis!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("samfuller") && emoques === 19) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the legend!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("tomato soup") && emoques === 20) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! Irri sure does love her soup...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("dance until you are dead") && emoques === 21) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! Dance break!")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("sleepy sheepy") && emoques === 22) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! Night, Night, sheepy...")
                   emoques = 0;
               }
           
               if (message.content.toLowerCase().includes("a hat in time") && emoques === 23) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found the words! What a great game...")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("you think you're safe?") || message.content.toLowerCase().includes("you think youre safe")) && emoques === 24) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! But I have unfortunate news. You failed the vibe check.")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("double king") && emoques === 25) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! Now I'm hungry...")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("warp box") && emoques === 26) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! Thank gosh it's not a Mystery Box!")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("turbo") && emoques === 27) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! What a fast boi")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("super mario 64") && emoques === 28) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! Here we go! :star:")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("it's 9 o'clock on a saturday") || message.content.toLowerCase().includes("its 9 oclock on a saturday")) && emoques === 29) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! What, you don't know the song?")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("i got sunshine in a bag") && emoques === 30) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! Ah...depression amirite?")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("i bless the rains down in africa") && emoques === 31) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out!")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("mega mall story")) && emoques === 32) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out!")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("paper mario: the thousand year door") || message.content.toLowerCase().includes("paper mario the thousand year door") || message.content.toLowerCase().includes("ttyd")) && emoques === 33) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! Great Game.")
                   emoques = 0;
               }
        
               if (message.content.toLowerCase().includes("apple bottom jeans") && emoques === 34) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! Shorty got them-")
                   emoques = 0;
               }
        
               if ((message.content.toLowerCase().includes("coolmathgames.com") || message.content.toLowerCase().includes("Coolmathgamescom")) && emoques === 35) {
                   message.channel.sendMessage("Well done, **"+message.author.username+"**! You found it out! Let's play some!")
                   emoques = 0;
               }
           }
        
        
        
        
        
        
        
        
        
        
        
        
           //trivia
           if (quid === message.channel.id && message.author.id !== BotID){
                if (message.content.toLowerCase().includes(trivans))
                {
                    message.channel.sendMessage("**"+message.author.username+"**, you are correct!")
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
                            bot.users.get(rawplayers9[y]).send("You're out of cards. Refreshing...");
                            carda = Math.floor (Math.random() * cards9.length);
                            cardb = Math.floor (Math.random() * cards9.length);
                            cardc = Math.floor (Math.random() * cards9.length);
                            cardd = Math.floor (Math.random() * cards9.length);

                            innercardpile[y] = [cards9[carda], cards9[cardb], cards9[cardc], cards9[cardd]];

                            bot.users.get(rawplayers9[y]).send(innercardpile[y]);
                        }
                        else if (onegone == true){
                            i = 5;
                        }
                        else{
                        bot.users.get(rawplayers9[y]).send("`Your cards:` \n"+ycp);
                        i = 5;
                        }
                    }

                }
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
                    message.channel.sendMessage("You're already added to the list!");
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
                    bot.users.get(rawplayers9[i]).send("`Your cards:` \n"+innercardpile[i]);
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
                bot.channels.get(a9channel).send("**"+players9[j]+"**, it's your turn!")
                }
            }

            function addCard(card){
                maintotal += card;
                bot.channels.get(a9channel).send("A "+card+" card was added. \n`The total is now: "+maintotal+"`");
                //message.channel.send("A "+card+" card was added. \n`The total is now: "+maintotal+"`")
                checkTotal();
            }

            function checkTotal(){
                if (maintotal > 9){
                    message.channel.send("**The limit of 9 was exceeded. "+players9[j]+" has been removed.** \nThe board will now reset.")
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
               if (message.author == players64[dm] && args[1] == undefined){
                   if (isNaN(message)){
                       message.channel.send("That's...not even a number. \n`Provide a number between 1-10.`")
                   }
                   else {
                       ln = message;
                       if ((ln < 1) || (ln > 10)){
                           message.channel.send("No one's gonna believe that.\n`Provide a number between 1-10.`")
                       }
                       else{
                           ln = cards64.indexOf(message.cleanContent);
                           o64liedeck += cards64[ln];
                        bot.channels.get(o64channel).send("**"+players64[dm].username+"** has claimed to place a **"+cards64[ln]+".**\n`The total is now told to be: "+o64liedeck+".`")
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
                    message.channel.sendMessage("You're already in the player list.");
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

                bot.channels.get(o64channel).send("It's **"+players64[dm].username+"'s** turn to pick a card...")
                tn = cards64[o64number];
                o64truedeck = o64truedeck + tn;
                bot.users.get(players64[dm].id).send("You got a **"+tn+"!** \nNow...what do you tell everyone it is?")
                
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
                        message.channel.send("`Oh, too bad! The real deck is NOT over 64 yet!` \n**"+players64[claim].username+" has been removed for lying.**")
                        players64.splice(claim, 1);
                        check64Players();
                    }
                    else if (o64truedeck > 64){
                        message.channel.send("`Hold the phone! The deck IS truly over 64!\nThe game is over!`\n**"+players64[claim].username+" WINS!!!** :tada:")
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
        
            
        
            
            
        }
        );
        
        
        

bot.login(process.env.BOT_TOKEN);
