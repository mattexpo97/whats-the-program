import{_ as z,u as F}from"./useHelpers.448cff6f.js";import{_ as H}from"./item.3821369f.js";import{p as N,r as g,t as U,q as V,s as A,w as q,u as b,v as I,x as L,y as W,e as C,f as P,i as Z,F as G,j as K,o as x,m as X,c as Y,l as R,k as T}from"./entry.bc2ca071.js";import"./Icon.afd42512.js";import"./config.853a7d9a.js";import"./_plugin-vue_export-helper.c27b6911.js";const J=()=>null;function M(...o){const s=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(s);let[e,i,n={}]=o;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=n.server??!0,n.default=n.default??J,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0;const t=N(),w=()=>t.isHydrating?t.payload.data[e]:t.static.data[e],c=()=>w()!==void 0;t._asyncData[e]||(t._asyncData[e]={data:g(w()??n.default()),pending:g(!c()),error:U(t.payload._errors,e)});const a={...t._asyncData[e]};a.refresh=a.execute=(u={})=>{if(t._asyncDataPromises[e]){if(u.dedupe===!1)return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if((u._initial||t.isHydrating&&u._initial!==!1)&&c())return w();a.pending.value=!0;const v=new Promise((l,f)=>{try{l(i(t))}catch(O){f(O)}}).then(l=>{if(v.cancelled)return t._asyncDataPromises[e];let f=l;n.transform&&(f=n.transform(l)),n.pick&&(f=Q(f,n.pick)),a.data.value=f,a.error.value=null}).catch(l=>{if(v.cancelled)return t._asyncDataPromises[e];a.error.value=l,a.data.value=b(n.default())}).finally(()=>{v.cancelled||(a.pending.value=!1,t.payload.data[e]=a.data.value,a.error.value&&(t.payload._errors[e]=I(a.error.value)),delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=v,t._asyncDataPromises[e]};const p=()=>a.refresh({_initial:!0}),y=n.server!==!1&&t.payload.serverRendered;{const u=L();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const l=u._nuxtOnBeforeMountCbs;u&&(V(()=>{l.forEach(f=>{f()}),l.splice(0,l.length)}),A(()=>l.splice(0,l.length)))}y&&t.isHydrating&&c()?a.pending.value=!1:u&&(t.payload.serverRendered&&t.isHydrating||n.lazy)&&n.immediate?u._nuxtOnBeforeMountCbs.push(p):n.immediate&&p(),n.watch&&q(n.watch,()=>a.refresh());const v=t.hook("app:data:refresh",l=>{if(!l||l.includes(e))return a.refresh()});u&&A(v)}const h=Promise.resolve(t._asyncDataPromises[e]).then(()=>a);return Object.assign(h,a),h}function Q(o,s){const e={};for(const i of s)e[i]=o[i];return e}const ee=()=>({fetchShows:async(s=null)=>s!=null&&s.length?await $fetch(`https://api.tvmaze.com/search/shows?q=${s}`,{transform:e=>e.show}):await $fetch("https://api.tvmaze.com/shows")});function E(o){return typeof o=="function"?o():b(o)}const $=()=>{};function te(o,s){function e(...i){return new Promise((n,t)=>{Promise.resolve(o(()=>s.apply(this,i),{fn:s,thisArg:this,args:i})).then(n).catch(t)})}return e}function ne(o,s={}){let e,i,n=$;const t=c=>{clearTimeout(c),n(),n=$};return c=>{const a=E(o),p=E(s.maxWait);return e&&t(e),a<=0||p!==void 0&&p<=0?(i&&(t(i),i=null),Promise.resolve(c())):new Promise((y,h)=>{n=s.rejectOnCancel?h:y,p&&!i&&(i=setTimeout(()=>{e&&t(e),i=null,y(c())},p)),e=setTimeout(()=>{i&&t(i),i=null,y(c())},a)})}}function ae(o,s=200,e={}){return te(ne(s,e),o)}const re={class:"overflow-y-hidden"},se={key:0,class:"flex items-center snap-x space-x-8 snap-mandatory overflow-scroll px-8"},oe={key:1,class:"mt-40"},ie=R("p",{class:"w-full text-4xl text-center text-white"},[T(" No results were found for your search "),R("br"),T(" :( ")],-1),le=[ie],ve={__name:"index",async setup(o){let s,e;const{sort:i}=F(),{filterByRuntime:n}=F(),{fetchShows:t}=ee(),w=[{label:"Rating",value:"-rating.average"},{label:"A -> Z",value:"name"},{label:"Z -> A",value:"-name"}],c=[{label:"All duration",value:"all"},{label:"Short",value:"short"},{label:"Medium",value:"medium"},{label:"Long",value:"long"}],a=g(""),p=g(w[0].value),y=g(c[0].value),h=g(null),{data:u}=([s,e]=W(()=>M(()=>t(a.value),{transform:m=>m.map(r=>a.value?r.show:r)},"$PslAyef5YX")),s=await s,e(),s),v=ae(async()=>{const{data:m}=await M(()=>t(a.value),{transform:r=>r.map(_=>a.value?_.show:_)},"$6PO73qLRkI");u.value=m.value},1e3,{maxWait:5e3});function l(){v()}const f=C(()=>i(p.value,u.value).filter(m=>n(m,y.value)).filter(m=>{var r;return!((r=h.value)!=null&&r.length)||h.value.every(_=>m.genres.indexOf(_)>=0)})),O=C(()=>{const m=[];return f.value.forEach(r=>{m.push(...r.genres)}),[...new Set(m)].map(r=>({label:r,value:r})).sort((r,_)=>r.label.localeCompare(_.label))});return(m,r)=>{var S;const _=z,j=H;return x(),P("div",re,[Z(_,{sortOptions:w,runtimeOptions:c,genreOptions:b(O),onUpdatedSearch:r[0]||(r[0]=d=>(a.value=d,l())),onUpdatedSortBy:r[1]||(r[1]=d=>p.value=d),onUpdatedRuntimeFilter:r[2]||(r[2]=d=>y.value=d),onUpdatedGenreFilter:r[3]||(r[3]=d=>h.value=d)},null,8,["genreOptions"]),(S=b(f))!=null&&S.length?(x(),P("div",se,[(x(!0),P(G,null,K(b(f),(d,ue,ce,D)=>{const k=[];if(D&&D.key===d.id&&X(D,k))return D;const B=(x(),Y(j,{key:d.id,class:"snap-center shrink-0",show:d},null,8,["show"]));return B.memo=k,B},r,4),128))])):(x(),P("div",oe,le))])}}};export{ve as default};
