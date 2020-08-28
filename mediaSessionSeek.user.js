// ==UserScript==
// @name        Media Session Seek
// @namespace   youtubeSeek
// @description Converts the Next and Prev media session actions into seek controls
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/mediaSessionSeek.user.js
// @match       *://www.youtube.com/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

function handleSeek(details) {
    var seekStep = 5;
    var vid = document.querySelector('Video');
    switch (details.action) {
        case "nexttrack":
            vid.currentTime = Math.min(vid.duration, vid.currentTime + seekStep);
            break;
        case "previoustrack":
            vid.currentTime = Math.max(0, vid.currentTime - seekStep);
            break;
    }
}

window.addEventListener("yt-navigate-finish", function (event) {
    var vid = document.querySelector('Video');
    vid.onplaying = function () {
        navigator.mediaSession.setActionHandler('previoustrack', handleSeek);
        navigator.mediaSession.setActionHandler('nexttrack', handleSeek);
    };
});
