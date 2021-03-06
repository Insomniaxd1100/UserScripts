// ==UserScript==
// @name        Outlook Sign Out To Login
// @namespace   https://github.com/jerone/UserScripts
// @description Redirect back to login page when signing out from Outlook
// @author      jerone
// @copyright   2014+, jerone (http://jeroenvanwarmerdam.nl)
// @license     GPL-3.0
// @homepage    https://github.com/jerone/UserScripts/tree/master/Outlook_Sign_Out_To_Login
// @homepageURL https://github.com/jerone/UserScripts/tree/master/Outlook_Sign_Out_To_Login
// @downloadURL https://github.com/jerone/UserScripts/raw/master/Outlook_Sign_Out_To_Login/Outlook_Sign_Out_To_Login.user.js
// @updateURL   https://github.com/jerone/UserScripts/raw/master/Outlook_Sign_Out_To_Login/Outlook_Sign_Out_To_Login.user.js
// @supportURL  https://github.com/jerone/UserScripts/issues
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VCYMHWQ7ZMBKW
// @include     *://*.mail.live.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function() {
	document.getElementById("c_signout") && (document.getElementById("c_signout").href = "https://login.live.com/logout.srf?id=64855");
})();
