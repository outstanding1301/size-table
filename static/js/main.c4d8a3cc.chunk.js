(this["webpackJsonpsize-table-generator"]=this["webpackJsonpsize-table-generator"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(5),r=n.n(l);n(11),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(2),o=n(3),i=n(1);n(12);var s=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),m=s[0],f=s[1],d=Object(a.useState)(0),E=Object(i.a)(d,2),p=E[0],v=E[1],h=Object(a.useState)({}),b=Object(i.a)(h,2),j=b[0],y=b[1],O=Object(a.useState)({}),g=Object(i.a)(O,2),N=g[0],w=g[1],S={XXS:0,XS:1,S:2,M:3,L:4,XL:5,XXL:6},k=function(){if(-1!=p){if(p.includes("~"))for(var e=p.split("~"),t=Object(i.a)(e,2),n=t[0],a=t[1],c=function(e){l((function(t){return t.concat(e)}))},r=parseInt(n);r<=parseInt(a);r+=10)c(r);else if(p.includes(",")){var u=p.split(",");l((function(e){return e.concat(u)}))}else l((function(e){return e.concat(p)}));l((function(e){return e.sort((function(e,t){return Object.keys(S).includes(e)&&(e=S[e]),Object.keys(S).includes(t)&&(t=S[t]),e-t}))})),document.getElementById("inputSize").value="",v(-1)}},C=function(){if(-1!=p){if(p.includes(",")){var e=p.split(","),t=!0,n=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;j[r]=0,N[r]=0}}catch(u){n=!0,a=u}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}f((function(t){return t.concat(e)}))}else j[p]=0,N[p]=0,f((function(e){return e.concat(p)}));document.getElementById("inputType").value="",v(-1)}},x=function(e){v(e.target.value)},X=function(e){13==e.keyCode&&k()},I=function(e){13==e.keyCode&&C()};return c.a.createElement("div",{className:"frame"},c.a.createElement("div",{className:"add"},c.a.createElement("p",{className:"txt"},"\uc0ac\uc774\uc988 \ucd94\uac00 (ex: 90~130)"),c.a.createElement("div",{className:"inlinediv"},c.a.createElement("input",{id:"inputSize",onChange:x,onKeyDown:X}),c.a.createElement("button",{onClick:k},"\ucd94\uac00"))),c.a.createElement("div",{className:"add"},c.a.createElement("p",{className:"txt"},"\uce21\uc815 \ub300\uc0c1 \ucd94\uac00 (ex: \uae38\uc774,\uc18c\ub9e4,\uc5b4\uae68)"),c.a.createElement("div",{className:"inlinediv"},c.a.createElement("input",{id:"inputType",onChange:x,onKeyDown:I}),c.a.createElement("button",{onClick:C},"\ucd94\uac00"))),c.a.createElement("div",null,c.a.createElement("table",null,c.a.createElement("tr",{className:"head"},c.a.createElement("th",{className:"left"},"\uc0ac\uc774\uc988"),m.map((function(e){return c.a.createElement("th",null,e)}))),n.map((function(e,t){return c.a.createElement("tr",null,c.a.createElement("th",{className:"left"},e),m.map((function(e){return c.a.createElement("th",null,parseFloat(j[e])+parseFloat(N[e])*t)})))}))),c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null),m.map((function(e){return c.a.createElement("th",null,e)}))),c.a.createElement("tr",null,c.a.createElement("th",null,"\uae30\ubcf8\uc0ac\uc774\uc988"),m.map((function(e){return c.a.createElement("th",{className:"cell"},c.a.createElement("input",{onChange:(t=e,function(e){y(Object(o.a)({},j,Object(u.a)({},t,e.target.value)))})}));var t}))),c.a.createElement("tr",null,c.a.createElement("th",null,"\uc99d\uac00\ub7c9"),m.map((function(e){return c.a.createElement("th",{className:"cell"},c.a.createElement("input",{onChange:(t=e,function(e){w(Object(o.a)({},N,Object(u.a)({},t,e.target.value)))})}));var t}))))))};r.a.render(c.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.c4d8a3cc.chunk.js.map