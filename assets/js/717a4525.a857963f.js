"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[365],{2015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>m,metadata:()=>a,toc:()=>i});var o=n(6106),s=n(9252);const m={id:"text-commands",slug:"text-commands",title:"Text Commands",description:"Text commands are the most common type of command. They are used to send a message to the channel.",sidebar_position:5},r=void 0,a={id:"text-commands",title:"Text Commands",description:"Text commands are the most common type of command. They are used to send a message to the channel.",source:"@site/content/text-commands.md",sourceDirName:".",slug:"/text-commands",permalink:"/text-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/GlobalArtInc/nestgram/tree/master/docs/content/text-commands.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"text-commands",slug:"text-commands",title:"Text Commands",description:"Text commands are the most common type of command. They are used to send a message to the channel.",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Message Interactions",permalink:"/interactions/message-interactions"},next:{title:"Contribution Guide",permalink:"/contributing/contribution-guide"}},c={},i=[{value:"Arguments",id:"arguments",level:2}];function d(e){const t={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Create a simple command handler for messages using ",(0,o.jsx)(t.code,{children:"@TextCommand"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'title="src/app.service.ts"',children:"import { Injectable } from '@nestjs/common';\nimport { Context, TextCommand, TextCommandContext } from '@nestgramjs/core';\n\n@Injectable()\nexport class AppService {\n    @TextCommand({\n        name: 'start',\n        description: 'Start command!',\n    })\n    public onStart(@Context() { context }: TextCommandContext) {\n        return context.reply('Start command triggered!');\n    }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"If all goes well, you should see something like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Text Command",src:n(7832).A+"",title:"Text Command",width:"710",height:"140"})}),"\n",(0,o.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsx)(t.p,{children:"You can also use arguments with text commands. Arguments are the words after the command name."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'title="src/app.service.ts"',children:"import { Injectable } from '@nestjs/common';\nimport { Context, TextCommand, TextCommandContext, Arguments } from '@nestgramjs/core';\n\n@Injectable()\nexport class AppService {\n    @TextCommand({\n        name: 'start',\n        description: 'Start command!',\n    })\n    public onStart(@Context() { context }: TextCommandContext, @Arguments() args: string[]) {\n        return context.reply(args.join(' '));\n    }\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7832:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/text_command-782df5bb3c7d38123b1912df5b03d535.png"},9252:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(7378);const s={},m=o.createContext(s);function r(e){const t=o.useContext(m);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(m.Provider,{value:t},e.children)}}}]);