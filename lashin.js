const getBookData = () => {
  // 書籍タイトル
  const title = document.querySelector("#item_data > div.item_name > h1").textContent
  // 発行日
  let date = document.querySelector("#item_data > table > tbody > tr:nth-child(3) > td").textContent
  date = date.replace("年", "-").replace("月","-").replace("日","")
  return [title, date]
}

const appendMessage = (url, is_sure) => {
  // 挿入先
  var target = document.getElementById("item_data")
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
  text.textContent = is_sure ? "Kotoriにこの書籍が所有登録されています" : "Kotoriにこの書籍が所有登録されている可能性があります"
  text.href = url
  text.target = "_blank"
  text.style.color = "white";
  append.appendChild(text)
  // 追加
  target.insertBefore(append, target.firstChild);
};