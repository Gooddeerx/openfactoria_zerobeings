import{S as he,i as ve,s as ye,e as d,t as B,a as k,c as ke,b as me,d as f,f as C,g as o,m as ge,h as Q,j as we,k as Ce,l as N,n as Ne,o as Te,p as _e,q as j,r as z,u as Ae,v as Le,w as Se,x as be,y as R,z as re}from"./index.22c4bd04.js";import{N as Fe}from"./Nav.25ef4dbe.js";import{u as Ie,f as Me}from"./factory.f2d5dcd9.js";import{w as qe}from"./settings.f5ab2b6d.js";function ce(n,e,l){const t=n.slice();return t[28]=e[l],t}function Ee(n){let e,l,t,r,h,m,u,a,i,_,c,b,L,p,I,X,F,x,P,ee,le,G,Y,te,M,ne,O,Z,se,q,v,V,U,E,J,g,w=n[5]==="hidden"&&fe(n),T=n[7]&&n[7].length>0&&ue(n);function $(s,y){return s[2]?je:We}let D=$(n),H=D(n);function ie(s,y){return s[5]==="hidden"?Be:ze}let oe=ie(n),W=oe(n),K=n[1],S=[];for(let s=0;s<K.length;s+=1)S[s]=de(ce(n,K,s));return{c(){w&&w.c(),e=k(),l=d("header"),t=d("form"),r=d("div"),h=d("label"),h.textContent="name",m=k(),u=d("input"),a=k(),i=d("div"),_=d("label"),_.textContent="symbol",c=k(),b=d("input"),L=k(),p=d("div"),I=d("label"),I.textContent="placeholder uri",X=k(),F=d("input"),x=k(),P=d("div"),T&&T.c(),ee=k(),H.c(),le=k(),G=d("div"),Y=d("label"),Y.textContent="total supply",te=k(),M=d("input"),ne=k(),O=d("div"),Z=d("label"),Z.textContent="base uri",se=k(),q=d("input"),v=k(),W.c(),U=k();for(let s=0;s<S.length;s+=1)S[s].c();E=me(),f(u,"type","text"),f(u,"placeholder","name"),f(r,"class","item"),f(b,"type","text"),f(b,"placeholder","symbol"),f(i,"class","item"),f(F,"type","text"),f(F,"placeholder","placeholder uri (optional. if not set, a default image will be used)"),f(P,"class","file-holder"),f(p,"class","item"),f(M,"type","number"),f(M,"placeholder","total supply"),f(G,"class","item"),f(q,"type","text"),f(q,"placeholder","base uri (optional. you can set it later)"),f(O,"class","item"),f(t,"class",V="form "+n[5]+" svelte-nkiebh"),f(l,"class","svelte-nkiebh")},m(s,y){w&&w.m(s,y),C(s,e,y),C(s,l,y),o(l,t),o(t,r),o(r,h),o(r,m),o(r,u),j(u,n[0].name),o(t,a),o(t,i),o(i,_),o(i,c),o(i,b),j(b,n[0].symbol),o(t,L),o(t,p),o(p,I),o(p,X),o(p,F),j(F,n[0].placeholder),o(p,x),o(p,P),T&&T.m(P,null),o(p,ee),H.m(p,null),o(t,le),o(t,G),o(G,Y),o(G,te),o(G,M),j(M,n[0].supply),o(t,ne),o(t,O),o(O,Z),o(O,se),o(O,q),j(q,n[0].base),o(t,v),W.m(t,null),C(s,U,y);for(let A=0;A<S.length;A+=1)S[A]&&S[A].m(s,y);C(s,E,y),J||(g=[z(u,"input",n[18]),z(b,"input",n[19]),z(F,"input",n[20]),z(M,"input",n[22]),z(q,"input",n[23]),z(t,"submit",Ae(Le(n[13])))],J=!0)},p(s,y){if(s[5]==="hidden"?w?w.p(s,y):(w=fe(s),w.c(),w.m(e.parentNode,e)):w&&(w.d(1),w=null),y&1&&u.value!==s[0].name&&j(u,s[0].name),y&1&&b.value!==s[0].symbol&&j(b,s[0].symbol),y&1&&F.value!==s[0].placeholder&&j(F,s[0].placeholder),s[7]&&s[7].length>0?T?T.p(s,y):(T=ue(s),T.c(),T.m(P,null)):T&&(T.d(1),T=null),D===(D=$(s))&&H?H.p(s,y):(H.d(1),H=D(s),H&&(H.c(),H.m(p,null))),y&1&&_e(M.value)!==s[0].supply&&j(M,s[0].supply),y&1&&q.value!==s[0].base&&j(q,s[0].base),oe===(oe=ie(s))&&W?W.p(s,y):(W.d(1),W=oe(s),W&&(W.c(),W.m(t,null))),y&32&&V!==(V="form "+s[5]+" svelte-nkiebh")&&f(t,"class",V),y&2){K=s[1];let A;for(A=0;A<K.length;A+=1){const ae=ce(s,K,A);S[A]?S[A].p(ae,y):(S[A]=de(ae),S[A].c(),S[A].m(E.parentNode,E))}for(;A<S.length;A+=1)S[A].d(1);S.length=K.length}},d(s){w&&w.d(s),s&&N(e),s&&N(l),T&&T.d(),H.d(),W.d(),s&&N(U),Se(S,s),s&&N(E),J=!1,be(g)}}}function He(n){let e;return{c(){e=d("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>loading...',f(e,"class","loading")},m(l,t){C(l,e,t)},p:R,d(l){l&&N(e)}}}function fe(n){let e,l,t,r,h,m,u,a,i,_,c;return{c(){e=d("div"),l=d("div"),t=d("div"),r=B("ACCOUNT: "),h=B(n[10]),m=k(),u=B(n[9]),a=k(),i=d("button"),i.textContent="+ create a collection",f(l,"class","network svelte-nkiebh"),f(i,"class","svelte-nkiebh"),f(e,"class","top svelte-nkiebh")},m(b,L){C(b,e,L),o(e,l),o(l,t),o(t,r),o(t,h),o(t,m),o(t,u),o(e,a),o(e,i),_||(c=z(i,"click",n[11]),_=!0)},p(b,L){L&1024&&Q(h,b[10]),L&512&&Q(u,b[9])},d(b){b&&N(e),_=!1,c()}}}function ue(n){let e,l;return{c(){e=d("img"),f(e,"class","thumb"),re(e.src,l=n[7])||f(e,"src",l)},m(t,r){C(t,e,r)},p(t,r){r&128&&!re(e.src,l=t[7])&&f(e,"src",l)},d(t){t&&N(e)}}}function We(n){let e,l,t;return{c(){e=d("input"),f(e,"type","file"),f(e,"accept","image/*")},m(r,h){C(r,e,h),l||(t=[z(e,"change",n[21]),z(e,"change",n[14])],l=!0)},p:R,d(r){r&&N(e),l=!1,be(t)}}}function je(n){let e;return{c(){e=d("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>uploading...',f(e,"class","loading")},m(l,t){C(l,e,t)},p:R,d(l){l&&N(e)}}}function ze(n){let e,l,t,r,h;function m(i,_){return i[3]?Oe:Ge}let u=m(n),a=u(n);return{c(){e=d("div"),a.c(),l=k(),t=d("button"),t.textContent="close",f(t,"class","svelte-nkiebh"),f(e,"class","item")},m(i,_){C(i,e,_),a.m(e,null),o(e,l),o(e,t),r||(h=z(t,"click",n[12]),r=!0)},p(i,_){u!==(u=m(i))&&(a.d(1),a=u(i),a&&(a.c(),a.m(e,l)))},d(i){i&&N(e),a.d(),r=!1,h()}}}function Be(n){return{c:R,m:R,p:R,d:R}}function Ge(n){let e;return{c(){e=d("input"),f(e,"type","submit"),e.value="Deploy"},m(l,t){C(l,e,t)},d(l){l&&N(e)}}}function Oe(n){let e;return{c(){e=d("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>deploying...',f(e,"class","loading")},m(l,t){C(l,e,t)},d(l){l&&N(e)}}}function pe(n){let e,l=n[28].name+"",t,r,h=n[28].symbol+"",m,u;return{c(){e=d("h2"),t=B(l),r=B(" ("),m=B(h),u=B(")")},m(a,i){C(a,e,i),o(e,t),o(e,r),o(e,m),o(e,u)},p(a,i){i&2&&l!==(l=a[28].name+"")&&Q(t,l),i&2&&h!==(h=a[28].symbol+"")&&Q(m,h)},d(a){a&&N(e)}}}function de(n){let e,l,t,r=n[28].address+"",h,m,u,a=n[28].name&&pe(n);return{c(){e=d("a"),a&&a.c(),l=k(),t=d("div"),h=B(r),m=k(),f(e,"class","item"),f(e,"href",u="/contract/#"+n[28].address)},m(i,_){C(i,e,_),a&&a.m(e,null),o(e,l),o(e,t),o(t,h),o(e,m)},p(i,_){i[28].name?a?a.p(i,_):(a=pe(i),a.c(),a.m(e,l)):a&&(a.d(1),a=null),_&2&&r!==(r=i[28].address+"")&&Q(h,r),_&2&&u!==(u="/contract/#"+i[28].address)&&f(e,"href",u)},d(i){i&&N(e),a&&a.d()}}}function Pe(n){let e,l,t,r,h,m,u;r=new Fe({props:{v1:n[16],v2:n[15],network:n[10],account:n[9]}});function a(c,b){return c[4]?He:Ee}let i=a(n),_=i(n);return{c(){e=d("div"),l=B(n[8]),t=k(),ke(r.$$.fragment),h=k(),_.c(),m=me(),f(e,"class","error")},m(c,b){C(c,e,b),o(e,l),C(c,t,b),ge(r,c,b),C(c,h,b),_.m(c,b),C(c,m,b),u=!0},p(c,[b]){(!u||b&256)&&Q(l,c[8]);const L={};b&1024&&(L.network=c[10]),b&512&&(L.account=c[9]),r.$set(L),i===(i=a(c))&&_?_.p(c,b):(_.d(1),_=i(c),_&&(_.c(),_.m(m.parentNode,m)))},i(c){u||(we(r.$$.fragment,c),u=!0)},o(c){Ce(r.$$.fragment,c),u=!1},d(c){c&&N(e),c&&N(t),Ne(r,c),c&&N(h),_.d(c),c&&N(m)}}}function Ve(n,e,l){let{version:t}=e,r,h,m=[],u=!1,a,i,_="hidden",c=[],b="",L="",p={name:"",symbol:"",placeholder:"",supply:"",base:""},I,X,F;const x=async()=>{l(4,i=!0),l(9,I=await h.account);let v=await F.getPastEvents("CollectionAdded",{filter:{receiver:I},fromBlock:0,toBlock:"latest"}).then(g=>g.map(w=>w.returnValues.collection)),V=Array.from(new Set(v)),U=[];const E=new F0;for(let g of V)console.log("address",g),U.push({address:g,name:"fetching...",symbol:""});l(1,m=U),l(4,i=!1);let J=[];for(let g=0;g<m.length;g++){console.log("FEtching",g);let w=m[g].address;await E.init({web3:r,contract:w}),console.log("initialized");let T=await E.api.owner().call();if(console.log("owner",T),T.toLowerCase()!==I.toLowerCase()){console.log("remove at",g),J.push(g);continue}else{let $=await E.api.name().call(),D=await E.api.symbol().call();console.log("name, symbol",$,D),l(1,m[g].name=$,m),l(1,m[g].symbol=D,m),l(1,m)}}for(let g of J)m.splice(g,1)},P=()=>{l(5,_="")},ee=()=>{l(5,_="hidden")},le=async()=>{l(3,a=!0),console.log("payload",p);try{let v=await F.methods.genesis(I,p.name,p.symbol,{placeholder:p.placeholder,base:p.base,supply:p.supply,permanent:!1}).send({from:I});console.log("tx",v),l(3,a=!1),location.href="/contract/#"+v.events.CollectionAdded.returnValues.collection}catch(v){l(8,L=v.message)}},G=async()=>{if(c.length>0){l(2,u=!0);try{let v=await Ie(c[0]);l(0,p.placeholder="ipfs://"+v,p)}catch{confirm("NFT.STORAGE api key needed. Go to the config page and set it first")&&window.open("/config/")}l(2,u=!1)}};let Y=t==="v2"?"selected":"",te=t==="v1"?"selected":"";Te(async()=>{try{h=new Superprovider({walletconnect:qe});let v=await h.current();v||(v=await h.connect()),l(9,I=h.account),r=new Web3(v),F=await Me(r,t),l(10,X=F.$network),await x()}catch(v){l(8,L=v.message)}});function M(){p.name=this.value,l(0,p)}function ne(){p.symbol=this.value,l(0,p)}function O(){p.placeholder=this.value,l(0,p)}function Z(){c=this.files,l(6,c)}function se(){p.supply=_e(this.value),l(0,p)}function q(){p.base=this.value,l(0,p)}return n.$$set=v=>{"version"in v&&l(17,t=v.version)},n.$$.update=()=>{n.$$.dirty&1&&p&&p.placeholder&&fetch("https://ipfs.io/ipfs/"+p.placeholder.replace("ipfs://","")).then(v=>v.json()).then(v=>{v.image.startsWith("ipfs://")?l(7,b="https://ipfs.io/ipfs/"+v.image.replace("ipfs://","")):v.image.startsWith("http")&&l(7,b=v.image)})},[p,m,u,a,i,_,c,b,L,I,X,P,ee,le,G,Y,te,t,M,ne,O,Z,se,q]}class Ke extends he{constructor(e){super(),ve(this,e,Ve,Pe,ye,{version:17})}}export{Ke as I};
