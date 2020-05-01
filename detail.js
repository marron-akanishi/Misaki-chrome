// 全角→半角、スペース削除、小文字→大文字
const normalizeStr = (str) => {
  str = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
  str = str.replace(/[\s 　]/g, "");
  return str.toUpperCase();
}

window.onload = () => {
  const now_url = location.href.split("#")[0];
  const data = getBookData();
  chrome.runtime.sendMessage({type: "get_list"}, (book_list) => {
    let search = book_list.filter(function (item, index) {
      return item.url == now_url || (normalizeStr(data[0]).indexOf(normalizeStr(item.title)) != -1 && item.published_at == data[1]);
    });
    if (search.length > 0) {
      appendMessage(`https://kotori.marron.work/book/${search[0].id}`, true);
    } else {
      search = book_list.filter(function (item, index) {
        return normalizeStr(data[0]).indexOf(normalizeStr(item.title)) != -1;
      });
      if (search.length > 0) {
        appendMessage(`https://kotori.marron.work/user/mypage`, false);
      }
    }
  });
}