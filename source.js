function sleep(s){return new Promise(resolve=>setTimeout(resolve,s*1000))}

/* usermod */ window.webpackChunkdiscord_app.push([[Math.random()],{},e=>{wpRequire=e}]),mod=Object.values(wpRequire.c).find((e=>void 0!==e?.exports?.Z?.isDeveloper)),usermod=Object.values(wpRequire.c).find((e=>e?.exports?.default?.getUsers))
user=null

var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default && m.default[item]!==undefined){return m.default;}}}]);
var token=findModule('getToken').getToken()

function get_random_heart(){
    var hearts=['❤️', '🧡', '💛', '💚', '💙', '💜'] // not lgbt!!1
    return hearts[Math.floor(Math.random()*(6-0)+0)]
}

function set_user(what_change, value){
    var getuser=usermod.exports.default.getCurrentUser()
    usermod.exports.default.getCurrentUser=function(){ return getuser.set(what_change, value) }
}

document.onkeydown=async function(event) {
    try{ user=usermod.exports.default.getCurrentUser() } catch(err){}
    if (event.keyCode==45){ // if zero numpad
        var id=document.URL.split('/')[5] // channel id
        var heart=get_random_heart()
        var option=prompt(`${heart}<[LALOL Cord]>${heart}\n\n[1] Flooder\n\[2] Delete Webhook\n[3] Get token\n[4] Login using token\n[5] Create friend Invite\n[6] Account data changer [Client Side]\n\nChoose option`)
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
                    "body": `{"max_age": 0, "max_uses": 0}`,
                    "method": "POST",
                    "mode": "cors"
                });
            response.then(a=>a.json().then(json=> prompt('✅ Successfully created!', 'https://discord.gg/'+json['code']) ))
        }
        if (option==='6'){
            var option=prompt('[1] Change discriminator\n[2] Change Flags (Badge)\n[3] Change username\n\nChoose option')
            if (option==='1'){
                discriminator=prompt('Enter discriminator')
                set_user('discriminator', discriminator)
            }
            if (option=='2'){
                flags=prompt('Enter flags\n\nhttps://flags.lewisakura.moe/')
                set_user('flags', flags)
            }
            if (option=='3'){
                username=prompt('Enter username')
                set_user('username', username)
            }
        }
    }
}

function theme(){
    const css=`
    @keyframes rainbow {
        0% {
            background: #2c3036;
        }
        20% {
            background: #343e40;
        }
        40% {
            background: #2c3136;
        }
        60% {
            background: #1d2324;
        }
        80% {
            background: #434b4d;
        }
        100% {
            background: #5e3830;
        }
    }
    
    .container-2RRFHK.fixClipping-3GOd_d {
        animation: rainbow 3s infinite;
    }
    
    .theme-dark.container-ZMc96U.themed-Hp1KC_, .searchBar-3TnChZ, .scroller-hE2gWq.thin-31rlnD.scrollerBase-_bVAAt,
    .title-31SJ6t.container-ZMc96U.themed-Hp1KC_, .container-2o3qEW, .members-3WRCEx.thin-31rlnD.scrollerBase-_bVAAt.fade-1R6FHN,
    .layout-1qmrhw, .member-2gU6Ar.member-48YF_l.container-1oeRFJ.clickable-28SzVr, .interactive-26HRN_.interactive-iyXY_x,
    .scroller-WSmht3.thin-31rlnD.scrollerBase-_bVAAt.fade-1R6FHN, .scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt,
    .sidebar-1tnWFu.hasNotice-1s68so, .scroller-1ox3I2.thin-31rlnD.scrollerBase-_bVAAt.fade-1R6FHN {
        background: #2c3036;
    }
    .peopleColumn-1wMU14, .scroller-kQBbkU.auto-2K3UW5.scrollerBase-_bVAAt.disableScrollAnchor-6TwzvM.managedReactiveScroller-1lEEh3,
    .form-3gdLxP, .container-2RRFHK.fixClipping-3GOd_d {
        background: #343e40;
    }
    .channel-1Shao0.container-32HW5s {
        background: #2c3136;
    }
    .inner-2pOSmK {
        background: #1d2324;
    }
    .inner-NQg18Y.sansAttachButton-1ERHue, .actionButton-3-B2x-, .inner-NQg18Y.innerDisabled-2dbG11.inner-NQg18Y.sansAttachButton-1ERHue, .botTagCozy-3NTBvK.botTag-1NoD0B.botTagRegular-kpctgU.botTag-7aX5WZ.rem-3kT9wc {
        background: #434b4d;
    }
    
    .markup-eYLPri.messageContent-2t3eCI, .markup-eYLPri.editor-H2NA06.slateTextArea-27tjG0.fontSize16Padding-XoMpjI, /* Shadow */
    .embedWrapper-1MtIDg.embedFull-1HGV2S.embed-hKpSrO.markup-eYLPri {
        text-shadow: 1.5px 1.5px 1.5px black,1.5px 1.5px 1.5px black;
        font: "Fira Sans", sans-serif;
    }
    
    @keyframes slide-up { /* Slide */
        0% {
            opacity: 0;
            transform: translateX(20px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    .message-2CShn3.cozyMessage-1DWF9U.groupStart-3Mlgv1.wrapper-30-Nkg.cozy-VmLDNB.zalgo-26OfGz, .markup-eYLPri.messageContent-2t3eCI, .chatContent-3KubbW,
    .userPopoutInner-1hXSeY.userProfileInner-3F03PX.userProfileInnerThemedNonPremium-1gT-zY, 
    .userPopoutInner-1hXSeY.userProfileInner-3F03PX.userProfileInnerThemedWithBanner-2624Yx,
    .container-1NXEtd, .peopleListItem-u6dGxF, .channel-1Shao0.container-32HW5s {
      animation: slide-up 0.4s ease;
    }
    `

    const style=document.createElement('style')
    style.id=Math.random()
    style.innerText=css
    document.head.appendChild(style)
}

async function cfg_user_load(){
    while (true){
        var config=window.config
        if (!config){
            await sleep(0.3)
        }
        else{break}
    }
    if (config['theme']){ theme() }

    await sleep(5)

    user=usermod.exports.default.getCurrentUser()
    // Staff mode (skidded https://github.com/hxr404/Discord-Console-hacks#enable-staff-mode)
    if (config['staff']){ nodes=Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes);try{nodes.find((e=>"ExperimentStore"==e.name)).actionHandler.OVERLAY_INITIALIZE({user:{flags:1}})}catch(e){}oldGetUser=usermod.exports.default.__proto__.getCurrentUser,usermod.exports.default.__proto__.getCurrentUser=()=>({isStaff:()=>!0}),nodes.find((e=>"DeveloperExperimentStore"==e.name)).actionHandler.CONNECTION_OPEN(),usermod.exports.default.__proto__.getCurrentUser=oldGetUser; }
    if (config['NSFW_DisallowedBypass']){ set_user('nsfwAllowed', true) }
    if (config['FreeNitro']){ set_user('premiumType', 2) }

}
cfg_user_load()


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
