// ==UserScript==
// @name     Steam Filter Crappy Publishers
// @version  1
// @author   ste5e
// @match    https://store.steampowered.com/app/*/*
// @grant    none
// ==/UserScript==


(function() {
    'use strict';
    
    var shitty_map = {
        "microsoft": "Microsoft buys game studios, closes them down, seeks maximum profit, and is overall unhealthy for the gaming industry at large. They are the owners of Bethesda, id Software, Obsidian, Activison-Blizzard, and much more.",
        "xbox game studios": "Don't give money to Phil Spencer, he's not your friend.",
        "bethesda softworks": "Yet another Microsoft official microtransaction publisher via Fallout 76. Don't spend money here, Fallout 5 is never coming.",
        "amazon games": "Do you really need to waste your time on games from the Jeff Bezos network?",
        "ea": "Do I really need to explain this one?",
        "electronic arts": "Arguably one of the worst publishers in the industry. Profit seeker from console bros; collectively hoards Star Wars licensing, makes terrible microtransaction games, third party launcher. If you hate a shitty gaming trend, this company will revolutionize it into something worse.",
        "ubisoft": "A worse EA.",
        "paradox interactive": "Has their grubby fingers in many popular game series and forces a ton of third-party launchers, DLCs and sometimes even shitty early access games (Kerbel 2).",
        "sony": "Another popular rent-seeking video game owner who makes exclusives, then releases them to PC after years long gaps and charges full price for everything. Still no Bloodborne PC to this day.",
        "playstation publishing llc": "These games are 100% not worth giving Sony money for.",
        "2k": "Remember Borderlands and BioShock? Yeah those days aren't coming back. This company is basically mini-EA. Launchers, DLCs, etc.",
        "nexon america inc.": "Publisher of largely microtransaction-based grind MMOs meant to whittle people's souls down until they're nothing but dopamine addicts.",
        "blizzard entertainment, inc.": "Makers of really crappy games meant to get people hooked on spending money. Nothing of worth to be found here; Blizzard of old is long dead.",
        "tencent": "Stay the hell away lmao.",
        "gearbox": "F*ck Randy Pitchford. We are tired of Borderlands. The game is not good.",
        "embracer": "F*ck Embracer for destroying the games industry.",
        "thq nordic": "F*ck Embracer.",
        "deep silver": "F*ck Embracer.",
        "epic games": "F*ck Tim Sweeney with a fork, this guy has to take a good thing and make things worse for everyone with a shitty launcher, all to promote Fortnite to children to sell Vbucks. This guy is not a herald of the games industry, he's a guy chasing his third comma as if it were HBO's Silicon Valley. Fuck Epic.",
        "krafton": "Ask yourself if giving money to PUBG is ever worth it in any capacity. It most likely never is.",
        "rockstar": "Making Grand Theft Auto and Red Dead Redemption games forever is alone worthy to make this list. Everything they do will just be to get more microtransactions. Don't spend your money here.",
        "capcom co., ltd.": "Capcom died a few years ago and started re-making all the old games into new games to upsell their IPs and yield more profit. Nothing but DRM, crappy consumer practices, and nostalgia ragging galore.",
        "facepunch": "Cancelled a Rust derivative, cancelled Linux ports of Rust. Just another run-of-the-mill microtransaction farm.",
        "square enix": "This company sucks so much butts they can barely float. Can't even make original games so they have to use AI.",
        "studio wildcard": "If you want to piss off your fanbase, learn some lessons from the makers of ARK and republish your game into something horribly consumer-unfriendly.",
        "warner bros. games": "Don't buy games from a publisher that still does business with J.K. f%cking Rowling of all people.",
        "fromsoftware inc.": "Tencent has a partial stake in From Software since 2022. Sorry guys, have to do it.",
    };
    
    console.log("SFCB: I'm here");
    console.log(window.document);
    
    window.addEventListener('load', function(){
        
        // gather all nodes that match the class .dev_row
        // this provides dev/pub info on the sidebar on Steam game pages
        var nodes = window.document.querySelectorAll(".dev_row");
        
        // look to see if the nodes say "Publisher:"
        if (nodes[1].children[0].innerHTML === "Publisher:") {
   	        console.log("SFCP: We have a publisher!");
        }
        
        // this should flatten the name correctly
        // if anything breaks, this most likely requires the fixing
        var publisher = nodes[1].children[1].children[0].innerHTML.trim().toLowerCase();
        console.log("SFCP: Publisher: " + publisher);
        
        if (publisher in shitty_map) {
            // disable all steam buttons to purchase
	        var all_steam_buttons = window.document.querySelectorAll(".btn_green_steamui");
            all_steam_buttons.forEach(function(btn){
                btn.style.display = "none";
            });
            
            var game_purchase_area = window.document.getElementById("game_area_purchase");
            game_purchase_area.style.display = "none";
            
            // create a popup alert
            console.log("SFCP: REASON: " + shitty_map[publisher]);
            alert("This game is blacklisted.\n\nREASON: " + shitty_map[publisher]);
        }
        console.log("SFCP: Done");
    });
})();

// end steamfiltercrappypublishers.js
// have fun

