// This is somewhat ghetto. Worth doing properly if 
// lots of people want to use it.
document.addEventListener('DOMContentLoaded', function(){
  var classList = ["colorblind"];
  document.body.className += " " + classList.join(" ");
 });