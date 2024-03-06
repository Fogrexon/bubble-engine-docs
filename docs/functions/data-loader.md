---
sidebar_position: 2
---

# データローダー

Bubble Engineは強力なデータローダーを開発者に提供します。
このデータローダーでは、[アセットファイル](./asset)をロードし、紐づけられたキーにしたがってデータを返却する仕組みを持っています。

Bubble Engineでは、StaticLoaderとDynamicLoaderという2つのデータローダーが用意されています。

## StaticFileLoader
StaticFileLoaderは、事前にロードするファイルが決まっている場合に使用します。
基本的にはゲームに必須のアセットを起動時にロードするために使用します。

StaticFileLoaderの利用の際には、ロードするパスとデータの種類、データ自体に結びつけられる独立したキーを設定した構造体を用意します。
この構造体をStaticFileLoaderに渡すことで、ロードが開始されます。

構造体をconstな変数として設定することで、取得の際にキーに対応する型が返却されます。

```typescript
const staticLoadAssets = {
  firstSprite: new SpriteAsset('path/to/first/sprite.png'),
  firstBgm: new SoundAsset('path/to/first/bgm.mp3', 'bgm'),
} as const

export const staticLoader = new StaticFileLoader(staticLoadAssets)

// データの取得
const firstSprite = staticLoader.get('firstSprite') // 返り値の型は正しくSpriteAssetに設定される
```

## DynamicFileLoader
DynamicFileLoaderは事前にロードするファイルが決まっていない場合に使うローダーです。ゲームの状況に応じて遅延してロードさせることができるため、ゲームの起動時間短縮につながるほか、メモリの節約にもつながります。
ただし、当然ながらデータのロード待ちの時間が発生するため、その分の処理を考慮する必要があります。

```typescript
const dynamicLoader = new DynamicFileLoader();

dynamicLoader.load('secondSprite', new SpriteAsset('path/to/second/sprite.png'), (progress) => {
  // ロードの進捗を表示する処理
}).then(() => {
  // ロード完了後の処理
  const secondSprite = (SpriteAsset)dynamicLoader.get('secondSprite') // StaticFileLoaderとは異なり、返り値の型を明示的に指定する必要がある
});

// データをメモリから明示的に解放する
dynamicLoader.dispose('secondSprite')
```

