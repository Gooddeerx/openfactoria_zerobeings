import{S as $,i as F,s as G,c as O,a as k,e as o,d as a,m as R,f as c,g as b,q as N,v as q,w as P,j as Y,k as j,n as B,l as _,u as C}from"./index.ab445ea7.js";import H from"https://esm.run/localforage";import{N as K}from"./Nav.50a4621f.js";function L(r){let e,s,i;return{c(){e=o("input"),a(e,"type","text"),a(e,"placeholder","NFT.STORAGE key"),a(e,"class","svelte-n3syeu")},m(t,l){c(t,e,l),C(e,r[0]),s||(i=N(e,"input",r[4]),s=!0)},p(t,l){l&1&&e.value!==t[0]&&C(e,t[0])},d(t){t&&_(e),s=!1,i()}}}function M(r){let e,s,i;return{c(){e=o("input"),e.disabled=!0,a(e,"type","text"),a(e,"placeholder","NFT.STORAGE key"),a(e,"class","svelte-n3syeu")},m(t,l){c(t,e,l),C(e,r[0]),s||(i=N(e,"input",r[3]),s=!0)},p(t,l){l&1&&e.value!==t[0]&&C(e,t[0])},d(t){t&&_(e),s=!1,i()}}}function z(r){let e,s,i,t,l,f;return{c(){e=o("input"),s=k(),i=o("br"),t=o("br"),l=k(),f=o("div"),f.innerHTML='You can get a free API key at <a href="https://nft.storage" class="svelte-n3syeu">https://nft.storage</a>',a(e,"type","submit"),e.value="save",a(f,"class","description svelte-n3syeu")},m(u,p){c(u,e,p),c(u,s,p),c(u,i,p),c(u,t,p),c(u,l,p),c(u,f,p)},d(u){u&&_(e),u&&_(s),u&&_(i),u&&_(t),u&&_(l),u&&_(f)}}}function D(r){let e;return{c(){e=o("div"),e.textContent="saved",a(e,"class","btn disabled svelte-n3syeu")},m(s,i){c(s,e,i)},d(s){s&&_(e)}}}function J(r){let e,s,i,t,l,f,u,p,v,T,E,S;e=new K({props:{config:"selected"}});function g(n,y){return n[1]?M:L}let I=g(r),m=I(r);function w(n,y){return n[1]?D:z}let A=w(r),d=A(r);return{c(){O(e.$$.fragment),s=k(),i=o("div"),t=o("form"),l=o("div"),f=o("label"),f.textContent="NFT.STORAGE API KEY",u=k(),m.c(),p=k(),v=o("div"),d.c(),a(l,"class","item"),a(v,"class","item"),a(t,"class","form svelte-n3syeu"),a(i,"class","top")},m(n,y){R(e,n,y),c(n,s,y),c(n,i,y),b(i,t),b(t,l),b(l,f),b(l,u),m.m(l,null),b(t,p),b(t,v),d.m(v,null),T=!0,E||(S=N(t,"submit",q(P(r[2]))),E=!0)},p(n,[y]){I===(I=g(n))&&m?m.p(n,y):(m.d(1),m=I(n),m&&(m.c(),m.m(l,null))),A!==(A=w(n))&&(d.d(1),d=A(n),d&&(d.c(),d.m(v,null)))},i(n){T||(Y(e.$$.fragment,n),T=!0)},o(n){j(e.$$.fragment,n),T=!1},d(n){B(e,n),n&&_(s),n&&_(i),m.d(),d.d(),E=!1,S()}}}function Q(r,e,s){let i=H.createInstance({name:"api_key"}),t="",l;i.getItem("key").then(v=>{s(0,t=v)});const f=async()=>{await i.setItem("key",t),s(1,l=!0)};function u(){t=this.value,s(0,t)}function p(){t=this.value,s(0,t)}return[t,l,f,u,p]}class U extends ${constructor(e){super(),F(this,e,Q,J,G,{})}}new U({target:document.getElementById("config")});
