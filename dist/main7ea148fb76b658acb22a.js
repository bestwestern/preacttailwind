(()=>{"use strict";var e,t,n,o,r,l,_,s={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function f(t,n,o){var r,l,_,s={};for(_ in n)"key"==_?r=n[_]:"ref"==_?l=n[_]:s[_]=n[_];if(arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===s[_]&&(s[_]=t.defaultProps[_]);return p(t,s,r,l,null)}function p(e,o,r,l,_){var s={type:e,props:o,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++n:_};return null!=t.vnode&&t.vnode(s),s}function d(e){return e.children}function h(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function y(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return y(e)}}function g(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!m.__r++||l!==t.debounceRendering)&&((l=t.debounceRendering)||r)(m)}function m(){for(var e;m.__r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,o,r,l,_;e.__d&&(l=(r=(t=e).__v).__e,(_=t.__P)&&(n=[],(o=a({},r)).__v=r.__v+1,N(_,r,o,t.__n,void 0!==_.ownerSVGElement,null!=r.__h?[l]:null,n,null==l?v(r):l,r.__h),L(n,r),r.__e!=l&&y(r)))}))}function k(e,t,n,o,r,l,_,u,a,c){var f,h,y,g,m,k,x,S=o&&o.__k||i,E=S.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(g=n.__k[f]=null==(g=t[f])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?p(null,g,null,null,g):Array.isArray(g)?p(d,{children:g},null,null,null):g.__b>0?p(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(y=S[f])||y&&g.key==y.key&&g.type===y.type)S[f]=void 0;else for(h=0;h<E;h++){if((y=S[h])&&g.key==y.key&&g.type===y.type){S[h]=void 0;break}y=null}N(e,g,y=y||s,r,l,_,u,a,c),m=g.__e,(h=g.ref)&&y.ref!=h&&(x||(x=[]),y.ref&&x.push(y.ref,null,g),x.push(h,g.__c||m,g)),null!=m?(null==k&&(k=m),"function"==typeof g.type&&null!=g.__k&&g.__k===y.__k?g.__d=a=b(g,a,e):a=w(e,g,y,S,m,a),c||"option"!==n.type?"function"==typeof n.type&&(n.__d=a):e.value=""):a&&y.__e==a&&a.parentNode!=e&&(a=v(y))}for(n.__e=k,f=E;f--;)null!=S[f]&&("function"==typeof n.type&&null!=S[f].__e&&S[f].__e==n.__d&&(n.__d=v(o,f+1)),D(S[f],S[f]));if(x)for(f=0;f<x.length;f++)I(x[f],x[++f],x[++f])}function b(e,t,n){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,t="function"==typeof r.type?b(r,t,n):w(n,r,r,e.__k,r.__e,t));return t}function w(e,t,n,o,r,l){var _,s,i;if(void 0!==t.__d)_=t.__d,t.__d=void 0;else if(null==n||r!=l||null==r.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(r),_=null;else{for(s=l,i=0;(s=s.nextSibling)&&i<o.length;i+=2)if(s==r)break e;e.insertBefore(r,l),_=l}return void 0!==_?_:r.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||u.test(t)?n:n+"px"}function S(e,t,n,o,r){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||x(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||x(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?o||e.addEventListener(t,l?C:E,l):e.removeEventListener(t,l?C:E,l);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function E(e){this.l[e.type+!1](t.event?t.event(e):e)}function C(e){this.l[e.type+!0](t.event?t.event(e):e)}function N(e,n,o,r,l,_,s,i,u){var c,f,p,v,y,g,m,b,w,x,S,E=n.type;if(void 0!==n.constructor)return null;null!=o.__h&&(u=o.__h,i=n.__e=o.__e,n.__h=null,_=[i]),(c=t.__b)&&c(n);try{e:if("function"==typeof E){if(b=n.props,w=(c=E.contextType)&&r[c.__c],x=c?w?w.props.value:c.__:r,o.__c?m=(f=n.__c=o.__c).__=f.__E:("prototype"in E&&E.prototype.render?n.__c=f=new E(b,x):(n.__c=f=new h(b,x),f.constructor=E,f.render=T),w&&w.sub(f),f.props=b,f.state||(f.state={}),f.context=x,f.__n=r,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=a({},f.__s)),a(f.__s,E.getDerivedStateFromProps(b,f.__s))),v=f.props,y=f.state,p)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&b!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,x)||n.__v===o.__v){f.props=b,f.state=f.__s,n.__v!==o.__v&&(f.__d=!1),f.__v=n,n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,y,g)}))}f.context=x,f.props=b,f.state=f.__s,(c=t.__r)&&c(n),f.__d=!1,f.__v=n,f.__P=e,c=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=a(a({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(g=f.getSnapshotBeforeUpdate(v,y)),S=null!=c&&c.type===d&&null==c.key?c.props.children:c,k(e,Array.isArray(S)?S:[S],n,o,r,l,_,s,i,u),f.base=n.__e,n.__h=null,f.__h.length&&s.push(f),m&&(f.__E=f.__=null),f.__e=!1}else null==_&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=P(o.__e,n,o,r,l,_,s,u);(c=t.diffed)&&c(n)}catch(e){n.__v=null,(u||null!=_)&&(n.__e=i,n.__h=!!u,_[_.indexOf(i)]=null),t.__e(e,n,o)}}function L(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function P(t,n,o,r,l,_,i,u){var a,f,p,d=o.props,h=n.props,y=n.type,g=0;if("svg"===y&&(l=!0),null!=_)for(;g<_.length;g++)if((a=_[g])&&(a===t||(y?a.localName==y:3==a.nodeType))){t=a,_[g]=null;break}if(null==t){if(null===y)return document.createTextNode(h);t=l?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),_=null,u=!1}if(null===y)d===h||u&&t.data===h||(t.data=h);else{if(_=_&&e.call(t.childNodes),f=(d=o.props||s).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!u){if(null!=_)for(d={},g=0;g<t.attributes.length;g++)d[t.attributes[g].name]=t.attributes[g].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(e,t,n,o,r){var l;for(l in n)"children"===l||"key"===l||l in t||S(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||S(e,l,t[l],n[l],o)}(t,h,d,l,u),p)n.__k=[];else if(g=n.props.children,k(t,Array.isArray(g)?g:[g],n,o,r,l&&"foreignObject"!==y,_,i,_?_[0]:o.__k&&v(o,0),u),null!=_)for(g=_.length;g--;)null!=_[g]&&c(_[g]);u||("value"in h&&void 0!==(g=h.value)&&(g!==t.value||"progress"===y&&!g)&&S(t,"value",g,d.value,!1),"checked"in h&&void 0!==(g=h.checked)&&g!==t.checked&&S(t,"checked",g,d.checked,!1))}return t}function I(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function D(e,n,o){var r,l;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||I(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&D(r[l],n,"function"!=typeof e.type);o||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function T(e,t,n){return this.constructor(e,n)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){history[e]||(history[e]=e,t=history[e+="State"],history[e]=function(n){var o=new Event(e.toLowerCase());return o.uri=n,t.apply(this,arguments),dispatchEvent(o)})}e=i.slice,t={__e:function(e,t){for(var n,o,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(t){e=t}throw e}},n=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},n),this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},h.prototype.render=d,o=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0;class U extends h{constructor(...e){super(...e),W(this,"state",{c:2})}render({},{c:e}){return f("div",null,f("p",null,"TEST1abcD"),f("button",{style:{border:"1px solid"},onClick:t=>this.setState({c:e+1})},e))}}window.worker=new Worker("webworker1558772822.js");console.log("https://myawesomeAPfsIRoot.com/awesome"),function(n,o,r){var l,_,i;t.__&&t.__(n,o),_=(l="function"==typeof r)?null:r&&r.__k||o.__k,i=[],N(o,n=(!l&&r||o).__k=f(d,null,[n]),_||s,s,void 0!==o.ownerSVGElement,!l&&r?[r]:_?null:o.firstChild?e.call(o.childNodes):null,i,!l&&r?r:_?_.__e:o.firstChild,l),L(i,n)}(f(class extends h{constructor(){super(),W(this,"add",(()=>{_.from("pokemon").insert([{Name:this.state.newName}]).then((({data:e,error:t})=>{console.log(e,t)})),this.setState({newName:""}),this.router.route("/users/lukeed")})),W(this,"getRouteEl",(e=>{if(console.log("getting route"),"test"===e)return f(U,null)})),this.state={data:[],newName:"",count:3,route:""},worker.addEventListener("message",(e=>{const{data:t}=e;console.log("Worker said: ",t),this.setState({...t})}),!1)}componentDidMount(){var e,t,n;(function(){if("serviceWorker"in navigator){console.log("load");var e=!1;navigator.serviceWorker.register("sw.js",{scope:"/"}).then((t=>{t.onupdatefound=function(){e||console.log("shouldreload")},e=!!t.installing}),(e=>{console.error("ServiceWorker registration failed",e)}))}})(),console.log("th1s181mpo97@n7"),this.router=function(e,t){var n,o,r=[],l={},_=l.format=function(e){return e?(e="/"+e.replace(/^\/|\/$/g,""),n.test(e)&&e.replace(n,"/")):e};return e="/"+(e||"").replace(/^\/|\/$/g,""),n="/"==e?/^\/+/:new RegExp("^\\"+e+"(?=\\/|$)\\/?","i"),l.route=function(t,r){"/"!=t[0]||n.test(t)||(t=e+t),history[(t===o||r?"replace":"push")+"State"](t,null,t)},l.on=function(e,t){return(e=function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,o,r,l,_=[],s="",i=e.split("/");for(i[0]||i.shift();r=i.shift();)"*"===(n=r[0])?(_.push("wild"),s+="/(.*)"):":"===n?(o=r.indexOf("?",1),l=r.indexOf(".",1),_.push(r.substring(1,~o?o:~l?l:r.length)),s+=~o&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(s+=(~o?"?":"")+"\\"+r.substring(l))):s+="/"+r;return{keys:_,pattern:new RegExp("^"+s+"/?$","i")}}(e)).fn=t,r.push(e),l},l.run=function(e){var n,s,i=0,u={};if(e=_(e||location.pathname)){for(e=e.match(/[^\?#]*/)[0],o=e;i<r.length;i++)if(n=(s=r[i]).pattern.exec(e)){for(i=0;i<s.keys.length;)u[s.keys[i]]=n[++i]||null;return s.fn(u),l}t&&t(e)}return l},l.listen=function(e){function t(e){l.run()}function o(e){var t=e.target.closest("a"),o=t&&t.getAttribute("href");e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button||e.defaultPrevented||o&&!t.target&&t.host===location.host&&"#"!=o[0]&&("/"!=o[0]||n.test(o))&&(e.preventDefault(),l.route(o))}return M("push"),M("replace"),addEventListener("popstate",t),addEventListener("replacestate",t),addEventListener("pushstate",t),addEventListener("click",o),l.unlisten=function(){removeEventListener("popstate",t),removeEventListener("replacestate",t),removeEventListener("pushstate",t),removeEventListener("click",o)},l.run(e)},l}(),this.router.on("/",(()=>{console.log("~> /"),this.setState({route:[]})})).on("/*",(e=>{console.log("~>WILD",e),this.setState({route:e.wild.toLowerCase().split("/")})})),this.router.listen(),e="/supa.js",t=()=>{console.log(supabase);const e=(_=supabase.createClient("https://jeilavzqhgggwzcgaonv.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzk5MzgzNSwiZXhwIjoxOTQzNTY5ODM1fQ.w8HGZC5yfBBkP-SZOQP-Oas61vM6mq4gFb2fW8za38k")).from("pokemon").on("*",(e=>{console.log("Change received!",e),this.setState({data:[e.new,...this.state.data]})})).subscribe();console.log(e),_.from("pokemon").select("*").then((({data:e,error:t})=>{this.setState({data:e})}))},(n=document.createElement("script")).src=e,n.onload=t,n.onreadystatechange=t,document.body.appendChild(n)}render({},{count:e,data:t,newName:n,route:o}){if(console.log({route:o}),0===o.length)return f("div",{className:"bg-white-700"},f("a",{href:"/test"},"test "),f("br",null),f("a",{href:"/test2"},"test2 "),f("br",null),f("a",{href:"/books/abc"},"gotofs_books "),f("br",null),f("button",{onClick:e=>this.router.route("/users/lukeed")},"gotouserlukee"),f("br",null),f("a",{href:"/"},"go_home "),f("br",null),f("strong",null,o),f(U,null),f("i",null,"ffsss"),this.getRouteEl(o),f("h1",{class:"pt-36 font-bold text-4xl text-blue-700 text-center"},"$","th1s181mpo97@n7"),f("h1",{class:"pt-36 font-bold text-4xl text-blue-700 text-center"},"$","overskrift@n7"),f("p",null,f("input",{class:"border-2",type:"text",value:n,onInput:e=>this.setState({newName:e.target.value})})),f("strong",null,t.length),f("p",null,f("button",{onClick:this.add},"tilføj")),t.map((e=>f("p",null,e.Name))));switch(o[0]){case"test":return f(U,null)}}},null),document.body)})();