import{C as x,D as cn,E as dn,G as nt,H as ot,I as be,J as un,K as pt,a as vt,q as D,A as mn,k as Re,B as ue,L as me,M as fe,N as ht,O as at,P as fn,Q as pn,i as se,R as gt,d as N,y as pe,s as ve,o as _,e as C,F as Ve,l as _t,f as g,g as p,t as Y,c as H,v as w,x as J,_ as Pe,S as vn,U as yt,V as bt,m as V,W as $t,X as wt,Y as hn,r as k,Z as gn,$ as _n,a0 as yn,a1 as bn,w as j,a2 as $n,a3 as wn,a4 as En,a5 as kn,u as zn,a6 as Cn,n as Ln}from"./app-DS06EX_z.js";import{t as An,_ as xn}from"./YunFooter.vue_vue_type_script_setup_true_lang-BCw6naVC.js";import{_ as Et}from"./YunCard.vue_vue_type_script_setup_true_lang-wvn6XUJO.js";import{i as Fe,a as Be}from"./index-C5okkQwF.js";import{_ as Sn}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DI60N7Ok.js";import{s as st}from"./index-C7yU5XnD.js";import{u as In}from"./post-DpBCYtJV.js";function ke(e,t){const n=x(e),o=x(t),a=n.getTime()-o.getTime();return a<0?-1:a>0?1:a}function On(e){return cn(e,Date.now())}function Mn(e,t){const n=x(e),o=x(t),a=n.getFullYear()-o.getFullYear(),s=n.getMonth()-o.getMonth();return a*12+s}function Tn(e){return t=>{const o=(e?Math[e]:Math.trunc)(t);return o===0?0:o}}function kt(e,t){return+x(e)-+x(t)}function Hn(e){const t=x(e);return t.setHours(23,59,59,999),t}function Nn(e){const t=x(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Dn(e){const t=x(e);return+Hn(t)==+Nn(t)}function Yn(e,t){const n=x(e),o=x(t),a=ke(n,o),s=Math.abs(Mn(n,o));let l;if(s<1)l=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-a*s);let i=ke(n,o)===-a;Dn(x(e))&&s===1&&ke(e,o)===1&&(i=!1),l=a*(s-Number(i))}return l===0?0:l}function Rn(e,t,n){const o=kt(e,t)/1e3;return Tn(n==null?void 0:n.roundingMethod)(o)}function Vn(e,t,n){const o=un(),a=(n==null?void 0:n.locale)??o.locale??dn,s=2520,l=ke(e,t);if(isNaN(l))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:l});let d,v;l>0?(d=x(t),v=x(e)):(d=x(e),v=x(t));const c=Rn(v,d),T=(nt(v)-nt(d))/1e3,b=Math.round((c-T)/60);let L;if(b<2)return n!=null&&n.includeSeconds?c<5?a.formatDistance("lessThanXSeconds",5,i):c<10?a.formatDistance("lessThanXSeconds",10,i):c<20?a.formatDistance("lessThanXSeconds",20,i):c<40?a.formatDistance("halfAMinute",0,i):c<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):b===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",b,i);if(b<45)return a.formatDistance("xMinutes",b,i);if(b<90)return a.formatDistance("aboutXHours",1,i);if(b<ot){const h=Math.round(b/60);return a.formatDistance("aboutXHours",h,i)}else{if(b<s)return a.formatDistance("xDays",1,i);if(b<be){const h=Math.round(b/ot);return a.formatDistance("xDays",h,i)}else if(b<be*2)return L=Math.round(b/be),a.formatDistance("aboutXMonths",L,i)}if(L=Yn(v,d),L<12){const h=Math.round(b/be);return a.formatDistance("xMonths",h,i)}else{const h=L%12,A=Math.trunc(L/12);return h<3?a.formatDistance("aboutXYears",A,i):h<9?a.formatDistance("overXYears",A,i):a.formatDistance("almostXYears",A+1,i)}}function Pn(e,t){return Vn(e,On(e),t)}function Fn(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function Bn(e=document){e.querySelectorAll("table").forEach(t=>{const n=document.createElement("div");n.className="table-container",Fn(t,"table-container")})}let ze=[];function qe(e){ze.push(e),pt(()=>{ze=ze.filter(t=>t!==e)})}const qn=()=>ze.forEach(e=>e()),$e=qn;function Un(e){const t=vt(),n=D(()=>t.path),o=mn(),a=D(()=>{let i=-1;return o.postList.find((d,v)=>d.path===n.value?(i=v,!0):!1),i}),s=D(()=>a.value-1>=0?o.postList[a.value-1]:null),l=D(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[s,l]}function jn(){if(Re){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,s=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!s)return;const l=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let i="";s.querySelectorAll("span.line:not(.diff.remove)").forEach(d=>i+=`${d.textContent||""}
`),i=i.slice(0,-1),l&&(i=i.replace(/^ *(\$|>) /gm,"").trim()),Xn(i).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const d=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,d)})}})}}async function Xn(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},we=function(t){return t.tagName==="IMG"},Wn=function(t){return NodeList.prototype.isPrototypeOf(t)},Ce=function(t){return t&&t.nodeType===1},rt=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},it=function(t){try{return Array.isArray(t)?t.filter(we):Wn(t)?[].slice.call(t).filter(we):Ce(t)?[t].filter(we):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(we):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Gn=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Zn=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,s=n.width,l=n.height,i=t.cloneNode(),d=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,v=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=o+d+"px",i.style.left=a+v+"px",i.style.width=s+"px",i.style.height=l+"px",i.style.transform="",i},ae=function(t,n){var o=K({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},Kn=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(u){function m(){}u(m,m)},a=function(u){var m=u.target;if(m===_e){h();return}S.indexOf(m)!==-1&&A({target:m})},s=function(){if(!(ne||!r.original)){var u=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(et-u)>y.scrollOffset&&setTimeout(h,150)}},l=function(u){var m=u.key||u.keyCode;(m==="Escape"||m==="Esc"||m===27)&&h()},i=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=u;if(u.background&&(_e.style.background=u.background),u.container&&u.container instanceof Object&&(m.container=K({},y.container,u.container)),u.template){var $=Ce(u.template)?u.template:document.querySelector(u.template);m.template=$}return y=K({},y,m),S.forEach(function(E){E.dispatchEvent(ae("medium-zoom:update",{detail:{zoom:z}}))}),z},d=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(K({},y,u))},v=function(){for(var u=arguments.length,m=Array(u),$=0;$<u;$++)m[$]=arguments[$];var E=m.reduce(function(f,O){return[].concat(f,it(O))},[]);return E.filter(function(f){return S.indexOf(f)===-1}).forEach(function(f){S.push(f),f.classList.add("medium-zoom-image")}),te.forEach(function(f){var O=f.type,R=f.listener,oe=f.options;E.forEach(function(U){U.addEventListener(O,R,oe)})}),z},c=function(){for(var u=arguments.length,m=Array(u),$=0;$<u;$++)m[$]=arguments[$];r.zoomed&&h();var E=m.length>0?m.reduce(function(f,O){return[].concat(f,it(O))},[]):S;return E.forEach(function(f){f.classList.remove("medium-zoom-image"),f.dispatchEvent(ae("medium-zoom:detach",{detail:{zoom:z}}))}),S=S.filter(function(f){return E.indexOf(f)===-1}),z},T=function(u,m){var $=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return S.forEach(function(E){E.addEventListener("medium-zoom:"+u,m,$)}),te.push({type:"medium-zoom:"+u,listener:m,options:$}),z},b=function(u,m){var $=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return S.forEach(function(E){E.removeEventListener("medium-zoom:"+u,m,$)}),te=te.filter(function(E){return!(E.type==="medium-zoom:"+u&&E.listener.toString()===m.toString())}),z},L=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=u.target,$=function(){var f={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},O=void 0,R=void 0;if(y.container)if(y.container instanceof Object)f=K({},f,y.container),O=f.width-f.left-f.right-y.margin*2,R=f.height-f.top-f.bottom-y.margin*2;else{var oe=Ce(y.container)?y.container:document.querySelector(y.container),U=oe.getBoundingClientRect(),Oe=U.width,Kt=U.height,Jt=U.left,Qt=U.top;f=K({},f,{width:Oe,height:Kt,left:Jt,top:Qt})}O=O||f.width-y.margin*2,R=R||f.height-y.margin*2;var le=r.zoomedHd||r.original,en=rt(le)?O:le.naturalWidth||O,tn=rt(le)?R:le.naturalHeight||R,ye=le.getBoundingClientRect(),nn=ye.top,on=ye.left,Me=ye.width,Te=ye.height,an=Math.min(Math.max(Me,en),O)/Me,sn=Math.min(Math.max(Te,tn),R)/Te,He=Math.min(an,sn),rn=(-on+(O-Me)/2+y.margin+f.left)/He,ln=(-nn+(R-Te)/2+y.margin+f.top)/He,tt="scale("+He+") translate3d("+rn+"px, "+ln+"px, 0)";r.zoomed.style.transform=tt,r.zoomedHd&&(r.zoomedHd.style.transform=tt)};return new o(function(E){if(m&&S.indexOf(m)===-1){E(z);return}var f=function Oe(){ne=!1,r.zoomed.removeEventListener("transitionend",Oe),r.original.dispatchEvent(ae("medium-zoom:opened",{detail:{zoom:z}})),E(z)};if(r.zoomed){E(z);return}if(m)r.original=m;else if(S.length>0){var O=S;r.original=O[0]}else{E(z);return}if(r.original.dispatchEvent(ae("medium-zoom:open",{detail:{zoom:z}})),et=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,ne=!0,r.zoomed=Zn(r.original),document.body.appendChild(_e),y.template){var R=Ce(y.template)?y.template:document.querySelector(y.template);r.template=document.createElement("div"),r.template.appendChild(R.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",h),r.zoomed.addEventListener("transitionend",f),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(oe),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,$()};var oe=setInterval(function(){r.zoomedHd.complete&&(clearInterval(oe),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",h),document.body.appendChild(r.zoomedHd),$())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var U=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",U),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",h),document.body.appendChild(r.zoomedHd),$()})}else $()})},h=function(){return new o(function(u){if(ne||!r.original){u(z);return}var m=function $(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(_e),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),ne=!1,r.zoomed.removeEventListener("transitionend",$),r.original.dispatchEvent(ae("medium-zoom:closed",{detail:{zoom:z}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,u(z)};ne=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(ae("medium-zoom:close",{detail:{zoom:z}})),r.zoomed.addEventListener("transitionend",m)})},A=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=u.target;return r.original?h():L({target:m})},Z=function(){return y},P=function(){return S},q=function(){return r.original},S=[],te=[],ne=!1,et=0,y=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?y=t:(t||typeof t=="string")&&v(t),y=K({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},y);var _e=Gn(y.background);document.addEventListener("click",a),document.addEventListener("keyup",l),document.addEventListener("scroll",s),window.addEventListener("resize",h);var z={open:L,close:h,toggle:A,update:i,clone:d,attach:v,detach:c,on:T,off:b,getOptions:Z,getImages:P,getZoomedImage:q};return z};function Jn(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Qn=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Jn(Qn);function eo(){const t=ue().value.mediumZoom;me(()=>{t.enable&&Kn(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function to(){const e=ue(),t=fe();Re&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),me(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let s;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;s=o}else s=a;for(const l of Array.from(n))l.scrollHeight>s&&l.classList.add("folded")})}function no(){const e=ue(),t=D(()=>e.value.cdn.prefix);ht({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),at(`${t.value}aplayer/dist/APlayer.min.js`,()=>{at(`${t.value}meting@2/dist/Meting.min.js`)})}function oo(){ht({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}function ao(e,t=[2,4]){return so(e,typeof t=="number"?[t,t]:t==="deep"?[2,6]:t)}function so(e,t){const n=[];return e=e.map(o=>({...o})),e.forEach((o,a)=>{o.level>=t[0]&&o.level<=t[1]&&ro(a,e,t)&&n.push(o)}),n}function ro(e,t,n){if(e===0)return!0;const o=t[e];for(let a=e-1;a>=0;a--){const s=t[a];if(s.level<o.level&&s.level>=n[0]&&s.level<=n[1])return s.children==null&&(s.children=[]),s.children.push(o),!1}return!0}function io(){const e=fe(),t=fn(),n=pn([]),o=D(()=>e.value.outline??t.value.outline);return qe(()=>{o.value!==!1&&(n.value=lo(o.value))}),{headers:n,handleClick:({target:s})=>{const l=s.href.split("#")[1],i=document.getElementById(decodeURIComponent(l));i==null||i.focus({preventScroll:!0})}}}function lo(e){const t=Array.from(document.querySelectorAll(".markdown-body :where(h1,h2,h3,h4,h5,h6)")).filter(n=>n.id&&n.hasChildNodes()).map(n=>{const o=Number(n.tagName[1]);return{title:co(n),link:`#${n.id}`,level:o,lang:n.lang}});return ao(t,e)}function co(e){let t="";for(const n of Array.from(e.childNodes))if(n.nodeType===1){if(n.classList.contains("VABadge")||n.classList.contains("header-anchor"))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function uo(){return{isAsideEnabled:se(!0)}}const mo=56,Ee=33;function fo(e,t){const{isAsideEnabled:n}=uo(),o=An(s,100);let a=null;me(()=>{requestAnimationFrame(s),window.addEventListener("scroll",o)}),gt(()=>{i(location.hash)}),pt(()=>{window.removeEventListener("scroll",o)});function s(){if(!n.value)return;const d=[].slice.call(e.value.querySelectorAll(".outline-link")),v=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(h=>d.some(A=>A.hash===h.hash&&h.offsetParent!==null)),c=window.scrollY,T=window.innerHeight,b=document.body.offsetHeight,L=Math.abs(c+T-b)<1;if(v.length&&L){i(v[v.length-1].hash);return}for(let h=0;h<v.length;h++){const A=v[h],Z=v[h+1],[P,q]=po(h,A,Z);if(P){i(q);return}}}const l=()=>{const d=a;if(!d)return;const v=d.getBoundingClientRect().top,c=d.getBoundingClientRect().bottom;(v<Ee||c>window.innerHeight-Ee)&&d.scrollIntoView()};function i(d){a&&a.classList.remove("active"),d==null?a=null:a=e.value.querySelector(`a[href="${decodeURIComponent(d)}"]`);const v=a;l(),v?(v.classList.add("active"),t.value.style.top=`${v.offsetTop+Ee}px`,t.value.style.opacity="1"):(t.value.style.top=`${Ee}px`,t.value.style.opacity="0")}}function lt(e){return e.parentElement.offsetTop-mo-15}function po(e,t,n){const o=window.scrollY;return e===0&&o===0?[!0,null]:o<lt(t)?[!1,null]:!n||o<lt(n)?[!0,t.hash]:[!1,null]}const vo=["lang"],ho=["href"],go=N({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(e){const{locale:t}=pe();return(n,o)=>{const a=ve("YunOutlineItem",!0);return _(),C("ul",{class:J(n.root?"root":"nested")},[(_(!0),C(Ve,null,_t(n.headers,({children:s,link:l,title:i,lang:d})=>(_(),C("li",{key:l,class:"va-toc-item",lang:d||g(t)},[p("a",{class:"outline-link",href:l,onClick:o[0]||(o[0]=(...v)=>n.onClick&&n.onClick(...v))},Y(i),9,ho),s!=null&&s.length?(_(),H(a,{key:0,headers:s,"on-click":n.onClick},null,8,["headers","on-click"])):w("v-if",!0)],8,vo))),128))],2)}}}),_o=Pe(go,[["__scopeId","data-v-699db71a"]]),yo=e=>($t("data-v-75b693dc"),e=e(),wt(),e),bo={class:"content"},$o={class:"outline-title"},wo={"aria-labelledby":"doc-outline-aria-label"},Eo=yo(()=>p("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),ko=N({__name:"YunOutline",setup(e){const t=vn(),n=se(),o=se();fo(n,o);const{headers:a,handleClick:s}=io();return(l,i)=>{const d=_o;return yt((_(),C("div",{ref_key:"container",ref:n},[p("div",bo,[p("div",$o,Y(g(t).outlineTitle||"On this page"),1),p("div",{ref_key:"marker",ref:o,class:"outline-marker"},null,512),p("nav",wo,[Eo,V(d,{class:"va-toc relative z-1 css-i18n-toc",headers:g(a),"on-click":g(s),root:""},null,8,["headers","on-click"])])])],512)),[[bt,g(a).length]])}}}),zo=Pe(ko,[["__scopeId","data-v-75b693dc"]]),Co=p("div",{"i-ri-file-list-line":""},null,-1),Lo=[Co],Ao={class:"aside-container",flex:"~ col"},xo={key:0,m:"t-6 b-2",font:"serif black"},So=p("div",{class:"flex-grow"},null,-1),Io={key:2,class:"custom-container"},Oo=N({__name:"YunAside",setup(e){const t=fe(),{t:n}=pe(),o=hn();return(a,s)=>{const l=gn,i=zo;return _(),C(Ve,null,[p("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:s[0]||(s[0]=d=>g(o).toggleRightSidebar())},Lo),V(l,{show:g(o).isRightSidebarOpen,onClick:s[1]||(s[1]=d=>g(o).toggleRightSidebar())},null,8,["show"]),w("  "),p("aside",{class:J(["va-card yun-aside",g(o).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[p("div",Ao,[g(t).toc!==!1?(_(),C("h2",xo,Y(g(n)("sidebar.toc")),1)):w("v-if",!0),g(t).toc!==!1?(_(),H(i,{key:1})):w("v-if",!0),So,a.$slots.default?(_(),C("div",Io,[k(a.$slots,"default")])):w("v-if",!0)])],2)],64)}}}),Mo=N({__name:"YunArtalk",setup(e){return Fe(Be)||(void 0)(),(t,n)=>{const o=ve("ArtalkClient");return _(),H(o)}}}),To=p("div",{id:"tcomment",w:"full"},null,-1),Ho=[To],No=N({__name:"YunTwikoo",setup(e){return Fe(Be)||(void 0)(),(t,n)=>(_(),C("div",null,Ho))}}),Do=N({__name:"YunWaline",setup(e){if(Fe(Be))throw new Error("Please install valaxy-addon-waline");const t=(void 0)();return(n,o)=>{const a=ve("WalineClient");return _(),H(a,{w:"full",options:g(t).options||{serverURL:""}},null,8,["options"])}}}),Yo=e=>($t("data-v-6e1fcd99"),e=e(),wt(),e),Ro={"case-capital":"","op-90":""},Vo=Yo(()=>p("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1)),Po={class:"select-options absolute translate-y-1 left-0 top-full w-full bg-[var(--va-c-bg-light)] overflow-hidden rounded-1 border"},Fo=["onClick"],Bo=N({__name:"YunSelect",props:_n({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=yn(e,"modelValue"),n=se(!1);bn("click",()=>{n.value=!1});function o(a){a.preventDefault(),a.stopImmediatePropagation(),a.stopPropagation(),n.value=!n.value}return(a,s)=>(_(),C("div",{class:"relative h-8 w-30 text-[var(--va-c-text-2)] z-20",onMousedown:s[0]||(s[0]=wn(()=>{},["stop"]))},[p("button",{class:J(["flex h-full w-full px-2 items-center justify-between border rounded transition",n.value?"border-[var(--va-c-primary)] shadow-lg":""]),onClick:o},[p("span",Ro,Y(t.value),1),Vo],2),V($n,{persisted:""},{default:j(()=>[yt(p("ul",Po,[(_(!0),C(Ve,null,_t(a.options,l=>(_(),C("li",{key:l,class:J(["cursor-pointer list-none px-2 hover:bg-[var(--va-c-primary-light)] hover:text-white case-capital",{"bg-[var(--va-c-primary)] text-white":t.value===l}]),onClick:i=>t.value=l},Y(l),11,Fo))),128))],512),[[bt,n.value]])]),_:1})],32))}}),qo=Pe(Bo,[["__scopeId","data-v-6e1fcd99"]]),Uo={key:0,class:"flex justify-end w-full mb-2"},jo=N({__name:"YunComment",setup(e){const t=En(),n=["valaxy-addon-waline","valaxy-addon-twikoo","valaxy-addon-artalk"],o=D(()=>n.filter(s=>t.value.addons[s]).map(s=>s.split("-")[2])),a=se(o.value[0]);return(s,l)=>{const i=qo,d=Do,v=No,c=Mo,T=ve("ClientOnly"),b=Et;return _(),H(b,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:j(()=>[V(T,null,{default:j(()=>[o.value.length>1?(_(),C("div",Uo,[V(i,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=L=>a.value=L),options:o.value},null,8,["modelValue","options"])])):w("v-if",!0),a.value==="waline"?(_(),H(d,{key:1})):w("v-if",!0),a.value==="twikoo"?(_(),H(v,{key:2})):w("v-if",!0),a.value==="artalk"?(_(),H(c,{key:3})):w("v-if",!0),k(s.$slots,"default")]),_:3})]),_:3})}}}),Xo={class:"post-nav"},Wo={class:"post-nav-item"},Go=p("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),Zo={class:"title truncate",text:"sm"},Ko={class:"post-nav-item"},Jo={class:"title truncate",text:"sm"},Qo=p("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),ea=N({__name:"YunPostNav",setup(e){const[t,n]=Un();return(o,a)=>{const s=ve("RouterLink");return _(),C("div",Xo,[p("div",Wo,[g(t)?(_(),H(s,{key:0,class:"post-nav-prev",to:g(t).path||"",title:g(t).title},{default:j(()=>[Go,p("span",Zo,Y(g(t).title),1)]),_:1},8,["to","title"])):w("v-if",!0)]),p("div",Ko,[g(n)?(_(),H(s,{key:0,to:g(n).path||"",title:g(n).title,class:"post-nav-next"},{default:j(()=>[p("span",Jo,Y(g(n).title),1),Qo]),_:1},8,["to","title"])):w("v-if",!0)])])}}}),W=typeof window<"u",zt=W&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),Ct=W&&window.devicePixelRatio>1,ta={elements_selector:".lazy",container:zt||W?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Lt=e=>Object.assign({},ta,e),ct=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},na=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)ct(e,n);else ct(e,t)},B="src",Ue="srcset",je="sizes",At="poster",he="llOriginalAttrs",xt="data",Xe="loading",St="loaded",It="applied",oa="entered",We="error",Ot="native",Mt="data-",Tt="ll-status",M=(e,t)=>e.getAttribute(Mt+t),aa=(e,t,n)=>{const o=Mt+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ge=e=>M(e,Tt),ee=(e,t)=>aa(e,Tt,t),Ae=e=>ee(e,null),Ge=e=>ge(e)===null,sa=e=>ge(e)===Xe,ra=e=>ge(e)===We,Ze=e=>ge(e)===Ot,ia=[Xe,St,It,We],la=e=>ia.indexOf(ge(e))>=0,G=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},ie=(e,t)=>{W&&t!==""&&e.classList.add(t)},F=(e,t)=>{W&&t!==""&&e.classList.remove(t)},ca=e=>{e.llTempImage=document.createElement("IMG")},da=e=>{delete e.llTempImage},Ht=e=>e.llTempImage,xe=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},ua=e=>{e.disconnect()},ma=(e,t,n)=>{t.unobserve_entered&&xe(e,n)},Ke=(e,t)=>{e&&(e.loadingCount+=t)},fa=e=>{e&&(e.toLoadCount-=1)},Nt=(e,t)=>{e&&(e.toLoadCount=t)},pa=e=>e.loadingCount>0,va=e=>e.toLoadCount>0,Dt=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Je=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&Dt(n).forEach(t)},Yt=(e,t)=>{Dt(e).forEach(t)},Se=[B],Rt=[B,At],de=[B,Ue,je],Vt=[xt],Ie=e=>!!e[he],Pt=e=>e[he],Ft=e=>delete e[he],re=(e,t)=>{if(Ie(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[he]=n},ha=e=>{Ie(e)||(e[he]={backgroundImage:e.style.backgroundImage})},Q=(e,t)=>{if(!Ie(e))return;const n=Pt(e);t.forEach(o=>{((a,s,l)=>{l?a.setAttribute(s,l):a.removeAttribute(s)})(e,o,n[o])})},ga=e=>{if(!Ie(e))return;const t=Pt(e);e.style.backgroundImage=t.backgroundImage},Bt=(e,t,n)=>{ie(e,t.class_applied),ee(e,It),n&&(t.unobserve_completed&&xe(e,t),G(t.callback_applied,e,n))},qt=(e,t,n)=>{ie(e,t.class_loading),ee(e,Xe),n&&(Ke(n,1),G(t.callback_loading,e,n))},X=(e,t,n)=>{n&&e.setAttribute(t,n)},dt=(e,t)=>{X(e,je,M(e,t.data_sizes)),X(e,Ue,M(e,t.data_srcset)),X(e,B,M(e,t.data_src))},_a=(e,t)=>{Je(e,n=>{re(n,de),dt(n,t)}),re(e,de),dt(e,t)},ya=(e,t)=>{re(e,Se),X(e,B,M(e,t.data_src))},ba=(e,t)=>{Yt(e,n=>{re(n,Se),X(n,B,M(n,t.data_src))}),re(e,Rt),X(e,At,M(e,t.data_poster)),X(e,B,M(e,t.data_src)),e.load()},$a=(e,t)=>{re(e,Vt),X(e,xt,M(e,t.data_src))},wa=(e,t,n)=>{const o=M(e,t.data_bg),a=M(e,t.data_bg_hidpi),s=Ct&&a?a:o;s&&(e.style.backgroundImage=`url("${s}")`,Ht(e).setAttribute(B,s),qt(e,t,n))},Ea=(e,t,n)=>{const o=M(e,t.data_bg_multi),a=M(e,t.data_bg_multi_hidpi),s=Ct&&a?a:o;s&&(e.style.backgroundImage=s,Bt(e,t,n))},ka=(e,t,n)=>{const o=M(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(s=>`image-set(${s})`);e.style.backgroundImage=a.join(),Bt(e,t,n)},Ut={IMG:_a,IFRAME:ya,VIDEO:ba,OBJECT:$a},za=(e,t)=>{const n=Ut[e.tagName];n&&n(e,t)},Ca=(e,t,n)=>{const o=Ut[e.tagName];o&&(o(e,t),qt(e,t,n))},La=["IMG","IFRAME","VIDEO","OBJECT"],Aa=e=>La.indexOf(e.tagName)>-1,jt=(e,t)=>{!t||pa(t)||va(t)||G(e.callback_finish,t)},ut=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},xa=(e,t,n)=>{e.removeEventListener(t,n)},Qe=e=>!!e.llEvLisnrs,Sa=(e,t,n)=>{Qe(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";ut(e,o,t),ut(e,"error",n)},Ne=e=>{if(!Qe(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];xa(e,n,o)}delete e.llEvLisnrs},Xt=(e,t,n)=>{da(e),Ke(n,-1),fa(n),F(e,t.class_loading),t.unobserve_completed&&xe(e,n)},Ia=(e,t,n,o)=>{const a=Ze(t);Xt(t,n,o),ie(t,n.class_loaded),ee(t,St),G(n.callback_loaded,t,o),a||jt(n,o)},Oa=(e,t,n,o)=>{const a=Ze(t);Xt(t,n,o),ie(t,n.class_error),ee(t,We),G(n.callback_error,t,o),n.restore_on_error&&Q(t,de),a||jt(n,o)},De=(e,t,n)=>{const o=Ht(e)||e;Qe(o)||Sa(o,a=>{Ia(0,e,t,n),Ne(o)},a=>{Oa(0,e,t,n),Ne(o)})},Ye=(e,t,n)=>{Aa(e)?((o,a,s)=>{De(o,a,s),Ca(o,a,s)})(e,t,n):((o,a,s)=>{ca(o),De(o,a,s),ha(o),wa(o,a,s),Ea(o,a,s),ka(o,a,s)})(e,t,n)},Ma=(e,t,n)=>{e.setAttribute("loading","lazy"),De(e,t,n),za(e,t),ee(e,Ot)},mt=e=>{e.removeAttribute(B),e.removeAttribute(Ue),e.removeAttribute(je)},Ta=e=>{Je(e,t=>{mt(t)}),mt(e)},Wt=e=>{Je(e,t=>{Q(t,de)}),Q(e,de)},Ha=e=>{Yt(e,t=>{Q(t,Se)}),Q(e,Rt),e.load()},Na=e=>{Q(e,Se)},Da=e=>{Q(e,Vt)},Ya={IMG:Wt,IFRAME:Na,VIDEO:Ha,OBJECT:Da},Ra=(e,t)=>{(n=>{const o=Ya[n.tagName];o?o(n):ga(n)})(e),((n,o)=>{Ge(n)||Ze(n)||(F(n,o.class_entered),F(n,o.class_exited),F(n,o.class_applied),F(n,o.class_loading),F(n,o.class_loaded),F(n,o.class_error))})(e,t),Ae(e),Ft(e)},Va=(e,t,n,o)=>{n.cancel_on_exit&&sa(e)&&e.tagName==="IMG"&&(Ne(e),Ta(e),Wt(e),F(e,n.class_loading),Ke(o,-1),Ae(e),G(n.callback_cancel,e,t,o))},Pa=(e,t,n,o)=>{const a=la(e);ee(e,oa),ie(e,n.class_entered),F(e,n.class_exited),ma(e,n,o),G(n.callback_enter,e,t,o),a||Ye(e,n,o)},Fa=(e,t,n,o)=>{Ge(e)||(ie(e,n.class_exited),Va(e,t,n,o),G(n.callback_exit,e,t,o))},Ba=["IMG","IFRAME","VIDEO"],Gt=e=>e.use_native&&"loading"in HTMLImageElement.prototype,qa=(e,t,n)=>{e.forEach(o=>{Ba.indexOf(o.tagName)!==-1&&Ma(o,t,n)}),Nt(n,0)},Ua=e=>e.isIntersecting||e.intersectionRatio>0,ja=(e,t)=>{t.forEach(n=>{e.observe(n)})},Xa=(e,t)=>{ua(e),ja(e,t)},Wa=(e,t)=>{Gt(e)||(t._observer=new IntersectionObserver(n=>{((o,a,s)=>{o.forEach(l=>Ua(l)?Pa(l.target,l,a,s):Fa(l.target,l,a,s))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},Zt=e=>Array.prototype.slice.call(e),Le=e=>e.container.querySelectorAll(e.elements_selector),Ga=e=>Zt(e).filter(Ge),Za=e=>ra(e),Ka=e=>Zt(e).filter(Za),ft=(e,t)=>Ga(e||Le(t)),Ja=(e,t)=>{Ka(Le(e)).forEach(n=>{F(n,e.class_error),Ae(n)}),t.update()},Qa=(e,t)=>{W&&(t._onlineHandler=()=>{Ja(e,t)},window.addEventListener("online",t._onlineHandler))},es=e=>{W&&window.removeEventListener("online",e._onlineHandler)},ce=function(e,t){const n=Lt(e);this._settings=n,this.loadingCount=0,Wa(n,this),Qa(n,this),this.update(t)};ce.prototype={update:function(e){const t=this._settings,n=ft(e,t);Nt(this,n.length),zt?this.loadAll(n):Gt(t)?qa(n,t,this):Xa(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),es(this),Le(this._settings).forEach(e=>{Ft(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;ft(e,t).forEach(n=>{xe(n,this),Ye(n,t,this)})},restoreAll:function(){const e=this._settings;Le(e).forEach(t=>{Ra(t,e)})}},ce.load=(e,t)=>{const n=Lt(t);Ye(e,n)},ce.resetStatus=e=>{Ae(e)},W&&na(ce,window.lazyLoadOptions);function ts(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new ce({elements_selector:".lazy",...e})}function ns(){const e=ue();e.value.vanillaLazyload.enable&&me(()=>{ts(e.value.vanillaLazyload)})}function os(){Re&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const s=o.querySelector(".blocks");if(!s)return;const l=Array.from(s.children).find(v=>v.classList.contains("active"));if(!l)return;const i=s.children[a];if(!i||l===i)return;l.classList.remove("active"),i.classList.add("active");const d=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);d==null||d.scrollIntoView({block:"nearest"})}})}const as={key:0,text:"center"},ss=["href"],rs={m:"y-4",class:"end flex justify-center items-center"},is=p("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),ls={p:"x-4",font:"bold",class:"whitespace-nowrap"},cs=p("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),ds=N({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=pe(),o=se();return qe(()=>{Bn(o.value)}),me(()=>{$e()}),gt(()=>{$e()}),t.frontmatter.aplayer&&no(),t.frontmatter.codepen&&oo(),jn(),os(),to(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&eo(),ns(),(a,s)=>a.$slots.default?(_(),C("article",{key:0,class:J(a.frontmatter.markdown!==!1&&"markdown-body")},[k(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:s[0]||(s[0]=(...l)=>g($e)&&g($e)(...l))}),a.frontmatter.url?(_(),C("div",as,[p("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},Y(g(n)("post.view_link")),9,ss)])):w("v-if",!0),a.frontmatter.end!==void 0?k(a.$slots,"end",{key:1},()=>[p("div",rs,[is,p("span",ls,Y(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),cs])]):w("v-if",!0)],2)):w("v-if",!0)}}),us={key:0,class:"yun-time-warning",op:"80"},ms=N({__name:"YunMdTimeWarning",setup(e){const t=fe(),{t:n}=pe(),o=D(()=>t.value.updated||t.value.date||new Date),a=D(()=>{const l=Pn(o.value,{addSuffix:!0});return/^\d/.test(l)?` ${l}`:l}),s=D(()=>{const l=kt(new Date,o.value);return typeof t.value.time_warning=="number"?l>t.value.time_warning:t.value.time_warning});return(l,i)=>s.value?(_(),C("blockquote",us,Y(g(n)("post.time_warning",{ago:a.value})),1)):w("v-if",!0)}}),fs={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},ps={font:"black",flex:"","items-center":""},vs=p("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1),hs={op:"90","mt-1":""},gs=N({__name:"YunAiExcerpt",setup(e){const t=fe(),{t:n}=pe();return(o,a)=>(_(),C("div",fs,[p("div",ps,[vs,p("div",null,Y(g(n)("excerpt.ai")),1)]),p("div",hs,Y(g(t).excerpt),1)]))}}),_s={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},ys={w:"full",flex:"~"},bs={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},As=N({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=ue(),{styles:o,icon:a,color:s}=In(t.frontmatter.type),l=kn(D(()=>t.frontmatter)),i=D(()=>t.frontmatter.aside!==!1),d=vt(),v=zn();return Cn(()=>{d.hash&&setTimeout(()=>{st(document.body,d.hash,!0)},0)}),qe(()=>{window.addEventListener("click",async c=>{const T=c.target.closest("a");if(T){const{protocol:b,hostname:L,pathname:h,hash:A,target:Z}=T,P=window.location,q=h.match(/\.\w+$/);!c.ctrlKey&&!c.shiftKey&&!c.altKey&&!c.metaKey&&Z!=="_blank"&&b===P.protocol&&L===P.hostname&&!(q&&q[0]!==".html")&&h===P.pathname&&(c.preventDefault(),A&&A!==P.hash&&(await v.push({hash:decodeURIComponent(A)}),st(T,A,T.classList.contains("header-anchor"))))}},{capture:!0})}),(c,T)=>{const b=Sn,L=gs,h=ms,A=ds,Z=Et,P=ea,q=jo,S=xn,te=Oo;return _(),C("main",_s,[p("div",ys,[k(c.$slots,"main",{},()=>[p("div",{class:J(["content",!i.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[V(Z,{cover:c.frontmatter.cover,m:"0",class:"relative",style:Ln(g(o))},{default:j(()=>[k(c.$slots,"main-header",{},()=>[V(b,{class:"mb-2",title:g(l),icon:c.frontmatter.icon||g(a),color:c.frontmatter.color||g(s),cover:c.frontmatter.cover},null,8,["title","icon","color","cover"])]),k(c.$slots,"main-header-after"),p("div",bs,[k(c.$slots,"main-content",{},()=>[w(" <Transition appear> "),V(A,{frontmatter:c.frontmatter},{default:j(()=>[c.frontmatter.excerpt_type==="ai"&&c.frontmatter.excerpt?(_(),H(L,{key:0})):w("v-if",!0),V(h),k(c.$slots,"main-content-md"),k(c.$slots,"default")]),_:3},8,["frontmatter"]),w(" </Transition> ")]),k(c.$slots,"main-content-after")])]),_:3},8,["cover","style"]),k(c.$slots,"main-nav-before"),k(c.$slots,"main-nav",{},()=>[c.frontmatter.nav!==!1?(_(),H(P,{key:0})):w("v-if",!0)]),k(c.$slots,"main-nav-after"),g(n).comment.enable&&c.frontmatter.comment!==!1?k(c.$slots,"comment",{key:0},()=>[V(q,{class:J(c.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):w("v-if",!0),k(c.$slots,"main-footer-before"),V(S),k(c.$slots,"main-footer-after")],2)]),k(c.$slots,"aside",{},()=>[i.value?(_(),H(te,{key:0},{default:j(()=>[k(c.$slots,"aside-custom")]),_:3})):w("v-if",!0)])])])}}});export{As as _};
