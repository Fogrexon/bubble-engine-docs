"use strict";(self.webpackChunkbubble_engine_docs=self.webpackChunkbubble_engine_docs||[]).push([[496],{8842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=t(4848),s=t(8453);const c={sidebar_position:6},l="\u30ec\u30d9\u30eb\u306e\u5236\u5fa1",i={id:"functions/level-control",title:"\u30ec\u30d9\u30eb\u306e\u5236\u5fa1",description:"\u30ec\u30d9\u30eb\u9077\u79fb",source:"@site/docs/functions/level-control.md",sourceDirName:"functions",slug:"/functions/level-control",permalink:"/bubble-engine-docs/en/docs/functions/level-control",draft:!1,unlisted:!1,editUrl:"https://github.com/Fogrexon/bubble-engine-docs/tree/main/docs/functions/level-control.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u30b2\u30fc\u30e0\u306e\u51e6\u7406\u9806",permalink:"/bubble-engine-docs/en/docs/functions/game-pipeline"},next:{title:"\u30a2\u30c1\u30fc\u30d6\u30e1\u30f3\u30c8\u306e\u8a2d\u5b9a",permalink:"/bubble-engine-docs/en/docs/functions/achivement"}},o={},d=[{value:"\u30ec\u30d9\u30eb\u9077\u79fb",id:"\u30ec\u30d9\u30eb\u9077\u79fb",level:2},{value:"\u30ec\u30d9\u30eb\u30a4\u30d9\u30f3\u30c8",id:"\u30ec\u30d9\u30eb\u30a4\u30d9\u30f3\u30c8",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u30ec\u30d9\u30eb\u306e\u5236\u5fa1",children:"\u30ec\u30d9\u30eb\u306e\u5236\u5fa1"}),"\n",(0,r.jsx)(n.h2,{id:"\u30ec\u30d9\u30eb\u9077\u79fb",children:"\u30ec\u30d9\u30eb\u9077\u79fb"}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\u9077\u79fb\u306fLevelSelector\u3092\u4f7f\u3063\u3066\u5236\u5fa1\u3059\u308b\u3002\u30b2\u30fc\u30e0\u306e\u8d77\u52d5\u6642\u306b\u30ec\u30d9\u30eb\u306e\u30eb\u30fc\u30c8\u3068id\u306e\u7d10\u3065\u3051\u3092GameCore\u306b\u767b\u9332\u3057\u3066\u304a\u308a\u3001\u305d\u306e\u60c5\u5831\u3092\u5143\u306b\u30ec\u30d9\u30eb\u9077\u79fb\u3092\u884c\u3046\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// \u30b7\u30fc\u30f3\u9077\u79fb\ncore.levelSelector.moveLevel('ui')\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30ec\u30d9\u30eb\u30a4\u30d9\u30f3\u30c8",children:"\u30ec\u30d9\u30eb\u30a4\u30d9\u30f3\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"LevelManager\u306b\u306f\u3001\u57fa\u672c\u7684\u306a\u30ec\u30d9\u30eb\u30a4\u30d9\u30f3\u30c8\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u3066\u3001\u305d\u308c\u3092\u5229\u7528\u3057\u3066\u30b2\u30fc\u30e0\u306e\u9032\u884c\u3092\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// \u30a4\u30d9\u30f3\u30c8\u306e\u767a\u706b\ncore.levelManager.call('gameclear')\n\n// \u30a4\u30d9\u30f3\u30c8\u306e\u53d7\u3051\u53d6\u308a\ncore.levelManager.on('gameclear', () => {\n  // processing\n})\n\n// \u73fe\u5728\u306e\u30ec\u30d9\u30eb\u72b6\u614b\u3092\u53d6\u5f97\ncore.levelManager.currentState\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u30ec\u30d9\u30eb\u30a4\u30d9\u30f3\u30c8\u306b\u306f\u6b21\u306e\u3088\u3046\u306a\u7a2e\u985e\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30ec\u30d9\u30eb\u540d"}),(0,r.jsx)(n.th,{children:"\u610f\u5473"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"start"}),(0,r.jsx)(n.td,{children:"\u30ec\u30d9\u30eb\u958b\u59cb"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exit"}),(0,r.jsx)(n.td,{children:"\u30ec\u30d9\u30eb\u7d42\u4e86"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gameover"}),(0,r.jsx)(n.td,{children:"\u30b2\u30fc\u30e0\u30aa\u30fc\u30d0\u30fc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gameclear"}),(0,r.jsx)(n.td,{children:"\u30b2\u30fc\u30e0\u30af\u30ea\u30a2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pause"}),(0,r.jsx)(n.td,{children:"\u4e00\u6642\u505c\u6b62"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resume"}),(0,r.jsx)(n.td,{children:"\u518d\u958b"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(6540);const s={},c=r.createContext(s);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);