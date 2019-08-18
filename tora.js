const getBookData = () => {
  // 書籍タイトル
  const title = document.querySelector("#main > div > section > div.main-info > div:nth-child(2) > div > div.product-info > h1 > span").textContent
  // 発行日
  let date = document.querySelector("#main > div > section > div.main-infosub > div:nth-child(4) > div > section > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > span > a > span").textContent
  date = date.replace(/\//g, "-")
  return [title, date]
}

const appendMessage = () => {
  // 挿入先
  var target = document.getElementsByClassName("product-info")[0]
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
  text.style.textDecoration = "none";
  append.appendChild(text)
  // とらのあなではaタグの表示がカスタマイズされているので元に戻す
  text.addEventListener("mouseenter", () => {
    text.style.textDecoration = "underline"
  })
  text.addEventListener("mouseleave", () => {
    text.style.textDecoration = "none"
  })
  // 追加
  target.insertBefore(append, target.firstChild);
};