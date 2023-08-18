const getBookData = () => {
  // 書籍タイトル
  const title = document.querySelector("h1.page-header").textContent;
  // 発行日
  const table = document.querySelectorAll("div.item-detail > div > div > table > tbody > tr");
  let date = null;
  table.forEach((row) => {
    if (row.querySelector('th').textContent === "発行日") date = row.querySelector('td').textContent.replace('/', '-');
  });
  return [title, date];
}

const appendMessage = (url, is_sure) => {
  // 挿入先
  const target = document.querySelector("div.item-header");
  // 表示枠
  const append = document.createElement("div");
  append.style.fontSize = "16px";
  append.style.padding = "5px 10px";
  append.style.border = "1px solid gray";
  append.style.borderRadius = "5px";
  append.style.backgroundColor = "#18bc9c";
  append.style.marginBottom = "12px";
  // テキスト
  const text = document.createElement("a");
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