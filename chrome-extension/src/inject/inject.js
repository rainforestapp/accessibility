function hasStyle(selector) {
  // Check in all inline & external StyleSheets
  var stylesheets = document.styleSheets;

  // Prevent error if there’s no StyleSheet on the page
  if (stylesheets) {
    for (var i=0; i<stylesheets.length; i++) {

      var rules = document.styleSheets[i].cssRules;

      // Prevent error if there’s no cssRules into a StyleSheet
      // Mainly common for font-face only StyleSheet
      // ie: google-web-font
      if (rules) {
        for (var x=0; x<rules.length; x++) {
          // Prevent error if the rule dont have a selectorText
          if (rules[x].selectorText) {
            // Return true has soon as a corresponding rule is found
            if (rules[x].selectorText.indexOf(selector) > -1 ) {
              return true;
            }
          }
        }
      }

    }
  }

  // Return false when no matching rules are found
  return false;
}

// Add extension listener (event from background.js)
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  // Return true to show pageAction (Omnibox icon)
  // if a `.colorblind` CSS rule is defined on the current page
  sendResponse(hasStyle('.colorblind'));
});

// This is somewhat ghetto. Worth doing properly if
// lots of people want to use it.
document.addEventListener('DOMContentLoaded', function(){
  var classList = ["colorblind"];
  document.body.className += " " + classList.join(" ");
});
