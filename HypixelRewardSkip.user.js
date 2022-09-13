// ==UserScript==
// @name         Hypixel Reward Skip
// @namespace    https://logonoff.co/
// @version      3.0.1
// @description  Auto skip Hypixel's daily reward!
// @author       logonoff
// @match        *://rewards.hypixel.net/*
// @downloadURL  https://raw.githubusercontent.com/logonoff/userscripts/main/HypixelRewardSkip.user.js
// @updateURL    https://raw.githubusercontent.com/logonoff/userscripts/main/HypixelRewardSkip.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hypixel.net
// @grant        none
// @run-at       document-end
// ==/UserScript==

window.onload = function() {
	'use strict';

	// based off https://github.com/HexedHero/HypixelRewardSkip (MIT)
	const task = setInterval(function() {
        let target = document.querySelectorAll("button span");

        if (target) {
		  target.forEach(function(elem) {
				elem.click();
		  });

		  clearTimeout(task);
		}

	}, 500 + Math.random() * 100);
};
