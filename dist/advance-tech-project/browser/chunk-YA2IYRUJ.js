import{Ha as J,Ia as R,K,Ka as L,L as X,La as f,N as m,Na as O,O as q,Q as B,Qb as te,Ra as Q,S as y,Sa as w,Sb as ne,T as E,Ta as ee,Tb as ie,h as W,ka as I,lb as P,mb as A}from"./chunk-VC6KCMQN.js";var fe=null;function N(){return fe}function _t(t){fe??=t}var re=class{};var j=new B(""),he=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>E(me),providedIn:"platform"})}return t})();var me=(()=>{class t extends he{_location;_history;_doc=E(j);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return N().getBaseHref(this._doc)}onPopState(e){let n=N().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=N().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function ge(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function se(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function C(t){return t&&t[0]!=="?"?`?${t}`:t}var G=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>E(Fe),providedIn:"root"})}return t})(),Ce=new B(""),Fe=(()=>{class t extends G{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??E(j).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ge(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+C(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,s){let o=this.prepareExternalUrl(i+C(s));this._platformLocation.pushState(e,n,o)}replaceState(e,n,i,s){let o=this.prepareExternalUrl(i+C(s));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(y(he),y(Ce,8))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ye=(()=>{class t{_subject=new W;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Ae(se(oe(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+C(n))}normalize(e){return t.stripTrailingSlash(we(this._basePath,oe(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+C(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+C(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=C;static joinWithSlash=ge;static stripTrailingSlash=se;static \u0275fac=function(n){return new(n||t)(y(G))};static \u0275prov=m({token:t,factory:()=>Ee(),providedIn:"root"})}return t})();function Ee(){return new ye(y(G))}function we(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function oe(t){return t.replace(/\/index.html$/,"")}function Ae(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var De=function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t}(De||{});var D={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function S(t,r){let e=P(t),n=e[A.NumberSymbols][r];if(typeof n>"u"){if(r===D.CurrencyDecimal)return e[A.NumberSymbols][D.Decimal];if(r===D.CurrencyGroup)return e[A.NumberSymbols][D.Group]}return n}function Se(t,r){return P(t)[A.NumberFormats][r]}var _e=/^(\d+)?\.((\d+)(-(\d+))?)?$/,ue=22,M=".",_="0",be=";",ve=",",k="#";function Ie(t,r,e,n,i,s,o=!1){let u="",p=!1;if(!isFinite(t))u=S(e,D.Infinity);else{let d=Be(t);o&&(d=Te(d));let l=r.minInt,a=r.minFrac,h=r.maxFrac;if(s){let F=s.match(_e);if(F===null)throw new Error(`${s} is not a valid digit info`);let Z=F[1],T=F[3],Y=F[5];Z!=null&&(l=$(Z)),T!=null&&(a=$(T)),Y!=null?h=$(Y):T!=null&&a>h&&(h=a)}Re(d,a,h);let c=d.digits,g=d.integerLen,H=d.exponent,b=[];for(p=c.every(F=>!F);g<l;g++)c.unshift(0);for(;g<0;g++)c.unshift(0);g>0?b=c.splice(g,c.length):(b=c,c=[0]);let v=[];for(c.length>=r.lgSize&&v.unshift(c.splice(-r.lgSize,c.length).join(""));c.length>r.gSize;)v.unshift(c.splice(-r.gSize,c.length).join(""));c.length&&v.unshift(c.join("")),u=v.join(S(e,n)),b.length&&(u+=S(e,i)+b.join("")),H&&(u+=S(e,D.Exponential)+"+"+H)}return t<0&&!p?u=r.negPre+u+r.negSuf:u=r.posPre+u+r.posSuf,u}function Le(t,r,e){let n=Se(r,De.Decimal),i=Me(n,S(r,D.MinusSign));return Ie(t,i,r,D.Group,D.Decimal,e)}function Me(t,r="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(be),i=n[0],s=n[1],o=i.indexOf(M)!==-1?i.split(M):[i.substring(0,i.lastIndexOf(_)+1),i.substring(i.lastIndexOf(_)+1)],u=o[0],p=o[1]||"";e.posPre=u.substring(0,u.indexOf(k));for(let l=0;l<p.length;l++){let a=p.charAt(l);a===_?e.minFrac=e.maxFrac=l+1:a===k?e.maxFrac=l+1:e.posSuf+=a}let d=u.split(ve);if(e.gSize=d[1]?d[1].length:0,e.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,s){let l=i.length-e.posPre.length-e.posSuf.length,a=s.indexOf(k);e.negPre=s.substring(0,a).replace(/'/g,""),e.negSuf=s.slice(a+l).replace(/'/g,"")}else e.negPre=r+e.posPre,e.negSuf=e.posSuf;return e}function Te(t){if(t.digits[0]===0)return t;let r=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(r===0?t.digits.push(0,0):r===1&&t.digits.push(0),t.integerLen+=2),t}function Be(t){let r=Math.abs(t)+"",e=0,n,i,s,o,u;for((i=r.indexOf(M))>-1&&(r=r.replace(M,"")),(s=r.search(/e/i))>0?(i<0&&(i=s),i+=+r.slice(s+1),r=r.substring(0,s)):i<0&&(i=r.length),s=0;r.charAt(s)===_;s++);if(s===(u=r.length))n=[0],i=1;else{for(u--;r.charAt(u)===_;)u--;for(i-=s,n=[],o=0;s<=u;s++,o++)n[o]=Number(r.charAt(s))}return i>ue&&(n=n.splice(0,ue-1),e=i-1,i=1),{digits:n,exponent:e,integerLen:i}}function Re(t,r,e){if(r>e)throw new Error(`The minimum number of digits after fraction (${r}) is higher than the maximum (${e}).`);let n=t.digits,i=n.length-t.integerLen,s=Math.min(Math.max(r,i),e),o=s+t.integerLen,u=n[o];if(o>0){n.splice(Math.max(t.integerLen,o));for(let a=o;a<n.length;a++)n[a]=0}else{i=Math.max(0,i),t.integerLen=1,n.length=Math.max(1,o=s+1),n[0]=0;for(let a=1;a<o;a++)n[a]=0}if(u>=5)if(o-1<0){for(let a=0;a>o;a--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[o-1]++;for(;i<Math.max(0,s);i++)n.push(0);let p=s!==0,d=r+t.integerLen,l=n.reduceRight(function(a,h,c,g){return h=h+a,g[c]=h<10?h:h-10,p&&(g[c]===0&&c>=d?g.pop():p=!1),h>=10?1:0},0);l&&(n.unshift(l),t.integerLen++)}function $(t){let r=parseInt(t);if(isNaN(r))throw new Error("Invalid integer literal when parsing "+t);return r}function bt(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,s]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(s)}return null}var x=/\s+/,ae=[],vt=(()=>{class t{_ngEl;_renderer;initialClasses=ae;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(x):ae}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(x):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],i=e[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(x).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||t)(f(I),f(L))};static \u0275dir=w({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var U=class{$implicit;ngForOf;index;count;constructor(r,e,n,i){this.$implicit=r,this.ngForOf=e,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},It=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,i){this._viewContainer=e,this._template=n,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((i,s,o)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new U(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)n.remove(s===null?void 0:s);else if(s!==null){let u=n.get(s);n.move(u,o),ce(u,i)}});for(let i=0,s=n.length;i<s;i++){let u=n.get(i).context;u.index=i,u.count=s,u.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let s=n.get(i.currentIndex);ce(s,i)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(f(O),f(R),f(ne))};static \u0275dir=w({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function ce(t,r){t.context.$implicit=r.item}var Lt=(()=>{class t{_viewContainer;_context=new z;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){de("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){de("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(f(O),f(R))};static \u0275dir=w({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),z=class{$implicit=null;ngIf=null};function de(t,r){if(!!!(!r||r.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${X(r)}'.`)}var Mt=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,i){this._ngEl=e,this._differs=n,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[i,s]=e.split("."),o=i.indexOf("-")===-1?void 0:J.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,s?`${n}${s}`:n,o):this._renderer.removeStyle(this._ngEl.nativeElement,i,o)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(f(I),f(ie),f(L))};static \u0275dir=w({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})();function Oe(t,r){return new K(2100,!1)}var Tt=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,i){if(!Pe(e))return null;i||=this._locale;try{let s=Ne(e);return Le(s,i,n)}catch(s){throw Oe(t,s.message)}}static \u0275fac=function(n){return new(n||t)(f(te,16))};static \u0275pipe=ee({name:"number",type:t,pure:!0})}return t})();function Pe(t){return!(t==null||t===""||t!==t)}function Ne(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new Error(`${t} is not a number`);return t}var Bt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=q({})}return t})(),Rt="browser",ke="server";function Ot(t){return t===ke}var Pt=(()=>{class t{static \u0275prov=m({token:t,providedIn:"root",factory:()=>new V(E(j),window)})}return t})(),V=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r){this.window.scrollTo(r[0],r[1])}scrollToAnchor(r){let e=$e(this.document,r);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(r){this.window.history.scrollRestoration=r}scrollToElement(r){let e=r.getBoundingClientRect(),n=e.left+this.window.pageXOffset,i=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],i-s[1])}};function $e(t,r){let e=t.getElementById(r)||t.getElementsByName(r)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(r)||s.querySelector(`[name="${r}"]`);if(o)return o}i=n.nextNode()}}return null}var le=class{};export{N as a,_t as b,re as c,j as d,G as e,ye as f,bt as g,vt as h,It as i,Lt as j,Mt as k,Tt as l,Bt as m,Rt as n,Ot as o,Pt as p,le as q};
