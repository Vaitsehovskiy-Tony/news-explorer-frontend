!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=111)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(69))},function(t,e,n){var r=n(0),o=n(28),i=n(2),c=n(31),a=n(32),u=n(41),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i}));n(26),n(34);var r={isLoggedIn:""},o=new class{constructor(t){this.options=t}_getResponseData(t){return t.ok?t.json():Promise.resolve(t.json())}signUp(t,e,n){return fetch("".concat(this.options.baseUrl,"/signup"),{method:"POST",headers:{authorization:this.options.headers.authorization,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:t,password:e,name:n})}).then(t=>this._getResponseData(t))}logout(){return fetch("".concat(this.options.baseUrl,"/logout"),{method:"DELETE",headers:{authorization:this.options.headers.authorization,"Content-Type":"application/json"},credentials:"include"}).then(t=>t.ok?t:Promise.resolve(t))}signIn(t,e){return fetch("".concat(this.options.baseUrl,"/signin"),{method:"POST",headers:{authorization:this.options.headers.authorization,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:t,password:e})}).then(t=>this._getResponseData(t))}getArticles(){return fetch("".concat(this.options.baseUrl,"/articles"),{method:"GET",headers:{authorization:this.options.headers.authorization},credentials:"include"}).then(t=>this._getResponseData(t))}postArticle(t,e,n,r,o,i,c){return fetch("".concat(this.options.baseUrl,"/articles"),{method:"POST",headers:{authorization:this.options.headers.authorization,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({keyword:t,title:e,text:n,date:r,source:o,link:i,image:c})}).then(t=>this._getResponseData(t))}deleteArticle(t){return fetch("".concat(this.options.baseUrl,"/articles/").concat(t),{method:"DELETE",headers:{authorization:this.options.headers.authorization},credentials:"include"}).then(t=>this._getResponseData(t))}getUserInfo(){return fetch("".concat(this.options.baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:{authorization:this.options.headers.authorization}}).then(t=>this._getResponseData(t))}}({baseUrl:"https://www.myownnews.ru.com/api/",headers:{"Content-Type":"application/json"}}),i=new class{constructor(t){this.options=t}getInitialCards(t){return fetch("".concat(this.options.baseUrl,"q=").concat(t),{method:"GET"}).then(t=>t.json())}}({baseUrl:"https://newsapi.org/v2/everything?pageSize=20&apiKey=6aa47727b1b54808b0244a1d2c266dab&",headers:{"Content-Type":"application/json"}})},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(7),o=n(40),i=n(4),c=n(20),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(8);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(7),o=n(6),i=n(15);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0),o=n(9),i=n(2),c=n(29),a=n(33),u=n(21),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var u=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(47),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(44),o=n(45);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e,n){var r=n(0),o=n(18).f,i=n(9),c=n(10),a=n(29),u=n(46),s=n(51);t.exports=function(t,e){var n,f,l,p,d,v=t.target,h=t.global,y=t.stat;if(n=h?r:y?r[v]||a(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(h?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){var r=n(7),o=n(43),i=n(15),c=n(13),a=n(20),u=n(2),s=n(40),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=a(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r,o,i,c=n(70),a=n(0),u=n(5),s=n(9),f=n(2),l=n(22),p=n(16),d=a.WeakMap;if(c){var v=new d,h=v.get,y=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(28),o=n(31),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(49),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports={}},function(t,e,n){var r=n(19);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(27),o=n(10),i=n(71);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){var r={};r[n(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(14),o=n(39);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(0),o=n(9);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(8);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(39),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){"use strict";var r,o,i,c,a=n(17),u=n(14),s=n(0),f=n(12),l=n(75),p=n(10),d=n(76),v=n(37),h=n(77),y=n(5),g=n(19),m=n(78),b=n(11),_=n(33),x=n(79),S=n(66),w=n(80),j=n(52).set,O=n(81),T=n(82),A=n(83),P=n(56),E=n(84),L=n(21),k=n(51),I=n(1),C=n(85),M=I("species"),R="Promise",z=L.get,D=L.set,q=L.getterFor(R),N=l,U=s.TypeError,F=s.document,G=s.process,V=f("fetch"),H=P.f,B=H,W="process"==b(G),J=!!(F&&F.createEvent&&s.dispatchEvent),K=k(R,(function(){if(!(_(N)!==String(N))){if(66===C)return!0;if(!W&&"function"!=typeof PromiseRejectionEvent)return!0}if(u&&!N.prototype.finally)return!0;if(C>=51&&/native code/.test(N))return!1;var t=N.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[M]=e,!(t.then((function(){}))instanceof e)})),Y=K||!S((function(t){N.all(t).catch((function(){}))})),$=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},Q=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;O((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,u,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,d=f.reject,v=f.domain;try{l?(i||(2===e.rejection&&et(t,e),e.rejection=1),!0===l?a=o:(v&&v.enter(),a=l(o),v&&(v.exit(),s=!0)),a===f.promise?d(U("Promise-chain cycle")):(u=$(a))?u.call(a,p,d):p(a)):d(o)}catch(t){v&&!s&&v.exit(),d(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&Z(t,e)}))}},X=function(t,e,n){var r,o;J?((r=F.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):"unhandledrejection"===t&&A("Unhandled promise rejection",n)},Z=function(t,e){j.call(s,(function(){var n,r=e.value;if(tt(e)&&(n=E((function(){W?G.emit("unhandledRejection",r,t):X("unhandledrejection",t,r)})),e.rejection=W||tt(e)?2:1,n.error))throw n.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,e){j.call(s,(function(){W?G.emit("rejectionHandled",t):X("rejectionhandled",t,e.value)}))},nt=function(t,e,n,r){return function(o){t(e,n,o,r)}},rt=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Q(t,e,!0))},ot=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw U("Promise can't be resolved itself");var o=$(n);o?O((function(){var r={done:!1};try{o.call(n,nt(ot,t,r,e),nt(rt,t,r,e))}catch(n){rt(t,r,n,e)}})):(e.value=n,e.state=1,Q(t,e,!1))}catch(n){rt(t,{done:!1},n,e)}}};K&&(N=function(t){m(this,N,R),g(t),r.call(this);var e=z(this);try{t(nt(ot,this,e),nt(rt,this,e))}catch(t){rt(this,e,t)}},(r=function(t){D(this,{type:R,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(N.prototype,{then:function(t,e){var n=q(this),r=H(w(this,N));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=W?G.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&Q(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=z(t);this.promise=t,this.resolve=nt(ot,t,e),this.reject=nt(rt,t,e)},P.f=H=function(t){return t===N||t===i?new o(t):B(t)},u||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new N((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof V&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return T(N,V.apply(s,arguments))}}))),a({global:!0,wrap:!0,forced:K},{Promise:N}),v(N,R,!1,!0),h(R),i=f(R),a({target:R,stat:!0,forced:K},{reject:function(t){var e=H(this);return e.reject.call(void 0,t),e.promise}}),a({target:R,stat:!0,forced:u||K},{resolve:function(t){return T(u&&this===i?N:this,t)}}),a({target:R,stat:!0,forced:Y},{all:function(t){var e=this,n=H(e),r=n.resolve,o=n.reject,i=E((function(){var n=g(e.resolve),i=[],c=0,a=1;x(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=H(e),r=n.reject,o=E((function(){var o=g(e.resolve);x(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(48),o=n(36).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(6).f,o=n(2),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(45);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(0),o=n(29),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(7),o=n(8),i=n(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(32);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(27),o=n(11),i=n(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(8),o=n(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(2),o=n(72),i=n(18),c=n(6);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||a(t,f,u(e,f))}}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(2),o=n(13),i=n(73).indexOf,c=n(16);t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(c,n)&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(8),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r,o,i,c=n(0),a=n(8),u=n(11),s=n(25),f=n(53),l=n(30),p=n(54),d=c.location,v=c.setImmediate,h=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,b=0,_={},x=function(t){if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},S=function(t){return function(){x(t)}},w=function(t){x(t.data)},j=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};v&&h||(v=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return _[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(b),b},h=function(t){delete _[t]},"process"==u(y)?r=function(t){y.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=w,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(j)||"file:"===d.protocol?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),x(t)}}:function(t){setTimeout(S(t),0)}:(r=j,c.addEventListener("message",w,!1))),t.exports={set:v,clear:h}},function(t,e,n){var r=n(12);t.exports=r("document","documentElement")},function(t,e,n){var r=n(55);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(12);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(19),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){var r=n(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r,o=n(4),i=n(86),c=n(36),a=n(16),u=n(53),s=n(30),f=n(22),l=f("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete v.prototype[c[n]];return v()};a[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=v(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(48),o=n(36);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(1);e.f=r},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(67),n(68);class r{create(t,e){var n=document.createElement("div");return n.classList.add("article-card"),n.insertAdjacentHTML("beforeend",'\n      <div class="article-card__image-container">\n        <div class="article-card__image">\n        <button class="article-card__like-icon"></button>\n        </div>\n\n      <div class="article-card__description">\n        <p class="article-card__date">'.concat(t.publishedAt,'</p>\n        <h3 class="article-card__title">').concat(t.description,'</h3>\n        <p class="article-card__text">').concat(t.content,'</p>\n        <p class="article-card__source">').concat(t.source.name,"</p>\n      </div>\n    </div>\n      ")),n.querySelector(".article-card__image").style.backgroundImage="url(".concat(t.urlToImage,")"),n.setAttribute("src","".concat(t.url)),n.setAttribute("keyword","".concat(e)),n}like(t){t.target.classList.contains("article-card__like-icon")&&t.target.classList.toggle("article-card__like-icon_liked")}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t,e){this.container=t,this.card=e}addCard(t){this.container.appendChild(t)}render(t){for(var e=0;e<t.length;e+=1){var n=this.card.create(t[e]);this.container.appendChild(n)}}renderMainPage(t,e){for(var n=0;n<t.length;n+=1){var r=this.card.create(t[n],e);this.container.appendChild(r)}}}},function(t,e,n){var r=n(1),o=n(24),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(42),o=n(24),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(4);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(17),o=n(0),i=n(12),c=n(14),a=n(7),u=n(32),s=n(41),f=n(8),l=n(2),p=n(57),d=n(5),v=n(4),h=n(38),y=n(13),g=n(20),m=n(15),b=n(58),_=n(59),x=n(35),S=n(87),w=n(50),j=n(18),O=n(6),T=n(43),A=n(9),P=n(10),E=n(28),L=n(22),k=n(16),I=n(31),C=n(1),M=n(60),R=n(88),z=n(37),D=n(21),q=n(89).forEach,N=L("hidden"),U=C("toPrimitive"),F=D.set,G=D.getterFor("Symbol"),V=Object.prototype,H=o.Symbol,B=i("JSON","stringify"),W=j.f,J=O.f,K=S.f,Y=T.f,$=E("symbols"),Q=E("op-symbols"),X=E("string-to-symbol-registry"),Z=E("symbol-to-string-registry"),tt=E("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=a&&f((function(){return 7!=b(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W(V,e);r&&delete V[e],J(t,e,n),r&&t!==V&&J(V,e,r)}:J,ot=function(t,e){var n=$[t]=b(H.prototype);return F(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,n){t===V&&ct(Q,e,n),v(t);var r=g(e,!0);return v(n),l($,r)?(n.enumerable?(l(t,N)&&t[N][r]&&(t[N][r]=!1),n=b(n,{enumerable:m(0,!1)})):(l(t,N)||J(t,N,m(1,{})),t[N][r]=!0),rt(t,r,n)):J(t,r,n)},at=function(t,e){v(t);var n=y(e),r=_(n).concat(lt(n));return q(r,(function(e){a&&!ut.call(n,e)||ct(t,e,n[e])})),t},ut=function(t){var e=g(t,!0),n=Y.call(this,e);return!(this===V&&l($,e)&&!l(Q,e))&&(!(n||!l(this,e)||!l($,e)||l(this,N)&&this[N][e])||n)},st=function(t,e){var n=y(t),r=g(e,!0);if(n!==V||!l($,r)||l(Q,r)){var o=W(n,r);return!o||!l($,r)||l(n,N)&&n[N][r]||(o.enumerable=!0),o}},ft=function(t){var e=K(y(t)),n=[];return q(e,(function(t){l($,t)||l(k,t)||n.push(t)})),n},lt=function(t){var e=t===V,n=K(e?Q:y(t)),r=[];return q(n,(function(t){!l($,t)||e&&!l(V,t)||r.push($[t])})),r};(u||(P((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),n=function(t){this===V&&n.call(Q,t),l(this,N)&&l(this[N],e)&&(this[N][e]=!1),rt(this,e,m(1,t))};return a&&nt&&rt(V,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return G(this).tag})),P(H,"withoutSetter",(function(t){return ot(I(t),t)})),T.f=ut,O.f=ct,j.f=st,x.f=S.f=ft,w.f=lt,M.f=function(t){return ot(C(t),t)},a&&(J(H.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),c||P(V,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:H}),q(_(tt),(function(t){R(t)})),r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(X,e))return X[e];var n=H(e);return X[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(t,e){return void 0===e?b(t):at(b(t),e)},defineProperty:ct,defineProperties:at,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),B)&&r({target:"JSON",stat:!0,forced:!u||f((function(){var t=H();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,B.apply(null,o)}});H.prototype[U]||A(H.prototype,U,H.prototype.valueOf),z(H,"Symbol"),k[N]=!0},function(t,e,n){"use strict";var r=n(17),o=n(7),i=n(0),c=n(2),a=n(5),u=n(6).f,s=n(46),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(p,f);var d=p.prototype=f.prototype;d.constructor=p;var v=d.toString,h="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;u(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=v.call(t);if(c(l,t))return"";var n=h?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(33),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){"use strict";var r=n(27),o=n(42);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){var r=n(12),o=n(35),i=n(50),c=n(4);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(13),o=n(23),i=n(74),c=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(49),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(10);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(12),o=n(6),i=n(1),c=n(7),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(4),o=n(63),i=n(23),c=n(25),a=n(64),u=n(65),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,f,l){var p,d,v,h,y,g,m,b=c(e,n,f?2:1);if(l)p=t;else{if("function"!=typeof(d=a(t)))throw TypeError("Target is not iterable");if(o(d)){for(v=0,h=i(t.length);h>v;v++)if((y=f?b(r(m=t[v])[0],m[1]):b(t[v]))&&y instanceof s)return y;return new s(!1)}p=d.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(y=u(p,b,m.value,f))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,e,n){var r=n(4),o=n(19),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c,a,u,s,f,l=n(0),p=n(18).f,d=n(11),v=n(52).set,h=n(54),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,b="process"==d(g),_=p(l,"queueMicrotask"),x=_&&_.value;x||(r=function(){var t,e;for(b&&(t=g.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},b?c=function(){g.nextTick(r)}:y&&!h?(a=!0,u=document.createTextNode(""),new y(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a}):m&&m.resolve?(s=m.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){v.call(l,r)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(4),o=n(5),i=n(56);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r,o,i=n(0),c=n(55),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(7),o=n(6),i=n(4),c=n(59);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),a=r.length,u=0;a>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){var r=n(13),o=n(35).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(47),o=n(2),i=n(60),c=n(6).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},function(t,e,n){var r=n(25),o=n(44),i=n(38),c=n(23),a=n(90),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,v,h,y){for(var g,m,b=i(d),_=o(b),x=r(v,h,3),S=c(_.length),w=0,j=y||a,O=e?j(d,S):n?j(d,0):void 0;S>w;w++)if((p||w in _)&&(m=x(g=_[w],w,b),t))if(e)O[w]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:u.call(O,g)}else if(f)return!1;return l?-1:s||f?f:O}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(5),o=n(57),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";function r(t,e){e&&(document.querySelector(".headr__menu-articles").classList.add("headr__menu-articles_is-opened"),document.querySelector(".headr__bttn_name").classList.add("headr__bttn_name_is-opened"),document.querySelector(".headr__bttn_name").textContent=t,document.querySelector(".headr__bttn_authorize").classList.add("headr__bttn_hidden"))}function o(){document.querySelector(".headr__menu-articles").classList.remove("headr__menu-articles_is-opened"),document.querySelector(".headr__bttn_name").classList.remove("headr__bttn_name_is-opened"),document.querySelector(".headr__bttn_authorize").classList.remove("headr__bttn_hidden")}function i(t){document.querySelector(".headr__bttn_name").textContent=t}function c(t,e,n){document.querySelector(".account-info__title").textContent="".concat(t,", у вас ").concat(e," сохранённых статей"),document.querySelector(".account-info__keywords_bold").textContent="".concat(n)}n.r(e),n.d(e,"headerRender",(function(){return r})),n.d(e,"headerRenderLogout",(function(){return o})),n.d(e,"renderAccountButton",(function(){return i})),n.d(e,"renderAccountCount",(function(){return c}))},function(t,e,n){"use strict";var r=n(13),o=n(99),i=n(24),c=n(21),a=n(100),u=c.set,s=c.getterFor("Array Iterator");t.exports=a(Array,"Array",(function(t,e){u(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){"use strict";var r,o,i,c=n(94),a=n(9),u=n(2),s=n(1),f=n(14),l=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),f||u(r,l)||a(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,e,n){var r=n(2),o=n(38),i=n(22),c=n(102),a=i("IE_PROTO"),u=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},,function(t,e,n){var r=n(17),o=n(97);r({target:"Array",stat:!0,forced:!n(66)((function(t){Array.from(t)}))},{from:o})},function(t,e,n){"use strict";var r=n(25),o=n(38),i=n(65),c=n(63),a=n(23),u=n(98),s=n(64);t.exports=function(t){var e,n,f,l,p,d,v=o(t),h="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,m=void 0!==g,b=s(v),_=0;if(m&&(g=r(g,y>2?arguments[2]:void 0,2)),null==b||h==Array&&c(b))for(n=new h(e=a(v.length));e>_;_++)d=m?g(v[_],_):v[_],u(n,_,d);else for(p=(l=b.call(v)).next,n=new h;!(f=p.call(l)).done;_++)d=m?i(l,g,[f.value,_],!0):f.value,u(n,_,d);return n.length=_,n}},function(t,e,n){"use strict";var r=n(20),o=n(6),i=n(15);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(1),o=n(58),i=n(6),c=r("unscopables"),a=Array.prototype;null==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),t.exports=function(t){a[c][t]=!0}},function(t,e,n){"use strict";var r=n(17),o=n(101),i=n(94),c=n(103),a=n(37),u=n(9),s=n(10),f=n(1),l=n(14),p=n(24),d=n(93),v=d.IteratorPrototype,h=d.BUGGY_SAFARI_ITERATORS,y=f("iterator"),g=function(){return this};t.exports=function(t,e,n,f,d,m,b){o(n,e,f);var _,x,S,w=function(t){if(t===d&&P)return P;if(!h&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",O=!1,T=t.prototype,A=T[y]||T["@@iterator"]||d&&T[d],P=!h&&A||w(d),E="Array"==e&&T.entries||A;if(E&&(_=i(E.call(new t)),v!==Object.prototype&&_.next&&(l||i(_)===v||(c?c(_,v):"function"!=typeof _[y]&&u(_,y,g)),a(_,j,!0,!0),l&&(p[j]=g))),"values"==d&&A&&"values"!==A.name&&(O=!0,P=function(){return A.call(this)}),l&&!b||T[y]===P||u(T,y,P),p[e]=P,d)if(x={values:w("values"),keys:m?P:w("keys"),entries:w("entries")},b)for(S in x)(h||O||!(S in T))&&s(T,S,x[S]);else r({target:e,proto:!0,forced:h||O},x);return x}},function(t,e,n){"use strict";var r=n(93).IteratorPrototype,o=n(58),i=n(15),c=n(37),a=n(24),u=function(){return this};t.exports=function(t,e,n){var s=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,s,!1,!0),a[s]=u,t}},function(t,e,n){var r=n(8);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(4),o=n(104);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(10),o=n(4),i=n(8),c=n(106),a=RegExp.prototype,u=a.toString,s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f="toString"!=u.name;(s||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in a)?c.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r=n(4);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(0),o=n(108),i=n(92),c=n(9),a=n(1),u=a("iterator"),s=a("toStringTag"),f=i.values;for(var l in o){var p=r[l],d=p&&p.prototype;if(d){if(d[u]!==f)try{c(d,u,f)}catch(t){d[u]=f}if(d[s]||c(d,s,l),o[l])for(var v in i)if(d[v]!==i[v])try{c(d,v,i[v])}catch(t){d[v]=i[v]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);n(67),n(68),n(96),n(92),n(26),n(34),n(105),n(107),n(109);var r=n(61);class o extends r.a{create(t){var e=document.createElement("div");return e.classList.add("article-card"),e.insertAdjacentHTML("beforeend",'\n      <div class="article-card__image">\n        <div class="article-card__left-container">\n          <p class="article-card__keyword">'.concat(t.keyword,'</p>\n        </div>\n      <button class="article-card__delete-icon"></button>\n      </div>\n\n    <div class="article-card__description">\n      <p class="article-card__date">').concat(t.data,'</p>\n      <h3 class="article-card__title">').concat(t.title,'</h3>\n      <p class="article-card__text">').concat(t.text,'</p>\n      <p class="article-card__source">').concat(t.source,"</p>\n    </div>\n      ")),e.querySelector(".article-card__image").style.backgroundImage="url(".concat(t.image,")"),e.setAttribute("src","".concat(t.link)),e.setAttribute("id","".concat(t._id)),e}remove(t){t.target.classList.contains("article-card__delete-icon")&&t.target.closest(".article-card").remove()}}var i=n(62),c=n(3);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=n(91),f=s.renderAccountButton,l=s.renderAccountCount,p=document.querySelector(".headr__bttn_name"),d=document.querySelector(".articles-list"),v=new o,h=new i.a(d,v);window.addEventListener("load",()=>{Promise.all([c.b.getArticles(),c.b.getUserInfo()]).then(t=>{var e=a(t,2),n=e[0],r=e[1];f(r.name),n.articles.length>0?(l(r.name,n.articles.length,n.articles[0].keyword),document.querySelector(".results").classList.add("results_is-opened"),h.render(n.articles)):console.log("У вас нет сохраненных статей")}).catch(t=>{console.log(t)})}),d.addEventListener("click",t=>{if(t.target.classList.contains("article-card__delete-icon")){var e=t.target.closest(".article-card").getAttribute("id");c.b.deleteArticle("".concat(e)).then(t=>{console.log(t.message)}).catch(t=>{console.log("Удаление неуспешно: ".concat(t))}),v.remove(t)}}),p.addEventListener("click",()=>{c.b.logout().then(t=>{console.log(t),c.a.isLoggedIn=!1,window.location.href="./"}).catch(t=>{console.log(t)})})}]);