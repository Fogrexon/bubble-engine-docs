---
sidebar_position: 8
---

# ゲームデータの保存

ゲームの進行状況等はGlobalStoreを使って保存します。

## 保存するデータ形式
保存データの形式は、コアの設定時に指定します

```typescript
// 保存データ形式
type StoreData = {
  clearedStage: {
    [stageId: string]: number
  }
  playerStatus: {
    hp: number,
    mp: number,
    level: number,
  }
  inventry: Record<string, number>
}

// 保存データの初期値
const initialStoreData: StoreData = {
  clearedStage: {},
  playerStatus: {
    hp: 100,
    mp: 100,
    level: 1,
  },
  inventry: {
    sword: 1,
    shield: 1,
  }
}
```

## 保存と読み込み
基本的に、GlobalStoreに保存される値は、LocalStorageを用いてブラウザにも保存されます。ゲーム進行中はゲーム中のGlobalStoreとLocalStorage内のデータは同期されます。そのため、開発者やユーザーがデータの保存や読み出しについて気を付ける必要はありません。

```typescript
// データの更新
core.globalStore.dispatch(store => {
  store.clearedStage['stage1'] = 1
  store.playerStatus.hp = 50
  store.inventry.sword = 2
})

// データの読み出し
core.globalStore.getValue('playerStatus.hp')
```

