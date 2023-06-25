import{ap as Z,r as D}from"./sanity-f349d501.js";var ht=function(e){if(!e)throw Error("hashlru must have a max value, of type number, greater than 0");var r=0,t=Object.create(null),n=Object.create(null);function a(i,o){t[i]=o,r++,r>=e&&(r=0,n=t,t=Object.create(null))}return{has:function(i){return t[i]!==void 0||n[i]!==void 0},remove:function(i){t[i]!==void 0&&(t[i]=void 0),n[i]!==void 0&&(n[i]=void 0)},get:function(i){var o=t[i];if(o!==void 0)return o;if((o=n[i])!==void 0)return a(i,o),o},set:function(i,o){t[i]!==void 0?t[i]=o:a(i,o)},clear:function(){t=Object.create(null),n=Object.create(null)}}};const me=Z(ht);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var H=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable;function gt(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function mt(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(i){return r[i]});if(n.join("")!=="0123456789")return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(i){a[i]=i}),Object.keys(Object.assign({},a)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var _t=mt()?Object.assign:function(e,r){for(var t,n=gt(e),a,i=1;i<arguments.length;i++){t=Object(arguments[i]);for(var o in t)dt.call(t,o)&&(n[o]=t[o]);if(H){a=H(t);for(var m=0;m<a.length;m++)vt.call(t,a[m])&&(n[a[m]]=t[a[m]])}}return n},F=_t,Et={};function b(e,r,t,n,a,i,o,m){if(!e){var f;if(r===void 0)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var O=[t,n,a,i,o,m],y=0;f=new Error(r.replace(/%s/g,function(){return O[y++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var Q="mixins";function yt(e,r,t){var n=[],a={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},i={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},o={displayName:function(u,s){u.displayName=s},mixins:function(u,s){if(s)for(var l=0;l<s.length;l++)f(u,s[l])},childContextTypes:function(u,s){u.childContextTypes=F({},u.childContextTypes,s)},contextTypes:function(u,s){u.contextTypes=F({},u.contextTypes,s)},getDefaultProps:function(u,s){u.getDefaultProps?u.getDefaultProps=j(u.getDefaultProps,s):u.getDefaultProps=s},propTypes:function(u,s){u.propTypes=F({},u.propTypes,s)},statics:function(u,s){O(u,s)},autobind:function(){}};function m(u,s){var l=a.hasOwnProperty(s)?a[s]:null;G.hasOwnProperty(s)&&b(l==="OVERRIDE_BASE","ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",s),u&&b(l==="DEFINE_MANY"||l==="DEFINE_MANY_MERGED","ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",s)}function f(u,s){if(s){b(typeof s!="function","ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),b(!r(s),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var l=u.prototype,_=l.__reactAutoBindPairs;s.hasOwnProperty(Q)&&o.mixins(u,s.mixins);for(var c in s)if(s.hasOwnProperty(c)&&c!==Q){var g=s[c],N=l.hasOwnProperty(c);if(m(N,c),o.hasOwnProperty(c))o[c](u,g);else{var V=a.hasOwnProperty(c),ft=typeof g=="function",pt=ft&&!V&&!N&&s.autobind!==!1;if(pt)_.push(c,g),l[c]=g;else if(N){var I=a[c];b(V&&(I==="DEFINE_MANY_MERGED"||I==="DEFINE_MANY"),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",I,c),I==="DEFINE_MANY_MERGED"?l[c]=j(l[c],g):I==="DEFINE_MANY"&&(l[c]=it(l[c],g))}else l[c]=g}}}}function O(u,s){if(s)for(var l in s){var _=s[l];if(s.hasOwnProperty(l)){var c=l in o;b(!c,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',l);var g=l in u;if(g){var N=i.hasOwnProperty(l)?i[l]:null;b(N==="DEFINE_MANY_MERGED","ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",l),u[l]=j(u[l],_);return}u[l]=_}}}function y(u,s){b(u&&s&&typeof u=="object"&&typeof s=="object","mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var l in s)s.hasOwnProperty(l)&&(b(u[l]===void 0,"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",l),u[l]=s[l]);return u}function j(u,s){return function(){var _=u.apply(this,arguments),c=s.apply(this,arguments);if(_==null)return c;if(c==null)return _;var g={};return y(g,_),y(g,c),g}}function it(u,s){return function(){u.apply(this,arguments),s.apply(this,arguments)}}function ot(u,s){var l=s.bind(u);return l}function st(u){for(var s=u.__reactAutoBindPairs,l=0;l<s.length;l+=2){var _=s[l],c=s[l+1];u[_]=ot(u,c)}}var ut={componentDidMount:function(){this.__isMounted=!0}},lt={componentWillUnmount:function(){this.__isMounted=!1}},G={replaceState:function(u,s){this.updater.enqueueReplaceState(this,u,s)},isMounted:function(){return!!this.__isMounted}},K=function(){};F(K.prototype,e.prototype,G);function ct(u){var s=function(_,c,g){this.__reactAutoBindPairs.length&&st(this),this.props=_,this.context=c,this.refs=Et,this.updater=g||t,this.state=null;var N=this.getInitialState?this.getInitialState():null;b(typeof N=="object"&&!Array.isArray(N),"%s.getInitialState(): must return an object or null",s.displayName||"ReactCompositeComponent"),this.state=N};s.prototype=new K,s.prototype.constructor=s,s.prototype.__reactAutoBindPairs=[],n.forEach(f.bind(null,s)),f(s,ut),f(s,u),f(s,lt),s.getDefaultProps&&(s.defaultProps=s.getDefaultProps()),b(s.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var l in a)s.prototype[l]||(s.prototype[l]=null);return s}return ct}var bt=yt,P=D,Nt=bt;if(typeof P>"u")throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var Ot=new P.Component().updater,Y=Nt(P.Component,P.isValidElement,Ot),xt=Date.now||jt;function jt(){return new Date().getTime()}var X=xt,It=function(r,t,n){var a,i,o,m,f;t==null&&(t=100);function O(){var y=X()-m;y<t&&y>0?a=setTimeout(O,t-y):(a=null,n||(f=r.apply(o,i),a||(o=i=null)))}return function(){o=this,i=arguments,m=X();var j=n&&!a;return a||(a=setTimeout(O,t)),j&&(f=r.apply(o,i),o=i=null),f}},Ct=Dt;function Dt(e){for(var r=Ft(e),t=1732584193,n=-271733879,a=-1732584194,i=271733878,o=0;o<r.length;o+=16){var m=t,f=n,O=a,y=i;t=p(t,n,a,i,r[o+0],7,-680876936),i=p(i,t,n,a,r[o+1],12,-389564586),a=p(a,i,t,n,r[o+2],17,606105819),n=p(n,a,i,t,r[o+3],22,-1044525330),t=p(t,n,a,i,r[o+4],7,-176418897),i=p(i,t,n,a,r[o+5],12,1200080426),a=p(a,i,t,n,r[o+6],17,-1473231341),n=p(n,a,i,t,r[o+7],22,-45705983),t=p(t,n,a,i,r[o+8],7,1770035416),i=p(i,t,n,a,r[o+9],12,-1958414417),a=p(a,i,t,n,r[o+10],17,-42063),n=p(n,a,i,t,r[o+11],22,-1990404162),t=p(t,n,a,i,r[o+12],7,1804603682),i=p(i,t,n,a,r[o+13],12,-40341101),a=p(a,i,t,n,r[o+14],17,-1502002290),n=p(n,a,i,t,r[o+15],22,1236535329),t=h(t,n,a,i,r[o+1],5,-165796510),i=h(i,t,n,a,r[o+6],9,-1069501632),a=h(a,i,t,n,r[o+11],14,643717713),n=h(n,a,i,t,r[o+0],20,-373897302),t=h(t,n,a,i,r[o+5],5,-701558691),i=h(i,t,n,a,r[o+10],9,38016083),a=h(a,i,t,n,r[o+15],14,-660478335),n=h(n,a,i,t,r[o+4],20,-405537848),t=h(t,n,a,i,r[o+9],5,568446438),i=h(i,t,n,a,r[o+14],9,-1019803690),a=h(a,i,t,n,r[o+3],14,-187363961),n=h(n,a,i,t,r[o+8],20,1163531501),t=h(t,n,a,i,r[o+13],5,-1444681467),i=h(i,t,n,a,r[o+2],9,-51403784),a=h(a,i,t,n,r[o+7],14,1735328473),n=h(n,a,i,t,r[o+12],20,-1926607734),t=d(t,n,a,i,r[o+5],4,-378558),i=d(i,t,n,a,r[o+8],11,-2022574463),a=d(a,i,t,n,r[o+11],16,1839030562),n=d(n,a,i,t,r[o+14],23,-35309556),t=d(t,n,a,i,r[o+1],4,-1530992060),i=d(i,t,n,a,r[o+4],11,1272893353),a=d(a,i,t,n,r[o+7],16,-155497632),n=d(n,a,i,t,r[o+10],23,-1094730640),t=d(t,n,a,i,r[o+13],4,681279174),i=d(i,t,n,a,r[o+0],11,-358537222),a=d(a,i,t,n,r[o+3],16,-722521979),n=d(n,a,i,t,r[o+6],23,76029189),t=d(t,n,a,i,r[o+9],4,-640364487),i=d(i,t,n,a,r[o+12],11,-421815835),a=d(a,i,t,n,r[o+15],16,530742520),n=d(n,a,i,t,r[o+2],23,-995338651),t=v(t,n,a,i,r[o+0],6,-198630844),i=v(i,t,n,a,r[o+7],10,1126891415),a=v(a,i,t,n,r[o+14],15,-1416354905),n=v(n,a,i,t,r[o+5],21,-57434055),t=v(t,n,a,i,r[o+12],6,1700485571),i=v(i,t,n,a,r[o+3],10,-1894986606),a=v(a,i,t,n,r[o+10],15,-1051523),n=v(n,a,i,t,r[o+1],21,-2054922799),t=v(t,n,a,i,r[o+8],6,1873313359),i=v(i,t,n,a,r[o+15],10,-30611744),a=v(a,i,t,n,r[o+6],15,-1560198380),n=v(n,a,i,t,r[o+13],21,1309151649),t=v(t,n,a,i,r[o+4],6,-145523070),i=v(i,t,n,a,r[o+11],10,-1120210379),a=v(a,i,t,n,r[o+2],15,718787259),n=v(n,a,i,t,r[o+9],21,-343485551),t=x(t,m),n=x(n,f),a=x(a,O),i=x(i,y)}return M(t)+M(n)+M(a)+M(i)}var J="0123456789abcdef";function W(e,r){var t=e&1|r&1,n=e>>>1|r>>>1;return n<<1|t}function L(e,r){var t=e&1^r&1,n=e>>>1^r>>>1;return n<<1|t}function A(e,r){var t=e&1&(r&1),n=e>>>1&r>>>1;return n<<1|t}function x(e,r){var t=(e&65535)+(r&65535),n=(e>>16)+(r>>16)+(t>>16);return n<<16|t&65535}function M(e){var r="",t;for(t=0;t<=3;t++)r+=J.charAt(e>>t*8+4&15)+J.charAt(e>>t*8&15);return r}function Ft(e){var r=(e.length+8>>6)+1,t=new Array(r*16),n;for(n=0;n<r*16;n++)t[n]=0;for(n=0;n<e.length;n++)t[n>>2]|=e.charCodeAt(n)<<(e.length*8+n)%4*8;t[n>>2]|=128<<(e.length*8+n)%4*8;var a=e.length*8;return t[r*16-2]=a&255,t[r*16-2]|=(a>>>8&255)<<8,t[r*16-2]|=(a>>>16&255)<<16,t[r*16-2]|=(a>>>24&255)<<24,t}function Mt(e,r){return e<<r|e>>>32-r}function T(e,r,t,n,a,i){return x(Mt(x(x(r,e),x(n,i)),a),t)}function p(e,r,t,n,a,i,o){return T(W(A(r,t),A(~r,n)),e,r,a,i,o)}function h(e,r,t,n,a,i,o){return T(W(A(r,n),A(t,~n)),e,r,a,i,o)}function d(e,r,t,n,a,i,o){return T(L(L(r,t),n),e,r,a,i,o)}function v(e,r,t,n,a,i,o){return T(L(t,W(r,~n)),e,r,a,i,o)}var Rt=Math.ceil(Math.random()*10),St=function(){return++Rt},B=function(e){return Object.prototype.toString.call(e).slice(8,-1)},wt=B;function Pt(e){var r=wt(e);return r!=="Object"&&r!=="Array"}var tt=Pt,At=D,Yt=Y,R=At.createElement,Tt=Yt({getDefaultProps:function(){return{string:"",highlight:""}},shouldComponentUpdate:function(e){return e.highlight!==this.props.highlight},render:function(){var e=this.props,r=e.string.search(e.highlight);if(!e.highlight||r===-1)return R("span",null,e.string);var t=e.highlight.source.length,n=e.string.substr(r,t);return R("span",null,e.string.split(e.highlight).map(function(a,i){return R("span",{key:i},i>0?R("span",{className:"json-inspector__hl"},n):null,a)}))}}),$t=D,qt=Y,kt=Ct,Lt=St,et=B,S=tt,Ut=Tt,E=$t.createElement,Wt=".root.",rt=qt({getInitialState:function(){return{expanded:this._isInitiallyExpanded(this.props)}},getDefaultProps:function(){return{root:!1,prefix:""}},render:function(){var e="id_"+Lt(),r=this.props,t={path:this.keypath(),key:r.label.toString(),value:r.data},n=this._onClick.bind(this,t);return E("div",{className:this.getClassName(),id:"leaf-"+this._rootPath()},E("input",{className:"json-inspector__radio",type:"radio",name:r.id,id:e,tabIndex:-1}),E("label",{className:"json-inspector__line",htmlFor:e,onClick:n},E("div",{className:"json-inspector__flatpath"},t.path),E("span",{className:"json-inspector__key"},this.format(t.key),":",this.renderInteractiveLabel(t.key,!0)),this.renderTitle(),this.renderShowOriginalButton()),this.renderChildren())},renderTitle:function(){var e=this.data(),r=et(e);switch(r){case"Array":var t=e.length;return E("span",{className:"json-inspector__value json-inspector__value_helper"},(t>0?"[…] ":"[] ")+Bt(t));case"Object":var n=Object.keys(e).length;return E("span",{className:"json-inspector__value json-inspector__value_helper"},(n>0?"{…} ":"{} ")+Gt(n));default:return E("span",{className:"json-inspector__value json-inspector__value_"+r.toLowerCase()},this.format(String(e)),this.renderInteractiveLabel(e,!1))}},renderChildren:function(){var e=this.props,r=this._rootPath(),t=this.data();return this.state.expanded&&!S(t)?Object.keys(t).map(function(n){var a=t[n],i=!this.state.original||(e.verboseShowOriginal?e.query:!1);return E(rt,{data:a,label:n,prefix:r,onClick:e.onClick,id:e.id,query:e.query,getOriginal:i?e.getOriginal:null,key:Kt(n,a),isExpanded:e.isExpanded,interactiveLabel:e.interactiveLabel,verboseShowOriginal:e.verboseShowOriginal})},this):null},renderShowOriginalButton:function(){var e=this.props;return S(e.data)||this.state.original||!e.getOriginal||!e.query||$(this.keypath(),e.query)?null:E("span",{className:"json-inspector__show-original",onClick:this._onShowOriginalClick})},renderInteractiveLabel:function(e,r){return typeof this.props.interactiveLabel=="function"?E(this.props.interactiveLabel,{value:String(e),originalValue:e,isKey:r,keypath:this.keypath()}):null},componentWillReceiveProps:function(e){e.query&&this.setState({expanded:!$(e.label,e.query)}),this.props.query&&!e.query&&this.setState({expanded:this._isInitiallyExpanded(e)})},_rootPath:function(){return this.props.prefix+"."+this.props.label},keypath:function(){return this._rootPath().substr(Wt.length)},data:function(){return this.state.original||this.props.data},format:function(e){return E(Ut,{string:e,highlight:this.props.query})},getClassName:function(){var e="json-inspector__leaf";return this.props.root&&(e+=" json-inspector__leaf_root"),this.state.expanded&&(e+=" json-inspector__leaf_expanded"),S(this.props.data)||(e+=" json-inspector__leaf_composite"),e},toggle:function(){this.setState({expanded:!this.state.expanded})},_onClick:function(e,r){this.toggle(),this.props.onClick(e),r.stopPropagation()},_onShowOriginalClick:function(e){this.setState({original:this.props.getOriginal(this.keypath())}),e.stopPropagation()},_isInitiallyExpanded:function(e){var r=this.keypath();return e.root?!0:e.query?!$(r,e.query)&&typeof e.getOriginal=="function":e.isExpanded(r,e.data)}});function Bt(e){return e+(e===1?" item":" items")}function Gt(e){return e+(e===1?" property":" properties")}function Kt(e,r){if(S(r)){var t=kt(String(r));return e+":"+t}else return e+"["+et(r)+"]"}function $(e,r){return e.indexOf(r)!==-1}var Vt=rt,nt=function(){},Ht=D,Qt=Y,Xt=Ht.createElement,Jt=nt,zt=Qt({getDefaultProps:function(){return{onChange:Jt}},render:function(){return Xt("input",{className:"json-inspector__search",type:"search",placeholder:"Search",onChange:this.onChange})},onChange:function(e){this.props.onChange(e.target.value)}}),at=function(e){return Object.keys(e).length===0},Zt=Object.keys,te=tt,ee=at,re=function(e,r){r||(r={cacheResults:!0});var t={};return function(n){if(!r.cacheResults)return w(e,n,r);var a;if(!t[n]){for(var i=n.length-1;i>0;i-=1)if(a=n.substr(0,i),t[a]){t[n]=w(t[a],n,r);break}}return t[n]||(t[n]=w(e,n,r)),t[n]}};function w(e,r,t){return Zt(e).reduce(function(n,a){var i=e[a],o;return te(i)?(q(r,a,t)||q(r,i,t))&&(n[a]=i):q(r,a,t)?n[a]=i:(o=w(i,r,t),ee(o)||Object.assign(n,ne(a,o))),n},{})}function q(e,r,t){if(r){var n=String(r),a=e;return t.ignoreCase&&(n=n.toLowerCase(),a=a.toLowerCase()),n.indexOf(a)!==-1}}function ne(e,r){var t={};return t[e]=r,t}var ae=B,k=".";function U(e,r){var t=r.split(k),n=t.shift();if(!n)return e;var a=ae(e);if(a==="Array"&&e[z(n)])return U(e[z(n)],t.join(k));if(a==="Object"&&e[n])return U(e[n],t.join(k))}function z(e){return parseInt(e,10)}var ie=U,oe=D,se=Y,ue=It,C=oe.createElement,le=Vt,ce=zt,fe=re,pe=at,he=ie,de=nt,ve=se({getDefaultProps:function(){return{data:null,search:ce,searchOptions:{debounceTime:0},className:"",id:"json-"+Date.now(),onClick:de,filterOptions:{cacheResults:!0,ignoreCase:!1},validateQuery:function(e){return e.length>=2},isExpanded:function(e,r){return!1},verboseShowOriginal:!1}},getInitialState:function(){return{query:this.props.query||""}},render:function(){var e=this.props,r=this.state,t=r.query!==""&&e.validateQuery(r.query),n=t?r.filterer(r.query):e.data,a=t&&pe(n);return C("div",{className:"json-inspector "+e.className},this.renderToolbar(),a?C("div",{className:"json-inspector__not-found"},"Nothing found"):C(le,{data:n,onClick:e.onClick,id:e.id,getOriginal:this.getOriginal,query:t?new RegExp(r.query,e.filterOptions.ignoreCase?"i":""):null,label:"root",root:!0,isExpanded:e.isExpanded,interactiveLabel:e.interactiveLabel,verboseShowOriginal:e.verboseShowOriginal}))},renderToolbar:function(){var e=this.props.search;if(e)return C("div",{className:"json-inspector__toolbar"},C(e,{onChange:ue(this.search,this.props.searchOptions.debounceTime),data:this.props.data,query:this.state.query}))},search:function(e){this.setState({query:e})},componentWillMount:function(){this.createFilterer(this.props.data,this.props.filterOptions)},componentWillReceiveProps:function(e){this.createFilterer(e.data,e.filterOptions);var r=typeof e.query=="string"&&e.query!==this.state.query;r&&this.setState({query:e.query})},shouldComponentUpdate:function(e,r){return e.query!==this.props.query||r.query!==this.state.query||e.data!==this.props.data||e.onClick!==this.props.onClick},createFilterer:function(e,r){this.setState({filterer:fe(e,r)})},getOriginal:function(e){return he(this.props.data,e)}});const _e=Z(ve);export{me as H,_e as J};
