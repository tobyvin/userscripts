// ==UserScript==
// @name        factorio_school
// @namespace   tobyvin.com
// @description Adds a button to open the page in the newer version of the site
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://raw.githubusercontent.com/tobyvin/userscripts/master/factorio_school.user.js
// @require     https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// @match       http*://*factorioprints.com/*
// @grant       none
// ==/UserScript==

// @ts-check


// @ts-ignore\
waitForKeyElements("#root > div > nav.navbar > span > a", (/** @type {HTMLElement} */ element) => {
    /**
     * @type {HTMLLinkElement}
    */
    var a
    /**
     * @type {SVGElement}
    */
    var svg;

    // var jNode = document.querySelector("#root > div > nav > span > a");
    // element.textContent = "testing";
    console.log(element);

    // @ts-ignore
    a = element.cloneNode(true);
    // @ts-ignore
    svg = a.children[0];

    a.classList.add("text-light");
    a.classList.add("nav-link");
    a.href = "https://www.factorio.school" + document.location.pathname;
    a.textContent = " Open in Factorio School";
    a.prepend(svg);
    
    console.log(a);
    
    document.querySelector("#root > div > nav > div > div.mr-auto.navbar-nav").appendChild(a);
});
