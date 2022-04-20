function getImageURL(info, tab) {
    console.log(info)
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": 'Save Image',
        "contexts": ["image", "selection"],
        "id": "Vay-k",
    });
});

chrome.contextMenus.onClicked.addListener(getImageURL)
