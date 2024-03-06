---
sidebar_position: 4
---

# ゲーム時間システム

実際にウェブサイトが表示されている時間と、ゲーム内時間は異なることがあります。例えばゲーム中に一時停止している場合、ウェブサイト上での表示時間は進んでいるが、ゲーム内時間は止まっていて欲しいことがあります。
アニメーションやプレイヤーキャラクターの移動をゲーム内時間で制御するため、Bubble Engineではブラウザが提供する時間とは別に、ゲーム内時間を管理するシステムを提供します。

```typescript
const time = new Time();

// ゲーム内時間の取得
const gameTime = time.gameTime;

// 前フレームからの時間差の取得
const deltaTime = time.deltaTime;

// タイムスケールの設定
time.timeScale = 0.5;

// タイムスケールに依存しない時間の取得
const unscaledTime = time.unscaledTime;

// タイムスケールに依存しない前フレームからの時間差の取得
const unscaledDeltaTime = time.unscaledDeltaTime;
```