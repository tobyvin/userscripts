// ==UserScript==
// @name        LightGG Link
// @namespace   destinytracker.com
// @description Adds link to DestinyTracker DB to view on Light.gg
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/lightgg_link.user.js
// @match       https://destinytracker.com/destiny-2/db/items/*
// @match       https://www.light.gg/db/items/*
// @grant       none
// ==/UserScript==  



window.onload = (event) => {
    if (window.location.hostname == "www.light.gg") {
        var url = window.location.href.replace(/^https:\/\/(?:[^\.]*\.)?light\.gg\/(db\/items\/\d+)\/.*$/, "https://destinytracker.com/destiny-2/$1");
        var title = "View on DestinyTracker";
        var element = document.getElementsByClassName("legendary clearfix item-name")[0].childNodes[1];
    }
    else if (window.location.hostname == "destinytracker.com") {
        var url = window.location.href.replace(/^https:\/\/(?:[^\.]*\.)?destinytracker\.com\/destiny-2\/(db\/items\/\d+)(?:\?perks=(?:\d+,?)+|[-\w]+)?$/, "https://www.light.gg/$1")
        var title = "View on Light.gg";
        var element = document.getElementsByClassName("item-header__details")[0].firstChild;
    }
    else {
        return
    }

    var logo = document.createElement("img");
    logo.setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a37d87d-a6e5-4ad9-9c67-02a8842ca36b/dbpr9n8-773872ad-74cc-4124-8458-dbce41771acd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGEzN2Q4N2QtYTZlNS00YWQ5LTljNjctMDJhODg0MmNhMzZiXC9kYnByOW44LTc3Mzg3MmFkLTc0Y2MtNDEyNC04NDU4LWRiY2U0MTc3MWFjZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._R8hTZ0Uzfh5Pl_BClZ7WgmI7TJugP5-s9r3YOBXo8U");
    logo.setAttribute("title", title);
    logo.setAttribute("alt", "Logo");
    logo.style.width = '5%';
    logo.style.height = 'auto';

    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.appendChild(logo);

    element.innerHTML += " ";
    element.appendChild(link);
};