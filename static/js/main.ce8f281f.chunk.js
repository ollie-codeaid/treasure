(this.webpackJsonptreasure=this.webpackJsonptreasure||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"d":"Lorem ipsum","c":["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],"b":["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],"a":{"answer":{"title":"Clue one","text":["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],"hint":"This is a hint","answer":"answer-one"},"answer-one":{"title":"Clue two","text":["Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],"hint":"This is another hint","answer":"answer-two"}}}')},73:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(14),r=n(0),c=n.n(r),o=n(25),u=n.n(o),s=n(24),l=n(8),d=n(96),j=n(97),b=n(85),m=n(91),p=n(93),x=n(94);function h(e){return Object(i.jsxs)(b.a,{onChange:function(t){return e.setFormValues(t.answer)},onSubmit:function(){return e.onSubmit()},children:[Object(i.jsx)(m.a,{name:"answer",children:Object(i.jsx)(p.a,{name:"answer",type:"text",textAlign:"center"})}),e.formError&&Object(i.jsx)(d.a,{pad:{vertical:"small"},children:Object(i.jsx)(j.a,{color:"status-error",textAlign:"center",children:e.formError})}),Object(i.jsx)(d.a,{align:"center",pad:{vertical:"large"},children:Object(i.jsx)(x.a,{type:"submit",label:"SUBMIT?"})})]})}var O=2e3,f=function(e){return e.toLowerCase().replaceAll(" ","-")};var g=function(e){var t=e.clue,n=Object(r.useState)(""),c=Object(a.a)(n,2),o=c[0],u=c[1],s=Object(r.useState)(!1),b=Object(a.a)(s,2),m=b[0],p=b[1],x=Object(r.useState)(""),g=Object(a.a)(x,2),v=g[0],w=g[1],S=Object(r.useState)(!1),q=Object(a.a)(S,2),E=q[0],y=q[1],A=Object(r.useState)(!1),k=Object(a.a)(A,2),C=k[0],D=k[1];Object(r.useEffect)((function(){f(o)===t.answer?(p(!0),setTimeout((function(){return D(!0)}),O)):E&&(w(t.hint),y(!1))}),[E]);var F=m?"fadeOut":"fadeIn",L=m?O:4e3;return C?Object(i.jsx)(l.a,{to:"/treasure/".concat(f(o),"/")}):Object(i.jsxs)(d.a,{pad:"large",animation:{type:F,duration:L},align:"center",children:[Object(i.jsx)(d.a,{align:"center",children:t.text.map((function(e,t){return Object(i.jsx)(j.a,{textAlign:"center",children:e},"".concat(t))}))}),Object(i.jsx)(h,{onSubmit:function(){return y(!0)},setFormValues:u,formError:v})]})},v=n(95),w={global:{colors:{theme:"#9BADD7",background:"#FBF8F7",highlight:"#8E6699",text:{dark:"#f8f8f8",light:"#333333"}},focus:{border:{color:"highlight"}},font:{family:"Quattrocento Sans",size:"18px",height:"20px"}},button:{border:{radius:"18px",color:"theme"},color:"theme"}},S=function(e){var t=e.children;return Object(i.jsx)(v.a,{theme:w,full:!0,background:"background",children:Object(i.jsx)(d.a,{justify:"center",fill:"vertical",children:t})})},q=n(17),E=n(98);var y=function(e){var t=e.title,n=e.text,c=e.firstClueSlug,o=Object(r.useState)(!1),u=Object(a.a)(o,2),s=u[0],b=u[1],m=Object(r.useState)(!1),p=Object(a.a)(m,2),h=p[0],f=p[1];return Object(r.useEffect)((function(){s&&setTimeout((function(){return f(!0)}),O)}),[s]),h?Object(i.jsx)(l.a,{to:"/treasure/".concat(c,"/")}):Object(i.jsxs)(d.a,{pad:"large",animation:s?{type:"fadeOut",duration:2e3}:{},align:"center",children:[Object(i.jsxs)(d.a,{align:"center",children:[Object(i.jsxs)(E.a,{textAlign:"center",color:"theme",children:["Welcome to the ",t," treasure hunt!"]}),n.map((function(e,t){return Object(i.jsx)(j.a,{textAlign:"center",children:e},"".concat(t))}))]}),Object(i.jsx)(d.a,{align:"center",pad:{vertical:"large"},children:Object(i.jsx)(x.a,{onClick:function(){return b(!0)},label:"PROCEED?"})})]})},A=n(99),k=n.p+"static/media/treasure.5db996af.png";var C=function(e){var t=e.title,n=e.text;return Object(i.jsx)(d.a,{pad:"large",animation:{type:"fadeIn",duration:4e3},align:"center",children:Object(i.jsxs)(d.a,{align:"center",children:[Object(i.jsxs)(E.a,{textAlign:"center",color:"theme",children:[t," complete!"]}),Object(i.jsx)(A.a,{width:"100px",src:k}),n.map((function(e,t){return Object(i.jsx)(j.a,{textAlign:"center",children:e},"".concat(t))}))]})})};function D(){var e=Object.keys(q.a)[0],t=Object.values(q.a).slice(-1)[0].answer;return Object(i.jsx)(s.a,{children:Object(i.jsx)(S,{children:Object(i.jsxs)(l.d,{children:[Object.entries(q.a).map((function(e,t){var n=Object(a.a)(e,2),r=n[0],c=n[1];return Object(i.jsx)(l.b,{path:"/treasure/".concat(r,"/"),children:Object(i.jsx)(g,{clue:c})},"".concat(t))})),Object(i.jsx)(l.b,{path:"/treasure/".concat(t),children:Object(i.jsx)(C,{title:q.d,text:q.b})}),Object(i.jsx)(l.b,{path:"/",children:Object(i.jsx)(y,{title:q.d,text:q.c,firstClueSlug:e})})]})})})}u.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(D,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.ce8f281f.chunk.js.map