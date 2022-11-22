var M=Object.defineProperty;var S=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var E=(e,t,o)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,F=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&E(e,o,t[o]);if(S)for(var o of S(t))O.call(t,o)&&E(e,o,t[o]);return e};import{r as y,o as c,c as a,a as s,b as m,w,d as h,t as u,e as D,f as B,n as P,F as A,g as L,h as _,v as k,i as g,j as C,k as b,l as V,m as U,p as R,q as z,s as H}from"./vendor.d64e529b.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};J();var p=(e,t)=>{const o=e.__vccOpts||e;for(const[l,n]of t)o[l]=n;return o};const q={name:"AppHeader",components:{},data(){return{}},created(){},methods:{},computed:{},unmounted(){}},j={class:"main-header container flex items-center justify-between"},G=s("h1",{class:"uppercase"},"Toys",-1),W={class:"flex gap-3 nav"},K=h("Home"),Y=h("Toys");function Q(e,t,o,l,n,i){const r=y("RouterLink");return c(),a("section",j,[G,s("nav",W,[m(r,{class:"link",to:"/"},{default:w(()=>[K]),_:1}),m(r,{class:"link",to:"/toy"},{default:w(()=>[Y]),_:1})])])}var X=p(q,[["render",Q]]);function Z(e,t){const o=({detail:l})=>{t(l)};return window.addEventListener(e,o),()=>{window.removeEventListener(e,o)}}function I(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}const tt={on:Z,emit:I};function $(e,t="success"){I("show-msg",{txt:e,type:t})}const et={data(){return{msg:null,removeEventListener:null}},created(){this.unsubscribe=tt.on("show-msg",this.showMsg)},methods:{showMsg(e){this.msg=e,setTimeout(()=>{this.msg=null},3e3)}},unmounted(){this.unsubscribe()}},ot={class:"texts"},st=h("Learn More about this website");function nt(e,t,o,l,n,i){const r=y("router-link");return n.msg?(c(),a("div",{key:0,class:P(["user-msg",n.msg.type])},[s("div",ot,[s("h2",null,u(n.msg.type),1),s("p",null,u(n.msg.txt),1),n.msg.link?(c(),D(r,{key:0,to:n.msg.link,class:"learn-more"},{default:w(()=>[st]),_:1},8,["to"])):B("",!0)])],2)):B("",!0)}var rt=p(et,[["render",nt],["__scopeId","data-v-908a1534"]]);const it={components:{AppHeader:X,UserMsg:rt},created(){this.$store.dispatch({type:"loadToys"})}},lt={class:"app-container container"};function ct(e,t,o,l,n,i){const r=y("app-header"),d=y("RouterView"),f=y("user-msg");return c(),a("section",lt,[m(r),m(d),m(f)])}var at=p(it,[["render",ct]]),dt="/assets/toy.d94cf357.svg";const ut={components:{},methods:{doIt(){console.log("doing it...")}}},pt={class:"hero text-center"},_t=s("h1",null,"Welcome to my toy shop",-1),yt=s("img",{src:dt,alt:""},null,-1),mt=[_t,yt];function ht(e,t,o,l,n,i){return c(),a("main",pt,mt)}var ft=p(ut,[["render",ht]]);const vt={name:"ToyPreview",props:{toy:{type:Object,required:!0,default:12,default(){return{name:"",price:null,labels:["Doll","Battery Powered","Baby"],createdAt:new Date(Date.now()).toLocaleString(),inStock:!0,reviews:[]}}}},components:{},data(){return{}},created(){},methods:{},computed:{},unmounted(){}},gt={class:"childs"},$t=s("span",{class:"fw-bold"},"Price:",-1);function bt(e,t,o,l,n,i){return c(),a("section",gt,[s("h3",null,u(o.toy.name),1),s("p",null,[$t,h(" "+u(o.toy.price)+"$",1)]),s("p",null,"In stock? "+u(o.toy.inStock),1)])}var Tt=p(vt,[["render",bt]]);const wt={name:"ToyList",props:{toys:Array},components:{ToyPreview:Tt},data(){return{}},created(){},methods:{remove(e){this.$emit("remove",e)}},computed:{},unmounted(){}},Bt={class:"toy-list"},kt={class:"grid gap-1 clean-list"},xt={class:"btn-group"},St=["onClick"],Et=["onClick"],Ft=["onClick"];function At(e,t,o,l,n,i){const r=y("ToyPreview");return c(),a("section",Bt,[s("ul",kt,[(c(!0),a(A,null,L(o.toys,d=>(c(),a("li",{class:"p-2 text-center flex flex-col items-center gap-2",key:d._id},[m(r,{class:"flex-col",toy:d},null,8,["toy"]),s("div",xt,[s("button",{class:"btn btn-danger",onClick:f=>i.remove(d._id)},"Remove",8,St),s("button",{onClick:f=>e.$router.push(`/toy/edit/${d._id}`),class:"btn btn-primary"}," Edit ",8,Et),s("button",{onClick:f=>e.$router.push(`/toy/${d._id}`),class:"btn btn-info"}," Details ",8,Ft)])]))),128))])])}var Lt=p(wt,[["render",At]]);function Ct(e=5){var t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let l=0;l<e;l++)t+=o.charAt(Math.floor(Math.random()*o.length));return t}function It(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function Mt(e,t){let o;return function(...n){const i=()=>{clearTimeout(o),e(...n)};clearTimeout(o),o=setTimeout(i,t)}}const Nt={makeId:Ct,getRandomInt:It,debounce:Mt},Ot={name:"ToyFilter",data(){return{filterBy:{name:"",lable:"",inStock:null,sortBy:""}}},created(){this.setFilter=Nt.debounce(this.setFilter,1e3)},methods:{setFilter(){this.$emit("set-filter",this.filterBy)}}},Dt={class:"flex items-center gap-2"},Pt={class:"form-control"},Vt=s("label",{class:"form-label"}," Search a toy ",-1),Ut={class:"form-control"},Rt=s("label",{class:"form-label"}," Stock ",-1),zt=s("option",{value:""},"All",-1),Ht=s("option",{value:"true"},"In stock",-1),Jt=s("option",{value:"false"},"Not in stock",-1),qt=[zt,Ht,Jt],jt={class:"form-control"},Gt=s("label",{class:"form-label"}," Labels ",-1),Wt=C('<option value="">All</option><option value="On wheels">On wheels</option><option value="Box game">Box game</option><option value="Art">Art</option><option value="Baby">Baby</option><option value="Doll">Doll</option><option value="Puzzle">Puzzle</option><option value="Outdoor">Outdoor</option>',8),Kt=[Wt],Yt={class:"form-control"},Qt=s("label",{class:"form-label"}," Sort By ",-1),Xt=s("option",{value:"time"},"Time",-1),Zt=s("option",{value:"name"},"Name",-1),te=s("option",{value:"price"},"Price",-1),ee=[Xt,Zt,te];function oe(e,t,o,l,n,i){return c(),a("section",Dt,[s("div",Pt,[Vt,_(s("input",{onInput:t[0]||(t[0]=(...r)=>i.setFilter&&i.setFilter(...r)),class:"form-input",placeholder:"Search....","onUpdate:modelValue":t[1]||(t[1]=r=>n.filterBy.name=r)},null,544),[[k,n.filterBy.name]])]),s("div",Ut,[Rt,_(s("select",{class:"form-input",onChange:t[2]||(t[2]=(...r)=>i.setFilter&&i.setFilter(...r)),"onUpdate:modelValue":t[3]||(t[3]=r=>n.filterBy.inStock=r)},qt,544),[[g,n.filterBy.inStock]])]),s("div",jt,[Gt,_(s("select",{class:"form-input",onChange:t[4]||(t[4]=(...r)=>i.setFilter&&i.setFilter(...r)),"onUpdate:modelValue":t[5]||(t[5]=r=>n.filterBy.lable=r)},Kt,544),[[g,n.filterBy.lable]])]),s("div",Yt,[Qt,_(s("select",{class:"form-input",onChange:t[6]||(t[6]=(...r)=>i.setFilter&&i.setFilter(...r)),"onUpdate:modelValue":t[7]||(t[7]=r=>n.filterBy.sortBy=r)},ee,544),[[g,n.filterBy.sortBy]])])])}var se=p(Ot,[["render",oe]]);const ne={components:{ToyList:Lt,ToyFilter:se},data(){return{filterBy:null}},created(){},methods:{removeToy(e){this.$store.dispatch({type:"removeToy",id:e}).then(()=>{$("Removed successfully","success")}).catch(()=>{$("Cannot remove toy","error")})},setFilter(e){console.log(e);const t=JSON.parse(JSON.stringify(e));console.log(t),this.$store.dispatch({type:"setFilterAct",filterBy:t})}},computed:{toys(){return this.$store.getters.toysToShow}}},re={class:"container flex flex-col gap-2 items-start"};function ie(e,t,o,l,n,i){const r=y("ToyFilter"),d=y("ToyList");return c(),a("section",re,[s("button",{onClick:t[0]||(t[0]=f=>e.$router.push("/toy/edit")),class:"btn btn-secondary"},"Add a new toy"),m(r,{onSetFilter:i.setFilter},null,8,["onSetFilter"]),m(d,{toys:i.toys,onRemove:i.removeToy},null,8,["toys","onRemove"])])}var le=p(ne,[["render",ie]]);const ce={components:{},data(){return{toy:null}},async created(){const{id:e}=this.$route.params;this.$store.dispatch({type:"getToyById",toyId:e}).then(t=>{this.toy=t}).catch(()=>showMsg("Cannot get toy","danger"))},methods:{}},ae={key:0,class:"flex flex-col gap-1"},de=s("h3",null,"Toy Details",-1),ue=s("span",{class:"fw-bold"},"ID:",-1),pe=s("span",{class:"fw-bold"},"Name:",-1),_e=s("span",{class:"fw-bold"},"Price:",-1),ye=s("p",{class:"fw-bold"},"Labels:",-1),me={key:1,class:"loading"};function he(e,t,o,l,n,i){return n.toy?(c(),a("section",ae,[de,s("p",null,[ue,h(" "+u(n.toy._id),1)]),s("p",null,[pe,h(" "+u(n.toy.name),1)]),s("p",null,[_e,h(" "+u(n.toy.price),1)]),ye,s("ul",null,[(c(!0),a(A,null,L(n.toy.reviews,(r,d)=>(c(),a("li",{key:d+Math.ceil(Math.random()*100)},u(r),1))),128))])])):(c(),a("div",me))}var fe=p(ce,[["render",he]]),v={query:ve,getById:ge,remove:$e,save:be,getEmptyToy:Te};function T(e=""){return`/api/toy/${e}`}function ve(e){return b.get(T(),{params:e}).then(t=>t.data)}function ge(e){return b.get(T(e)).then(t=>t.data)}function $e(e){return b.delete(T(e)).then(t=>t.data)}function be(e){return e._id?b.put(T(e._id),e).then(t=>t.data):b.post(T(),e).then(t=>t.data)}function Te(){return{_id:"",name:"",price:null,labels:["Doll","Battery Powered","Baby"],createdAt:new Date(Date.now()).toLocaleString(),inStock:!0,reviews:["Good","Nice","Fun"]}}const we={components:{},data(){return{toyToEdit:null}},created(){const e=this.toyId;e?this.$store.dispatch({type:"getToyById",toyId:e}).then(t=>{this.toyToEdit=t}).catch(()=>$("Cannot get toy","danger")):this.toyToEdit=v.getEmptyToy()},methods:{save(){console.log(this.toyToEdit),this.$store.dispatch({type:"saveToy",toy:this.toyToEdit}).then(e=>{$(`New Toy with ID: ${e._id}`)}).catch(()=>$("Cannot add toy","danger")),this.$router.push("/toy")}},computed:{toyId(){return this.$route.params.id},pageTitle(){return this.toyId?"Edit toy":"Add toy"}}},Be={class:"toy-edit flex flex-col gap-2 app-main"},ke={class:"form-control"},xe=s("label",{class:"form-label"},"Name",-1),Se={class:"form-control"},Ee=s("label",{class:"form-label"},"Price",-1),Fe={class:"form-control"},Ae=s("label",{class:"form-label"},"Is in stock? ",-1),Le=s("option",{value:"true"},"Yes",-1),Ce=s("option",{value:"false"},"No",-1),Ie=[Le,Ce],Me={class:"form-control"},Ne=s("label",{class:"form-label"},"Labels",-1),Oe=C('<option value="On wheels">On wheels</option><option value="Box game">Box game</option><option value="Art">Art</option><option value="Baby">Baby</option><option value="Doll">Doll</option><option value="Puzzle">Puzzle</option><option value="Outdoor">Outdoor</option>',7),De=[Oe],Pe={class:"btn-group"},Ve=s("button",{class:"btn btn-primary"},"Save",-1);function Ue(e,t,o,l,n,i){return c(),a("section",Be,[s("h3",null,u(i.pageTitle),1),n.toyToEdit?(c(),a("form",{key:0,onSubmit:t[5]||(t[5]=V((...r)=>i.save&&i.save(...r),["prevent"])),class:"form"},[s("div",ke,[xe,_(s("input",{class:"form-input",type:"text",placeholder:"name","onUpdate:modelValue":t[0]||(t[0]=r=>n.toyToEdit.name=r)},null,512),[[k,n.toyToEdit.name]])]),s("div",Se,[Ee,_(s("input",{class:"form-input",type:"price",placeholder:"price","onUpdate:modelValue":t[1]||(t[1]=r=>n.toyToEdit.price=r)},null,512),[[k,n.toyToEdit.price]])]),s("div",Fe,[Ae,_(s("select",{class:"form-input","onUpdate:modelValue":t[2]||(t[2]=r=>n.toyToEdit.inStock=r)},Ie,512),[[g,n.toyToEdit.inStock]])]),s("div",Me,[Ne,_(s("select",{class:"form-input","onUpdate:modelValue":t[3]||(t[3]=r=>n.toyToEdit.labels=r),multiple:""},De,512),[[g,n.toyToEdit.labels]])]),s("div",Pe,[Ve,s("button",{onClick:t[4]||(t[4]=r=>e.$router.push("/toy")),class:"btn btn-danger-text"},"Go Back")])],32)):B("",!0)])}var Re=p(we,[["render",Ue]]);const ze=U({history:R(),routes:[{path:"/",name:"Home",component:ft},{path:"/toy",name:"ToyApp",component:le},{path:"/toy/:id",name:"ToyDetails",component:fe},{path:"/toy/edit/:id?",name:"ToyEdit",component:Re}]});var He={state:{toys:[],filterBy:null},getters:{toys(e){return JSON.parse(JSON.stringify(e.toys))},toysToShow(e){return JSON.parse(JSON.stringify(e.toys))}},mutations:{setToys(e,{toys:t}){e.toys=t},removeToy(e,{id:t}){const o=e.toys.findIndex(l=>l._id===t);e.toys.splice(o,1)},saveToy(e,{toy:t}){const o=e.toys.findIndex(l=>l._id===t._id);o!==-1?e.toys.splice(o,1,t):e.toys.push(t)},setFilter(e,{filterBy:t}){e.filterBy=t}},actions:{loadToys(e,t){console.log(t.filterBy);const o=F({},e.state.filterBy);return v.query(o).then(l=>{e.commit({type:"setToys",toys:l})}).catch(l=>{throw console.log("Error: cannot get toys",l),l})},removeToy({commit:e},{id:t}){return v.remove(t).then(()=>{e({type:"removeToy",id:t})}).catch(o=>{throw console.log("Error: cannot remove toy",o),o})},saveToy({commit:e},{toy:t}){return v.save(t).then(o=>(e({type:"saveToy",toy:o}),console.log("savedToy",o),o)).catch(o=>{throw console.log("Error: cannot save toy",o),o})},getToyById(e,{toyId:t}){return v.getById(t).then(o=>o).catch(o=>{throw console.log("Error: cannot get toy",o),o})},setFilterAct({commit:e,dispatch:t},{filterBy:o}){e({type:"setFilter",filterBy:o}),t({type:"loadToys"})}}};const Je=z({strict:!0,state:{count:10},getters:{count(e){return e.count}},mutations:{setCount(e,{count:t}){e.count=t}},actions:{},modules:{toyModule:He}});const x=H(at);x.use(ze);x.use(Je);x.mount("#app");
