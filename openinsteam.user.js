// ==UserScript==
// @name        Open in Steam
// @namespace   tobyvin.com
// @description Changes install steam link to open in steam
// @author      tobyvin
// @version     1.0
// @updateURL   https://raw.githubusercontent.com/tobyvin/userscripts/master/openinsteam.user.js
// @match       https://*.steampowered.com/*
// @match       https://*.steamcommunity.com/*
// @grant       none
// ==/UserScript==

var buttons = document.getElementsByClassName("header_installsteam_btn_content");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].href = "steam://openurl/" + location.href
    buttons[i].textContent = "Open in Steam"
}
