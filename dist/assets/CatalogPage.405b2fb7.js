var Qe=Object.defineProperty,qe=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var Te=(t,n,s)=>n in t?Qe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,O=(t,n)=>{for(var s in n||(n={}))Fe.call(n,s)&&Te(t,s,n[s]);if(Z)for(var s of Z(n))Oe.call(n,s)&&Te(t,s,n[s]);return t},ve=(t,n)=>qe(t,Xe(n));var I=(t,n)=>{var s={};for(var a in t)Fe.call(t,a)&&n.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&Z)for(var a of Z(t))n.indexOf(a)<0&&Oe.call(t,a)&&(s[a]=t[a]);return s};import{R as e,r as u,u as Ae}from"./vendor.cfb83e27.js";import{u as Je,H as y,a3 as et,V as S,b as x,X as tt,W as nt,a as lt,B as Me,a4 as k,S as Ie,T as Q,r as st,I as ne,a5 as at,a6 as rt,a0 as Re,n as De,a7 as He,l as Le,k as T,a8 as q,P as ct,m as ot}from"./PublicLayout.80c54043.js";import{e as d,d as h,ao as je,X as L,ap as ze,aq as it,h as pt,ar as ut,as as _,at as G,au as Y,av as W,aw as P,ax as V,ay as X,az as Be,aA as Ne,aB as mt,aC as $,aD as K,aE as U,aF as _e,B as le,aG as se,aH as J,aI as Ge,aJ as dt,aK as ft,aL as Et,aM as ht,aN as gt}from"./index.b8b2001b.js";import{b as ae,c as N}from"./DropdownIcon.e24e0c18.js";import{C as Ye}from"./Card.26304afb.js";import{I as St}from"./image.0f99523e.js";import{D as xt,c as re,d as ce,e as F,f as oe}from"./SelectWrapper.170f62d9.js";import{A as Ct,u as We,S as ie,B as bt,C as ee,M as yt,Y as kt,a as Pe,b as v,c as A,d as wt,e as Ft,s as Ot}from"./submitCarsSearch.26814377.js";import{A as Tt}from"./ArrowPrevIcon.7195240b.js";import{u as Ve}from"./useMediaQueryMin.393f10d3.js";import{B as j,C as vt}from"./CatalogListWrap.b26b5e85.js";import{u as At}from"./use-toast.2010154f.js";import{H as z,T as Mt}from"./types.4f381c0a.js";import{S as It}from"./simple-grid.81f973cd.js";import"./prop-types.d6ec705b.js";import"./formik.37798a37.js";import"./react-redux.c2d752d8.js";import"./axios.7b768d2b.js";import"./focus-visible.715907f4.js";import"./swiper.3c4df1c1.js";import"./aspect-ratio.aa6328d8.js";import"./react-swipeable.797790da.js";var Rt="/assets/car with bg-1@2x.99b4319f.png";const Dt=({})=>{const{isCatalogBannerOpen:t}=d(a=>a.globalAppState),n=h(),{isDesktop:s}=Je();return e.createElement(e.Fragment,null,s&&e.createElement(Ye,{w:"full",p:"30px",display:t?"block":"none"},e.createElement(y,{spacing:"32px",position:"relative"},e.createElement(St,{src:Rt,w:["110px"],loading:"lazy"}),e.createElement(ae,{icon:et,boxSize:6,position:"absolute",right:"-2",top:"-2",_active:{bg:"autoGrey.400"},onClick:()=>n(je())}),e.createElement(S,{alignItems:"flex-start"},e.createElement(L,{fontSize:"16px"},"Certified Car"),e.createElement(x,{fontSize:"14px",lineHeight:"24px",opacity:"63%",pr:"35px"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, magnam deleniti voluptatum officiis tempore aperiam quasi error hic reiciendis facilis dicta saepe quam vel ex tempora impedit accusamus blanditiis nisi? aperiam quasi error accusamus blanditiis nisi?")))))},Ht=s=>{var a=s,{children:t}=a,n=I(a,["children"]);return e.createElement(Ye,O({bg:["transparent",null,"autoBlue.400"],p:["0",null,"16px"],w:"full",minH:"auto"},n),t)},Lt=({activePage:t,totalPages:n,onChange:s,paginNumbers:a})=>{const{isDesktop:c,isMobile:p,isTablet:o}=d(b=>b.globalAppState.screen),[l,i]=u.exports.useState([]),[r,m]=u.exports.useState([]),[E,g]=u.exports.useState([]),{isLargerThan:w}=Ve(360);let f=3;o&&(f=5),c&&(f=10);const C=l.length===1,R=r.length===1,D=t>r.length-f;return u.exports.useEffect(()=>{t===f?i(a.slice(0,f+1)):t>f?i([1]):i(a.slice(0,f)),t>f&&t<=n-f?g(p?[t-1,t,t+1]:[t-2,t-1,t,t+1,t+2]):g([]),t===n-f+1?(m(a.slice(n-f-1,n)),i([1])):t>n-f?(m(a.slice(n-f,n)),i([1])):m([n]),a.length<f+3&&(i([...a]),g([]),m([]))},[t,n]),e.createElement(y,null,w?e.createElement(y,{w:"full",display:a.length>1?"flex":"none"},l.map(b=>e.createElement(j,{key:b,onClick:()=>s(b),active:t===b},e.createElement(L,{fontSize:"18px",fontWeight:"light"},b))),e.createElement(x,{display:C?"block":"none"},"..."),E.map(b=>e.createElement(j,{key:b,onClick:()=>s(b),active:t===b},e.createElement(L,{fontSize:"18px",fontWeight:"light"},b))),e.createElement(x,{display:R?"block":"none"},"..."),r.map(b=>e.createElement(j,{key:b,onClick:()=>s(b),active:t===b,display:w&&D?"block":"none"},e.createElement(L,{fontSize:"18px",fontWeight:"light"},b)))):e.createElement(e.Fragment,null,e.createElement(x,{display:t>1?"block":"none"},"..."),e.createElement(j,{active:!0},e.createElement(L,{fontSize:"18px",fontWeight:"light"},t)),e.createElement(x,{display:t<a.length?"block":"none"},"...")))},jt=c=>{var p=c,{activePage:t,totalPages:n=1,onPageChange:s}=p,a=I(p,["activePage","totalPages","onPageChange"]);const o=[...Array(n).keys()].map(l=>l+1);return e.createElement(y,O({spacing:["1","2"]},a),e.createElement(ae,{variant:"ghost",bg:"transparent",icon:Tt,disabled:t===1,onClick:()=>s(t-1),boxSize:"6",_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}),e.createElement(Lt,{activePage:t,totalPages:n,onChange:s,paginNumbers:o}),e.createElement(ae,{variant:"ghost",bg:"transparent",icon:Ct,fill:"#000",boxSize:"6",disabled:t===n,onClick:()=>s(t+1),_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}))},zt=()=>{const{dealerCars:t,fetchingDealerCars:n}=d(C=>C.carsReducer),{totalPages:s,activePage:a}=d(C=>C.carsPagination),{isAuthenticated:c}=d(C=>C.userInfoSlice),p=At(),o=u.exports.useRef(),{networkError:l,catalogQuery:i}=d(C=>C.globalAppState);u.exports.useEffect(()=>{l&&f()},[l]);const r=h(),m=Ae(),E=We(),g=Number(E.get("page"))||1;u.exports.useEffect(()=>(i?m.push({search:i}):(a?E.set("page",a.toString()):E.set("page",g.toString()),m.push({search:E.toString()}),r(ze(E.get("page"))),r(it(E.toString()))),()=>{r(je())}),[]),u.exports.useEffect(()=>{c&&r(pt())},[c]),u.exports.useEffect(()=>{i!==E.toString()&&(console.log("back on catalog",i,E.toString()),console.log("query",E.toString()),r(ut(E)),r(ze(E.get("page"))),setTimeout(()=>window.scrollTo(0,0)))},[g,i]);const w=C=>{E.set("page",String(C)),m.push({search:E.toString()})},f=()=>{o.current=p({title:l,status:"error",position:"top",duration:3e3,isClosable:!0})};return n?e.createElement(S,{h:"100vh",w:"full"},e.createElement(tt,null)):e.createElement(S,{spacing:"90px",w:"full"},t.length?e.createElement(vt,{gap:"16px"},t.map((C,R)=>e.createElement(nt,{justify:"center",key:R},e.createElement(xt,{car:C})))):e.createElement(lt,null,"No Results found"),e.createElement(jt,{totalPages:s,activePage:g,onPageChange:C=>w(C),display:t.length?"flex":"none"}))},Bt=()=>e.createElement("svg",{id:"Group_975","data-name":"Group 975",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_937","data-name":"Group 937",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_1582","data-name":"Path 1582",d:"M2.651,20.667a.96.96,0,0,0,.457.258,1.061,1.061,0,0,0,.522,0,1.012,1.012,0,0,0,.456-.254l6.266-6.278,6.272,6.277a1.027,1.027,0,0,0,1.435,0,1,1,0,0,0,.289-.723.968.968,0,0,0-.286-.713L11.79,12.954l6.272-6.265a.988.988,0,0,0,.291-.717.946.946,0,0,0-.294-.719,1,1,0,0,0-.723-.29.961.961,0,0,0-.712.287l-6.272,6.275L4.086,5.249a1,1,0,0,0-.456-.255,1.108,1.108,0,0,0-.522,0,.892.892,0,0,0-.457.262,1.028,1.028,0,0,0-.257.461,1.061,1.061,0,0,0,0,.522.951.951,0,0,0,.254.452l6.265,6.267L2.648,19.231a.993.993,0,0,0-.259.452,1.043,1.043,0,0,0,0,.527A.926.926,0,0,0,2.651,20.667Z",transform:"translate(1.647 -0.961)",fill:"#3d405b"}))),Nt=()=>e.createElement("svg",{id:"Group_974","data-name":"Group 974",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_131","data-name":"Group 131",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_455","data-name":"Path 455",d:"M5.336,14.8a2.4,2.4,0,0,1,4.528,0H18v1.6H9.864a2.4,2.4,0,0,1-4.528,0H2V14.8Zm4.8-5.6a2.4,2.4,0,0,1,4.528,0H18v1.6H14.664a2.4,2.4,0,0,1-4.528,0H2V9.2Zm-4.8-5.6a2.4,2.4,0,0,1,4.528,0H18V5.2H9.864a2.4,2.4,0,0,1-4.528,0H2V3.6ZM7.6,5.2a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,5.2Zm4.8,5.6a.8.8,0,1,0-.8-.8A.8.8,0,0,0,12.4,10.8ZM7.6,16.4a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,16.4Z",transform:"translate(2 2.002)",fill:"#3d405b"}))),H=l=>{var i=l,{selected:t,label:n,children:s,clearSelected:a,onApply:c,size:p}=i,o=I(i,["selected","label","children","clearSelected","onApply","size"]);const[r,m]=u.exports.useState(!1),[E,g]=u.exports.useState("");u.exports.useEffect(()=>{t.length?g(`${t.join(", ")}`):g(n)},[t]);const w=()=>m(!1);return e.createElement(re,{areOptionsOpen:r},e.createElement(ce,{isActive:r,onClick:()=>{w(),c()}}),e.createElement(F,null,e.createElement(ie,{size:p,areOptionsOpen:r,clearCb:f=>{f.stopPropagation&&f.stopPropagation(),a(),m(!1)},areOptionsSelected:!!t.length,onClick:()=>m(f=>!f)},e.createElement(y,{pl:"4",pr:"28px",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(x,{opacity:r?"1":"0.5",noOfLines:1},E))),e.createElement(oe,O({isOpen:r},o),s)))},B=s=>{var a=s,{children:t}=a,n=I(a,["children"]);return e.createElement(Me,O({p:"4",w:"full",whiteSpace:"normal",borderRadius:"none",textAlign:"start",display:"flex",justifyContent:"flex-start",fontWeight:"400",variant:"ghost",_hover:{bg:"autoGrey.100"}},n),t)},_t=({})=>{const[t,n]=u.exports.useState([]),{conditions:s}=d(l=>l.carsReducer),{conditions:a}=d(l=>l.selectedCarFilters),c=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"condition",clearSelected:()=>{n([]),c(_([]))},onApply:()=>c(_(t)),top:"35px"},e.createElement(F,null,p.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(k,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(x,{w:"full"},l))))))},Gt=({})=>{const[t,n]=u.exports.useState([]),{cylinders:s}=d(l=>l.carsReducer),{cylinders:a}=d(l=>l.selectedCarFilters),c=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"cylinders",clearSelected:()=>{n([]),c(G([]))},onApply:()=>c(G(t)),top:"35px"},e.createElement(F,null,p.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(k,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(x,{w:"full"},l))))))},Yt=({})=>{const[t,n]=u.exports.useState([]),{drives:s}=d(l=>l.carsReducer),{drives:a}=d(l=>l.selectedCarFilters),c=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"drives",clearSelected:()=>{n([]),c(Y([]))},onApply:()=>c(Y(t)),top:"35px"},e.createElement(F,null,p.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(k,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(x,{w:"full"},l))))))},Wt=n=>{var t=I(n,[]);const[s,a]=u.exports.useState(!1),[c,p]=u.exports.useState(0),[o,l]=u.exports.useState(0),[i,r]=u.exports.useState(""),{engineFrom:m,engineTo:E}=d(f=>f.selectedCarFilters),g=h();u.exports.useEffect(()=>{r(c||o?`${c} - ${o}`:"engine")},[c,o]),u.exports.useEffect(()=>{m&&p(Number(m)),E&&l(Number(E))},[m,E]);const w=(f,C)=>{const R=[];for(let D=f;D<=C;D=parseFloat(((D*100+10)/100).toFixed(1)))R.push(D);return R};return e.createElement(re,ve(O({},t),{areOptionsOpen:s,bg:"white",borderRadius:"8px"}),e.createElement(ce,{isActive:s,onClick:()=>{a(!1),g(W(c)),g(P(o))}}),e.createElement(F,null,e.createElement(ie,{areOptionsOpen:s,clearCb:f=>{f.stopPropagation&&f.stopPropagation(),l(0),p(0),g(W(0)),g(P(0)),r(""),a(!1)},areOptionsSelected:!!(c||o),onClick:()=>a(f=>!f)},e.createElement(y,{pl:"4",h:"40px",w:"full",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(x,{opacity:s?"1":"0.5"},i))),e.createElement(oe,{isOpen:s,w:"full"},e.createElement(y,{h:"290px",w:"full",divider:e.createElement(Ie,{borderColor:"autoGrey.400"}),pr:"2px"}," ",e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(x,{fontSize:"16px"},"From"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},w(.5,6).map(f=>e.createElement(Q,{fontSize:"16px",key:f,lineHeight:"21px",w:"full",color:c===f?"autoOrange.400":"#000",onClick:()=>{p(f),f>=o&&l(f)}},f.toFixed(1))))),e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(x,{fontSize:"16px"},"To"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},w(.5,6).map(f=>e.createElement(Q,{fontSize:"16px",key:f,lineHeight:"21px",w:"full",color:o===f?"autoOrange.400":"#000",onClick:()=>{l(f),f<=c&&p(f)}},f.toFixed(1)))))))))},Pt=({})=>{const[t,n]=u.exports.useState([]),{fuels:s}=d(l=>l.carsReducer),{fuels:a}=d(l=>l.selectedCarFilters),c=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"fuel type",clearSelected:()=>{n([]),c(V([]))},onApply:()=>c(V(t)),top:"35px"},e.createElement(F,null,p.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(k,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(x,{w:"full"},l))))))},Vt=({})=>{const[t,n]=u.exports.useState(z.NO),s=h();return e.createElement(H,{size:"md",selected:[],label:"keys",clearSelected:()=>n(z.NO),onApply:()=>s(X(t)),top:"35px"},e.createElement(F,null))},$t=st({displayName:"EuroIcon",viewBox:"0 0 12 23",path:e.createElement(e.Fragment,null,e.createElement("text",{id:"_","data-name":"\u20AC",transform:"translate(0 19)",fontSize:"20",fontFamily:"HelveticaNeue, Helvetica Neue"},e.createElement("tspan",{x:"0",y:"0"},"\u20AC")))}),$e=({currency:t,setCurrency:n})=>e.createElement(y,{borderRadius:"8px",bg:"white",spacing:"2px",flexBasis:"30%",justify:"space-between",p:"7px"},e.createElement(j,{onClick:()=>n("GEL"),active:t==="GEL"},e.createElement(ne,{as:at,fill:t==="GEL"?"#fff":"#000",boxSize:7,fontWeight:"400"})),e.createElement(j,{onClick:()=>n("USD"),active:t==="USD"},e.createElement(ne,{as:rt,boxSize:6,fontWeight:"400",fill:t==="USD"?"#fff":"#000"})),e.createElement(j,{onClick:()=>n("EUR"),active:t==="EUR",fontSize:"20px",fontWeight:"400"},e.createElement(ne,{as:$t,boxSize:6,fontWeight:"400",fill:t==="EUR"?"#fff":"#000"}))),Kt=({})=>{const[t,n]=u.exports.useState(!1),[s,a]=u.exports.useState("GEL"),[c,p]=u.exports.useState(""),[o,l]=u.exports.useState(void 0),[i,r]=u.exports.useState(void 0),m=h(),E=()=>{switch(s){case"GEL":return"\u20BE";case"EUR":return"\u20AC";case"USD":return"$"}};return u.exports.useEffect(()=>{p(i&&o?`price: ${E()} ${o} - ${i} `:"price")},[o,i,s]),e.createElement(re,{areOptionsOpen:t},e.createElement(ce,{isActive:t,onClick:()=>{n(!1),m(Be(o)),m(Ne(i)),m(mt(s))}}),e.createElement(F,null,e.createElement(ie,{size:"md",areOptionsOpen:t,clearCb:g=>{g.stopPropagation&&g.stopPropagation(),m(Be()),m(Ne()),l(void 0),r(void 0),p("Price"),n(!1)},areOptionsSelected:!!o&&!!i,onClick:()=>n(g=>!g)},e.createElement(y,{pl:"4",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(x,{opacity:t?"1":"0.5"},c))),e.createElement(oe,{isOpen:t,w:"full",top:"35px"},e.createElement(S,{p:"0px 16px 16px",align:"flex-start"},e.createElement($e,{currency:s,setCurrency:a}),e.createElement(S,null,e.createElement(Re,{placeholder:"From",h:"37px",type:"number",value:o,onChange:g=>l(g.currentTarget.value)}),e.createElement(Re,{placeholder:"To",h:"37px",type:"number",value:i,onChange:g=>r(g.currentTarget.value)}))))))},Ut=({})=>{const[t,n]=u.exports.useState([]),{salesStatus:s}=d(l=>l.carsReducer),{salesStatus:a}=d(l=>l.selectedCarFilters),c=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"sale status",clearSelected:()=>{n([]),c($([]))},onApply:()=>c($(t)),top:"35px"},e.createElement(F,null,p.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(k,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(x,{w:"full"},l))))))},Zt=({})=>{const[t,n]=u.exports.useState([]),s=h(),{transmissions:a}=d(l=>l.carsReducer),{transmission:c}=d(l=>l.selectedCarFilters),p=a.filter(l=>l);u.exports.useEffect(()=>{c.length&&n(c)},[c]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"transmission",clearSelected:()=>{n([]),s(K([]))},onApply:()=>s(K(t))},e.createElement(F,null,p.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(k,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(x,null,l))))))},Qt=({})=>{const[t,n]=u.exports.useState([]),{types:s}=d(l=>l.carsReducer),{types:a}=d(l=>l.selectedCarFilters),c=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"types",clearSelected:()=>{n([]),c(U([]))},onApply:()=>c(U(t)),top:"35px"},e.createElement(F,null,p.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(k,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(x,{w:"full"},l))))))},qt=o=>{var l=o,{p:t="2",bg:n="#fff",direction:s="row",borderRadius:a="md",onSubmit:c}=l,p=I(l,["p","bg","direction","borderRadius","onSubmit"]);const i=h(),{isAdvancedFiltersOpen:r}=d(E=>E.selectedCarFilters),m=()=>i(_e());return e.createElement(e.Fragment,null,e.createElement(De,O({p:t,bg:n,direction:s,borderRadius:a,alignItems:"center"},p),e.createElement(bt,{labelPadding:"2",w:["100%","100%","100%"]}),e.createElement(ee,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(yt,null),e.createElement(ee,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(kt,null),e.createElement(y,{spacing:{md:"0",xl:"2"}},e.createElement(Pe,{w:{md:"140px",lg:"144px","2xl":"211px"},ml:[null,null,"0px","16px"],mr:"2",onClick:c}),r?e.createElement(He,{icon:e.createElement(Bt,null),onClick:m,"aria-label":"close advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}):e.createElement(He,{onClick:m,icon:e.createElement(Nt,null),"aria-label":"open advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}))),e.createElement(Le,{in:r},e.createElement(It,{templateColumns:[null,"1fr 1fr","repeat(3, 1fr)","repeat(5, 1fr)"],spacingX:"4",spacingY:"2",mt:["2","4",null,"4",null,"24px"]},e.createElement(Kt,null),e.createElement(Wt,null),e.createElement(_t,null),e.createElement(Qt,null),e.createElement(Zt,null),e.createElement(Vt,null),e.createElement(Yt,null),e.createElement(Ut,null),e.createElement(Pt,null),e.createElement(Gt,null))))},Xt=l=>{var i=l,{isKeyboardActive:t,children:n,w:s="full",bottom:a="10px",pr:c="4",pl:p="4"}=i,o=I(i,["isKeyboardActive","children","w","bottom","pr","pl"]);return e.createElement(e.Fragment,null,t?e.createElement(le,O({w:s,position:"fixed",bottom:a,pr:c,pl:p,zIndex:"modal"},o),n):e.createElement(le,O({w:s},o),n))},Jt=({isOpen:t,onClose:n})=>{const{keys:s}=d(l=>l.selectedCarFilters),[a,c]=u.exports.useState(s),p=h();u.exports.useEffect(()=>{c(s)},[]);const o=()=>{a&&p(X(a)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:o},e.createElement(S,{w:"full",alignItems:"flex-start"},e.createElement(y,null,e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:a==="YES",onChange:()=>c(z.YES)}),e.createElement(x,null,"Yes")),e.createElement(y,null,e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:a==="NO",onChange:()=>c(z.NO)}),e.createElement(x,null,"No"))))},en=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),a=h(),{keys:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c?`Keys: ${c}`:"Keys",hasValue:!!c,onClear:()=>a(X(z.NO))}),e.createElement(Jt,{isOpen:t,onClose:s}))},tn=({isOpen:t,onClose:n})=>{const[s,a]=u.exports.useState([]),c=h(),{conditions:p}=d(r=>r.carsReducer),{conditions:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const l=()=>p.filter(r=>r),i=r=>{s.includes(r)?a(s.filter(m=>m!==r)):a(s.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(_(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},l().map(r=>e.createElement(k,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:m=>{m.preventDefault(),i(r)},key:r},N(r)))))},nn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),a=h(),{conditions:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Condition: ${N(c.join("; "))}`:"Condition",hasValue:!!c.length,onClear:()=>a(_([]))}),e.createElement(tn,{isOpen:t,onClose:s}))},ln=({isOpen:t,onClose:n})=>{const[s,a]=u.exports.useState([]),c=h(),{cylinders:p}=d(r=>r.carsReducer),{cylinders:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const l=()=>p.filter(r=>r),i=r=>{s.includes(r)?a(s.filter(m=>m!==r)):a(s.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(G(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},l().map(r=>e.createElement(k,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:m=>{m.preventDefault(),i(r)},key:r},r))))},sn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),a=h(),{cylinders:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Cylinders: ${c.join(", ")}`:"Cylinders",hasValue:!!c.length,onClear:()=>a(G([]))}),e.createElement(ln,{isOpen:t,onClose:s}))},an=({isOpen:t,onClose:n})=>{const[s,a]=u.exports.useState([]),c=h(),{drives:p}=d(r=>r.carsReducer),{drives:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const l=()=>p.filter(r=>r),i=r=>{s.includes(r)?a(s.filter(m=>m!==r)):a(s.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(Y(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px",maxH:"80vh"},l().map(r=>e.createElement(k,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:m=>{m.preventDefault(),i(r)},key:r},r))))},rn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),a=h(),{drives:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.join(", ")||"Drives",hasValue:!!c.length,onClear:()=>a(Y([]))}),e.createElement(an,{isOpen:t,onClose:s}))},cn=({isOpen:t,onClose:n})=>{const{engineFrom:s,engineTo:a}=d(E=>E.selectedCarFilters),[c,p]=u.exports.useState(s||.5),[o,l]=u.exports.useState(a||.5),i=h(),r=(E,g)=>{const w=[];for(let f=E;f<=g;f=parseFloat(((f*100+10)/100).toFixed(1)))w.push(f);return w},m=()=>{i(W(c)),i(P(o)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:m},e.createElement(y,{h:"full",divider:e.createElement(Ie,{borderColor:"autoGrey.400"})},e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(L,{fontSize:"16px",fontWeight:"600"},"From"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},r(.5,6).map(E=>e.createElement(Q,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:c===E?"autoOrange.400":"#000",onClick:()=>{p(E),E>=o&&l(E)}},E.toFixed(1))))),e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(L,{fontSize:"16px",fontWeight:"600"},"To"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},r(.5,6).map(E=>e.createElement(Q,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:o===E?"autoOrange.400":"#000",onClick:()=>{l(E),E<=c&&p(E)}},E.toFixed(1)))))))},on=({})=>{const{isOpen:t,onClose:n,onOpen:s}=T(),a=h(),{engineFrom:c,engineTo:p}=d(o=>o.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{label:c&&p?`Engine (from - to): ${Number(c).toFixed(1)}L -  ${Number(p).toFixed(1)}L `:"Engine",onClick:s,hasValue:!!(c&&p),onClear:()=>{a(W(null)),a(P(null))}}),e.createElement(cn,{onClose:n,isOpen:t}))},pn=({isOpen:t,onClose:n})=>{const[s,a]=u.exports.useState([]),c=h(),{fuels:p}=d(r=>r.carsReducer),{fuels:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const l=()=>p.filter(r=>r),i=r=>{s.includes(r)?a(s.filter(m=>m!==r)):a(s.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(V(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px",minH:"30vh"},l().map(r=>e.createElement(k,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:m=>{m.preventDefault(),i(r)},key:r},N(r)))))},un=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),a=h(),{fuels:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Fuel: ${N(c.join(", "))}`:"Fuel Types",hasValue:!!c.length,onClear:()=>a(V([]))}),e.createElement(pn,{isOpen:t,onClose:s}))},mn=({isOpen:t,onClose:n})=>{const[s,a]=u.exports.useState([]),c=h(),{locations:p}=d(r=>r.carsReducer),{locations:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length?a(o):a([])},[o]);const l=()=>p.filter(r=>r),i=r=>{s.includes(r)?a(s.filter(m=>m!==r)):a(s.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(se(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px"},l().map(r=>e.createElement(k,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:m=>{m.preventDefault(),i(r)},key:r},r))))},dn=s=>{var a=s,{w:t="full"}=a,n=I(a,["w"]);const{isOpen:c,onOpen:p,onClose:o}=T(),l=h(),{locations:i}=d(r=>r.selectedCarFilters);return e.createElement(le,O({minW:t,maxW:t},n),e.createElement(A,{onClick:p,label:i.length?` ${i.join(", ")}`:"Locations",hasValue:!!i.length,onClear:()=>l(se([]))}),e.createElement(mn,{isOpen:c,onClose:o}))},fn=({isOpen:t,onClose:n})=>{const[s,a]=u.exports.useState([]),c=h(),{salesStatus:p}=d(i=>i.carsReducer),{salesStatus:o}=d(i=>i.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const l=i=>{s.includes(i)?a(s.filter(r=>r!==i)):a(s.concat(i))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c($(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},p.map(i=>e.createElement(k,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(i),onChange:r=>{r.preventDefault(),l(i)},key:i},i))))},En=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),a=h(),{salesStatus:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Sales Status: ${c.join(", ")}`:"Sales Status",hasValue:!!c.length,onClear:()=>a($([]))}),e.createElement(fn,{isOpen:t,onClose:s}))},hn=({isOpen:t,onClose:n})=>{const{transmission:s}=d(r=>r.selectedCarFilters),[a,c]=u.exports.useState(s),p=h(),o=Object.values(Mt);u.exports.useEffect(()=>{c(s)},[]);const l=r=>{if(!a.includes(r))c([...a,r]);else{const m=a.filter(E=>E!=r);c(m)}},i=()=>{p(K(a)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:i},e.createElement(S,{w:"full",alignItems:"flex-start"},o.map(r=>e.createElement(k,{colorScheme:"autoOrange",defaultChecked:s==null?void 0:s.includes(r),onChange:m=>{m.preventDefault(),l(r)},boxShadow:"none !important",shadow:"none !important",key:r},r))))},gn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),a=h(),{transmission:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Transmission: ${c.join(", ")}`:"Transmission",hasValue:!!c.length,onClear:()=>a(K([]))}),e.createElement(hn,{isOpen:t,onClose:s}))},Sn=({isOpen:t,onClose:n})=>{const[s,a]=u.exports.useState([]),c=h(),{types:p}=d(r=>r.carsReducer),{types:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const l=()=>p.filter(r=>r),i=r=>{s.includes(r)?a(s.filter(m=>m!==r)):a(s.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(U(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},l().map(r=>e.createElement(k,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:m=>{m.preventDefault(),i(r)},key:r},N(r)))))},xn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),a=h(),{types:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Types: ${N(c.join("; "))}`:"Type",hasValue:!!c.length,onClear:()=>a(U([]))}),e.createElement(Sn,{isOpen:t,onClose:s}))},Cn=({setKeyboardActive:t})=>{const[n,s]=u.exports.useState(""),[a,c]=u.exports.useState(""),{yearFrom:p,yearTo:o}=d(i=>i.selectedCarFilters),l=h();return u.exports.useEffect(()=>{s(p?p.toString():""),c(o?o.toString():"")},[p,o]),e.createElement(y,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(q,{pr:"2",placeholder:"Year from",type:"number",value:n,onChange:i=>s(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),l(n?J(parseInt(n)):J(0))}}),e.createElement(ee,{height:"30px"}),e.createElement(q,{placeholder:"Year to",type:"number",value:a,onChange:i=>c(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),l(a?Ge(parseInt(a)):J(0))}}))},bn=({onSubmit:t})=>{const[n,s]=u.exports.useState("GEL"),{isAdvancedFiltersOpen:a}=d(l=>l.selectedCarFilters),c=h(),[p,o]=u.exports.useState(!1);return e.createElement(De,null,e.createElement(wt,null),e.createElement(Ft,null),e.createElement(Cn,{setKeyboardActive:o}),e.createElement(y,{justify:"space-between"},e.createElement(y,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(q,{pr:"2",placeholder:"Price from",type:"number",onFocus:()=>o(!0),onBlur:()=>o(!1)}),e.createElement(ee,{height:"30px"}),e.createElement(q,{placeholder:"Price to",type:"number",onFocus:()=>o(!0),onBlur:()=>o(!1)})),e.createElement($e,{currency:n,setCurrency:s})),e.createElement(Le,{in:a},e.createElement(S,null,e.createElement(on,null),e.createElement(nn,null),e.createElement(xn,null),e.createElement(dn,null),e.createElement(gn,null),e.createElement(en,null),e.createElement(rn,null),e.createElement(En,null),e.createElement(un,null),e.createElement(sn,null))),e.createElement(S,{pt:"2",spacing:"3"},e.createElement(Xt,{isKeyboardActive:p},e.createElement(Pe,{w:"full",isKeyboardActive:p,onClick:t})),e.createElement(Me,{variant:"link",onClick:()=>c(_e()),bg:"transparent"},e.createElement(x,{color:"#000",display:p?"none":"block",lineHeight:"19px",fontWeight:"400"},a?"See less filter":"See more filter"))))},yn=(t,n)=>{const s=n.slice().sort();return t.length===n.length&&t.slice().sort().every(function(a,c){return a===s[c]}),!1},kn=({modelQueryKeys:t,brands:n,query:s})=>{const a=[];return n.map(c=>a.push({brand:c,models:[]})),t.map(c=>{const p=c.slice(c.indexOf("[")+1,c.indexOf("]")),o=s.getAll(c);a.push({brand:p,models:o})}),a.filter(c=>c.models.length)},wn=()=>{const{isLargerThan:t}=Ve(737),n=We(),s=h(),a=Ae(),{MODEL:c,YEAR_FROM:p,YEAR_TO:o,CONDITION:l,TYPE:i,LOCATION:r,TRANSMISSION:m,KEYS:E,DRIVE:g,SALES_STATUS:w,FUEL_TYPE:f,CYLINDER:C,ENGINE_FROM:R,ENGINE_TO:D}=ht,{brands:b}=d(M=>M.selectedCarFilters),{brands:pe}=d(M=>M.carsReducer),Ke=d(M=>M.selectedCarFilters);u.exports.useEffect(()=>{const M=n.getAll("brand");yn(M,b)||s(dt(M));const Ue=[...new Set(Array.from(n.keys()).filter(Ze=>Ze.includes(`${c}[`)))],me=kn({brands:M,modelQueryKeys:Ue,query:n});me.length&&s(ft(me));const de=n.get(p);de&&s(J(parseInt(de)));const fe=n.get(o);fe&&s(Ge(parseInt(fe)));const Ee=n.get(R);Ee&&s(W(Ee));const he=n.get(D);he&&s(P(he));const ge=n.getAll(l);ge.length&&s(_(ge));const Se=n.getAll(i);Se.length&&s(U(Se));const xe=n.getAll(g);xe.length&&s(Y(xe));const Ce=n.getAll(r);Ce.length&&s(se(Ce));const be=n.getAll(m);be.length&&s(K(be));const te=n.get(E);(te===z.NO||te===z.YES)&&s(X(te));const ye=n.getAll(w);ye.length&&s($(ye));const ke=n.getAll(f);ke.length&&s(V(ke));const we=n.getAll(C);we.length&&s(G(we))},[n]),u.exports.useEffect(()=>{pe.length||s(Et())},[pe]);const ue=()=>{Ot({dispatch:s,query:n,history:a,filters:Ke}),!t&&s(gt())};return e.createElement(e.Fragment,null,t?e.createElement(qt,{onSubmit:ue}):e.createElement(bn,{onSubmit:ue}))},Fn=()=>e.createElement(ct,null,e.createElement(ot,{pt:["4","6",null,"8"]},e.createElement(S,{w:"full",spacing:["66px"]},e.createElement(Ht,null,e.createElement(wn,null)),e.createElement(Dt,null),e.createElement(zt,null)))),Zn=()=>e.createElement(Fn,null);export{Zn as CatalogPage,Zn as default};
