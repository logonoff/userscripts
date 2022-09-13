// ==UserScript==
// @name         shalescroll
// @namespace    https://logonoff.co/
// @version      0.0.8
// @description  [abandoned] shale scrollbars for the web (webkit only)
// @author       logonoff
// @include      http://*/*
// @include      https://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/logonoff/userscripts/main/shalescroll.user.js
// @downloadURL  https://raw.githubusercontent.com/logonoff/userscripts/main/shalescroll.user.js
// @run-at       document-start
// ==/UserScript==

(function() {
	const shalescrollColorcycle = false; // if you want the scrollbar to go colourez

    var css = [
	":root {",

	// accent colour for scrollbar
	"   --a-r: 157;",
	"   --a-g: 198;",
	"   --a-b: 218;",

	"   --scrollbar-corner: #F0F0F0;",
	"   --scrollbar-track-bg: #F5F5F5;",
	"   --scrollbar-thumb-1: #EEE;",
	"   --scrollbar-thumb-2: #DADADA;",
	"   --scrollbar-thumb-hover-1: #F2F2F2;",
	"   --scrollbar-thumb-hover-2: #E9E9E9;",
	"   --scrollbar-thumb-active-1: calc(var(--a-r) + 20), calc(var(--a-g) + 20), calc(var(--a-b) + 20);",
	"   --scrollbar-thumb-active-2: var(--accent);",
	"",
	"   --scrollbar-button: #DADADA; /* scrollbar button initial */",
	"   --scrollbar-inset-border: calc(var(--a-r) + 9), calc(var(--a-g) + 11), calc(var(--a-b) + 10); /* scrollbar button inset border */",
	"   --scrollbar-border: #B5B5B5; /* scrollbar button border */",
	"   --scrollbar-border-hover: #FDFDFD; /* scrollbar button border */",
	"   --scrollbar-border-active: calc(var(--a-r) - 41), calc(var(--a-g) - 32), calc(var(--a-b) - 36); /* scrollbar button active not inset border */",
	"   --scrollbar-hover: #F2F2F2; /* scrollbar button hover (bottom) */",
	"   --scrollbar-hover-1: #E9E9E9; /* scrollbar button hover (top) */",
	"   --scrollbar-active: calc(var(--a-r) + 19), calc(var(--a-g) + 33), calc(var(--a-b) - 18); /* scrollbar button active (bottom) */",
	"   --scrollbar-active-1: calc(var(--a-r) + 10), calc(var(--a-g) + 24), calc(var(--a-b) + 9); /* scrollbar button active (top) */",
	"   --scrollbar-arrow: #333; /* color of scrollbar arrow */",
	"}",
	"@media (prefers-color-scheme: dark) {",
	"   :root {",
	"       --scrollbar-corner: #454545 !important;",
	"       --scrollbar-track-bg: linear-gradient(#464646, #343434) !important;",
	"       --scrollbar-thumb-1: #555 !important;",
	"       --scrollbar-thumb-2: #414141 !important;",
	"       --scrollbar-thumb-hover-1: #595959 !important;",
	"       --scrollbar-thumb-hover-2: #505050 !important;",
	"       --scrollbar-thumb-active-1: calc(var(--a-r) - 50), calc(var(--a-g) - 69), calc(var(--a-b) - 96) !important;",
	"       --scrollbar-thumb-active-2: calc(var(--a-r) - 73), calc(var(--a-g) - 89), calc(var(--a-b) - 107) !important;",
	"",
	"       --scrollbar-button: #555 !important; /* scrollbar button initial */",
	"       --scrollbar-border: #2A2A2A !important; /* scrollbar button border */",
	"       --scrollbar-border-hover: #626262 !important; /* scrollbar button border */",
	"       --scrollbar-hover: #515151 !important; /* scrollbar button hover (bottom) */",
	"       --scrollbar-hover-1: #535353 !important; /* scrollbar button hover (top) */",
	"       --scrollbar-active: calc(var(--a-r) - 73), calc(var(--a-g) - 88), calc(var(--a-b) - 105) !important; /* scrollbar button active (bottom) */",
	"       --scrollbar-active-1: calc(var(--a-r) - 71), calc(var(--a-g) - 86), calc(var(--a-b) - 103) !important; /* scrollbar button active (top) */",
	"       --scrollbar-arrow: #CCC !important; /* color of scrollbar arrow */",
	"   }",
	"}",
	"",
	"",
	"::-webkit-scrollbar-track {",
	"   background: var(--scrollbar-track-bg);",
	"}",
	"::-webkit-scrollbar {",
	"   box-shadow: -5px 0 5px 0 rgba(0, 0, 0, 0.18);",
	"}",
	"::-webkit-scrollbar-thumb {",
	"   background: linear-gradient(var(--scrollbar-thumb-1), var(--scrollbar-thumb-2));",
	"   border: 1px solid var(--scrollbar-border);",
	"}",
	"::-webkit-scrollbar-thumb:hover {",
	"   background: linear-gradient(var(--scrollbar-thumb-hover-1), var(--scrollbar-thumb-hover-2));",
	"   border: 1px solid var(--scrollbar-border-hover);",
	"}",
	"::-webkit-scrollbar-thumb:active {",
	"   background: linear-gradient(rgb(var(--scrollbar-thumb-active-1)), rgb(var(--scrollbar-thumb-active-2)));",
	"   border: 1px solid rgb(var(--scrollbar-border-active));",
	"   box-shadow: inset 0 0 0 1px linear-gradient(#D6ECF6, rgb(var(--scrollbar-inset-border)));",
	"}",
	"::-webkit-scrollbar-corner {",
	"   background-color: var(--scrollbar-corner);",
	"}",
	"::-webkit-scrollbar-button:vertical:start:decrement {",
	"   background: linear-gradient(134deg, var(--scrollbar-button) 40%, transparent 41%), linear-gradient(233deg, var(--scrollbar-button) 40%, transparent 41%), linear-gradient(0deg, var(--scrollbar-button) 40%, transparent 41%) var(--scrollbar-arrow);",
	"   border: 1px solid var(--scrollbar-border);",
	"   box-shadow: inset 0 0 0 1px linear-gradient(#FBFBFB, #E2E2E2);",
	"}",
	"::-webkit-scrollbar-button:vertical:start:decrement:hover {",
	"   background: linear-gradient(134deg, var(--scrollbar-hover-1) 40%, transparent 41%), linear-gradient(233deg, var(--scrollbar-hover-1) 40%, transparent 41%), linear-gradient(0deg, var(--scrollbar-hover) 40%, transparent 41%) var(--scrollbar-arrow);",
	"   box-shadow: inset 0 0 0 1px linear-gradient(#D5ECF6, rgb(var(--scrollbar-inset-border)));",
	"}",
	"::-webkit-scrollbar-button:vertical:start:decrement:active {",
	"   background: linear-gradient(134deg, rgb(var(--scrollbar-active-1)) 40%, transparent 41%), linear-gradient(233deg, rgb(var(--scrollbar-active-1)) 40%, transparent 41%), linear-gradient(0deg, rgb(var(--scrollbar-active)) 40%, transparent 41%) var(--scrollbar-arrow);",
	"   border: 1px solid rgb(var(--scrollbar-border-active));",
	"   box-shadow: inset 0 0 0 1px linear-gradient(#D5ECF6, rgb(var(--scrollbar-inset-border)));",
	"}",
	"::-webkit-scrollbar-button:vertical:end:increment {",
	"   background: linear-gradient(315deg, var(--scrollbar-button) 40%, transparent 41%), linear-gradient(45deg, var(--scrollbar-button) 40%, transparent 41%), linear-gradient(180deg, var(--scrollbar-button) 40%, transparent 41%) var(--scrollbar-arrow);",
	"   border: 1px solid var(--scrollbar-border);",
	"   box-shadow: inset 0 0 0 1px linear-gradient(#FCFCFC, #E2E2E2);",
	"}",
	"::-webkit-scrollbar-button:vertical:end:increment:active {",
	"   background: linear-gradient(315deg, rgb(var(--scrollbar-active)) 40%, transparent 41%), linear-gradient(45deg, rgb(var(--scrollbar-active)) 40%, transparent 41%), linear-gradient(180deg, rgb(var(--scrollbar-active-1)) 40%, transparent 41%) var(--scrollbar-arrow);",
	"   border: 1px solid rgb(var(--scrollbar-border-active));",
	"   box-shadow: inset 0 0 0 1px linear-gradient(#D5ECF6, rgb(var(--scrollbar-inset-border)));",
	"}",
	"::-webkit-scrollbar-button:horizontal:start:decrement {",
	"   background: linear-gradient(45deg, var(--scrollbar-button) 40%, transparent 41%), linear-gradient(145deg, var(--scrollbar-button) 40%, transparent 41%), linear-gradient(270deg, var(--scrollbar-button) 40%, transparent 41%) var(--scrollbar-arrow);",
	"}",
	"::-webkit-scrollbar-button:horizontal:start:decrement:active {",
	"   background: linear-gradient(45deg, rgb(var(--scrollbar-active)) 40%, transparent 41%), linear-gradient(145deg, rgb(var(--scrollbar-active)) 40%, transparent 41%), linear-gradient(270deg, rgb(var(--scrollbar-active-1)) 40%, transparent 41%) var(--scrollbar-arrow);",
	"   border: 1px solid rgb(var(--scrollbar-border-active));",
	"   box-shadow: inset 0 0 0 1px linear-gradient(#D5ECF6, rgb(var(--scrollbar-inset-border)));",
	"}",
	"::-webkit-scrollbar-button:horizontal:end:increment {",
	"   background: linear-gradient(225deg, var(--scrollbar-button) 40%, transparent 41%), linear-gradient(315deg, var(--scrollbar-button) 40%, transparent 41%), linear-gradient(90deg, var(--scrollbar-button) 40%, transparent 41%) var(--scrollbar-arrow);",
	"}",
	"::-webkit-scrollbar-button:horizontal:end:increment:active {",
	"   background: inear-gradient(255deg, rgb(var(--scrollbar-active-1)) 40%, transparent 41%), linear-gradient(315deg, rgb(var(--scrollbar-active)) 40%, transparent 41%), linear-gradient(90deg, rgb(var(--scrollbar-active)) 40%, transparent 41%) var(--scrollbar-arrow);",
	"   border: 1px solid rgb(var(--scrollbar-border-active));",
	"   box-shadow: inset 0 0 0 1px linear-gradient(#D5ECF6, rgb(var(--scrollbar-inset-border)));",
	"}"
].join("\n");

if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}

/*
** rgb color cycle
** adapted from https://codepen.io/SJF/pen/wBdpXV
*/
var shalescroll_r = 255, // pretty sure these have to be global
	shalescroll_g = 0,
	shalescroll_b = 0;

function rainbowz() {
	/*
	** does one iteration of rgb color cycle thing
	** and sets --a-r, --a-g, and --a-b css variables in the process
	*/
	// increment or decrement rgb values
	if (shalescroll_r > 0 && shalescroll_b == 0) {
		shalescroll_r -= 5;
		shalescroll_g += 5;
	}

	if (shalescroll_g > 0 && shalescroll_r == 0) {
		shalescroll_g -= 5;
		shalescroll_b += 5;
	}

	if (shalescroll_b > 0 && shalescroll_g == 0) {
		shalescroll_r += 5;
		shalescroll_b -= 5;
	}

	// overide accent colour variable
    document.documentElement.style.setProperty('--a-r', shalescroll_r + "");
    document.documentElement.style.setProperty('--a-g', shalescroll_g + "");
    document.documentElement.style.setProperty('--a-b', shalescroll_b + "");
}

if (shalescrollColorcycle === true) {
	setInterval(rainbowz, 100);
}
})();
