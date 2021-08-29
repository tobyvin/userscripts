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

    var seekBack = () => vid.currentTime = Math.max(0, vid.currentTime - seekStep);
    var seekFwrd = () => vid.currentTime = Math.min(vid.duration, vid.currentTime + seekStep);

    const controller = () => {
        vid = document.querySelector('Video');

        if (!vid)
            return;

        clearInterval(waitHandle);

        navigator.mediaSession.setActionHandler('previoustrack', seekBack);
        navigator.mediaSession.setActionHandler('nexttrack', seekFwrd);
    }

    const wait = () => {
        waitHandle = setInterval(controller, 1000);
        setTimeout(() => { clearInterval(waitHandle) }, 30000);
    }

    switch (location.host) {
        case 'www.netflix.com':
            seekBack = () => document.querySelector('.button-nfplayerBackTen').click()
            seekFwrd = () => document.querySelector('.button-nfplayerFastForward').click()
            break;
        case 'www.youtube.com':
            window.addEventListener("yt-navigate-finish", wait);
            break;
    }

    window.addEventListener("load", wait);
})();
