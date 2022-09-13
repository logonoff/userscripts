// ==UserScript==
// @name         Continue Anyway, please?
// @namespace    https://logonoff.co
// @match        https://remotedesktop.google.com/unsupported-browser/
// @match        http://remotedesktop.google.com/unsupported-browser/
// @match        https://www.remotedesktop.google.com/unsupported-browser/
// @match        http://www.remotedesktop.google.com/unsupported-browser/
// @grant        none
// @version      1.1.1
// @author       logonoff
// @description  Auto-click "Continue Anyway" on Chrome Remote Desktop when on the unsupported browser page
// @update-url   https://raw.githubusercontent.com/logonoff/userscripts/main/continueanywayplease.user.js
// @download-url https://raw.githubusercontent.com/logonoff/userscripts/main/continueanywayplease.user.js
// @run-at       document-idle
// ==/UserScript==

(function() {
	'use strict';

  /**
   * Scans all span elements for a "Continue Anyway" button and clicks it
   */
	const task = setInterval(function() {
    Array.from(document.getElementsByTagName("span")).forEach(function(elem) {
      if (elem.innerHTML === "Continue Anyway") {
        elem.click();
        clearTimeout(task);
      }
    });
	}, 300);

})();
