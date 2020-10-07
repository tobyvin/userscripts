// ==UserScript==
// @name        LightGG Link
// @namespace   destinytracker.com
// @description Adds link to DestinyTracker DB to view on Light.gg
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/lightgg_link.user.js
// @match       *://destinytracker.com/destiny-2/db/items/*
// @grant       none
// ==/UserScript==  



window.onload = (event) => {
    url = window.location.href.replace(/^https:\/\/(?:[^\.]*\.)?destinytracker\.com\/destiny-2\/(db\/items\/\d+)\?perks=(?:\d+,?)+$/, "https://www.light.gg/$1")

    var logo = document.createElement("img");
    logo.setAttribute("src", "https://www.light.gg/Content/Images/new-icon.png");
    logo.setAttribute("title", "View on Light.gg");
    logo.setAttribute("alt", "Light.gg Logo");
    logo.style.width = '2.5%'
    logo.style.height = 'auto'

    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.appendChild(logo);


    var header = document.getElementsByClassName("item-header__details");
    header[0].firstChild.innerHTML += " ";
    header[0].firstChild.appendChild(link);
    console.log("Added link!");
};