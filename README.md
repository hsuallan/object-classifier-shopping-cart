# 說明
[線上預覽](https://hsuallan.github.io/object-classifier-shopping-cart/)  
[研究報告/文件](https://docs.google.com/document/d/1ESX21go0Ku0MFAfYUPezd5mBP86Pl9l5iLQHmjjqCu8/edit?usp=sharing)  
[PPT](https://docs.google.com/presentation/d/1p2YSjUQl2qeRKSPpqP7ZOmle_C0MeGZFXKgW64LiV3c/edit?usp=sharing)  
本專案為畢業專題，當初是以麵包當作主要辨識目標，不過其實所有東西都能辨識，畢竟是使用KNN，會找最相近的  
使用方法為，電腦必須要有鏡頭，並且允許存取，先到管理頁面加入標籤，然後點儲存
要記得加入背景，然後建議個樣本的數量要相同，以免結果差太多  
儲存時會把相關資料存在local storge  
接著回到使用者頁面就能開始玩了，進入使用者介面會自動讀取local storge的資料  
另外有一個玩樂性質高的[副程式](https://bread-web-socket.herokuapp.com/)  
[source](https://github.com/hsuallan/shopping-cart-ws)  
使用web socket(node js)提示結帳的部分資訊  
當初為利用手機來提示目前資訊 很簡陋  
應該可以算是有用到後端:smirk:  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
