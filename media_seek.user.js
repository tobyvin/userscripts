// ==UserScript==
// @name        media_seek
// @namespace   tobyvin.com
// @description Finds video element and registers media keys to seek the video
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/media_seek.user.js
// @match       *://*/*
// ==/UserScript==

(function () {
    const seekStep = 5;
    var vid, waitHandle;

    const controller = () => {
        vid = document.querySelector('Video');

        if (!vid)
            return;

        clearInterval(waitHandle);

        navigator.mediaSession.setActionHandler('previoustrack', seek);
        navigator.mediaSession.setActionHandler('nexttrack', seek);
    }

    const seek = (details) => {
        switch (details.action) {
            case "nexttrack":
                vid.currentTime = Math.min(vid.duration, vid.currentTime + seekStep);
                break;
            case "previoustrack":
                vid.currentTime = Math.max(0, vid.currentTime - seekStep);
                break;
        }
    }

    const wait = () => {
        waitHandle = setInterval(controller, 1000);
        setTimeout(() => { clearInterval(waitHandle) }, 30000);
    }

    window.addEventListener("load", wait);

})();
