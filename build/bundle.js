var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function m(t){h=t}const $=[],g=[],b=[],y=[],v=Promise.resolve();let _=!1;function x(t){b.push(t)}let k=!1;const w=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];m(n),q(n.$$)}for(m(null),$.length=0;g.length;)g.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];w.has(n)||(w.add(n),n())}b.length=0}while($.length);for(;y.length;)y.pop()();_=!1,k=!1,w.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const A=new Set;function S(t,n){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,v.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(c,u,s,a,l,f,d=[-1]){const p=h;m(c);const $=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let g=!1;if($.ctx=s?s(c,u.props||{},(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),g&&S(c,t)),n}):[],$.update(),g=!0,o($.before_update),$.fragment=!!a&&a($.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(A.delete(b),b.i(y))),function(t,e,c){const{fragment:u,on_mount:s,on_destroy:i,after_update:a}=t.$$;u&&u.m(e,c),x(()=>{const e=s.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(x)}(c,u.target,u.anchor),E()}var b,y;m(p)}function N(n){let e,o,r,c,h,m,$,g,b,y,v;return{c(){e=a("main"),o=a("h1"),r=l("Hello "),c=l(n[0]),h=l("!"),m=f(),$=a("p"),$.innerHTML='Visit the\n    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>\n    to learn how to build Svelte apps.',g=f(),b=a("footer"),y=l("Version: "),v=l(n[1]),d(o,"class","svelte-1hacxmq"),d(e,"class","svelte-1hacxmq"),d(b,"class","svelte-1hacxmq")},m(t,n){s(t,e,n),u(e,o),u(o,r),u(o,c),u(o,h),u(e,m),u(e,$),s(t,g,n),s(t,b,n),u(b,y),u(b,v)},p(t,[n]){1&n&&p(c,t[0]),2&n&&p(v,t[1])},i:t,o:t,d(t){t&&i(e),t&&i(g),t&&i(b)}}}function O(t,n,e){let{name:o}=n,{version:r}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name),"version"in t&&e(1,r=t.version)},[o,r]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,O,N,c,{name:0,version:1})}}({target:document.body,props:{name:"world",version:"1.2.8"}})}();
//# sourceMappingURL=bundle.js.map
