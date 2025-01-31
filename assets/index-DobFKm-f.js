(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Wv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var df={exports:{}},no={},hf={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function Xv(){if(Im)return ht;Im=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(U,J,Ne){this.props=U,this.context=J,this.refs=A,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(U,J,Ne){this.props=U,this.context=J,this.refs=A,this.updater=Ne||S}var L=I.prototype=new _;L.constructor=I,T(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,H=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function X(U,J,Ne){var Z,ce={},ye=null,ge=null;if(J!=null)for(Z in J.ref!==void 0&&(ge=J.ref),J.key!==void 0&&(ye=""+J.key),J)H.call(J,Z)&&!N.hasOwnProperty(Z)&&(ce[Z]=J[Z]);var we=arguments.length-2;if(we===1)ce.children=Ne;else if(1<we){for(var Ae=Array(we),$e=0;$e<we;$e++)Ae[$e]=arguments[$e+2];ce.children=Ae}if(U&&U.defaultProps)for(Z in we=U.defaultProps,we)ce[Z]===void 0&&(ce[Z]=we[Z]);return{$$typeof:r,type:U,key:ye,ref:ge,props:ce,_owner:F.current}}function b(U,J){return{$$typeof:r,type:U.type,key:J,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function B(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ne){return J[Ne]})}var le=/\/+/g;function ne(U,J){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):J.toString(36)}function fe(U,J,Ne,Z,ce){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var ge=!1;if(U===null)ge=!0;else switch(ye){case"string":case"number":ge=!0;break;case"object":switch(U.$$typeof){case r:case e:ge=!0}}if(ge)return ge=U,ce=ce(ge),U=Z===""?"."+ne(ge,0):Z,R(ce)?(Ne="",U!=null&&(Ne=U.replace(le,"$&/")+"/"),fe(ce,J,Ne,"",function($e){return $e})):ce!=null&&(C(ce)&&(ce=b(ce,Ne+(!ce.key||ge&&ge.key===ce.key?"":(""+ce.key).replace(le,"$&/")+"/")+U)),J.push(ce)),1;if(ge=0,Z=Z===""?".":Z+":",R(U))for(var we=0;we<U.length;we++){ye=U[we];var Ae=Z+ne(ye,we);ge+=fe(ye,J,Ne,Ae,ce)}else if(Ae=x(U),typeof Ae=="function")for(U=Ae.call(U),we=0;!(ye=U.next()).done;)ye=ye.value,Ae=Z+ne(ye,we++),ge+=fe(ye,J,Ne,Ae,ce);else if(ye==="object")throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return ge}function pe(U,J,Ne){if(U==null)return U;var Z=[],ce=0;return fe(U,Z,"","",function(ye){return J.call(Ne,ye,ce++)}),Z}function oe(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Ne){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ne)},function(Ne){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ne)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var ue={current:null},z={transition:null},ae={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:pe,forEach:function(U,J,Ne){pe(U,function(){J.apply(this,arguments)},Ne)},count:function(U){var J=0;return pe(U,function(){J++}),J},toArray:function(U){return pe(U,function(J){return J})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ht.Component=y,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=I,ht.StrictMode=s,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ht.act=re,ht.cloneElement=function(U,J,Ne){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=T({},U.props),ce=U.key,ye=U.ref,ge=U._owner;if(J!=null){if(J.ref!==void 0&&(ye=J.ref,ge=F.current),J.key!==void 0&&(ce=""+J.key),U.type&&U.type.defaultProps)var we=U.type.defaultProps;for(Ae in J)H.call(J,Ae)&&!N.hasOwnProperty(Ae)&&(Z[Ae]=J[Ae]===void 0&&we!==void 0?we[Ae]:J[Ae])}var Ae=arguments.length-2;if(Ae===1)Z.children=Ne;else if(1<Ae){we=Array(Ae);for(var $e=0;$e<Ae;$e++)we[$e]=arguments[$e+2];Z.children=we}return{$$typeof:r,type:U.type,key:ce,ref:ye,props:Z,_owner:ge}},ht.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},ht.createElement=X,ht.createFactory=function(U){var J=X.bind(null,U);return J.type=U,J},ht.createRef=function(){return{current:null}},ht.forwardRef=function(U){return{$$typeof:d,render:U}},ht.isValidElement=C,ht.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:oe}},ht.memo=function(U,J){return{$$typeof:m,type:U,compare:J===void 0?null:J}},ht.startTransition=function(U){var J=z.transition;z.transition={};try{U()}finally{z.transition=J}},ht.unstable_act=re,ht.useCallback=function(U,J){return ue.current.useCallback(U,J)},ht.useContext=function(U){return ue.current.useContext(U)},ht.useDebugValue=function(){},ht.useDeferredValue=function(U){return ue.current.useDeferredValue(U)},ht.useEffect=function(U,J){return ue.current.useEffect(U,J)},ht.useId=function(){return ue.current.useId()},ht.useImperativeHandle=function(U,J,Ne){return ue.current.useImperativeHandle(U,J,Ne)},ht.useInsertionEffect=function(U,J){return ue.current.useInsertionEffect(U,J)},ht.useLayoutEffect=function(U,J){return ue.current.useLayoutEffect(U,J)},ht.useMemo=function(U,J){return ue.current.useMemo(U,J)},ht.useReducer=function(U,J,Ne){return ue.current.useReducer(U,J,Ne)},ht.useRef=function(U){return ue.current.useRef(U)},ht.useState=function(U){return ue.current.useState(U)},ht.useSyncExternalStore=function(U,J,Ne){return ue.current.useSyncExternalStore(U,J,Ne)},ht.useTransition=function(){return ue.current.useTransition()},ht.version="18.3.1",ht}var Um;function Kd(){return Um||(Um=1,hf.exports=Xv()),hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function jv(){if(Fm)return no;Fm=1;var r=Kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var g,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:d,key:x,ref:S,props:v,_owner:o.current}}return no.Fragment=t,no.jsx=c,no.jsxs=c,no}var Om;function Yv(){return Om||(Om=1,df.exports=jv()),df.exports}var Y=Yv(),mi=Kd();const ri=Wv(mi);var Ll={},pf={exports:{}},On={},mf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function qv(){return km||(km=1,function(r){function e(z,ae){var re=z.length;z.push(ae);e:for(;0<re;){var U=re-1>>>1,J=z[U];if(0<o(J,ae))z[U]=ae,z[re]=J,re=U;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var ae=z[0],re=z.pop();if(re!==ae){z[0]=re;e:for(var U=0,J=z.length,Ne=J>>>1;U<Ne;){var Z=2*(U+1)-1,ce=z[Z],ye=Z+1,ge=z[ye];if(0>o(ce,re))ye<J&&0>o(ge,ce)?(z[U]=ge,z[ye]=re,U=ye):(z[U]=ce,z[Z]=re,U=Z);else if(ye<J&&0>o(ge,re))z[U]=ge,z[ye]=re,U=ye;else break e}}return ae}function o(z,ae){var re=z.sortIndex-ae.sortIndex;return re!==0?re:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var h=[],m=[],g=1,v=null,x=3,S=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ae=t(m);ae!==null;){if(ae.callback===null)s(m);else if(ae.startTime<=z)s(m),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(m)}}function R(z){if(A=!1,L(z),!T)if(t(h)!==null)T=!0,oe(H);else{var ae=t(m);ae!==null&&ue(R,ae.startTime-z)}}function H(z,ae){T=!1,A&&(A=!1,_(X),X=-1),S=!0;var re=x;try{for(L(ae),v=t(h);v!==null&&(!(v.expirationTime>ae)||z&&!B());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var J=U(v.expirationTime<=ae);ae=r.unstable_now(),typeof J=="function"?v.callback=J:v===t(h)&&s(h),L(ae)}else s(h);v=t(h)}if(v!==null)var Ne=!0;else{var Z=t(m);Z!==null&&ue(R,Z.startTime-ae),Ne=!1}return Ne}finally{v=null,x=re,S=!1}}var F=!1,N=null,X=-1,b=5,C=-1;function B(){return!(r.unstable_now()-C<b)}function le(){if(N!==null){var z=r.unstable_now();C=z;var ae=!0;try{ae=N(!0,z)}finally{ae?ne():(F=!1,N=null)}}else F=!1}var ne;if(typeof I=="function")ne=function(){I(le)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=le,ne=function(){pe.postMessage(null)}}else ne=function(){y(le,0)};function oe(z){N=z,F||(F=!0,ne())}function ue(z,ae){X=y(function(){z(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){T||S||(T=!0,oe(H))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return z()}finally{x=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=x;x=z;try{return ae()}finally{x=re}},r.unstable_scheduleCallback=function(z,ae,re){var U=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=re+J,z={id:g++,callback:ae,priorityLevel:z,startTime:re,expirationTime:J,sortIndex:-1},re>U?(z.sortIndex=re,e(m,z),t(h)===null&&z===t(m)&&(A?(_(X),X=-1):A=!0,ue(R,re-U))):(z.sortIndex=J,e(h,z),T||S||(T=!0,oe(H))),z},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(z){var ae=x;return function(){var re=x;x=ae;try{return z.apply(this,arguments)}finally{x=re}}}}(gf)),gf}var zm;function $v(){return zm||(zm=1,mf.exports=qv()),mf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function Kv(){if(Bm)return On;Bm=1;var r=Kd(),e=$v();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,u,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,I);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,I);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,I);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,u)&&(a=null),u||f===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,u=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function J(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ne=!1;function Z(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var u=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){u=te}n.call(i.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var f=te.stack.split(`
`),p=u.stack.split(`
`),M=f.length-1,D=p.length-1;1<=M&&0<=D&&f[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(f[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||f[M]!==p[D]){var O=`
`+f[M].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=M&&0<=D);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?J(n):""}function ce(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case F:return"Portal";case b:return"Profiler";case X:return"StrictMode";case ne:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function yt(n){n._valueTracker||(n._valueTracker=$e(n))}function it(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function En(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ft(n,i){pt(n,i);var a=we(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rt(n,i,a){(i!=="number"||Nt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var We=Array.isArray;function P(n,i,a,u){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function E(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(We(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function me(n,i){var a=we(i.value),u=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,f)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ct(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Ke(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=Ke(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,f):n[a]=f}}var ze=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,se=null,he=null;function De(n){if(n=Ha(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=jo(i),Re(n.stateNode,n.type,i))}}function Le(n){se?he?he.push(n):he=[n]:se=n}function st(){if(se){var n=se,i=he;if(he=se=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Ut(n,i){return n(i)}function Qt(){}var St=!1;function Ln(n,i,a){if(St)return n(i,a);St=!0;try{return Ut(n,i,a)}finally{St=!1,(se!==null||he!==null)&&(Qt(),st())}}function Tn(n,i){var a=n.stateNode;if(a===null)return null;var u=jo(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ms=!1;if(d)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){ms=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{ms=!1}function Pi(n,i,a,u,f,p,M,D,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(xe){this.onError(xe)}}var Li=!1,Or=null,kr=!1,nr=null,To={onError:function(n){Li=!0,Or=n}};function gs(n,i,a,u,f,p,M,D,O){Li=!1,Or=null,Pi.apply(To,arguments)}function wo(n,i,a,u,f,p,M,D,O){if(gs.apply(this,arguments),Li){if(Li){var te=Or;Li=!1,Or=null}else throw Error(t(198));kr||(kr=!0,nr=te)}}function yi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ao(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Co(n){if(yi(n)!==n)throw Error(t(188))}function Iu(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return Co(f),n;if(p===u)return Co(f),i;p=p.sibling}throw Error(t(188))}if(a.return!==u.return)a=f,u=p;else{for(var M=!1,D=f.child;D;){if(D===a){M=!0,a=f,u=p;break}if(D===u){M=!0,u=f,a=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===a){M=!0,a=p,u=f;break}if(D===u){M=!0,u=p,a=f;break}D=D.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ro(n){return n=Iu(n),n!==null?bo(n):null}function bo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=bo(n);if(i!==null)return i;n=n.sibling}return null}var Po=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,W=e.unstable_shouldYield,ee=e.unstable_requestPaint,$=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,Be=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,Ve=null;function gt(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:vt,Gt=Math.log,zt=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(Gt(n)/zt|0)|0}var qe=64,Wt=4194304;function mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,f=n.suspendedLanes,p=n.pingedLanes,M=a&268435455;if(M!==0){var D=M&~f;D!==0?u=mt(D):(p&=M,p!==0&&(u=mt(p)))}else M=a&~f,M!==0?u=mt(M):p!==0&&(u=mt(p));if(u===0)return 0;if(i!==0&&i!==u&&!(i&f)&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if(u&4&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-at(i),f=1<<a,u|=n[a],i&=~f;return u}function ir(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var M=31-at(p),D=1<<M,O=f[M];O===-1?(!(D&a)||D&u)&&(f[M]=ir(D,i)):O<=i&&(n.expiredLanes|=D),p&=~D}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=qe;return qe<<=1,!(qe&4194240)&&(qe=64),n}function gn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function rn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-at(i),n[i]=a}function dn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-at(a),p=1<<f;i[f]=0,u[f]=-1,n[f]=-1,a&=~p}}function sn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-at(a),f=1<<u;f&i|n[u]&i&&(n[u]|=i),a&=~f}}var Mt=0;function Si(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var hh,Uu,ph,mh,gh,Fu=!1,Lo=[],rr=null,sr=null,ar=null,wa=new Map,Aa=new Map,or=[],h_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _h(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":wa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(i.pointerId)}}function Ca(n,i,a,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Ha(i),i!==null&&Uu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function p_(n,i,a,u,f){switch(i){case"focusin":return rr=Ca(rr,n,i,a,u,f),!0;case"dragenter":return sr=Ca(sr,n,i,a,u,f),!0;case"mouseover":return ar=Ca(ar,n,i,a,u,f),!0;case"pointerover":var p=f.pointerId;return wa.set(p,Ca(wa.get(p)||null,n,i,a,u,f)),!0;case"gotpointercapture":return p=f.pointerId,Aa.set(p,Ca(Aa.get(p)||null,n,i,a,u,f)),!0}return!1}function vh(n){var i=zr(n.target);if(i!==null){var a=yi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ao(a),i!==null){n.blockedOn=i,gh(n.priority,function(){ph(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Do(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ku(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);At=u,a.target.dispatchEvent(u),At=null}else return i=Ha(a),i!==null&&Uu(i),n.blockedOn=a,!1;i.shift()}return!0}function xh(n,i,a){Do(n)&&a.delete(i)}function m_(){Fu=!1,rr!==null&&Do(rr)&&(rr=null),sr!==null&&Do(sr)&&(sr=null),ar!==null&&Do(ar)&&(ar=null),wa.forEach(xh),Aa.forEach(xh)}function Ra(n,i){n.blockedOn===i&&(n.blockedOn=null,Fu||(Fu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,m_)))}function ba(n){function i(f){return Ra(f,n)}if(0<Lo.length){Ra(Lo[0],n);for(var a=1;a<Lo.length;a++){var u=Lo[a];u.blockedOn===n&&(u.blockedOn=null)}}for(rr!==null&&Ra(rr,n),sr!==null&&Ra(sr,n),ar!==null&&Ra(ar,n),wa.forEach(i),Aa.forEach(i),a=0;a<or.length;a++)u=or[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)vh(a),a.blockedOn===null&&or.shift()}var _s=R.ReactCurrentBatchConfig,No=!0;function g_(n,i,a,u){var f=Mt,p=_s.transition;_s.transition=null;try{Mt=1,Ou(n,i,a,u)}finally{Mt=f,_s.transition=p}}function __(n,i,a,u){var f=Mt,p=_s.transition;_s.transition=null;try{Mt=4,Ou(n,i,a,u)}finally{Mt=f,_s.transition=p}}function Ou(n,i,a,u){if(No){var f=ku(n,i,a,u);if(f===null)tc(n,i,u,Io,a),_h(n,u);else if(p_(f,n,i,a,u))u.stopPropagation();else if(_h(n,u),i&4&&-1<h_.indexOf(n)){for(;f!==null;){var p=Ha(f);if(p!==null&&hh(p),p=ku(n,i,a,u),p===null&&tc(n,i,u,Io,a),p===f)break;f=p}f!==null&&u.stopPropagation()}else tc(n,i,u,null,a)}}var Io=null;function ku(n,i,a,u){if(Io=null,n=G(u),n=zr(n),n!==null)if(i=yi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ao(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Io=n,null}function yh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Me:return 1;case be:return 4;case Ie:case Be:return 16;case tt:return 536870912;default:return 16}default:return 16}}var lr=null,zu=null,Uo=null;function Sh(){if(Uo)return Uo;var n,i=zu,a=i.length,u,f="value"in lr?lr.value:lr.textContent,p=f.length;for(n=0;n<a&&i[n]===f[n];n++);var M=a-n;for(u=1;u<=M&&i[a-u]===f[p-u];u++);return Uo=f.slice(n,1<u?1-u:void 0)}function Fo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Oo(){return!0}function Mh(){return!1}function Hn(n){function i(a,u,f,p,M){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(a=n[D],this[D]=a?a(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Oo:Mh,this.isPropagationStopped=Mh,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=Hn(vs),Pa=re({},vs,{view:0,detail:0}),v_=Hn(Pa),Hu,Vu,La,ko=re({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==La&&(La&&n.type==="mousemove"?(Hu=n.screenX-La.screenX,Vu=n.screenY-La.screenY):Vu=Hu=0,La=n),Hu)},movementY:function(n){return"movementY"in n?n.movementY:Vu}}),Eh=Hn(ko),x_=re({},ko,{dataTransfer:0}),y_=Hn(x_),S_=re({},Pa,{relatedTarget:0}),Gu=Hn(S_),M_=re({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),E_=Hn(M_),T_=re({},vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),w_=Hn(T_),A_=re({},vs,{data:0}),Th=Hn(A_),C_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=b_[n])?!!i[n]:!1}function Wu(){return P_}var L_=re({},Pa,{key:function(n){if(n.key){var i=C_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Fo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?R_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(n){return n.type==="keypress"?Fo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),D_=Hn(L_),N_=re({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=Hn(N_),I_=re({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),U_=Hn(I_),F_=re({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),O_=Hn(F_),k_=re({},ko,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),z_=Hn(k_),B_=[9,13,27,32],Xu=d&&"CompositionEvent"in window,Da=null;d&&"documentMode"in document&&(Da=document.documentMode);var H_=d&&"TextEvent"in window&&!Da,Ah=d&&(!Xu||Da&&8<Da&&11>=Da),Ch=" ",Rh=!1;function bh(n,i){switch(n){case"keyup":return B_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ph(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function V_(n,i){switch(n){case"compositionend":return Ph(i);case"keypress":return i.which!==32?null:(Rh=!0,Ch);case"textInput":return n=i.data,n===Ch&&Rh?null:n;default:return null}}function G_(n,i){if(xs)return n==="compositionend"||!Xu&&bh(n,i)?(n=Sh(),Uo=zu=lr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ah&&i.locale!=="ko"?null:i.data;default:return null}}var W_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!W_[n.type]:i==="textarea"}function Dh(n,i,a,u){Le(u),i=Go(i,"onChange"),0<i.length&&(a=new Bu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Na=null,Ia=null;function X_(n){Kh(n,0)}function zo(n){var i=Ts(n);if(it(i))return n}function j_(n,i){if(n==="change")return i}var Nh=!1;if(d){var ju;if(d){var Yu="oninput"in document;if(!Yu){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),Yu=typeof Ih.oninput=="function"}ju=Yu}else ju=!1;Nh=ju&&(!document.documentMode||9<document.documentMode)}function Uh(){Na&&(Na.detachEvent("onpropertychange",Fh),Ia=Na=null)}function Fh(n){if(n.propertyName==="value"&&zo(Ia)){var i=[];Dh(i,Ia,n,G(n)),Ln(X_,i)}}function Y_(n,i,a){n==="focusin"?(Uh(),Na=i,Ia=a,Na.attachEvent("onpropertychange",Fh)):n==="focusout"&&Uh()}function q_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zo(Ia)}function $_(n,i){if(n==="click")return zo(i)}function K_(n,i){if(n==="input"||n==="change")return zo(i)}function Z_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ai=typeof Object.is=="function"?Object.is:Z_;function Ua(n,i){if(ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!h.call(i,f)||!ai(n[f],i[f]))return!1}return!0}function Oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kh(n,i){var a=Oh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Oh(a)}}function zh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?zh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Bh(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Nt(n.document)}return i}function qu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Q_(n){var i=Bh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&zh(a.ownerDocument.documentElement,a)){if(u!==null&&qu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!n.extend&&p>u&&(f=u,u=p,p=f),f=kh(a,p);var M=kh(a,u);f&&M&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var J_=d&&"documentMode"in document&&11>=document.documentMode,ys=null,$u=null,Fa=null,Ku=!1;function Hh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||ys==null||ys!==Nt(u)||(u=ys,"selectionStart"in u&&qu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Fa&&Ua(Fa,u)||(Fa=u,u=Go($u,"onSelect"),0<u.length&&(i=new Bu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=ys)))}function Bo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ss={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},Zu={},Vh={};d&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Ho(n){if(Zu[n])return Zu[n];if(!Ss[n])return n;var i=Ss[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Vh)return Zu[n]=i[a];return n}var Gh=Ho("animationend"),Wh=Ho("animationiteration"),Xh=Ho("animationstart"),jh=Ho("transitionend"),Yh=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){Yh.set(n,i),l(i,[n])}for(var Qu=0;Qu<qh.length;Qu++){var Ju=qh[Qu],ev=Ju.toLowerCase(),tv=Ju[0].toUpperCase()+Ju.slice(1);ur(ev,"on"+tv)}ur(Gh,"onAnimationEnd"),ur(Wh,"onAnimationIteration"),ur(Xh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(jh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function $h(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,wo(u,i,void 0,n),n.currentTarget=null}function Kh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var D=u[M],O=D.instance,te=D.currentTarget;if(D=D.listener,O!==p&&f.isPropagationStopped())break e;$h(f,D,te),p=O}else for(M=0;M<u.length;M++){if(D=u[M],O=D.instance,te=D.currentTarget,D=D.listener,O!==p&&f.isPropagationStopped())break e;$h(f,D,te),p=O}}}if(kr)throw n=nr,kr=!1,nr=null,n}function Ft(n,i){var a=i[oc];a===void 0&&(a=i[oc]=new Set);var u=n+"__bubble";a.has(u)||(Zh(i,n,2,!1),a.add(u))}function ec(n,i,a){var u=0;i&&(u|=4),Zh(a,n,u,i)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function ka(n){if(!n[Vo]){n[Vo]=!0,s.forEach(function(a){a!=="selectionchange"&&(nv.has(a)||ec(a,!1,n),ec(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Vo]||(i[Vo]=!0,ec("selectionchange",!1,i))}}function Zh(n,i,a,u){switch(yh(i)){case 1:var f=g_;break;case 4:f=__;break;default:f=Ou}a=f.bind(null,i,a,n),f=void 0,!ms||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function tc(n,i,a,u,f){var p=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var D=u.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(M===4)for(M=u.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;M=M.return}for(;D!==null;){if(M=zr(D),M===null)return;if(O=M.tag,O===5||O===6){u=p=M;continue e}D=D.parentNode}}u=u.return}Ln(function(){var te=p,xe=G(a),Se=[];e:{var _e=Yh.get(n);if(_e!==void 0){var Ue=Bu,He=n;switch(n){case"keypress":if(Fo(a)===0)break e;case"keydown":case"keyup":Ue=D_;break;case"focusin":He="focus",Ue=Gu;break;case"focusout":He="blur",Ue=Gu;break;case"beforeblur":case"afterblur":Ue=Gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=U_;break;case Gh:case Wh:case Xh:Ue=E_;break;case jh:Ue=O_;break;case"scroll":Ue=v_;break;case"wheel":Ue=z_;break;case"copy":case"cut":case"paste":Ue=w_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=wh}var Ge=(i&4)!==0,Yt=!Ge&&n==="scroll",q=Ge?_e!==null?_e+"Capture":null:_e;Ge=[];for(var V=te,K;V!==null;){K=V;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,q!==null&&(Te=Tn(V,q),Te!=null&&Ge.push(za(V,Te,K)))),Yt)break;V=V.return}0<Ge.length&&(_e=new Ue(_e,He,null,a,xe),Se.push({event:_e,listeners:Ge}))}}if(!(i&7)){e:{if(_e=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",_e&&a!==At&&(He=a.relatedTarget||a.fromElement)&&(zr(He)||He[Ni]))break e;if((Ue||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ue?(He=a.relatedTarget||a.toElement,Ue=te,He=He?zr(He):null,He!==null&&(Yt=yi(He),He!==Yt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=te),Ue!==He)){if(Ge=Eh,Te="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=wh,Te="onPointerLeave",q="onPointerEnter",V="pointer"),Yt=Ue==null?_e:Ts(Ue),K=He==null?_e:Ts(He),_e=new Ge(Te,V+"leave",Ue,a,xe),_e.target=Yt,_e.relatedTarget=K,Te=null,zr(xe)===te&&(Ge=new Ge(q,V+"enter",He,a,xe),Ge.target=K,Ge.relatedTarget=Yt,Te=Ge),Yt=Te,Ue&&He)t:{for(Ge=Ue,q=He,V=0,K=Ge;K;K=Ms(K))V++;for(K=0,Te=q;Te;Te=Ms(Te))K++;for(;0<V-K;)Ge=Ms(Ge),V--;for(;0<K-V;)q=Ms(q),K--;for(;V--;){if(Ge===q||q!==null&&Ge===q.alternate)break t;Ge=Ms(Ge),q=Ms(q)}Ge=null}else Ge=null;Ue!==null&&Qh(Se,_e,Ue,Ge,!1),He!==null&&Yt!==null&&Qh(Se,Yt,He,Ge,!0)}}e:{if(_e=te?Ts(te):window,Ue=_e.nodeName&&_e.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&_e.type==="file")var je=j_;else if(Lh(_e))if(Nh)je=K_;else{je=q_;var Ze=Y_}else(Ue=_e.nodeName)&&Ue.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(je=$_);if(je&&(je=je(n,te))){Dh(Se,je,a,xe);break e}Ze&&Ze(n,_e,te),n==="focusout"&&(Ze=_e._wrapperState)&&Ze.controlled&&_e.type==="number"&&Rt(_e,"number",_e.value)}switch(Ze=te?Ts(te):window,n){case"focusin":(Lh(Ze)||Ze.contentEditable==="true")&&(ys=Ze,$u=te,Fa=null);break;case"focusout":Fa=$u=ys=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Hh(Se,a,xe);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":Hh(Se,a,xe)}var Qe;if(Xu)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else xs?bh(n,a)&&(nt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Ah&&a.locale!=="ko"&&(xs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&xs&&(Qe=Sh()):(lr=xe,zu="value"in lr?lr.value:lr.textContent,xs=!0)),Ze=Go(te,nt),0<Ze.length&&(nt=new Th(nt,n,null,a,xe),Se.push({event:nt,listeners:Ze}),Qe?nt.data=Qe:(Qe=Ph(a),Qe!==null&&(nt.data=Qe)))),(Qe=H_?V_(n,a):G_(n,a))&&(te=Go(te,"onBeforeInput"),0<te.length&&(xe=new Th("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:te}),xe.data=Qe))}Kh(Se,i)})}function za(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Go(n,i){for(var a=i+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Tn(n,a),p!=null&&u.unshift(za(n,p,f)),p=Tn(n,i),p!=null&&u.push(za(n,p,f))),n=n.return}return u}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qh(n,i,a,u,f){for(var p=i._reactName,M=[];a!==null&&a!==u;){var D=a,O=D.alternate,te=D.stateNode;if(O!==null&&O===u)break;D.tag===5&&te!==null&&(D=te,f?(O=Tn(a,p),O!=null&&M.unshift(za(a,O,D))):f||(O=Tn(a,p),O!=null&&M.push(za(a,O,D)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var iv=/\r\n?/g,rv=/\u0000|\uFFFD/g;function Jh(n){return(typeof n=="string"?n:""+n).replace(iv,`
`).replace(rv,"")}function Wo(n,i,a){if(i=Jh(i),Jh(n)!==i&&a)throw Error(t(425))}function Xo(){}var nc=null,ic=null;function rc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sc=typeof setTimeout=="function"?setTimeout:void 0,sv=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,av=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(ov)}:sc;function ov(n){setTimeout(function(){throw n})}function ac(n,i){var a=i,u=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){n.removeChild(f),ba(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);ba(i)}function cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Es,Ba="__reactProps$"+Es,Ni="__reactContainer$"+Es,oc="__reactEvents$"+Es,lv="__reactListeners$"+Es,uv="__reactHandles$"+Es;function zr(n){var i=n[Mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ni]||a[Mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=tp(n);n!==null;){if(a=n[Mi])return a;n=tp(n)}return i}n=a,a=n.parentNode}return null}function Ha(n){return n=n[Mi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jo(n){return n[Ba]||null}var lc=[],ws=-1;function fr(n){return{current:n}}function Ot(n){0>ws||(n.current=lc[ws],lc[ws]=null,ws--)}function It(n,i){ws++,lc[ws]=n.current,n.current=i}var dr={},_n=fr(dr),Dn=fr(!1),Br=dr;function As(n,i){var a=n.type.contextTypes;if(!a)return dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(n){return n=n.childContextTypes,n!=null}function Yo(){Ot(Dn),Ot(_n)}function np(n,i,a){if(_n.current!==dr)throw Error(t(168));It(_n,i),It(Dn,a)}function ip(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,ge(n)||"Unknown",f));return re({},a,u)}function qo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Br=_n.current,It(_n,n),It(Dn,Dn.current),!0}function rp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=ip(n,i,Br),u.__reactInternalMemoizedMergedChildContext=n,Ot(Dn),Ot(_n),It(_n,n)):Ot(Dn),It(Dn,a)}var Ii=null,$o=!1,uc=!1;function sp(n){Ii===null?Ii=[n]:Ii.push(n)}function cv(n){$o=!0,sp(n)}function hr(){if(!uc&&Ii!==null){uc=!0;var n=0,i=Mt;try{var a=Ii;for(Mt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ii=null,$o=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(n+1)),Po(Me,hr),f}finally{Mt=i,uc=!1}}return null}var Cs=[],Rs=0,Ko=null,Zo=0,qn=[],$n=0,Hr=null,Ui=1,Fi="";function Vr(n,i){Cs[Rs++]=Zo,Cs[Rs++]=Ko,Ko=n,Zo=i}function ap(n,i,a){qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=Hr,Hr=n;var u=Ui;n=Fi;var f=32-at(u)-1;u&=~(1<<f),a+=1;var p=32-at(i)+f;if(30<p){var M=f-f%5;p=(u&(1<<M)-1).toString(32),u>>=M,f-=M,Ui=1<<32-at(i)+f|a<<f|u,Fi=p+n}else Ui=1<<p|a<<f|u,Fi=n}function cc(n){n.return!==null&&(Vr(n,1),ap(n,1,0))}function fc(n){for(;n===Ko;)Ko=Cs[--Rs],Cs[Rs]=null,Zo=Cs[--Rs],Cs[Rs]=null;for(;n===Hr;)Hr=qn[--$n],qn[$n]=null,Fi=qn[--$n],qn[$n]=null,Ui=qn[--$n],qn[$n]=null}var Vn=null,Gn=null,Bt=!1,oi=null;function op(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function lp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Gn=cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:Ui,overflow:Fi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Vn=n,Gn=null,!0):!1;default:return!1}}function dc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hc(n){if(Bt){var i=Gn;if(i){var a=i;if(!lp(n,i)){if(dc(n))throw Error(t(418));i=cr(a.nextSibling);var u=Vn;i&&lp(n,i)?op(u,a):(n.flags=n.flags&-4097|2,Bt=!1,Vn=n)}}else{if(dc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Vn=n}}}function up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Qo(n){if(n!==Vn)return!1;if(!Bt)return up(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!rc(n.type,n.memoizedProps)),i&&(i=Gn)){if(dc(n))throw cp(),Error(t(418));for(;i;)op(n,i),i=cr(i.nextSibling)}if(up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Gn=cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Gn=null}}else Gn=Vn?cr(n.stateNode.nextSibling):null;return!0}function cp(){for(var n=Gn;n;)n=cr(n.nextSibling)}function bs(){Gn=Vn=null,Bt=!1}function pc(n){oi===null?oi=[n]:oi.push(n)}var fv=R.ReactCurrentBatchConfig;function Va(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var f=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=f.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Jo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function fp(n){var i=n._init;return i(n._payload)}function dp(n){function i(q,V){if(n){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function a(q,V){if(!n)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function u(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function f(q,V){return q=Sr(q,V),q.index=0,q.sibling=null,q}function p(q,V,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function M(q){return n&&q.alternate===null&&(q.flags|=2),q}function D(q,V,K,Te){return V===null||V.tag!==6?(V=af(K,q.mode,Te),V.return=q,V):(V=f(V,K),V.return=q,V)}function O(q,V,K,Te){var je=K.type;return je===N?xe(q,V,K.props.children,Te,K.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&fp(je)===V.type)?(Te=f(V,K.props),Te.ref=Va(q,V,K),Te.return=q,Te):(Te=El(K.type,K.key,K.props,null,q.mode,Te),Te.ref=Va(q,V,K),Te.return=q,Te)}function te(q,V,K,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=of(K,q.mode,Te),V.return=q,V):(V=f(V,K.children||[]),V.return=q,V)}function xe(q,V,K,Te,je){return V===null||V.tag!==7?(V=Kr(K,q.mode,Te,je),V.return=q,V):(V=f(V,K),V.return=q,V)}function Se(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=af(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case H:return K=El(V.type,V.key,V.props,null,q.mode,K),K.ref=Va(q,null,V),K.return=q,K;case F:return V=of(V,q.mode,K),V.return=q,V;case oe:var Te=V._init;return Se(q,Te(V._payload),K)}if(We(V)||ae(V))return V=Kr(V,q.mode,K,null),V.return=q,V;Jo(q,V)}return null}function _e(q,V,K,Te){var je=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return je!==null?null:D(q,V,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case H:return K.key===je?O(q,V,K,Te):null;case F:return K.key===je?te(q,V,K,Te):null;case oe:return je=K._init,_e(q,V,je(K._payload),Te)}if(We(K)||ae(K))return je!==null?null:xe(q,V,K,Te,null);Jo(q,K)}return null}function Ue(q,V,K,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get(K)||null,D(V,q,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case H:return q=q.get(Te.key===null?K:Te.key)||null,O(V,q,Te,je);case F:return q=q.get(Te.key===null?K:Te.key)||null,te(V,q,Te,je);case oe:var Ze=Te._init;return Ue(q,V,K,Ze(Te._payload),je)}if(We(Te)||ae(Te))return q=q.get(K)||null,xe(V,q,Te,je,null);Jo(V,Te)}return null}function He(q,V,K,Te){for(var je=null,Ze=null,Qe=V,nt=V=0,ln=null;Qe!==null&&nt<K.length;nt++){Qe.index>nt?(ln=Qe,Qe=null):ln=Qe.sibling;var Tt=_e(q,Qe,K[nt],Te);if(Tt===null){Qe===null&&(Qe=ln);break}n&&Qe&&Tt.alternate===null&&i(q,Qe),V=p(Tt,V,nt),Ze===null?je=Tt:Ze.sibling=Tt,Ze=Tt,Qe=ln}if(nt===K.length)return a(q,Qe),Bt&&Vr(q,nt),je;if(Qe===null){for(;nt<K.length;nt++)Qe=Se(q,K[nt],Te),Qe!==null&&(V=p(Qe,V,nt),Ze===null?je=Qe:Ze.sibling=Qe,Ze=Qe);return Bt&&Vr(q,nt),je}for(Qe=u(q,Qe);nt<K.length;nt++)ln=Ue(Qe,q,nt,K[nt],Te),ln!==null&&(n&&ln.alternate!==null&&Qe.delete(ln.key===null?nt:ln.key),V=p(ln,V,nt),Ze===null?je=ln:Ze.sibling=ln,Ze=ln);return n&&Qe.forEach(function(Mr){return i(q,Mr)}),Bt&&Vr(q,nt),je}function Ge(q,V,K,Te){var je=ae(K);if(typeof je!="function")throw Error(t(150));if(K=je.call(K),K==null)throw Error(t(151));for(var Ze=je=null,Qe=V,nt=V=0,ln=null,Tt=K.next();Qe!==null&&!Tt.done;nt++,Tt=K.next()){Qe.index>nt?(ln=Qe,Qe=null):ln=Qe.sibling;var Mr=_e(q,Qe,Tt.value,Te);if(Mr===null){Qe===null&&(Qe=ln);break}n&&Qe&&Mr.alternate===null&&i(q,Qe),V=p(Mr,V,nt),Ze===null?je=Mr:Ze.sibling=Mr,Ze=Mr,Qe=ln}if(Tt.done)return a(q,Qe),Bt&&Vr(q,nt),je;if(Qe===null){for(;!Tt.done;nt++,Tt=K.next())Tt=Se(q,Tt.value,Te),Tt!==null&&(V=p(Tt,V,nt),Ze===null?je=Tt:Ze.sibling=Tt,Ze=Tt);return Bt&&Vr(q,nt),je}for(Qe=u(q,Qe);!Tt.done;nt++,Tt=K.next())Tt=Ue(Qe,q,nt,Tt.value,Te),Tt!==null&&(n&&Tt.alternate!==null&&Qe.delete(Tt.key===null?nt:Tt.key),V=p(Tt,V,nt),Ze===null?je=Tt:Ze.sibling=Tt,Ze=Tt);return n&&Qe.forEach(function(Gv){return i(q,Gv)}),Bt&&Vr(q,nt),je}function Yt(q,V,K,Te){if(typeof K=="object"&&K!==null&&K.type===N&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case H:e:{for(var je=K.key,Ze=V;Ze!==null;){if(Ze.key===je){if(je=K.type,je===N){if(Ze.tag===7){a(q,Ze.sibling),V=f(Ze,K.props.children),V.return=q,q=V;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&fp(je)===Ze.type){a(q,Ze.sibling),V=f(Ze,K.props),V.ref=Va(q,Ze,K),V.return=q,q=V;break e}a(q,Ze);break}else i(q,Ze);Ze=Ze.sibling}K.type===N?(V=Kr(K.props.children,q.mode,Te,K.key),V.return=q,q=V):(Te=El(K.type,K.key,K.props,null,q.mode,Te),Te.ref=Va(q,V,K),Te.return=q,q=Te)}return M(q);case F:e:{for(Ze=K.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(q,V.sibling),V=f(V,K.children||[]),V.return=q,q=V;break e}else{a(q,V);break}else i(q,V);V=V.sibling}V=of(K,q.mode,Te),V.return=q,q=V}return M(q);case oe:return Ze=K._init,Yt(q,V,Ze(K._payload),Te)}if(We(K))return He(q,V,K,Te);if(ae(K))return Ge(q,V,K,Te);Jo(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(a(q,V.sibling),V=f(V,K),V.return=q,q=V):(a(q,V),V=af(K,q.mode,Te),V.return=q,q=V),M(q)):a(q,V)}return Yt}var Ps=dp(!0),hp=dp(!1),el=fr(null),tl=null,Ls=null,mc=null;function gc(){mc=Ls=tl=null}function _c(n){var i=el.current;Ot(el),n._currentValue=i}function vc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ds(n,i){tl=n,mc=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(In=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(mc!==n)if(n={context:n,memoizedValue:i,next:null},Ls===null){if(tl===null)throw Error(t(308));Ls=n,tl.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return i}var Gr=null;function xc(n){Gr===null?Gr=[n]:Gr.push(n)}function pp(n,i,a,u){var f=i.interleaved;return f===null?(a.next=a,xc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Oi(n,u)}function Oi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var pr=!1;function yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Et&2){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Oi(n,a)}return f=u.interleaved,f===null?(i.next=i,xc(u)):(i.next=f.next,f.next=i),u.interleaved=i,Oi(n,a)}function nl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,sn(n,a)}}function gp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function il(n,i,a,u){var f=n.updateQueue;pr=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var O=D,te=O.next;O.next=null,M===null?p=te:M.next=te,M=O;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==M&&(D===null?xe.firstBaseUpdate=te:D.next=te,xe.lastBaseUpdate=O))}if(p!==null){var Se=f.baseState;M=0,xe=te=O=null,D=p;do{var _e=D.lane,Ue=D.eventTime;if((u&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var He=n,Ge=D;switch(_e=i,Ue=a,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){Se=He.call(Ue,Se,_e);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,_e=typeof He=="function"?He.call(Ue,Se,_e):He,_e==null)break e;Se=re({},Se,_e);break e;case 2:pr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,_e=f.effects,_e===null?f.effects=[D]:_e.push(D))}else Ue={eventTime:Ue,lane:_e,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(te=xe=Ue,O=Se):xe=xe.next=Ue,M|=_e;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;_e=D,D=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(xe===null&&(O=Se),f.baseState=O,f.firstBaseUpdate=te,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);jr|=M,n.lanes=M,n.memoizedState=Se}}function _p(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var Ga={},Ei=fr(Ga),Wa=fr(Ga),Xa=fr(Ga);function Wr(n){if(n===Ga)throw Error(t(174));return n}function Sc(n,i){switch(It(Xa,i),It(Wa,n),It(Ei,Ga),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Xe(i,n)}Ot(Ei),It(Ei,i)}function Ns(){Ot(Ei),Ot(Wa),Ot(Xa)}function vp(n){Wr(Xa.current);var i=Wr(Ei.current),a=Xe(i,n.type);i!==a&&(It(Wa,n),It(Ei,a))}function Mc(n){Wa.current===n&&(Ot(Ei),Ot(Wa))}var Ht=fr(0);function rl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ec=[];function Tc(){for(var n=0;n<Ec.length;n++)Ec[n]._workInProgressVersionPrimary=null;Ec.length=0}var sl=R.ReactCurrentDispatcher,wc=R.ReactCurrentBatchConfig,Xr=0,Vt=null,Jt=null,an=null,al=!1,ja=!1,Ya=0,dv=0;function vn(){throw Error(t(321))}function Ac(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ai(n[a],i[a]))return!1;return!0}function Cc(n,i,a,u,f,p){if(Xr=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,sl.current=n===null||n.memoizedState===null?gv:_v,n=a(u,f),ja){p=0;do{if(ja=!1,Ya=0,25<=p)throw Error(t(301));p+=1,an=Jt=null,i.updateQueue=null,sl.current=vv,n=a(u,f)}while(ja)}if(sl.current=ul,i=Jt!==null&&Jt.next!==null,Xr=0,an=Jt=Vt=null,al=!1,i)throw Error(t(300));return n}function Rc(){var n=Ya!==0;return Ya=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Vt.memoizedState=an=n:an=an.next=n,an}function Zn(){if(Jt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=an===null?Vt.memoizedState:an.next;if(i!==null)an=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},an===null?Vt.memoizedState=an=n:an=an.next=n}return an}function qa(n,i){return typeof i=="function"?i(n):i}function bc(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Jt,f=u.baseQueue,p=a.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}u.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,u=u.baseState;var D=M=null,O=null,te=p;do{var xe=te.lane;if((Xr&xe)===xe)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var Se={lane:xe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(D=O=Se,M=u):O=O.next=Se,Vt.lanes|=xe,jr|=xe}te=te.next}while(te!==null&&te!==p);O===null?M=u:O.next=D,ai(u,i.memoizedState)||(In=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=O,a.lastRenderedState=u}if(n=a.interleaved,n!==null){f=n;do p=f.lane,Vt.lanes|=p,jr|=p,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Pc(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var M=f=f.next;do p=n(p,M.action),M=M.next;while(M!==f);ai(p,i.memoizedState)||(In=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function xp(){}function yp(n,i){var a=Vt,u=Zn(),f=i(),p=!ai(u.memoizedState,f);if(p&&(u.memoizedState=f,In=!0),u=u.queue,Lc(Ep.bind(null,a,u,n),[n]),u.getSnapshot!==i||p||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,$a(9,Mp.bind(null,a,u,f,i),void 0,null),on===null)throw Error(t(349));Xr&30||Sp(a,i,f)}return f}function Sp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Mp(n,i,a,u){i.value=a,i.getSnapshot=u,Tp(i)&&wp(n)}function Ep(n,i,a){return a(function(){Tp(i)&&wp(n)})}function Tp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ai(n,a)}catch{return!0}}function wp(n){var i=Oi(n,1);i!==null&&fi(i,n,1,-1)}function Ap(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},i.queue=n,n=n.dispatch=mv.bind(null,Vt,n),[i.memoizedState,n]}function $a(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Cp(){return Zn().memoizedState}function ol(n,i,a,u){var f=Ti();Vt.flags|=n,f.memoizedState=$a(1|i,a,void 0,u===void 0?null:u)}function ll(n,i,a,u){var f=Zn();u=u===void 0?null:u;var p=void 0;if(Jt!==null){var M=Jt.memoizedState;if(p=M.destroy,u!==null&&Ac(u,M.deps)){f.memoizedState=$a(i,a,p,u);return}}Vt.flags|=n,f.memoizedState=$a(1|i,a,p,u)}function Rp(n,i){return ol(8390656,8,n,i)}function Lc(n,i){return ll(2048,8,n,i)}function bp(n,i){return ll(4,2,n,i)}function Pp(n,i){return ll(4,4,n,i)}function Lp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Dp(n,i,a){return a=a!=null?a.concat([n]):null,ll(4,4,Lp.bind(null,i,n),a)}function Dc(){}function Np(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Ac(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Ip(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Ac(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Up(n,i,a){return Xr&21?(ai(a,i)||(a=Dt(),Vt.lanes|=a,jr|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=a)}function hv(n,i){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var u=wc.transition;wc.transition={};try{n(!1),i()}finally{Mt=a,wc.transition=u}}function Fp(){return Zn().memoizedState}function pv(n,i,a){var u=xr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Op(n))kp(i,a);else if(a=pp(n,i,a,u),a!==null){var f=Cn();fi(a,n,u,f),zp(a,i,u)}}function mv(n,i,a){var u=xr(n),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Op(n))kp(i,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,a);if(f.hasEagerState=!0,f.eagerState=D,ai(D,M)){var O=i.interleaved;O===null?(f.next=f,xc(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}a=pp(n,i,f,u),a!==null&&(f=Cn(),fi(a,n,u,f),zp(a,i,u))}}function Op(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function kp(n,i){ja=al=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function zp(n,i,a){if(a&4194240){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,sn(n,a)}}var ul={readContext:Kn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},gv={readContext:Kn,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:Rp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ol(4194308,4,Lp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ol(4194308,4,n,i)},useInsertionEffect:function(n,i){return ol(4,2,n,i)},useMemo:function(n,i){var a=Ti();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ti();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=pv.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:Ap,useDebugValue:Dc,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=Ap(!1),i=n[0];return n=hv.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Vt,f=Ti();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),on===null)throw Error(t(349));Xr&30||Sp(u,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,Rp(Ep.bind(null,u,p,n),[n]),u.flags|=2048,$a(9,Mp.bind(null,u,p,a,i),void 0,null),a},useId:function(){var n=Ti(),i=on.identifierPrefix;if(Bt){var a=Fi,u=Ui;a=(u&~(1<<32-at(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=dv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},_v={readContext:Kn,useCallback:Np,useContext:Kn,useEffect:Lc,useImperativeHandle:Dp,useInsertionEffect:bp,useLayoutEffect:Pp,useMemo:Ip,useReducer:bc,useRef:Cp,useState:function(){return bc(qa)},useDebugValue:Dc,useDeferredValue:function(n){var i=Zn();return Up(i,Jt.memoizedState,n)},useTransition:function(){var n=bc(qa)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:yp,useId:Fp,unstable_isNewReconciler:!1},vv={readContext:Kn,useCallback:Np,useContext:Kn,useEffect:Lc,useImperativeHandle:Dp,useInsertionEffect:bp,useLayoutEffect:Pp,useMemo:Ip,useReducer:Pc,useRef:Cp,useState:function(){return Pc(qa)},useDebugValue:Dc,useDeferredValue:function(n){var i=Zn();return Jt===null?i.memoizedState=n:Up(i,Jt.memoizedState,n)},useTransition:function(){var n=Pc(qa)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:yp,useId:Fp,unstable_isNewReconciler:!1};function li(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Nc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cl={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Cn(),f=xr(n),p=ki(u,f);p.payload=i,a!=null&&(p.callback=a),i=mr(n,p,f),i!==null&&(fi(i,n,f,u),nl(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Cn(),f=xr(n),p=ki(u,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=mr(n,p,f),i!==null&&(fi(i,n,f,u),nl(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Cn(),u=xr(n),f=ki(a,u);f.tag=2,i!=null&&(f.callback=i),i=mr(n,f,u),i!==null&&(fi(i,n,u,a),nl(i,n,u))}};function Bp(n,i,a,u,f,p,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!Ua(a,u)||!Ua(f,p):!0}function Hp(n,i,a){var u=!1,f=dr,p=i.contextType;return typeof p=="object"&&p!==null?p=Kn(p):(f=Nn(i)?Br:_n.current,u=i.contextTypes,p=(u=u!=null)?As(n,f):dr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),i}function Vp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&cl.enqueueReplaceState(i,i.state,null)}function Ic(n,i,a,u){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},yc(n);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Kn(p):(p=Nn(i)?Br:_n.current,f.context=As(n,p)),f.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Nc(n,i,p,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&cl.enqueueReplaceState(f,f.state,null),il(n,a,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,i){try{var a="",u=i;do a+=ce(u),u=u.return;while(u);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:f,digest:null}}function Uc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Fc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var xv=typeof WeakMap=="function"?WeakMap:Map;function Gp(n,i,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){_l||(_l=!0,Zc=u),Fc(n,i)},a}function Wp(n,i,a){a=ki(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;a.payload=function(){return u(f)},a.callback=function(){Fc(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Fc(n,i),typeof u!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function Xp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new xv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(f.add(a),n=Nv.bind(null,n,i,a),i.then(n,n))}function jp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Yp(n,i,a,u,f){return n.mode&1?(n.flags|=65536,n.lanes=f,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ki(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),n)}var yv=R.ReactCurrentOwner,In=!1;function An(n,i,a,u){i.child=n===null?hp(i,null,a,u):Ps(i,n.child,a,u)}function qp(n,i,a,u,f){a=a.render;var p=i.ref;return Ds(i,f),u=Cc(n,i,a,u,p,f),a=Rc(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,zi(n,i,f)):(Bt&&a&&cc(i),i.flags|=1,An(n,i,u,f),i.child)}function $p(n,i,a,u,f){if(n===null){var p=a.type;return typeof p=="function"&&!sf(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Kp(n,i,p,u,f)):(n=El(a.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!(n.lanes&f)){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ua,a(M,u)&&n.ref===i.ref)return zi(n,i,f)}return i.flags|=1,n=Sr(p,u),n.ref=i.ref,n.return=i,i.child=n}function Kp(n,i,a,u,f){if(n!==null){var p=n.memoizedProps;if(Ua(p,u)&&n.ref===i.ref)if(In=!1,i.pendingProps=u=p,(n.lanes&f)!==0)n.flags&131072&&(In=!0);else return i.lanes=n.lanes,zi(n,i,f)}return Oc(n,i,a,u,f)}function Zp(n,i,a){var u=i.pendingProps,f=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Fs,Wn),Wn|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Fs,Wn),Wn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,It(Fs,Wn),Wn|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,It(Fs,Wn),Wn|=u;return An(n,i,f,a),i.child}function Qp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Oc(n,i,a,u,f){var p=Nn(a)?Br:_n.current;return p=As(i,p),Ds(i,f),a=Cc(n,i,a,u,p,f),u=Rc(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,zi(n,i,f)):(Bt&&u&&cc(i),i.flags|=1,An(n,i,a,f),i.child)}function Jp(n,i,a,u,f){if(Nn(a)){var p=!0;qo(i)}else p=!1;if(Ds(i,f),i.stateNode===null)dl(n,i),Hp(i,a,u),Ic(i,a,u,f),u=!0;else if(n===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var O=M.context,te=a.contextType;typeof te=="object"&&te!==null?te=Kn(te):(te=Nn(a)?Br:_n.current,te=As(i,te));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==u||O!==te)&&Vp(i,M,u,te),pr=!1;var _e=i.memoizedState;M.state=_e,il(i,u,M,f),O=i.memoizedState,D!==u||_e!==O||Dn.current||pr?(typeof xe=="function"&&(Nc(i,a,xe,u),O=i.memoizedState),(D=pr||Bp(i,a,D,u,_e,O,te))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),M.props=u,M.state=O,M.context=te,u=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,mp(n,i),D=i.memoizedProps,te=i.type===i.elementType?D:li(i.type,D),M.props=te,Se=i.pendingProps,_e=M.context,O=a.contextType,typeof O=="object"&&O!==null?O=Kn(O):(O=Nn(a)?Br:_n.current,O=As(i,O));var Ue=a.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==Se||_e!==O)&&Vp(i,M,u,O),pr=!1,_e=i.memoizedState,M.state=_e,il(i,u,M,f);var He=i.memoizedState;D!==Se||_e!==He||Dn.current||pr?(typeof Ue=="function"&&(Nc(i,a,Ue,u),He=i.memoizedState),(te=pr||Bp(i,a,te,u,_e,He,O)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,He,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,He,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),M.props=u,M.state=He,M.context=O,u=te):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),u=!1)}return kc(n,i,a,u,p,f)}function kc(n,i,a,u,f,p){Qp(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return f&&rp(i,a,!1),zi(n,i,p);u=i.stateNode,yv.current=i;var D=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=Ps(i,n.child,null,p),i.child=Ps(i,null,D,p)):An(n,i,D,p),i.memoizedState=u.state,f&&rp(i,a,!0),i.child}function em(n){var i=n.stateNode;i.pendingContext?np(n,i.pendingContext,i.pendingContext!==i.context):i.context&&np(n,i.context,!1),Sc(n,i.containerInfo)}function tm(n,i,a,u,f){return bs(),pc(f),i.flags|=256,An(n,i,a,u),i.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Bc(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,i,a){var u=i.pendingProps,f=Ht.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=n!==null&&n.memoizedState===null?!1:(f&2)!==0),D?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),It(Ht,f&1),n===null)return hc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Tl(M,u,0,null),n=Kr(n,u,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Bc(a),i.memoizedState=zc,n):Hc(i,M));if(f=n.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return Sv(n,i,M,u,D,f,a);if(p){p=u.fallback,M=i.mode,f=n.child,D=f.sibling;var O={mode:"hidden",children:u.children};return!(M&1)&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=Sr(f,O),u.subtreeFlags=f.subtreeFlags&14680064),D!==null?p=Sr(D,p):(p=Kr(p,M,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=n.child.memoizedState,M=M===null?Bc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=n.childLanes&~a,i.memoizedState=zc,u}return p=n.child,n=p.sibling,u=Sr(p,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Hc(n,i){return i=Tl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function fl(n,i,a,u){return u!==null&&pc(u),Ps(i,n.child,null,a),n=Hc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Sv(n,i,a,u,f,p,M){if(a)return i.flags&256?(i.flags&=-257,u=Uc(Error(t(422))),fl(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=Tl({mode:"visible",children:u.children},f,0,null),p=Kr(p,f,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,i.mode&1&&Ps(i,n.child,null,M),i.child.memoizedState=Bc(M),i.memoizedState=zc,p);if(!(i.mode&1))return fl(n,i,M,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var D=u.dgst;return u=D,p=Error(t(419)),u=Uc(p,u,void 0),fl(n,i,M,u)}if(D=(M&n.childLanes)!==0,In||D){if(u=on,u!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(u.suspendedLanes|M)?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Oi(n,f),fi(u,n,f,-1))}return rf(),u=Uc(Error(t(421))),fl(n,i,M,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Iv.bind(null,n),f._reactRetry=i,null):(n=p.treeContext,Gn=cr(f.nextSibling),Vn=i,Bt=!0,oi=null,n!==null&&(qn[$n++]=Ui,qn[$n++]=Fi,qn[$n++]=Hr,Ui=n.id,Fi=n.overflow,Hr=i),i=Hc(i,u.children),i.flags|=4096,i)}function im(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),vc(n.return,i,a)}function Vc(n,i,a,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=f)}function rm(n,i,a){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(An(n,i,u.children,a),u=Ht.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,a,i);else if(n.tag===19)im(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(Ht,u),!(i.mode&1))i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&rl(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Vc(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&rl(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Vc(i,!0,a,null,p);break;case"together":Vc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function dl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),jr|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Sr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Sr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Mv(n,i,a){switch(i.tag){case 3:em(i),bs();break;case 5:vp(i);break;case 1:Nn(i.type)&&qo(i);break;case 4:Sc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;It(el,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):a&i.child.childLanes?nm(n,i,a):(It(Ht,Ht.current&1),n=zi(n,i,a),n!==null?n.sibling:null);It(Ht,Ht.current&1);break;case 19:if(u=(a&i.childLanes)!==0,n.flags&128){if(u)return rm(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,Zp(n,i,a)}return zi(n,i,a)}var sm,Gc,am,om;sm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Gc=function(){},am=function(n,i,a,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,Wr(Ei.current);var p=null;switch(a){case"input":f=k(n,f),u=k(n,u),p=[];break;case"select":f=re({},f,{value:void 0}),u=re({},u,{value:void 0}),p=[];break;case"textarea":f=E(n,f),u=E(n,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Xo)}dt(a,u);var M;a=null;for(te in f)if(!u.hasOwnProperty(te)&&f.hasOwnProperty(te)&&f[te]!=null)if(te==="style"){var D=f[te];for(M in D)D.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in u){var O=u[te];if(D=f!=null?f[te]:void 0,u.hasOwnProperty(te)&&O!==D&&(O!=null||D!=null))if(te==="style")if(D){for(M in D)!D.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in O)O.hasOwnProperty(M)&&D[M]!==O[M]&&(a||(a={}),a[M]=O[M])}else a||(p||(p=[]),p.push(te,a)),a=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(p=p||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(p=p||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Ft("scroll",n),p||D===O||(p=[])):(p=p||[]).push(te,O))}a&&(p=p||[]).push("style",a);var te=p;(i.updateQueue=te)&&(i.flags|=4)}},om=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ka(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Ev(n,i,a){var u=i.pendingProps;switch(fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Nn(i.type)&&Yo(),xn(i),null;case 3:return u=i.stateNode,Ns(),Ot(Dn),Ot(_n),Tc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Qo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,oi!==null&&(ef(oi),oi=null))),Gc(n,i),xn(i),null;case 5:Mc(i);var f=Wr(Xa.current);if(a=i.type,n!==null&&i.stateNode!=null)am(n,i,a,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return xn(i),null}if(n=Wr(Ei.current),Qo(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[Mi]=i,u[Ba]=p,n=(i.mode&1)!==0,a){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(f=0;f<Oa.length;f++)Ft(Oa[f],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":En(u,p),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",u);break;case"textarea":Q(u,p),Ft("invalid",u)}dt(a,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?u.textContent!==D&&(p.suppressHydrationWarning!==!0&&Wo(u.textContent,D,n),f=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&Wo(u.textContent,D,n),f=["children",""+D]):o.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ft("scroll",u)}switch(a){case"input":yt(u),Ye(u,p,!0);break;case"textarea":yt(u),ve(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Xo)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(a,{is:u.is}):(n=M.createElement(a),a==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,a),n[Mi]=i,n[Ba]=u,sm(n,i,!1,!1),i.stateNode=n;e:{switch(M=rt(a,u),a){case"dialog":Ft("cancel",n),Ft("close",n),f=u;break;case"iframe":case"object":case"embed":Ft("load",n),f=u;break;case"video":case"audio":for(f=0;f<Oa.length;f++)Ft(Oa[f],n);f=u;break;case"source":Ft("error",n),f=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),f=u;break;case"details":Ft("toggle",n),f=u;break;case"input":En(n,u),f=k(n,u),Ft("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=re({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":Q(n,u),f=E(n,u),Ft("invalid",n);break;default:f=u}dt(a,f),D=f;for(p in D)if(D.hasOwnProperty(p)){var O=D[p];p==="style"?et(n,O):p==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(n,O)):p==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&ct(n,O):typeof O=="number"&&ct(n,""+O):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?O!=null&&p==="onScroll"&&Ft("scroll",n):O!=null&&L(n,p,O,M))}switch(a){case"input":yt(n),Ye(n,u,!1);break;case"textarea":yt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?P(n,!!u.multiple,p,!1):u.defaultValue!=null&&P(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Xo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(n&&i.stateNode!=null)om(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Wr(Xa.current),Wr(Ei.current),Qo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Mi]=i,(p=u.nodeValue!==a)&&(n=Vn,n!==null))switch(n.tag){case 3:Wo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wo(u.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Mi]=i,i.stateNode=u}return xn(i),null;case 13:if(Ot(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Gn!==null&&i.mode&1&&!(i.flags&128))cp(),bs(),i.flags|=98560,p=!1;else if(p=Qo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Mi]=i}else bs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;xn(i),p=!1}else oi!==null&&(ef(oi),oi=null),p=!0;if(!p)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Ht.current&1?en===0&&(en=3):rf())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return Ns(),Gc(n,i),n===null&&ka(i.stateNode.containerInfo),xn(i),null;case 10:return _c(i.type._context),xn(i),null;case 17:return Nn(i.type)&&Yo(),xn(i),null;case 19:if(Ot(Ht),p=i.memoizedState,p===null)return xn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)Ka(p,!1);else{if(en!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=rl(n),M!==null){for(i.flags|=128,Ka(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,n=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,n=M.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Ht,Ht.current&1|2),i.child}n=n.sibling}p.tail!==null&&$()>Os&&(i.flags|=128,u=!0,Ka(p,!1),i.lanes=4194304)}else{if(!u)if(n=rl(M),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ka(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Bt)return xn(i),null}else 2*$()-p.renderingStartTime>Os&&a!==1073741824&&(i.flags|=128,u=!0,Ka(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(a=p.last,a!==null?a.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=$(),i.sibling=null,a=Ht.current,It(Ht,u?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return nf(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Wn&1073741824&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Tv(n,i){switch(fc(i),i.tag){case 1:return Nn(i.type)&&Yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ns(),Ot(Dn),Ot(_n),Tc(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Mc(i),null;case 13:if(Ot(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return Ns(),null;case 10:return _c(i.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var hl=!1,yn=!1,wv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Us(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(n,i,u)}else a.current=null}function Wc(n,i,a){try{a()}catch(u){Xt(n,i,u)}}var lm=!1;function Av(n,i){if(nc=No,n=Bh(),qu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var M=0,D=-1,O=-1,te=0,xe=0,Se=n,_e=null;t:for(;;){for(var Ue;Se!==a||f!==0&&Se.nodeType!==3||(D=M+f),Se!==p||u!==0&&Se.nodeType!==3||(O=M+u),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)_e=Se,Se=Ue;for(;;){if(Se===n)break t;if(_e===a&&++te===f&&(D=M),_e===p&&++xe===u&&(O=M),(Ue=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Ue}a=D===-1||O===-1?null:{start:D,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(ic={focusedElem:n,selectionRange:a},No=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var He=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Yt=He.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:li(i.type,Ge),Yt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return He=lm,lm=!1,He}function Za(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&Wc(i,a,p)}f=f.next}while(f!==u)}}function pl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Xc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function um(n){var i=n.alternate;i!==null&&(n.alternate=null,um(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[Ba],delete i[oc],delete i[lv],delete i[uv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cm(n){return n.tag===5||n.tag===3||n.tag===4}function fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Xo));else if(u!==4&&(n=n.child,n!==null))for(jc(n,i,a),n=n.sibling;n!==null;)jc(n,i,a),n=n.sibling}function Yc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Yc(n,i,a),n=n.sibling;n!==null;)Yc(n,i,a),n=n.sibling}var hn=null,ui=!1;function gr(n,i,a){for(a=a.child;a!==null;)dm(n,i,a),a=a.sibling}function dm(n,i,a){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 5:yn||Us(a,i);case 6:var u=hn,f=ui;hn=null,gr(n,i,a),hn=u,ui=f,hn!==null&&(ui?(n=hn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(ui?(n=hn,a=a.stateNode,n.nodeType===8?ac(n.parentNode,a):n.nodeType===1&&ac(n,a),ba(n)):ac(hn,a.stateNode));break;case 4:u=hn,f=ui,hn=a.stateNode.containerInfo,ui=!0,gr(n,i,a),hn=u,ui=f;break;case 0:case 11:case 14:case 15:if(!yn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&(p&2||p&4)&&Wc(a,i,M),f=f.next}while(f!==u)}gr(n,i,a);break;case 1:if(!yn&&(Us(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(D){Xt(a,i,D)}gr(n,i,a);break;case 21:gr(n,i,a);break;case 22:a.mode&1?(yn=(u=yn)||a.memoizedState!==null,gr(n,i,a),yn=u):gr(n,i,a);break;default:gr(n,i,a)}}function hm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new wv),i.forEach(function(u){var f=Uv.bind(null,n,u);a.has(u)||(a.add(u),u.then(f,f))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var p=n,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:hn=D.stateNode,ui=!1;break e;case 3:hn=D.stateNode.containerInfo,ui=!0;break e;case 4:hn=D.stateNode.containerInfo,ui=!0;break e}D=D.return}if(hn===null)throw Error(t(160));dm(p,M,f),hn=null,ui=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(te){Xt(f,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pm(i,n),i=i.sibling}function pm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),wi(n),u&4){try{Za(3,n,n.return),pl(3,n)}catch(Ge){Xt(n,n.return,Ge)}try{Za(5,n,n.return)}catch(Ge){Xt(n,n.return,Ge)}}break;case 1:ci(i,n),wi(n),u&512&&a!==null&&Us(a,a.return);break;case 5:if(ci(i,n),wi(n),u&512&&a!==null&&Us(a,a.return),n.flags&32){var f=n.stateNode;try{ct(f,"")}catch(Ge){Xt(n,n.return,Ge)}}if(u&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,M=a!==null?a.memoizedProps:p,D=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&pt(f,p),rt(D,M);var te=rt(D,p);for(M=0;M<O.length;M+=2){var xe=O[M],Se=O[M+1];xe==="style"?et(f,Se):xe==="dangerouslySetInnerHTML"?Fe(f,Se):xe==="children"?ct(f,Se):L(f,xe,Se,te)}switch(D){case"input":ft(f,p);break;case"textarea":me(f,p);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ue=p.value;Ue!=null?P(f,!!p.multiple,Ue,!1):_e!==!!p.multiple&&(p.defaultValue!=null?P(f,!!p.multiple,p.defaultValue,!0):P(f,!!p.multiple,p.multiple?[]:"",!1))}f[Ba]=p}catch(Ge){Xt(n,n.return,Ge)}}break;case 6:if(ci(i,n),wi(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(Ge){Xt(n,n.return,Ge)}}break;case 3:if(ci(i,n),wi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(Ge){Xt(n,n.return,Ge)}break;case 4:ci(i,n),wi(n);break;case 13:ci(i,n),wi(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Kc=$())),u&4&&hm(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(yn=(te=yn)||xe,ci(i,n),yn=te):ci(i,n),wi(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!xe&&n.mode&1)for(Oe=n,xe=n.child;xe!==null;){for(Se=Oe=xe;Oe!==null;){switch(_e=Oe,Ue=_e.child,_e.tag){case 0:case 11:case 14:case 15:Za(4,_e,_e.return);break;case 1:Us(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){u=_e,a=_e.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Xt(u,a,Ge)}}break;case 5:Us(_e,_e.return);break;case 22:if(_e.memoizedState!==null){_m(Se);continue}}Ue!==null?(Ue.return=_e,Oe=Ue):_m(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{f=Se.stateNode,te?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Se.stateNode,O=Se.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=Ke("display",M))}catch(Ge){Xt(n,n.return,Ge)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=te?"":Se.memoizedProps}catch(Ge){Xt(n,n.return,Ge)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ci(i,n),wi(n),u&4&&hm(n);break;case 21:break;default:ci(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(cm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(ct(f,""),u.flags&=-33);var p=fm(n);Yc(n,p,f);break;case 3:case 4:var M=u.stateNode.containerInfo,D=fm(n);jc(n,D,M);break;default:throw Error(t(161))}}catch(O){Xt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Cv(n,i,a){Oe=n,mm(n)}function mm(n,i,a){for(var u=(n.mode&1)!==0;Oe!==null;){var f=Oe,p=f.child;if(f.tag===22&&u){var M=f.memoizedState!==null||hl;if(!M){var D=f.alternate,O=D!==null&&D.memoizedState!==null||yn;D=hl;var te=yn;if(hl=M,(yn=O)&&!te)for(Oe=f;Oe!==null;)M=Oe,O=M.child,M.tag===22&&M.memoizedState!==null?vm(f):O!==null?(O.return=M,Oe=O):vm(f);for(;p!==null;)Oe=p,mm(p),p=p.sibling;Oe=f,hl=D,yn=te}gm(n)}else f.subtreeFlags&8772&&p!==null?(p.return=f,Oe=p):gm(n)}}function gm(n){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:yn||pl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!yn)if(a===null)u.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:li(i.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&_p(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}_p(i,M,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var xe=te.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&ba(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&Xc(i)}catch(_e){Xt(i,i.return,_e)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function _m(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function vm(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{pl(4,i)}catch(O){Xt(i,a,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(O){Xt(i,f,O)}}var p=i.return;try{Xc(i)}catch(O){Xt(i,p,O)}break;case 5:var M=i.return;try{Xc(i)}catch(O){Xt(i,M,O)}}}catch(O){Xt(i,i.return,O)}if(i===n){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var Rv=Math.ceil,ml=R.ReactCurrentDispatcher,qc=R.ReactCurrentOwner,Qn=R.ReactCurrentBatchConfig,Et=0,on=null,$t=null,pn=0,Wn=0,Fs=fr(0),en=0,Qa=null,jr=0,gl=0,$c=0,Ja=null,Un=null,Kc=0,Os=1/0,Bi=null,_l=!1,Zc=null,_r=null,vl=!1,vr=null,xl=0,eo=0,Qc=null,yl=-1,Sl=0;function Cn(){return Et&6?$():yl!==-1?yl:yl=$()}function xr(n){return n.mode&1?Et&2&&pn!==0?pn&-pn:fv.transition!==null?(Sl===0&&(Sl=Dt()),Sl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:yh(n.type)),n):1}function fi(n,i,a,u){if(50<eo)throw eo=0,Qc=null,Error(t(185));rn(n,a,u),(!(Et&2)||n!==on)&&(n===on&&(!(Et&2)&&(gl|=a),en===4&&yr(n,pn)),Fn(n,u),a===1&&Et===0&&!(i.mode&1)&&(Os=$()+500,$o&&hr()))}function Fn(n,i){var a=n.callbackNode;wn(n,i);var u=mn(n,n===on?pn:0);if(u===0)a!==null&&w(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&w(a),i===1)n.tag===0?cv(ym.bind(null,n)):sp(ym.bind(null,n)),av(function(){!(Et&6)&&hr()}),a=null;else{switch(Si(u)){case 1:a=Me;break;case 4:a=be;break;case 16:a=Ie;break;case 536870912:a=tt;break;default:a=Ie}a=Rm(a,xm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function xm(n,i){if(yl=-1,Sl=0,Et&6)throw Error(t(327));var a=n.callbackNode;if(ks()&&n.callbackNode!==a)return null;var u=mn(n,n===on?pn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=Ml(n,u);else{i=u;var f=Et;Et|=2;var p=Mm();(on!==n||pn!==i)&&(Bi=null,Os=$()+500,qr(n,i));do try{Lv();break}catch(D){Sm(n,D)}while(!0);gc(),ml.current=p,Et=f,$t!==null?i=0:(on=null,pn=0,i=en)}if(i!==0){if(i===2&&(f=Di(n),f!==0&&(u=f,i=Jc(n,f))),i===1)throw a=Qa,qr(n,0),yr(n,u),Fn(n,$()),a;if(i===6)yr(n,u);else{if(f=n.current.alternate,!(u&30)&&!bv(f)&&(i=Ml(n,u),i===2&&(p=Di(n),p!==0&&(u=p,i=Jc(n,p))),i===1))throw a=Qa,qr(n,0),yr(n,u),Fn(n,$()),a;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:$r(n,Un,Bi);break;case 3:if(yr(n,u),(u&130023424)===u&&(i=Kc+500-$(),10<i)){if(mn(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=sc($r.bind(null,n,Un,Bi),i);break}$r(n,Un,Bi);break;case 4:if(yr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var M=31-at(u);p=1<<M,M=i[M],M>f&&(f=M),u&=~p}if(u=f,u=$()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Rv(u/1960))-u,10<u){n.timeoutHandle=sc($r.bind(null,n,Un,Bi),u);break}$r(n,Un,Bi);break;case 5:$r(n,Un,Bi);break;default:throw Error(t(329))}}}return Fn(n,$()),n.callbackNode===a?xm.bind(null,n):null}function Jc(n,i){var a=Ja;return n.current.memoizedState.isDehydrated&&(qr(n,i).flags|=256),n=Ml(n,i),n!==2&&(i=Un,Un=a,i!==null&&ef(i)),n}function ef(n){Un===null?Un=n:Un.push.apply(Un,n)}function bv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],p=f.getSnapshot;f=f.value;try{if(!ai(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~$c,i&=~gl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-at(i),u=1<<a;n[a]=-1,i&=~u}}function ym(n){if(Et&6)throw Error(t(327));ks();var i=mn(n,0);if(!(i&1))return Fn(n,$()),null;var a=Ml(n,i);if(n.tag!==0&&a===2){var u=Di(n);u!==0&&(i=u,a=Jc(n,u))}if(a===1)throw a=Qa,qr(n,0),yr(n,i),Fn(n,$()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,$r(n,Un,Bi),Fn(n,$()),null}function tf(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(Os=$()+500,$o&&hr())}}function Yr(n){vr!==null&&vr.tag===0&&!(Et&6)&&ks();var i=Et;Et|=1;var a=Qn.transition,u=Mt;try{if(Qn.transition=null,Mt=1,n)return n()}finally{Mt=u,Qn.transition=a,Et=i,!(Et&6)&&hr()}}function nf(){Wn=Fs.current,Ot(Fs)}function qr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,sv(a)),$t!==null)for(a=$t.return;a!==null;){var u=a;switch(fc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Yo();break;case 3:Ns(),Ot(Dn),Ot(_n),Tc();break;case 5:Mc(u);break;case 4:Ns();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:_c(u.type._context);break;case 22:case 23:nf()}a=a.return}if(on=n,$t=n=Sr(n.current,null),pn=Wn=i,en=0,Qa=null,$c=gl=jr=0,Un=Ja=null,Gr!==null){for(i=0;i<Gr.length;i++)if(a=Gr[i],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,p=a.pending;if(p!==null){var M=p.next;p.next=f,u.next=M}a.pending=u}Gr=null}return n}function Sm(n,i){do{var a=$t;try{if(gc(),sl.current=ul,al){for(var u=Vt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}al=!1}if(Xr=0,an=Jt=Vt=null,ja=!1,Ya=0,qc.current=null,a===null||a.return===null){en=1,Qa=i,$t=null;break}e:{var p=n,M=a.return,D=a,O=i;if(i=pn,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,xe=D,Se=xe.tag;if(!(xe.mode&1)&&(Se===0||Se===11||Se===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=jp(M);if(Ue!==null){Ue.flags&=-257,Yp(Ue,M,D,p,i),Ue.mode&1&&Xp(p,te,i),i=Ue,O=te;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(O),i.updateQueue=Ge}else He.add(O);break e}else{if(!(i&1)){Xp(p,te,i),rf();break e}O=Error(t(426))}}else if(Bt&&D.mode&1){var Yt=jp(M);if(Yt!==null){!(Yt.flags&65536)&&(Yt.flags|=256),Yp(Yt,M,D,p,i),pc(Is(O,D));break e}}p=O=Is(O,D),en!==4&&(en=2),Ja===null?Ja=[p]:Ja.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=Gp(p,O,i);gp(p,q);break e;case 1:D=O;var V=p.type,K=p.stateNode;if(!(p.flags&128)&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(_r===null||!_r.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=Wp(p,D,i);gp(p,Te);break e}}p=p.return}while(p!==null)}Tm(a)}catch(je){i=je,$t===a&&a!==null&&($t=a=a.return);continue}break}while(!0)}function Mm(){var n=ml.current;return ml.current=ul,n===null?ul:n}function rf(){(en===0||en===3||en===2)&&(en=4),on===null||!(jr&268435455)&&!(gl&268435455)||yr(on,pn)}function Ml(n,i){var a=Et;Et|=2;var u=Mm();(on!==n||pn!==i)&&(Bi=null,qr(n,i));do try{Pv();break}catch(f){Sm(n,f)}while(!0);if(gc(),Et=a,ml.current=u,$t!==null)throw Error(t(261));return on=null,pn=0,en}function Pv(){for(;$t!==null;)Em($t)}function Lv(){for(;$t!==null&&!W();)Em($t)}function Em(n){var i=Cm(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,i===null?Tm(n):$t=i,qc.current=null}function Tm(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=Tv(a,i),a!==null){a.flags&=32767,$t=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,$t=null;return}}else if(a=Ev(a,i,Wn),a!==null){$t=a;return}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);en===0&&(en=5)}function $r(n,i,a){var u=Mt,f=Qn.transition;try{Qn.transition=null,Mt=1,Dv(n,i,a,u)}finally{Qn.transition=f,Mt=u}return null}function Dv(n,i,a,u){do ks();while(vr!==null);if(Et&6)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(dn(n,p),n===on&&($t=on=null,pn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||vl||(vl=!0,Rm(Ie,function(){return ks(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=Qn.transition,Qn.transition=null;var M=Mt;Mt=1;var D=Et;Et|=4,qc.current=null,Av(n,a),pm(a,n),Q_(ic),No=!!nc,ic=nc=null,n.current=a,Cv(a),ee(),Et=D,Mt=M,Qn.transition=p}else n.current=a;if(vl&&(vl=!1,vr=n,xl=f),p=n.pendingLanes,p===0&&(_r=null),gt(a.stateNode),Fn(n,$()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(_l)throw _l=!1,n=Zc,Zc=null,n;return xl&1&&n.tag!==0&&ks(),p=n.pendingLanes,p&1?n===Qc?eo++:(eo=0,Qc=n):eo=0,hr(),null}function ks(){if(vr!==null){var n=Si(xl),i=Qn.transition,a=Mt;try{if(Qn.transition=null,Mt=16>n?16:n,vr===null)var u=!1;else{if(n=vr,vr=null,xl=0,Et&6)throw Error(t(331));var f=Et;for(Et|=4,Oe=n.current;Oe!==null;){var p=Oe,M=p.child;if(Oe.flags&16){var D=p.deletions;if(D!==null){for(var O=0;O<D.length;O++){var te=D[O];for(Oe=te;Oe!==null;){var xe=Oe;switch(xe.tag){case 0:case 11:case 15:Za(8,xe,p)}var Se=xe.child;if(Se!==null)Se.return=xe,Oe=Se;else for(;Oe!==null;){xe=Oe;var _e=xe.sibling,Ue=xe.return;if(um(xe),xe===te){Oe=null;break}if(_e!==null){_e.return=Ue,Oe=_e;break}Oe=Ue}}}var He=p.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Yt=Ge.sibling;Ge.sibling=null,Ge=Yt}while(Ge!==null)}}Oe=p}}if(p.subtreeFlags&2064&&M!==null)M.return=p,Oe=M;else e:for(;Oe!==null;){if(p=Oe,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Za(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,Oe=q;break e}Oe=p.return}}var V=n.current;for(Oe=V;Oe!==null;){M=Oe;var K=M.child;if(M.subtreeFlags&2064&&K!==null)K.return=M,Oe=K;else e:for(M=V;Oe!==null;){if(D=Oe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:pl(9,D)}}catch(je){Xt(D,D.return,je)}if(D===M){Oe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Oe=Te;break e}Oe=D.return}}if(Et=f,hr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,n)}catch{}u=!0}return u}finally{Mt=a,Qn.transition=i}}return!1}function wm(n,i,a){i=Is(a,i),i=Gp(n,i,1),n=mr(n,i,1),i=Cn(),n!==null&&(rn(n,1,i),Fn(n,i))}function Xt(n,i,a){if(n.tag===3)wm(n,n,a);else for(;i!==null;){if(i.tag===3){wm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(_r===null||!_r.has(u))){n=Is(a,n),n=Wp(i,n,1),i=mr(i,n,1),n=Cn(),i!==null&&(rn(i,1,n),Fn(i,n));break}}i=i.return}}function Nv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(pn&a)===a&&(en===4||en===3&&(pn&130023424)===pn&&500>$()-Kc?qr(n,0):$c|=a),Fn(n,i)}function Am(n,i){i===0&&(n.mode&1?(i=Wt,Wt<<=1,!(Wt&130023424)&&(Wt=4194304)):i=1);var a=Cn();n=Oi(n,i),n!==null&&(rn(n,i,a),Fn(n,a))}function Iv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Am(n,a)}function Uv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Am(n,a)}var Cm;Cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Dn.current)In=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return In=!1,Mv(n,i,a);In=!!(n.flags&131072)}else In=!1,Bt&&i.flags&1048576&&ap(i,Zo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;dl(n,i),n=i.pendingProps;var f=As(i,_n.current);Ds(i,a),f=Cc(null,i,u,n,f,a);var p=Rc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(u)?(p=!0,qo(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,yc(i),f.updater=cl,i.stateNode=f,f._reactInternals=i,Ic(i,u,n,a),i=kc(null,i,u,!0,p,a)):(i.tag=0,Bt&&p&&cc(i),An(null,i,f,a),i=i.child),i;case 16:u=i.elementType;e:{switch(dl(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=Ov(u),n=li(u,n),f){case 0:i=Oc(null,i,u,n,a);break e;case 1:i=Jp(null,i,u,n,a);break e;case 11:i=qp(null,i,u,n,a);break e;case 14:i=$p(null,i,u,li(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),Oc(n,i,u,f,a);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),Jp(n,i,u,f,a);case 3:e:{if(em(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,f=p.element,mp(n,i),il(i,u,null,a);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Is(Error(t(423)),i),i=tm(n,i,u,a,f);break e}else if(u!==f){f=Is(Error(t(424)),i),i=tm(n,i,u,a,f);break e}else for(Gn=cr(i.stateNode.containerInfo.firstChild),Vn=i,Bt=!0,oi=null,a=hp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),u===f){i=zi(n,i,a);break e}An(n,i,u,a)}i=i.child}return i;case 5:return vp(i),n===null&&hc(i),u=i.type,f=i.pendingProps,p=n!==null?n.memoizedProps:null,M=f.children,rc(u,f)?M=null:p!==null&&rc(u,p)&&(i.flags|=32),Qp(n,i),An(n,i,M,a),i.child;case 6:return n===null&&hc(i),null;case 13:return nm(n,i,a);case 4:return Sc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ps(i,null,u,a):An(n,i,u,a),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),qp(n,i,u,f,a);case 7:return An(n,i,i.pendingProps,a),i.child;case 8:return An(n,i,i.pendingProps.children,a),i.child;case 12:return An(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,It(el,u._currentValue),u._currentValue=M,p!==null)if(ai(p.value,M)){if(p.children===f.children&&!Dn.current){i=zi(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var O=D.firstContext;O!==null;){if(O.context===u){if(p.tag===1){O=ki(-1,a&-a),O.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var xe=te.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),te.pending=O}}p.lanes|=a,O=p.alternate,O!==null&&(O.lanes|=a),vc(p.return,a,i),D.lanes|=a;break}O=O.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(t(341));M.lanes|=a,D=M.alternate,D!==null&&(D.lanes|=a),vc(M,a,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}An(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Ds(i,a),f=Kn(f),u=u(f),i.flags|=1,An(n,i,u,a),i.child;case 14:return u=i.type,f=li(u,i.pendingProps),f=li(u.type,f),$p(n,i,u,f,a);case 15:return Kp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),dl(n,i),i.tag=1,Nn(u)?(n=!0,qo(i)):n=!1,Ds(i,a),Hp(i,u,f),Ic(i,u,f,a),kc(null,i,u,!0,n,a);case 19:return rm(n,i,a);case 22:return Zp(n,i,a)}throw Error(t(156,i.tag))};function Rm(n,i){return Po(n,i)}function Fv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,u){return new Fv(n,i,a,u)}function sf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ov(n){if(typeof n=="function")return sf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===pe)return 14}return 2}function Sr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function El(n,i,a,u,f,p){var M=2;if(u=n,typeof n=="function")sf(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case N:return Kr(a.children,f,p,i);case X:M=8,f|=8;break;case b:return n=Jn(12,a,i,f|2),n.elementType=b,n.lanes=p,n;case ne:return n=Jn(13,a,i,f),n.elementType=ne,n.lanes=p,n;case fe:return n=Jn(19,a,i,f),n.elementType=fe,n.lanes=p,n;case ue:return Tl(a,f,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case B:M=9;break e;case le:M=11;break e;case pe:M=14;break e;case oe:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(M,a,i,f),i.elementType=n,i.type=u,i.lanes=p,i}function Kr(n,i,a,u){return n=Jn(7,n,u,i),n.lanes=a,n}function Tl(n,i,a,u){return n=Jn(22,n,u,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function af(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function of(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function kv(n,i,a,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function lf(n,i,a,u,f,p,M,D,O){return n=new kv(n,i,a,D,O),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Jn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(p),n}function zv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function bm(n){if(!n)return dr;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Nn(a))return ip(n,a,i)}return i}function Pm(n,i,a,u,f,p,M,D,O){return n=lf(a,u,!0,n,f,p,M,D,O),n.context=bm(null),a=n.current,u=Cn(),f=xr(a),p=ki(u,f),p.callback=i??null,mr(a,p,f),n.current.lanes=f,rn(n,f,u),Fn(n,u),n}function wl(n,i,a,u){var f=i.current,p=Cn(),M=xr(f);return a=bm(a),i.context===null?i.context=a:i.pendingContext=a,i=ki(p,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=mr(f,i,M),n!==null&&(fi(n,f,M,p),nl(n,f,M)),M}function Al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function uf(n,i){Lm(n,i),(n=n.alternate)&&Lm(n,i)}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function cf(n){this._internalRoot=n}Cl.prototype.render=cf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));wl(n,i,null,null)},Cl.prototype.unmount=cf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Yr(function(){wl(null,n,null,null)}),i[Ni]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=mh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,n),a===0&&vh(n)}};function ff(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function Bv(n,i,a,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var te=Al(M);p.call(te)}}var M=Pm(i,u,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=M,n[Ni]=M.current,ka(n.nodeType===8?n.parentNode:n),Yr(),M}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var D=u;u=function(){var te=Al(O);D.call(te)}}var O=lf(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=O,n[Ni]=O.current,ka(n.nodeType===8?n.parentNode:n),Yr(function(){wl(i,O,a,u)}),O}function bl(n,i,a,u,f){var p=a._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var D=f;f=function(){var O=Al(M);D.call(O)}}wl(i,M,n,f)}else M=Bv(a,i,n,f,u);return Al(M)}hh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=mt(i.pendingLanes);a!==0&&(sn(i,a|1),Fn(i,$()),!(Et&6)&&(Os=$()+500,hr()))}break;case 13:Yr(function(){var u=Oi(n,1);if(u!==null){var f=Cn();fi(u,n,1,f)}}),uf(n,1)}},Uu=function(n){if(n.tag===13){var i=Oi(n,134217728);if(i!==null){var a=Cn();fi(i,n,134217728,a)}uf(n,134217728)}},ph=function(n){if(n.tag===13){var i=xr(n),a=Oi(n,i);if(a!==null){var u=Cn();fi(a,n,i,u)}uf(n,i)}},mh=function(){return Mt},gh=function(n,i){var a=Mt;try{return Mt=n,i()}finally{Mt=a}},Re=function(n,i,a){switch(i){case"input":if(ft(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var f=jo(u);if(!f)throw Error(t(90));it(u),ft(u,f)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&P(n,!!a.multiple,i,!1)}},Ut=tf,Qt=Yr;var Hv={usingClientEntryPoint:!1,Events:[Ha,Ts,jo,Le,st,tf]},to={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vv={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ro(n),n===null?null:n.stateNode},findFiberByHostInstance:to.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Je=Pl.inject(Vv),Ve=Pl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv,On.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(i))throw Error(t(200));return zv(n,i,null,a)},On.createRoot=function(n,i){if(!ff(n))throw Error(t(299));var a=!1,u="",f=Dm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=lf(n,1,!1,null,null,a,!1,u,f),n[Ni]=i.current,ka(n.nodeType===8?n.parentNode:n),new cf(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ro(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return Yr(n)},On.hydrate=function(n,i,a){if(!Rl(i))throw Error(t(200));return bl(null,n,i,!0,a)},On.hydrateRoot=function(n,i,a){if(!ff(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,f=!1,p="",M=Dm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=Pm(i,null,n,1,a??null,f,!1,p,M),n[Ni]=i.current,ka(n),u)for(n=0;n<u.length;n++)a=u[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Cl(i)},On.render=function(n,i,a){if(!Rl(i))throw Error(t(200));return bl(null,n,i,!1,a)},On.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?(Yr(function(){bl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},On.unstable_batchedUpdates=tf,On.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Rl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return bl(n,i,a,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var Hm;function Zv(){if(Hm)return pf.exports;Hm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pf.exports=Kv(),pf.exports}var Vm;function Qv(){if(Vm)return Ll;Vm=1;var r=Zv();return Ll.createRoot=r.createRoot,Ll.hydrateRoot=r.hydrateRoot,Ll}var Jv=Qv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="172",ex=0,Gm=1,tx=2,a0=1,nx=2,ji=3,Ir=0,zn=1,qi=2,Lr=0,oa=1,Wm=2,Xm=3,jm=4,ix=5,ss=100,rx=101,sx=102,ax=103,ox=104,lx=200,ux=201,cx=202,fx=203,ed=204,td=205,dx=206,hx=207,px=208,mx=209,gx=210,_x=211,vx=212,xx=213,yx=214,nd=0,id=1,rd=2,ca=3,sd=4,ad=5,od=6,ld=7,o0=0,Sx=1,Mx=2,Dr=0,Ex=1,Tx=2,wx=3,Ax=4,Cx=5,Rx=6,bx=7,l0=300,fa=301,da=302,ud=303,cd=304,Tu=306,fd=1e3,os=1001,dd=1002,_i=1003,Px=1004,Dl=1005,bi=1006,_f=1007,ls=1008,Ji=1009,u0=1010,c0=1011,mo=1012,Qd=1013,hs=1014,$i=1015,vo=1016,Jd=1017,eh=1018,ha=1020,f0=35902,d0=1021,h0=1022,gi=1023,p0=1024,m0=1025,la=1026,pa=1027,g0=1028,th=1029,_0=1030,nh=1031,ih=1033,ru=33776,su=33777,au=33778,ou=33779,hd=35840,pd=35841,md=35842,gd=35843,_d=36196,vd=37492,xd=37496,yd=37808,Sd=37809,Md=37810,Ed=37811,Td=37812,wd=37813,Ad=37814,Cd=37815,Rd=37816,bd=37817,Pd=37818,Ld=37819,Dd=37820,Nd=37821,lu=36492,Id=36494,Ud=36495,v0=36283,Fd=36284,Od=36285,kd=36286,Lx=3200,Dx=3201,Nx=0,Ix=1,Pr="",ti="srgb",ma="srgb-linear",mu="linear",Pt="srgb",zs=7680,Ym=519,Ux=512,Fx=513,Ox=514,x0=515,kx=516,zx=517,Bx=518,Hx=519,zd=35044,qm="300 es",Ki=2e3,gu=2001;class Ma{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vf=Math.PI/180,Bd=180/Math.PI;function Nr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function Vx(r,e){return(r%e+e)%e}function xf(r,e,t){return(1-t)*r+t*e}function Ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,s,o,l,c,d,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,h,m)}set(e,t,s,o,l,c,d,h,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[3],h=s[6],m=s[1],g=s[4],v=s[7],x=s[2],S=s[5],T=s[8],A=o[0],y=o[3],_=o[6],I=o[1],L=o[4],R=o[7],H=o[2],F=o[5],N=o[8];return l[0]=c*A+d*I+h*H,l[3]=c*y+d*L+h*F,l[6]=c*_+d*R+h*N,l[1]=m*A+g*I+v*H,l[4]=m*y+g*L+v*F,l[7]=m*_+g*R+v*N,l[2]=x*A+S*I+T*H,l[5]=x*y+S*L+T*F,l[8]=x*_+S*R+T*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8];return t*c*g-t*d*m-s*l*g+s*d*h+o*l*m-o*c*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],v=g*c-d*m,x=d*h-g*l,S=m*l-c*h,T=t*v+s*x+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(o*m-g*s)*A,e[2]=(d*s-o*c)*A,e[3]=x*A,e[4]=(g*t-o*h)*A,e[5]=(o*l-d*t)*A,e[6]=S*A,e[7]=(s*h-m*t)*A,e[8]=(c*t-s*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*c+m*d)+c+e,-o*m,o*h,-o*(-m*c+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(yf.makeScale(e,t)),this}rotate(e){return this.premultiply(yf.makeRotation(-e)),this}translate(e,t){return this.premultiply(yf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yf=new ot;function y0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function go(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gx(){const r=go("canvas");return r.style.display="block",r}const $m={};function ra(r){r in $m||($m[r]=!0,console.warn(r))}function Wx(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function Xx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Km=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){const r={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Pt&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(o.r=ua(o.r),o.g=ua(o.g),o.b=ua(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Pr?mu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ma]:{primaries:e,whitePoint:s,transfer:mu,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:Pt,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const wt=Yx();function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ua(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bs;class qx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=go("canvas")),Bs.width=e.width,Bs.height=e.height;const s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=go("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Qi(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Qi(t[s]/255)*255):t[s]=Qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $x=0;class S0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(Sf(o[c].image)):l.push(Sf(o[c]))}else l=Sf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Sf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kx=0;class Pn extends Ma{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,s=os,o=os,l=bi,c=ls,d=gi,h=Ji,m=Pn.DEFAULT_ANISOTROPY,g=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Nr(),this.name="",this.source=new S0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fd:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fd:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=l0;Pn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,s=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,m=h[0],g=h[4],v=h[8],x=h[1],S=h[5],T=h[9],A=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+A)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,R=(S+1)/2,H=(_+1)/2,F=(g+x)/4,N=(v+A)/4,X=(T+y)/4;return L>R&&L>H?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=F/s,l=N/s):R>H?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=F/o,l=X/o):H<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),s=N/l,o=X/l),this.set(s,o,l,t),this}let I=Math.sqrt((y-T)*(y-T)+(v-A)*(v-A)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(y-T)/I,this.y=(v-A)/I,this.z=(x-g)/I,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zx extends Ma{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Pn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new S0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends Zx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class M0 extends Pn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qx extends Pn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xo{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,d){let h=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];const x=l[c+0],S=l[c+1],T=l[c+2],A=l[c+3];if(d===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d===1){e[t+0]=x,e[t+1]=S,e[t+2]=T,e[t+3]=A;return}if(v!==A||h!==x||m!==S||g!==T){let y=1-d;const _=h*x+m*S+g*T+v*A,I=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const H=Math.sqrt(L),F=Math.atan2(H,_*I);y=Math.sin(y*F)/H,d=Math.sin(d*F)/H}const R=d*I;if(h=h*y+x*R,m=m*y+S*R,g=g*y+T*R,v=v*y+A*R,y===1-d){const H=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=H,m*=H,g*=H,v*=H}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,c){const d=s[o],h=s[o+1],m=s[o+2],g=s[o+3],v=l[c],x=l[c+1],S=l[c+2],T=l[c+3];return e[t]=d*T+g*v+h*S-m*x,e[t+1]=h*T+g*x+m*v-d*S,e[t+2]=m*T+g*S+d*x-h*v,e[t+3]=g*T-d*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(s/2),g=d(o/2),v=d(l/2),x=h(s/2),S=h(o/2),T=h(l/2);switch(c){case"XYZ":this._x=x*g*v+m*S*T,this._y=m*S*v-x*g*T,this._z=m*g*T+x*S*v,this._w=m*g*v-x*S*T;break;case"YXZ":this._x=x*g*v+m*S*T,this._y=m*S*v-x*g*T,this._z=m*g*T-x*S*v,this._w=m*g*v+x*S*T;break;case"ZXY":this._x=x*g*v-m*S*T,this._y=m*S*v+x*g*T,this._z=m*g*T+x*S*v,this._w=m*g*v-x*S*T;break;case"ZYX":this._x=x*g*v-m*S*T,this._y=m*S*v+x*g*T,this._z=m*g*T-x*S*v,this._w=m*g*v+x*S*T;break;case"YZX":this._x=x*g*v+m*S*T,this._y=m*S*v+x*g*T,this._z=m*g*T-x*S*v,this._w=m*g*v-x*S*T;break;case"XZY":this._x=x*g*v-m*S*T,this._y=m*S*v-x*g*T,this._z=m*g*T+x*S*v,this._w=m*g*v+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],d=t[5],h=t[9],m=t[2],g=t[6],v=t[10],x=s+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(c-o)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(g-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(l-m)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(c-o)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,d=t._x,h=t._y,m=t._z,g=t._w;return this._x=s*g+c*d+o*m-l*h,this._y=o*g+c*h+l*d-s*m,this._z=l*g+c*m+s*h-o*d,this._w=c*g-s*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let d=c*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,d),v=Math.sin((1-t)*g)/m,x=Math.sin(t*g)/m;return this._w=c*v+this._w*x,this._x=s*v+this._x*x,this._y=o*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*o-d*s),g=2*(d*t-l*o),v=2*(l*s-c*t);return this.x=t+h*m+c*v-d*g,this.y=s+h*g+d*m-l*v,this.z=o+h*v+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*c-s*h,this.z=s*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Mf.copy(this).projectOnVector(e),this.sub(Mf)}reflect(e){return this.sub(Mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mf=new ie,Qm=new xo;class yo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,di):di.fromBufferAttribute(l,c),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nl.copy(s.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Il.subVectors(this.max,io),Hs.subVectors(e.a,io),Vs.subVectors(e.b,io),Gs.subVectors(e.c,io),Er.subVectors(Vs,Hs),Tr.subVectors(Gs,Vs),Zr.subVectors(Hs,Gs);let t=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-Zr.z,Zr.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,Zr.z,0,-Zr.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-Zr.y,Zr.x,0];return!Ef(t,Hs,Vs,Gs,Il)||(t=[1,0,0,0,1,0,0,0,1],!Ef(t,Hs,Vs,Gs,Il))?!1:(Ul.crossVectors(Er,Tr),t=[Ul.x,Ul.y,Ul.z],Ef(t,Hs,Vs,Gs,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],di=new ie,Nl=new yo,Hs=new ie,Vs=new ie,Gs=new ie,Er=new ie,Tr=new ie,Zr=new ie,io=new ie,Il=new ie,Ul=new ie,Qr=new ie;function Ef(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){Qr.fromArray(r,l);const d=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),h=e.dot(Qr),m=t.dot(Qr),g=s.dot(Qr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const Jx=new yo,ro=new ie,Tf=new ie;class rh{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Jx.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(ro,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Tf)),this.expandByPoint(ro.copy(e.center).sub(Tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new ie,wf=new ie,Fl=new ie,wr=new ie,Af=new ie,Ol=new ie,Cf=new ie;class E0{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){wf.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(wf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Fl),d=wr.dot(this.direction),h=-wr.dot(Fl),m=wr.lengthSq(),g=Math.abs(1-c*c);let v,x,S,T;if(g>0)if(v=c*h-d,x=c*d-h,T=l*g,v>=0)if(x>=-T)if(x<=T){const A=1/g;v*=A,x*=A,S=v*(v+c*x+2*d)+x*(c*v+x+2*h)+m}else x=l,v=Math.max(0,-(c*x+d)),S=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(c*x+d)),S=-v*v+x*(x+2*h)+m;else x<=-T?(v=Math.max(0,-(-c*l+d)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m):x<=T?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+m):(v=Math.max(0,-(c*l+d)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m);else x=c>0?-l:l,v=Math.max(0,-(c*x+d)),S=-v*v+x*(x+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(wf).addScaledVector(Fl,x),S}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const s=Vi.dot(this.direction),o=Vi.dot(Vi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=s-c,h=s+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,d,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),v>=0?(d=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),s>h||d>o)||((d>s||s!==s)&&(s=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,s,o,l){Af.subVectors(t,e),Ol.subVectors(s,e),Cf.crossVectors(Af,Ol);let c=this.direction.dot(Cf),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;wr.subVectors(this.origin,e);const h=d*this.direction.dot(Ol.crossVectors(wr,Ol));if(h<0)return null;const m=d*this.direction.dot(Af.cross(wr));if(m<0||h+m>c)return null;const g=-d*wr.dot(Cf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,s,o,l,c,d,h,m,g,v,x,S,T,A,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,h,m,g,v,x,S,T,A,y)}set(e,t,s,o,l,c,d,h,m,g,v,x,S,T,A,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=o,_[1]=l,_[5]=c,_[9]=d,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=T,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Ws.setFromMatrixColumn(e,0).length(),l=1/Ws.setFromMatrixColumn(e,1).length(),c=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),h=Math.cos(o),m=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*v,T=d*g,A=d*v;t[0]=h*g,t[4]=-h*v,t[8]=m,t[1]=S+T*m,t[5]=x-A*m,t[9]=-d*h,t[2]=A-x*m,t[6]=T+S*m,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,T=m*g,A=m*v;t[0]=x+A*d,t[4]=T*d-S,t[8]=c*m,t[1]=c*v,t[5]=c*g,t[9]=-d,t[2]=S*d-T,t[6]=A+x*d,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,T=m*g,A=m*v;t[0]=x-A*d,t[4]=-c*v,t[8]=T+S*d,t[1]=S+T*d,t[5]=c*g,t[9]=A-x*d,t[2]=-c*m,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*v,T=d*g,A=d*v;t[0]=h*g,t[4]=T*m-S,t[8]=x*m+A,t[1]=h*v,t[5]=A*m+x,t[9]=S*m-T,t[2]=-m,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*m,T=d*h,A=d*m;t[0]=h*g,t[4]=A-x*v,t[8]=T*v+S,t[1]=v,t[5]=c*g,t[9]=-d*g,t[2]=-m*g,t[6]=S*v+T,t[10]=x-A*v}else if(e.order==="XZY"){const x=c*h,S=c*m,T=d*h,A=d*m;t[0]=h*g,t[4]=-v,t[8]=m*g,t[1]=x*v+A,t[5]=c*g,t[9]=S*v-T,t[2]=T*v-S,t[6]=d*g,t[10]=A*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ey,e,ty)}lookAt(e,t,s){const o=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Ar.crossVectors(s,Xn),Ar.lengthSq()===0&&(Math.abs(s.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Ar.crossVectors(s,Xn)),Ar.normalize(),kl.crossVectors(Xn,Ar),o[0]=Ar.x,o[4]=kl.x,o[8]=Xn.x,o[1]=Ar.y,o[5]=kl.y,o[9]=Xn.y,o[2]=Ar.z,o[6]=kl.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[4],h=s[8],m=s[12],g=s[1],v=s[5],x=s[9],S=s[13],T=s[2],A=s[6],y=s[10],_=s[14],I=s[3],L=s[7],R=s[11],H=s[15],F=o[0],N=o[4],X=o[8],b=o[12],C=o[1],B=o[5],le=o[9],ne=o[13],fe=o[2],pe=o[6],oe=o[10],ue=o[14],z=o[3],ae=o[7],re=o[11],U=o[15];return l[0]=c*F+d*C+h*fe+m*z,l[4]=c*N+d*B+h*pe+m*ae,l[8]=c*X+d*le+h*oe+m*re,l[12]=c*b+d*ne+h*ue+m*U,l[1]=g*F+v*C+x*fe+S*z,l[5]=g*N+v*B+x*pe+S*ae,l[9]=g*X+v*le+x*oe+S*re,l[13]=g*b+v*ne+x*ue+S*U,l[2]=T*F+A*C+y*fe+_*z,l[6]=T*N+A*B+y*pe+_*ae,l[10]=T*X+A*le+y*oe+_*re,l[14]=T*b+A*ne+y*ue+_*U,l[3]=I*F+L*C+R*fe+H*z,l[7]=I*N+L*B+R*pe+H*ae,l[11]=I*X+L*le+R*oe+H*re,l[15]=I*b+L*ne+R*ue+H*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],g=e[2],v=e[6],x=e[10],S=e[14],T=e[3],A=e[7],y=e[11],_=e[15];return T*(+l*h*v-o*m*v-l*d*x+s*m*x+o*d*S-s*h*S)+A*(+t*h*S-t*m*x+l*c*x-o*c*S+o*m*g-l*h*g)+y*(+t*m*v-t*d*S-l*c*v+s*c*S+l*d*g-s*m*g)+_*(-o*d*g-t*h*v+t*d*x+o*c*v-s*c*x+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],v=e[9],x=e[10],S=e[11],T=e[12],A=e[13],y=e[14],_=e[15],I=v*y*m-A*x*m+A*h*S-d*y*S-v*h*_+d*x*_,L=T*x*m-g*y*m-T*h*S+c*y*S+g*h*_-c*x*_,R=g*A*m-T*v*m+T*d*S-c*A*S-g*d*_+c*v*_,H=T*v*h-g*A*h-T*d*x+c*A*x+g*d*y-c*v*y,F=t*I+s*L+o*R+l*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=I*N,e[1]=(A*x*l-v*y*l-A*o*S+s*y*S+v*o*_-s*x*_)*N,e[2]=(d*y*l-A*h*l+A*o*m-s*y*m-d*o*_+s*h*_)*N,e[3]=(v*h*l-d*x*l-v*o*m+s*x*m+d*o*S-s*h*S)*N,e[4]=L*N,e[5]=(g*y*l-T*x*l+T*o*S-t*y*S-g*o*_+t*x*_)*N,e[6]=(T*h*l-c*y*l-T*o*m+t*y*m+c*o*_-t*h*_)*N,e[7]=(c*x*l-g*h*l+g*o*m-t*x*m-c*o*S+t*h*S)*N,e[8]=R*N,e[9]=(T*v*l-g*A*l-T*s*S+t*A*S+g*s*_-t*v*_)*N,e[10]=(c*A*l-T*d*l+T*s*m-t*A*m-c*s*_+t*d*_)*N,e[11]=(g*d*l-c*v*l-g*s*m+t*v*m+c*s*S-t*d*S)*N,e[12]=H*N,e[13]=(g*A*o-T*v*o+T*s*x-t*A*x-g*s*y+t*v*y)*N,e[14]=(T*d*o-c*A*o-T*s*h+t*A*h+c*s*y-t*d*y)*N,e[15]=(c*v*o-g*d*o+g*s*h-t*v*h-c*s*x+t*d*x)*N,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,d=e.y,h=e.z,m=l*c,g=l*d;return this.set(m*c+s,m*d-o*h,m*h+o*d,0,m*d+o*h,g*d+s,g*h-o*c,0,m*h-o*d,g*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,d=t._z,h=t._w,m=l+l,g=c+c,v=d+d,x=l*m,S=l*g,T=l*v,A=c*g,y=c*v,_=d*v,I=h*m,L=h*g,R=h*v,H=s.x,F=s.y,N=s.z;return o[0]=(1-(A+_))*H,o[1]=(S+R)*H,o[2]=(T-L)*H,o[3]=0,o[4]=(S-R)*F,o[5]=(1-(x+_))*F,o[6]=(y+I)*F,o[7]=0,o[8]=(T+L)*N,o[9]=(y-I)*N,o[10]=(1-(x+A))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Ws.set(o[0],o[1],o[2]).length();const c=Ws.set(o[4],o[5],o[6]).length(),d=Ws.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],hi.copy(this);const m=1/l,g=1/c,v=1/d;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,t.setFromRotationMatrix(hi),s.x=l,s.y=c,s.z=d,this}makePerspective(e,t,s,o,l,c,d=Ki){const h=this.elements,m=2*l/(t-e),g=2*l/(s-o),v=(t+e)/(t-e),x=(s+o)/(s-o);let S,T;if(d===Ki)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(d===gu)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,d=Ki){const h=this.elements,m=1/(t-e),g=1/(s-o),v=1/(c-l),x=(t+e)*m,S=(s+o)*g;let T,A;if(d===Ki)T=(c+l)*v,A=-2*v;else if(d===gu)T=l*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ws=new ie,hi=new jt,ey=new ie(0,0,0),ty=new ie(1,1,1),Ar=new ie,kl=new ie,Xn=new ie,Jm=new jt,eg=new xo;class er{constructor(e=0,t=0,s=0,o=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],h=o[1],m=o[5],g=o[9],v=o[2],x=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ny=0;const tg=new ie,Xs=new xo,Gi=new jt,zl=new ie,so=new ie,iy=new ie,ry=new xo,ng=new ie(1,0,0),ig=new ie(0,1,0),rg=new ie(0,0,1),sg={type:"added"},sy={type:"removed"},js={type:"childadded",child:null},Rf={type:"childremoved",child:null};class Bn extends Ma{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new ie,t=new er,s=new xo,o=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ot}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,t){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?zl.copy(e):zl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(so,zl,this.up):Gi.lookAt(zl,so,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Xs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sg),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sy),Rf.child=e,this.dispatchEvent(Rf),Rf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sg),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=o,s;function c(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Bn.DEFAULT_UP=new ie(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new ie,Wi=new ie,bf=new ie,Xi=new ie,Ys=new ie,qs=new ie,ag=new ie,Pf=new ie,Lf=new ie,Df=new ie,Nf=new qt,If=new qt,Uf=new qt;class ii{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){pi.subVectors(o,t),Wi.subVectors(s,t),bf.subVectors(e,t);const c=pi.dot(pi),d=pi.dot(Wi),h=pi.dot(bf),m=Wi.dot(Wi),g=Wi.dot(bf),v=c*m-d*d;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(m*h-d*g)*x,T=(c*g-d*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,s,o,l,c,d,h){return this.getBarycoord(e,t,s,o,Xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Xi.x),h.addScaledVector(c,Xi.y),h.addScaledVector(d,Xi.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return Nf.setScalar(0),If.setScalar(0),Uf.setScalar(0),Nf.fromBufferAttribute(e,t),If.fromBufferAttribute(e,s),Uf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Nf,l.x),c.addScaledVector(If,l.y),c.addScaledVector(Uf,l.z),c}static isFrontFacing(e,t,s,o){return pi.subVectors(s,t),Wi.subVectors(e,t),pi.cross(Wi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),pi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return ii.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,d;Ys.subVectors(o,s),qs.subVectors(l,s),Pf.subVectors(e,s);const h=Ys.dot(Pf),m=qs.dot(Pf);if(h<=0&&m<=0)return t.copy(s);Lf.subVectors(e,o);const g=Ys.dot(Lf),v=qs.dot(Lf);if(g>=0&&v<=g)return t.copy(o);const x=h*v-g*m;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(s).addScaledVector(Ys,c);Df.subVectors(e,l);const S=Ys.dot(Df),T=qs.dot(Df);if(T>=0&&S<=T)return t.copy(l);const A=S*m-h*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),t.copy(s).addScaledVector(qs,d);const y=g*T-S*v;if(y<=0&&v-g>=0&&S-T>=0)return ag.subVectors(l,o),d=(v-g)/(v-g+(S-T)),t.copy(o).addScaledVector(ag,d);const _=1/(y+A+x);return c=A*_,d=x*_,t.copy(s).addScaledVector(Ys,c).addScaledVector(qs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function Ff(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=wt.workingColorSpace){if(e=Vx(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Ff(c,l,e+1/3),this.g=Ff(c,l,e),this.b=Ff(c,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=T0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return wt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(_t(Mn.r*255,0,255))*65536+Math.round(_t(Mn.g*255,0,255))*256+Math.round(_t(Mn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Mn.copy(this),t);const s=Mn.r,o=Mn.g,l=Mn.b,c=Math.max(s,o,l),d=Math.min(s,o,l);let h,m;const g=(d+c)/2;if(d===c)h=0,m=0;else{const v=c-d;switch(m=g<=.5?v/(c+d):v/(2-c-d),c){case s:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-s)/v+2;break;case l:h=(s-o)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ti){wt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,s=Mn.g,o=Mn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Bl);const s=xf(Cr.h,Bl.h,t),o=xf(Cr.s,Bl.s,t),l=xf(Cr.l,Bl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new bt;bt.NAMES=T0;let ay=0;class So extends Ma{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=oa,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(s.blending=this.blending),this.side!==Ir&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ed&&(s.blendSrc=this.blendSrc),this.blendDst!==td&&(s.blendDst=this.blendDst),this.blendEquation!==ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ym&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class w0 extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=o0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new ie,Hl=new xt;class vi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=zd,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ri(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Lt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array),o=Lt(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array),o=Lt(o,this.array),l=Lt(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zd&&(e.usage=this.usage),e}}class A0 extends vi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class C0 extends vi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class cs extends vi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let oy=0;const ei=new jt,Of=new Bn,$s=new ie,jn=new yo,ao=new yo,un=new ie;class Fr extends Ma{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?C0:A0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ot().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return Of.lookAt(e),Of.updateMatrix(),this.applyMatrix4(Of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new cs(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];ao.setFromBufferAttribute(d),this.morphTargetsRelative?(un.addVectors(jn.min,ao.min),jn.expandByPoint(un),un.addVectors(jn.max,ao.max),jn.expandByPoint(un)):(jn.expandByPoint(ao.min),jn.expandByPoint(ao.max))}jn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)un.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(un));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)un.fromBufferAttribute(d,m),h&&($s.fromBufferAttribute(e,m),un.add($s)),o=Math.max(o,s.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let X=0;X<s.count;X++)d[X]=new ie,h[X]=new ie;const m=new ie,g=new ie,v=new ie,x=new xt,S=new xt,T=new xt,A=new ie,y=new ie;function _(X,b,C){m.fromBufferAttribute(s,X),g.fromBufferAttribute(s,b),v.fromBufferAttribute(s,C),x.fromBufferAttribute(l,X),S.fromBufferAttribute(l,b),T.fromBufferAttribute(l,C),g.sub(m),v.sub(m),S.sub(x),T.sub(x);const B=1/(S.x*T.y-T.x*S.y);isFinite(B)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(B),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(B),d[X].add(A),d[b].add(A),d[C].add(A),h[X].add(y),h[b].add(y),h[C].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,b=I.length;X<b;++X){const C=I[X],B=C.start,le=C.count;for(let ne=B,fe=B+le;ne<fe;ne+=3)_(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const L=new ie,R=new ie,H=new ie,F=new ie;function N(X){H.fromBufferAttribute(o,X),F.copy(H);const b=d[X];L.copy(b),L.sub(H.multiplyScalar(H.dot(b))).normalize(),R.crossVectors(F,b);const B=R.dot(h[X])<0?-1:1;c.setXYZW(X,L.x,L.y,L.z,B)}for(let X=0,b=I.length;X<b;++X){const C=I[X],B=C.start,le=C.count;for(let ne=B,fe=B+le;ne<fe;ne+=3)N(e.getX(ne+0)),N(e.getX(ne+1)),N(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const o=new ie,l=new ie,c=new ie,d=new ie,h=new ie,m=new ie,g=new ie,v=new ie;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,A),c.fromBufferAttribute(t,y),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),d.fromBufferAttribute(s,T),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,y),d.add(g),h.add(g),m.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=t.count;x<S;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(d,h){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(h.length*g);let S=0,T=0;for(let A=0,y=h.length;A<y;A++){d.isInterleavedBufferAttribute?S=h[A]*d.data.stride+d.offset:S=h[A]*g;for(let _=0;_<g;_++)x[T++]=m[S++]}return new vi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fr,s=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,s);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],S=e(x,s);h.push(S)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const og=new jt,Jr=new E0,Vl=new rh,lg=new ie,Gl=new ie,Wl=new ie,Xl=new ie,kf=new ie,jl=new ie,ug=new ie,Yl=new ie;class Zi extends Bn{constructor(e=new Fr,t=new w0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){jl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=d[h],v=l[h];g!==0&&(kf.fromBufferAttribute(v,e),c?jl.addScaledVector(kf,g):jl.addScaledVector(kf.sub(t),g))}t.add(jl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Vl.copy(s.boundingSphere),Vl.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(Vl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Vl,lg)===null||Jr.origin.distanceToSquared(lg)>(e.far-e.near)**2))&&(og.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(og),!(s.boundingBox!==null&&Jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,A=x.length;T<A;T++){const y=x[T],_=c[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,H=L;R<H;R+=3){const F=d.getX(R),N=d.getX(R+1),X=d.getX(R+2);o=ql(this,_,e,s,m,g,v,F,N,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=T,_=A;y<_;y+=3){const I=d.getX(y),L=d.getX(y+1),R=d.getX(y+2);o=ql(this,c,e,s,m,g,v,I,L,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,A=x.length;T<A;T++){const y=x[T],_=c[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,H=L;R<H;R+=3){const F=R,N=R+1,X=R+2;o=ql(this,_,e,s,m,g,v,F,N,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=T,_=A;y<_;y+=3){const I=y,L=y+1,R=y+2;o=ql(this,c,e,s,m,g,v,I,L,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function ly(r,e,t,s,o,l,c,d){let h;if(e.side===zn?h=s.intersectTriangle(c,l,o,!0,d):h=s.intersectTriangle(o,l,c,e.side===Ir,d),h===null)return null;Yl.copy(d),Yl.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Yl);return m<t.near||m>t.far?null:{distance:m,point:Yl.clone(),object:r}}function ql(r,e,t,s,o,l,c,d,h,m){r.getVertexPosition(d,Gl),r.getVertexPosition(h,Wl),r.getVertexPosition(m,Xl);const g=ly(r,e,t,s,Gl,Wl,Xl,ug);if(g){const v=new ie;ii.getBarycoord(ug,Gl,Wl,Xl,v),o&&(g.uv=ii.getInterpolatedAttribute(o,d,h,m,v,new xt)),l&&(g.uv1=ii.getInterpolatedAttribute(l,d,h,m,v,new xt)),c&&(g.normal=ii.getInterpolatedAttribute(c,d,h,m,v,new ie),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new ie,materialIndex:0};ii.getNormal(Gl,Wl,Xl,x.normal),g.face=x,g.barycoord=v}return g}class Mo extends Fr{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],g=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,s,t,e,c,l,0),T("z","y","x",1,-1,s,t,-e,c,l,1),T("x","z","y",1,1,e,s,t,o,c,2),T("x","z","y",1,-1,e,s,-t,o,c,3),T("x","y","z",1,-1,e,t,s,o,l,4),T("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new cs(m,3)),this.setAttribute("normal",new cs(g,3)),this.setAttribute("uv",new cs(v,2));function T(A,y,_,I,L,R,H,F,N,X,b){const C=R/N,B=H/X,le=R/2,ne=H/2,fe=F/2,pe=N+1,oe=X+1;let ue=0,z=0;const ae=new ie;for(let re=0;re<oe;re++){const U=re*B-ne;for(let J=0;J<pe;J++){const Ne=J*C-le;ae[A]=Ne*I,ae[y]=U*L,ae[_]=fe,m.push(ae.x,ae.y,ae.z),ae[A]=0,ae[y]=0,ae[_]=F>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(J/N),v.push(1-re/X),ue+=1}}for(let re=0;re<X;re++)for(let U=0;U<N;U++){const J=x+U+pe*re,Ne=x+U+pe*(re+1),Z=x+(U+1)+pe*(re+1),ce=x+(U+1)+pe*re;h.push(J,Ne,ce),h.push(Ne,Z,ce),z+=6}d.addGroup(S,z,b),S+=z,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ga(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const s=ga(r[t]);for(const o in s)e[o]=s[o]}return e}function uy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function R0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const cy={clone:ga,merge:bn};var fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class b0 extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new ie,cg=new xt,fg=new xt;class ni extends b0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,cg,fg),t.subVectors(fg,cg)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vf*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/m,o*=c.width/h,s*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class hy extends Bn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const l=new ni(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const c=new ni(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const d=new ni(Ks,Zs,e,t);d.layers=this.layers,this.add(d);const h=new ni(Ks,Zs,e,t);h.layers=this.layers,this.add(h);const m=new ni(Ks,Zs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,d,h]=t;for(const m of t)this.remove(m);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===gu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(v,x,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class P0 extends Pn{constructor(e,t,s,o,l,c,d,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:fa,super(e,t,s,o,l,c,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class py extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new P0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Mo(5,5,5),l=new Ur({name:"CubemapFromEquirect",uniforms:ga(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:Lr});l.uniforms.tEquirect.value=t;const c=new Zi(o,l),d=t.minFilter;return t.minFilter===ls&&(t.minFilter=bi),new hy(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}class my extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zd,this.updateRanges=[],this.version=0,this.uuid=Nr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[s+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new ie;class _u{constructor(e,t,s,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=Ri(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Lt(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array),o=Lt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),s=Lt(s,this.array),o=Lt(o,this.array),l=Lt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new vi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _u(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class L0 extends So{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qs;const oo=new ie,Js=new ie,ea=new ie,ta=new xt,lo=new xt,D0=new jt,$l=new ie,uo=new ie,Kl=new ie,dg=new xt,zf=new xt,hg=new xt;class _y extends Bn{constructor(e=new L0){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new Fr;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new gy(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new _u(s,3,0,!1)),Qs.setAttribute("uv",new _u(s,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new xt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),D0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ea.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-ea.z);const s=this.material.rotation;let o,l;s!==0&&(l=Math.cos(s),o=Math.sin(s));const c=this.center;Zl($l.set(-.5,-.5,0),ea,c,Js,o,l),Zl(uo.set(.5,-.5,0),ea,c,Js,o,l),Zl(Kl.set(.5,.5,0),ea,c,Js,o,l),dg.set(0,0),zf.set(1,0),hg.set(1,1);let d=e.ray.intersectTriangle($l,uo,Kl,!1,oo);if(d===null&&(Zl(uo.set(-.5,.5,0),ea,c,Js,o,l),zf.set(0,1),d=e.ray.intersectTriangle($l,Kl,uo,!1,oo),d===null))return;const h=e.ray.origin.distanceTo(oo);h<e.near||h>e.far||t.push({distance:h,point:oo.clone(),uv:ii.getInterpolation(oo,$l,uo,Kl,dg,zf,hg,new xt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zl(r,e,t,s,o,l){ta.subVectors(r,t).addScalar(.5).multiply(s),o!==void 0?(lo.x=l*ta.x-o*ta.y,lo.y=o*ta.x+l*ta.y):lo.copy(ta),r.copy(e),r.x+=lo.x,r.y+=lo.y,r.applyMatrix4(D0)}const Bf=new ie,vy=new ie,xy=new ot;class is{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Bf.subVectors(s,t).cross(vy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Bf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||xy.getNormalMatrix(e),o=this.coplanarPoint(Bf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new rh,Ql=new ie;class N0{constructor(e=new is,t=new is,s=new is,o=new is,l=new is,c=new is){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ki){const s=this.planes,o=e.elements,l=o[0],c=o[1],d=o[2],h=o[3],m=o[4],g=o[5],v=o[6],x=o[7],S=o[8],T=o[9],A=o[10],y=o[11],_=o[12],I=o[13],L=o[14],R=o[15];if(s[0].setComponents(h-l,x-m,y-S,R-_).normalize(),s[1].setComponents(h+l,x+m,y+S,R+_).normalize(),s[2].setComponents(h+c,x+g,y+T,R+I).normalize(),s[3].setComponents(h-c,x-g,y-T,R-I).normalize(),s[4].setComponents(h-d,x-v,y-A,R-L).normalize(),t===Ki)s[5].setComponents(h+d,x+v,y+A,R+L).normalize();else if(t===gu)s[5].setComponents(d,v,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Ql.x=o.normal.x>0?e.max.x:e.min.x,Ql.y=o.normal.y>0?e.max.y:e.min.y,Ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class co extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class I0 extends Pn{constructor(e,t,s,o,l,c,d,h,m,g=la){if(g!==la&&g!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===la&&(s=hs),s===void 0&&g===pa&&(s=ha),super(null,o,l,c,d,h,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:_i,this.minFilter=h!==void 0?h:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wu extends Fr{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(s),h=Math.floor(o),m=d+1,g=h+1,v=e/d,x=t/h,S=[],T=[],A=[],y=[];for(let _=0;_<g;_++){const I=_*x-c;for(let L=0;L<m;L++){const R=L*v-l;T.push(R,-I,0),A.push(0,0,1),y.push(L/d),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let I=0;I<d;I++){const L=I+m*_,R=I+m*(_+1),H=I+1+m*(_+1),F=I+1+m*_;S.push(L,R,F),S.push(R,H,F)}this.setIndex(S),this.setAttribute("position",new cs(T,3)),this.setAttribute("normal",new cs(A,3)),this.setAttribute("uv",new cs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class yy extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sy extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pg={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class My{constructor(e,t,s){const o=this;let l=!1,c=0,d=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(g){d++,l===!1&&o.onStart!==void 0&&o.onStart(g,c,d),l=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,d),c===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=m.length;v<x;v+=2){const S=m[v],T=m[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return T}return null}}}const Ey=new My;class ah{constructor(e){this.manager=e!==void 0?e:Ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ah.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ty extends ah{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=pg.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const d=go("img");function h(){g(),pg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function m(v){g(),o&&o(v),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){d.removeEventListener("load",h,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),l.manager.itemStart(e),d.src=e,d}}class wy extends ah{constructor(e){super(e)}load(e,t,s,o){const l=new Pn,c=new Ty(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class Ay extends b0{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cy extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const mg=new jt;class Ry{constructor(e,t,s=0,o=1/0){this.ray=new E0(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mg),this}intersectObject(e,t=!0,s=[]){return Hd(e,this,s,t),s.sort(gg),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)Hd(e[o],this,s,t);return s.sort(gg),s}}function gg(r,e){return r.distance-e.distance}function Hd(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){const l=r.children;for(let c=0,d=l.length;c<d;c++)Hd(l[c],e,t,!0)}}function _g(r,e,t,s){const o=by(s);switch(t){case d0:return r*e;case p0:return r*e;case m0:return r*e*2;case g0:return r*e/o.components*o.byteLength;case th:return r*e/o.components*o.byteLength;case _0:return r*e*2/o.components*o.byteLength;case nh:return r*e*2/o.components*o.byteLength;case h0:return r*e*3/o.components*o.byteLength;case gi:return r*e*4/o.components*o.byteLength;case ih:return r*e*4/o.components*o.byteLength;case ru:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case au:case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pd:case gd:return Math.max(r,16)*Math.max(e,8)/4;case hd:case md:return Math.max(r,8)*Math.max(e,8)/2;case _d:case vd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Md:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Td:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lu:case Id:case Ud:return Math.ceil(r/4)*Math.ceil(e/4)*16;case v0:case Fd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Od:case kd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function by(r){switch(r){case Ji:case u0:return{byteLength:1,components:1};case mo:case c0:case vo:return{byteLength:2,components:1};case Jd:case eh:return{byteLength:2,components:4};case hs:case Qd:case $i:return{byteLength:4,components:1};case f0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U0(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Py(r){const e=new WeakMap;function t(d,h){const m=d.array,g=d.usage,v=m.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,h,m){const g=h.array,v=h.updateRanges;if(r.bindBuffer(m,d),v.length===0)r.bufferSubData(m,0,g);else{v.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<v.length;S++){const T=v[x],A=v[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,v[x]=A)}v.length=x+1;for(let S=0,T=v.length;S<T;S++){const A=v[S];r.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:c}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
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
#endif`,Ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oy=`#ifdef USE_AOMAP
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
#endif`,ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`#ifdef USE_BATCHING
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
#endif`,By=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Xy=`#ifdef USE_BUMPMAP
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eS=`#define PI 3.141592653589793
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
} // validated`,tS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nS=`vec3 transformedNormal = objectNormal;
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
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oS="gl_FragColor = linearToOutputTexel( gl_FragColor );",lS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uS=`#ifdef USE_ENVMAP
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
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fS=`#ifdef USE_ENVMAP
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
#endif`,dS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
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
#endif`,pS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vS=`#ifdef USE_GRADIENTMAP
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
}`,xS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
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
#endif`,ES=`#ifdef USE_ENVMAP
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
#endif`,TS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RS=`PhysicalMaterial material;
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
#endif`,bS=`struct PhysicalMaterial {
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
}`,PS=`
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
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
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BS=`#if defined( USE_POINTS_UV )
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
#endif`,HS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jS=`#ifdef USE_MORPHTARGETS
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
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$S=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JS=`#ifdef USE_NORMALMAP
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
#endif`,e1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m1=`float getShadowMask() {
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
}`,g1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_1=`#ifdef USE_SKINNING
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
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T1=`#ifdef USE_TRANSMISSION
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
#endif`,w1=`#ifdef USE_TRANSMISSION
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L1=`uniform sampler2D t2D;
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`#include <common>
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
}`,O1=`#if DEPTH_PACKING == 3200
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
}`,k1=`#define DISTANCE
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
}`,z1=`#define DISTANCE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`uniform float scale;
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
}`,G1=`uniform vec3 diffuse;
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
}`,W1=`#include <common>
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
}`,X1=`uniform vec3 diffuse;
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
}`,j1=`#define LAMBERT
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
}`,Y1=`#define LAMBERT
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
}`,q1=`#define MATCAP
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
}`,$1=`#define MATCAP
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
}`,K1=`#define NORMAL
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
}`,Z1=`#define NORMAL
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
}`,Q1=`#define PHONG
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
}`,J1=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,tM=`#define STANDARD
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
}`,nM=`#define TOON
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
}`,iM=`#define TOON
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
}`,rM=`uniform float size;
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
}`,sM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,oM=`uniform vec3 color;
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
}`,lM=`uniform float rotation;
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
}`,uM=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Ly,alphahash_pars_fragment:Dy,alphamap_fragment:Ny,alphamap_pars_fragment:Iy,alphatest_fragment:Uy,alphatest_pars_fragment:Fy,aomap_fragment:Oy,aomap_pars_fragment:ky,batching_pars_vertex:zy,batching_vertex:By,begin_vertex:Hy,beginnormal_vertex:Vy,bsdfs:Gy,iridescence_fragment:Wy,bumpmap_pars_fragment:Xy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:Yy,clipping_planes_pars_vertex:qy,clipping_planes_vertex:$y,color_fragment:Ky,color_pars_fragment:Zy,color_pars_vertex:Qy,color_vertex:Jy,common:eS,cube_uv_reflection_fragment:tS,defaultnormal_vertex:nS,displacementmap_pars_vertex:iS,displacementmap_vertex:rS,emissivemap_fragment:sS,emissivemap_pars_fragment:aS,colorspace_fragment:oS,colorspace_pars_fragment:lS,envmap_fragment:uS,envmap_common_pars_fragment:cS,envmap_pars_fragment:fS,envmap_pars_vertex:dS,envmap_physical_pars_fragment:ES,envmap_vertex:hS,fog_vertex:pS,fog_pars_vertex:mS,fog_fragment:gS,fog_pars_fragment:_S,gradientmap_pars_fragment:vS,lightmap_pars_fragment:xS,lights_lambert_fragment:yS,lights_lambert_pars_fragment:SS,lights_pars_begin:MS,lights_toon_fragment:TS,lights_toon_pars_fragment:wS,lights_phong_fragment:AS,lights_phong_pars_fragment:CS,lights_physical_fragment:RS,lights_physical_pars_fragment:bS,lights_fragment_begin:PS,lights_fragment_maps:LS,lights_fragment_end:DS,logdepthbuf_fragment:NS,logdepthbuf_pars_fragment:IS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:FS,map_fragment:OS,map_pars_fragment:kS,map_particle_fragment:zS,map_particle_pars_fragment:BS,metalnessmap_fragment:HS,metalnessmap_pars_fragment:VS,morphinstance_vertex:GS,morphcolor_vertex:WS,morphnormal_vertex:XS,morphtarget_pars_vertex:jS,morphtarget_vertex:YS,normal_fragment_begin:qS,normal_fragment_maps:$S,normal_pars_fragment:KS,normal_pars_vertex:ZS,normal_vertex:QS,normalmap_pars_fragment:JS,clearcoat_normal_fragment_begin:e1,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:n1,iridescence_pars_fragment:i1,opaque_fragment:r1,packing:s1,premultiplied_alpha_fragment:a1,project_vertex:o1,dithering_fragment:l1,dithering_pars_fragment:u1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:d1,shadowmap_pars_vertex:h1,shadowmap_vertex:p1,shadowmask_pars_fragment:m1,skinbase_vertex:g1,skinning_pars_vertex:_1,skinning_vertex:v1,skinnormal_vertex:x1,specularmap_fragment:y1,specularmap_pars_fragment:S1,tonemapping_fragment:M1,tonemapping_pars_fragment:E1,transmission_fragment:T1,transmission_pars_fragment:w1,uv_pars_fragment:A1,uv_pars_vertex:C1,uv_vertex:R1,worldpos_vertex:b1,background_vert:P1,background_frag:L1,backgroundCube_vert:D1,backgroundCube_frag:N1,cube_vert:I1,cube_frag:U1,depth_vert:F1,depth_frag:O1,distanceRGBA_vert:k1,distanceRGBA_frag:z1,equirect_vert:B1,equirect_frag:H1,linedashed_vert:V1,linedashed_frag:G1,meshbasic_vert:W1,meshbasic_frag:X1,meshlambert_vert:j1,meshlambert_frag:Y1,meshmatcap_vert:q1,meshmatcap_frag:$1,meshnormal_vert:K1,meshnormal_frag:Z1,meshphong_vert:Q1,meshphong_frag:J1,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:rM,points_frag:sM,shadow_vert:aM,shadow_frag:oM,sprite_vert:lM,sprite_frag:uM},Pe={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ai={basic:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:bn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:bn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:bn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:bn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:bn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:bn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:bn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:bn([Pe.lights,Pe.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ai.physical={uniforms:bn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Jl={r:0,b:0,g:0},ts=new er,cM=new jt;function fM(r,e,t,s,o,l,c){const d=new bt(0);let h=l===!0?0:1,m,g,v=null,x=0,S=null;function T(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?t:e).get(R)),R}function A(L){let R=!1;const H=T(L);H===null?_(d,h):H&&H.isColor&&(_(H,1),R=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,R){const H=T(R);H&&(H.isCubeTexture||H.mapping===Tu)?(g===void 0&&(g=new Zi(new Mo(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:ga(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,N,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),ts.copy(R.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(cM.makeRotationFromEuler(ts)),g.material.toneMapped=wt.getTransfer(H.colorSpace)!==Pt,(v!==H||x!==H.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=H,x=H.version,S=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Zi(new wu(2,2),new Ur({name:"BackgroundMaterial",uniforms:ga(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=wt.getTransfer(H.colorSpace)!==Pt,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=H,x=H.version,S=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,R){L.getRGB(Jl,R0(r)),s.buffers.color.setClear(Jl.r,Jl.g,Jl.b,R,c)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,R=1){d.set(L),h=R,_(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,_(d,h)},render:A,addToRenderList:y,dispose:I}}function dM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=x(null);let l=o,c=!1;function d(C,B,le,ne,fe){let pe=!1;const oe=v(ne,le,B);l!==oe&&(l=oe,m(l.object)),pe=S(C,ne,le,fe),pe&&T(C,ne,le,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,R(C,B,le,ne),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function v(C,B,le){const ne=le.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let pe=fe[B.id];pe===void 0&&(pe={},fe[B.id]=pe);let oe=pe[ne];return oe===void 0&&(oe=x(h()),pe[ne]=oe),oe}function x(C){const B=[],le=[],ne=[];for(let fe=0;fe<t;fe++)B[fe]=0,le[fe]=0,ne[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:le,attributeDivisors:ne,object:C,attributes:{},index:null}}function S(C,B,le,ne){const fe=l.attributes,pe=B.attributes;let oe=0;const ue=le.getAttributes();for(const z in ue)if(ue[z].location>=0){const re=fe[z];let U=pe[z];if(U===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;oe++}return l.attributesNum!==oe||l.index!==ne}function T(C,B,le,ne){const fe={},pe=B.attributes;let oe=0;const ue=le.getAttributes();for(const z in ue)if(ue[z].location>=0){let re=pe[z];re===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),fe[z]=U,oe++}l.attributes=fe,l.attributesNum=oe,l.index=ne}function A(){const C=l.newAttributes;for(let B=0,le=C.length;B<le;B++)C[B]=0}function y(C){_(C,0)}function _(C,B){const le=l.newAttributes,ne=l.enabledAttributes,fe=l.attributeDivisors;le[C]=1,ne[C]===0&&(r.enableVertexAttribArray(C),ne[C]=1),fe[C]!==B&&(r.vertexAttribDivisor(C,B),fe[C]=B)}function I(){const C=l.newAttributes,B=l.enabledAttributes;for(let le=0,ne=B.length;le<ne;le++)B[le]!==C[le]&&(r.disableVertexAttribArray(le),B[le]=0)}function L(C,B,le,ne,fe,pe,oe){oe===!0?r.vertexAttribIPointer(C,B,le,fe,pe):r.vertexAttribPointer(C,B,le,ne,fe,pe)}function R(C,B,le,ne){A();const fe=ne.attributes,pe=le.getAttributes(),oe=B.defaultAttributeValues;for(const ue in pe){const z=pe[ue];if(z.location>=0){let ae=fe[ue];if(ae===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,J=e.get(ae);if(J===void 0)continue;const Ne=J.buffer,Z=J.type,ce=J.bytesPerElement,ye=Z===r.INT||Z===r.UNSIGNED_INT||ae.gpuType===Qd;if(ae.isInterleavedBufferAttribute){const ge=ae.data,we=ge.stride,Ae=ae.offset;if(ge.isInstancedInterleavedBuffer){for(let $e=0;$e<z.locationSize;$e++)_(z.location+$e,ge.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let $e=0;$e<z.locationSize;$e++)y(z.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let $e=0;$e<z.locationSize;$e++)L(z.location+$e,U/z.locationSize,Z,re,we*ce,(Ae+U/z.locationSize*$e)*ce,ye)}else{if(ae.isInstancedBufferAttribute){for(let ge=0;ge<z.locationSize;ge++)_(z.location+ge,ae.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ge=0;ge<z.locationSize;ge++)y(z.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let ge=0;ge<z.locationSize;ge++)L(z.location+ge,U/z.locationSize,Z,re,U*ce,U/z.locationSize*ge*ce,ye)}}else if(oe!==void 0){const re=oe[ue];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(z.location,re);break;case 3:r.vertexAttrib3fv(z.location,re);break;case 4:r.vertexAttrib4fv(z.location,re);break;default:r.vertexAttrib1fv(z.location,re)}}}}I()}function H(){X();for(const C in s){const B=s[C];for(const le in B){const ne=B[le];for(const fe in ne)g(ne[fe].object),delete ne[fe];delete B[le]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const B=s[C.id];for(const le in B){const ne=B[le];for(const fe in ne)g(ne[fe].object),delete ne[fe];delete B[le]}delete s[C.id]}function N(C){for(const B in s){const le=s[B];if(le[C.id]===void 0)continue;const ne=le[C.id];for(const fe in ne)g(ne[fe].object),delete ne[fe];delete le[C.id]}}function X(){b(),c=!0,l!==o&&(l=o,m(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:X,resetDefaultState:b,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:y,disableUnusedAttributes:I}}function hM(r,e,t){let s;function o(m){s=m}function l(m,g){r.drawArrays(s,m,g),t.update(g,s,1)}function c(m,g,v){v!==0&&(r.drawArraysInstanced(s,m,g,v),t.update(g,s,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T];t.update(S,s,1)}function h(m,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)c(m[T],g[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,v);let T=0;for(let A=0;A<v;A++)T+=g[A]*x[A];t.update(T,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function pM(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(N){return!(N!==gi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const X=N===vo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Ji&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==$i&&!X)}function h(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:H,maxSamples:F}}function mM(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new is,d=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||s!==0||o;return o=x,s=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,_=r.get(v);if(!o||T===null||T.length===0||l&&!y)l?g(null):m();else{const I=l?0:s,L=I*4;let R=_.clippingState||null;h.value=R,R=g(T,x,L,S);for(let H=0;H!==L;++H)R[H]=t[H];_.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,x,S,T){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=h.value,T!==!0||y===null){const _=S+A*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,R=S;L!==A;++L,R+=4)c.copy(v[L]).applyMatrix4(I,d),c.normal.toArray(y,R),y[R+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function gM(r){let e=new WeakMap;function t(c,d){return d===ud?c.mapping=fa:d===cd&&(c.mapping=da),c}function s(c){if(c&&c.isTexture){const d=c.mapping;if(d===ud||d===cd)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new py(h.height);return m.fromEquirectangularTexture(r,c),e.set(c,m),c.addEventListener("dispose",o),t(m.texture,c.mapping)}else return null}}return c}function o(c){const d=c.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const sa=4,vg=[.125,.215,.35,.446,.526,.582],as=20,Hf=new Ay,xg=new bt;let Vf=null,Gf=0,Wf=0,Xf=!1;const rs=(1+Math.sqrt(5))/2,na=1/rs,yg=[new ie(-rs,na,0),new ie(rs,na,0),new ie(-na,0,rs),new ie(na,0,rs),new ie(0,rs,-na),new ie(0,rs,na),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class Sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){Vf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vf,Gf,Wf),this._renderer.xr.enabled=Xf,e.scissorTest=!1,eu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fa||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vf=this._renderer.getRenderTarget(),Gf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:vo,format:gi,colorSpace:ma,depthBuffer:!1},o=Mg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_M(l)),this._blurMaterial=vM(l,e,t)}return o}_compileMaterial(e){const t=new Zi(this._lodPlanes[0],e);this._renderer.compile(t,Hf)}_sceneToCubeUV(e,t,s,o){const d=new ni(90,1,t,s),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(xg),g.toneMapping=Dr,g.autoClear=!1;const S=new w0({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),T=new Zi(new Mo,S);let A=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,A=!0):(S.color.copy(xg),A=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,h[_],0),d.lookAt(m[_],0,0)):I===1?(d.up.set(0,0,h[_]),d.lookAt(0,m[_],0)):(d.up.set(0,h[_],0),d.lookAt(0,0,m[_]));const L=this._cubeSize;eu(o,I*L,_>2?L:0,L,L),g.setRenderTarget(o),A&&g.render(T,d),g.render(e,d)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===fa||e.mapping===da;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Zi(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;eu(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,Hf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=yg[(o-l-1)%yg.length];this._blur(e,l-1,l,c,d)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Zi(this._lodPlanes[o],m),x=m.uniforms,S=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*as-1),A=l/T,y=isFinite(l)?1+Math.floor(g*A):as;y>as&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${as}`);const _=[];let I=0;for(let N=0;N<as;++N){const X=N/A,b=Math.exp(-X*X/2);_.push(b),N===0?I+=b:N<y&&(I+=2*b)}for(let N=0;N<_.length;N++)_[N]=_[N]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-s;const R=this._sizeLods[o],H=3*R*(o>L-sa?o-L+sa:0),F=4*(this._cubeSize-R);eu(t,H,F,3*R,2*R),h.setRenderTarget(t),h.render(v,Hf)}}function _M(r){const e=[],t=[],s=[];let o=r;const l=r-sa+1+vg.length;for(let c=0;c<l;c++){const d=Math.pow(2,o);t.push(d);let h=1/d;c>r-sa?h=vg[c-r+sa-1]:c===0&&(h=0),s.push(h);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,A=3,y=2,_=1,I=new Float32Array(A*T*S),L=new Float32Array(y*T*S),R=new Float32Array(_*T*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,X=F>2?0:-1,b=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];I.set(b,A*T*F),L.set(x,y*T*F);const C=[F,F,F,F,F,F];R.set(C,_*T*F)}const H=new Fr;H.setAttribute("position",new vi(I,A)),H.setAttribute("uv",new vi(L,y)),H.setAttribute("faceIndex",new vi(R,_)),e.push(H),o>sa&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Mg(r,e,t){const s=new ps(r,e,t);return s.texture.mapping=Tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function eu(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function vM(r,e,t){const s=new Float32Array(as),o=new ie(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Eg(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Tg(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function xM(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const h=d.mapping,m=h===ud||h===cd,g=h===fa||h===da;if(m||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new Sg(r)),v=m?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new Sg(r)),v=m?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function yM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&ra("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function SM(r,e,t,s){const o={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete o[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(v,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,T=v.attributes.position;let A=0;if(S!==null){const I=S.array;A=S.version;for(let L=0,R=I.length;L<R;L+=3){const H=I[L+0],F=I[L+1],N=I[L+2];x.push(H,F,F,N,N,H)}}else if(T!==void 0){const I=T.array;A=T.version;for(let L=0,R=I.length/3-1;L<R;L+=3){const H=L+0,F=L+1,N=L+2;x.push(H,F,F,N,N,H)}}else return;const y=new(y0(x)?C0:A0)(x,1);y.version=A;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:g}}function MM(r,e,t){let s;function o(x){s=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,S){r.drawElements(s,S,l,x*c),t.update(S,s,1)}function m(x,S,T){T!==0&&(r.drawElementsInstanced(s,S,l,x*c,T),t.update(S,s,T))}function g(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,x,0,T);let y=0;for(let _=0;_<T;_++)y+=S[_];t.update(y,s,1)}function v(x,S,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/c,S[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,x,0,A,0,T);let _=0;for(let I=0;I<T;I++)_+=S[I]*A[I];t.update(_,s,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function EM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function TM(r,e,t){const s=new WeakMap,o=new qt;function l(c,d,h){const m=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let C=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;T===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let H=d.attributes.position.count*R,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const N=new Float32Array(H*F*4*v),X=new M0(N,H,F,v);X.type=$i,X.needsUpdate=!0;const b=R*4;for(let B=0;B<v;B++){const le=_[B],ne=I[B],fe=L[B],pe=H*F*4*B;for(let oe=0;oe<le.count;oe++){const ue=oe*b;T===!0&&(o.fromBufferAttribute(le,oe),N[pe+ue+0]=o.x,N[pe+ue+1]=o.y,N[pe+ue+2]=o.z,N[pe+ue+3]=0),A===!0&&(o.fromBufferAttribute(ne,oe),N[pe+ue+4]=o.x,N[pe+ue+5]=o.y,N[pe+ue+6]=o.z,N[pe+ue+7]=0),y===!0&&(o.fromBufferAttribute(fe,oe),N[pe+ue+8]=o.x,N[pe+ue+9]=o.y,N[pe+ue+10]=o.z,N[pe+ue+11]=fe.itemSize===4?o.w:1)}}x={count:v,texture:X,size:new xt(H,F)},s.set(d,x),d.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const A=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",A),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function wM(r,e,t,s){let o=new WeakMap;function l(h){const m=s.render.frame,g=h.geometry,v=e.get(h,g);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==m&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return v}function c(){o=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}const F0=new Pn,wg=new I0(1,1),O0=new M0,k0=new Qx,z0=new P0,Ag=[],Cg=[],Rg=new Float32Array(16),bg=new Float32Array(9),Pg=new Float32Array(4);function Ea(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Ag[o];if(l===void 0&&(l=new Float32Array(o),Ag[o]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(l,d)}return l}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Au(r,e){let t=Cg[e];t===void 0&&(t=new Int32Array(e),Cg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function AM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function CM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function RM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function bM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function PM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Pg.set(s),r.uniformMatrix2fv(this.addr,!1,Pg),nn(t,s)}}function LM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;bg.set(s),r.uniformMatrix3fv(this.addr,!1,bg),nn(t,s)}}function DM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Rg.set(s),r.uniformMatrix4fv(this.addr,!1,Rg),nn(t,s)}}function NM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function UM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function OM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function HM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(wg.compareFunction=x0,l=wg):l=F0,t.setTexture2D(e||l,o)}function VM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||k0,o)}function GM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||z0,o)}function WM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||O0,o)}function XM(r){switch(r){case 5126:return AM;case 35664:return CM;case 35665:return RM;case 35666:return bM;case 35674:return PM;case 35675:return LM;case 35676:return DM;case 5124:case 35670:return NM;case 35667:case 35671:return IM;case 35668:case 35672:return UM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return kM;case 36295:return zM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}function jM(r,e){r.uniform1fv(this.addr,e)}function YM(r,e){const t=Ea(e,this.size,2);r.uniform2fv(this.addr,t)}function qM(r,e){const t=Ea(e,this.size,3);r.uniform3fv(this.addr,t)}function $M(r,e){const t=Ea(e,this.size,4);r.uniform4fv(this.addr,t)}function KM(r,e){const t=Ea(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ZM(r,e){const t=Ea(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function QM(r,e){const t=Ea(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function JM(r,e){r.uniform1iv(this.addr,e)}function eE(r,e){r.uniform2iv(this.addr,e)}function tE(r,e){r.uniform3iv(this.addr,e)}function nE(r,e){r.uniform4iv(this.addr,e)}function iE(r,e){r.uniform1uiv(this.addr,e)}function rE(r,e){r.uniform2uiv(this.addr,e)}function sE(r,e){r.uniform3uiv(this.addr,e)}function aE(r,e){r.uniform4uiv(this.addr,e)}function oE(r,e,t){const s=this.cache,o=e.length,l=Au(t,o);tn(s,l)||(r.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||F0,l[c])}function lE(r,e,t){const s=this.cache,o=e.length,l=Au(t,o);tn(s,l)||(r.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||k0,l[c])}function uE(r,e,t){const s=this.cache,o=e.length,l=Au(t,o);tn(s,l)||(r.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||z0,l[c])}function cE(r,e,t){const s=this.cache,o=e.length,l=Au(t,o);tn(s,l)||(r.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||O0,l[c])}function fE(r){switch(r){case 5126:return jM;case 35664:return YM;case 35665:return qM;case 35666:return $M;case 35674:return KM;case 35675:return ZM;case 35676:return QM;case 5124:case 35670:return JM;case 35667:case 35671:return eE;case 35668:case 35672:return tE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return rE;case 36295:return sE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return cE}}class dE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=XM(t.type)}}class hE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fE(t.type)}}class pE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const jf=/(\w+)(\])?(\[|\.)?/g;function Lg(r,e){r.seq.push(e),r.map[e.id]=e}function mE(r,e,t){const s=r.name,o=s.length;for(jf.lastIndex=0;;){const l=jf.exec(s),c=jf.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===o){Lg(t,m===void 0?new dE(d,r,e):new hE(d,r,e));break}else{let v=t.map[d];v===void 0&&(v=new pE(d),Lg(t,v)),t=v}}}class uu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);mE(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function Dg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const gE=37297;let _E=0;function vE(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}const Ng=new ot;function xE(r){wt._getMatrix(Ng,wt.workingColorSpace,r);const e=`mat3( ${Ng.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case mu:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ig(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+vE(r.getShaderSource(e),c)}else return o}function yE(r,e){const t=xE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function SE(r,e){let t;switch(e){case Ex:t="Linear";break;case Tx:t="Reinhard";break;case wx:t="Cineon";break;case Ax:t="ACESFilmic";break;case Rx:t="AgX";break;case bx:t="Neutral";break;case Cx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tu=new ie;function ME(){wt.getLuminanceCoefficients(tu);const r=tu.x.toFixed(4),e=tu.y.toFixed(4),t=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function TE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function wE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function fo(r){return r!==""}function Ug(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(r){return r.replace(AE,RE)}const CE=new Map;function RE(r,e){let t=lt[e];if(t===void 0){const s=CE.get(e);if(s!==void 0)t=lt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Vd(t)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(r){return r.replace(bE,PE)}function PE(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function kg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function LE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===a0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function DE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fa:case da:e="ENVMAP_TYPE_CUBE";break;case Tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case da:e="ENVMAP_MODE_REFRACTION";break}return e}function IE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case o0:e="ENVMAP_BLENDING_MULTIPLY";break;case Sx:e="ENVMAP_BLENDING_MIX";break;case Mx:e="ENVMAP_BLENDING_ADD";break}return e}function UE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function FE(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=LE(t),m=DE(t),g=NE(t),v=IE(t),x=UE(t),S=EE(t),T=TE(l),A=o.createProgram();let y,_,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(fo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(fo).join(`
`),_.length>0&&(_+=`
`)):(y=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),_=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?lt.tonemapping_pars_fragment:"",t.toneMapping!==Dr?SE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,yE("linearToOutputTexel",t.outputColorSpace),ME(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),c=Vd(c),c=Ug(c,t),c=Fg(c,t),d=Vd(d),d=Ug(d,t),d=Fg(d,t),c=Og(c),d=Og(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=I+y+c,R=I+_+d,H=Dg(o,o.VERTEX_SHADER,L),F=Dg(o,o.FRAGMENT_SHADER,R);o.attachShader(A,H),o.attachShader(A,F),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function N(B){if(r.debug.checkShaderErrors){const le=o.getProgramInfoLog(A).trim(),ne=o.getShaderInfoLog(H).trim(),fe=o.getShaderInfoLog(F).trim();let pe=!0,oe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,H,F);else{const ue=Ig(o,H,"vertex"),z=Ig(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+le+`
`+ue+`
`+z)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ne===""||fe==="")&&(oe=!1);oe&&(B.diagnostics={runnable:pe,programLog:le,vertexShader:{log:ne,prefix:y},fragmentShader:{log:fe,prefix:_}})}o.deleteShader(H),o.deleteShader(F),X=new uu(o,A),b=wE(o,A)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(A,gE)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_E++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=F,this}let OE=0;class kE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new zE(e),t.set(e,s)),s}}class zE{constructor(e){this.id=OE++,this.code=e,this.usedTimes=0}}function BE(r,e,t,s,o,l,c){const d=new sh,h=new kE,m=new Set,g=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,C,B,le,ne){const fe=le.fog,pe=ne.geometry,oe=b.isMeshStandardMaterial?le.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||oe),z=ue&&ue.mapping===Tu?ue.image.height:null,ae=T[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=re!==void 0?re.length:0;let J=0;pe.morphAttributes.position!==void 0&&(J=1),pe.morphAttributes.normal!==void 0&&(J=2),pe.morphAttributes.color!==void 0&&(J=3);let Ne,Z,ce,ye;if(ae){const St=Ai[ae];Ne=St.vertexShader,Z=St.fragmentShader}else Ne=b.vertexShader,Z=b.fragmentShader,h.update(b),ce=h.getVertexShaderID(b),ye=h.getFragmentShaderID(b);const ge=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Ae=ne.isInstancedMesh===!0,$e=ne.isBatchedMesh===!0,yt=!!b.map,it=!!b.matcap,Nt=!!ue,k=!!b.aoMap,En=!!b.lightMap,pt=!!b.bumpMap,ft=!!b.normalMap,Ye=!!b.displacementMap,Rt=!!b.emissiveMap,We=!!b.metalnessMap,P=!!b.roughnessMap,E=b.anisotropy>0,Q=b.clearcoat>0,me=b.dispersion>0,ve=b.iridescence>0,de=b.sheen>0,Xe=b.transmission>0,Ce=E&&!!b.anisotropyMap,Fe=Q&&!!b.clearcoatMap,ct=Q&&!!b.clearcoatNormalMap,Ee=Q&&!!b.clearcoatRoughnessMap,ke=ve&&!!b.iridescenceMap,Ke=ve&&!!b.iridescenceThicknessMap,et=de&&!!b.sheenColorMap,ze=de&&!!b.sheenRoughnessMap,dt=!!b.specularMap,rt=!!b.specularColorMap,At=!!b.specularIntensityMap,G=Xe&&!!b.transmissionMap,Re=Xe&&!!b.thicknessMap,se=!!b.gradientMap,he=!!b.alphaMap,De=b.alphaTest>0,Le=!!b.alphaHash,st=!!b.extensions;let Ut=Dr;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Qt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:Z,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:$e,batchingColor:$e&&ne._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&ne.instanceColor!==null,instancingMorph:Ae&&ne.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ma,alphaToCoverage:!!b.alphaToCoverage,map:yt,matcap:it,envMap:Nt,envMapMode:Nt&&ue.mapping,envMapCubeUVHeight:z,aoMap:k,lightMap:En,bumpMap:pt,normalMap:ft,displacementMap:x&&Ye,emissiveMap:Rt,normalMapObjectSpace:ft&&b.normalMapType===Ix,normalMapTangentSpace:ft&&b.normalMapType===Nx,metalnessMap:We,roughnessMap:P,anisotropy:E,anisotropyMap:Ce,clearcoat:Q,clearcoatMap:Fe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:ve,iridescenceMap:ke,iridescenceThicknessMap:Ke,sheen:de,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:dt,specularColorMap:rt,specularIntensityMap:At,transmission:Xe,transmissionMap:G,thicknessMap:Re,gradientMap:se,opaque:b.transparent===!1&&b.blending===oa&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:De,alphaHash:Le,combine:b.combine,mapUv:yt&&A(b.map.channel),aoMapUv:k&&A(b.aoMap.channel),lightMapUv:En&&A(b.lightMap.channel),bumpMapUv:pt&&A(b.bumpMap.channel),normalMapUv:ft&&A(b.normalMap.channel),displacementMapUv:Ye&&A(b.displacementMap.channel),emissiveMapUv:Rt&&A(b.emissiveMap.channel),metalnessMapUv:We&&A(b.metalnessMap.channel),roughnessMapUv:P&&A(b.roughnessMap.channel),anisotropyMapUv:Ce&&A(b.anisotropyMap.channel),clearcoatMapUv:Fe&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:et&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&A(b.sheenRoughnessMap.channel),specularMapUv:dt&&A(b.specularMap.channel),specularColorMapUv:rt&&A(b.specularColorMap.channel),specularIntensityMapUv:At&&A(b.specularIntensityMap.channel),transmissionMapUv:G&&A(b.transmissionMap.channel),thicknessMapUv:Re&&A(b.thicknessMap.channel),alphaMapUv:he&&A(b.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ft||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!pe.attributes.uv&&(yt||he),fog:!!fe,useFog:b.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:ne.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:yt&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Pt,decodeVideoTextureEmissive:Rt&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qi,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||$e)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Qt.vertexUv1s=m.has(1),Qt.vertexUv2s=m.has(2),Qt.vertexUv3s=m.has(3),m.clear(),Qt}function _(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)C.push(B),C.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(I(C,b),L(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function I(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function L(b,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),b.push(d.mask)}function R(b){const C=T[b.type];let B;if(C){const le=Ai[C];B=cy.clone(le.uniforms)}else B=b.uniforms;return B}function H(b,C){let B;for(let le=0,ne=g.length;le<ne;le++){const fe=g[le];if(fe.cacheKey===C){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new FE(r,C,b,l),g.push(B)),B}function F(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),b.destroy()}}function N(b){h.remove(b)}function X(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:H,releaseProgram:F,releaseShaderCache:N,programs:g,dispose:X}}function HE(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function s(c){r.delete(c)}function o(c,d,h){r.get(c)[d]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function VE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(v,x,S,T,A,y){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:T,renderOrder:v.renderOrder,z:A,group:y},r[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=y),e++,_}function d(v,x,S,T,A,y){const _=c(v,x,S,T,A,y);S.transmission>0?s.push(_):S.transparent===!0?o.push(_):t.push(_)}function h(v,x,S,T,A,y){const _=c(v,x,S,T,A,y);S.transmission>0?s.unshift(_):S.transparent===!0?o.unshift(_):t.unshift(_)}function m(v,x){t.length>1&&t.sort(v||VE),s.length>1&&s.sort(x||zg),o.length>1&&o.sort(x||zg)}function g(){for(let v=e,x=r.length;v<x;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:h,finish:g,sort:m}}function GE(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new Bg,r.set(s,[c])):o>=l.length?(c=new Bg,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function WE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new bt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function XE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let jE=0;function YE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function qE(r){const e=new WE,t=XE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ie);const o=new ie,l=new jt,c=new jt;function d(m){let g=0,v=0,x=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,T=0,A=0,y=0,_=0,I=0,L=0,R=0,H=0,F=0,N=0;m.sort(YE);for(let b=0,C=m.length;b<C;b++){const B=m[b],le=B.color,ne=B.intensity,fe=B.distance,pe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=le.r*ne,v+=le.g*ne,x+=le.b*ne;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(B.sh.coefficients[oe],ne);N++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ue=B.shadow,z=t.get(B);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,s.directionalShadow[S]=z,s.directionalShadowMap[S]=pe,s.directionalShadowMatrix[S]=B.shadow.matrix,I++}s.directional[S]=oe,S++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(le).multiplyScalar(ne),oe.distance=fe,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,s.spot[A]=oe;const ue=B.shadow;if(B.map&&(s.spotLightMap[H]=B.map,H++,ue.updateMatrices(B),B.castShadow&&F++),s.spotLightMatrix[A]=ue.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,s.spotShadow[A]=z,s.spotShadowMap[A]=pe,R++}A++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(le).multiplyScalar(ne),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=oe,y++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ue=B.shadow,z=t.get(B);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,z.shadowCameraNear=ue.camera.near,z.shadowCameraFar=ue.camera.far,s.pointShadow[T]=z,s.pointShadowMap[T]=pe,s.pointShadowMatrix[T]=B.shadow.matrix,L++}s.point[T]=oe,T++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(ne),oe.groundColor.copy(B.groundColor).multiplyScalar(ne),s.hemi[_]=oe,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==S||X.pointLength!==T||X.spotLength!==A||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==I||X.numPointShadows!==L||X.numSpotShadows!==R||X.numSpotMaps!==H||X.numLightProbes!==N)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=y,s.point.length=T,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+H-F,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=N,X.directionalLength=S,X.pointLength=T,X.spotLength=A,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=I,X.numPointShadows=L,X.numSpotShadows=R,X.numSpotMaps=H,X.numLightProbes=N,s.version=jE++)}function h(m,g){let v=0,x=0,S=0,T=0,A=0;const y=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const L=m[_];if(L.isDirectionalLight){const R=s.directional[v];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),v++}else if(L.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const R=s.rectArea[T];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),T++}else if(L.isPointLight){const R=s.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const R=s.hemi[A];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:d,setupView:h,state:s}}function Hg(r){const e=new qE(r),t=[],s=[];function o(g){m.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function c(g){s.push(g)}function d(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:c}}function $E(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new Hg(r),e.set(o,[d])):l>=c.length?(d=new Hg(r),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
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
}`;function QE(r,e,t){let s=new N0;const o=new xt,l=new xt,c=new qt,d=new yy({depthPacking:Dx}),h=new Sy,m={},g=t.maxTextureSize,v={[Ir]:zn,[zn]:Ir,[qi]:qi},x=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:KE,fragmentShader:ZE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Fr;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Zi(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a0;let _=this.type;this.render=function(F,N,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const b=r.getRenderTarget(),C=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),le=r.state;le.setBlending(Lr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ne=_!==ji&&this.type===ji,fe=_===ji&&this.type!==ji;for(let pe=0,oe=F.length;pe<oe;pe++){const ue=F[pe],z=ue.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const ae=z.getFrameExtents();if(o.multiply(ae),l.copy(z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ae.x),o.x=l.x*ae.x,z.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ae.y),o.y=l.y*ae.y,z.mapSize.y=l.y)),z.map===null||ne===!0||fe===!0){const U=this.type!==ji?{minFilter:_i,magFilter:_i}:{};z.map!==null&&z.map.dispose(),z.map=new ps(o.x,o.y,U),z.map.texture.name=ue.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const re=z.getViewportCount();for(let U=0;U<re;U++){const J=z.getViewport(U);c.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),le.viewport(c),z.updateMatrices(ue,U),s=z.getFrustum(),R(N,X,z.camera,ue,this.type)}z.isPointLightShadow!==!0&&this.type===ji&&I(z,X),z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(b,C,B)};function I(F,N){const X=e.update(A);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ps(o.x,o.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(N,null,X,x,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(N,null,X,S,A,null)}function L(F,N,X,b){let C=null;const B=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)C=B;else if(C=X.isPointLight===!0?h:d,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const le=C.uuid,ne=N.uuid;let fe=m[le];fe===void 0&&(fe={},m[le]=fe);let pe=fe[ne];pe===void 0&&(pe=C.clone(),fe[ne]=pe,N.addEventListener("dispose",H)),C=pe}if(C.visible=N.visible,C.wireframe=N.wireframe,b===ji?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:v[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=r.properties.get(C);le.light=X}return C}function R(F,N,X,b,C){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===ji)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const ne=e.update(F),fe=F.material;if(Array.isArray(fe)){const pe=ne.groups;for(let oe=0,ue=pe.length;oe<ue;oe++){const z=pe[oe],ae=fe[z.materialIndex];if(ae&&ae.visible){const re=L(F,ae,b,C);F.onBeforeShadow(r,F,N,X,ne,re,z),r.renderBufferDirect(X,null,ne,re,F,z),F.onAfterShadow(r,F,N,X,ne,re,z)}}}else if(fe.visible){const pe=L(F,fe,b,C);F.onBeforeShadow(r,F,N,X,ne,pe,null),r.renderBufferDirect(X,null,ne,pe,F,null),F.onAfterShadow(r,F,N,X,ne,pe,null)}}const le=F.children;for(let ne=0,fe=le.length;ne<fe;ne++)R(le[ne],N,X,b,C)}function H(F){F.target.removeEventListener("dispose",H);for(const X in m){const b=m[X],C=F.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const JE={[nd]:id,[rd]:od,[sd]:ld,[ca]:ad,[id]:nd,[od]:rd,[ld]:sd,[ad]:ca};function eT(r,e){function t(){let G=!1;const Re=new qt;let se=null;const he=new qt(0,0,0,0);return{setMask:function(De){se!==De&&!G&&(r.colorMask(De,De,De,De),se=De)},setLocked:function(De){G=De},setClear:function(De,Le,st,Ut,Qt){Qt===!0&&(De*=Ut,Le*=Ut,st*=Ut),Re.set(De,Le,st,Ut),he.equals(Re)===!1&&(r.clearColor(De,Le,st,Ut),he.copy(Re))},reset:function(){G=!1,se=null,he.set(-1,0,0,0)}}}function s(){let G=!1,Re=!1,se=null,he=null,De=null;return{setReversed:function(Le){if(Re!==Le){const st=e.get("EXT_clip_control");Re?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=De;De=null,this.setClear(Ut)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?ge(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Le){se!==Le&&!G&&(r.depthMask(Le),se=Le)},setFunc:function(Le){if(Re&&(Le=JE[Le]),he!==Le){switch(Le){case nd:r.depthFunc(r.NEVER);break;case id:r.depthFunc(r.ALWAYS);break;case rd:r.depthFunc(r.LESS);break;case ca:r.depthFunc(r.LEQUAL);break;case sd:r.depthFunc(r.EQUAL);break;case ad:r.depthFunc(r.GEQUAL);break;case od:r.depthFunc(r.GREATER);break;case ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=Le}},setLocked:function(Le){G=Le},setClear:function(Le){De!==Le&&(Re&&(Le=1-Le),r.clearDepth(Le),De=Le)},reset:function(){G=!1,se=null,he=null,De=null,Re=!1}}}function o(){let G=!1,Re=null,se=null,he=null,De=null,Le=null,st=null,Ut=null,Qt=null;return{setTest:function(St){G||(St?ge(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(St){Re!==St&&!G&&(r.stencilMask(St),Re=St)},setFunc:function(St,Ln,Tn){(se!==St||he!==Ln||De!==Tn)&&(r.stencilFunc(St,Ln,Tn),se=St,he=Ln,De=Tn)},setOp:function(St,Ln,Tn){(Le!==St||st!==Ln||Ut!==Tn)&&(r.stencilOp(St,Ln,Tn),Le=St,st=Ln,Ut=Tn)},setLocked:function(St){G=St},setClear:function(St){Qt!==St&&(r.clearStencil(St),Qt=St)},reset:function(){G=!1,Re=null,se=null,he=null,De=null,Le=null,st=null,Ut=null,Qt=null}}}const l=new t,c=new s,d=new o,h=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,S=[],T=null,A=!1,y=null,_=null,I=null,L=null,R=null,H=null,F=null,N=new bt(0,0,0),X=0,b=!1,C=null,B=null,le=null,ne=null,fe=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ue=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(z)[1]),oe=ue>=1):z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),oe=ue>=2);let ae=null,re={};const U=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),Ne=new qt().fromArray(U),Z=new qt().fromArray(J);function ce(G,Re,se,he){const De=new Uint8Array(4),Le=r.createTexture();r.bindTexture(G,Le),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<se;st++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Re+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Le}const ye={};ye[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ge(r.DEPTH_TEST),c.setFunc(ca),pt(!1),ft(Gm),ge(r.CULL_FACE),k(Lr);function ge(G){g[G]!==!0&&(r.enable(G),g[G]=!0)}function we(G){g[G]!==!1&&(r.disable(G),g[G]=!1)}function Ae(G,Re){return v[G]!==Re?(r.bindFramebuffer(G,Re),v[G]=Re,G===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Re),G===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function $e(G,Re){let se=S,he=!1;if(G){se=x.get(Re),se===void 0&&(se=[],x.set(Re,se));const De=G.textures;if(se.length!==De.length||se[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,st=De.length;Le<st;Le++)se[Le]=r.COLOR_ATTACHMENT0+Le;se.length=De.length,he=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,he=!0);he&&r.drawBuffers(se)}function yt(G){return T!==G?(r.useProgram(G),T=G,!0):!1}const it={[ss]:r.FUNC_ADD,[rx]:r.FUNC_SUBTRACT,[sx]:r.FUNC_REVERSE_SUBTRACT};it[ax]=r.MIN,it[ox]=r.MAX;const Nt={[lx]:r.ZERO,[ux]:r.ONE,[cx]:r.SRC_COLOR,[ed]:r.SRC_ALPHA,[gx]:r.SRC_ALPHA_SATURATE,[px]:r.DST_COLOR,[dx]:r.DST_ALPHA,[fx]:r.ONE_MINUS_SRC_COLOR,[td]:r.ONE_MINUS_SRC_ALPHA,[mx]:r.ONE_MINUS_DST_COLOR,[hx]:r.ONE_MINUS_DST_ALPHA,[_x]:r.CONSTANT_COLOR,[vx]:r.ONE_MINUS_CONSTANT_COLOR,[xx]:r.CONSTANT_ALPHA,[yx]:r.ONE_MINUS_CONSTANT_ALPHA};function k(G,Re,se,he,De,Le,st,Ut,Qt,St){if(G===Lr){A===!0&&(we(r.BLEND),A=!1);return}if(A===!1&&(ge(r.BLEND),A=!0),G!==ix){if(G!==y||St!==b){if((_!==ss||R!==ss)&&(r.blendEquation(r.FUNC_ADD),_=ss,R=ss),St)switch(G){case oa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wm:r.blendFunc(r.ONE,r.ONE);break;case Xm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case oa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,L=null,H=null,F=null,N.set(0,0,0),X=0,y=G,b=St}return}De=De||Re,Le=Le||se,st=st||he,(Re!==_||De!==R)&&(r.blendEquationSeparate(it[Re],it[De]),_=Re,R=De),(se!==I||he!==L||Le!==H||st!==F)&&(r.blendFuncSeparate(Nt[se],Nt[he],Nt[Le],Nt[st]),I=se,L=he,H=Le,F=st),(Ut.equals(N)===!1||Qt!==X)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Qt),N.copy(Ut),X=Qt),y=G,b=!1}function En(G,Re){G.side===qi?we(r.CULL_FACE):ge(r.CULL_FACE);let se=G.side===zn;Re&&(se=!se),pt(se),G.blending===oa&&G.transparent===!1?k(Lr):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const he=G.stencilWrite;d.setTest(he),he&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Rt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){C!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),C=G)}function ft(G){G!==ex?(ge(r.CULL_FACE),G!==B&&(G===Gm?r.cullFace(r.BACK):G===tx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),B=G}function Ye(G){G!==le&&(oe&&r.lineWidth(G),le=G)}function Rt(G,Re,se){G?(ge(r.POLYGON_OFFSET_FILL),(ne!==Re||fe!==se)&&(r.polygonOffset(Re,se),ne=Re,fe=se)):we(r.POLYGON_OFFSET_FILL)}function We(G){G?ge(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function P(G){G===void 0&&(G=r.TEXTURE0+pe-1),ae!==G&&(r.activeTexture(G),ae=G)}function E(G,Re,se){se===void 0&&(ae===null?se=r.TEXTURE0+pe-1:se=ae);let he=re[se];he===void 0&&(he={type:void 0,texture:void 0},re[se]=he),(he.type!==G||he.texture!==Re)&&(ae!==se&&(r.activeTexture(se),ae=se),r.bindTexture(G,Re||ye[G]),he.type=G,he.texture=Re)}function Q(){const G=re[ae];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){Ne.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function ze(G){Z.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function dt(G,Re){let se=m.get(Re);se===void 0&&(se=new WeakMap,m.set(Re,se));let he=se.get(G);he===void 0&&(he=r.getUniformBlockIndex(Re,G.name),se.set(G,he))}function rt(G,Re){const he=m.get(Re).get(G);h.get(Re)!==he&&(r.uniformBlockBinding(Re,he,G.__bindingPointIndex),h.set(Re,he))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ae=null,re={},v={},x=new WeakMap,S=[],T=null,A=!1,y=null,_=null,I=null,L=null,R=null,H=null,F=null,N=new bt(0,0,0),X=0,b=!1,C=null,B=null,le=null,ne=null,fe=null,Ne.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ge,disable:we,bindFramebuffer:Ae,drawBuffers:$e,useProgram:yt,setBlending:k,setMaterial:En,setFlipSided:pt,setCullFace:ft,setLineWidth:Ye,setPolygonOffset:Rt,setScissorTest:We,activeTexture:P,bindTexture:E,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:ke,texImage3D:Ke,updateUBOMapping:dt,uniformBlockBinding:rt,texStorage2D:ct,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:Xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:et,viewport:ze,reset:At}}function tT(r,e,t,s,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new xt,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,E){return S?new OffscreenCanvas(P,E):go("canvas")}function A(P,E,Q){let me=1;const ve=We(P);if((ve.width>Q||ve.height>Q)&&(me=Q/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(me*ve.width),Xe=Math.floor(me*ve.height);v===void 0&&(v=T(de,Xe));const Ce=E?T(de,Xe):v;return Ce.width=de,Ce.height=Xe,Ce.getContext("2d").drawImage(P,0,0,de,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Xe+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function y(P){return P.generateMipmaps}function _(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,E,Q,me,ve=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=E;if(E===r.RED&&(Q===r.FLOAT&&(de=r.R32F),Q===r.HALF_FLOAT&&(de=r.R16F),Q===r.UNSIGNED_BYTE&&(de=r.R8)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.R8UI),Q===r.UNSIGNED_SHORT&&(de=r.R16UI),Q===r.UNSIGNED_INT&&(de=r.R32UI),Q===r.BYTE&&(de=r.R8I),Q===r.SHORT&&(de=r.R16I),Q===r.INT&&(de=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(de=r.RG32F),Q===r.HALF_FLOAT&&(de=r.RG16F),Q===r.UNSIGNED_BYTE&&(de=r.RG8)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RG8UI),Q===r.UNSIGNED_SHORT&&(de=r.RG16UI),Q===r.UNSIGNED_INT&&(de=r.RG32UI),Q===r.BYTE&&(de=r.RG8I),Q===r.SHORT&&(de=r.RG16I),Q===r.INT&&(de=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(de=r.RGB16UI),Q===r.UNSIGNED_INT&&(de=r.RGB32UI),Q===r.BYTE&&(de=r.RGB8I),Q===r.SHORT&&(de=r.RGB16I),Q===r.INT&&(de=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),Q===r.UNSIGNED_INT&&(de=r.RGBA32UI),Q===r.BYTE&&(de=r.RGBA8I),Q===r.SHORT&&(de=r.RGBA16I),Q===r.INT&&(de=r.RGBA32I)),E===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),E===r.RGBA){const Xe=ve?mu:wt.getTransfer(me);Q===r.FLOAT&&(de=r.RGBA32F),Q===r.HALF_FLOAT&&(de=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(de=Xe===Pt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(P,E){let Q;return P?E===null||E===hs||E===ha?Q=r.DEPTH24_STENCIL8:E===$i?Q=r.DEPTH32F_STENCIL8:E===mo&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hs||E===ha?Q=r.DEPTH_COMPONENT24:E===$i?Q=r.DEPTH_COMPONENT32F:E===mo&&(Q=r.DEPTH_COMPONENT16),Q}function H(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==_i&&P.minFilter!==bi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=P.target;E.removeEventListener("dispose",F),X(E),E.isVideoTexture&&g.delete(E)}function N(P){const E=P.target;E.removeEventListener("dispose",N),C(E)}function X(P){const E=s.get(P);if(E.__webglInit===void 0)return;const Q=P.source,me=x.get(Q);if(me){const ve=me[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(P),Object.keys(me).length===0&&x.delete(Q)}s.remove(P)}function b(P){const E=s.get(P);r.deleteTexture(E.__webglTexture);const Q=P.source,me=x.get(Q);delete me[E.__cacheKey],c.memory.textures--}function C(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let ve=0;ve<E.__webglFramebuffer[me].length;ve++)r.deleteFramebuffer(E.__webglFramebuffer[me][ve]);else r.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)r.deleteFramebuffer(E.__webglFramebuffer[me]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=P.textures;for(let me=0,ve=Q.length;me<ve;me++){const de=s.get(Q[me]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),c.memory.textures--),s.remove(Q[me])}s.remove(P)}let B=0;function le(){B=0}function ne(){const P=B;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),B+=1,P}function fe(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function pe(P,E){const Q=s.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,P,E);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function oe(P,E){const Q=s.get(P);if(P.version>0&&Q.__version!==P.version){Z(Q,P,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function ue(P,E){const Q=s.get(P);if(P.version>0&&Q.__version!==P.version){Z(Q,P,E);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function z(P,E){const Q=s.get(P);if(P.version>0&&Q.__version!==P.version){ce(Q,P,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const ae={[fd]:r.REPEAT,[os]:r.CLAMP_TO_EDGE,[dd]:r.MIRRORED_REPEAT},re={[_i]:r.NEAREST,[Px]:r.NEAREST_MIPMAP_NEAREST,[Dl]:r.NEAREST_MIPMAP_LINEAR,[bi]:r.LINEAR,[_f]:r.LINEAR_MIPMAP_NEAREST,[ls]:r.LINEAR_MIPMAP_LINEAR},U={[Ux]:r.NEVER,[Hx]:r.ALWAYS,[Fx]:r.LESS,[x0]:r.LEQUAL,[Ox]:r.EQUAL,[Bx]:r.GEQUAL,[kx]:r.GREATER,[zx]:r.NOTEQUAL};function J(P,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bi||E.magFilter===_f||E.magFilter===Dl||E.magFilter===ls||E.minFilter===bi||E.minFilter===_f||E.minFilter===Dl||E.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ae[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ae[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ae[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,re[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_i||E.minFilter!==Dl&&E.minFilter!==ls||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(P,E){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const me=E.source;let ve=x.get(me);ve===void 0&&(ve={},x.set(me,ve));const de=fe(E);if(de!==P.__cacheKey){ve[de]===void 0&&(ve[de]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ve[de].usedTimes++;const Xe=ve[P.__cacheKey];Xe!==void 0&&(ve[P.__cacheKey].usedTimes--,Xe.usedTimes===0&&b(E)),P.__cacheKey=de,P.__webglTexture=ve[de].texture}return Q}function Z(P,E,Q){let me=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=r.TEXTURE_3D);const ve=Ne(P,E),de=E.source;t.bindTexture(me,P.__webglTexture,r.TEXTURE0+Q);const Xe=s.get(de);if(de.version!==Xe.__version||ve===!0){t.activeTexture(r.TEXTURE0+Q);const Ce=wt.getPrimaries(wt.workingColorSpace),Fe=E.colorSpace===Pr?null:wt.getPrimaries(E.colorSpace),ct=E.colorSpace===Pr||Ce===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Ee=A(E.image,!1,o.maxTextureSize);Ee=Rt(E,Ee);const ke=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type);let et=L(E.internalFormat,ke,Ke,E.colorSpace,E.isVideoTexture);J(me,E);let ze;const dt=E.mipmaps,rt=E.isVideoTexture!==!0,At=Xe.__version===void 0||ve===!0,G=de.dataReady,Re=H(E,Ee);if(E.isDepthTexture)et=R(E.format===pa,E.type),At&&(rt?t.texStorage2D(r.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ke,Ke,null));else if(E.isDataTexture)if(dt.length>0){rt&&At&&t.texStorage2D(r.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let se=0,he=dt.length;se<he;se++)ze=dt[se],rt?G&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ze.width,ze.height,ke,Ke,ze.data):t.texImage2D(r.TEXTURE_2D,se,et,ze.width,ze.height,0,ke,Ke,ze.data);E.generateMipmaps=!1}else rt?(At&&t.texStorage2D(r.TEXTURE_2D,Re,et,Ee.width,Ee.height),G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,Ke,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,et,Ee.width,Ee.height,0,ke,Ke,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,dt[0].width,dt[0].height,Ee.depth);for(let se=0,he=dt.length;se<he;se++)if(ze=dt[se],E.format!==gi)if(ke!==null)if(rt){if(G)if(E.layerUpdates.size>0){const De=_g(ze.width,ze.height,E.format,E.type);for(const Le of E.layerUpdates){const st=ze.data.subarray(Le*De/ze.data.BYTES_PER_ELEMENT,(Le+1)*De/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,Le,ze.width,ze.height,1,ke,st)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ze.width,ze.height,Ee.depth,ke,ze.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,et,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ze.width,ze.height,Ee.depth,ke,Ke,ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,et,ze.width,ze.height,Ee.depth,0,ke,Ke,ze.data)}else{rt&&At&&t.texStorage2D(r.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let se=0,he=dt.length;se<he;se++)ze=dt[se],E.format!==gi?ke!==null?rt?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(r.TEXTURE_2D,se,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ze.width,ze.height,ke,Ke,ze.data):t.texImage2D(r.TEXTURE_2D,se,et,ze.width,ze.height,0,ke,Ke,ze.data)}else if(E.isDataArrayTexture)if(rt){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,Ee.width,Ee.height,Ee.depth),G)if(E.layerUpdates.size>0){const se=_g(Ee.width,Ee.height,E.format,E.type);for(const he of E.layerUpdates){const De=Ee.data.subarray(he*se/Ee.data.BYTES_PER_ELEMENT,(he+1)*se/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,ke,Ke,De)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Ke,Ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,ke,Ke,Ee.data);else if(E.isData3DTexture)rt?(At&&t.texStorage3D(r.TEXTURE_3D,Re,et,Ee.width,Ee.height,Ee.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Ke,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,ke,Ke,Ee.data);else if(E.isFramebufferTexture){if(At)if(rt)t.texStorage2D(r.TEXTURE_2D,Re,et,Ee.width,Ee.height);else{let se=Ee.width,he=Ee.height;for(let De=0;De<Re;De++)t.texImage2D(r.TEXTURE_2D,De,et,se,he,0,ke,Ke,null),se>>=1,he>>=1}}else if(dt.length>0){if(rt&&At){const se=We(dt[0]);t.texStorage2D(r.TEXTURE_2D,Re,et,se.width,se.height)}for(let se=0,he=dt.length;se<he;se++)ze=dt[se],rt?G&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ke,Ke,ze):t.texImage2D(r.TEXTURE_2D,se,et,ke,Ke,ze);E.generateMipmaps=!1}else if(rt){if(At){const se=We(Ee);t.texStorage2D(r.TEXTURE_2D,Re,et,se.width,se.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Ke,Ee)}else t.texImage2D(r.TEXTURE_2D,0,et,ke,Ke,Ee);y(E)&&_(me),Xe.__version=de.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ce(P,E,Q){if(E.image.length!==6)return;const me=Ne(P,E),ve=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Q);const de=s.get(ve);if(ve.version!==de.__version||me===!0){t.activeTexture(r.TEXTURE0+Q);const Xe=wt.getPrimaries(wt.workingColorSpace),Ce=E.colorSpace===Pr?null:wt.getPrimaries(E.colorSpace),Fe=E.colorSpace===Pr||Xe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ct=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,ke=[];for(let he=0;he<6;he++)!ct&&!Ee?ke[he]=A(E.image[he],!0,o.maxCubemapSize):ke[he]=Ee?E.image[he].image:E.image[he],ke[he]=Rt(E,ke[he]);const Ke=ke[0],et=l.convert(E.format,E.colorSpace),ze=l.convert(E.type),dt=L(E.internalFormat,et,ze,E.colorSpace),rt=E.isVideoTexture!==!0,At=de.__version===void 0||me===!0,G=ve.dataReady;let Re=H(E,Ke);J(r.TEXTURE_CUBE_MAP,E);let se;if(ct){rt&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,Ke.width,Ke.height);for(let he=0;he<6;he++){se=ke[he].mipmaps;for(let De=0;De<se.length;De++){const Le=se[De];E.format!==gi?et!==null?rt?G&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Le.width,Le.height,et,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,dt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Le.width,Le.height,et,ze,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,dt,Le.width,Le.height,0,et,ze,Le.data)}}}else{if(se=E.mipmaps,rt&&At){se.length>0&&Re++;const he=We(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke[he].width,ke[he].height,et,ze,ke[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,ke[he].width,ke[he].height,0,et,ze,ke[he].data);for(let De=0;De<se.length;De++){const st=se[De].image[he].image;rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,st.width,st.height,et,ze,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,dt,st.width,st.height,0,et,ze,st.data)}}else{rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,ze,ke[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,et,ze,ke[he]);for(let De=0;De<se.length;De++){const Le=se[De];rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,et,ze,Le.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,dt,et,ze,Le.image[he])}}}y(E)&&_(r.TEXTURE_CUBE_MAP),de.__version=ve.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ye(P,E,Q,me,ve,de){const Xe=l.convert(Q.format,Q.colorSpace),Ce=l.convert(Q.type),Fe=L(Q.internalFormat,Xe,Ce,Q.colorSpace),ct=s.get(E),Ee=s.get(Q);if(Ee.__renderTarget=E,!ct.__hasExternalTextures){const ke=Math.max(1,E.width>>de),Ke=Math.max(1,E.height>>de);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Fe,ke,Ke,E.depth,0,Xe,Ce,null):t.texImage2D(ve,de,Fe,ke,Ke,0,Xe,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ft(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ve,Ee.__webglTexture,0,pt(E)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ve,Ee.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(P,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const me=E.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=R(E.stencilBuffer,ve),Xe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=pt(E);ft(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,de,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,P)}else{const me=E.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],Xe=l.convert(de.format,de.colorSpace),Ce=l.convert(de.type),Fe=L(de.internalFormat,Xe,Ce,de.colorSpace),ct=pt(E);Q&&ft(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Fe,E.width,E.height):ft(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(E.depthTexture);me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe(E.depthTexture,0);const ve=me.__webglTexture,de=pt(E);if(E.depthTexture.format===la)ft(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(E.depthTexture.format===pa)ft(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ae(P){const E=s.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=me}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");we(E.__webglFramebuffer,P)}else if(Q){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=r.createRenderbuffer(),ge(E.__webglDepthbuffer[me],P,!1);else{const ve=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,de)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ge(E.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(P,E,Q){const me=s.get(P);E!==void 0&&ye(me.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Ae(P)}function yt(P){const E=P.texture,Q=s.get(P),me=s.get(E);P.addEventListener("dispose",N);const ve=P.textures,de=P.isWebGLCubeRenderTarget===!0,Xe=ve.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=E.version,c.memory.textures++),de){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)Q.__webglFramebuffer[Ce][Fe]=r.createFramebuffer()}else Q.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ct=s.get(ve[Ce]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&ft(P)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Fe=ve[Ce];Q.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const ct=l.convert(Fe.format,Fe.colorSpace),Ee=l.convert(Fe.type),ke=L(Fe.internalFormat,ct,Ee,Fe.colorSpace,P.isXRRenderTarget===!0),Ke=pt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,ke,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(Q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),J(r.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)ye(Q.__webglFramebuffer[Ce][Fe],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else ye(Q.__webglFramebuffer[Ce],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(E)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ct=ve[Ce],Ee=s.get(ct);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),J(r.TEXTURE_2D,ct),ye(Q.__webglFramebuffer,P,ct,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(ct)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),J(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)ye(Q.__webglFramebuffer[Fe],P,E,r.COLOR_ATTACHMENT0,Ce,Fe);else ye(Q.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,Ce,0);y(E)&&_(Ce),t.unbindTexture()}P.depthBuffer&&Ae(P)}function it(P){const E=P.textures;for(let Q=0,me=E.length;Q<me;Q++){const ve=E[Q];if(y(ve)){const de=I(P),Xe=s.get(ve).__webglTexture;t.bindTexture(de,Xe),_(de),t.unbindTexture()}}}const Nt=[],k=[];function En(P){if(P.samples>0){if(ft(P)===!1){const E=P.textures,Q=P.width,me=P.height;let ve=r.COLOR_BUFFER_BIT;const de=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=s.get(P),Ce=E.length>1;if(Ce)for(let Fe=0;Fe<E.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ct=s.get(E[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,Q,me,0,0,Q,me,ve,r.NEAREST),h===!0&&(Nt.length=0,k.length=0,Nt.push(r.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Nt.push(de),k.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<E.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ct=s.get(E[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ct,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function pt(P){return Math.min(o.maxSamples,P.samples)}function ft(P){const E=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(P){const E=c.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Rt(P,E){const Q=P.colorSpace,me=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==ma&&Q!==Pr&&(wt.getTransfer(Q)===Pt?(me!==gi||ve!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=ne,this.resetTextureUnits=le,this.setTexture2D=pe,this.setTexture2DArray=oe,this.setTexture3D=ue,this.setTextureCube=z,this.rebindTextures=$e,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ft}function nT(r,e){function t(s,o=Pr){let l;const c=wt.getTransfer(o);if(s===Ji)return r.UNSIGNED_BYTE;if(s===Jd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===f0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===u0)return r.BYTE;if(s===c0)return r.SHORT;if(s===mo)return r.UNSIGNED_SHORT;if(s===Qd)return r.INT;if(s===hs)return r.UNSIGNED_INT;if(s===$i)return r.FLOAT;if(s===vo)return r.HALF_FLOAT;if(s===d0)return r.ALPHA;if(s===h0)return r.RGB;if(s===gi)return r.RGBA;if(s===p0)return r.LUMINANCE;if(s===m0)return r.LUMINANCE_ALPHA;if(s===la)return r.DEPTH_COMPONENT;if(s===pa)return r.DEPTH_STENCIL;if(s===g0)return r.RED;if(s===th)return r.RED_INTEGER;if(s===_0)return r.RG;if(s===nh)return r.RG_INTEGER;if(s===ih)return r.RGBA_INTEGER;if(s===ru||s===su||s===au||s===ou)if(c===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ru)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ou)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ru)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===su)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ou)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hd||s===pd||s===md||s===gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===hd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===md)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d||s===vd||s===xd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===_d||s===vd)return c===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===xd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yd||s===Sd||s===Md||s===Ed||s===Td||s===wd||s===Ad||s===Cd||s===Rd||s===bd||s===Pd||s===Ld||s===Dd||s===Nd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===yd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Md)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ed)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Td)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ad)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ld)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nd)return c===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lu||s===Id||s===Ud)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===lu)return c===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Id)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ud)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===v0||s===Fd||s===Od||s===kd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===lu)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Fd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Od)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ha?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const iT={type:"move"};class Yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,s),_=this._getHandJoint(m,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iT)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new co;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
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

}`;class aT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Pn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ur({vertexShader:rT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zi(new wu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oT extends Ma{constructor(e,t){super();const s=this;let o=null,l=1,c=null,d="local-floor",h=1,m=null,g=null,v=null,x=null,S=null,T=null;const A=new aT,y=t.getContextAttributes();let _=null,I=null;const L=[],R=[],H=new xt;let F=null;const N=new ni;N.viewport=new qt;const X=new ni;X.viewport=new qt;const b=[N,X],C=new Cy;let B=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=L[Z];return ce===void 0&&(ce=new Yf,L[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=L[Z];return ce===void 0&&(ce=new Yf,L[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=L[Z];return ce===void 0&&(ce=new Yf,L[Z]=ce),ce.getHandSpace()};function ne(Z){const ce=R.indexOf(Z.inputSource);if(ce===-1)return;const ye=L[ce];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,m||c),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){o.removeEventListener("select",ne),o.removeEventListener("selectstart",ne),o.removeEventListener("selectend",ne),o.removeEventListener("squeeze",ne),o.removeEventListener("squeezestart",ne),o.removeEventListener("squeezeend",ne),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<L.length;Z++){const ce=R[Z];ce!==null&&(R[Z]=null,L[Z].disconnect(ce))}B=null,le=null,A.reset(),e.setRenderTarget(_),S=null,x=null,v=null,o=null,I=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",ne),o.addEventListener("selectstart",ne),o.addEventListener("selectend",ne),o.addEventListener("squeeze",ne),o.addEventListener("squeezestart",ne),o.addEventListener("squeezeend",ne),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(H),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let ye=null,ge=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?pa:la,ge=y.stencil?ha:hs);const Ae={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};v=new XRWebGLBinding(o,t),x=v.createProjectionLayer(Ae),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new ps(x.textureWidth,x.textureHeight,{format:gi,type:Ji,depthTexture:new I0(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new ps(S.framebufferWidth,S.framebufferHeight,{format:gi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}I.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await o.requestReferenceSpace(d),Ne.setContext(o),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(Z){for(let ce=0;ce<Z.removed.length;ce++){const ye=Z.removed[ce],ge=R.indexOf(ye);ge>=0&&(R[ge]=null,L[ge].disconnect(ye))}for(let ce=0;ce<Z.added.length;ce++){const ye=Z.added[ce];let ge=R.indexOf(ye);if(ge===-1){for(let Ae=0;Ae<L.length;Ae++)if(Ae>=R.length){R.push(ye),ge=Ae;break}else if(R[Ae]===null){R[Ae]=ye,ge=Ae;break}if(ge===-1)break}const we=L[ge];we&&we.connect(ye)}}const oe=new ie,ue=new ie;function z(Z,ce,ye){oe.setFromMatrixPosition(ce.matrixWorld),ue.setFromMatrixPosition(ye.matrixWorld);const ge=oe.distanceTo(ue),we=ce.projectionMatrix.elements,Ae=ye.projectionMatrix.elements,$e=we[14]/(we[10]-1),yt=we[14]/(we[10]+1),it=(we[9]+1)/we[5],Nt=(we[9]-1)/we[5],k=(we[8]-1)/we[0],En=(Ae[8]+1)/Ae[0],pt=$e*k,ft=$e*En,Ye=ge/(-k+En),Rt=Ye*-k;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Rt),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const We=$e+Ye,P=yt+Ye,E=pt-Rt,Q=ft+(ge-Rt),me=it*yt/P*We,ve=Nt*yt/P*We;Z.projectionMatrix.makePerspective(E,Q,me,ve,We,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ce=Z.near,ye=Z.far;A.texture!==null&&(A.depthNear>0&&(ce=A.depthNear),A.depthFar>0&&(ye=A.depthFar)),C.near=X.near=N.near=ce,C.far=X.far=N.far=ye,(B!==C.near||le!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,le=C.far),N.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,C.layers.mask=N.layers.mask|X.layers.mask;const ge=Z.parent,we=C.cameras;ae(C,ge);for(let Ae=0;Ae<we.length;Ae++)ae(we[Ae],ge);we.length===2?z(C,N,X):C.projectionMatrix.copy(N.projectionMatrix),re(Z,C,ge)};function re(Z,ce,ye){ye===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Bd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Z){h=Z,x!==null&&(x.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let U=null;function J(Z,ce){if(g=ce.getViewerPose(m||c),T=ce,g!==null){const ye=g.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let ge=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,ge=!0);for(let Ae=0;Ae<ye.length;Ae++){const $e=ye[Ae];let yt=null;if(S!==null)yt=S.getViewport($e);else{const Nt=v.getViewSubImage(x,$e);yt=Nt.viewport,Ae===0&&(e.setRenderTargetTextures(I,Nt.colorTexture,x.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(I))}let it=b[Ae];it===void 0&&(it=new ni,it.layers.enable(Ae),it.viewport=new qt,b[Ae]=it),it.matrix.fromArray($e.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray($e.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(yt.x,yt.y,yt.width,yt.height),Ae===0&&(C.matrix.copy(it.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ge===!0&&C.cameras.push(it)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ae=v.getDepthInformation(ye[0]);Ae&&Ae.isValid&&Ae.texture&&A.init(e,Ae,o.renderState)}}for(let ye=0;ye<L.length;ye++){const ge=R[ye],we=L[ye];ge!==null&&we!==void 0&&we.update(ge,ce,m||c)}U&&U(Z,ce),ce.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ce}),T=null}const Ne=new U0;Ne.setAnimationLoop(J),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const ns=new er,lT=new jt;function uT(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,R0(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,I,L,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),A(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?h(y,_,I,L):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===zn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===zn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),L=I.envMap,R=I.envMapRotation;L&&(y.envMap.value=L,ns.copy(R),ns.x*=-1,ns.y*=-1,ns.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),y.envMapRotation.value.setFromMatrix4(lT.makeRotationFromEuler(ns)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,I,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function cT(r,e,t,s){let o={},l={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const R=L.program;s.uniformBlockBinding(I,R)}function m(I,L){let R=o[I.id];R===void 0&&(T(I),R=g(I),o[I.id]=R,I.addEventListener("dispose",y));const H=L.program;s.updateUBOMapping(I,H);const F=e.render.frame;l[I.id]!==F&&(x(I),l[I.id]=F)}function g(I){const L=v();I.__bindingPointIndex=L;const R=r.createBuffer(),H=I.__size,F=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,H,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,R),R}function v(){for(let I=0;I<d;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const L=o[I.id],R=I.uniforms,H=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,N=R.length;F<N;F++){const X=Array.isArray(R[F])?R[F]:[R[F]];for(let b=0,C=X.length;b<C;b++){const B=X[b];if(S(B,F,b,H)===!0){const le=B.__offset,ne=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let pe=0;pe<ne.length;pe++){const oe=ne[pe],ue=A(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,le+fe,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,fe),fe+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,le,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(I,L,R,H){const F=I.value,N=L+"_"+R;if(H[N]===void 0)return typeof F=="number"||typeof F=="boolean"?H[N]=F:H[N]=F.clone(),!0;{const X=H[N];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return H[N]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function T(I){const L=I.uniforms;let R=0;const H=16;for(let N=0,X=L.length;N<X;N++){const b=Array.isArray(L[N])?L[N]:[L[N]];for(let C=0,B=b.length;C<B;C++){const le=b[C],ne=Array.isArray(le.value)?le.value:[le.value];for(let fe=0,pe=ne.length;fe<pe;fe++){const oe=ne[fe],ue=A(oe),z=R%H,ae=z%ue.boundary,re=z+ae;R+=ae,re!==0&&H-re<ue.storage&&(R+=H-re),le.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=ue.storage}}}const F=R%H;return F>0&&(R+=H-F),I.__size=R,I.__cache={},this}function A(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function y(I){const L=I.target;L.removeEventListener("dispose",y);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function _(){for(const I in o)r.deleteBuffer(o[I]);c=[],o={},l={}}return{bind:h,update:m,dispose:_}}class fT{constructor(e={}){const{canvas:t=Gx(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),A=new Int32Array(4);let y=null,_=null;const I=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=Dr,this.toneMappingExposure=1;const R=this;let H=!1,F=0,N=0,X=null,b=-1,C=null;const B=new qt,le=new qt;let ne=null;const fe=new bt(0);let pe=0,oe=t.width,ue=t.height,z=1,ae=null,re=null;const U=new qt(0,0,oe,ue),J=new qt(0,0,oe,ue);let Ne=!1;const Z=new N0;let ce=!1,ye=!1;this.transmissionResolutionScale=1;const ge=new jt,we=new jt,Ae=new ie,$e=new qt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Nt(){return X===null?z:1}let k=s;function En(w,W){return t.getContext(w,W)}try{const w={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zd}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),k===null){const W="webgl2";if(k=En(W,w),k===null)throw En(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let pt,ft,Ye,Rt,We,P,E,Q,me,ve,de,Xe,Ce,Fe,ct,Ee,ke,Ke,et,ze,dt,rt,At,G;function Re(){pt=new yM(k),pt.init(),rt=new nT(k,pt),ft=new pM(k,pt,e,rt),Ye=new eT(k,pt),ft.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Rt=new EM(k),We=new HE,P=new tT(k,pt,Ye,We,ft,rt,Rt),E=new gM(R),Q=new xM(R),me=new Py(k),At=new dM(k,me),ve=new SM(k,me,Rt,At),de=new wM(k,ve,me,Rt),et=new TM(k,ft,P),Ee=new mM(We),Xe=new BE(R,E,Q,pt,ft,At,Ee),Ce=new uT(R,We),Fe=new GE,ct=new $E(pt),Ke=new fM(R,E,Q,Ye,de,S,h),ke=new QE(R,de,ft),G=new cT(k,Rt,ft,Ye),ze=new hM(k,pt,Rt),dt=new MM(k,pt,Rt),Rt.programs=Xe.programs,R.capabilities=ft,R.extensions=pt,R.properties=We,R.renderLists=Fe,R.shadowMap=ke,R.state=Ye,R.info=Rt}Re();const se=new oT(R,k);this.xr=se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(oe,ue,!1))},this.getSize=function(w){return w.set(oe,ue)},this.setSize=function(w,W,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,ue=W,t.width=Math.floor(w*z),t.height=Math.floor(W*z),ee===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(oe*z,ue*z).floor()},this.setDrawingBufferSize=function(w,W,ee){oe=w,ue=W,z=ee,t.width=Math.floor(w*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,W,ee,$){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,W,ee,$),Ye.viewport(B.copy(U).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,W,ee,$){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,W,ee,$),Ye.scissor(le.copy(J).multiplyScalar(z).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){Ye.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(w=!0,W=!0,ee=!0){let $=0;if(w){let j=!1;if(X!==null){const Me=X.texture.format;j=Me===ih||Me===nh||Me===th}if(j){const Me=X.texture.type,be=Me===Ji||Me===hs||Me===mo||Me===ha||Me===Jd||Me===eh,Ie=Ke.getClearColor(),Be=Ke.getClearAlpha(),tt=Ie.r,Je=Ie.g,Ve=Ie.b;be?(T[0]=tt,T[1]=Je,T[2]=Ve,T[3]=Be,k.clearBufferuiv(k.COLOR,0,T)):(A[0]=tt,A[1]=Je,A[2]=Ve,A[3]=Be,k.clearBufferiv(k.COLOR,0,A))}else $|=k.COLOR_BUFFER_BIT}W&&($|=k.DEPTH_BUFFER_BIT),ee&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ke.dispose(),Fe.dispose(),ct.dispose(),We.dispose(),E.dispose(),Q.dispose(),de.dispose(),At.dispose(),G.dispose(),Xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",ms),se.removeEventListener("sessionend",tr),Pi.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const w=Rt.autoReset,W=ke.enabled,ee=ke.autoUpdate,$=ke.needsUpdate,j=ke.type;Re(),Rt.autoReset=w,ke.enabled=W,ke.autoUpdate=ee,ke.needsUpdate=$,ke.type=j}function Le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function st(w){const W=w.target;W.removeEventListener("dispose",st),Ut(W)}function Ut(w){Qt(w),We.remove(w)}function Qt(w){const W=We.get(w).programs;W!==void 0&&(W.forEach(function(ee){Xe.releaseProgram(ee)}),w.isShaderMaterial&&Xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ee,$,j,Me){W===null&&(W=yt);const be=j.isMesh&&j.matrixWorld.determinant()<0,Ie=Ao(w,W,ee,$,j);Ye.setMaterial($,be);let Be=ee.index,tt=1;if($.wireframe===!0){if(Be=ve.getWireframeAttribute(ee),Be===void 0)return;tt=2}const Je=ee.drawRange,Ve=ee.attributes.position;let gt=Je.start*tt,at=(Je.start+Je.count)*tt;Me!==null&&(gt=Math.max(gt,Me.start*tt),at=Math.min(at,(Me.start+Me.count)*tt)),Be!==null?(gt=Math.max(gt,0),at=Math.min(at,Be.count)):Ve!=null&&(gt=Math.max(gt,0),at=Math.min(at,Ve.count));const Gt=at-gt;if(Gt<0||Gt===1/0)return;At.setup(j,$,Ie,ee,Be);let zt,vt=ze;if(Be!==null&&(zt=me.get(Be),vt=dt,vt.setIndex(zt)),j.isMesh)$.wireframe===!0?(Ye.setLineWidth($.wireframeLinewidth*Nt()),vt.setMode(k.LINES)):vt.setMode(k.TRIANGLES);else if(j.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Nt()),j.isLineSegments?vt.setMode(k.LINES):j.isLineLoop?vt.setMode(k.LINE_LOOP):vt.setMode(k.LINE_STRIP)}else j.isPoints?vt.setMode(k.POINTS):j.isSprite&&vt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)vt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))vt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,Wt=j._multiDrawCounts,mt=j._multiDrawCount,mn=Be?me.get(Be).bytesPerElement:1,ir=We.get($).currentProgram.getUniforms();for(let wn=0;wn<mt;wn++)ir.setValue(k,"_gl_DrawID",wn),vt.render(qe[wn]/mn,Wt[wn])}else if(j.isInstancedMesh)vt.renderInstances(gt,Gt,j.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Wt=Math.min(ee.instanceCount,qe);vt.renderInstances(gt,Gt,Wt)}else vt.render(gt,Gt)};function St(w,W,ee){w.transparent===!0&&w.side===qi&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,gs(w,W,ee),w.side=Ir,w.needsUpdate=!0,gs(w,W,ee),w.side=qi):gs(w,W,ee)}this.compile=function(w,W,ee=null){ee===null&&(ee=w),_=ct.get(ee),_.init(W),L.push(_),ee.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),w!==ee&&w.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const $=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const Ie=Me[be];St(Ie,ee,j),$.add(Ie)}else St(Me,ee,j),$.add(Me)}),L.pop(),_=null,$},this.compileAsync=function(w,W,ee=null){const $=this.compile(w,W,ee);return new Promise(j=>{function Me(){if($.forEach(function(be){We.get(be).currentProgram.isReady()&&$.delete(be)}),$.size===0){j(w);return}setTimeout(Me,10)}pt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ln=null;function Tn(w){Ln&&Ln(w)}function ms(){Pi.stop()}function tr(){Pi.start()}const Pi=new U0;Pi.setAnimationLoop(Tn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(w){Ln=w,se.setAnimationLoop(w),w===null?Pi.stop():Pi.start()},se.addEventListener("sessionstart",ms),se.addEventListener("sessionend",tr),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,W,X),_=ct.get(w,L.length),_.init(W),L.push(_),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(we),ye=this.localClippingEnabled,ce=Ee.init(this.clippingPlanes,ye),y=Fe.get(w,I.length),y.init(),I.push(y),se.enabled===!0&&se.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&Li(Me,W,-1/0,R.sortObjects)}Li(w,W,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ae,re),it=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,it&&Ke.addToRenderList(y,w),this.info.render.frame++,ce===!0&&Ee.beginShadows();const ee=_.state.shadowsArray;ke.render(ee,w,W),ce===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,j=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Me=W.cameras;if(j.length>0)for(let be=0,Ie=Me.length;be<Ie;be++){const Be=Me[be];kr($,j,w,Be)}it&&Ke.render(w);for(let be=0,Ie=Me.length;be<Ie;be++){const Be=Me[be];Or(y,w,Be,Be.viewport)}}else j.length>0&&kr($,j,w,W),it&&Ke.render(w),Or(y,w,W);X!==null&&N===0&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(R,w,W),At.resetDefaultState(),b=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],ce===!0&&Ee.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Li(w,W,ee,$){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){$&&$e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const be=de.update(w),Ie=w.material;Ie.visible&&y.push(w,be,Ie,ee,$e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const be=de.update(w),Ie=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$e.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),$e.copy(be.boundingSphere.center)),$e.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const Be=be.groups;for(let tt=0,Je=Be.length;tt<Je;tt++){const Ve=Be[tt],gt=Ie[Ve.materialIndex];gt&&gt.visible&&y.push(w,be,gt,ee,$e.z,Ve)}}else Ie.visible&&y.push(w,be,Ie,ee,$e.z,null)}}const Me=w.children;for(let be=0,Ie=Me.length;be<Ie;be++)Li(Me[be],W,ee,$)}function Or(w,W,ee,$){const j=w.opaque,Me=w.transmissive,be=w.transparent;_.setupLightsView(ee),ce===!0&&Ee.setGlobalState(R.clippingPlanes,ee),$&&Ye.viewport(B.copy($)),j.length>0&&nr(j,W,ee),Me.length>0&&nr(Me,W,ee),be.length>0&&nr(be,W,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function kr(w,W,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new ps(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?vo:Ji,minFilter:ls,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=_.state.transmissionRenderTarget[$.id],be=$.viewport||B;Me.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget();R.setRenderTarget(Me),R.getClearColor(fe),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),it&&Ke.render(ee);const Be=R.toneMapping;R.toneMapping=Dr;const tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),ce===!0&&Ee.setGlobalState(R.clippingPlanes,$),nr(w,ee,$),P.updateMultisampleRenderTarget(Me),P.updateRenderTargetMipmap(Me),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ve=0,gt=W.length;Ve<gt;Ve++){const at=W[Ve],Gt=at.object,zt=at.geometry,vt=at.material,qe=at.group;if(vt.side===qi&&Gt.layers.test($.layers)){const Wt=vt.side;vt.side=zn,vt.needsUpdate=!0,To(Gt,ee,$,zt,vt,qe),vt.side=Wt,vt.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(Me),P.updateRenderTargetMipmap(Me))}R.setRenderTarget(Ie),R.setClearColor(fe,pe),tt!==void 0&&($.viewport=tt),R.toneMapping=Be}function nr(w,W,ee){const $=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Me=w.length;j<Me;j++){const be=w[j],Ie=be.object,Be=be.geometry,tt=$===null?be.material:$,Je=be.group;Ie.layers.test(ee.layers)&&To(Ie,W,ee,Be,tt,Je)}}function To(w,W,ee,$,j,Me){w.onBeforeRender(R,W,ee,$,j,Me),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(R,W,ee,$,w,Me),j.transparent===!0&&j.side===qi&&j.forceSinglePass===!1?(j.side=zn,j.needsUpdate=!0,R.renderBufferDirect(ee,W,$,j,w,Me),j.side=Ir,j.needsUpdate=!0,R.renderBufferDirect(ee,W,$,j,w,Me),j.side=qi):R.renderBufferDirect(ee,W,$,j,w,Me),w.onAfterRender(R,W,ee,$,j,Me)}function gs(w,W,ee){W.isScene!==!0&&(W=yt);const $=We.get(w),j=_.state.lights,Me=_.state.shadowsArray,be=j.state.version,Ie=Xe.getParameters(w,j.state,Me,W,ee),Be=Xe.getProgramCacheKey(Ie);let tt=$.programs;$.environment=w.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(w.isMeshStandardMaterial?Q:E).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,tt===void 0&&(w.addEventListener("dispose",st),tt=new Map,$.programs=tt);let Je=tt.get(Be);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===be)return yi(w,Ie),Je}else Ie.uniforms=Xe.getUniforms(w),w.onBeforeCompile(Ie,R),Je=Xe.acquireProgram(Ie,Be),tt.set(Be,Je),$.uniforms=Ie.uniforms;const Ve=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),yi(w,Ie),$.needsLights=Iu(w),$.lightsStateVersion=be,$.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.directionalShadowMap.value=j.state.directionalShadowMap,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotShadowMap.value=j.state.spotShadowMap,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMap.value=j.state.pointShadowMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function wo(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=uu.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function yi(w,W){const ee=We.get(w);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Ao(w,W,ee,$,j){W.isScene!==!0&&(W=yt),P.resetTextureUnits();const Me=W.fog,be=$.isMeshStandardMaterial?W.environment:null,Ie=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ma,Be=($.isMeshStandardMaterial?Q:E).get($.envMap||be),tt=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!ee.morphAttributes.position,gt=!!ee.morphAttributes.normal,at=!!ee.morphAttributes.color;let Gt=Dr;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Gt=R.toneMapping);const zt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,vt=zt!==void 0?zt.length:0,qe=We.get($),Wt=_.state.lights;if(ce===!0&&(ye===!0||w!==C)){const dn=w===C&&$.id===b;Ee.setState($,w,dn)}let mt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Wt.state.version||qe.outputColorSpace!==Ie||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==Be||$.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==Je||qe.morphTargets!==Ve||qe.morphNormals!==gt||qe.morphColors!==at||qe.toneMapping!==Gt||qe.morphTargetsCount!==vt)&&(mt=!0):(mt=!0,qe.__version=$.version);let mn=qe.currentProgram;mt===!0&&(mn=gs($,W,j));let ir=!1,wn=!1,Di=!1;const Dt=mn.getUniforms(),gn=qe.uniforms;if(Ye.useProgram(mn.program)&&(ir=!0,wn=!0,Di=!0),$.id!==b&&(b=$.id,wn=!0),ir||C!==w){Ye.buffers.depth.getReversed()?(ge.copy(w.projectionMatrix),Xx(ge),jx(ge),Dt.setValue(k,"projectionMatrix",ge)):Dt.setValue(k,"projectionMatrix",w.projectionMatrix),Dt.setValue(k,"viewMatrix",w.matrixWorldInverse);const sn=Dt.map.cameraPosition;sn!==void 0&&sn.setValue(k,Ae.setFromMatrixPosition(w.matrixWorld)),ft.logarithmicDepthBuffer&&Dt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Dt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,wn=!0,Di=!0)}if(j.isSkinnedMesh){Dt.setOptional(k,j,"bindMatrix"),Dt.setOptional(k,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Dt.setValue(k,"boneTexture",dn.boneTexture,P))}j.isBatchedMesh&&(Dt.setOptional(k,j,"batchingTexture"),Dt.setValue(k,"batchingTexture",j._matricesTexture,P),Dt.setOptional(k,j,"batchingIdTexture"),Dt.setValue(k,"batchingIdTexture",j._indirectTexture,P),Dt.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Dt.setValue(k,"batchingColorTexture",j._colorsTexture,P));const rn=ee.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&et.update(j,ee,mn),(wn||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,Dt.setValue(k,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(gn.envMap.value=Be,gn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(gn.envMapIntensity.value=W.environmentIntensity),wn&&(Dt.setValue(k,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&Co(gn,Di),Me&&$.fog===!0&&Ce.refreshFogUniforms(gn,Me),Ce.refreshMaterialUniforms(gn,$,z,ue,_.state.transmissionRenderTarget[w.id]),uu.upload(k,wo(qe),gn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(uu.upload(k,wo(qe),gn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Dt.setValue(k,"center",j.center),Dt.setValue(k,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(k,"normalMatrix",j.normalMatrix),Dt.setValue(k,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const dn=$.uniformsGroups;for(let sn=0,Mt=dn.length;sn<Mt;sn++){const Si=dn[sn];G.update(Si,mn),G.bind(Si,mn)}}return mn}function Co(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Iu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,W,ee){We.get(w.texture).__webglTexture=W,We.get(w.depthTexture).__webglTexture=ee;const $=We.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=ee===void 0,$.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const ee=We.get(w);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const Ro=k.createFramebuffer();this.setRenderTarget=function(w,W=0,ee=0){X=w,F=W,N=ee;let $=!0,j=null,Me=!1,be=!1;if(w){const Be=We.get(w);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(k.FRAMEBUFFER,null),$=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Be.__hasExternalTextures)P.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ve=w.depthTexture;if(Be.__boundDepthTexture!==Ve){if(Ve!==null&&We.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const tt=w.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(be=!0);const Je=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?j=Je[W][ee]:j=Je[W],Me=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?j=We.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?j=Je[ee]:j=Je,B.copy(w.viewport),le.copy(w.scissor),ne=w.scissorTest}else B.copy(U).multiplyScalar(z).floor(),le.copy(J).multiplyScalar(z).floor(),ne=Ne;if(ee!==0&&(j=Ro),Ye.bindFramebuffer(k.FRAMEBUFFER,j)&&$&&Ye.drawBuffers(w,j),Ye.viewport(B),Ye.scissor(le),Ye.setScissorTest(ne),Me){const Be=We.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ee)}else if(be){const Be=We.get(w.texture),tt=W;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,ee,tt)}else if(w!==null&&ee!==0){const Be=We.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(w,W,ee,$,j,Me,be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){Ye.bindFramebuffer(k.FRAMEBUFFER,Ie);try{const Be=w.texture,tt=Be.format,Je=Be.type;if(!ft.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-$&&ee>=0&&ee<=w.height-j&&k.readPixels(W,ee,$,j,rt.convert(tt),rt.convert(Je),Me)}finally{const Be=X!==null?We.get(X).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,W,ee,$,j,Me,be){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){const Be=w.texture,tt=Be.format,Je=Be.type;if(!ft.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=w.width-$&&ee>=0&&ee<=w.height-j){Ye.bindFramebuffer(k.FRAMEBUFFER,Ie);const Ve=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.bufferData(k.PIXEL_PACK_BUFFER,Me.byteLength,k.STREAM_READ),k.readPixels(W,ee,$,j,rt.convert(tt),rt.convert(Je),0);const gt=X!==null?We.get(X).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,gt);const at=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Wx(k,at,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Me),k.deleteBuffer(Ve),k.deleteSync(at),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,W=null,ee=0){w.isTexture!==!0&&(ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1]);const $=Math.pow(2,-ee),j=Math.floor(w.image.width*$),Me=Math.floor(w.image.height*$),be=W!==null?W.x:0,Ie=W!==null?W.y:0;P.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,ee,0,0,be,Ie,j,Me),Ye.unbindTexture()};const bo=k.createFramebuffer(),Po=k.createFramebuffer();this.copyTextureToTexture=function(w,W,ee=null,$=null,j=0,Me=null){w.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],W=arguments[2],Me=arguments[3]||0,ee=null),Me===null&&(j!==0?(ra("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=j,j=0):Me=0);let be,Ie,Be,tt,Je,Ve,gt,at,Gt;const zt=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(ee!==null)be=ee.max.x-ee.min.x,Ie=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,tt=ee.min.x,Je=ee.min.y,Ve=ee.isBox3?ee.min.z:0;else{const rn=Math.pow(2,-j);be=Math.floor(zt.width*rn),Ie=Math.floor(zt.height*rn),w.isDataArrayTexture?Be=zt.depth:w.isData3DTexture?Be=Math.floor(zt.depth*rn):Be=1,tt=0,Je=0,Ve=0}$!==null?(gt=$.x,at=$.y,Gt=$.z):(gt=0,at=0,Gt=0);const vt=rt.convert(W.format),qe=rt.convert(W.type);let Wt;W.isData3DTexture?(P.setTexture3D(W,0),Wt=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Wt=k.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Wt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=k.getParameter(k.UNPACK_ROW_LENGTH),mn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ir=k.getParameter(k.UNPACK_SKIP_PIXELS),wn=k.getParameter(k.UNPACK_SKIP_ROWS),Di=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,zt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,zt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ve);const Dt=w.isDataArrayTexture||w.isData3DTexture,gn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const rn=We.get(w),dn=We.get(W),sn=We.get(rn.__renderTarget),Mt=We.get(dn.__renderTarget);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Si=0;Si<Be;Si++)Dt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(w).__webglTexture,j,Ve+Si),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(W).__webglTexture,Me,Gt+Si)),k.blitFramebuffer(tt,Je,be,Ie,gt,at,be,Ie,k.DEPTH_BUFFER_BIT,k.NEAREST);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||We.has(w)){const rn=We.get(w),dn=We.get(W);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,bo),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Po);for(let sn=0;sn<Be;sn++)Dt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rn.__webglTexture,j,Ve+sn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,rn.__webglTexture,j),gn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,dn.__webglTexture,Me,Gt+sn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,dn.__webglTexture,Me),j!==0?k.blitFramebuffer(tt,Je,be,Ie,gt,at,be,Ie,k.COLOR_BUFFER_BIT,k.NEAREST):gn?k.copyTexSubImage3D(Wt,Me,gt,at,Gt+sn,tt,Je,be,Ie):k.copyTexSubImage2D(Wt,Me,gt,at,tt,Je,be,Ie);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else gn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Wt,Me,gt,at,Gt,be,Ie,Be,vt,qe,zt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Wt,Me,gt,at,Gt,be,Ie,Be,vt,zt.data):k.texSubImage3D(Wt,Me,gt,at,Gt,be,Ie,Be,vt,qe,zt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Me,gt,at,be,Ie,vt,qe,zt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Me,gt,at,zt.width,zt.height,vt,zt.data):k.texSubImage2D(k.TEXTURE_2D,Me,gt,at,be,Ie,vt,qe,zt);k.pixelStorei(k.UNPACK_ROW_LENGTH,mt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ir),k.pixelStorei(k.UNPACK_SKIP_ROWS,wn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Di),Me===0&&W.generateMipmaps&&k.generateMipmap(Wt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(w,W,ee=null,$=null,j=0){return w.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,$=arguments[1]||null,w=arguments[2],W=arguments[3],j=arguments[4]||0),ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,ee,$,j)},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Ye.unbindTexture()},this.resetState=function(){F=0,N=0,X=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const dT=()=>{const r=mi.useRef(null);return mi.useEffect(()=>{if(!r.current)return;const e=new my,t=new ni(75,1,.1,1e3),s=new fT({antialias:!0,alpha:!0}),o=new co,l=new wy,c=["bootstrap","css","express","figma","git","github","html","javascript","mongo","nextjs","nodejs","react","vscode","c","java","postman","tailwind","canva"].map(y=>`/assets/${y}.svg`),d=[],h=27,m=6;s.setSize(375,375),r.current.appendChild(s.domElement),c.forEach((y,_)=>l.load(y,I=>{const L=Math.acos(-1+2*_/c.length),R=Math.sqrt(c.length*Math.PI)*L,H=new _y(new L0({map:I}));H.scale.set(m,m,1),H.position.set(h*Math.cos(R)*Math.sin(L),h*Math.sin(R)*Math.sin(L),h*Math.cos(L)),o.add(H),d.push(H)},void 0,I=>{console.error(`Error loading texture: ${y}`,I)})),e.add(o),t.position.z=50;let g=s.domElement.getBoundingClientRect();const v=()=>{g=s.domElement.getBoundingClientRect()};window.addEventListener("scroll",v),window.addEventListener("resize",v);const x=new Ry;window.addEventListener("click",y=>{if(y.clientX>=g.left&&y.clientX<=g.right&&y.clientY>=g.top&&y.clientY<=g.bottom){x.setFromCamera({x:2*(y.clientX-g.left)/375-1,y:-(2*(y.clientY-g.top))/375+1},t);const _=x.intersectObjects(d)[0];_&&o.attach(_.object)}});let S=0,T=0;window.addEventListener("mousemove",y=>{y.clientX>=g.left&&y.clientX<=g.right&&y.clientY>=g.top&&y.clientY<=g.bottom&&(S=.01*(y.clientX-g.left)/375-1,T=2*-(y.clientY-g.top)/375+1)});const A=()=>{requestAnimationFrame(A),o.rotation.y+=.005+S*.02,o.rotation.x+=T*.02,o.children.forEach(y=>y.lookAt(t.position)),s.render(e,t)};return A(),()=>{for(;r.current.firstChild;)r.current.removeChild(r.current.firstChild);window.removeEventListener("scroll",v),window.removeEventListener("resize",v)}},[]),Y.jsx("section",{id:"section1",className:"saturate-200 flex justify-center items-center py-10",children:Y.jsx("div",{ref:r,style:{height:"375px",aspectRatio:"1",margin:"0 auto"}})})},Vg=["Full Stack Developer","Web Designer","Software Engineer"],hT=()=>{const[r,e]=mi.useState(""),[t,s]=mi.useState(0),[o,l]=mi.useState(!1),[c,d]=mi.useState(150);return mi.useEffect(()=>{const m=setTimeout(()=>{const g=Vg[t];e(v=>o?g.substring(0,v.length-1):g.substring(0,v.length+1)),!o&&r===g?setTimeout(()=>l(!0),2e3):o&&r===""&&(l(!1),s((t+1)%Vg.length)),d(o?30:150)},c);return()=>clearTimeout(m)},[r,o,t,c]),Y.jsx("div",{children:Y.jsxs("h3",{className:"text-white lg:text-3xl text-xl uppercase",children:[r,Y.jsx("span",{className:"blinking-cursor lg:text-5xl text-3xl",children:"|"})]})})};var B0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Gg=ri.createContext&&ri.createContext(B0),pT=["attr","size","title"];function mT(r,e){if(r==null)return{};var t=gT(r,e),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(o=0;o<l.length;o++)s=l[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(t[s]=r[s])}return t}function gT(r,e){if(r==null)return{};var t={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;t[s]=r[s]}return t}function vu(){return vu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},vu.apply(this,arguments)}function Wg(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,s)}return t}function xu(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Wg(Object(t),!0).forEach(function(s){_T(r,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Wg(Object(t)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(t,s))})}return r}function _T(r,e,t){return e=vT(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function vT(r){var e=xT(r,"string");return typeof e=="symbol"?e:e+""}function xT(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var s=t.call(r,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function H0(r){return r&&r.map((e,t)=>ri.createElement(e.tag,xu({key:t},e.attr),H0(e.child)))}function Cu(r){return e=>ri.createElement(yT,vu({attr:xu({},r.attr)},e),H0(r.child))}function yT(r){var e=t=>{var{attr:s,size:o,title:l}=r,c=mT(r,pT),d=o||t.size||"1em",h;return t.className&&(h=t.className),r.className&&(h=(h?h+" ":"")+r.className),ri.createElement("svg",vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:h,style:xu(xu({color:r.color||t.color},t.style),r.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&ri.createElement("title",null,l),r.children)};return Gg!==void 0?ri.createElement(Gg.Consumer,null,t=>e(t)):e(B0)}function qf(r){return Cu({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"},child:[]}]})(r)}function ST(r){return Cu({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"},child:[]}]})(r)}function MT(r){return Cu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}const ET=()=>Y.jsx("section",{className:" text-gray-400  flex flex-col items-center justify-center mt-[-4rem]",children:Y.jsxs("div",{className:"max-w-6xl flex flex-col md:flex-row items-center justify-evenly space-y-8 md:space-y-0 md:space-x-10",children:[Y.jsxs("div",{className:"space-y-4 w-1/2",children:[Y.jsx("h2",{className:"text-3xl text-white font-bold",children:"🚀 Who Am I?"}),Y.jsxs("p",{className:"text-lg text-gray-300 leading-relaxed",children:["Hey! I'm ",Y.jsx("span",{className:"text-green-400 font-semibold",children:Y.jsx("i",{children:" Adnan Ali"})}),". I've always been curious about technology, and over the years, I've transformed my curiosity into a passion for",Y.jsx("span",{className:"text-green-400 font-semibold",children:Y.jsx("i",{children:" web development"})}),", problem-solving, and crafting beautiful digital experiences."]}),Y.jsxs("p",{className:"text-lg text-gray-300 leading-relaxed",children:["My journey began with exploring ",Y.jsx("span",{className:"text-green-400 font-semibold",children:Y.jsx("i",{children:" code and creativity"})}),", and today, I’m honing my skills in",Y.jsx("span",{className:"text-green-400 font-semibold",children:Y.jsx("i",{children:" Full-Stack Development"})}),". From tackling real-world challenges to learning new technologies, I strive to grow every day."]}),Y.jsx("p",{className:"text-lg text-gray-300 leading-relaxed",children:"Beyond coding, I enjoy spending time with friends, engaging in thoughtful conversations, and continuously seeking ways to make a positive impact. Let’s connect and create something amazing together!"})]}),Y.jsxs("div",{className:"",children:[Y.jsx("img",{className:"w-[9.5rem] ms-60 backdrop-invert-0",src:"/assets/dots.svg",alt:""}),Y.jsx("img",{src:"/assets/mypic1.jpg",alt:"Your Name",className:"w-[22rem] rounded-full mt-[-8rem]"})]})]})}),cn=r=>Y.jsx("div",{children:Y.jsx("div",{className:"hover:scale-110 cursor-pointer transition-all ease-in-out duration-200 flex border w-fit rounded-3xl py-2 px-7 border-neutral-500",children:r.name})});function $f(r){return Cu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"},child:[]}]})(r)}const TT=()=>{const r={github:{triangle:"https://github.com/imadnanali/Triangle-Finder",todo:"https://github.com/imadnanali/ToDO-List",weather:"https://github.com/imadnanali/Weather-App"},live:{triangle:"https://imadnanali.github.io/Triangle-Finder/",todo:"https://imadnanali.github.io/ToDO-List/",weather:"https://imadnanali.github.io/Weather-App/"}};return Y.jsx("div",{id:"projects",children:Y.jsxs("div",{className:"project  flex flex-col py-10",children:[Y.jsx("h1",{className:"px-24 font-semibold text-[2rem]",children:"All Creative projects."}),Y.jsx("h3",{className:"px-24 font-semibold text-[1.5rem] text-gray-400",children:"Here's my all projects."}),Y.jsxs("div",{className:"flex h-lvh lg:flex-row flex-col lg:items-center justify-evenly",children:[Y.jsxs("div",{className:"skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4",children:[Y.jsx("h1",{className:"heading py-10 uppercase font-semibold text-xl",children:"Weather App"}),Y.jsxs("div",{className:"flex flex-wrap gap-4",children:[Y.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"HTML"}),Y.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"CSS"}),Y.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"JavaScript"})]}),Y.jsxs("h1",{className:"pt-5 text-neutral-400 leading-relaxed text-sm",children:[Y.jsx("span",{className:"text-green-400 font-semibold italic",children:"Weater App"})," – A responsive website built using JavaScript, allowing users to check ",Y.jsx("span",{className:"text-green-400 font-semibold italic",children:"real-time weather"})," conditions by entering a city name. It details like ",Y.jsx("span",{className:"text-green-400 font-semibold italic",children:"temperature, weather conditions, and location"})," with an interactive search functionality and a clean UI."]}),Y.jsxs("div",{className:"buttons flex gap-5 py-10",children:[Y.jsx("a",{href:r.github.weather,children:Y.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500",children:Y.jsx($f,{size:25})})}),Y.jsx("a",{href:r.live.weather,children:Y.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 relative right-10",children:Y.jsx(qf,{size:25})})})]})]}),Y.jsx("div",{className:"aboutimage py-10 lg:pe-5",children:Y.jsx("img",{src:"/assets/weather.png",alt:"image",className:"lg:w-[50rem] rounded-lg"})})]}),Y.jsx("div",{className:"projectcard",children:Y.jsxs("div",{className:"flex h-lvh lg:flex-row flex-col-reverse lg:items-center justify-evenly",children:[Y.jsx("div",{className:"aboutimage py-10 lg:pe-5",children:Y.jsx("img",{src:"/assets/todo.png",alt:"image",className:"lg:w-[50rem] rounded-lg"})}),Y.jsxs("div",{className:"skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4",children:[Y.jsx("h1",{className:"heading py-10 uppercase text-white font-semibold text-xl",children:"Todo List"}),Y.jsxs("div",{className:"flex flex-wrap gap-4",children:[Y.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"Html"}),Y.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"CSS"}),Y.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"JavaScript"})]}),Y.jsxs("h1",{className:"pt-5 text-neutral-400 leading-relaxed text-sm",children:[Y.jsx("span",{className:" font-semibold italic text-green-400",children:"Todo List"})," – a responsive React-based website styled with Tailwind CSS, enabling ",Y.jsx("span",{className:"text-green-400 font-semibold italic",children:"task creation, editing, and deletion"}),". Integrated with ",Y.jsx("span",{className:"text-green-400 font-semibold italic",children:"local storage for offline functionality"}),", it ensures todos are preserved and reloaded seamlessly upon reopening the site."]}),Y.jsxs("div",{className:"buttons flex gap-5 py-10",children:[Y.jsx("a",{href:r.github.todo,children:Y.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500",children:Y.jsx($f,{size:25})})}),Y.jsx("a",{href:r.live.todo,children:Y.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 relative right-10",children:Y.jsx(qf,{size:25})})})]})]})]})}),Y.jsx("div",{className:"projectcard ",children:Y.jsxs("div",{className:"flex h-lvh lg:flex-row flex-col lg:items-center justify-evenly",children:[Y.jsxs("div",{className:"skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4",children:[Y.jsx("h1",{className:"heading py-10 uppercase text-white font-semibold text-xl",children:"Triangle Finder"}),Y.jsxs("div",{className:"flex flex-wrap gap-4",children:[Y.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"Html"}),Y.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"Tailwind"}),Y.jsx("h1",{className:"px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base",children:"JavaScript"})]}),Y.jsxs("h1",{className:"pt-5 text-neutral-400 leading-relaxed text-sm",children:[Y.jsx("span",{className:"text-green-400 font-semibold italic",children:"Triangle Finder"})," – a responsive website created using JavaScript, allowing users to ",Y.jsx("span",{className:"text-green-400 font-semibold italic",children:"create triangles"})," by inputting values and calculating properties like ",Y.jsx("span",{className:"text-green-400 font-semibold italic",children:"area, perimeter, and angles"})," with interactive ",Y.jsx("span",{className:"text-green-400e italic font-semibold",children:"event handling"})," and ",Y.jsx("span",{className:"text-green-400 italic font-semibold",children:"canvas drawing functions."})]}),Y.jsxs("div",{className:"buttons flex gap-5 py-10",children:[Y.jsx("a",{href:r.github.triangle,children:Y.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500",children:Y.jsx($f,{size:25})})}),Y.jsx("a",{href:r.live.triangle,children:Y.jsx("button",{className:"font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 relative right-10",children:Y.jsx(qf,{size:25})})})]})]}),Y.jsx("div",{className:"aboutimage py-10 lg:pe-5 border border-neutral-600 rounded-xl",children:Y.jsx("img",{src:"/assets/triangle.png",alt:"image",className:"lg:w-[50rem] rounded-lg"})})]})})]})})};var kn=function(){return kn=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},kn.apply(this,arguments)};function yu(r,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,l;s<o;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return r.concat(l||Array.prototype.slice.call(e))}var kt="-ms-",po="-moz-",Ct="-webkit-",V0="comm",Ru="rule",lh="decl",wT="@import",G0="@keyframes",AT="@layer",W0=Math.abs,uh=String.fromCharCode,Gd=Object.assign;function CT(r,e){return fn(r,0)^45?(((e<<2^fn(r,0))<<2^fn(r,1))<<2^fn(r,2))<<2^fn(r,3):0}function X0(r){return r.trim()}function Yi(r,e){return(r=e.exec(r))?r[0]:r}function ut(r,e,t){return r.replace(e,t)}function cu(r,e,t){return r.indexOf(e,t)}function fn(r,e){return r.charCodeAt(e)|0}function _a(r,e,t){return r.slice(e,t)}function Ci(r){return r.length}function j0(r){return r.length}function ho(r,e){return e.push(r),r}function RT(r,e){return r.map(e).join("")}function Xg(r,e){return r.filter(function(t){return!Yi(t,e)})}var bu=1,va=1,Y0=0,si=0,Zt=0,Ta="";function Pu(r,e,t,s,o,l,c,d){return{value:r,root:e,parent:t,type:s,props:o,children:l,line:bu,column:va,length:c,return:"",siblings:d}}function br(r,e){return Gd(Pu("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function ia(r){for(;r.root;)r=br(r.root,{children:[r]});ho(r,r.siblings)}function bT(){return Zt}function PT(){return Zt=si>0?fn(Ta,--si):0,va--,Zt===10&&(va=1,bu--),Zt}function xi(){return Zt=si<Y0?fn(Ta,si++):0,va++,Zt===10&&(va=1,bu++),Zt}function fs(){return fn(Ta,si)}function fu(){return si}function Lu(r,e){return _a(Ta,r,e)}function Wd(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function LT(r){return bu=va=1,Y0=Ci(Ta=r),si=0,[]}function DT(r){return Ta="",r}function Kf(r){return X0(Lu(si-1,Xd(r===91?r+2:r===40?r+1:r)))}function NT(r){for(;(Zt=fs())&&Zt<33;)xi();return Wd(r)>2||Wd(Zt)>3?"":" "}function IT(r,e){for(;--e&&xi()&&!(Zt<48||Zt>102||Zt>57&&Zt<65||Zt>70&&Zt<97););return Lu(r,fu()+(e<6&&fs()==32&&xi()==32))}function Xd(r){for(;xi();)switch(Zt){case r:return si;case 34:case 39:r!==34&&r!==39&&Xd(Zt);break;case 40:r===41&&Xd(r);break;case 92:xi();break}return si}function UT(r,e){for(;xi()&&r+Zt!==57;)if(r+Zt===84&&fs()===47)break;return"/*"+Lu(e,si-1)+"*"+uh(r===47?r:xi())}function FT(r){for(;!Wd(fs());)xi();return Lu(r,si)}function OT(r){return DT(du("",null,null,null,[""],r=LT(r),0,[0],r))}function du(r,e,t,s,o,l,c,d,h){for(var m=0,g=0,v=c,x=0,S=0,T=0,A=1,y=1,_=1,I=0,L="",R=o,H=l,F=s,N=L;y;)switch(T=I,I=xi()){case 40:if(T!=108&&fn(N,v-1)==58){cu(N+=ut(Kf(I),"&","&\f"),"&\f",W0(m?d[m-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:N+=Kf(I);break;case 9:case 10:case 13:case 32:N+=NT(T);break;case 92:N+=IT(fu()-1,7);continue;case 47:switch(fs()){case 42:case 47:ho(kT(UT(xi(),fu()),e,t,h),h);break;default:N+="/"}break;case 123*A:d[m++]=Ci(N)*_;case 125*A:case 59:case 0:switch(I){case 0:case 125:y=0;case 59+g:_==-1&&(N=ut(N,/\f/g,"")),S>0&&Ci(N)-v&&ho(S>32?Yg(N+";",s,t,v-1,h):Yg(ut(N," ","")+";",s,t,v-2,h),h);break;case 59:N+=";";default:if(ho(F=jg(N,e,t,m,g,o,d,L,R=[],H=[],v,l),l),I===123)if(g===0)du(N,e,F,F,R,l,v,d,H);else switch(x===99&&fn(N,3)===110?100:x){case 100:case 108:case 109:case 115:du(r,F,F,s&&ho(jg(r,F,F,0,0,o,d,L,o,R=[],v,H),H),o,H,v,d,s?R:H);break;default:du(N,F,F,F,[""],H,0,d,H)}}m=g=S=0,A=_=1,L=N="",v=c;break;case 58:v=1+Ci(N),S=T;default:if(A<1){if(I==123)--A;else if(I==125&&A++==0&&PT()==125)continue}switch(N+=uh(I),I*A){case 38:_=g>0?1:(N+="\f",-1);break;case 44:d[m++]=(Ci(N)-1)*_,_=1;break;case 64:fs()===45&&(N+=Kf(xi())),x=fs(),g=v=Ci(L=N+=FT(fu())),I++;break;case 45:T===45&&Ci(N)==2&&(A=0)}}return l}function jg(r,e,t,s,o,l,c,d,h,m,g,v){for(var x=o-1,S=o===0?l:[""],T=j0(S),A=0,y=0,_=0;A<s;++A)for(var I=0,L=_a(r,x+1,x=W0(y=c[A])),R=r;I<T;++I)(R=X0(y>0?S[I]+" "+L:ut(L,/&\f/g,S[I])))&&(h[_++]=R);return Pu(r,e,t,o===0?Ru:d,h,m,g,v)}function kT(r,e,t,s){return Pu(r,e,t,V0,uh(bT()),_a(r,2,-2),0,s)}function Yg(r,e,t,s,o){return Pu(r,e,t,lh,_a(r,0,s),_a(r,s+1,-1),s,o)}function q0(r,e,t){switch(CT(r,e)){case 5103:return Ct+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ct+r+r;case 4789:return po+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ct+r+po+r+kt+r+r;case 5936:switch(fn(r,e+11)){case 114:return Ct+r+kt+ut(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ct+r+kt+ut(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ct+r+kt+ut(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Ct+r+kt+r+r;case 6165:return Ct+r+kt+"flex-"+r+r;case 5187:return Ct+r+ut(r,/(\w+).+(:[^]+)/,Ct+"box-$1$2"+kt+"flex-$1$2")+r;case 5443:return Ct+r+kt+"flex-item-"+ut(r,/flex-|-self/g,"")+(Yi(r,/flex-|baseline/)?"":kt+"grid-row-"+ut(r,/flex-|-self/g,""))+r;case 4675:return Ct+r+kt+"flex-line-pack"+ut(r,/align-content|flex-|-self/g,"")+r;case 5548:return Ct+r+kt+ut(r,"shrink","negative")+r;case 5292:return Ct+r+kt+ut(r,"basis","preferred-size")+r;case 6060:return Ct+"box-"+ut(r,"-grow","")+Ct+r+kt+ut(r,"grow","positive")+r;case 4554:return Ct+ut(r,/([^-])(transform)/g,"$1"+Ct+"$2")+r;case 6187:return ut(ut(ut(r,/(zoom-|grab)/,Ct+"$1"),/(image-set)/,Ct+"$1"),r,"")+r;case 5495:case 3959:return ut(r,/(image-set\([^]*)/,Ct+"$1$`$1");case 4968:return ut(ut(r,/(.+:)(flex-)?(.*)/,Ct+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ct+r+r;case 4200:if(!Yi(r,/flex-|baseline/))return kt+"grid-column-align"+_a(r,e)+r;break;case 2592:case 3360:return kt+ut(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,Yi(s.props,/grid-\w+-end/)})?~cu(r+(t=t[e].value),"span",0)?r:kt+ut(r,"-start","")+r+kt+"grid-row-span:"+(~cu(t,"span",0)?Yi(t,/\d+/):+Yi(t,/\d+/)-+Yi(r,/\d+/))+";":kt+ut(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return Yi(s.props,/grid-\w+-start/)})?r:kt+ut(ut(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ut(r,/(.+)-inline(.+)/,Ct+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ci(r)-1-e>6)switch(fn(r,e+1)){case 109:if(fn(r,e+4)!==45)break;case 102:return ut(r,/(.+:)(.+)-([^]+)/,"$1"+Ct+"$2-$3$1"+po+(fn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~cu(r,"stretch",0)?q0(ut(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return ut(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,l,c,d,h,m){return kt+o+":"+l+m+(c?kt+o+"-span:"+(d?h:+h-+l)+m:"")+r});case 4949:if(fn(r,e+6)===121)return ut(r,":",":"+Ct)+r;break;case 6444:switch(fn(r,fn(r,14)===45?18:11)){case 120:return ut(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ct+(fn(r,14)===45?"inline-":"")+"box$3$1"+Ct+"$2$3$1"+kt+"$2box$3")+r;case 100:return ut(r,":",":"+kt)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ut(r,"scroll-","scroll-snap-")+r}return r}function Su(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function zT(r,e,t,s){switch(r.type){case AT:if(r.children.length)break;case wT:case lh:return r.return=r.return||r.value;case V0:return"";case G0:return r.return=r.value+"{"+Su(r.children,s)+"}";case Ru:if(!Ci(r.value=r.props.join(",")))return""}return Ci(t=Su(r.children,s))?r.return=r.value+"{"+t+"}":""}function BT(r){var e=j0(r);return function(t,s,o,l){for(var c="",d=0;d<e;d++)c+=r[d](t,s,o,l)||"";return c}}function HT(r){return function(e){e.root||(e=e.return)&&r(e)}}function VT(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case lh:r.return=q0(r.value,r.length,t);return;case G0:return Su([br(r,{value:ut(r.value,"@","@"+Ct)})],s);case Ru:if(r.length)return RT(t=r.props,function(o){switch(Yi(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ia(br(r,{props:[ut(o,/:(read-\w+)/,":"+po+"$1")]})),ia(br(r,{props:[o]})),Gd(r,{props:Xg(t,s)});break;case"::placeholder":ia(br(r,{props:[ut(o,/:(plac\w+)/,":"+Ct+"input-$1")]})),ia(br(r,{props:[ut(o,/:(plac\w+)/,":"+po+"$1")]})),ia(br(r,{props:[ut(o,/:(plac\w+)/,kt+"input-$1")]})),ia(br(r,{props:[o]})),Gd(r,{props:Xg(t,s)});break}return""})}}var GT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yn={},xa=typeof process<"u"&&Yn!==void 0&&(Yn.REACT_APP_SC_ATTR||Yn.SC_ATTR)||"data-styled",$0="active",K0="data-styled-version",Du="6.1.14",ch=`/*!sc*/
`,Mu=typeof window<"u"&&"HTMLElement"in window,WT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yn!==void 0&&Yn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yn.REACT_APP_SC_DISABLE_SPEEDY!==""?Yn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yn!==void 0&&Yn.SC_DISABLE_SPEEDY!==void 0&&Yn.SC_DISABLE_SPEEDY!==""&&Yn.SC_DISABLE_SPEEDY!=="false"&&Yn.SC_DISABLE_SPEEDY),Nu=Object.freeze([]),ya=Object.freeze({});function XT(r,e,t){return t===void 0&&(t=ya),r.theme!==t.theme&&r.theme||e||t.theme}var Z0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YT=/(^-|-$)/g;function qg(r){return r.replace(jT,"-").replace(YT,"")}var qT=/(a)(d)/gi,nu=52,$g=function(r){return String.fromCharCode(r+(r>25?39:97))};function jd(r){var e,t="";for(e=Math.abs(r);e>nu;e=e/nu|0)t=$g(e%nu)+t;return($g(e%nu)+t).replace(qT,"$1-$2")}var Zf,Q0=5381,aa=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},J0=function(r){return aa(Q0,r)};function $T(r){return jd(J0(r)>>>0)}function KT(r){return r.displayName||r.name||"Component"}function Qf(r){return typeof r=="string"&&!0}var e_=typeof Symbol=="function"&&Symbol.for,t_=e_?Symbol.for("react.memo"):60115,ZT=e_?Symbol.for("react.forward_ref"):60112,QT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},JT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ew=((Zf={})[ZT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zf[t_]=n_,Zf);function Kg(r){return("type"in(e=r)&&e.type.$$typeof)===t_?n_:"$$typeof"in r?ew[r.$$typeof]:QT;var e}var tw=Object.defineProperty,nw=Object.getOwnPropertyNames,Zg=Object.getOwnPropertySymbols,iw=Object.getOwnPropertyDescriptor,rw=Object.getPrototypeOf,Qg=Object.prototype;function i_(r,e,t){if(typeof e!="string"){if(Qg){var s=rw(e);s&&s!==Qg&&i_(r,s,t)}var o=nw(e);Zg&&(o=o.concat(Zg(e)));for(var l=Kg(r),c=Kg(e),d=0;d<o.length;++d){var h=o[d];if(!(h in JT||t&&t[h]||c&&h in c||l&&h in l)){var m=iw(e,h);try{tw(r,h,m)}catch{}}}}return r}function Sa(r){return typeof r=="function"}function fh(r){return typeof r=="object"&&"styledComponentId"in r}function us(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function Jg(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function _o(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Yd(r,e,t){if(t===void 0&&(t=!1),!t&&!_o(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=Yd(r[s],e[s]);else if(_o(e))for(var s in e)r[s]=Yd(r[s],e[s]);return r}function dh(r,e){Object.defineProperty(r,"toString",{value:e})}function Eo(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var sw=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,l=o;e>=l;)if((l<<=1)<0)throw Eo(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var c=o;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),h=(c=0,t.length);c<h;c++)this.tag.insertRule(d,t[c])&&(this.groupSizes[e]++,d++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var l=s;l<o;l++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),l=o+s,c=o;c<l;c++)t+="".concat(this.tag.getRule(c)).concat(ch);return t},r}(),hu=new Map,Eu=new Map,pu=1,iu=function(r){if(hu.has(r))return hu.get(r);for(;Eu.has(pu);)pu++;var e=pu++;return hu.set(r,e),Eu.set(e,r),e},aw=function(r,e){pu=e+1,hu.set(r,e),Eu.set(e,r)},ow="style[".concat(xa,"][").concat(K0,'="').concat(Du,'"]'),lw=new RegExp("^".concat(xa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),uw=function(r,e,t){for(var s,o=t.split(","),l=0,c=o.length;l<c;l++)(s=o[l])&&r.registerName(e,s)},cw=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(ch),o=[],l=0,c=s.length;l<c;l++){var d=s[l].trim();if(d){var h=d.match(lw);if(h){var m=0|parseInt(h[1],10),g=h[2];m!==0&&(aw(g,m),uw(r,g,h[3]),r.getTag().insertRules(m,o)),o.length=0}else o.push(d)}}},e0=function(r){for(var e=document.querySelectorAll(ow),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(xa)!==$0&&(cw(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function fw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var r_=function(r){var e=document.head,t=r||e,s=document.createElement("style"),o=function(d){var h=Array.from(d.querySelectorAll("style[".concat(xa,"]")));return h[h.length-1]}(t),l=o!==void 0?o.nextSibling:null;s.setAttribute(xa,$0),s.setAttribute(K0,Du);var c=fw();return c&&s.setAttribute("nonce",c),t.insertBefore(s,l),s},dw=function(){function r(e){this.element=r_(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var c=s[o];if(c.ownerNode===t)return c}throw Eo(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),hw=function(){function r(e){this.element=r_(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),pw=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),t0=Mu,mw={isServer:!Mu,useCSSOMInjection:!WT},s_=function(){function r(e,t,s){e===void 0&&(e=ya),t===void 0&&(t={});var o=this;this.options=kn(kn({},mw),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&Mu&&t0&&(t0=!1,e0(this)),dh(this,function(){return function(l){for(var c=l.getTag(),d=c.length,h="",m=function(v){var x=function(_){return Eu.get(_)}(v);if(x===void 0)return"continue";var S=l.names.get(x),T=c.getGroup(v);if(S===void 0||!S.size||T.length===0)return"continue";var A="".concat(xa,".g").concat(v,'[id="').concat(x,'"]'),y="";S!==void 0&&S.forEach(function(_){_.length>0&&(y+="".concat(_,","))}),h+="".concat(T).concat(A,'{content:"').concat(y,'"}').concat(ch)},g=0;g<d;g++)m(g);return h}(o)})}return r.registerId=function(e){return iu(e)},r.prototype.rehydrate=function(){!this.server&&Mu&&e0(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(kn(kn({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new pw(o):s?new dw(o):new hw(o)}(this.options),new sw(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(iu(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(iu(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(iu(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),gw=/&/g,_w=/^\s*\/\/.*$/gm;function a_(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=a_(t.children,e)),t})}function vw(r){var e,t,s,o=ya,l=o.options,c=l===void 0?ya:l,d=o.plugins,h=d===void 0?Nu:d,m=function(x,S,T){return T.startsWith(t)&&T.endsWith(t)&&T.replaceAll(t,"").length>0?".".concat(e):x},g=h.slice();g.push(function(x){x.type===Ru&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(gw,t).replace(s,m))}),c.prefix&&g.push(VT),g.push(zT);var v=function(x,S,T,A){S===void 0&&(S=""),T===void 0&&(T=""),A===void 0&&(A="&"),e=A,t=S,s=new RegExp("\\".concat(t,"\\b"),"g");var y=x.replace(_w,""),_=OT(T||S?"".concat(T," ").concat(S," { ").concat(y," }"):y);c.namespace&&(_=a_(_,c.namespace));var I=[];return Su(_,BT(g.concat(HT(function(L){return I.push(L)})))),I};return v.hash=h.length?h.reduce(function(x,S){return S.name||Eo(15),aa(x,S.name)},Q0).toString():"",v}var xw=new s_,qd=vw(),o_=ri.createContext({shouldForwardProp:void 0,styleSheet:xw,stylis:qd});o_.Consumer;ri.createContext(void 0);function n0(){return mi.useContext(o_)}var yw=function(){function r(e,t){var s=this;this.inject=function(o,l){l===void 0&&(l=qd);var c=s.name+l.hash;o.hasNameForId(s.id,c)||o.insertRules(s.id,c,l(s.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,dh(this,function(){throw Eo(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=qd),this.name+e.hash},r}(),Sw=function(r){return r>="A"&&r<="Z"};function i0(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;Sw(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var l_=function(r){return r==null||r===!1||r===""},u_=function(r){var e,t,s=[];for(var o in r){var l=r[o];r.hasOwnProperty(o)&&!l_(l)&&(Array.isArray(l)&&l.isCss||Sa(l)?s.push("".concat(i0(o),":"),l,";"):_o(l)?s.push.apply(s,yu(yu(["".concat(o," {")],u_(l),!1),["}"],!1)):s.push("".concat(i0(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in GT||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function ds(r,e,t,s){if(l_(r))return[];if(fh(r))return[".".concat(r.styledComponentId)];if(Sa(r)){if(!Sa(l=r)||l.prototype&&l.prototype.isReactComponent||!e)return[r];var o=r(e);return ds(o,e,t,s)}var l;return r instanceof yw?t?(r.inject(t,s),[r.getName(s)]):[r]:_o(r)?u_(r):Array.isArray(r)?Array.prototype.concat.apply(Nu,r.map(function(c){return ds(c,e,t,s)})):[r.toString()]}function Mw(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(Sa(t)&&!fh(t))return!1}return!0}var Ew=J0(Du),Tw=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Mw(e),this.componentId=t,this.baseHash=aa(Ew,t),this.baseStyle=s,s_.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=us(o,this.staticRulesId);else{var l=Jg(ds(this.rules,e,t,s)),c=jd(aa(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,c)){var d=s(l,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,d)}o=us(o,c),this.staticRulesId=c}else{for(var h=aa(this.baseHash,s.hash),m="",g=0;g<this.rules.length;g++){var v=this.rules[g];if(typeof v=="string")m+=v;else if(v){var x=Jg(ds(v,e,t,s));h=aa(h,x+g),m+=x}}if(m){var S=jd(h>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,s(m,".".concat(S),void 0,this.componentId)),o=us(o,S)}}return o},r}(),c_=ri.createContext(void 0);c_.Consumer;var Jf={};function ww(r,e,t){var s=fh(r),o=r,l=!Qf(r),c=e.attrs,d=c===void 0?Nu:c,h=e.componentId,m=h===void 0?function(R,H){var F=typeof R!="string"?"sc":qg(R);Jf[F]=(Jf[F]||0)+1;var N="".concat(F,"-").concat($T(Du+F+Jf[F]));return H?"".concat(H,"-").concat(N):N}(e.displayName,e.parentComponentId):h,g=e.displayName,v=g===void 0?function(R){return Qf(R)?"styled.".concat(R):"Styled(".concat(KT(R),")")}(r):g,x=e.displayName&&e.componentId?"".concat(qg(e.displayName),"-").concat(e.componentId):e.componentId||m,S=s&&o.attrs?o.attrs.concat(d).filter(Boolean):d,T=e.shouldForwardProp;if(s&&o.shouldForwardProp){var A=o.shouldForwardProp;if(e.shouldForwardProp){var y=e.shouldForwardProp;T=function(R,H){return A(R,H)&&y(R,H)}}else T=A}var _=new Tw(t,x,s?o.componentStyle:void 0);function I(R,H){return function(F,N,X){var b=F.attrs,C=F.componentStyle,B=F.defaultProps,le=F.foldedComponentIds,ne=F.styledComponentId,fe=F.target,pe=ri.useContext(c_),oe=n0(),ue=F.shouldForwardProp||oe.shouldForwardProp,z=XT(N,pe,B)||ya,ae=function(ce,ye,ge){for(var we,Ae=kn(kn({},ye),{className:void 0,theme:ge}),$e=0;$e<ce.length;$e+=1){var yt=Sa(we=ce[$e])?we(Ae):we;for(var it in yt)Ae[it]=it==="className"?us(Ae[it],yt[it]):it==="style"?kn(kn({},Ae[it]),yt[it]):yt[it]}return ye.className&&(Ae.className=us(Ae.className,ye.className)),Ae}(b,N,z),re=ae.as||fe,U={};for(var J in ae)ae[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&ae.theme===z||(J==="forwardedAs"?U.as=ae.forwardedAs:ue&&!ue(J,re)||(U[J]=ae[J]));var Ne=function(ce,ye){var ge=n0(),we=ce.generateAndInjectStyles(ye,ge.styleSheet,ge.stylis);return we}(C,ae),Z=us(le,ne);return Ne&&(Z+=" "+Ne),ae.className&&(Z+=" "+ae.className),U[Qf(re)&&!Z0.has(re)?"class":"className"]=Z,X&&(U.ref=X),mi.createElement(re,U)}(L,R,H)}I.displayName=v;var L=ri.forwardRef(I);return L.attrs=S,L.componentStyle=_,L.displayName=v,L.shouldForwardProp=T,L.foldedComponentIds=s?us(o.foldedComponentIds,o.styledComponentId):"",L.styledComponentId=x,L.target=s?o.target:r,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=s?function(H){for(var F=[],N=1;N<arguments.length;N++)F[N-1]=arguments[N];for(var X=0,b=F;X<b.length;X++)Yd(H,b[X],!0);return H}({},o.defaultProps,R):R}}),dh(L,function(){return".".concat(L.styledComponentId)}),l&&i_(L,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function r0(r,e){for(var t=[r[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],r[s+1]);return t}var s0=function(r){return Object.assign(r,{isCss:!0})};function Aw(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Sa(r)||_o(r))return s0(ds(r0(Nu,yu([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?ds(s):s0(ds(r0(s,e)))}function $d(r,e,t){if(t===void 0&&(t=ya),!e)throw Eo(1,e);var s=function(o){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return r(e,t,Aw.apply(void 0,yu([o],l,!1)))};return s.attrs=function(o){return $d(r,e,kn(kn({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return $d(r,e,kn(kn({},t),o))},s}var f_=function(r){return $d(ww,r)},d_=f_;Z0.forEach(function(r){d_[r]=f_(r)});const Cw=()=>Y.jsx(Rw,{className:"flex justify-center pb-10",children:Y.jsxs("div",{className:"card",children:[Y.jsx("a",{className:"social-link1",href:"https://www.instagram.com/i_am_adnan_ali__/",children:Y.jsx("svg",{style:{color:"white"},xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16",children:Y.jsx("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",fill:"white"})})}),Y.jsxs("a",{className:"social-link2",href:"https://github.com/imadnanali",children:[Y.jsx("svg",{viewBox:"0 0 496 512",height:"1em",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",children:Y.jsx("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})," "]}),Y.jsx("a",{className:"social-link3",href:"https://discord.com/channels/@me",children:Y.jsx("svg",{style:{color:"white"},xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-discord",viewBox:"0 0 16 16",children:Y.jsx("path",{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",fill:"white"})})}),Y.jsxs("a",{className:"social-link4",href:"https://www.linkedin.com/in/adnan-ali-8b130b285/",children:[Y.jsx("svg",{fill:"#fff",viewBox:"0 0 448 512",height:"1em",xmlns:"http://www.w3.org/2000/svg",children:Y.jsx("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})," "]}),Y.jsx("a",{className:"social-link5",href:"https://wa.me/qr/7NBS5S6MRHODK1",children:Y.jsxs("svg",{viewBox:"0 0 16 16",className:"bi bi-whatsapp",fill:"currentColor",height:16,width:16,xmlns:"http://www.w3.org/2000/svg",style:{color:"white"},children:[" ",Y.jsx("path",{fill:"white",d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})," "]})})]})}),Rw=d_.div`
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
  }`;function bw(){return Y.jsx(Y.Fragment,{children:Y.jsxs("div",{className:"bg-black text-white",children:[Y.jsx("div",{className:"flex bg-black z-50 fixed right-0 w-full justify-center",children:Y.jsxs("div",{className:"flex w-[90%] justify-between py-4 px-10 border-b border-neutral-800",children:[Y.jsxs("div",{className:"flex font-bold text-4xl",children:[Y.jsx("span",{className:"text-[#8f9094]",children:"{"}),Y.jsx("span",{children:"A"}),Y.jsx("span",{className:"text-[#8f9094]",children:"}"})]}),Y.jsxs("div",{className:"flex items-center gap-10 list-none font-semibold",children:[Y.jsx("li",{className:'"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black  hover:border-neutral-500 cursor-pointer',children:"Home"}),Y.jsx("li",{className:'"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer',children:"About Me"}),Y.jsx("li",{className:'"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black  hover:border-neutral-500 cursor-pointer',children:"Projects"}),Y.jsx("li",{className:'"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer',children:"Contact"})]})]})}),Y.jsxs("div",{className:"head pt-20",children:[Y.jsx("img",{className:"w-44 h-56 mt-10 ms-20 invert opacity-15 ",src:"https://svgsilh.com/svg/26432.svg",alt:""}),Y.jsx("div",{className:"relative flex flex-col mt-[-12rem] ms-20 items-start min-h-screen px-8 ",children:Y.jsxs("div",{className:"z-10",children:[Y.jsx("p",{className:"text-green-400 font-semibold text-4xl",children:"Hey there!, I'm-"}),Y.jsx("h1",{className:"text-[10rem] font-bold   mt-[-2rem] ",children:"Adnan Ali."}),Y.jsxs("h2",{className:"text-3xl font-semibold mt-[-2rem]",children:[Y.jsx(hT,{}),Y.jsx("h1",{className:" text-gray-400 mt-4",children:"Currently mastering JavaScript with hands-on projects."})]}),Y.jsxs("div",{className:"buttons flex gap-5 mt-10",children:[Y.jsx("a",{href:"#",children:Y.jsxs("button",{className:"font-semibold  bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out  px-4 py-2 rounded-md flex items-center gap-2",children:[Y.jsx(ST,{color:"#4ade80"}),"GitHub"]})}),Y.jsx("a",{href:"#",children:Y.jsxs("button",{className:"font-semibold bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out  px-4 py-2 rounded-md flex items-center gap-2",children:[Y.jsx(MT,{color:"#4ade80"}),"LinkedIn"]})})]})]})})]}),Y.jsx(ET,{}),Y.jsxs("div",{className:"skills flex mt-[7rem] px-20",children:[Y.jsxs("div",{className:"skillsinfo w-1/2",children:[Y.jsx("h2",{className:"text-3xl text-white font-bold ",children:"⚡ Skills"}),Y.jsxs("div",{className:"skillCard flex flex-wrap gap-5 py-10",children:[Y.jsx(cn,{name:"HTML"}),Y.jsx(cn,{name:"CSS"}),Y.jsx(cn,{name:"JavaScript"}),Y.jsx(cn,{name:"Node.js"}),Y.jsx(cn,{name:"Tailwind"}),Y.jsx(cn,{name:"Express"}),Y.jsx(cn,{name:"Mongo DB"}),Y.jsx(cn,{name:"React"}),Y.jsx(cn,{name:"Next.js"}),Y.jsx(cn,{name:"Java"}),Y.jsx(cn,{name:"Git"}),Y.jsx(cn,{name:"GitHub"}),Y.jsx(cn,{name:"C"}),Y.jsx(cn,{name:"Figma"}),Y.jsx(cn,{name:"Bootstrap"}),Y.jsx(cn,{name:"VS Code"}),Y.jsx(cn,{name:"Postman"}),Y.jsx(cn,{name:"Canva"})]})]}),Y.jsx("div",{className:"circle w-1/2",children:Y.jsx(dT,{})})]}),Y.jsx("div",{className:"allProjects",children:Y.jsx(TT,{})}),Y.jsx("div",{className:"Contact ",children:Y.jsx(Cw,{})})]})})}Jv.createRoot(document.getElementById("root")).render(Y.jsx(mi.StrictMode,{children:Y.jsx(bw,{})}));
