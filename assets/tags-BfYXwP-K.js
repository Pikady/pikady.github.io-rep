import{_ as M}from"./YunCard.vue_vue_type_script_setup_true_lang-wvn6XUJO.js";import{_ as N}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-uRWKCPxJ.js";import{ao as z,ap as P,d as A,o as e,e as S,g as _,t as T,a8 as D,a9 as I,a as j,u as H,S as O,y as W,M as G,q as Y,A as J,i as K,a5 as Q,s as U,c,w as o,r as X,m as u,aa as Z,f as t,F as V,l as tt,n as et,v as nt,a7 as st}from"./app-DS06EX_z.js";import{_ as ot}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DI60N7Ok.js";import{u as at}from"./helper-oeeK3k_K.js";function rt(f={primary:"#0078E7"}){const n=z(),m=new P("#999999"),g=new P(f.primary);return{tags:n,getTagStyle:a=>{const r=Array.from(n.value).map(([v,x])=>x.count),y=Math.max(...r),s=Math.min(...r),h=y-s,p=(a-s)/h;return{"--yun-tag-color":m.mix(g,p*100).toString(),fontSize:`${p*36+12}px`}}}}const lt={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},it={"inline-flex":""},ct={"inline-flex":"",text:"xs"},ut=A({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(f){return(n,m)=>(e(),S("span",lt,[_("span",it,"#"+T(n.title),1),_("span",ct,"["+T(n.count)+"]",1)]))}}),mt={class:"yun-text-light",text:"center",p:"2"},pt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},vt=A({__name:"tags",setup(f){D([I({"@type":"CollectionPage"})]);const n=j(),m=H(),g=O(),{t:d}=W(),a=G(),{tags:r,getTagStyle:y}=rt({primary:g.value.colors.primary}),s=Y(()=>n.query.tag||""),h=J(),p=Y(()=>h.postList.filter(i=>i.tags?typeof i.tags=="string"?i.tags===s.value:i.tags.includes(s.value):!1)),v=K(),{show:x}=at(v);function B(l){m.push({query:{tag:l}}),x()}const L=Q(a);return(l,i)=>{const $=st,w=ot,R=ut,b=U("RouterView"),q=N,E=M;return e(),S(V,null,[l.$slots["sidebar-child"]?(e(),c($,{key:0},{default:o(()=>[X(l.$slots,"sidebar-child")]),_:3})):(e(),c($,{key:1})),u(b,null,{default:o(({Component:F})=>[(e(),c(Z(F),null,{"main-header":o(()=>[u(w,{title:t(L)||t(d)("menu.tags"),icon:t(a).icon||"i-ri-tag-line",color:t(a).color},null,8,["title","icon","color"])]),"main-content":o(()=>[_("div",mt,T(t(d)("counter.tags",Array.from(t(r)).length)),1),_("div",pt,[(e(!0),S(V,null,tt(Array.from(t(r)).sort(),([C,k])=>(e(),c(R,{key:C,title:C,count:k.count,style:et(t(y)(k.count)),onClick:_t=>B(C.toString())},null,8,["title","count","style","onClick"]))),128))]),u(b)]),"main-nav-before":o(()=>[s.value?(e(),c(E,{key:0,ref_key:"collapse",ref:v,m:"t-4",w:"full"},{default:o(()=>[u(w,{title:s.value,icon:"i-ri-hashtag"},null,8,["title"]),u(q,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:p.value},null,8,["posts"])]),_:1},512)):nt("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{vt as default};
