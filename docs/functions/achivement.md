---
sidebar_position: 7
---

# アチーブメントの設定

ゲーム中に達成される目標をアチーブメントとして設定することができます。アチーブメントの基準となるステータスと、アチーブメントの達成条件の二つを設定する必要があります。

:::caution
ステータスの変更はアチーブメントの達成条件の計算を伴います。そのため、毎フレームのような高い頻度での変更は避けるべきです。
:::

ゲーム全体におけるアチーブメントは、初回のコアの設定で行います。

```typescript
const globalStatus = {
  legendCrown: {
    name: '伝説の王冠',
    description: '初代皇帝が遺した王冠',
    type: 'once',
  },
  coin: {
    name: 'コイン',
    description: 'ありふれたコイン',
    type: 'number',
    initial: 0,
  },
  legendSpell: {
    name: '伝説の呪文',
    description: '世界を滅ぼすほどの力を持った伝説の呪文',
    type: 'string',
    initial: '???????',
  },
} as const

const globalAchievements = {
  getCrown: {
    conditions: {
      legendCrown: true
    },
    name: '伝説の王冠を獲得',
    description: '伝説の王冠を獲得した',
  },
  getCoin100: {
    // 数字の場合、その数字以上になったら達成
    conditions: { coin: 100 },
    name: 'コイン100枚獲得',
    description: 'コインを100枚獲得した',
  },
  getSpell: {
    conditions: {legendSpell: 'ABCDEFG'},
    name: '伝説の呪文を解読',
    description: '伝説の呪文を解読',
  },
  getAllLegendary: {
    conditions: {
      legendCrown: true,
      legendSpell: 'ABCDEFG'
    },
    name: '伝説の装備をすべて集めた',
    description: '初代皇帝の',
  }
} as const
```

アチーブメントの取得や、達成の場合には、次のように記述します。
```typescript
// 達成状況の確認
core.achievementManager.getStatus('legendCrown')
core.achievementManager.getAchievement('getCrown')

// ゲーム中に一度しか達成されないアチーブメント
core.achievementManager.dispatch('legendCrown')

// 数字やテキストの更新
// 値を直接指定する場合
core.achievementManager.dispatch('coin', 100)
// 値を更新する場合
core.achievementManager.dispatch('legendSpell', (prev) => {
  prev[1] = 'A'
  return prev
})

// アチーブメントの達成の瞬間の通知
core.achievementManager.on('achieve', (id: keyof globalAchievements) => {
  // 通知処理
})
```

アチーブメントの達成状況は逐次localStorageに保存されます。