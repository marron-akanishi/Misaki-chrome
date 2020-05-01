const getBookData = () => {
  // 書籍タイトル
  const title = document.querySelector("#description > table > tbody > tr:nth-child(1) > td").textContent;
  // 発行日
  let date = document.querySelector("#description > table > tbody > tr:nth-child(5) > td").textContent;
  date = date.replace(/\//g, "-");
  return [title, date];
}

const appendMessage = (url, is_sure) => {
  // 挿入先
  let target = document.getElementById("title");
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
  append.appendChild(text);
  // 追加
  target.insertBefore(append, target.firstChild);
};

const calcTotalCost = () => {
  // 1冊ごとの金額
  let costList = document.querySelectorAll("#container > div > div.clm_g > div > div.wishlist > table > tbody > tr");
  costList = Array.from(costList);
  costList = costList.filter((e) => {
    return e.querySelector("td.action > form > p") != null;
  });
  // 合計金額の計算
  const cost = costList.reduce((acc, cost) => {
    const costVal = parseInt(cost.querySelector("td.item > p.price").textContent.substr(1).replace(',', ''), 10);
    return acc + costVal;
  }, 0);
  return cost.toLocaleString();
}

const appendCartTotal = (cost) => {
  // 挿入先
  let target = document.querySelector("#container > div > div.clm_g > div > div.wishlist");
  // テキスト
  let append = document.createElement("div");
  append.style.textAlign = "right";
  append.style.fontSize = "15pt";
  append.style.margin = "10px";
  append.textContent = `ページ内合計金額：¥ ${cost}`;
  // 追加
  target.insertBefore(append, target.firstChild);
}