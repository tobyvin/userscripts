// ==UserScript==
// @name        Nexus Auto-Download
// @namespace   nexus
// @description Skips "slow download" prompt when downloading mods from Nexusmods
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/nexus_autodl.user.js
// @match       *://nexusmods.com/*
// @match       https://www.nexusmods.com/fallout4/mods/10360?tab=files&file_id=40468&nmm=1
// @grant       none
// ==/UserScript==

// Toggle Theater Mode after YouTube finishes loading a video.
window.addEventListener("yt-navigate-finish", function (event) {
    var newPlayer = document.querySelector('button.ytp-size-button');
    if (newPlayer && null === document.getElementById('player-theater-container').firstChild) {
        newPlayer.click();
    }
});