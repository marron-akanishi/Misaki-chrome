chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    switch(request.type){
      case "get_booklist":
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
      case "get_wishlist":
        return true;
      case "add_wishlist":
        return true;
      case "del_wishlist":
        return true;
      case "search":
        return true;
      default:
        return false;
    }
  }
);