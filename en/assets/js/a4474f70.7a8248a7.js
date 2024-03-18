"use strict";(self.webpackChunkbubble_engine_docs=self.webpackChunkbubble_engine_docs||[]).push([[132],{3213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var o=t(4848),r=t(8453);const s={sidebar_position:4},c="\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046",i={id:"tutorials/custom-component",title:"\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046",description:"\u30b9\u30da\u30fc\u30b9\u3092\u62bc\u3059\u3068\u30b2\u30fc\u30e0\u304c\u958b\u59cb\u3055\u308c\u308b\u3068\u3044\u3046\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u3063\u3066\u307f\u308b",source:"@site/docs/tutorials/custom-component.md",sourceDirName:"tutorials",slug:"/tutorials/custom-component",permalink:"/bubble-engine-docs/en/docs/tutorials/custom-component",draft:!1,unlisted:!1,editUrl:"https://github.com/Fogrexon/bubble-engine-docs/tree/main/docs/tutorials/custom-component.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u30b2\u30fc\u30e0\u30a8\u30f3\u30c8\u30ea\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046",permalink:"/bubble-engine-docs/en/docs/tutorials/components"},next:{title:"intro",permalink:"/bubble-engine-docs/en/docs/intro"}},l={},a=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046",children:"\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046"}),"\n",(0,o.jsx)(n.p,{children:"\u30b9\u30da\u30fc\u30b9\u3092\u62bc\u3059\u3068\u30b2\u30fc\u30e0\u304c\u958b\u59cb\u3055\u308c\u308b\u3068\u3044\u3046\u30b7\u30f3\u30d7\u30eb\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u3063\u3066\u307f\u308b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export class TitleButtonComponent extends ComponentBase {\n  private input: core.InputManager;\n  private selector: core.LevelSelector;\n  \n  constructor(input: core.InputManager, selector: core.LevelSelector) {\n    super();\n    this.input = input;\n    this.selector = selector;\n  }\n  \n  public override onUpdate() {\n    if (this.input.getKeyBinder().get('space')) {\n      this.selector.moveLevel('game');\n    }\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u3063\u3066\u3001\u30b2\u30fc\u30e0\u306e\u30a8\u30f3\u30c8\u30ea\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export const createTitleEntry: CreateEntryFunc = (core) => {\n  const titleButtonComponent = new TitleButtonComponent(core.inputManager, core.levelSelector);\n  const gameEntry = new GameEntry({\n    id: 'title',\n    name: 'title',\n    components: [\n      titleButtonComponent,\n    ]\n  });\n  return gameEntry;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(6540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);