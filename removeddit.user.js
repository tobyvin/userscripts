// ==UserScript==
// @name        Removeddit
// @namespace   reddit
// @description Adds link to reddit posts and comments to view in Removeddit
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/removeddit.user.js
// @match       *://*.reddit.com/r/*
// @grant       none
// ==/UserScript==

function parseComments() {
    const lists = document.getElementsByClassName('flat-list buttons');
    createLink(lists[0], location)
    for (let index = 1; index < lists.length; index++) {
        const list = lists[index];
        if (list.firstElementChild)
            createLink(list, new URL(list.firstElementChild.firstElementChild.href))
    }
}

function createLink(list, url) {
    var li = document.createElement('li');
    var anchor = document.createElement('a');
    anchor.innerText = 'Removeddit';
    anchor.href = 'https://removeddit.com' + url.pathname + url.search;
    li.appendChild(anchor);
    list.appendChild(li);
}

parseComments();