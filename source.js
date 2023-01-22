function sleep(s){return new Promise(resolve=>setTimeout(resolve,s*1000))}
var token=window.webpackChunkdiscord_app.push([[Math.random()],{},e=>{for(const t of Object.keys(e.c).map((t=>e.c[t].exports)).filter((e=>e)))if(t.default&&void 0!==t.default.getToken)return t.default.getToken()}]);

function get_random_heart(){
    var hearts=['❤️', '🧡', '💛', '💚', '💙', '💜'] // not lgbt!!1
    return hearts[Math.floor(Math.random()*(6-0)+0)]
}

document.onkeydown=async function(event) {
    if (event.keyCode==45){ // if zero numpad
        var id=document.URL.split('/')[5] // channel id
        var heart=get_random_heart()
        var option=prompt(`${heart}<[LALOL Cord]>${heart}\n\n[1] Flooder\n\[2] Delete Webhook\n[3] Get token\n[4] Login using token\n[5] Create friend Invite\n\nChoose option`)
        if (option=='1'){
            var text=prompt('Enter text')
            var count=Number(prompt('Enter count'))
            var delay=Number(prompt('Enter delay', '0.5'))
            var bypass=prompt('Enable Anti-Spam Bypass? (y/n)', 'y')
            var bypasss='❌'
            if (bypass=='y'){
                bypasss='✅'
            }
            var start=confirm(`Text: ${text}\nCount: ${count}\nDelay: ${delay}\nAnti-Spam Bypass: ${bypasss}`)
            if (start){}else{return} // if not start then return
            for (let i=1;i< count ;i++){
                await sleep(delay)
                var textt=text
                if (bypass=='y'){
                    textt=`${text} ||${Math.floor(Math.random()*(9999-1000)+1000)}||`
                }
                await fetch(`https://discord.com/api/v9/channels/${id}/messages`, {
"headers": {
    "Content-Type": "application/json",
    "Authorization": token
},
    "body": `{"content": "${textt}"}`,
    "method": "POST",
    "mode": "cors"
});
            }
            alert(`✅ Successfully sented ${count} messages!`)
        }
        if (option=='2'){
            var webhook=prompt('Enter webhook')
            await fetch(webhook,{
                "method": "DELETE"
            })
            alert('✅ Successfully deleted!')
        }
        if (option=='3'){
            var answer=prompt('Are you sure? (y/n)', 'no')
            if (answer=='y'){prompt("Here's your token",token)}
        }
        if (option==='4'){
            var tokenn=prompt('Enter token')
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
        if (option==='5'){
            var response=fetch('https://discord.com/api/v9/users/@me/invites', {
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                    "body": `{"max_age": Infinity, "max_uses": Infinity}`,
                    "method": "POST",
                    "mode": "cors"
                });
            response.then(a=>a.json().then(json=> prompt('✅ Successfully created!', 'https://discord.gg/'+json['code']) ))
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
let wpRequire;window.webpackChunkdiscord_app.push([[Math.random()],{},e=>{wpRequire=e}]),mod=Object.values(wpRequire.c).find((e=>void 0!==e?.exports?.Z?.isDeveloper)),usermod=Object.values(wpRequire.c).find((e=>e?.exports?.default?.getUsers)),nodes=Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes);try{nodes.find((e=>"ExperimentStore"==e.name)).actionHandler.OVERLAY_INITIALIZE({user:{flags:1}})}catch(e){}oldGetUser=usermod.exports.default.__proto__.getCurrentUser,usermod.exports.default.__proto__.getCurrentUser=()=>({isStaff:()=>!0}),nodes.find((e=>"DeveloperExperimentStore"==e.name)).actionHandler.CONNECTION_OPEN(),usermod.exports.default.__proto__.getCurrentUser=oldGetUser;

// NSFW Bypass (skidded https://github.com/hxr404/Discord-Console-hacks#enter-nsfw-channels)
var findModule=e=>window.webpackChunkdiscord_app.push([[Math.random()],{},r=>{for(const d of Object.keys(r.c).map((e=>r.c[e].exports)).filter((e=>e)))if(d.default&&void 0!==d.default[e])return d.default}]);findModule("getCurrentUser").getCurrentUser().nsfwAllowed=!0;
