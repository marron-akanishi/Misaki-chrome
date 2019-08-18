chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    switch(request.type){
      case "get_list":
        chrome.storage.sync.get(["api_key"], function (items) {
          if (items.api_key) {
            fetch("https://kotori.marron.work/api/get_booklist?key=" + items.api_key)
              .then(response => response.json())
              .then(data => sendResponse(data))
            return true;
          }
        });
        return true;
      case "ping":
        fetch("https://kotori.marron.work/api/get_booklist?key=" + request.api_key)
          .then(res => res.text())
          .then(data => sendResponse(data))
        return true;
      default:
        return false;
    }
  }
);