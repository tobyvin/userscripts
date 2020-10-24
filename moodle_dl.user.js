// ==UserScript==
// @name        moodle_dl
// @namespace   classes.cs.siue.edu
// @description Modifies the download folder link on moodle to work with ariaNG 
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/moodle_dl.user.js
// @match       *://classes.cs.siue.edu/*
// @grant       none
// ==/UserScript==

var folderElements = document.querySelectorAll("div.singlebutton form");

folderElements.forEach(element => {
    var url = element.action + "?";
    for (let param of element.getElementsByTagName("input")) {
        url += param.name + "=" + param.value + "&";
    };
    element.action = url;
})