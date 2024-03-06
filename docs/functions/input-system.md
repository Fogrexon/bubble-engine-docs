---
sidebar_position: 3
---

# 入力システム

ゲームでは、プレイヤーがゲームに対して操作を行うための入力システムが必要です。Bubble Engineでは、ユーザーの複雑な入力をマッピングし、プログラム上で扱いやすい形に変換するための入力システムを提供します。

## キーバインド
キーバインドはユーザーの入力を受け取り、それをゲーム内の入力に変換するための設定です。
キーバインドは次のような構造体で指定します。

```typescript
const keyBinds = {
  profile1: {
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
```

この例では、`profile1`というプロファイルに`jump`と`move`という2つの入力が定義されています。

プロファイルは、ゲーム内で使用するキーバインドのセットを指定します。プロファイルは複数定義することができ、UI操作時とゲームプレイ時、などゲームの状況に応じて簡単に切り替えることができます。
`jump`と`move`は、それぞれジャンプと移動のための入力を定義しています。入力の名前は自由に決めることができます。
入力の設定は配列で指定し、複数のキーに同じ役割を割り当てることや、キーボードとゲームパッド等の異なる入力デバイスに対応することができます。

入力の種類は次のように指定します。
- `scalarkey1`: 1キーの入力をスカラー値に変換する
- `vector2key2`: 2キーの入力を2次元ベクトルに変換する
- `vector2key4`: 4キーの入力を2次元ベクトルに変換する

キーボードのキーは押しているかどうかを0か1で表現するため、二次元ベクトルの入力には4つのキーが必要です。
一方、ゲームパッドのアナログスティックは-1から1までの値を取るため、2つのキーで2次元ベクトルの入力を表現することができます。

入力値として指定可能なキーは、[InputDefinition.ts](https://github.com/Fogrexon/bubble-engine/blob/main/src/input/InputDefinition.ts#:~:text=export%20const%20inputableKeyList,as%20const%3B)を参考にしてください。

:::warning
現在、ゲームパッドの入力には対応していません。
:::

## 入力値の取得
InputManagerクラスがキーバインドに基づき、実際の入力をゲーム内の入力に変換します。
```typescript
const inputManager = new InputManager(window, keyBinds);
```
コンストラクタには、入力を受け取る対象のウィンドウと、キーバインドを指定します。

入力値は次のように取得します。
```typescript
const profile1Keybinder = inputManager.getKeyBinder('profile1');
const jumpValue = profile1Keybind.get('jump'); // scalar値
const moveValue = profile1Keybind.get('move'); // vector2値
```
`InputManager`クラスの`getKeyBinder`メソッドで、プロファイルに対応するKeyBinderを取得します。
