(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Nf={exports:{}},so={},If={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Wx(){if(cg)return pt;cg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(k,ee,Ce){this.props=k,this.context=ee,this.refs=M,this.updater=Ce||S}y.prototype.isReactComponent={},y.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function v(){}v.prototype=y.prototype;function D(k,ee,Ce){this.props=k,this.context=ee,this.refs=M,this.updater=Ce||S}var b=D.prototype=new v;b.constructor=D,E(b,y.prototype),b.isPureReactComponent=!0;var C=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function z(k,ee,Ce){var J,de={},_e=null,me=null;if(ee!=null)for(J in ee.ref!==void 0&&(me=ee.ref),ee.key!==void 0&&(_e=""+ee.key),ee)F.call(ee,J)&&!L.hasOwnProperty(J)&&(de[J]=ee[J]);var ve=arguments.length-2;if(ve===1)de.children=Ce;else if(1<ve){for(var we=Array(ve),Ve=0;Ve<ve;Ve++)we[Ve]=arguments[Ve+2];de.children=we}if(k&&k.defaultProps)for(J in ve=k.defaultProps,ve)de[J]===void 0&&(de[J]=ve[J]);return{$$typeof:r,type:k,key:_e,ref:me,props:de,_owner:N.current}}function P(k,ee){return{$$typeof:r,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function w(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function I(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ce){return ee[Ce]})}var B=/\/+/g;function W(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?I(""+k.key):ee.toString(36)}function $(k,ee,Ce,J,de){var _e=typeof k;(_e==="undefined"||_e==="boolean")&&(k=null);var me=!1;if(k===null)me=!0;else switch(_e){case"string":case"number":me=!0;break;case"object":switch(k.$$typeof){case r:case e:me=!0}}if(me)return me=k,de=de(me),k=J===""?"."+W(me,0):J,C(de)?(Ce="",k!=null&&(Ce=k.replace(B,"$&/")+"/"),$(de,ee,Ce,"",function(Ve){return Ve})):de!=null&&(w(de)&&(de=P(de,Ce+(!de.key||me&&me.key===de.key?"":(""+de.key).replace(B,"$&/")+"/")+k)),ee.push(de)),1;if(me=0,J=J===""?".":J+":",C(k))for(var ve=0;ve<k.length;ve++){_e=k[ve];var we=J+W(_e,ve);me+=$(_e,ee,Ce,we,de)}else if(we=x(k),typeof we=="function")for(k=we.call(k),ve=0;!(_e=k.next()).done;)_e=_e.value,we=J+W(_e,ve++),me+=$(_e,ee,Ce,we,de);else if(_e==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return me}function fe(k,ee,Ce){if(k==null)return k;var J=[],de=0;return $(k,J,"","",function(_e){return ee.call(Ce,_e,de++)}),J}function oe(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(Ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ce)},function(Ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ce)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var ue={current:null},V={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:V,ReactCurrentOwner:N};function ae(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:fe,forEach:function(k,ee,Ce){fe(k,function(){ee.apply(this,arguments)},Ce)},count:function(k){var ee=0;return fe(k,function(){ee++}),ee},toArray:function(k){return fe(k,function(ee){return ee})||[]},only:function(k){if(!w(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},pt.Component=y,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=D,pt.StrictMode=s,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,pt.act=ae,pt.cloneElement=function(k,ee,Ce){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var J=E({},k.props),de=k.key,_e=k.ref,me=k._owner;if(ee!=null){if(ee.ref!==void 0&&(_e=ee.ref,me=N.current),ee.key!==void 0&&(de=""+ee.key),k.type&&k.type.defaultProps)var ve=k.type.defaultProps;for(we in ee)F.call(ee,we)&&!L.hasOwnProperty(we)&&(J[we]=ee[we]===void 0&&ve!==void 0?ve[we]:ee[we])}var we=arguments.length-2;if(we===1)J.children=Ce;else if(1<we){ve=Array(we);for(var Ve=0;Ve<we;Ve++)ve[Ve]=arguments[Ve+2];J.children=ve}return{$$typeof:r,type:k.type,key:de,ref:_e,props:J,_owner:me}},pt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},pt.createElement=z,pt.createFactory=function(k){var ee=z.bind(null,k);return ee.type=k,ee},pt.createRef=function(){return{current:null}},pt.forwardRef=function(k){return{$$typeof:f,render:k}},pt.isValidElement=w,pt.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:oe}},pt.memo=function(k,ee){return{$$typeof:p,type:k,compare:ee===void 0?null:ee}},pt.startTransition=function(k){var ee=V.transition;V.transition={};try{k()}finally{V.transition=ee}},pt.unstable_act=ae,pt.useCallback=function(k,ee){return ue.current.useCallback(k,ee)},pt.useContext=function(k){return ue.current.useContext(k)},pt.useDebugValue=function(){},pt.useDeferredValue=function(k){return ue.current.useDeferredValue(k)},pt.useEffect=function(k,ee){return ue.current.useEffect(k,ee)},pt.useId=function(){return ue.current.useId()},pt.useImperativeHandle=function(k,ee,Ce){return ue.current.useImperativeHandle(k,ee,Ce)},pt.useInsertionEffect=function(k,ee){return ue.current.useInsertionEffect(k,ee)},pt.useLayoutEffect=function(k,ee){return ue.current.useLayoutEffect(k,ee)},pt.useMemo=function(k,ee){return ue.current.useMemo(k,ee)},pt.useReducer=function(k,ee,Ce){return ue.current.useReducer(k,ee,Ce)},pt.useRef=function(k){return ue.current.useRef(k)},pt.useState=function(k){return ue.current.useState(k)},pt.useSyncExternalStore=function(k,ee,Ce){return ue.current.useSyncExternalStore(k,ee,Ce)},pt.useTransition=function(){return ue.current.useTransition()},pt.version="18.3.1",pt}var fg;function nr(){return fg||(fg=1,If.exports=Wx()),If.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function jx(){if(dg)return so;dg=1;var r=nr(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var m,_={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(m in h)s.call(h,m)&&!l.hasOwnProperty(m)&&(_[m]=h[m]);if(f&&f.defaultProps)for(m in h=f.defaultProps,h)_[m]===void 0&&(_[m]=h[m]);return{$$typeof:e,type:f,key:x,ref:S,props:_,_owner:o.current}}return so.Fragment=t,so.jsx=c,so.jsxs=c,so}var hg;function Xx(){return hg||(hg=1,Nf.exports=jx()),Nf.exports}var q=Xx(),gi=nr();const si=Gx(gi);var Ol={},Uf={exports:{}},kn={},Of={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function qx(){return pg||(pg=1,function(r){function e(V,le){var ae=V.length;V.push(le);e:for(;0<ae;){var k=ae-1>>>1,ee=V[k];if(0<o(ee,le))V[k]=le,V[ae]=ee,ae=k;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var le=V[0],ae=V.pop();if(ae!==le){V[0]=ae;e:for(var k=0,ee=V.length,Ce=ee>>>1;k<Ce;){var J=2*(k+1)-1,de=V[J],_e=J+1,me=V[_e];if(0>o(de,ae))_e<ee&&0>o(me,de)?(V[k]=me,V[_e]=ae,k=_e):(V[k]=de,V[J]=ae,k=J);else if(_e<ee&&0>o(me,ae))V[k]=me,V[_e]=ae,k=_e;else break e}}return le}function o(V,le){var ae=V.sortIndex-le.sortIndex;return ae!==0?ae:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],m=1,_=null,x=3,S=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var le=t(p);le!==null;){if(le.callback===null)s(p);else if(le.startTime<=V)s(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function C(V){if(M=!1,b(V),!E)if(t(h)!==null)E=!0,oe(F);else{var le=t(p);le!==null&&ue(C,le.startTime-V)}}function F(V,le){E=!1,M&&(M=!1,v(z),z=-1),S=!0;var ae=x;try{for(b(le),_=t(h);_!==null&&(!(_.expirationTime>le)||V&&!I());){var k=_.callback;if(typeof k=="function"){_.callback=null,x=_.priorityLevel;var ee=k(_.expirationTime<=le);le=r.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(h)&&s(h),b(le)}else s(h);_=t(h)}if(_!==null)var Ce=!0;else{var J=t(p);J!==null&&ue(C,J.startTime-le),Ce=!1}return Ce}finally{_=null,x=ae,S=!1}}var N=!1,L=null,z=-1,P=5,w=-1;function I(){return!(r.unstable_now()-w<P)}function B(){if(L!==null){var V=r.unstable_now();w=V;var le=!0;try{le=L(!0,V)}finally{le?W():(N=!1,L=null)}}else N=!1}var W;if(typeof D=="function")W=function(){D(B)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,fe=$.port2;$.port1.onmessage=B,W=function(){fe.postMessage(null)}}else W=function(){y(B,0)};function oe(V){L=V,N||(N=!0,W())}function ue(V,le){z=y(function(){V(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,oe(F))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(V){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var ae=x;x=le;try{return V()}finally{x=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ae=x;x=V;try{return le()}finally{x=ae}},r.unstable_scheduleCallback=function(V,le,ae){var k=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?k+ae:k):ae=k,V){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ae+ee,V={id:m++,callback:le,priorityLevel:V,startTime:ae,expirationTime:ee,sortIndex:-1},ae>k?(V.sortIndex=ae,e(p,V),t(h)===null&&V===t(p)&&(M?(v(z),z=-1):M=!0,ue(C,ae-k))):(V.sortIndex=ee,e(h,V),E||S||(E=!0,oe(F))),V},r.unstable_shouldYield=I,r.unstable_wrapCallback=function(V){var le=x;return function(){var ae=x;x=le;try{return V.apply(this,arguments)}finally{x=ae}}}}(Ff)),Ff}var mg;function Yx(){return mg||(mg=1,Of.exports=qx()),Of.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function $x(){if(gg)return kn;gg=1;var r=nr(),e=Yx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function x(n){return h.call(_,n)?!0:h.call(m,n)?!1:p.test(n)?_[n]=!0:(m[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,u,d,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,D);y[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,D);y[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,D);y[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,a,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,u)&&(a=null),u||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),I=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ce=!1;function J(n,i){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){u=re}n.call(i.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var d=re.stack.split(`
`),g=u.stack.split(`
`),T=d.length-1,O=g.length-1;1<=T&&0<=O&&d[T]!==g[O];)O--;for(;1<=T&&0<=O;T--,O--)if(d[T]!==g[O]){if(T!==1||O!==1)do if(T--,O--,0>O||d[T]!==g[O]){var H=`
`+d[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=O);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function de(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function _e(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case L:return"Fragment";case N:return"Portal";case P:return"Profiler";case z:return"StrictMode";case W:return"Suspense";case $:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case B:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:_e(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return _e(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function we(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=we(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ct(n){n._valueTracker||(n._valueTracker=Ve(n))}function nt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=we(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function G(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Tn(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function dt(n,i){mt(n,i);var a=ve(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rt(n,i,a){(i!=="number"||Nt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var je=Array.isArray;function U(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ne(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(je(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ve(a)}}function ge(n,i){var a=ve(i.value),u=ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ye(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,Oe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function Ke(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Ke(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Be=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,ce=null,pe=null;function Ne(n){if(n=Wa(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ko(i),be(n.stateNode,n.type,i))}}function De(n){ce?pe?pe.push(n):pe=[n]:ce=n}function st(){if(ce){var n=ce,i=pe;if(pe=ce=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function Ut(n,i){return n(i)}function Jt(){}var St=!1;function Dn(n,i,a){if(St)return n(i,a);St=!0;try{return Ut(n,i,a)}finally{St=!1,(ce!==null||pe!==null)&&(Jt(),st())}}function wn(n,i){var a=n.stateNode;if(a===null)return null;var u=Ko(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var _s=!1;if(f)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){_s=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{_s=!1}function Li(n,i,a,u,d,g,T,O,H){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(Se){this.onError(Se)}}var Di=!1,Br=null,zr=!1,rr=null,Ro={onError:function(n){Di=!0,Br=n}};function xs(n,i,a,u,d,g,T,O,H){Di=!1,Br=null,Li.apply(Ro,arguments)}function bo(n,i,a,u,d,g,T,O,H){if(xs.apply(this,arguments),Di){if(Di){var re=Br;Di=!1,Br=null}else throw Error(t(198));zr||(zr=!0,rr=re)}}function Si(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Po(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Lo(n){if(Si(n)!==n)throw Error(t(188))}function tc(n){var i=n.alternate;if(!i){if(i=Si(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Lo(d),n;if(g===u)return Lo(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=g;else{for(var T=!1,O=d.child;O;){if(O===a){T=!0,a=d,u=g;break}if(O===u){T=!0,u=d,a=g;break}O=O.sibling}if(!T){for(O=g.child;O;){if(O===a){T=!0,a=g,u=d;break}if(O===u){T=!0,u=g,a=d;break}O=O.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Do(n){return n=tc(n),n!==null?No(n):null}function No(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=No(n);if(i!==null)return i;n=n.sibling}return null}var Io=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,Y=e.unstable_shouldYield,ie=e.unstable_requestPaint,Q=e.unstable_now,K=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Pe=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,ze=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,Ge=null;function vt(n){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:xt,Wt=Math.log,Bt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Wt(n)/Bt|0)|0}var $e=64,jt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes,T=a&268435455;if(T!==0){var O=T&~d;O!==0?u=gt(O):(g&=T,g!==0&&(u=gt(g)))}else T=a&~d,T!==0?u=gt(T):g!==0&&(u=gt(g));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if(u&4&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-at(i),d=1<<a,u|=n[a],i&=~d;return u}function sr(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function An(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-at(g),O=1<<T,H=d[T];H===-1?(!(O&a)||O&u)&&(d[T]=sr(O,i)):H<=i&&(n.expiredLanes|=O),g&=~O}}function Ni(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=$e;return $e<<=1,!($e&4194240)&&($e=64),n}function vn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function sn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-at(i),n[i]=a}function hn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-at(a),g=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~g}}function an(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-at(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var Et=0;function Ei(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Gh,nc,Wh,jh,Xh,ic=!1,Uo=[],ar=null,or=null,lr=null,Ra=new Map,ba=new Map,ur=[],d_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(n,i){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(i.pointerId)}}function Pa(n,i,a,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Wa(i),i!==null&&nc(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function h_(n,i,a,u,d){switch(i){case"focusin":return ar=Pa(ar,n,i,a,u,d),!0;case"dragenter":return or=Pa(or,n,i,a,u,d),!0;case"mouseover":return lr=Pa(lr,n,i,a,u,d),!0;case"pointerover":var g=d.pointerId;return Ra.set(g,Pa(Ra.get(g)||null,n,i,a,u,d)),!0;case"gotpointercapture":return g=d.pointerId,ba.set(g,Pa(ba.get(g)||null,n,i,a,u,d)),!0}return!1}function Yh(n){var i=Hr(n.target);if(i!==null){var a=Si(i);if(a!==null){if(i=a.tag,i===13){if(i=Po(a),i!==null){n.blockedOn=i,Xh(n.priority,function(){Wh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Oo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=sc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);At=u,a.target.dispatchEvent(u),At=null}else return i=Wa(a),i!==null&&nc(i),n.blockedOn=a,!1;i.shift()}return!0}function $h(n,i,a){Oo(n)&&a.delete(i)}function p_(){ic=!1,ar!==null&&Oo(ar)&&(ar=null),or!==null&&Oo(or)&&(or=null),lr!==null&&Oo(lr)&&(lr=null),Ra.forEach($h),ba.forEach($h)}function La(n,i){n.blockedOn===i&&(n.blockedOn=null,ic||(ic=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,p_)))}function Da(n){function i(d){return La(d,n)}if(0<Uo.length){La(Uo[0],n);for(var a=1;a<Uo.length;a++){var u=Uo[a];u.blockedOn===n&&(u.blockedOn=null)}}for(ar!==null&&La(ar,n),or!==null&&La(or,n),lr!==null&&La(lr,n),Ra.forEach(i),ba.forEach(i),a=0;a<ur.length;a++)u=ur[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<ur.length&&(a=ur[0],a.blockedOn===null);)Yh(a),a.blockedOn===null&&ur.shift()}var ys=C.ReactCurrentBatchConfig,Fo=!0;function m_(n,i,a,u){var d=Et,g=ys.transition;ys.transition=null;try{Et=1,rc(n,i,a,u)}finally{Et=d,ys.transition=g}}function g_(n,i,a,u){var d=Et,g=ys.transition;ys.transition=null;try{Et=4,rc(n,i,a,u)}finally{Et=d,ys.transition=g}}function rc(n,i,a,u){if(Fo){var d=sc(n,i,a,u);if(d===null)Ec(n,i,u,ko,a),qh(n,u);else if(h_(d,n,i,a,u))u.stopPropagation();else if(qh(n,u),i&4&&-1<d_.indexOf(n)){for(;d!==null;){var g=Wa(d);if(g!==null&&Gh(g),g=sc(n,i,a,u),g===null&&Ec(n,i,u,ko,a),g===d)break;d=g}d!==null&&u.stopPropagation()}else Ec(n,i,u,null,a)}}var ko=null;function sc(n,i,a,u){if(ko=null,n=X(u),n=Hr(n),n!==null)if(i=Si(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Po(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ko=n,null}function Kh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K()){case Me:return 1;case Pe:return 4;case Ie:case ze:return 16;case tt:return 536870912;default:return 16}default:return 16}}var cr=null,ac=null,Bo=null;function Zh(){if(Bo)return Bo;var n,i=ac,a=i.length,u,d="value"in cr?cr.value:cr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(u=1;u<=T&&i[a-u]===d[g-u];u++);return Bo=d.slice(n,1<u?1-u:void 0)}function zo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function Qh(){return!1}function Vn(n){function i(a,u,d,g,T){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ho:Qh,this.isPropagationStopped=Qh,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),i}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Vn(Ss),Na=ae({},Ss,{view:0,detail:0}),v_=Vn(Na),lc,uc,Ia,Vo=ae({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ia&&(Ia&&n.type==="mousemove"?(lc=n.screenX-Ia.screenX,uc=n.screenY-Ia.screenY):uc=lc=0,Ia=n),lc)},movementY:function(n){return"movementY"in n?n.movementY:uc}}),Jh=Vn(Vo),__=ae({},Vo,{dataTransfer:0}),x_=Vn(__),y_=ae({},Na,{relatedTarget:0}),cc=Vn(y_),S_=ae({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),E_=Vn(S_),M_=ae({},Ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),T_=Vn(M_),w_=ae({},Ss,{data:0}),ep=Vn(w_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=R_[n])?!!i[n]:!1}function fc(){return b_}var P_=ae({},Na,{key:function(n){if(n.key){var i=A_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=zo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?C_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(n){return n.type==="keypress"?zo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),L_=Vn(P_),D_=ae({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=Vn(D_),N_=ae({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),I_=Vn(N_),U_=ae({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),O_=Vn(U_),F_=ae({},Vo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),k_=Vn(F_),B_=[9,13,27,32],dc=f&&"CompositionEvent"in window,Ua=null;f&&"documentMode"in document&&(Ua=document.documentMode);var z_=f&&"TextEvent"in window&&!Ua,np=f&&(!dc||Ua&&8<Ua&&11>=Ua),ip=" ",rp=!1;function sp(n,i){switch(n){case"keyup":return B_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Es=!1;function H_(n,i){switch(n){case"compositionend":return ap(i);case"keypress":return i.which!==32?null:(rp=!0,ip);case"textInput":return n=i.data,n===ip&&rp?null:n;default:return null}}function V_(n,i){if(Es)return n==="compositionend"||!dc&&sp(n,i)?(n=Zh(),Bo=ac=cr=null,Es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return np&&i.locale!=="ko"?null:i.data;default:return null}}var G_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!G_[n.type]:i==="textarea"}function lp(n,i,a,u){De(u),i=qo(i,"onChange"),0<i.length&&(a=new oc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Oa=null,Fa=null;function W_(n){Ap(n,0)}function Go(n){var i=Cs(n);if(nt(i))return n}function j_(n,i){if(n==="change")return i}var up=!1;if(f){var hc;if(f){var pc="oninput"in document;if(!pc){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),pc=typeof cp.oninput=="function"}hc=pc}else hc=!1;up=hc&&(!document.documentMode||9<document.documentMode)}function fp(){Oa&&(Oa.detachEvent("onpropertychange",dp),Fa=Oa=null)}function dp(n){if(n.propertyName==="value"&&Go(Fa)){var i=[];lp(i,Fa,n,X(n)),Dn(W_,i)}}function X_(n,i,a){n==="focusin"?(fp(),Oa=i,Fa=a,Oa.attachEvent("onpropertychange",dp)):n==="focusout"&&fp()}function q_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Go(Fa)}function Y_(n,i){if(n==="click")return Go(i)}function $_(n,i){if(n==="input"||n==="change")return Go(i)}function K_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:K_;function ka(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!oi(n[d],i[d]))return!1}return!0}function hp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pp(n,i){var a=hp(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hp(a)}}function mp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?mp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function gp(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Nt(n.document)}return i}function mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Z_(n){var i=gp(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&mp(a.ownerDocument.documentElement,a)){if(u!==null&&mc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!n.extend&&g>u&&(d=u,u=g,g=d),d=pp(a,g);var T=pp(a,u);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Q_=f&&"documentMode"in document&&11>=document.documentMode,Ms=null,gc=null,Ba=null,vc=!1;function vp(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vc||Ms==null||Ms!==Nt(u)||(u=Ms,"selectionStart"in u&&mc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ba&&ka(Ba,u)||(Ba=u,u=qo(gc,"onSelect"),0<u.length&&(i=new oc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ms)))}function Wo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ts={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},_c={},_p={};f&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function jo(n){if(_c[n])return _c[n];if(!Ts[n])return n;var i=Ts[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in _p)return _c[n]=i[a];return n}var xp=jo("animationend"),yp=jo("animationiteration"),Sp=jo("animationstart"),Ep=jo("transitionend"),Mp=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,i){Mp.set(n,i),l(i,[n])}for(var xc=0;xc<Tp.length;xc++){var yc=Tp[xc],J_=yc.toLowerCase(),ex=yc[0].toUpperCase()+yc.slice(1);fr(J_,"on"+ex)}fr(xp,"onAnimationEnd"),fr(yp,"onAnimationIteration"),fr(Sp,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(Ep,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function wp(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,bo(u,i,void 0,n),n.currentTarget=null}function Ap(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var T=u.length-1;0<=T;T--){var O=u[T],H=O.instance,re=O.currentTarget;if(O=O.listener,H!==g&&d.isPropagationStopped())break e;wp(d,O,re),g=H}else for(T=0;T<u.length;T++){if(O=u[T],H=O.instance,re=O.currentTarget,O=O.listener,H!==g&&d.isPropagationStopped())break e;wp(d,O,re),g=H}}}if(zr)throw n=rr,zr=!1,rr=null,n}function Ot(n,i){var a=i[Rc];a===void 0&&(a=i[Rc]=new Set);var u=n+"__bubble";a.has(u)||(Cp(i,n,2,!1),a.add(u))}function Sc(n,i,a){var u=0;i&&(u|=4),Cp(a,n,u,i)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Ha(n){if(!n[Xo]){n[Xo]=!0,s.forEach(function(a){a!=="selectionchange"&&(tx.has(a)||Sc(a,!1,n),Sc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Xo]||(i[Xo]=!0,Sc("selectionchange",!1,i))}}function Cp(n,i,a,u){switch(Kh(i)){case 1:var d=m_;break;case 4:d=g_;break;default:d=rc}a=d.bind(null,i,a,n),d=void 0,!_s||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Ec(n,i,a,u,d){var g=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var O=u.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(T===4)for(T=u.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;T=T.return}for(;O!==null;){if(T=Hr(O),T===null)return;if(H=T.tag,H===5||H===6){u=g=T;continue e}O=O.parentNode}}u=u.return}Dn(function(){var re=g,Se=X(a),Ee=[];e:{var xe=Mp.get(n);if(xe!==void 0){var Ue=oc,He=n;switch(n){case"keypress":if(zo(a)===0)break e;case"keydown":case"keyup":Ue=L_;break;case"focusin":He="focus",Ue=cc;break;case"focusout":He="blur",Ue=cc;break;case"beforeblur":case"afterblur":Ue=cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=x_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=I_;break;case xp:case yp:case Sp:Ue=E_;break;case Ep:Ue=O_;break;case"scroll":Ue=v_;break;case"wheel":Ue=k_;break;case"copy":case"cut":case"paste":Ue=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=tp}var We=(i&4)!==0,Yt=!We&&n==="scroll",Z=We?xe!==null?xe+"Capture":null:xe;We=[];for(var j=re,te;j!==null;){te=j;var Ae=te.stateNode;if(te.tag===5&&Ae!==null&&(te=Ae,Z!==null&&(Ae=wn(j,Z),Ae!=null&&We.push(Va(j,Ae,te)))),Yt)break;j=j.return}0<We.length&&(xe=new Ue(xe,He,null,a,Se),Ee.push({event:xe,listeners:We}))}}if(!(i&7)){e:{if(xe=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",xe&&a!==At&&(He=a.relatedTarget||a.fromElement)&&(Hr(He)||He[Ii]))break e;if((Ue||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ue?(He=a.relatedTarget||a.toElement,Ue=re,He=He?Hr(He):null,He!==null&&(Yt=Si(He),He!==Yt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=re),Ue!==He)){if(We=Jh,Ae="onMouseLeave",Z="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(We=tp,Ae="onPointerLeave",Z="onPointerEnter",j="pointer"),Yt=Ue==null?xe:Cs(Ue),te=He==null?xe:Cs(He),xe=new We(Ae,j+"leave",Ue,a,Se),xe.target=Yt,xe.relatedTarget=te,Ae=null,Hr(Se)===re&&(We=new We(Z,j+"enter",He,a,Se),We.target=te,We.relatedTarget=Yt,Ae=We),Yt=Ae,Ue&&He)t:{for(We=Ue,Z=He,j=0,te=We;te;te=ws(te))j++;for(te=0,Ae=Z;Ae;Ae=ws(Ae))te++;for(;0<j-te;)We=ws(We),j--;for(;0<te-j;)Z=ws(Z),te--;for(;j--;){if(We===Z||Z!==null&&We===Z.alternate)break t;We=ws(We),Z=ws(Z)}We=null}else We=null;Ue!==null&&Rp(Ee,xe,Ue,We,!1),He!==null&&Yt!==null&&Rp(Ee,Yt,He,We,!0)}}e:{if(xe=re?Cs(re):window,Ue=xe.nodeName&&xe.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&xe.type==="file")var qe=j_;else if(op(xe))if(up)qe=$_;else{qe=q_;var Ze=X_}else(Ue=xe.nodeName)&&Ue.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(qe=Y_);if(qe&&(qe=qe(n,re))){lp(Ee,qe,a,Se);break e}Ze&&Ze(n,xe,re),n==="focusout"&&(Ze=xe._wrapperState)&&Ze.controlled&&xe.type==="number"&&Rt(xe,"number",xe.value)}switch(Ze=re?Cs(re):window,n){case"focusin":(op(Ze)||Ze.contentEditable==="true")&&(Ms=Ze,gc=re,Ba=null);break;case"focusout":Ba=gc=Ms=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,vp(Ee,a,Se);break;case"selectionchange":if(Q_)break;case"keydown":case"keyup":vp(Ee,a,Se)}var Qe;if(dc)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Es?sp(n,a)&&(it="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(np&&a.locale!=="ko"&&(Es||it!=="onCompositionStart"?it==="onCompositionEnd"&&Es&&(Qe=Zh()):(cr=Se,ac="value"in cr?cr.value:cr.textContent,Es=!0)),Ze=qo(re,it),0<Ze.length&&(it=new ep(it,n,null,a,Se),Ee.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=ap(a),Qe!==null&&(it.data=Qe)))),(Qe=z_?H_(n,a):V_(n,a))&&(re=qo(re,"onBeforeInput"),0<re.length&&(Se=new ep("onBeforeInput","beforeinput",null,a,Se),Ee.push({event:Se,listeners:re}),Se.data=Qe))}Ap(Ee,i)})}function Va(n,i,a){return{instance:n,listener:i,currentTarget:a}}function qo(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=wn(n,a),g!=null&&u.unshift(Va(n,g,d)),g=wn(n,i),g!=null&&u.push(Va(n,g,d))),n=n.return}return u}function ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rp(n,i,a,u,d){for(var g=i._reactName,T=[];a!==null&&a!==u;){var O=a,H=O.alternate,re=O.stateNode;if(H!==null&&H===u)break;O.tag===5&&re!==null&&(O=re,d?(H=wn(a,g),H!=null&&T.unshift(Va(a,H,O))):d||(H=wn(a,g),H!=null&&T.push(Va(a,H,O)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var nx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function bp(n){return(typeof n=="string"?n:""+n).replace(nx,`
`).replace(ix,"")}function Yo(n,i,a){if(i=bp(i),bp(n)!==i&&a)throw Error(t(425))}function $o(){}var Mc=null,Tc=null;function wc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(n){return Pp.resolve(null).then(n).catch(ax)}:Ac;function ax(n){setTimeout(function(){throw n})}function Cc(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),Da(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);Da(i)}function dr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Lp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var As=Math.random().toString(36).slice(2),Mi="__reactFiber$"+As,Ga="__reactProps$"+As,Ii="__reactContainer$"+As,Rc="__reactEvents$"+As,ox="__reactListeners$"+As,lx="__reactHandles$"+As;function Hr(n){var i=n[Mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ii]||a[Mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Lp(n);n!==null;){if(a=n[Mi])return a;n=Lp(n)}return i}n=a,a=n.parentNode}return null}function Wa(n){return n=n[Mi]||n[Ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ko(n){return n[Ga]||null}var bc=[],Rs=-1;function hr(n){return{current:n}}function Ft(n){0>Rs||(n.current=bc[Rs],bc[Rs]=null,Rs--)}function It(n,i){Rs++,bc[Rs]=n.current,n.current=i}var pr={},_n=hr(pr),Nn=hr(!1),Vr=pr;function bs(n,i){var a=n.type.contextTypes;if(!a)return pr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function In(n){return n=n.childContextTypes,n!=null}function Zo(){Ft(Nn),Ft(_n)}function Dp(n,i,a){if(_n.current!==pr)throw Error(t(168));It(_n,i),It(Nn,a)}function Np(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,me(n)||"Unknown",d));return ae({},a,u)}function Qo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Vr=_n.current,It(_n,n),It(Nn,Nn.current),!0}function Ip(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Np(n,i,Vr),u.__reactInternalMemoizedMergedChildContext=n,Ft(Nn),Ft(_n),It(_n,n)):Ft(Nn),It(Nn,a)}var Ui=null,Jo=!1,Pc=!1;function Up(n){Ui===null?Ui=[n]:Ui.push(n)}function ux(n){Jo=!0,Up(n)}function mr(){if(!Pc&&Ui!==null){Pc=!0;var n=0,i=Et;try{var a=Ui;for(Et=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ui=null,Jo=!1}catch(d){throw Ui!==null&&(Ui=Ui.slice(n+1)),Io(Me,mr),d}finally{Et=i,Pc=!1}}return null}var Ps=[],Ls=0,el=null,tl=0,$n=[],Kn=0,Gr=null,Oi=1,Fi="";function Wr(n,i){Ps[Ls++]=tl,Ps[Ls++]=el,el=n,tl=i}function Op(n,i,a){$n[Kn++]=Oi,$n[Kn++]=Fi,$n[Kn++]=Gr,Gr=n;var u=Oi;n=Fi;var d=32-at(u)-1;u&=~(1<<d),a+=1;var g=32-at(i)+d;if(30<g){var T=d-d%5;g=(u&(1<<T)-1).toString(32),u>>=T,d-=T,Oi=1<<32-at(i)+d|a<<d|u,Fi=g+n}else Oi=1<<g|a<<d|u,Fi=n}function Lc(n){n.return!==null&&(Wr(n,1),Op(n,1,0))}function Dc(n){for(;n===el;)el=Ps[--Ls],Ps[Ls]=null,tl=Ps[--Ls],Ps[Ls]=null;for(;n===Gr;)Gr=$n[--Kn],$n[Kn]=null,Fi=$n[--Kn],$n[Kn]=null,Oi=$n[--Kn],$n[Kn]=null}var Gn=null,Wn=null,zt=!1,li=null;function Fp(n,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function kp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=dr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Gr!==null?{id:Oi,overflow:Fi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Gn=n,Wn=null,!0):!1;default:return!1}}function Nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ic(n){if(zt){var i=Wn;if(i){var a=i;if(!kp(n,i)){if(Nc(n))throw Error(t(418));i=dr(a.nextSibling);var u=Gn;i&&kp(n,i)?Fp(u,a):(n.flags=n.flags&-4097|2,zt=!1,Gn=n)}}else{if(Nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Gn=n}}}function Bp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function nl(n){if(n!==Gn)return!1;if(!zt)return Bp(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!wc(n.type,n.memoizedProps)),i&&(i=Wn)){if(Nc(n))throw zp(),Error(t(418));for(;i;)Fp(n,i),i=dr(i.nextSibling)}if(Bp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Wn=dr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Wn=null}}else Wn=Gn?dr(n.stateNode.nextSibling):null;return!0}function zp(){for(var n=Wn;n;)n=dr(n.nextSibling)}function Ds(){Wn=Gn=null,zt=!1}function Uc(n){li===null?li=[n]:li.push(n)}var cx=C.ReactCurrentBatchConfig;function ja(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var O=d.refs;T===null?delete O[g]:O[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function il(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Hp(n){var i=n._init;return i(n._payload)}function Vp(n){function i(Z,j){if(n){var te=Z.deletions;te===null?(Z.deletions=[j],Z.flags|=16):te.push(j)}}function a(Z,j){if(!n)return null;for(;j!==null;)i(Z,j),j=j.sibling;return null}function u(Z,j){for(Z=new Map;j!==null;)j.key!==null?Z.set(j.key,j):Z.set(j.index,j),j=j.sibling;return Z}function d(Z,j){return Z=Mr(Z,j),Z.index=0,Z.sibling=null,Z}function g(Z,j,te){return Z.index=te,n?(te=Z.alternate,te!==null?(te=te.index,te<j?(Z.flags|=2,j):te):(Z.flags|=2,j)):(Z.flags|=1048576,j)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function O(Z,j,te,Ae){return j===null||j.tag!==6?(j=Cf(te,Z.mode,Ae),j.return=Z,j):(j=d(j,te),j.return=Z,j)}function H(Z,j,te,Ae){var qe=te.type;return qe===L?Se(Z,j,te.props.children,Ae,te.key):j!==null&&(j.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===oe&&Hp(qe)===j.type)?(Ae=d(j,te.props),Ae.ref=ja(Z,j,te),Ae.return=Z,Ae):(Ae=Cl(te.type,te.key,te.props,null,Z.mode,Ae),Ae.ref=ja(Z,j,te),Ae.return=Z,Ae)}function re(Z,j,te,Ae){return j===null||j.tag!==4||j.stateNode.containerInfo!==te.containerInfo||j.stateNode.implementation!==te.implementation?(j=Rf(te,Z.mode,Ae),j.return=Z,j):(j=d(j,te.children||[]),j.return=Z,j)}function Se(Z,j,te,Ae,qe){return j===null||j.tag!==7?(j=Qr(te,Z.mode,Ae,qe),j.return=Z,j):(j=d(j,te),j.return=Z,j)}function Ee(Z,j,te){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Cf(""+j,Z.mode,te),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case F:return te=Cl(j.type,j.key,j.props,null,Z.mode,te),te.ref=ja(Z,null,j),te.return=Z,te;case N:return j=Rf(j,Z.mode,te),j.return=Z,j;case oe:var Ae=j._init;return Ee(Z,Ae(j._payload),te)}if(je(j)||le(j))return j=Qr(j,Z.mode,te,null),j.return=Z,j;il(Z,j)}return null}function xe(Z,j,te,Ae){var qe=j!==null?j.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return qe!==null?null:O(Z,j,""+te,Ae);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case F:return te.key===qe?H(Z,j,te,Ae):null;case N:return te.key===qe?re(Z,j,te,Ae):null;case oe:return qe=te._init,xe(Z,j,qe(te._payload),Ae)}if(je(te)||le(te))return qe!==null?null:Se(Z,j,te,Ae,null);il(Z,te)}return null}function Ue(Z,j,te,Ae,qe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Z=Z.get(te)||null,O(j,Z,""+Ae,qe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case F:return Z=Z.get(Ae.key===null?te:Ae.key)||null,H(j,Z,Ae,qe);case N:return Z=Z.get(Ae.key===null?te:Ae.key)||null,re(j,Z,Ae,qe);case oe:var Ze=Ae._init;return Ue(Z,j,te,Ze(Ae._payload),qe)}if(je(Ae)||le(Ae))return Z=Z.get(te)||null,Se(j,Z,Ae,qe,null);il(j,Ae)}return null}function He(Z,j,te,Ae){for(var qe=null,Ze=null,Qe=j,it=j=0,un=null;Qe!==null&&it<te.length;it++){Qe.index>it?(un=Qe,Qe=null):un=Qe.sibling;var Tt=xe(Z,Qe,te[it],Ae);if(Tt===null){Qe===null&&(Qe=un);break}n&&Qe&&Tt.alternate===null&&i(Z,Qe),j=g(Tt,j,it),Ze===null?qe=Tt:Ze.sibling=Tt,Ze=Tt,Qe=un}if(it===te.length)return a(Z,Qe),zt&&Wr(Z,it),qe;if(Qe===null){for(;it<te.length;it++)Qe=Ee(Z,te[it],Ae),Qe!==null&&(j=g(Qe,j,it),Ze===null?qe=Qe:Ze.sibling=Qe,Ze=Qe);return zt&&Wr(Z,it),qe}for(Qe=u(Z,Qe);it<te.length;it++)un=Ue(Qe,Z,it,te[it],Ae),un!==null&&(n&&un.alternate!==null&&Qe.delete(un.key===null?it:un.key),j=g(un,j,it),Ze===null?qe=un:Ze.sibling=un,Ze=un);return n&&Qe.forEach(function(Tr){return i(Z,Tr)}),zt&&Wr(Z,it),qe}function We(Z,j,te,Ae){var qe=le(te);if(typeof qe!="function")throw Error(t(150));if(te=qe.call(te),te==null)throw Error(t(151));for(var Ze=qe=null,Qe=j,it=j=0,un=null,Tt=te.next();Qe!==null&&!Tt.done;it++,Tt=te.next()){Qe.index>it?(un=Qe,Qe=null):un=Qe.sibling;var Tr=xe(Z,Qe,Tt.value,Ae);if(Tr===null){Qe===null&&(Qe=un);break}n&&Qe&&Tr.alternate===null&&i(Z,Qe),j=g(Tr,j,it),Ze===null?qe=Tr:Ze.sibling=Tr,Ze=Tr,Qe=un}if(Tt.done)return a(Z,Qe),zt&&Wr(Z,it),qe;if(Qe===null){for(;!Tt.done;it++,Tt=te.next())Tt=Ee(Z,Tt.value,Ae),Tt!==null&&(j=g(Tt,j,it),Ze===null?qe=Tt:Ze.sibling=Tt,Ze=Tt);return zt&&Wr(Z,it),qe}for(Qe=u(Z,Qe);!Tt.done;it++,Tt=te.next())Tt=Ue(Qe,Z,it,Tt.value,Ae),Tt!==null&&(n&&Tt.alternate!==null&&Qe.delete(Tt.key===null?it:Tt.key),j=g(Tt,j,it),Ze===null?qe=Tt:Ze.sibling=Tt,Ze=Tt);return n&&Qe.forEach(function(Vx){return i(Z,Vx)}),zt&&Wr(Z,it),qe}function Yt(Z,j,te,Ae){if(typeof te=="object"&&te!==null&&te.type===L&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case F:e:{for(var qe=te.key,Ze=j;Ze!==null;){if(Ze.key===qe){if(qe=te.type,qe===L){if(Ze.tag===7){a(Z,Ze.sibling),j=d(Ze,te.props.children),j.return=Z,Z=j;break e}}else if(Ze.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===oe&&Hp(qe)===Ze.type){a(Z,Ze.sibling),j=d(Ze,te.props),j.ref=ja(Z,Ze,te),j.return=Z,Z=j;break e}a(Z,Ze);break}else i(Z,Ze);Ze=Ze.sibling}te.type===L?(j=Qr(te.props.children,Z.mode,Ae,te.key),j.return=Z,Z=j):(Ae=Cl(te.type,te.key,te.props,null,Z.mode,Ae),Ae.ref=ja(Z,j,te),Ae.return=Z,Z=Ae)}return T(Z);case N:e:{for(Ze=te.key;j!==null;){if(j.key===Ze)if(j.tag===4&&j.stateNode.containerInfo===te.containerInfo&&j.stateNode.implementation===te.implementation){a(Z,j.sibling),j=d(j,te.children||[]),j.return=Z,Z=j;break e}else{a(Z,j);break}else i(Z,j);j=j.sibling}j=Rf(te,Z.mode,Ae),j.return=Z,Z=j}return T(Z);case oe:return Ze=te._init,Yt(Z,j,Ze(te._payload),Ae)}if(je(te))return He(Z,j,te,Ae);if(le(te))return We(Z,j,te,Ae);il(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,j!==null&&j.tag===6?(a(Z,j.sibling),j=d(j,te),j.return=Z,Z=j):(a(Z,j),j=Cf(te,Z.mode,Ae),j.return=Z,Z=j),T(Z)):a(Z,j)}return Yt}var Ns=Vp(!0),Gp=Vp(!1),rl=hr(null),sl=null,Is=null,Oc=null;function Fc(){Oc=Is=sl=null}function kc(n){var i=rl.current;Ft(rl),n._currentValue=i}function Bc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Us(n,i){sl=n,Oc=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Un=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(Oc!==n)if(n={context:n,memoizedValue:i,next:null},Is===null){if(sl===null)throw Error(t(308));Is=n,sl.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return i}var jr=null;function zc(n){jr===null?jr=[n]:jr.push(n)}function Wp(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,zc(i)):(a.next=d.next,d.next=a),i.interleaved=a,ki(n,u)}function ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var gr=!1;function Hc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function vr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Mt&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,ki(n,a)}return d=u.interleaved,d===null?(i.next=i,zc(u)):(i.next=d.next,d.next=i),u.interleaved=i,ki(n,a)}function al(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,an(n,a)}}function Xp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ol(n,i,a,u){var d=n.updateQueue;gr=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var H=O,re=H.next;H.next=null,T===null?g=re:T.next=re,T=H;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,O=Se.lastBaseUpdate,O!==T&&(O===null?Se.firstBaseUpdate=re:O.next=re,Se.lastBaseUpdate=H))}if(g!==null){var Ee=d.baseState;T=0,Se=re=H=null,O=g;do{var xe=O.lane,Ue=O.eventTime;if((u&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Ue,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var He=n,We=O;switch(xe=i,Ue=a,We.tag){case 1:if(He=We.payload,typeof He=="function"){Ee=He.call(Ue,Ee,xe);break e}Ee=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,xe=typeof He=="function"?He.call(Ue,Ee,xe):He,xe==null)break e;Ee=ae({},Ee,xe);break e;case 2:gr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[O]:xe.push(O))}else Ue={eventTime:Ue,lane:xe,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Se===null?(re=Se=Ue,H=Ee):Se=Se.next=Ue,T|=xe;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;xe=O,O=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(Se===null&&(H=Ee),d.baseState=H,d.firstBaseUpdate=re,d.lastBaseUpdate=Se,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Yr|=T,n.lanes=T,n.memoizedState=Ee}}function qp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Xa={},Ti=hr(Xa),qa=hr(Xa),Ya=hr(Xa);function Xr(n){if(n===Xa)throw Error(t(174));return n}function Vc(n,i){switch(It(Ya,i),It(qa,n),It(Ti,Xa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Xe(i,n)}Ft(Ti),It(Ti,i)}function Os(){Ft(Ti),Ft(qa),Ft(Ya)}function Yp(n){Xr(Ya.current);var i=Xr(Ti.current),a=Xe(i,n.type);i!==a&&(It(qa,n),It(Ti,a))}function Gc(n){qa.current===n&&(Ft(Ti),Ft(qa))}var Vt=hr(0);function ll(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wc=[];function jc(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var ul=C.ReactCurrentDispatcher,Xc=C.ReactCurrentBatchConfig,qr=0,Gt=null,en=null,on=null,cl=!1,$a=!1,Ka=0,fx=0;function xn(){throw Error(t(321))}function qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!oi(n[a],i[a]))return!1;return!0}function Yc(n,i,a,u,d,g){if(qr=g,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ul.current=n===null||n.memoizedState===null?mx:gx,n=a(u,d),$a){g=0;do{if($a=!1,Ka=0,25<=g)throw Error(t(301));g+=1,on=en=null,i.updateQueue=null,ul.current=vx,n=a(u,d)}while($a)}if(ul.current=hl,i=en!==null&&en.next!==null,qr=0,on=en=Gt=null,cl=!1,i)throw Error(t(300));return n}function $c(){var n=Ka!==0;return Ka=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Gt.memoizedState=on=n:on=on.next=n,on}function Qn(){if(en===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=on===null?Gt.memoizedState:on.next;if(i!==null)on=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},on===null?Gt.memoizedState=on=n:on=on.next=n}return on}function Za(n,i){return typeof i=="function"?i(n):i}function Kc(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=en,d=u.baseQueue,g=a.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}u.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,u=u.baseState;var O=T=null,H=null,re=g;do{var Se=re.lane;if((qr&Se)===Se)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var Ee={lane:Se,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(O=H=Ee,T=u):H=H.next=Ee,Gt.lanes|=Se,Yr|=Se}re=re.next}while(re!==null&&re!==g);H===null?T=u:H.next=O,oi(u,i.memoizedState)||(Un=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=H,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Gt.lanes|=g,Yr|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Zc(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do g=n(g,T.action),T=T.next;while(T!==d);oi(g,i.memoizedState)||(Un=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function $p(){}function Kp(n,i){var a=Gt,u=Qn(),d=i(),g=!oi(u.memoizedState,d);if(g&&(u.memoizedState=d,Un=!0),u=u.queue,Qc(Jp.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,Qa(9,Qp.bind(null,a,u,d,i),void 0,null),ln===null)throw Error(t(349));qr&30||Zp(a,i,d)}return d}function Zp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Qp(n,i,a,u){i.value=a,i.getSnapshot=u,em(i)&&tm(n)}function Jp(n,i,a){return a(function(){em(i)&&tm(n)})}function em(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!oi(n,a)}catch{return!0}}function tm(n){var i=ki(n,1);i!==null&&di(i,n,1,-1)}function nm(n){var i=wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},i.queue=n,n=n.dispatch=px.bind(null,Gt,n),[i.memoizedState,n]}function Qa(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function im(){return Qn().memoizedState}function fl(n,i,a,u){var d=wi();Gt.flags|=n,d.memoizedState=Qa(1|i,a,void 0,u===void 0?null:u)}function dl(n,i,a,u){var d=Qn();u=u===void 0?null:u;var g=void 0;if(en!==null){var T=en.memoizedState;if(g=T.destroy,u!==null&&qc(u,T.deps)){d.memoizedState=Qa(i,a,g,u);return}}Gt.flags|=n,d.memoizedState=Qa(1|i,a,g,u)}function rm(n,i){return fl(8390656,8,n,i)}function Qc(n,i){return dl(2048,8,n,i)}function sm(n,i){return dl(4,2,n,i)}function am(n,i){return dl(4,4,n,i)}function om(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function lm(n,i,a){return a=a!=null?a.concat([n]):null,dl(4,4,om.bind(null,i,n),a)}function Jc(){}function um(n,i){var a=Qn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&qc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function cm(n,i){var a=Qn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&qc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function fm(n,i,a){return qr&21?(oi(a,i)||(a=Dt(),Gt.lanes|=a,Yr|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=a)}function dx(n,i){var a=Et;Et=a!==0&&4>a?a:4,n(!0);var u=Xc.transition;Xc.transition={};try{n(!1),i()}finally{Et=a,Xc.transition=u}}function dm(){return Qn().memoizedState}function hx(n,i,a){var u=Sr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},hm(n))pm(i,a);else if(a=Wp(n,i,a,u),a!==null){var d=Rn();di(a,n,u,d),mm(a,i,u)}}function px(n,i,a){var u=Sr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(hm(n))pm(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,O=g(T,a);if(d.hasEagerState=!0,d.eagerState=O,oi(O,T)){var H=i.interleaved;H===null?(d.next=d,zc(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}a=Wp(n,i,d,u),a!==null&&(d=Rn(),di(a,n,u,d),mm(a,i,u))}}function hm(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function pm(n,i){$a=cl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function mm(n,i,a){if(a&4194240){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,an(n,a)}}var hl={readContext:Zn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},mx={readContext:Zn,useCallback:function(n,i){return wi().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:rm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,fl(4194308,4,om.bind(null,i,n),a)},useLayoutEffect:function(n,i){return fl(4194308,4,n,i)},useInsertionEffect:function(n,i){return fl(4,2,n,i)},useMemo:function(n,i){var a=wi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=wi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=hx.bind(null,Gt,n),[u.memoizedState,n]},useRef:function(n){var i=wi();return n={current:n},i.memoizedState=n},useState:nm,useDebugValue:Jc,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=nm(!1),i=n[0];return n=dx.bind(null,n[1]),wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Gt,d=wi();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),ln===null)throw Error(t(349));qr&30||Zp(u,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,rm(Jp.bind(null,u,g,n),[n]),u.flags|=2048,Qa(9,Qp.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=wi(),i=ln.identifierPrefix;if(zt){var a=Fi,u=Oi;a=(u&~(1<<32-at(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ka++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=fx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},gx={readContext:Zn,useCallback:um,useContext:Zn,useEffect:Qc,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:am,useMemo:cm,useReducer:Kc,useRef:im,useState:function(){return Kc(Za)},useDebugValue:Jc,useDeferredValue:function(n){var i=Qn();return fm(i,en.memoizedState,n)},useTransition:function(){var n=Kc(Za)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:$p,useSyncExternalStore:Kp,useId:dm,unstable_isNewReconciler:!1},vx={readContext:Zn,useCallback:um,useContext:Zn,useEffect:Qc,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:am,useMemo:cm,useReducer:Zc,useRef:im,useState:function(){return Zc(Za)},useDebugValue:Jc,useDeferredValue:function(n){var i=Qn();return en===null?i.memoizedState=n:fm(i,en.memoizedState,n)},useTransition:function(){var n=Zc(Za)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:$p,useSyncExternalStore:Kp,useId:dm,unstable_isNewReconciler:!1};function ui(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ef(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var pl={isMounted:function(n){return(n=n._reactInternals)?Si(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Rn(),d=Sr(n),g=Bi(u,d);g.payload=i,a!=null&&(g.callback=a),i=vr(n,g,d),i!==null&&(di(i,n,d,u),al(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Rn(),d=Sr(n),g=Bi(u,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=vr(n,g,d),i!==null&&(di(i,n,d,u),al(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Rn(),u=Sr(n),d=Bi(a,u);d.tag=2,i!=null&&(d.callback=i),i=vr(n,d,u),i!==null&&(di(i,n,u,a),al(i,n,u))}};function gm(n,i,a,u,d,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,T):i.prototype&&i.prototype.isPureReactComponent?!ka(a,u)||!ka(d,g):!0}function vm(n,i,a){var u=!1,d=pr,g=i.contextType;return typeof g=="object"&&g!==null?g=Zn(g):(d=In(i)?Vr:_n.current,u=i.contextTypes,g=(u=u!=null)?bs(n,d):pr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function _m(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&pl.enqueueReplaceState(i,i.state,null)}function tf(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Hc(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Zn(g):(g=In(i)?Vr:_n.current,d.context=bs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(ef(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&pl.enqueueReplaceState(d,d.state,null),ol(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,i){try{var a="",u=i;do a+=de(u),u=u.return;while(u);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function nf(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function rf(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function xm(n,i,a){a=Bi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Sl||(Sl=!0,xf=u),rf(n,i)},a}function ym(n,i,a){a=Bi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){rf(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){rf(n,i),typeof u!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Sm(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new _x;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=Dx.bind(null,n,i,a),i.then(n,n))}function Em(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mm(n,i,a,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Bi(-1,1),i.tag=2,vr(a,i,1))),a.lanes|=1),n)}var xx=C.ReactCurrentOwner,Un=!1;function Cn(n,i,a,u){i.child=n===null?Gp(i,null,a,u):Ns(i,n.child,a,u)}function Tm(n,i,a,u,d){a=a.render;var g=i.ref;return Us(i,d),u=Yc(n,i,a,u,g,d),a=$c(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,zi(n,i,d)):(zt&&a&&Lc(i),i.flags|=1,Cn(n,i,u,d),i.child)}function wm(n,i,a,u,d){if(n===null){var g=a.type;return typeof g=="function"&&!Af(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Am(n,i,g,u,d)):(n=Cl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!(n.lanes&d)){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:ka,a(T,u)&&n.ref===i.ref)return zi(n,i,d)}return i.flags|=1,n=Mr(g,u),n.ref=i.ref,n.return=i,i.child=n}function Am(n,i,a,u,d){if(n!==null){var g=n.memoizedProps;if(ka(g,u)&&n.ref===i.ref)if(Un=!1,i.pendingProps=u=g,(n.lanes&d)!==0)n.flags&131072&&(Un=!0);else return i.lanes=n.lanes,zi(n,i,d)}return sf(n,i,a,u,d)}function Cm(n,i,a){var u=i.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Bs,jn),jn|=a;else{if(!(a&1073741824))return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Bs,jn),jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,It(Bs,jn),jn|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,It(Bs,jn),jn|=u;return Cn(n,i,d,a),i.child}function Rm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function sf(n,i,a,u,d){var g=In(a)?Vr:_n.current;return g=bs(i,g),Us(i,d),a=Yc(n,i,a,u,g,d),u=$c(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,zi(n,i,d)):(zt&&u&&Lc(i),i.flags|=1,Cn(n,i,a,d),i.child)}function bm(n,i,a,u,d){if(In(a)){var g=!0;Qo(i)}else g=!1;if(Us(i,d),i.stateNode===null)gl(n,i),vm(i,a,u),tf(i,a,u,d),u=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var H=T.context,re=a.contextType;typeof re=="object"&&re!==null?re=Zn(re):(re=In(a)?Vr:_n.current,re=bs(i,re));var Se=a.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==u||H!==re)&&_m(i,T,u,re),gr=!1;var xe=i.memoizedState;T.state=xe,ol(i,u,T,d),H=i.memoizedState,O!==u||xe!==H||Nn.current||gr?(typeof Se=="function"&&(ef(i,a,Se,u),H=i.memoizedState),(O=gr||gm(i,a,O,u,xe,H,re))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),T.props=u,T.state=H,T.context=re,u=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,jp(n,i),O=i.memoizedProps,re=i.type===i.elementType?O:ui(i.type,O),T.props=re,Ee=i.pendingProps,xe=T.context,H=a.contextType,typeof H=="object"&&H!==null?H=Zn(H):(H=In(a)?Vr:_n.current,H=bs(i,H));var Ue=a.getDerivedStateFromProps;(Se=typeof Ue=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Ee||xe!==H)&&_m(i,T,u,H),gr=!1,xe=i.memoizedState,T.state=xe,ol(i,u,T,d);var He=i.memoizedState;O!==Ee||xe!==He||Nn.current||gr?(typeof Ue=="function"&&(ef(i,a,Ue,u),He=i.memoizedState),(re=gr||gm(i,a,re,u,xe,He,H)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,He,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,He,H)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),T.props=u,T.state=He,T.context=H,u=re):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),u=!1)}return af(n,i,a,u,g,d)}function af(n,i,a,u,d,g){Rm(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return d&&Ip(i,a,!1),zi(n,i,g);u=i.stateNode,xx.current=i;var O=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=Ns(i,n.child,null,g),i.child=Ns(i,null,O,g)):Cn(n,i,O,g),i.memoizedState=u.state,d&&Ip(i,a,!0),i.child}function Pm(n){var i=n.stateNode;i.pendingContext?Dp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Dp(n,i.context,!1),Vc(n,i.containerInfo)}function Lm(n,i,a,u,d){return Ds(),Uc(d),i.flags|=256,Cn(n,i,a,u),i.child}var of={dehydrated:null,treeContext:null,retryLane:0};function lf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dm(n,i,a){var u=i.pendingProps,d=Vt.current,g=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(d&2)!==0),O?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(Vt,d&1),n===null)return Ic(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(T=u.children,n=u.fallback,g?(u=i.mode,g=i.child,T={mode:"hidden",children:T},!(u&1)&&g!==null?(g.childLanes=0,g.pendingProps=T):g=Rl(T,u,0,null),n=Qr(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=lf(a),i.memoizedState=of,n):uf(i,T));if(d=n.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return yx(n,i,T,u,O,d,a);if(g){g=u.fallback,T=i.mode,d=n.child,O=d.sibling;var H={mode:"hidden",children:u.children};return!(T&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=Mr(d,H),u.subtreeFlags=d.subtreeFlags&14680064),O!==null?g=Mr(O,g):(g=Qr(g,T,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,T=n.child.memoizedState,T=T===null?lf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~a,i.memoizedState=of,u}return g=n.child,n=g.sibling,u=Mr(g,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function uf(n,i){return i=Rl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ml(n,i,a,u){return u!==null&&Uc(u),Ns(i,n.child,null,a),n=uf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function yx(n,i,a,u,d,g,T){if(a)return i.flags&256?(i.flags&=-257,u=nf(Error(t(422))),ml(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,d=i.mode,u=Rl({mode:"visible",children:u.children},d,0,null),g=Qr(g,d,T,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,i.mode&1&&Ns(i,n.child,null,T),i.child.memoizedState=lf(T),i.memoizedState=of,g);if(!(i.mode&1))return ml(n,i,T,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var O=u.dgst;return u=O,g=Error(t(419)),u=nf(g,u,void 0),ml(n,i,T,u)}if(O=(T&n.childLanes)!==0,Un||O){if(u=ln,u!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|T)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,ki(n,d),di(u,n,d,-1))}return wf(),u=nf(Error(t(421))),ml(n,i,T,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Nx.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Wn=dr(d.nextSibling),Gn=i,zt=!0,li=null,n!==null&&($n[Kn++]=Oi,$n[Kn++]=Fi,$n[Kn++]=Gr,Oi=n.id,Fi=n.overflow,Gr=i),i=uf(i,u.children),i.flags|=4096,i)}function Nm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Bc(n.return,i,a)}function cf(n,i,a,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=d)}function Im(n,i,a){var u=i.pendingProps,d=u.revealOrder,g=u.tail;if(Cn(n,i,u.children,a),u=Vt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Nm(n,a,i);else if(n.tag===19)Nm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(Vt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ll(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),cf(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ll(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}cf(i,!0,a,null,g);break;case"together":cf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function gl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yr|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Mr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Mr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Sx(n,i,a){switch(i.tag){case 3:Pm(i),Ds();break;case 5:Yp(i);break;case 1:In(i.type)&&Qo(i);break;case 4:Vc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(rl,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Vt,Vt.current&1),i.flags|=128,null):a&i.child.childLanes?Dm(n,i,a):(It(Vt,Vt.current&1),n=zi(n,i,a),n!==null?n.sibling:null);It(Vt,Vt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,n.flags&128){if(u)return Im(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Vt,Vt.current),u)break;return null;case 22:case 23:return i.lanes=0,Cm(n,i,a)}return zi(n,i,a)}var Um,ff,Om,Fm;Um=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ff=function(){},Om=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Xr(Ti.current);var g=null;switch(a){case"input":d=G(n,d),u=G(n,u),g=[];break;case"select":d=ae({},d,{value:void 0}),u=ae({},u,{value:void 0}),g=[];break;case"textarea":d=A(n,d),u=A(n,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=$o)}ht(a,u);var T;a=null;for(re in d)if(!u.hasOwnProperty(re)&&d.hasOwnProperty(re)&&d[re]!=null)if(re==="style"){var O=d[re];for(T in O)O.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?g||(g=[]):(g=g||[]).push(re,null));for(re in u){var H=u[re];if(O=d!=null?d[re]:void 0,u.hasOwnProperty(re)&&H!==O&&(H!=null||O!=null))if(re==="style")if(O){for(T in O)!O.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in H)H.hasOwnProperty(T)&&O[T]!==H[T]&&(a||(a={}),a[T]=H[T])}else a||(g||(g=[]),g.push(re,a)),a=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,O=O?O.__html:void 0,H!=null&&O!==H&&(g=g||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&Ot("scroll",n),g||O===H||(g=[])):(g=g||[]).push(re,H))}a&&(g=g||[]).push("style",a);var re=g;(i.updateQueue=re)&&(i.flags|=4)}},Fm=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ja(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function yn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Ex(n,i,a){var u=i.pendingProps;switch(Dc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return In(i.type)&&Zo(),yn(i),null;case 3:return u=i.stateNode,Os(),Ft(Nn),Ft(_n),jc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(nl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,li!==null&&(Ef(li),li=null))),ff(n,i),yn(i),null;case 5:Gc(i);var d=Xr(Ya.current);if(a=i.type,n!==null&&i.stateNode!=null)Om(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return yn(i),null}if(n=Xr(Ti.current),nl(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[Mi]=i,u[Ga]=g,n=(i.mode&1)!==0,a){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<za.length;d++)Ot(za[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Tn(u,g),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ot("invalid",u);break;case"textarea":ne(u,g),Ot("invalid",u)}ht(a,g),d=null;for(var T in g)if(g.hasOwnProperty(T)){var O=g[T];T==="children"?typeof O=="string"?u.textContent!==O&&(g.suppressHydrationWarning!==!0&&Yo(u.textContent,O,n),d=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&Yo(u.textContent,O,n),d=["children",""+O]):o.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&Ot("scroll",u)}switch(a){case"input":ct(u),Ye(u,g,!0);break;case"textarea":ct(u),ye(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=$o)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[Mi]=i,n[Ga]=u,Um(n,i,!1,!1),i.stateNode=n;e:{switch(T=rt(a,u),a){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<za.length;d++)Ot(za[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":Tn(n,u),d=G(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ae({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":ne(n,u),d=A(n,u),Ot("invalid",n);break;default:d=u}ht(a,d),O=d;for(g in O)if(O.hasOwnProperty(g)){var H=O[g];g==="style"?et(n,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Oe(n,H)):g==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&ft(n,H):typeof H=="number"&&ft(n,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?H!=null&&g==="onScroll"&&Ot("scroll",n):H!=null&&b(n,g,H,T))}switch(a){case"input":ct(n),Ye(n,u,!1);break;case"textarea":ct(n),ye(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ve(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?U(n,!!u.multiple,g,!1):u.defaultValue!=null&&U(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=$o)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(n&&i.stateNode!=null)Fm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Xr(Ya.current),Xr(Ti.current),nl(i)){if(u=i.stateNode,a=i.memoizedProps,u[Mi]=i,(g=u.nodeValue!==a)&&(n=Gn,n!==null))switch(n.tag){case 3:Yo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yo(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Mi]=i,i.stateNode=u}return yn(i),null;case 13:if(Ft(Vt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Wn!==null&&i.mode&1&&!(i.flags&128))zp(),Ds(),i.flags|=98560,g=!1;else if(g=nl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Mi]=i}else Ds(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;yn(i),g=!1}else li!==null&&(Ef(li),li=null),g=!0;if(!g)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Vt.current&1?tn===0&&(tn=3):wf())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Os(),ff(n,i),n===null&&Ha(i.stateNode.containerInfo),yn(i),null;case 10:return kc(i.type._context),yn(i),null;case 17:return In(i.type)&&Zo(),yn(i),null;case 19:if(Ft(Vt),g=i.memoizedState,g===null)return yn(i),null;if(u=(i.flags&128)!==0,T=g.rendering,T===null)if(u)Ja(g,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(T=ll(n),T!==null){for(i.flags|=128,Ja(g,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Vt,Vt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Q()>zs&&(i.flags|=128,u=!0,Ja(g,!1),i.lanes=4194304)}else{if(!u)if(n=ll(T),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ja(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!zt)return yn(i),null}else 2*Q()-g.renderingStartTime>zs&&a!==1073741824&&(i.flags|=128,u=!0,Ja(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(a=g.last,a!==null?a.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Q(),i.sibling=null,a=Vt.current,It(Vt,u?a&1|2:a&1),i):(yn(i),null);case 22:case 23:return Tf(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?jn&1073741824&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Mx(n,i){switch(Dc(i),i.tag){case 1:return In(i.type)&&Zo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Os(),Ft(Nn),Ft(_n),jc(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Gc(i),null;case 13:if(Ft(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ds()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Vt),null;case 4:return Os(),null;case 10:return kc(i.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var vl=!1,Sn=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(n,i,u)}else a.current=null}function df(n,i,a){try{a()}catch(u){Xt(n,i,u)}}var km=!1;function wx(n,i){if(Mc=Fo,n=gp(),mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,O=-1,H=-1,re=0,Se=0,Ee=n,xe=null;t:for(;;){for(var Ue;Ee!==a||d!==0&&Ee.nodeType!==3||(O=T+d),Ee!==g||u!==0&&Ee.nodeType!==3||(H=T+u),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Ue=Ee.firstChild)!==null;)xe=Ee,Ee=Ue;for(;;){if(Ee===n)break t;if(xe===a&&++re===d&&(O=T),xe===g&&++Se===u&&(H=T),(Ue=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=Ue}a=O===-1||H===-1?null:{start:O,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tc={focusedElem:n,selectionRange:a},Fo=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var He=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,Yt=He.memoizedState,Z=i.stateNode,j=Z.getSnapshotBeforeUpdate(i.elementType===i.type?We:ui(i.type,We),Yt);Z.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Xt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return He=km,km=!1,He}function eo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&df(i,a,g)}d=d.next}while(d!==u)}}function _l(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function hf(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Bm(n){var i=n.alternate;i!==null&&(n.alternate=null,Bm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[Ga],delete i[Rc],delete i[ox],delete i[lx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zm(n){return n.tag===5||n.tag===3||n.tag===4}function Hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pf(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$o));else if(u!==4&&(n=n.child,n!==null))for(pf(n,i,a),n=n.sibling;n!==null;)pf(n,i,a),n=n.sibling}function mf(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(mf(n,i,a),n=n.sibling;n!==null;)mf(n,i,a),n=n.sibling}var pn=null,ci=!1;function _r(n,i,a){for(a=a.child;a!==null;)Vm(n,i,a),a=a.sibling}function Vm(n,i,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 5:Sn||ks(a,i);case 6:var u=pn,d=ci;pn=null,_r(n,i,a),pn=u,ci=d,pn!==null&&(ci?(n=pn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):pn.removeChild(a.stateNode));break;case 18:pn!==null&&(ci?(n=pn,a=a.stateNode,n.nodeType===8?Cc(n.parentNode,a):n.nodeType===1&&Cc(n,a),Da(n)):Cc(pn,a.stateNode));break;case 4:u=pn,d=ci,pn=a.stateNode.containerInfo,ci=!0,_r(n,i,a),pn=u,ci=d;break;case 0:case 11:case 14:case 15:if(!Sn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,T=g.destroy;g=g.tag,T!==void 0&&(g&2||g&4)&&df(a,i,T),d=d.next}while(d!==u)}_r(n,i,a);break;case 1:if(!Sn&&(ks(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(O){Xt(a,i,O)}_r(n,i,a);break;case 21:_r(n,i,a);break;case 22:a.mode&1?(Sn=(u=Sn)||a.memoizedState!==null,_r(n,i,a),Sn=u):_r(n,i,a);break;default:_r(n,i,a)}}function Gm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Tx),i.forEach(function(u){var d=Ix.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function fi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var g=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:pn=O.stateNode,ci=!1;break e;case 3:pn=O.stateNode.containerInfo,ci=!0;break e;case 4:pn=O.stateNode.containerInfo,ci=!0;break e}O=O.return}if(pn===null)throw Error(t(160));Vm(g,T,d),pn=null,ci=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(re){Xt(d,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wm(i,n),i=i.sibling}function Wm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(i,n),Ai(n),u&4){try{eo(3,n,n.return),_l(3,n)}catch(We){Xt(n,n.return,We)}try{eo(5,n,n.return)}catch(We){Xt(n,n.return,We)}}break;case 1:fi(i,n),Ai(n),u&512&&a!==null&&ks(a,a.return);break;case 5:if(fi(i,n),Ai(n),u&512&&a!==null&&ks(a,a.return),n.flags&32){var d=n.stateNode;try{ft(d,"")}catch(We){Xt(n,n.return,We)}}if(u&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,T=a!==null?a.memoizedProps:g,O=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&mt(d,g),rt(O,T);var re=rt(O,g);for(T=0;T<H.length;T+=2){var Se=H[T],Ee=H[T+1];Se==="style"?et(d,Ee):Se==="dangerouslySetInnerHTML"?Oe(d,Ee):Se==="children"?ft(d,Ee):b(d,Se,Ee,re)}switch(O){case"input":dt(d,g);break;case"textarea":ge(d,g);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Ue=g.value;Ue!=null?U(d,!!g.multiple,Ue,!1):xe!==!!g.multiple&&(g.defaultValue!=null?U(d,!!g.multiple,g.defaultValue,!0):U(d,!!g.multiple,g.multiple?[]:"",!1))}d[Ga]=g}catch(We){Xt(n,n.return,We)}}break;case 6:if(fi(i,n),Ai(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(We){Xt(n,n.return,We)}}break;case 3:if(fi(i,n),Ai(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Da(i.containerInfo)}catch(We){Xt(n,n.return,We)}break;case 4:fi(i,n),Ai(n);break;case 13:fi(i,n),Ai(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(_f=Q())),u&4&&Gm(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(Sn=(re=Sn)||Se,fi(i,n),Sn=re):fi(i,n),Ai(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!Se&&n.mode&1)for(Fe=n,Se=n.child;Se!==null;){for(Ee=Fe=Se;Fe!==null;){switch(xe=Fe,Ue=xe.child,xe.tag){case 0:case 11:case 14:case 15:eo(4,xe,xe.return);break;case 1:ks(xe,xe.return);var He=xe.stateNode;if(typeof He.componentWillUnmount=="function"){u=xe,a=xe.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(We){Xt(u,a,We)}}break;case 5:ks(xe,xe.return);break;case 22:if(xe.memoizedState!==null){qm(Ee);continue}}Ue!==null?(Ue.return=xe,Fe=Ue):qm(Ee)}Se=Se.sibling}e:for(Se=null,Ee=n;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{d=Ee.stateNode,re?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=Ee.stateNode,H=Ee.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,O.style.display=Ke("display",T))}catch(We){Xt(n,n.return,We)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=re?"":Ee.memoizedProps}catch(We){Xt(n,n.return,We)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:fi(i,n),Ai(n),u&4&&Gm(n);break;case 21:break;default:fi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(zm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ft(d,""),u.flags&=-33);var g=Hm(n);mf(n,g,d);break;case 3:case 4:var T=u.stateNode.containerInfo,O=Hm(n);pf(n,O,T);break;default:throw Error(t(161))}}catch(H){Xt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ax(n,i,a){Fe=n,jm(n)}function jm(n,i,a){for(var u=(n.mode&1)!==0;Fe!==null;){var d=Fe,g=d.child;if(d.tag===22&&u){var T=d.memoizedState!==null||vl;if(!T){var O=d.alternate,H=O!==null&&O.memoizedState!==null||Sn;O=vl;var re=Sn;if(vl=T,(Sn=H)&&!re)for(Fe=d;Fe!==null;)T=Fe,H=T.child,T.tag===22&&T.memoizedState!==null?Ym(d):H!==null?(H.return=T,Fe=H):Ym(d);for(;g!==null;)Fe=g,jm(g),g=g.sibling;Fe=d,vl=O,Sn=re}Xm(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,Fe=g):Xm(n)}}function Xm(n){for(;Fe!==null;){var i=Fe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Sn||_l(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Sn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ui(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&qp(i,g,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}qp(i,T,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var Se=re.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&Da(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Sn||i.flags&512&&hf(i)}catch(xe){Xt(i,i.return,xe)}}if(i===n){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function qm(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function Ym(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{_l(4,i)}catch(H){Xt(i,a,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(H){Xt(i,d,H)}}var g=i.return;try{hf(i)}catch(H){Xt(i,g,H)}break;case 5:var T=i.return;try{hf(i)}catch(H){Xt(i,T,H)}}}catch(H){Xt(i,i.return,H)}if(i===n){Fe=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Fe=O;break}Fe=i.return}}var Cx=Math.ceil,xl=C.ReactCurrentDispatcher,gf=C.ReactCurrentOwner,Jn=C.ReactCurrentBatchConfig,Mt=0,ln=null,Kt=null,mn=0,jn=0,Bs=hr(0),tn=0,to=null,Yr=0,yl=0,vf=0,no=null,On=null,_f=0,zs=1/0,Hi=null,Sl=!1,xf=null,xr=null,El=!1,yr=null,Ml=0,io=0,yf=null,Tl=-1,wl=0;function Rn(){return Mt&6?Q():Tl!==-1?Tl:Tl=Q()}function Sr(n){return n.mode&1?Mt&2&&mn!==0?mn&-mn:cx.transition!==null?(wl===0&&(wl=Dt()),wl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Kh(n.type)),n):1}function di(n,i,a,u){if(50<io)throw io=0,yf=null,Error(t(185));sn(n,a,u),(!(Mt&2)||n!==ln)&&(n===ln&&(!(Mt&2)&&(yl|=a),tn===4&&Er(n,mn)),Fn(n,u),a===1&&Mt===0&&!(i.mode&1)&&(zs=Q()+500,Jo&&mr()))}function Fn(n,i){var a=n.callbackNode;An(n,i);var u=gn(n,n===ln?mn:0);if(u===0)a!==null&&R(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&R(a),i===1)n.tag===0?ux(Km.bind(null,n)):Up(Km.bind(null,n)),sx(function(){!(Mt&6)&&mr()}),a=null;else{switch(Ei(u)){case 1:a=Me;break;case 4:a=Pe;break;case 16:a=Ie;break;case 536870912:a=tt;break;default:a=Ie}a=rg(a,$m.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function $m(n,i){if(Tl=-1,wl=0,Mt&6)throw Error(t(327));var a=n.callbackNode;if(Hs()&&n.callbackNode!==a)return null;var u=gn(n,n===ln?mn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=Al(n,u);else{i=u;var d=Mt;Mt|=2;var g=Qm();(ln!==n||mn!==i)&&(Hi=null,zs=Q()+500,Kr(n,i));do try{Px();break}catch(O){Zm(n,O)}while(!0);Fc(),xl.current=g,Mt=d,Kt!==null?i=0:(ln=null,mn=0,i=tn)}if(i!==0){if(i===2&&(d=Ni(n),d!==0&&(u=d,i=Sf(n,d))),i===1)throw a=to,Kr(n,0),Er(n,u),Fn(n,Q()),a;if(i===6)Er(n,u);else{if(d=n.current.alternate,!(u&30)&&!Rx(d)&&(i=Al(n,u),i===2&&(g=Ni(n),g!==0&&(u=g,i=Sf(n,g))),i===1))throw a=to,Kr(n,0),Er(n,u),Fn(n,Q()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Zr(n,On,Hi);break;case 3:if(Er(n,u),(u&130023424)===u&&(i=_f+500-Q(),10<i)){if(gn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Rn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ac(Zr.bind(null,n,On,Hi),i);break}Zr(n,On,Hi);break;case 4:if(Er(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var T=31-at(u);g=1<<T,T=i[T],T>d&&(d=T),u&=~g}if(u=d,u=Q()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Cx(u/1960))-u,10<u){n.timeoutHandle=Ac(Zr.bind(null,n,On,Hi),u);break}Zr(n,On,Hi);break;case 5:Zr(n,On,Hi);break;default:throw Error(t(329))}}}return Fn(n,Q()),n.callbackNode===a?$m.bind(null,n):null}function Sf(n,i){var a=no;return n.current.memoizedState.isDehydrated&&(Kr(n,i).flags|=256),n=Al(n,i),n!==2&&(i=On,On=a,i!==null&&Ef(i)),n}function Ef(n){On===null?On=n:On.push.apply(On,n)}function Rx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],g=d.getSnapshot;d=d.value;try{if(!oi(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~vf,i&=~yl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-at(i),u=1<<a;n[a]=-1,i&=~u}}function Km(n){if(Mt&6)throw Error(t(327));Hs();var i=gn(n,0);if(!(i&1))return Fn(n,Q()),null;var a=Al(n,i);if(n.tag!==0&&a===2){var u=Ni(n);u!==0&&(i=u,a=Sf(n,u))}if(a===1)throw a=to,Kr(n,0),Er(n,i),Fn(n,Q()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zr(n,On,Hi),Fn(n,Q()),null}function Mf(n,i){var a=Mt;Mt|=1;try{return n(i)}finally{Mt=a,Mt===0&&(zs=Q()+500,Jo&&mr())}}function $r(n){yr!==null&&yr.tag===0&&!(Mt&6)&&Hs();var i=Mt;Mt|=1;var a=Jn.transition,u=Et;try{if(Jn.transition=null,Et=1,n)return n()}finally{Et=u,Jn.transition=a,Mt=i,!(Mt&6)&&mr()}}function Tf(){jn=Bs.current,Ft(Bs)}function Kr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,rx(a)),Kt!==null)for(a=Kt.return;a!==null;){var u=a;switch(Dc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Zo();break;case 3:Os(),Ft(Nn),Ft(_n),jc();break;case 5:Gc(u);break;case 4:Os();break;case 13:Ft(Vt);break;case 19:Ft(Vt);break;case 10:kc(u.type._context);break;case 22:case 23:Tf()}a=a.return}if(ln=n,Kt=n=Mr(n.current,null),mn=jn=i,tn=0,to=null,vf=yl=Yr=0,On=no=null,jr!==null){for(i=0;i<jr.length;i++)if(a=jr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,g=a.pending;if(g!==null){var T=g.next;g.next=d,u.next=T}a.pending=u}jr=null}return n}function Zm(n,i){do{var a=Kt;try{if(Fc(),ul.current=hl,cl){for(var u=Gt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}cl=!1}if(qr=0,on=en=Gt=null,$a=!1,Ka=0,gf.current=null,a===null||a.return===null){tn=1,to=i,Kt=null;break}e:{var g=n,T=a.return,O=a,H=i;if(i=mn,O.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,Se=O,Ee=Se.tag;if(!(Se.mode&1)&&(Ee===0||Ee===11||Ee===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ue=Em(T);if(Ue!==null){Ue.flags&=-257,Mm(Ue,T,O,g,i),Ue.mode&1&&Sm(g,re,i),i=Ue,H=re;var He=i.updateQueue;if(He===null){var We=new Set;We.add(H),i.updateQueue=We}else He.add(H);break e}else{if(!(i&1)){Sm(g,re,i),wf();break e}H=Error(t(426))}}else if(zt&&O.mode&1){var Yt=Em(T);if(Yt!==null){!(Yt.flags&65536)&&(Yt.flags|=256),Mm(Yt,T,O,g,i),Uc(Fs(H,O));break e}}g=H=Fs(H,O),tn!==4&&(tn=2),no===null?no=[g]:no.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var Z=xm(g,H,i);Xp(g,Z);break e;case 1:O=H;var j=g.type,te=g.stateNode;if(!(g.flags&128)&&(typeof j.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(xr===null||!xr.has(te)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=ym(g,O,i);Xp(g,Ae);break e}}g=g.return}while(g!==null)}eg(a)}catch(qe){i=qe,Kt===a&&a!==null&&(Kt=a=a.return);continue}break}while(!0)}function Qm(){var n=xl.current;return xl.current=hl,n===null?hl:n}function wf(){(tn===0||tn===3||tn===2)&&(tn=4),ln===null||!(Yr&268435455)&&!(yl&268435455)||Er(ln,mn)}function Al(n,i){var a=Mt;Mt|=2;var u=Qm();(ln!==n||mn!==i)&&(Hi=null,Kr(n,i));do try{bx();break}catch(d){Zm(n,d)}while(!0);if(Fc(),Mt=a,xl.current=u,Kt!==null)throw Error(t(261));return ln=null,mn=0,tn}function bx(){for(;Kt!==null;)Jm(Kt)}function Px(){for(;Kt!==null&&!Y();)Jm(Kt)}function Jm(n){var i=ig(n.alternate,n,jn);n.memoizedProps=n.pendingProps,i===null?eg(n):Kt=i,gf.current=null}function eg(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=Mx(a,i),a!==null){a.flags&=32767,Kt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Kt=null;return}}else if(a=Ex(a,i,jn),a!==null){Kt=a;return}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);tn===0&&(tn=5)}function Zr(n,i,a){var u=Et,d=Jn.transition;try{Jn.transition=null,Et=1,Lx(n,i,a,u)}finally{Jn.transition=d,Et=u}return null}function Lx(n,i,a,u){do Hs();while(yr!==null);if(Mt&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(hn(n,g),n===ln&&(Kt=ln=null,mn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||El||(El=!0,rg(Ie,function(){return Hs(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=Jn.transition,Jn.transition=null;var T=Et;Et=1;var O=Mt;Mt|=4,gf.current=null,wx(n,a),Wm(a,n),Z_(Tc),Fo=!!Mc,Tc=Mc=null,n.current=a,Ax(a),ie(),Mt=O,Et=T,Jn.transition=g}else n.current=a;if(El&&(El=!1,yr=n,Ml=d),g=n.pendingLanes,g===0&&(xr=null),vt(a.stateNode),Fn(n,Q()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Sl)throw Sl=!1,n=xf,xf=null,n;return Ml&1&&n.tag!==0&&Hs(),g=n.pendingLanes,g&1?n===yf?io++:(io=0,yf=n):io=0,mr(),null}function Hs(){if(yr!==null){var n=Ei(Ml),i=Jn.transition,a=Et;try{if(Jn.transition=null,Et=16>n?16:n,yr===null)var u=!1;else{if(n=yr,yr=null,Ml=0,Mt&6)throw Error(t(331));var d=Mt;for(Mt|=4,Fe=n.current;Fe!==null;){var g=Fe,T=g.child;if(Fe.flags&16){var O=g.deletions;if(O!==null){for(var H=0;H<O.length;H++){var re=O[H];for(Fe=re;Fe!==null;){var Se=Fe;switch(Se.tag){case 0:case 11:case 15:eo(8,Se,g)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,Fe=Ee;else for(;Fe!==null;){Se=Fe;var xe=Se.sibling,Ue=Se.return;if(Bm(Se),Se===re){Fe=null;break}if(xe!==null){xe.return=Ue,Fe=xe;break}Fe=Ue}}}var He=g.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var Yt=We.sibling;We.sibling=null,We=Yt}while(We!==null)}}Fe=g}}if(g.subtreeFlags&2064&&T!==null)T.return=g,Fe=T;else e:for(;Fe!==null;){if(g=Fe,g.flags&2048)switch(g.tag){case 0:case 11:case 15:eo(9,g,g.return)}var Z=g.sibling;if(Z!==null){Z.return=g.return,Fe=Z;break e}Fe=g.return}}var j=n.current;for(Fe=j;Fe!==null;){T=Fe;var te=T.child;if(T.subtreeFlags&2064&&te!==null)te.return=T,Fe=te;else e:for(T=j;Fe!==null;){if(O=Fe,O.flags&2048)try{switch(O.tag){case 0:case 11:case 15:_l(9,O)}}catch(qe){Xt(O,O.return,qe)}if(O===T){Fe=null;break e}var Ae=O.sibling;if(Ae!==null){Ae.return=O.return,Fe=Ae;break e}Fe=O.return}}if(Mt=d,mr(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Je,n)}catch{}u=!0}return u}finally{Et=a,Jn.transition=i}}return!1}function tg(n,i,a){i=Fs(a,i),i=xm(n,i,1),n=vr(n,i,1),i=Rn(),n!==null&&(sn(n,1,i),Fn(n,i))}function Xt(n,i,a){if(n.tag===3)tg(n,n,a);else for(;i!==null;){if(i.tag===3){tg(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(xr===null||!xr.has(u))){n=Fs(a,n),n=ym(i,n,1),i=vr(i,n,1),n=Rn(),i!==null&&(sn(i,1,n),Fn(i,n));break}}i=i.return}}function Dx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Rn(),n.pingedLanes|=n.suspendedLanes&a,ln===n&&(mn&a)===a&&(tn===4||tn===3&&(mn&130023424)===mn&&500>Q()-_f?Kr(n,0):vf|=a),Fn(n,i)}function ng(n,i){i===0&&(n.mode&1?(i=jt,jt<<=1,!(jt&130023424)&&(jt=4194304)):i=1);var a=Rn();n=ki(n,i),n!==null&&(sn(n,i,a),Fn(n,a))}function Nx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),ng(n,a)}function Ix(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),ng(n,a)}var ig;ig=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)Un=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Un=!1,Sx(n,i,a);Un=!!(n.flags&131072)}else Un=!1,zt&&i.flags&1048576&&Op(i,tl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;gl(n,i),n=i.pendingProps;var d=bs(i,_n.current);Us(i,a),d=Yc(null,i,u,n,d,a);var g=$c();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(u)?(g=!0,Qo(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Hc(i),d.updater=pl,i.stateNode=d,d._reactInternals=i,tf(i,u,n,a),i=af(null,i,u,!0,g,a)):(i.tag=0,zt&&g&&Lc(i),Cn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(gl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Ox(u),n=ui(u,n),d){case 0:i=sf(null,i,u,n,a);break e;case 1:i=bm(null,i,u,n,a);break e;case 11:i=Tm(null,i,u,n,a);break e;case 14:i=wm(null,i,u,ui(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ui(u,d),sf(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ui(u,d),bm(n,i,u,d,a);case 3:e:{if(Pm(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,d=g.element,jp(n,i),ol(i,u,null,a);var T=i.memoizedState;if(u=T.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Fs(Error(t(423)),i),i=Lm(n,i,u,a,d);break e}else if(u!==d){d=Fs(Error(t(424)),i),i=Lm(n,i,u,a,d);break e}else for(Wn=dr(i.stateNode.containerInfo.firstChild),Gn=i,zt=!0,li=null,a=Gp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),u===d){i=zi(n,i,a);break e}Cn(n,i,u,a)}i=i.child}return i;case 5:return Yp(i),n===null&&Ic(i),u=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,T=d.children,wc(u,d)?T=null:g!==null&&wc(u,g)&&(i.flags|=32),Rm(n,i),Cn(n,i,T,a),i.child;case 6:return n===null&&Ic(i),null;case 13:return Dm(n,i,a);case 4:return Vc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ns(i,null,u,a):Cn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ui(u,d),Tm(n,i,u,d,a);case 7:return Cn(n,i,i.pendingProps,a),i.child;case 8:return Cn(n,i,i.pendingProps.children,a),i.child;case 12:return Cn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,g=i.memoizedProps,T=d.value,It(rl,u._currentValue),u._currentValue=T,g!==null)if(oi(g.value,T)){if(g.children===d.children&&!Nn.current){i=zi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var O=g.dependencies;if(O!==null){T=g.child;for(var H=O.firstContext;H!==null;){if(H.context===u){if(g.tag===1){H=Bi(-1,a&-a),H.tag=2;var re=g.updateQueue;if(re!==null){re=re.shared;var Se=re.pending;Se===null?H.next=H:(H.next=Se.next,Se.next=H),re.pending=H}}g.lanes|=a,H=g.alternate,H!==null&&(H.lanes|=a),Bc(g.return,a,i),O.lanes|=a;break}H=H.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=a,O=T.alternate,O!==null&&(O.lanes|=a),Bc(T,a,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Cn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Us(i,a),d=Zn(d),u=u(d),i.flags|=1,Cn(n,i,u,a),i.child;case 14:return u=i.type,d=ui(u,i.pendingProps),d=ui(u.type,d),wm(n,i,u,d,a);case 15:return Am(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ui(u,d),gl(n,i),i.tag=1,In(u)?(n=!0,Qo(i)):n=!1,Us(i,a),vm(i,u,d),tf(i,u,d,a),af(null,i,u,!0,n,a);case 19:return Im(n,i,a);case 22:return Cm(n,i,a)}throw Error(t(156,i.tag))};function rg(n,i){return Io(n,i)}function Ux(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,a,u){return new Ux(n,i,a,u)}function Af(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ox(n){if(typeof n=="function")return Af(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===fe)return 14}return 2}function Mr(n,i){var a=n.alternate;return a===null?(a=ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Cl(n,i,a,u,d,g){var T=2;if(u=n,typeof n=="function")Af(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case L:return Qr(a.children,d,g,i);case z:T=8,d|=8;break;case P:return n=ei(12,a,i,d|2),n.elementType=P,n.lanes=g,n;case W:return n=ei(13,a,i,d),n.elementType=W,n.lanes=g,n;case $:return n=ei(19,a,i,d),n.elementType=$,n.lanes=g,n;case ue:return Rl(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:T=10;break e;case I:T=9;break e;case B:T=11;break e;case fe:T=14;break e;case oe:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(T,a,i,d),i.elementType=n,i.type=u,i.lanes=g,i}function Qr(n,i,a,u){return n=ei(7,n,u,i),n.lanes=a,n}function Rl(n,i,a,u){return n=ei(22,n,u,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Cf(n,i,a){return n=ei(6,n,null,i),n.lanes=a,n}function Rf(n,i,a){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Fx(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bf(n,i,a,u,d,g,T,O,H){return n=new Fx(n,i,a,O,H),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ei(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(g),n}function kx(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function sg(n){if(!n)return pr;n=n._reactInternals;e:{if(Si(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(In(a))return Np(n,a,i)}return i}function ag(n,i,a,u,d,g,T,O,H){return n=bf(a,u,!0,n,d,g,T,O,H),n.context=sg(null),a=n.current,u=Rn(),d=Sr(a),g=Bi(u,d),g.callback=i??null,vr(a,g,d),n.current.lanes=d,sn(n,d,u),Fn(n,u),n}function bl(n,i,a,u){var d=i.current,g=Rn(),T=Sr(d);return a=sg(a),i.context===null?i.context=a:i.pendingContext=a,i=Bi(g,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=vr(d,i,T),n!==null&&(di(n,d,T,g),al(n,d,T)),T}function Pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function og(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Pf(n,i){og(n,i),(n=n.alternate)&&og(n,i)}var lg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lf(n){this._internalRoot=n}Ll.prototype.render=Lf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));bl(n,i,null,null)},Ll.prototype.unmount=Lf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;$r(function(){bl(null,n,null,null)}),i[Ii]=null}};function Ll(n){this._internalRoot=n}Ll.prototype.unstable_scheduleHydration=function(n){if(n){var i=jh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ur.length&&i!==0&&i<ur[a].priority;a++);ur.splice(a,0,n),a===0&&Yh(n)}};function Df(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ug(){}function Bx(n,i,a,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var re=Pl(T);g.call(re)}}var T=ag(i,u,n,0,null,!1,!1,"",ug);return n._reactRootContainer=T,n[Ii]=T.current,Ha(n.nodeType===8?n.parentNode:n),$r(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var O=u;u=function(){var re=Pl(H);O.call(re)}}var H=bf(n,0,!1,null,null,!1,!1,"",ug);return n._reactRootContainer=H,n[Ii]=H.current,Ha(n.nodeType===8?n.parentNode:n),$r(function(){bl(i,H,a,u)}),H}function Nl(n,i,a,u,d){var g=a._reactRootContainer;if(g){var T=g;if(typeof d=="function"){var O=d;d=function(){var H=Pl(T);O.call(H)}}bl(i,T,n,d)}else T=Bx(a,i,n,d,u);return Pl(T)}Gh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(an(i,a|1),Fn(i,Q()),!(Mt&6)&&(zs=Q()+500,mr()))}break;case 13:$r(function(){var u=ki(n,1);if(u!==null){var d=Rn();di(u,n,1,d)}}),Pf(n,1)}},nc=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var a=Rn();di(i,n,134217728,a)}Pf(n,134217728)}},Wh=function(n){if(n.tag===13){var i=Sr(n),a=ki(n,i);if(a!==null){var u=Rn();di(a,n,i,u)}Pf(n,i)}},jh=function(){return Et},Xh=function(n,i){var a=Et;try{return Et=n,i()}finally{Et=a}},be=function(n,i,a){switch(i){case"input":if(dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Ko(u);if(!d)throw Error(t(90));nt(u),dt(u,d)}}}break;case"textarea":ge(n,a);break;case"select":i=a.value,i!=null&&U(n,!!a.multiple,i,!1)}},Ut=Mf,Jt=$r;var zx={usingClientEntryPoint:!1,Events:[Wa,Cs,Ko,De,st,Mf]},ro={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hx={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Do(n),n===null?null:n.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Je=Il.inject(Hx),Ge=Il}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zx,kn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(i))throw Error(t(200));return kx(n,i,null,a)},kn.createRoot=function(n,i){if(!Df(n))throw Error(t(299));var a=!1,u="",d=lg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=bf(n,1,!1,null,null,a,!1,u,d),n[Ii]=i.current,Ha(n.nodeType===8?n.parentNode:n),new Lf(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Do(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return $r(n)},kn.hydrate=function(n,i,a){if(!Dl(i))throw Error(t(200));return Nl(null,n,i,!0,a)},kn.hydrateRoot=function(n,i,a){if(!Df(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,g="",T=lg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=ag(i,null,n,1,a??null,d,!1,g,T),n[Ii]=i.current,Ha(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ll(i)},kn.render=function(n,i,a){if(!Dl(i))throw Error(t(200));return Nl(null,n,i,!1,a)},kn.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(t(40));return n._reactRootContainer?($r(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ii]=null})}),!0):!1},kn.unstable_batchedUpdates=Mf,kn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Dl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nl(n,i,a,!1,u)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var vg;function Eh(){if(vg)return Uf.exports;vg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Uf.exports=$x(),Uf.exports}var _g;function Kx(){if(_g)return Ol;_g=1;var r=Eh();return Ol.createRoot=r.createRoot,Ol.hydrateRoot=r.hydrateRoot,Ol}var Zx=Kx();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="172",Qx=0,xg=1,Jx=2,n0=1,ey=2,qi=3,Or=0,zn=1,$i=2,Nr=0,ca=1,yg=2,Sg=3,Eg=4,ty=5,ls=100,ny=101,iy=102,ry=103,sy=104,ay=200,oy=201,ly=202,uy=203,Ad=204,Cd=205,cy=206,fy=207,dy=208,hy=209,py=210,my=211,gy=212,vy=213,_y=214,Rd=0,bd=1,Pd=2,ha=3,Ld=4,Dd=5,Nd=6,Id=7,i0=0,xy=1,yy=2,Ir=0,Sy=1,Ey=2,My=3,Ty=4,wy=5,Ay=6,Cy=7,r0=300,pa=301,ma=302,Ud=303,Od=304,Vu=306,Fd=1e3,cs=1001,kd=1002,_i=1003,Ry=1004,Fl=1005,Pi=1006,kf=1007,fs=1008,er=1009,s0=1010,a0=1011,xo=1012,Th=1013,gs=1014,Ki=1015,Eo=1016,wh=1017,Ah=1018,ga=1020,o0=35902,l0=1021,u0=1022,vi=1023,c0=1024,f0=1025,fa=1026,va=1027,d0=1028,Ch=1029,h0=1030,Rh=1031,bh=1033,Eu=33776,Mu=33777,Tu=33778,wu=33779,Bd=35840,zd=35841,Hd=35842,Vd=35843,Gd=36196,Wd=37492,jd=37496,Xd=37808,qd=37809,Yd=37810,$d=37811,Kd=37812,Zd=37813,Qd=37814,Jd=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,Au=36492,ah=36494,oh=36495,p0=36283,lh=36284,uh=36285,ch=36286,by=3200,Py=3201,Ly=0,Dy=1,Dr="",ni="srgb",_a="srgb-linear",Nu="linear",Pt="srgb",Vs=7680,Mg=519,Ny=512,Iy=513,Uy=514,m0=515,Oy=516,Fy=517,ky=518,By=519,fh=35044,Tg="300 es",Zi=2e3,Iu=2001;class wa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=Math.PI/180,dh=180/Math.PI;function Ur(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function zy(r,e){return(r%e+e)%e}function zf(r,e,t){return(1-t)*r+t*e}function bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,s,o,l,c,f,h,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p)}set(e,t,s,o,l,c,f,h,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=h,m[6]=s,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],m=s[4],_=s[7],x=s[2],S=s[5],E=s[8],M=o[0],y=o[3],v=o[6],D=o[1],b=o[4],C=o[7],F=o[2],N=o[5],L=o[8];return l[0]=c*M+f*D+h*F,l[3]=c*y+f*b+h*N,l[6]=c*v+f*C+h*L,l[1]=p*M+m*D+_*F,l[4]=p*y+m*b+_*N,l[7]=p*v+m*C+_*L,l[2]=x*M+S*D+E*F,l[5]=x*y+S*b+E*N,l[8]=x*v+S*C+E*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-s*l*m+s*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],m=e[8],_=m*c-f*p,x=f*h-m*l,S=p*l-c*h,E=t*_+s*x+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(o*p-m*s)*M,e[2]=(f*s-o*c)*M,e[3]=x*M,e[4]=(m*t-o*h)*M,e[5]=(o*l-f*t)*M,e[6]=S*M,e[7]=(s*h-p*t)*M,e[8]=(c*t-s*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Hf.makeScale(e,t)),this}rotate(e){return this.premultiply(Hf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hf=new ot;function g0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hy(){const r=yo("canvas");return r.style.display="block",r}const wg={};function oa(r){r in wg||(wg[r]=!0,console.warn(r))}function Vy(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function Gy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ag=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cg=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jy(){const r={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Pt&&(o.r=Ji(o.r),o.g=Ji(o.g),o.b=Ji(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(o.r=da(o.r),o.g=da(o.g),o.b=da(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Dr?Nu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[_a]:{primaries:e,whitePoint:s,transfer:Nu,toXYZ:Ag,fromXYZ:Cg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:s,transfer:Pt,toXYZ:Ag,fromXYZ:Cg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),r}const wt=jy();function Ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function da(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gs;class Xy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=yo("canvas")),Gs.width=e.width,Gs.height=e.height;const s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Ji(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Ji(t[s]/255)*255):t[s]=Ji(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qy=0;class v0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Vf(o[c].image)):l.push(Vf(o[c]))}else l=Vf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Vf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yy=0;class Ln extends wa{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,s=cs,o=cs,l=Pi,c=fs,f=vi,h=er,p=Ln.DEFAULT_ANISOTROPY,m=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Ur(),this.name="",this.source=new v0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fd:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fd:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=r0;Ln.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,s=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],m=h[4],_=h[8],x=h[1],S=h[5],E=h[9],M=h[2],y=h[6],v=h[10];if(Math.abs(m-x)<.01&&Math.abs(_-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+x)<.1&&Math.abs(_+M)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,C=(S+1)/2,F=(v+1)/2,N=(m+x)/4,L=(_+M)/4,z=(E+y)/4;return b>C&&b>F?b<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(b),o=N/s,l=L/s):C>F?C<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),s=N/o,l=z/o):F<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),s=L/l,o=z/l),this.set(s,o,l,t),this}let D=Math.sqrt((y-E)*(y-E)+(_-M)*(_-M)+(x-m)*(x-m));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(_-M)/D,this.z=(x-m)/D,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends wa{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Ln(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new v0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends $y{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class _0 extends Ln{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ky extends Ln{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],p=s[o+1],m=s[o+2],_=s[o+3];const x=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(_!==M||h!==x||p!==S||m!==E){let y=1-f;const v=h*x+p*S+m*E+_*M,D=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const F=Math.sqrt(b),N=Math.atan2(F,v*D);y=Math.sin(y*N)/F,f=Math.sin(f*N)/F}const C=f*D;if(h=h*y+x*C,p=p*y+S*C,m=m*y+E*C,_=_*y+M*C,y===1-f){const F=1/Math.sqrt(h*h+p*p+m*m+_*_);h*=F,p*=F,m*=F,_*=F}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],h=s[o+1],p=s[o+2],m=s[o+3],_=l[c],x=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*_+h*S-p*x,e[t+1]=h*E+m*x+p*_-f*S,e[t+2]=p*E+m*S+f*x-h*_,e[t+3]=m*E-f*_-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),m=f(o/2),_=f(l/2),x=h(s/2),S=h(o/2),E=h(l/2);switch(c){case"XYZ":this._x=x*m*_+p*S*E,this._y=p*S*_-x*m*E,this._z=p*m*E+x*S*_,this._w=p*m*_-x*S*E;break;case"YXZ":this._x=x*m*_+p*S*E,this._y=p*S*_-x*m*E,this._z=p*m*E-x*S*_,this._w=p*m*_+x*S*E;break;case"ZXY":this._x=x*m*_-p*S*E,this._y=p*S*_+x*m*E,this._z=p*m*E+x*S*_,this._w=p*m*_-x*S*E;break;case"ZYX":this._x=x*m*_-p*S*E,this._y=p*S*_+x*m*E,this._z=p*m*E-x*S*_,this._w=p*m*_+x*S*E;break;case"YZX":this._x=x*m*_+p*S*E,this._y=p*S*_+x*m*E,this._z=p*m*E-x*S*_,this._w=p*m*_-x*S*E;break;case"XZY":this._x=x*m*_-p*S*E,this._y=p*S*_-x*m*E,this._z=p*m*E+x*S*_,this._w=p*m*_+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],m=t[6],_=t[10],x=s+f+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(m-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(s>f&&s>_){const S=2*Math.sqrt(1+s-f-_);this._w=(m-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-s-_);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+_-s-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,m=t._w;return this._x=s*m+c*f+o*p-l*h,this._y=o*m+c*h+l*f-s*p,this._z=l*m+c*p+s*h-o*f,this._w=c*m-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,f),_=Math.sin((1-t)*m)/p,x=Math.sin(t*m)/p;return this._w=c*_+this._w*x,this._x=s*_+this._x*x,this._y=o*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*s),m=2*(f*t-l*o),_=2*(l*s-c*t);return this.x=t+h*p+c*_-f*m,this.y=s+h*m+f*p-l*_,this.z=o+h*_+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new se,Rg=new Mo;class To{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,hi):hi.fromBufferAttribute(l,c),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),kl.copy(s.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Bl.subVectors(this.max,ao),Ws.subVectors(e.a,ao),js.subVectors(e.b,ao),Xs.subVectors(e.c,ao),wr.subVectors(js,Ws),Ar.subVectors(Xs,js),Jr.subVectors(Ws,Xs);let t=[0,-wr.z,wr.y,0,-Ar.z,Ar.y,0,-Jr.z,Jr.y,wr.z,0,-wr.x,Ar.z,0,-Ar.x,Jr.z,0,-Jr.x,-wr.y,wr.x,0,-Ar.y,Ar.x,0,-Jr.y,Jr.x,0];return!Wf(t,Ws,js,Xs,Bl)||(t=[1,0,0,0,1,0,0,0,1],!Wf(t,Ws,js,Xs,Bl))?!1:(zl.crossVectors(wr,Ar),t=[zl.x,zl.y,zl.z],Wf(t,Ws,js,Xs,Bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new se,new se,new se,new se,new se,new se,new se,new se],hi=new se,kl=new To,Ws=new se,js=new se,Xs=new se,wr=new se,Ar=new se,Jr=new se,ao=new se,Bl=new se,zl=new se,es=new se;function Wf(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){es.fromArray(r,l);const f=o.x*Math.abs(es.x)+o.y*Math.abs(es.y)+o.z*Math.abs(es.z),h=e.dot(es),p=t.dot(es),m=s.dot(es);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>f)return!1}return!0}const Zy=new To,oo=new se,jf=new se;class Ph{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Zy.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(oo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(jf)),this.expandByPoint(oo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new se,Xf=new se,Hl=new se,Cr=new se,qf=new se,Vl=new se,Yf=new se;class x0{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Xf.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(Xf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Hl),f=Cr.dot(this.direction),h=-Cr.dot(Hl),p=Cr.lengthSq(),m=Math.abs(1-c*c);let _,x,S,E;if(m>0)if(_=c*h-f,x=c*f-h,E=l*m,_>=0)if(x>=-E)if(x<=E){const M=1/m;_*=M,x*=M,S=_*(_+c*x+2*f)+x*(c*_+x+2*h)+p}else x=l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+p;else x=-l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+p;else x<=-E?(_=Math.max(0,-(-c*l+f)),x=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+p):x<=E?(_=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(_=Math.max(0,-(c*l+f)),x=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+p);else x=c>0?-l:l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Xf).addScaledVector(Hl,x),S}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const s=Gi.dot(this.direction),o=Gi.dot(Gi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),m>=0?(l=(e.min.y-x.y)*m,c=(e.max.y-x.y)*m):(l=(e.max.y-x.y)*m,c=(e.min.y-x.y)*m),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,s,o,l){qf.subVectors(t,e),Vl.subVectors(s,e),Yf.crossVectors(qf,Vl);let c=this.direction.dot(Yf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Cr.subVectors(this.origin,e);const h=f*this.direction.dot(Vl.crossVectors(Cr,Vl));if(h<0)return null;const p=f*this.direction.dot(qf.cross(Cr));if(p<0||h+p>c)return null;const m=-f*Cr.dot(Yf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,s,o,l,c,f,h,p,m,_,x,S,E,M,y){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,p,m,_,x,S,E,M,y)}set(e,t,s,o,l,c,f,h,p,m,_,x,S,E,M,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=p,v[6]=m,v[10]=_,v[14]=x,v[3]=S,v[7]=E,v[11]=M,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/qs.setFromMatrixColumn(e,0).length(),l=1/qs.setFromMatrixColumn(e,1).length(),c=1/qs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*m,S=c*_,E=f*m,M=f*_;t[0]=h*m,t[4]=-h*_,t[8]=p,t[1]=S+E*p,t[5]=x-M*p,t[9]=-f*h,t[2]=M-x*p,t[6]=E+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*m,S=h*_,E=p*m,M=p*_;t[0]=x+M*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=M+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*m,S=h*_,E=p*m,M=p*_;t[0]=x-M*f,t[4]=-c*_,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=M-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*m,S=c*_,E=f*m,M=f*_;t[0]=h*m,t[4]=E*p-S,t[8]=x*p+M,t[1]=h*_,t[5]=M*p+x,t[9]=S*p-E,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,E=f*h,M=f*p;t[0]=h*m,t[4]=M-x*_,t[8]=E*_+S,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=S*_+E,t[10]=x-M*_}else if(e.order==="XZY"){const x=c*h,S=c*p,E=f*h,M=f*p;t[0]=h*m,t[4]=-_,t[8]=p*m,t[1]=x*_+M,t[5]=c*m,t[9]=S*_-E,t[2]=E*_-S,t[6]=f*m,t[10]=M*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qy,e,Jy)}lookAt(e,t,s){const o=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Rr.crossVectors(s,Xn),Rr.lengthSq()===0&&(Math.abs(s.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Rr.crossVectors(s,Xn)),Rr.normalize(),Gl.crossVectors(Xn,Rr),o[0]=Rr.x,o[4]=Gl.x,o[8]=Xn.x,o[1]=Rr.y,o[5]=Gl.y,o[9]=Xn.y,o[2]=Rr.z,o[6]=Gl.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],m=s[1],_=s[5],x=s[9],S=s[13],E=s[2],M=s[6],y=s[10],v=s[14],D=s[3],b=s[7],C=s[11],F=s[15],N=o[0],L=o[4],z=o[8],P=o[12],w=o[1],I=o[5],B=o[9],W=o[13],$=o[2],fe=o[6],oe=o[10],ue=o[14],V=o[3],le=o[7],ae=o[11],k=o[15];return l[0]=c*N+f*w+h*$+p*V,l[4]=c*L+f*I+h*fe+p*le,l[8]=c*z+f*B+h*oe+p*ae,l[12]=c*P+f*W+h*ue+p*k,l[1]=m*N+_*w+x*$+S*V,l[5]=m*L+_*I+x*fe+S*le,l[9]=m*z+_*B+x*oe+S*ae,l[13]=m*P+_*W+x*ue+S*k,l[2]=E*N+M*w+y*$+v*V,l[6]=E*L+M*I+y*fe+v*le,l[10]=E*z+M*B+y*oe+v*ae,l[14]=E*P+M*W+y*ue+v*k,l[3]=D*N+b*w+C*$+F*V,l[7]=D*L+b*I+C*fe+F*le,l[11]=D*z+b*B+C*oe+F*ae,l[15]=D*P+b*W+C*ue+F*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],m=e[2],_=e[6],x=e[10],S=e[14],E=e[3],M=e[7],y=e[11],v=e[15];return E*(+l*h*_-o*p*_-l*f*x+s*p*x+o*f*S-s*h*S)+M*(+t*h*S-t*p*x+l*c*x-o*c*S+o*p*m-l*h*m)+y*(+t*p*_-t*f*S-l*c*_+s*c*S+l*f*m-s*p*m)+v*(-o*f*m-t*h*_+t*f*x+o*c*_-s*c*x+s*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],m=e[8],_=e[9],x=e[10],S=e[11],E=e[12],M=e[13],y=e[14],v=e[15],D=_*y*p-M*x*p+M*h*S-f*y*S-_*h*v+f*x*v,b=E*x*p-m*y*p-E*h*S+c*y*S+m*h*v-c*x*v,C=m*M*p-E*_*p+E*f*S-c*M*S-m*f*v+c*_*v,F=E*_*h-m*M*h-E*f*x+c*M*x+m*f*y-c*_*y,N=t*D+s*b+o*C+l*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return e[0]=D*L,e[1]=(M*x*l-_*y*l-M*o*S+s*y*S+_*o*v-s*x*v)*L,e[2]=(f*y*l-M*h*l+M*o*p-s*y*p-f*o*v+s*h*v)*L,e[3]=(_*h*l-f*x*l-_*o*p+s*x*p+f*o*S-s*h*S)*L,e[4]=b*L,e[5]=(m*y*l-E*x*l+E*o*S-t*y*S-m*o*v+t*x*v)*L,e[6]=(E*h*l-c*y*l-E*o*p+t*y*p+c*o*v-t*h*v)*L,e[7]=(c*x*l-m*h*l+m*o*p-t*x*p-c*o*S+t*h*S)*L,e[8]=C*L,e[9]=(E*_*l-m*M*l-E*s*S+t*M*S+m*s*v-t*_*v)*L,e[10]=(c*M*l-E*f*l+E*s*p-t*M*p-c*s*v+t*f*v)*L,e[11]=(m*f*l-c*_*l-m*s*p+t*_*p+c*s*S-t*f*S)*L,e[12]=F*L,e[13]=(m*M*o-E*_*o+E*s*x-t*M*x-m*s*y+t*_*y)*L,e[14]=(E*f*o-c*M*o-E*s*h+t*M*h+c*s*y-t*f*y)*L,e[15]=(c*_*o-m*f*o+m*s*h-t*_*h-c*s*x+t*f*x)*L,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,m=l*f;return this.set(p*c+s,p*f-o*h,p*h+o*f,0,p*f+o*h,m*f+s,m*h-o*c,0,p*h-o*f,m*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,m=c+c,_=f+f,x=l*p,S=l*m,E=l*_,M=c*m,y=c*_,v=f*_,D=h*p,b=h*m,C=h*_,F=s.x,N=s.y,L=s.z;return o[0]=(1-(M+v))*F,o[1]=(S+C)*F,o[2]=(E-b)*F,o[3]=0,o[4]=(S-C)*N,o[5]=(1-(x+v))*N,o[6]=(y+D)*N,o[7]=0,o[8]=(E+b)*L,o[9]=(y-D)*L,o[10]=(1-(x+M))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=qs.set(o[0],o[1],o[2]).length();const c=qs.set(o[4],o[5],o[6]).length(),f=qs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],pi.copy(this);const p=1/l,m=1/c,_=1/f;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=m,pi.elements[5]*=m,pi.elements[6]*=m,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,t.setFromRotationMatrix(pi),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=Zi){const h=this.elements,p=2*l/(t-e),m=2*l/(s-o),_=(t+e)/(t-e),x=(s+o)/(s-o);let S,E;if(f===Zi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Iu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Zi){const h=this.elements,p=1/(t-e),m=1/(s-o),_=1/(c-l),x=(t+e)*p,S=(s+o)*m;let E,M;if(f===Zi)E=(c+l)*_,M=-2*_;else if(f===Iu)E=l*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const qs=new se,pi=new qt,Qy=new se(0,0,0),Jy=new se(1,1,1),Rr=new se,Gl=new se,Xn=new se,bg=new qt,Pg=new Mo;class tr{constructor(e=0,t=0,s=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],m=o[9],_=o[2],x=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pg.setFromEuler(this),this.setFromQuaternion(Pg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eS=0;const Lg=new se,Ys=new Mo,Wi=new qt,Wl=new se,lo=new se,tS=new se,nS=new Mo,Dg=new se(1,0,0),Ng=new se(0,1,0),Ig=new se(0,0,1),Ug={type:"added"},iS={type:"removed"},$s={type:"childadded",child:null},$f={type:"childremoved",child:null};class Hn extends wa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new se,t=new tr,s=new Mo,o=new se(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new ot}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Dg,e)}rotateY(e){return this.rotateOnAxis(Ng,e)}rotateZ(e){return this.rotateOnAxis(Ig,e)}translateOnAxis(e,t){return Lg.copy(e).applyQuaternion(this.quaternion),this.position.add(Lg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dg,e)}translateY(e){return this.translateOnAxis(Ng,e)}translateZ(e){return this.translateOnAxis(Ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Wl.copy(e):Wl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(lo,Wl,this.up):Wi.lookAt(Wl,lo,this.up),this.quaternion.setFromRotationMatrix(Wi),o&&(Wi.extractRotation(o.matrixWorld),Ys.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ug),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iS),$f.child=e,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ug),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,tS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,nS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),m=c(e.images),_=c(e.shapes),x=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(f){const h=[];for(const p in f){const m=f[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Hn.DEFAULT_UP=new se(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new se,ji=new se,Kf=new se,Xi=new se,Ks=new se,Zs=new se,Og=new se,Zf=new se,Qf=new se,Jf=new se,ed=new $t,td=new $t,nd=new $t;class ri{constructor(e=new se,t=new se,s=new se){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),mi.subVectors(e,t),o.cross(mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){mi.subVectors(o,t),ji.subVectors(s,t),Kf.subVectors(e,t);const c=mi.dot(mi),f=mi.dot(ji),h=mi.dot(Kf),p=ji.dot(ji),m=ji.dot(Kf),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,S=(p*h-f*m)*x,E=(c*m-f*h)*x;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,Xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Xi.x),h.addScaledVector(c,Xi.y),h.addScaledVector(f,Xi.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,t),td.fromBufferAttribute(e,s),nd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(ed,l.x),c.addScaledVector(td,l.y),c.addScaledVector(nd,l.z),c}static isFrontFacing(e,t,s,o){return mi.subVectors(s,t),ji.subVectors(e,t),mi.cross(ji).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),mi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return ri.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;Ks.subVectors(o,s),Zs.subVectors(l,s),Zf.subVectors(e,s);const h=Ks.dot(Zf),p=Zs.dot(Zf);if(h<=0&&p<=0)return t.copy(s);Qf.subVectors(e,o);const m=Ks.dot(Qf),_=Zs.dot(Qf);if(m>=0&&_<=m)return t.copy(o);const x=h*_-m*p;if(x<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(s).addScaledVector(Ks,c);Jf.subVectors(e,l);const S=Ks.dot(Jf),E=Zs.dot(Jf);if(E>=0&&S<=E)return t.copy(l);const M=S*p-h*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Zs,f);const y=m*E-S*_;if(y<=0&&_-m>=0&&S-E>=0)return Og.subVectors(l,o),f=(_-m)/(_-m+(S-E)),t.copy(o).addScaledVector(Og,f);const v=1/(y+M+x);return c=M*v,f=x*v,t.copy(s).addScaledVector(Ks,c).addScaledVector(Zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},jl={h:0,s:0,l:0};function id(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=wt.workingColorSpace){if(e=zy(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=id(c,l,e+1/3),this.g=id(c,l,e),this.b=id(c,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=ni){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const s=y0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return wt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(_t(Mn.r*255,0,255))*65536+Math.round(_t(Mn.g*255,0,255))*256+Math.round(_t(Mn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Mn.copy(this),t);const s=Mn.r,o=Mn.g,l=Mn.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const m=(f+c)/2;if(f===c)h=0,p=0;else{const _=c-f;switch(p=m<=.5?_/(c+f):_/(2-c-f),c){case s:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-s)/_+2;break;case l:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ni){wt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,s=Mn.g,o=Mn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(jl);const s=zf(br.h,jl.h,t),o=zf(br.s,jl.s,t),l=zf(br.l,jl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new bt;bt.NAMES=y0;let rS=0;class wo extends wa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=ca,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(s.blending=this.blending),this.side!==Or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ad&&(s.blendSrc=this.blendSrc),this.blendDst!==Cd&&(s.blendDst=this.blendDst),this.blendEquation!==ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class S0 extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new se,Xl=new yt;class xi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=fh,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=bi(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Lt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array),o=Lt(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array),o=Lt(o,this.array),l=Lt(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}}class E0 extends xi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class M0 extends xi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class hs extends xi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let sS=0;const ti=new qt,rd=new Hn,Qs=new se,qn=new To,uo=new To,cn=new se;class kr extends wa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g0(e)?M0:E0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ot().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,s){return ti.makeTranslation(e,t,s),this.applyMatrix4(ti),this}scale(e,t,s){return ti.makeScale(e,t,s),this.applyMatrix4(ti),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new hs(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];qn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ph);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];uo.setFromBufferAttribute(f),this.morphTargetsRelative?(cn.addVectors(qn.min,uo.min),qn.expandByPoint(cn),cn.addVectors(qn.max,uo.max),qn.expandByPoint(cn)):(qn.expandByPoint(uo.min),qn.expandByPoint(uo.max))}qn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)cn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(cn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)cn.fromBufferAttribute(f,p),h&&(Qs.fromBufferAttribute(e,p),cn.add(Qs)),o=Math.max(o,s.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let z=0;z<s.count;z++)f[z]=new se,h[z]=new se;const p=new se,m=new se,_=new se,x=new yt,S=new yt,E=new yt,M=new se,y=new se;function v(z,P,w){p.fromBufferAttribute(s,z),m.fromBufferAttribute(s,P),_.fromBufferAttribute(s,w),x.fromBufferAttribute(l,z),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,w),m.sub(p),_.sub(p),S.sub(x),E.sub(x);const I=1/(S.x*E.y-E.x*S.y);isFinite(I)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(I),y.copy(_).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(I),f[z].add(M),f[P].add(M),f[w].add(M),h[z].add(y),h[P].add(y),h[w].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let z=0,P=D.length;z<P;++z){const w=D[z],I=w.start,B=w.count;for(let W=I,$=I+B;W<$;W+=3)v(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const b=new se,C=new se,F=new se,N=new se;function L(z){F.fromBufferAttribute(o,z),N.copy(F);const P=f[z];b.copy(P),b.sub(F.multiplyScalar(F.dot(P))).normalize(),C.crossVectors(N,P);const I=C.dot(h[z])<0?-1:1;c.setXYZW(z,b.x,b.y,b.z,I)}for(let z=0,P=D.length;z<P;++z){const w=D[z],I=w.start,B=w.count;for(let W=I,$=I+B;W<$;W+=3)L(e.getX(W+0)),L(e.getX(W+1)),L(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const o=new se,l=new se,c=new se,f=new se,h=new se,p=new se,m=new se,_=new se;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),M=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,y),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,y),f.add(m),h.add(m),p.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),s.setXYZ(x+0,m.x,m.y,m.z),s.setXYZ(x+1,m.x,m.y,m.z),s.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(f,h){const p=f.array,m=f.itemSize,_=f.normalized,x=new p.constructor(h.length*m);let S=0,E=0;for(let M=0,y=h.length;M<y;M++){f.isInterleavedBufferAttribute?S=h[M]*f.data.stride+f.offset:S=h[M]*m;for(let v=0;v<m;v++)x[E++]=p[S++]}return new xi(x,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kr,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let m=0,_=p.length;m<_;m++){const x=p[m],S=e(x,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];m.push(S.toJSON(e.data))}m.length>0&&(o[h]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],_=l[p];for(let x=0,S=_.length;x<S;x++)m.push(_[x].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fg=new qt,ts=new x0,ql=new Ph,kg=new se,Yl=new se,$l=new se,Kl=new se,sd=new se,Zl=new se,Bg=new se,Ql=new se;class Qi extends Hn{constructor(e=new kr,t=new S0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Zl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const m=f[h],_=l[h];m!==0&&(sd.fromBufferAttribute(_,e),c?Zl.addScaledVector(sd,m):Zl.addScaledVector(sd.sub(t),m))}t.add(Zl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ql.copy(s.boundingSphere),ql.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(ql.containsPoint(ts.origin)===!1&&(ts.intersectSphere(ql,kg)===null||ts.origin.distanceToSquared(kg)>(e.far-e.near)**2))&&(Fg.copy(l).invert(),ts.copy(e.ray).applyMatrix4(Fg),!(s.boundingBox!==null&&ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=x.length;E<M;E++){const y=x[E],v=c[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,F=b;C<F;C+=3){const N=f.getX(C),L=f.getX(C+1),z=f.getX(C+2);o=Jl(this,v,e,s,p,m,_,N,L,z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=E,v=M;y<v;y+=3){const D=f.getX(y),b=f.getX(y+1),C=f.getX(y+2);o=Jl(this,c,e,s,p,m,_,D,b,C),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=x.length;E<M;E++){const y=x[E],v=c[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,F=b;C<F;C+=3){const N=C,L=C+1,z=C+2;o=Jl(this,v,e,s,p,m,_,N,L,z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let y=E,v=M;y<v;y+=3){const D=y,b=y+1,C=y+2;o=Jl(this,c,e,s,p,m,_,D,b,C),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function aS(r,e,t,s,o,l,c,f){let h;if(e.side===zn?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===Or,f),h===null)return null;Ql.copy(f),Ql.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ql);return p<t.near||p>t.far?null:{distance:p,point:Ql.clone(),object:r}}function Jl(r,e,t,s,o,l,c,f,h,p){r.getVertexPosition(f,Yl),r.getVertexPosition(h,$l),r.getVertexPosition(p,Kl);const m=aS(r,e,t,s,Yl,$l,Kl,Bg);if(m){const _=new se;ri.getBarycoord(Bg,Yl,$l,Kl,_),o&&(m.uv=ri.getInterpolatedAttribute(o,f,h,p,_,new yt)),l&&(m.uv1=ri.getInterpolatedAttribute(l,f,h,p,_,new yt)),c&&(m.normal=ri.getInterpolatedAttribute(c,f,h,p,_,new se),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new se,materialIndex:0};ri.getNormal(Yl,$l,Kl,x.normal),m.face=x,m.barycoord=_}return m}class Ao extends kr{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],m=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new hs(p,3)),this.setAttribute("normal",new hs(m,3)),this.setAttribute("uv",new hs(_,2));function E(M,y,v,D,b,C,F,N,L,z,P){const w=C/L,I=F/z,B=C/2,W=F/2,$=N/2,fe=L+1,oe=z+1;let ue=0,V=0;const le=new se;for(let ae=0;ae<oe;ae++){const k=ae*I-W;for(let ee=0;ee<fe;ee++){const Ce=ee*w-B;le[M]=Ce*D,le[y]=k*b,le[v]=$,p.push(le.x,le.y,le.z),le[M]=0,le[y]=0,le[v]=N>0?1:-1,m.push(le.x,le.y,le.z),_.push(ee/L),_.push(1-ae/z),ue+=1}}for(let ae=0;ae<z;ae++)for(let k=0;k<L;k++){const ee=x+k+fe*ae,Ce=x+k+fe*(ae+1),J=x+(k+1)+fe*(ae+1),de=x+(k+1)+fe*ae;h.push(ee,Ce,de),h.push(Ce,J,de),V+=6}f.addGroup(S,V,P),S+=V,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xa(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Pn(r){const e={};for(let t=0;t<r.length;t++){const s=xa(r[t]);for(const o in s)e[o]=s[o]}return e}function oS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function T0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const lS={clone:xa,merge:Pn};var uS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uS,this.fragmentShader=cS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=oS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class w0 extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new se,zg=new yt,Hg=new yt;class ii extends w0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(Bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,zg,Hg),t.subVectors(Hg,zg)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bf*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/p,o*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,ea=1;class fS extends Hn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(Js,ea,e,t);o.layers=this.layers,this.add(o);const l=new ii(Js,ea,e,t);l.layers=this.layers,this.add(l);const c=new ii(Js,ea,e,t);c.layers=this.layers,this.add(c);const f=new ii(Js,ea,e,t);f.layers=this.layers,this.add(f);const h=new ii(Js,ea,e,t);h.layers=this.layers,this.add(h);const p=new ii(Js,ea,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Iu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,m]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=M,e.setRenderTarget(s,5,o),e.render(t,m),e.setRenderTarget(_,x,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class A0 extends Ln{constructor(e,t,s,o,l,c,f,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:pa,super(e,t,s,o,l,c,f,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dS extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new A0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ao(5,5,5),l=new Fr({name:"CubemapFromEquirect",uniforms:xa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:Nr});l.uniforms.tEquirect.value=t;const c=new Qi(o,l),f=t.minFilter;return t.minFilter===fs&&(t.minFilter=Pi),new fS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class hS extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=Ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[s+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new se;class Uu{constructor(e,t,s,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=bi(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Lt(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array),o=Lt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array),o=Lt(o,this.array),l=Lt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new xi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class C0 extends wo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ta;const co=new se,na=new se,ia=new se,ra=new yt,fo=new yt,R0=new qt,eu=new se,ho=new se,tu=new se,Vg=new yt,ad=new yt,Gg=new yt;class mS extends Hn{constructor(e=new C0){if(super(),this.isSprite=!0,this.type="Sprite",ta===void 0){ta=new kr;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new pS(t,5);ta.setIndex([0,1,2,0,2,3]),ta.setAttribute("position",new Uu(s,3,0,!1)),ta.setAttribute("uv",new Uu(s,2,3,!1))}this.geometry=ta,this.material=e,this.center=new yt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),na.setFromMatrixScale(this.matrixWorld),R0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ia.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&na.multiplyScalar(-ia.z);const s=this.material.rotation;let o,l;s!==0&&(l=Math.cos(s),o=Math.sin(s));const c=this.center;nu(eu.set(-.5,-.5,0),ia,c,na,o,l),nu(ho.set(.5,-.5,0),ia,c,na,o,l),nu(tu.set(.5,.5,0),ia,c,na,o,l),Vg.set(0,0),ad.set(1,0),Gg.set(1,1);let f=e.ray.intersectTriangle(eu,ho,tu,!1,co);if(f===null&&(nu(ho.set(-.5,.5,0),ia,c,na,o,l),ad.set(0,1),f=e.ray.intersectTriangle(eu,tu,ho,!1,co),f===null))return;const h=e.ray.origin.distanceTo(co);h<e.near||h>e.far||t.push({distance:h,point:co.clone(),uv:ri.getInterpolation(co,eu,ho,tu,Vg,ad,Gg,new yt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nu(r,e,t,s,o,l){ra.subVectors(r,t).addScalar(.5).multiply(s),o!==void 0?(fo.x=l*ra.x-o*ra.y,fo.y=o*ra.x+l*ra.y):fo.copy(ra),r.copy(e),r.x+=fo.x,r.y+=fo.y,r.applyMatrix4(R0)}const od=new se,gS=new se,vS=new ot;class ss{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=od.subVectors(s,t).cross(gS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(od),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||vS.getNormalMatrix(e),o=this.coplanarPoint(od).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Ph,iu=new se;class b0{constructor(e=new ss,t=new ss,s=new ss,o=new ss,l=new ss,c=new ss){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Zi){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],p=o[4],m=o[5],_=o[6],x=o[7],S=o[8],E=o[9],M=o[10],y=o[11],v=o[12],D=o[13],b=o[14],C=o[15];if(s[0].setComponents(h-l,x-p,y-S,C-v).normalize(),s[1].setComponents(h+l,x+p,y+S,C+v).normalize(),s[2].setComponents(h+c,x+m,y+E,C+D).normalize(),s[3].setComponents(h-c,x-m,y-E,C-D).normalize(),s[4].setComponents(h-f,x-_,y-M,C-b).normalize(),t===Zi)s[5].setComponents(h+f,x+_,y+M,C+b).normalize();else if(t===Iu)s[5].setComponents(f,_,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(iu.x=o.normal.x>0?e.max.x:e.min.x,iu.y=o.normal.y>0?e.max.y:e.min.y,iu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mo extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class P0 extends Ln{constructor(e,t,s,o,l,c,f,h,p,m=fa){if(m!==fa&&m!==va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===fa&&(s=gs),s===void 0&&m===va&&(s=ga),super(null,o,l,c,f,h,m,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:_i,this.minFilter=h!==void 0?h:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gu extends kr{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,m=h+1,_=e/f,x=t/h,S=[],E=[],M=[],y=[];for(let v=0;v<m;v++){const D=v*x-c;for(let b=0;b<p;b++){const C=b*_-l;E.push(C,-D,0),M.push(0,0,1),y.push(b/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<f;D++){const b=D+p*v,C=D+p*(v+1),F=D+1+p*(v+1),N=D+1+p*v;S.push(b,C,N),S.push(C,F,N)}this.setIndex(S),this.setAttribute("position",new hs(E,3)),this.setAttribute("normal",new hs(M,3)),this.setAttribute("uv",new hs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class _S extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xS extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wg={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class yS{constructor(e,t,s){const o=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&o.onStart!==void 0&&o.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,o.onProgress!==void 0&&o.onProgress(m,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return p.push(m,_),this},this.removeHandler=function(m){const _=p.indexOf(m);return _!==-1&&p.splice(_,2),this},this.getHandler=function(m){for(let _=0,x=p.length;_<x;_+=2){const S=p[_],E=p[_+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const SS=new yS;class Dh{constructor(e){this.manager=e!==void 0?e:SS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Dh.DEFAULT_MATERIAL_NAME="__DEFAULT";class ES extends Dh{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Wg.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=yo("img");function h(){m(),Wg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(_){m(),o&&o(_),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class MS extends Dh{constructor(e){super(e)}load(e,t,s,o){const l=new Ln,c=new ES(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class TS extends w0{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,h=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wS extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const jg=new qt;class AS{constructor(e,t,s=0,o=1/0){this.ray=new x0(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new Lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jg),this}intersectObject(e,t=!0,s=[]){return hh(e,this,s,t),s.sort(Xg),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)hh(e[o],this,s,t);return s.sort(Xg),s}}function Xg(r,e){return r.distance-e.distance}function hh(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){const l=r.children;for(let c=0,f=l.length;c<f;c++)hh(l[c],e,t,!0)}}function qg(r,e,t,s){const o=CS(s);switch(t){case l0:return r*e;case c0:return r*e;case f0:return r*e*2;case d0:return r*e/o.components*o.byteLength;case Ch:return r*e/o.components*o.byteLength;case h0:return r*e*2/o.components*o.byteLength;case Rh:return r*e*2/o.components*o.byteLength;case u0:return r*e*3/o.components*o.byteLength;case vi:return r*e*4/o.components*o.byteLength;case bh:return r*e*4/o.components*o.byteLength;case Eu:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tu:case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zd:case Vd:return Math.max(r,16)*Math.max(e,8)/4;case Bd:case Hd:return Math.max(r,8)*Math.max(e,8)/2;case Gd:case Wd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Au:case ah:case oh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case p0:case lh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case uh:case ch:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CS(r){switch(r){case er:case s0:return{byteLength:1,components:1};case xo:case a0:case Eo:return{byteLength:2,components:1};case wh:case Ah:return{byteLength:2,components:4};case gs:case Th:case Ki:return{byteLength:4,components:1};case o0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L0(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function RS(r){const e=new WeakMap;function t(f,h){const p=f.array,m=f.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,h,p){const m=h.array,_=h.updateRanges;if(r.bindBuffer(p,f),_.length===0)r.bufferSubData(p,0,m);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],M=_[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++x,_[x]=M)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const M=_[S];r.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var bS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,US=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s1="gl_FragColor = linearToOutputTexel( gl_FragColor );",a1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,v1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,S1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,j1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ME=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:bS,alphahash_pars_fragment:PS,alphamap_fragment:LS,alphamap_pars_fragment:DS,alphatest_fragment:NS,alphatest_pars_fragment:IS,aomap_fragment:US,aomap_pars_fragment:OS,batching_pars_vertex:FS,batching_vertex:kS,begin_vertex:BS,beginnormal_vertex:zS,bsdfs:HS,iridescence_fragment:VS,bumpmap_pars_fragment:GS,clipping_planes_fragment:WS,clipping_planes_pars_fragment:jS,clipping_planes_pars_vertex:XS,clipping_planes_vertex:qS,color_fragment:YS,color_pars_fragment:$S,color_pars_vertex:KS,color_vertex:ZS,common:QS,cube_uv_reflection_fragment:JS,defaultnormal_vertex:e1,displacementmap_pars_vertex:t1,displacementmap_vertex:n1,emissivemap_fragment:i1,emissivemap_pars_fragment:r1,colorspace_fragment:s1,colorspace_pars_fragment:a1,envmap_fragment:o1,envmap_common_pars_fragment:l1,envmap_pars_fragment:u1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:S1,envmap_vertex:f1,fog_vertex:d1,fog_pars_vertex:h1,fog_fragment:p1,fog_pars_fragment:m1,gradientmap_pars_fragment:g1,lightmap_pars_fragment:v1,lights_lambert_fragment:_1,lights_lambert_pars_fragment:x1,lights_pars_begin:y1,lights_toon_fragment:E1,lights_toon_pars_fragment:M1,lights_phong_fragment:T1,lights_phong_pars_fragment:w1,lights_physical_fragment:A1,lights_physical_pars_fragment:C1,lights_fragment_begin:R1,lights_fragment_maps:b1,lights_fragment_end:P1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:D1,logdepthbuf_pars_vertex:N1,logdepthbuf_vertex:I1,map_fragment:U1,map_pars_fragment:O1,map_particle_fragment:F1,map_particle_pars_fragment:k1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:z1,morphinstance_vertex:H1,morphcolor_vertex:V1,morphnormal_vertex:G1,morphtarget_pars_vertex:W1,morphtarget_vertex:j1,normal_fragment_begin:X1,normal_fragment_maps:q1,normal_pars_fragment:Y1,normal_pars_vertex:$1,normal_vertex:K1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:Q1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:eE,iridescence_pars_fragment:tE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:aE,dithering_pars_fragment:oE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:cE,shadowmap_pars_vertex:fE,shadowmap_vertex:dE,shadowmask_pars_fragment:hE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:vE,specularmap_fragment:_E,specularmap_pars_fragment:xE,tonemapping_fragment:yE,tonemapping_pars_fragment:SE,transmission_fragment:EE,transmission_pars_fragment:ME,uv_pars_fragment:TE,uv_pars_vertex:wE,uv_vertex:AE,worldpos_vertex:CE,background_vert:RE,background_frag:bE,backgroundCube_vert:PE,backgroundCube_frag:LE,cube_vert:DE,cube_frag:NE,depth_vert:IE,depth_frag:UE,distanceRGBA_vert:OE,distanceRGBA_frag:FE,equirect_vert:kE,equirect_frag:BE,linedashed_vert:zE,linedashed_frag:HE,meshbasic_vert:VE,meshbasic_frag:GE,meshlambert_vert:WE,meshlambert_frag:jE,meshmatcap_vert:XE,meshmatcap_frag:qE,meshnormal_vert:YE,meshnormal_frag:$E,meshphong_vert:KE,meshphong_frag:ZE,meshphysical_vert:QE,meshphysical_frag:JE,meshtoon_vert:eM,meshtoon_frag:tM,points_vert:nM,points_frag:iM,shadow_vert:rM,shadow_frag:sM,sprite_vert:aM,sprite_frag:oM},Le={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ci={basic:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new bt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Pn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Pn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new bt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Pn([Le.points,Le.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Pn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Pn([Le.common,Le.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Pn([Le.sprite,Le.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Pn([Le.common,Le.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Pn([Le.lights,Le.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ci.physical={uniforms:Pn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const ru={r:0,b:0,g:0},is=new tr,lM=new qt;function uM(r,e,t,s,o,l,c){const f=new bt(0);let h=l===!0?0:1,p,m,_=null,x=0,S=null;function E(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?t:e).get(C)),C}function M(b){let C=!1;const F=E(b);F===null?v(f,h):F&&F.isColor&&(v(F,1),C=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(b,C){const F=E(C);F&&(F.isCubeTexture||F.mapping===Vu)?(m===void 0&&(m=new Qi(new Ao(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:xa(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),is.copy(C.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.material.uniforms.envMap.value=F,m.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(lM.makeRotationFromEuler(is)),m.material.toneMapped=wt.getTransfer(F.colorSpace)!==Pt,(_!==F||x!==F.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,_=F,x=F.version,S=r.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Qi(new Gu(2,2),new Fr({name:"BackgroundMaterial",uniforms:xa(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=wt.getTransfer(F.colorSpace)!==Pt,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||x!==F.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=F,x=F.version,S=r.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function v(b,C){b.getRGB(ru,T0(r)),s.buffers.color.setClear(ru.r,ru.g,ru.b,C,c)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(b,C=1){f.set(b),h=C,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,v(f,h)},render:M,addToRenderList:y,dispose:D}}function cM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=x(null);let l=o,c=!1;function f(w,I,B,W,$){let fe=!1;const oe=_(W,B,I);l!==oe&&(l=oe,p(l.object)),fe=S(w,W,B,$),fe&&E(w,W,B,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,C(w,I,B,W),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function h(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function m(w){return r.deleteVertexArray(w)}function _(w,I,B){const W=B.wireframe===!0;let $=s[w.id];$===void 0&&($={},s[w.id]=$);let fe=$[I.id];fe===void 0&&(fe={},$[I.id]=fe);let oe=fe[W];return oe===void 0&&(oe=x(h()),fe[W]=oe),oe}function x(w){const I=[],B=[],W=[];for(let $=0;$<t;$++)I[$]=0,B[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:W,object:w,attributes:{},index:null}}function S(w,I,B,W){const $=l.attributes,fe=I.attributes;let oe=0;const ue=B.getAttributes();for(const V in ue)if(ue[V].location>=0){const ae=$[V];let k=fe[V];if(k===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(k=w.instanceColor)),ae===void 0||ae.attribute!==k||k&&ae.data!==k.data)return!0;oe++}return l.attributesNum!==oe||l.index!==W}function E(w,I,B,W){const $={},fe=I.attributes;let oe=0;const ue=B.getAttributes();for(const V in ue)if(ue[V].location>=0){let ae=fe[V];ae===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));const k={};k.attribute=ae,ae&&ae.data&&(k.data=ae.data),$[V]=k,oe++}l.attributes=$,l.attributesNum=oe,l.index=W}function M(){const w=l.newAttributes;for(let I=0,B=w.length;I<B;I++)w[I]=0}function y(w){v(w,0)}function v(w,I){const B=l.newAttributes,W=l.enabledAttributes,$=l.attributeDivisors;B[w]=1,W[w]===0&&(r.enableVertexAttribArray(w),W[w]=1),$[w]!==I&&(r.vertexAttribDivisor(w,I),$[w]=I)}function D(){const w=l.newAttributes,I=l.enabledAttributes;for(let B=0,W=I.length;B<W;B++)I[B]!==w[B]&&(r.disableVertexAttribArray(B),I[B]=0)}function b(w,I,B,W,$,fe,oe){oe===!0?r.vertexAttribIPointer(w,I,B,$,fe):r.vertexAttribPointer(w,I,B,W,$,fe)}function C(w,I,B,W){M();const $=W.attributes,fe=B.getAttributes(),oe=I.defaultAttributeValues;for(const ue in fe){const V=fe[ue];if(V.location>=0){let le=$[ue];if(le===void 0&&(ue==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),ue==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),le!==void 0){const ae=le.normalized,k=le.itemSize,ee=e.get(le);if(ee===void 0)continue;const Ce=ee.buffer,J=ee.type,de=ee.bytesPerElement,_e=J===r.INT||J===r.UNSIGNED_INT||le.gpuType===Th;if(le.isInterleavedBufferAttribute){const me=le.data,ve=me.stride,we=le.offset;if(me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)v(V.location+Ve,me.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)y(V.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ve=0;Ve<V.locationSize;Ve++)b(V.location+Ve,k/V.locationSize,J,ae,ve*de,(we+k/V.locationSize*Ve)*de,_e)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<V.locationSize;me++)v(V.location+me,le.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<V.locationSize;me++)y(V.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let me=0;me<V.locationSize;me++)b(V.location+me,k/V.locationSize,J,ae,k*de,k/V.locationSize*me*de,_e)}}else if(oe!==void 0){const ae=oe[ue];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(V.location,ae);break;case 3:r.vertexAttrib3fv(V.location,ae);break;case 4:r.vertexAttrib4fv(V.location,ae);break;default:r.vertexAttrib1fv(V.location,ae)}}}}D()}function F(){z();for(const w in s){const I=s[w];for(const B in I){const W=I[B];for(const $ in W)m(W[$].object),delete W[$];delete I[B]}delete s[w]}}function N(w){if(s[w.id]===void 0)return;const I=s[w.id];for(const B in I){const W=I[B];for(const $ in W)m(W[$].object),delete W[$];delete I[B]}delete s[w.id]}function L(w){for(const I in s){const B=s[I];if(B[w.id]===void 0)continue;const W=B[w.id];for(const $ in W)m(W[$].object),delete W[$];delete B[w.id]}}function z(){P(),c=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:P,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:y,disableUnusedAttributes:D}}function fM(r,e,t){let s;function o(p){s=p}function l(p,m){r.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,_){_!==0&&(r.drawArraysInstanced(s,p,m,_),t.update(m,s,_))}function f(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,_);let S=0;for(let E=0;E<_;E++)S+=m[E];t.update(S,s,1)}function h(p,m,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,m,0,x,0,_);let E=0;for(let M=0;M<_;M++)E+=m[M]*x[M];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function dM(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(L){return!(L!==vi&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(L){const z=L===Eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==er&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ki&&!z)}function h(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:F,maxSamples:N}}function hM(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new ss,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||o;return o=x,s=_.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=m(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!o||E===null||E.length===0||l&&!y)l?m(null):p();else{const D=l?0:s,b=D*4;let C=v.clippingState||null;h.value=C,C=m(E,x,b,S);for(let F=0;F!==b;++F)C[F]=t[F];v.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(_,x,S,E){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=h.value,E!==!0||y===null){const v=S+M*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let b=0,C=S;b!==M;++b,C+=4)c.copy(_[b]).applyMatrix4(D,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function pM(r){let e=new WeakMap;function t(c,f){return f===Ud?c.mapping=pa:f===Od&&(c.mapping=ma),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Ud||f===Od)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new dS(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const la=4,Yg=[.125,.215,.35,.446,.526,.582],us=20,ld=new TS,$g=new bt;let ud=null,cd=0,fd=0,dd=!1;const as=(1+Math.sqrt(5))/2,sa=1/as,Kg=[new se(-as,sa,0),new se(as,sa,0),new se(-sa,0,as),new se(sa,0,as),new se(0,as,-sa),new se(0,as,sa),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)];class Zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,cd,fd),this._renderer.xr.enabled=dd,e.scissorTest=!1,su(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pa||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:Eo,format:vi,colorSpace:_a,depthBuffer:!1},o=Qg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mM(l)),this._blurMaterial=gM(l,e,t)}return o}_compileMaterial(e){const t=new Qi(this._lodPlanes[0],e);this._renderer.compile(t,ld)}_sceneToCubeUV(e,t,s,o){const f=new ii(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor($g),m.toneMapping=Ir,m.autoClear=!1;const S=new S0({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),E=new Qi(new Ao,S);let M=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,M=!0):(S.color.copy($g),M=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(f.up.set(0,h[v],0),f.lookAt(p[v],0,0)):D===1?(f.up.set(0,0,h[v]),f.lookAt(0,p[v],0)):(f.up.set(0,h[v],0),f.lookAt(0,0,p[v]));const b=this._cubeSize;su(o,D*b,v>2?b:0,b,b),m.setRenderTarget(o),M&&m.render(E,f),m.render(e,f)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=x,m.autoClear=_,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===pa||e.mapping===ma;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Qi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;su(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,ld)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Kg[(o-l-1)%Kg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Qi(this._lodPlanes[o],p),x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*us-1),M=l/E,y=isFinite(l)?1+Math.floor(m*M):us;y>us&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${us}`);const v=[];let D=0;for(let L=0;L<us;++L){const z=L/M,P=Math.exp(-z*z/2);v.push(P),L===0?D+=P:L<y&&(D+=2*P)}for(let L=0;L<v.length;L++)v[L]=v[L]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:b}=this;x.dTheta.value=E,x.mipInt.value=b-s;const C=this._sizeLods[o],F=3*C*(o>b-la?o-b+la:0),N=4*(this._cubeSize-C);su(t,F,N,3*C,2*C),h.setRenderTarget(t),h.render(_,ld)}}function mM(r){const e=[],t=[],s=[];let o=r;const l=r-la+1+Yg.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>r-la?h=Yg[c-r+la-1]:c===0&&(h=0),s.push(h);const p=1/(f-2),m=-p,_=1+p,x=[m,m,_,m,_,_,m,m,_,_,m,_],S=6,E=6,M=3,y=2,v=1,D=new Float32Array(M*E*S),b=new Float32Array(y*E*S),C=new Float32Array(v*E*S);for(let N=0;N<S;N++){const L=N%3*2/3-1,z=N>2?0:-1,P=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];D.set(P,M*E*N),b.set(x,y*E*N);const w=[N,N,N,N,N,N];C.set(w,v*E*N)}const F=new kr;F.setAttribute("position",new xi(D,M)),F.setAttribute("uv",new xi(b,y)),F.setAttribute("faceIndex",new xi(C,v)),e.push(F),o>la&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Qg(r,e,t){const s=new vs(r,e,t);return s.texture.mapping=Vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function su(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function gM(r,e,t){const s=new Float32Array(us),o=new se(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Jg(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function ev(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Nh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vM(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===Ud||h===Od,m=h===pa||h===ma;if(p||m){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Zg(r)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new Zg(r)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let h=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function _M(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&oa("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function xM(r,e,t,s){const o={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",c),delete o[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,E=_.attributes.position;let M=0;if(S!==null){const D=S.array;M=S.version;for(let b=0,C=D.length;b<C;b+=3){const F=D[b+0],N=D[b+1],L=D[b+2];x.push(F,N,N,L,L,F)}}else if(E!==void 0){const D=E.array;M=E.version;for(let b=0,C=D.length/3-1;b<C;b+=3){const F=b+0,N=b+1,L=b+2;x.push(F,N,N,L,L,F)}}else return;const y=new(g0(x)?M0:E0)(x,1);y.version=M;const v=l.get(_);v&&e.remove(v),l.set(_,y)}function m(_){const x=l.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:m}}function yM(r,e,t){let s;function o(x){s=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){r.drawElements(s,S,l,x*c),t.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,x*c,E),t.update(S,s,E))}function m(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,x,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];t.update(y,s,1)}function _(x,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/c,S[v],M[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,x,0,M,0,E);let v=0;for(let D=0;D<E;D++)v+=S[D]*M[D];t.update(v,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function SM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function EM(r,e,t){const s=new WeakMap,o=new $t;function l(c,f,h){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let x=s.get(f);if(x===void 0||x.count!==_){let w=function(){z.dispose(),s.delete(f),f.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),M===!0&&(C=2),y===!0&&(C=3);let F=f.attributes.position.count*C,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const L=new Float32Array(F*N*4*_),z=new _0(L,F,N,_);z.type=Ki,z.needsUpdate=!0;const P=C*4;for(let I=0;I<_;I++){const B=v[I],W=D[I],$=b[I],fe=F*N*4*I;for(let oe=0;oe<B.count;oe++){const ue=oe*P;E===!0&&(o.fromBufferAttribute(B,oe),L[fe+ue+0]=o.x,L[fe+ue+1]=o.y,L[fe+ue+2]=o.z,L[fe+ue+3]=0),M===!0&&(o.fromBufferAttribute(W,oe),L[fe+ue+4]=o.x,L[fe+ue+5]=o.y,L[fe+ue+6]=o.z,L[fe+ue+7]=0),y===!0&&(o.fromBufferAttribute($,oe),L[fe+ue+8]=o.x,L[fe+ue+9]=o.y,L[fe+ue+10]=o.z,L[fe+ue+11]=$.itemSize===4?o.w:1)}}x={count:_,texture:z,size:new yt(F,N)},s.set(f,x),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const M=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function MM(r,e,t,s){let o=new WeakMap;function l(h){const p=s.render.frame,m=h.geometry,_=e.get(h,m);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const D0=new Ln,tv=new P0(1,1),N0=new _0,I0=new Ky,U0=new A0,nv=[],iv=[],rv=new Float32Array(16),sv=new Float32Array(9),av=new Float32Array(4);function Aa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=nv[o];if(l===void 0&&(l=new Float32Array(o),nv[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Wu(r,e){let t=iv[e];t===void 0&&(t=new Int32Array(e),iv[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function TM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function AM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function CM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function RM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;av.set(s),r.uniformMatrix2fv(this.addr,!1,av),rn(t,s)}}function bM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;sv.set(s),r.uniformMatrix3fv(this.addr,!1,sv),rn(t,s)}}function PM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;rv.set(s),r.uniformMatrix4fv(this.addr,!1,rv),rn(t,s)}}function LM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function DM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function NM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function UM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function OM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function BM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(tv.compareFunction=m0,l=tv):l=D0,t.setTexture2D(e||l,o)}function zM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||I0,o)}function HM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||U0,o)}function VM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||N0,o)}function GM(r){switch(r){case 5126:return TM;case 35664:return wM;case 35665:return AM;case 35666:return CM;case 35674:return RM;case 35675:return bM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return DM;case 35668:case 35672:return NM;case 35669:case 35673:return IM;case 5125:return UM;case 36294:return OM;case 36295:return FM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return VM}}function WM(r,e){r.uniform1fv(this.addr,e)}function jM(r,e){const t=Aa(e,this.size,2);r.uniform2fv(this.addr,t)}function XM(r,e){const t=Aa(e,this.size,3);r.uniform3fv(this.addr,t)}function qM(r,e){const t=Aa(e,this.size,4);r.uniform4fv(this.addr,t)}function YM(r,e){const t=Aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function $M(r,e){const t=Aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function KM(r,e){const t=Aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ZM(r,e){r.uniform1iv(this.addr,e)}function QM(r,e){r.uniform2iv(this.addr,e)}function JM(r,e){r.uniform3iv(this.addr,e)}function eT(r,e){r.uniform4iv(this.addr,e)}function tT(r,e){r.uniform1uiv(this.addr,e)}function nT(r,e){r.uniform2uiv(this.addr,e)}function iT(r,e){r.uniform3uiv(this.addr,e)}function rT(r,e){r.uniform4uiv(this.addr,e)}function sT(r,e,t){const s=this.cache,o=e.length,l=Wu(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||D0,l[c])}function aT(r,e,t){const s=this.cache,o=e.length,l=Wu(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||I0,l[c])}function oT(r,e,t){const s=this.cache,o=e.length,l=Wu(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||U0,l[c])}function lT(r,e,t){const s=this.cache,o=e.length,l=Wu(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||N0,l[c])}function uT(r){switch(r){case 5126:return WM;case 35664:return jM;case 35665:return XM;case 35666:return qM;case 35674:return YM;case 35675:return $M;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return QM;case 35668:case 35672:return JM;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return lT}}class cT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=GM(t.type)}}class fT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uT(t.type)}}class dT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function ov(r,e){r.seq.push(e),r.map[e.id]=e}function hT(r,e,t){const s=r.name,o=s.length;for(hd.lastIndex=0;;){const l=hd.exec(s),c=hd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){ov(t,p===void 0?new cT(f,r,e):new fT(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new dT(f),ov(t,_)),t=_}}}class Cu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);hT(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function lv(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const pT=37297;let mT=0;function gT(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const uv=new ot;function vT(r){wt._getMatrix(uv,wt.workingColorSpace,r);const e=`mat3( ${uv.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case Nu:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cv(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+gT(r.getShaderSource(e),c)}else return o}function _T(r,e){const t=vT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xT(r,e){let t;switch(e){case Sy:t="Linear";break;case Ey:t="Reinhard";break;case My:t="Cineon";break;case Ty:t="ACESFilmic";break;case Ay:t="AgX";break;case Cy:t="Neutral";break;case wy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const au=new se;function yT(){wt.getLuminanceCoefficients(au);const r=au.x.toFixed(4),e=au.y.toFixed(4),t=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ST(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function ET(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function MT(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function go(r){return r!==""}function fv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(r){return r.replace(TT,AT)}const wT=new Map;function AT(r,e){let t=lt[e];if(t===void 0){const s=wT.get(e);if(s!==void 0)t=lt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ph(t)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(r){return r.replace(CT,RT)}function RT(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function pv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ey?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function PT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case pa:case ma:e="ENVMAP_TYPE_CUBE";break;case Vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ma:e="ENVMAP_MODE_REFRACTION";break}return e}function DT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case i0:e="ENVMAP_BLENDING_MULTIPLY";break;case xy:e="ENVMAP_BLENDING_MIX";break;case yy:e="ENVMAP_BLENDING_ADD";break}return e}function NT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function IT(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=bT(t),p=PT(t),m=LT(t),_=DT(t),x=NT(t),S=ST(t),E=ET(l),M=o.createProgram();let y,v,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(go).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(go).join(`
`),v.length>0&&(v+=`
`)):(y=[pv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),v=[pv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ir?xT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,_T("linearToOutputTexel",t.outputColorSpace),yT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),c=ph(c),c=fv(c,t),c=dv(c,t),f=ph(f),f=fv(f,t),f=dv(f,t),c=hv(c),f=hv(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=D+y+c,C=D+v+f,F=lv(o,o.VERTEX_SHADER,b),N=lv(o,o.FRAGMENT_SHADER,C);o.attachShader(M,F),o.attachShader(M,N),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function L(I){if(r.debug.checkShaderErrors){const B=o.getProgramInfoLog(M).trim(),W=o.getShaderInfoLog(F).trim(),$=o.getShaderInfoLog(N).trim();let fe=!0,oe=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(fe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,F,N);else{const ue=cv(o,F,"vertex"),V=cv(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ue+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(W===""||$==="")&&(oe=!1);oe&&(I.diagnostics={runnable:fe,programLog:B,vertexShader:{log:W,prefix:y},fragmentShader:{log:$,prefix:v}})}o.deleteShader(F),o.deleteShader(N),z=new Cu(o,M),P=MT(o,M)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let P;this.getAttributes=function(){return P===void 0&&L(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(M,pT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=N,this}let UT=0;class OT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new FT(e),t.set(e,s)),s}}class FT{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}}function kT(r,e,t,s,o,l,c){const f=new Lh,h=new OT,p=new Set,m=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,w,I,B,W){const $=B.fog,fe=W.geometry,oe=P.isMeshStandardMaterial?B.environment:null,ue=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),V=ue&&ue.mapping===Vu?ue.image.height:null,le=E[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const ae=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,k=ae!==void 0?ae.length:0;let ee=0;fe.morphAttributes.position!==void 0&&(ee=1),fe.morphAttributes.normal!==void 0&&(ee=2),fe.morphAttributes.color!==void 0&&(ee=3);let Ce,J,de,_e;if(le){const St=Ci[le];Ce=St.vertexShader,J=St.fragmentShader}else Ce=P.vertexShader,J=P.fragmentShader,h.update(P),de=h.getVertexShaderID(P),_e=h.getFragmentShaderID(P);const me=r.getRenderTarget(),ve=r.state.buffers.depth.getReversed(),we=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,ct=!!P.map,nt=!!P.matcap,Nt=!!ue,G=!!P.aoMap,Tn=!!P.lightMap,mt=!!P.bumpMap,dt=!!P.normalMap,Ye=!!P.displacementMap,Rt=!!P.emissiveMap,je=!!P.metalnessMap,U=!!P.roughnessMap,A=P.anisotropy>0,ne=P.clearcoat>0,ge=P.dispersion>0,ye=P.iridescence>0,he=P.sheen>0,Xe=P.transmission>0,Re=A&&!!P.anisotropyMap,Oe=ne&&!!P.clearcoatMap,ft=ne&&!!P.clearcoatNormalMap,Te=ne&&!!P.clearcoatRoughnessMap,ke=ye&&!!P.iridescenceMap,Ke=ye&&!!P.iridescenceThicknessMap,et=he&&!!P.sheenColorMap,Be=he&&!!P.sheenRoughnessMap,ht=!!P.specularMap,rt=!!P.specularColorMap,At=!!P.specularIntensityMap,X=Xe&&!!P.transmissionMap,be=Xe&&!!P.thicknessMap,ce=!!P.gradientMap,pe=!!P.alphaMap,Ne=P.alphaTest>0,De=!!P.alphaHash,st=!!P.extensions;let Ut=Ir;P.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Jt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ce,fragmentShader:J,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:we,instancingColor:we&&W.instanceColor!==null,instancingMorph:we&&W.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:_a,alphaToCoverage:!!P.alphaToCoverage,map:ct,matcap:nt,envMap:Nt,envMapMode:Nt&&ue.mapping,envMapCubeUVHeight:V,aoMap:G,lightMap:Tn,bumpMap:mt,normalMap:dt,displacementMap:x&&Ye,emissiveMap:Rt,normalMapObjectSpace:dt&&P.normalMapType===Dy,normalMapTangentSpace:dt&&P.normalMapType===Ly,metalnessMap:je,roughnessMap:U,anisotropy:A,anisotropyMap:Re,clearcoat:ne,clearcoatMap:Oe,clearcoatNormalMap:ft,clearcoatRoughnessMap:Te,dispersion:ge,iridescence:ye,iridescenceMap:ke,iridescenceThicknessMap:Ke,sheen:he,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:ht,specularColorMap:rt,specularIntensityMap:At,transmission:Xe,transmissionMap:X,thicknessMap:be,gradientMap:ce,opaque:P.transparent===!1&&P.blending===ca&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ne,alphaHash:De,combine:P.combine,mapUv:ct&&M(P.map.channel),aoMapUv:G&&M(P.aoMap.channel),lightMapUv:Tn&&M(P.lightMap.channel),bumpMapUv:mt&&M(P.bumpMap.channel),normalMapUv:dt&&M(P.normalMap.channel),displacementMapUv:Ye&&M(P.displacementMap.channel),emissiveMapUv:Rt&&M(P.emissiveMap.channel),metalnessMapUv:je&&M(P.metalnessMap.channel),roughnessMapUv:U&&M(P.roughnessMap.channel),anisotropyMapUv:Re&&M(P.anisotropyMap.channel),clearcoatMapUv:Oe&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(P.sheenRoughnessMap.channel),specularMapUv:ht&&M(P.specularMap.channel),specularColorMapUv:rt&&M(P.specularColorMap.channel),specularIntensityMapUv:At&&M(P.specularIntensityMap.channel),transmissionMapUv:X&&M(P.transmissionMap.channel),thicknessMapUv:be&&M(P.thicknessMap.channel),alphaMapUv:pe&&M(P.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(dt||A),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!fe.attributes.uv&&(ct||pe),fog:!!$,useFog:P.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ve,skinning:W.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:ct&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===$i,flipSided:P.side===zn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Jt.vertexUv1s=p.has(1),Jt.vertexUv2s=p.has(2),Jt.vertexUv3s=p.has(3),p.clear(),Jt}function v(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const I in P.defines)w.push(I),w.push(P.defines[I]);return P.isRawShaderMaterial===!1&&(D(w,P),b(w,P),w.push(r.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function D(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function b(P,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const w=E[P.type];let I;if(w){const B=Ci[w];I=lS.clone(B.uniforms)}else I=P.uniforms;return I}function F(P,w){let I;for(let B=0,W=m.length;B<W;B++){const $=m[B];if($.cacheKey===w){I=$,++I.usedTimes;break}}return I===void 0&&(I=new IT(r,w,P,l),m.push(I)),I}function N(P){if(--P.usedTimes===0){const w=m.indexOf(P);m[w]=m[m.length-1],m.pop(),P.destroy()}}function L(P){h.remove(P)}function z(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:F,releaseProgram:N,releaseShaderCache:L,programs:m,dispose:z}}function BT(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function o(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function zT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gv(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(_,x,S,E,M,y){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:M,group:y},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=M,v.group=y),e++,v}function f(_,x,S,E,M,y){const v=c(_,x,S,E,M,y);S.transmission>0?s.push(v):S.transparent===!0?o.push(v):t.push(v)}function h(_,x,S,E,M,y){const v=c(_,x,S,E,M,y);S.transmission>0?s.unshift(v):S.transparent===!0?o.unshift(v):t.unshift(v)}function p(_,x){t.length>1&&t.sort(_||zT),s.length>1&&s.sort(x||mv),o.length>1&&o.sort(x||mv)}function m(){for(let _=e,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:h,finish:m,sort:p}}function HT(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new gv,r.set(s,[c])):o>=l.length?(c=new gv,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function VT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new bt};break;case"SpotLight":t={position:new se,direction:new se,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=t,t}}}function GT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let WT=0;function jT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function XT(r){const e=new VT,t=GT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new se);const o=new se,l=new qt,c=new qt;function f(p){let m=0,_=0,x=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,E=0,M=0,y=0,v=0,D=0,b=0,C=0,F=0,N=0,L=0;p.sort(jT);for(let P=0,w=p.length;P<w;P++){const I=p[P],B=I.color,W=I.intensity,$=I.distance,fe=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)m+=B.r*W,_+=B.g*W,x+=B.b*W;else if(I.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(I.sh.coefficients[oe],W);L++}else if(I.isDirectionalLight){const oe=e.get(I);if(oe.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ue=I.shadow,V=t.get(I);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,s.directionalShadow[S]=V,s.directionalShadowMap[S]=fe,s.directionalShadowMatrix[S]=I.shadow.matrix,D++}s.directional[S]=oe,S++}else if(I.isSpotLight){const oe=e.get(I);oe.position.setFromMatrixPosition(I.matrixWorld),oe.color.copy(B).multiplyScalar(W),oe.distance=$,oe.coneCos=Math.cos(I.angle),oe.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),oe.decay=I.decay,s.spot[M]=oe;const ue=I.shadow;if(I.map&&(s.spotLightMap[F]=I.map,F++,ue.updateMatrices(I),I.castShadow&&N++),s.spotLightMatrix[M]=ue.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,s.spotShadow[M]=V,s.spotShadowMap[M]=fe,C++}M++}else if(I.isRectAreaLight){const oe=e.get(I);oe.color.copy(B).multiplyScalar(W),oe.halfWidth.set(I.width*.5,0,0),oe.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=oe,y++}else if(I.isPointLight){const oe=e.get(I);if(oe.color.copy(I.color).multiplyScalar(I.intensity),oe.distance=I.distance,oe.decay=I.decay,I.castShadow){const ue=I.shadow,V=t.get(I);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,V.shadowCameraNear=ue.camera.near,V.shadowCameraFar=ue.camera.far,s.pointShadow[E]=V,s.pointShadowMap[E]=fe,s.pointShadowMatrix[E]=I.shadow.matrix,b++}s.point[E]=oe,E++}else if(I.isHemisphereLight){const oe=e.get(I);oe.skyColor.copy(I.color).multiplyScalar(W),oe.groundColor.copy(I.groundColor).multiplyScalar(W),s.hemi[v]=oe,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=_,s.ambient[2]=x;const z=s.hash;(z.directionalLength!==S||z.pointLength!==E||z.spotLength!==M||z.rectAreaLength!==y||z.hemiLength!==v||z.numDirectionalShadows!==D||z.numPointShadows!==b||z.numSpotShadows!==C||z.numSpotMaps!==F||z.numLightProbes!==L)&&(s.directional.length=S,s.spot.length=M,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=C+F-N,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=L,z.directionalLength=S,z.pointLength=E,z.spotLength=M,z.rectAreaLength=y,z.hemiLength=v,z.numDirectionalShadows=D,z.numPointShadows=b,z.numSpotShadows=C,z.numSpotMaps=F,z.numLightProbes=L,s.version=WT++)}function h(p,m){let _=0,x=0,S=0,E=0,M=0;const y=m.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const b=p[v];if(b.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),_++}else if(b.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(b.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(b.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const C=s.hemi[M];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(y),M++}}}return{setup:f,setupView:h,state:s}}function vv(r){const e=new XT(r),t=[],s=[];function o(m){p.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function h(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function qT(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new vv(r),e.set(o,[f])):l>=c.length?(f=new vv(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const YT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$T=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KT(r,e,t){let s=new b0;const o=new yt,l=new yt,c=new $t,f=new _S({depthPacking:Py}),h=new xS,p={},m=t.maxTextureSize,_={[Or]:zn,[zn]:Or,[$i]:$i},x=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:YT,fragmentShader:$T}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new kr;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qi(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n0;let v=this.type;this.render=function(N,L,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const P=r.getRenderTarget(),w=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Nr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=v!==qi&&this.type===qi,$=v===qi&&this.type!==qi;for(let fe=0,oe=N.length;fe<oe;fe++){const ue=N[fe],V=ue.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const le=V.getFrameExtents();if(o.multiply(le),l.copy(V.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/le.x),o.x=l.x*le.x,V.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/le.y),o.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||W===!0||$===!0){const k=this.type!==qi?{minFilter:_i,magFilter:_i}:{};V.map!==null&&V.map.dispose(),V.map=new vs(o.x,o.y,k),V.map.texture.name=ue.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const ae=V.getViewportCount();for(let k=0;k<ae;k++){const ee=V.getViewport(k);c.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),B.viewport(c),V.updateMatrices(ue,k),s=V.getFrustum(),C(L,z,V.camera,ue,this.type)}V.isPointLightShadow!==!0&&this.type===qi&&D(V,z),V.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(P,w,I)};function D(N,L){const z=e.update(M);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new vs(o.x,o.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(L,null,z,x,M,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(L,null,z,S,M,null)}function b(N,L,z,P){let w=null;const I=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(I!==void 0)w=I;else if(w=z.isPointLight===!0?h:f,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const B=w.uuid,W=L.uuid;let $=p[B];$===void 0&&($={},p[B]=$);let fe=$[W];fe===void 0&&(fe=w.clone(),$[W]=fe,L.addEventListener("dispose",F)),w=fe}if(w.visible=L.visible,w.wireframe=L.wireframe,P===qi?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:_[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const B=r.properties.get(w);B.light=z}return w}function C(N,L,z,P,w){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===qi)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const W=e.update(N),$=N.material;if(Array.isArray($)){const fe=W.groups;for(let oe=0,ue=fe.length;oe<ue;oe++){const V=fe[oe],le=$[V.materialIndex];if(le&&le.visible){const ae=b(N,le,P,w);N.onBeforeShadow(r,N,L,z,W,ae,V),r.renderBufferDirect(z,null,W,ae,N,V),N.onAfterShadow(r,N,L,z,W,ae,V)}}}else if($.visible){const fe=b(N,$,P,w);N.onBeforeShadow(r,N,L,z,W,fe,null),r.renderBufferDirect(z,null,W,fe,N,null),N.onAfterShadow(r,N,L,z,W,fe,null)}}const B=N.children;for(let W=0,$=B.length;W<$;W++)C(B[W],L,z,P,w)}function F(N){N.target.removeEventListener("dispose",F);for(const z in p){const P=p[z],w=N.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const ZT={[Rd]:bd,[Pd]:Nd,[Ld]:Id,[ha]:Dd,[bd]:Rd,[Nd]:Pd,[Id]:Ld,[Dd]:ha};function QT(r,e){function t(){let X=!1;const be=new $t;let ce=null;const pe=new $t(0,0,0,0);return{setMask:function(Ne){ce!==Ne&&!X&&(r.colorMask(Ne,Ne,Ne,Ne),ce=Ne)},setLocked:function(Ne){X=Ne},setClear:function(Ne,De,st,Ut,Jt){Jt===!0&&(Ne*=Ut,De*=Ut,st*=Ut),be.set(Ne,De,st,Ut),pe.equals(be)===!1&&(r.clearColor(Ne,De,st,Ut),pe.copy(be))},reset:function(){X=!1,ce=null,pe.set(-1,0,0,0)}}}function s(){let X=!1,be=!1,ce=null,pe=null,Ne=null;return{setReversed:function(De){if(be!==De){const st=e.get("EXT_clip_control");be?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ne;Ne=null,this.setClear(Ut)}be=De},getReversed:function(){return be},setTest:function(De){De?me(r.DEPTH_TEST):ve(r.DEPTH_TEST)},setMask:function(De){ce!==De&&!X&&(r.depthMask(De),ce=De)},setFunc:function(De){if(be&&(De=ZT[De]),pe!==De){switch(De){case Rd:r.depthFunc(r.NEVER);break;case bd:r.depthFunc(r.ALWAYS);break;case Pd:r.depthFunc(r.LESS);break;case ha:r.depthFunc(r.LEQUAL);break;case Ld:r.depthFunc(r.EQUAL);break;case Dd:r.depthFunc(r.GEQUAL);break;case Nd:r.depthFunc(r.GREATER);break;case Id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=De}},setLocked:function(De){X=De},setClear:function(De){Ne!==De&&(be&&(De=1-De),r.clearDepth(De),Ne=De)},reset:function(){X=!1,ce=null,pe=null,Ne=null,be=!1}}}function o(){let X=!1,be=null,ce=null,pe=null,Ne=null,De=null,st=null,Ut=null,Jt=null;return{setTest:function(St){X||(St?me(r.STENCIL_TEST):ve(r.STENCIL_TEST))},setMask:function(St){be!==St&&!X&&(r.stencilMask(St),be=St)},setFunc:function(St,Dn,wn){(ce!==St||pe!==Dn||Ne!==wn)&&(r.stencilFunc(St,Dn,wn),ce=St,pe=Dn,Ne=wn)},setOp:function(St,Dn,wn){(De!==St||st!==Dn||Ut!==wn)&&(r.stencilOp(St,Dn,wn),De=St,st=Dn,Ut=wn)},setLocked:function(St){X=St},setClear:function(St){Jt!==St&&(r.clearStencil(St),Jt=St)},reset:function(){X=!1,be=null,ce=null,pe=null,Ne=null,De=null,st=null,Ut=null,Jt=null}}}const l=new t,c=new s,f=new o,h=new WeakMap,p=new WeakMap;let m={},_={},x=new WeakMap,S=[],E=null,M=!1,y=null,v=null,D=null,b=null,C=null,F=null,N=null,L=new bt(0,0,0),z=0,P=!1,w=null,I=null,B=null,W=null,$=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ue=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(V)[1]),oe=ue>=1):V.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),oe=ue>=2);let le=null,ae={};const k=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),Ce=new $t().fromArray(k),J=new $t().fromArray(ee);function de(X,be,ce,pe){const Ne=new Uint8Array(4),De=r.createTexture();r.bindTexture(X,De),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<ce;st++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(be+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return De}const _e={};_e[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),me(r.DEPTH_TEST),c.setFunc(ha),mt(!1),dt(xg),me(r.CULL_FACE),G(Nr);function me(X){m[X]!==!0&&(r.enable(X),m[X]=!0)}function ve(X){m[X]!==!1&&(r.disable(X),m[X]=!1)}function we(X,be){return _[X]!==be?(r.bindFramebuffer(X,be),_[X]=be,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=be),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=be),!0):!1}function Ve(X,be){let ce=S,pe=!1;if(X){ce=x.get(be),ce===void 0&&(ce=[],x.set(be,ce));const Ne=X.textures;if(ce.length!==Ne.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let De=0,st=Ne.length;De<st;De++)ce[De]=r.COLOR_ATTACHMENT0+De;ce.length=Ne.length,pe=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ce)}function ct(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const nt={[ls]:r.FUNC_ADD,[ny]:r.FUNC_SUBTRACT,[iy]:r.FUNC_REVERSE_SUBTRACT};nt[ry]=r.MIN,nt[sy]=r.MAX;const Nt={[ay]:r.ZERO,[oy]:r.ONE,[ly]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[py]:r.SRC_ALPHA_SATURATE,[dy]:r.DST_COLOR,[cy]:r.DST_ALPHA,[uy]:r.ONE_MINUS_SRC_COLOR,[Cd]:r.ONE_MINUS_SRC_ALPHA,[hy]:r.ONE_MINUS_DST_COLOR,[fy]:r.ONE_MINUS_DST_ALPHA,[my]:r.CONSTANT_COLOR,[gy]:r.ONE_MINUS_CONSTANT_COLOR,[vy]:r.CONSTANT_ALPHA,[_y]:r.ONE_MINUS_CONSTANT_ALPHA};function G(X,be,ce,pe,Ne,De,st,Ut,Jt,St){if(X===Nr){M===!0&&(ve(r.BLEND),M=!1);return}if(M===!1&&(me(r.BLEND),M=!0),X!==ty){if(X!==y||St!==P){if((v!==ls||C!==ls)&&(r.blendEquation(r.FUNC_ADD),v=ls,C=ls),St)switch(X){case ca:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yg:r.blendFunc(r.ONE,r.ONE);break;case Sg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Eg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ca:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Sg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Eg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}D=null,b=null,F=null,N=null,L.set(0,0,0),z=0,y=X,P=St}return}Ne=Ne||be,De=De||ce,st=st||pe,(be!==v||Ne!==C)&&(r.blendEquationSeparate(nt[be],nt[Ne]),v=be,C=Ne),(ce!==D||pe!==b||De!==F||st!==N)&&(r.blendFuncSeparate(Nt[ce],Nt[pe],Nt[De],Nt[st]),D=ce,b=pe,F=De,N=st),(Ut.equals(L)===!1||Jt!==z)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Jt),L.copy(Ut),z=Jt),y=X,P=!1}function Tn(X,be){X.side===$i?ve(r.CULL_FACE):me(r.CULL_FACE);let ce=X.side===zn;be&&(ce=!ce),mt(ce),X.blending===ca&&X.transparent===!1?G(Nr):G(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const pe=X.stencilWrite;f.setTest(pe),pe&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Rt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function dt(X){X!==Qx?(me(r.CULL_FACE),X!==I&&(X===xg?r.cullFace(r.BACK):X===Jx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ve(r.CULL_FACE),I=X}function Ye(X){X!==B&&(oe&&r.lineWidth(X),B=X)}function Rt(X,be,ce){X?(me(r.POLYGON_OFFSET_FILL),(W!==be||$!==ce)&&(r.polygonOffset(be,ce),W=be,$=ce)):ve(r.POLYGON_OFFSET_FILL)}function je(X){X?me(r.SCISSOR_TEST):ve(r.SCISSOR_TEST)}function U(X){X===void 0&&(X=r.TEXTURE0+fe-1),le!==X&&(r.activeTexture(X),le=X)}function A(X,be,ce){ce===void 0&&(le===null?ce=r.TEXTURE0+fe-1:ce=le);let pe=ae[ce];pe===void 0&&(pe={type:void 0,texture:void 0},ae[ce]=pe),(pe.type!==X||pe.texture!==be)&&(le!==ce&&(r.activeTexture(ce),le=ce),r.bindTexture(X,be||_e[X]),pe.type=X,pe.texture=be)}function ne(){const X=ae[le];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(X){Ce.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ce.copy(X))}function Be(X){J.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ht(X,be){let ce=p.get(be);ce===void 0&&(ce=new WeakMap,p.set(be,ce));let pe=ce.get(X);pe===void 0&&(pe=r.getUniformBlockIndex(be,X.name),ce.set(X,pe))}function rt(X,be){const pe=p.get(be).get(X);h.get(be)!==pe&&(r.uniformBlockBinding(be,pe,X.__bindingPointIndex),h.set(be,pe))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},le=null,ae={},_={},x=new WeakMap,S=[],E=null,M=!1,y=null,v=null,D=null,b=null,C=null,F=null,N=null,L=new bt(0,0,0),z=0,P=!1,w=null,I=null,B=null,W=null,$=null,Ce.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:me,disable:ve,bindFramebuffer:we,drawBuffers:Ve,useProgram:ct,setBlending:G,setMaterial:Tn,setFlipSided:mt,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:Rt,setScissorTest:je,activeTexture:U,bindTexture:A,unbindTexture:ne,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:ke,texImage3D:Ke,updateUBOMapping:ht,uniformBlockBinding:rt,texStorage2D:ft,texStorage3D:Te,texSubImage2D:he,texSubImage3D:Xe,compressedTexSubImage2D:Re,compressedTexSubImage3D:Oe,scissor:et,viewport:Be,reset:At}}function JT(r,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new yt,m=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,A){return S?new OffscreenCanvas(U,A):yo("canvas")}function M(U,A,ne){let ge=1;const ye=je(U);if((ye.width>ne||ye.height>ne)&&(ge=ne/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const he=Math.floor(ge*ye.width),Xe=Math.floor(ge*ye.height);_===void 0&&(_=E(he,Xe));const Re=A?E(he,Xe):_;return Re.width=he,Re.height=Xe,Re.getContext("2d").drawImage(U,0,0,he,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+Xe+")."),Re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){r.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(U,A,ne,ge,ye=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let he=A;if(A===r.RED&&(ne===r.FLOAT&&(he=r.R32F),ne===r.HALF_FLOAT&&(he=r.R16F),ne===r.UNSIGNED_BYTE&&(he=r.R8)),A===r.RED_INTEGER&&(ne===r.UNSIGNED_BYTE&&(he=r.R8UI),ne===r.UNSIGNED_SHORT&&(he=r.R16UI),ne===r.UNSIGNED_INT&&(he=r.R32UI),ne===r.BYTE&&(he=r.R8I),ne===r.SHORT&&(he=r.R16I),ne===r.INT&&(he=r.R32I)),A===r.RG&&(ne===r.FLOAT&&(he=r.RG32F),ne===r.HALF_FLOAT&&(he=r.RG16F),ne===r.UNSIGNED_BYTE&&(he=r.RG8)),A===r.RG_INTEGER&&(ne===r.UNSIGNED_BYTE&&(he=r.RG8UI),ne===r.UNSIGNED_SHORT&&(he=r.RG16UI),ne===r.UNSIGNED_INT&&(he=r.RG32UI),ne===r.BYTE&&(he=r.RG8I),ne===r.SHORT&&(he=r.RG16I),ne===r.INT&&(he=r.RG32I)),A===r.RGB_INTEGER&&(ne===r.UNSIGNED_BYTE&&(he=r.RGB8UI),ne===r.UNSIGNED_SHORT&&(he=r.RGB16UI),ne===r.UNSIGNED_INT&&(he=r.RGB32UI),ne===r.BYTE&&(he=r.RGB8I),ne===r.SHORT&&(he=r.RGB16I),ne===r.INT&&(he=r.RGB32I)),A===r.RGBA_INTEGER&&(ne===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),ne===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),ne===r.UNSIGNED_INT&&(he=r.RGBA32UI),ne===r.BYTE&&(he=r.RGBA8I),ne===r.SHORT&&(he=r.RGBA16I),ne===r.INT&&(he=r.RGBA32I)),A===r.RGB&&ne===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),A===r.RGBA){const Xe=ye?Nu:wt.getTransfer(ge);ne===r.FLOAT&&(he=r.RGBA32F),ne===r.HALF_FLOAT&&(he=r.RGBA16F),ne===r.UNSIGNED_BYTE&&(he=Xe===Pt?r.SRGB8_ALPHA8:r.RGBA8),ne===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),ne===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(U,A){let ne;return U?A===null||A===gs||A===ga?ne=r.DEPTH24_STENCIL8:A===Ki?ne=r.DEPTH32F_STENCIL8:A===xo&&(ne=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===gs||A===ga?ne=r.DEPTH_COMPONENT24:A===Ki?ne=r.DEPTH_COMPONENT32F:A===xo&&(ne=r.DEPTH_COMPONENT16),ne}function F(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==_i&&U.minFilter!==Pi?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function N(U){const A=U.target;A.removeEventListener("dispose",N),z(A),A.isVideoTexture&&m.delete(A)}function L(U){const A=U.target;A.removeEventListener("dispose",L),w(A)}function z(U){const A=s.get(U);if(A.__webglInit===void 0)return;const ne=U.source,ge=x.get(ne);if(ge){const ye=ge[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(U),Object.keys(ge).length===0&&x.delete(ne)}s.remove(U)}function P(U){const A=s.get(U);r.deleteTexture(A.__webglTexture);const ne=U.source,ge=x.get(ne);delete ge[A.__cacheKey],c.memory.textures--}function w(U){const A=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let ye=0;ye<A.__webglFramebuffer[ge].length;ye++)r.deleteFramebuffer(A.__webglFramebuffer[ge][ye]);else r.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)r.deleteFramebuffer(A.__webglFramebuffer[ge]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=U.textures;for(let ge=0,ye=ne.length;ge<ye;ge++){const he=s.get(ne[ge]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),c.memory.textures--),s.remove(ne[ge])}s.remove(U)}let I=0;function B(){I=0}function W(){const U=I;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),I+=1,U}function $(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function fe(U,A){const ne=s.get(U);if(U.isVideoTexture&&Ye(U),U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){const ge=U.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ne,U,A);return}}t.bindTexture(r.TEXTURE_2D,ne.__webglTexture,r.TEXTURE0+A)}function oe(U,A){const ne=s.get(U);if(U.version>0&&ne.__version!==U.version){J(ne,U,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ne.__webglTexture,r.TEXTURE0+A)}function ue(U,A){const ne=s.get(U);if(U.version>0&&ne.__version!==U.version){J(ne,U,A);return}t.bindTexture(r.TEXTURE_3D,ne.__webglTexture,r.TEXTURE0+A)}function V(U,A){const ne=s.get(U);if(U.version>0&&ne.__version!==U.version){de(ne,U,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture,r.TEXTURE0+A)}const le={[Fd]:r.REPEAT,[cs]:r.CLAMP_TO_EDGE,[kd]:r.MIRRORED_REPEAT},ae={[_i]:r.NEAREST,[Ry]:r.NEAREST_MIPMAP_NEAREST,[Fl]:r.NEAREST_MIPMAP_LINEAR,[Pi]:r.LINEAR,[kf]:r.LINEAR_MIPMAP_NEAREST,[fs]:r.LINEAR_MIPMAP_LINEAR},k={[Ny]:r.NEVER,[By]:r.ALWAYS,[Iy]:r.LESS,[m0]:r.LEQUAL,[Uy]:r.EQUAL,[ky]:r.GEQUAL,[Oy]:r.GREATER,[Fy]:r.NOTEQUAL};function ee(U,A){if(A.type===Ki&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Pi||A.magFilter===kf||A.magFilter===Fl||A.magFilter===fs||A.minFilter===Pi||A.minFilter===kf||A.minFilter===Fl||A.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,le[A.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,le[A.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,le[A.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,ae[A.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,ae[A.minFilter]),A.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,k[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===_i||A.minFilter!==Fl&&A.minFilter!==fs||A.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Ce(U,A){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",N));const ge=A.source;let ye=x.get(ge);ye===void 0&&(ye={},x.set(ge,ye));const he=$(A);if(he!==U.__cacheKey){ye[he]===void 0&&(ye[he]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),ye[he].usedTimes++;const Xe=ye[U.__cacheKey];Xe!==void 0&&(ye[U.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(A)),U.__cacheKey=he,U.__webglTexture=ye[he].texture}return ne}function J(U,A,ne){let ge=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=r.TEXTURE_3D);const ye=Ce(U,A),he=A.source;t.bindTexture(ge,U.__webglTexture,r.TEXTURE0+ne);const Xe=s.get(he);if(he.version!==Xe.__version||ye===!0){t.activeTexture(r.TEXTURE0+ne);const Re=wt.getPrimaries(wt.workingColorSpace),Oe=A.colorSpace===Dr?null:wt.getPrimaries(A.colorSpace),ft=A.colorSpace===Dr||Re===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Te=M(A.image,!1,o.maxTextureSize);Te=Rt(A,Te);const ke=l.convert(A.format,A.colorSpace),Ke=l.convert(A.type);let et=b(A.internalFormat,ke,Ke,A.colorSpace,A.isVideoTexture);ee(ge,A);let Be;const ht=A.mipmaps,rt=A.isVideoTexture!==!0,At=Xe.__version===void 0||ye===!0,X=he.dataReady,be=F(A,Te);if(A.isDepthTexture)et=C(A.format===va,A.type),At&&(rt?t.texStorage2D(r.TEXTURE_2D,1,et,Te.width,Te.height):t.texImage2D(r.TEXTURE_2D,0,et,Te.width,Te.height,0,ke,Ke,null));else if(A.isDataTexture)if(ht.length>0){rt&&At&&t.texStorage2D(r.TEXTURE_2D,be,et,ht[0].width,ht[0].height);for(let ce=0,pe=ht.length;ce<pe;ce++)Be=ht[ce],rt?X&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Be.width,Be.height,ke,Ke,Be.data):t.texImage2D(r.TEXTURE_2D,ce,et,Be.width,Be.height,0,ke,Ke,Be.data);A.generateMipmaps=!1}else rt?(At&&t.texStorage2D(r.TEXTURE_2D,be,et,Te.width,Te.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te.width,Te.height,ke,Ke,Te.data)):t.texImage2D(r.TEXTURE_2D,0,et,Te.width,Te.height,0,ke,Ke,Te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){rt&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,et,ht[0].width,ht[0].height,Te.depth);for(let ce=0,pe=ht.length;ce<pe;ce++)if(Be=ht[ce],A.format!==vi)if(ke!==null)if(rt){if(X)if(A.layerUpdates.size>0){const Ne=qg(Be.width,Be.height,A.format,A.type);for(const De of A.layerUpdates){const st=Be.data.subarray(De*Ne/Be.data.BYTES_PER_ELEMENT,(De+1)*Ne/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,De,Be.width,Be.height,1,ke,st)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,Te.depth,ke,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,et,Be.width,Be.height,Te.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,Te.depth,ke,Ke,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,et,Be.width,Be.height,Te.depth,0,ke,Ke,Be.data)}else{rt&&At&&t.texStorage2D(r.TEXTURE_2D,be,et,ht[0].width,ht[0].height);for(let ce=0,pe=ht.length;ce<pe;ce++)Be=ht[ce],A.format!==vi?ke!==null?rt?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?X&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Be.width,Be.height,ke,Ke,Be.data):t.texImage2D(r.TEXTURE_2D,ce,et,Be.width,Be.height,0,ke,Ke,Be.data)}else if(A.isDataArrayTexture)if(rt){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,et,Te.width,Te.height,Te.depth),X)if(A.layerUpdates.size>0){const ce=qg(Te.width,Te.height,A.format,A.type);for(const pe of A.layerUpdates){const Ne=Te.data.subarray(pe*ce/Te.data.BYTES_PER_ELEMENT,(pe+1)*ce/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Te.width,Te.height,1,ke,Ke,Ne)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,ke,Ke,Te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,Te.width,Te.height,Te.depth,0,ke,Ke,Te.data);else if(A.isData3DTexture)rt?(At&&t.texStorage3D(r.TEXTURE_3D,be,et,Te.width,Te.height,Te.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,ke,Ke,Te.data)):t.texImage3D(r.TEXTURE_3D,0,et,Te.width,Te.height,Te.depth,0,ke,Ke,Te.data);else if(A.isFramebufferTexture){if(At)if(rt)t.texStorage2D(r.TEXTURE_2D,be,et,Te.width,Te.height);else{let ce=Te.width,pe=Te.height;for(let Ne=0;Ne<be;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,et,ce,pe,0,ke,Ke,null),ce>>=1,pe>>=1}}else if(ht.length>0){if(rt&&At){const ce=je(ht[0]);t.texStorage2D(r.TEXTURE_2D,be,et,ce.width,ce.height)}for(let ce=0,pe=ht.length;ce<pe;ce++)Be=ht[ce],rt?X&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,ke,Ke,Be):t.texImage2D(r.TEXTURE_2D,ce,et,ke,Ke,Be);A.generateMipmaps=!1}else if(rt){if(At){const ce=je(Te);t.texStorage2D(r.TEXTURE_2D,be,et,ce.width,ce.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Ke,Te)}else t.texImage2D(r.TEXTURE_2D,0,et,ke,Ke,Te);y(A)&&v(ge),Xe.__version=he.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function de(U,A,ne){if(A.image.length!==6)return;const ge=Ce(U,A),ye=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+ne);const he=s.get(ye);if(ye.version!==he.__version||ge===!0){t.activeTexture(r.TEXTURE0+ne);const Xe=wt.getPrimaries(wt.workingColorSpace),Re=A.colorSpace===Dr?null:wt.getPrimaries(A.colorSpace),Oe=A.colorSpace===Dr||Xe===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ft=A.isCompressedTexture||A.image[0].isCompressedTexture,Te=A.image[0]&&A.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ft&&!Te?ke[pe]=M(A.image[pe],!0,o.maxCubemapSize):ke[pe]=Te?A.image[pe].image:A.image[pe],ke[pe]=Rt(A,ke[pe]);const Ke=ke[0],et=l.convert(A.format,A.colorSpace),Be=l.convert(A.type),ht=b(A.internalFormat,et,Be,A.colorSpace),rt=A.isVideoTexture!==!0,At=he.__version===void 0||ge===!0,X=ye.dataReady;let be=F(A,Ke);ee(r.TEXTURE_CUBE_MAP,A);let ce;if(ft){rt&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ht,Ke.width,Ke.height);for(let pe=0;pe<6;pe++){ce=ke[pe].mipmaps;for(let Ne=0;Ne<ce.length;Ne++){const De=ce[Ne];A.format!==vi?et!==null?rt?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,De.width,De.height,et,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,De.width,De.height,et,Be,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,De.width,De.height,0,et,Be,De.data)}}}else{if(ce=A.mipmaps,rt&&At){ce.length>0&&be++;const pe=je(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Te){rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,et,Be,ke[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,ke[pe].width,ke[pe].height,0,et,Be,ke[pe].data);for(let Ne=0;Ne<ce.length;Ne++){const st=ce[Ne].image[pe].image;rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,st.width,st.height,et,Be,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,st.width,st.height,0,et,Be,st.data)}}else{rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Be,ke[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,et,Be,ke[pe]);for(let Ne=0;Ne<ce.length;Ne++){const De=ce[Ne];rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,et,Be,De.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,et,Be,De.image[pe])}}}y(A)&&v(r.TEXTURE_CUBE_MAP),he.__version=ye.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function _e(U,A,ne,ge,ye,he){const Xe=l.convert(ne.format,ne.colorSpace),Re=l.convert(ne.type),Oe=b(ne.internalFormat,Xe,Re,ne.colorSpace),ft=s.get(A),Te=s.get(ne);if(Te.__renderTarget=A,!ft.__hasExternalTextures){const ke=Math.max(1,A.width>>he),Ke=Math.max(1,A.height>>he);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,he,Oe,ke,Ke,A.depth,0,Xe,Re,null):t.texImage2D(ye,he,Oe,ke,Ke,0,Xe,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),dt(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,ye,Te.__webglTexture,0,mt(A)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,ye,Te.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(U,A,ne){if(r.bindRenderbuffer(r.RENDERBUFFER,U),A.depthBuffer){const ge=A.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,he=C(A.stencilBuffer,ye),Xe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=mt(A);dt(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,he,A.width,A.height):ne?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,he,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,he,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,U)}else{const ge=A.textures;for(let ye=0;ye<ge.length;ye++){const he=ge[ye],Xe=l.convert(he.format,he.colorSpace),Re=l.convert(he.type),Oe=b(he.internalFormat,Xe,Re,he.colorSpace),ft=mt(A);ne&&dt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,Oe,A.width,A.height):dt(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,Oe,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(A.depthTexture);ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe(A.depthTexture,0);const ye=ge.__webglTexture,he=mt(A);if(A.depthTexture.format===fa)dt(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(A.depthTexture.format===va)dt(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function we(U){const A=s.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const ge=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=ge}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ve(A.__webglFramebuffer,U)}else if(ne){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=r.createRenderbuffer(),me(A.__webglDepthbuffer[ge],U,!1);else{const ye=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,he)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),me(A.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,ye)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(U,A,ne){const ge=s.get(U);A!==void 0&&_e(ge.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ne!==void 0&&we(U)}function ct(U){const A=U.texture,ne=s.get(U),ge=s.get(A);U.addEventListener("dispose",L);const ye=U.textures,he=U.isWebGLCubeRenderTarget===!0,Xe=ye.length>1;if(Xe||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=A.version,c.memory.textures++),he){ne.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[Re]=[];for(let Oe=0;Oe<A.mipmaps.length;Oe++)ne.__webglFramebuffer[Re][Oe]=r.createFramebuffer()}else ne.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)ne.__webglFramebuffer[Re]=r.createFramebuffer()}else ne.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Re=0,Oe=ye.length;Re<Oe;Re++){const ft=s.get(ye[Re]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),c.memory.textures++)}if(U.samples>0&&dt(U)===!1){ne.__webglMultisampledFramebuffer=r.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const Oe=ye[Re];ne.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ne.__webglColorRenderbuffer[Re]);const ft=l.convert(Oe.format,Oe.colorSpace),Te=l.convert(Oe.type),ke=b(Oe.internalFormat,ft,Te,Oe.colorSpace,U.isXRRenderTarget===!0),Ke=mt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,ke,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,ne.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=r.createRenderbuffer(),me(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),ee(r.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)_e(ne.__webglFramebuffer[Re][Oe],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Oe);else _e(ne.__webglFramebuffer[Re],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(A)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Re=0,Oe=ye.length;Re<Oe;Re++){const ft=ye[Re],Te=s.get(ft);t.bindTexture(r.TEXTURE_2D,Te.__webglTexture),ee(r.TEXTURE_2D,ft),_e(ne.__webglFramebuffer,U,ft,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),y(ft)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,ge.__webglTexture),ee(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)_e(ne.__webglFramebuffer[Oe],U,A,r.COLOR_ATTACHMENT0,Re,Oe);else _e(ne.__webglFramebuffer,U,A,r.COLOR_ATTACHMENT0,Re,0);y(A)&&v(Re),t.unbindTexture()}U.depthBuffer&&we(U)}function nt(U){const A=U.textures;for(let ne=0,ge=A.length;ne<ge;ne++){const ye=A[ne];if(y(ye)){const he=D(U),Xe=s.get(ye).__webglTexture;t.bindTexture(he,Xe),v(he),t.unbindTexture()}}}const Nt=[],G=[];function Tn(U){if(U.samples>0){if(dt(U)===!1){const A=U.textures,ne=U.width,ge=U.height;let ye=r.COLOR_BUFFER_BIT;const he=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=s.get(U),Re=A.length>1;if(Re)for(let Oe=0;Oe<A.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const ft=s.get(A[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,ne,ge,0,0,ne,ge,ye,r.NEAREST),h===!0&&(Nt.length=0,G.length=0,Nt.push(r.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Nt.push(he),G.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let Oe=0;Oe<A.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const ft=s.get(A[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,ft,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const A=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function mt(U){return Math.min(o.maxSamples,U.samples)}function dt(U){const A=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ye(U){const A=c.render.frame;m.get(U)!==A&&(m.set(U,A),U.update())}function Rt(U,A){const ne=U.colorSpace,ge=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==_a&&ne!==Dr&&(wt.getTransfer(ne)===Pt?(ge!==vi||ye!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),A}function je(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=fe,this.setTexture2DArray=oe,this.setTexture3D=ue,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=dt}function ew(r,e){function t(s,o=Dr){let l;const c=wt.getTransfer(o);if(s===er)return r.UNSIGNED_BYTE;if(s===wh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ah)return r.UNSIGNED_SHORT_5_5_5_1;if(s===o0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===s0)return r.BYTE;if(s===a0)return r.SHORT;if(s===xo)return r.UNSIGNED_SHORT;if(s===Th)return r.INT;if(s===gs)return r.UNSIGNED_INT;if(s===Ki)return r.FLOAT;if(s===Eo)return r.HALF_FLOAT;if(s===l0)return r.ALPHA;if(s===u0)return r.RGB;if(s===vi)return r.RGBA;if(s===c0)return r.LUMINANCE;if(s===f0)return r.LUMINANCE_ALPHA;if(s===fa)return r.DEPTH_COMPONENT;if(s===va)return r.DEPTH_STENCIL;if(s===d0)return r.RED;if(s===Ch)return r.RED_INTEGER;if(s===h0)return r.RG;if(s===Rh)return r.RG_INTEGER;if(s===bh)return r.RGBA_INTEGER;if(s===Eu||s===Mu||s===Tu||s===wu)if(c===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Eu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Eu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bd||s===zd||s===Hd||s===Vd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gd||s===Wd||s===jd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Gd||s===Wd)return c===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===jd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xd||s===qd||s===Yd||s===$d||s===Kd||s===Zd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Xd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$d)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===eh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===th)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ih)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sh)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Au||s===ah||s===oh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Au)return c===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ah)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===oh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===p0||s===lh||s===uh||s===ch)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Au)return l.COMPRESSED_RED_RGTC1_EXT;if(s===lh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===uh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ch)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ga?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const tw={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,s),v=this._getHandJoint(p,M);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=m.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(tw)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new mo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Ln,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Fr({vertexShader:nw,fragmentShader:iw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qi(new Gu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sw extends wa{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,m=null,_=null,x=null,S=null,E=null;const M=new rw,y=t.getContextAttributes();let v=null,D=null;const b=[],C=[],F=new yt;let N=null;const L=new ii;L.viewport=new $t;const z=new ii;z.viewport=new $t;const P=[L,z],w=new wS;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=b[J];return de===void 0&&(de=new pd,b[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=b[J];return de===void 0&&(de=new pd,b[J]=de),de.getGripSpace()},this.getHand=function(J){let de=b[J];return de===void 0&&(de=new pd,b[J]=de),de.getHandSpace()};function W(J){const de=C.indexOf(J.inputSource);if(de===-1)return;const _e=b[de];_e!==void 0&&(_e.update(J.inputSource,J.frame,p||c),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",fe);for(let J=0;J<b.length;J++){const de=C[J];de!==null&&(C[J]=null,b[J].disconnect(de))}I=null,B=null,M.reset(),e.setRenderTarget(v),S=null,x=null,_=null,o=null,D=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",$),o.addEventListener("inputsourceschange",fe),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(F),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let _e=null,me=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?va:fa,me=y.stencil?ga:gs);const we={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:l};_=new XRWebGLBinding(o,t),x=_.createProjectionLayer(we),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new vs(x.textureWidth,x.textureHeight,{format:vi,type:er,depthTexture:new P0(x.textureWidth,x.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,_e),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new vs(S.framebufferWidth,S.framebufferHeight,{format:vi,type:er,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Ce.setContext(o),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function fe(J){for(let de=0;de<J.removed.length;de++){const _e=J.removed[de],me=C.indexOf(_e);me>=0&&(C[me]=null,b[me].disconnect(_e))}for(let de=0;de<J.added.length;de++){const _e=J.added[de];let me=C.indexOf(_e);if(me===-1){for(let we=0;we<b.length;we++)if(we>=C.length){C.push(_e),me=we;break}else if(C[we]===null){C[we]=_e,me=we;break}if(me===-1)break}const ve=b[me];ve&&ve.connect(_e)}}const oe=new se,ue=new se;function V(J,de,_e){oe.setFromMatrixPosition(de.matrixWorld),ue.setFromMatrixPosition(_e.matrixWorld);const me=oe.distanceTo(ue),ve=de.projectionMatrix.elements,we=_e.projectionMatrix.elements,Ve=ve[14]/(ve[10]-1),ct=ve[14]/(ve[10]+1),nt=(ve[9]+1)/ve[5],Nt=(ve[9]-1)/ve[5],G=(ve[8]-1)/ve[0],Tn=(we[8]+1)/we[0],mt=Ve*G,dt=Ve*Tn,Ye=me/(-G+Tn),Rt=Ye*-G;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Rt),J.translateZ(Ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=Ve+Ye,U=ct+Ye,A=mt-Rt,ne=dt+(me-Rt),ge=nt*ct/U*je,ye=Nt*ct/U*je;J.projectionMatrix.makePerspective(A,ne,ge,ye,je,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let de=J.near,_e=J.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),w.near=z.near=L.near=de,w.far=z.far=L.far=_e,(I!==w.near||B!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,B=w.far),L.layers.mask=J.layers.mask|2,z.layers.mask=J.layers.mask|4,w.layers.mask=L.layers.mask|z.layers.mask;const me=J.parent,ve=w.cameras;le(w,me);for(let we=0;we<ve.length;we++)le(ve[we],me);ve.length===2?V(w,L,z):w.projectionMatrix.copy(L.projectionMatrix),ae(J,w,me)};function ae(J,de,_e){_e===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=dh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(J){h=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(w)};let k=null;function ee(J,de){if(m=de.getViewerPose(p||c),E=de,m!==null){const _e=m.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let me=!1;_e.length!==w.cameras.length&&(w.cameras.length=0,me=!0);for(let we=0;we<_e.length;we++){const Ve=_e[we];let ct=null;if(S!==null)ct=S.getViewport(Ve);else{const Nt=_.getViewSubImage(x,Ve);ct=Nt.viewport,we===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,x.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(D))}let nt=P[we];nt===void 0&&(nt=new ii,nt.layers.enable(we),nt.viewport=new $t,P[we]=nt),nt.matrix.fromArray(Ve.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ve.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ct.x,ct.y,ct.width,ct.height),we===0&&(w.matrix.copy(nt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),me===!0&&w.cameras.push(nt)}const ve=o.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const we=_.getDepthInformation(_e[0]);we&&we.isValid&&we.texture&&M.init(e,we,o.renderState)}}for(let _e=0;_e<b.length;_e++){const me=C[_e],ve=b[_e];me!==null&&ve!==void 0&&ve.update(me,de,p||c)}k&&k(J,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ce=new L0;Ce.setAnimationLoop(ee),this.setAnimationLoop=function(J){k=J},this.dispose=function(){}}}const rs=new tr,aw=new qt;function ow(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,T0(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,D,b,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),_(y,v)):v.isMeshPhongMaterial?(l(y,v),m(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,C)):v.isMeshMatcapMaterial?(l(y,v),E(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),M(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,D,b):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===zn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===zn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=e.get(v),b=D.envMap,C=D.envMapRotation;b&&(y.envMap.value=b,rs.copy(C),rs.x*=-1,rs.y*=-1,rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),y.envMapRotation.value.setFromMatrix4(aw.makeRotationFromEuler(rs)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,D,b){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=b*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===zn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function M(y,v){const D=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function lw(r,e,t,s){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,b){const C=b.program;s.uniformBlockBinding(D,C)}function p(D,b){let C=o[D.id];C===void 0&&(E(D),C=m(D),o[D.id]=C,D.addEventListener("dispose",y));const F=b.program;s.updateUBOMapping(D,F);const N=e.render.frame;l[D.id]!==N&&(x(D),l[D.id]=N)}function m(D){const b=_();D.__bindingPointIndex=b;const C=r.createBuffer(),F=D.__size,N=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,F,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,C),C}function _(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const b=o[D.id],C=D.uniforms,F=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let N=0,L=C.length;N<L;N++){const z=Array.isArray(C[N])?C[N]:[C[N]];for(let P=0,w=z.length;P<w;P++){const I=z[P];if(S(I,N,P,F)===!0){const B=I.__offset,W=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let fe=0;fe<W.length;fe++){const oe=W[fe],ue=M(oe);typeof oe=="number"||typeof oe=="boolean"?(I.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,B+$,I.__data)):oe.isMatrix3?(I.__data[0]=oe.elements[0],I.__data[1]=oe.elements[1],I.__data[2]=oe.elements[2],I.__data[3]=0,I.__data[4]=oe.elements[3],I.__data[5]=oe.elements[4],I.__data[6]=oe.elements[5],I.__data[7]=0,I.__data[8]=oe.elements[6],I.__data[9]=oe.elements[7],I.__data[10]=oe.elements[8],I.__data[11]=0):(oe.toArray(I.__data,$),$+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,b,C,F){const N=D.value,L=b+"_"+C;if(F[L]===void 0)return typeof N=="number"||typeof N=="boolean"?F[L]=N:F[L]=N.clone(),!0;{const z=F[L];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return F[L]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function E(D){const b=D.uniforms;let C=0;const F=16;for(let L=0,z=b.length;L<z;L++){const P=Array.isArray(b[L])?b[L]:[b[L]];for(let w=0,I=P.length;w<I;w++){const B=P[w],W=Array.isArray(B.value)?B.value:[B.value];for(let $=0,fe=W.length;$<fe;$++){const oe=W[$],ue=M(oe),V=C%F,le=V%ue.boundary,ae=V+le;C+=le,ae!==0&&F-ae<ue.storage&&(C+=F-ae),B.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=C,C+=ue.storage}}}const N=C%F;return N>0&&(C+=F-N),D.__size=C,D.__cache={},this}function M(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function y(D){const b=D.target;b.removeEventListener("dispose",y);const C=c.indexOf(b.__bindingPointIndex);c.splice(C,1),r.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function v(){for(const D in o)r.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:h,update:p,dispose:v}}class uw{constructor(e={}){const{canvas:t=Hy(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,v=null;const D=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Ir,this.toneMappingExposure=1;const C=this;let F=!1,N=0,L=0,z=null,P=-1,w=null;const I=new $t,B=new $t;let W=null;const $=new bt(0);let fe=0,oe=t.width,ue=t.height,V=1,le=null,ae=null;const k=new $t(0,0,oe,ue),ee=new $t(0,0,oe,ue);let Ce=!1;const J=new b0;let de=!1,_e=!1;this.transmissionResolutionScale=1;const me=new qt,ve=new qt,we=new se,Ve=new $t,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Nt(){return z===null?V:1}let G=s;function Tn(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mh}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),G===null){const Y="webgl2";if(G=Tn(Y,R),G===null)throw Tn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let mt,dt,Ye,Rt,je,U,A,ne,ge,ye,he,Xe,Re,Oe,ft,Te,ke,Ke,et,Be,ht,rt,At,X;function be(){mt=new _M(G),mt.init(),rt=new ew(G,mt),dt=new dM(G,mt,e,rt),Ye=new QT(G,mt),dt.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Rt=new SM(G),je=new BT,U=new JT(G,mt,Ye,je,dt,rt,Rt),A=new pM(C),ne=new vM(C),ge=new RS(G),At=new cM(G,ge),ye=new xM(G,ge,Rt,At),he=new MM(G,ye,ge,Rt),et=new EM(G,dt,U),Te=new hM(je),Xe=new kT(C,A,ne,mt,dt,At,Te),Re=new ow(C,je),Oe=new HT,ft=new qT(mt),Ke=new uM(C,A,ne,Ye,he,S,h),ke=new KT(C,he,dt),X=new lw(G,Rt,dt,Ye),Be=new fM(G,mt,Rt),ht=new yM(G,mt,Rt),Rt.programs=Xe.programs,C.capabilities=dt,C.extensions=mt,C.properties=je,C.renderLists=Oe,C.shadowMap=ke,C.state=Ye,C.info=Rt}be();const ce=new sw(C,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(oe,ue,!1))},this.getSize=function(R){return R.set(oe,ue)},this.setSize=function(R,Y,ie=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,ue=Y,t.width=Math.floor(R*V),t.height=Math.floor(Y*V),ie===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(oe*V,ue*V).floor()},this.setDrawingBufferSize=function(R,Y,ie){oe=R,ue=Y,V=ie,t.width=Math.floor(R*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,Y,ie,Q){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,Y,ie,Q),Ye.viewport(I.copy(k).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,Y,ie,Q){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,Y,ie,Q),Ye.scissor(B.copy(ee).multiplyScalar(V).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(R){Ye.setScissorTest(Ce=R)},this.setOpaqueSort=function(R){le=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(R=!0,Y=!0,ie=!0){let Q=0;if(R){let K=!1;if(z!==null){const Me=z.texture.format;K=Me===bh||Me===Rh||Me===Ch}if(K){const Me=z.texture.type,Pe=Me===er||Me===gs||Me===xo||Me===ga||Me===wh||Me===Ah,Ie=Ke.getClearColor(),ze=Ke.getClearAlpha(),tt=Ie.r,Je=Ie.g,Ge=Ie.b;Pe?(E[0]=tt,E[1]=Je,E[2]=Ge,E[3]=ze,G.clearBufferuiv(G.COLOR,0,E)):(M[0]=tt,M[1]=Je,M[2]=Ge,M[3]=ze,G.clearBufferiv(G.COLOR,0,M))}else Q|=G.COLOR_BUFFER_BIT}Y&&(Q|=G.DEPTH_BUFFER_BIT),ie&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ke.dispose(),Oe.dispose(),ft.dispose(),je.dispose(),A.dispose(),ne.dispose(),he.dispose(),At.dispose(),X.dispose(),Xe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",_s),ce.removeEventListener("sessionend",ir),Li.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Rt.autoReset,Y=ke.enabled,ie=ke.autoUpdate,Q=ke.needsUpdate,K=ke.type;be(),Rt.autoReset=R,ke.enabled=Y,ke.autoUpdate=ie,ke.needsUpdate=Q,ke.type=K}function De(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function st(R){const Y=R.target;Y.removeEventListener("dispose",st),Ut(Y)}function Ut(R){Jt(R),je.remove(R)}function Jt(R){const Y=je.get(R).programs;Y!==void 0&&(Y.forEach(function(ie){Xe.releaseProgram(ie)}),R.isShaderMaterial&&Xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ie,Q,K,Me){Y===null&&(Y=ct);const Pe=K.isMesh&&K.matrixWorld.determinant()<0,Ie=Po(R,Y,ie,Q,K);Ye.setMaterial(Q,Pe);let ze=ie.index,tt=1;if(Q.wireframe===!0){if(ze=ye.getWireframeAttribute(ie),ze===void 0)return;tt=2}const Je=ie.drawRange,Ge=ie.attributes.position;let vt=Je.start*tt,at=(Je.start+Je.count)*tt;Me!==null&&(vt=Math.max(vt,Me.start*tt),at=Math.min(at,(Me.start+Me.count)*tt)),ze!==null?(vt=Math.max(vt,0),at=Math.min(at,ze.count)):Ge!=null&&(vt=Math.max(vt,0),at=Math.min(at,Ge.count));const Wt=at-vt;if(Wt<0||Wt===1/0)return;At.setup(K,Q,Ie,ie,ze);let Bt,xt=Be;if(ze!==null&&(Bt=ge.get(ze),xt=ht,xt.setIndex(Bt)),K.isMesh)Q.wireframe===!0?(Ye.setLineWidth(Q.wireframeLinewidth*Nt()),xt.setMode(G.LINES)):xt.setMode(G.TRIANGLES);else if(K.isLine){let $e=Q.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*Nt()),K.isLineSegments?xt.setMode(G.LINES):K.isLineLoop?xt.setMode(G.LINE_LOOP):xt.setMode(G.LINE_STRIP)}else K.isPoints?xt.setMode(G.POINTS):K.isSprite&&xt.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)xt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))xt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $e=K._multiDrawStarts,jt=K._multiDrawCounts,gt=K._multiDrawCount,gn=ze?ge.get(ze).bytesPerElement:1,sr=je.get(Q).currentProgram.getUniforms();for(let An=0;An<gt;An++)sr.setValue(G,"_gl_DrawID",An),xt.render($e[An]/gn,jt[An])}else if(K.isInstancedMesh)xt.renderInstances(vt,Wt,K.count);else if(ie.isInstancedBufferGeometry){const $e=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,jt=Math.min(ie.instanceCount,$e);xt.renderInstances(vt,Wt,jt)}else xt.render(vt,Wt)};function St(R,Y,ie){R.transparent===!0&&R.side===$i&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,xs(R,Y,ie),R.side=Or,R.needsUpdate=!0,xs(R,Y,ie),R.side=$i):xs(R,Y,ie)}this.compile=function(R,Y,ie=null){ie===null&&(ie=R),v=ft.get(ie),v.init(Y),b.push(v),ie.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==ie&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const Q=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Me=K.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const Ie=Me[Pe];St(Ie,ie,K),Q.add(Ie)}else St(Me,ie,K),Q.add(Me)}),b.pop(),v=null,Q},this.compileAsync=function(R,Y,ie=null){const Q=this.compile(R,Y,ie);return new Promise(K=>{function Me(){if(Q.forEach(function(Pe){je.get(Pe).currentProgram.isReady()&&Q.delete(Pe)}),Q.size===0){K(R);return}setTimeout(Me,10)}mt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Dn=null;function wn(R){Dn&&Dn(R)}function _s(){Li.stop()}function ir(){Li.start()}const Li=new L0;Li.setAnimationLoop(wn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){Dn=R,ce.setAnimationLoop(R),R===null?Li.stop():Li.start()},ce.addEventListener("sessionstart",_s),ce.addEventListener("sessionend",ir),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(Y),Y=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,z),v=ft.get(R,b.length),v.init(Y),b.push(v),ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(ve),_e=this.localClippingEnabled,de=Te.init(this.clippingPlanes,_e),y=Oe.get(R,D.length),y.init(),D.push(y),ce.enabled===!0&&ce.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Di(Me,Y,-1/0,C.sortObjects)}Di(R,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(le,ae),nt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,nt&&Ke.addToRenderList(y,R),this.info.render.frame++,de===!0&&Te.beginShadows();const ie=v.state.shadowsArray;ke.render(ie,R,Y),de===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,K=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const Me=Y.cameras;if(K.length>0)for(let Pe=0,Ie=Me.length;Pe<Ie;Pe++){const ze=Me[Pe];zr(Q,K,R,ze)}nt&&Ke.render(R);for(let Pe=0,Ie=Me.length;Pe<Ie;Pe++){const ze=Me[Pe];Br(y,R,ze,ze.viewport)}}else K.length>0&&zr(Q,K,R,Y),nt&&Ke.render(R),Br(y,R,Y);z!==null&&L===0&&(U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(C,R,Y),At.resetDefaultState(),P=-1,w=null,b.pop(),b.length>0?(v=b[b.length-1],de===!0&&Te.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Di(R,Y,ie,Q){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){Q&&Ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const Pe=he.update(R),Ie=R.material;Ie.visible&&y.push(R,Pe,Ie,ie,Ve.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Pe=he.update(R),Ie=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ve.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ve.copy(Pe.boundingSphere.center)),Ve.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){const ze=Pe.groups;for(let tt=0,Je=ze.length;tt<Je;tt++){const Ge=ze[tt],vt=Ie[Ge.materialIndex];vt&&vt.visible&&y.push(R,Pe,vt,ie,Ve.z,Ge)}}else Ie.visible&&y.push(R,Pe,Ie,ie,Ve.z,null)}}const Me=R.children;for(let Pe=0,Ie=Me.length;Pe<Ie;Pe++)Di(Me[Pe],Y,ie,Q)}function Br(R,Y,ie,Q){const K=R.opaque,Me=R.transmissive,Pe=R.transparent;v.setupLightsView(ie),de===!0&&Te.setGlobalState(C.clippingPlanes,ie),Q&&Ye.viewport(I.copy(Q)),K.length>0&&rr(K,Y,ie),Me.length>0&&rr(Me,Y,ie),Pe.length>0&&rr(Pe,Y,ie),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function zr(R,Y,ie,Q){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Q.id]===void 0&&(v.state.transmissionRenderTarget[Q.id]=new vs(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Eo:er,minFilter:fs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=v.state.transmissionRenderTarget[Q.id],Pe=Q.viewport||I;Me.setSize(Pe.z*C.transmissionResolutionScale,Pe.w*C.transmissionResolutionScale);const Ie=C.getRenderTarget();C.setRenderTarget(Me),C.getClearColor($),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),nt&&Ke.render(ie);const ze=C.toneMapping;C.toneMapping=Ir;const tt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),v.setupLightsView(Q),de===!0&&Te.setGlobalState(C.clippingPlanes,Q),rr(R,ie,Q),U.updateMultisampleRenderTarget(Me),U.updateRenderTargetMipmap(Me),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ge=0,vt=Y.length;Ge<vt;Ge++){const at=Y[Ge],Wt=at.object,Bt=at.geometry,xt=at.material,$e=at.group;if(xt.side===$i&&Wt.layers.test(Q.layers)){const jt=xt.side;xt.side=zn,xt.needsUpdate=!0,Ro(Wt,ie,Q,Bt,xt,$e),xt.side=jt,xt.needsUpdate=!0,Je=!0}}Je===!0&&(U.updateMultisampleRenderTarget(Me),U.updateRenderTargetMipmap(Me))}C.setRenderTarget(Ie),C.setClearColor($,fe),tt!==void 0&&(Q.viewport=tt),C.toneMapping=ze}function rr(R,Y,ie){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Me=R.length;K<Me;K++){const Pe=R[K],Ie=Pe.object,ze=Pe.geometry,tt=Q===null?Pe.material:Q,Je=Pe.group;Ie.layers.test(ie.layers)&&Ro(Ie,Y,ie,ze,tt,Je)}}function Ro(R,Y,ie,Q,K,Me){R.onBeforeRender(C,Y,ie,Q,K,Me),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,Y,ie,Q,R,Me),K.transparent===!0&&K.side===$i&&K.forceSinglePass===!1?(K.side=zn,K.needsUpdate=!0,C.renderBufferDirect(ie,Y,Q,K,R,Me),K.side=Or,K.needsUpdate=!0,C.renderBufferDirect(ie,Y,Q,K,R,Me),K.side=$i):C.renderBufferDirect(ie,Y,Q,K,R,Me),R.onAfterRender(C,Y,ie,Q,K,Me)}function xs(R,Y,ie){Y.isScene!==!0&&(Y=ct);const Q=je.get(R),K=v.state.lights,Me=v.state.shadowsArray,Pe=K.state.version,Ie=Xe.getParameters(R,K.state,Me,Y,ie),ze=Xe.getProgramCacheKey(Ie);let tt=Q.programs;Q.environment=R.isMeshStandardMaterial?Y.environment:null,Q.fog=Y.fog,Q.envMap=(R.isMeshStandardMaterial?ne:A).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",st),tt=new Map,Q.programs=tt);let Je=tt.get(ze);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===Pe)return Si(R,Ie),Je}else Ie.uniforms=Xe.getUniforms(R),R.onBeforeCompile(Ie,C),Je=Xe.acquireProgram(Ie,ze),tt.set(ze,Je),Q.uniforms=Ie.uniforms;const Ge=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=Te.uniform),Si(R,Ie),Q.needsLights=tc(R),Q.lightsStateVersion=Pe,Q.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.directionalShadowMap.value=K.state.directionalShadowMap,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotShadowMap.value=K.state.spotShadowMap,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMap.value=K.state.pointShadowMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=Je,Q.uniformsList=null,Je}function bo(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Cu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Si(R,Y){const ie=je.get(R);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function Po(R,Y,ie,Q,K){Y.isScene!==!0&&(Y=ct),U.resetTextureUnits();const Me=Y.fog,Pe=Q.isMeshStandardMaterial?Y.environment:null,Ie=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:_a,ze=(Q.isMeshStandardMaterial?ne:A).get(Q.envMap||Pe),tt=Q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!ie.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ge=!!ie.morphAttributes.position,vt=!!ie.morphAttributes.normal,at=!!ie.morphAttributes.color;let Wt=Ir;Q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Wt=C.toneMapping);const Bt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,xt=Bt!==void 0?Bt.length:0,$e=je.get(Q),jt=v.state.lights;if(de===!0&&(_e===!0||R!==w)){const hn=R===w&&Q.id===P;Te.setState(Q,R,hn)}let gt=!1;Q.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==jt.state.version||$e.outputColorSpace!==Ie||K.isBatchedMesh&&$e.batching===!1||!K.isBatchedMesh&&$e.batching===!0||K.isBatchedMesh&&$e.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$e.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$e.instancing===!1||!K.isInstancedMesh&&$e.instancing===!0||K.isSkinnedMesh&&$e.skinning===!1||!K.isSkinnedMesh&&$e.skinning===!0||K.isInstancedMesh&&$e.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$e.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$e.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$e.instancingMorph===!1&&K.morphTexture!==null||$e.envMap!==ze||Q.fog===!0&&$e.fog!==Me||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Te.numPlanes||$e.numIntersection!==Te.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==Je||$e.morphTargets!==Ge||$e.morphNormals!==vt||$e.morphColors!==at||$e.toneMapping!==Wt||$e.morphTargetsCount!==xt)&&(gt=!0):(gt=!0,$e.__version=Q.version);let gn=$e.currentProgram;gt===!0&&(gn=xs(Q,Y,K));let sr=!1,An=!1,Ni=!1;const Dt=gn.getUniforms(),vn=$e.uniforms;if(Ye.useProgram(gn.program)&&(sr=!0,An=!0,Ni=!0),Q.id!==P&&(P=Q.id,An=!0),sr||w!==R){Ye.buffers.depth.getReversed()?(me.copy(R.projectionMatrix),Gy(me),Wy(me),Dt.setValue(G,"projectionMatrix",me)):Dt.setValue(G,"projectionMatrix",R.projectionMatrix),Dt.setValue(G,"viewMatrix",R.matrixWorldInverse);const an=Dt.map.cameraPosition;an!==void 0&&an.setValue(G,we.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Dt.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,An=!0,Ni=!0)}if(K.isSkinnedMesh){Dt.setOptional(G,K,"bindMatrix"),Dt.setOptional(G,K,"bindMatrixInverse");const hn=K.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Dt.setValue(G,"boneTexture",hn.boneTexture,U))}K.isBatchedMesh&&(Dt.setOptional(G,K,"batchingTexture"),Dt.setValue(G,"batchingTexture",K._matricesTexture,U),Dt.setOptional(G,K,"batchingIdTexture"),Dt.setValue(G,"batchingIdTexture",K._indirectTexture,U),Dt.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Dt.setValue(G,"batchingColorTexture",K._colorsTexture,U));const sn=ie.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&et.update(K,ie,gn),(An||$e.receiveShadow!==K.receiveShadow)&&($e.receiveShadow=K.receiveShadow,Dt.setValue(G,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(vn.envMap.value=ze,vn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&Y.environment!==null&&(vn.envMapIntensity.value=Y.environmentIntensity),An&&(Dt.setValue(G,"toneMappingExposure",C.toneMappingExposure),$e.needsLights&&Lo(vn,Ni),Me&&Q.fog===!0&&Re.refreshFogUniforms(vn,Me),Re.refreshMaterialUniforms(vn,Q,V,ue,v.state.transmissionRenderTarget[R.id]),Cu.upload(G,bo($e),vn,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Cu.upload(G,bo($e),vn,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Dt.setValue(G,"center",K.center),Dt.setValue(G,"modelViewMatrix",K.modelViewMatrix),Dt.setValue(G,"normalMatrix",K.normalMatrix),Dt.setValue(G,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const hn=Q.uniformsGroups;for(let an=0,Et=hn.length;an<Et;an++){const Ei=hn[an];X.update(Ei,gn),X.bind(Ei,gn)}}return gn}function Lo(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function tc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,Y,ie){je.get(R.texture).__webglTexture=Y,je.get(R.depthTexture).__webglTexture=ie;const Q=je.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=ie===void 0,Q.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const ie=je.get(R);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0};const Do=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,ie=0){z=R,N=Y,L=ie;let Q=!0,K=null,Me=!1,Pe=!1;if(R){const ze=je.get(R);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(G.FRAMEBUFFER,null),Q=!1;else if(ze.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(ze.__hasExternalTextures)U.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(ze.__boundDepthTexture!==Ge){if(Ge!==null&&je.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Pe=!0);const Je=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[Y])?K=Je[Y][ie]:K=Je[Y],Me=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?K=je.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?K=Je[ie]:K=Je,I.copy(R.viewport),B.copy(R.scissor),W=R.scissorTest}else I.copy(k).multiplyScalar(V).floor(),B.copy(ee).multiplyScalar(V).floor(),W=Ce;if(ie!==0&&(K=Do),Ye.bindFramebuffer(G.FRAMEBUFFER,K)&&Q&&Ye.drawBuffers(R,K),Ye.viewport(I),Ye.scissor(B),Ye.setScissorTest(W),Me){const ze=je.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,ie)}else if(Pe){const ze=je.get(R.texture),tt=Y;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.__webglTexture,ie,tt)}else if(R!==null&&ie!==0){const ze=je.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ze.__webglTexture,ie)}P=-1},this.readRenderTargetPixels=function(R,Y,ie,Q,K,Me,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){Ye.bindFramebuffer(G.FRAMEBUFFER,Ie);try{const ze=R.texture,tt=ze.format,Je=ze.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-Q&&ie>=0&&ie<=R.height-K&&G.readPixels(Y,ie,Q,K,rt.convert(tt),rt.convert(Je),Me)}finally{const ze=z!==null?je.get(z).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ie,Q,K,Me,Pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){const ze=R.texture,tt=ze.format,Je=ze.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-Q&&ie>=0&&ie<=R.height-K){Ye.bindFramebuffer(G.FRAMEBUFFER,Ie);const Ge=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ge),G.bufferData(G.PIXEL_PACK_BUFFER,Me.byteLength,G.STREAM_READ),G.readPixels(Y,ie,Q,K,rt.convert(tt),rt.convert(Je),0);const vt=z!==null?je.get(z).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,vt);const at=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Vy(G,at,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ge),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Me),G.deleteBuffer(Ge),G.deleteSync(at),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,ie=0){R.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-ie),K=Math.floor(R.image.width*Q),Me=Math.floor(R.image.height*Q),Pe=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;U.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ie,0,0,Pe,Ie,K,Me),Ye.unbindTexture()};const No=G.createFramebuffer(),Io=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,ie=null,Q=null,K=0,Me=null){R.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],Y=arguments[2],Me=arguments[3]||0,ie=null),Me===null&&(K!==0?(oa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=K,K=0):Me=0);let Pe,Ie,ze,tt,Je,Ge,vt,at,Wt;const Bt=R.isCompressedTexture?R.mipmaps[Me]:R.image;if(ie!==null)Pe=ie.max.x-ie.min.x,Ie=ie.max.y-ie.min.y,ze=ie.isBox3?ie.max.z-ie.min.z:1,tt=ie.min.x,Je=ie.min.y,Ge=ie.isBox3?ie.min.z:0;else{const sn=Math.pow(2,-K);Pe=Math.floor(Bt.width*sn),Ie=Math.floor(Bt.height*sn),R.isDataArrayTexture?ze=Bt.depth:R.isData3DTexture?ze=Math.floor(Bt.depth*sn):ze=1,tt=0,Je=0,Ge=0}Q!==null?(vt=Q.x,at=Q.y,Wt=Q.z):(vt=0,at=0,Wt=0);const xt=rt.convert(Y.format),$e=rt.convert(Y.type);let jt;Y.isData3DTexture?(U.setTexture3D(Y,0),jt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),jt=G.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),jt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const gt=G.getParameter(G.UNPACK_ROW_LENGTH),gn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),sr=G.getParameter(G.UNPACK_SKIP_PIXELS),An=G.getParameter(G.UNPACK_SKIP_ROWS),Ni=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Bt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Bt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,tt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ge);const Dt=R.isDataArrayTexture||R.isData3DTexture,vn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const sn=je.get(R),hn=je.get(Y),an=je.get(sn.__renderTarget),Et=je.get(hn.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,an.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ei=0;Ei<ze;Ei++)Dt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(R).__webglTexture,K,Ge+Ei),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(Y).__webglTexture,Me,Wt+Ei)),G.blitFramebuffer(tt,Je,Pe,Ie,vt,at,Pe,Ie,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||je.has(R)){const sn=je.get(R),hn=je.get(Y);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,No),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Io);for(let an=0;an<ze;an++)Dt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,sn.__webglTexture,K,Ge+an):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,sn.__webglTexture,K),vn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,Me,Wt+an):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,Me),K!==0?G.blitFramebuffer(tt,Je,Pe,Ie,vt,at,Pe,Ie,G.COLOR_BUFFER_BIT,G.NEAREST):vn?G.copyTexSubImage3D(jt,Me,vt,at,Wt+an,tt,Je,Pe,Ie):G.copyTexSubImage2D(jt,Me,vt,at,tt,Je,Pe,Ie);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else vn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(jt,Me,vt,at,Wt,Pe,Ie,ze,xt,$e,Bt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(jt,Me,vt,at,Wt,Pe,Ie,ze,xt,Bt.data):G.texSubImage3D(jt,Me,vt,at,Wt,Pe,Ie,ze,xt,$e,Bt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Me,vt,at,Pe,Ie,xt,$e,Bt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Me,vt,at,Bt.width,Bt.height,xt,Bt.data):G.texSubImage2D(G.TEXTURE_2D,Me,vt,at,Pe,Ie,xt,$e,Bt);G.pixelStorei(G.UNPACK_ROW_LENGTH,gt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,gn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,sr),G.pixelStorei(G.UNPACK_SKIP_ROWS,An),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ni),Me===0&&Y.generateMipmaps&&G.generateMipmap(jt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ie=null,Q=null,K=0){return R.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],Y=arguments[3],K=arguments[4]||0),oa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,ie,Q,K)},this.initRenderTarget=function(R){je.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){N=0,L=0,z=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const cw=()=>{const r=gi.useRef(null);return gi.useEffect(()=>{if(!r.current)return;const e=new hS,t=new ii(75,1,.1,1e3),s=new uw({antialias:!0,alpha:!0}),o=new mo,l=new MS,c=["bootstrap","css","express","figma","git","github","html","javascript","mongo","nextjs","nodejs","react","vscode","c","java","postman","tailwind","canva"].map(y=>`assets/${y}.svg`),f=[],h=27,p=6;s.setSize(375,375),r.current.appendChild(s.domElement),c.forEach((y,v)=>l.load(y,D=>{const b=Math.acos(-1+2*v/c.length),C=Math.sqrt(c.length*Math.PI)*b,F=new mS(new C0({map:D}));F.scale.set(p,p,1),F.position.set(h*Math.cos(C)*Math.sin(b),h*Math.sin(C)*Math.sin(b),h*Math.cos(b)),o.add(F),f.push(F)},void 0,D=>{console.error(`Error loading texture: ${y}`,D)})),e.add(o),t.position.z=50;let m=s.domElement.getBoundingClientRect();const _=()=>{m=s.domElement.getBoundingClientRect()};window.addEventListener("scroll",_),window.addEventListener("resize",_);const x=new AS;window.addEventListener("click",y=>{if(y.clientX>=m.left&&y.clientX<=m.right&&y.clientY>=m.top&&y.clientY<=m.bottom){x.setFromCamera({x:2*(y.clientX-m.left)/375-1,y:-(2*(y.clientY-m.top))/375+1},t);const v=x.intersectObjects(f)[0];v&&o.attach(v.object)}});let S=0,E=0;window.addEventListener("mousemove",y=>{y.clientX>=m.left&&y.clientX<=m.right&&y.clientY>=m.top&&y.clientY<=m.bottom&&(S=.01*(y.clientX-m.left)/375-1,E=2*-(y.clientY-m.top)/375+1)});const M=()=>{requestAnimationFrame(M),o.rotation.y+=.005+S*.02,o.rotation.x+=E*.02,o.children.forEach(y=>y.lookAt(t.position)),s.render(e,t)};return M(),()=>{for(;r.current.firstChild;)r.current.removeChild(r.current.firstChild);window.removeEventListener("scroll",_),window.removeEventListener("resize",_)}},[]),q.jsx("section",{id:"section1",className:"saturate-200 flex justify-center items-center py-10",children:q.jsx("div",{ref:r,style:{height:"375px",aspectRatio:"1",margin:"0 auto"}})})},_v=["Full Stack Developer","Web Designer","Software Engineer"],fw=()=>{const[r,e]=gi.useState(""),[t,s]=gi.useState(0),[o,l]=gi.useState(!1),[c,f]=gi.useState(150);return gi.useEffect(()=>{const p=setTimeout(()=>{const m=_v[t];e(_=>o?m.substring(0,_.length-1):m.substring(0,_.length+1)),!o&&r===m?setTimeout(()=>l(!0),2e3):o&&r===""&&(l(!1),s((t+1)%_v.length)),f(o?30:150)},c);return()=>clearTimeout(p)},[r,o,t,c]),q.jsx("div",{children:q.jsxs("h3",{className:"text-white lg:text-3xl text-xl uppercase",children:[r,q.jsx("span",{className:"blinking-cursor lg:text-5xl text-3xl",children:"|"})]})})},dw=()=>q.jsx("section",{className:" text-gray-400  flex flex-col items-center justify-center mt-[-4rem]",id:"about",children:q.jsxs("div",{className:"max-w-6xl flex flex-col md:flex-row items-center justify-evenly space-y-8 md:space-y-0 md:space-x-10",children:[q.jsxs("div",{className:"space-y-4 w-1/2",children:[q.jsx("h2",{className:"text-3xl text-white font-bold",children:"🚀 Who Am I?"}),q.jsxs("p",{className:"text-lg text-gray-300 leading-relaxed",children:["Hey! I'm ",q.jsx("span",{className:"text-green-400 font-semibold",children:q.jsx("i",{children:" Adnan Ali"})}),". I've always been curious about technology, and over the years, I've transformed my curiosity into a passion for",q.jsx("span",{className:"text-green-400 font-semibold",children:q.jsx("i",{children:" web development"})}),", problem-solving, and crafting beautiful digital experiences."]}),q.jsxs("p",{className:"text-lg text-gray-300 leading-relaxed",children:["My journey began with exploring ",q.jsx("span",{className:"text-green-400 font-semibold",children:q.jsx("i",{children:" code and creativity"})}),", and today, I’m honing my skills in",q.jsx("span",{className:"text-green-400 font-semibold",children:q.jsx("i",{children:" Full-Stack Development"})}),". From tackling real-world challenges to learning new technologies, I strive to grow every day."]}),q.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Beyond coding, I enjoy spending time with friends, engaging in thoughtful conversations, and continuously seeking ways to make a positive impact. Let’s connect and create something amazing together!"})]}),q.jsxs("div",{className:"",children:[q.jsx("img",{className:"w-[9.5rem] ms-60 backdrop-invert-0",src:"assets/dots.svg",alt:""}),q.jsx("img",{src:"assets/mypic1.jpg",alt:"Your Name",className:"w-[22rem] rounded-full mt-[-8rem]"})]})]})}),fn=r=>q.jsx("div",{children:q.jsx("div",{className:"hover:scale-110 cursor-pointer transition-all ease-in-out duration-200 flex border w-fit rounded-3xl py-2 px-7 border-neutral-500",children:r.name})});var Bn=function(){return Bn=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Bn.apply(this,arguments)};function Ou(r,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,l;s<o;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return r.concat(l||Array.prototype.slice.call(e))}var kt="-ms-",_o="-moz-",Ct="-webkit-",O0="comm",ju="rule",Ih="decl",hw="@import",F0="@keyframes",pw="@layer",k0=Math.abs,Uh=String.fromCharCode,mh=Object.assign;function mw(r,e){return dn(r,0)^45?(((e<<2^dn(r,0))<<2^dn(r,1))<<2^dn(r,2))<<2^dn(r,3):0}function B0(r){return r.trim()}function Yi(r,e){return(r=e.exec(r))?r[0]:r}function ut(r,e,t){return r.replace(e,t)}function Ru(r,e,t){return r.indexOf(e,t)}function dn(r,e){return r.charCodeAt(e)|0}function ya(r,e,t){return r.slice(e,t)}function Ri(r){return r.length}function z0(r){return r.length}function vo(r,e){return e.push(r),r}function gw(r,e){return r.map(e).join("")}function xv(r,e){return r.filter(function(t){return!Yi(t,e)})}var Xu=1,Sa=1,H0=0,ai=0,Qt=0,Ca="";function qu(r,e,t,s,o,l,c,f){return{value:r,root:e,parent:t,type:s,props:o,children:l,line:Xu,column:Sa,length:c,return:"",siblings:f}}function Lr(r,e){return mh(qu("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function aa(r){for(;r.root;)r=Lr(r.root,{children:[r]});vo(r,r.siblings)}function vw(){return Qt}function _w(){return Qt=ai>0?dn(Ca,--ai):0,Sa--,Qt===10&&(Sa=1,Xu--),Qt}function yi(){return Qt=ai<H0?dn(Ca,ai++):0,Sa++,Qt===10&&(Sa=1,Xu++),Qt}function ps(){return dn(Ca,ai)}function bu(){return ai}function Yu(r,e){return ya(Ca,r,e)}function gh(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xw(r){return Xu=Sa=1,H0=Ri(Ca=r),ai=0,[]}function yw(r){return Ca="",r}function md(r){return B0(Yu(ai-1,vh(r===91?r+2:r===40?r+1:r)))}function Sw(r){for(;(Qt=ps())&&Qt<33;)yi();return gh(r)>2||gh(Qt)>3?"":" "}function Ew(r,e){for(;--e&&yi()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return Yu(r,bu()+(e<6&&ps()==32&&yi()==32))}function vh(r){for(;yi();)switch(Qt){case r:return ai;case 34:case 39:r!==34&&r!==39&&vh(Qt);break;case 40:r===41&&vh(r);break;case 92:yi();break}return ai}function Mw(r,e){for(;yi()&&r+Qt!==57;)if(r+Qt===84&&ps()===47)break;return"/*"+Yu(e,ai-1)+"*"+Uh(r===47?r:yi())}function Tw(r){for(;!gh(ps());)yi();return Yu(r,ai)}function ww(r){return yw(Pu("",null,null,null,[""],r=xw(r),0,[0],r))}function Pu(r,e,t,s,o,l,c,f,h){for(var p=0,m=0,_=c,x=0,S=0,E=0,M=1,y=1,v=1,D=0,b="",C=o,F=l,N=s,L=b;y;)switch(E=D,D=yi()){case 40:if(E!=108&&dn(L,_-1)==58){Ru(L+=ut(md(D),"&","&\f"),"&\f",k0(p?f[p-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:L+=md(D);break;case 9:case 10:case 13:case 32:L+=Sw(E);break;case 92:L+=Ew(bu()-1,7);continue;case 47:switch(ps()){case 42:case 47:vo(Aw(Mw(yi(),bu()),e,t,h),h);break;default:L+="/"}break;case 123*M:f[p++]=Ri(L)*v;case 125*M:case 59:case 0:switch(D){case 0:case 125:y=0;case 59+m:v==-1&&(L=ut(L,/\f/g,"")),S>0&&Ri(L)-_&&vo(S>32?Sv(L+";",s,t,_-1,h):Sv(ut(L," ","")+";",s,t,_-2,h),h);break;case 59:L+=";";default:if(vo(N=yv(L,e,t,p,m,o,f,b,C=[],F=[],_,l),l),D===123)if(m===0)Pu(L,e,N,N,C,l,_,f,F);else switch(x===99&&dn(L,3)===110?100:x){case 100:case 108:case 109:case 115:Pu(r,N,N,s&&vo(yv(r,N,N,0,0,o,f,b,o,C=[],_,F),F),o,F,_,f,s?C:F);break;default:Pu(L,N,N,N,[""],F,0,f,F)}}p=m=S=0,M=v=1,b=L="",_=c;break;case 58:_=1+Ri(L),S=E;default:if(M<1){if(D==123)--M;else if(D==125&&M++==0&&_w()==125)continue}switch(L+=Uh(D),D*M){case 38:v=m>0?1:(L+="\f",-1);break;case 44:f[p++]=(Ri(L)-1)*v,v=1;break;case 64:ps()===45&&(L+=md(yi())),x=ps(),m=_=Ri(b=L+=Tw(bu())),D++;break;case 45:E===45&&Ri(L)==2&&(M=0)}}return l}function yv(r,e,t,s,o,l,c,f,h,p,m,_){for(var x=o-1,S=o===0?l:[""],E=z0(S),M=0,y=0,v=0;M<s;++M)for(var D=0,b=ya(r,x+1,x=k0(y=c[M])),C=r;D<E;++D)(C=B0(y>0?S[D]+" "+b:ut(b,/&\f/g,S[D])))&&(h[v++]=C);return qu(r,e,t,o===0?ju:f,h,p,m,_)}function Aw(r,e,t,s){return qu(r,e,t,O0,Uh(vw()),ya(r,2,-2),0,s)}function Sv(r,e,t,s,o){return qu(r,e,t,Ih,ya(r,0,s),ya(r,s+1,-1),s,o)}function V0(r,e,t){switch(mw(r,e)){case 5103:return Ct+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ct+r+r;case 4789:return _o+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ct+r+_o+r+kt+r+r;case 5936:switch(dn(r,e+11)){case 114:return Ct+r+kt+ut(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ct+r+kt+ut(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ct+r+kt+ut(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Ct+r+kt+r+r;case 6165:return Ct+r+kt+"flex-"+r+r;case 5187:return Ct+r+ut(r,/(\w+).+(:[^]+)/,Ct+"box-$1$2"+kt+"flex-$1$2")+r;case 5443:return Ct+r+kt+"flex-item-"+ut(r,/flex-|-self/g,"")+(Yi(r,/flex-|baseline/)?"":kt+"grid-row-"+ut(r,/flex-|-self/g,""))+r;case 4675:return Ct+r+kt+"flex-line-pack"+ut(r,/align-content|flex-|-self/g,"")+r;case 5548:return Ct+r+kt+ut(r,"shrink","negative")+r;case 5292:return Ct+r+kt+ut(r,"basis","preferred-size")+r;case 6060:return Ct+"box-"+ut(r,"-grow","")+Ct+r+kt+ut(r,"grow","positive")+r;case 4554:return Ct+ut(r,/([^-])(transform)/g,"$1"+Ct+"$2")+r;case 6187:return ut(ut(ut(r,/(zoom-|grab)/,Ct+"$1"),/(image-set)/,Ct+"$1"),r,"")+r;case 5495:case 3959:return ut(r,/(image-set\([^]*)/,Ct+"$1$`$1");case 4968:return ut(ut(r,/(.+:)(flex-)?(.*)/,Ct+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ct+r+r;case 4200:if(!Yi(r,/flex-|baseline/))return kt+"grid-column-align"+ya(r,e)+r;break;case 2592:case 3360:return kt+ut(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,Yi(s.props,/grid-\w+-end/)})?~Ru(r+(t=t[e].value),"span",0)?r:kt+ut(r,"-start","")+r+kt+"grid-row-span:"+(~Ru(t,"span",0)?Yi(t,/\d+/):+Yi(t,/\d+/)-+Yi(r,/\d+/))+";":kt+ut(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return Yi(s.props,/grid-\w+-start/)})?r:kt+ut(ut(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ut(r,/(.+)-inline(.+)/,Ct+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ri(r)-1-e>6)switch(dn(r,e+1)){case 109:if(dn(r,e+4)!==45)break;case 102:return ut(r,/(.+:)(.+)-([^]+)/,"$1"+Ct+"$2-$3$1"+_o+(dn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Ru(r,"stretch",0)?V0(ut(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return ut(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,l,c,f,h,p){return kt+o+":"+l+p+(c?kt+o+"-span:"+(f?h:+h-+l)+p:"")+r});case 4949:if(dn(r,e+6)===121)return ut(r,":",":"+Ct)+r;break;case 6444:switch(dn(r,dn(r,14)===45?18:11)){case 120:return ut(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ct+(dn(r,14)===45?"inline-":"")+"box$3$1"+Ct+"$2$3$1"+kt+"$2box$3")+r;case 100:return ut(r,":",":"+kt)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ut(r,"scroll-","scroll-snap-")+r}return r}function Fu(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function Cw(r,e,t,s){switch(r.type){case pw:if(r.children.length)break;case hw:case Ih:return r.return=r.return||r.value;case O0:return"";case F0:return r.return=r.value+"{"+Fu(r.children,s)+"}";case ju:if(!Ri(r.value=r.props.join(",")))return""}return Ri(t=Fu(r.children,s))?r.return=r.value+"{"+t+"}":""}function Rw(r){var e=z0(r);return function(t,s,o,l){for(var c="",f=0;f<e;f++)c+=r[f](t,s,o,l)||"";return c}}function bw(r){return function(e){e.root||(e=e.return)&&r(e)}}function Pw(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case Ih:r.return=V0(r.value,r.length,t);return;case F0:return Fu([Lr(r,{value:ut(r.value,"@","@"+Ct)})],s);case ju:if(r.length)return gw(t=r.props,function(o){switch(Yi(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":aa(Lr(r,{props:[ut(o,/:(read-\w+)/,":"+_o+"$1")]})),aa(Lr(r,{props:[o]})),mh(r,{props:xv(t,s)});break;case"::placeholder":aa(Lr(r,{props:[ut(o,/:(plac\w+)/,":"+Ct+"input-$1")]})),aa(Lr(r,{props:[ut(o,/:(plac\w+)/,":"+_o+"$1")]})),aa(Lr(r,{props:[ut(o,/:(plac\w+)/,kt+"input-$1")]})),aa(Lr(r,{props:[o]})),mh(r,{props:xv(t,s)});break}return""})}}var Lw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yn={},Ea=typeof process<"u"&&Yn!==void 0&&(Yn.REACT_APP_SC_ATTR||Yn.SC_ATTR)||"data-styled",G0="active",W0="data-styled-version",$u="6.1.14",Oh=`/*!sc*/
`,ku=typeof window<"u"&&"HTMLElement"in window,Dw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yn!==void 0&&Yn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yn.REACT_APP_SC_DISABLE_SPEEDY!==""?Yn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yn!==void 0&&Yn.SC_DISABLE_SPEEDY!==void 0&&Yn.SC_DISABLE_SPEEDY!==""&&Yn.SC_DISABLE_SPEEDY!=="false"&&Yn.SC_DISABLE_SPEEDY),Ku=Object.freeze([]),Ma=Object.freeze({});function Nw(r,e,t){return t===void 0&&(t=Ma),r.theme!==t.theme&&r.theme||e||t.theme}var j0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Iw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uw=/(^-|-$)/g;function Ev(r){return r.replace(Iw,"-").replace(Uw,"")}var Ow=/(a)(d)/gi,ou=52,Mv=function(r){return String.fromCharCode(r+(r>25?39:97))};function _h(r){var e,t="";for(e=Math.abs(r);e>ou;e=e/ou|0)t=Mv(e%ou)+t;return(Mv(e%ou)+t).replace(Ow,"$1-$2")}var gd,X0=5381,ua=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},q0=function(r){return ua(X0,r)};function Fw(r){return _h(q0(r)>>>0)}function kw(r){return r.displayName||r.name||"Component"}function vd(r){return typeof r=="string"&&!0}var Y0=typeof Symbol=="function"&&Symbol.for,$0=Y0?Symbol.for("react.memo"):60115,Bw=Y0?Symbol.for("react.forward_ref"):60112,zw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vw=((gd={})[Bw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gd[$0]=K0,gd);function Tv(r){return("type"in(e=r)&&e.type.$$typeof)===$0?K0:"$$typeof"in r?Vw[r.$$typeof]:zw;var e}var Gw=Object.defineProperty,Ww=Object.getOwnPropertyNames,wv=Object.getOwnPropertySymbols,jw=Object.getOwnPropertyDescriptor,Xw=Object.getPrototypeOf,Av=Object.prototype;function Z0(r,e,t){if(typeof e!="string"){if(Av){var s=Xw(e);s&&s!==Av&&Z0(r,s,t)}var o=Ww(e);wv&&(o=o.concat(wv(e)));for(var l=Tv(r),c=Tv(e),f=0;f<o.length;++f){var h=o[f];if(!(h in Hw||t&&t[h]||c&&h in c||l&&h in l)){var p=jw(e,h);try{Gw(r,h,p)}catch{}}}}return r}function Ta(r){return typeof r=="function"}function Fh(r){return typeof r=="object"&&"styledComponentId"in r}function ds(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function Cv(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function So(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function xh(r,e,t){if(t===void 0&&(t=!1),!t&&!So(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=xh(r[s],e[s]);else if(So(e))for(var s in e)r[s]=xh(r[s],e[s]);return r}function kh(r,e){Object.defineProperty(r,"toString",{value:e})}function Co(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var qw=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,l=o;e>=l;)if((l<<=1)<0)throw Co(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var c=o;c<l;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(e+1),h=(c=0,t.length);c<h;c++)this.tag.insertRule(f,t[c])&&(this.groupSizes[e]++,f++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var l=s;l<o;l++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),l=o+s,c=o;c<l;c++)t+="".concat(this.tag.getRule(c)).concat(Oh);return t},r}(),Lu=new Map,Bu=new Map,Du=1,lu=function(r){if(Lu.has(r))return Lu.get(r);for(;Bu.has(Du);)Du++;var e=Du++;return Lu.set(r,e),Bu.set(e,r),e},Yw=function(r,e){Du=e+1,Lu.set(r,e),Bu.set(e,r)},$w="style[".concat(Ea,"][").concat(W0,'="').concat($u,'"]'),Kw=new RegExp("^".concat(Ea,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zw=function(r,e,t){for(var s,o=t.split(","),l=0,c=o.length;l<c;l++)(s=o[l])&&r.registerName(e,s)},Qw=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(Oh),o=[],l=0,c=s.length;l<c;l++){var f=s[l].trim();if(f){var h=f.match(Kw);if(h){var p=0|parseInt(h[1],10),m=h[2];p!==0&&(Yw(m,p),Zw(r,m,h[3]),r.getTag().insertRules(p,o)),o.length=0}else o.push(f)}}},Rv=function(r){for(var e=document.querySelectorAll($w),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(Ea)!==G0&&(Qw(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function Jw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Q0=function(r){var e=document.head,t=r||e,s=document.createElement("style"),o=function(f){var h=Array.from(f.querySelectorAll("style[".concat(Ea,"]")));return h[h.length-1]}(t),l=o!==void 0?o.nextSibling:null;s.setAttribute(Ea,G0),s.setAttribute(W0,$u);var c=Jw();return c&&s.setAttribute("nonce",c),t.insertBefore(s,l),s},eA=function(){function r(e){this.element=Q0(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var c=s[o];if(c.ownerNode===t)return c}throw Co(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),tA=function(){function r(e){this.element=Q0(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),nA=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),bv=ku,iA={isServer:!ku,useCSSOMInjection:!Dw},J0=function(){function r(e,t,s){e===void 0&&(e=Ma),t===void 0&&(t={});var o=this;this.options=Bn(Bn({},iA),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&ku&&bv&&(bv=!1,Rv(this)),kh(this,function(){return function(l){for(var c=l.getTag(),f=c.length,h="",p=function(_){var x=function(v){return Bu.get(v)}(_);if(x===void 0)return"continue";var S=l.names.get(x),E=c.getGroup(_);if(S===void 0||!S.size||E.length===0)return"continue";var M="".concat(Ea,".g").concat(_,'[id="').concat(x,'"]'),y="";S!==void 0&&S.forEach(function(v){v.length>0&&(y+="".concat(v,","))}),h+="".concat(E).concat(M,'{content:"').concat(y,'"}').concat(Oh)},m=0;m<f;m++)p(m);return h}(o)})}return r.registerId=function(e){return lu(e)},r.prototype.rehydrate=function(){!this.server&&ku&&Rv(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(Bn(Bn({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new nA(o):s?new eA(o):new tA(o)}(this.options),new qw(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(lu(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(lu(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(lu(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),rA=/&/g,sA=/^\s*\/\/.*$/gm;function e_(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=e_(t.children,e)),t})}function aA(r){var e,t,s,o=Ma,l=o.options,c=l===void 0?Ma:l,f=o.plugins,h=f===void 0?Ku:f,p=function(x,S,E){return E.startsWith(t)&&E.endsWith(t)&&E.replaceAll(t,"").length>0?".".concat(e):x},m=h.slice();m.push(function(x){x.type===ju&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(rA,t).replace(s,p))}),c.prefix&&m.push(Pw),m.push(Cw);var _=function(x,S,E,M){S===void 0&&(S=""),E===void 0&&(E=""),M===void 0&&(M="&"),e=M,t=S,s=new RegExp("\\".concat(t,"\\b"),"g");var y=x.replace(sA,""),v=ww(E||S?"".concat(E," ").concat(S," { ").concat(y," }"):y);c.namespace&&(v=e_(v,c.namespace));var D=[];return Fu(v,Rw(m.concat(bw(function(b){return D.push(b)})))),D};return _.hash=h.length?h.reduce(function(x,S){return S.name||Co(15),ua(x,S.name)},X0).toString():"",_}var oA=new J0,yh=aA(),t_=si.createContext({shouldForwardProp:void 0,styleSheet:oA,stylis:yh});t_.Consumer;si.createContext(void 0);function Pv(){return gi.useContext(t_)}var lA=function(){function r(e,t){var s=this;this.inject=function(o,l){l===void 0&&(l=yh);var c=s.name+l.hash;o.hasNameForId(s.id,c)||o.insertRules(s.id,c,l(s.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,kh(this,function(){throw Co(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=yh),this.name+e.hash},r}(),uA=function(r){return r>="A"&&r<="Z"};function Lv(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;uA(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var n_=function(r){return r==null||r===!1||r===""},i_=function(r){var e,t,s=[];for(var o in r){var l=r[o];r.hasOwnProperty(o)&&!n_(l)&&(Array.isArray(l)&&l.isCss||Ta(l)?s.push("".concat(Lv(o),":"),l,";"):So(l)?s.push.apply(s,Ou(Ou(["".concat(o," {")],i_(l),!1),["}"],!1)):s.push("".concat(Lv(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Lw||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function ms(r,e,t,s){if(n_(r))return[];if(Fh(r))return[".".concat(r.styledComponentId)];if(Ta(r)){if(!Ta(l=r)||l.prototype&&l.prototype.isReactComponent||!e)return[r];var o=r(e);return ms(o,e,t,s)}var l;return r instanceof lA?t?(r.inject(t,s),[r.getName(s)]):[r]:So(r)?i_(r):Array.isArray(r)?Array.prototype.concat.apply(Ku,r.map(function(c){return ms(c,e,t,s)})):[r.toString()]}function cA(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(Ta(t)&&!Fh(t))return!1}return!0}var fA=q0($u),dA=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&cA(e),this.componentId=t,this.baseHash=ua(fA,t),this.baseStyle=s,J0.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ds(o,this.staticRulesId);else{var l=Cv(ms(this.rules,e,t,s)),c=_h(ua(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,c)){var f=s(l,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,f)}o=ds(o,c),this.staticRulesId=c}else{for(var h=ua(this.baseHash,s.hash),p="",m=0;m<this.rules.length;m++){var _=this.rules[m];if(typeof _=="string")p+=_;else if(_){var x=Cv(ms(_,e,t,s));h=ua(h,x+m),p+=x}}if(p){var S=_h(h>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,s(p,".".concat(S),void 0,this.componentId)),o=ds(o,S)}}return o},r}(),r_=si.createContext(void 0);r_.Consumer;var _d={};function hA(r,e,t){var s=Fh(r),o=r,l=!vd(r),c=e.attrs,f=c===void 0?Ku:c,h=e.componentId,p=h===void 0?function(C,F){var N=typeof C!="string"?"sc":Ev(C);_d[N]=(_d[N]||0)+1;var L="".concat(N,"-").concat(Fw($u+N+_d[N]));return F?"".concat(F,"-").concat(L):L}(e.displayName,e.parentComponentId):h,m=e.displayName,_=m===void 0?function(C){return vd(C)?"styled.".concat(C):"Styled(".concat(kw(C),")")}(r):m,x=e.displayName&&e.componentId?"".concat(Ev(e.displayName),"-").concat(e.componentId):e.componentId||p,S=s&&o.attrs?o.attrs.concat(f).filter(Boolean):f,E=e.shouldForwardProp;if(s&&o.shouldForwardProp){var M=o.shouldForwardProp;if(e.shouldForwardProp){var y=e.shouldForwardProp;E=function(C,F){return M(C,F)&&y(C,F)}}else E=M}var v=new dA(t,x,s?o.componentStyle:void 0);function D(C,F){return function(N,L,z){var P=N.attrs,w=N.componentStyle,I=N.defaultProps,B=N.foldedComponentIds,W=N.styledComponentId,$=N.target,fe=si.useContext(r_),oe=Pv(),ue=N.shouldForwardProp||oe.shouldForwardProp,V=Nw(L,fe,I)||Ma,le=function(de,_e,me){for(var ve,we=Bn(Bn({},_e),{className:void 0,theme:me}),Ve=0;Ve<de.length;Ve+=1){var ct=Ta(ve=de[Ve])?ve(we):ve;for(var nt in ct)we[nt]=nt==="className"?ds(we[nt],ct[nt]):nt==="style"?Bn(Bn({},we[nt]),ct[nt]):ct[nt]}return _e.className&&(we.className=ds(we.className,_e.className)),we}(P,L,V),ae=le.as||$,k={};for(var ee in le)le[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&le.theme===V||(ee==="forwardedAs"?k.as=le.forwardedAs:ue&&!ue(ee,ae)||(k[ee]=le[ee]));var Ce=function(de,_e){var me=Pv(),ve=de.generateAndInjectStyles(_e,me.styleSheet,me.stylis);return ve}(w,le),J=ds(B,W);return Ce&&(J+=" "+Ce),le.className&&(J+=" "+le.className),k[vd(ae)&&!j0.has(ae)?"class":"className"]=J,z&&(k.ref=z),gi.createElement(ae,k)}(b,C,F)}D.displayName=_;var b=si.forwardRef(D);return b.attrs=S,b.componentStyle=v,b.displayName=_,b.shouldForwardProp=E,b.foldedComponentIds=s?ds(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=x,b.target=s?o.target:r,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=s?function(F){for(var N=[],L=1;L<arguments.length;L++)N[L-1]=arguments[L];for(var z=0,P=N;z<P.length;z++)xh(F,P[z],!0);return F}({},o.defaultProps,C):C}}),kh(b,function(){return".".concat(b.styledComponentId)}),l&&Z0(b,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Dv(r,e){for(var t=[r[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],r[s+1]);return t}var Nv=function(r){return Object.assign(r,{isCss:!0})};function pA(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Ta(r)||So(r))return Nv(ms(Dv(Ku,Ou([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?ms(s):Nv(ms(Dv(s,e)))}function Sh(r,e,t){if(t===void 0&&(t=Ma),!e)throw Co(1,e);var s=function(o){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return r(e,t,pA.apply(void 0,Ou([o],l,!1)))};return s.attrs=function(o){return Sh(r,e,Bn(Bn({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Sh(r,e,Bn(Bn({},t),o))},s}var s_=function(r){return Sh(hA,r)},a_=s_;j0.forEach(function(r){a_[r]=s_(r)});const mA=()=>q.jsxs("div",{id:"contact",children:[q.jsx("h2",{className:"text-3xl text-white font-bold text-center  ",children:"Contact Me"}),q.jsx(gA,{className:"flex justify-center py-10",children:q.jsxs("div",{className:"card",children:[q.jsx("a",{className:"social-link1",href:"https://www.instagram.com/i_am_adnan_ali__/",children:q.jsx("svg",{style:{color:"white"},xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16",children:q.jsx("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",fill:"white"})})}),q.jsxs("a",{className:"social-link2",href:"https://github.com/imadnanali",children:[q.jsx("svg",{viewBox:"0 0 496 512",height:"1em",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",children:q.jsx("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})," "]}),q.jsx("a",{className:"social-link3",href:"https://discord.com/channels/@me",children:q.jsx("svg",{style:{color:"white"},xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-discord",viewBox:"0 0 16 16",children:q.jsx("path",{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",fill:"white"})})}),q.jsxs("a",{className:"social-link4",href:"https://www.linkedin.com/in/adnan-ali-8b130b285/",children:[q.jsx("svg",{fill:"#fff",viewBox:"0 0 448 512",height:"1em",xmlns:"http://www.w3.org/2000/svg",children:q.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})," "]}),q.jsx("a",{className:"social-link5",href:"https://wa.me/qr/7NBS5S6MRHODK1",children:q.jsxs("svg",{viewBox:"0 0 16 16",className:"bi bi-whatsapp",fill:"currentColor",height:16,width:16,xmlns:"http://www.w3.org/2000/svg",style:{color:"white"},children:[" ",q.jsx("path",{fill:"white",d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})," "]})})]})})]}),gA=a_.div`
  .card {
    display: flex;
    height: 70px;
    width: 350px;
  }

  .card svg {
    position: absolute;
    display: flex;
    width: 60%;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.25s;
    z-index: 2;
    padding: 0.25rem;
    cursor: pointer;
  }

  .card .social-link1,.card .social-link2,.card .social-link3,.card .social-link4,.card .social-link5 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    color: whitesmoke;
    font-size: 24px;
    text-decoration: none;
    transition: 0.25s;
    border-radius: 50px;
  }

  .card svg {
    transform: scale(1);
  }

  .card .social-link1:hover {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    animation: bounce_613 0.4s linear;
  }

  .card .social-link2:hover {
    background-color: #242c34;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link3:hover {
    background-color: #5865f2;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link4:hover {
    background-color: #0a66c2;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link5:hover {
    background-color: #12a50b;
    animation: bounce_613 0.4s linear;
  }

  @keyframes bounce_613 {
    40% {
      transform: scale(1.4);
    }

    60% {
      transform: scale(0.8);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }`;var o_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Iv=si.createContext&&si.createContext(o_),vA=["attr","size","title"];function _A(r,e){if(r==null)return{};var t=xA(r,e),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(o=0;o<l.length;o++)s=l[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(t[s]=r[s])}return t}function xA(r,e){if(r==null)return{};var t={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;t[s]=r[s]}return t}function zu(){return zu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},zu.apply(this,arguments)}function Uv(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,s)}return t}function Hu(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Uv(Object(t),!0).forEach(function(s){yA(r,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Uv(Object(t)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(t,s))})}return r}function yA(r,e,t){return e=SA(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function SA(r){var e=EA(r,"string");return typeof e=="symbol"?e:e+""}function EA(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var s=t.call(r,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function l_(r){return r&&r.map((e,t)=>si.createElement(e.tag,Hu({key:t},e.attr),l_(e.child)))}function Zu(r){return e=>si.createElement(MA,zu({attr:Hu({},r.attr)},e),l_(r.child))}function MA(r){var e=t=>{var{attr:s,size:o,title:l}=r,c=_A(r,vA),f=o||t.size||"1em",h;return t.className&&(h=t.className),r.className&&(h=(h?h+" ":"")+r.className),si.createElement("svg",zu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:h,style:Hu(Hu({color:r.color||t.color},t.style),r.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&si.createElement("title",null,l),r.children)};return Iv!==void 0?si.createElement(Iv.Consumer,null,t=>e(t)):e(o_)}function xd(r){return Zu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"},child:[]}]})(r)}function yd(r){return Zu({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"},child:[]}]})(r)}const TA=()=>{const r={github:{triangle:"https://github.com/imadnanali/Triangle-Finder",todo:"https://github.com/imadnanali/ToDO-List",weather:"https://github.com/imadnanali/Weather-App"},live:{triangle:"https://imadnanali.github.io/Triangle-Finder/",todo:"https://imadnanali.github.io/ToDO-List/",weather:"https://imadnanali.github.io/Weather-App/"}};return q.jsx("div",{id:"projects",children:q.jsxs("div",{className:"project  flex flex-col py-10",children:[q.jsx("h1",{className:"px-24 font-semibold text-[2rem]",children:"All Creative projects."}),q.jsx("h3",{className:"px-24 font-semibold text-[1.5rem] text-gray-400",children:"Here's my all projects."}),q.jsxs("div",{className:"flex h-lvh lg:flex-row flex-col lg:items-center justify-evenly",children:[q.jsxs("div",{className:"skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4",children:[q.jsx("h1",{className:"heading py-10 uppercase font-semibold text-xl",children:"Weather App"}),q.jsxs("div",{className:"flex flex-wrap gap-4",children:[q.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"HTML"}),q.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"CSS"}),q.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"JavaScript"})]}),q.jsxs("h1",{className:"pt-5 text-neutral-400 leading-relaxed text-sm",children:[q.jsx("span",{className:"text-green-400 font-semibold italic",children:"Weater App"})," – A responsive website built using JavaScript, allowing users to check ",q.jsx("span",{className:"text-green-400 font-semibold italic",children:"real-time weather"})," conditions by entering a city name. It details like ",q.jsx("span",{className:"text-green-400 font-semibold italic",children:"temperature, weather conditions, and location"})," with an interactive search functionality and a clean UI."]}),q.jsxs("div",{className:"buttons flex gap-5 py-10",children:[q.jsx("a",{href:r.github.weather,children:q.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500",children:q.jsx(xd,{size:25})})}),q.jsx("a",{href:r.live.weather,children:q.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 relative right-10",children:q.jsx(yd,{size:25})})})]})]}),q.jsx("div",{className:"aboutimage py-10 lg:pe-5",children:q.jsx("img",{src:"assets/weather.png",alt:"image",className:"lg:w-[50rem] rounded-lg"})})]}),q.jsx("div",{className:"projectcard",children:q.jsxs("div",{className:"flex h-lvh lg:flex-row flex-col-reverse lg:items-center justify-evenly",children:[q.jsx("div",{className:"aboutimage py-10 lg:pe-5",children:q.jsx("img",{src:"assets/todo.png",alt:"image",className:"lg:w-[50rem] rounded-lg"})}),q.jsxs("div",{className:"skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4",children:[q.jsx("h1",{className:"heading py-10 uppercase text-white font-semibold text-xl",children:"Todo List"}),q.jsxs("div",{className:"flex flex-wrap gap-4",children:[q.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"Html"}),q.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"CSS"}),q.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"JavaScript"})]}),q.jsxs("h1",{className:"pt-5 text-neutral-400 leading-relaxed text-sm",children:[q.jsx("span",{className:" font-semibold italic text-green-400",children:"Todo List"})," – a responsive React-based website styled with Tailwind CSS, enabling ",q.jsx("span",{className:"text-green-400 font-semibold italic",children:"task creation, editing, and deletion"}),". Integrated with ",q.jsx("span",{className:"text-green-400 font-semibold italic",children:"local storage for offline functionality"}),", it ensures todos are preserved and reloaded seamlessly upon reopening the site."]}),q.jsxs("div",{className:"buttons flex gap-5 py-10",children:[q.jsx("a",{href:r.github.todo,children:q.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500",children:q.jsx(xd,{size:25})})}),q.jsx("a",{href:r.live.todo,children:q.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 relative right-10",children:q.jsx(yd,{size:25})})})]})]})]})}),q.jsx("div",{className:"projectcard ",children:q.jsxs("div",{className:"flex h-lvh lg:flex-row flex-col lg:items-center justify-evenly",children:[q.jsxs("div",{className:"skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4",children:[q.jsx("h1",{className:"heading py-10 uppercase text-white font-semibold text-xl",children:"Triangle Finder"}),q.jsxs("div",{className:"flex flex-wrap gap-4",children:[q.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"Html"}),q.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"Tailwind"}),q.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"JavaScript"})]}),q.jsxs("h1",{className:"pt-5 text-neutral-400 leading-relaxed text-sm",children:[q.jsx("span",{className:"text-green-400 font-semibold italic",children:"Triangle Finder"})," – a responsive website created using JavaScript, allowing users to ",q.jsx("span",{className:"text-green-400 font-semibold italic",children:"create triangles"})," by inputting values and calculating properties like ",q.jsx("span",{className:"text-green-400 font-semibold italic",children:"area, perimeter, and angles"})," with interactive ",q.jsx("span",{className:"text-green-400e italic font-semibold",children:"event handling"})," and ",q.jsx("span",{className:"text-green-400 italic font-semibold",children:"canvas drawing functions."})]}),q.jsxs("div",{className:"buttons flex gap-5 py-10",children:[q.jsx("a",{href:r.github.triangle,children:q.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500",children:q.jsx(xd,{size:25})})}),q.jsx("a",{href:r.live.triangle,children:q.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 relative right-10",children:q.jsx(yd,{size:25})})})]})]}),q.jsx("div",{className:"aboutimage py-10 lg:pe-5 border border-neutral-600 rounded-xl",children:q.jsx("img",{src:"assets/triangle.png",alt:"image",className:"lg:w-[50rem] rounded-lg"})})]})})]})})};var Ht={},uu={},cu={},fu={},Sd,Ov;function wA(){if(Ov)return Sd;Ov=1;var r="Expected a function",e=NaN,t="[object Symbol]",s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,h=typeof Ul=="object"&&Ul&&Ul.Object===Object&&Ul,p=typeof self=="object"&&self&&self.Object===Object&&self,m=h||p||Function("return this")(),_=Object.prototype,x=_.toString,S=Math.max,E=Math.min,M=function(){return m.Date.now()};function y(N,L,z){var P,w,I,B,W,$,fe=0,oe=!1,ue=!1,V=!0;if(typeof N!="function")throw new TypeError(r);L=F(L)||0,D(z)&&(oe=!!z.leading,ue="maxWait"in z,I=ue?S(F(z.maxWait)||0,L):I,V="trailing"in z?!!z.trailing:V);function le(ve){var we=P,Ve=w;return P=w=void 0,fe=ve,B=N.apply(Ve,we),B}function ae(ve){return fe=ve,W=setTimeout(Ce,L),oe?le(ve):B}function k(ve){var we=ve-$,Ve=ve-fe,ct=L-we;return ue?E(ct,I-Ve):ct}function ee(ve){var we=ve-$,Ve=ve-fe;return $===void 0||we>=L||we<0||ue&&Ve>=I}function Ce(){var ve=M();if(ee(ve))return J(ve);W=setTimeout(Ce,k(ve))}function J(ve){return W=void 0,V&&P?le(ve):(P=w=void 0,B)}function de(){W!==void 0&&clearTimeout(W),fe=0,P=$=w=W=void 0}function _e(){return W===void 0?B:J(M())}function me(){var ve=M(),we=ee(ve);if(P=arguments,w=this,$=ve,we){if(W===void 0)return ae($);if(ue)return W=setTimeout(Ce,L),le($)}return W===void 0&&(W=setTimeout(Ce,L)),B}return me.cancel=de,me.flush=_e,me}function v(N,L,z){var P=!0,w=!0;if(typeof N!="function")throw new TypeError(r);return D(z)&&(P="leading"in z?!!z.leading:P,w="trailing"in z?!!z.trailing:w),y(N,L,{leading:P,maxWait:L,trailing:w})}function D(N){var L=typeof N;return!!N&&(L=="object"||L=="function")}function b(N){return!!N&&typeof N=="object"}function C(N){return typeof N=="symbol"||b(N)&&x.call(N)==t}function F(N){if(typeof N=="number")return N;if(C(N))return e;if(D(N)){var L=typeof N.valueOf=="function"?N.valueOf():N;N=D(L)?L+"":L}if(typeof N!="string")return N===0?N:+N;N=N.replace(s,"");var z=l.test(N);return z||c.test(N)?f(N.slice(2),z?2:8):o.test(N)?e:+N}return Sd=v,Sd}var po={},Fv;function Bh(){if(Fv)return po;Fv=1,Object.defineProperty(po,"__esModule",{value:!0}),po.addPassiveEventListener=function(t,s,o){var l=o.name;l||(l=s,console.warn("Listener must be a named function.")),r.has(s)||r.set(s,new Set);var c=r.get(s);if(!c.has(l)){var f=function(){var h=!1;try{var p=Object.defineProperty({},"passive",{get:function(){h=!0}});window.addEventListener("test",null,p)}catch{}return h}();t.addEventListener(s,o,f?{passive:!0}:!1),c.add(l)}},po.removePassiveEventListener=function(t,s,o){t.removeEventListener(s,o),r.get(s).delete(o.name||s)};var r=new Map;return po}var kv;function zh(){if(kv)return fu;kv=1,Object.defineProperty(fu,"__esModule",{value:!0});var r=wA(),e=s(r),t=Bh();function s(c){return c&&c.__esModule?c:{default:c}}var o=function(f){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,e.default)(f,h)},l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(f,h){if(f){var p=o(function(m){l.scrollHandler(f)},h);l.scrollSpyContainers.push(f),(0,t.addPassiveEventListener)(f,"scroll",p)}},isMounted:function(f){return l.scrollSpyContainers.indexOf(f)!==-1},currentPositionX:function(f){if(f===document){var h=window.pageYOffset!==void 0,p=(document.compatMode||"")==="CSS1Compat";return h?window.pageXOffset:p?document.documentElement.scrollLeft:document.body.scrollLeft}else return f.scrollLeft},currentPositionY:function(f){if(f===document){var h=window.pageXOffset!==void 0,p=(document.compatMode||"")==="CSS1Compat";return h?window.pageYOffset:p?document.documentElement.scrollTop:document.body.scrollTop}else return f.scrollTop},scrollHandler:function(f){var h=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(f)].spyCallbacks||[];h.forEach(function(p){return p(l.currentPositionX(f),l.currentPositionY(f))})},addStateHandler:function(f){l.spySetState.push(f)},addSpyHandler:function(f,h){var p=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(h)];p.spyCallbacks||(p.spyCallbacks=[]),p.spyCallbacks.push(f),f(l.currentPositionX(h),l.currentPositionY(h))},updateStates:function(){l.spySetState.forEach(function(f){return f()})},unmount:function(f,h){l.scrollSpyContainers.forEach(function(p){return p.spyCallbacks&&p.spyCallbacks.length&&p.spyCallbacks.indexOf(h)>-1&&p.spyCallbacks.splice(p.spyCallbacks.indexOf(h),1)}),l.spySetState&&l.spySetState.length&&l.spySetState.indexOf(f)>-1&&l.spySetState.splice(l.spySetState.indexOf(f),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach(function(f){return l.scrollHandler(f)})}};return fu.default=l,fu}var du={},hu={},Bv;function Qu(){if(Bv)return hu;Bv=1,Object.defineProperty(hu,"__esModule",{value:!0});var r=function(f,h){var p=f.indexOf("#")===0?f.substring(1):f,m=p?"#"+p:"",_=window&&window.location,x=m?_.pathname+_.search+m:_.pathname+_.search;h?history.pushState(history.state,"",x):history.replaceState(history.state,"",x)},e=function(){return window.location.hash.replace(/^#/,"")},t=function(f){return function(h){return f.contains?f!=h&&f.contains(h):!!(f.compareDocumentPosition(h)&16)}},s=function(f){return getComputedStyle(f).position!=="static"},o=function(f,h){for(var p=f.offsetTop,m=f.offsetParent;m&&!h(m);)p+=m.offsetTop,m=m.offsetParent;return{offsetTop:p,offsetParent:m}},l=function(f,h,p){if(p)return f===document?h.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(f).position!=="static"?h.offsetLeft:h.offsetLeft-f.offsetLeft;if(f===document)return h.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(s(f)){if(h.offsetParent!==f){var m=function(y){return y===f||y===document},_=o(h,m),x=_.offsetTop,S=_.offsetParent;if(S!==f)throw new Error("Seems containerElement is not an ancestor of the Element");return x}return h.offsetTop}if(h.offsetParent===f.offsetParent)return h.offsetTop-f.offsetTop;var E=function(y){return y===document};return o(h,E).offsetTop-o(f,E).offsetTop};return hu.default={updateHash:r,getHash:e,filterElementInContainer:t,scrollOffset:l},hu}var pu={},mu={},zv;function AA(){return zv||(zv=1,Object.defineProperty(mu,"__esModule",{value:!0}),mu.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),mu}var gu={},Hv;function CA(){if(Hv)return gu;Hv=1,Object.defineProperty(gu,"__esModule",{value:!0});var r=Bh(),e=["mousedown","mousewheel","touchmove","keydown"];return gu.default={subscribe:function(s){return typeof document<"u"&&e.forEach(function(o){return(0,r.addPassiveEventListener)(document,o,s)})}},gu}var vu={},Vv;function Hh(){if(Vv)return vu;Vv=1,Object.defineProperty(vu,"__esModule",{value:!0});var r={registered:{},scrollEvent:{register:function(t,s){r.registered[t]=s},remove:function(t){r.registered[t]=null}}};return vu.default=r,vu}var Gv;function u_(){if(Gv)return pu;Gv=1,Object.defineProperty(pu,"__esModule",{value:!0});var r=Object.assign||function(w){for(var I=1;I<arguments.length;I++){var B=arguments[I];for(var W in B)Object.prototype.hasOwnProperty.call(B,W)&&(w[W]=B[W])}return w},e=Qu();h(e);var t=AA(),s=h(t),o=CA(),l=h(o),c=Hh(),f=h(c);function h(w){return w&&w.__esModule?w:{default:w}}var p=function(I){return s.default[I.smooth]||s.default.defaultEasing},m=function(I){return typeof I=="function"?I:function(){return I}},_=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},x=function(){return _()||function(w,I,B){window.setTimeout(w,B||1e3/60,new Date().getTime())}}(),S=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},E=function(I){var B=I.data.containerElement;if(B&&B!==document&&B!==document.body)return B.scrollLeft;var W=window.pageXOffset!==void 0,$=(document.compatMode||"")==="CSS1Compat";return W?window.pageXOffset:$?document.documentElement.scrollLeft:document.body.scrollLeft},M=function(I){var B=I.data.containerElement;if(B&&B!==document&&B!==document.body)return B.scrollTop;var W=window.pageXOffset!==void 0,$=(document.compatMode||"")==="CSS1Compat";return W?window.pageYOffset:$?document.documentElement.scrollTop:document.body.scrollTop},y=function(I){var B=I.data.containerElement;if(B&&B!==document&&B!==document.body)return B.scrollWidth-B.offsetWidth;var W=document.body,$=document.documentElement;return Math.max(W.scrollWidth,W.offsetWidth,$.clientWidth,$.scrollWidth,$.offsetWidth)},v=function(I){var B=I.data.containerElement;if(B&&B!==document&&B!==document.body)return B.scrollHeight-B.offsetHeight;var W=document.body,$=document.documentElement;return Math.max(W.scrollHeight,W.offsetHeight,$.clientHeight,$.scrollHeight,$.offsetHeight)},D=function w(I,B,W){var $=B.data;if(!B.ignoreCancelEvents&&$.cancel){f.default.registered.end&&f.default.registered.end($.to,$.target,$.currentPositionY);return}if($.delta=Math.round($.targetPosition-$.startPosition),$.start===null&&($.start=W),$.progress=W-$.start,$.percent=$.progress>=$.duration?1:I($.progress/$.duration),$.currentPosition=$.startPosition+Math.ceil($.delta*$.percent),$.containerElement&&$.containerElement!==document&&$.containerElement!==document.body?B.horizontal?$.containerElement.scrollLeft=$.currentPosition:$.containerElement.scrollTop=$.currentPosition:B.horizontal?window.scrollTo($.currentPosition,0):window.scrollTo(0,$.currentPosition),$.percent<1){var fe=w.bind(null,I,B);x.call(window,fe);return}f.default.registered.end&&f.default.registered.end($.to,$.target,$.currentPosition)},b=function(I){I.data.containerElement=I?I.containerId?document.getElementById(I.containerId):I.container&&I.container.nodeType?I.container:document:null},C=function(I,B,W,$){B.data=B.data||S(),window.clearTimeout(B.data.delayTimeout);var fe=function(){B.data.cancel=!0};if(l.default.subscribe(fe),b(B),B.data.start=null,B.data.cancel=!1,B.data.startPosition=B.horizontal?E(B):M(B),B.data.targetPosition=B.absolute?I:I+B.data.startPosition,B.data.startPosition===B.data.targetPosition){f.default.registered.end&&f.default.registered.end(B.data.to,B.data.target,B.data.currentPosition);return}B.data.delta=Math.round(B.data.targetPosition-B.data.startPosition),B.data.duration=m(B.duration)(B.data.delta),B.data.duration=isNaN(parseFloat(B.data.duration))?1e3:parseFloat(B.data.duration),B.data.to=W,B.data.target=$;var oe=p(B),ue=D.bind(null,oe,B);if(B&&B.delay>0){B.data.delayTimeout=window.setTimeout(function(){f.default.registered.begin&&f.default.registered.begin(B.data.to,B.data.target),x.call(window,ue)},B.delay);return}f.default.registered.begin&&f.default.registered.begin(B.data.to,B.data.target),x.call(window,ue)},F=function(I){return I=r({},I),I.data=I.data||S(),I.absolute=!0,I},N=function(I){C(0,F(I))},L=function(I,B){C(I,F(B))},z=function(I){I=F(I),b(I),C(I.horizontal?y(I):v(I),I)},P=function(I,B){B=F(B),b(B);var W=B.horizontal?E(B):M(B);C(I+W,B)};return pu.default={animateTopScroll:C,getAnimationType:p,scrollToTop:N,scrollToBottom:z,scrollTo:L,scrollMore:P},pu}var Wv;function Ju(){if(Wv)return du;Wv=1,Object.defineProperty(du,"__esModule",{value:!0});var r=Object.assign||function(m){for(var _=1;_<arguments.length;_++){var x=arguments[_];for(var S in x)Object.prototype.hasOwnProperty.call(x,S)&&(m[S]=x[S])}return m},e=Qu(),t=f(e),s=u_(),o=f(s),l=Hh(),c=f(l);function f(m){return m&&m.__esModule?m:{default:m}}var h={},p=void 0;return du.default={unmount:function(){h={}},register:function(_,x){h[_]=x},unregister:function(_){delete h[_]},get:function(_){return h[_]||document.getElementById(_)||document.getElementsByName(_)[0]||document.getElementsByClassName(_)[0]},setActiveLink:function(_){return p=_},getActiveLink:function(){return p},scrollTo:function(_,x){var S=this.get(_);if(!S){console.warn("target Element not found");return}x=r({},x,{absolute:!1});var E=x.containerId,M=x.container,y=void 0;E?y=document.getElementById(E):M&&M.nodeType?y=M:y=document,x.absolute=!0;var v=x.horizontal,D=t.default.scrollOffset(y,S,v)+(x.offset||0);if(!x.smooth){c.default.registered.begin&&c.default.registered.begin(_,S),y===document?x.horizontal?window.scrollTo(D,0):window.scrollTo(0,D):y.scrollTop=D,c.default.registered.end&&c.default.registered.end(_,S);return}o.default.animateTopScroll(D,x,_,S)}},du}var Ed={exports:{}},Md,jv;function RA(){if(jv)return Md;jv=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Md=r,Md}var Td,Xv;function bA(){if(Xv)return Td;Xv=1;var r=RA();function e(){}function t(){}return t.resetWarningCache=e,Td=function(){function s(c,f,h,p,m,_){if(_!==r){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Td}var qv;function ec(){return qv||(qv=1,Ed.exports=bA()()),Ed.exports}var _u={},Yv;function c_(){if(Yv)return _u;Yv=1,Object.defineProperty(_u,"__esModule",{value:!0}),Bh();var r=Qu(),e=t(r);function t(o){return o&&o.__esModule?o:{default:o}}var s={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(l){this.scroller=l,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(l,c){this.containers[l]=c},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var l=this,c=this.getHash();c?window.setTimeout(function(){l.scrollTo(c,!0),l.initialized=!0},10):this.initialized=!0},scrollTo:function(l,c){var f=this.scroller,h=f.get(l);if(h&&(c||l!==f.getActiveLink())){var p=this.containers[l]||document;f.scrollTo(l,{container:p})}},getHash:function(){return e.default.getHash()},changeHash:function(l,c){this.isInitialized()&&e.default.getHash()!==l&&e.default.updateHash(l,c)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return _u.default=s,_u}var $v;function Vh(){if($v)return cu;$v=1,Object.defineProperty(cu,"__esModule",{value:!0});var r=Object.assign||function(v){for(var D=1;D<arguments.length;D++){var b=arguments[D];for(var C in b)Object.prototype.hasOwnProperty.call(b,C)&&(v[C]=b[C])}return v},e=function(){function v(D,b){for(var C=0;C<b.length;C++){var F=b[C];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(D,F.key,F)}}return function(D,b,C){return b&&v(D.prototype,b),C&&v(D,C),D}}(),t=nr(),s=x(t),o=zh(),l=x(o),c=Ju(),f=x(c),h=ec(),p=x(h),m=c_(),_=x(m);function x(v){return v&&v.__esModule?v:{default:v}}function S(v,D){if(!(v instanceof D))throw new TypeError("Cannot call a class as a function")}function E(v,D){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D&&(typeof D=="object"||typeof D=="function")?D:v}function M(v,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof D);v.prototype=Object.create(D&&D.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),D&&(Object.setPrototypeOf?Object.setPrototypeOf(v,D):v.__proto__=D)}var y={to:p.default.string.isRequired,containerId:p.default.string,container:p.default.object,activeClass:p.default.string,activeStyle:p.default.object,spy:p.default.bool,horizontal:p.default.bool,smooth:p.default.oneOfType([p.default.bool,p.default.string]),offset:p.default.number,delay:p.default.number,isDynamic:p.default.bool,onClick:p.default.func,duration:p.default.oneOfType([p.default.number,p.default.func]),absolute:p.default.bool,onSetActive:p.default.func,onSetInactive:p.default.func,ignoreCancelEvents:p.default.bool,hashSpy:p.default.bool,saveHashHistory:p.default.bool,spyThrottle:p.default.number};return cu.default=function(v,D){var b=D||f.default,C=function(N){M(L,N);function L(z){S(this,L);var P=E(this,(L.__proto__||Object.getPrototypeOf(L)).call(this,z));return F.call(P),P.state={active:!1},P}return e(L,[{key:"getScrollSpyContainer",value:function(){var P=this.props.containerId,w=this.props.container;return P&&!w?document.getElementById(P):w&&w.nodeType?w:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var P=this.getScrollSpyContainer();l.default.isMounted(P)||l.default.mount(P,this.props.spyThrottle),this.props.hashSpy&&(_.default.isMounted()||_.default.mount(b),_.default.mapContainer(this.props.to,P)),l.default.addSpyHandler(this.spyHandler,P),this.setState({container:P})}}},{key:"componentWillUnmount",value:function(){l.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var P="";this.state&&this.state.active?P=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():P=this.props.className;var w={};this.state&&this.state.active?w=r({},this.props.style,this.props.activeStyle):w=r({},this.props.style);var I=r({},this.props);for(var B in y)I.hasOwnProperty(B)&&delete I[B];return I.className=P,I.style=w,I.onClick=this.handleClick,s.default.createElement(v,I)}}]),L}(s.default.PureComponent),F=function(){var L=this;this.scrollTo=function(z,P){b.scrollTo(z,r({},L.state,P))},this.handleClick=function(z){L.props.onClick&&L.props.onClick(z),z.stopPropagation&&z.stopPropagation(),z.preventDefault&&z.preventDefault(),L.scrollTo(L.props.to,L.props)},this.spyHandler=function(z,P){var w=L.getScrollSpyContainer();if(!(_.default.isMounted()&&!_.default.isInitialized())){var I=L.props.horizontal,B=L.props.to,W=null,$=void 0,fe=void 0;if(I){var oe=0,ue=0,V=0;if(w.getBoundingClientRect){var le=w.getBoundingClientRect();V=le.left}if(!W||L.props.isDynamic){if(W=b.get(B),!W)return;var ae=W.getBoundingClientRect();oe=ae.left-V+z,ue=oe+ae.width}var k=z-L.props.offset;$=k>=Math.floor(oe)&&k<Math.floor(ue),fe=k<Math.floor(oe)||k>=Math.floor(ue)}else{var ee=0,Ce=0,J=0;if(w.getBoundingClientRect){var de=w.getBoundingClientRect();J=de.top}if(!W||L.props.isDynamic){if(W=b.get(B),!W)return;var _e=W.getBoundingClientRect();ee=_e.top-J+P,Ce=ee+_e.height}var me=P-L.props.offset;$=me>=Math.floor(ee)&&me<Math.floor(Ce),fe=me<Math.floor(ee)||me>=Math.floor(Ce)}var ve=b.getActiveLink();if(fe){if(B===ve&&b.setActiveLink(void 0),L.props.hashSpy&&_.default.getHash()===B){var we=L.props.saveHashHistory,Ve=we===void 0?!1:we;_.default.changeHash("",Ve)}L.props.spy&&L.state.active&&(L.setState({active:!1}),L.props.onSetInactive&&L.props.onSetInactive(B,W))}if($&&(ve!==B||L.state.active===!1)){b.setActiveLink(B);var ct=L.props.saveHashHistory,nt=ct===void 0?!1:ct;L.props.hashSpy&&_.default.changeHash(B,nt),L.props.spy&&(L.setState({active:!0}),L.props.onSetActive&&L.props.onSetActive(B,W))}}}};return C.propTypes=y,C.defaultProps={offset:0},C},cu}var Kv;function PA(){if(Kv)return uu;Kv=1,Object.defineProperty(uu,"__esModule",{value:!0});var r=nr(),e=o(r),t=Vh(),s=o(t);function o(p){return p&&p.__esModule?p:{default:p}}function l(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function c(p,m){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:p}function f(p,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);p.prototype=Object.create(m&&m.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(p,m):p.__proto__=m)}var h=function(p){f(m,p);function m(){var _,x,S,E;l(this,m);for(var M=arguments.length,y=Array(M),v=0;v<M;v++)y[v]=arguments[v];return E=(x=(S=c(this,(_=m.__proto__||Object.getPrototypeOf(m)).call.apply(_,[this].concat(y))),S),S.render=function(){return e.default.createElement("a",S.props,S.props.children)},x),c(S,E)}return m}(e.default.Component);return uu.default=(0,s.default)(h),uu}var xu={},Zv;function LA(){if(Zv)return xu;Zv=1,Object.defineProperty(xu,"__esModule",{value:!0});var r=function(){function m(_,x){for(var S=0;S<x.length;S++){var E=x[S];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(_,E.key,E)}}return function(_,x,S){return x&&m(_.prototype,x),S&&m(_,S),_}}(),e=nr(),t=l(e),s=Vh(),o=l(s);function l(m){return m&&m.__esModule?m:{default:m}}function c(m,_){if(!(m instanceof _))throw new TypeError("Cannot call a class as a function")}function f(m,_){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:m}function h(m,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);m.prototype=Object.create(_&&_.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(m,_):m.__proto__=_)}var p=function(m){h(_,m);function _(){return c(this,_),f(this,(_.__proto__||Object.getPrototypeOf(_)).apply(this,arguments))}return r(_,[{key:"render",value:function(){return t.default.createElement("button",this.props,this.props.children)}}]),_}(t.default.Component);return xu.default=(0,o.default)(p),xu}var yu={},Su={},Qv;function f_(){if(Qv)return Su;Qv=1,Object.defineProperty(Su,"__esModule",{value:!0});var r=Object.assign||function(S){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var y in M)Object.prototype.hasOwnProperty.call(M,y)&&(S[y]=M[y])}return S},e=function(){function S(E,M){for(var y=0;y<M.length;y++){var v=M[y];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(E,v.key,v)}}return function(E,M,y){return M&&S(E.prototype,M),y&&S(E,y),E}}(),t=nr(),s=p(t),o=Eh();p(o);var l=Ju(),c=p(l),f=ec(),h=p(f);function p(S){return S&&S.__esModule?S:{default:S}}function m(S,E){if(!(S instanceof E))throw new TypeError("Cannot call a class as a function")}function _(S,E){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:S}function x(S,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);S.prototype=Object.create(E&&E.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(S,E):S.__proto__=E)}return Su.default=function(S){var E=function(M){x(y,M);function y(v){m(this,y);var D=_(this,(y.__proto__||Object.getPrototypeOf(y)).call(this,v));return D.childBindings={domNode:null},D}return e(y,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(D){this.props.name!==D.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;c.default.unregister(this.props.name)}},{key:"registerElems",value:function(D){c.default.register(D,this.childBindings.domNode)}},{key:"render",value:function(){return s.default.createElement(S,r({},this.props,{parentBindings:this.childBindings}))}}]),y}(s.default.Component);return E.propTypes={name:h.default.string,id:h.default.string},E},Su}var Jv;function DA(){if(Jv)return yu;Jv=1,Object.defineProperty(yu,"__esModule",{value:!0});var r=Object.assign||function(S){for(var E=1;E<arguments.length;E++){var M=arguments[E];for(var y in M)Object.prototype.hasOwnProperty.call(M,y)&&(S[y]=M[y])}return S},e=function(){function S(E,M){for(var y=0;y<M.length;y++){var v=M[y];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(E,v.key,v)}}return function(E,M,y){return M&&S(E.prototype,M),y&&S(E,y),E}}(),t=nr(),s=h(t),o=f_(),l=h(o),c=ec(),f=h(c);function h(S){return S&&S.__esModule?S:{default:S}}function p(S,E){if(!(S instanceof E))throw new TypeError("Cannot call a class as a function")}function m(S,E){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:S}function _(S,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);S.prototype=Object.create(E&&E.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(S,E):S.__proto__=E)}var x=function(S){_(E,S);function E(){return p(this,E),m(this,(E.__proto__||Object.getPrototypeOf(E)).apply(this,arguments))}return e(E,[{key:"render",value:function(){var y=this,v=r({},this.props);return delete v.name,v.parentBindings&&delete v.parentBindings,s.default.createElement("div",r({},v,{ref:function(b){y.props.parentBindings.domNode=b}}),this.props.children)}}]),E}(s.default.Component);return x.propTypes={name:f.default.string,id:f.default.string},yu.default=(0,l.default)(x),yu}var wd,e0;function NA(){if(e0)return wd;e0=1;var r=Object.assign||function(x){for(var S=1;S<arguments.length;S++){var E=arguments[S];for(var M in E)Object.prototype.hasOwnProperty.call(E,M)&&(x[M]=E[M])}return x},e=function(){function x(S,E){for(var M=0;M<E.length;M++){var y=E[M];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(S,y.key,y)}}return function(S,E,M){return E&&x(S.prototype,E),M&&x(S,M),S}}();function t(x,S){if(!(x instanceof S))throw new TypeError("Cannot call a class as a function")}function s(x,S){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:x}function o(x,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);x.prototype=Object.create(S&&S.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(x,S):x.__proto__=S)}var l=nr();Eh(),Qu();var c=zh(),f=Ju(),h=ec(),p=c_(),m={to:h.string.isRequired,containerId:h.string,container:h.object,activeClass:h.string,spy:h.bool,smooth:h.oneOfType([h.bool,h.string]),offset:h.number,delay:h.number,isDynamic:h.bool,onClick:h.func,duration:h.oneOfType([h.number,h.func]),absolute:h.bool,onSetActive:h.func,onSetInactive:h.func,ignoreCancelEvents:h.bool,hashSpy:h.bool,spyThrottle:h.number},_={Scroll:function(S,E){console.warn("Helpers.Scroll is deprecated since v1.7.0");var M=E||f,y=function(D){o(b,D);function b(C){t(this,b);var F=s(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,C));return v.call(F),F.state={active:!1},F}return e(b,[{key:"getScrollSpyContainer",value:function(){var F=this.props.containerId,N=this.props.container;return F?document.getElementById(F):N&&N.nodeType?N:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var F=this.getScrollSpyContainer();c.isMounted(F)||c.mount(F,this.props.spyThrottle),this.props.hashSpy&&(p.isMounted()||p.mount(M),p.mapContainer(this.props.to,F)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,F),this.setState({container:F})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var F="";this.state&&this.state.active?F=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():F=this.props.className;var N=r({},this.props);for(var L in m)N.hasOwnProperty(L)&&delete N[L];return N.className=F,N.onClick=this.handleClick,l.createElement(S,N)}}]),b}(l.Component),v=function(){var b=this;this.scrollTo=function(C,F){M.scrollTo(C,r({},b.state,F))},this.handleClick=function(C){b.props.onClick&&b.props.onClick(C),C.stopPropagation&&C.stopPropagation(),C.preventDefault&&C.preventDefault(),b.scrollTo(b.props.to,b.props)},this.stateHandler=function(){M.getActiveLink()!==b.props.to&&(b.state!==null&&b.state.active&&b.props.onSetInactive&&b.props.onSetInactive(),b.setState({active:!1}))},this.spyHandler=function(C){var F=b.getScrollSpyContainer();if(!(p.isMounted()&&!p.isInitialized())){var N=b.props.to,L=null,z=0,P=0,w=0;if(F.getBoundingClientRect){var I=F.getBoundingClientRect();w=I.top}if(!L||b.props.isDynamic){if(L=M.get(N),!L)return;var B=L.getBoundingClientRect();z=B.top-w+C,P=z+B.height}var W=C-b.props.offset,$=W>=Math.floor(z)&&W<Math.floor(P),fe=W<Math.floor(z)||W>=Math.floor(P),oe=M.getActiveLink();if(fe)return N===oe&&M.setActiveLink(void 0),b.props.hashSpy&&p.getHash()===N&&p.changeHash(),b.props.spy&&b.state.active&&(b.setState({active:!1}),b.props.onSetInactive&&b.props.onSetInactive()),c.updateStates();if($&&oe!==N)return M.setActiveLink(N),b.props.hashSpy&&p.changeHash(N),b.props.spy&&(b.setState({active:!0}),b.props.onSetActive&&b.props.onSetActive(N)),c.updateStates()}}};return y.propTypes=m,y.defaultProps={offset:0},y},Element:function(S){console.warn("Helpers.Element is deprecated since v1.7.0");var E=function(M){o(y,M);function y(v){t(this,y);var D=s(this,(y.__proto__||Object.getPrototypeOf(y)).call(this,v));return D.childBindings={domNode:null},D}return e(y,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(D){this.props.name!==D.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;f.unregister(this.props.name)}},{key:"registerElems",value:function(D){f.register(D,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(S,r({},this.props,{parentBindings:this.childBindings}))}}]),y}(l.Component);return E.propTypes={name:h.string,id:h.string},E}};return wd=_,wd}var t0;function IA(){if(t0)return Ht;t0=1,Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.Helpers=Ht.ScrollElement=Ht.ScrollLink=Ht.animateScroll=Ht.scrollSpy=Ht.Events=Ht.scroller=Ht.Element=Ht.Button=Ht.Link=void 0;var r=PA(),e=C(r),t=LA(),s=C(t),o=DA(),l=C(o),c=Ju(),f=C(c),h=Hh(),p=C(h),m=zh(),_=C(m),x=u_(),S=C(x),E=Vh(),M=C(E),y=f_(),v=C(y),D=NA(),b=C(D);function C(F){return F&&F.__esModule?F:{default:F}}return Ht.Link=e.default,Ht.Button=s.default,Ht.Element=l.default,Ht.scroller=f.default,Ht.Events=p.default,Ht.scrollSpy=_.default,Ht.animateScroll=S.default,Ht.ScrollLink=M.default,Ht.ScrollElement=v.default,Ht.Helpers=b.default,Ht.default={Link:e.default,Button:s.default,Element:l.default,scroller:f.default,Events:p.default,scrollSpy:_.default,animateScroll:S.default,ScrollLink:M.default,ScrollElement:v.default,Helpers:b.default},Ht}var os=IA();function UA(r){return Zu({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"},child:[]}]})(r)}function OA(r){return Zu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(r)}const FA=()=>q.jsx("div",{children:q.jsxs("div",{className:"head pt-20",id:"home",children:[q.jsx("img",{className:"w-44 h-56 mt-10 ms-20 invert opacity-15 ",src:"https://svgsilh.com/svg/26432.svg",alt:""}),q.jsx("div",{className:"relative flex flex-col mt-[-12rem] ms-20 items-start min-h-screen px-8 ",children:q.jsxs("div",{className:"z-10",children:[q.jsx("p",{className:"text-green-400 font-semibold text-4xl",children:"Hey there!, I'm-"}),q.jsx("h1",{className:"text-[10rem] font-bold   mt-[-2rem] ",children:"Adnan Ali."}),q.jsxs("h2",{className:"text-3xl font-semibold mt-[-2rem]",children:[q.jsx(fw,{}),q.jsx("h1",{className:" text-gray-400 mt-4",children:"Currently mastering JavaScript with hands-on projects."})]}),q.jsxs("div",{className:"buttons flex gap-5 mt-10",children:[q.jsx("a",{href:"assets/Adnan Ali Resume.pdf",download:!0,children:q.jsxs("button",{className:"font-semibold  bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out  px-4 py-2 rounded-md flex items-center gap-2",children:[q.jsx(UA,{color:"#4ade80"}),"Resume"]})}),q.jsx(os.Link,{to:"contact",spy:!0,smooth:!0,offset:-100,duration:500,children:q.jsx("a",{href:"#",children:q.jsxs("button",{className:"font-semibold bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out  px-4 py-2 rounded-md flex items-center gap-2",children:[q.jsx(OA,{color:"#4ade80"}),"Contact Me"]})})})]})]})})]})});function kA(){return q.jsx(q.Fragment,{children:q.jsxs("div",{className:"bg-black text-white",children:[q.jsx("div",{className:"flex bg-black z-50 fixed right-0 w-full justify-center",children:q.jsxs("div",{className:"flex w-[90%] justify-between py-4 px-10 border-b border-neutral-800",children:[q.jsx(os.Link,{to:"home",spy:!0,smooth:!0,offset:-100,duration:500,children:q.jsxs("div",{className:"flex font-bold text-4xl cursor-pointer",children:[q.jsx("span",{className:"text-[#8f9094]",children:"{"}),q.jsx("span",{children:"A"}),q.jsx("span",{className:"text-[#8f9094]",children:"}"})]})}),q.jsxs("div",{className:"flex items-center gap-10 list-none font-semibold",children:[q.jsxs(os.Link,{to:"home",spy:!0,smooth:!0,offset:-100,duration:500,children:["  ",q.jsx("li",{className:'"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black  hover:border-neutral-500 cursor-pointer',children:"Home"})]}),q.jsxs(os.Link,{to:"about",spy:!0,smooth:!0,offset:-100,duration:500,children:["  ",q.jsx("li",{className:'"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer',children:"About Me"})]}),q.jsxs(os.Link,{to:"skills",spy:!0,smooth:!0,offset:-100,duration:500,children:["  ",q.jsx("li",{className:'"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer',children:"Skills"})]}),q.jsxs(os.Link,{to:"project",spy:!0,smooth:!0,offset:-100,duration:500,children:["  ",q.jsx("li",{className:'"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black  hover:border-neutral-500 cursor-pointer',children:"Projects"})]}),q.jsxs(os.Link,{to:"contact",spy:!0,smooth:!0,offset:-100,duration:500,children:["  ",q.jsx("li",{className:'"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer',children:"Contact"})]})]})]})}),q.jsx(FA,{}),q.jsx(dw,{}),q.jsxs("div",{className:"skills flex mt-[7rem] px-20",id:"skill",children:[q.jsxs("div",{className:"skillsinfo w-1/2",children:[q.jsx("h2",{className:"text-3xl text-white font-bold ",children:"⚡ Skills"}),q.jsxs("div",{className:"skillCard flex flex-wrap gap-5 py-10",children:[q.jsx(fn,{name:"HTML"}),q.jsx(fn,{name:"CSS"}),q.jsx(fn,{name:"JavaScript"}),q.jsx(fn,{name:"Node.js"}),q.jsx(fn,{name:"Tailwind"}),q.jsx(fn,{name:"Express"}),q.jsx(fn,{name:"Mongo DB"}),q.jsx(fn,{name:"React"}),q.jsx(fn,{name:"Next.js"}),q.jsx(fn,{name:"Java"}),q.jsx(fn,{name:"Git"}),q.jsx(fn,{name:"GitHub"}),q.jsx(fn,{name:"C"}),q.jsx(fn,{name:"Figma"}),q.jsx(fn,{name:"Bootstrap"}),q.jsx(fn,{name:"VS Code"}),q.jsx(fn,{name:"Postman"}),q.jsx(fn,{name:"Canva"})]})]}),q.jsx("div",{className:"circle w-1/2",children:q.jsx(cw,{})})]}),q.jsx("div",{className:"allProjects",children:q.jsx(TA,{})}),q.jsx("div",{className:"Contact ",children:q.jsx(mA,{})})]})})}Zx.createRoot(document.getElementById("root")).render(q.jsx(gi.StrictMode,{children:q.jsx(kA,{})}));
