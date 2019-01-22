const showFeedButton = document.getElementById('showFeedButton');
const hideFeedButton = document.getElementById('hideFeedButton');

showFeedButton.onclick = function(element) {
  showFeedButton.style.display = 'none';
  hideFeedButton.style.display = 'block';
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
				tabs[0].id,
				{file: 'showFeed.js'}
    );
	});
};

hideFeedButton.onclick = function(element) {
  hideFeedButton.style.display = 'none';
  showFeedButton.style.display = 'block';
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
				tabs[0].id,
				{file: 'hideFeed.js'}
    );
	});
};
