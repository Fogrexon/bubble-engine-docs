"use strict";(self.webpackChunkbubble_engine_docs=self.webpackChunkbubble_engine_docs||[]).push([[651],{3748:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=t(4848),r=t(8453);const s={sidebar_position:3},i="\u30b2\u30fc\u30e0\u30a8\u30f3\u30c8\u30ea\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046",c={id:"tutorials/components",title:"\u30b2\u30fc\u30e0\u30a8\u30f3\u30c8\u30ea\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046",description:"\u30b2\u30fc\u30e0\u30a8\u30f3\u30c8\u30ea\u306e\u8a2d\u5b9a\u4f8b",source:"@site/docs/tutorials/components.md",sourceDirName:"tutorials",slug:"/tutorials/components",permalink:"/bubble-engine-docs/en/docs/tutorials/components",draft:!1,unlisted:!1,editUrl:"https://github.com/Fogrexon/bubble-engine-docs/tree/main/docs/tutorials/components.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"GameEntry\u306e\u8a2d\u5b9a",permalink:"/bubble-engine-docs/en/docs/tutorials/entry"},next:{title:"\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046",permalink:"/bubble-engine-docs/en/docs/tutorials/custom-component"}},a={},p=[];function l(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u30b2\u30fc\u30e0\u30a8\u30f3\u30c8\u30ea\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046",children:"\u30b2\u30fc\u30e0\u30a8\u30f3\u30c8\u30ea\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046"}),"\n",(0,o.jsx)(e.p,{children:"\u30b2\u30fc\u30e0\u30a8\u30f3\u30c8\u30ea\u306e\u8a2d\u5b9a\u4f8b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"export const createSampleEntry: CreateEntryFunc = (core) => {\n  // \u4e8b\u524d\u306b\u30ed\u30fc\u30c9\u3057\u305fsprite\u30ad\u30fc\u306e\u753b\u50cf\u3092\u5229\u7528\n  const spriteGraphic = new SpriteGraphic(\n    core.staticLoader.get('sprite'),\n    // options\n    {\n      position: new Vector2(150, 50),\n      rotation: Math.PI * 2 / 3,\n      anchor: new Vector2(50, 50),\n      size: new Vector2(100, 100),\n    }\n  );\n  const graphicComponent = new GraphicComponent(core.graphicLayers.main, [shapes]);\n  \n  const boxCollider = new BoxCollider(\n    {\n      position: new Vector2(),\n      size: new Vector2(50, 50),\n    }\n  )\n  const colliderComponent = new ColliderComponent(core.collisionLayers.player, [boxCollider]);\n\n  const gameEntry = new GameEntry({\n    id: 'player',\n    name: 'player',\n    components: [\n      graphicComponent,\n      colliderComponent,\n    ]\n  });\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var o=t(6540);const r={},s=o.createContext(r);function i(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);