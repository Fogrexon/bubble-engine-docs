"use strict";(self.webpackChunkbubble_engine_docs=self.webpackChunkbubble_engine_docs||[]).push([[478],{6787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const r={sidebar_position:1},i="\u30b2\u30fc\u30e0\u306e\u57fa\u672c\u69cb\u6210",a={id:"tutorials/core",title:"\u30b2\u30fc\u30e0\u306e\u57fa\u672c\u69cb\u6210",description:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8a2d\u5b9a",source:"@site/docs/tutorials/core.md",sourceDirName:"tutorials",slug:"/tutorials/core",permalink:"/bubble-engine-docs/en/docs/tutorials/core",draft:!1,unlisted:!1,editUrl:"https://github.com/Fogrexon/bubble-engine-docs/tree/main/docs/tutorials/core.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb",permalink:"/bubble-engine-docs/en/docs/category/\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"},next:{title:"GameEntry\u306e\u8a2d\u5b9a",permalink:"/bubble-engine-docs/en/docs/tutorials/entry"}},l={},c=[{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8a2d\u5b9a",id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8a2d\u5b9a",level:2},{value:"\u30b2\u30fc\u30e0\u306e\u30ec\u30d9\u30eb\u4f5c\u6210",id:"\u30b2\u30fc\u30e0\u306e\u30ec\u30d9\u30eb\u4f5c\u6210",level:2},{value:"\u30b2\u30fc\u30e0\u306e\u30e1\u30a4\u30f3\u30eb\u30fc\u30d7\u306e\u8a2d\u5b9a",id:"\u30b2\u30fc\u30e0\u306e\u30e1\u30a4\u30f3\u30eb\u30fc\u30d7\u306e\u8a2d\u5b9a",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u30b2\u30fc\u30e0\u306e\u57fa\u672c\u69cb\u6210",children:"\u30b2\u30fc\u30e0\u306e\u57fa\u672c\u69cb\u6210"}),"\n",(0,o.jsx)(n.h2,{id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8a2d\u5b9a",children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8a2d\u5b9a"}),"\n",(0,o.jsx)(n.p,{children:"\u30b2\u30fc\u30e0\u306e\u8d77\u52d5\u306b\u5fc5\u8981\u306a\u8a2d\u5b9a\u9805\u76ee\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// \u4e8b\u524d\u30ed\u30fc\u30c9\u30a2\u30bb\u30c3\u30c8\n// type: Record<string, AssetBase>\nexport const staticLoadAssets = {\n  sprite: new SpriteAsset(\"path/to/sprite.png\"),\n  sound: new SoundAsset(\"path/to/sound.mp3\", 'bgm'),\n} as const\n\n// \u30ad\u30fc\u30d0\u30a4\u30f3\u30c9\u8a2d\u5b9a\n// type: KeyBind\nexport const keyBinds = {\n  main: {\n    jump: [{\n      type: 'scalarkey1',\n      value: 'space'\n    }, {\n      type: 'scalarkey1',\n      value: 'GamepadA'\n    }],\n    move: [{\n      type: 'vector2key4',\n      xPositiveValue: 'd',\n      xNegativeValue: 'a',\n      yPositiveValue: 's',\n      yNegativeValue: 'w'\n    }, {\n      type: 'vector2key2',\n      xValue: 'GamepadAxisLeftX',\n      yValue: 'GamepadAxisLeftY'\n    }]\n  }\n} as const\n\n// \u63cf\u753b\u30ec\u30a4\u30e4\u30fc\u306e\u8a2d\u5b9a\n// type: string[]\nexport const graphicLayers = ['background', 'main', 'ui'] as const\n\n// \u885d\u7a81\u30ec\u30a4\u30e4\u30fc\u306e\u8a2d\u5b9a\n// type: string[]\nexport const collisionLayers = ['player', 'enemy', 'bullet', 'floor'] as const\n\n// \u885d\u7a81\u30ec\u30a4\u30e4\u30fc\u540c\u58eb\u306e\u885d\u7a81\u8a2d\u5b9a\n// type: [CollisionLayer, CollisionLayer][]\nexport const collisionPairs = [['player', 'enemy'], ['player', 'bullet'], ['player', 'floor'], ['enemy', 'bullet'], ['enemy', 'floor']] as const\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u30b2\u30fc\u30e0\u306e\u30ec\u30d9\u30eb\u4f5c\u6210",children:"\u30b2\u30fc\u30e0\u306e\u30ec\u30d9\u30eb\u4f5c\u6210"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { titleLevelRoot } from './titleLevel';\nimport { gameLevelRoot } from './gameLevel';\nimport { resultLevelRoot } from './resultLevel';\nimport { UILevelManager } from './uiLevelManager';\nimport { GameLevelManager } from './gameLevelManager'\n\nexport const levels = {\n  title: titleLevelRoot,\n  game: gameLevelRoot,\n  result: resultLevelRoot,\n} as const\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u30b2\u30fc\u30e0\u306e\u30e1\u30a4\u30f3\u30eb\u30fc\u30d7\u306e\u8a2d\u5b9a",children:"\u30b2\u30fc\u30e0\u306e\u30e1\u30a4\u30f3\u30eb\u30fc\u30d7\u306e\u8a2d\u5b9a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import {\n  staticLoadAssets,\n  keyBinds,\n  graphicLayers,\n  collisionLayers,\n  collisionPairs,\n  levels,\n} from './templates'\n\nconst gameCore = new GameCore({\n  staticLoadAssets,\n  keyBinds,\n  graphicLayers,\n  collisionLayers,\n  collisionPairs,\n  levels,\n  initialLevel: 'title'\n});\n\n// \u30e1\u30a4\u30f3\u30eb\u30fc\u30d7\u306e\u958b\u59cb\ngameCore.run();\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);