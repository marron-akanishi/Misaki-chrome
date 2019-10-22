window.onload = () => {
  chrome.storage.sync.get(["api_key"], function (items) {
    if (items.api_key) document.getElementById("api-key").value = items.api_key;
  });
}

document.getElementById("save-btn").addEventListener("click", () => {
  const key = document.getElementById("api-key").value
  chrome.runtime.sendMessage({ type: "ping", api_key: key }, (res) => {
    if (res != "error") {
      chrome.storage.sync.set({ "api_key": key });
      document.getElementById("msg").textContent = "APIキーを保存しました"
    } else {
      document.getElementById("msg").textContent = "APIキーが間違っています"
    }
  });
});