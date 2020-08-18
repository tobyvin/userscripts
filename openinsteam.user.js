// ==UserScript==
// @name        Open in Steam
// @namespace   steam
// @description Changes install steam link to open in steam
// @match       *://*.steampowered.com/*
// @match       *://*.steamcommunity.com/*
// @grant       none
// @version     1.0
// @author      tobyvin
// @updateURL https://github.com/tobyvin/userscripts/raw/master/cloudtobutt.user.js
// ==/UserScript==

var buttons = document.getElementsByClassName("header_installsteam_btn_content");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].href = "steam://openurl/" + location.href
    buttons[i].textContent = "Open in Steam"
}
