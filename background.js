var host = "mailto:";
		/*var address = details.url.match(/q=email+(.*)/)[1];
    	 address = decodeURIComponent(address);
    	 address = address.replace(/\+/g, " ");*/
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host};
    },
    {
        urls: [
            "*://www.google.com/*gs_ivs=1*q=email+*",
            "*://google.com/*gs_ivs=1*q=email+*",
            "*://www.google.com/*gs_ivs=1*q=send+*email*",
            "*://google.com/*gs_ivs=1*q=send+*email*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);