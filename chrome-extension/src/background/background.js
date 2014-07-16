function togglePageAction(tabId) {
  // Trigger request event to inject.js which
  // has access to the current page DOM
  chrome.tabs.sendRequest(tabId, {}, function(response) {
    if (response) {
      chrome.pageAction.show(tabId);
    } else {
      chrome.pageAction.hide(tabId);
    }
  });
}

chrome.tabs.onUpdated.addListener(function(tabId) {
  togglePageAction(tabId);
});

chrome.tabs.onSelectionChanged.addListener(function(tabId) {
  togglePageAction(tabId);
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  togglePageAction(tabs[0].id);
})
