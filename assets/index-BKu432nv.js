var UT=Object.defineProperty;var FT=(n,e,t)=>e in n?UT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ie=(n,e,t)=>FT(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var rS={exports:{}},fh={},sS={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=Symbol.for("react.element"),OT=Symbol.for("react.portal"),kT=Symbol.for("react.fragment"),zT=Symbol.for("react.strict_mode"),BT=Symbol.for("react.profiler"),VT=Symbol.for("react.provider"),HT=Symbol.for("react.context"),GT=Symbol.for("react.forward_ref"),WT=Symbol.for("react.suspense"),XT=Symbol.for("react.memo"),YT=Symbol.for("react.lazy"),iv=Symbol.iterator;function $T(n){return n===null||typeof n!="object"?null:(n=iv&&n[iv]||n["@@iterator"],typeof n=="function"?n:null)}var aS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oS=Object.assign,lS={};function Xl(n,e,t){this.props=n,this.context=e,this.refs=lS,this.updater=t||aS}Xl.prototype.isReactComponent={};Xl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Xl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function uS(){}uS.prototype=Xl.prototype;function d_(n,e,t){this.props=n,this.context=e,this.refs=lS,this.updater=t||aS}var h_=d_.prototype=new uS;h_.constructor=d_;oS(h_,Xl.prototype);h_.isPureReactComponent=!0;var rv=Array.isArray,cS=Object.prototype.hasOwnProperty,p_={current:null},fS={key:!0,ref:!0,__self:!0,__source:!0};function dS(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)cS.call(e,i)&&!fS.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Lc,type:n,key:s,ref:a,props:r,_owner:p_.current}}function qT(n,e){return{$$typeof:Lc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function m_(n){return typeof n=="object"&&n!==null&&n.$$typeof===Lc}function jT(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var sv=/\/+/g;function Fh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?jT(""+n.key):e.toString(36)}function $f(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Lc:case OT:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Fh(a,0):i,rv(r)?(t="",n!=null&&(t=n.replace(sv,"$&/")+"/"),$f(r,e,t,"",function(u){return u})):r!=null&&(m_(r)&&(r=qT(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(sv,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",rv(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Fh(s,o);a+=$f(s,e,t,l,r)}else if(l=$T(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Fh(s,o++),a+=$f(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Hc(n,e,t){if(n==null)return n;var i=[],r=0;return $f(n,i,"","",function(s){return e.call(t,s,r++)}),i}function KT(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ci={current:null},qf={transition:null},ZT={ReactCurrentDispatcher:ci,ReactCurrentBatchConfig:qf,ReactCurrentOwner:p_};function hS(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:Hc,forEach:function(n,e,t){Hc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Hc(n,function(){e++}),e},toArray:function(n){return Hc(n,function(e){return e})||[]},only:function(n){if(!m_(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ut.Component=Xl;ut.Fragment=kT;ut.Profiler=BT;ut.PureComponent=d_;ut.StrictMode=zT;ut.Suspense=WT;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT;ut.act=hS;ut.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=oS({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=p_.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)cS.call(e,l)&&!fS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Lc,type:n.type,key:r,ref:s,props:i,_owner:a}};ut.createContext=function(n){return n={$$typeof:HT,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:VT,_context:n},n.Consumer=n};ut.createElement=dS;ut.createFactory=function(n){var e=dS.bind(null,n);return e.type=n,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(n){return{$$typeof:GT,render:n}};ut.isValidElement=m_;ut.lazy=function(n){return{$$typeof:YT,_payload:{_status:-1,_result:n},_init:KT}};ut.memo=function(n,e){return{$$typeof:XT,type:n,compare:e===void 0?null:e}};ut.startTransition=function(n){var e=qf.transition;qf.transition={};try{n()}finally{qf.transition=e}};ut.unstable_act=hS;ut.useCallback=function(n,e){return ci.current.useCallback(n,e)};ut.useContext=function(n){return ci.current.useContext(n)};ut.useDebugValue=function(){};ut.useDeferredValue=function(n){return ci.current.useDeferredValue(n)};ut.useEffect=function(n,e){return ci.current.useEffect(n,e)};ut.useId=function(){return ci.current.useId()};ut.useImperativeHandle=function(n,e,t){return ci.current.useImperativeHandle(n,e,t)};ut.useInsertionEffect=function(n,e){return ci.current.useInsertionEffect(n,e)};ut.useLayoutEffect=function(n,e){return ci.current.useLayoutEffect(n,e)};ut.useMemo=function(n,e){return ci.current.useMemo(n,e)};ut.useReducer=function(n,e,t){return ci.current.useReducer(n,e,t)};ut.useRef=function(n){return ci.current.useRef(n)};ut.useState=function(n){return ci.current.useState(n)};ut.useSyncExternalStore=function(n,e,t){return ci.current.useSyncExternalStore(n,e,t)};ut.useTransition=function(){return ci.current.useTransition()};ut.version="18.3.1";sS.exports=ut;var bt=sS.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QT=bt,JT=Symbol.for("react.element"),ew=Symbol.for("react.fragment"),tw=Object.prototype.hasOwnProperty,nw=QT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iw={key:!0,ref:!0,__self:!0,__source:!0};function pS(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)tw.call(e,i)&&!iw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:JT,type:n,key:s,ref:a,props:r,_owner:nw.current}}fh.Fragment=ew;fh.jsx=pS;fh.jsxs=pS;rS.exports=fh;var I=rS.exports,mS={exports:{}},Ki={},gS={exports:{}},_S={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,W){var R=N.length;N.push(W);e:for(;0<R;){var ee=R-1>>>1,oe=N[ee];if(0<r(oe,W))N[ee]=W,N[R]=oe,R=ee;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var W=N[0],R=N.pop();if(R!==W){N[0]=R;e:for(var ee=0,oe=N.length,We=oe>>>1;ee<We;){var Oe=2*(ee+1)-1,ke=N[Oe],V=Oe+1,re=N[V];if(0>r(ke,R))V<oe&&0>r(re,ke)?(N[ee]=re,N[V]=R,ee=V):(N[ee]=ke,N[Oe]=R,ee=Oe);else if(V<oe&&0>r(re,R))N[ee]=re,N[V]=R,ee=V;else break e}}return W}function r(N,W){var R=N.sortIndex-W.sortIndex;return R!==0?R:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,d=null,f=3,h=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(N){for(var W=t(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=N)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(u)}}function x(N){if(_=!1,S(N),!m)if(t(l)!==null)m=!0,q(E);else{var W=t(u);W!==null&&F(x,W.startTime-N)}}function E(N,W){m=!1,_&&(_=!1,p(y),y=-1),h=!0;var R=f;try{for(S(W),d=t(l);d!==null&&(!(d.expirationTime>W)||N&&!D());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,f=d.priorityLevel;var oe=ee(d.expirationTime<=W);W=n.unstable_now(),typeof oe=="function"?d.callback=oe:d===t(l)&&i(l),S(W)}else i(l);d=t(l)}if(d!==null)var We=!0;else{var Oe=t(u);Oe!==null&&F(x,Oe.startTime-W),We=!1}return We}finally{d=null,f=R,h=!1}}var w=!1,T=null,y=-1,b=5,C=-1;function D(){return!(n.unstable_now()-C<b)}function L(){if(T!==null){var N=n.unstable_now();C=N;var W=!0;try{W=T(!0,N)}finally{W?$():(w=!1,T=null)}}else w=!1}var $;if(typeof v=="function")$=function(){v(L)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,k=j.port2;j.port1.onmessage=L,$=function(){k.postMessage(null)}}else $=function(){g(L,0)};function q(N){T=N,w||(w=!0,$())}function F(N,W){y=g(function(){N(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){m||h||(m=!0,q(E))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var R=f;f=W;try{return N()}finally{f=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=f;f=N;try{return W()}finally{f=R}},n.unstable_scheduleCallback=function(N,W,R){var ee=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ee+R:ee):R=ee,N){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=R+oe,N={id:c++,callback:W,priorityLevel:N,startTime:R,expirationTime:oe,sortIndex:-1},R>ee?(N.sortIndex=R,e(u,N),t(l)===null&&N===t(u)&&(_?(p(y),y=-1):_=!0,F(x,R-ee))):(N.sortIndex=oe,e(l,N),m||h||(m=!0,q(E))),N},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(N){var W=f;return function(){var R=f;f=W;try{return N.apply(this,arguments)}finally{f=R}}}})(_S);gS.exports=_S;var rw=gS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sw=bt,$i=rw;function fe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vS=new Set,tc={};function go(n,e){Al(n,e),Al(n+"Capture",e)}function Al(n,e){for(tc[n]=e,n=0;n<e.length;n++)vS.add(e[n])}var Ss=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tm=Object.prototype.hasOwnProperty,aw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,av={},ov={};function ow(n){return tm.call(ov,n)?!0:tm.call(av,n)?!1:aw.test(n)?ov[n]=!0:(av[n]=!0,!1)}function lw(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function uw(n,e,t,i){if(e===null||typeof e>"u"||lw(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fi(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Fn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Fn[n]=new fi(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Fn[e]=new fi(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Fn[n]=new fi(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Fn[n]=new fi(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Fn[n]=new fi(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Fn[n]=new fi(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Fn[n]=new fi(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Fn[n]=new fi(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Fn[n]=new fi(n,5,!1,n.toLowerCase(),null,!1,!1)});var g_=/[\-:]([a-z])/g;function __(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(g_,__);Fn[e]=new fi(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(g_,__);Fn[e]=new fi(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(g_,__);Fn[e]=new fi(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Fn[n]=new fi(n,1,!1,n.toLowerCase(),null,!1,!1)});Fn.xlinkHref=new fi("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Fn[n]=new fi(n,1,!1,n.toLowerCase(),null,!0,!0)});function v_(n,e,t,i){var r=Fn.hasOwnProperty(e)?Fn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uw(e,t,r,i)&&(t=null),i||r===null?ow(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Cs=sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gc=Symbol.for("react.element"),Ko=Symbol.for("react.portal"),Zo=Symbol.for("react.fragment"),x_=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),xS=Symbol.for("react.provider"),yS=Symbol.for("react.context"),y_=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),rm=Symbol.for("react.suspense_list"),S_=Symbol.for("react.memo"),Hs=Symbol.for("react.lazy"),SS=Symbol.for("react.offscreen"),lv=Symbol.iterator;function Zl(n){return n===null||typeof n!="object"?null:(n=lv&&n[lv]||n["@@iterator"],typeof n=="function"?n:null)}var $t=Object.assign,Oh;function vu(n){if(Oh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Oh=e&&e[1]||""}return`
`+Oh+n}var kh=!1;function zh(n,e){if(!n||kh)return"";kh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{kh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?vu(n):""}function cw(n){switch(n.tag){case 5:return vu(n.type);case 16:return vu("Lazy");case 13:return vu("Suspense");case 19:return vu("SuspenseList");case 0:case 2:case 15:return n=zh(n.type,!1),n;case 11:return n=zh(n.type.render,!1),n;case 1:return n=zh(n.type,!0),n;default:return""}}function sm(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Zo:return"Fragment";case Ko:return"Portal";case nm:return"Profiler";case x_:return"StrictMode";case im:return"Suspense";case rm:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case yS:return(n.displayName||"Context")+".Consumer";case xS:return(n._context.displayName||"Context")+".Provider";case y_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case S_:return e=n.displayName||null,e!==null?e:sm(n.type)||"Memo";case Hs:e=n._payload,n=n._init;try{return sm(n(e))}catch{}}return null}function fw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sm(e);case 8:return e===x_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ha(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function MS(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dw(n){var e=MS(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wc(n){n._valueTracker||(n._valueTracker=dw(n))}function ES(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=MS(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Sd(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function am(n,e){var t=e.checked;return $t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function uv(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ha(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function TS(n,e){e=e.checked,e!=null&&v_(n,"checked",e,!1)}function om(n,e){TS(n,e);var t=ha(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?lm(n,e.type,t):e.hasOwnProperty("defaultValue")&&lm(n,e.type,ha(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function cv(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function lm(n,e,t){(e!=="number"||Sd(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var xu=Array.isArray;function fl(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ha(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function um(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return $t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function fv(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(fe(92));if(xu(t)){if(1<t.length)throw Error(fe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ha(t)}}function wS(n,e){var t=ha(e.value),i=ha(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function dv(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function bS(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cm(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?bS(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Xc,AS=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Xc=Xc||document.createElement("div"),Xc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function nc(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Du={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hw=["Webkit","ms","Moz","O"];Object.keys(Du).forEach(function(n){hw.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Du[e]=Du[n]})});function CS(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Du.hasOwnProperty(n)&&Du[n]?(""+e).trim():e+"px"}function RS(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=CS(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var pw=$t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fm(n,e){if(e){if(pw[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function dm(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hm=null;function M_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pm=null,dl=null,hl=null;function hv(n){if(n=Uc(n)){if(typeof pm!="function")throw Error(fe(280));var e=n.stateNode;e&&(e=gh(e),pm(n.stateNode,n.type,e))}}function PS(n){dl?hl?hl.push(n):hl=[n]:dl=n}function DS(){if(dl){var n=dl,e=hl;if(hl=dl=null,hv(n),e)for(n=0;n<e.length;n++)hv(e[n])}}function LS(n,e){return n(e)}function NS(){}var Bh=!1;function IS(n,e,t){if(Bh)return n(e,t);Bh=!0;try{return LS(n,e,t)}finally{Bh=!1,(dl!==null||hl!==null)&&(NS(),DS())}}function ic(n,e){var t=n.stateNode;if(t===null)return null;var i=gh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(fe(231,e,typeof t));return t}var mm=!1;if(Ss)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){mm=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{mm=!1}function mw(n,e,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Lu=!1,Md=null,Ed=!1,gm=null,gw={onError:function(n){Lu=!0,Md=n}};function _w(n,e,t,i,r,s,a,o,l){Lu=!1,Md=null,mw.apply(gw,arguments)}function vw(n,e,t,i,r,s,a,o,l){if(_w.apply(this,arguments),Lu){if(Lu){var u=Md;Lu=!1,Md=null}else throw Error(fe(198));Ed||(Ed=!0,gm=u)}}function _o(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function US(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function pv(n){if(_o(n)!==n)throw Error(fe(188))}function xw(n){var e=n.alternate;if(!e){if(e=_o(n),e===null)throw Error(fe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return pv(r),n;if(s===i)return pv(r),e;s=s.sibling}throw Error(fe(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(fe(189))}}if(t.alternate!==i)throw Error(fe(190))}if(t.tag!==3)throw Error(fe(188));return t.stateNode.current===t?n:e}function FS(n){return n=xw(n),n!==null?OS(n):null}function OS(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=OS(n);if(e!==null)return e;n=n.sibling}return null}var kS=$i.unstable_scheduleCallback,mv=$i.unstable_cancelCallback,yw=$i.unstable_shouldYield,Sw=$i.unstable_requestPaint,an=$i.unstable_now,Mw=$i.unstable_getCurrentPriorityLevel,E_=$i.unstable_ImmediatePriority,zS=$i.unstable_UserBlockingPriority,Td=$i.unstable_NormalPriority,Ew=$i.unstable_LowPriority,BS=$i.unstable_IdlePriority,dh=null,Xr=null;function Tw(n){if(Xr&&typeof Xr.onCommitFiberRoot=="function")try{Xr.onCommitFiberRoot(dh,n,void 0,(n.current.flags&128)===128)}catch{}}var br=Math.clz32?Math.clz32:Aw,ww=Math.log,bw=Math.LN2;function Aw(n){return n>>>=0,n===0?32:31-(ww(n)/bw|0)|0}var Yc=64,$c=4194304;function yu(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wd(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=yu(o):(s&=a,s!==0&&(i=yu(s)))}else a=t&~r,a!==0?i=yu(a):s!==0&&(i=yu(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-br(e),r=1<<t,i|=n[t],e&=~r;return i}function Cw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-br(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=Cw(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function _m(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function VS(){var n=Yc;return Yc<<=1,!(Yc&4194240)&&(Yc=64),n}function Vh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Nc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-br(e),n[e]=t}function Pw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-br(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function T_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-br(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Et=0;function HS(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var GS,w_,WS,XS,YS,vm=!1,qc=[],na=null,ia=null,ra=null,rc=new Map,sc=new Map,Xs=[],Dw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gv(n,e){switch(n){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":ia=null;break;case"mouseover":case"mouseout":ra=null;break;case"pointerover":case"pointerout":rc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sc.delete(e.pointerId)}}function Jl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uc(e),e!==null&&w_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Lw(n,e,t,i,r){switch(e){case"focusin":return na=Jl(na,n,e,t,i,r),!0;case"dragenter":return ia=Jl(ia,n,e,t,i,r),!0;case"mouseover":return ra=Jl(ra,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return rc.set(s,Jl(rc.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sc.set(s,Jl(sc.get(s)||null,n,e,t,i,r)),!0}return!1}function $S(n){var e=za(n.target);if(e!==null){var t=_o(e);if(t!==null){if(e=t.tag,e===13){if(e=US(t),e!==null){n.blockedOn=e,YS(n.priority,function(){WS(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=xm(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);hm=i,t.target.dispatchEvent(i),hm=null}else return e=Uc(t),e!==null&&w_(e),n.blockedOn=t,!1;e.shift()}return!0}function _v(n,e,t){jf(n)&&t.delete(e)}function Nw(){vm=!1,na!==null&&jf(na)&&(na=null),ia!==null&&jf(ia)&&(ia=null),ra!==null&&jf(ra)&&(ra=null),rc.forEach(_v),sc.forEach(_v)}function eu(n,e){n.blockedOn===e&&(n.blockedOn=null,vm||(vm=!0,$i.unstable_scheduleCallback($i.unstable_NormalPriority,Nw)))}function ac(n){function e(r){return eu(r,n)}if(0<qc.length){eu(qc[0],n);for(var t=1;t<qc.length;t++){var i=qc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(na!==null&&eu(na,n),ia!==null&&eu(ia,n),ra!==null&&eu(ra,n),rc.forEach(e),sc.forEach(e),t=0;t<Xs.length;t++)i=Xs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Xs.length&&(t=Xs[0],t.blockedOn===null);)$S(t),t.blockedOn===null&&Xs.shift()}var pl=Cs.ReactCurrentBatchConfig,bd=!0;function Iw(n,e,t,i){var r=Et,s=pl.transition;pl.transition=null;try{Et=1,b_(n,e,t,i)}finally{Et=r,pl.transition=s}}function Uw(n,e,t,i){var r=Et,s=pl.transition;pl.transition=null;try{Et=4,b_(n,e,t,i)}finally{Et=r,pl.transition=s}}function b_(n,e,t,i){if(bd){var r=xm(n,e,t,i);if(r===null)Zh(n,e,i,Ad,t),gv(n,i);else if(Lw(r,n,e,t,i))i.stopPropagation();else if(gv(n,i),e&4&&-1<Dw.indexOf(n)){for(;r!==null;){var s=Uc(r);if(s!==null&&GS(s),s=xm(n,e,t,i),s===null&&Zh(n,e,i,Ad,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zh(n,e,i,null,t)}}var Ad=null;function xm(n,e,t,i){if(Ad=null,n=M_(i),n=za(n),n!==null)if(e=_o(n),e===null)n=null;else if(t=e.tag,t===13){if(n=US(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ad=n,null}function qS(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mw()){case E_:return 1;case zS:return 4;case Td:case Ew:return 16;case BS:return 536870912;default:return 16}default:return 16}}var qs=null,A_=null,Kf=null;function jS(){if(Kf)return Kf;var n,e=A_,t=e.length,i,r="value"in qs?qs.value:qs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Kf=r.slice(n,1<i?1-i:void 0)}function Zf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function jc(){return!0}function vv(){return!1}function Zi(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jc:vv,this.isPropagationStopped=vv,this}return $t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=jc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=jc)},persist:function(){},isPersistent:jc}),e}var Yl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},C_=Zi(Yl),Ic=$t({},Yl,{view:0,detail:0}),Fw=Zi(Ic),Hh,Gh,tu,hh=$t({},Ic,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:R_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==tu&&(tu&&n.type==="mousemove"?(Hh=n.screenX-tu.screenX,Gh=n.screenY-tu.screenY):Gh=Hh=0,tu=n),Hh)},movementY:function(n){return"movementY"in n?n.movementY:Gh}}),xv=Zi(hh),Ow=$t({},hh,{dataTransfer:0}),kw=Zi(Ow),zw=$t({},Ic,{relatedTarget:0}),Wh=Zi(zw),Bw=$t({},Yl,{animationName:0,elapsedTime:0,pseudoElement:0}),Vw=Zi(Bw),Hw=$t({},Yl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gw=Zi(Hw),Ww=$t({},Yl,{data:0}),yv=Zi(Ww),Xw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=$w[n])?!!e[n]:!1}function R_(){return qw}var jw=$t({},Ic,{key:function(n){if(n.key){var e=Xw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Zf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Yw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:R_,charCode:function(n){return n.type==="keypress"?Zf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Kw=Zi(jw),Zw=$t({},hh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sv=Zi(Zw),Qw=$t({},Ic,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:R_}),Jw=Zi(Qw),eb=$t({},Yl,{propertyName:0,elapsedTime:0,pseudoElement:0}),tb=Zi(eb),nb=$t({},hh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ib=Zi(nb),rb=[9,13,27,32],P_=Ss&&"CompositionEvent"in window,Nu=null;Ss&&"documentMode"in document&&(Nu=document.documentMode);var sb=Ss&&"TextEvent"in window&&!Nu,KS=Ss&&(!P_||Nu&&8<Nu&&11>=Nu),Mv=" ",Ev=!1;function ZS(n,e){switch(n){case"keyup":return rb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function QS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qo=!1;function ab(n,e){switch(n){case"compositionend":return QS(e);case"keypress":return e.which!==32?null:(Ev=!0,Mv);case"textInput":return n=e.data,n===Mv&&Ev?null:n;default:return null}}function ob(n,e){if(Qo)return n==="compositionend"||!P_&&ZS(n,e)?(n=jS(),Kf=A_=qs=null,Qo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return KS&&e.locale!=="ko"?null:e.data;default:return null}}var lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!lb[n.type]:e==="textarea"}function JS(n,e,t,i){PS(i),e=Cd(e,"onChange"),0<e.length&&(t=new C_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Iu=null,oc=null;function ub(n){cM(n,0)}function ph(n){var e=tl(n);if(ES(e))return n}function cb(n,e){if(n==="change")return e}var eM=!1;if(Ss){var Xh;if(Ss){var Yh="oninput"in document;if(!Yh){var wv=document.createElement("div");wv.setAttribute("oninput","return;"),Yh=typeof wv.oninput=="function"}Xh=Yh}else Xh=!1;eM=Xh&&(!document.documentMode||9<document.documentMode)}function bv(){Iu&&(Iu.detachEvent("onpropertychange",tM),oc=Iu=null)}function tM(n){if(n.propertyName==="value"&&ph(oc)){var e=[];JS(e,oc,n,M_(n)),IS(ub,e)}}function fb(n,e,t){n==="focusin"?(bv(),Iu=e,oc=t,Iu.attachEvent("onpropertychange",tM)):n==="focusout"&&bv()}function db(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ph(oc)}function hb(n,e){if(n==="click")return ph(e)}function pb(n,e){if(n==="input"||n==="change")return ph(e)}function mb(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Rr=typeof Object.is=="function"?Object.is:mb;function lc(n,e){if(Rr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!tm.call(e,r)||!Rr(n[r],e[r]))return!1}return!0}function Av(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Cv(n,e){var t=Av(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Av(t)}}function nM(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?nM(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function iM(){for(var n=window,e=Sd();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Sd(n.document)}return e}function D_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function gb(n){var e=iM(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&nM(t.ownerDocument.documentElement,t)){if(i!==null&&D_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Cv(t,s);var a=Cv(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _b=Ss&&"documentMode"in document&&11>=document.documentMode,Jo=null,ym=null,Uu=null,Sm=!1;function Rv(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sm||Jo==null||Jo!==Sd(i)||(i=Jo,"selectionStart"in i&&D_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Uu&&lc(Uu,i)||(Uu=i,i=Cd(ym,"onSelect"),0<i.length&&(e=new C_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Jo)))}function Kc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var el={animationend:Kc("Animation","AnimationEnd"),animationiteration:Kc("Animation","AnimationIteration"),animationstart:Kc("Animation","AnimationStart"),transitionend:Kc("Transition","TransitionEnd")},$h={},rM={};Ss&&(rM=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function mh(n){if($h[n])return $h[n];if(!el[n])return n;var e=el[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in rM)return $h[n]=e[t];return n}var sM=mh("animationend"),aM=mh("animationiteration"),oM=mh("animationstart"),lM=mh("transitionend"),uM=new Map,Pv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ya(n,e){uM.set(n,e),go(e,[n])}for(var qh=0;qh<Pv.length;qh++){var jh=Pv[qh],vb=jh.toLowerCase(),xb=jh[0].toUpperCase()+jh.slice(1);ya(vb,"on"+xb)}ya(sM,"onAnimationEnd");ya(aM,"onAnimationIteration");ya(oM,"onAnimationStart");ya("dblclick","onDoubleClick");ya("focusin","onFocus");ya("focusout","onBlur");ya(lM,"onTransitionEnd");Al("onMouseEnter",["mouseout","mouseover"]);Al("onMouseLeave",["mouseout","mouseover"]);Al("onPointerEnter",["pointerout","pointerover"]);Al("onPointerLeave",["pointerout","pointerover"]);go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));go("onBeforeInput",["compositionend","keypress","textInput","paste"]);go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Su));function Dv(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,vw(i,e,void 0,n),n.currentTarget=null}function cM(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Dv(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Dv(r,o,u),s=l}}}if(Ed)throw n=gm,Ed=!1,gm=null,n}function kt(n,e){var t=e[bm];t===void 0&&(t=e[bm]=new Set);var i=n+"__bubble";t.has(i)||(fM(e,n,2,!1),t.add(i))}function Kh(n,e,t){var i=0;e&&(i|=4),fM(t,n,i,e)}var Zc="_reactListening"+Math.random().toString(36).slice(2);function uc(n){if(!n[Zc]){n[Zc]=!0,vS.forEach(function(t){t!=="selectionchange"&&(yb.has(t)||Kh(t,!1,n),Kh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Zc]||(e[Zc]=!0,Kh("selectionchange",!1,e))}}function fM(n,e,t,i){switch(qS(e)){case 1:var r=Iw;break;case 4:r=Uw;break;default:r=b_}t=r.bind(null,e,t,n),r=void 0,!mm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Zh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=za(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}IS(function(){var u=s,c=M_(t),d=[];e:{var f=uM.get(n);if(f!==void 0){var h=C_,m=n;switch(n){case"keypress":if(Zf(t)===0)break e;case"keydown":case"keyup":h=Kw;break;case"focusin":m="focus",h=Wh;break;case"focusout":m="blur",h=Wh;break;case"beforeblur":case"afterblur":h=Wh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=xv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=kw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Jw;break;case sM:case aM:case oM:h=Vw;break;case lM:h=tb;break;case"scroll":h=Fw;break;case"wheel":h=ib;break;case"copy":case"cut":case"paste":h=Gw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Sv}var _=(e&4)!==0,g=!_&&n==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,S;v!==null;){S=v;var x=S.stateNode;if(S.tag===5&&x!==null&&(S=x,p!==null&&(x=ic(v,p),x!=null&&_.push(cc(v,x,S)))),g)break;v=v.return}0<_.length&&(f=new h(f,m,null,t,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",f&&t!==hm&&(m=t.relatedTarget||t.fromElement)&&(za(m)||m[Ms]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=t.relatedTarget||t.toElement,h=u,m=m?za(m):null,m!==null&&(g=_o(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(_=xv,x="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Sv,x="onPointerLeave",p="onPointerEnter",v="pointer"),g=h==null?f:tl(h),S=m==null?f:tl(m),f=new _(x,v+"leave",h,t,c),f.target=g,f.relatedTarget=S,x=null,za(c)===u&&(_=new _(p,v+"enter",m,t,c),_.target=S,_.relatedTarget=g,x=_),g=x,h&&m)t:{for(_=h,p=m,v=0,S=_;S;S=Eo(S))v++;for(S=0,x=p;x;x=Eo(x))S++;for(;0<v-S;)_=Eo(_),v--;for(;0<S-v;)p=Eo(p),S--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=Eo(_),p=Eo(p)}_=null}else _=null;h!==null&&Lv(d,f,h,_,!1),m!==null&&g!==null&&Lv(d,g,m,_,!0)}}e:{if(f=u?tl(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var E=cb;else if(Tv(f))if(eM)E=pb;else{E=db;var w=fb}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=hb);if(E&&(E=E(n,u))){JS(d,E,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&lm(f,"number",f.value)}switch(w=u?tl(u):window,n){case"focusin":(Tv(w)||w.contentEditable==="true")&&(Jo=w,ym=u,Uu=null);break;case"focusout":Uu=ym=Jo=null;break;case"mousedown":Sm=!0;break;case"contextmenu":case"mouseup":case"dragend":Sm=!1,Rv(d,t,c);break;case"selectionchange":if(_b)break;case"keydown":case"keyup":Rv(d,t,c)}var T;if(P_)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Qo?ZS(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(KS&&t.locale!=="ko"&&(Qo||y!=="onCompositionStart"?y==="onCompositionEnd"&&Qo&&(T=jS()):(qs=c,A_="value"in qs?qs.value:qs.textContent,Qo=!0)),w=Cd(u,y),0<w.length&&(y=new yv(y,n,null,t,c),d.push({event:y,listeners:w}),T?y.data=T:(T=QS(t),T!==null&&(y.data=T)))),(T=sb?ab(n,t):ob(n,t))&&(u=Cd(u,"onBeforeInput"),0<u.length&&(c=new yv("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=T))}cM(d,e)})}function cc(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Cd(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ic(n,t),s!=null&&i.unshift(cc(n,s,r)),s=ic(n,e),s!=null&&i.push(cc(n,s,r))),n=n.return}return i}function Eo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Lv(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ic(t,s),l!=null&&a.unshift(cc(t,l,o))):r||(l=ic(t,s),l!=null&&a.push(cc(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var Sb=/\r\n?/g,Mb=/\u0000|\uFFFD/g;function Nv(n){return(typeof n=="string"?n:""+n).replace(Sb,`
`).replace(Mb,"")}function Qc(n,e,t){if(e=Nv(e),Nv(n)!==e&&t)throw Error(fe(425))}function Rd(){}var Mm=null,Em=null;function Tm(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wm=typeof setTimeout=="function"?setTimeout:void 0,Eb=typeof clearTimeout=="function"?clearTimeout:void 0,Iv=typeof Promise=="function"?Promise:void 0,Tb=typeof queueMicrotask=="function"?queueMicrotask:typeof Iv<"u"?function(n){return Iv.resolve(null).then(n).catch(wb)}:wm;function wb(n){setTimeout(function(){throw n})}function Qh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ac(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ac(e)}function sa(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Uv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var $l=Math.random().toString(36).slice(2),zr="__reactFiber$"+$l,fc="__reactProps$"+$l,Ms="__reactContainer$"+$l,bm="__reactEvents$"+$l,bb="__reactListeners$"+$l,Ab="__reactHandles$"+$l;function za(n){var e=n[zr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ms]||t[zr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Uv(n);n!==null;){if(t=n[zr])return t;n=Uv(n)}return e}n=t,t=n.parentNode}return null}function Uc(n){return n=n[zr]||n[Ms],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function tl(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(fe(33))}function gh(n){return n[fc]||null}var Am=[],nl=-1;function Sa(n){return{current:n}}function zt(n){0>nl||(n.current=Am[nl],Am[nl]=null,nl--)}function Ut(n,e){nl++,Am[nl]=n.current,n.current=e}var pa={},Zn=Sa(pa),vi=Sa(!1),io=pa;function Cl(n,e){var t=n.type.contextTypes;if(!t)return pa;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function xi(n){return n=n.childContextTypes,n!=null}function Pd(){zt(vi),zt(Zn)}function Fv(n,e,t){if(Zn.current!==pa)throw Error(fe(168));Ut(Zn,e),Ut(vi,t)}function dM(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,fw(n)||"Unknown",r));return $t({},t,i)}function Dd(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pa,io=Zn.current,Ut(Zn,n),Ut(vi,vi.current),!0}function Ov(n,e,t){var i=n.stateNode;if(!i)throw Error(fe(169));t?(n=dM(n,e,io),i.__reactInternalMemoizedMergedChildContext=n,zt(vi),zt(Zn),Ut(Zn,n)):zt(vi),Ut(vi,t)}var os=null,_h=!1,Jh=!1;function hM(n){os===null?os=[n]:os.push(n)}function Cb(n){_h=!0,hM(n)}function Ma(){if(!Jh&&os!==null){Jh=!0;var n=0,e=Et;try{var t=os;for(Et=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}os=null,_h=!1}catch(r){throw os!==null&&(os=os.slice(n+1)),kS(E_,Ma),r}finally{Et=e,Jh=!1}}return null}var il=[],rl=0,Ld=null,Nd=0,nr=[],ir=0,ro=null,ds=1,hs="";function Pa(n,e){il[rl++]=Nd,il[rl++]=Ld,Ld=n,Nd=e}function pM(n,e,t){nr[ir++]=ds,nr[ir++]=hs,nr[ir++]=ro,ro=n;var i=ds;n=hs;var r=32-br(i)-1;i&=~(1<<r),t+=1;var s=32-br(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ds=1<<32-br(e)+r|t<<r|i,hs=s+n}else ds=1<<s|t<<r|i,hs=n}function L_(n){n.return!==null&&(Pa(n,1),pM(n,1,0))}function N_(n){for(;n===Ld;)Ld=il[--rl],il[rl]=null,Nd=il[--rl],il[rl]=null;for(;n===ro;)ro=nr[--ir],nr[ir]=null,hs=nr[--ir],nr[ir]=null,ds=nr[--ir],nr[ir]=null}var Gi=null,Bi=null,Bt=!1,Er=null;function mM(n,e){var t=ur(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function kv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Gi=n,Bi=sa(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Gi=n,Bi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ro!==null?{id:ds,overflow:hs}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ur(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Gi=n,Bi=null,!0):!1;default:return!1}}function Cm(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rm(n){if(Bt){var e=Bi;if(e){var t=e;if(!kv(n,e)){if(Cm(n))throw Error(fe(418));e=sa(t.nextSibling);var i=Gi;e&&kv(n,e)?mM(i,t):(n.flags=n.flags&-4097|2,Bt=!1,Gi=n)}}else{if(Cm(n))throw Error(fe(418));n.flags=n.flags&-4097|2,Bt=!1,Gi=n}}}function zv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gi=n}function Jc(n){if(n!==Gi)return!1;if(!Bt)return zv(n),Bt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Tm(n.type,n.memoizedProps)),e&&(e=Bi)){if(Cm(n))throw gM(),Error(fe(418));for(;e;)mM(n,e),e=sa(e.nextSibling)}if(zv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(fe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Bi=sa(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Bi=null}}else Bi=Gi?sa(n.stateNode.nextSibling):null;return!0}function gM(){for(var n=Bi;n;)n=sa(n.nextSibling)}function Rl(){Bi=Gi=null,Bt=!1}function I_(n){Er===null?Er=[n]:Er.push(n)}var Rb=Cs.ReactCurrentBatchConfig;function nu(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(fe(309));var i=t.stateNode}if(!i)throw Error(fe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(fe(284));if(!t._owner)throw Error(fe(290,n))}return n}function ef(n,e){throw n=Object.prototype.toString.call(e),Error(fe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Bv(n){var e=n._init;return e(n._payload)}function _M(n){function e(p,v){if(n){var S=p.deletions;S===null?(p.deletions=[v],p.flags|=16):S.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=ua(p,v),p.index=0,p.sibling=null,p}function s(p,v,S){return p.index=S,n?(S=p.alternate,S!==null?(S=S.index,S<v?(p.flags|=2,v):S):(p.flags|=2,v)):(p.flags|=1048576,v)}function a(p){return n&&p.alternate===null&&(p.flags|=2),p}function o(p,v,S,x){return v===null||v.tag!==6?(v=ap(S,p.mode,x),v.return=p,v):(v=r(v,S),v.return=p,v)}function l(p,v,S,x){var E=S.type;return E===Zo?c(p,v,S.props.children,x,S.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Hs&&Bv(E)===v.type)?(x=r(v,S.props),x.ref=nu(p,v,S),x.return=p,x):(x=rd(S.type,S.key,S.props,null,p.mode,x),x.ref=nu(p,v,S),x.return=p,x)}function u(p,v,S,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=op(S,p.mode,x),v.return=p,v):(v=r(v,S.children||[]),v.return=p,v)}function c(p,v,S,x,E){return v===null||v.tag!==7?(v=ja(S,p.mode,x,E),v.return=p,v):(v=r(v,S),v.return=p,v)}function d(p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ap(""+v,p.mode,S),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gc:return S=rd(v.type,v.key,v.props,null,p.mode,S),S.ref=nu(p,null,v),S.return=p,S;case Ko:return v=op(v,p.mode,S),v.return=p,v;case Hs:var x=v._init;return d(p,x(v._payload),S)}if(xu(v)||Zl(v))return v=ja(v,p.mode,S,null),v.return=p,v;ef(p,v)}return null}function f(p,v,S,x){var E=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return E!==null?null:o(p,v,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gc:return S.key===E?l(p,v,S,x):null;case Ko:return S.key===E?u(p,v,S,x):null;case Hs:return E=S._init,f(p,v,E(S._payload),x)}if(xu(S)||Zl(S))return E!==null?null:c(p,v,S,x,null);ef(p,S)}return null}function h(p,v,S,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(S)||null,o(v,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gc:return p=p.get(x.key===null?S:x.key)||null,l(v,p,x,E);case Ko:return p=p.get(x.key===null?S:x.key)||null,u(v,p,x,E);case Hs:var w=x._init;return h(p,v,S,w(x._payload),E)}if(xu(x)||Zl(x))return p=p.get(S)||null,c(v,p,x,E,null);ef(v,x)}return null}function m(p,v,S,x){for(var E=null,w=null,T=v,y=v=0,b=null;T!==null&&y<S.length;y++){T.index>y?(b=T,T=null):b=T.sibling;var C=f(p,T,S[y],x);if(C===null){T===null&&(T=b);break}n&&T&&C.alternate===null&&e(p,T),v=s(C,v,y),w===null?E=C:w.sibling=C,w=C,T=b}if(y===S.length)return t(p,T),Bt&&Pa(p,y),E;if(T===null){for(;y<S.length;y++)T=d(p,S[y],x),T!==null&&(v=s(T,v,y),w===null?E=T:w.sibling=T,w=T);return Bt&&Pa(p,y),E}for(T=i(p,T);y<S.length;y++)b=h(T,p,y,S[y],x),b!==null&&(n&&b.alternate!==null&&T.delete(b.key===null?y:b.key),v=s(b,v,y),w===null?E=b:w.sibling=b,w=b);return n&&T.forEach(function(D){return e(p,D)}),Bt&&Pa(p,y),E}function _(p,v,S,x){var E=Zl(S);if(typeof E!="function")throw Error(fe(150));if(S=E.call(S),S==null)throw Error(fe(151));for(var w=E=null,T=v,y=v=0,b=null,C=S.next();T!==null&&!C.done;y++,C=S.next()){T.index>y?(b=T,T=null):b=T.sibling;var D=f(p,T,C.value,x);if(D===null){T===null&&(T=b);break}n&&T&&D.alternate===null&&e(p,T),v=s(D,v,y),w===null?E=D:w.sibling=D,w=D,T=b}if(C.done)return t(p,T),Bt&&Pa(p,y),E;if(T===null){for(;!C.done;y++,C=S.next())C=d(p,C.value,x),C!==null&&(v=s(C,v,y),w===null?E=C:w.sibling=C,w=C);return Bt&&Pa(p,y),E}for(T=i(p,T);!C.done;y++,C=S.next())C=h(T,p,y,C.value,x),C!==null&&(n&&C.alternate!==null&&T.delete(C.key===null?y:C.key),v=s(C,v,y),w===null?E=C:w.sibling=C,w=C);return n&&T.forEach(function(L){return e(p,L)}),Bt&&Pa(p,y),E}function g(p,v,S,x){if(typeof S=="object"&&S!==null&&S.type===Zo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Gc:e:{for(var E=S.key,w=v;w!==null;){if(w.key===E){if(E=S.type,E===Zo){if(w.tag===7){t(p,w.sibling),v=r(w,S.props.children),v.return=p,p=v;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Hs&&Bv(E)===w.type){t(p,w.sibling),v=r(w,S.props),v.ref=nu(p,w,S),v.return=p,p=v;break e}t(p,w);break}else e(p,w);w=w.sibling}S.type===Zo?(v=ja(S.props.children,p.mode,x,S.key),v.return=p,p=v):(x=rd(S.type,S.key,S.props,null,p.mode,x),x.ref=nu(p,v,S),x.return=p,p=x)}return a(p);case Ko:e:{for(w=S.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){t(p,v.sibling),v=r(v,S.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=op(S,p.mode,x),v.return=p,p=v}return a(p);case Hs:return w=S._init,g(p,v,w(S._payload),x)}if(xu(S))return m(p,v,S,x);if(Zl(S))return _(p,v,S,x);ef(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,S),v.return=p,p=v):(t(p,v),v=ap(S,p.mode,x),v.return=p,p=v),a(p)):t(p,v)}return g}var Pl=_M(!0),vM=_M(!1),Id=Sa(null),Ud=null,sl=null,U_=null;function F_(){U_=sl=Ud=null}function O_(n){var e=Id.current;zt(Id),n._currentValue=e}function Pm(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ml(n,e){Ud=n,U_=sl=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(_i=!0),n.firstContext=null)}function pr(n){var e=n._currentValue;if(U_!==n)if(n={context:n,memoizedValue:e,next:null},sl===null){if(Ud===null)throw Error(fe(308));sl=n,Ud.dependencies={lanes:0,firstContext:n}}else sl=sl.next=n;return e}var Ba=null;function k_(n){Ba===null?Ba=[n]:Ba.push(n)}function xM(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,k_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Es(n,i)}function Es(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Gs=!1;function z_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yM(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _s(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function aa(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,_t&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Es(n,t)}return r=i.interleaved,r===null?(e.next=e,k_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Es(n,t)}function Qf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,T_(n,t)}}function Vv(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Fd(n,e,t,i){var r=n.updateQueue;Gs=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,c=u=l=null,o=s;do{var f=o.lane,h=o.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=n,_=o;switch(f=e,h=t,_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(h,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(h,d,f):m,f==null)break e;d=$t({},d,f);break e;case 2:Gs=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else h={eventTime:h,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ao|=a,n.lanes=a,n.memoizedState=d}}function Hv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Fc={},Yr=Sa(Fc),dc=Sa(Fc),hc=Sa(Fc);function Va(n){if(n===Fc)throw Error(fe(174));return n}function B_(n,e){switch(Ut(hc,e),Ut(dc,n),Ut(Yr,Fc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cm(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=cm(e,n)}zt(Yr),Ut(Yr,e)}function Dl(){zt(Yr),zt(dc),zt(hc)}function SM(n){Va(hc.current);var e=Va(Yr.current),t=cm(e,n.type);e!==t&&(Ut(dc,n),Ut(Yr,t))}function V_(n){dc.current===n&&(zt(Yr),zt(dc))}var Gt=Sa(0);function Od(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ep=[];function H_(){for(var n=0;n<ep.length;n++)ep[n]._workInProgressVersionPrimary=null;ep.length=0}var Jf=Cs.ReactCurrentDispatcher,tp=Cs.ReactCurrentBatchConfig,so=0,Yt=null,gn=null,bn=null,kd=!1,Fu=!1,pc=0,Pb=0;function zn(){throw Error(fe(321))}function G_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Rr(n[t],e[t]))return!1;return!0}function W_(n,e,t,i,r,s){if(so=s,Yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jf.current=n===null||n.memoizedState===null?Ib:Ub,n=t(i,r),Fu){s=0;do{if(Fu=!1,pc=0,25<=s)throw Error(fe(301));s+=1,bn=gn=null,e.updateQueue=null,Jf.current=Fb,n=t(i,r)}while(Fu)}if(Jf.current=zd,e=gn!==null&&gn.next!==null,so=0,bn=gn=Yt=null,kd=!1,e)throw Error(fe(300));return n}function X_(){var n=pc!==0;return pc=0,n}function Ur(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?Yt.memoizedState=bn=n:bn=bn.next=n,bn}function mr(){if(gn===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=gn.next;var e=bn===null?Yt.memoizedState:bn.next;if(e!==null)bn=e,gn=n;else{if(n===null)throw Error(fe(310));gn=n,n={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},bn===null?Yt.memoizedState=bn=n:bn=bn.next=n}return bn}function mc(n,e){return typeof e=="function"?e(n):e}function np(n){var e=mr(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=gn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((so&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Yt.lanes|=c,ao|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Rr(i,e.memoizedState)||(_i=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Yt.lanes|=s,ao|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ip(n){var e=mr(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Rr(s,e.memoizedState)||(_i=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function MM(){}function EM(n,e){var t=Yt,i=mr(),r=e(),s=!Rr(i.memoizedState,r);if(s&&(i.memoizedState=r,_i=!0),i=i.queue,Y_(bM.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||bn!==null&&bn.memoizedState.tag&1){if(t.flags|=2048,gc(9,wM.bind(null,t,i,r,e),void 0,null),An===null)throw Error(fe(349));so&30||TM(t,e,r)}return r}function TM(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function wM(n,e,t,i){e.value=t,e.getSnapshot=i,AM(e)&&CM(n)}function bM(n,e,t){return t(function(){AM(e)&&CM(n)})}function AM(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Rr(n,t)}catch{return!0}}function CM(n){var e=Es(n,1);e!==null&&Ar(e,n,1,-1)}function Gv(n){var e=Ur();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mc,lastRenderedState:n},e.queue=n,n=n.dispatch=Nb.bind(null,Yt,n),[e.memoizedState,n]}function gc(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function RM(){return mr().memoizedState}function ed(n,e,t,i){var r=Ur();Yt.flags|=n,r.memoizedState=gc(1|e,t,void 0,i===void 0?null:i)}function vh(n,e,t,i){var r=mr();i=i===void 0?null:i;var s=void 0;if(gn!==null){var a=gn.memoizedState;if(s=a.destroy,i!==null&&G_(i,a.deps)){r.memoizedState=gc(e,t,s,i);return}}Yt.flags|=n,r.memoizedState=gc(1|e,t,s,i)}function Wv(n,e){return ed(8390656,8,n,e)}function Y_(n,e){return vh(2048,8,n,e)}function PM(n,e){return vh(4,2,n,e)}function DM(n,e){return vh(4,4,n,e)}function LM(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function NM(n,e,t){return t=t!=null?t.concat([n]):null,vh(4,4,LM.bind(null,e,n),t)}function $_(){}function IM(n,e){var t=mr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&G_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function UM(n,e){var t=mr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&G_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function FM(n,e,t){return so&21?(Rr(t,e)||(t=VS(),Yt.lanes|=t,ao|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,_i=!0),n.memoizedState=t)}function Db(n,e){var t=Et;Et=t!==0&&4>t?t:4,n(!0);var i=tp.transition;tp.transition={};try{n(!1),e()}finally{Et=t,tp.transition=i}}function OM(){return mr().memoizedState}function Lb(n,e,t){var i=la(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},kM(n))zM(e,t);else if(t=xM(n,e,t,i),t!==null){var r=ui();Ar(t,n,i,r),BM(t,e,i)}}function Nb(n,e,t){var i=la(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(kM(n))zM(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Rr(o,a)){var l=e.interleaved;l===null?(r.next=r,k_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=xM(n,e,r,i),t!==null&&(r=ui(),Ar(t,n,i,r),BM(t,e,i))}}function kM(n){var e=n.alternate;return n===Yt||e!==null&&e===Yt}function zM(n,e){Fu=kd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function BM(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,T_(n,t)}}var zd={readContext:pr,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},Ib={readContext:pr,useCallback:function(n,e){return Ur().memoizedState=[n,e===void 0?null:e],n},useContext:pr,useEffect:Wv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ed(4194308,4,LM.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ed(4194308,4,n,e)},useInsertionEffect:function(n,e){return ed(4,2,n,e)},useMemo:function(n,e){var t=Ur();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ur();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Lb.bind(null,Yt,n),[i.memoizedState,n]},useRef:function(n){var e=Ur();return n={current:n},e.memoizedState=n},useState:Gv,useDebugValue:$_,useDeferredValue:function(n){return Ur().memoizedState=n},useTransition:function(){var n=Gv(!1),e=n[0];return n=Db.bind(null,n[1]),Ur().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Yt,r=Ur();if(Bt){if(t===void 0)throw Error(fe(407));t=t()}else{if(t=e(),An===null)throw Error(fe(349));so&30||TM(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Wv(bM.bind(null,i,s,n),[n]),i.flags|=2048,gc(9,wM.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ur(),e=An.identifierPrefix;if(Bt){var t=hs,i=ds;t=(i&~(1<<32-br(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=pc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Pb++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ub={readContext:pr,useCallback:IM,useContext:pr,useEffect:Y_,useImperativeHandle:NM,useInsertionEffect:PM,useLayoutEffect:DM,useMemo:UM,useReducer:np,useRef:RM,useState:function(){return np(mc)},useDebugValue:$_,useDeferredValue:function(n){var e=mr();return FM(e,gn.memoizedState,n)},useTransition:function(){var n=np(mc)[0],e=mr().memoizedState;return[n,e]},useMutableSource:MM,useSyncExternalStore:EM,useId:OM,unstable_isNewReconciler:!1},Fb={readContext:pr,useCallback:IM,useContext:pr,useEffect:Y_,useImperativeHandle:NM,useInsertionEffect:PM,useLayoutEffect:DM,useMemo:UM,useReducer:ip,useRef:RM,useState:function(){return ip(mc)},useDebugValue:$_,useDeferredValue:function(n){var e=mr();return gn===null?e.memoizedState=n:FM(e,gn.memoizedState,n)},useTransition:function(){var n=ip(mc)[0],e=mr().memoizedState;return[n,e]},useMutableSource:MM,useSyncExternalStore:EM,useId:OM,unstable_isNewReconciler:!1};function Sr(n,e){if(n&&n.defaultProps){e=$t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Dm(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:$t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var xh={isMounted:function(n){return(n=n._reactInternals)?_o(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ui(),r=la(n),s=_s(i,r);s.payload=e,t!=null&&(s.callback=t),e=aa(n,s,r),e!==null&&(Ar(e,n,r,i),Qf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ui(),r=la(n),s=_s(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=aa(n,s,r),e!==null&&(Ar(e,n,r,i),Qf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ui(),i=la(n),r=_s(t,i);r.tag=2,e!=null&&(r.callback=e),e=aa(n,r,i),e!==null&&(Ar(e,n,i,t),Qf(e,n,i))}};function Xv(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!lc(t,i)||!lc(r,s):!0}function VM(n,e,t){var i=!1,r=pa,s=e.contextType;return typeof s=="object"&&s!==null?s=pr(s):(r=xi(e)?io:Zn.current,i=e.contextTypes,s=(i=i!=null)?Cl(n,r):pa),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Yv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&xh.enqueueReplaceState(e,e.state,null)}function Lm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},z_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=pr(s):(s=xi(e)?io:Zn.current,r.context=Cl(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dm(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xh.enqueueReplaceState(r,r.state,null),Fd(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ll(n,e){try{var t="",i=e;do t+=cw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function rp(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Nm(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Ob=typeof WeakMap=="function"?WeakMap:Map;function HM(n,e,t){t=_s(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Vd||(Vd=!0,Gm=i),Nm(n,e)},t}function GM(n,e,t){t=_s(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Nm(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Nm(n,e),typeof i!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function $v(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Ob;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Zb.bind(null,n,e,t),e.then(n,n))}function qv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function jv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=_s(-1,1),e.tag=2,aa(t,e,1))),t.lanes|=1),n)}var kb=Cs.ReactCurrentOwner,_i=!1;function si(n,e,t,i){e.child=n===null?vM(e,null,t,i):Pl(e,n.child,t,i)}function Kv(n,e,t,i,r){t=t.render;var s=e.ref;return ml(e,r),i=W_(n,e,t,i,s,r),t=X_(),n!==null&&!_i?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ts(n,e,r)):(Bt&&t&&L_(e),e.flags|=1,si(n,e,i,r),e.child)}function Zv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!t0(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,WM(n,e,s,i,r)):(n=rd(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:lc,t(a,i)&&n.ref===e.ref)return Ts(n,e,r)}return e.flags|=1,n=ua(s,i),n.ref=e.ref,n.return=e,e.child=n}function WM(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(lc(s,i)&&n.ref===e.ref)if(_i=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(_i=!0);else return e.lanes=n.lanes,Ts(n,e,r)}return Im(n,e,t,i,r)}function XM(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(ol,Ii),Ii|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ut(ol,Ii),Ii|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ut(ol,Ii),Ii|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ut(ol,Ii),Ii|=i;return si(n,e,r,t),e.child}function YM(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Im(n,e,t,i,r){var s=xi(t)?io:Zn.current;return s=Cl(e,s),ml(e,r),t=W_(n,e,t,i,s,r),i=X_(),n!==null&&!_i?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ts(n,e,r)):(Bt&&i&&L_(e),e.flags|=1,si(n,e,t,r),e.child)}function Qv(n,e,t,i,r){if(xi(t)){var s=!0;Dd(e)}else s=!1;if(ml(e,r),e.stateNode===null)td(n,e),VM(e,t,i),Lm(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=pr(u):(u=xi(t)?io:Zn.current,u=Cl(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Yv(e,a,i,u),Gs=!1;var f=e.memoizedState;a.state=f,Fd(e,i,a,r),l=e.memoizedState,o!==i||f!==l||vi.current||Gs?(typeof c=="function"&&(Dm(e,t,c,i),l=e.memoizedState),(o=Gs||Xv(e,t,o,i,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,yM(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:Sr(e.type,o),a.props=u,d=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=pr(l):(l=xi(t)?io:Zn.current,l=Cl(e,l));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Yv(e,a,i,l),Gs=!1,f=e.memoizedState,a.state=f,Fd(e,i,a,r);var m=e.memoizedState;o!==d||f!==m||vi.current||Gs?(typeof h=="function"&&(Dm(e,t,h,i),m=e.memoizedState),(u=Gs||Xv(e,t,u,i,f,m,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Um(n,e,t,i,s,r)}function Um(n,e,t,i,r,s){YM(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ov(e,t,!1),Ts(n,e,s);i=e.stateNode,kb.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Pl(e,n.child,null,s),e.child=Pl(e,null,o,s)):si(n,e,o,s),e.memoizedState=i.state,r&&Ov(e,t,!0),e.child}function $M(n){var e=n.stateNode;e.pendingContext?Fv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Fv(n,e.context,!1),B_(n,e.containerInfo)}function Jv(n,e,t,i,r){return Rl(),I_(r),e.flags|=256,si(n,e,t,i),e.child}var Fm={dehydrated:null,treeContext:null,retryLane:0};function Om(n){return{baseLanes:n,cachePool:null,transitions:null}}function qM(n,e,t){var i=e.pendingProps,r=Gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ut(Gt,r&1),n===null)return Rm(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Mh(a,i,0,null),n=ja(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Om(t),e.memoizedState=Fm,n):q_(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return zb(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ua(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ua(o,s):(s=ja(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Om(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Fm,i}return s=n.child,n=s.sibling,i=ua(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function q_(n,e){return e=Mh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function tf(n,e,t,i){return i!==null&&I_(i),Pl(e,n.child,null,t),n=q_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function zb(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=rp(Error(fe(422))),tf(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mh({mode:"visible",children:i.children},r,0,null),s=ja(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Pl(e,n.child,null,a),e.child.memoizedState=Om(a),e.memoizedState=Fm,s);if(!(e.mode&1))return tf(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(fe(419)),i=rp(s,i,void 0),tf(n,e,a,i)}if(o=(a&n.childLanes)!==0,_i||o){if(i=An,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Es(n,r),Ar(i,n,r,-1))}return e0(),i=rp(Error(fe(421))),tf(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Qb.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Bi=sa(r.nextSibling),Gi=e,Bt=!0,Er=null,n!==null&&(nr[ir++]=ds,nr[ir++]=hs,nr[ir++]=ro,ds=n.id,hs=n.overflow,ro=e),e=q_(e,i.children),e.flags|=4096,e)}function ex(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pm(n.return,e,t)}function sp(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function jM(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(si(n,e,i.children,t),i=Gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ex(n,t,e);else if(n.tag===19)ex(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ut(Gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Od(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),sp(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Od(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}sp(e,!0,t,null,s);break;case"together":sp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function td(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ts(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ao|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(fe(153));if(e.child!==null){for(n=e.child,t=ua(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ua(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Bb(n,e,t){switch(e.tag){case 3:$M(e),Rl();break;case 5:SM(e);break;case 1:xi(e.type)&&Dd(e);break;case 4:B_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ut(Id,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ut(Gt,Gt.current&1),e.flags|=128,null):t&e.child.childLanes?qM(n,e,t):(Ut(Gt,Gt.current&1),n=Ts(n,e,t),n!==null?n.sibling:null);Ut(Gt,Gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return jM(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ut(Gt,Gt.current),i)break;return null;case 22:case 23:return e.lanes=0,XM(n,e,t)}return Ts(n,e,t)}var KM,km,ZM,QM;KM=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};km=function(){};ZM=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Va(Yr.current);var s=null;switch(t){case"input":r=am(n,r),i=am(n,i),s=[];break;case"select":r=$t({},r,{value:void 0}),i=$t({},i,{value:void 0}),s=[];break;case"textarea":r=um(n,r),i=um(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Rd)}fm(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(tc.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(tc.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&kt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};QM=function(n,e,t,i){t!==i&&(e.flags|=4)};function iu(n,e){if(!Bt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Bn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Vb(n,e,t){var i=e.pendingProps;switch(N_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(e),null;case 1:return xi(e.type)&&Pd(),Bn(e),null;case 3:return i=e.stateNode,Dl(),zt(vi),zt(Zn),H_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Jc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Er!==null&&(Ym(Er),Er=null))),km(n,e),Bn(e),null;case 5:V_(e);var r=Va(hc.current);if(t=e.type,n!==null&&e.stateNode!=null)ZM(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return Bn(e),null}if(n=Va(Yr.current),Jc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[zr]=e,i[fc]=s,n=(e.mode&1)!==0,t){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(r=0;r<Su.length;r++)kt(Su[r],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":uv(i,s),kt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},kt("invalid",i);break;case"textarea":fv(i,s),kt("invalid",i)}fm(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Qc(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Qc(i.textContent,o,n),r=["children",""+o]):tc.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&kt("scroll",i)}switch(t){case"input":Wc(i),cv(i,s,!0);break;case"textarea":Wc(i),dv(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rd)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=bS(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[zr]=e,n[fc]=i,KM(n,e,!1,!1),e.stateNode=n;e:{switch(a=dm(t,i),t){case"dialog":kt("cancel",n),kt("close",n),r=i;break;case"iframe":case"object":case"embed":kt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Su.length;r++)kt(Su[r],n);r=i;break;case"source":kt("error",n),r=i;break;case"img":case"image":case"link":kt("error",n),kt("load",n),r=i;break;case"details":kt("toggle",n),r=i;break;case"input":uv(n,i),r=am(n,i),kt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=$t({},i,{value:void 0}),kt("invalid",n);break;case"textarea":fv(n,i),r=um(n,i),kt("invalid",n);break;default:r=i}fm(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?RS(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&AS(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&nc(n,l):typeof l=="number"&&nc(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tc.hasOwnProperty(s)?l!=null&&s==="onScroll"&&kt("scroll",n):l!=null&&v_(n,s,l,a))}switch(t){case"input":Wc(n),cv(n,i,!1);break;case"textarea":Wc(n),dv(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ha(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?fl(n,!!i.multiple,s,!1):i.defaultValue!=null&&fl(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Rd)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bn(e),null;case 6:if(n&&e.stateNode!=null)QM(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(t=Va(hc.current),Va(Yr.current),Jc(e)){if(i=e.stateNode,t=e.memoizedProps,i[zr]=e,(s=i.nodeValue!==t)&&(n=Gi,n!==null))switch(n.tag){case 3:Qc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[zr]=e,e.stateNode=i}return Bn(e),null;case 13:if(zt(Gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Bi!==null&&e.mode&1&&!(e.flags&128))gM(),Rl(),e.flags|=98560,s=!1;else if(s=Jc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[zr]=e}else Rl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bn(e),s=!1}else Er!==null&&(Ym(Er),Er=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Gt.current&1?vn===0&&(vn=3):e0())),e.updateQueue!==null&&(e.flags|=4),Bn(e),null);case 4:return Dl(),km(n,e),n===null&&uc(e.stateNode.containerInfo),Bn(e),null;case 10:return O_(e.type._context),Bn(e),null;case 17:return xi(e.type)&&Pd(),Bn(e),null;case 19:if(zt(Gt),s=e.memoizedState,s===null)return Bn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)iu(s,!1);else{if(vn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Od(n),a!==null){for(e.flags|=128,iu(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ut(Gt,Gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&an()>Nl&&(e.flags|=128,i=!0,iu(s,!1),e.lanes=4194304)}else{if(!i)if(n=Od(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),iu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Bt)return Bn(e),null}else 2*an()-s.renderingStartTime>Nl&&t!==1073741824&&(e.flags|=128,i=!0,iu(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=an(),e.sibling=null,t=Gt.current,Ut(Gt,i?t&1|2:t&1),e):(Bn(e),null);case 22:case 23:return J_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ii&1073741824&&(Bn(e),e.subtreeFlags&6&&(e.flags|=8192)):Bn(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function Hb(n,e){switch(N_(e),e.tag){case 1:return xi(e.type)&&Pd(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Dl(),zt(vi),zt(Zn),H_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return V_(e),null;case 13:if(zt(Gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));Rl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return zt(Gt),null;case 4:return Dl(),null;case 10:return O_(e.type._context),null;case 22:case 23:return J_(),null;case 24:return null;default:return null}}var nf=!1,Xn=!1,Gb=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function al(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Zt(n,e,i)}else t.current=null}function zm(n,e,t){try{t()}catch(i){Zt(n,e,i)}}var tx=!1;function Wb(n,e){if(Mm=bd,n=iM(),D_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var h;d!==t||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===n)break t;if(f===t&&++u===r&&(o=a),f===s&&++c===i&&(l=a),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Em={focusedElem:n,selectionRange:t},bd=!1,Ce=e;Ce!==null;)if(e=Ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ce=n;else for(;Ce!==null;){e=Ce;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Sr(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(x){Zt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}return m=tx,tx=!1,m}function Ou(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&zm(e,t,s)}r=r.next}while(r!==i)}}function yh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Bm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function JM(n){var e=n.alternate;e!==null&&(n.alternate=null,JM(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[zr],delete e[fc],delete e[bm],delete e[bb],delete e[Ab])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function e1(n){return n.tag===5||n.tag===3||n.tag===4}function nx(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||e1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Rd));else if(i!==4&&(n=n.child,n!==null))for(Vm(n,e,t),n=n.sibling;n!==null;)Vm(n,e,t),n=n.sibling}function Hm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Hm(n,e,t),n=n.sibling;n!==null;)Hm(n,e,t),n=n.sibling}var Rn=null,Mr=!1;function Ls(n,e,t){for(t=t.child;t!==null;)t1(n,e,t),t=t.sibling}function t1(n,e,t){if(Xr&&typeof Xr.onCommitFiberUnmount=="function")try{Xr.onCommitFiberUnmount(dh,t)}catch{}switch(t.tag){case 5:Xn||al(t,e);case 6:var i=Rn,r=Mr;Rn=null,Ls(n,e,t),Rn=i,Mr=r,Rn!==null&&(Mr?(n=Rn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Rn.removeChild(t.stateNode));break;case 18:Rn!==null&&(Mr?(n=Rn,t=t.stateNode,n.nodeType===8?Qh(n.parentNode,t):n.nodeType===1&&Qh(n,t),ac(n)):Qh(Rn,t.stateNode));break;case 4:i=Rn,r=Mr,Rn=t.stateNode.containerInfo,Mr=!0,Ls(n,e,t),Rn=i,Mr=r;break;case 0:case 11:case 14:case 15:if(!Xn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&zm(t,e,a),r=r.next}while(r!==i)}Ls(n,e,t);break;case 1:if(!Xn&&(al(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Zt(t,e,o)}Ls(n,e,t);break;case 21:Ls(n,e,t);break;case 22:t.mode&1?(Xn=(i=Xn)||t.memoizedState!==null,Ls(n,e,t),Xn=i):Ls(n,e,t);break;default:Ls(n,e,t)}}function ix(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Gb),e.forEach(function(i){var r=Jb.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function gr(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Rn=o.stateNode,Mr=!1;break e;case 3:Rn=o.stateNode.containerInfo,Mr=!0;break e;case 4:Rn=o.stateNode.containerInfo,Mr=!0;break e}o=o.return}if(Rn===null)throw Error(fe(160));t1(s,a,r),Rn=null,Mr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Zt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n1(e,n),e=e.sibling}function n1(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(gr(e,n),Lr(n),i&4){try{Ou(3,n,n.return),yh(3,n)}catch(_){Zt(n,n.return,_)}try{Ou(5,n,n.return)}catch(_){Zt(n,n.return,_)}}break;case 1:gr(e,n),Lr(n),i&512&&t!==null&&al(t,t.return);break;case 5:if(gr(e,n),Lr(n),i&512&&t!==null&&al(t,t.return),n.flags&32){var r=n.stateNode;try{nc(r,"")}catch(_){Zt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&TS(r,s),dm(o,a);var u=dm(o,s);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?RS(r,d):c==="dangerouslySetInnerHTML"?AS(r,d):c==="children"?nc(r,d):v_(r,c,d,u)}switch(o){case"input":om(r,s);break;case"textarea":wS(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?fl(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?fl(r,!!s.multiple,s.defaultValue,!0):fl(r,!!s.multiple,s.multiple?[]:"",!1))}r[fc]=s}catch(_){Zt(n,n.return,_)}}break;case 6:if(gr(e,n),Lr(n),i&4){if(n.stateNode===null)throw Error(fe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Zt(n,n.return,_)}}break;case 3:if(gr(e,n),Lr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ac(e.containerInfo)}catch(_){Zt(n,n.return,_)}break;case 4:gr(e,n),Lr(n);break;case 13:gr(e,n),Lr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Z_=an())),i&4&&ix(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Xn=(u=Xn)||c,gr(e,n),Xn=u):gr(e,n),Lr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ce=n,c=n.child;c!==null;){for(d=Ce=c;Ce!==null;){switch(f=Ce,h=f.child,f.tag){case 0:case 11:case 14:case 15:Ou(4,f,f.return);break;case 1:al(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){Zt(i,t,_)}}break;case 5:al(f,f.return);break;case 22:if(f.memoizedState!==null){sx(d);continue}}h!==null?(h.return=f,Ce=h):sx(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=CS("display",a))}catch(_){Zt(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Zt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gr(e,n),Lr(n),i&4&&ix(n);break;case 21:break;default:gr(e,n),Lr(n)}}function Lr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(e1(t)){var i=t;break e}t=t.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(nc(r,""),i.flags&=-33);var s=nx(n);Hm(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=nx(n);Vm(n,o,a);break;default:throw Error(fe(161))}}catch(l){Zt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Xb(n,e,t){Ce=n,i1(n)}function i1(n,e,t){for(var i=(n.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||nf;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Xn;o=nf;var u=Xn;if(nf=a,(Xn=l)&&!u)for(Ce=r;Ce!==null;)a=Ce,l=a.child,a.tag===22&&a.memoizedState!==null?ax(r):l!==null?(l.return=a,Ce=l):ax(r);for(;s!==null;)Ce=s,i1(s),s=s.sibling;Ce=r,nf=o,Xn=u}rx(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):rx(n)}}function rx(n){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xn||yh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Sr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hv(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Hv(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ac(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}Xn||e.flags&512&&Bm(e)}catch(f){Zt(e,e.return,f)}}if(e===n){Ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function sx(n){for(;Ce!==null;){var e=Ce;if(e===n){Ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function ax(n){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{yh(4,e)}catch(l){Zt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Zt(e,r,l)}}var s=e.return;try{Bm(e)}catch(l){Zt(e,s,l)}break;case 5:var a=e.return;try{Bm(e)}catch(l){Zt(e,a,l)}}}catch(l){Zt(e,e.return,l)}if(e===n){Ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ce=o;break}Ce=e.return}}var Yb=Math.ceil,Bd=Cs.ReactCurrentDispatcher,j_=Cs.ReactCurrentOwner,dr=Cs.ReactCurrentBatchConfig,_t=0,An=null,hn=null,Nn=0,Ii=0,ol=Sa(0),vn=0,_c=null,ao=0,Sh=0,K_=0,ku=null,mi=null,Z_=0,Nl=1/0,ss=null,Vd=!1,Gm=null,oa=null,rf=!1,js=null,Hd=0,zu=0,Wm=null,nd=-1,id=0;function ui(){return _t&6?an():nd!==-1?nd:nd=an()}function la(n){return n.mode&1?_t&2&&Nn!==0?Nn&-Nn:Rb.transition!==null?(id===0&&(id=VS()),id):(n=Et,n!==0||(n=window.event,n=n===void 0?16:qS(n.type)),n):1}function Ar(n,e,t,i){if(50<zu)throw zu=0,Wm=null,Error(fe(185));Nc(n,t,i),(!(_t&2)||n!==An)&&(n===An&&(!(_t&2)&&(Sh|=t),vn===4&&Ys(n,Nn)),yi(n,i),t===1&&_t===0&&!(e.mode&1)&&(Nl=an()+500,_h&&Ma()))}function yi(n,e){var t=n.callbackNode;Rw(n,e);var i=wd(n,n===An?Nn:0);if(i===0)t!==null&&mv(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&mv(t),e===1)n.tag===0?Cb(ox.bind(null,n)):hM(ox.bind(null,n)),Tb(function(){!(_t&6)&&Ma()}),t=null;else{switch(HS(i)){case 1:t=E_;break;case 4:t=zS;break;case 16:t=Td;break;case 536870912:t=BS;break;default:t=Td}t=f1(t,r1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function r1(n,e){if(nd=-1,id=0,_t&6)throw Error(fe(327));var t=n.callbackNode;if(gl()&&n.callbackNode!==t)return null;var i=wd(n,n===An?Nn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Gd(n,i);else{e=i;var r=_t;_t|=2;var s=a1();(An!==n||Nn!==e)&&(ss=null,Nl=an()+500,qa(n,e));do try{jb();break}catch(o){s1(n,o)}while(!0);F_(),Bd.current=s,_t=r,hn!==null?e=0:(An=null,Nn=0,e=vn)}if(e!==0){if(e===2&&(r=_m(n),r!==0&&(i=r,e=Xm(n,r))),e===1)throw t=_c,qa(n,0),Ys(n,i),yi(n,an()),t;if(e===6)Ys(n,i);else{if(r=n.current.alternate,!(i&30)&&!$b(r)&&(e=Gd(n,i),e===2&&(s=_m(n),s!==0&&(i=s,e=Xm(n,s))),e===1))throw t=_c,qa(n,0),Ys(n,i),yi(n,an()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Da(n,mi,ss);break;case 3:if(Ys(n,i),(i&130023424)===i&&(e=Z_+500-an(),10<e)){if(wd(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ui(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=wm(Da.bind(null,n,mi,ss),e);break}Da(n,mi,ss);break;case 4:if(Ys(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-br(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=an()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yb(i/1960))-i,10<i){n.timeoutHandle=wm(Da.bind(null,n,mi,ss),i);break}Da(n,mi,ss);break;case 5:Da(n,mi,ss);break;default:throw Error(fe(329))}}}return yi(n,an()),n.callbackNode===t?r1.bind(null,n):null}function Xm(n,e){var t=ku;return n.current.memoizedState.isDehydrated&&(qa(n,e).flags|=256),n=Gd(n,e),n!==2&&(e=mi,mi=t,e!==null&&Ym(e)),n}function Ym(n){mi===null?mi=n:mi.push.apply(mi,n)}function $b(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Rr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ys(n,e){for(e&=~K_,e&=~Sh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-br(e),i=1<<t;n[t]=-1,e&=~i}}function ox(n){if(_t&6)throw Error(fe(327));gl();var e=wd(n,0);if(!(e&1))return yi(n,an()),null;var t=Gd(n,e);if(n.tag!==0&&t===2){var i=_m(n);i!==0&&(e=i,t=Xm(n,i))}if(t===1)throw t=_c,qa(n,0),Ys(n,e),yi(n,an()),t;if(t===6)throw Error(fe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Da(n,mi,ss),yi(n,an()),null}function Q_(n,e){var t=_t;_t|=1;try{return n(e)}finally{_t=t,_t===0&&(Nl=an()+500,_h&&Ma())}}function oo(n){js!==null&&js.tag===0&&!(_t&6)&&gl();var e=_t;_t|=1;var t=dr.transition,i=Et;try{if(dr.transition=null,Et=1,n)return n()}finally{Et=i,dr.transition=t,_t=e,!(_t&6)&&Ma()}}function J_(){Ii=ol.current,zt(ol)}function qa(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Eb(t)),hn!==null)for(t=hn.return;t!==null;){var i=t;switch(N_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pd();break;case 3:Dl(),zt(vi),zt(Zn),H_();break;case 5:V_(i);break;case 4:Dl();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:O_(i.type._context);break;case 22:case 23:J_()}t=t.return}if(An=n,hn=n=ua(n.current,null),Nn=Ii=e,vn=0,_c=null,K_=Sh=ao=0,mi=ku=null,Ba!==null){for(e=0;e<Ba.length;e++)if(t=Ba[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Ba=null}return n}function s1(n,e){do{var t=hn;try{if(F_(),Jf.current=zd,kd){for(var i=Yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kd=!1}if(so=0,bn=gn=Yt=null,Fu=!1,pc=0,j_.current=null,t===null||t.return===null){vn=1,_c=e,hn=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Nn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=qv(a);if(h!==null){h.flags&=-257,jv(h,a,o,s,e),h.mode&1&&$v(s,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){$v(s,u,e),e0();break e}l=Error(fe(426))}}else if(Bt&&o.mode&1){var g=qv(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),jv(g,a,o,s,e),I_(Ll(l,o));break e}}s=l=Ll(l,o),vn!==4&&(vn=2),ku===null?ku=[s]:ku.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=HM(s,l,e);Vv(s,p);break e;case 1:o=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(oa===null||!oa.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=GM(s,o,e);Vv(s,x);break e}}s=s.return}while(s!==null)}l1(t)}catch(E){e=E,hn===t&&t!==null&&(hn=t=t.return);continue}break}while(!0)}function a1(){var n=Bd.current;return Bd.current=zd,n===null?zd:n}function e0(){(vn===0||vn===3||vn===2)&&(vn=4),An===null||!(ao&268435455)&&!(Sh&268435455)||Ys(An,Nn)}function Gd(n,e){var t=_t;_t|=2;var i=a1();(An!==n||Nn!==e)&&(ss=null,qa(n,e));do try{qb();break}catch(r){s1(n,r)}while(!0);if(F_(),_t=t,Bd.current=i,hn!==null)throw Error(fe(261));return An=null,Nn=0,vn}function qb(){for(;hn!==null;)o1(hn)}function jb(){for(;hn!==null&&!yw();)o1(hn)}function o1(n){var e=c1(n.alternate,n,Ii);n.memoizedProps=n.pendingProps,e===null?l1(n):hn=e,j_.current=null}function l1(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Hb(t,e),t!==null){t.flags&=32767,hn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,hn=null;return}}else if(t=Vb(t,e,Ii),t!==null){hn=t;return}if(e=e.sibling,e!==null){hn=e;return}hn=e=n}while(e!==null);vn===0&&(vn=5)}function Da(n,e,t){var i=Et,r=dr.transition;try{dr.transition=null,Et=1,Kb(n,e,t,i)}finally{dr.transition=r,Et=i}return null}function Kb(n,e,t,i){do gl();while(js!==null);if(_t&6)throw Error(fe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(fe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Pw(n,s),n===An&&(hn=An=null,Nn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||rf||(rf=!0,f1(Td,function(){return gl(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=dr.transition,dr.transition=null;var a=Et;Et=1;var o=_t;_t|=4,j_.current=null,Wb(n,t),n1(t,n),gb(Em),bd=!!Mm,Em=Mm=null,n.current=t,Xb(t),Sw(),_t=o,Et=a,dr.transition=s}else n.current=t;if(rf&&(rf=!1,js=n,Hd=r),s=n.pendingLanes,s===0&&(oa=null),Tw(t.stateNode),yi(n,an()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vd)throw Vd=!1,n=Gm,Gm=null,n;return Hd&1&&n.tag!==0&&gl(),s=n.pendingLanes,s&1?n===Wm?zu++:(zu=0,Wm=n):zu=0,Ma(),null}function gl(){if(js!==null){var n=HS(Hd),e=dr.transition,t=Et;try{if(dr.transition=null,Et=16>n?16:n,js===null)var i=!1;else{if(n=js,js=null,Hd=0,_t&6)throw Error(fe(331));var r=_t;for(_t|=4,Ce=n.current;Ce!==null;){var s=Ce,a=s.child;if(Ce.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ce=u;Ce!==null;){var c=Ce;switch(c.tag){case 0:case 11:case 15:Ou(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ce=d;else for(;Ce!==null;){c=Ce;var f=c.sibling,h=c.return;if(JM(c),c===u){Ce=null;break}if(f!==null){f.return=h,Ce=f;break}Ce=h}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Ce=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ce=a;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ou(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ce=p;break e}Ce=s.return}}var v=n.current;for(Ce=v;Ce!==null;){a=Ce;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Ce=S;else e:for(a=v;Ce!==null;){if(o=Ce,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:yh(9,o)}}catch(E){Zt(o,o.return,E)}if(o===a){Ce=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,Ce=x;break e}Ce=o.return}}if(_t=r,Ma(),Xr&&typeof Xr.onPostCommitFiberRoot=="function")try{Xr.onPostCommitFiberRoot(dh,n)}catch{}i=!0}return i}finally{Et=t,dr.transition=e}}return!1}function lx(n,e,t){e=Ll(t,e),e=HM(n,e,1),n=aa(n,e,1),e=ui(),n!==null&&(Nc(n,1,e),yi(n,e))}function Zt(n,e,t){if(n.tag===3)lx(n,n,t);else for(;e!==null;){if(e.tag===3){lx(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(oa===null||!oa.has(i))){n=Ll(t,n),n=GM(e,n,1),e=aa(e,n,1),n=ui(),e!==null&&(Nc(e,1,n),yi(e,n));break}}e=e.return}}function Zb(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ui(),n.pingedLanes|=n.suspendedLanes&t,An===n&&(Nn&t)===t&&(vn===4||vn===3&&(Nn&130023424)===Nn&&500>an()-Z_?qa(n,0):K_|=t),yi(n,e)}function u1(n,e){e===0&&(n.mode&1?(e=$c,$c<<=1,!($c&130023424)&&($c=4194304)):e=1);var t=ui();n=Es(n,e),n!==null&&(Nc(n,e,t),yi(n,t))}function Qb(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),u1(n,t)}function Jb(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),u1(n,t)}var c1;c1=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vi.current)_i=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return _i=!1,Bb(n,e,t);_i=!!(n.flags&131072)}else _i=!1,Bt&&e.flags&1048576&&pM(e,Nd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;td(n,e),n=e.pendingProps;var r=Cl(e,Zn.current);ml(e,t),r=W_(null,e,i,n,r,t);var s=X_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xi(i)?(s=!0,Dd(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,z_(e),r.updater=xh,e.stateNode=r,r._reactInternals=e,Lm(e,i,n,t),e=Um(null,e,i,!0,s,t)):(e.tag=0,Bt&&s&&L_(e),si(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(td(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tA(i),n=Sr(i,n),r){case 0:e=Im(null,e,i,n,t);break e;case 1:e=Qv(null,e,i,n,t);break e;case 11:e=Kv(null,e,i,n,t);break e;case 14:e=Zv(null,e,i,Sr(i.type,n),t);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sr(i,r),Im(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sr(i,r),Qv(n,e,i,r,t);case 3:e:{if($M(e),n===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yM(n,e),Fd(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ll(Error(fe(423)),e),e=Jv(n,e,i,t,r);break e}else if(i!==r){r=Ll(Error(fe(424)),e),e=Jv(n,e,i,t,r);break e}else for(Bi=sa(e.stateNode.containerInfo.firstChild),Gi=e,Bt=!0,Er=null,t=vM(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Rl(),i===r){e=Ts(n,e,t);break e}si(n,e,i,t)}e=e.child}return e;case 5:return SM(e),n===null&&Rm(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Tm(i,r)?a=null:s!==null&&Tm(i,s)&&(e.flags|=32),YM(n,e),si(n,e,a,t),e.child;case 6:return n===null&&Rm(e),null;case 13:return qM(n,e,t);case 4:return B_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Pl(e,null,i,t):si(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sr(i,r),Kv(n,e,i,r,t);case 7:return si(n,e,e.pendingProps,t),e.child;case 8:return si(n,e,e.pendingProps.children,t),e.child;case 12:return si(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Ut(Id,i._currentValue),i._currentValue=a,s!==null)if(Rr(s.value,a)){if(s.children===r.children&&!vi.current){e=Ts(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_s(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pm(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(fe(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Pm(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}si(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ml(e,t),r=pr(r),i=i(r),e.flags|=1,si(n,e,i,t),e.child;case 14:return i=e.type,r=Sr(i,e.pendingProps),r=Sr(i.type,r),Zv(n,e,i,r,t);case 15:return WM(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sr(i,r),td(n,e),e.tag=1,xi(i)?(n=!0,Dd(e)):n=!1,ml(e,t),VM(e,i,r),Lm(e,i,r,t),Um(null,e,i,!0,n,t);case 19:return jM(n,e,t);case 22:return XM(n,e,t)}throw Error(fe(156,e.tag))};function f1(n,e){return kS(n,e)}function eA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ur(n,e,t,i){return new eA(n,e,t,i)}function t0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tA(n){if(typeof n=="function")return t0(n)?1:0;if(n!=null){if(n=n.$$typeof,n===y_)return 11;if(n===S_)return 14}return 2}function ua(n,e){var t=n.alternate;return t===null?(t=ur(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function rd(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")t0(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Zo:return ja(t.children,r,s,e);case x_:a=8,r|=8;break;case nm:return n=ur(12,t,e,r|2),n.elementType=nm,n.lanes=s,n;case im:return n=ur(13,t,e,r),n.elementType=im,n.lanes=s,n;case rm:return n=ur(19,t,e,r),n.elementType=rm,n.lanes=s,n;case SS:return Mh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case xS:a=10;break e;case yS:a=9;break e;case y_:a=11;break e;case S_:a=14;break e;case Hs:a=16,i=null;break e}throw Error(fe(130,n==null?n:typeof n,""))}return e=ur(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ja(n,e,t,i){return n=ur(7,n,i,e),n.lanes=t,n}function Mh(n,e,t,i){return n=ur(22,n,i,e),n.elementType=SS,n.lanes=t,n.stateNode={isHidden:!1},n}function ap(n,e,t){return n=ur(6,n,null,e),n.lanes=t,n}function op(n,e,t){return e=ur(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function nA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vh(0),this.expirationTimes=Vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function n0(n,e,t,i,r,s,a,o,l){return n=new nA(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ur(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},z_(s),n}function iA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ko,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function d1(n){if(!n)return pa;n=n._reactInternals;e:{if(_o(n)!==n||n.tag!==1)throw Error(fe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(n.tag===1){var t=n.type;if(xi(t))return dM(n,t,e)}return e}function h1(n,e,t,i,r,s,a,o,l){return n=n0(t,i,!0,n,r,s,a,o,l),n.context=d1(null),t=n.current,i=ui(),r=la(t),s=_s(i,r),s.callback=e??null,aa(t,s,r),n.current.lanes=r,Nc(n,r,i),yi(n,i),n}function Eh(n,e,t,i){var r=e.current,s=ui(),a=la(r);return t=d1(t),e.context===null?e.context=t:e.pendingContext=t,e=_s(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=aa(r,e,a),n!==null&&(Ar(n,r,a,s),Qf(n,r,a)),a}function Wd(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ux(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function i0(n,e){ux(n,e),(n=n.alternate)&&ux(n,e)}function rA(){return null}var p1=typeof reportError=="function"?reportError:function(n){console.error(n)};function r0(n){this._internalRoot=n}Th.prototype.render=r0.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(fe(409));Eh(n,e,null,null)};Th.prototype.unmount=r0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;oo(function(){Eh(null,n,null,null)}),e[Ms]=null}};function Th(n){this._internalRoot=n}Th.prototype.unstable_scheduleHydration=function(n){if(n){var e=XS();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Xs.length&&e!==0&&e<Xs[t].priority;t++);Xs.splice(t,0,n),t===0&&$S(n)}};function s0(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function cx(){}function sA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Wd(a);s.call(u)}}var a=h1(e,i,n,0,null,!1,!1,"",cx);return n._reactRootContainer=a,n[Ms]=a.current,uc(n.nodeType===8?n.parentNode:n),oo(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Wd(l);o.call(u)}}var l=n0(n,0,!1,null,null,!1,!1,"",cx);return n._reactRootContainer=l,n[Ms]=l.current,uc(n.nodeType===8?n.parentNode:n),oo(function(){Eh(e,l,t,i)}),l}function bh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Wd(a);o.call(l)}}Eh(e,a,n,r)}else a=sA(t,e,n,r,i);return Wd(a)}GS=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=yu(e.pendingLanes);t!==0&&(T_(e,t|1),yi(e,an()),!(_t&6)&&(Nl=an()+500,Ma()))}break;case 13:oo(function(){var i=Es(n,1);if(i!==null){var r=ui();Ar(i,n,1,r)}}),i0(n,1)}};w_=function(n){if(n.tag===13){var e=Es(n,134217728);if(e!==null){var t=ui();Ar(e,n,134217728,t)}i0(n,134217728)}};WS=function(n){if(n.tag===13){var e=la(n),t=Es(n,e);if(t!==null){var i=ui();Ar(t,n,e,i)}i0(n,e)}};XS=function(){return Et};YS=function(n,e){var t=Et;try{return Et=n,e()}finally{Et=t}};pm=function(n,e,t){switch(e){case"input":if(om(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=gh(i);if(!r)throw Error(fe(90));ES(i),om(i,r)}}}break;case"textarea":wS(n,t);break;case"select":e=t.value,e!=null&&fl(n,!!t.multiple,e,!1)}};LS=Q_;NS=oo;var aA={usingClientEntryPoint:!1,Events:[Uc,tl,gh,PS,DS,Q_]},ru={findFiberByHostInstance:za,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oA={bundleType:ru.bundleType,version:ru.version,rendererPackageName:ru.rendererPackageName,rendererConfig:ru.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cs.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=FS(n),n===null?null:n.stateNode},findFiberByHostInstance:ru.findFiberByHostInstance||rA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sf.isDisabled&&sf.supportsFiber)try{dh=sf.inject(oA),Xr=sf}catch{}}Ki.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aA;Ki.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!s0(e))throw Error(fe(200));return iA(n,e,null,t)};Ki.createRoot=function(n,e){if(!s0(n))throw Error(fe(299));var t=!1,i="",r=p1;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=n0(n,1,!1,null,null,t,!1,i,r),n[Ms]=e.current,uc(n.nodeType===8?n.parentNode:n),new r0(e)};Ki.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(fe(188)):(n=Object.keys(n).join(","),Error(fe(268,n)));return n=FS(e),n=n===null?null:n.stateNode,n};Ki.flushSync=function(n){return oo(n)};Ki.hydrate=function(n,e,t){if(!wh(e))throw Error(fe(200));return bh(null,n,e,!0,t)};Ki.hydrateRoot=function(n,e,t){if(!s0(n))throw Error(fe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=p1;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=h1(e,null,n,1,t??null,r,!1,s,a),n[Ms]=e.current,uc(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Th(e)};Ki.render=function(n,e,t){if(!wh(e))throw Error(fe(200));return bh(null,n,e,!1,t)};Ki.unmountComponentAtNode=function(n){if(!wh(n))throw Error(fe(40));return n._reactRootContainer?(oo(function(){bh(null,null,n,!1,function(){n._reactRootContainer=null,n[Ms]=null})}),!0):!1};Ki.unstable_batchedUpdates=Q_;Ki.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!wh(t))throw Error(fe(200));if(n==null||n._reactInternals===void 0)throw Error(fe(38));return bh(n,e,t,!1,i)};Ki.version="18.3.1-next-f1338f8080-20240426";function m1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m1)}catch(n){console.error(n)}}m1(),mS.exports=Ki;var lA=mS.exports,g1,fx=lA;g1=fx.createRoot,fx.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Jr=(n,e)=>{const t=bt.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...u},c)=>bt.createElement("svg",{ref:c,...uA,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${cA(n)}`,o].join(" "),...u},[...e.map(([d,f])=>bt.createElement(d,f)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=Jr("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=Jr("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=Jr("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=Jr("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=Jr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=Jr("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Jr("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=Jr("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=Jr("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=Jr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var dx="1.3.25";function x1(n,e,t){return Math.max(n,Math.min(e,t))}function gA(n,e,t){return(1-t)*n+t*e}function _A(n,e,t,i){return gA(n,e,1-Math.exp(-t*i))}function vA(n,e){return(n%e+e)%e}var xA=class{constructor(){Ie(this,"isRunning",!1);Ie(this,"value",0);Ie(this,"from",0);Ie(this,"to",0);Ie(this,"currentTime",0);Ie(this,"lerp");Ie(this,"duration");Ie(this,"easing");Ie(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=x1(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=_A(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function yA(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var SA=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Ie(this,"width",0);Ie(this,"height",0);Ie(this,"scrollHeight",0);Ie(this,"scrollWidth",0);Ie(this,"debouncedResize");Ie(this,"wrapperResizeObserver");Ie(this,"contentResizeObserver");Ie(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ie(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ie(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=yA(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},y1=class{constructor(){Ie(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const MA=100/6,Ns={passive:!1};function hx(n,e){return n===1?MA:n===2?e:1}var EA=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Ie(this,"touchStart",{x:0,y:0});Ie(this,"lastDelta",{x:0,y:0});Ie(this,"window",{width:0,height:0});Ie(this,"emitter",new y1);Ie(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Ie(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Ie(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Ie(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=hx(i,this.window.width),s=hx(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Ie(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ns),this.element.addEventListener("touchstart",this.onTouchStart,Ns),this.element.addEventListener("touchmove",this.onTouchMove,Ns),this.element.addEventListener("touchend",this.onTouchEnd,Ns)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ns),this.element.removeEventListener("touchstart",this.onTouchStart,Ns),this.element.removeEventListener("touchmove",this.onTouchMove,Ns),this.element.removeEventListener("touchend",this.onTouchEnd,Ns)}};const px=n=>Math.min(1,1.001-2**(-10*n));var TA=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:u=.1,infinite:c=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:p,overscroll:v=!0,autoRaf:S=!1,anchors:x=!1,autoToggle:E=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:y=T,stopInertiaOnNavigate:b=!1}={}){Ie(this,"_isScrolling",!1);Ie(this,"_isStopped",!1);Ie(this,"_isLocked",!1);Ie(this,"_preventNextNativeScrollEvent",!1);Ie(this,"_resetVelocityTimeout",null);Ie(this,"_rafId",null);Ie(this,"_isDraggingSelection",!1);Ie(this,"isTouching");Ie(this,"isIos");Ie(this,"time",0);Ie(this,"userData",{});Ie(this,"lastVelocity",0);Ie(this,"velocity",0);Ie(this,"direction",0);Ie(this,"options");Ie(this,"targetScroll");Ie(this,"animatedScroll");Ie(this,"animate",new xA);Ie(this,"emitter",new y1);Ie(this,"dimensions");Ie(this,"virtualScroll");Ie(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Ie(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ie(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Ie(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Ie(this,"onPointerDown",n=>{n.button===1&&this.reset()});Ie(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,c=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>{var _,g,p,v,S;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent"))||c==="vertical"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-vertical"))||c==="horizontal"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-horizontal"))||r&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||s&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=r&&this.options.syncTouch,h=r&&i.type==="touchend";h&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ie(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ie(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=dx,window.lenis||(window.lenis={}),window.lenis.version=dx,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof o=="number"&&typeof l!="function"?l=px:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:u,infinite:c,gestureOrientation:f,orientation:d,touchMultiplier:h,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:p,overscroll:v,autoRaf:S,anchors:x,autoToggle:E,allowNestedScroll:w,naiveDimensions:y,stopInertiaOnNavigate:b},this.dimensions=new SA(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new EA(t,{touchMultiplier:h,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],a=40,o=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:u,force:c=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!c)return;let f=n,h=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(m=f),m){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?x.left:x.top}const _=m.getBoundingClientRect(),g=getComputedStyle(m),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),v=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=h,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=x1(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof a=="number"&&typeof o!="function"?o=px:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,f,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,a,o,l,u,c,d,f,h,m;if(i-(r.time??0)>2e3){r.time=Date.now();const w=window.getComputedStyle(n);if(r.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),a=["auto","overlay","scroll"].includes(w.overflowY),u=["auto"].includes(w.overscrollBehaviorX),c=["auto"].includes(w.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;d=n.scrollWidth,f=n.scrollHeight,h=n.clientWidth,m=n.clientHeight,o=d>h,l=f>m,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=h,r.clientHeight=m,r.hasOverscrollBehaviorX=u,r.hasOverscrollBehaviorY=c}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,h=r.clientWidth,m=r.clientHeight,u=r.hasOverscrollBehaviorX,c=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let g,p,v,S,x,E;if(_==="horizontal")g=Math.round(n.scrollLeft),p=d-h,v=e,S=s,x=o,E=u;else if(_==="vertical")g=Math.round(n.scrollTop),p=f-m,v=t,S=a,x=l,E=c;else return!1;return!E&&(g>=p||g<=0)?!0:(v>0?g<p:g>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?vA(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const o0="185",wA=0,mx=1,bA=2,sd=1,AA=2,Mu=3,ma=0,Si=1,cs=2,$r=0,_l=1,ps=2,gx=3,_x=4,CA=5,Oa=100,RA=101,PA=102,DA=103,LA=104,NA=200,IA=201,UA=202,FA=203,qm=204,jm=205,OA=206,kA=207,zA=208,BA=209,VA=210,HA=211,GA=212,WA=213,XA=214,Km=0,Zm=1,Qm=2,Il=3,Jm=4,eg=5,tg=6,ng=7,S1=0,YA=1,$A=2,qr=0,M1=1,E1=2,T1=3,w1=4,b1=5,A1=6,C1=7,R1=300,lo=301,Ul=302,lp=303,up=304,Ah=306,ig=1e3,ms=1001,rg=1002,Pn=1003,qA=1004,af=1005,qn=1006,cp=1007,Ha=1008,or=1009,P1=1010,D1=1011,vc=1012,l0=1013,Kr=1014,Vr=1015,Wi=1016,u0=1017,c0=1018,xc=1020,L1=35902,N1=35899,I1=1021,U1=1022,wr=1023,ws=1026,Ga=1027,F1=1028,f0=1029,uo=1030,d0=1031,h0=1033,ad=33776,od=33777,ld=33778,ud=33779,sg=35840,ag=35841,og=35842,lg=35843,ug=36196,cg=37492,fg=37496,dg=37488,hg=37489,Xd=37490,pg=37491,mg=37808,gg=37809,_g=37810,vg=37811,xg=37812,yg=37813,Sg=37814,Mg=37815,Eg=37816,Tg=37817,wg=37818,bg=37819,Ag=37820,Cg=37821,Rg=36492,Pg=36494,Dg=36495,Lg=36283,Ng=36284,Yd=36285,Ig=36286,jA=3200,vx=0,KA=1,$s="",pi="srgb",$d="srgb-linear",qd="linear",St="srgb",To=7680,xx=519,ZA=512,QA=513,JA=514,p0=515,eC=516,tC=517,m0=518,nC=519,Ug=35044,yx="300 es",Hr=2e3,jd=2001;function iC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rC(){const n=yc("canvas");return n.style.display="block",n}const Sx={};function Kd(...n){const e="THREE."+n.shift();console.log(e,...n)}function O1(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=O1(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function pt(...n){n=O1(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vl(...n){const e=n.join(" ");e in Sx||(Sx[e]=!0,Xe(...n))}function sC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const aC={[Km]:Zm,[Qm]:tg,[Jm]:ng,[Il]:eg,[Zm]:Km,[tg]:Qm,[ng]:Jm,[eg]:Il};class vo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mx=1234567;const Bu=Math.PI/180,Sc=180/Math.PI;function vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function g0(n,e){return(n%e+e)%e}function oC(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function lC(n,e,t){return n!==e?(t-n)/(e-n):0}function Vu(n,e,t){return(1-t)*n+t*e}function uC(n,e,t,i){return Vu(n,e,1-Math.exp(-t*i))}function cC(n,e=1){return e-Math.abs(g0(n,e*2)-e)}function fC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hC(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pC(n,e){return n+Math.random()*(e-n)}function mC(n){return n*(.5-Math.random())}function gC(n){n!==void 0&&(Mx=n);let e=Mx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _C(n){return n*Bu}function vC(n){return n*Sc}function xC(n){return(n&n-1)===0&&n!==0}function yC(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function SC(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function MC(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),h=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*d,l*f,o*u);break;case"YZY":n.set(l*f,o*c,l*d,o*u);break;case"ZXZ":n.set(l*d,l*f,o*c,o*u);break;case"XZX":n.set(o*c,l*m,l*h,o*u);break;case"YXY":n.set(l*h,o*c,l*m,o*u);break;case"ZYZ":n.set(l*m,l*h,o*c,o*u);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Tr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fg={DEG2RAD:Bu,RAD2DEG:Sc,generateUUID:vs,clamp:ct,euclideanModulo:g0,mapLinear:oC,inverseLerp:lC,lerp:Vu,damp:uC,pingpong:cC,smoothstep:fC,smootherstep:dC,randInt:hC,randFloat:pC,randFloatSpread:mC,seededRandom:gC,degToRad:_C,radToDeg:vC,isPowerOfTwo:xC,ceilPowerOfTwo:yC,floorPowerOfTwo:SC,setQuaternionFromProperEuler:MC,normalize:Mt,denormalize:Tr},Z0=class Z0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Z0.prototype.isVector2=!0;let Ye=Z0;class ql{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[a+0],h=s[a+1],m=s[a+2],_=s[a+3];if(d!==_||l!==f||u!==h||c!==m){let g=l*f+u*h+c*m+d*_;g<0&&(f=-f,h=-h,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){const v=Math.acos(g),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,l=l*p+f*o,u=u*p+h*o,c=c*p+m*o,d=d*p+_*o}else{l=l*p+f*o,u=u*p+h*o,c=c*p+m*o,d=d*p+_*o;const v=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=v,u*=v,c*=v,d*=v}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],f=s[a+1],h=s[a+2],m=s[a+3];return e[t]=o*m+c*d+l*h-u*f,e[t+1]=l*m+c*f+u*d-o*h,e[t+2]=u*m+c*h+o*f-l*d,e[t+3]=c*m-o*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),f=l(i/2),h=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"YXZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"ZXY":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"ZYX":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"YZX":this._x=f*c*d+u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d-f*h*m;break;case"XZY":this._x=f*c*d-u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d+f*h*m;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+u)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-u)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Q0=class Q0{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ex.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ex.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fp.copy(this).projectOnVector(e),this.sub(fp)}reflect(e){return this.sub(fp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Q0.prototype.isVector3=!0;let G=Q0;const fp=new G,Ex=new ql,J0=class J0{constructor(e,t,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],m=i[8],_=r[0],g=r[3],p=r[6],v=r[1],S=r[4],x=r[7],E=r[2],w=r[5],T=r[8];return s[0]=a*_+o*v+l*E,s[3]=a*g+o*S+l*w,s[6]=a*p+o*x+l*T,s[1]=u*_+c*v+d*E,s[4]=u*g+c*S+d*w,s[7]=u*p+c*x+d*T,s[2]=f*_+h*v+m*E,s[5]=f*g+h*S+m*w,s[8]=f*p+h*x+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*a-o*u,f=o*l-c*s,h=u*s-a*l,m=t*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(i*l-u*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return vl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dp.makeScale(e,t)),this}rotate(e){return vl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dp.makeRotation(-e)),this}translate(e,t){return vl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};J0.prototype.isMatrix3=!0;let Je=J0;const dp=new Je,Tx=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wx=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EC(){const n={enabled:!0,workingColorSpace:$d,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(r.r=xs(r.r),r.g=xs(r.g),r.b=xs(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(r.r=xl(r.r),r.g=xl(r.g),r.b=xl(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$s?qd:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$d]:{primaries:e,whitePoint:i,transfer:qd,toXYZ:Tx,fromXYZ:wx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Tx,fromXYZ:wx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}const dt=EC();function xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wo;class TC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{wo===void 0&&(wo=yc("canvas")),wo.width=e.width,wo.height=e.height;const r=wo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=wo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xs(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xs(t[i]/255)*255):t[i]=xs(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wC=0;class _0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wC++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hp(r[a].image)):s.push(hp(r[a]))}else s=hp(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function hp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?TC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let bC=0;const pp=new G;class In extends vo{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,i=ms,r=ms,s=qn,a=Ha,o=wr,l=or,u=In.DEFAULT_ANISOTROPY,c=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=vs(),this.name="",this.source=new _0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pp).x}get height(){return this.source.getSize(pp).y}get depth(){return this.source.getSize(pp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ig:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case rg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ig:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case rg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=R1;In.DEFAULT_ANISOTROPY=1;const ev=class ev{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,x=(h+1)/2,E=(p+1)/2,w=(c+f)/4,T=(d+_)/4,y=(m+g)/4;return S>x&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=T/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=y/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ev.prototype.isVector4=!0;let Qt=ev;class AC extends vo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new In(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new _0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends AC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class k1 extends In{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CC extends In{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ch=class ch{constructor(e,t,i,r,s,a,o,l,u,c,d,f,h,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,d,f,h,m,_,g)}set(e,t,i,r,s,a,o,l,u,c,d,f,h,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ch().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/bo.setFromMatrixColumn(e,0).length(),s=1/bo.setFromMatrixColumn(e,1).length(),a=1/bo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*c,h=a*d,m=o*c,_=o*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=h+m*u,t[5]=f-_*u,t[9]=-o*l,t[2]=_-f*u,t[6]=m+h*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,m=u*c,_=u*d;t[0]=f+_*o,t[4]=m*o-h,t[8]=a*u,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=h*o-m,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,m=u*c,_=u*d;t[0]=f-_*o,t[4]=-a*d,t[8]=m+h*o,t[1]=h+m*o,t[5]=a*c,t[9]=_-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,h=a*d,m=o*c,_=o*d;t[0]=l*c,t[4]=m*u-h,t[8]=f*u+_,t[1]=l*d,t[5]=_*u+f,t[9]=h*u-m,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*u,m=o*l,_=o*u;t[0]=l*c,t[4]=_-f*d,t[8]=m*d+h,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=h*d+m,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,h=a*u,m=o*l,_=o*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+_,t[5]=a*c,t[9]=h*d-m,t[2]=m*d-h,t[6]=o*c,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RC,e,PC)}lookAt(e,t,i){const r=this.elements;return Di.subVectors(e,t),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Is.crossVectors(i,Di),Is.lengthSq()===0&&(Math.abs(i.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Is.crossVectors(i,Di)),Is.normalize(),of.crossVectors(Di,Is),r[0]=Is.x,r[4]=of.x,r[8]=Di.x,r[1]=Is.y,r[5]=of.y,r[9]=Di.y,r[2]=Is.z,r[6]=of.z,r[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],S=i[7],x=i[11],E=i[15],w=r[0],T=r[4],y=r[8],b=r[12],C=r[1],D=r[5],L=r[9],$=r[13],j=r[2],k=r[6],q=r[10],F=r[14],N=r[3],W=r[7],R=r[11],ee=r[15];return s[0]=a*w+o*C+l*j+u*N,s[4]=a*T+o*D+l*k+u*W,s[8]=a*y+o*L+l*q+u*R,s[12]=a*b+o*$+l*F+u*ee,s[1]=c*w+d*C+f*j+h*N,s[5]=c*T+d*D+f*k+h*W,s[9]=c*y+d*L+f*q+h*R,s[13]=c*b+d*$+f*F+h*ee,s[2]=m*w+_*C+g*j+p*N,s[6]=m*T+_*D+g*k+p*W,s[10]=m*y+_*L+g*q+p*R,s[14]=m*b+_*$+g*F+p*ee,s[3]=v*w+S*C+x*j+E*N,s[7]=v*T+S*D+x*k+E*W,s[11]=v*y+S*L+x*q+E*R,s[15]=v*b+S*$+x*F+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],m=e[3],_=e[7],g=e[11],p=e[15],v=l*h-u*f,S=o*h-u*d,x=o*f-l*d,E=a*h-u*c,w=a*f-l*c,T=a*d-o*c;return t*(_*v-g*S+p*x)-i*(m*v-g*E+p*w)+r*(m*S-_*E+p*T)-s*(m*x-_*w+g*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],c=e[10];return t*(a*c-o*u)-i*(s*c-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=t*o-i*a,S=t*l-r*a,x=t*u-s*a,E=i*l-r*o,w=i*u-s*o,T=r*u-s*l,y=c*_-d*m,b=c*g-f*m,C=c*p-h*m,D=d*g-f*_,L=d*p-h*_,$=f*p-h*g,j=v*$-S*L+x*D+E*C-w*b+T*y;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/j;return e[0]=(o*$-l*L+u*D)*k,e[1]=(r*L-i*$-s*D)*k,e[2]=(_*T-g*w+p*E)*k,e[3]=(f*w-d*T-h*E)*k,e[4]=(l*C-a*$-u*b)*k,e[5]=(t*$-r*C+s*b)*k,e[6]=(g*x-m*T-p*S)*k,e[7]=(c*T-f*x+h*S)*k,e[8]=(a*L-o*C+u*y)*k,e[9]=(i*C-t*L-s*y)*k,e[10]=(m*w-_*x+p*v)*k,e[11]=(d*x-c*w-h*v)*k,e[12]=(o*b-a*D-l*y)*k,e[13]=(t*D-i*b+r*y)*k,e[14]=(_*S-m*E-g*v)*k,e[15]=(c*E-d*S+f*v)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,d=o+o,f=s*u,h=s*c,m=s*d,_=a*c,g=a*d,p=o*d,v=l*u,S=l*c,x=l*d,E=i.x,w=i.y,T=i.z;return r[0]=(1-(_+p))*E,r[1]=(h+x)*E,r[2]=(m-S)*E,r[3]=0,r[4]=(h-x)*w,r[5]=(1-(f+p))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(m+S)*T,r[9]=(g-v)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=bo.set(r[0],r[1],r[2]).length();const o=bo.set(r[4],r[5],r[6]).length(),l=bo.set(r[8],r[9],r[10]).length();s<0&&(a=-a),_r.copy(this);const u=1/a,c=1/o,d=1/l;return _r.elements[0]*=u,_r.elements[1]*=u,_r.elements[2]*=u,_r.elements[4]*=c,_r.elements[5]*=c,_r.elements[6]*=c,_r.elements[8]*=d,_r.elements[9]*=d,_r.elements[10]*=d,t.setFromRotationMatrix(_r),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Hr,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===Hr)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===jd)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Hr,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===Hr)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===jd)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ch.prototype.isMatrix4=!0;let en=ch;const bo=new G,_r=new en,RC=new G(0,0,0),PC=new G(1,1,1),Is=new G,of=new G,Di=new G,bx=new en,Ax=new ql;class co{constructor(e=0,t=0,i=0,r=co.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ax.setFromEuler(this),this.setFromQuaternion(Ax,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}co.DEFAULT_ORDER="XYZ";class z1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DC=0;const Cx=new G,Ao=new ql,es=new en,lf=new G,su=new G,LC=new G,NC=new ql,Rx=new G(1,0,0),Px=new G(0,1,0),Dx=new G(0,0,1),Lx={type:"added"},IC={type:"removed"},Co={type:"childadded",child:null},mp={type:"childremoved",child:null};class jn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new G,t=new co,i=new ql,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new en},normalMatrix:{value:new Je}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(Rx,e)}rotateY(e){return this.rotateOnAxis(Px,e)}rotateZ(e){return this.rotateOnAxis(Dx,e)}translateOnAxis(e,t){return Cx.copy(e).applyQuaternion(this.quaternion),this.position.add(Cx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rx,e)}translateY(e){return this.translateOnAxis(Px,e)}translateZ(e){return this.translateOnAxis(Dx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lf.copy(e):lf.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),su.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(su,lf,this.up):es.lookAt(lf,su,this.up),this.quaternion.setFromRotationMatrix(es),r&&(es.extractRotation(r.matrixWorld),Ao.setFromRotationMatrix(es),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lx),Co.child=e,this.dispatchEvent(Co),Co.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IC),mp.child=e,this.dispatchEvent(mp),mp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),es.multiply(e.parent.matrixWorld)),e.applyMatrix4(es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lx),Co.child=e,this.dispatchEvent(Co),Co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(su,e,LC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(su,NC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jn.DEFAULT_UP=new G(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wa extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UC={type:"move"};class gp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(u,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,m=.005;u.inputState.pinching&&f>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const B1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},uf={h:0,s:0,l:0};function _p(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=g0(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_p(a,s,e+1/3),this.g=_p(a,s,e),this.b=_p(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=pi){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const i=B1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=xl(e.r),this.g=xl(e.g),this.b=xl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return dt.workingToColorSpace(Hn.copy(this),e),Math.round(ct(Hn.r*255,0,255))*65536+Math.round(ct(Hn.g*255,0,255))*256+Math.round(ct(Hn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,r=Hn.g,s=Hn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=pi){dt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,i=Hn.g,r=Hn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+t,Us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Us),e.getHSL(uf);const i=Vu(Us.h,uf.h,t),r=Vu(Us.s,uf.s,t),s=Vu(Us.l,uf.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new tt;tt.NAMES=B1;class v0{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=t}clone(){return new v0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class FC extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new co,this.environmentIntensity=1,this.environmentRotation=new co,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vr=new G,ts=new G,vp=new G,ns=new G,Ro=new G,Po=new G,Nx=new G,xp=new G,yp=new G,Sp=new G,Mp=new Qt,Ep=new Qt,Tp=new Qt;class lr{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vr.subVectors(e,t),r.cross(vr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vr.subVectors(r,t),ts.subVectors(i,t),vp.subVectors(e,t);const a=vr.dot(vr),o=vr.dot(ts),l=vr.dot(vp),u=ts.dot(ts),c=ts.dot(vp),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(u*l-o*c)*f,m=(a*c-o*l)*f;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ns.x),l.addScaledVector(a,ns.y),l.addScaledVector(o,ns.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Mp.setScalar(0),Ep.setScalar(0),Tp.setScalar(0),Mp.fromBufferAttribute(e,t),Ep.fromBufferAttribute(e,i),Tp.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Mp,s.x),a.addScaledVector(Ep,s.y),a.addScaledVector(Tp,s.z),a}static isFrontFacing(e,t,i,r){return vr.subVectors(i,t),ts.subVectors(e,t),vr.cross(ts).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vr.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),vr.cross(ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return lr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return lr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return lr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ro.subVectors(r,i),Po.subVectors(s,i),xp.subVectors(e,i);const l=Ro.dot(xp),u=Po.dot(xp);if(l<=0&&u<=0)return t.copy(i);yp.subVectors(e,r);const c=Ro.dot(yp),d=Po.dot(yp);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Ro,a);Sp.subVectors(e,s);const h=Ro.dot(Sp),m=Po.dot(Sp);if(m>=0&&h<=m)return t.copy(s);const _=h*u-l*m;if(_<=0&&u>=0&&m<=0)return o=u/(u-m),t.copy(i).addScaledVector(Po,o);const g=c*m-h*d;if(g<=0&&d-c>=0&&h-m>=0)return Nx.subVectors(s,r),o=(d-c)/(d-c+(h-m)),t.copy(r).addScaledVector(Nx,o);const p=1/(g+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(Ro,a).addScaledVector(Po,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class kc{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xr):xr.fromBufferAttribute(s,a),xr.applyMatrix4(e.matrixWorld),this.expandByPoint(xr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cf.copy(i.boundingBox)),cf.applyMatrix4(e.matrixWorld),this.union(cf)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xr),xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(au),ff.subVectors(this.max,au),Do.subVectors(e.a,au),Lo.subVectors(e.b,au),No.subVectors(e.c,au),Fs.subVectors(Lo,Do),Os.subVectors(No,Lo),Ta.subVectors(Do,No);let t=[0,-Fs.z,Fs.y,0,-Os.z,Os.y,0,-Ta.z,Ta.y,Fs.z,0,-Fs.x,Os.z,0,-Os.x,Ta.z,0,-Ta.x,-Fs.y,Fs.x,0,-Os.y,Os.x,0,-Ta.y,Ta.x,0];return!wp(t,Do,Lo,No,ff)||(t=[1,0,0,0,1,0,0,0,1],!wp(t,Do,Lo,No,ff))?!1:(df.crossVectors(Fs,Os),t=[df.x,df.y,df.z],wp(t,Do,Lo,No,ff))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const is=[new G,new G,new G,new G,new G,new G,new G,new G],xr=new G,cf=new kc,Do=new G,Lo=new G,No=new G,Fs=new G,Os=new G,Ta=new G,au=new G,ff=new G,df=new G,wa=new G;function wp(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wa.fromArray(n,s);const o=r.x*Math.abs(wa.x)+r.y*Math.abs(wa.y)+r.z*Math.abs(wa.z),l=e.dot(wa),u=t.dot(wa),c=i.dot(wa);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const cn=new G,hf=new Ye;let OC=0;class Ei extends vo{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ug,this.updateRanges=[],this.gpuType=Vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hf.fromBufferAttribute(this,t),hf.applyMatrix3(e),this.setXY(t,hf.x,hf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ug&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class V1 extends Ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class H1 extends Ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Cr extends Ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}const kC=new kc,ou=new G,bp=new G;class Ch{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ou.subVectors(e,this.center);const t=ou.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ou,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ou.copy(e.center).add(bp)),this.expandByPoint(ou.copy(e.center).sub(bp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zC=0;const er=new en,Ap=new jn,Io=new G,Li=new kc,lu=new kc,En=new G;class Ri extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zC++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iC(e)?H1:V1)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return er.makeRotationFromQuaternion(e),this.applyMatrix4(er),this}rotateX(e){return er.makeRotationX(e),this.applyMatrix4(er),this}rotateY(e){return er.makeRotationY(e),this.applyMatrix4(er),this}rotateZ(e){return er.makeRotationZ(e),this.applyMatrix4(er),this}translate(e,t,i){return er.makeTranslation(e,t,i),this.applyMatrix4(er),this}scale(e,t,i){return er.makeScale(e,t,i),this.applyMatrix4(er),this}lookAt(e){return Ap.lookAt(e),Ap.updateMatrix(),this.applyMatrix4(Ap.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Cr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Li.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ch);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];lu.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(Li.min,lu.min),Li.expandByPoint(En),En.addVectors(Li.max,lu.max),Li.expandByPoint(En)):(Li.expandByPoint(lu.min),Li.expandByPoint(lu.max))}Li.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)En.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(En));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)En.fromBufferAttribute(o,u),l&&(Io.fromBufferAttribute(e,u),En.add(Io)),r=Math.max(r,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new G,l[y]=new G;const u=new G,c=new G,d=new G,f=new Ye,h=new Ye,m=new Ye,_=new G,g=new G;function p(y,b,C){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,C),f.fromBufferAttribute(s,y),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),c.sub(u),d.sub(u),h.sub(f),m.sub(f);const D=1/(h.x*m.y-m.x*h.y);isFinite(D)&&(_.copy(c).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(D),g.copy(d).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(D),o[y].add(_),o[b].add(_),o[C].add(_),l[y].add(g),l[b].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,b=v.length;y<b;++y){const C=v[y],D=C.start,L=C.count;for(let $=D,j=D+L;$<j;$+=3)p(e.getX($+0),e.getX($+1),e.getX($+2))}const S=new G,x=new G,E=new G,w=new G;function T(y){E.fromBufferAttribute(r,y),w.copy(E);const b=o[y];S.copy(b),S.sub(E.multiplyScalar(E.dot(b))).normalize(),x.crossVectors(w,b);const D=x.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,b=v.length;y<b;++y){const C=v[y],D=C.start,L=C.count;for(let $=D,j=D+L;$<j;$+=3)T(e.getX($+0)),T(e.getX($+1)),T(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,u=new G,c=new G,d=new G;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let h=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*c;for(let p=0;p<c;p++)f[m++]=u[h++]}return new Ei(f,c,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ri,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class BC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ug,this.updateRanges=[],this.version=0,this.uuid=vs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ei=new G;class Zd{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Kd("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Kd("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let VC=0;class jl extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=_l,this.side=ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qm,this.blendDst=jm,this.blendEquation=Oa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_l&&(i.blending=this.blending),this.side!==ma&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qm&&(i.blendSrc=this.blendSrc),this.blendDst!==jm&&(i.blendDst=this.blendDst),this.blendEquation!==Oa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==To&&(i.stencilFail=this.stencilFail),this.stencilZFail!==To&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==To&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $o extends jl{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Uo;const uu=new G,Fo=new G,Oo=new G,ko=new Ye,cu=new Ye,G1=new en,pf=new G,fu=new G,mf=new G,Ix=new Ye,Cp=new Ye,Ux=new Ye;class du extends jn{constructor(e=new $o){if(super(),this.isSprite=!0,this.type="Sprite",Uo===void 0){Uo=new Ri;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new BC(t,5);Uo.setIndex([0,1,2,0,2,3]),Uo.setAttribute("position",new Zd(i,3,0,!1)),Uo.setAttribute("uv",new Zd(i,2,3,!1))}this.geometry=Uo,this.material=e,this.center=new Ye(.5,.5),this.count=1}raycast(e,t){e.camera===null&&pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fo.setFromMatrixScale(this.matrixWorld),G1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fo.multiplyScalar(-Oo.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;gf(pf.set(-.5,-.5,0),Oo,a,Fo,r,s),gf(fu.set(.5,-.5,0),Oo,a,Fo,r,s),gf(mf.set(.5,.5,0),Oo,a,Fo,r,s),Ix.set(0,0),Cp.set(1,0),Ux.set(1,1);let o=e.ray.intersectTriangle(pf,fu,mf,!1,uu);if(o===null&&(gf(fu.set(-.5,.5,0),Oo,a,Fo,r,s),Cp.set(0,1),o=e.ray.intersectTriangle(pf,mf,fu,!1,uu),o===null))return;const l=e.ray.origin.distanceTo(uu);l<e.near||l>e.far||t.push({distance:l,point:uu.clone(),uv:lr.getInterpolation(uu,pf,fu,mf,Ix,Cp,Ux,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gf(n,e,t,i,r,s){ko.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(cu.x=s*ko.x-r*ko.y,cu.y=r*ko.x+s*ko.y):cu.copy(ko),n.copy(e),n.x+=cu.x,n.y+=cu.y,n.applyMatrix4(G1)}const rs=new G,Rp=new G,_f=new G,ks=new G,Pp=new G,vf=new G,Dp=new G;class W1{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Rp.copy(e).add(t).multiplyScalar(.5),_f.copy(t).sub(e).normalize(),ks.copy(this.origin).sub(Rp);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_f),o=ks.dot(this.direction),l=-ks.dot(_f),u=ks.lengthSq(),c=Math.abs(1-a*a);let d,f,h,m;if(c>0)if(d=a*l-o,f=a*o-l,m=s*c,d>=0)if(f>=-m)if(f<=m){const _=1/c;d*=_,f*=_,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Rp).addScaledVector(_f,f),h}intersectSphere(e,t){rs.subVectors(e.center,this.origin);const i=rs.dot(this.direction),r=rs.dot(rs)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,i,r,s){Pp.subVectors(t,e),vf.subVectors(i,e),Dp.crossVectors(Pp,vf);let a=this.direction.dot(Dp),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ks.subVectors(this.origin,e);const l=o*this.direction.dot(vf.crossVectors(ks,vf));if(l<0)return null;const u=o*this.direction.dot(Pp.cross(ks));if(u<0||l+u>a)return null;const c=-o*ks.dot(Dp);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class x0 extends jl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new co,this.combine=S1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fx=new en,ba=new W1,xf=new Ch,Ox=new G,yf=new G,Sf=new G,Mf=new G,Lp=new G,Ef=new G,kx=new G,Tf=new G;class Zr extends jn{constructor(e=new Ri,t=new x0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ef.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],d=s[l];c!==0&&(Lp.fromBufferAttribute(d,e),a?Ef.addScaledVector(Lp,c):Ef.addScaledVector(Lp.sub(t),c))}t.add(Ef)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xf.copy(i.boundingSphere),xf.applyMatrix4(s),ba.copy(e.ray).recast(e.near),!(xf.containsPoint(ba.origin)===!1&&(ba.intersectSphere(xf,Ox)===null||ba.origin.distanceToSquared(Ox)>(e.far-e.near)**2))&&(Fx.copy(s).invert(),ba.copy(e.ray).applyMatrix4(Fx),!(i.boundingBox!==null&&ba.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ba)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],v=Math.max(g.start,h.start),S=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,E=S;x<E;x+=3){const w=o.getX(x),T=o.getX(x+1),y=o.getX(x+2);r=wf(this,p,e,i,u,c,d,w,T,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const v=o.getX(g),S=o.getX(g+1),x=o.getX(g+2);r=wf(this,a,e,i,u,c,d,v,S,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],v=Math.max(g.start,h.start),S=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,E=S;x<E;x+=3){const w=x,T=x+1,y=x+2;r=wf(this,p,e,i,u,c,d,w,T,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const v=g,S=g+1,x=g+2;r=wf(this,a,e,i,u,c,d,v,S,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function HC(n,e,t,i,r,s,a,o){let l;if(e.side===Si?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ma,o),l===null)return null;Tf.copy(o),Tf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Tf);return u<t.near||u>t.far?null:{distance:u,point:Tf.clone(),object:n}}function wf(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,yf),n.getVertexPosition(l,Sf),n.getVertexPosition(u,Mf);const c=HC(n,e,t,i,yf,Sf,Mf,kx);if(c){const d=new G;lr.getBarycoord(kx,yf,Sf,Mf,d),r&&(c.uv=lr.getInterpolatedAttribute(r,o,l,u,d,new Ye)),s&&(c.uv1=lr.getInterpolatedAttribute(s,o,l,u,d,new Ye)),a&&(c.normal=lr.getInterpolatedAttribute(a,o,l,u,d,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new G,materialIndex:0};lr.getNormal(yf,Sf,Mf,f.normal),c.face=f,c.barycoord=d}return c}class GC extends In{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Pn,c=Pn,d,f){super(null,a,o,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Np=new G,WC=new G,XC=new Je;class La{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Np.subVectors(i,t).cross(WC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Np),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||XC.getNormalMatrix(e),r=this.coplanarPoint(Np).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Aa=new Ch,YC=new Ye(.5,.5),bf=new G;class X1{constructor(e=new La,t=new La,i=new La,r=new La,s=new La,a=new La){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hr,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],h=s[7],m=s[8],_=s[9],g=s[10],p=s[11],v=s[12],S=s[13],x=s[14],E=s[15];if(r[0].setComponents(u-a,h-c,p-m,E-v).normalize(),r[1].setComponents(u+a,h+c,p+m,E+v).normalize(),r[2].setComponents(u+o,h+d,p+_,E+S).normalize(),r[3].setComponents(u-o,h-d,p-_,E-S).normalize(),i)r[4].setComponents(l,f,g,x).normalize(),r[5].setComponents(u-l,h-f,p-g,E-x).normalize();else if(r[4].setComponents(u-l,h-f,p-g,E-x).normalize(),t===Hr)r[5].setComponents(u+l,h+f,p+g,E+x).normalize();else if(t===jd)r[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Aa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Aa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Aa)}intersectsSprite(e){Aa.center.set(0,0,0);const t=YC.distanceTo(e.center);return Aa.radius=.7071067811865476+t,Aa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Aa)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bf.x=r.normal.x>0?e.max.x:e.min.x,bf.y=r.normal.y>0?e.max.y:e.min.y,bf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class y0 extends jl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zx=new en,Og=new W1,Af=new Ch,Cf=new G;class Y1 extends jn{constructor(e=new Ri,t=new y0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Af.copy(i.boundingSphere),Af.applyMatrix4(r),Af.radius+=s,e.ray.intersectsSphere(Af)===!1)return;zx.copy(r).invert(),Og.copy(e.ray).applyMatrix4(zx);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let m=f,_=h;m<_;m++){const g=u.getX(m);Cf.fromBufferAttribute(d,g),Bx(Cf,g,l,r,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let m=f,_=h;m<_;m++)Cf.fromBufferAttribute(d,m),Bx(Cf,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bx(n,e,t,i,r,s,a){const o=Og.distanceSqToPoint(n);if(o<t){const l=new G;Og.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $1 extends In{constructor(e=[],t=lo,i,r,s,a,o,l,u,c){super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $C extends In{constructor(e,t,i,r,s,a,o,l,u){super(e,t,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fl extends In{constructor(e,t,i=Kr,r,s,a,o=Pn,l=Pn,u,c=ws,d=1){if(c!==ws&&c!==Ga)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qC extends Fl{constructor(e,t=Kr,i=lo,r,s,a=Pn,o=Pn,l,u=ws){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class q1 extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zc extends Ri{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cr(u,3)),this.setAttribute("normal",new Cr(c,3)),this.setAttribute("uv",new Cr(d,2));function m(_,g,p,v,S,x,E,w,T,y,b){const C=x/T,D=E/y,L=x/2,$=E/2,j=w/2,k=T+1,q=y+1;let F=0,N=0;const W=new G;for(let R=0;R<q;R++){const ee=R*D-$;for(let oe=0;oe<k;oe++){const We=oe*C-L;W[_]=We*v,W[g]=ee*S,W[p]=j,u.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[p]=w>0?1:-1,c.push(W.x,W.y,W.z),d.push(oe/T),d.push(1-R/y),F+=1}}for(let R=0;R<y;R++)for(let ee=0;ee<T;ee++){const oe=f+ee+k*R,We=f+ee+k*(R+1),Oe=f+(ee+1)+k*(R+1),ke=f+(ee+1)+k*R;l.push(oe,We,ke),l.push(We,Oe,ke),N+=6}o.addGroup(h,N,b),h+=N,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rh extends Ri{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,f=t/l,h=[],m=[],_=[],g=[];for(let p=0;p<c;p++){const v=p*f-a;for(let S=0;S<u;S++){const x=S*d-s;m.push(x,-v,0),_.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const S=v+u*p,x=v+u*(p+1),E=v+1+u*(p+1),w=v+1+u*p;h.push(S,x,w),h.push(x,E,w)}this.setIndex(h),this.setAttribute("position",new Cr(m,3)),this.setAttribute("normal",new Cr(_,3)),this.setAttribute("uv",new Cr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ol(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Vx(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Vx(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function ii(n){const e={};for(let t=0;t<n.length;t++){const i=Ol(n[t]);for(const r in i)e[r]=i[r]}return e}function Vx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function j1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Qd={clone:Ol,merge:ii};var KC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends jl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KC,this.fragmentShader=ZC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ol(e.uniforms),this.uniformsGroups=jC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Qt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(r.value);break;case"m4":this.uniforms[i].value=new en().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class QC extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JC extends jl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eR extends jl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ip={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Hx(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Hx(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Hx(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class tR{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const h=u[d],m=u[d+1];if(h.global&&(h.lastIndex=0),h.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const nR=new tR;class S0{constructor(e){this.manager=e!==void 0?e:nR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}S0.DEFAULT_MATERIAL_NAME="__DEFAULT";const zo=new WeakMap;class iR extends S0{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ip.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=zo.get(a);d===void 0&&(d=[],zo.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=yc("img");function l(){c(),t&&t(this);const d=zo.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}zo.delete(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),Ip.remove(`image:${e}`);const f=zo.get(this)||[];for(let h=0;h<f.length;h++){const m=f[h];m.onError&&m.onError(d)}zo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ip.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class rR extends S0{constructor(e){super(e)}load(e,t,i,r){const s=new In,a=new iR(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class sR extends jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Rf=new G,Pf=new ql,Nr=new G;class K1 extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Hr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rf,Pf,Nr),Nr.x===1&&Nr.y===1&&Nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rf,Pf,Nr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Rf,Pf,Nr),Nr.x===1&&Nr.y===1&&Nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rf,Pf,Nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zs=new G,Gx=new Ye,Wx=new Ye;class rr extends K1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,t){return this.getViewBounds(e,Gx,Wx),t.subVectors(Wx,Gx)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class M0 extends K1{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class aR extends sR{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bo=-90,Vo=1;class oR extends jn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rr(Bo,Vo,e,t);r.layers=this.layers,this.add(r);const s=new rr(Bo,Vo,e,t);s.layers=this.layers,this.add(s);const a=new rr(Bo,Vo,e,t);a.layers=this.layers,this.add(a);const o=new rr(Bo,Vo,e,t);o.layers=this.layers,this.add(o);const l=new rr(Bo,Vo,e,t);l.layers=this.layers,this.add(l);const u=new rr(Bo,Vo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Hr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class lR extends rr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uR{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cR.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cR(){this._document.hidden===!1&&this.reset()}class fR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const tv=class tv{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};tv.prototype.isMatrix2=!0;let Xx=tv;function Yx(n,e,t,i){const r=dR(i);switch(t){case I1:return n*e;case F1:return n*e/r.components*r.byteLength;case f0:return n*e/r.components*r.byteLength;case uo:return n*e*2/r.components*r.byteLength;case d0:return n*e*2/r.components*r.byteLength;case U1:return n*e*3/r.components*r.byteLength;case wr:return n*e*4/r.components*r.byteLength;case h0:return n*e*4/r.components*r.byteLength;case ad:case od:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ld:case ud:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ag:case lg:return Math.max(n,16)*Math.max(e,8)/4;case sg:case og:return Math.max(n,8)*Math.max(e,8)/2;case ug:case cg:case dg:case hg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fg:case Xd:case pg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gg:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _g:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vg:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xg:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yg:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sg:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mg:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eg:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wg:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bg:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ag:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cg:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rg:case Pg:case Dg:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lg:case Ng:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yd:case Ig:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dR(n){switch(n){case or:case P1:return{byteLength:1,components:1};case vc:case D1:case Wi:return{byteLength:2,components:1};case u0:case c0:return{byteLength:2,components:4};case Kr:case l0:case Vr:return{byteLength:4,components:1};case L1:case N1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:o0}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=o0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Z1(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hR(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),o.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,o),d.length===0)n.bufferSubData(u,0,c);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],_=d[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const _=d[h];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var pR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mR=`#ifdef USE_ALPHAHASH
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
#endif`,gR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_R=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yR=`#ifdef USE_AOMAP
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
#endif`,SR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MR=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ER=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AR=`#ifdef USE_IRIDESCENCE
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
#endif`,CR=`#ifdef USE_BUMPMAP
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
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,OR=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,kR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zR=`vec3 transformedNormal = objectNormal;
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
#endif`,BR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WR="gl_FragColor = linearToOutputTexel( gl_FragColor );",XR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$R=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qR=`#ifdef USE_ENVMAP
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
#endif`,jR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t2=`#ifdef USE_GRADIENTMAP
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
}`,n2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s2=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,a2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,o2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,d2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h2=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,m2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T2=`#if defined( USE_POINTS_UV )
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
#endif`,w2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P2=`#ifdef USE_MORPHTARGETS
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
#endif`,D2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O2=`#ifdef USE_NORMALMAP
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
#endif`,k2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,W2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Z2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,J2=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,eP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tP=`#ifdef USE_SKINNING
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
#endif`,nP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iP=`#ifdef USE_SKINNING
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
#endif`,rP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lP=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uP=`#ifdef USE_TRANSMISSION
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
#endif`,cP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mP=`uniform sampler2D t2D;
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
}`,gP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_P=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yP=`#include <common>
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
}`,SP=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MP=`#define DISTANCE
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
}`,EP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,TP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bP=`uniform float scale;
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
}`,AP=`uniform vec3 diffuse;
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
}`,CP=`#include <common>
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
}`,RP=`uniform vec3 diffuse;
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
}`,PP=`#define LAMBERT
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
}`,DP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,LP=`#define MATCAP
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
}`,NP=`#define MATCAP
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
}`,IP=`#define NORMAL
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
}`,UP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FP=`#define PHONG
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
}`,OP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kP=`#define STANDARD
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
}`,zP=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,BP=`#define TOON
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
}`,VP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,HP=`uniform float size;
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
}`,GP=`uniform vec3 diffuse;
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
}`,WP=`#include <common>
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
}`,XP=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,YP=`uniform float rotation;
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
}`,$P=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:pR,alphahash_pars_fragment:mR,alphamap_fragment:gR,alphamap_pars_fragment:_R,alphatest_fragment:vR,alphatest_pars_fragment:xR,aomap_fragment:yR,aomap_pars_fragment:SR,batching_pars_vertex:MR,batching_vertex:ER,begin_vertex:TR,beginnormal_vertex:wR,bsdfs:bR,iridescence_fragment:AR,bumpmap_pars_fragment:CR,clipping_planes_fragment:RR,clipping_planes_pars_fragment:PR,clipping_planes_pars_vertex:DR,clipping_planes_vertex:LR,color_fragment:NR,color_pars_fragment:IR,color_pars_vertex:UR,color_vertex:FR,common:OR,cube_uv_reflection_fragment:kR,defaultnormal_vertex:zR,displacementmap_pars_vertex:BR,displacementmap_vertex:VR,emissivemap_fragment:HR,emissivemap_pars_fragment:GR,colorspace_fragment:WR,colorspace_pars_fragment:XR,envmap_fragment:YR,envmap_common_pars_fragment:$R,envmap_pars_fragment:qR,envmap_pars_vertex:jR,envmap_physical_pars_fragment:a2,envmap_vertex:KR,fog_vertex:ZR,fog_pars_vertex:QR,fog_fragment:JR,fog_pars_fragment:e2,gradientmap_pars_fragment:t2,lightmap_pars_fragment:n2,lights_lambert_fragment:i2,lights_lambert_pars_fragment:r2,lights_pars_begin:s2,lights_toon_fragment:o2,lights_toon_pars_fragment:l2,lights_phong_fragment:u2,lights_phong_pars_fragment:c2,lights_physical_fragment:f2,lights_physical_pars_fragment:d2,lights_fragment_begin:h2,lights_fragment_maps:p2,lights_fragment_end:m2,lightprobes_pars_fragment:g2,logdepthbuf_fragment:_2,logdepthbuf_pars_fragment:v2,logdepthbuf_pars_vertex:x2,logdepthbuf_vertex:y2,map_fragment:S2,map_pars_fragment:M2,map_particle_fragment:E2,map_particle_pars_fragment:T2,metalnessmap_fragment:w2,metalnessmap_pars_fragment:b2,morphinstance_vertex:A2,morphcolor_vertex:C2,morphnormal_vertex:R2,morphtarget_pars_vertex:P2,morphtarget_vertex:D2,normal_fragment_begin:L2,normal_fragment_maps:N2,normal_pars_fragment:I2,normal_pars_vertex:U2,normal_vertex:F2,normalmap_pars_fragment:O2,clearcoat_normal_fragment_begin:k2,clearcoat_normal_fragment_maps:z2,clearcoat_pars_fragment:B2,iridescence_pars_fragment:V2,opaque_fragment:H2,packing:G2,premultiplied_alpha_fragment:W2,project_vertex:X2,dithering_fragment:Y2,dithering_pars_fragment:$2,roughnessmap_fragment:q2,roughnessmap_pars_fragment:j2,shadowmap_pars_fragment:K2,shadowmap_pars_vertex:Z2,shadowmap_vertex:Q2,shadowmask_pars_fragment:J2,skinbase_vertex:eP,skinning_pars_vertex:tP,skinning_vertex:nP,skinnormal_vertex:iP,specularmap_fragment:rP,specularmap_pars_fragment:sP,tonemapping_fragment:aP,tonemapping_pars_fragment:oP,transmission_fragment:lP,transmission_pars_fragment:uP,uv_pars_fragment:cP,uv_pars_vertex:fP,uv_vertex:dP,worldpos_vertex:hP,background_vert:pP,background_frag:mP,backgroundCube_vert:gP,backgroundCube_frag:_P,cube_vert:vP,cube_frag:xP,depth_vert:yP,depth_frag:SP,distance_vert:MP,distance_frag:EP,equirect_vert:TP,equirect_frag:wP,linedashed_vert:bP,linedashed_frag:AP,meshbasic_vert:CP,meshbasic_frag:RP,meshlambert_vert:PP,meshlambert_frag:DP,meshmatcap_vert:LP,meshmatcap_frag:NP,meshnormal_vert:IP,meshnormal_frag:UP,meshphong_vert:FP,meshphong_frag:OP,meshphysical_vert:kP,meshphysical_frag:zP,meshtoon_vert:BP,meshtoon_frag:VP,points_vert:HP,points_frag:GP,shadow_vert:WP,shadow_frag:XP,sprite_vert:YP,sprite_frag:$P},Te={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},kr={basic:{uniforms:ii([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:ii([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:ii([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:ii([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:ii([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new tt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:ii([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:ii([Te.points,Te.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:ii([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:ii([Te.common,Te.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:ii([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:ii([Te.sprite,Te.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:ii([Te.common,Te.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:ii([Te.lights,Te.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};kr.physical={uniforms:ii([kr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Df={r:0,b:0,g:0},qP=new en,Q1=new Je;Q1.set(-1,0,0,0,1,0,0,0,1);function jP(n,e,t,i,r,s){const a=new tt(0);let o=r===!0?0:1,l,u,c=null,d=0,f=null;function h(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const x=v.backgroundBlurriness>0;S=e.get(S,x)}return S}function m(v){let S=!1;const x=h(v);x===null?g(a,o):x&&x.isColor&&(g(x,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,S){const x=h(S);x&&(x.isCubeTexture||x.mapping===Ah)?(u===void 0&&(u=new Zr(new zc(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ol(kr.backgroundCube.uniforms),vertexShader:kr.backgroundCube.vertexShader,fragmentShader:kr.backgroundCube.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qP.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Q1),u.material.toneMapped=dt.getTransfer(x.colorSpace)!==St,(c!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Zr(new Rh(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ol(kr.background.uniforms),vertexShader:kr.background.vertexShader,fragmentShader:kr.background.fragmentShader,side:ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=dt.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(Df,j1(n)),t.buffers.color.setClear(Df.r,Df.g,Df.b,S,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:_,dispose:p}}function KP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(D,L,$,j,k){let q=!1;const F=d(D,j,$,L);s!==F&&(s=F,u(s.object)),q=h(D,j,$,k),q&&m(D,j,$,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(D,L,$,j),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function u(D){return n.bindVertexArray(D)}function c(D){return n.deleteVertexArray(D)}function d(D,L,$,j){const k=j.wireframe===!0;let q=i[L.id];q===void 0&&(q={},i[L.id]=q);const F=D.isInstancedMesh===!0?D.id:0;let N=q[F];N===void 0&&(N={},q[F]=N);let W=N[$.id];W===void 0&&(W={},N[$.id]=W);let R=W[k];return R===void 0&&(R=f(l()),W[k]=R),R}function f(D){const L=[],$=[],j=[];for(let k=0;k<t;k++)L[k]=0,$[k]=0,j[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:$,attributeDivisors:j,object:D,attributes:{},index:null}}function h(D,L,$,j){const k=s.attributes,q=L.attributes;let F=0;const N=$.getAttributes();for(const W in N)if(N[W].location>=0){const ee=k[W];let oe=q[W];if(oe===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;F++}return s.attributesNum!==F||s.index!==j}function m(D,L,$,j){const k={},q=L.attributes;let F=0;const N=$.getAttributes();for(const W in N)if(N[W].location>=0){let ee=q[W];ee===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),k[W]=oe,F++}s.attributes=k,s.attributesNum=F,s.index=j}function _(){const D=s.newAttributes;for(let L=0,$=D.length;L<$;L++)D[L]=0}function g(D){p(D,0)}function p(D,L){const $=s.newAttributes,j=s.enabledAttributes,k=s.attributeDivisors;$[D]=1,j[D]===0&&(n.enableVertexAttribArray(D),j[D]=1),k[D]!==L&&(n.vertexAttribDivisor(D,L),k[D]=L)}function v(){const D=s.newAttributes,L=s.enabledAttributes;for(let $=0,j=L.length;$<j;$++)L[$]!==D[$]&&(n.disableVertexAttribArray($),L[$]=0)}function S(D,L,$,j,k,q,F){F===!0?n.vertexAttribIPointer(D,L,$,k,q):n.vertexAttribPointer(D,L,$,j,k,q)}function x(D,L,$,j){_();const k=j.attributes,q=$.getAttributes(),F=L.defaultAttributeValues;for(const N in q){const W=q[N];if(W.location>=0){let R=k[N];if(R===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){const ee=R.normalized,oe=R.itemSize,We=e.get(R);if(We===void 0)continue;const Oe=We.buffer,ke=We.type,V=We.bytesPerElement,re=ke===n.INT||ke===n.UNSIGNED_INT||R.gpuType===l0;if(R.isInterleavedBufferAttribute){const ie=R.data,be=ie.stride,De=R.offset;if(ie.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)p(W.location+ye,ie.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ye=0;ye<W.locationSize;ye++)g(W.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ye=0;ye<W.locationSize;ye++)S(W.location+ye,oe/W.locationSize,ke,ee,be*V,(De+oe/W.locationSize*ye)*V,re)}else{if(R.isInstancedBufferAttribute){for(let ie=0;ie<W.locationSize;ie++)p(W.location+ie,R.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ie=0;ie<W.locationSize;ie++)g(W.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ie=0;ie<W.locationSize;ie++)S(W.location+ie,oe/W.locationSize,ke,ee,oe*V,oe/W.locationSize*ie*V,re)}}else if(F!==void 0){const ee=F[N];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(W.location,ee);break;case 3:n.vertexAttrib3fv(W.location,ee);break;case 4:n.vertexAttrib4fv(W.location,ee);break;default:n.vertexAttrib1fv(W.location,ee)}}}}v()}function E(){b();for(const D in i){const L=i[D];for(const $ in L){const j=L[$];for(const k in j){const q=j[k];for(const F in q)c(q[F].object),delete q[F];delete j[k]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const L=i[D.id];for(const $ in L){const j=L[$];for(const k in j){const q=j[k];for(const F in q)c(q[F].object),delete q[F];delete j[k]}}delete i[D.id]}function T(D){for(const L in i){const $=i[L];for(const j in $){const k=$[j];if(k[D.id]===void 0)continue;const q=k[D.id];for(const F in q)c(q[F].object),delete q[F];delete k[D.id]}}}function y(D){for(const L in i){const $=i[L],j=D.isInstancedMesh===!0?D.id:0,k=$[j];if(k!==void 0){for(const q in k){const F=k[q];for(const N in F)c(F[N].object),delete F[N];delete k[q]}delete $[j],Object.keys($).length===0&&delete i[L]}}}function b(){C(),a=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function ZP(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let h=0;h<c;h++)f+=u[h];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function QP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==wr&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const y=T===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==or&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Vr&&!y)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Xe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:E,samples:w}}function JP(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new La,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,S=v*4;let x=p.clippingState||null;l.value=x,x=c(m,f,S,h);for(let E=0;E!==S;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=h+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,x=h;S!==_;++S,x+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Ks=4,$x=[.125,.215,.35,.446,.526,.582],ka=20,e3=256,hu=new M0,qx=new tt;let Up=null,Fp=0,Op=0,kp=!1;const t3=new G;class jx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=t3}=s;Up=this._renderer.getRenderTarget(),Fp=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),kp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Up,Fp,Op),this._renderer.xr.enabled=kp,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===Ul?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Up=this._renderer.getRenderTarget(),Fp=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),kp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Wi,format:wr,colorSpace:$d,depthBuffer:!1},r=Kx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kx(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n3(s)),this._blurMaterial=r3(s,e,t),this._ggxMaterial=i3(s,e,t)}return r}_compileMaterial(e){const t=new Zr(new Ri,e);this._renderer.compile(t,hu)}_sceneToCubeUV(e,t,i,r,s){const l=new rr(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(qx),d.toneMapping=qr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zr(new zc,new x0({name:"PMREM.Background",side:Si,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(qx),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[S],s.y,s.z)):x===1?(l.up.set(0,0,u[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[S],s.z)):(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[S]));const E=this._cubeSize;Ho(r,x*E,S>2?E:0,E,E),d.setRenderTarget(r),p&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===lo||e.mapping===Ul;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zx());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ho(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,hu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-Ks?i-m+Ks:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-t,Ho(s,g,p,3*_,2*_),r.setRenderTarget(s),r.render(o,hu),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ho(e,g,p,3*_,2*_),r.setRenderTarget(e),r.render(o,hu)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ka-1),_=s/m,g=isFinite(s)?1+Math.floor(c*_):ka;g>ka&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ka}`);const p=[];let v=0;for(let T=0;T<ka;++T){const y=T/_,b=Math.exp(-y*y/2);p.push(b),T===0?v+=b:T<g&&(v+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-i;const x=this._sizeLods[r],E=3*x*(r>S-Ks?r-S+Ks:0),w=4*(this._cubeSize-x);Ho(t,E,w,3*x,2*x),l.setRenderTarget(t),l.render(d,hu)}}function n3(n){const e=[],t=[],i=[];let r=n;const s=n-Ks+1+$x.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ks?l=$x[a-n+Ks-1]:a===0&&(l=0),t.push(l);const u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*h),S=new Float32Array(g*m*h),x=new Float32Array(p*m*h);for(let w=0;w<h;w++){const T=w%3*2/3-1,y=w>2?0:-1,b=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];v.set(b,_*m*w),S.set(f,g*m*w);const C=[w,w,w,w,w,w];x.set(C,p*m*w)}const E=new Ri;E.setAttribute("position",new Ei(v,_)),E.setAttribute("uv",new Ei(S,g)),E.setAttribute("faceIndex",new Ei(x,p)),i.push(new Zr(E,null)),r>Ks&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Kx(n,e,t){const i=new Mi(n,e,t);return i.texture.mapping=Ah,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ho(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function i3(n,e,t){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ph(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$r,depthTest:!1,depthWrite:!1})}function r3(n,e,t){const i=new Float32Array(ka),r=new G(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:ka,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function Zx(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function Qx(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$r,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}class J1 extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $1(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zc(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Ol(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Si,blending:$r});s.uniforms.tEquirect.value=t;const a=new Zr(r,s),o=t.minFilter;return t.minFilter===Ha&&(t.minFilter=qn),new oR(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function s3(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===lp||h===up)if(e.has(f)){const m=e.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new J1(m.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",u),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,m=h===lp||h===up,_=h===lo||h===Ul;if(m||_){let g=t.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new jx(n)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new jx(n)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function o(f,h){return h===lp?f.mapping=lo:h===up&&(f.mapping=Ul),f}function l(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function a3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vl("WebGLRenderer: "+i+" extension not supported."),r}}}function o3(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(h!==null){const v=h.array;_=h.version;for(let S=0,x=v.length;S<x;S+=3){const E=v[S+0],w=v[S+1],T=v[S+2];f.push(E,w,w,T,T,E)}}else{const v=m.array;_=m.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const E=S+0,w=S+1,T=S+2;f.push(E,w,w,T,T,E)}}const g=new(m.count>=65535?H1:V1)(f,1);g.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function c(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function l3(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function u(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,s,d*a,h),t.update(f,i,h))}function c(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function u3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function c3(n,e,t){const i=new WeakMap,r=new Qt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let C=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var h=C;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let E=o.attributes.position.count*x,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*w*4*d),y=new k1(T,E,w,d);y.type=Vr,y.needsUpdate=!0;const b=x*4;for(let D=0;D<d;D++){const L=p[D],$=v[D],j=S[D],k=E*w*4*D;for(let q=0;q<L.count;q++){const F=q*b;m===!0&&(r.fromBufferAttribute(L,q),T[k+F+0]=r.x,T[k+F+1]=r.y,T[k+F+2]=r.z,T[k+F+3]=0),_===!0&&(r.fromBufferAttribute($,q),T[k+F+4]=r.x,T[k+F+5]=r.y,T[k+F+6]=r.z,T[k+F+7]=0),g===!0&&(r.fromBufferAttribute(j,q),T[k+F+8]=r.x,T[k+F+9]=r.y,T[k+F+10]=r.z,T[k+F+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new Ye(E,w)},i.set(o,f),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function f3(n,e,t,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const d3={[M1]:"LINEAR_TONE_MAPPING",[E1]:"REINHARD_TONE_MAPPING",[T1]:"CINEON_TONE_MAPPING",[w1]:"ACES_FILMIC_TONE_MAPPING",[A1]:"AGX_TONE_MAPPING",[C1]:"NEUTRAL_TONE_MAPPING",[b1]:"CUSTOM_TONE_MAPPING"};function h3(n,e,t,i,r,s){const a=new Mi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Fl(e,t):void 0}),o=new Mi(e,t,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),l=new Ri;l.setAttribute("position",new Cr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Cr([0,2,0,0,2,0],2));const u=new QC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Zr(l,u),d=new M0(-1,1,1,-1,0,1);let f=null,h=null,m=!1,_,g=null,p=[],v=!1;this.setSize=function(S,x){a.setSize(S,x),o.setSize(S,x);for(let E=0;E<p.length;E++){const w=p[E];w.setSize&&w.setSize(S,x)}},this.setEffects=function(S){p=S,v=p.length>0&&p[0].isRenderPass===!0;const x=a.width,E=a.height;for(let w=0;w<p.length;w++){const T=p[w];T.setSize&&T.setSize(x,E)}},this.begin=function(S,x){if(m||S.toneMapping===qr&&p.length===0)return!1;if(g=x,x!==null){const E=x.width,w=x.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return v===!1&&S.setRenderTarget(a),_=S.toneMapping,S.toneMapping=qr,!0},this.hasRenderPass=function(){return v},this.end=function(S,x){S.toneMapping=_,m=!0;let E=a,w=o;for(let T=0;T<p.length;T++){const y=p[T];if(y.enabled!==!1&&(y.render(S,w,E,x),y.needsSwap!==!1)){const b=E;E=w,w=b}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,u.defines={},dt.getTransfer(f)===St&&(u.defines.SRGB_TRANSFER="");const T=d3[h];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(g),S.render(c,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const eE=new In,kg=new Fl(1,1),tE=new k1,nE=new CC,iE=new $1,Jx=[],ey=[],ty=new Float32Array(16),ny=new Float32Array(9),iy=new Float32Array(4);function Kl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jx[r];if(s===void 0&&(s=new Float32Array(r),Jx[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dh(n,e){let t=ey[e];t===void 0&&(t=new Int32Array(e),ey[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function p3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function m3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function g3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function _3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function v3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;iy.set(i),n.uniformMatrix2fv(this.addr,!1,iy),yn(t,i)}}function x3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;ny.set(i),n.uniformMatrix3fv(this.addr,!1,ny),yn(t,i)}}function y3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,i))return;ty.set(i),n.uniformMatrix4fv(this.addr,!1,ty),yn(t,i)}}function S3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function M3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function E3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function T3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function w3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function A3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function C3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function R3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(kg.compareFunction=t.isReversedDepthBuffer()?m0:p0,s=kg):s=eE,t.setTexture2D(e||s,r)}function P3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||nE,r)}function D3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||iE,r)}function L3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||tE,r)}function N3(n){switch(n){case 5126:return p3;case 35664:return m3;case 35665:return g3;case 35666:return _3;case 35674:return v3;case 35675:return x3;case 35676:return y3;case 5124:case 35670:return S3;case 35667:case 35671:return M3;case 35668:case 35672:return E3;case 35669:case 35673:return T3;case 5125:return w3;case 36294:return b3;case 36295:return A3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return P3;case 35680:case 36300:case 36308:case 36293:return D3;case 36289:case 36303:case 36311:case 36292:return L3}}function I3(n,e){n.uniform1fv(this.addr,e)}function U3(n,e){const t=Kl(e,this.size,2);n.uniform2fv(this.addr,t)}function F3(n,e){const t=Kl(e,this.size,3);n.uniform3fv(this.addr,t)}function O3(n,e){const t=Kl(e,this.size,4);n.uniform4fv(this.addr,t)}function k3(n,e){const t=Kl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z3(n,e){const t=Kl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B3(n,e){const t=Kl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function V3(n,e){n.uniform1iv(this.addr,e)}function H3(n,e){n.uniform2iv(this.addr,e)}function G3(n,e){n.uniform3iv(this.addr,e)}function W3(n,e){n.uniform4iv(this.addr,e)}function X3(n,e){n.uniform1uiv(this.addr,e)}function Y3(n,e){n.uniform2uiv(this.addr,e)}function $3(n,e){n.uniform3uiv(this.addr,e)}function q3(n,e){n.uniform4uiv(this.addr,e)}function j3(n,e,t){const i=this.cache,r=e.length,s=Dh(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=kg:a=eE;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function K3(n,e,t){const i=this.cache,r=e.length,s=Dh(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||nE,s[a])}function Z3(n,e,t){const i=this.cache,r=e.length,s=Dh(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||iE,s[a])}function Q3(n,e,t){const i=this.cache,r=e.length,s=Dh(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||tE,s[a])}function J3(n){switch(n){case 5126:return I3;case 35664:return U3;case 35665:return F3;case 35666:return O3;case 35674:return k3;case 35675:return z3;case 35676:return B3;case 5124:case 35670:return V3;case 35667:case 35671:return H3;case 35668:case 35672:return G3;case 35669:case 35673:return W3;case 5125:return X3;case 36294:return Y3;case 36295:return $3;case 36296:return q3;case 35678:case 36198:case 36298:case 36306:case 35682:return j3;case 35679:case 36299:case 36307:return K3;case 35680:case 36300:case 36308:case 36293:return Z3;case 36289:case 36303:case 36311:case 36292:return Q3}}class eD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=N3(t.type)}}class tD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J3(t.type)}}class nD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const zp=/(\w+)(\])?(\[|\.)?/g;function ry(n,e){n.seq.push(e),n.map[e.id]=e}function iD(n,e,t){const i=n.name,r=i.length;for(zp.lastIndex=0;;){const s=zp.exec(i),a=zp.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){ry(t,u===void 0?new eD(o,n,e):new tD(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new nD(o),ry(t,d)),t=d}}}class cd{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);iD(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function sy(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rD=37297;let sD=0;function aD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ay=new Je;function oD(n){dt._getMatrix(ay,dt.workingColorSpace,n);const e=`mat3( ${ay.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case qd:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function oy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+aD(n.getShaderSource(e),o)}else return s}function lD(n,e){const t=oD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const uD={[M1]:"Linear",[E1]:"Reinhard",[T1]:"Cineon",[w1]:"ACESFilmic",[A1]:"AgX",[C1]:"Neutral",[b1]:"Custom"};function cD(n,e){const t=uD[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lf=new G;function fD(){dt.getLuminanceCoefficients(Lf);const n=Lf.x.toFixed(4),e=Lf.y.toFixed(4),t=Lf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eu).join(`
`)}function hD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Eu(n){return n!==""}function ly(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mD=/^[ \t]*#include +<([\w\d./]+)>/gm;function zg(n){return n.replace(mD,_D)}const gD=new Map;function _D(n,e){let t=nt[e];if(t===void 0){const i=gD.get(e);if(i!==void 0)t=nt[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zg(t)}const vD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cy(n){return n.replace(vD,xD)}function xD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fy(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const yD={[sd]:"SHADOWMAP_TYPE_PCF",[Mu]:"SHADOWMAP_TYPE_VSM"};function SD(n){return yD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MD={[lo]:"ENVMAP_TYPE_CUBE",[Ul]:"ENVMAP_TYPE_CUBE",[Ah]:"ENVMAP_TYPE_CUBE_UV"};function ED(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":MD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const TD={[Ul]:"ENVMAP_MODE_REFRACTION"};function wD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":TD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bD={[S1]:"ENVMAP_BLENDING_MULTIPLY",[YA]:"ENVMAP_BLENDING_MIX",[$A]:"ENVMAP_BLENDING_ADD"};function AD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":bD[n.combine]||"ENVMAP_BLENDING_NONE"}function CD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function RD(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=SD(t),u=ED(t),c=wD(t),d=AD(t),f=CD(t),h=dD(t),m=hD(s),_=r.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Eu).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Eu).join(`
`),p.length>0&&(p+=`
`)):(g=[fy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eu).join(`
`),p=[fy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qr?"#define TONE_MAPPING":"",t.toneMapping!==qr?nt.tonemapping_pars_fragment:"",t.toneMapping!==qr?cD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,lD("linearToOutputTexel",t.outputColorSpace),fD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eu).join(`
`)),a=zg(a),a=ly(a,t),a=uy(a,t),o=zg(o),o=ly(o,t),o=uy(o,t),a=cy(a),o=cy(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===yx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+g+a,x=v+p+o,E=sy(r,r.VERTEX_SHADER,S),w=sy(r,r.FRAGMENT_SHADER,x);r.attachShader(_,E),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(D){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",$=r.getShaderInfoLog(E)||"",j=r.getShaderInfoLog(w)||"",k=L.trim(),q=$.trim(),F=j.trim();let N=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,w);else{const R=oy(r,E,"vertex"),ee=oy(r,w,"fragment");pt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+R+`
`+ee)}else k!==""?Xe("WebGLProgram: Program Info Log:",k):(q===""||F==="")&&(W=!1);W&&(D.diagnostics={runnable:N,programLog:k,vertexShader:{log:q,prefix:g},fragmentShader:{log:F,prefix:p}})}r.deleteShader(E),r.deleteShader(w),y=new cd(r,_),b=pD(r,_)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,rD)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let PD=0;class DD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new LD(e),t.set(e,i)),i}}class LD{constructor(e){this.id=PD++,this.code=e,this.usedTimes=0}}function ND(n){return n===uo||n===Xd||n===Yd}function ID(n,e,t,i,r,s){const a=new z1,o=new DD,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,b,C,D,L,$){const j=D.fog,k=L.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=e.get(y.envMap||q,F),W=N&&N.mapping===Ah?N.image.height:null,R=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Xe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ee!==void 0?ee.length:0;let We=0;k.morphAttributes.position!==void 0&&(We=1),k.morphAttributes.normal!==void 0&&(We=2),k.morphAttributes.color!==void 0&&(We=3);let Oe,ke,V,re;if(R){const ae=kr[R];Oe=ae.vertexShader,ke=ae.fragmentShader}else{Oe=y.vertexShader,ke=y.fragmentShader;const ae=o.getVertexShaderStage(y),He=o.getFragmentShaderStage(y);o.update(y,ae,He),V=ae.id,re=He.id}const ie=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),De=L.isInstancedMesh===!0,ye=L.isBatchedMesh===!0,qe=!!y.map,Se=!!y.matcap,Be=!!N,Ke=!!y.aoMap,je=!!y.lightMap,K=!!y.bumpMap&&y.wireframe===!1,mt=!!y.normalMap,Tt=!!y.displacementMap,Lt=!!y.emissiveMap,Ze=!!y.metalnessMap,vt=!!y.roughnessMap,O=y.anisotropy>0,qt=y.clearcoat>0,$e=y.dispersion>0,P=y.iridescence>0,M=y.sheen>0,B=y.transmission>0,X=O&&!!y.anisotropyMap,Q=qt&&!!y.clearcoatMap,he=qt&&!!y.clearcoatNormalMap,ce=qt&&!!y.clearcoatRoughnessMap,J=P&&!!y.iridescenceMap,te=P&&!!y.iridescenceThicknessMap,ge=M&&!!y.sheenColorMap,Pe=M&&!!y.sheenRoughnessMap,_e=!!y.specularMap,me=!!y.specularColorMap,de=!!y.specularIntensityMap,Ue=B&&!!y.transmissionMap,Ve=B&&!!y.thicknessMap,U=!!y.gradientMap,pe=!!y.alphaMap,ne=y.alphaTest>0,ve=!!y.alphaHash,xe=!!y.extensions;let se=qr;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(se=n.toneMapping);const le={shaderID:R,shaderType:y.type,shaderName:y.name,vertexShader:Oe,fragmentShader:ke,defines:y.defines,customVertexShaderID:V,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ye,batchingColor:ye&&L._colorsTexture!==null,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:Se,envMap:Be,envMapMode:Be&&N.mapping,envMapCubeUVHeight:W,aoMap:Ke,lightMap:je,bumpMap:K,normalMap:mt,displacementMap:Tt,emissiveMap:Lt,normalMapObjectSpace:mt&&y.normalMapType===KA,normalMapTangentSpace:mt&&y.normalMapType===vx,packedNormalMap:mt&&y.normalMapType===vx&&ND(y.normalMap.format),metalnessMap:Ze,roughnessMap:vt,anisotropy:O,anisotropyMap:X,clearcoat:qt,clearcoatMap:Q,clearcoatNormalMap:he,clearcoatRoughnessMap:ce,dispersion:$e,iridescence:P,iridescenceMap:J,iridescenceThicknessMap:te,sheen:M,sheenColorMap:ge,sheenRoughnessMap:Pe,specularMap:_e,specularColorMap:me,specularIntensityMap:de,transmission:B,transmissionMap:Ue,thicknessMap:Ve,gradientMap:U,opaque:y.transparent===!1&&y.blending===_l&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:ne,alphaHash:ve,combine:y.combine,mapUv:qe&&m(y.map.channel),aoMapUv:Ke&&m(y.aoMap.channel),lightMapUv:je&&m(y.lightMap.channel),bumpMapUv:K&&m(y.bumpMap.channel),normalMapUv:mt&&m(y.normalMap.channel),displacementMapUv:Tt&&m(y.displacementMap.channel),emissiveMapUv:Lt&&m(y.emissiveMap.channel),metalnessMapUv:Ze&&m(y.metalnessMap.channel),roughnessMapUv:vt&&m(y.roughnessMap.channel),anisotropyMapUv:X&&m(y.anisotropyMap.channel),clearcoatMapUv:Q&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&m(y.sheenRoughnessMap.channel),specularMapUv:_e&&m(y.specularMap.channel),specularColorMapUv:me&&m(y.specularColorMap.channel),specularIntensityMapUv:de&&m(y.specularIntensityMap.channel),transmissionMapUv:Ue&&m(y.transmissionMap.channel),thicknessMapUv:Ve&&m(y.thicknessMap.channel),alphaMapUv:pe&&m(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(mt||O),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(qe||pe),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&mt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:We,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:Lt&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cs,flipSided:y.side===Si,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function g(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(b,y),v(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){const b=h[y.type];let C;if(b){const D=kr[b];C=Qd.clone(D.uniforms)}else C=y.uniforms;return C}function x(y,b){let C=c.get(b);return C!==void 0?++C.usedTimes:(C=new RD(n,b,y,r),u.push(C),c.set(b,C)),C}function E(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:T}}function UD(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function FD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function dy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hy(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,m,_,g,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=g,v.group=p),e++,v}function l(f,h,m,_,g,p){const v=o(f,h,m,_,g,p);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function u(f,h,m,_,g,p){const v=o(f,h,m,_,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,h,m){t.length>1&&t.sort(f||FD),i.length>1&&i.sort(h||dy),r.length>1&&r.sort(h||dy),m&&(t.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function OD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new hy,n.set(i,[a])):r>=s.length?(a=new hy,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function kD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new tt};break;case"SpotLight":t={position:new G,direction:new G,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function zD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BD=0;function VD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function HD(n){const e=new kD,t=zD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new en,a=new en;function o(u){let c=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,m=0,_=0,g=0,p=0,v=0,S=0,x=0,E=0,w=0,T=0;u.sort(VD);for(let b=0,C=u.length;b<C;b++){const D=u[b],L=D.color,$=D.intensity,j=D.distance;let k=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===uo?k=D.shadow.map.texture:k=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=L.r*$,d+=L.g*$,f+=L.b*$;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],$);T++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,N=t.get(D);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,i.directionalShadow[h]=N,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=D.shadow.matrix,v++}i.directional[h]=q,h++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(L).multiplyScalar($),q.distance=j,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[_]=q;const F=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,F.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=F.matrix,D.castShadow){const N=t.get(D);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=k,x++}_++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(L).multiplyScalar($),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=q,g++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const F=D.shadow,N=t.get(D);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,N.shadowCameraNear=F.camera.near,N.shadowCameraFar=F.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=D.shadow.matrix,S++}i.point[m]=q,m++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar($),q.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==m||y.spotLength!==_||y.rectAreaLength!==g||y.hemiLength!==p||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==x||y.numSpotMaps!==E||y.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,y.directionalLength=h,y.pointLength=m,y.spotLength=_,y.rectAreaLength=g,y.hemiLength=p,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=x,y.numSpotMaps=E,y.numLightProbes=T,i.version=BD++)}function l(u,c){let d=0,f=0,h=0,m=0,_=0;const g=c.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const S=u[p];if(S.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(S.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),h++}else if(S.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function py(n){const e=new HD(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function GD(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new py(n),e.set(r,[o])):s>=a.length?(o=new py(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const WD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YD=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],$D=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],my=new en,pu=new G,Bp=new G;function qD(n,e,t){let i=new X1;const r=new Ye,s=new Ye,a=new Qt,o=new JC,l=new eR,u={},c=t.maxTextureSize,d={[ma]:Si,[Si]:ma,[cs]:cs},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:WD,fragmentShader:XD}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new Ri;m.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zr(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let p=this.type;this.render=function(w,T,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===AA&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sd);const b=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending($r),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const $=p!==this.type;$&&T.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(k=>k.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,k=w.length;j<k;j++){const q=w[j],F=q.shadow;if(F===void 0){Xe("WebGLShadowMap:",q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const N=F.getFrameExtents();r.multiply(N),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/N.x),r.x=s.x*N.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/N.y),r.y=s.y*N.y,F.mapSize.y=s.y));const W=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||$===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Mu){if(q.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Mi(r.x,r.y,{format:uo,type:Wi,minFilter:qn,magFilter:qn,generateMipmaps:!1}),F.map.texture.name=q.name+".shadowMap",F.map.depthTexture=new Fl(r.x,r.y,Vr),F.map.depthTexture.name=q.name+".shadowMapDepth",F.map.depthTexture.format=ws,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pn,F.map.depthTexture.magFilter=Pn}else q.isPointLight?(F.map=new J1(r.x),F.map.depthTexture=new qC(r.x,Kr)):(F.map=new Mi(r.x,r.y),F.map.depthTexture=new Fl(r.x,r.y,Kr)),F.map.depthTexture.name=q.name+".shadowMap",F.map.depthTexture.format=ws,this.type===sd?(F.map.depthTexture.compareFunction=W?m0:p0,F.map.depthTexture.minFilter=qn,F.map.depthTexture.magFilter=qn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pn,F.map.depthTexture.magFilter=Pn);F.camera.updateProjectionMatrix()}const R=F.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<R;ee++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(F.map),n.clear());const oe=F.getViewport(ee);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),L.viewport(a)}if(q.isPointLight){const oe=F.camera,We=F.matrix,Oe=q.distance||oe.far;Oe!==oe.far&&(oe.far=Oe,oe.updateProjectionMatrix()),pu.setFromMatrixPosition(q.matrixWorld),oe.position.copy(pu),Bp.copy(oe.position),Bp.add(YD[ee]),oe.up.copy($D[ee]),oe.lookAt(Bp),oe.updateMatrixWorld(),We.makeTranslation(-pu.x,-pu.y,-pu.z),my.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(my,oe.coordinateSystem,oe.reversedDepth)}else F.updateMatrices(q);i=F.getFrustum(),x(T,y,F.camera,q,this.type)}F.isPointLightShadow!==!0&&this.type===Mu&&v(F,y),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,C,D)};function v(w,T){const y=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mi(r.x,r.y,{format:uo,type:Wi})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,y,f,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,y,h,_,null)}function S(w,T,y,b){let C=null;const D=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=C.uuid,$=T.uuid;let j=u[L];j===void 0&&(j={},u[L]=j);let k=j[$];k===void 0&&(k=C.clone(),j[$]=k,T.addEventListener("dispose",E)),C=k}if(C.visible=T.visible,C.wireframe=T.wireframe,b===Mu?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:d[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=n.properties.get(C);L.light=y}return C}function x(w,T,y,b,C){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Mu)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const $=e.update(w),j=w.material;if(Array.isArray(j)){const k=$.groups;for(let q=0,F=k.length;q<F;q++){const N=k[q],W=j[N.materialIndex];if(W&&W.visible){const R=S(w,W,b,C);w.onBeforeShadow(n,w,T,y,$,R,N),n.renderBufferDirect(y,null,$,R,w,N),w.onAfterShadow(n,w,T,y,$,R,N)}}}else if(j.visible){const k=S(w,j,b,C);w.onBeforeShadow(n,w,T,y,$,k,null),n.renderBufferDirect(y,null,$,k,w,null),w.onAfterShadow(n,w,T,y,$,k,null)}}const L=w.children;for(let $=0,j=L.length;$<j;$++)x(L[$],T,y,b,C)}function E(w){w.target.removeEventListener("dispose",E);for(const y in u){const b=u[y],C=w.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function jD(n,e){function t(){let U=!1;const pe=new Qt;let ne=null;const ve=new Qt(0,0,0,0);return{setMask:function(xe){ne!==xe&&!U&&(n.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){U=xe},setClear:function(xe,se,le,ae,He){He===!0&&(xe*=ae,se*=ae,le*=ae),pe.set(xe,se,le,ae),ve.equals(pe)===!1&&(n.clearColor(xe,se,le,ae),ve.copy(pe))},reset:function(){U=!1,ne=null,ve.set(-1,0,0,0)}}}function i(){let U=!1,pe=!1,ne=null,ve=null,xe=null;return{setReversed:function(se){if(pe!==se){const le=e.get("EXT_clip_control");se?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const ae=xe;xe=null,this.setClear(ae)}},getReversed:function(){return pe},setTest:function(se){se?ie(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(se){ne!==se&&!U&&(n.depthMask(se),ne=se)},setFunc:function(se){if(pe&&(se=aC[se]),ve!==se){switch(se){case Km:n.depthFunc(n.NEVER);break;case Zm:n.depthFunc(n.ALWAYS);break;case Qm:n.depthFunc(n.LESS);break;case Il:n.depthFunc(n.LEQUAL);break;case Jm:n.depthFunc(n.EQUAL);break;case eg:n.depthFunc(n.GEQUAL);break;case tg:n.depthFunc(n.GREATER);break;case ng:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=se}},setLocked:function(se){U=se},setClear:function(se){xe!==se&&(xe=se,pe&&(se=1-se),n.clearDepth(se))},reset:function(){U=!1,ne=null,ve=null,xe=null,pe=!1}}}function r(){let U=!1,pe=null,ne=null,ve=null,xe=null,se=null,le=null,ae=null,He=null;return{setTest:function(ue){U||(ue?ie(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ue){pe!==ue&&!U&&(n.stencilMask(ue),pe=ue)},setFunc:function(ue,Ge,Le){(ne!==ue||ve!==Ge||xe!==Le)&&(n.stencilFunc(ue,Ge,Le),ne=ue,ve=Ge,xe=Le)},setOp:function(ue,Ge,Le){(se!==ue||le!==Ge||ae!==Le)&&(n.stencilOp(ue,Ge,Le),se=ue,le=Ge,ae=Le)},setLocked:function(ue){U=ue},setClear:function(ue){He!==ue&&(n.clearStencil(ue),He=ue)},reset:function(){U=!1,pe=null,ne=null,ve=null,xe=null,se=null,le=null,ae=null,He=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,v=null,S=null,x=null,E=null,w=null,T=null,y=new tt(0,0,0),b=0,C=!1,D=null,L=null,$=null,j=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,N=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=N>=1):W.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=N>=2);let R=null,ee={};const oe=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),Oe=new Qt().fromArray(oe),ke=new Qt().fromArray(We);function V(U,pe,ne,ve){const xe=new Uint8Array(4),se=n.createTexture();n.bindTexture(U,se),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let le=0;le<ne;le++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(pe+le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return se}const re={};re[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Il),K(!1),mt(mx),ie(n.CULL_FACE),Ke($r);function ie(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function be(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function De(U,pe){return f[U]!==pe?(n.bindFramebuffer(U,pe),f[U]=pe,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=pe),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function ye(U,pe){let ne=m,ve=!1;if(U){ne=h.get(pe),ne===void 0&&(ne=[],h.set(pe,ne));const xe=U.textures;if(ne.length!==xe.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let se=0,le=xe.length;se<le;se++)ne[se]=n.COLOR_ATTACHMENT0+se;ne.length=xe.length,ve=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,ve=!0);ve&&n.drawBuffers(ne)}function qe(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const Se={[Oa]:n.FUNC_ADD,[RA]:n.FUNC_SUBTRACT,[PA]:n.FUNC_REVERSE_SUBTRACT};Se[DA]=n.MIN,Se[LA]=n.MAX;const Be={[NA]:n.ZERO,[IA]:n.ONE,[UA]:n.SRC_COLOR,[qm]:n.SRC_ALPHA,[VA]:n.SRC_ALPHA_SATURATE,[zA]:n.DST_COLOR,[OA]:n.DST_ALPHA,[FA]:n.ONE_MINUS_SRC_COLOR,[jm]:n.ONE_MINUS_SRC_ALPHA,[BA]:n.ONE_MINUS_DST_COLOR,[kA]:n.ONE_MINUS_DST_ALPHA,[HA]:n.CONSTANT_COLOR,[GA]:n.ONE_MINUS_CONSTANT_COLOR,[WA]:n.CONSTANT_ALPHA,[XA]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(U,pe,ne,ve,xe,se,le,ae,He,ue){if(U===$r){g===!0&&(be(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),U!==CA){if(U!==p||ue!==C){if((v!==Oa||E!==Oa)&&(n.blendEquation(n.FUNC_ADD),v=Oa,E=Oa),ue)switch(U){case _l:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ps:n.blendFunc(n.ONE,n.ONE);break;case gx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _x:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:pt("WebGLState: Invalid blending: ",U);break}else switch(U){case _l:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gx:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _x:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",U);break}S=null,x=null,w=null,T=null,y.set(0,0,0),b=0,p=U,C=ue}return}xe=xe||pe,se=se||ne,le=le||ve,(pe!==v||xe!==E)&&(n.blendEquationSeparate(Se[pe],Se[xe]),v=pe,E=xe),(ne!==S||ve!==x||se!==w||le!==T)&&(n.blendFuncSeparate(Be[ne],Be[ve],Be[se],Be[le]),S=ne,x=ve,w=se,T=le),(ae.equals(y)===!1||He!==b)&&(n.blendColor(ae.r,ae.g,ae.b,He),y.copy(ae),b=He),p=U,C=!1}function je(U,pe){U.side===cs?be(n.CULL_FACE):ie(n.CULL_FACE);let ne=U.side===Si;pe&&(ne=!ne),K(ne),U.blending===_l&&U.transparent===!1?Ke($r):Ke(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ve=U.stencilWrite;o.setTest(ve),ve&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(U){D!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),D=U)}function mt(U){U!==wA?(ie(n.CULL_FACE),U!==L&&(U===mx?n.cullFace(n.BACK):U===bA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),L=U}function Tt(U){U!==$&&(F&&n.lineWidth(U),$=U)}function Lt(U,pe,ne){U?(ie(n.POLYGON_OFFSET_FILL),(j!==pe||k!==ne)&&(j=pe,k=ne,a.getReversed()&&(pe=-pe),n.polygonOffset(pe,ne))):be(n.POLYGON_OFFSET_FILL)}function Ze(U){U?ie(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function vt(U){U===void 0&&(U=n.TEXTURE0+q-1),R!==U&&(n.activeTexture(U),R=U)}function O(U,pe,ne){ne===void 0&&(R===null?ne=n.TEXTURE0+q-1:ne=R);let ve=ee[ne];ve===void 0&&(ve={type:void 0,texture:void 0},ee[ne]=ve),(ve.type!==U||ve.texture!==pe)&&(R!==ne&&(n.activeTexture(ne),R=ne),n.bindTexture(U,pe||re[U]),ve.type=U,ve.texture=pe)}function qt(){const U=ee[R];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $e(){try{n.compressedTexImage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function M(){try{n.texSubImage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function B(){try{n.texSubImage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function he(){try{n.texStorage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function ce(){try{n.texStorage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function J(){try{n.texImage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function te(){try{n.texImage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function ge(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Pe(U,pe){d[U]!==pe&&(n.pixelStorei(U,pe),d[U]=pe)}function _e(U){Oe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Oe.copy(U))}function me(U){ke.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ke.copy(U))}function de(U,pe){let ne=u.get(pe);ne===void 0&&(ne=new WeakMap,u.set(pe,ne));let ve=ne.get(U);ve===void 0&&(ve=n.getUniformBlockIndex(pe,U.name),ne.set(U,ve))}function Ue(U,pe){const ve=u.get(pe).get(U);l.get(pe)!==ve&&(n.uniformBlockBinding(pe,ve,U.__bindingPointIndex),l.set(pe,ve))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},R=null,ee={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,v=null,S=null,x=null,E=null,w=null,T=null,y=new tt(0,0,0),b=0,C=!1,D=null,L=null,$=null,j=null,k=null,Oe.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:be,bindFramebuffer:De,drawBuffers:ye,useProgram:qe,setBlending:Ke,setMaterial:je,setFlipSided:K,setCullFace:mt,setLineWidth:Tt,setPolygonOffset:Lt,setScissorTest:Ze,activeTexture:vt,bindTexture:O,unbindTexture:qt,compressedTexImage2D:$e,compressedTexImage3D:P,texImage2D:J,texImage3D:te,pixelStorei:Pe,getParameter:ge,updateUBOMapping:de,uniformBlockBinding:Ue,texStorage2D:he,texStorage3D:ce,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:_e,viewport:me,reset:Ve}}function KD(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ye,c=new WeakMap,d=new Set;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return m?new OffscreenCanvas(P,M):yc("canvas")}function g(P,M,B){let X=1;const Q=$e(P);if((Q.width>B||Q.height>B)&&(X=B/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(X*Q.width),ce=Math.floor(X*Q.height);f===void 0&&(f=_(he,ce));const J=M?_(he,ce):f;return J.width=he,J.height=ce,J.getContext("2d").drawImage(P,0,0,he,ce),Xe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+he+"x"+ce+")."),J}else return"data"in P&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,M,B,X,Q,he=!1){if(P!==null){if(n[P]!==void 0)return n[P];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce;X&&(ce=e.get("EXT_texture_norm16"),ce||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8),B===n.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),B===n.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),M===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8),B===n.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),B===n.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),M===n.RGB&&(B===n.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),B===n.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),M===n.RGBA){const te=he?qd:dt.getTransfer(Q);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=te===St?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),B===n.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(P,M){let B;return P?M===null||M===Kr||M===xc?B=n.DEPTH24_STENCIL8:M===Vr?B=n.DEPTH32F_STENCIL8:M===vc&&(B=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Kr||M===xc?B=n.DEPTH_COMPONENT24:M===Vr?B=n.DEPTH_COMPONENT32F:M===vc&&(B=n.DEPTH_COMPONENT16),B}function w(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pn&&P.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function T(P){const M=P.target;M.removeEventListener("dispose",T),b(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function y(P){const M=P.target;M.removeEventListener("dispose",y),D(M)}function b(P){const M=i.get(P);if(M.__webglInit===void 0)return;const B=P.source,X=h.get(B);if(X){const Q=X[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(P),Object.keys(X).length===0&&h.delete(B)}i.remove(P)}function C(P){const M=i.get(P);n.deleteTexture(M.__webglTexture);const B=P.source,X=h.get(B);delete X[M.__cacheKey],a.memory.textures--}function D(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Q=0;Q<M.__webglFramebuffer[X].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[X][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)n.deleteFramebuffer(M.__webglFramebuffer[X]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=P.textures;for(let X=0,Q=B.length;X<Q;X++){const he=i.get(B[X]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(B[X])}i.remove(P)}let L=0;function $(){L=0}function j(){return L}function k(P){L=P}function q(){const P=L;return P>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function F(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function N(P,M){const B=i.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const X=P.image;if(X===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{be(B,P,M);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function W(P,M){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){be(B,P,M);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function R(P,M){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){be(B,P,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function ee(P,M){const B=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){De(B,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const oe={[ig]:n.REPEAT,[ms]:n.CLAMP_TO_EDGE,[rg]:n.MIRRORED_REPEAT},We={[Pn]:n.NEAREST,[qA]:n.NEAREST_MIPMAP_NEAREST,[af]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[cp]:n.LINEAR_MIPMAP_NEAREST,[Ha]:n.LINEAR_MIPMAP_LINEAR},Oe={[ZA]:n.NEVER,[nC]:n.ALWAYS,[QA]:n.LESS,[p0]:n.LEQUAL,[JA]:n.EQUAL,[m0]:n.GEQUAL,[eC]:n.GREATER,[tC]:n.NOTEQUAL};function ke(P,M){if(M.type===Vr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===cp||M.magFilter===af||M.magFilter===Ha||M.minFilter===qn||M.minFilter===cp||M.minFilter===af||M.minFilter===Ha)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,oe[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,oe[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,oe[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,We[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,We[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==af&&M.minFilter!==Ha||M.type===Vr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function V(P,M){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",T));const X=M.source;let Q=h.get(X);Q===void 0&&(Q={},h.set(X,Q));const he=F(M);if(he!==P.__cacheKey){Q[he]===void 0&&(Q[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[he].usedTimes++;const ce=Q[P.__cacheKey];ce!==void 0&&(Q[P.__cacheKey].usedTimes--,ce.usedTimes===0&&C(M)),P.__cacheKey=he,P.__webglTexture=Q[he].texture}return B}function re(P,M,B){return Math.floor(Math.floor(P/B)/M)}function ie(P,M,B,X){const he=P.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,B,X,M.data);else{he.sort((Pe,_e)=>Pe.start-_e.start);let ce=0;for(let Pe=1;Pe<he.length;Pe++){const _e=he[ce],me=he[Pe],de=_e.start+_e.count,Ue=re(me.start,M.width,4),Ve=re(_e.start,M.width,4);me.start<=de+1&&Ue===Ve&&re(me.start+me.count-1,M.width,4)===Ue?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++ce,he[ce]=me)}he.length=ce+1;const J=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Pe=0,_e=he.length;Pe<_e;Pe++){const me=he[Pe],de=Math.floor(me.start/4),Ue=Math.ceil(me.count/4),Ve=de%M.width,U=Math.floor(de/M.width),pe=Ue,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ve,U,pe,ne,B,X,M.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function be(P,M,B){let X=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=n.TEXTURE_3D);const Q=V(P,M),he=M.source;t.bindTexture(X,P.__webglTexture,n.TEXTURE0+B);const ce=i.get(he);if(he.version!==ce.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ne=dt.getPrimaries(dt.workingColorSpace),ve=M.colorSpace===$s?null:dt.getPrimaries(M.colorSpace),xe=M.colorSpace===$s||ne===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let te=g(M.image,!1,r.maxTextureSize);te=qt(M,te);const ge=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let _e=x(M.internalFormat,ge,Pe,M.normalized,M.colorSpace,M.isVideoTexture);ke(X,M);let me;const de=M.mipmaps,Ue=M.isVideoTexture!==!0,Ve=ce.__version===void 0||Q===!0,U=he.dataReady,pe=w(M,te);if(M.isDepthTexture)_e=E(M.format===Ga,M.type),Ve&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,_e,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,_e,te.width,te.height,0,ge,Pe,null));else if(M.isDataTexture)if(de.length>0){Ue&&Ve&&t.texStorage2D(n.TEXTURE_2D,pe,_e,de[0].width,de[0].height);for(let ne=0,ve=de.length;ne<ve;ne++)me=de[ne],Ue?U&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,me.width,me.height,ge,Pe,me.data):t.texImage2D(n.TEXTURE_2D,ne,_e,me.width,me.height,0,ge,Pe,me.data);M.generateMipmaps=!1}else Ue?(Ve&&t.texStorage2D(n.TEXTURE_2D,pe,_e,te.width,te.height),U&&ie(M,te,ge,Pe)):t.texImage2D(n.TEXTURE_2D,0,_e,te.width,te.height,0,ge,Pe,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,_e,de[0].width,de[0].height,te.depth);for(let ne=0,ve=de.length;ne<ve;ne++)if(me=de[ne],M.format!==wr)if(ge!==null)if(Ue){if(U)if(M.layerUpdates.size>0){const xe=Yx(me.width,me.height,M.format,M.type);for(const se of M.layerUpdates){const le=me.data.subarray(se*xe/me.data.BYTES_PER_ELEMENT,(se+1)*xe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,se,me.width,me.height,1,ge,le)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,te.depth,ge,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,_e,me.width,me.height,te.depth,0,me.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,te.depth,ge,Pe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,_e,me.width,me.height,te.depth,0,ge,Pe,me.data)}else{Ue&&Ve&&t.texStorage2D(n.TEXTURE_2D,pe,_e,de[0].width,de[0].height);for(let ne=0,ve=de.length;ne<ve;ne++)me=de[ne],M.format!==wr?ge!==null?Ue?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,me.width,me.height,ge,me.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,_e,me.width,me.height,0,me.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,me.width,me.height,ge,Pe,me.data):t.texImage2D(n.TEXTURE_2D,ne,_e,me.width,me.height,0,ge,Pe,me.data)}else if(M.isDataArrayTexture)if(Ue){if(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,_e,te.width,te.height,te.depth),U)if(M.layerUpdates.size>0){const ne=Yx(te.width,te.height,M.format,M.type);for(const ve of M.layerUpdates){const xe=te.data.subarray(ve*ne/te.data.BYTES_PER_ELEMENT,(ve+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,te.width,te.height,1,ge,Pe,xe)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Pe,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,te.width,te.height,te.depth,0,ge,Pe,te.data);else if(M.isData3DTexture)Ue?(Ve&&t.texStorage3D(n.TEXTURE_3D,pe,_e,te.width,te.height,te.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Pe,te.data)):t.texImage3D(n.TEXTURE_3D,0,_e,te.width,te.height,te.depth,0,ge,Pe,te.data);else if(M.isFramebufferTexture){if(Ve)if(Ue)t.texStorage2D(n.TEXTURE_2D,pe,_e,te.width,te.height);else{let ne=te.width,ve=te.height;for(let xe=0;xe<pe;xe++)t.texImage2D(n.TEXTURE_2D,xe,_e,ne,ve,0,ge,Pe,null),ne>>=1,ve>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),te.parentNode!==ne){ne.appendChild(te),d.add(M),ne.onpaint=ve=>{const xe=ve.changedElements;for(const se of d)xe.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const xe=n.RGBA,se=n.RGBA,le=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xe,se,le,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(Ue&&Ve){const ne=$e(de[0]);t.texStorage2D(n.TEXTURE_2D,pe,_e,ne.width,ne.height)}for(let ne=0,ve=de.length;ne<ve;ne++)me=de[ne],Ue?U&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ge,Pe,me):t.texImage2D(n.TEXTURE_2D,ne,_e,ge,Pe,me);M.generateMipmaps=!1}else if(Ue){if(Ve){const ne=$e(te);t.texStorage2D(n.TEXTURE_2D,pe,_e,ne.width,ne.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Pe,te)}else t.texImage2D(n.TEXTURE_2D,0,_e,ge,Pe,te);p(M)&&v(X),ce.__version=he.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function De(P,M,B){if(M.image.length!==6)return;const X=V(P,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const he=i.get(Q);if(Q.version!==he.__version||X===!0){t.activeTexture(n.TEXTURE0+B);const ce=dt.getPrimaries(dt.workingColorSpace),J=M.colorSpace===$s?null:dt.getPrimaries(M.colorSpace),te=M.colorSpace===$s||ce===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,Pe=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let se=0;se<6;se++)!ge&&!Pe?_e[se]=g(M.image[se],!0,r.maxCubemapSize):_e[se]=Pe?M.image[se].image:M.image[se],_e[se]=qt(M,_e[se]);const me=_e[0],de=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type),Ve=x(M.internalFormat,de,Ue,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,pe=he.__version===void 0||X===!0,ne=Q.dataReady;let ve=w(M,me);ke(n.TEXTURE_CUBE_MAP,M);let xe;if(ge){U&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ve,me.width,me.height);for(let se=0;se<6;se++){xe=_e[se].mipmaps;for(let le=0;le<xe.length;le++){const ae=xe[le];M.format!==wr?de!==null?U?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le,0,0,ae.width,ae.height,de,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le,Ve,ae.width,ae.height,0,ae.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le,0,0,ae.width,ae.height,de,Ue,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le,Ve,ae.width,ae.height,0,de,Ue,ae.data)}}}else{if(xe=M.mipmaps,U&&pe){xe.length>0&&ve++;const se=$e(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(Pe){U?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,_e[se].width,_e[se].height,de,Ue,_e[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,_e[se].width,_e[se].height,0,de,Ue,_e[se].data);for(let le=0;le<xe.length;le++){const He=xe[le].image[se].image;U?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le+1,0,0,He.width,He.height,de,Ue,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le+1,Ve,He.width,He.height,0,de,Ue,He.data)}}else{U?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,de,Ue,_e[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,de,Ue,_e[se]);for(let le=0;le<xe.length;le++){const ae=xe[le];U?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le+1,0,0,de,Ue,ae.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le+1,Ve,de,Ue,ae.image[se])}}}p(M)&&v(n.TEXTURE_CUBE_MAP),he.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ye(P,M,B,X,Q,he){const ce=s.convert(B.format,B.colorSpace),J=s.convert(B.type),te=x(B.internalFormat,ce,J,B.normalized,B.colorSpace),ge=i.get(M),Pe=i.get(B);if(Pe.__renderTarget=M,!ge.__hasExternalTextures){const _e=Math.max(1,M.width>>he),me=Math.max(1,M.height>>he);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,he,te,_e,me,M.depth,0,ce,J,null):t.texImage2D(Q,he,te,_e,me,0,ce,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),vt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Q,Pe.__webglTexture,0,Ze(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Q,Pe.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(P,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){const X=M.depthTexture,Q=X&&X.isDepthTexture?X.type:null,he=E(M.stencilBuffer,Q),ce=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;vt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(M),he,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(M),he,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,he,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,P)}else{const X=M.textures;for(let Q=0;Q<X.length;Q++){const he=X[Q],ce=s.convert(he.format,he.colorSpace),J=s.convert(he.type),te=x(he.internalFormat,ce,J,he.normalized,he.colorSpace);vt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(M),te,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(M),te,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,te,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(P,M,B){const X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ke(n.TEXTURE_CUBE_MAP,M.depthTexture);const ge=s.convert(M.depthTexture.format),Pe=s.convert(M.depthTexture.type);let _e;M.depthTexture.format===ws?_e=n.DEPTH_COMPONENT24:M.depthTexture.format===Ga&&(_e=n.DEPTH24_STENCIL8);for(let me=0;me<6;me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,M.width,M.height,0,ge,Pe,null)}}else N(M.depthTexture,0);const he=Q.__webglTexture,ce=Ze(M),J=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,te=M.depthTexture.format===Ga?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===ws)vt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,he,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,he,0);else if(M.depthTexture.format===Ga)vt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,he,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(P){const M=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=X}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)Se(M.__webglFramebuffer[X],P,X);else{const X=P.texture.mipmaps;X&&X.length>0?Se(M.__webglFramebuffer[0],P,0):Se(M.__webglFramebuffer,P,0)}else if(B){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=n.createRenderbuffer(),qe(M.__webglDepthbuffer[X],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,he)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),qe(M.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(P,M,B){const X=i.get(P);M!==void 0&&ye(X.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Be(P)}function je(P){const M=P.texture,B=i.get(P),X=i.get(M);P.addEventListener("dispose",y);const Q=P.textures,he=P.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=M.version,a.memory.textures++),he){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let te=0;te<M.mipmaps.length;te++)B.__webglFramebuffer[J][te]=n.createFramebuffer()}else B.__webglFramebuffer[J]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)B.__webglFramebuffer[J]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ce)for(let J=0,te=Q.length;J<te;J++){const ge=i.get(Q[J]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&vt(P)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){const te=Q[J];B.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const ge=s.convert(te.format,te.colorSpace),Pe=s.convert(te.type),_e=x(te.internalFormat,ge,Pe,te.normalized,te.colorSpace,P.isXRRenderTarget===!0),me=Ze(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,_e,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,B.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),qe(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ke(n.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)ye(B.__webglFramebuffer[J][te],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else ye(B.__webglFramebuffer[J],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(M)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let J=0,te=Q.length;J<te;J++){const ge=Q[J],Pe=i.get(ge);let _e=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Pe.__webglTexture),ke(_e,ge),ye(B.__webglFramebuffer,P,ge,n.COLOR_ATTACHMENT0+J,_e,0),p(ge)&&v(_e)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),ke(J,M),M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)ye(B.__webglFramebuffer[te],P,M,n.COLOR_ATTACHMENT0,J,te);else ye(B.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,J,0);p(M)&&v(J),t.unbindTexture()}P.depthBuffer&&Be(P)}function K(P){const M=P.textures;for(let B=0,X=M.length;B<X;B++){const Q=M[B];if(p(Q)){const he=S(P),ce=i.get(Q).__webglTexture;t.bindTexture(he,ce),v(he),t.unbindTexture()}}}const mt=[],Tt=[];function Lt(P){if(P.samples>0){if(vt(P)===!1){const M=P.textures,B=P.width,X=P.height;let Q=n.COLOR_BUFFER_BIT;const he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(P),J=M.length>1;if(J)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const te=P.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]);const Pe=i.get(M[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,B,X,0,0,B,X,Q,n.NEAREST),l===!0&&(mt.length=0,Tt.length=0,mt.push(n.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(mt.push(he),Tt.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ge]);const Pe=i.get(M[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ze(P){return Math.min(r.maxSamples,P.samples)}function vt(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(P){const M=a.render.frame;c.get(P)!==M&&(c.set(P,M),P.update())}function qt(P,M){const B=P.colorSpace,X=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==$d&&B!==$s&&(dt.getTransfer(B)===St?(X!==wr||Q!==or)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",B)),M}function $e(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.getTextureUnits=j,this.setTextureUnits=k,this.setTexture2D=N,this.setTexture2DArray=W,this.setTexture3D=R,this.setTextureCube=ee,this.rebindTextures=Ke,this.setupRenderTarget=je,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ZD(n,e){function t(i,r=$s){let s;const a=dt.getTransfer(r);if(i===or)return n.UNSIGNED_BYTE;if(i===u0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===c0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===L1)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===N1)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===P1)return n.BYTE;if(i===D1)return n.SHORT;if(i===vc)return n.UNSIGNED_SHORT;if(i===l0)return n.INT;if(i===Kr)return n.UNSIGNED_INT;if(i===Vr)return n.FLOAT;if(i===Wi)return n.HALF_FLOAT;if(i===I1)return n.ALPHA;if(i===U1)return n.RGB;if(i===wr)return n.RGBA;if(i===ws)return n.DEPTH_COMPONENT;if(i===Ga)return n.DEPTH_STENCIL;if(i===F1)return n.RED;if(i===f0)return n.RED_INTEGER;if(i===uo)return n.RG;if(i===d0)return n.RG_INTEGER;if(i===h0)return n.RGBA_INTEGER;if(i===ad||i===od||i===ld||i===ud)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ad)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===od)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ld)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ud)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ad)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===od)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ld)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ud)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sg||i===ag||i===og||i===lg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ag)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===og)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ug||i===cg||i===fg||i===dg||i===hg||i===Xd||i===pg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ug||i===cg)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===dg)return s.COMPRESSED_R11_EAC;if(i===hg)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xd)return s.COMPRESSED_RG11_EAC;if(i===pg)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mg||i===gg||i===_g||i===vg||i===xg||i===yg||i===Sg||i===Mg||i===Eg||i===Tg||i===wg||i===bg||i===Ag||i===Cg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_g)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ag)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cg)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rg||i===Pg||i===Dg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rg)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lg||i===Ng||i===Yd||i===Ig)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lg)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ng)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ig)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const QD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JD=`
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

}`;class eL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new q1(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dn({vertexShader:QD,fragmentShader:JD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zr(new Rh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tL extends vo{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",g=new eL,p={},v=t.getContextAttributes();let S=null,x=null;const E=[],w=[],T=new Ye;let y=null;const b=new rr;b.viewport=new Qt;const C=new rr;C.viewport=new Qt;const D=[b,C],L=new lR;let $=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let re=E[V];return re===void 0&&(re=new gp,E[V]=re),re.getTargetRaySpace()},this.getControllerGrip=function(V){let re=E[V];return re===void 0&&(re=new gp,E[V]=re),re.getGripSpace()},this.getHand=function(V){let re=E[V];return re===void 0&&(re=new gp,E[V]=re),re.getHandSpace()};function k(V){const re=w.indexOf(V.inputSource);if(re===-1)return;const ie=E[re];ie!==void 0&&(ie.update(V.inputSource,V.frame,u||a),ie.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",F);for(let V=0;V<E.length;V++){const re=w[V];re!==null&&(w[V]=null,E[V].disconnect(re))}$=null,j=null,g.reset();for(const V in p)delete p[V];e.setRenderTarget(S),h=null,f=null,d=null,r=null,x=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,be=null,De=null;v.depth&&(De=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?Ga:ws,be=v.stencil?xc:Kr);const ye={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Mi(f.textureWidth,f.textureHeight,{format:wr,type:or,depthTexture:new Fl(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Mi(h.framebufferWidth,h.framebufferHeight,{format:wr,type:or,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(V){for(let re=0;re<V.removed.length;re++){const ie=V.removed[re],be=w.indexOf(ie);be>=0&&(w[be]=null,E[be].disconnect(ie))}for(let re=0;re<V.added.length;re++){const ie=V.added[re];let be=w.indexOf(ie);if(be===-1){for(let ye=0;ye<E.length;ye++)if(ye>=w.length){w.push(ie),be=ye;break}else if(w[ye]===null){w[ye]=ie,be=ye;break}if(be===-1)break}const De=E[be];De&&De.connect(ie)}}const N=new G,W=new G;function R(V,re,ie){N.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(ie.matrixWorld);const be=N.distanceTo(W),De=re.projectionMatrix.elements,ye=ie.projectionMatrix.elements,qe=De[14]/(De[10]-1),Se=De[14]/(De[10]+1),Be=(De[9]+1)/De[5],Ke=(De[9]-1)/De[5],je=(De[8]-1)/De[0],K=(ye[8]+1)/ye[0],mt=qe*je,Tt=qe*K,Lt=be/(-je+K),Ze=Lt*-je;if(re.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ze),V.translateZ(Lt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),De[10]===-1)V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const vt=qe+Lt,O=Se+Lt,qt=mt-Ze,$e=Tt+(be-Ze),P=Be*Se/O*vt,M=Ke*Se/O*vt;V.projectionMatrix.makePerspective(qt,$e,P,M,vt,O),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ee(V,re){re===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(re.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let re=V.near,ie=V.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),L.near=C.near=b.near=re,L.far=C.far=b.far=ie,($!==L.near||j!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),$=L.near,j=L.far),L.layers.mask=V.layers.mask|6,b.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;const be=V.parent,De=L.cameras;ee(L,be);for(let ye=0;ye<De.length;ye++)ee(De[ye],be);De.length===2?R(L,b,C):L.projectionMatrix.copy(b.projectionMatrix),oe(V,L,be)};function oe(V,re,ie){ie===null?V.matrix.copy(re.matrixWorld):(V.matrix.copy(ie.matrixWorld),V.matrix.invert(),V.matrix.multiply(re.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Sc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(V){return p[V]};let We=null;function Oe(V,re){if(c=re.getViewerPose(u||a),m=re,c!==null){const ie=c.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let be=!1;ie.length!==L.cameras.length&&(L.cameras.length=0,be=!0);for(let Se=0;Se<ie.length;Se++){const Be=ie[Se];let Ke=null;if(h!==null)Ke=h.getViewport(Be);else{const K=d.getViewSubImage(f,Be);Ke=K.viewport,Se===0&&(e.setRenderTargetTextures(x,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(x))}let je=D[Se];je===void 0&&(je=new rr,je.layers.enable(Se),je.viewport=new Qt,D[Se]=je),je.matrix.fromArray(Be.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Be.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Se===0&&(L.matrix.copy(je.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),be===!0&&L.cameras.push(je)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Se=d.getDepthInformation(ie[0]);Se&&Se.isValid&&Se.texture&&g.init(Se,r.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Se=0;Se<ie.length;Se++){const Be=ie[Se].camera;if(Be){let Ke=p[Be];Ke||(Ke=new q1,p[Be]=Ke);const je=d.getCameraImage(Be);Ke.sourceTexture=je}}}}for(let ie=0;ie<E.length;ie++){const be=w[ie],De=E[ie];be!==null&&De!==void 0&&De.update(be,re,u||a)}We&&We(V,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}const ke=new Z1;ke.setAnimationLoop(Oe),this.setAnimationLoop=function(V){We=V},this.dispose=function(){}}}const nL=new en,rE=new Je;rE.set(-1,0,0,0,1,0,0,0,1);function iL(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,j1(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,S,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,S):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Si&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Si&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),S=v.envMap,x=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(nL.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rE),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Si&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rL(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const w=E.program;i.uniformBlockBinding(x,w)}function u(x,E){let w=r[x.id];w===void 0&&(g(x),w=c(x),r[x.id]=w,x.addEventListener("dispose",v));const T=E.program;i.updateUBOMapping(x,T);const y=e.render.frame;s[x.id]!==y&&(f(x),s[x.id]=y)}function c(x){const E=d();x.__bindingPointIndex=E;const w=n.createBuffer(),T=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,T,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=r[x.id],w=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let y=0,b=w.length;y<b;y++){const C=w[y];if(Array.isArray(C))for(let D=0,L=C.length;D<L;D++)h(C[D],y,D,T);else h(C,y,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,E,w,T){if(_(x,E,w,T)===!0){const y=x.__offset,b=x.value;if(Array.isArray(b)){let C=0;for(let D=0;D<b.length;D++){const L=b[D],$=p(L);m(L,x.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function m(x,E,w){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,w)}function _(x,E,w,T){const y=x.value,b=E+"_"+w;if(T[b]===void 0)return typeof y=="number"||typeof y=="boolean"?T[b]=y:ArrayBuffer.isView(y)?T[b]=y.slice():T[b]=y.clone(),!0;{const C=T[b];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return T[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function g(x){const E=x.uniforms;let w=0;const T=16;for(let b=0,C=E.length;b<C;b++){const D=Array.isArray(E[b])?E[b]:[E[b]];for(let L=0,$=D.length;L<$;L++){const j=D[L],k=Array.isArray(j.value)?j.value:[j.value];for(let q=0,F=k.length;q<F;q++){const N=k[q],W=p(N),R=w%T,ee=R%W.boundary,oe=R+ee;w+=ee,oe!==0&&T-oe<W.storage&&(w+=T-oe),j.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=W.storage}}}const y=w%T;return y>0&&(w+=T-y),x.__size=w,x.__cache={},this}function p(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",x),E}function v(x){const E=x.target;E.removeEventListener("dispose",v);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function S(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:S}}const sL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ir=null;function aL(){return Ir===null&&(Ir=new GC(sL,16,16,uo,Wi),Ir.name="DFG_LUT",Ir.minFilter=qn,Ir.magFilter=qn,Ir.wrapS=ms,Ir.wrapT=ms,Ir.generateMipmaps=!1,Ir.needsUpdate=!0),Ir}class oL{constructor(e={}){const{canvas:t=rC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=or}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=h,g=new Set([h0,d0,f0]),p=new Set([or,Kr,vc,xc,u0,c0]),v=new Uint32Array(4),S=new Int32Array(4),x=new G;let E=null,w=null;const T=[],y=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,L=null,$=null,j=null,k=null;this._outputColorSpace=pi;let q=0,F=0,N=null,W=-1,R=null;const ee=new Qt,oe=new Qt;let We=null;const Oe=new tt(0);let ke=0,V=t.width,re=t.height,ie=1,be=null,De=null;const ye=new Qt(0,0,V,re),qe=new Qt(0,0,V,re);let Se=!1;const Be=new X1;let Ke=!1,je=!1;const K=new en,mt=new G,Tt=new Qt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function vt(){return N===null?ie:1}let O=i;function qt(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${o0}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),O===null){const z="webgl2";if(O=qt(z,A),O===null)throw qt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw pt("WebGLRenderer: "+A.message),A}let $e,P,M,B,X,Q,he,ce,J,te,ge,Pe,_e,me,de,Ue,Ve,U,pe,ne,ve,xe,se;function le(){$e=new a3(O),$e.init(),ve=new ZD(O,$e),P=new QP(O,$e,e,ve),M=new jD(O,$e),P.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),$=O.createFramebuffer(),j=O.createFramebuffer(),k=O.createFramebuffer(),B=new u3(O),X=new UD,Q=new KD(O,$e,M,X,P,ve,B),he=new s3(C),ce=new hR(O),xe=new KP(O,ce),J=new o3(O,ce,B,xe),te=new f3(O,J,ce,xe,B),U=new c3(O,P,Q),de=new JP(X),ge=new ID(C,he,$e,P,xe,de),Pe=new iL(C,X),_e=new OD,me=new GD($e),Ve=new jP(C,he,M,te,m,l),Ue=new qD(C,te,P),se=new rL(O,B,P,M),pe=new ZP(O,$e,B),ne=new l3(O,$e,B),B.programs=ge.programs,C.capabilities=P,C.extensions=$e,C.properties=X,C.renderLists=_e,C.shadowMap=Ue,C.state=M,C.info=B}le(),_!==or&&(b=new h3(_,t.width,t.height,o,r,s));const ae=new tL(C,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=$e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(A){A!==void 0&&(ie=A,this.setSize(V,re,!1))},this.getSize=function(A){return A.set(V,re)},this.setSize=function(A,z,Z=!0){if(ae.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,re=z,t.width=Math.floor(A*ie),t.height=Math.floor(z*ie),Z===!0&&(t.style.width=A+"px",t.style.height=z+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(V*ie,re*ie).floor()},this.setDrawingBufferSize=function(A,z,Z){V=A,re=z,ie=Z,t.width=Math.floor(A*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(_===or){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,z,Z,H){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,z,Z,H),M.viewport(ee.copy(ye).multiplyScalar(ie).round())},this.getScissor=function(A){return A.copy(qe)},this.setScissor=function(A,z,Z,H){A.isVector4?qe.set(A.x,A.y,A.z,A.w):qe.set(A,z,Z,H),M.scissor(oe.copy(qe).multiplyScalar(ie).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){M.setScissorTest(Se=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){De=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Z=!0){let H=0;if(A){let Y=!1;if(N!==null){const Me=N.texture.format;Y=g.has(Me)}if(Y){const Me=N.texture.type,Ee=p.has(Me),we=Ve.getClearColor(),Ne=Ve.getClearAlpha(),Fe=we.r,et=we.g,it=we.b;Ee?(v[0]=Fe,v[1]=et,v[2]=it,v[3]=Ne,O.clearBufferuiv(O.COLOR,0,v)):(S[0]=Fe,S[1]=et,S[2]=it,S[3]=Ne,O.clearBufferiv(O.COLOR,0,S))}else H|=O.COLOR_BUFFER_BIT}z&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),Ve.dispose(),_e.dispose(),me.dispose(),X.dispose(),he.dispose(),te.dispose(),xe.dispose(),se.dispose(),ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ot),ae.removeEventListener("sessionend",At),ft.stop()};function He(A){A.preventDefault(),Kd("WebGLRenderer: Context Lost."),D=!0}function ue(){Kd("WebGLRenderer: Context Restored."),D=!1;const A=B.autoReset,z=Ue.enabled,Z=Ue.autoUpdate,H=Ue.needsUpdate,Y=Ue.type;le(),B.autoReset=A,Ue.enabled=z,Ue.autoUpdate=Z,Ue.needsUpdate=H,Ue.type=Y}function Ge(A){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Le(A){const z=A.target;z.removeEventListener("dispose",Le),Qe(z)}function Qe(A){ln(A),X.remove(A)}function ln(A){const z=X.get(A).programs;z!==void 0&&(z.forEach(function(Z){ge.releaseProgram(Z)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Z,H,Y,Me){z===null&&(z=Lt);const Ee=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,we=Mn(A,z,Z,H,Y);M.setMaterial(H,Ee);let Ne=Z.index,Fe=1;if(H.wireframe===!0){if(Ne=J.getWireframeAttribute(Z),Ne===void 0)return;Fe=2}const et=Z.drawRange,it=Z.attributes.position;let ze=et.start*Fe,wt=(et.start+et.count)*Fe;Me!==null&&(ze=Math.max(ze,Me.start*Fe),wt=Math.min(wt,(Me.start+Me.count)*Fe)),Ne!==null?(ze=Math.max(ze,0),wt=Math.min(wt,Ne.count)):it!=null&&(ze=Math.max(ze,0),wt=Math.min(wt,it.count));const nn=wt-ze;if(nn<0||nn===1/0)return;xe.setup(Y,H,we,Z,Ne);let Kt,Ct=pe;if(Ne!==null&&(Kt=ce.get(Ne),Ct=ne,Ct.setIndex(Kt)),Y.isMesh)H.wireframe===!0?(M.setLineWidth(H.wireframeLinewidth*vt()),Ct.setMode(O.LINES)):Ct.setMode(O.TRIANGLES);else if(Y.isLine){let kn=H.linewidth;kn===void 0&&(kn=1),M.setLineWidth(kn*vt()),Y.isLineSegments?Ct.setMode(O.LINES):Y.isLineLoop?Ct.setMode(O.LINE_LOOP):Ct.setMode(O.LINE_STRIP)}else Y.isPoints?Ct.setMode(O.POINTS):Y.isSprite&&Ct.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if($e.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const kn=Y._multiDrawStarts,Ae=Y._multiDrawCounts,Pi=Y._multiDrawCount,gt=Ne?ce.get(Ne).bytesPerElement:1,Ji=X.get(H).currentProgram.getUniforms();for(let Dr=0;Dr<Pi;Dr++)Ji.setValue(O,"_gl_DrawID",Dr),Ct.render(kn[Dr]/gt,Ae[Dr])}else if(Y.isInstancedMesh)Ct.renderInstances(ze,nn,Y.count);else if(Z.isInstancedBufferGeometry){const kn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ae=Math.min(Z.instanceCount,kn);Ct.renderInstances(ze,nn,Ae)}else Ct.render(ze,nn)};function st(A,z,Z){A.transparent===!0&&A.side===cs&&A.forceSinglePass===!1?(A.side=Si,A.needsUpdate=!0,jt(A,z,Z),A.side=ma,A.needsUpdate=!0,jt(A,z,Z),A.side=cs):jt(A,z,Z)}this.compile=function(A,z,Z=null){Z===null&&(Z=A),w=me.get(Z),w.init(z),y.push(w),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),A!==Z&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights();const H=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Ee=0;Ee<Me.length;Ee++){const we=Me[Ee];st(we,Z,Y),H.add(we)}else st(Me,Z,Y),H.add(Me)}),w=y.pop(),H},this.compileAsync=function(A,z,Z=null){const H=this.compile(A,z,Z);return new Promise(Y=>{function Me(){if(H.forEach(function(Ee){X.get(Ee).currentProgram.isReady()&&H.delete(Ee)}),H.size===0){Y(A);return}setTimeout(Me,10)}$e.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ft=null;function Sn(A){Ft&&Ft(A)}function Ot(){ft.stop()}function At(){ft.start()}const ft=new Z1;ft.setAnimationLoop(Sn),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(A){Ft=A,ae.setAnimationLoop(A),A===null?ft.stop():ft.start()},ae.addEventListener("sessionstart",Ot),ae.addEventListener("sessionend",At),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(A,z);const Z=ae.enabled===!0&&ae.isPresenting===!0,H=b!==null&&(N===null||Z)&&b.begin(C,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(z),z=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,z,N),w=me.get(A,y.length),w.init(z),w.state.textureUnits=Q.getTextureUnits(),y.push(w),K.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Be.setFromProjectionMatrix(K,Hr,z.reversedDepth),je=this.localClippingEnabled,Ke=de.init(this.clippingPlanes,je),E=_e.get(A,T.length),E.init(),T.push(E),ae.enabled===!0&&ae.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Qn(Ee,z,-1/0,C.sortObjects)}Qn(A,z,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(be,De,z.reversedDepth),Ze=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ze&&Ve.addToRenderList(E,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&de.beginShadows();const Y=w.state.shadowsArray;if(Ue.render(Y,A,z),Ke===!0&&de.endShadows(),(H&&b.hasRenderPass())===!1){const Ee=E.opaque,we=E.transmissive;if(w.setupLights(),z.isArrayCamera){const Ne=z.cameras;if(we.length>0)for(let Fe=0,et=Ne.length;Fe<et;Fe++){const it=Ne[Fe];On(Ee,we,A,it)}Ze&&Ve.render(A);for(let Fe=0,et=Ne.length;Fe<et;Fe++){const it=Ne[Fe];Nt(E,A,it,it.viewport)}}else we.length>0&&On(Ee,we,A,z),Ze&&Ve.render(A),Nt(E,A,z)}N!==null&&F===0&&(Q.updateMultisampleRenderTarget(N),Q.updateRenderTargetMipmap(N)),H&&b.end(C),A.isScene===!0&&A.onAfterRender(C,A,z),xe.resetDefaultState(),W=-1,R=null,y.pop(),y.length>0?(w=y[y.length-1],Q.setTextureUnits(w.state.textureUnits),Ke===!0&&de.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,L!==null&&L.renderEnd()};function Qn(A,z,Z,H){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){H&&Tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);const Ee=te.update(A),we=A.material;we.visible&&E.push(A,Ee,we,Z,Tt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const Ee=te.update(A),we=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Tt.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Tt.copy(Ee.boundingSphere.center)),Tt.applyMatrix4(A.matrixWorld).applyMatrix4(K)),Array.isArray(we)){const Ne=Ee.groups;for(let Fe=0,et=Ne.length;Fe<et;Fe++){const it=Ne[Fe],ze=we[it.materialIndex];ze&&ze.visible&&E.push(A,Ee,ze,Z,Tt.z,it)}}else we.visible&&E.push(A,Ee,we,Z,Tt.z,null)}}const Me=A.children;for(let Ee=0,we=Me.length;Ee<we;Ee++)Qn(Me[Ee],z,Z,H)}function Nt(A,z,Z,H){const{opaque:Y,transmissive:Me,transparent:Ee}=A;w.setupLightsView(Z),Ke===!0&&de.setGlobalState(C.clippingPlanes,Z),H&&M.viewport(ee.copy(H)),Y.length>0&&Jn(Y,z,Z),Me.length>0&&Jn(Me,z,Z),Ee.length>0&&Jn(Ee,z,Z),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function On(A,z,Z,H){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const ze=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Mi(1,1,{generateMipmaps:!0,type:ze?Wi:or,minFilter:Ha,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Me=w.state.transmissionRenderTarget[H.id],Ee=H.viewport||ee;Me.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);const we=C.getRenderTarget(),Ne=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(Oe),ke=C.getClearAlpha(),ke<1&&C.setClearColor(16777215,.5),C.clear(),Ze&&Ve.render(Z);const et=C.toneMapping;C.toneMapping=qr;const it=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Ke===!0&&de.setGlobalState(C.clippingPlanes,H),Jn(A,Z,H),Q.updateMultisampleRenderTarget(Me),Q.updateRenderTargetMipmap(Me),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let wt=0,nn=z.length;wt<nn;wt++){const Kt=z[wt],{object:Ct,geometry:kn,material:Ae,group:Pi}=Kt;if(Ae.side===cs&&Ct.layers.test(H.layers)){const gt=Ae.side;Ae.side=Si,Ae.needsUpdate=!0,un(Ct,Z,H,kn,Ae,Pi),Ae.side=gt,Ae.needsUpdate=!0,ze=!0}}ze===!0&&(Q.updateMultisampleRenderTarget(Me),Q.updateRenderTargetMipmap(Me))}C.setRenderTarget(we,Ne,Fe),C.setClearColor(Oe,ke),it!==void 0&&(H.viewport=it),C.toneMapping=et}function Jn(A,z,Z){const H=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Me=A.length;Y<Me;Y++){const Ee=A[Y],{object:we,geometry:Ne,group:Fe}=Ee;let et=Ee.material;et.allowOverride===!0&&H!==null&&(et=H),we.layers.test(Z.layers)&&un(we,z,Z,Ne,et,Fe)}}function un(A,z,Z,H,Y,Me){A.onBeforeRender(C,z,Z,H,Y,Me),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,z,Z,H,A,Me),Y.transparent===!0&&Y.side===cs&&Y.forceSinglePass===!1?(Y.side=Si,Y.needsUpdate=!0,C.renderBufferDirect(Z,z,H,Y,A,Me),Y.side=ma,Y.needsUpdate=!0,C.renderBufferDirect(Z,z,H,Y,A,Me),Y.side=cs):C.renderBufferDirect(Z,z,H,Y,A,Me),A.onAfterRender(C,z,Z,H,Y,Me)}function jt(A,z,Z){z.isScene!==!0&&(z=Lt);const H=X.get(A),Y=w.state.lights,Me=w.state.shadowsArray,Ee=Y.state.version,we=ge.getParameters(A,Y.state,Me,z,Z,w.state.lightProbeGridArray),Ne=ge.getProgramCacheKey(we);let Fe=H.programs;H.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,H.fog=z.fog;const et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;H.envMap=he.get(A.envMap||H.environment,et),H.envMapRotation=H.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",Le),Fe=new Map,H.programs=Fe);let it=Fe.get(Ne);if(it!==void 0){if(H.currentProgram===it&&H.lightsStateVersion===Ee)return Pr(A,we),it}else we.uniforms=ge.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,Z,we),A.onBeforeCompile(we,C),it=ge.acquireProgram(we,Ne),Fe.set(Ne,it),H.uniforms=we.uniforms;const ze=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=de.uniform),Pr(A,we),H.needsLights=Qi(A),H.lightsStateVersion=Ee,H.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=it,H.uniformsList=null,it}function pn(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=cd.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Pr(A,z){const Z=X.get(A);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function yo(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let Z=0,H=A.length;Z<H;Z++){const Y=A[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Mn(A,z,Z,H,Y){z.isScene!==!0&&(z=Lt),Q.resetTextureUnits();const Me=z.fog,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?z.environment:null,we=N===null?C.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:dt.workingColorSpace,Ne=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Fe=he.get(H.envMap||Ee,Ne),et=H.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ze=!!Z.morphAttributes.position,wt=!!Z.morphAttributes.normal,nn=!!Z.morphAttributes.color;let Kt=qr;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Kt=C.toneMapping);const Ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,kn=Ct!==void 0?Ct.length:0,Ae=X.get(H),Pi=w.state.lights;if(Ke===!0&&(je===!0||A!==R)){const It=A===R&&H.id===W;de.setState(H,A,It)}let gt=!1;H.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Pi.state.version||Ae.outputColorSpace!==we||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==Fe||H.fog===!0&&Ae.fog!==Me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==de.numPlanes||Ae.numIntersection!==de.numIntersection)||Ae.vertexAlphas!==et||Ae.vertexTangents!==it||Ae.morphTargets!==ze||Ae.morphNormals!==wt||Ae.morphColors!==nn||Ae.toneMapping!==Kt||Ae.morphTargetsCount!==kn||!!Ae.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ae.__version=H.version);let Ji=Ae.currentProgram;gt===!0&&(Ji=jt(H,z,Y),L&&H.isNodeMaterial&&L.onUpdateProgram(H,Ji,Ae));let Dr=!1,Rs=!1,So=!1;const Rt=Ji.getUniforms(),rn=Ae.uniforms;if(M.useProgram(Ji.program)&&(Dr=!0,Rs=!0,So=!0),H.id!==W&&(W=H.id,Rs=!0),Ae.needsLights){const It=yo(w.state.lightProbeGridArray,Y);Ae.lightProbeGrid!==It&&(Ae.lightProbeGrid=It,Rs=!0)}if(Dr||R!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Rt.setValue(O,"projectionMatrix",A.projectionMatrix),Rt.setValue(O,"viewMatrix",A.matrixWorldInverse);const Ds=Rt.map.cameraPosition;Ds!==void 0&&Ds.setValue(O,mt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Rs=!0,So=!0)}if(Ae.needsLights&&(Pi.state.directionalShadowMap.length>0&&Rt.setValue(O,"directionalShadowMap",Pi.state.directionalShadowMap,Q),Pi.state.spotShadowMap.length>0&&Rt.setValue(O,"spotShadowMap",Pi.state.spotShadowMap,Q),Pi.state.pointShadowMap.length>0&&Rt.setValue(O,"pointShadowMap",Pi.state.pointShadowMap,Q)),Y.isSkinnedMesh){Rt.setOptional(O,Y,"bindMatrix"),Rt.setOptional(O,Y,"bindMatrixInverse");const It=Y.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Rt.setValue(O,"boneTexture",It.boneTexture,Q))}Y.isBatchedMesh&&(Rt.setOptional(O,Y,"batchingTexture"),Rt.setValue(O,"batchingTexture",Y._matricesTexture,Q),Rt.setOptional(O,Y,"batchingIdTexture"),Rt.setValue(O,"batchingIdTexture",Y._indirectTexture,Q),Rt.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Rt.setValue(O,"batchingColorTexture",Y._colorsTexture,Q));const Ps=Z.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&U.update(Y,Z,Ji),(Rs||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,Rt.setValue(O,"receiveShadow",Y.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=aL()),Rs){if(Rt.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&tn(rn,So),Me&&H.fog===!0&&Pe.refreshFogUniforms(rn,Me),Pe.refreshMaterialUniforms(rn,H,ie,re,w.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){const It=Ae.lightProbeGrid;rn.probesSH.value=It.texture,rn.probesMin.value.copy(It.boundingBox.min),rn.probesMax.value.copy(It.boundingBox.max),rn.probesResolution.value.copy(It.resolution)}cd.upload(O,pn(Ae),rn,Q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(cd.upload(O,pn(Ae),rn,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Rt.setValue(O,"center",Y.center),Rt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Rt.setValue(O,"normalMatrix",Y.normalMatrix),Rt.setValue(O,"modelMatrix",Y.matrixWorld),H.uniformsGroups!==void 0){const It=H.uniformsGroups;for(let Ds=0,Mo=It.length;Ds<Mo;Ds++){const nv=It[Ds];se.update(nv,Ji),se.bind(nv,Ji)}}return Ji}function tn(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Qi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,z,Z){const H=X.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=z,X.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const Z=X.get(A);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Z=0){N=A,q=z,F=Z;let H=null,Y=!1,Me=!1;if(A){const we=X.get(A);if(we.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,we.__webglFramebuffer),ee.copy(A.viewport),oe.copy(A.scissor),We=A.scissorTest,M.viewport(ee),M.scissor(oe),M.setScissorTest(We),W=-1;return}else if(we.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(we.__hasExternalTextures)Q.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&X.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const Fe=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?H=Fe[z][Z]:H=Fe[z],Y=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?H=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[Z]:H=Fe,ee.copy(A.viewport),oe.copy(A.scissor),We=A.scissorTest}else ee.copy(ye).multiplyScalar(ie).floor(),oe.copy(qe).multiplyScalar(ie).floor(),We=Se;if(Z!==0&&(H=$),M.bindFramebuffer(O.FRAMEBUFFER,H)&&M.drawBuffers(A,H),M.viewport(ee),M.scissor(oe),M.setScissorTest(We),Y){const we=X.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,Z)}else if(Me){const we=z;for(let Ne=0;Ne<A.textures.length;Ne++){const Fe=X.get(A.textures[Ne]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,Z,we)}}else if(A!==null&&Z!==0){const we=X.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,we.__webglTexture,Z)}W=-1},this.readRenderTargetPixels=function(A,z,Z,H,Y,Me,Ee,we=0){if(!(A&&A.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){M.bindFramebuffer(O.FRAMEBUFFER,Ne);try{const Fe=A.textures[we],et=Fe.format,it=Fe.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we),!P.textureFormatReadable(et)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(it)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-H&&Z>=0&&Z<=A.height-Y&&O.readPixels(z,Z,H,Y,ve.convert(et),ve.convert(it),Me)}finally{const Fe=N!==null?X.get(N).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,z,Z,H,Y,Me,Ee,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne)if(z>=0&&z<=A.width-H&&Z>=0&&Z<=A.height-Y){M.bindFramebuffer(O.FRAMEBUFFER,Ne);const Fe=A.textures[we],et=Fe.format,it=Fe.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we),!P.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(z,Z,H,Y,ve.convert(et),ve.convert(it),0);const wt=N!==null?X.get(N).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,wt);const nn=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await sC(O,nn,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(ze),O.deleteSync(nn),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Z=0){const H=Math.pow(2,-Z),Y=Math.floor(A.image.width*H),Me=Math.floor(A.image.height*H),Ee=z!==null?z.x:0,we=z!==null?z.y:0;Q.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ee,we,Y,Me),M.unbindTexture()},this.copyTextureToTexture=function(A,z,Z=null,H=null,Y=0,Me=0){let Ee,we,Ne,Fe,et,it,ze,wt,nn;const Kt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(Z!==null)Ee=Z.max.x-Z.min.x,we=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,Fe=Z.min.x,et=Z.min.y,it=Z.isBox3?Z.min.z:0;else{const rn=Math.pow(2,-Y);Ee=Math.floor(Kt.width*rn),we=Math.floor(Kt.height*rn),A.isDataArrayTexture?Ne=Kt.depth:A.isData3DTexture?Ne=Math.floor(Kt.depth*rn):Ne=1,Fe=0,et=0,it=0}H!==null?(ze=H.x,wt=H.y,nn=H.z):(ze=0,wt=0,nn=0);const Ct=ve.convert(z.format),kn=ve.convert(z.type);let Ae;z.isData3DTexture?(Q.setTexture3D(z,0),Ae=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),Ae=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),Ae=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Pi=M.getParameter(O.UNPACK_ROW_LENGTH),gt=M.getParameter(O.UNPACK_IMAGE_HEIGHT),Ji=M.getParameter(O.UNPACK_SKIP_PIXELS),Dr=M.getParameter(O.UNPACK_SKIP_ROWS),Rs=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,Kt.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Kt.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(O.UNPACK_SKIP_ROWS,et),M.pixelStorei(O.UNPACK_SKIP_IMAGES,it);const So=A.isDataArrayTexture||A.isData3DTexture,Rt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const rn=X.get(A),Ps=X.get(z),It=X.get(rn.__renderTarget),Ds=X.get(Ps.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,It.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Mo=0;Mo<Ne;Mo++)So&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(A).__webglTexture,Y,it+Mo),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(z).__webglTexture,Me,nn+Mo)),O.blitFramebuffer(Fe,et,Ee,we,ze,wt,Ee,we,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||X.has(A)){const rn=X.get(A),Ps=X.get(z);M.bindFramebuffer(O.READ_FRAMEBUFFER,j),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let It=0;It<Ne;It++)So?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,rn.__webglTexture,Y,it+It):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,rn.__webglTexture,Y),Rt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ps.__webglTexture,Me,nn+It):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ps.__webglTexture,Me),Y!==0?O.blitFramebuffer(Fe,et,Ee,we,ze,wt,Ee,we,O.COLOR_BUFFER_BIT,O.NEAREST):Rt?O.copyTexSubImage3D(Ae,Me,ze,wt,nn+It,Fe,et,Ee,we):O.copyTexSubImage2D(Ae,Me,ze,wt,Fe,et,Ee,we);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ae,Me,ze,wt,nn,Ee,we,Ne,Ct,kn,Kt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,Me,ze,wt,nn,Ee,we,Ne,Ct,Kt.data):O.texSubImage3D(Ae,Me,ze,wt,nn,Ee,we,Ne,Ct,kn,Kt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,ze,wt,Ee,we,Ct,kn,Kt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,ze,wt,Kt.width,Kt.height,Ct,Kt.data):O.texSubImage2D(O.TEXTURE_2D,Me,ze,wt,Ee,we,Ct,kn,Kt);M.pixelStorei(O.UNPACK_ROW_LENGTH,Pi),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Ji),M.pixelStorei(O.UNPACK_SKIP_ROWS,Dr),M.pixelStorei(O.UNPACK_SKIP_IMAGES,Rs),Me===0&&z.generateMipmaps&&O.generateMipmap(Ae),M.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){q=0,F=0,N=null,M.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function as(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function sE(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mc={duration:.5,overwrite:!1,delay:0},E0,Un,Vt,cr=1e8,Dt=1/cr,Bg=Math.PI*2,lL=Bg/4,uL=0,aE=Math.sqrt,cL=Math.cos,fL=Math.sin,Cn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},bs=function(e){return typeof e=="number"},T0=function(e){return typeof e>"u"},Qr=function(e){return typeof e=="object"},Ti=function(e){return e!==!1},w0=function(){return typeof window<"u"},Nf=function(e){return Jt(e)||Cn(e)},oE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Kn=Array.isArray,dL=/random\([^)]+\)/g,hL=/,\s*/g,gy=/(?:-?\.?\d|\.)+/gi,lE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ll=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,uE=/[+-]=-?[.\d]+/,pL=/[^,'"\[\]\s]+/gi,mL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,Fr,Vg,b0,qi={},Jd={},cE,fE=function(e){return(Jd=kl(e,qi))&&Ci},A0=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ec=function(e,t){return!t&&console.warn(e)},dE=function(e,t){return e&&(qi[e]=t)&&Jd&&(Jd[e]=t)||qi},Tc=function(){return 0},gL={suppressEvents:!0,isStart:!0,kill:!1},fd={suppressEvents:!0,kill:!1},_L={suppressEvents:!0},C0={},ca=[],Hg={},hE,Fi={},Hp={},_y=30,dd=[],R0="",P0=function(e){var t=e[0],i,r;if(Qr(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=dd.length;r--&&!dd[r].targetTest(t););i=dd[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new UE(e[r],i)))||e.splice(r,1);return e},Ka=function(e){return e._gsap||P0(fr(e))[0]._gsap},pE=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():T0(i)&&e.getAttribute&&e.getAttribute(t)||i},wi=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},yl=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},vL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},eh=function(){var e=ca.length,t=ca.slice(0),i,r;for(Hg={},ca.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},D0=function(e){return!!(e._initted||e._startAt||e.add)},mE=function(e,t,i,r){ca.length&&!Un&&eh(),e.render(t,i,!!(Un&&t<0&&D0(e))),ca.length&&!Un&&eh()},gE=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pL).length<2?t:Cn(e)?e.trim():e},_E=function(e){return e},ji=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},xL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},kl=function(e,t){for(var i in t)e[i]=t[i];return e},vy=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Qr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},th=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Hu=function(e){var t=e.parent||Wt,i=e.keyframes?xL(Kn(e.keyframes)):ji;if(Ti(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},yL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},vE=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Lh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ga=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Za=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},SL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gg=function(e,t,i,r){return e._startAt&&(Un?e._startAt.revert(fd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},ML=function n(e){return!e||e._ts&&n(e.parent)},xy=function(e){return e._repeat?zl(e._tTime,e=e.duration()+e._rDelay)*e:0},zl=function(e,t){var i=Math.floor(e=Ht(e/t));return e&&i===e?i-1:i},nh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nh=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},Ih=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ht(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nh(e),i._dirty||Za(i,e)),e},xE=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=nh(e.rawTime(),t),(!t._dur||Bc(0,t.totalDuration(),i)-t._tTime>Dt)&&t.render(i,!0)),Za(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Dt}},Br=function(e,t,i,r){return t.parent&&ga(t),t._start=Ht((bs(i)?i:i||e!==Wt?tr(e,i,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vE(e,t,"_first","_last",e._sort?"_start":0),Wg(t)||(e._recent=t),r||xE(e,t),e._ts<0&&Ih(e,e._tTime),e},yE=function(e,t){return(qi.ScrollTrigger||A0("scrollTrigger",t))&&qi.ScrollTrigger.create(t,e)},SE=function(e,t,i,r,s){if(N0(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hE!==ki.frame)return ca.push(e),e._lazy=[s,r],1},EL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Wg=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},TL=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&EL(e)&&!(!e._initted&&Wg(e))||(e._ts<0||e._dp._ts<0)&&!Wg(e))?0:1,o=e._rDelay,l=0,u,c,d;if(o&&e._repeat&&(l=Bc(0,e._tDur,t),c=zl(l,o),e._yoyo&&c&1&&(a=1-a),c!==zl(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Un||r||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&SE(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Dt:0),i||(i=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&Gg(e,t,i,!0),e._onUpdate&&!i&&Vi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Vi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ga(e,1),!i&&!Un&&(Vi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Bl=function(e,t,i,r){var s=e._repeat,a=Ht(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ht(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Ih(e,e._tTime=e._tDur*o),e.parent&&Nh(e),i||Za(e.parent,e),e},yy=function(e){return e instanceof gi?Za(e):Bl(e,e._dur)},bL={_start:0,endTime:Tc,totalDuration:Tc},tr=function n(e,t,i){var r=e.labels,s=e._recent||bL,a=e.duration()>=cr?s.endTime(!1):e._dur,o,l,u;return Cn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&i&&(l=l/100*(Kn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Gu=function(e,t,i){var r=bs(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ti(l.vars.inherit)&&l.parent;a.immediateRender=Ti(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new dn(t[0],a,t[s+1])},Ea=function(e,t){return e||e===0?t(e):t},Bc=function(e,t,i){return i<e?e:i>t?t:i},Yn=function(e,t){return!Cn(e)||!(t=mL.exec(e))?"":t[1]},AL=function(e,t,i){return Ea(i,function(r){return Bc(e,t,r)})},Xg=[].slice,ME=function(e,t){return e&&Qr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qr(e[0]))&&!e.nodeType&&e!==Fr},CL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Cn(r)&&!t||ME(r,1)?(s=i).push.apply(s,fr(r)):i.push(r)})||i},fr=function(e,t,i){return Vt&&!t&&Vt.selector?Vt.selector(e):Cn(e)&&!i&&(Vg||!Vl())?Xg.call((t||b0).querySelectorAll(e),0):Kn(e)?CL(e,i):ME(e)?Xg.call(e,0):e?[e]:[]},Yg=function(e){return e=fr(e)[0]||Ec("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return fr(t,i.querySelectorAll?i:i===e?Ec("Invalid scope")||b0.createElement("div"):e)}},EE=function(e){return e.sort(function(){return .5-Math.random()})},TE=function(e){if(Jt(e))return e;var t=Qr(e)?e:{each:e},i=Qa(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=t.axis,c=r,d=r;return Cn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],d=r[1]),function(f,h,m){var _=(m||t).length,g=a[_],p,v,S,x,E,w,T,y,b;if(!g){if(b=t.grid==="auto"?0:(t.grid||[1,cr])[1],!b){for(T=-cr;T<(T=m[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(g=a[_]=[],p=l?Math.min(b,_)*c-.5:r%b,v=b===cr?0:l?_*d/b-.5:r/b|0,T=0,y=cr,w=0;w<_;w++)S=w%b-p,x=v-(w/b|0),g[w]=E=u?Math.abs(u==="y"?x:S):aE(S*S+x*x),E>T&&(T=E),E<y&&(y=E);r==="random"&&EE(g),g.max=T-y,g.min=y,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:u?u==="y"?_/b:b:Math.max(b,_/b))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Yn(t.amount||t.each)||0,i=i&&_<0?VL(i):i}return _=(g[f]-g.min)/g.max||0,Ht(g.b+(i?i(_):_)*g.v)+g.u}},$g=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ht(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(bs(i)?0:Yn(i))}},wE=function(e,t){var i=Kn(e),r,s;return!i&&Qr(e)&&(r=i=e.radius||cr,e.values?(e=fr(e.values),(s=!bs(e[0]))&&(r*=r)):e=$g(e.increment)),Ea(t,i?Jt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=cr,c=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:a,s||c===a||bs(a)?c:c+Yn(a)}:$g(e))},bE=function(e,t,i,r){return Ea(Kn(e)?!t:i===!0?!!(i=0):!r,function(){return Kn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},RL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},PL=function(e,t){return function(i){return e(parseFloat(i))+(t||Yn(i))}},DL=function(e,t,i){return CE(e,t,0,1,i)},AE=function(e,t,i){return Ea(i,function(r){return e[~~t(r)]})},LL=function n(e,t,i){var r=t-e;return Kn(e)?AE(e,n(0,e.length),t):Ea(i,function(s){return(r+(s-e)%r)%r+e})},NL=function n(e,t,i){var r=t-e,s=r*2;return Kn(e)?AE(e,n(0,e.length-1),t):Ea(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},wc=function(e){return e.replace(dL,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(hL);return bE(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},CE=function(e,t,i,r,s){var a=t-e,o=r-i;return Ea(s,function(l){return i+((l-e)/a*o||0)})},IL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=Cn(e),o={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Kn(e)&&!Kn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(m){m*=d;var _=Math.min(f,~~m);return c[_](m-_)},i=t}else r||(e=kl(Kn(e)?[]:{},e));if(!c){for(l in t)L0.call(o,e,l,"get",t[l]);s=function(m){return F0(m,o)||(a?e.p:e)}}}return Ea(i,s)},Sy=function(e,t,i){var r=e.labels,s=cr,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Vi=function(e,t,i){var r=e.vars,s=r[t],a=Vt,o=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&ca.length&&eh(),o&&(Vt=o),c=l?s.apply(u,l):s.call(u),Vt=a,c},Tu=function(e){return ga(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Un),e.progress()<1&&Vi(e,"onInterrupt"),e},ul,RE=[],PE=function(e){if(e)if(e=!e.name&&e.default||e,w0()||e.headless){var t=e.name,i=Jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Tc,render:F0,add:L0,kill:ZL,modifier:KL,rawVars:0},a={targetTest:0,get:0,getSetter:U0,aliases:{},register:0};if(Vl(),e!==r){if(Fi[t])return;ji(r,ji(th(e,s),a)),kl(r.prototype,kl(s,th(e,a))),Fi[r.prop=t]=r,e.targetTest&&(dd.push(r),C0[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}dE(t,r),e.register&&e.register(Ci,r,bi)}else RE.push(e)},Pt=255,wu={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Gp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Pt+.5|0},DE=function(e,t,i){var r=e?bs(e)?[e>>16,e>>8&Pt,e&Pt]:0:wu.black,s,a,o,l,u,c,d,f,h,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),wu[e])r=wu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pt,r&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(gy),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=Gp(l+1/3,s,a),r[1]=Gp(l,s,a),r[2]=Gp(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(lE),i&&r.length<4&&(r[3]=1),r}else r=e.match(gy)||wu.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Pt,a=r[1]/Pt,o=r[2]/Pt,d=Math.max(s,a,o),f=Math.min(s,a,o),c=(d+f)/2,d===f?l=u=0:(h=d-f,u=c>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},LE=function(e){var t=[],i=[],r=-1;return e.split(fa).forEach(function(s){var a=s.match(ll)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},My=function(e,t,i){var r="",s=(e+r).match(fa),a=t?"hsla(":"rgba(",o=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=DE(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=LE(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(fa,"1").split(ll),d=u.length-1;o<d;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(fa),d=u.length-1;o<d;o++)r+=u[o]+s[o];return r+u[d]},fa=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in wu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),UL=/hsl[a]?\(/,NE=function(e){var t=e.join(" "),i;if(fa.lastIndex=0,fa.test(t))return i=UL.test(t),e[1]=My(e[1],i),e[0]=My(e[0],i,LE(e[1])),!0},bc,ki=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,u,c,d,f,h,m=function _(g){var p=n()-r,v=g===!0,S,x,E,w;if((p>e||p<0)&&(i+=p-t),r+=p,E=r-i,S=E-a,(S>0||v)&&(w=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,a+=S+(S>=s?4:s-S),x=1),v||(l=u(_)),x)for(h=0;h<o.length;h++)o[h](E,f,w,g)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){cE&&(!Vg&&w0()&&(Fr=Vg=window,b0=Fr.document||{},qi.gsap=Ci,(Fr.gsapVersions||(Fr.gsapVersions=[])).push(Ci.version),fE(Jd||Fr.GreenSockGlobals||!Fr.gsap&&Fr||{}),RE.forEach(PE)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(g){return setTimeout(g,a-d.time*1e3+1|0)},bc=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),bc=0,u=Tc},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),a=d.time*1e3+s},add:function(g,p,v){var S=p?function(x,E,w,T){g(x,E,w,T),d.remove(S)}:g;return d.remove(g),o[v?"unshift":"push"](S),Vl(),S},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},d}(),Vl=function(){return!bc&&ki.wake()},ht={},FL=/^[\d.\-M][\d.\-,\s]/,OL=/["']/g,kL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[r]=isNaN(u)?u.replace(OL,"").trim():+u,r=l.substr(o+1).trim();return t},zL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},BL=function(e){var t=(e+"").split("("),i=ht[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[kL(t[1])]:zL(e).split(",").map(gE)):ht._CE&&FL.test(e)?ht._CE("",e):i},VL=function(e){return function(t){return 1-e(1-t)}},Qa=function(e,t){return e&&(Jt(e)?e:ht[e]||BL(e))||t},xo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return wi(e,function(o){ht[o]=qi[o]=s,ht[a=o.toLowerCase()]=i;for(var l in s)ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[o+"."+l]=s[l]}),s},IE=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wp=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Bg*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*fL((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:IE(o);return s=Bg/s,l.config=function(u,c){return n(e,u,c)},l},Xp=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:IE(i);return r.config=function(s){return n(e,s)},r};wi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;xo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;xo("Elastic",Wp("in"),Wp("out"),Wp());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};xo("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);xo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});xo("Circ",function(n){return-(aE(1-n*n)-1)});xo("Sine",function(n){return n===1?1:-cL(n*lL)+1});xo("Back",Xp("in"),Xp("out"),Xp());ht.SteppedEase=ht.steps=qi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-Dt;return function(o){return((r*Bc(0,a,o)|0)+s)*i}}};Mc.ease=ht["quad.out"];wi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return R0+=n+","+n+"Params,"});var UE=function(e,t){this.id=uL++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:pE,this.set=t?t.getSetter:U0},Ac=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Bl(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),bc||ki.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Bl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Vl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ih(this,i),!s._dp||s.parent||xE(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Br(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Dt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),mE(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+xy(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+xy(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?zl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?nh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Dt?0:this._rts,this.totalTime(Bc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Nh(this),SL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Br(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Ti(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?nh(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=_L);var r=Un;return Un=i,D0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Un=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,yy(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,yy(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(tr(this,i),Ti(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Ti(r)),this._dur||(this._zTime=-Dt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Dt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Jt(i)?i:_E,l=function(){var c=r.then;r.then=null,s&&s(),Jt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),a(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Tu(this)},n}();ji(Ac.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var gi=function(n){sE(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Ti(i.sortChildren),Wt&&Br(i.parent||Wt,as(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&yE(as(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Gu(0,arguments,this),this},t.from=function(r,s,a){return Gu(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Gu(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Hu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dn(r,s,tr(this,a),1),this},t.call=function(r,s,a){return Br(this,dn.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new dn(r,a,tr(this,l)),this},t.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,Hu(a).immediateRender=Ti(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},t.staggerFromTo=function(r,s,a,o,l,u,c,d){return o.startAt=a,Hu(o).immediateRender=Ti(o.immediateRender),this.staggerTo(r,s,o,l,u,c,d)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ht(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,h,m,_,g,p,v,S,x,E,w,T;if(this!==Wt&&c>l&&r>=0&&(c=l),c!==this._tTime||a||d){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),f=c,x=this._start,S=this._ts,p=!S,d&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(f=Ht(c%g),c===l?(_=this._repeat,f=u):(E=Ht(c/g),_=~~E,_&&_===E&&(f=u,_--),f>u&&(f=u)),E=zl(this._tTime,g),!o&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),w&&_&1&&(f=u-f,T=1),_!==E&&!this._lock){var y=w&&E&1,b=y===(w&&_&1);if(_<E&&(y=!y),o=y?0:c%u?u:c,this._lock=1,this.render(o||(T?0:Ht(_*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Vi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,b&&(this._lock=2,o=y?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=wL(this,Ht(o),Ht(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&u&&!s&&!E&&(Vi(this,"onStart"),this._tTime!==c))return this;if(f>=o&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!p){v=0,m&&(c+=this._zTime=-Dt);break}}h=m}else{h=this._last;for(var C=r<0?r:f;h;){if(m=h._prev,(h._act||C<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(C-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(C-h._start)*h._ts,s,a||Un&&D0(h)),f!==this._time||!this._ts&&!p){v=0,m&&(c+=this._zTime=C?-Dt:Dt);break}}h=m}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-Dt)._zTime=f>=o?1:-1,this._ts))return this._start=x,Nh(this),this.render(r,s,a);this._onUpdate&&!s&&Vi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&ga(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(Vi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(bs(s)||(s=tr(this,s,r)),!(r instanceof Ac)){if(Kn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Cn(r))return this.addLabel(r,s);if(Jt(r))r=dn.delayedCall(0,r);else return this}return this!==r?Br(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-cr);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof dn?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Cn(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(r.parent===this&&Lh(this,r),r===this._recent&&(this._recent=this._last),Za(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(ki.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=tr(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=dn.delayedCall(0,s||Tc,a);return o.data="isPause",this._hasPause=1,Br(this,o,tr(this,r))},t.removePause=function(r){var s=this._first;for(r=tr(this,r);s;)s._start===r&&s.data==="isPause"&&ga(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Zs!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=fr(r),l=this._first,u=bs(s),c;l;)l instanceof dn?vL(l._targets,o)&&(u?(!Zs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=tr(a,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,h,m=dn.to(a,ji({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||Dt,onStart:function(){if(a.pause(),!h){var g=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());m._dur!==g&&Bl(m,g,0,1).render(m._time,!0,!0),h=1}c&&c.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,ji({startAt:{time:tr(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Sy(this,tr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Sy(this,tr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,u;for(r=Ht(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return Za(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Za(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=cr,u,c,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Br(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ht(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;Bl(a,a===Wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Wt._ts&&(mE(Wt,nh(r,Wt)),hE=ki.frame),ki.frame>=_y){_y+=Xi.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&Xi.autoSleep&&ki._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ki.sleep()}}},e}(Ac);ji(gi.prototype,{_lock:0,_hasPause:0,_forcing:0});var HL=function(e,t,i,r,s,a,o){var l=new bi(this._pt,e,t,0,1,VE,null,s),u=0,c=0,d,f,h,m,_,g,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=wc(r)),a&&(v=[i,r],a(v,e,t),i=v[0],r=v[1]),f=i.match(Vp)||[];d=Vp.exec(r);)m=d[0],_=r.substring(u,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),m!==f[c++]&&(g=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:g,c:m.charAt(1)==="="?yl(g,m)-g:parseFloat(m)-g,m:h&&h<4?Math.round:0},u=Vp.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,(uE.test(r)||p)&&(l.e=0),this._pt=l,l},L0=function(e,t,i,r,s,a,o,l,u,c){Jt(r)&&(r=r(s||0,e,a));var d=e[t],f=i!=="get"?i:Jt(d)?u?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,h=Jt(d)?u?$L:zE:I0,m;if(Cn(r)&&(~r.indexOf("random(")&&(r=wc(r)),r.charAt(1)==="="&&(m=yl(f,r)+(Yn(f)||0),(m||m===0)&&(r=m))),!c||f!==r||qg)return!isNaN(f*r)&&r!==""?(m=new bi(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?jL:BE,0,h),u&&(m.fp=u),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&A0(t,r),HL.call(this,e,t,f,r,h,l||Xi.stringFilter,u))},GL=function(e,t,i,r,s){if(Jt(e)&&(e=Wu(e,s,t,i,r)),!Qr(e)||e.style&&e.nodeType||Kn(e)||oE(e))return Cn(e)?Wu(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=Wu(e[o],s,t,i,r);return a},FE=function(e,t,i,r,s,a){var o,l,u,c;if(Fi[e]&&(o=new Fi[e]).init(s,o.rawVars?t[e]:GL(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new bi(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==ul))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},Zs,qg,N0=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:g,S=e._overwrite==="auto"&&!E0,x=e.timeline,E=r.easeReverse||d,w,T,y,b,C,D,L,$,j,k,q,F,N;if(x&&(!f||!s)&&(s="none"),e._ease=Qa(s,Mc.ease),e._rEase=E&&(Qa(E)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if($=g[0]?Ka(g[0]).harness:0,F=$&&r[$.prop],w=th(r,C0),_&&(_._zTime<0&&_.progress(1),t<0&&c&&o&&!h?_.render(-1,!0):_.revert(c&&m?fd:gL),_._lazy=0),a){if(ga(e._startAt=dn.set(g,ji({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ti(l),startAt:null,delay:0,onUpdate:u&&function(){return Vi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un||!o&&!h)&&e._startAt.revert(fd),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&m&&!_){if(t&&(o=!1),y=ji({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ti(l),immediateRender:o,stagger:0,parent:p},w),F&&(y[$.prop]=F),ga(e._startAt=dn.set(g,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un?e._startAt.revert(fd):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Ti(l)||l&&!m,T=0;T<g.length;T++){if(C=g[T],L=C._gsap||P0(g)[T]._gsap,e._ptLookup[T]=k={},Hg[L.id]&&ca.length&&eh(),q=v===g?T:v.indexOf(C),$&&(j=new $).init(C,F||w,e,q,v)!==!1&&(e._pt=b=new bi(e._pt,C,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(W){k[W]=b}),j.priority&&(D=1)),!$||F)for(y in w)Fi[y]&&(j=FE(y,w,e,q,C,v))?j.priority&&(D=1):k[y]=b=L0.call(e,C,y,"get",w[y],q,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(C,e._op[T]),S&&e._pt&&(Zs=e,Wt.killTweensOf(C,k,e.globalTime(t)),N=!e.parent,Zs=0),e._pt&&l&&(Hg[L.id]=1)}D&&HE(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,f&&t<=0&&x.render(cr,!0,!0)},WL=function(e,t,i,r,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,h;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return qg=1,e.vars[t]="+=0",N0(e,o),qg=0,l?Ec(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,d.e&&(d.e=sn(i)+Yn(d.e)),d.b&&(d.b=c.s+Yn(d.b))},XL=function(e,t){var i=e[0]?Ka(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=kl({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},YL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(Kn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Wu=function(e,t,i,r,s){return Jt(e)?e.call(t,i,r,s):Cn(e)&&~e.indexOf("random(")?wc(e):e},OE=R0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",kE={};wi(OE+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return kE[n]=1});var dn=function(n){sE(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Hu(r))||this;var l=o.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=r.parent||Wt,v=(Kn(i)||oE(i)?bs(i[0]):"length"in r)?[i]:fr(i),S,x,E,w,T,y,b,C;if(o._targets=v.length?P0(v):Ec("GSAP target "+i+" not found. https://gsap.com",!Xi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,m||f||Nf(u)||Nf(c)){r=o.vars;var D=r.easeReverse||r.yoyoEase;if(S=o.timeline=new gi({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),S.kill(),S.parent=S._dp=as(o),S._start=0,f||Nf(u)||Nf(c)){if(w=v.length,b=f&&TE(f),Qr(f))for(T in f)~OE.indexOf(T)&&(C||(C={}),C[T]=f[T]);for(x=0;x<w;x++)E=th(r,kE),E.stagger=0,D&&(E.easeReverse=D),C&&kl(E,C),y=v[x],E.duration=+Wu(u,as(o),x,y,v),E.delay=(+Wu(c,as(o),x,y,v)||0)-o._delay,!f&&w===1&&E.delay&&(o._delay=c=E.delay,o._start+=c,E.delay=0),S.to(y,E,b?b(x,y,v):0),S._ease=ht.none;S.duration()?u=c=0:o.timeline=0}else if(m){Hu(ji(S.vars.defaults,{ease:"none"})),S._ease=Qa(m.ease||r.ease||"none");var L=0,$,j,k;if(Kn(m))m.forEach(function(q){return S.to(v,q,">")}),S.duration();else{E={};for(T in m)T==="ease"||T==="easeEach"||YL(T,m[T],E,m.easeEach);for(T in E)for($=E[T].sort(function(q,F){return q.t-F.t}),L=0,x=0;x<$.length;x++)j=$[x],k={ease:j.e,duration:(j.t-(x?$[x-1].t:0))/100*u},k[T]=j.v,S.to(v,k,L),L+=k.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||o.duration(u=S.duration())}else o.timeline=0;return h===!0&&!E0&&(Zs=as(o),Wt.killTweensOf(v),Zs=0),Br(p,as(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!u&&!m&&o._start===Ht(p._time)&&Ti(d)&&ML(as(o))&&p.data!=="nested")&&(o._tTime=-Dt,o.render(Math.max(0,-c)||0)),g&&yE(as(o),g),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Dt&&!c?l:r<Dt?0:r,f,h,m,_,g,p,v,S;if(!u)TL(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,S=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,a);if(f=Ht(d%_),d===l?(m=this._repeat,f=u):(g=Ht(d/_),m=~~g,m&&m===g?(f=u,m--):f>u&&(f=u)),p=this._yoyo&&m&1,p&&(f=u-f),g=zl(this._tTime,_),f===o&&!a&&this._initted&&m===g)return this._tTime=d,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Ht(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(SE(this,c?r:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==g))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var E=x?o:u-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(x?-1:1)/E:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!g&&(Vi(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Gg(this,r,s,a),Vi(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Vi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Gg(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ga(this,1),!s&&!(c&&!o)&&(d||o||p)&&(Vi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){bc||ki.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||N0(this,u),c=this._ease(u/this._dur),WL(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(Ih(this,0),this.parent||vE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Tu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Un),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Zs&&Zs.vars.overwrite!==!0)._first||Tu(this),this.parent&&a!==this.timeline.totalDuration()&&Bl(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?fr(r):o,u=this._ptLookup,c=this._pt,d,f,h,m,_,g,p;if((!s||s==="all")&&yL(o,l))return s==="all"&&(this._pt=0),Tu(this);for(d=this._op=this._op||[],s!=="all"&&(Cn(s)&&(_={},wi(s,function(v){return _[v]=1}),s=_),s=XL(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=u[p],s==="all"?(d[p]=s,m=f,h={}):(h=d[p]=d[p]||{},m=s);for(_ in m)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Lh(this,g,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&c&&Tu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Gu(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Gu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Wt.killTweensOf(r,s,a)},e}(Ac);ji(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wi("staggerTo,staggerFrom,staggerFromTo",function(n){dn[n]=function(){var e=new gi,t=Xg.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var I0=function(e,t,i){return e[t]=i},zE=function(e,t,i){return e[t](i)},$L=function(e,t,i,r){return e[t](r.fp,i)},qL=function(e,t,i){return e.setAttribute(t,i)},U0=function(e,t){return Jt(e[t])?zE:T0(e[t])&&e.setAttribute?qL:I0},BE=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},jL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},VE=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},F0=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},KL=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},ZL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Lh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},QL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},HE=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},bi=function(){function n(t,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||BE,this.d=l||this,this.set=u||I0,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=QL,this.m=i,this.mt=s,this.tween=r},n}();wi(R0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return C0[n]=1});qi.TweenMax=qi.TweenLite=dn;qi.TimelineLite=qi.TimelineMax=gi;Wt=new gi({sortChildren:!1,defaults:Mc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xi.stringFilter=NE;var Ja=[],hd={},JL=[],Ey=0,eN=0,Yp=function(e){return(hd[e]||JL).map(function(t){return t()})},jg=function(){var e=Date.now(),t=[];e-Ey>2&&(Yp("matchMediaInit"),Ja.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Fr.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&t.push(i))}),Yp("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Ey=e,Yp("matchMedia"))},GE=function(){function n(t,i){this.selector=i&&Yg(i),this.data=[],this._r=[],this.isReverted=!1,this.id=eN++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Jt(i)&&(s=r,r=i,i=Jt);var a=this,o=function(){var u=Vt,c=a.selector,d;return u&&u!==a&&u.data.push(a),s&&(a.selector=Yg(s)),Vt=a,d=r.apply(a,arguments),Jt(d)&&a._r.push(d),Vt=u,a.selector=c,a.isReverted=!1,d};return a.last=o,i===Jt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=Vt;Vt=null,i(this),Vt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof dn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof gi?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof dn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Ja.length;a--;)Ja[a].id===this.id&&Ja.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),tN=function(){function n(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Qr(i)||(i={matches:i});var a=new GE(0,s||this.scope),o=a.conditions={},l,u,c;Vt&&!a.selector&&(a.selector=Vt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Fr.matchMedia(i[u]),l&&(Ja.indexOf(a)<0&&Ja.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(jg):l.addEventListener("change",jg)));return c&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ih={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return PE(r)})},timeline:function(e){return new gi(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Cn(e)&&(e=fr(e)[0]);var s=Ka(e||{}).get,a=i?_E:gE;return i==="native"&&(i=""),e&&(t?a((Fi[t]&&Fi[t].get||s)(e,t,i,r)):function(o,l,u){return a((Fi[o]&&Fi[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,i){if(e=fr(e),e.length>1){var r=e.map(function(c){return Ci.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var a=Fi[t],o=Ka(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var d=new a;ul._pt=0,d.init(e,i?c+i:c,ul,0,[e]),d.render(1,d),ul._pt&&F0(1,ul)}:o.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,o,1)}},quickTo:function(e,t,i){var r,s=Ci.to(e,ji((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qa(e.ease,Mc.ease)),vy(Mc,e||{})},config:function(e){return vy(Xi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Fi[o]&&!qi[o]&&Ec(t+" effect requires "+o+" plugin.")}),Hp[t]=function(o,l,u){return i(fr(o),ji(l||{},s),u)},a&&(gi.prototype[t]=function(o,l,u){return this.add(Hp[t](o,Qr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ht[e]=Qa(t)},parseEase:function(e,t){return arguments.length?Qa(e,t):ht},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new gi(e),r,s;for(i.smoothChildTiming=Ti(e.smoothChildTiming),Wt.remove(i),i._dp=0,i._time=i._tTime=Wt._time,r=Wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof dn&&r.vars.onComplete===r._targets[0]))&&Br(i,r,r._start-r._delay),r=s;return Br(Wt,i,0),i},context:function(e,t){return e?new GE(e,t):Vt},matchMedia:function(e){return new tN(e)},matchMediaRefresh:function(){return Ja.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||jg()},addEventListener:function(e,t){var i=hd[e]||(hd[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=hd[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:LL,wrapYoyo:NL,distribute:TE,random:bE,snap:wE,normalize:DL,getUnit:Yn,clamp:AL,splitColor:DE,toArray:fr,selector:Yg,mapRange:CE,pipe:RL,unitize:PL,interpolate:IL,shuffle:EE},install:fE,effects:Hp,ticker:ki,updateRoot:gi.updateRoot,plugins:Fi,globalTimeline:Wt,core:{PropTween:bi,globals:dE,Tween:dn,Timeline:gi,Animation:Ac,getCache:Ka,_removeLinkedListItem:Lh,reverting:function(){return Un},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return E0=e}}};wi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ih[n]=dn[n]});ki.add(gi.updateRoot);ul=ih.to({},{duration:0});var nN=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},iN=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=nN(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},$p=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(Cn(s)&&(l={},wi(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}iN(o,s)}}}},Ci=ih.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Un?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},$p("roundProps",$g),$p("modifiers"),$p("snap",wE))||ih;dn.version=gi.version=Ci.version="3.15.0";cE=1;w0()&&Vl();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ty,Qs,Sl,O0,Xa,wy,k0,rN=function(){return typeof window<"u"},As={},Na=180/Math.PI,Ml=Math.PI/180,Go=Math.atan2,by=1e8,z0=/([A-Z])/g,sN=/(left|right|width|margin|padding|x)/i,aN=/[\s,\(]\S/,Gr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oN=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lN=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uN=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cN=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},WE=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},XE=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fN=function(e,t,i){return e.style[t]=i},dN=function(e,t,i){return e.style.setProperty(t,i)},hN=function(e,t,i){return e._gsap[t]=i},pN=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},mN=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},gN=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Xt="transform",Ai=Xt+"Origin",_N=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in As&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Gr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ls(r,o)}):this.tfm[e]=a.x?a[e]:ls(r,e),e===Ai&&(this.tfm.zOrigin=a.zOrigin);else return Gr.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Xt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ai,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},YE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vN=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(z0,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=k0(),(!s||!s.isStart)&&!i[Xt]&&(YE(i),r.zOrigin&&i[Ai]&&(i[Ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},$E=function(e,t){var i={target:e,props:[],revert:vN,save:_N};return e._gsap||Ci.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},qE,Zg=function(e,t){var i=Qs.createElementNS?Qs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qs.createElement(e);return i&&i.style?i:Qs.createElement(e)},Hi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(z0,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Hl(t)||t,1)||""},Ay="O,Moz,ms,Ms,Webkit".split(","),Hl=function(e,t,i){var r=t||Xa,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ay[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ay[a]:"")+e},Qg=function(){rN()&&window.document&&(Ty=window,Qs=Ty.document,Sl=Qs.documentElement,Xa=Zg("div")||{style:{}},Zg("div"),Xt=Hl(Xt),Ai=Xt+"Origin",Xa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qE=!!Hl("perspective"),k0=Ci.core.reverting,O0=1)},Cy=function(e){var t=e.ownerSVGElement,i=Zg("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Sl.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Sl.removeChild(i),s},Ry=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},jE=function(e){var t,i;try{t=e.getBBox()}catch{t=Cy(e),i=1}return t&&(t.width||t.height)||i||(t=Cy(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ry(e,["x","cx","x1"])||0,y:+Ry(e,["y","cy","y1"])||0,width:0,height:0}:t},KE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&jE(e))},_a=function(e,t){if(t){var i=e.style,r;t in As&&t!==Ai&&(t=Xt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(z0,"-$1").toLowerCase())):i.removeAttribute(t)}},Js=function(e,t,i,r,s,a){var o=new bi(e._pt,t,i,0,1,a?XE:WE);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Py={deg:1,rad:1,turn:1},xN={grid:1,flex:1},va=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Xa.style,l=sN.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",m,_,g,p;if(r===a||!s||Py[r]||Py[a])return s;if(a!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&KE(e),(h||a==="%")&&(As[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[c],sn(h?s/m*d:s/100*m);if(o[l?"width":"height"]=d+(f?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Qs||!_.appendChild)&&(_=Qs.body),g=_._gsap,g&&h&&g.width&&l&&g.time===ki.time&&!g.uncache)return sn(s/g.width*d);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,m=e[c],v?e.style[t]=v:_a(e,t)}else(h||a==="%")&&!xN[Hi(_,"display")]&&(o.position=Hi(e,"position")),_===e&&(o.position="static"),_.appendChild(Xa),m=Xa[c],_.removeChild(Xa),o.position="absolute";return l&&h&&(g=Ka(_),g.time=ki.time,g.width=_[c]),sn(f?m*s/d:m&&s?d/m*s:0)},ls=function(e,t,i,r){var s;return O0||Qg(),t in Gr&&t!=="transform"&&(t=Gr[t],~t.indexOf(",")&&(t=t.split(",")[0])),As[t]&&t!=="transform"?(s=Rc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:sh(Hi(e,Ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=rh[t]&&rh[t](e,t,i)||Hi(e,t)||pE(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?va(e,t,s,i)+i:s},yN=function(e,t,i,r){if(!i||i==="none"){var s=Hl(t,e,1),a=s&&Hi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Hi(e,"borderTopColor"))}var o=new bi(this._pt,e.style,t,0,1,VE),l=0,u=0,c,d,f,h,m,_,g,p,v,S,x,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Hi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Hi(e,t)||r,_?e.style[t]=_:_a(e,t)),c=[i,r],NE(c),i=c[0],r=c[1],f=i.match(ll)||[],E=r.match(ll)||[],E.length){for(;d=ll.exec(r);)g=d[0],v=r.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),g!==(_=f[u++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),g.charAt(1)==="="&&(g=yl(h,g)+x),p=parseFloat(g),S=g.substr((p+"").length),l=ll.lastIndex-S.length,S||(S=S||Xi.units[t]||x,l===r.length&&(r+=S,o.e+=S)),x!==S&&(h=va(e,t,_,S)||0),o._pt={_next:o._pt,p:v||u===1?v:",",s:h,c:p-h,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?XE:WE;return uE.test(r)&&(o.e=0),this._pt=o,o},Dy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},SN=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Dy[i]||i,t[1]=Dy[r]||r,t.join(" ")},MN=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],As[o]&&(l=1,o=o==="transformOrigin"?Ai:Xt),_a(i,o);l&&(_a(i,Xt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Rc(i,1),a.uncache=1,YE(r)))}},rh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new bi(e._pt,t,i,0,0,MN);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Cc=[1,0,0,1,0,0],ZE={},QE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ly=function(e){var t=Hi(e,Xt);return QE(t)?Cc:t.substr(7).match(lE).map(sn)},B0=function(e,t){var i=e._gsap||Ka(e),r=e.style,s=Ly(e),a,o,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Cc:s):(s===Cc&&!e.offsetParent&&e!==Sl&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,Sl.appendChild(e)),s=Ly(e),l?r.display=l:_a(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):Sl.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jg=function(e,t,i,r,s,a){var o=e._gsap,l=s||B0(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],m=l[1],_=l[2],g=l[3],p=l[4],v=l[5],S=t.split(" "),x=parseFloat(S[0])||0,E=parseFloat(S[1])||0,w,T,y,b;i?l!==Cc&&(T=h*g-m*_)&&(y=x*(g/T)+E*(-_/T)+(_*v-g*p)/T,b=x*(-m/T)+E*(h/T)-(h*v-m*p)/T,x=y,E=b):(w=jE(e),x=w.x+(~S[0].indexOf("%")?x/100*w.width:x),E=w.y+(~(S[1]||S[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&o.smooth?(p=x-u,v=E-c,o.xOffset=d+(p*h+v*_)-p,o.yOffset=f+(p*m+v*g)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=E,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Ai]="0px 0px",a&&(Js(a,o,"xOrigin",u,x),Js(a,o,"yOrigin",c,E),Js(a,o,"xOffset",d,o.xOffset),Js(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},Rc=function(e,t){var i=e._gsap||new UE(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=Hi(e,Ai)||"0",c,d,f,h,m,_,g,p,v,S,x,E,w,T,y,b,C,D,L,$,j,k,q,F,N,W,R,ee,oe,We,Oe,ke;return c=d=f=_=g=p=v=S=x=0,h=m=1,i.svg=!!(e.getCTM&&KE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),r.scale=r.rotate=r.translate="none"),T=B0(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Jg(e,F||u,!!F||i.originIsAbsolute,i.smooth!==!1,T)),E=i.xOrigin||0,w=i.yOrigin||0,T!==Cc&&(D=T[0],L=T[1],$=T[2],j=T[3],c=k=T[4],d=q=T[5],T.length===6?(h=Math.sqrt(D*D+L*L),m=Math.sqrt(j*j+$*$),_=D||L?Go(L,D)*Na:0,v=$||j?Go($,j)*Na+_:0,v&&(m*=Math.abs(Math.cos(v*Ml))),i.svg&&(c-=E-(E*D+w*$),d-=w-(E*L+w*j))):(ke=T[6],We=T[7],R=T[8],ee=T[9],oe=T[10],Oe=T[11],c=T[12],d=T[13],f=T[14],y=Go(ke,oe),g=y*Na,y&&(b=Math.cos(-y),C=Math.sin(-y),F=k*b+R*C,N=q*b+ee*C,W=ke*b+oe*C,R=k*-C+R*b,ee=q*-C+ee*b,oe=ke*-C+oe*b,Oe=We*-C+Oe*b,k=F,q=N,ke=W),y=Go(-$,oe),p=y*Na,y&&(b=Math.cos(-y),C=Math.sin(-y),F=D*b-R*C,N=L*b-ee*C,W=$*b-oe*C,Oe=j*C+Oe*b,D=F,L=N,$=W),y=Go(L,D),_=y*Na,y&&(b=Math.cos(y),C=Math.sin(y),F=D*b+L*C,N=k*b+q*C,L=L*b-D*C,q=q*b-k*C,D=F,k=N),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),h=sn(Math.sqrt(D*D+L*L+$*$)),m=sn(Math.sqrt(q*q+ke*ke)),y=Go(k,q),v=Math.abs(y)>2e-4?y*Na:0,x=Oe?1/(Oe<0?-Oe:Oe):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!QE(Hi(e,Xt)),F&&e.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=sn(h),i.scaleY=sn(m),i.rotation=sn(_)+o,i.rotationX=sn(g)+o,i.rotationY=sn(p)+o,i.skewX=v+o,i.skewY=S+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Ai]=sh(u)),i.xOffset=i.yOffset=0,i.force3D=Xi.force3D,i.renderTransform=i.svg?TN:qE?JE:EN,i.uncache=0,i},sh=function(e){return(e=e.split(" "))[0]+" "+e[1]},qp=function(e,t,i){var r=Yn(t);return sn(parseFloat(t)+parseFloat(va(e,"x",i+"px",r)))+r},EN=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,JE(e,t)},Ca="0deg",mu="0px",Ra=") ",JE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,m=i.scaleX,_=i.scaleY,g=i.transformPerspective,p=i.force3D,v=i.target,S=i.zOrigin,x="",E=p==="auto"&&e&&e!==1||p===!0;if(S&&(d!==Ca||c!==Ca)){var w=parseFloat(c)*Ml,T=Math.sin(w),y=Math.cos(w),b;w=parseFloat(d)*Ml,b=Math.cos(w),a=qp(v,a,T*b*-S),o=qp(v,o,-Math.sin(w)*-S),l=qp(v,l,y*b*-S+S)}g!==mu&&(x+="perspective("+g+Ra),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(E||a!==mu||o!==mu||l!==mu)&&(x+=l!==mu||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ra),u!==Ca&&(x+="rotate("+u+Ra),c!==Ca&&(x+="rotateY("+c+Ra),d!==Ca&&(x+="rotateX("+d+Ra),(f!==Ca||h!==Ca)&&(x+="skew("+f+", "+h+Ra),(m!==1||_!==1)&&(x+="scale("+m+", "+_+Ra),v.style[Xt]=x||"translate(0, 0)"},TN=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,m=i.xOrigin,_=i.yOrigin,g=i.xOffset,p=i.yOffset,v=i.forceCSS,S=parseFloat(a),x=parseFloat(o),E,w,T,y,b;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ml,u*=Ml,E=Math.cos(l)*d,w=Math.sin(l)*d,T=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=Ml,b=Math.tan(u-c),b=Math.sqrt(1+b*b),T*=b,y*=b,c&&(b=Math.tan(c),b=Math.sqrt(1+b*b),E*=b,w*=b)),E=sn(E),w=sn(w),T=sn(T),y=sn(y)):(E=d,y=f,w=T=0),(S&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=va(h,"x",a,"px"),x=va(h,"y",o,"px")),(m||_||g||p)&&(S=sn(S+m-(m*E+_*T)+g),x=sn(x+_-(m*w+_*y)+p)),(r||s)&&(b=h.getBBox(),S=sn(S+r/100*b.width),x=sn(x+s/100*b.height)),b="matrix("+E+","+w+","+T+","+y+","+S+","+x+")",h.setAttribute("transform",b),v&&(h.style[Xt]=b)},wN=function(e,t,i,r,s){var a=360,o=Cn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Na:1),u=l-r,c=r+u+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*by)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*by)%a-~~(u/a)*a)),e._pt=f=new bi(e._pt,t,i,r,u,oN),f.e=c,f.u="deg",e._props.push(i),f},Ny=function(e,t){for(var i in t)e[i]=t[i];return e},bN=function(e,t,i){var r=Ny({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,d,f,h,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[Xt]=t,o=Rc(i,1),_a(i,Xt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Xt],a[Xt]=t,o=Rc(i,1),a[Xt]=u);for(l in As)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(h=Yn(u),m=Yn(c),d=h!==m?va(i,l,u,m):parseFloat(u),f=parseFloat(c),e._pt=new bi(e._pt,o,l,d,f-d,Kg),e._pt.u=m||0,e._props.push(l));Ny(o,r)};wi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});rh[e>1?"border"+n:n]=function(o,l,u,c,d){var f,h;if(arguments.length<4)return f=a.map(function(m){return ls(o,m,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},a.forEach(function(m,_){return h[m]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,h,d)}});var eT={name:"css",register:Qg,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,u,c,d,f,h,m,_,g,p,v,S,x,E,w,T,y,b;O0||Qg(),this.styles=this.styles||$E(e),y=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Fi[_]&&FE(_,t,i,r,e,s)))){if(h=typeof c,m=rh[_],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=wc(c)),m)m(this,e,_,c,i)&&(T=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",fa.lastIndex=0,fa.test(u)||(g=Yn(u),p=Yn(c),p?g!==p&&(u=va(e,_,u,p)+p):g&&(c+=g)),this.add(o,"setProperty",u,c,r,s,0,0,_),a.push(_),y.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Cn(u)&&~u.indexOf("random(")&&(u=wc(u)),Yn(u+"")||u==="auto"||(u+=Xi.units[_]||Yn(ls(e,_))||""),(u+"").charAt(1)==="="&&(u=ls(e,_))):u=ls(e,_),f=parseFloat(u),v=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),_ in Gr&&(_==="autoAlpha"&&(f===1&&ls(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,o.visibility),Js(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Gr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in As,S){if(this.styles.save(_),b=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Hi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=c,c=Hi(e,"perspective"),C?e.style.perspective=C:_a(e,"perspective")}d=parseFloat(c)}if(x||(E=e._gsap,E.renderTransform&&!t.parseTransform||Rc(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new bi(this._pt,o,Xt,0,1,E.renderTransform,E,0,-1),x.dep=1),_==="scale")this._pt=new bi(this._pt,E,"scaleY",E.scaleY,(v?yl(E.scaleY,v+d):d)-E.scaleY||0,Kg),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(Ai,0,o[Ai]),c=SN(c),E.svg?Jg(e,c,0,w,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==E.zOrigin&&Js(this,E,"zOrigin",E.zOrigin,p),Js(this,o,_,sh(u),sh(c)));continue}else if(_==="svgOrigin"){Jg(e,c,1,w,0,this);continue}else if(_ in ZE){wN(this,E,_,f,v?yl(f,v+c):c);continue}else if(_==="smoothOrigin"){Js(this,E,"smooth",E.smooth,c);continue}else if(_==="force3D"){E[_]=c;continue}else if(_==="transform"){bN(this,c,e);continue}}else _ in o||(_=Hl(_)||_);if(S||(d||d===0)&&(f||f===0)&&!aN.test(c)&&_ in o)g=(u+"").substr((f+"").length),d||(d=0),p=Yn(c)||(_ in Xi.units?Xi.units[_]:g),g!==p&&(f=va(e,_,u,p)),this._pt=new bi(this._pt,S?E:o,_,f,(v?yl(f,v+d):d)-f,!S&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?cN:Kg),this._pt.u=p||0,S&&b!==c?(this._pt.b=u,this._pt.e=b,this._pt.r=uN):g!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=lN);else if(_ in o)yN.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){A0(_,c);continue}S||(_ in o?y.push(_,0,o[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,u||e[_])),a.push(_)}}T&&HE(this)},render:function(e,t){if(t.tween._time||!k0())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ls,aliases:Gr,getSetter:function(e,t,i){var r=Gr[t];return r&&r.indexOf(",")<0&&(t=r),t in As&&t!==Ai&&(e._gsap.x||ls(e,"x"))?i&&wy===i?t==="scale"?pN:hN:(wy=i||{})&&(t==="scale"?mN:gN):e.style&&!T0(e.style[t])?fN:~t.indexOf("-")?dN:U0(e,t)},core:{_removeProperty:_a,_getMatrix:B0}};Ci.utils.checkPrefix=Hl;Ci.core.getStyleSaver=$E;(function(n,e,t,i){var r=wi(n+","+e+","+t,function(s){As[s]=1});wi(e,function(s){Xi.units[s]="deg",ZE[s]=1}),Gr[r[13]]=n+","+e,wi(i,function(s){var a=s.split(":");Gr[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Xi.units[n]="px"});Ci.registerPlugin(eT);var Xu=Ci.registerPlugin(eT)||Ci;Xu.core.Tween;function AN(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function CN(n,e,t){return e&&AN(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ln,pd,zi,ea,ta,El,tT,Ia,Tl,nT,gs,yr,iT,rT=function(){return Ln||typeof window<"u"&&(Ln=window.gsap)&&Ln.registerPlugin&&Ln},sT=1,cl=[],ot=[],jr=[],Yu=Date.now,e_=function(e,t){return t},RN=function(){var e=Tl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ot),r.push.apply(r,jr),ot=i,jr=r,e_=function(a,o){return t[a](o)}},da=function(e,t){return~jr.indexOf(e)&&jr[jr.indexOf(e)+1][t]},$u=function(e){return!!~nT.indexOf(e)},ni=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},ti=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},If="scrollLeft",Uf="scrollTop",t_=function(){return gs&&gs.isPressed||ot.cache++},ah=function(e,t){var i=function r(s){if(s||s===0){sT&&(zi.history.scrollRestoration="manual");var a=gs&&gs.isPressed;s=r.v=Math.round(s)||(gs&&gs.iOS?1:0),e(s),r.cacheID=ot.cache,a&&e_("ss",s)}else(t||ot.cache!==r.cacheID||e_("ref"))&&(r.cacheID=ot.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},li={s:If,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ah(function(n){return arguments.length?zi.scrollTo(n,_n.sc()):zi.pageXOffset||ea[If]||ta[If]||El[If]||0})},_n={s:Uf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:li,sc:ah(function(n){return arguments.length?zi.scrollTo(li.sc(),n):zi.pageYOffset||ea[Uf]||ta[Uf]||El[Uf]||0})},hi=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ln.utils.toArray)(e)[0]||(typeof e=="string"&&Ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},PN=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},xa=function(e,t){var i=t.s,r=t.sc;$u(e)&&(e=ea.scrollingElement||ta);var s=ot.indexOf(e),a=r===_n.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+a]||ni(e,"scroll",t_);var o=ot[s+a],l=o||(ot[s+a]=ah(da(e,i),!0)||($u(e)?r:ah(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,o||(l.smooth=Ln.getProperty(e,"scrollBehavior")==="smooth"),l},n_=function(e,t,i){var r=e,s=e,a=Yu(),o=a,l=t||50,u=Math.max(500,l*3),c=function(m,_){var g=Yu();_||g-a>l?(s=r,r=m,o=a,a=g):i?r+=m:r=s+(m-s)/(g-o)*(a-o)},d=function(){s=r=i?0:r,o=a=0},f=function(m){var _=o,g=s,p=Yu();return(m||m===0)&&m!==r&&c(m),a===o||p-o>u?0:(r+(i?g:-g))/((i?p:a)-_)*1e3};return{update:c,reset:d,getVelocity:f}},gu=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Iy=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},aT=function(){Tl=Ln.core.globals().ScrollTrigger,Tl&&Tl.core&&RN()},oT=function(e){return Ln=e||rT(),!pd&&Ln&&typeof document<"u"&&document.body&&(zi=window,ea=document,ta=ea.documentElement,El=ea.body,nT=[zi,ea,ta,El],Ln.utils.clamp,iT=Ln.core.context||function(){},Ia="onpointerenter"in El?"pointer":"mouse",tT=on.isTouch=zi.matchMedia&&zi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yr=on.eventTypes=("ontouchstart"in ta?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ta?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return sT=0},500),pd=1),Tl||aT(),pd};li.op=_n;ot.cache=0;var on=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){pd||oT(Ln)||console.warn("Please gsap.registerPlugin(Observer)"),Tl||aT();var r=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,m=i.wheelSpeed,_=i.event,g=i.onDragStart,p=i.onDragEnd,v=i.onDrag,S=i.onPress,x=i.onRelease,E=i.onRight,w=i.onLeft,T=i.onUp,y=i.onDown,b=i.onChangeX,C=i.onChangeY,D=i.onChange,L=i.onToggleX,$=i.onToggleY,j=i.onHover,k=i.onHoverEnd,q=i.onMove,F=i.ignoreCheck,N=i.isNormalizer,W=i.onGestureStart,R=i.onGestureEnd,ee=i.onWheel,oe=i.onEnable,We=i.onDisable,Oe=i.onClick,ke=i.scrollSpeed,V=i.capture,re=i.allowClicks,ie=i.lockAxis,be=i.onLockAxis;this.target=o=hi(o)||ta,this.vars=i,h&&(h=Ln.utils.toArray(h)),r=r||1e-9,s=s||0,m=m||1,ke=ke||1,a=a||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(zi.getComputedStyle(El).lineHeight)||22);var De,ye,qe,Se,Be,Ke,je,K=this,mt=0,Tt=0,Lt=i.passive||!c&&i.passive!==!1,Ze=xa(o,li),vt=xa(o,_n),O=Ze(),qt=vt(),$e=~a.indexOf("touch")&&!~a.indexOf("pointer")&&yr[0]==="pointerdown",P=$u(o),M=o.ownerDocument||ea,B=[0,0,0],X=[0,0,0],Q=0,he=function(){return Q=Yu()},ce=function(ae,He){return(K.event=ae)&&h&&PN(ae.target,h)||He&&$e&&ae.pointerType!=="touch"||F&&F(ae,He)},J=function(){K._vx.reset(),K._vy.reset(),ye.pause(),d&&d(K)},te=function(){var ae=K.deltaX=Iy(B),He=K.deltaY=Iy(X),ue=Math.abs(ae)>=r,Ge=Math.abs(He)>=r;D&&(ue||Ge)&&D(K,ae,He,B,X),ue&&(E&&K.deltaX>0&&E(K),w&&K.deltaX<0&&w(K),b&&b(K),L&&K.deltaX<0!=mt<0&&L(K),mt=K.deltaX,B[0]=B[1]=B[2]=0),Ge&&(y&&K.deltaY>0&&y(K),T&&K.deltaY<0&&T(K),C&&C(K),$&&K.deltaY<0!=Tt<0&&$(K),Tt=K.deltaY,X[0]=X[1]=X[2]=0),(Se||qe)&&(q&&q(K),qe&&(g&&qe===1&&g(K),v&&v(K),qe=0),Se=!1),Ke&&!(Ke=!1)&&be&&be(K),Be&&(ee(K),Be=!1),De=0},ge=function(ae,He,ue){B[ue]+=ae,X[ue]+=He,K._vx.update(ae),K._vy.update(He),u?De||(De=requestAnimationFrame(te)):te()},Pe=function(ae,He){ie&&!je&&(K.axis=je=Math.abs(ae)>Math.abs(He)?"x":"y",Ke=!0),je!=="y"&&(B[2]+=ae,K._vx.update(ae,!0)),je!=="x"&&(X[2]+=He,K._vy.update(He,!0)),u?De||(De=requestAnimationFrame(te)):te()},_e=function(ae){if(!ce(ae,1)){ae=gu(ae,c);var He=ae.clientX,ue=ae.clientY,Ge=He-K.x,Le=ue-K.y,Qe=K.isDragging;K.x=He,K.y=ue,(Qe||(Ge||Le)&&(Math.abs(K.startX-He)>=s||Math.abs(K.startY-ue)>=s))&&(qe||(qe=Qe?2:1),Qe||(K.isDragging=!0),Pe(Ge,Le))}},me=K.onPress=function(le){ce(le,1)||le&&le.button||(K.axis=je=null,ye.pause(),K.isPressed=!0,le=gu(le),mt=Tt=0,K.startX=K.x=le.clientX,K.startY=K.y=le.clientY,K._vx.reset(),K._vy.reset(),ni(N?o:M,yr[1],_e,Lt,!0),K.deltaX=K.deltaY=0,S&&S(K))},de=K.onRelease=function(le){if(!ce(le,1)){ti(N?o:M,yr[1],_e,!0);var ae=!isNaN(K.y-K.startY),He=K.isDragging,ue=He&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),Ge=gu(le);!ue&&ae&&(K._vx.reset(),K._vy.reset(),c&&re&&Ln.delayedCall(.08,function(){if(Yu()-Q>300&&!le.defaultPrevented){if(le.target.click)le.target.click();else if(M.createEvent){var Le=M.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,zi,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),le.target.dispatchEvent(Le)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,d&&He&&!N&&ye.restart(!0),qe&&te(),p&&He&&p(K),x&&x(K,ue)}},Ue=function(ae){return ae.touches&&ae.touches.length>1&&(K.isGesturing=!0)&&W(ae,K.isDragging)},Ve=function(){return(K.isGesturing=!1)||R(K)},U=function(ae){if(!ce(ae)){var He=Ze(),ue=vt();ge((He-O)*ke,(ue-qt)*ke,1),O=He,qt=ue,d&&ye.restart(!0)}},pe=function(ae){if(!ce(ae)){ae=gu(ae,c),ee&&(Be=!0);var He=(ae.deltaMode===1?l:ae.deltaMode===2?zi.innerHeight:1)*m;ge(ae.deltaX*He,ae.deltaY*He,0),d&&!N&&ye.restart(!0)}},ne=function(ae){if(!ce(ae)){var He=ae.clientX,ue=ae.clientY,Ge=He-K.x,Le=ue-K.y;K.x=He,K.y=ue,Se=!0,d&&ye.restart(!0),(Ge||Le)&&Pe(Ge,Le)}},ve=function(ae){K.event=ae,j(K)},xe=function(ae){K.event=ae,k(K)},se=function(ae){return ce(ae)||gu(ae,c)&&Oe(K)};ye=K._dc=Ln.delayedCall(f||.25,J).pause(),K.deltaX=K.deltaY=0,K._vx=n_(0,50,!0),K._vy=n_(0,50,!0),K.scrollX=Ze,K.scrollY=vt,K.isDragging=K.isGesturing=K.isPressed=!1,iT(this),K.enable=function(le){return K.isEnabled||(ni(P?M:o,"scroll",t_),a.indexOf("scroll")>=0&&ni(P?M:o,"scroll",U,Lt,V),a.indexOf("wheel")>=0&&ni(o,"wheel",pe,Lt,V),(a.indexOf("touch")>=0&&tT||a.indexOf("pointer")>=0)&&(ni(o,yr[0],me,Lt,V),ni(M,yr[2],de),ni(M,yr[3],de),re&&ni(o,"click",he,!0,!0),Oe&&ni(o,"click",se),W&&ni(M,"gesturestart",Ue),R&&ni(M,"gestureend",Ve),j&&ni(o,Ia+"enter",ve),k&&ni(o,Ia+"leave",xe),q&&ni(o,Ia+"move",ne)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=Se=qe=!1,K._vx.reset(),K._vy.reset(),O=Ze(),qt=vt(),le&&le.type&&me(le),oe&&oe(K)),K},K.disable=function(){K.isEnabled&&(cl.filter(function(le){return le!==K&&$u(le.target)}).length||ti(P?M:o,"scroll",t_),K.isPressed&&(K._vx.reset(),K._vy.reset(),ti(N?o:M,yr[1],_e,!0)),ti(P?M:o,"scroll",U,V),ti(o,"wheel",pe,V),ti(o,yr[0],me,V),ti(M,yr[2],de),ti(M,yr[3],de),ti(o,"click",he,!0),ti(o,"click",se),ti(M,"gesturestart",Ue),ti(M,"gestureend",Ve),ti(o,Ia+"enter",ve),ti(o,Ia+"leave",xe),ti(o,Ia+"move",ne),K.isEnabled=K.isPressed=K.isDragging=!1,We&&We(K))},K.kill=K.revert=function(){K.disable();var le=cl.indexOf(K);le>=0&&cl.splice(le,1),gs===K&&(gs=0)},cl.push(K),N&&$u(o)&&(gs=K),K.enable(_)},CN(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();on.version="3.15.0";on.create=function(n){return new on(n)};on.register=oT;on.getAll=function(){return cl.slice()};on.getById=function(n){return cl.filter(function(e){return e.vars.id===n})[0]};rT()&&Ln.registerPlugin(on);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Re,qo,at,yt,Oi,xt,V0,oh,Pc,qu,bu,Ff,Gn,Uh,i_,ai,Uy,Fy,jo,lT,jp,uT,ri,r_,cT,fT,Vs,s_,H0,wl,G0,ju,a_,Kp,Of=1,Wn=Date.now,Zp=Wn(),hr=0,Au=0,Oy=function(e,t,i){var r=Ui(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},ky=function(e,t){return t&&(!Ui(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},DN=function n(){return Au&&requestAnimationFrame(n)},zy=function(){return Uh=1},By=function(){return Uh=0},Or=function(e){return e},Cu=function(e){return Math.round(e*1e5)/1e5||0},dT=function(){return typeof window<"u"},hT=function(){return Re||dT()&&(Re=window.gsap)&&Re.registerPlugin&&Re},fo=function(e){return!!~V0.indexOf(e)},pT=function(e){return(e==="Height"?G0:at["inner"+e])||Oi["client"+e]||xt["client"+e]},mT=function(e){return da(e,"getBoundingClientRect")||(fo(e)?function(){return xd.width=at.innerWidth,xd.height=G0,xd}:function(){return fs(e)})},LN=function(e,t,i){var r=i.d,s=i.d2,a=i.a;return(a=da(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?pT(s):e["client"+s])||0}},NN=function(e,t){return!t||~jr.indexOf(e)?mT(e):function(){return xd}},Wr=function(e,t){var i=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(i="scroll"+r)&&(a=da(e,i))?a()-mT(e)()[s]:fo(e)?(Oi[i]||xt[i])-pT(r):e[i]-e["offset"+r])},kf=function(e,t){for(var i=0;i<jo.length;i+=3)(!t||~t.indexOf(jo[i+1]))&&e(jo[i],jo[i+1],jo[i+2])},Ui=function(e){return typeof e=="string"},$n=function(e){return typeof e=="function"},Ru=function(e){return typeof e=="number"},Ua=function(e){return typeof e=="object"},_u=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Wo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Xo=Math.abs,gT="left",_T="top",W0="right",X0="bottom",eo="width",to="height",Ku="Right",Zu="Left",Qu="Top",Ju="Bottom",fn="padding",sr="margin",Gl="Width",Y0="Height",mn="px",ar=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},IN=function(e){var t=ar(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Vy=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},fs=function(e,t){var i=t&&ar(e)[i_]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},lh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},vT=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},UN=function(e){return function(t){return Re.utils.snap(vT(e),t)}},$0=function(e){var t=Re.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<i.length;o++)if(i[o]>=r)return i[o];return i[o-1]}else for(o=i.length,r+=a;o--;)if(i[o]<=r)return i[o];return i[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},FN=function(e){return function(t,i){return $0(vT(e))(t,i.direction)}},zf=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},wn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Tn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Bf=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Hy={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Vf={toggleActions:"play",anticipatePin:0},uh={top:0,left:0,center:.5,bottom:1,right:1},md=function(e,t){if(Ui(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in uh?uh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Hf=function(e,t,i,r,s,a,o,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,m=yt.createElement("div"),_=fo(i)||da(i,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?xt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,S=v?u:c,x="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(x+=(r===_n?W0:X0)+":"+(a+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=x,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+r.op.d2],gd(m,0,r,v),m},gd=function(e,t,i,r){var s={display:"block"},a=i[r?"os2":"p2"],o=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+a+Gl]=1,s["border"+o+Gl]=0,s[i.p]=t+"px",Re.set(e,s)},rt=[],o_={},Dc,Gy=function(){return Wn()-hr>34&&(Dc||(Dc=requestAnimationFrame(ys)))},Yo=function(){(!ri||!ri.isPressed||ri.startX>xt.clientWidth)&&(ot.cache++,ri?Dc||(Dc=requestAnimationFrame(ys)):ys(),hr||po("scrollStart"),hr=Wn())},Qp=function(){fT=at.innerWidth,cT=at.innerHeight},Pu=function(e){ot.cache++,(e===!0||!Gn&&!uT&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!r_||fT!==at.innerWidth||Math.abs(at.innerHeight-cT)>at.innerHeight*.25))&&oh.restart(!0)},ho={},ON=[],xT=function n(){return Tn(lt,"scrollEnd",n)||Ya(!0)},po=function(e){return ho[e]&&ho[e].map(function(t){return t()})||ON},Ni=[],yT=function(e){for(var t=0;t<Ni.length;t+=5)(!e||Ni[t+4]&&Ni[t+4].query===e)&&(Ni[t].style.cssText=Ni[t+1],Ni[t].getBBox&&Ni[t].setAttribute("transform",Ni[t+2]||""),Ni[t+3].uncache=1)},ST=function(){return ot.forEach(function(e){return $n(e)&&++e.cacheID&&(e.rec=e())})},q0=function(e,t){var i;for(ai=0;ai<rt.length;ai++)i=rt[ai],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));ju=!0,t&&yT(t),t||po("revert")},MT=function(e,t){ot.cache++,(t||!oi)&&ot.forEach(function(i){return $n(i)&&i.cacheID++&&(i.rec=0)}),Ui(e)&&(at.history.scrollRestoration=H0=e)},oi,no=0,Wy,kN=function(){if(Wy!==no){var e=Wy=no;requestAnimationFrame(function(){return e===no&&Ya(!0)})}},ET=function(){xt.appendChild(wl),G0=!ri&&wl.offsetHeight||at.innerHeight,xt.removeChild(wl)},Xy=function(e){return Pc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ya=function(e,t){if(Oi=yt.documentElement,xt=yt.body,V0=[at,yt,Oi,xt],hr&&!e&&!ju){wn(lt,"scrollEnd",xT);return}ET(),oi=lt.isRefreshing=!0,ju||ST();var i=po("refreshInit");lT&&lt.sort(),t||q0(),ot.forEach(function(r){$n(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),rt.slice(0).forEach(function(r){return r.refresh()}),ju=!1,rt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),a_=1,Xy(!0),rt.forEach(function(r){var s=Wr(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Xy(!1),a_=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ot.forEach(function(r){$n(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),MT(H0,1),oh.pause(),no++,oi=2,ys(2),rt.forEach(function(r){return $n(r.vars.onRefresh)&&r.vars.onRefresh(r)}),oi=lt.isRefreshing=!1,po("refresh")},l_=0,_d=1,ec,ys=function(e){if(e===2||!oi&&!ju){lt.isUpdating=!0,ec&&ec.update(0);var t=rt.length,i=Wn(),r=i-Zp>=50,s=t&&rt[0].scroll();if(_d=l_>s?-1:1,oi||(l_=s),r&&(hr&&!Uh&&i-hr>200&&(hr=0,po("scrollEnd")),bu=Zp,Zp=i),_d<0){for(ai=t;ai-- >0;)rt[ai]&&rt[ai].update(0,r);_d=1}else for(ai=0;ai<t;ai++)rt[ai]&&rt[ai].update(0,r);lt.isUpdating=!1}Dc=0},u_=[gT,_T,X0,W0,sr+Ju,sr+Ku,sr+Qu,sr+Zu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vd=u_.concat([eo,to,"boxSizing","max"+Gl,"max"+Y0,"position",sr,fn,fn+Qu,fn+Ku,fn+Ju,fn+Zu]),zN=function(e,t,i){bl(i);var r=e._gsap;if(r.spacerIsNative)bl(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Jp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=u_.length,a=t.style,o=e.style,l;s--;)l=u_[s],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[X0]=o[W0]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[eo]=lh(e,li)+mn,a[to]=lh(e,_n)+mn,a[fn]=o[sr]=o[_T]=o[gT]="0",bl(r),o[eo]=o["max"+Gl]=i[eo],o[to]=o["max"+Y0]=i[to],o[fn]=i[fn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},BN=/([A-Z])/g,bl=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,a;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(BN,"-$1").toLowerCase())}},Gf=function(e){for(var t=vd.length,i=e.style,r=[],s=0;s<t;s++)r.push(vd[s],i[vd[s]]);return r.t=e,r},VN=function(e,t,i){for(var r=[],s=e.length,a=i?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},xd={left:0,top:0},Yy=function(e,t,i,r,s,a,o,l,u,c,d,f,h,m){$n(e)&&(e=e(l)),Ui(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?md("0"+e.substr(3),i):0));var _=h?h.time():0,g,p,v;if(h&&h.seek(0),isNaN(e)||(e=+e),Ru(e))h&&(e=Re.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&gd(o,i,r,!0);else{$n(t)&&(t=t(l));var S=(e||"0").split(" "),x,E,w,T;v=hi(t,l)||xt,x=fs(v)||{},(!x||!x.left&&!x.top)&&ar(v).display==="none"&&(T=v.style.display,v.style.display="block",x=fs(v),T?v.style.display=T:v.style.removeProperty("display")),E=md(S[0],x[r.d]),w=md(S[1]||"0",i),e=x[r.p]-u[r.p]-c+E+s-w,o&&gd(o,w,r,i-w<20||o._isStart&&w>20),i-=i-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var y=e+i,b=a._isStart;g="scroll"+r.d2,gd(a,y,r,b&&y>20||!b&&(d?Math.max(xt[g],Oi[g]):a.parentNode[g])<=y+1),d&&(u=fs(o),d&&(a.style[r.op.p]=u[r.op.p]-r.op.m-a._offset+mn))}return h&&v&&(g=fs(v),h.seek(f),p=fs(v),h._caScrollDist=g[r.p]-p[r.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},HN=/(webkit|moz|length|cssText|inset)/i,$y=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=ar(e);for(a in o)!+a&&!HN.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=r}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},TT=function(e,t,i){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=r,r=Math.round(a),r}},Wf=function(e,t,i){var r={};r[t.p]="+="+i,Re.set(e,r)},qy=function(e,t){var i=xa(e,t),r="_scroll"+t.p2,s=function a(o,l,u,c,d){var f=a.tween,h=l.onComplete,m={};u=u||i();var _=TT(i,u,function(){f.kill(),a.tween=0});return d=c&&d||0,c=c||o-u,f&&f.kill(),l[r]=o,l.inherit=!1,l.modifiers=m,m[r]=function(){return _(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){ot.cache++,a.tween&&ys()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=Re.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},wn(e,"wheel",i.wheelHandler),lt.isTouch&&wn(e,"touchmove",i.wheelHandler),s},lt=function(){function n(t,i){qo||n.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),s_(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Au){this.update=this.refresh=this.kill=Or;return}i=Vy(Ui(i)||Ru(i)||i.nodeType?{trigger:i}:i,Vf);var s=i,a=s.onUpdate,o=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,S=s.once,x=s.snap,E=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,y=s.fastScrollEnd,b=s.preventOverlaps,C=i.horizontal||i.containerAnimation&&i.horizontal!==!1?li:_n,D=!d&&d!==0,L=hi(i.scroller||at),$=Re.core.getCache(L),j=fo(L),k=("pinType"in i?i.pinType:da(L,"pinType")||j&&"fixed")==="fixed",q=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],F=D&&i.toggleActions.split(" "),N="markers"in i?i.markers:Vf.markers,W=j?0:parseFloat(ar(L)["border"+C.p2+Gl])||0,R=this,ee=i.onRefreshInit&&function(){return i.onRefreshInit(R)},oe=LN(L,j,C),We=NN(L,j),Oe=0,ke=0,V=0,re=xa(L,C),ie,be,De,ye,qe,Se,Be,Ke,je,K,mt,Tt,Lt,Ze,vt,O,qt,$e,P,M,B,X,Q,he,ce,J,te,ge,Pe,_e,me,de,Ue,Ve,U,pe,ne,ve,xe;if(R._startClamp=R._endClamp=!1,R._dir=C,g*=45,R.scroller=L,R.scroll=T?T.time.bind(T):re,ye=re(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(lT=1,i.refreshPriority===-9999&&(ec=R)),$.tweenScroll=$.tweenScroll||{top:qy(L,_n),left:qy(L,li)},R.tweenTo=ie=$.tweenScroll[C.p],R.scrubDuration=function(ue){Ue=Ru(ue)&&ue,Ue?de?de.duration(ue):de=Re.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ue,paused:!0,onComplete:function(){return p&&p(R)}}):(de&&de.progress(1).kill(),de=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),_e=0,l||(l=r.vars.id)),x&&((!Ua(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in xt.style&&Re.set(j?[xt,Oi]:L,{scrollBehavior:"auto"}),ot.forEach(function(ue){return $n(ue)&&ue.target===(j?yt.scrollingElement||Oi:L)&&(ue.smooth=!1)}),De=$n(x.snapTo)?x.snapTo:x.snapTo==="labels"?UN(r):x.snapTo==="labelsDirectional"?FN(r):x.directional!==!1?function(ue,Ge){return $0(x.snapTo)(ue,Wn()-ke<500?0:Ge.direction)}:Re.utils.snap(x.snapTo),Ve=x.duration||{min:.1,max:2},Ve=Ua(Ve)?qu(Ve.min,Ve.max):qu(Ve,Ve),U=Re.delayedCall(x.delay||Ue/2||.1,function(){var ue=re(),Ge=Wn()-ke<500,Le=ie.tween;if((Ge||Math.abs(R.getVelocity())<10)&&!Le&&!Uh&&Oe!==ue){var Qe=(ue-Se)/Ze,ln=r&&!D?r.totalProgress():Qe,st=Ge?0:(ln-me)/(Wn()-bu)*1e3||0,Ft=Re.utils.clamp(-Qe,1-Qe,Xo(st/2)*st/.185),Sn=Qe+(x.inertia===!1?0:Ft),Ot,At,ft=x,Qn=ft.onStart,Nt=ft.onInterrupt,On=ft.onComplete;if(Ot=De(Sn,R),Ru(Ot)||(Ot=Sn),At=Math.max(0,Math.round(Se+Ot*Ze)),ue<=Be&&ue>=Se&&At!==ue){if(Le&&!Le._initted&&Le.data<=Xo(At-ue))return;x.inertia===!1&&(Ft=Ot-Qe),ie(At,{duration:Ve(Xo(Math.max(Xo(Sn-ln),Xo(Ot-ln))*.185/st/.05||0)),ease:x.ease||"power3",data:Xo(At-ue),onInterrupt:function(){return U.restart(!0)&&Nt&&Wo(R,Nt)},onComplete:function(){R.update(),Oe=re(),r&&!D&&(de?de.resetTo("totalProgress",Ot,r._tTime/r._tDur):r.progress(Ot)),_e=me=r&&!D?r.totalProgress():R.progress,v&&v(R),On&&Wo(R,On)}},ue,Ft*Ze,At-ue-Ft*Ze),Qn&&Wo(R,Qn,ie.tween)}}else R.isActive&&Oe!==ue&&U.restart(!0)}).pause()),l&&(o_[l]=R),f=R.trigger=hi(f||h!==!0&&h),xe=f&&f._gsap&&f._gsap.stRevert,xe&&(xe=xe(R)),h=h===!0?f:hi(h),Ui(o)&&(o={targets:f,className:o}),h&&(m===!1||m===sr||(m=!m&&h.parentNode&&h.parentNode.style&&ar(h.parentNode).display==="flex"?!1:fn),R.pin=h,be=Re.core.getCache(h),be.spacer?vt=be.pinState:(w&&(w=hi(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),be.spacerIsNative=!!w,w&&(be.spacerState=Gf(w))),be.spacer=$e=w||yt.createElement("div"),$e.classList.add("pin-spacer"),l&&$e.classList.add("pin-spacer-"+l),be.pinState=vt=Gf(h)),i.force3D!==!1&&Re.set(h,{force3D:!0}),R.spacer=$e=be.spacer,Pe=ar(h),he=Pe[m+C.os2],M=Re.getProperty(h),B=Re.quickSetter(h,C.a,mn),Jp(h,$e,Pe),qt=Gf(h)),N){Tt=Ua(N)?Vy(N,Hy):Hy,K=Hf("scroller-start",l,L,C,Tt,0),mt=Hf("scroller-end",l,L,C,Tt,0,K),P=K["offset"+C.op.d2];var se=hi(da(L,"content")||L);Ke=this.markerStart=Hf("start",l,se,C,Tt,P,0,T),je=this.markerEnd=Hf("end",l,se,C,Tt,P,0,T),T&&(ve=Re.quickSetter([Ke,je],C.a,mn)),!k&&!(jr.length&&da(L,"fixedMarkers")===!0)&&(IN(j?xt:L),Re.set([K,mt],{force3D:!0}),J=Re.quickSetter(K,C.a,mn),ge=Re.quickSetter(mt,C.a,mn))}if(T){var le=T.vars.onUpdate,ae=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){R.update(0,0,1),le&&le.apply(T,ae||[])})}if(R.previous=function(){return rt[rt.indexOf(R)-1]},R.next=function(){return rt[rt.indexOf(R)+1]},R.revert=function(ue,Ge){if(!Ge)return R.kill(!0);var Le=ue!==!1||!R.enabled,Qe=Gn;Le!==R.isReverted&&(Le&&(pe=Math.max(re(),R.scroll.rec||0),V=R.progress,ne=r&&r.progress()),Ke&&[Ke,je,K,mt].forEach(function(ln){return ln.style.display=Le?"none":"block"}),Le&&(Gn=R,R.update(Le)),h&&(!E||!R.isActive)&&(Le?zN(h,$e,vt):Jp(h,$e,ar(h),ce)),Le||R.update(Le),Gn=Qe,R.isReverted=Le)},R.refresh=function(ue,Ge,Le,Qe){if(!((Gn||!R.enabled)&&!Ge)){if(h&&ue&&hr){wn(n,"scrollEnd",xT);return}!oi&&ee&&ee(R),Gn=R,ie.tween&&!Le&&(ie.tween.kill(),ie.tween=0),de&&de.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ee){return Ee.vars.immediateRender&&Ee.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ln=oe(),st=We(),Ft=T?T.duration():Wr(L,C),Sn=Ze<=.01||!Ze,Ot=0,At=Qe||0,ft=Ua(Le)?Le.end:i.end,Qn=i.endTrigger||f,Nt=Ua(Le)?Le.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),On=R.pinnedContainer=i.pinnedContainer&&hi(i.pinnedContainer,R),Jn=f&&Math.max(0,rt.indexOf(R))||0,un=Jn,jt,pn,Pr,yo,Mn,tn,Qi,A,z,Z,H,Y,Me;for(N&&Ua(Le)&&(Y=Re.getProperty(K,C.p),Me=Re.getProperty(mt,C.p));un-- >0;)tn=rt[un],tn.end||tn.refresh(0,1)||(Gn=R),Qi=tn.pin,Qi&&(Qi===f||Qi===h||Qi===On)&&!tn.isReverted&&(Z||(Z=[]),Z.unshift(tn),tn.revert(!0,!0)),tn!==rt[un]&&(Jn--,un--);for($n(Nt)&&(Nt=Nt(R)),Nt=Oy(Nt,"start",R),Se=Yy(Nt,f,ln,C,re(),Ke,K,R,st,W,k,Ft,T,R._startClamp&&"_startClamp")||(h?-.001:0),$n(ft)&&(ft=ft(R)),Ui(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Ui(Nt)?Nt.split(" ")[0]:"")+ft:(Ot=md(ft.substr(2),ln),ft=Ui(Nt)?Nt:(T?Re.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Se):Se)+Ot,Qn=f)),ft=Oy(ft,"end",R),Be=Math.max(Se,Yy(ft||(Qn?"100% 0":Ft),Qn,ln,C,re()+Ot,je,mt,R,st,W,k,Ft,T,R._endClamp&&"_endClamp"))||-.001,Ot=0,un=Jn;un--;)tn=rt[un]||{},Qi=tn.pin,Qi&&tn.start-tn._pinPush<=Se&&!T&&tn.end>0&&(jt=tn.end-(R._startClamp?Math.max(0,tn.start):tn.start),(Qi===f&&tn.start-tn._pinPush<Se||Qi===On)&&isNaN(Nt)&&(Ot+=jt*(1-tn.progress)),Qi===h&&(At+=jt));if(Se+=Ot,Be+=Ot,R._startClamp&&(R._startClamp+=Ot),R._endClamp&&!oi&&(R._endClamp=Be||-.001,Be=Math.min(Be,Wr(L,C))),Ze=Be-Se||(Se-=.01)&&.001,Sn&&(V=Re.utils.clamp(0,1,Re.utils.normalize(Se,Be,pe))),R._pinPush=At,Ke&&Ot&&(jt={},jt[C.a]="+="+Ot,On&&(jt[C.p]="-="+re()),Re.set([Ke,je],jt)),h&&!(a_&&R.end>=Wr(L,C)))jt=ar(h),yo=C===_n,Pr=re(),X=parseFloat(M(C.a))+At,!Ft&&Be>1&&(H=(j?yt.scrollingElement||Oi:L).style,H={style:H,value:H["overflow"+C.a.toUpperCase()]},j&&ar(xt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(H.style["overflow"+C.a.toUpperCase()]="scroll")),Jp(h,$e,jt),qt=Gf(h),pn=fs(h,!0),A=k&&xa(L,yo?li:_n)(),m?(ce=[m+C.os2,Ze+At+mn],ce.t=$e,un=m===fn?lh(h,C)+Ze+At:0,un&&(ce.push(C.d,un+mn),$e.style.flexBasis!=="auto"&&($e.style.flexBasis=un+mn)),bl(ce),On&&rt.forEach(function(Ee){Ee.pin===On&&Ee.vars.pinSpacing!==!1&&(Ee._subPinOffset=!0)}),k&&re(pe)):(un=lh(h,C),un&&$e.style.flexBasis!=="auto"&&($e.style.flexBasis=un+mn)),k&&(Mn={top:pn.top+(yo?Pr-Se:A)+mn,left:pn.left+(yo?A:Pr-Se)+mn,boxSizing:"border-box",position:"fixed"},Mn[eo]=Mn["max"+Gl]=Math.ceil(pn.width)+mn,Mn[to]=Mn["max"+Y0]=Math.ceil(pn.height)+mn,Mn[sr]=Mn[sr+Qu]=Mn[sr+Ku]=Mn[sr+Ju]=Mn[sr+Zu]="0",Mn[fn]=jt[fn],Mn[fn+Qu]=jt[fn+Qu],Mn[fn+Ku]=jt[fn+Ku],Mn[fn+Ju]=jt[fn+Ju],Mn[fn+Zu]=jt[fn+Zu],O=VN(vt,Mn,E),oi&&re(0)),r?(z=r._initted,jp(1),r.render(r.duration(),!0,!0),Q=M(C.a)-X+Ze+At,te=Math.abs(Ze-Q)>1,k&&te&&O.splice(O.length-2,2),r.render(0,!0,!0),z||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),jp(0)):Q=Ze,H&&(H.value?H.style["overflow"+C.a.toUpperCase()]=H.value:H.style.removeProperty("overflow-"+C.a));else if(f&&re()&&!T)for(pn=f.parentNode;pn&&pn!==xt;)pn._pinOffset&&(Se-=pn._pinOffset,Be-=pn._pinOffset),pn=pn.parentNode;Z&&Z.forEach(function(Ee){return Ee.revert(!1,!0)}),R.start=Se,R.end=Be,ye=qe=oi?pe:re(),!T&&!oi&&(ye<pe&&re(pe),R.scroll.rec=0),R.revert(!1,!0),ke=Wn(),U&&(Oe=-1,U.restart(!0)),Gn=0,r&&D&&(r._initted||ne)&&r.progress()!==ne&&r.progress(ne||0,!0).render(r.time(),!0,!0),(Sn||V!==R.progress||T||_||r&&!r._initted)&&(r&&!D&&(r._initted||V||r.vars.immediateRender!==!1)&&r.totalProgress(T&&Se<-.001&&!V?Re.utils.normalize(Se,Be,0):V,!0),R.progress=Sn||(ye-Se)/Ze===V?0:V),h&&m&&($e._pinOffset=Math.round(R.progress*Q)),de&&de.invalidate(),isNaN(Y)||(Y-=Re.getProperty(K,C.p),Me-=Re.getProperty(mt,C.p),Wf(K,C,Y),Wf(Ke,C,Y-(Qe||0)),Wf(mt,C,Me),Wf(je,C,Me-(Qe||0))),Sn&&!oi&&R.update(),c&&!oi&&!Lt&&(Lt=!0,c(R),Lt=!1)}},R.getVelocity=function(){return(re()-qe)/(Wn()-bu)*1e3||0},R.endAnimation=function(){_u(R.callbackAnimation),r&&(de?de.progress(1):r.paused()?D||_u(r,R.direction<0,1):_u(r,r.reversed()))},R.labelToScroll=function(ue){return r&&r.labels&&(Se||R.refresh()||Se)+r.labels[ue]/r.duration()*Ze||0},R.getTrailing=function(ue){var Ge=rt.indexOf(R),Le=R.direction>0?rt.slice(0,Ge).reverse():rt.slice(Ge+1);return(Ui(ue)?Le.filter(function(Qe){return Qe.vars.preventOverlaps===ue}):Le).filter(function(Qe){return R.direction>0?Qe.end<=Se:Qe.start>=Be})},R.update=function(ue,Ge,Le){if(!(T&&!Le&&!ue)){var Qe=oi===!0?pe:R.scroll(),ln=ue?0:(Qe-Se)/Ze,st=ln<0?0:ln>1?1:ln||0,Ft=R.progress,Sn,Ot,At,ft,Qn,Nt,On,Jn;if(Ge&&(qe=ye,ye=T?re():Qe,x&&(me=_e,_e=r&&!D?r.totalProgress():st)),g&&h&&!Gn&&!Of&&hr&&(!st&&Se<Qe+(Qe-qe)/(Wn()-bu)*g?st=1e-4:st===1&&Be>Qe+(Qe-qe)/(Wn()-bu)*g&&(st=.9999)),st!==Ft&&R.enabled){if(Sn=R.isActive=!!st&&st<1,Ot=!!Ft&&Ft<1,Nt=Sn!==Ot,Qn=Nt||!!st!=!!Ft,R.direction=st>Ft?1:-1,R.progress=st,Qn&&!Gn&&(At=st&&!Ft?0:st===1?1:Ft===1?2:3,D&&(ft=!Nt&&F[At+1]!=="none"&&F[At+1]||F[At],Jn=r&&(ft==="complete"||ft==="reset"||ft in r))),b&&(Nt||Jn)&&(Jn||d||!r)&&($n(b)?b(R):R.getTrailing(b).forEach(function(Pr){return Pr.endAnimation()})),D||(de&&!Gn&&!Of?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",st,r._tTime/r._tDur):(de.vars.totalProgress=st,de.invalidate().restart())):r&&r.totalProgress(st,!!(Gn&&(ke||ue)))),h){if(ue&&m&&($e.style[m+C.os2]=he),!k)B(Cu(X+Q*st));else if(Qn){if(On=!ue&&st>Ft&&Be+1>Qe&&Qe+1>=Wr(L,C),E)if(!ue&&(Sn||On)){var un=fs(h,!0),jt=Qe-Se;$y(h,xt,un.top+(C===_n?jt:0)+mn,un.left+(C===_n?0:jt)+mn)}else $y(h,$e);bl(Sn||On?O:qt),te&&st<1&&Sn||B(X+(st===1&&!On?Q:0))}}x&&!ie.tween&&!Gn&&!Of&&U.restart(!0),o&&(Nt||S&&st&&(st<1||!Kp))&&Pc(o.targets).forEach(function(Pr){return Pr.classList[Sn||S?"add":"remove"](o.className)}),a&&!D&&!ue&&a(R),Qn&&!Gn?(D&&(Jn&&(ft==="complete"?r.pause().totalProgress(1):ft==="reset"?r.restart(!0).pause():ft==="restart"?r.restart(!0):r[ft]()),a&&a(R)),(Nt||!Kp)&&(u&&Nt&&Wo(R,u),q[At]&&Wo(R,q[At]),S&&(st===1?R.kill(!1,1):q[At]=0),Nt||(At=st===1?1:3,q[At]&&Wo(R,q[At]))),y&&!Sn&&Math.abs(R.getVelocity())>(Ru(y)?y:2500)&&(_u(R.callbackAnimation),de?de.progress(1):_u(r,ft==="reverse"?1:!st,1))):D&&a&&!Gn&&a(R)}if(ge){var pn=T?Qe/T.duration()*(T._caScrollDist||0):Qe;J(pn+(K._isFlipped?1:0)),ge(pn)}ve&&ve(-Qe/T.duration()*(T._caScrollDist||0))}},R.enable=function(ue,Ge){R.enabled||(R.enabled=!0,wn(L,"resize",Pu),j||wn(L,"scroll",Yo),ee&&wn(n,"refreshInit",ee),ue!==!1&&(R.progress=V=0,ye=qe=Oe=re()),Ge!==!1&&R.refresh())},R.getTween=function(ue){return ue&&ie?ie.tween:de},R.setPositions=function(ue,Ge,Le,Qe){if(T){var ln=T.scrollTrigger,st=T.duration(),Ft=ln.end-ln.start;ue=ln.start+Ft*ue/st,Ge=ln.start+Ft*Ge/st}R.refresh(!1,!1,{start:ky(ue,Le&&!!R._startClamp),end:ky(Ge,Le&&!!R._endClamp)},Qe),R.update()},R.adjustPinSpacing=function(ue){if(ce&&ue){var Ge=ce.indexOf(C.d)+1;ce[Ge]=parseFloat(ce[Ge])+ue+mn,ce[1]=parseFloat(ce[1])+ue+mn,bl(ce)}},R.disable=function(ue,Ge){if(ue!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Ge||de&&de.pause(),pe=0,be&&(be.uncache=1),ee&&Tn(n,"refreshInit",ee),U&&(U.pause(),ie.tween&&ie.tween.kill()&&(ie.tween=0)),!j)){for(var Le=rt.length;Le--;)if(rt[Le].scroller===L&&rt[Le]!==R)return;Tn(L,"resize",Pu),j||Tn(L,"scroll",Yo)}},R.kill=function(ue,Ge){R.disable(ue,Ge),de&&!Ge&&de.kill(),l&&delete o_[l];var Le=rt.indexOf(R);Le>=0&&rt.splice(Le,1),Le===ai&&_d>0&&ai--,Le=0,rt.forEach(function(Qe){return Qe.scroller===R.scroller&&(Le=1)}),Le||oi||(R.scroll.rec=0),r&&(r.scrollTrigger=null,ue&&r.revert({kill:!1}),Ge||r.kill()),Ke&&[Ke,je,K,mt].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),ec===R&&(ec=0),h&&(be&&(be.uncache=1),Le=0,rt.forEach(function(Qe){return Qe.pin===h&&Le++}),Le||(be.spacer=0)),i.onKill&&i.onKill(R)},rt.push(R),R.enable(!1,!1),xe&&xe(R),r&&r.add&&!Ze){var He=R.update;R.update=function(){R.update=He,ot.cache++,Se||Be||R.refresh()},Re.delayedCall(.01,R.update),Ze=.01,Se=Be=0}else R.refresh();h&&kN()},n.register=function(i){return qo||(Re=i||hT(),dT()&&window.document&&n.enable(),qo=Au),qo},n.defaults=function(i){if(i)for(var r in i)Vf[r]=i[r];return Vf},n.disable=function(i,r){Au=0,rt.forEach(function(a){return a[r?"kill":"disable"](i)}),Tn(at,"wheel",Yo),Tn(yt,"scroll",Yo),clearInterval(Ff),Tn(yt,"touchcancel",Or),Tn(xt,"touchstart",Or),zf(Tn,yt,"pointerdown,touchstart,mousedown",zy),zf(Tn,yt,"pointerup,touchend,mouseup",By),oh.kill(),kf(Tn);for(var s=0;s<ot.length;s+=3)Bf(Tn,ot[s],ot[s+1]),Bf(Tn,ot[s],ot[s+2])},n.enable=function(){if(at=window,yt=document,Oi=yt.documentElement,xt=yt.body,Re){if(Pc=Re.utils.toArray,qu=Re.utils.clamp,s_=Re.core.context||Or,jp=Re.core.suppressOverwrites||Or,H0=at.history.scrollRestoration||"auto",l_=at.pageYOffset||0,Re.core.globals("ScrollTrigger",n),xt){Au=1,wl=document.createElement("div"),wl.style.height="100vh",wl.style.position="absolute",ET(),DN(),on.register(Re),n.isTouch=on.isTouch,Vs=on.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),r_=on.isTouch===1,wn(at,"wheel",Yo),V0=[at,yt,Oi,xt],Re.matchMedia?(n.matchMedia=function(c){var d=Re.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Re.addEventListener("matchMediaInit",function(){ST(),q0()}),Re.addEventListener("matchMediaRevert",function(){return yT()}),Re.addEventListener("matchMedia",function(){Ya(0,1),po("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return Qp(),Qp})):console.warn("Requires GSAP 3.11.0 or later"),Qp(),wn(yt,"scroll",Yo);var i=xt.hasAttribute("style"),r=xt.style,s=r.borderTopStyle,a=Re.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=fs(xt),_n.m=Math.round(o.top+_n.sc())||0,li.m=Math.round(o.left+li.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(xt.setAttribute("style",""),xt.removeAttribute("style")),Ff=setInterval(Gy,250),Re.delayedCall(.5,function(){return Of=0}),wn(yt,"touchcancel",Or),wn(xt,"touchstart",Or),zf(wn,yt,"pointerdown,touchstart,mousedown",zy),zf(wn,yt,"pointerup,touchend,mouseup",By),i_=Re.utils.checkPrefix("transform"),vd.push(i_),qo=Wn(),oh=Re.delayedCall(.2,Ya).pause(),jo=[yt,"visibilitychange",function(){var c=at.innerWidth,d=at.innerHeight;yt.hidden?(Uy=c,Fy=d):(Uy!==c||Fy!==d)&&Pu()},yt,"DOMContentLoaded",Ya,at,"load",Ya,at,"resize",Pu],kf(wn),rt.forEach(function(c){return c.enable(0,1)}),l=0;l<ot.length;l+=3)Bf(Tn,ot[l],ot[l+1]),Bf(Tn,ot[l],ot[l+2])}else if(yt){var u=function c(){n.enable(),yt.removeEventListener("DOMContentLoaded",c)};yt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Kp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Ff)||(Ff=r)&&setInterval(Gy,r),"ignoreMobileResize"in i&&(r_=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(kf(Tn)||kf(wn,i.autoRefreshEvents||"none"),uT=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=hi(i),a=ot.indexOf(s),o=fo(s);~a&&ot.splice(a,o?6:2),r&&(o?jr.unshift(at,r,xt,r,Oi,r):jr.unshift(s,r))},n.clearMatchMedia=function(i){rt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var a=(Ui(i)?hi(i):i).getBoundingClientRect(),o=a[s?eo:to]*r||0;return s?a.right-o>0&&a.left+o<at.innerWidth:a.bottom-o>0&&a.top+o<at.innerHeight},n.positionInViewport=function(i,r,s){Ui(i)&&(i=hi(i));var a=i.getBoundingClientRect(),o=a[s?eo:to],l=r==null?o/2:r in uh?uh[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/at.innerWidth:(a.top+l)/at.innerHeight},n.killAll=function(i){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=ho.killAll||[];ho={},r.forEach(function(s){return s()})}},n}();lt.version="3.15.0";lt.saveStyles=function(n){return n?Pc(n).forEach(function(e){if(e&&e.style){var t=Ni.indexOf(e);t>=0&&Ni.splice(t,5),Ni.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),s_())}}):Ni};lt.revert=function(n,e){return q0(!n,e)};lt.create=function(n,e){return new lt(n,e)};lt.refresh=function(n){return n?Pu(!0):(qo||lt.register())&&Ya(!0)};lt.update=function(n){return++ot.cache&&ys(n===!0?2:0)};lt.clearScrollMemory=MT;lt.maxScroll=function(n,e){return Wr(n,e?li:_n)};lt.getScrollFunc=function(n,e){return xa(hi(n),e?li:_n)};lt.getById=function(n){return o_[n]};lt.getAll=function(){return rt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};lt.isScrolling=function(){return!!hr};lt.snapDirectional=$0;lt.addEventListener=function(n,e){var t=ho[n]||(ho[n]=[]);~t.indexOf(e)||t.push(e)};lt.removeEventListener=function(n,e){var t=ho[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};lt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,a=function(u,c){var d=[],f=[],h=Re.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(m){d.length||h.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&h.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&$n(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return $n(s)&&(s=s(),wn(lt,"refresh",function(){return s=e.batchMax()})),Pc(n).forEach(function(l){var u={};for(o in i)u[o]=i[o];u.trigger=l,t.push(lt.create(u))}),t};var jy=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},em=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(on.isTouch?" pinch-zoom":""):"none",e===Oi&&n(xt,t)},Xf={auto:1,scroll:1},GN=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Re.core.getCache(s),o=Wn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xf[(l=ar(s)).overflowY]||Xf[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!fo(s)&&(Xf[(l=ar(s)).overflowY]||Xf[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},wT=function(e,t,i,r){return on.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&GN,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&wn(yt,on.eventTypes[0],Zy,!1,!0)},onDisable:function(){return Tn(yt,on.eventTypes[0],Zy,!0)}})},WN=/(input|label|select|textarea)/i,Ky,Zy=function(e){var t=WN.test(e.target.tagName);(t||Ky)&&(e._gsapAllow=!0,Ky=t)},XN=function(e){Ua(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,u=hi(e.target)||Oi,c=Re.core.globals().ScrollSmoother,d=c&&c.get(),f=Vs&&(e.content&&hi(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=xa(u,_n),m=xa(u,li),_=1,g=(on.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,v=$n(r)?function(){return r(o)}:function(){return r||2.8},S,x,E=wT(u,e.type,!0,s),w=function(){return x=!1},T=Or,y=Or,b=function(){l=Wr(u,_n),y=qu(Vs?1:0,l),i&&(T=qu(0,Wr(u,li))),S=no},C=function(){f._gsap.y=Cu(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(x){requestAnimationFrame(w);var N=Cu(o.deltaY/2),W=y(h.v-N);if(f&&W!==h.v+h.offset){h.offset=W-h.v;var R=Cu((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",h.cacheID=ot.cache,ys()}return!0}h.offset&&C(),x=!0},L,$,j,k,q=function(){b(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&Re.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return Vs&&F.type==="touchmove"&&D()||_>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){x=!1;var F=_;_=Cu((at.visualViewport&&at.visualViewport.scale||1)/g),L.pause(),F!==_&&em(u,_>1.01?!0:i?!1:"x"),$=m(),j=h(),b(),S=no},e.onRelease=e.onGestureStart=function(F,N){if(h.offset&&C(),!N)k.restart(!0);else{ot.cache++;var W=v(),R,ee;i&&(R=m(),ee=R+W*.05*-F.velocityX/.227,W*=jy(m,R,ee,Wr(u,li)),L.vars.scrollX=T(ee)),R=h(),ee=R+W*.05*-F.velocityY/.227,W*=jy(h,R,ee,Wr(u,_n)),L.vars.scrollY=y(ee),L.invalidate().duration(W).play(.01),(Vs&&L.vars.scrollY>=l||R>=l-1)&&Re.to({},{onUpdate:q,duration:W})}a&&a(F)},e.onWheel=function(){L._ts&&L.pause(),Wn()-p>1e3&&(S=0,p=Wn())},e.onChange=function(F,N,W,R,ee){if(no!==S&&b(),N&&i&&m(T(R[2]===N?$+(F.startX-F.x):m()+N-R[1])),W){h.offset&&C();var oe=ee[2]===W,We=oe?j+F.startY-F.y:h()+W-ee[1],Oe=y(We);oe&&We!==Oe&&(j+=Oe-We),h(Oe)}(W||N)&&ys()},e.onEnable=function(){em(u,i?!1:"x"),lt.addEventListener("refresh",q),wn(at,"resize",q),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),E.enable()},e.onDisable=function(){em(u,!0),Tn(at,"resize",q),lt.removeEventListener("refresh",q),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new on(e),o.iOS=Vs,Vs&&!h()&&h(1),Vs&&Re.ticker.add(Or),k=o._dc,L=Re.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:TT(h,h(),function(){return L.pause()})},onUpdate:ys,onComplete:k.vars.onComplete}),o};lt.sort=function(n){if($n(n))return rt.sort(n);var e=at.pageYOffset||0;return lt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),rt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};lt.observe=function(n){return new on(n)};lt.normalizeScroll=function(n){if(typeof n>"u")return ri;if(n===!0&&ri)return ri.enable();if(n===!1){ri&&ri.kill(),ri=n;return}var e=n instanceof on?n:XN(n);return ri&&ri.target===e.target&&ri.kill(),fo(e.target)&&(ri=e),e};lt.core={_getVelocityProp:n_,_inputObserver:wT,_scrollers:ot,_proxies:jr,bridge:{ss:function(){hr||po("scrollStart"),hr=Wn()},ref:function(){return Gn}}};hT()&&Re.registerPlugin(lt);const yd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const YN=new M0(-1,1,1,-1,0,1);class $N extends Ri{constructor(){super(),this.setAttribute("position",new Cr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Cr([0,2,0,0,2,0],2))}}const qN=new $N;class bT{constructor(e){this._mesh=new Zr(qN,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YN)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class AT extends Vc{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qd.clone(e.uniforms),this.material=new Dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new bT(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Qy extends Vc{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class jN extends Vc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Jy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ye);this._width=i.width,this._height=i.height,t=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new AT(yd),this.copyPass.material.blending=$r,this.timer=new uR}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qy!==void 0&&(a instanceof Qy?i=!0:a instanceof jN&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eS extends Vc{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new tt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const KN={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Wl extends Vc{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Mi(s,a,{type:Wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const d=new Mi(s,a,{type:Wi});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Mi(s,a,{type:Wi});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=KN;this.highPassUniforms=Qd.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Ye(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qd.clone(yd.uniforms),this.blendMaterial=new Dn({uniforms:this.copyUniforms,vertexShader:yd.vertexShader,fragmentShader:yd.fragmentShader,premultipliedAlpha:!0,blending:ps,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new tt,this._oldClearAlpha=1,this._basic=new x0,this._fsQuad=new bT(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ye(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Wl.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Wl.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new Dn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Dn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Wl.BlurDirectionX=new Ye(1,0);Wl.BlurDirectionY=new Ye(0,1);const Bs=1;Xu.registerPlugin(lt);const us=[{title:"Cristalli e Pietre",img:"/cristalli_2x.png",desc:"Ametista, quarzo rosa, ossidiana, corniola — ogni pietra ha la sua energia.",closeness:1},{title:"Candele",img:"/candele_2x.png",desc:"Profumate, rituali, decorative. Per meditare, per rilassarsi, per creare atmosfera.",closeness:.45},{title:"Incensi",img:"/atmosfera_2x.png",desc:"Salvia, palo santo, resine, bastoncini. Per purificare, per concentrarsi.",closeness:1},{title:"Tarocchi e Oracoli",img:"/tarocchi.jpg",desc:"Mazzi classici e moderni. Per chi cerca risposte, o solo nuove domande.",closeness:.45},{title:"Pendoli e Amuleti",img:"/pendoli_2x.png",desc:"Strumenti di connessione. Oggetti che parlano a chi sa ascoltare.",closeness:1},{title:"Idee Regalo",img:"/idearegalo.png",desc:"Per chi ama il bello e il significativo. Ogni oggetto racconta una storia.",closeness:1}],di={midnight:1512742,amethystLight:4010600,gold:12166371,roseQuartz:14931696,ivory:16052198},$a=7.5,c_=$a*us.length+12,Fa=$a*us.length+3,j0=3,ZN=[0,Fg.degToRad(95),Fg.degToRad(250)],QN=[1,.82,1.18],CT=3.4,tS=1.1,JN=7.5,RT=Fa-1,PT=$a*us.length+4,nS=1.35,eI=.5,tI=2.3;function Ws(n){const e=Math.sin(n*12.9898)*43758.5453;return e-Math.floor(e)}function DT(n,e,t=0,i=0){const r=e%j0,s=ZN[r]+n*CT*QN[r]*Math.PI*2+t,a=tS+n*(JN-tS)+i;return{x:Math.cos(s)*a,y:Math.sin(s)*a,z:RT-n*PT}}function LT(n){return Fg.clamp((RT-n)/PT,0,1)*CT*Math.PI*2*eI}function f_(n){const e=LT(n);return{x:Math.cos(e)*nS,y:Math.sin(e)*nS*.7}}function nI(n,e,t,i=1){const r=LT(n),s=f_(n),a=-Math.sin(r),o=Math.cos(r)*.7,l=Math.hypot(a,o)||1,u=tI*(.82+Ws(t)*.5)*i,c=(Ws(t+7.7)-.5)*1.4*i;return{x:s.x+a/l*u*e,y:s.y+o/l*u*e+c}}function Yf(n,e=!1){const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d"),s=new tt(n),a=Math.round(s.r*255),o=Math.round(s.g*255),l=Math.round(s.b*255),u=r.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);u.addColorStop(0,`rgba(${a},${o},${l},1)`),u.addColorStop(e?.15:.35,`rgba(${a},${o},${l},${e?.5:.6})`),u.addColorStop(1,`rgba(${a},${o},${l},0)`),r.fillStyle=u,r.fillRect(0,0,256,256);const c=new $C(i);return c.colorSpace=pi,c}function iI(n,e){const t=new Ri,i=new Float32Array(n*3),r=new Float32Array(n*3),s=new tt(di.ivory),a=new tt(di.gold),o=new tt(di.amethystLight);for(let u=0;u<n;u++){const c=u%j0,d=Math.random(),f=DT(d,c,(Math.random()-.5)*.22,(Math.random()-.5)*.6);i[u*3]=f.x,i[u*3+1]=f.y,i[u*3+2]=f.z;const h=d<.5?s.clone().lerp(a,d*2):a.clone().lerp(o,(d-.5)*2);r[u*3]=h.r,r[u*3+1]=h.g,r[u*3+2]=h.b}t.setAttribute("position",new Ei(i,3)),t.setAttribute("color",new Ei(r,3));const l=new y0({size:.1,map:e,vertexColors:!0,transparent:!0,opacity:.88,depthWrite:!1,blending:ps,sizeAttenuation:!0});return new Y1(t,l)}function iS(n,e,t,i,r){const s=new Ri,a=new Float32Array(n*3);for(let l=0;l<n;l++){const u=Math.random()*Math.PI*2,c=e[0]+Math.random()*(e[1]-e[0]);a[l*3]=Math.cos(u)*c,a[l*3+1]=Math.sin(u)*c,a[l*3+2]=Math.random()*(c_+20)-20}s.setAttribute("position",new Ei(a,3));const o=new y0({size:t,map:r,color:di.ivory,transparent:!0,opacity:i,depthWrite:!1,blending:ps,sizeAttenuation:!0});return new Y1(s,o)}function rI(){const n=bt.useRef(null),e=bt.useRef(null),[t,i]=bt.useState(null),[r,s]=bt.useState(!1),a=bt.useRef(null),o=bt.useRef(null);bt.useEffect(()=>{const u=n.current,c=e.current;if(!u||!c)return;const d=new FC;d.fog=new v0(di.midnight,.008);const f=new rr(55,u.clientWidth/u.clientHeight,.1,220);f.position.set(0,0,c_);const h=new oL({antialias:!0,alpha:!1});h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setSize(u.clientWidth,u.clientHeight),u.appendChild(h.domElement);const m=new Jy(h);m.renderToScreen=!1,m.addPass(new eS(d,f));const _=new Wl(new Ye(u.clientWidth,u.clientHeight),1.1,.6,.12);m.addPass(_);const g=new AT(new Dn({uniforms:{baseTexture:{value:null},bloomTexture:{value:m.renderTarget2.texture}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D baseTexture; uniform sampler2D bloomTexture; varying vec2 vUv;
          void main(){ gl_FragColor = texture2D(baseTexture, vUv) + vec4(1.0) * texture2D(bloomTexture, vUv); }`}),"baseTexture");g.needsSwap=!0;const p=new Jy(h);p.addPass(new eS(d,f)),p.addPass(g),d.add(new aR(16777215,.34));const v=Yf(di.ivory,!0),S=iS(1500,[14,36],.06,.8,v);S.layers.enable(Bs),d.add(S);const x=iI(5400,v);x.layers.enable(Bs),d.add(x),x.material.opacity=.95,x.material.size=.13;const E=new Wa,w=[di.ivory,di.gold,di.roseQuartz];for(let V=0;V<55;V++){const re=Ws(V*3.1)*.95+.02,ie=V%j0,be=(Ws(V*5.7)-.5)*.5,De=(Ws(V*9.3)-.5)*1.6,ye=DT(re,ie,be,De),qe=w[V%w.length],Se=new du(new $o({map:v,color:qe,transparent:!0,blending:ps,depthWrite:!1,opacity:.55+Ws(V*2.2)*.35})),Be=.5+Ws(V*6.6)*1.1;Se.scale.set(Be,Be,1),Se.position.set(ye.x,ye.y,ye.z),Se.layers.enable(Bs),E.add(Se)}d.add(E);const T=iS(220,[.8,3.2],.07,.8,v);T.layers.enable(Bs),d.add(T);const y=new Wa;[[-8,3,Fa-10,di.amethystLight],[7,-4,Fa-22,di.roseQuartz],[-5,-3,Fa-34,di.gold]].forEach(([V,re,ie,be])=>{const De=new du(new $o({map:Yf(be,!0),transparent:!0,blending:ps,depthWrite:!1,opacity:.28}));De.scale.set(16,16,1),De.position.set(V,re,ie),De.layers.enable(Bs),y.add(De)}),d.add(y);const C=new du(new $o({map:Yf(di.ivory),transparent:!0,blending:ps,depthWrite:!1}));C.scale.set(13,13,1),C.position.set(0,0,Fa),C.layers.enable(Bs),d.add(C);const D=new du(new $o({map:Yf(di.gold),transparent:!0,blending:ps,depthWrite:!1,opacity:.65}));D.scale.set(19,19,1),D.position.set(0,0,Fa-.6),D.layers.enable(Bs),d.add(D);const L=new Wa,$=new rR,j=[],k=[];us.forEach((V,re)=>{const ie=$a*(us.length-re)-$a,be=Ws(re+.4)>.45?1:-1,De=nI(ie,be,re,V.closeness),ye=new du(new $o({transparent:!0,opacity:0}));ye.position.set(De.x,De.y,ie+.02),L.add(ye),k.push({sprite:ye,z:ie}),$.load(V.img,qe=>{qe.colorSpace=pi,j.push(qe);const Se=qe.image.width/qe.image.height,Be=2.3;ye.material.map=qe,ye.material.opacity=1,ye.material.needsUpdate=!0,ye.scale.set(Be*Se,Be,1)})}),d.add(L);const q=new G;function F(V){if(f.getWorldDirection(q),V.clone().sub(f.position).dot(q)<=.3)return!1;const ie=V.clone().project(f);return Math.abs(ie.x)<=1&&Math.abs(ie.y)<=1&&ie.z<1}let N=0;const W=new fR,R=()=>{const V=W.getElapsedTime();T.material.opacity=.65+Math.sin(V*.9)*.08,f.layers.set(Bs),m.render(),f.layers.set(0),p.render(),N=requestAnimationFrame(R)};R();const ee={z:c_},oe=Xu.timeline({scrollTrigger:{trigger:c,start:"top top",end:"bottom bottom",scrub:1.6}});oe.to(ee,{z:Fa-3,ease:"none",duration:.7},0),us.forEach((V,re)=>{const ie=$a*(us.length-re)-$a-2;oe.to(ee,{z:ie,ease:"none",duration:1},re+.7)}),o.current=null;const We=V=>{V!==o.current&&(o.current=V,a.current&&clearTimeout(a.current),V===null?s(!1):(s(!1),a.current=setTimeout(()=>{i(V),s(!0)},90)))},Oe=()=>{const V=f_(ee.z);f.position.set(V.x,V.y,ee.z);const re=f_(ee.z-9);f.lookAt(re.x,re.y,ee.z-9);let ie=null,be=1/0;k.forEach(({sprite:De,z:ye},qe)=>{if(!F(De.position))return;const Se=Math.abs(ye-ee.z);Se<be&&(be=Se,ie=qe)}),We(ie)};Xu.ticker.add(Oe);const ke=()=>{f.aspect=u.clientWidth/u.clientHeight,f.updateProjectionMatrix(),h.setSize(u.clientWidth,u.clientHeight),m.setSize(u.clientWidth,u.clientHeight),p.setSize(u.clientWidth,u.clientHeight)};return window.addEventListener("resize",ke),()=>{cancelAnimationFrame(N),a.current&&clearTimeout(a.current),Xu.ticker.remove(Oe),oe.kill(),window.removeEventListener("resize",ke),j.forEach(V=>V.dispose()),v.dispose(),h.dispose(),u.removeChild(h.domElement)}},[]);const l=t!==null?us[t]:null;return I.jsx("section",{id:"walkthrough",ref:e,className:"relative",style:{height:`${(us.length+.7)*100}vh`},children:I.jsxs("div",{className:"sticky top-0 h-screen w-full overflow-hidden bg-midnight",children:[I.jsx("div",{ref:n,className:"absolute inset-0"}),I.jsx("div",{className:"absolute inset-0 pointer-events-none bg-gradient-to-b from-midnight/50 via-transparent to-midnight/70"}),I.jsx("div",{className:"absolute bottom-12 left-0 w-full flex flex-col items-center px-6 pointer-events-none",children:I.jsxs("div",{className:`text-center transition-all duration-500 ${r&&l?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,style:{textShadow:"0 4px 24px rgba(23,21,38,0.85)"},children:[I.jsx("div",{className:"font-serif text-4xl sm:text-6xl text-ivory font-medium leading-tight",children:l==null?void 0:l.title}),I.jsx("div",{className:"font-sans text-sm sm:text-base tracking-wide text-rose-quartz/90 mt-3 max-w-md mx-auto",children:l==null?void 0:l.desc})]})})]})})}const mo="https://wa.me/393290147478?text=Ciao%2C%20vorrei%20informazioni%20su%20MaeStria%20Arte%20e%20Magia.",NT="tel:+393290147478",sI="https://www.google.com/maps/dir/?api=1&destination=MaeStria+Arte+e+Magia+Via+Alghero+44+Cagliari",K0="https://instagram.com/maestria.arteemagia",IT="https://www.facebook.com/105131904777951",aI="https://whatsapp.com/channel/0029VaE1tyu59PwV5cQeLk2t",oI=[{title:"Cristalli e Pietre",description:"Ametista, quarzo rosa, ossidiana, corniola — ogni pietra ha la sua energia. Scelte una a una.",image:"/cristalli_2x.png"},{title:"Candele",description:"Profumate, rituali, decorative. Per meditare, per rilassarsi, per creare atmosfera.",image:"/candele_2x.png"},{title:"Incensi",description:"Salvia, palo santo, resine, bastoncini. Per purificare, per concentrarsi, per lasciarsi andare.",image:"/atmosfera_2x.png"},{title:"Tarocchi e Oracoli",description:"Mazzi classici e moderni. Per chi cerca risposte, o solo nuove domande.",image:"/tarocchi.jpg"},{title:"Pendoli e Amuleti",description:"Strumenti di connessione. Oggetti che parlano a chi sa ascoltare.",image:"/pendoli_2x.png"},{title:"Idee Regalo",description:"Per chi ama il bello e il significativo. Ogni oggetto racconta una storia.",image:"/idearegalo.png"}],lI=[{text:"Un posto davvero magico. Ho comprato un pendolo carinissimo e utile. Alice mi ha anche aiutata a scegliere delle candele colorate.",author:"Silvia Valli"},{text:"È un luogo magico. Quando entri lasci tutto fuori e ti immergi altrove. Ogni volta è un nuovo altrove da assaporare lentamente. Alice, la titolare, rende tutto così avvolgente.",author:"Federica Virzí"},{text:"Energia pulita, gentilezza, cura e amore. Da Alice trovo sempre un bel sorriso e tanta magia. Tarocchi, incensi, pietre, candele, erbe e molto altro. Grazie Alice, per fare la differenza in una Cagliari che spesso manca di calore.",author:"Cristina"},{text:"Un luogo dove si sente una bellissima energia appena entri, accolti dalla gentilezza e professionalità di Alice. Oltre agli articoli esposti, organizzano incontri e corsi su temi specifici.",author:"Anna Maria"},{text:"Il negozio 'Arte e Magia' di Alice è un vero rifugio per chi ama la spiritualità. Appena entri ti accoglie un'atmosfera calda e avvolgente, dove ogni angolo è curato con passione.",author:"ilaria corda"},{text:"È magia. Entri in questo spazio e tutti i sensi si attivano. Tutto è energia e poesia, in uno spazio protetto e sacro. Davvero magnifico.",author:"79miry"}];function uI(){const n=bt.useRef(null);return bt.useEffect(()=>{const e=n.current;if(!e)return;const t=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&r.target.classList.add("is-visible")})},{threshold:.12});return t.observe(e),()=>t.disconnect()},[]),n}function Yi({children:n,className:e=""}){const t=uI();return I.jsx("div",{ref:t,className:`reveal ${e}`,children:n})}function cI({onNavClick:n,intro:e}){const[t,i]=bt.useState(!1),[r,s]=bt.useState(!1);bt.useEffect(()=>{const l=()=>i(window.scrollY>40);return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const a=[{label:"Lo Spazio",id:"spazio"},{label:"Prodotti",id:"prodotti"},{label:"Eventi",id:"eventi"},{label:"Recensioni",id:"recensioni"},{label:"Contatti",id:"contatti"}],o=l=>{s(!1),n(l)};return I.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${t?"bg-midnight/95 backdrop-blur-md shadow-lg shadow-black/30":"bg-transparent"} ${e?"opacity-100":"opacity-0 pointer-events-none"}`,children:[I.jsxs("div",{className:"max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between",children:[I.jsxs("button",{onClick:()=>o("hero"),className:"text-left group",children:[I.jsxs("div",{className:"font-serif text-3xl sm:text-4xl tracking-wider text-gold leading-none",children:["Mae",I.jsx("span",{className:"text-gold-light",children:"Stria"})]}),I.jsx("div",{className:"font-sans text-xs sm:text-sm tracking-widest2 text-rose-quartz/80 uppercase mt-1",children:"Arte e Magia"})]}),I.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[a.map(l=>I.jsx("button",{onClick:()=>o(l.id),className:"font-sans text-sm text-ivory/80 hover:text-gold transition-colors duration-300 tracking-wide",children:l.label},l.id)),I.jsx("a",{href:mo,target:"_blank",rel:"noopener noreferrer",className:"cta-glow font-sans text-sm bg-gold hover:bg-gold-light text-midnight px-5 py-2.5 rounded-full tracking-wide font-medium",children:"Vieni a Trovarci"})]}),I.jsx("button",{onClick:()=>s(!r),className:"md:hidden text-gold p-2","aria-label":"Menu",children:r?I.jsx(mA,{size:26}):I.jsx(hA,{size:26})})]}),I.jsx("div",{className:`md:hidden overflow-hidden transition-all duration-500 bg-midnight/98 backdrop-blur-md ${r?"max-h-96 border-t border-gold/20":"max-h-0"}`,children:I.jsxs("nav",{className:"flex flex-col px-6 py-4 gap-1",children:[a.map(l=>I.jsx("button",{onClick:()=>o(l.id),className:"font-sans text-base text-ivory/90 hover:text-gold transition-colors py-3 text-left border-b border-gold/10",children:l.label},l.id)),I.jsx("a",{href:mo,target:"_blank",rel:"noopener noreferrer",className:"font-sans text-sm bg-gold text-midnight px-5 py-3 rounded-full text-center mt-3 font-medium",children:"Vieni a Trovarci"})]})})]})}function fI({onNavClick:n}){const[e,t]=bt.useState(!1),[i,r]=bt.useState(!1),[s,a]=bt.useState(!1),[o,l]=bt.useState(!1),[u,c]=bt.useState(!1);return bt.useEffect(()=>{const d=[setTimeout(()=>t(!0),600),setTimeout(()=>r(!0),900),setTimeout(()=>a(!0),1200),setTimeout(()=>l(!0),1500),setTimeout(()=>c(!0),1900)];return()=>d.forEach(clearTimeout)},[]),I.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[I.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-amethyst/40 via-midnight to-midnight"}),I.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at 50% 38%, rgba(185,164,227,0.16) 0%, transparent 55%)"}}),I.jsxs("div",{className:"relative z-10 text-center px-6 max-w-3xl mx-auto py-24",children:[I.jsx("div",{className:"ambient-glow inline-block mb-6",children:I.jsx("div",{className:"overflow-hidden rounded-full mx-auto w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] ring-1 ring-gold/25 shadow-2xl shadow-amethyst/50",children:I.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,poster:"/hero_poster.jpg",className:"w-full h-full object-cover scale-[1.12]",children:I.jsx("source",{src:"/hero.mp4",type:"video/mp4"})})})}),I.jsx("p",{className:`font-sans text-xl sm:text-3xl text-ivory/90 leading-snug max-w-2xl mx-auto mb-8 font-light transition-all duration-700 ease-out ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:"Cristalli, incensi, candele e tarocchi — uno spazio di bellezza e intenzione nel cuore di Cagliari."}),I.jsxs("div",{className:"flex items-center justify-center gap-2 mb-10",children:[I.jsx("div",{className:"flex gap-1",children:[...Array(5)].map((d,f)=>I.jsx($m,{size:18,className:`text-amber fill-amber transition-all duration-500 ease-out ${i?"opacity-100 translate-x-0":"opacity-0 -translate-x-3"}`,style:{transitionDelay:i?`${f*130}ms`:"0ms"}},f))}),I.jsx("span",{className:`font-sans text-sm text-amber tracking-wide font-medium transition-all duration-700 ease-out ${s?"opacity-100 translate-x-0":"opacity-0 translate-x-6"}`,children:"5.0 su Google · 61 Recensioni"})]}),I.jsxs("div",{className:`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[I.jsxs("a",{href:mo,target:"_blank",rel:"noopener noreferrer",className:"cta-glow font-sans text-sm bg-gold hover:bg-gold-light text-midnight px-8 py-4 rounded-full tracking-wide font-medium flex items-center justify-center gap-2",children:[I.jsx(Oc,{size:18}),"Scrivici su WhatsApp"]}),I.jsx("button",{onClick:()=>n("spazio"),className:"font-sans text-sm border border-gold/60 hover:bg-gold/10 text-gold px-8 py-4 rounded-full transition-all duration-300 tracking-wide font-medium",children:"Scopri lo Spazio"})]})]}),I.jsx("button",{onClick:()=>n("spazio"),className:`absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70 hover:text-gold animate-bounce transition-opacity duration-700 ${u?"opacity-100":"opacity-0"}`,"aria-label":"Scorri",children:I.jsx(fA,{size:28})})]})}function dI(){return I.jsx("section",{id:"spazio",className:"relative py-24 sm:py-32 px-6 overflow-hidden",children:I.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center",children:[I.jsx(Yi,{children:I.jsxs("div",{className:"relative",children:[I.jsx("div",{className:"absolute -inset-4 bg-gold/10 rounded-2xl blur-2xl"}),I.jsxs("div",{className:"relative overflow-hidden rounded-2xl",children:[I.jsx("img",{src:"/spazio_2x.png",alt:"Interno del negozio MaeStria a Cagliari",className:"relative w-full object-cover shadow-2xl shadow-black/50",loading:"lazy"}),I.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(to right, #1A1426 0%, transparent 18%, transparent 82%, #1A1426 100%)"}}),I.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(to bottom, #1A1426 0%, transparent 18%, transparent 80%, #1A1426 100%)"}})]})]})}),I.jsx(Yi,{children:I.jsxs("div",{children:[I.jsx("p",{className:"font-sans text-xs tracking-widest2 text-gold uppercase mb-4",children:"Lo Spazio"}),I.jsxs("h2",{className:"font-serif text-4xl sm:text-5xl text-ivory mb-6 leading-tight",children:["Non un negozio.",I.jsx("br",{}),"Un luogo che ",I.jsx("span",{className:"hl",children:"ti accoglie"}),"."]}),I.jsxs("div",{className:"space-y-4 font-sans text-ivory/75 leading-relaxed text-lg font-light",children:[I.jsx("p",{children:"MaeStria non è un negozio. È uno spazio dove l'arte incontra la magia."}),I.jsx("p",{children:"Ogni cristallo è scelto con cura. Ogni candela ha un'intenzione. Ogni incenso porta con sé un significato."}),I.jsx("p",{children:"Quando entri in Via Alghero 44, non stai facendo shopping. Stai entrando in un luogo che ti accoglie."})]})]})})]})})}function hI(){return I.jsx("section",{id:"prodotti",className:"relative py-24 sm:py-32 px-6 bg-amethyst/30",children:I.jsxs("div",{className:"max-w-7xl mx-auto",children:[I.jsx(Yi,{children:I.jsxs("div",{className:"text-center mb-16",children:[I.jsx("p",{className:"font-sans text-xs tracking-widest2 text-gold uppercase mb-4",children:"I Nostri Tesori"}),I.jsx("h2",{className:"font-serif text-4xl sm:text-5xl text-ivory mb-4",children:"Oggetti che parlano"}),I.jsx("p",{className:"font-sans text-ivory/60 max-w-xl mx-auto font-light",children:"Ogni pezzo è unico. Scelto con intenzione, custodito con cura."})]})}),I.jsx("div",{className:"product-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:oI.map((n,e)=>I.jsx(Yi,{children:I.jsxs("div",{className:"group relative overflow-hidden rounded-2xl bg-midnight/60 border border-gold/15 hover:border-gold/40 transition-all duration-500",children:[I.jsxs("div",{className:"relative h-64 overflow-hidden",children:[I.jsx("img",{src:n.image,alt:n.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",loading:"lazy"}),I.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent"})]}),I.jsxs("div",{className:"p-6",children:[I.jsx("h3",{className:"font-serif text-2xl text-gold mb-3",children:n.title}),I.jsx("p",{className:"font-sans text-ivory/70 text-sm leading-relaxed font-light",children:n.description})]})]})},e))}),I.jsx(Yi,{children:I.jsx("p",{className:"text-center font-serif text-2xl text-ivory/80 italic mt-16",children:"Vieni a scoprirli di persona. Ogni pezzo è unico."})})]})})}function pI(){return I.jsx("section",{id:"eventi",className:"relative py-24 sm:py-32 px-6",children:I.jsxs("div",{className:"max-w-5xl mx-auto",children:[I.jsx(Yi,{children:I.jsxs("div",{className:"text-center mb-16",children:[I.jsx("p",{className:"font-sans text-xs tracking-widest2 text-gold uppercase mb-4",children:"Eventi e Meditazioni"}),I.jsx("h2",{className:"font-serif text-4xl sm:text-5xl text-ivory mb-6",children:"Uno spazio dove ci si incontra"}),I.jsx("p",{className:"font-sans text-ivory/70 max-w-2xl mx-auto font-light text-lg leading-relaxed",children:"MaeStria è anche uno spazio dove ci si incontra. Alice organizza meditazioni, workshop e serate a tema — dalla Luna Nuova alle tecniche di lettura dei tarocchi."})]})}),I.jsx(Yi,{children:I.jsx("div",{className:"grid sm:grid-cols-3 gap-6 mb-12",children:[{title:"Meditazioni",desc:"Luna Nuova, lune piene, momenti di raccoglimento condiviso."},{title:"Workshop",desc:"Tecniche di lettura dei tarocchi, uso dei cristalli, rituali."},{title:"Seminari",desc:"Approfondimenti tematici in uno spazio accogliente."}].map((n,e)=>I.jsxs("div",{className:"bg-amethyst/40 border border-gold/15 rounded-2xl p-8 text-center hover:border-gold/40 transition-all duration-500",children:[I.jsx(pA,{size:28,className:"text-amber mx-auto mb-4"}),I.jsx("h3",{className:"font-serif text-2xl text-gold mb-3",children:n.title}),I.jsx("p",{className:"font-sans text-ivory/65 text-sm font-light leading-relaxed",children:n.desc})]},e))})}),I.jsx(Yi,{children:I.jsxs("div",{className:"text-center bg-midnight/50 border border-gold/20 rounded-2xl p-8 sm:p-10",children:[I.jsx("p",{className:"font-serif text-2xl text-ivory/90 italic mb-6",children:"Seguici per scoprire il prossimo appuntamento."}),I.jsxs("a",{href:K0,target:"_blank",rel:"noopener noreferrer",className:"cta-glow inline-flex items-center gap-2 font-sans text-sm bg-gold hover:bg-gold-light text-midnight px-7 py-3.5 rounded-full font-medium",children:[I.jsx(a0,{size:18}),"@maestria.arteemagia"]})]})})]})})}function mI(){return I.jsx("section",{id:"recensioni",className:"relative py-24 sm:py-32 px-6 bg-amethyst/30",children:I.jsxs("div",{className:"max-w-6xl mx-auto",children:[I.jsx(Yi,{children:I.jsxs("div",{className:"text-center mb-16",children:[I.jsx("p",{className:"font-sans text-xs tracking-widest2 text-gold uppercase mb-4",children:"Recensioni"}),I.jsx("h2",{className:"font-serif text-4xl sm:text-5xl text-ivory mb-4",children:"Chi è entrato, è tornato"}),I.jsxs("div",{className:"flex items-center justify-center gap-2 mt-6",children:[I.jsx("div",{className:"flex gap-1",children:[...Array(5)].map((n,e)=>I.jsx($m,{size:18,className:"text-amber fill-amber"},e))}),I.jsx("span",{className:"font-sans text-sm text-amber tracking-wide font-medium",children:"5.0 su Google · 61 Recensioni"})]})]})}),I.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:lI.map((n,e)=>I.jsx(Yi,{children:I.jsxs("div",{className:"bg-midnight/60 border border-gold/15 rounded-2xl p-7 h-full flex flex-col",children:[I.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(5)].map((t,i)=>I.jsx($m,{size:14,className:"text-amber fill-amber"},i))}),I.jsxs("p",{className:"font-serif italic text-ivory/85 text-lg leading-relaxed flex-grow",children:['"',n.text,'"']}),I.jsxs("p",{className:"font-sans text-sm text-gold/80 mt-5 tracking-wide",children:["— ",n.author]})]})},e))})]})})}function gI(){return I.jsx("section",{id:"contatti",className:"relative py-24 sm:py-32 px-6",children:I.jsxs("div",{className:"max-w-6xl mx-auto",children:[I.jsx(Yi,{children:I.jsxs("div",{className:"text-center mb-16",children:[I.jsx("p",{className:"font-sans text-xs tracking-widest2 text-gold uppercase mb-4",children:"Vieni a Trovarci"}),I.jsx("h2",{className:"font-serif text-4xl sm:text-5xl text-ivory mb-4",children:"Via Alghero 44, Cagliari"}),I.jsx("p",{className:"font-sans text-ivory/60 font-light",children:"Nel cuore della città. Ti aspettiamo."})]})}),I.jsxs("div",{className:"grid lg:grid-cols-2 gap-10",children:[I.jsx(Yi,{children:I.jsxs("div",{className:"space-y-6",children:[I.jsxs("div",{className:"bg-amethyst/40 border border-gold/15 rounded-2xl p-6",children:[I.jsxs("div",{className:"flex items-start gap-4 mb-5",children:[I.jsx(_1,{size:22,className:"text-gold mt-1 shrink-0"}),I.jsxs("div",{children:[I.jsx("h3",{className:"font-serif text-xl text-gold mb-1",children:"Indirizzo"}),I.jsx("p",{className:"font-sans text-ivory/75 font-light",children:"Via Alghero 44, 09127 Cagliari (CA)"})]})]}),I.jsxs("div",{className:"flex items-start gap-4 mb-5",children:[I.jsx(v1,{size:22,className:"text-gold mt-1 shrink-0"}),I.jsxs("div",{children:[I.jsx("h3",{className:"font-serif text-xl text-gold mb-1",children:"Telefono"}),I.jsx("a",{href:NT,className:"font-sans text-ivory/75 hover:text-gold transition-colors font-light",children:"329 014 7478"})]})]}),I.jsxs("div",{className:"flex items-start gap-4 mb-5",children:[I.jsx(Oc,{size:22,className:"text-gold mt-1 shrink-0"}),I.jsxs("div",{children:[I.jsx("h3",{className:"font-serif text-xl text-gold mb-1",children:"WhatsApp"}),I.jsx("a",{href:mo,target:"_blank",rel:"noopener noreferrer",className:"font-sans text-ivory/75 hover:text-gold transition-colors font-light",children:"Scrivici un messaggio"})]})]}),I.jsxs("div",{className:"flex items-start gap-4",children:[I.jsx(a0,{size:22,className:"text-gold mt-1 shrink-0"}),I.jsxs("div",{children:[I.jsx("h3",{className:"font-serif text-xl text-gold mb-1",children:"Social"}),I.jsxs("div",{className:"flex flex-col gap-1",children:[I.jsx("a",{href:K0,target:"_blank",rel:"noopener noreferrer",className:"font-sans text-ivory/75 hover:text-gold transition-colors font-light",children:"@maestria.arteemagia"}),I.jsx("a",{href:IT,target:"_blank",rel:"noopener noreferrer",className:"font-sans text-ivory/75 hover:text-gold transition-colors font-light",children:"Facebook"}),I.jsx("a",{href:aI,target:"_blank",rel:"noopener noreferrer",className:"font-sans text-ivory/75 hover:text-gold transition-colors font-light",children:"Canale WhatsApp"})]})]})]})]}),I.jsxs("div",{className:"bg-amethyst/40 border border-gold/15 rounded-2xl p-6",children:[I.jsx("h3",{className:"font-serif text-xl text-gold mb-4",children:"Orari di apertura"}),I.jsxs("div",{className:"space-y-2 font-sans text-ivory/75 font-light",children:[I.jsxs("div",{className:"flex justify-between",children:[I.jsx("span",{children:"Lunedì – Venerdì"}),I.jsxs("span",{className:"text-right",children:["10:30–13:00",I.jsx("br",{}),"17:30–20:00"]})]}),I.jsxs("div",{className:"flex justify-between border-t border-gold/10 pt-2",children:[I.jsx("span",{children:"Sabato e Domenica"}),I.jsx("span",{className:"text-rose-quartz/70",children:"Chiuso"})]})]}),I.jsx("p",{className:"font-sans text-xs text-ivory/50 mt-4 font-light leading-relaxed",children:"Spedizioni disponibili in tutta Italia. Ritiro in negozio. Per ordini e informazioni scrivici su WhatsApp."})]})]})}),I.jsx(Yi,{children:I.jsx("div",{className:"rounded-2xl overflow-hidden border border-gold/15 h-full min-h-[400px]",children:I.jsx("iframe",{src:"https://maps.google.com/maps?q=MaeStria+Arte+e+Magia+Via+Alghero+44+09127+Cagliari&output=embed",width:"100%",height:"100%",style:{border:0,minHeight:"400px"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mappa MaeStria"})})})]})]})})}function _I(){return I.jsx("footer",{className:"relative py-12 px-6 border-t border-gold/15 bg-midnight",children:I.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[I.jsxs("div",{className:"font-serif text-3xl tracking-wider text-gold mb-2",children:["Mae",I.jsx("span",{className:"text-gold-light",children:"Stria"})]}),I.jsx("p",{className:"font-sans text-xs tracking-widest2 text-rose-quartz/70 uppercase mb-6",children:"Arte e Magia · Cagliari"}),I.jsxs("div",{className:"flex justify-center gap-5 mb-6",children:[I.jsx("a",{href:mo,target:"_blank",rel:"noopener noreferrer",className:"text-gold/70 hover:text-gold transition-colors","aria-label":"WhatsApp",children:I.jsx(Oc,{size:22})}),I.jsx("a",{href:K0,target:"_blank",rel:"noopener noreferrer",className:"text-gold/70 hover:text-gold transition-colors","aria-label":"Instagram",children:I.jsx(a0,{size:22})}),I.jsx("a",{href:IT,target:"_blank",rel:"noopener noreferrer",className:"text-gold/70 hover:text-gold transition-colors","aria-label":"Facebook",children:I.jsx(dA,{size:22})})]}),I.jsxs("p",{className:"font-sans text-xs text-ivory/40 font-light",children:["© ",new Date().getFullYear()," MaeStria Arte e Magia · Via Alghero 44, Cagliari"]})]})})}function vI(){return I.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 right-0 z-40 bg-midnight/98 backdrop-blur-md border-t border-gold/20 grid grid-cols-3",children:[I.jsxs("a",{href:NT,className:"flex flex-col items-center justify-center py-3 text-gold hover:bg-gold/10 transition-colors",children:[I.jsx(v1,{size:20}),I.jsx("span",{className:"text-[11px] mt-1 font-sans",children:"Chiama"})]}),I.jsxs("a",{href:mo,target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center justify-center py-3 text-gold hover:bg-gold/10 transition-colors border-x border-gold/15",children:[I.jsx(Oc,{size:20}),I.jsx("span",{className:"text-[11px] mt-1 font-sans",children:"WhatsApp"})]}),I.jsxs("a",{href:sI,target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center justify-center py-3 text-gold hover:bg-gold/10 transition-colors",children:[I.jsx(_1,{size:20}),I.jsx("span",{className:"text-[11px] mt-1 font-sans",children:"Indicazioni"})]})]})}function xI(){return I.jsx("a",{href:mo,target:"_blank",rel:"noopener noreferrer",className:"hidden md:flex fixed bottom-6 right-6 z-40 w-14 h-14 bg-gold hover:bg-gold-light text-midnight rounded-full items-center justify-center shadow-lg shadow-gold/30 transition-all duration-300 hover:scale-110","aria-label":"WhatsApp",children:I.jsx(Oc,{size:26})})}function yI(){const[n,e]=bt.useState(!1),t=bt.useRef(null);bt.useEffect(()=>{const r=setTimeout(()=>e(!0),300);return()=>clearTimeout(r)},[]),bt.useEffect(()=>{const r=new TA({lerp:.1,duration:1.3});t.current=r;let s=0;const a=o=>{r.raf(o),s=requestAnimationFrame(a)};return s=requestAnimationFrame(a),()=>{cancelAnimationFrame(s),r.destroy(),t.current=null}},[]);const i=r=>{const s=document.getElementById(r);s&&(t.current?t.current.scrollTo(s,{offset:-10}):s.scrollIntoView({behavior:"smooth",block:"start"}))};return I.jsxs("div",{className:"min-h-screen bg-midnight grain",children:[I.jsx(cI,{onNavClick:i,intro:n}),I.jsxs("main",{children:[I.jsx(fI,{onNavClick:i}),I.jsx(rI,{}),I.jsx(dI,{}),I.jsx(hI,{}),I.jsx(pI,{}),I.jsx(mI,{}),I.jsx(gI,{})]}),I.jsx(_I,{}),I.jsx(vI,{}),I.jsx(xI,{}),I.jsx("div",{className:"md:hidden h-16"})]})}g1(document.getElementById("root")).render(I.jsx(bt.StrictMode,{children:I.jsx(yI,{})}));
