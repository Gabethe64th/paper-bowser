const Discord = require('discord.js');
const { Client, Attachment, Message } = require('discord.js');
const bot = new Discord.Client();



const PREFIX = 'v!';


//const channel = client.channels.find('roleplay-off-topic', channelName)
//channel.send(message)

var version = 'Version 1.5.0';
var pass;
var int, key = 0;
/*
0 = allows herb chains
1 = herb, used by Gabe
2 = breaks herb chains
*/
var boolean, war = false;
var boolean, rpnotif = true;
olds = 129;
deds = 485;
var trail = 0;
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

bot.on('ready', () =>{
    console.log('Let er rip!');
    //bot.channels.get('636573475993288734').sendMessage("`VirusBot has been rebooted.`")
    bot.user.setActivity("VirusBot is online! >:)");
})





bot.on('message', message=> {
    
    let args = message.content.substring(PREFIX.length).split(" ");

    
    
    

    if (message.content.startsWith(PREFIX)){

    switch(args[0]){
        case 'ping':
            // message.channel.sendMessage('Pong!');
            message.reply('Pong!');
        break

        case 'help':
            message.channel.sendMessage('There is no help. Only chaos.');
            break;
        
        case 'info':
            if(args[1] === 'version'){
                const embed = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#00FA9A')
                .setTitle("Current Bot Version")
                .setDescription("I'm on "+version+ "!")
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
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
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
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
                .setDescription("SURPRIIIIIISE! VB Ver. 1.5 is LIVE! Welcome to the new age! 😎")
                .addBlankField()
                .addField("Embeds!", "We're slicker, better, and a bit more pleasing to the eyes! The whole world could use this kinda beauty...")
                .addBlankField()
                .addField("Tweaks!", "A few commands have been reviewed and tweaked a bit. I just want peace!")
                .addBlankField()
                .addField("Writing and Reading!", "Commands like 'count' and 'todaysong' won't reset if the bot reboots anymore! The Storage Room took a while to build.")
                .addBlankField()
                .addField('Code Tweaks!', "Questions have never been simplier to add!\n[On version 1.5.2, the VirusGames should also be up-to-date! Stay tuned! ;)]")
                .addBlankField()
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                message.channel.send(embed);
            }
            else if(args[1] === 'bot'){
                const embed = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#00FF00')
                .setTitle("Who am I?")
                .setDescription("VirusBot is a bot. Get your facts straight.")
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                message.channel.send(embed);
            }
            else {
                _info = "Current info available: \n\n-version: The current version of the bot.\n-nupdate: Provides little information about the next upcoming update.\n-bot: Gives info on the bot. \n-oldies: Shows how many pictures are in the 'oldie' command.\n-changelog: See what new features got added to the bot! \n\n[Please leave a space between the command and the selected word.]";
                const embed = new Discord.RichEmbed()
                .setAuthor("Requested by "+message.author.username, message.author.avatarURL)
                .setColor('#00BFFF')
                .setTitle("Information Command's Options")
                .setDescription(_info)
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
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

        case 'clear':
            if(!args[1]) return message.reply('Too much clutter? I gotcha. Just give me a number next time.')
            message.channel.bulkDelete(args[1]);
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
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                message.channel.send(embed);
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
            message.channel.send("PUT ME IN THE COMMUNITY ART 2.0 YOU FRICKIN' NERD!!!");
            break

        case 'dyst':
            message.channel.sendMessage("Hey guys,\n\nas you might have noticed, my main Discord account has been disabled, and is currently under investigation. There is a high chance it will be permanently disabled.\n\nWhat about this Discord?\nIf I really get banned, @Deleted User and my other alt accounts will be banned from Discord. Creating any further accounts would be seen as ban evasion, so they will be banned as well. I am basically gone from Discord then. I will not return most likely. Might visit once in a while.\nI will give admin powers to Soulavenger, after that he will be able to claim ownership of the server. He and the mods will lead this community equally. Anything beyond that is nothing I could do anything about. They're in your hands then, and I think it will be okay. If you're worried about the community disappearing I would advise you to make little servers with your best friends yourself.\nI do not think this discord will have any relation to the stream anymore then, however.\n\nWhat about the stream?\nThat's the big question here. Discord is very essential for my work, for communication/organization, and so on. I think many of you would like to see me continue doing the stream, but I am not sure how feasible it would be. However, I have no plans to turn it off anytime soon, so don't worry about that. I am also not sure what the mods think about modding the stream at this point. I know some of them already do not want anything to do with me anymore, unfortunately. I would like to keep it running for as long as possible, but I just don't know how I could do it without Discord... I'll continue thinking about this.\nI'm sorry I'm not talking much more about why I'm getting banned, as it is a fairly private issue.\n\nI know a statement like this doesn't really make anything better. I'm sorry for that. I feel like this account could be disabled at any time, so I wanted to at least say something.");
            message.channel.sendMessage("I apologize to all of you for letting things turn out this way. \n\nIf you have any questions I'll be in #ask-mods for a while.")
            break

        case 'cain':
            message.channel.send(message.channel + " indeed.");
            break

        case 'snoop':
            message.channel.send("persona sucks lmao.");
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
                message.channel.sendMessage("Please don't bully Irri. They deserve more love for all they've done. <3");
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
                message.channel.send('Please, no off-topic in the roleplay. 🍵');
                break;

        case 'reun':
            message.channel.send("Don't worry, "+ message.author.username+". You're as fucked as the rest of "+message.channel.name+" if you ask who Joe is. To save yourself, please post an rp cap into <#396838771108085760> so we can either all laugh or all remind Reun that he has a fucking job as a rp manager. (Also please, don't swear in off topic. You did? What's wrong with you?) In all seriousness, I love this boi, and he's prob my fav bro to ever exist...or fav sis? :O! **PLOT TWIST!**");
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
                message.channel.send ( { files: ["./bruh (" + bruhNumber + ").jpg"]})
            break;

        case 'knux':
                const attachment = new Attachment('https://cdn.discordapp.com/attachments/606957183900450864/623665053047980082/EEWzuAuUYAI2ibf.png');
                message.channel.send("Everyone: Oh boy! I can't wait to go skiing! \nKnuckles: ");
                message.channel.send(attachment);
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
                message.channel.send("Ok, so you know those movies which has that ONE villain you love to hate, and then suddenly the villain joins the good side and now you're just straight up in love with the person? (Not LOVE love ofc cuz you can't be with a fictional character.) Meet Jet. \nJet's that kind of person you might be scared of at first, but as you get to meet them, you can't leave them alone. One of her 'special abilities' is that she can be an entire mood at times. She even had a nickname for it! She's also pretty tough and sarcastic, but the times she breaks out into a playful mood can be arguably considered to be pretty cute. (but ***DO NOT CALL HER CUTE***, or else you might end up with a gun pointed at your face.) She's no Izzle, no Moon, no Pip, nor an Irri. She's *Jet*, and I'm glad she's in the gang. Once a mood, always a mood!");
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
                            message.channel.sendMessage('**Tomato Soup** is an ongoing series about a girl named Irri who is on a quest to find the mythical tomato soup, a legendary food that has been rumoured to cure any cold. During her quest, she will meet many different friends and take a crap ton of detours from her main goal. The series is well praised for having a determined yet lovable main character alongside an unexpected plot for each episode.');
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
            message.channel.send('Senko died and I still have no idea why.')
            break;

        case 'name':
            message.channel.send("Bam. There's your ego boost. But for real, you don't know who Name is? Well, you should, since he's the one that's currently hecking Izzle.")
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
            
        
            

           case 'dedmeme':
            
                imageNumber1 = Math.floor (Math.random() * (deds - 1 + 1)) +1;
                message.channel.send ( { files: ["./ded/ded (" + imageNumber1 + ").jpg"]})
                break;

                case 'wtf':
                        wtfs = 43;
                        imageNumber2 = Math.floor (Math.random() * (wtfs - 1 + 1)) +1;
                        message.channel.send ( { files: ["./wtf/wtf (" + imageNumber2 + ").jpg"]})
                        break;

            case 'hug':
                hugs = 8;
                user = message.mentions.users.first();
                if (user !== undefined && user.id === message.author.id){
                    message.channel.sendMessage("Oh...you hugged yourself? Damn, you're lonely...")
                }
                else if (user !== undefined && user.id === '262589838958526467') {
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
                }
                
                
                else {
            message.channel.sendMessage("...but there's no one to hug! How pitiful...");
                }
            break;

            case 'call':
                message.channel.sendMessage("We're still preparing this function, so stay tuned!");
                /*if (callkey === true) {
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
                    */
                break;
                

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
            if (message.author.id === '373231385512640513'){
                message.channel.send("Perfection. There's the least faveourite guy we know and love!")
            }
            else {
            message.channel.send("You bitch. You absolute fucking madlad. Who do you think you are? Piss off. I prefer for this command to be used by the REAL legend.")
            }
            break;

        case 'pip':
            message.channel.send("Ah, I see you too are a person of culture, "+message.author.username+". Indeed, Pip is the purest princess of them all. She also likes to step in channels at it's lewdest times :^). Be sure to check out <#475017241344344107> for the best FE art and support her ideas! [NOT SPONSORED]")
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
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                message.channel.send(serverembed);
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
            message.channel.send("This guy's a real epik gaymer. Just spittin' facts.")
            break;

        case 'moon':
            message.channel.sendMessage("Nice choice. Moon is one of those friends you didn't know at first existed and now you're happy to have in your life. She's also a big mood. But be careful, Moon has an edgy side you might not want to generally encounter at times. ~~That's why she's perfect for a waifu!~~ Three cheers for Moon! (And someone, please give her a hug when necessary.)")
            break;

        case 'pkoby':
            message.channel.sendMessage("Now THIS is one pure guy, including as a male! That's rare these days! You keep being you, Pkoby. You're saving the world one DM at a time.")
            break;

        case 'ender':
            message.channel.sendMessage("We need to help Ender! He made a weird deal with the devil, and now he's dying multiple times due to a hecking candy girl with a gingerbread castle! Somebody just EAT it already!")
            break;

        case 'korbs':
            message.channel.sendMessage("It's our boi, Korbs! Who never stopped being epic from Day 1. Sure, he's a furry now, and I blame Izzle for that even though that joke was made *way* before she joined Irri's Harem, but you just can't resist from wanting to hug this madlad! COME 'ERE, KORBS! LET ME SQUEEZE YOU!")
            break;

        case 'prince':
            message.channel.sendMessage("Prince has earned the achievement of making it through Chapter 3's B-Side. I bet you can't do THAT first try! Don't worry, neither could he. :^). \nLoBe ya, Prince.")
            break;

        case 'eliz':
            message.channel.sendMessage("It's highly unlikely this command would be used by Ellie herself, so lemme spill some beans. Eliz deserves a hecka ton of credit for going through a crap ton of stuff on Discord and STILL being very active on the platform. That requires some massive balls. Ellie, along wih her redacted E2, are a huge bundle of joy when it comes to simply nerding out about Nintendo and AHIT stuff. Sure, she might be a bit aggressive at times, but it's worth it when you realise how much of a hecking fool you are with your wrong gaming facts. Get outta here! Sometimes you just gotta give E a bigge hug (If you can, heh.) for all she has survived through. <3")
            break;

        case 'nokobo':
            message.channel.sendMessage("Well, well, well. If it isn't the boomer himself... You may be a rusty nail, Nokbok, but you still are a fantastic addition to the family! There's no one else Gabe would rather joke about Cain then die because she walked in on us other than with you! Also, please don't cancel Hobo Thursdays. Where are you gonna live after that?")
            break;

        case 'jasper':
            message.channel.sendMessage("You just asked for a very hot dutch boi. I'd be gay for him myself, but he keeps fucking dashing through my love requests with a golden strawberry.")
            break;

        case 'jacob':
            message.channel.sendMessage(":gun: BACK OFF! HE'S MINE! \n \n \n ||I mean wut no I'm not gay.||")
            break;

        case 'izzle':
            message.channel.sendMessage("Izzle is a waifu. I think...meh. It's complicated. Best not to ask.")
            break;

        case 'rowlet':
            message.channel.sendMessage("Well, what do we have here? A ROWLET? Bruh, this ain't Litten. Change save file.")
            break;

        case 'kirB':
            message.channel.sendMessage("This guy kicks Gabe's ass at Mario Maker. WHAT IS THIS TECH?!")
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
            .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
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
                    .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                    bot.users.get("178539479827611648").sendMessage(suggestEmbed);
                    break;

            case 'trailtoggle':
                if (trail === 0){
                    trail = 1;
                    message.react("📝");
                }
                else {trail = 0;
                message.react("👍")}
                break;

            case 'doit':
                message.member.voiceChannel.join();
                comPre = args[1];
                song = message.content.slice(9);
                if (song != undefined){
                    message.channel.sendMessage(comPre +"play "+song);
                setTimeout(function(){
                    message.channel.sendMessage(comPre+"1")
                    setTimeout(function(){
                        message.member.voiceChannel.leave();
                        }, 1500);
                }, 3000);
                }
                else {
                message.channel.sendMessage(comPre +"play Cock and ball torture");
                setTimeout(function(){
                    message.channel.sendMessage(comPre+"1")
                    setTimeout(function(){
                        message.member.voiceChannel.leave();
                        }, 1500);
                }, 3000);
            }
                
                break;

            /*case 'waitsong':
                    message.member.voiceChannel.join();
                    setTimeout(function(){
                        //connection.playFile('./wait.mp3');
                        message.member.voiceChannel.connection.playFile('C:/Users/wende/Desktop/Discordbotte/wait.mp3');
                        }, 1500);
                        break;
                        */
                    
            case 'getout':
                    message.member.voiceChannel.leave();
                    break;
                


        case 'commands':
            //General and Fun
            //message.channel.send("``` 《《 VIRUS COMMANDS 》》 \n\nPAGE 1. \n\n────────\n\n☆ The following commands have to be prefaced with [ v! ] .\n\n-> General Commands:\ncommands[number] - Brings up that number's page of commands.\nhi - Says hello.\nbye - Says goodbye.\nhelp - Gives help.\ninfo - Gives info.\nping - Pings you!\nme - Gives information about the command-user. \ntodaysong - Posts Today's Song \n\n-> Fun Commands:\nlove - Virus loves you back!\nhug - Hug someone! \ncall - Call a random server! [To hang up, use 'v!hang'.]\ncount - Virus starts counting - let's see how far we can go!\ntimetorockwiththebiggitybuckbumble - Virus sings the best song known to man! (Do not do this in public channels.)\nbored - Virus will cure your boredom.\nfuckyou - Why the hate? \nfacts - Virus will tell you a fact, then redact it after a while. \nslot - Feeling lucky? Take a roll in the slot machine!\nimopsslots - Feeling MORE lucky? HA! This should kill the mood...\nvibecheck - Time for a vibe check. \ndruxwario - Virus will you a story about a heartwarming event. \nts - Virus will tell you a story. Follow the initial command with a number to read the next part of the story!\nweeb - Gets Virus excited!\njoe - Joe who? \ndiscotime - It's time to pray! \npurewars - Begin the Pure Wars! \npurestandings - Shows the current standings for the Pure Wars. \nboomerpass - Get the boomer-pass, but other people can steal it.\nboomerbreak - Throw away the boomer-pass!\ndead - Did you die?\ngamestop - What will you buy?\ngay - You're looking kinda fresh doe...\nnoswears - For the one dude who keeps on swearing\ngluck - Virus wishes you good luck!\nbluck - Now you're just a horrible person...\nanalyse - Analyses a post \nBK - A command that supports trans people. \nbottomtext - Virus provides you with a bottom-text - fresh off the iron!\nedgy - Sup, ma son? \nsco - Virus will act gay for a bit. \nheylook - Hey look buddy. \nannounce - Virus has a special announcement!\n\n──────\n\nPLEASE USE [ v!commands2 ] TO VIEW THE NEXT PAGE.```");
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
                .addBlankField()
                .addField("End of page.", "Please use [v!commands2] to view the next page.")
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                message.channel.send(embed1);
            break;
        
        case 'commands2':
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
                .addBlankField()
                .addField("End of page.", "Please use [v!commands3] to view the next page.")
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                message.channel.send(embed2);
            break;

        case 'commands3':
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
                .addBlankField()
                .addField("End of page.", "Please use [v!commands4] to view the next page.")
                .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                message.channel.send(embed3);
            break;

            case 'commands4':
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
                        .addBlankField()
                        .addField('**Personal Commands** 👤', 'Commands about friends, for friends.')
                        .addBlankField()
                        .addField('The following people have their own commands:', '• dru\n• moon\n• pkoby\n• kirB\n• ender\n• korbs\n• prince\n• eliz\n• nokobo\n• jasper\n• jacob\n• ghost\n• goat\n• name\n• izzle\n• ethan\n• cain\n• kevin\n• snoop\n• jet\n• rowlet\n• irri\n• pip\n• mimik\n• reun\n• knux\n• dyst', true)
                        .addBlankField()
                        .addField("End of page.", "Please use [v!commands5] to view the next page.")
                        .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                        message.channel.send(embed4);
            break;

            case 'commands5':
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
                        .addField("Adding any of these reactions to a message will make the bot react to it:", "• :herb: - Join the support gang! (If there is spam, use 'v!herbbreak')\n• :magnet: - Sends the reacted message to Virus' Channel.")
                        .addBlankField()
                        .addField('**Personal Commands** 🦀', "Huh.")
                        .addField('The following reactions are user-specific:', '• :joystick: - Only Gabe can use this.\n• :guitar: - Only Snoop and Reun can use this.')
                        .addBlankField()
                        .addField("End of page.", "Please use [v!commands] to view the first page.")
                        .setFooter("VirusDaBot", bot.users.get('262589838958526467').avatarURL);
                        message.channel.send(embed5);
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



   if (message.channel.id === callA && callkey === true && message.author.id !== '262589838958526467'){
    bot.channels.get(callids[callB]).send(message.author.tag +": "+message);
}

if (message.channel.id === callids[callB] && callkey === true && message.author.id !== '262589838958526467'){
    bot.channels.get(callA).send(message.author.tag +": "+message);
}


    if (message.content.includes("LET ROCK") && message.author.id !== '262589838958526467') {
        
        message.channel.send('!youtube SPICY CALAMARI INKANTION');
    }

    if (message.content.includes("HOL UP") && message.author.id !== '262589838958526467') {
        
        message.channel.send('*Holding...*');
    }

    if (message.content.includes("owo")) {
        if (message.author.id === '485252094509449237' || message.author.id === '536306768351985670')
        message.channel.send('UwU *nuzzles you*');
    }

    if (message.content.includes("Drizzle")){
        if (message.author.id === '356389068634062848'){
            message.channel.sendMessage("Okay, Jet. You need to face the facts. **The ship is dead.**")
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

        

        if (emoji.name === "🕹") {
            if (user.id === '178539479827611648') {
            
            message.channel.send("Don't fall in, **"+message.author.username+"**. Now pick your head up, gamer. Your headset is falling.")
            }
            }

        if (emoji.name === "🌭"){
            message.react(":one:");
        }

        });

bot.login(process.env.BOT_TOKEN);
