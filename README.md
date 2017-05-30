# HatenaSample チュートリアル編  
## *React Navigation* とは  
 [React Navigation]:https://reactnavigation.org/ "React Navigation"  
世界中の天才たちが開発してきたReact,React Nativeの両方で動作するナビゲーター  
最近、React Native 0.44からFaceBookも推奨してきたホットなライブラリ。  
React Navigationでは主に画面遷移のコントロールとヘッダー部分をサポートする。  
[例はここ](https://github.com/KokiKono/HatenaSample/blob/turorial/readmes/ReactNavigation.md "example")

## *Flux*とは  
FaceBookがクライアントサイドwebアプリケーションを構築するために使用するアプリケーションアーキテクチャ。
大きな特徴は単一方向データフローを利用してReactの構成可能なビューコンポーネントを補完する。
Fluxアプリケーションには、ディスパッチャ、ストア、ビューの３つの主要部分があるが、MVCモデルとは違う。
## なぜ*Flux*を扱うのか  
ToDoリストで未完了カウントと完了カウントをそれぞれ別のビューで行うとき、未完了Modelを更新した場合、  
完了Modelを更新に更新を促す必要があった。  
このように一つのアクション（未完を完了に）した場合に複数のModelクラスが関係した場合のデータフローには予期せぬ結果が、  
起きる場合があります。こういったアクションを一方向のデータフローに制御することにより、明確かつ関係に関係を組むことができます。  
[詳細はここ](https://github.com/KokiKono/HatenaSample/blob/turorial/readmes/Flux.md "詳細")
