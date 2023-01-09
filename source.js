// ==UserScript==
// @name         ⚡ LALOL Cord
// @namespace    https://github.com/Its-LALOL/LALOL-Cord
// @description  Modification for discord
// @version      ㅤ
// @author       LALOL
// @match        *://*.discord.com/*
// @icon         https://github.com/Its-LALOL/LALOL-Cord/raw/main/icon.png
// @grant        none
// ==/UserScript==

function sleep(s){return new Promise(resolve=>setTimeout(resolve,s*1000))}
token=window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getToken !== undefined) {return m.default.getToken()}}}])

function get_random_heart(){
    hearts=['❤️', '🧡', '💛', '💚', '💙', '💜'] // not lgbt!!1
    return hearts[Math.floor(Math.random() * (6-0)+0)]
}

document.onkeydown=async function(event) {
    if (event.keyCode==45){ // if zero numpad
        id=document.URL.split('/')[5] // channel id
        heart=get_random_heart()
        option=prompt(`${heart}<[LALOL Cord]>${heart}\n\n[1] Flooder\n\[2] Delete Webhook\n[3] Get token\n[4] Login using token\n\nChoose option`)
        if (option=='1'){
            text=prompt('Enter text')
            count=Number(prompt('Enter count'))
            delay=Number(prompt('Enter delay'), '0.5')
            bypass=prompt('Enable Anti-Spam Bypass? (y/n)', 'y')
            bypasss='❌'
            if (bypass=='y'){
                bypasss='✅'
            }
            start=confirm(`Text: ${text}\nCount: ${count}\nDelay: ${delay}\nAnti-Spam Bypass: ${bypasss}`)
            if (start){}else{return} // if not start then return
            for (let i=1;i< count ;i++){
                await sleep(delay)
                textt=text
                if (bypass=='y'){
                    textt=`${text} ||${Math.floor(Math.random()*(9999-1000)+1000)}||`
                }
                await fetch(`https://discord.com/api/v9/channels/${id}/messages`, {
"headers": {
    "Content-Type": "application/json",
    "Authorization": token
},
    "body": `{\"content\":\"${textt}\"}`,
    "method": "POST",
    "mode": "cors"
});
            }
            alert(`✅ Successfully sented ${count} messages!`)
        }
        if (option=='2'){
            webhook=prompt('Enter webhook')
            await fetch(webhook,{
                "method": "DELETE"
            })
            alert('✅ Successfully deleted!')
        }
        if (option=='3'){
            answer=prompt('Are you sure? (y/n)', 'no')
            if (answer=='y'){prompt("Here's your token",token)}
        }
        if (option==='4'){
            tokenn=prompt('Enter token')
            function login(token) {
                setInterval(() => {
                  document.body.appendChild(document.createElement`iframe`)
                               .contentWindow.localStorage.token = `"${token}"`;
                }, 50);
                setTimeout(() => {
                  location.reload();
                }, 2500);
              }
            login(tokenn)
        }
    }
}

async function watermark(){
    try{
        while (true){
            var headings=document.evaluate('/html/body/div[1]/div[2]/div/div[1]/div/div[2]/div/div[1]/div/div/div[1]/nav/div[1]/button', document, null, XPathResult.ANY_TYPE, null);
            var object=headings.iterateNext()
            if (object.textContent.startsWith('Thx')){} else {
                object.textContent=`Thx for using LALOL Cord! ${get_random_heart()}`
            }
            await sleep(0.3)
        }
    }
    catch(err) {
        await sleep(0.3)
        watermark()
    }
}

watermark()

// Staff mode (skidded https://github.com/hxr404/Discord-Console-hacks#enable-staff-mode)
let wpRequire;
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);
mod = Object.values(wpRequire.c).find(x => typeof x?.exports?.Z?.isDeveloper !== "undefined");
usermod = Object.values(wpRequire.c).find(x => x?.exports?.default?.getUsers)
nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes)
try {
    nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user: {flags: 1}})
} catch (e) {}
oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
usermod.exports.default.__proto__.getCurrentUser = () => ({isStaff: () => true})
nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]()
usermod.exports.default.__proto__.getCurrentUser = oldGetUser

// NSFW Bypass (skidded again https://github.com/hxr404/Discord-Console-hacks#enter-nsfw-channels)
var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
findModule('getCurrentUser').getCurrentUser().nsfwAllowed = true
