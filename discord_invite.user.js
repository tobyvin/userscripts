// ==UserScript==
// @name        discord_invite
// @namespace   *
// @description Changes Continue to Discord link to Close Window link on discord invites
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/continue_to_discord.js
// @match       https://discord.com/invite/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant       none
// ==/UserScript==

jQuery(function () {
    $("div:contains('Continue to Discord')").text("Close window").on("click", self.close());
})