function hasStyle(selector) {
  // Check in all inline & external StyleSheets
  var stylesheets = document.styleSheets;

  // Prevent error is there’s no StyleSheet on the page
  if (stylesheets) {
    for (var i=0; i<stylesheets.length; i++) {

      var rules = document.styleSheets[i].cssRules;

      // Prevent error is there’s not cssRules into a StyleSheet
      // Mainly common for font-face only StyleSheet
      // ie: google-web-font
      if (rules) {
        for (var x=0; x<rules.length; x++) {
          // Return true has soon as a corresponding rule is found
          if (rules[x].selectorText == selector) {
            return true;
          }
        }
      }

    }
  }

  // Return false when no matching rules are found
  return false;
}

// This is somewhat ghetto. Worth doing properly if
// lots of people want to use it.
document.addEventListener('DOMContentLoaded', function(){
  var classList = ["colorblind"];
  document.body.className += " " + classList.join(" ");
 });