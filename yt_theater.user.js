// ==UserScript==
// @name        YouTube Initial Setup
// @namespace   youtube
// @description Setup the YouTube video player on load.
// @author      tobyvin
// @version     1.4.1
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/yt_theater.user.js
// @include     https://www.youtube.com/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

// Toggle Theater Mode after YouTube finishes loading a video.
window.addEventListener("yt-navigate-finish", function (event) {
    var newPlayer = document.querySelector('button.ytp-size-button');
    if (newPlayer && null === document.getElementById('player-theater-container').firstChild) {
        newPlayer.click();
    }
});