// ==UserScript==
// @name        redirector
// @namespace   tobyvin.com
// @description Website redirector
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/redirector.user.js
// @match       *://*/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

(function () {
    'use strict';
    var regex = /www\.bing\.com\/search\?.*(?<=q=)([^&]+).*/;
    var url = top.location.href;
    if (url.match(regex))
        top.location.href = url.replace(regex, "www.google.com/search?q=$1");
})();