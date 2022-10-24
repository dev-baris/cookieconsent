/*!
* CookieConsent 3.0.0-rc.8
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='button',t=e=>'function'==typeof e,n=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let a=e[o];t[o]=n(a)}return t},o=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:t}))},a=(e,a,r)=>{const c=i.t,s=i.o,l={cookie:i.l.i};if(a){const n={modalName:a};return e===s._?t(c._)&&c._(n):e===s.u?t(c.u)&&c.u(n):(n.modal=r,t(c.p)&&c.p(n)),o(e,n)}e===s.v?t(c.v)&&c.v(n(l)):e===s.m?t(c.m)&&c.m(n(l)):(l.changedCategories=i.l.g,l.changedServices=i.l.h,t(c.C)&&c.C(n(l))),o(e,n(l))};class r{constructor(){this.k={mode:'opt-in',revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,lazyHtmlGeneration:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.l={M:null,S:'',T:{},A:null,i:null,B:[],D:!1,H:null,V:null,F:null,N:'',I:!0,j:!1,P:!1,G:!1,R:!1,O:!1,L:!1,J:[],U:!1,q:!0,g:[],K:!1,W:'',X:!1,Y:[],Z:[],$:[],ee:[],te:!1,ne:!1,oe:!1,ae:[],re:[],ie:[],ce:{},se:{},le:{},h:{},de:{},fe:[],_e:[]},this.ue={pe:0,ve:0,me:0,ge:0,be:0,he:0,ye:0,we:0,Ce:0,ke:0,xe:0,Me:0,Se:0,Te:0,Ae:0,Be:0,De:0,He:0,Ee:0,Ve:0,Fe:0,Ne:0,Ie:0,je:0,Pe:0,Ge:0,Re:0,Oe:0,Le:0,Je:{},Ue:{}},this.t={v:0,m:0,C:0,_:0,u:0,p:0},this.o={v:'cc:onFirstConsent',m:'cc:onConsent',C:'cc:onChange',_:'cc:onModalShow',u:'cc:onModalHide',p:'cc:onModalReady'}}}const i=new r,c=e=>Array.isArray(e),s=e=>!!e&&'object'==typeof e&&!c(e),l=(e,t)=>-1!==e.indexOf(t),d=t=>{const n=document.createElement(t);return t===e&&f(n,'type',t),n},f=(e,t,n)=>{e.setAttribute(t,n)},_=(e,t)=>{e.appendChild(t)},u=(e,t,n,o)=>{e.addEventListener(t,n),o&&i.l.B.push({ze:e,qe:t,Ke:n})},p=e=>Object.keys(e),v=(e,t)=>{e.classList.add(t)},m=(e,t)=>{v(e,'cm__'+t)},g=(e,t)=>{v(e,'pm__'+t)},b=(e,t)=>{e.classList.remove(t)},h=()=>{const e=i.k.cookie.expiresAfterDays;return t(e)?e(i.l.W):e},y=(e,t)=>e.filter((e=>!l(t,e))).concat(t.filter((t=>!l(e,t)))),w=()=>{i.l.W=(()=>{let e='custom',t=x().accepted;return t.length===i.l.Y.length?e='all':t.length===i.l.$.length&&(e='necessary'),e})()},C=(e,t,n,o)=>{const a='accept-',r=v('show-preferencesModal'),c=v('show-consentModal'),s=v(a+'all'),l=v(a+'necessary'),d=v(a+'custom'),_=!0===i.k.lazyHtmlGeneration;for(var p=0;p<r.length;p++)f(r[p],'aria-haspopup','dialog'),u(r[p],'click',(e=>{e.preventDefault(),t.showPreferences()}),!0),_&&u(r[p],'mouseover',(e=>{e.preventDefault(),i.l.R||n(t,o)}),!0);for(p=0;p<c.length;p++)f(c[p],'aria-haspopup','dialog'),u(c[p],'click',(e=>{e.preventDefault(),t.show(!0)}),!0);for(p=0;p<s.length;p++)u(s[p],'click',(e=>{m(e,'all')}),!0);for(p=0;p<d.length;p++)u(d[p],'click',(e=>{m(e)}),!0);for(p=0;p<l.length;p++)u(l[p],'click',(e=>{m(e,[])}),!0);function v(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function m(e,n){e.preventDefault(),t.acceptCategory(n),t.hidePreferences(),t.hide()}},k=e=>Array.from(new Set(e)),x=()=>{const e=i.l.Y.filter((e=>!l(i.l.Z,e)));return{accepted:i.l.Z,rejected:e}},M=()=>document.activeElement,S=()=>{const t=i.l,n=['[href]',e,'input','details','[tabindex="0"]'].join(':not([tabindex="-1"]), '),o=(e,t)=>{const o=e&&e.querySelectorAll(n);t[0]=o[0],t[1]=o[o.length-1]};t.j&&o(i.ue.he,t.ae),t.R&&o(i.ue.Ee,t.re)},T=e=>{const n=i.l,o=n.se;if(n.Y.forEach((e=>{(n.h[e]||n.se[e]||[]).forEach((o=>{const a=n.ce[e][o];a&&(!a.enabled&&l(n.se[e],o)&&t(a.onAccept)?(a.enabled=!0,a.onAccept()):a.enabled&&!l(n.se[e],o)&&t(a.onReject)&&(a.enabled=!1,a.onReject()))}))})),!i.k.manageScriptTags)return;var a=n.fe,r=e||n.i.categories||[];const c=(e,t)=>{if(t<e.length){var a=e[t],i=n._e[t],s=i.Qe,_=i.We,u=l(r,s),p=!!_&&l(o[s],_);if(!i.Xe){var v=!_&&!i.Ye&&u,m=_&&!i.Ye&&p,g=!_&&i.Ye&&!u&&l(n.g,s),b=_&&i.Ye&&!p&&l(n.h[s]||[],_);if(v||g||m||b){i.Xe=!0,a.removeAttribute('type'),a.removeAttribute('data-category');let n=a.getAttribute('data-src');n&&a.removeAttribute('data-src');const o=d('script');if(o.textContent=a.innerHTML,((e,t)=>{for(var n=t.attributes,o=n.length,a=0;a<o;a++){var r=n[a].nodeName;f(e,r,t[r]||t.getAttribute(r))}})(o,a),n?o.src=n:n=a.src,n&&(o.onload=o.onerror=()=>{c(e,++t)}),a.replaceWith(o),n)return}}c(e,++t)}};c(a,0)},A=e=>{const t=i.l.M.guiOptions,n=t&&t.consentModal,o=t&&t.preferencesModal,a=(e,t,n,o,a,r)=>{var c=n&&n.layout,s=n&&n.position,d=n&&!0===n.flipButtons,f=n&&!1===n.equalWeightButtons,_=c&&c.split(' ')||[],u=s&&s.split(' ')||[],p=_[0],m=_[1],g=u[0],h='pm--'===o?u[0]:u[1],y=p,w=t[p];w||(w=t[a],y=a);var C=l(w.Ze,m)&&m,k=l(w.$e,g)?g:w.et,x=l(w.tt,h)?h:w.nt;e.className=r,v(e,o+y),C&&v(e,o+C),k&&v(e,o+k),x&&v(e,o+x),d&&v(e,o+'flip');const M='btn--secondary',S=r+'__';if('cm'===r){const{Ae:e,He:t}=i.ue;e&&b(e,S+M),t&&b(t,S+M),f&&(e&&v(e,S+M),t&&v(t,S+M))}else{const{Oe:e}=i.ue;e&&b(e,S+M),f&&e&&v(e,S+M)}};if(0===e){const e=['middle','top','bottom'],t=['left','center','right'],o={box:{Ze:['wide','inline'],$e:e,tt:t,et:'bottom',nt:'right'},cloud:{Ze:['inline'],$e:e,tt:t,et:'bottom',nt:'center'},bar:{Ze:['inline'],$e:e.slice(1),tt:[],et:'bottom',nt:''}};a(i.ue.he,o,n,'cm--','box','cm')}if(1===e){const e={box:{Ze:[],$e:[],tt:[],et:'',nt:''},bar:{Ze:['wide'],$e:[],tt:['left','right'],et:'',nt:'left'}};a(i.ue.Ee,e,o,'pm--','box','pm')}},B=(t,n)=>{const o=i.l,r=i.ue,c=o.A&&o.A.preferencesModal;if(!c)return;var s=c.title,l=c.closeIconLabel,m=c.acceptAllBtn,h=c.acceptNecessaryBtn,y=c.savePreferencesBtn,w=c.sections;if(r.be)r.je=d('div'),g(r.je,'body');else{r.be=d('div'),v(r.be,'pm-wrapper'),r.Ee=d('div'),r.Ee.style.visibility='hidden',v(r.Ee,'pm'),f(r.Ee,'role','dialog'),f(r.Ee,'aria-hidden',!0),f(r.Ee,'aria-modal',!0),u(r.ve,'keydown',(e=>{27===e.keyCode&&t.hidePreferences()}),!0),r.Ve=d('div'),g(r.Ve,'header'),r.Fe=d('div'),g(r.Fe,'title'),f(r.Fe,'role','heading'),r.Ne=d(e),g(r.Ne,'close-btn'),f(r.Ne,'aria-label',c.closeIconLabel||''),u(r.Ne,'click',t.hidePreferences),r.Ie=d('div'),g(r.Ie,'body'),r.Ge=d('div'),g(r.Ge,'footer');var C=d('div');v(C,'btns');var k=d('div'),x=d('div');g(k,'btn-group'),g(x,'btn-group'),_(r.Ge,x),_(r.Ge,k),_(r.Ve,r.Fe),_(r.Ve,r.Ne),_(r.Ee,r.Ve),_(r.Ee,r.Ie),_(r.Ee,r.Ge),_(r.be,r.Ee)}let M;function T(e){t.acceptCategory(e),t.hidePreferences(),t.hide()}s&&(r.Fe.innerHTML=s,l&&f(r.Ne,'aria-label',l)),w&&w.forEach((t=>{var n=t.title,a=t.description,i=t.linkedCategory,s=i&&o.X[i],l=t.cookieTable,m=l&&l.body,h=m&&m.length>0,y=!!s,w=y&&o.ce[i]||!1,C=w&&p(w)||[],k=y&&(!!a||!!h||p(w).length>0),x=d('div');if(g(x,'section'),k||a){var S=d('div');g(S,'section-desc-wrapper')}let T=C.length;if(k&&T>0){var A=d('div');g(A,'section-services'),C.forEach((e=>{var t=w[e].label||e,n=d('div'),o=d('div'),a=d('div'),r=d('div');g(n,'service'),g(r,'service-title'),g(o,'service-header'),g(a,'service-icon');var c=D(t,e,s,!0,i);r.innerHTML=t,_(o,a),_(o,r),_(n,o),_(n,c),_(A,n)})),_(S,A)}if(n){var B=d('div'),H=d(y?e:'div');if(g(B,'section-title-wrapper'),g(H,'section-title'),H.innerHTML=n,_(B,H),y){var E=d('span');g(E,'section-arrow'),_(B,E),x.className+='--toggle';var V=D(n,i,s);let e=c.serviceCounterLabel;if(T>0&&'string'==typeof e){let t=d('span');g(t,'badge'),g(t,'service-counter'),f(t,'aria-hidden',!0),f(t,'data-servicecounter',T),e&&(e=e.split('|'),e=e.length>1&&T>1?e[1]:e[0],f(t,'data-counterlabel',e)),t.innerHTML=T+(e?' '+e:''),_(H,t)}if(k){g(x,'section--expandable');var F=i+'-desc';f(H,'aria-expanded',!1),f(H,'aria-controls',F)}_(B,V)}else f(H,'role','heading'),f(H,'aria-level','3');_(x,B)}if(a){var N=d('div');g(N,'section-desc'),N.innerHTML=a,_(S,N)}if(k&&(f(S,'aria-hidden','true'),S.id=F,((e,t,n)=>{u(H,'click',(()=>{t.classList.contains('is-expanded')?(b(t,'is-expanded'),f(n,'aria-expanded','false'),f(e,'aria-hidden','true')):(v(t,'is-expanded'),f(n,'aria-expanded','true'),f(e,'aria-hidden','false'))}))})(S,x,H),h)){var I=d('table'),j=d('thead'),P=d('tbody');g(I,'section-table'),g(j,'table-head'),g(P,'table-body');var G=l.headers,R=p(G),O=r.pe.createDocumentFragment(),L=d('tr');f(L,'role','row');for(var J=0;J<R.length;J++){var U=G[R[J]],z=d('th');z.id='cc__row-'+U,f(z,'role','columnheader'),f(z,'scope','col'),g(z,'table-th'),z.innerHTML=U,_(O,z)}_(L,O),_(j,L);var q=r.pe.createDocumentFragment();for(J=0;J<m.length;J++){var K=m[J],Q=d('tr');f(Q,'role','row'),g(Q,'table-tr');for(var W=0;W<R.length;W++){var X=R[W],Y=G[X],Z=K[X],$=d('td'),ee=d('div');g($,'table-td'),f($,'data-column',Y),f($,'headers','cc__row-'+Y),ee.insertAdjacentHTML('beforeend',Z),_($,ee),_(Q,$)}_(q,Q)}_(P,q),_(I,j),_(I,P),_(S,I)}(k||a)&&_(x,S);const te=r.je||r.Ie;y?(M||(M=d('div'),g(M,'section-toggles')),M.appendChild(x)):M=null,_(te,M||x)})),(m||h)&&(h&&(r.Oe||(r.Oe=d(e),g(r.Oe,'btn'),f(r.Oe,'data-role','necessary'),_(k,r.Oe),u(r.Oe,'click',(()=>{T([])}))),r.Oe.innerHTML=h),m&&(r.Re||(r.Re=d(e),g(r.Re,'btn'),f(r.Re,'data-role','all'),_(k,r.Re),u(r.Re,'click',(()=>{T('all')}))),r.Re.innerHTML=m)),y&&(r.Le||(r.Le=d(e),g(r.Le,'btn'),g(r.Le,'btn--secondary'),f(r.Le,'data-role','save'),_(x,r.Le),u(r.Le,'click',(()=>{T()}))),r.Le.innerHTML=y),r.je&&(r.Ee.replaceChild(r.je,r.Ie),r.Ie=r.je),A(1),o.R||(o.R=!0,a(i.o.p,'preferencesModal',r.Ee),S(),n(t),_(r.me,r.be),setTimeout((()=>v(r.be,'cc--anim')),100))};function D(e,t,n,o,a){const r=i.l,c=i.ue;var s=d('label'),p=d('input'),m=d('span'),g=d('span'),b=d('span'),h=d('span');if(p.type='checkbox',v(s,'section__toggle-wrapper'),v(p,'section__toggle'),v(b,'toggle__icon-on'),v(h,'toggle__icon-off'),v(m,'toggle__icon'),v(g,'toggle__label'),f(m,'aria-hidden','true'),o?(v(s,'toggle-service'),v(p,'toggle-service'),f(p,'data-category',a),c.Ue[a][t]=p):c.Je[t]=p,o?(e=>{u(p,'change',(()=>{var t=c.Ue[e],n=c.Je[e];for(var o in r.le[e]=[],t){const n=t[o];n.checked&&r.le[e].push(n.value)}r.le[e].length>0?n.checked=!0:n.checked=!1}))})(a):(e=>{u(p,'click',(()=>{var t=c.Ue[e];if(r.le[e]=[],p.checked)for(var n in t)t[n].checked=!0;else for(n in t)t[n].checked=!1}))})(t),p.value=t,g.textContent=e.replace(/<.*>.*<\/.*>/gm,''),_(m,h),_(m,b),r.I)(n.enabled||n.readOnly)&&(p.checked=!0);else if(o){var y=r.se[a];(n.readOnly||l(y,t))&&(p.checked=!0)}else l(r.Z,t)&&(p.checked=!0);return n.readOnly&&(p.disabled=!0),_(s,p),_(s,m),_(s,g),s}const H=(t,n)=>{const o=i.l,r=i.ue,c=o.A&&o.A.consentModal;if(c){var s=c.acceptAllBtn,l=c.acceptNecessaryBtn,p=c.showPreferencesBtn,g=c.closeIconLabel,b=c.footer;if(!r.ge){r.ge=d('div'),r.he=d('div'),r.ye=d('div'),r.we=d('div'),r.xe=d('div'),v(r.ge,'cm-wrapper'),v(r.he,'cm'),m(r.ye,'body'),m(r.we,'texts'),m(r.xe,'btns'),f(r.he,'role','dialog'),f(r.he,'aria-modal','true'),f(r.he,'aria-hidden','false'),f(r.he,'aria-labelledby','cm__title'),f(r.he,'aria-describedby','cm__desc'),r.he.style.visibility='hidden';const n='box',a=o.M.guiOptions,i=a&&a.consentModal,c=(i&&i.layout||n).split(' ')[0]===n;g&&c&&(r.He||(r.He=d(e),m(r.He,'btn'),m(r.He,'btn--close'),u(r.He,'click',(()=>{t.hide(),t.acceptCategory([])})),_(r.ye,r.He)),f(r.He,'aria-label',g)),_(r.ye,r.we),(s||l||p)&&_(r.ye,r.xe),_(r.he,r.ye),_(r.ge,r.he)}var h=c.title;h&&(r.Ce||(r.Ce=d('div'),r.Ce.className=r.Ce.id='cm__title',f(r.Ce,'role','heading'),f(r.Ce,'aria-level','2'),_(r.we,r.Ce)),r.Ce.innerHTML=h);var y=c.description;if(y&&(o.U&&(y=y.replace('{{revisionMessage}}',o.q?'':c.revisionMessage||'')),r.ke||(r.ke=d('div'),r.ke.className=r.ke.id='cm__desc',_(r.we,r.ke)),r.ke.innerHTML=y),s&&(r.Te||(r.Te=d(e),m(r.Te,'btn'),f(r.Te,'data-role','all'),u(r.Te,'click',(()=>{t.hide(),t.acceptCategory('all')}))),r.Te.innerHTML=s),l&&(r.Ae||(r.Ae=d(e),m(r.Ae,'btn'),f(r.Ae,'data-role','necessary'),u(r.Ae,'click',(()=>{t.hide(),t.acceptCategory([])}))),r.Ae.innerHTML=l),p&&(r.Be||(r.Be=d(e),m(r.Be,'btn'),m(r.Be,'btn--secondary'),f(r.Be,'data-role','show'),u(r.Be,'mouseover',(()=>{o.R||B(t,n)})),u(r.Be,'click',t.showPreferences)),r.Be.innerHTML=p),!r.Se&&p&&(r.Se=d('div'),m(r.Se,'btn-group'),_(r.Se,r.Be),_(r.xe,r.Se)),r.Me||(r.Me=d('div'),m(r.Me,'btn-group'),l&&_(r.Me,r.Ae),s&&_(r.Me,r.Te),(s||l)&&_(r.ye,r.Me),_(r.xe,r.Me)),b){if(!r.De){var w=d('div'),k=d('div');r.De=d('div'),m(w,'footer'),m(k,'links'),m(r.De,'link-group'),_(k,r.De),_(w,k),_(r.he,w)}r.De.innerHTML=b}A(0),o.j||(o.j=!0,a(i.o.p,'consentModal',r.he),S(),n(t),_(r.me,r.ge),setTimeout((()=>v(r.ge,'cc--anim')),100)),C(r.ye,t,B,n)}},E=e=>{const t=i.ue;if(!t.me){t.me=d('div'),t.me.id='cc-main',t.me.style.position='fixed',t.me.style.zIndex='2147483647';let n=i.l.M.root;n&&'string'==typeof n&&(n=document.querySelector(n)),_(n||t.pe.body,t.me),(e=>{const t=i.ue;u(t.me,'click',(n=>{const o=i.l;o.L?t.Ee.contains(n.target)?o.O=!0:(e.hidePreferences(0),o.O=!1):o.P&&t.he.contains(n.target)&&(o.O=!0)}))})(e)}},V=e=>!!e&&l(p(i.l.T),e),F=()=>{const e=i.l;return e.S||e.M.language.default},N=e=>{e&&(i.l.S=e)},I=async e=>{const t=i.l;let n;n=e&&V(e)?e:F();let o=t.T[n];if(!o)return!1;if('string'==typeof o){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(o);if(!e)return!1;o=e}return t.A=o,N(n),!0},j=e=>{const{hostname:t,protocol:n}=window.location,{name:o,path:a,domain:r,sameSite:c}=i.k.cookie,s=encodeURIComponent(JSON.stringify(i.l.i)),d=e?(()=>{const e=i.l.F,t=e?new Date-e:0;return 864e5*h()-t})():864e5*h(),f=new Date;f.setTime(f.getTime()+d);let _=o+'='+s+(0!==d?'; expires='+f.toUTCString():'')+'; Path='+a+'; SameSite='+c;l(t,'.')&&(_+='; Domain='+r),'https:'===n&&(_+='; Secure'),document.cookie=_,i.l.i},P=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},G=(e,t,n)=>{const o=n||i.k.cookie.domain,a=t||i.k.cookie.path,r='www.'===o.slice(0,4),c=r&&o.substring(4),s=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};e.forEach((e=>{s(e),s(e,o),r&&s(e,c)}))},R=(e,t)=>{const n=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return n?t?n.pop():e:''},O=e=>{const t=document.cookie.split(/;\s*/),n=[];for(var o=0;o<t.length;o++){let a=t[o].split('=')[0];if(e)try{e.test(a)&&n.push(a)}catch(e){}else n.push(a)}return n},L=e=>{e.dispatchEvent(new Event('change'))},J=(e,t=[])=>{const o=i.l;let r=!1;var c=[];if(e)if('object'==typeof e&&'number'==typeof e.length)for(var s=0;s<e.length;s++)l(o.Y,e[s])&&c.push(e[s]);else'string'==typeof e&&('all'===e?c=o.Y.slice():l(o.Y,e)&&c.push(e));else c=(()=>{let e=i.ue.Je,t=[];if(e)for(var n in e)e[n].checked&&t.push(e[n].value);else o.I||(t=o.i.categories);for(let e in o.le)o.le[e].length>0&&(l(t,e)||t.push(e));return t})(),r=!0;if(t.length>=1)for(s=0;s<t.length;s++)c=c.filter((e=>e!==t[s]));for(s=0;s<o.$.length;s++)l(c,o.$[s])||c.push(o.$[s]);o.Z=c,w(),r||(o.le={}),o.de=n(o.se),o.Y.forEach((e=>{const t=o.ce[e],n=p(t),a=o.se;0!==n.length&&(a[e]=[],l(o.$,e)?n.forEach((t=>{a[e].push(t)})):'all'===o.W?r&&o.le[e]&&o.le[e].length>0?o.le[e].forEach((t=>{a[e].push(t)})):n.forEach((t=>{a[e].push(t)})):'necessary'===o.W?a[e]=[]:r&&o.le[e]&&o.le[e].length>0?o.le[e].forEach((t=>{a[e].push(t)})):l(o.Z,e)&&p(t).forEach((t=>a[e].push(t))),a[e]=k(a[e]))})),(()=>{const e=i.l;'opt-out'===i.k.mode&&e.I?e.g=y(e.ee,e.Z):e.g=y(e.Z,e.i.categories||[]);let t=e.g.length>0,o=!1;e.Y.forEach((t=>{e.h[t]=y(e.se[t],e.de[t]||[]),e.h[t].length>0&&(o=!0)}));var r=i.ue.Je;for(var c in r)l(e.Z,c)?r[c].checked=!0:r[c].checked=!1;e.Y.forEach((t=>{var n=i.ue.Ue[t],o=e.se[t];for(var a in n){const e=n[a];l(o,a)?e.checked=!0:e.checked=!1}})),e.V||(e.V=new Date),e.N||(e.N=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.i={categories:n(e.Z),revision:i.k.revision,data:e.H,consentTimestamp:e.V.toISOString(),consentId:e.N,services:n(e.se)};var s=!1;(e.I||t||o)&&(e.I&&(e.I=!1,s=!0),w(),e.F?e.F=new Date:e.F=e.V,e.i.lastConsentTimestamp=e.F.toISOString(),j(),i.k.autoClearCookies&&(s||!e.I&&t)&&(e=>{const t=i.l,n=O();t.K=!1;let o=e?t.Y:t.g;o=o.filter((e=>{let n=t.X[e];return!!n&&!n.readOnly&&!!n.autoClear})),o.forEach((o=>{const a=t.X[o].autoClear,r=a&&a.cookies||[],i=l(t.g,o),c=!l(t.Z,o),s=i&&c;(e&&c||!e&&s)&&(!0===a.reloadPage&&s&&(t.K=!0),r.forEach((e=>{let t=[];const o=e.name,a=e.domain,r=e.path;if(o instanceof RegExp)n.forEach((e=>{o.test(e)&&t.push(e)}));else{let e=(i=o,n.indexOf(i));e>-1&&t.push(n[e])}var i;t.length>0&&G(t,r,a)})))}))})(s),T()),s&&(a(i.o.v),a(i.o.m),'opt-in'===i.k.mode)||((t||o)&&a(i.o.C),e.K&&window.location.reload())})()},U=e=>{let t;return t=i.l.I&&'opt-in'!==i.k.mode?i.l.ee:x().accepted||[],l(t,e)},z=(e,t)=>{const n=i.l;if(!e||!t||'string'!=typeof t||!l(n.Y,t))return!1;const o=i.ue.Ue[t]||{},a=p(n.ce[t]);if(n.le[t]=[],'string'==typeof e)if('all'===e){for(let e in o)o[e].checked=!0,L(o[e]);n.le[t]=[...a]}else{for(let t in o)o[t].checked=e===t,L(o[t]);l(a,e)&&n.le[t].push(e)}else if(c(e)){for(let t in o)l(e,t)?o[t].checked=!0:o[t].checked=!1,L(o[t]);a.forEach((o=>{l(e,o)&&n.le[t].push(o)}))}J()},q=(e,t)=>l(i.l.se[t]||[],e),K=e=>''!==R(e,!0),Q=(e,t,n)=>{let o=[];const a=e=>{if('string'==typeof e){let t=R(e);''!==t&&o.push(t)}else o=o.concat(O(e))};if(c(e))for(var r=0;r<e.length;r++)a(e[r]);else a(e);G(o,t,n)},W=e=>{const t=i.ue,n=i.l;e&&!n.j&&H($,E),n.j&&(n.P=!0,n.D&&v(t.ve,'disable--interaction'),v(t.ve,'show--consent'),f(t.he,'aria-hidden','false'),setTimeout((()=>{n.ne=M(),n.J=n.ae}),200),a(i.o._,'consentModal'))},X=()=>{const e=i.ue,t=i.l;t.j&&(t.P=!1,t.D&&b(e.ve,'disable--interaction'),b(e.ve,'show--consent'),f(e.he,'aria-hidden','true'),setTimeout((()=>{t.ne.focus(),t.J=[]}),200),a(i.o.u,'consentModal'))},Y=()=>{const e=i.l;e.R&&e.G||(e.R||B($,E),v(i.ue.ve,'show--preferences'),f(i.ue.Ee,'aria-hidden','false'),e.G=!0,setTimeout((()=>{e.L=!0}),1),setTimeout((()=>{e.P?e.oe=M():e.ne=M(),0!==e.re.length&&(e.re[0].focus(),e.J=e.re)}),200),a(i.o._,'preferencesModal'))},Z=()=>{const e=i.l;e.G&&(b(i.ue.ve,'show--preferences'),f(i.ue.Ee,'aria-hidden','true'),e.G=!1,setTimeout((()=>{e.L=!1}),1),e.P?(e.oe&&e.oe.focus(),e.J=e.ae):(e.ne&&e.ne.focus(),e.J=[]),e.O=!1,a(i.o.u,'preferencesModal'))};var $={show:W,hide:X,showPreferences:Y,hidePreferences:Z,acceptCategory:J};const ee=async(e,t)=>!(!V(e)||e===F()&&!0!==t||!await I(e)||(N(e),i.l.j&&H($,E),i.l.R&&B($,E),0)),te=()=>{const e=!i.l.I;var t,n=e&&x();return{acceptType:i.l.W,acceptedCategories:e?n.accepted:[],rejectedCategories:e?n.rejected:[],acceptedServices:e?i.l.se:{},rejectedServices:e?(t={},i.l.Y.forEach((e=>{t[e]=y(i.l.se[e]||[],p(i.l.ce[e])||[])})),t):{}}},ne=(e,t)=>{let n=document.querySelector('script[src="'+e+'"]');return new Promise(((o,a)=>{if(n)return o(!0);n=d('script'),c(t)&&t.forEach((e=>{f(n,e.name,e.value)})),n.onload=()=>o(!0),n.onerror=()=>{n.remove(),a(!1)},n.src=e,_(document.head,n)}))},oe=e=>{let t,n=e.value,o=e.mode,a=!1;const r=i.l;if('update'===o){r.H=ae('data'),t=ae('data');const e=typeof t==typeof n;if(e&&'object'==typeof t)for(var c in!t&&(t={}),n)t[c]!==n[c]&&(t[c]=n[c],a=!0);else!e&&t||t===n||(t=n,a=!0)}else t=n,a=!0;return a&&(r.H=t,r.i.data=t,j(!0)),a},ae=(e,t)=>{const n=P(R(t||i.k.cookie.name,!0));return e?n[e]:n},re=e=>{const t=i.k,n=i.l.M;return e?t[e]||n[e]:{...t,...n,cookie:{...t.cookie}}},ie=()=>!i.l.I,ce=async e=>{const t=i.l,n=i.k,o=window;if(!o._ccRun){if(o._ccRun=!0,(e=>{!function(){const e=document;i.ue.pe=e,i.ue.ve=e.documentElement,i.k.cookie.domain=window.location.hostname}();const t=i.k,n=i.l,o=t.cookie,a=i.t,r=e.cookie,c=e.categories,d=p(c)||[],f=navigator;n.M=e,n.T=e.language.translations,n.X=c,n.Y=d,n.D=!!e.disablePageInteraction,a.v=e.onFirstConsent,a.m=e.onConsent,a.C=e.onChange,a.u=e.onModalHide,a._=e.onModalShow,a.p=e.onModalReady;const{mode:_,autoShow:u,autoClearCookies:v,revision:m,manageScriptTags:g,hideFromBots:b,lazyHtmlGeneration:h}=e;'opt-out'===_&&(t.mode=_),'boolean'==typeof u&&(t.autoShow=u),'boolean'==typeof v&&(t.autoClearCookies=v),'boolean'==typeof g&&(t.manageScriptTags=g),'number'==typeof m&&m>=0&&(t.revision=m,n.U=!0),'boolean'==typeof h&&(t.lazyHtmlGeneration=h),!1===b&&(t.hideFromBots=!1),!0===t.hideFromBots&&f&&(n.te=f.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(f.userAgent)||f.webdriver),s(r)&&(t.cookie={...o,...r}),t.autoClearCookies,n.U,t.manageScriptTags,function(e){const t=i.l;e.forEach((e=>{const n=t.X[e],o=n.services||{},a=o&&s(o)&&p(o)||[];t.ce[e]={},t.se[e]=[],n.readOnly&&(t.$.push(e),t.se[e]=p(o)),i.ue.Ue[e]={},a.forEach((n=>{const a=o[n];a.enabled=!1,t.ce[e][n]=a}))}))}(d),(()=>{if(!i.k.manageScriptTags)return;const e=i.l;e.fe=i.ue.pe.querySelectorAll('script[data-category]'),e._e=[],e.fe.forEach((t=>{let n=t.getAttribute('data-category'),o=t.dataset.service||'',a=!1;if(n&&'!'===n.charAt(0)&&(n=n.slice(1),a=!0),'!'===o.charAt(0)&&(o=o.slice(1),a=!0),l(e.Y,n)&&(e._e.push({Xe:!1,Ye:a,Qe:n,We:o}),o)){const t=e.ce[n];t[o]||(t[o]={enabled:!1})}}))})(),N((()=>{const e=i.l.M.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),V(t))return t}return F()})())})(e),t.te)return;const d=P(R(n.cookie.name,!0)),f=d.categories,_=c(f);t.i=d,t.N=d.consentId;const v=!!t.N&&'string'==typeof t.N;t.V=d.consentTimestamp,t.V&&(t.V=new Date(t.V)),t.F=d.lastConsentTimestamp,t.F&&(t.F=new Date(t.F));const m=d.data;if(t.H=void 0!==m?m:null,t.U&&v&&d.revision!==n.revision&&(t.q=!1),t.I=!(v&&t.q&&t.V&&t.F&&_),t.I,t.I?'opt-out'===n.mode&&(()=>{const e=i.l;e.Y.forEach((t=>{if(e.X[t].enabled){e.ee.push(t);const o=e.ce[t]||{};for(var n in o)e.se[t].push(n)}}))})():(t.Z=k([...t.$,...d.categories]),t.se={...t.se,...d.services},w()),!await I())return;r=$,i.l.I&&H(r,E),i.k.lazyHtmlGeneration||B(r,E),C(null,r,B,E),n.autoShow&&t.I&&W(!0),(()=>{const e=i.ue;var t=!1,n=!1;u(e.ve,'keydown',(e=>{if('Tab'!==e.key)return;const o=i.l.J;if(o.length>0){const a=M();e.shiftKey?a===o[0]&&(o[1].focus(),e.preventDefault()):a===o[1]&&(o[0].focus(),e.preventDefault()),n||i.l.O||(n=!0,!t&&e.preventDefault(),e.shiftKey?o[1].focus():o[0].focus())}!n&&(t=!0)}),!0)})(),t.I?'opt-out'===n.mode&&(n.mode,t.ee,T(t.ee)):(T(),a(i.o.m))}var r},se=e=>{const t=i.ue,n=i.k.cookie;!0===e&&Q(n.name,n.path,n.domain),i.l.B.forEach((e=>{e.ze.removeEventListener(e.qe,e.Ke)})),t.me&&t.me.remove(),t.ve&&(b(t.ve,'disable--interaction'),b(t.ve,'show--preferences'),b(t.ve,'show--consent'));const o=new r;i.l=o.l,i.ue=o.ue,i.k=o.k,i.t=o.t,i.o=o.o,window._ccRun=!1};export{J as acceptCategory,z as acceptService,U as acceptedCategory,q as acceptedService,Q as eraseCookies,re as getConfig,ae as getCookie,te as getUserPreferences,X as hide,Z as hidePreferences,ne as loadScript,se as reset,ce as run,oe as setCookieData,ee as setLanguage,W as show,Y as showPreferences,ie as validConsent,K as validCookie};
