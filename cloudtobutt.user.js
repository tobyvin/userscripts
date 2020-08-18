// ==UserScript==
// @name Cloud to Butt
// @namespace cloudtobutt
// @description Replaces the text 'the cloud' with 'my butt', as well as 'cloud' with 'butt' in certain contexts. Ported from panicsteve's cloud-to-butt Chrome extension, and Hank's ports thereof.
// @include *
// @version 1.0.0
// @grant none
// @updateURL https://github.com/tobyvin/dotfiles/raw/master/userscripts/cloudtobutt.user.js
// ==/UserScript==

walk(document.body);



function walk(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    var tagName = node.tagName ? node.tagName.toLowerCase() : "";
    if (tagName == 'input' || tagName == 'textarea') {
        return;
    }
    if (node.classList && node.classList.contains('ace_editor')) {
        return;
    }

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            if (node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    // Deal with the easy case
    v = v.replace(/\b(T|t)he (C|c)loud/g, function (match, p1, p2, offset, string) {
        // t - 7 = m
        // c - 1 = b
        m = String.fromCharCode(p1.charCodeAt(0) - 7);
        b = String.fromCharCode(p2.charCodeAt(0) - 1);
        return m + "y " + b + "utt";
    });

    // Deal with butts
    v = v.replace(/\b(P|p)rivate (C|c)loud/g, function (match, p1, p2, offset, string) {
        // c - 1 = b
        b = String.fromCharCode(p2.charCodeAt(0) - 1);
        return b + "utt";
    });
    // Get the corner cases
    if (v.match(/butt/i)) {
        // If we're not talking about weather
        if (v.match(/PaaS|SaaS|IaaS|computing|data|storage|cluster|distributed|server|hosting|provider|grid|enterprise|provision|apps|hardware|software|/i)) {
            v = v.replace(/(C|c)loud/gi, function (match, p1, offset, string) {
                // c - 1 = b
                b = String.fromCharCode(p1.charCodeAt(0) - 1);
                return b + "utt";
            });
        }
    }
    textNode.nodeValue = v;
}
