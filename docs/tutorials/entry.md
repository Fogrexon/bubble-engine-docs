---
sidebar_position: 2
---

# GameEntryの設定
## GameEntryの作成
ゲームにおけるコンポーネントの最小単位はGameEntryで管理されます。

```typescript
import { createEntry: createNextEntry } from './next';
// TreeBuildFunc: (core: GameCore) => GameEntry
export const createEntry: TreeBuildFunc = (core) => {
  const tag = new Tag(
    // タグをセット
  )
  const gameEntry = new GameEntry({
    id: 'player',
    name: 'player',
    tag,
    components: [
      // コンポーネントをセット
    ]
  });
  
  gameEntry.addChild(createNextEntry())
  
  return gameEntry
}
```

利用可能なプリセットは次の通りです。

- GameEntry
  - 最も基本的なエントリ
- Player
  - プレイヤーのためのタグなどが設定されたエントリ
- RespawnPoint
  - 通過することでプレイヤーのリスポーン位置が自動設定されるエントリ
- Enemy
  - 敵用のタグなどが設定されたエントリ

    