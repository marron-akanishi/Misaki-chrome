const getBookData = () => {
  // 書籍タイトル
  let title = document.querySelector("body > div.page-wrap > main > div.market-item-detail.u-bg-white > article > div > div.u-bg-white.u-pt-600.u-px-700 > div.container > div > div.u-order-1.l-col-2of5.u-pl-600 > header > h2")
    || document.querySelector("#js-item-info-detail > div.summary > h1");
  title = title.textContent;
  // Boothには発行日が無いため、今日の日付を返却
  const today = new Date();
  const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
  return [title, date];
}

const appendMessage = (url, is_sure) => {
  // 挿入先
  let target = document.querySelector("body > div.page-wrap > main > div.market-item-detail.u-bg-white > article > div > div.u-bg-white.u-pt-600.u-px-700 > div.container")
    || document.querySelector("#js-item-info-detail");
  // 表示枠
  let append = document.createElement("div");
  append.style.fontSize = "18px";
  append.style.padding = "5px 10px";
  append.style.border = "1px solid gray";
  append.style.borderRadius = "5px";
  append.style.backgroundColor = "#18bc9c";
  append.style.margin = "5px 0";
  append.style.fontFamily = `
    -apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN",
    "メイリオ",Meiryo,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
  `;
  // テキスト
  let text = document.createElement("a");
  text.textContent = is_sure ? "Kotoriにこの書籍が所有登録されています" : "Kotoriにこの書籍が所有登録されている可能性があります";
  text.href = url;
  text.target = "_blank";
  text.style.color = "white";
  text.style.textDecoration = "none";
  // BOOTHではaタグの表示がカスタマイズされているので元に戻す
  text.addEventListener("mouseenter", () => {
    text.style.textDecoration = "underline";
  })
  text.addEventListener("mouseleave", () => {
    text.style.textDecoration = "none";
  })
  append.appendChild(text);
  // 追加
  target.insertBefore(append, target.firstChild);
};

const calcTotalCost = () => {
  // 各レジごとの金額
  let costList = document.getElementsByClassName("cart-box-subtotal-price");
  costList = Array.from(costList);
  // 合計金額の計算
  const cost = costList.reduce((acc, cost) => {
    const costVal = parseInt(cost.textContent.substr(2).replace(',',''), 10);
    return acc + costVal;
  }, 0);
  return cost.toLocaleString();
}

const appendCartTotal = (cost) => {
  // 挿入先
  let target = document.querySelector("#js-carts-index > div.l-carts.container.static-3of4");
  // テキスト
  let append = document.createElement("div");
  append.style.textAlign = "right";
  append.style.fontSize = "15pt";
  append.style.margin = "10px";
  append.textContent = `合計金額：¥ ${cost}`;
  // 追加
  target.insertBefore(append, target.firstChild);
}