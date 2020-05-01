# Misaki for Chrome
Kotori向けChrome拡張機能   

## 概要
この拡張機能はKotoriに書籍が登録されているかを表示するためのものです。  
所有している書籍の詳細ページにおいてメッセージが表示されます。  

## メッセージについて
メッセージには2種類あります。  
- Kotoriにこの書籍が所有登録されています  
このメッセージは書籍情報のURLもしくはタイトルと発行日が一致した場合に表示されます。  
このメッセージをクリックするとKotoriの書籍詳細に飛びます。  
- Kotoriにこの書籍が所有登録されている可能性があります  
このメッセージはタイトルのみが一致した場合に表示されます。  
このメッセージをクリックするとKotoriのマイページに飛びます。  

## 対応サイト
以下のURLにおいてメッセージが表示されます。  

- "https://www.melonbooks.co.jp/detail/detail.php?product_id=*",
- "https://www.melonbooks.co.jp/fromagee/detail/detail.php?product_id=*"
- "https://ec.toranoana.shop/tora/ec/item/*/",
- "https://ec.toranoana.jp/tora_r/ec/item/*/"
- "https://shop.lashinbang.com/products/detail/*"
- "https://www.suruga-ya.jp/product/detail/*"
- "https://booth.pm/ja/items/*"
- "https://\*.booth.pm/items/*"

また、以下のURLではカートの合計金額が表示されます。

- "https://www.melonbooks.co.jp/mypage/favorite.php"
- "https://www.melonbooks.co.jp/fromagee/mypage/favorite.php"
- "https://booth.pm/carts"

## 導入方法  
Chrome ウェブストアにて公開しています。  
[Misaki - Chrome ウェブストア](https://chrome.google.com/webstore/detail/misaki/fckolnnbohdhdnpleglckaednoiifpjp)  

ウェブストアを経由しないで追加する方法は以下のとおりです。(開発者向け)  

- このリポジトリをダウンロードまたはクローン  
- Chromeの拡張機能画面においてデベロッパーモードを有効化  
- 「パッケージ化されていない拡張機能を読み込む」でこのフォルダーを選択
- 導入後、詳細より拡張機能のオプションまたはツールバーのアイコンを右クリックしてオプションを選択  
- オプション画面でKotoriのAPIキーを入力し、保存  

これで表示されるようになります。  
なお、この方法ではChrome起動時に警告が表示されます。  
