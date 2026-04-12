// ==UserScript==
// @name               Instagram: Disable repost button
// @namespace          https://logonoff.co
// @version            0.0.1
// @description        Makes the repost button inoperable
// @author             logonoff
// @match              https://www.instagram.com/*
// @icon               https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant              none
// @updateURL          https://raw.githubusercontent.com/logonoff/userscripts/main/instagram_disable_repost.user.js
// @downloadURL        https://raw.githubusercontent.com/logonoff/userscripts/main/instagram_disable_repost.user.js
// @run-at             document-body
// @license            MIT
// ==/UserScript==

window.onload = () => {
	'use strict';

  const styles =
`
section > div:has([aria-label="Repost"]) div:has([aria-label="Repost"]) {
  user-select: none !important;
  pointer-events: none !important;
  cursor: not-allowed !important;
}
`;

  const styleElem = document.createElement('style');
  styleElem.textContent = styles;

  document.head.appendChild(styleElem);
};
