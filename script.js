propsNewTab = {
  url: 'charts.html'
}

function openNewTab(propsNewTab) {
  chrome.tabs.create(propsNewTab);
}

openNewTab(propsNewTab);
