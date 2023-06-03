// ==UserScript==
// @name         google it on bing
// @namespace    https://logonoff.co/
// @version      0.4.1
// @description  cause sometimes bing aint doin it
// @author       logonoff
// @match        https://www.bing.com/search*
// @updateURL    https://raw.githubusercontent.com/logonoff/userscripts/main/google_on_bing.user.js
// @downloadURL  https://raw.githubusercontent.com/logonoff/userscripts/main/google_on_bing.user.js
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    /*
    // enable this for auto redirect
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    window.addEventListener('load', setTimeout(function() {
        if (location.href.toString().includes("Reward") || location.href.toString().includes("reward")) {
            //console.log("damb");
        } else {
             window.location.replace(location.href.replace("bing.com", "google.com"));
            //openInNewTab( location.href.replace("bing.com", "google.com"));
        }
    }, 500));
    */
    // Your code here...
	function ready() {
		document.querySelector("[role=\"search\"]").parentElement.insertAdjacentHTML("afterend", `
			<style>#bruh::before, #bruh::after {position:absolute;top:40x; margin-top:40px;}</style>
			<div data-sbtip="Search with Google" id="bruh" style="display:inline-block;width: 1.05em;top: 4px;margin-left:-10px;margin-right: 14px;">
				<a onclick="window.location.replace(location.href.replace(\'bing.com\', \'google.com\'));\" href="#">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3">
						<path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4
								 81.1-117.4 81.1-200.2z M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71
								 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z M119.3 324.3c-11.4-33.8-11.4-70.4
								 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z M272.1 107.7c38.8-.6 76.3 14 104.4
								 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4
								 152.8-112.4z" fill="#174ae4" style="--darkreader-inline-fill: #00809d !important;"/>
					</svg>
				</a>
			</div>
		`);
	}

	ready();
	// document.addEventListener("DOMContentLoaded", setTimeout(ready, 0));

})();

