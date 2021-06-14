// ==UserScript==
// @name        discord_invite
// @namespace   tobyvin.com
// @description Changes Continue to Discord link to Close Window link on discord invites
// @author      tobyvin
// @version     1.0.0
// @updateURL   https://github.com/tobyvin/userscripts/raw/master/discord_invite.user.js
// @match       https://discord.com/invite/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant       none
// ==/UserScript==

$(window).on("load", function () {
    var old = $($("div:contains('Continue to Discord')").last().parent());
    var button = $(document.createElement('div'))
        .addClass($(old).attr("class"))
        .text("Close window")
        .on("click", function () {
            self.close()
        });
    old.parent().replaceWith(button);
})