---
sidebar_position: 4
---

# カスタムコンポーネントを作ってみよう

スペースを押すとゲームが開始されるというシンプルなコンポーネントを作ってみる

```typescript
export class TitleButtonComponent extends ComponentBase {
  private input: core.InputManager;
  private selector: core.LevelSelector;
  
  constructor(input: core.InputManager, selector: core.LevelSelector) {
    super();
    this.input = input;
    this.selector = selector;
  }
  
  public override onUpdate() {
    if (this.input.getKeyBinder().get('space')) {
      this.selector.moveLevel('game');
    }
  }
}
```

このコンポーネントを使って、ゲームのエントリを作ってみましょう。

```typescript
export const createTitleEntry: CreateEntryFunc = (core) => {
  const titleButtonComponent = new TitleButtonComponent(core.inputManager, core.levelSelector);
  const gameEntry = new GameEntry({
    id: 'title',
    name: 'title',
    components: [
      titleButtonComponent,
    ]
  });
  return gameEntry;
}
```