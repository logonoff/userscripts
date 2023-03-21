// ==UserScript==
// @name         Turn zoommtg:// uris into proper links
// @namespace    https://logonoff.co/
// @version      0.2.2
// @description  Google Calendar doesn't like to link zoommtg:// URIs when they are in the description. This turns zoommtg URIs in gcal event popups clickable links
// @author       logonoff
// @match        https://calendar.google.com/calendar/*
// @icon         https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_24.ico
// @grant        none
// @updateURL    https://raw.githubusercontent.com/logonoff/userscripts/main/zoommtg_gcal.user.js
// @downloadURL  https://raw.githubusercontent.com/logonoff/userscripts/main/zoommtg_gcal.user.js
// ==/UserScript==

(function() {
    'use strict';

    // https://stackoverflow.com/questions/3219758/detect-changes-in-the-dom
    var observeDOM = (function(){
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        return function( obj, callback ){
            if( !obj || obj.nodeType !== 1 ) return;

            if( MutationObserver ){
                // define a new observer
                var mutationObserver = new MutationObserver(callback)

                // have the observer observe foo for changes in children
                mutationObserver.observe( obj, { childList:true, subtree:true })
                return mutationObserver
            }

            // browser support fallback
            // else if( window.addEventListener ){
            //     obj.addEventListener('DOMNodeInserted', callback, false)
            //     obj.addEventListener('DOMNodeRemoved', callback, false)
            // }
        }
    })()

    var popupElem = document.getElementById('yDmH0d');

    // Observe a specific DOM element:
    observeDOM( popupElem, function(m){
        const linkless = popupElem.querySelectorAll("a:not(a[href])");

        linkless.forEach(function(x) {
            if (x.textContent.includes("zoommtg://")) {
                x.href = x.textContent;
            }
        });

    });

})();
