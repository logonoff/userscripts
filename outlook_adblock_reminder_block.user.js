// ==UserScript==
// @name               Block Outlook Adblock Reminder
// @namespace          https://logonoff.co
// @version            0.2
// @description        Remove Outlook "looks like you're using an adblock" reminder. i know. shut it
// @author             logonoff
// @match              https://outlook.live.com/*
// @icon               https://www.google.com/s2/favicons?sz=64&domain=live.com
// @grant              none
// @updateURL          https://raw.githubusercontent.com/logonoff/userscripts/main/outlook_adblock_reminder_block.user.js
// @downloadURL        https://raw.githubusercontent.com/logonoff/userscripts/main/outlook_adblock_reminder_block.user.js
// @run-at             document-body
// @license            MIT
// ==/UserScript==

(function() {
    'use strict';

	const task = setInterval(function() {
    Array.from(document.getElementsByTagName("span")).forEach(function(elem) {
      if (elem.innerHTML === `It looks like you're using an ad blocker. To maximize the space in your inbox, sign up for <a href="https://go.microsoft.com/fwlink/?linkid=2222646" target="_blank">Ad-Free Outlook</a>.`) {
        elem.parentNode.parentNode.parentNode.remove();
        clearTimeout(task);
      }
    });
	}, 150);
})();
