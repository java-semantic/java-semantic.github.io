(this.webpackJsonpjavasemantic=this.webpackJsonpjavasemantic||[]).push([[0],{205:function(t,e,n){"use strict";n.r(e);n(79),n(80);var c=n(0),a=n.n(c),i=n(75),s=n.n(i),r=(n(85),n(26)),o=n(2),j=(n(86),n(206)),d=n(207),u=n(1),h=function(){var t=Object(o.f)();return Object(u.jsx)("div",{className:"error-page",children:Object(u.jsxs)("div",{className:"error-container",children:[Object(u.jsx)("h1",{children:Object(u.jsx)("b",{children:"404 ERROR"})}),Object(u.jsx)(j.a,{src:"/img/worf.png"}),Object(u.jsx)("p",{children:"My Bat'leth kills all the threats to Picard."}),Object(u.jsx)("p",{children:"My Bat'leth is better than yours."}),Object(u.jsx)("p",{children:"Now flee back to safety, small one."}),Object(u.jsx)(d.a,{className:"primary-button",onClick:function(){t.push("/")},children:"Flee"})]})})},b=(n(96),function(){var t=Object(o.f)();return Object(u.jsxs)("div",{className:"landing-page-parent",children:[Object(u.jsxs)("div",{className:"landing-page",children:[Object(u.jsx)(j.a,{src:"/img/monke.png"}),Object(u.jsx)("h1",{children:"Java Semantic"}),Object(u.jsx)("p",{children:"Automatically version a Maven or Gradle project using conventional commits"}),Object(u.jsxs)("div",{className:"landing-buttons",children:[Object(u.jsx)(d.a,{className:"primary-button",onClick:function(){t.push("/welcome")},children:"Get Started"}),Object(u.jsx)(d.a,{className:"secondary-button",href:"https://github.com/javasemantic",target:"_blank",children:"GitHub"})]})]}),Object(u.jsx)("p",{className:"funny-link",onClick:function(){t.push("/404")},children:"seek death"})]})}),l=n(7),m=(n(97),n(98),n(77)),f=(n(99),function(t){var e=t.path,n=Object(o.f)(),c=["/started","/background"];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m.Navigation,{activeItemId:e,onSelect:function(t){var e=t.itemId;c.includes(e)||n.push(e)},items:[{title:"Home",itemId:"/welcome"},{title:"Background",itemId:"/background",subNav:[{title:"Semantic Version Standard",itemId:"/background/semantic"},{title:"Conventional Commit Standard",itemId:"/background/commit"},{title:"Git Hooks",itemId:"/background/githooks"}]},{title:"Getting Started",itemId:"/started",subNav:[{title:"Maven Setup",itemId:"/started/mavensetup"},{title:"Maven Config",itemId:"/started/mavenconfig"},{title:"Gradle Setup",itemId:"/started/gradlesetup"},{title:"Gradle Config",itemId:"/started/gradleconfig"}]}]})})}),O=function(t){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"info-page",children:[Object(u.jsx)("div",{className:"sidebar-container",children:Object(u.jsx)(f,{path:t.path})}),Object(u.jsx)("div",{className:"body-container",children:t.children})]})})},p=n(6),x=n.n(p),g=n.p+"static/media/home.d563240c.md",v=function(t){var e=Object(c.useState)(),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){fetch(g).then((function(t){return t.text()})).then((function(t){i(t)}))})),Object(u.jsx)(O,{path:t.location.pathname,children:Object(u.jsx)(x.a,{children:a})})},k=n.p+"static/media/semantic-version.d4b4e78b.md",S=function(t){var e=Object(c.useState)(),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){fetch(k).then((function(t){return t.text()})).then((function(t){i(t)}))})),Object(u.jsx)(O,{path:t.location.pathname,children:Object(u.jsx)(x.a,{children:a})})},N=n.p+"static/media/conventional-commits.55fdad3c.md",I=function(t){var e=Object(c.useState)(),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){fetch(N).then((function(t){return t.text()})).then((function(t){i(t)}))})),Object(u.jsx)(O,{path:t.location.pathname,children:Object(u.jsx)(x.a,{children:a})})},y=n.p+"static/media/git-hooks.a3d6905d.md",E=function(t){var e=Object(c.useState)(),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){fetch(y).then((function(t){return t.text()})).then((function(t){i(t)}))})),Object(u.jsx)(O,{path:t.location.pathname,children:Object(u.jsx)(x.a,{children:a})})},w=n.p+"static/media/maven-setup.fdb634d0.md",C=function(t){var e=Object(c.useState)(),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){fetch(w).then((function(t){return t.text()})).then((function(t){i(t)}))})),Object(u.jsx)(O,{path:t.location.pathname,children:Object(u.jsx)(x.a,{children:a})})},G=n.p+"static/media/maven-config.5d96d768.md",M=function(t){var e=Object(c.useState)(),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){fetch(G).then((function(t){return t.text()})).then((function(t){i(t)}))})),Object(u.jsx)(O,{path:t.location.pathname,children:Object(u.jsx)(x.a,{children:a})})},B=n.p+"static/media/gradle-setup.c13979b7.md",H=function(t){var e=Object(c.useState)(),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){fetch(B).then((function(t){return t.text()})).then((function(t){i(t)}))})),Object(u.jsx)(O,{path:t.location.pathname,children:Object(u.jsx)(x.a,{children:a})})},J=n.p+"static/media/grade-config.d1cb2598.md",R=function(t){var e=Object(c.useState)(),n=Object(l.a)(e,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){fetch(J).then((function(t){return t.text()})).then((function(t){i(t)}))})),Object(u.jsx)(O,{path:t.location.pathname,children:Object(u.jsx)(x.a,{children:a})})};var F=function(){return Object(u.jsx)(r.a,{basename:"",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:b}),Object(u.jsx)(o.a,{exact:!0,path:"/landing",component:b}),Object(u.jsx)(o.a,{exact:!0,path:"/welcome",component:v}),Object(u.jsx)(o.a,{exact:!0,path:"/background/semantic",component:S}),Object(u.jsx)(o.a,{exact:!0,path:"/background/commit",component:I}),Object(u.jsx)(o.a,{exact:!0,path:"/background/githooks",component:E}),Object(u.jsx)(o.a,{exact:!0,path:"/started/mavensetup",component:C}),Object(u.jsx)(o.a,{exact:!0,path:"/started/mavenconfig",component:M}),Object(u.jsx)(o.a,{exact:!0,path:"/started/gradlesetup",component:H}),Object(u.jsx)(o.a,{exact:!0,path:"/started/gradleconfig",component:R}),Object(u.jsx)(o.a,{path:"/",component:h})]})})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))},79:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){},96:function(t,e,n){},97:function(t,e,n){},98:function(t,e,n){}},[[205,1,2]]]);
//# sourceMappingURL=main.043b1a06.chunk.js.map