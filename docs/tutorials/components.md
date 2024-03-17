---
sidebar_position: 3
---

# コンポーネント
## コンポーネントの基本的な使い方
```typescript
export const createEntry: CreateEntryFunc = (core) => {
  const sampleComponent = new SampleComponent(...);
  const gameEntry = new GameEntry({
    ...,
    components: [
      sampleComponent,
    ]
  })
}
```

ゲームエントリの設定例

```typescript
export const createSampleEntry: CreateEntryFunc = (core) => {
  // 事前にロードしたspriteキーの画像を利用
  const spriteGraphic = new SpriteGraphic(
    core.staticLoader.get('sprite'),
    // options
    {
      position: new Vector2(150, 50),
      rotation: Math.PI * 2 / 3,
      anchor: new Vector2(50, 50),
      size: new Vector2(100, 100),
    }
  );
  const graphicComponent = new GraphicComponent(core.graphicLayers.main, [shapes]);
  
  const boxCollider = new BoxCollider(
    {
      position: new Vector2(),
      size: new Vector2(50, 50),
    }
  )
  const colliderComponent = new ColliderComponent(core.collisionLayers.player, [boxCollider]);
  
  // 自前のコンポーネントを作ることもできる
  const customComponent = new CustomComponent();

  const gameEntry = new GameEntry({
    id: 'player',
    name: 'player',
    components: [
      graphicComponent,
      colliderComponent,
      customComponent,
    ]
  });
}
```