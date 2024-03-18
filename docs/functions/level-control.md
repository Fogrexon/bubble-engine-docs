---
sidebar_position: 6
---

# レベルの制御

## レベル遷移
レベル遷移はLevelSelectorを使って制御する。ゲームの起動時にレベルのルートとidの紐づけをGameCoreに登録しており、その情報を元にレベル遷移を行う。

```typescript
// シーン遷移
core.levelSelector.moveLevel('ui')
```

## レベルイベント
LevelManagerには、基本的なレベルイベントが登録されていて、それを利用してゲームの進行を制御することができる。
```typescript
// イベントの発火
core.levelManager.call('gameclear')

// イベントの受け取り
core.levelManager.on('gameclear', () => {
  // processing
})

// 現在のレベル状態を取得
core.levelManager.currentState
```

レベルイベントには次のような種類があります。

|レベル名|意味|
|---|---|
|start|レベル開始|
|exit|レベル終了|
|gameover|ゲームオーバー|
|gameclear|ゲームクリア|
|pause|一時停止|
|resume|再開|
