import{a as Fe,b as Xt,c as Zt,d as S,g as Kt,n as qt,o as Le,q as Jt}from"./chunk-YA2IYRUJ.js";import{Aa as Lt,Ba as jt,Ca as j,Da as zt,Ha as J,Ja as Ht,K as $,Ka as Ut,La as P,N as w,O as Me,Q as Te,Qa as _e,Ra as Ne,S as y,Sa as Bt,T as ke,Ub as Gt,V as Ot,Y as le,_a as Wt,a as Oe,b as It,ha as fe,ia as De,ka as Mt,kb as $t,ma as Tt,na as Pe,oa as kt,pa as ue,pb as Yt,qa as Re,qb as Vt,ra as Dt,sa as q,ta as Y,ua as V,va as Pt,wa as Rt,xa as _t,ya as Nt,za as Ft}from"./chunk-VC6KCMQN.js";var ze=class extends Zt{supportsDOMEvents=!0},He=class e extends ze{static makeCurrent(){Xt(new e)}onAndCancel(n,t,r,a){return n.addEventListener(t,r,a),()=>{n.removeEventListener(t,r,a)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=Cr();return t==null?null:Ir(t)}resetBaseElement(){Q=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Kt(document.cookie,n)}},Q=null;function Cr(){return Q=Q||document.querySelector("base"),Q?Q.getAttribute("href"):null}function Ir(e){return new URL(e,document.baseURI).pathname}var Or=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),Ue=new Te(""),an=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(a=>{a.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,r,a,i){return this._findPluginFor(r).addEventListener(t,r,a,i)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(i=>i.supports(t)),!r)throw new $(5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(y(Ue),y(fe))};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),me=class{_doc;constructor(n){this._doc=n}manager},de="ng-app-id";function Qt(e){for(let n of e)n.remove()}function en(e,n){let t=n.createElement("style");return t.textContent=e,t}function Mr(e,n,t,r){let a=e.head?.querySelectorAll(`style[${de}="${n}"],link[${de}="${n}"]`);if(a)for(let i of a)i.removeAttribute(de),i instanceof HTMLLinkElement?r.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function Be(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var on=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,r,a,i={}){this.doc=t,this.appId=r,this.nonce=a,this.isServer=Le(i),Mr(t,r,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,r){for(let a of t)this.addUsage(a,this.inline,en);r?.forEach(a=>this.addUsage(a,this.external,Be))}removeStyles(t,r){for(let a of t)this.removeUsage(a,this.inline);r?.forEach(a=>this.removeUsage(a,this.external))}addUsage(t,r,a){let i=r.get(t);i?i.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(t,this.doc)))})}removeUsage(t,r){let a=r.get(t);a&&(a.usage--,a.usage<=0&&(Qt(a.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Qt(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[r,{elements:a}]of this.inline)a.push(this.addElement(t,en(r,this.doc)));for(let[r,{elements:a}]of this.external)a.push(this.addElement(t,Be(r,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),this.isServer&&r.setAttribute(de,this.appId),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(y(S),y(Pe),y(Re,8),y(ue))};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),je={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},$e=/%COMP%/g;var sn="%COMP%",Tr=`_nghost-${sn}`,kr=`_ngcontent-${sn}`,Dr=!0,Pr=new Te("",{providedIn:"root",factory:()=>Dr});function Rr(e){return kr.replace($e,e)}function _r(e){return Tr.replace($e,e)}function cn(e,n){return n.map(t=>t.replace($e,e))}var tn=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,r,a,i,o,s,u,l=null,f=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=a,this.removeStylesOnCompDestroy=i,this.doc=o,this.platformId=s,this.ngZone=u,this.nonce=l,this.tracingService=f,this.platformIsServer=Le(s),this.defaultRenderer=new ee(t,o,u,this.platformIsServer,this.tracingService)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===q.ShadowDom&&(r=It(Oe({},r),{encapsulation:q.Emulated}));let a=this.getOrCreateRenderer(t,r);return a instanceof pe?a.applyToHost(t):a instanceof te&&a.applyStyles(),a}getOrCreateRenderer(t,r){let a=this.rendererByCompId,i=a.get(r.id);if(!i){let o=this.doc,s=this.ngZone,u=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,p=this.platformIsServer,m=this.tracingService;switch(r.encapsulation){case q.Emulated:i=new pe(u,l,r,this.appId,f,o,s,p,m);break;case q.ShadowDom:return new We(u,l,t,r,o,s,this.nonce,p,m);default:i=new te(u,l,r,f,o,s,p,m);break}a.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||e)(y(an),y(on),y(Pe),y(Pr),y(S),y(ue),y(fe),y(Re),y(Dt,8))};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),ee=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,r,a,i){this.eventManager=n,this.doc=t,this.ngZone=r,this.platformIsServer=a,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(je[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(nn(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){n&&(nn(n)?n.content:n).insertBefore(t,r)}removeChild(n,t){t.remove()}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new $(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,a){if(a){t=a+":"+t;let i=je[a];i?n.setAttributeNS(i,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let a=je[r];a?n.removeAttributeNS(a,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,a){a&(J.DashCase|J.Important)?n.style.setProperty(t,r,a&J.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){r&J.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r,a){if(typeof n=="string"&&(n=Fe().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${t}`);let i=this.decoratePreventDefault(r);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(i=this.tracingService.wrapEventListener(n,t,i)),this.eventManager.addEventListener(n,t,i,a)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(t)):n(t))===!1&&t.preventDefault()}}};function nn(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var We=class extends ee{sharedStylesHost;hostEl;shadowRoot;constructor(n,t,r,a,i,o,s,u,l){super(n,i,o,u,l),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let f=a.styles;f=cn(a.id,f);for(let m of f){let g=document.createElement("style");s&&g.setAttribute("nonce",s),g.textContent=m,this.shadowRoot.appendChild(g)}let p=a.getExternalStyles?.();if(p)for(let m of p){let g=Be(m,i);s&&g.setAttribute("nonce",s),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},te=class extends ee{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,r,a,i,o,s,u,l){super(n,i,o,s,u),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=a;let f=r.styles;this.styles=l?cn(l,f):f,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},pe=class extends te{contentAttr;hostAttr;constructor(n,t,r,a,i,o,s,u,l){let f=a+"-"+r.id;super(n,t,r,i,o,s,u,l,f),this.contentAttr=Rr(f),this.hostAttr=_r(f)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}},Nr=(()=>{class e extends me{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,a,i){return t.addEventListener(r,a,i),()=>this.removeEventListener(t,r,a,i)}removeEventListener(t,r,a,i){return t.removeEventListener(r,a,i)}static \u0275fac=function(r){return new(r||e)(y(S))};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),rn=["alt","control","meta","shift"],Fr={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Lr={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},jr=(()=>{class e extends me{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,a,i){let o=e.parseEventName(r),s=e.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Fe().onAndCancel(t,o.domEventName,s,i))}static parseEventName(t){let r=t.toLowerCase().split("."),a=r.shift();if(r.length===0||!(a==="keydown"||a==="keyup"))return null;let i=e._normalizeKey(r.pop()),o="",s=r.indexOf("code");if(s>-1&&(r.splice(s,1),o="code."),rn.forEach(l=>{let f=r.indexOf(l);f>-1&&(r.splice(f,1),o+=l+".")}),o+=i,r.length!=0||i.length===0)return null;let u={};return u.domEventName=a,u.fullKey=o,u}static matchEventFullKeyCode(t,r){let a=Fr[t.key]||t.key,i="";return r.indexOf("code.")>-1&&(a=t.code,i="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),rn.forEach(o=>{if(o!==a){let s=Lr[o];s(t)&&(i+=o+".")}}),i+=a,i===r)}static eventCallback(t,r,a){return i=>{e.matchEventFullKeyCode(i,t)&&a.runGuarded(()=>r(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(y(S))};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function No(e,n){return Gt(Oe({rootComponent:e},zr(n)))}function zr(e){return{appProviders:[...$r,...e?.providers??[]],platformProviders:Wr}}function Hr(){He.makeCurrent()}function Ur(){return new De}function Br(){return Tt(document),document}var Wr=[{provide:ue,useValue:qt},{provide:kt,useValue:Hr,multi:!0},{provide:S,useFactory:Br,deps:[]}];var $r=[{provide:Ot,useValue:"root"},{provide:De,useFactory:Ur,deps:[]},{provide:Ue,useClass:Nr,multi:!0,deps:[S]},{provide:Ue,useClass:jr,multi:!0,deps:[S]},tn,on,an,{provide:Ht,useExisting:tn},{provide:Jt,useClass:Or,deps:[]},[]];var Fo=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||e)(y(S))};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ye=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:function(r){let a=null;return r?a=new(r||e):a=y(Yr),a},providedIn:"root"})}return e})(),Yr=(()=>{class e extends Ye{_doc;constructor(t){super(),this._doc=t}sanitize(t,r){if(r==null)return null;switch(t){case j.NONE:return r;case j.HTML:return V(r,"HTML")?Y(r):jt(this._doc,String(r)).toString();case j.STYLE:return V(r,"Style")?Y(r):r;case j.SCRIPT:if(V(r,"Script"))return Y(r);throw new $(5200,!1);case j.URL:return V(r,"URL")?Y(r):Lt(String(r));case j.RESOURCE_URL:if(V(r,"ResourceURL"))return Y(r);throw new $(5201,!1);default:throw new $(5202,!1)}}bypassSecurityTrustHtml(t){return Pt(t)}bypassSecurityTrustStyle(t){return Rt(t)}bypassSecurityTrustScript(t){return _t(t)}bypassSecurityTrustUrl(t){return Nt(t)}bypassSecurityTrustResourceUrl(t){return Ft(t)}static \u0275fac=function(r){return new(r||e)(y(S))};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Gr(e,n,t){return(n=Zr(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ln(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ln(Object(t),!0).forEach(function(r){Gr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ln(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Xr(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Zr(e){var n=Xr(e,"string");return typeof n=="symbol"?n:n+""}var fn=()=>{},pt={},Fn={},Ln=null,jn={mark:fn,measure:fn};try{typeof window<"u"&&(pt=window),typeof document<"u"&&(Fn=document),typeof MutationObserver<"u"&&(Ln=MutationObserver),typeof performance<"u"&&(jn=performance)}catch{}var{userAgent:un=""}=pt.navigator||{},_=pt,h=Fn,dn=Ln,he=jn,jo=!!_.document,k=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",zn=~un.indexOf("MSIE")||~un.indexOf("Trident/"),Kr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,qr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Hn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Jr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Un=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],v="classic",Ee="duotone",Qr="sharp",ea="sharp-duotone",Bn=[v,Ee,Qr,ea],ta={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},na={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ra=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),aa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ia=["fak","fa-kit","fakd","fa-kit-duotone"],mn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},oa=["kit"],sa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ca=["fak","fakd"],la={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},pn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ge={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ua=["fak","fa-kit","fakd","fa-kit-duotone"],da={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ma={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},pa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},qe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ha=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Je=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...fa,...ha],ga=["solid","regular","light","thin","duotone","brands"],Wn=[1,2,3,4,5,6,7,8,9,10],ya=Wn.concat([11,12,13,14,15,16,17,18,19,20]),va=[...Object.keys(pa),...ga,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ge.GROUP,ge.SWAP_OPACITY,ge.PRIMARY,ge.SECONDARY].concat(Wn.map(e=>"".concat(e,"x"))).concat(ya.map(e=>"w-".concat(e))),ba={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},M="___FONT_AWESOME___",Qe=16,$n="fa",Yn="svg-inline--fa",H="data-fa-i2svg",et="data-fa-pseudo-element",wa="data-fa-pseudo-element-pending",ht="data-prefix",gt="data-icon",hn="fontawesome-i2svg",Ea="async",Sa=["HTML","HEAD","STYLE","SCRIPT"],Vn=(()=>{try{return!0}catch{return!1}})();function se(e){return new Proxy(e,{get(n,t){return t in n?n[t]:n[v]}})}var Gn=c({},Hn);Gn[v]=c(c(c(c({},{"fa-duotone":"duotone"}),Hn[v]),mn.kit),mn["kit-duotone"]);var xa=se(Gn),tt=c({},aa);tt[v]=c(c(c(c({},{duotone:"fad"}),tt[v]),pn.kit),pn["kit-duotone"]);var gn=se(tt),nt=c({},qe);nt[v]=c(c({},nt[v]),la.kit);var yt=se(nt),rt=c({},ma);rt[v]=c(c({},rt[v]),sa.kit);var zo=se(rt),Aa=Kr,Xn="fa-layers-text",Ca=qr,Ia=c({},ta),Ho=se(Ia),Oa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ve=Jr,Ma=[...oa,...va],re=_.FontAwesomeConfig||{};function Ta(e){var n=h.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function ka(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[t,r]=n,a=ka(Ta(t));a!=null&&(re[r]=a)});var Zn={styleDefault:"solid",familyDefault:v,cssPrefix:$n,replacementClass:Yn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};re.familyPrefix&&(re.cssPrefix=re.familyPrefix);var Z=c(c({},Zn),re);Z.autoReplaceSvg||(Z.observeMutations=!1);var d={};Object.keys(Zn).forEach(e=>{Object.defineProperty(d,e,{enumerable:!0,set:function(n){Z[e]=n,ae.forEach(t=>t(d))},get:function(){return Z[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){Z.cssPrefix=e,ae.forEach(n=>n(d))},get:function(){return Z.cssPrefix}});_.FontAwesomeConfig=d;var ae=[];function Da(e){return ae.push(e),()=>{ae.splice(ae.indexOf(e),1)}}var R=Qe,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pa(e){if(!e||!k)return;let n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;let t=h.head.childNodes,r=null;for(let a=t.length-1;a>-1;a--){let i=t[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return h.head.insertBefore(n,r),e}var Ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ie(){let e=12,n="";for(;e-- >0;)n+=Ra[Math.random()*62|0];return n}function K(e){let n=[];for(let t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function vt(e){return e.classList?K(e.classList):(e.getAttribute("class")||"").split(" ").filter(n=>n)}function Kn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _a(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,'="').concat(Kn(e[t]),'" '),"").trim()}function Se(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,": ").concat(e[t].trim(),";"),"")}function bt(e){return e.size!==C.size||e.x!==C.x||e.y!==C.y||e.rotate!==C.rotate||e.flipX||e.flipY}function Na(e){let{transform:n,containerWidth:t,iconWidth:r}=e,a={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:l}}function Fa(e){let{transform:n,width:t=Qe,height:r=Qe,startCentered:a=!1}=e,i="";return a&&zn?i+="translate(".concat(n.x/R-t/2,"em, ").concat(n.y/R-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(n.x/R,"em), calc(-50% + ").concat(n.y/R,"em)) "):i+="translate(".concat(n.x/R,"em, ").concat(n.y/R,"em) "),i+="scale(".concat(n.size/R*(n.flipX?-1:1),", ").concat(n.size/R*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var La=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function qn(){let e=$n,n=Yn,t=d.cssPrefix,r=d.replacementClass,a=La;if(t!==e||r!==n){let i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(r))}return a}var yn=!1;function Ge(){d.autoAddCss&&!yn&&(Pa(qn()),yn=!0)}var ja={mixout(){return{dom:{css:qn,insertCss:Ge}}},hooks(){return{beforeDOMElementCreation(){Ge()},beforeI2svg(){Ge()}}}},T=_||{};T[M]||(T[M]={});T[M].styles||(T[M].styles={});T[M].hooks||(T[M].hooks={});T[M].shims||(T[M].shims=[]);var I=T[M],Jn=[],Qn=function(){h.removeEventListener("DOMContentLoaded",Qn),be=1,Jn.map(e=>e())},be=!1;k&&(be=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),be||h.addEventListener("DOMContentLoaded",Qn));function za(e){k&&(be?setTimeout(e,0):Jn.push(e))}function ce(e){let{tag:n,attributes:t={},children:r=[]}=e;return typeof e=="string"?Kn(e):"<".concat(n," ").concat(_a(t),">").concat(r.map(ce).join(""),"</").concat(n,">")}function vn(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var Ha=function(n,t){return function(r,a,i,o){return n.call(t,r,a,i,o)}},Xe=function(n,t,r,a){var i=Object.keys(n),o=i.length,s=a!==void 0?Ha(t,a):t,u,l,f;for(r===void 0?(u=1,f=n[i[0]]):(u=0,f=r);u<o;u++)l=i[u],f=s(f,n[l],l,n);return f};function Ua(e){let n=[],t=0,r=e.length;for(;t<r;){let a=e.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){let i=e.charCodeAt(t++);(i&64512)==56320?n.push(((a&1023)<<10)+(i&1023)+65536):(n.push(a),t--)}else n.push(a)}return n}function at(e){let n=Ua(e);return n.length===1?n[0].toString(16):null}function Ba(e,n){let t=e.length,r=e.charCodeAt(n),a;return r>=55296&&r<=56319&&t>n+1&&(a=e.charCodeAt(n+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function bn(e){return Object.keys(e).reduce((n,t)=>{let r=e[t];return!!r.icon?n[r.iconName]=r.icon:n[t]=r,n},{})}function it(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:r=!1}=t,a=bn(n);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(e,bn(n)):I.styles[e]=c(c({},I.styles[e]||{}),a),e==="fas"&&it("fa",n)}var{styles:oe,shims:Wa}=I,er=Object.keys(yt),$a=er.reduce((e,n)=>(e[n]=Object.keys(yt[n]),e),{}),wt=null,tr={},nr={},rr={},ar={},ir={};function Ya(e){return~Ma.indexOf(e)}function Va(e,n){let t=n.split("-"),r=t[0],a=t.slice(1).join("-");return r===e&&a!==""&&!Ya(a)?a:null}var or=()=>{let e=r=>Xe(oe,(a,i,o)=>(a[o]=Xe(i,r,{}),a),{});tr=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=i}),r)),nr=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=i}),r)),ir=e((r,a,i)=>{let o=a[2];return r[i]=i,o.forEach(s=>{r[s]=i}),r});let n="far"in oe||d.autoFetchSvg,t=Xe(Wa,(r,a)=>{let i=a[0],o=a[1],s=a[2];return o==="far"&&!n&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});rr=t.names,ar=t.unicodes,wt=xe(d.styleDefault,{family:d.familyDefault})};Da(e=>{wt=xe(e.styleDefault,{family:d.familyDefault})});or();function Et(e,n){return(tr[e]||{})[n]}function Ga(e,n){return(nr[e]||{})[n]}function z(e,n){return(ir[e]||{})[n]}function sr(e){return rr[e]||{prefix:null,iconName:null}}function Xa(e){let n=ar[e],t=Et("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function N(){return wt}var cr=()=>({prefix:null,iconName:null,rest:[]});function Za(e){let n=v,t=er.reduce((r,a)=>(r[a]="".concat(d.cssPrefix,"-").concat(a),r),{});return Bn.forEach(r=>{(e.includes(t[r])||e.some(a=>$a[r].includes(a)))&&(n=r)}),n}function xe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=v}=n,r=xa[t][e];if(t===Ee&&!e)return"fad";let a=gn[t][e]||gn[t][r],i=e in I.styles?e:null;return a||i||null}function Ka(e){let n=[],t=null;return e.forEach(r=>{let a=Va(d.cssPrefix,r);a?t=a:r&&n.push(r)}),{iconName:t,rest:n}}function wn(e){return e.sort().filter((n,t,r)=>r.indexOf(n)===t)}function Ae(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=n,r=null,a=Je.concat(ua),i=wn(e.filter(p=>a.includes(p))),o=wn(e.filter(p=>!Je.includes(p))),s=i.filter(p=>(r=p,!Un.includes(p))),[u=null]=s,l=Za(i),f=c(c({},Ka(o)),{},{prefix:xe(u,{family:l})});return c(c(c({},f),ei({values:e,family:l,styles:oe,config:d,canonical:f,givenPrefix:r})),qa(t,r,f))}function qa(e,n,t){let{prefix:r,iconName:a}=t;if(e||!r||!a)return{prefix:r,iconName:a};let i=n==="fa"?sr(a):{},o=z(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!oe.far&&oe.fas&&!d.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}var Ja=Bn.filter(e=>e!==v||e!==Ee),Qa=Object.keys(qe).filter(e=>e!==v).map(e=>Object.keys(qe[e])).flat();function ei(e){let{values:n,family:t,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,s=t===Ee,u=n.includes("fa-duotone")||n.includes("fad"),l=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!s&&(u||l||f)&&(r.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ja.includes(t)&&(Object.keys(i).find(m=>Qa.includes(m))||o.autoFetchSvg)){let m=ra.get(t).defaultShortPrefixId;r.prefix=m,r.iconName=z(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=N()||"fas"),r}var ot=class{constructor(){this.definitions={}}add(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];let a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=c(c({},this.definitions[i]||{}),a[i]),it(i,a[i]);let o=yt[v][i];o&&it(o,a[i]),or()})}reset(){this.definitions={}}_pullDefinitions(n,t){let r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(a=>{let{prefix:i,iconName:o,icon:s}=r[a],u=s[2];n[i]||(n[i]={}),u.length>0&&u.forEach(l=>{typeof l=="string"&&(n[i][l]=s)}),n[i][o]=s}),n}},En=[],G={},X={},ti=Object.keys(X);function ni(e,n){let{mixoutsTo:t}=n;return En=e,G={},Object.keys(X).forEach(r=>{ti.indexOf(r)===-1&&delete X[r]}),En.forEach(r=>{let a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(t[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{t[i]||(t[i]={}),t[i][o]=a[i][o]})}),r.hooks){let i=r.hooks();Object.keys(i).forEach(o=>{G[o]||(G[o]=[]),G[o].push(i[o])})}r.provides&&r.provides(X)}),t}function st(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return(G[e]||[]).forEach(o=>{n=o.apply(null,[n,...r])}),n}function U(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];(G[e]||[]).forEach(i=>{i.apply(null,t)})}function F(){let e=arguments[0],n=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,n):void 0}function ct(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:n}=e,t=e.prefix||N();if(n)return n=z(t,n)||n,vn(lr.definitions,t,n)||vn(I.styles,t,n)}var lr=new ot,ri=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,U("noAuto")},ai={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return k?(U("beforeI2svg",e),F("pseudoElements2svg",e),F("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n}=e;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,za(()=>{oi({autoReplaceSvgRoot:n}),U("watch",e)})}},ii={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:z(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=xe(e[0]);return{prefix:t,iconName:z(t,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(Aa))){let n=Ae(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||N(),iconName:z(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){let n=N();return{prefix:n,iconName:z(n,e)||e}}}},E={noAuto:ri,config:d,dom:ai,parse:ii,library:lr,findIconDefinition:ct,toHtml:ce},oi=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n=h}=e;(Object.keys(I.styles).length>0||d.autoFetchSvg)&&k&&d.autoReplaceSvg&&E.dom.i2svg({node:n})};function Ce(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>ce(t))}}),Object.defineProperty(e,"node",{get:function(){if(!k)return;let t=h.createElement("div");return t.innerHTML=e.html,t.children}}),e}function si(e){let{children:n,main:t,mask:r,attributes:a,styles:i,transform:o}=e;if(bt(o)&&t.found&&!r.found){let{width:s,height:u}=t,l={x:s/u/2,y:.5};a.style=Se(c(c({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}function ci(e){let{prefix:n,iconName:t,children:r,attributes:a,symbol:i}=e,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},a),{},{id:o}),children:r}]}]}function St(e){let{icons:{main:n,mask:t},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:u,titleId:l,extra:f,watchable:p=!1}=e,{width:m,height:g}=t.found?t:n,D=ca.includes(r),L=[d.replacementClass,a?"".concat(d.cssPrefix,"-").concat(a):""].filter(W=>f.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(f.classes).join(" "),x={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:L,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},O=D&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};p&&(x.attributes[H]=""),s&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||ie())},children:[s]}),delete x.attributes.title);let b=c(c({},x),{},{prefix:r,iconName:a,main:n,mask:t,maskId:u,transform:i,symbol:o,styles:c(c({},O),f.styles)}),{children:A,attributes:B}=t.found&&n.found?F("generateAbstractMask",b)||{children:[],attributes:{}}:F("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=A,b.attributes=B,o?ci(b):si(b)}function Sn(e){let{content:n,width:t,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[H]="");let l=c({},o.styles);bt(a)&&(l.transform=Fa({transform:a,startCentered:!0,width:t,height:r}),l["-webkit-transform"]=l.transform);let f=Se(l);f.length>0&&(u.style=f);let p=[];return p.push({tag:"span",attributes:u,children:[n]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function li(e){let{content:n,title:t,extra:r}=e,a=c(c(c({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),i=Se(r.styles);i.length>0&&(a.style=i);let o=[];return o.push({tag:"span",attributes:a,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var{styles:Ze}=I;function lt(e){let n=e[0],t=e[1],[r]=e.slice(4),a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ve.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ve.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ve.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:n,height:t,icon:a}}var fi={found:!1,width:512,height:512};function ui(e,n){!Vn&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function ft(e,n){let t=n;return n==="fa"&&d.styleDefault!==null&&(n=N()),new Promise((r,a)=>{if(t==="fa"){let i=sr(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&Ze[n]&&Ze[n][e]){let i=Ze[n][e];return r(lt(i))}ui(e,n),r(c(c({},fi),{},{icon:d.showMissingIcons&&e?F("missingIconAbstract")||{}:{}}))})}var xn=()=>{},ut=d.measurePerformance&&he&&he.mark&&he.measure?he:{mark:xn,measure:xn},ne='FA "6.7.2"',di=e=>(ut.mark("".concat(ne," ").concat(e," begins")),()=>fr(e)),fr=e=>{ut.mark("".concat(ne," ").concat(e," ends")),ut.measure("".concat(ne," ").concat(e),"".concat(ne," ").concat(e," begins"),"".concat(ne," ").concat(e," ends"))},xt={begin:di,end:fr},ye=()=>{};function An(e){return typeof(e.getAttribute?e.getAttribute(H):null)=="string"}function mi(e){let n=e.getAttribute?e.getAttribute(ht):null,t=e.getAttribute?e.getAttribute(gt):null;return n&&t}function pi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function hi(){return d.autoReplaceSvg===!0?ve.replace:ve[d.autoReplaceSvg]||ve.replace}function gi(e){return h.createElementNS("http://www.w3.org/2000/svg",e)}function yi(e){return h.createElement(e)}function ur(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=e.tag==="svg"?gi:yi}=n;if(typeof e=="string")return h.createTextNode(e);let r=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(ur(i,{ceFn:t}))}),r}function vi(e){let n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var ve={replace:function(e){let n=e[0];if(n.parentNode)if(e[1].forEach(t=>{n.parentNode.insertBefore(ur(t),n)}),n.getAttribute(H)===null&&d.keepOriginalSource){let t=h.createComment(vi(n));n.parentNode.replaceChild(t,n)}else n.remove()},nest:function(e){let n=e[0],t=e[1];if(~vt(n).indexOf(d.replacementClass))return ve.replace(e);let r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let i=t[0].attributes.class.split(" ").reduce((o,s)=>(s===d.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});t[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}let a=t.map(i=>ce(i)).join(`
`);n.setAttribute(H,""),n.innerHTML=a}};function Cn(e){e()}function dr(e,n){let t=typeof n=="function"?n:ye;if(e.length===0)t();else{let r=Cn;d.mutateApproach===Ea&&(r=_.requestAnimationFrame||Cn),r(()=>{let a=hi(),i=xt.begin("mutate");e.map(a),i(),t()})}}var At=!1;function mr(){At=!0}function dt(){At=!1}var we=null;function In(e){if(!dn||!d.observeMutations)return;let{treeCallback:n=ye,nodeCallback:t=ye,pseudoElementsCallback:r=ye,observeMutationsRoot:a=h}=e;we=new dn(i=>{if(At)return;let o=N();K(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!An(s.addedNodes[0])&&(d.searchPseudoElements&&r(s.target),n(s.target)),s.type==="attributes"&&s.target.parentNode&&d.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&An(s.target)&&~Oa.indexOf(s.attributeName))if(s.attributeName==="class"&&mi(s.target)){let{prefix:u,iconName:l}=Ae(vt(s.target));s.target.setAttribute(ht,u||o),l&&s.target.setAttribute(gt,l)}else pi(s.target)&&t(s.target)})}),k&&we.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function bi(){we&&we.disconnect()}function wi(e){let n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce((r,a)=>{let i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),t}function Ei(e){let n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ae(vt(e));return a.prefix||(a.prefix=N()),n&&t&&(a.prefix=n,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ga(a.prefix,e.innerText)||Et(a.prefix,at(e.innerText))),!a.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Si(e){let n=K(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),t=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return d.autoA11y&&(t?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(r||ie()):(n["aria-hidden"]="true",n.focusable="false")),n}function xi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function On(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:r,rest:a}=Ei(e),i=Si(e),o=st("parseNodeAttributes",{},e),s=n.styleParser?wi(e):[];return c({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}var{styles:Ai}=I;function pr(e){let n=d.autoReplaceSvg==="nest"?On(e,{styleParser:!1}):On(e);return~n.extra.classes.indexOf(Xn)?F("generateLayersText",e,n):F("generateSvgReplacementMutation",e,n)}function Ci(){return[...ia,...Je]}function Mn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!k)return Promise.resolve();let t=h.documentElement.classList,r=f=>t.add("".concat(hn,"-").concat(f)),a=f=>t.remove("".concat(hn,"-").concat(f)),i=d.autoFetchSvg?Ci():Un.concat(Object.keys(Ai));i.includes("fa")||i.push("fa");let o=[".".concat(Xn,":not([").concat(H,"])")].concat(i.map(f=>".".concat(f,":not([").concat(H,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=K(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();let u=xt.begin("onTree"),l=s.reduce((f,p)=>{try{let m=pr(p);m&&f.push(m)}catch(m){Vn||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(l).then(m=>{dr(m,()=>{r("active"),r("complete"),a("pending"),typeof n=="function"&&n(),u(),f()})}).catch(m=>{u(),p(m)})})}function Ii(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pr(e).then(t=>{t&&dr([t],n)})}function Oi(e){return function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(n||{}).icon?n:ct(n||{}),{mask:a}=t;return a&&(a=(a||{}).icon?a:ct(a||{})),e(r,c(c({},t),{},{mask:a}))}}var Mi=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=C,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:l={},styles:f={}}=n;if(!e)return;let{prefix:p,iconName:m,icon:g}=e;return Ce(c({type:"icon"},e),()=>(U("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(o?l["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(s||ie()):(l["aria-hidden"]="true",l.focusable="false")),St({icons:{main:lt(g),mask:a?lt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:c(c({},C),t),symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:f,classes:u}})))},Ti={mixout(){return{icon:Oi(Mi)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Mn,e.nodeCallback=Ii,e}}},provides(e){e.i2svg=function(n){let{node:t=h,callback:r=()=>{}}=n;return Mn(t,r)},e.generateSvgReplacementMutation=function(n,t){let{iconName:r,title:a,titleId:i,prefix:o,transform:s,symbol:u,mask:l,maskId:f,extra:p}=t;return new Promise((m,g)=>{Promise.all([ft(r,o),l.iconName?ft(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(D=>{let[L,x]=D;m([n,St({icons:{main:L,mask:x},prefix:o,iconName:r,transform:s,symbol:u,maskId:f,title:a,titleId:i,extra:p,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){let{children:t,attributes:r,main:a,transform:i,styles:o}=n,s=Se(o);s.length>0&&(r.style=s);let u;return bt(i)&&(u=F("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),t.push(u||a.icon),{children:t,attributes:r}}}},ki={mixout(){return{layer(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=n;return Ce({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:e,params:n});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...t].join(" ")},children:r}]})}}}},Di={mixout(){return{counter(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:r=[],attributes:a={},styles:i={}}=n;return Ce({type:"counter",content:e},()=>(U("beforeDOMElementCreation",{content:e,params:n}),li({content:e.toString(),title:t,extra:{attributes:a,styles:i,classes:["".concat(d.cssPrefix,"-layers-counter"),...r]}})))}}}},Pi={mixout(){return{text(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=C,title:r=null,classes:a=[],attributes:i={},styles:o={}}=n;return Ce({type:"text",content:e},()=>(U("beforeDOMElementCreation",{content:e,params:n}),Sn({content:e,transform:c(c({},C),t),title:r,extra:{attributes:i,styles:o,classes:["".concat(d.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(n,t){let{title:r,transform:a,extra:i}=t,o=null,s=null;if(zn){let u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();o=l.width/u,s=l.height/u}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Sn({content:n.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}},Ri=new RegExp('"',"ug"),Tn=[1105920,1112319],kn=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),na),ba),da),mt=Object.keys(kn).reduce((e,n)=>(e[n.toLowerCase()]=kn[n],e),{}),_i=Object.keys(mt).reduce((e,n)=>{let t=mt[n];return e[n]=t[900]||[...Object.entries(t)][0][1],e},{});function Ni(e){let n=e.replace(Ri,""),t=Ba(n,0),r=t>=Tn[0]&&t<=Tn[1],a=n.length===2?n[0]===n[1]:!1;return{value:at(a?n[0]:n),isSecondary:r||a}}function Fi(e,n){let t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(n),a=isNaN(r)?"normal":r;return(mt[t]||{})[a]||_i[t]}function Dn(e,n){let t="".concat(wa).concat(n.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(t)!==null)return r();let o=K(e.children).filter(m=>m.getAttribute(et)===n)[0],s=_.getComputedStyle(e,n),u=s.getPropertyValue("font-family"),l=u.match(Ca),f=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&p!=="none"&&p!==""){let m=s.getPropertyValue("content"),g=Fi(u,f),{value:D,isSecondary:L}=Ni(m),x=l[0].startsWith("FontAwesome"),O=Et(g,D),b=O;if(x){let A=Xa(D);A.iconName&&A.prefix&&(O=A.iconName,g=A.prefix)}if(O&&!L&&(!o||o.getAttribute(ht)!==g||o.getAttribute(gt)!==b)){e.setAttribute(t,b),o&&e.removeChild(o);let A=xi(),{extra:B}=A;B.attributes[et]=n,ft(O,g).then(W=>{let Er=St(c(c({},A),{},{icons:{main:W,mask:cr()},prefix:g,iconName:b,extra:B,watchable:!0})),Ie=h.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(Ie,e.firstChild):e.appendChild(Ie),Ie.outerHTML=Er.map(Sr=>ce(Sr)).join(`
`),e.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function Li(e){return Promise.all([Dn(e,"::before"),Dn(e,"::after")])}function ji(e){return e.parentNode!==document.head&&!~Sa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(et)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Pn(e){if(k)return new Promise((n,t)=>{let r=K(e.querySelectorAll("*")).filter(ji).map(Li),a=xt.begin("searchPseudoElements");mr(),Promise.all(r).then(()=>{a(),dt(),n()}).catch(()=>{a(),dt(),t()})})}var zi={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Pn,e}}},provides(e){e.pseudoElements2svg=function(n){let{node:t=h}=n;d.searchPseudoElements&&Pn(t)}}},Rn=!1,Hi={mixout(){return{dom:{unwatch(){mr(),Rn=!0}}}},hooks(){return{bootstrap(){In(st("mutationObserverCallbacks",{}))},noAuto(){bi()},watch(e){let{observeMutationsRoot:n}=e;Rn?dt():In(st("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},_n=e=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,r)=>{let a=r.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return t.flipX=!0,t;if(i&&o==="v")return t.flipY=!0,t;if(o=parseFloat(o),isNaN(o))return t;switch(i){case"grow":t.size=t.size+o;break;case"shrink":t.size=t.size-o;break;case"left":t.x=t.x-o;break;case"right":t.x=t.x+o;break;case"up":t.y=t.y-o;break;case"down":t.y=t.y+o;break;case"rotate":t.rotate=t.rotate+o;break}return t},n)},Ui={mixout(){return{parse:{transform:e=>_n(e)}}},hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-transform");return t&&(e.transform=_n(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(n){let{main:t,transform:r,containerWidth:a,iconWidth:i}=n,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(l)},p={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:c({},m.outer),children:[{tag:"g",attributes:c({},m.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:c(c({},t.icon.attributes),m.path)}]}]}}}},Ke={x:0,y:0,width:"100%",height:"100%"};function Nn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Bi(e){return e.tag==="g"?e.children:[e]}var Wi={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-mask"),r=t?Ae(t.split(" ").map(a=>a.trim())):cr();return r.prefix||(r.prefix=N()),e.mask=r,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(n){let{children:t,attributes:r,main:a,mask:i,maskId:o,transform:s}=n,{width:u,icon:l}=a,{width:f,icon:p}=i,m=Na({transform:s,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:c(c({},Ke),{},{fill:"white"})},D=l.children?{children:l.children.map(Nn)}:{},L={tag:"g",attributes:c({},m.inner),children:[Nn(c({tag:l.tag,attributes:c(c({},l.attributes),m.path)},D))]},x={tag:"g",attributes:c({},m.outer),children:[L]},O="mask-".concat(o||ie()),b="clip-".concat(o||ie()),A={tag:"mask",attributes:c(c({},Ke),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,x]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Bi(p)},A]};return t.push(B,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(O,")")},Ke)}),{children:t,attributes:r}}}},$i={provides(e){let n=!1;_.matchMedia&&(n=_.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let t=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=c(c({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:c(c({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),t.push(o),t.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||t.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Yi={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return e.symbol=r,e}}}},Vi=[ja,Ti,ki,Di,Pi,zi,Hi,Ui,Wi,$i,Yi];ni(Vi,{mixoutsTo:E});var Uo=E.noAuto,hr=E.config,Bo=E.library,gr=E.dom,yr=E.parse,Wo=E.findIconDefinition,$o=E.toHtml,vr=E.icon,Yo=E.layer,Gi=E.text,Xi=E.counter;var Zi=["*"],Ki=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},qi=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},wr=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),Ji=e=>{let n=wr(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:n,"fa-rotate-by":e.rotate!=null&&!n,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(r=>t[r]?r:null).filter(r=>r)},Ct=new WeakSet,br="fa-auto-css";function Qi(e,n){if(!n.autoAddCss||Ct.has(e))return;if(e.getElementById(br)!=null){n.autoAddCss=!1,Ct.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",br),t.innerHTML=gr.css();let r=e.head.childNodes,a=null;for(let i=r.length-1;i>-1;i--){let o=r[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}e.head.insertBefore(t,a),n.autoAddCss=!1,Ct.add(e)}var eo=e=>e.prefix!==void 0&&e.iconName!==void 0,to=(e,n)=>eo(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:n,iconName:e},no=(()=>{class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(t){hr.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ro=(()=>{class e{constructor(){this.definitions={}}addIcons(...t){for(let r of t){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let a of r.icon[2])typeof a=="string"&&(this.definitions[r.prefix][a]=r)}}addIconPacks(...t){for(let r of t){let a=Object.keys(r).map(i=>r[i]);this.addIcons(...a)}}getIconDefinition(t,r){return t in this.definitions&&r in this.definitions[t]?this.definitions[t][r]:null}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ao=(()=>{class e{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=Bt({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[le]})}}return e})(),io=(()=>{class e{constructor(t,r){this.renderer=t,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}static{this.\u0275fac=function(r){return new(r||e)(P(Ut),P(Mt))}}static{this.\u0275cmp=_e({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},features:[le],ngContentSelectors:Zi,decls:1,vars:0,template:function(r,a){r&1&&(Yt(),Vt(0))},encapsulation:2})}}return e})(),os=(()=>{class e{constructor(t,r,a,i,o){this.sanitizer=t,this.config=r,this.iconLibrary=a,this.stackItem=i,this.document=ke(S),o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){qi();return}if(t){let r=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(r!=null){let a=this.buildParams();Qi(this.document,this.config);let i=vr(r,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(t){let r=to(t,this.config.defaultPrefix);if("icon"in r)return r;let a=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return a??(Ki(r),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?yr.transform(this.transform):this.transform,a={};return t.rotate!=null&&!wr(t.rotate)&&(a["--fa-rotate-angle"]=`${t.rotate}`),{title:this.title,transform:r,classes:Ji(t),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:a}}static{this.\u0275fac=function(r){return new(r||e)(P(Ye),P(no),P(ro),P(ao,8),P(io,8))}}static{this.\u0275cmp=_e({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,a){r&2&&($t("innerHTML",a.renderedIconHTML,zt),Wt("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[le],decls:0,vars:0,template:function(r,a){},encapsulation:2})}}return e})();var ss=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=Ne({type:e})}static{this.\u0275inj=Me({})}}return e})();export{No as a,Fo as b,ro as c,os as d,ss as e};
