---
sidebar_position: 1
---

# ゲームの基本構成

## テンプレートの設定

ゲームの起動に必要な設定項目を作成する

```typescript
// 事前ロードアセット
// type: Record<string, AssetBase>
export const staticLoadAssets = {
  sprite: new SpriteAsset("path/to/sprite.png"),
  sound: new SoundAsset("path/to/sound.mp3", 'bgm'),
} as const

// キーバインド設定
// type: KeyBind
export const keyBinds = {
  main: {
    jump: [{
      type: 'scalarkey1',
      value: 'space'
    }, {
      type: 'scalarkey1',
      value: 'GamepadA'
    }],
    move: [{
      type: 'vector2key4',
      xPositiveValue: 'd',
      xNegativeValue: 'a',
      yPositiveValue: 's',
      yNegativeValue: 'w'
    }, {
      type: 'vector2key2',
      xValue: 'GamepadAxisLeftX',
      yValue: 'GamepadAxisLeftY'
    }]
  }
} as const

// 描画レイヤーの設定
// type: string[]
export const graphicLayers = ['background', 'main', 'ui'] as const

// 衝突レイヤーの設定
// type: string[]
export const collisionLayers = ['player', 'enemy', 'bullet', 'floor'] as const

// 衝突レイヤー同士の衝突設定
// type: [CollisionLayer, CollisionLayer][]
export const collisionPairs = [['player', 'enemy'], ['player', 'bullet'], ['player', 'floor'], ['enemy', 'bullet'], ['enemy', 'floor']] as const
```

## ゲームのレベル作成

```typescript
import { titleLevelRoot } from './titleLevel';
import { gameLevelRoot } from './gameLevel';
import { resultLevelRoot } from './resultLevel';
import { UILevelManager } from './uiLevelManager';
import { GameLevelManager } from './gameLevelManager'

export const levels = {
  title: new UILevelManager(titleLevelRoot()),
  game: new GameLevelManager(gameLevelRoot()),
  result: new UILevelManager(resultLevelRoot()),
} as const
```

## ゲームのメインループの設定

```typescript
import {
  staticLoadAssets,
  keyBinds,
  graphicLayers,
  collisionLayers,
  collisionPairs,
  levels,
} from './templates'

const gameCore = new GameCore({
  staticLoadAssets,
  keyBinds,
  graphicLayers,
  collisionLayers,
  collisionPairs,
  levels,
  initialLevel: 'title'
});

// メインループの開始
gameCore.run();
```
