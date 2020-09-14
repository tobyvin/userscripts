// ==UserScript==
// @name        Nexus Auto-Download
// @namespace   nexus
// @description Skips "slow download" prompt when downloading mods from Nexusmods
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://raw.githubusercontent.com/tobyvin/userscripts/master/nexus_autodl.user.js
// @match       https://nexusmods.com/*
// @grant       none
// ==/UserScript==

// Toggle Theater Mode after YouTube finishes loading a video.
window.addEventListener("yt-navigate-finish", function (event) {
    var newPlayer = document.querySelector('button.ytp-size-button');
    if (newPlayer && null === document.getElementById('player-theater-container').firstChild) {
        newPlayer.click();
    }
});