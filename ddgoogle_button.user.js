// ==UserScript==
// @name        ddgoogle_button
// @namespace   tobyvin.com
// @description add a google bang in the duckduckgo search as button
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/ddgoogle_button.user.js
// @match       https://duckduckgo.com/*
// @run-at      document-idle
// @grant
// ==/UserScript==

window.addEventListener('load', function () {
    init();
});

function init() {
    let link = document.createElement("a");
    link.classList.add("zcm__link");
    link.id = "google_search";
    link.innerText = "Google";
    link.href = "https://www.google.com/search?q=" + encodeURIComponent(document.getElementById("search_form_input").value);

    var item = document.createElement("li");
    item.classList.add("zcm__item");
    item.appendChild(link);

    let sep = document.getElementById("duckbar_dynamic_sep").cloneNode();

    document.getElementById("duckbar_static").appendChild(sep);
    document.getElementById("duckbar_static").appendChild(item);
    document.getElementById("duckbar").style.maxWidth = "fit-content";
};
