# Misaki for Chrome
Kotori向けChrome拡張機能   

## 概要
この拡張機能はKotoriに書籍が登録されているかを表示するためのものです。  
所有している書籍の詳細ページにおいてメッセージが表示されます。  

## 対応サイト
以下のURLにおいてメッセージが表示されます。  

- "https://www.melonbooks.co.jp/detail/detail.php?product_id=*",
- "https://www.melonbooks.co.jp/fromagee/detail/detail.php?product_id=*"
- "https://ec.toranoana.shop/tora/ec/item/*/",
- "https://ec.toranoana.jp/tora_r/ec/item/*/"
- "https://shop.lashinbang.com/products/detail/*"
- "https://www.suruga-ya.jp/product/detail/*"

## 導入方法  
Chromeの拡張機能ですが、パッケージ化されていないため現在はフォルダーでの導入になります。  

- このリポジトリをダウンロードまたはクローン  
- Chromeの拡張機能画面においてデベロッパーモードを有効化  
- 「パッケージ化されていない拡張機能を読み込む」でこのフォルダーを選択
- 導入後、詳細より拡張機能のオプションまたはツールバーのアイコンを右クリックしてオプションを選択  
- オプション画面でKotoriのAPIキーを入力し、保存  

これで表示されるようになります。  
なお、この方法ではChrome起動時に警告が表示されます。  