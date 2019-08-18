const getBookData = () => {
  // 書籍タイトル
  let title = document.querySelector("#item_title").textContent
  title = title.split(">>")[1]
  title = title.split("/")[0]
  title = title.trim()
  // 発行日
  let date = document.querySelector("#datasheet > tbody > tr:nth-child(1) > td:nth-child(4)").textContent
  date = date.replace(/\//g, "-")
  return [title, date]
}

const appendMessage = () => {
  // 挿入先
  var target = document.getElementById("item_title")
  // 表示枠
  var append = document.createElement("div")
  append.style.fontSize = "18px"
  append.style.padding = "5px 10px"
  append.style.border = "1px solid gray"
  append.style.borderRadius = "5px"
  append.style.backgroundColor = "#18bc9c"
  append.style.margin = "5px 0"
  append.style.fontFamily = `
    -apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN",
    "メイリオ",Meiryo,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
  `
  // テキスト
  var text = document.createElement("a")
  text.textContent = "Kotoriにこの書籍が所有登録されています"
  text.href = "https://kotori.marron.work/book/1"
  text.target = "_blank"
  text.style.color = "white";
  append.appendChild(text)
  // 追加
  target.parentNode.insertBefore(append, target);
};