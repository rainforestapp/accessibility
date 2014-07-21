var field = document.getElementById('blindness');
var value = field.value;

// Loaded previously saved data
function load() {
  chrome.storage.sync.get('blindness', function(data) {
    field.value = data.blindness
  });
}

// Load previously saved data on page load
load();

// Save Color Blindness data
function save() {
  value = field.value;
  chrome.storage.sync.set({'blindness': value});
}

// Save Color Blindness info on select change
field.addEventListener("change", function(e) {
  save();
});
