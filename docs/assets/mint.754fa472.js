import{S as te,i as le,s as se,e as f,t as I,a as w,d as r,u as ae,f as B,g as l,h as j,l as N,k as W,C as $,j as O,D as ie,o as ne,B as x,p as ee,r as R,q as U,y as oe,c as re,m as ce,n as fe,v as A,z as me}from"./index.534f2e7f.js";import{h as G,M as he}from"./MintTable.a63c07ed.js";function J(s,e,t){const a=s.slice();return a[28]=e[t],a}function V(s){let e,t,a,n,o,c,d,i,h,T,b,k,C,E,M;return{c(){e=f("div"),t=f("h2"),a=I(s[9]),n=I(" ("),o=I(s[10]),c=I(")"),d=w(),i=f("a"),h=f("img"),b=w(),k=I(s[3]),E=w(),M=f("div"),M.textContent="Mint your NFT from an invite list below.",r(t,"class","svelte-1g2ahzm"),ae(h.src,T="/etherscan.png")||r(h,"src",T),r(h,"class","svelte-1g2ahzm"),r(i,"target","_blank"),r(i,"href",C="https://"+s[12]+"etherscan.io/address/"+s[3]+"#code"),r(i,"class","svelte-1g2ahzm"),r(M,"class","annotation svelte-1g2ahzm"),r(e,"class","ns svelte-1g2ahzm")},m(g,z){B(g,e,z),l(e,t),l(t,a),l(t,n),l(t,o),l(t,c),l(e,d),l(e,i),l(i,h),l(i,b),l(i,k),l(e,E),l(e,M)},p(g,z){z&512&&j(a,g[9]),z&1024&&j(o,g[10]),z&8&&j(k,g[3]),z&4104&&C!==(C="https://"+g[12]+"etherscan.io/address/"+g[3]+"#code")&&r(i,"href",C)},d(g){g&&N(e)}}}function ue(s){let e;return{c(){e=f("div"),e.innerHTML="you are not on any invite list<br/>for this vending machine",r(e,"class","empty svelte-1g2ahzm")},m(t,a){B(t,e,a)},p:R,i:R,o:R,d(t){t&&N(e)}}}function de(s){let e,t,a,n=s[0],o=[];for(let c=0;c<n.length;c+=1)o[c]=X(J(s,n,c));return{c(){e=f("table"),t=f("tr"),t.innerHTML=`<th class="svelte-1g2ahzm">name</th> 
          <th class="svelte-1g2ahzm">price</th> 
          <th class="invite-limit svelte-1g2ahzm">limit</th> 
          <th class="invite-mint svelte-1g2ahzm">mint</th>`,a=w();for(let c=0;c<o.length;c+=1)o[c].c();r(e,"class","svelte-1g2ahzm")},m(c,d){B(c,e,d),l(e,t),l(e,a);for(let i=0;i<o.length;i+=1)o[i].m(e,null)},p(c,d){if(d&16385){n=c[0];let i;for(i=0;i<n.length;i+=1){const h=J(c,n,i);o[i]?o[i].p(h,d):(o[i]=X(h),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},i:R,o:R,d(c){c&&N(e),oe(o,c)}}}function ve(s){let e;return{c(){e=f("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>loading invites...',r(e,"class","loading svelte-1g2ahzm")},m(t,a){B(t,e,a)},p:R,i:R,o:R,d(t){t&&N(e)}}}function _e(s){let e,t,a,n,o,c,d=(s[4].name?s[4].name:s[4].key)+"",i,h,T,b,k,C,E,M,g,z,H,F,q,v,y,S,Q,m,L,K;function Z(u,D){return u[6]?ge:pe}let P=Z(s),p=P(s),_=s[8]&&Y(s);return{c(){e=f("div"),t=f("div"),a=f("div"),n=f("div"),n.textContent="invite",o=w(),c=f("div"),i=I(d),h=w(),T=f("div"),b=w(),k=f("button"),k.innerHTML='<i class="fa-solid fa-circle-xmark"></i>',C=w(),E=f("h2"),M=I(s[11]),g=I(" ETH"),z=w(),H=f("div"),F=f("div"),F.textContent="count",q=w(),v=f("div"),y=f("input"),S=w(),p.c(),Q=w(),_&&_.c(),r(n,"class","faded svelte-1g2ahzm"),r(a,"class","invitename svelte-1g2ahzm"),r(T,"class","flexible svelte-1g2ahzm"),r(k,"class","svelte-1g2ahzm"),r(t,"class","header svelte-1g2ahzm"),r(E,"class","svelte-1g2ahzm"),r(F,"class","name svelte-1g2ahzm"),r(y,"type","number"),r(y,"placeholder","mint count"),r(y,"class","svelte-1g2ahzm"),r(v,"class","value svelte-1g2ahzm"),r(H,"class","selector svelte-1g2ahzm"),r(e,"class","showauth info svelte-1g2ahzm")},m(u,D){B(u,e,D),l(e,t),l(t,a),l(a,n),l(a,o),l(a,c),l(c,i),l(t,h),l(t,T),l(t,b),l(t,k),l(e,C),l(e,E),l(E,M),l(E,g),l(e,z),l(e,H),l(H,F),l(H,q),l(H,v),l(v,y),A(y,s[1]),l(e,S),p.m(e,null),l(e,Q),_&&_.m(e,null),m=!0,L||(K=[U(k,"click",s[17]),U(y,"input",s[18]),U(y,"input",s[19])],L=!0)},p(u,D){(!m||D&16)&&d!==(d=(u[4].name?u[4].name:u[4].key)+"")&&j(i,d),(!m||D&2048)&&j(M,u[11]),D&2&&ee(y.value)!==u[1]&&A(y,u[1]),P===(P=Z(u))&&p?p.p(u,D):(p.d(1),p=P(u),p&&(p.c(),p.m(e,Q))),u[8]?_?(_.p(u,D),D&256&&O(_,1)):(_=Y(u),_.c(),O(_,1),_.m(e,null)):_&&(x(),W(_,1,1,()=>{_=null}),$())},i(u){m||(O(_),m=!0)},o(u){W(_),m=!1},d(u){u&&N(e),p.d(),_&&_.d(),L=!1,me(K)}}}function X(s){let e,t,a=(s[28].name?s[28].name:s[28].key)+"",n,o,c,d=s[28].price+"",i,h,T,b,k=s[28].limit+"",C,E,M,g,z,H,F;function q(){return s[21](s[28])}return{c(){e=f("tr"),t=f("td"),n=I(a),o=w(),c=f("td"),i=I(d),h=I(" ETH"),T=w(),b=f("td"),C=I(k),E=w(),M=f("td"),g=f("button"),g.textContent="mint",z=w(),r(t,"class","svelte-1g2ahzm"),r(c,"class","svelte-1g2ahzm"),r(b,"class","invite-limit svelte-1g2ahzm"),r(g,"class","display svelte-1g2ahzm"),r(M,"class","invite-mint svelte-1g2ahzm")},m(v,y){B(v,e,y),l(e,t),l(t,n),l(e,o),l(e,c),l(c,i),l(c,h),l(e,T),l(e,b),l(b,C),l(e,E),l(e,M),l(M,g),l(e,z),H||(F=U(g,"click",q),H=!0)},p(v,y){s=v,y&1&&a!==(a=(s[28].name?s[28].name:s[28].key)+"")&&j(n,a),y&1&&d!==(d=s[28].price+"")&&j(i,d),y&1&&k!==(k=s[28].limit+"")&&j(C,k)},d(v){v&&N(e),H=!1,F()}}}function pe(s){let e,t,a;return{c(){e=f("button"),e.textContent="mint",r(e,"id","mint-button"),r(e,"class","display svelte-1g2ahzm")},m(n,o){B(n,e,o),t||(a=U(e,"click",s[20]),t=!0)},p:R,d(n){n&&N(e),t=!1,a()}}}function ge(s){let e;return{c(){e=f("div"),e.innerHTML='<i class="fa-solid fa-circle-notch fa-spin"></i><br/>minting NFTs...',r(e,"class","loading svelte-1g2ahzm")},m(t,a){B(t,e,a)},p:R,d(t){t&&N(e)}}}function Y(s){let e,t;return e=new he({props:{tx:s[8],web3:s[13],contract:s[3]}}),{c(){re(e.$$.fragment)},m(a,n){ce(e,a,n),t=!0},p(a,n){const o={};n&256&&(o.tx=a[8]),n&8&&(o.contract=a[3]),e.$set(o)},i(a){t||(O(e.$$.fragment,a),t=!0)},o(a){W(e.$$.fragment,a),t=!1},d(a){fe(e,a)}}}function be(s){let e,t,a,n,o,c,d,i,h,T,b,k,C,E,M,g,z,H,F,q,v=s[9]&&V(s);const y=[_e,ve,de,ue],S=[];function Q(m,L){return m[5]?0:m[7]?1:m[0]&&m[0].length>0?2:3}return i=Q(s),h=S[i]=y[i](s),{c(){e=f("div"),t=I(s[2]),a=w(),n=f("div"),o=f("nav"),o.innerHTML=`<h1 class="svelte-1g2ahzm"><a href="/" class="svelte-1g2ahzm">factoria</a></h1> 
  <div>decentralized NFT vending machine maker</div> 
  <div class="buttons svelte-1g2ahzm"><a href="https://factoria.app/docs" class="svelte-1g2ahzm"><i class="fa-solid fa-circle-question"></i></a> 
    <a href="https://github.com/factoria-org/openfactoria" class="svelte-1g2ahzm"><i class="fa-brands fa-github"></i></a> 
    <a href="https://twitter.com/skogard" class="svelte-1g2ahzm"><i class="fa-brands fa-twitter"></i></a> 
    <a href="https://discord.gg/BZtp5F6QQM" class="svelte-1g2ahzm"><i class="fa-brands fa-discord"></i></a></div>`,c=w(),v&&v.c(),d=w(),h.c(),T=w(),b=f("footer"),k=f("i"),C=I(" Experiencing slow load time?"),E=f("br"),M=f("br"),g=I("anyone can "),z=f("a"),H=I("instantly deploy this vending machine and mint!"),r(e,"class","error"),r(o,"class","svelte-1g2ahzm"),r(k,"class","fa-solid fa-circle-info"),r(z,"target","_blank"),r(z,"href",F="https://skinnerbox.factoria.app/#"+s[3]),r(z,"class","svelte-1g2ahzm"),r(b,"class","svelte-1g2ahzm"),r(n,"class","container svelte-1g2ahzm")},m(m,L){B(m,e,L),l(e,t),B(m,a,L),B(m,n,L),l(n,o),l(n,c),v&&v.m(n,null),l(n,d),S[i].m(n,null),l(n,T),l(n,b),l(b,k),l(b,C),l(b,E),l(b,M),l(b,g),l(b,z),l(z,H),q=!0},p(m,[L]){(!q||L&4)&&j(t,m[2]),m[9]?v?v.p(m,L):(v=V(m),v.c(),v.m(n,d)):v&&(v.d(1),v=null);let K=i;i=Q(m),i===K?S[i].p(m,L):(x(),W(S[K],1,1,()=>{S[K]=null}),$(),h=S[i],h?h.p(m,L):(h=S[i]=y[i](m),h.c()),O(h,1),h.m(n,T)),(!q||L&8&&F!==(F="https://skinnerbox.factoria.app/#"+m[3]))&&r(z,"href",F)},i(m){q||(O(h),q=!0)},o(m){W(h),q=!1},d(m){m&&N(e),m&&N(a),m&&N(n),v&&v.d(),S[i].d()}}}function ke(s,e,t){ie();let a={},n=[];const o=new F0;let c=1,d="",i,h,T,b,k,C,E,M,g=0,z,H,F,q,v=new Web3(window.ethereum);const y=async p=>{t(4,T=p),t(5,b=!0),location.hash="#"+i+":"+T.key,await S()},S=async()=>{let p=T;console.log("*",p),k={key:p.key,proof:o._invites[p.key].proof},g=""+o._invites[p.key].condition.raw.price*c,t(11,F=g/10**18);try{t(2,d="");let _=await o.api.mint(k,c).estimate({value:g});console.log("estimate",_)}catch(_){console.log("error",_.message),t(2,d=G(_.message))}},Q=async()=>{try{t(6,C=!0),t(2,d="");let p=T;k={key:p.key,proof:o._invites[p.key].proof},t(8,M=await o.api.mint(k,c).send({value:g}))}catch(p){t(2,d=G(p.message))}t(6,C=!1)},m=()=>{location.hash="#"+i,t(5,b=!1)};ne(async()=>{t(7,E=!0);try{if(location.hash.length>0){let u=location.hash.slice(1).split(":");t(3,i=u[0]),u.length>1&&(h=u[1])}else{t(2,d="[ERROR] no contract address specified");return}await o.init({web3:v,contract:i});let p=await v.eth.getChainId();t(12,q=p.toString()==="4"?"rinkeby.":""),t(9,z=await o.api.name().call()),t(10,H=await o.api.symbol().call()),a=await o.myInvites(),a&&a[h]&&await y(a[h]),t(0,n=[]);for(let _ in a){let u=a[_].condition,D=new Date(u.converted.start);u.converted.limit>0&&n.push({name:a[_].name,key:_,cid:a[_].cid,limit:`${u.converted.limit}`,price:`${u.converted.eth}`,start:`${D.toDateString()} ${D.toLocaleTimeString()}`,startUnix:u.raw.start})}}catch(p){t(2,d=p.message)}t(7,E=!1)});function L(){c=ee(this.value),t(1,c)}return[n,c,d,i,T,b,C,E,M,z,H,F,q,v,y,S,Q,m,L,()=>{S()},()=>{Q()},p=>{y(p)}]}class ze extends te{constructor(e){super(),le(this,e,ke,be,se,{})}}new ze({target:document.getElementById("mint")});
