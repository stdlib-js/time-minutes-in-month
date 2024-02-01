// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=r()?function(e){var r,i,o,c,u;if(null==e)return t.call(e);i=e[a],u=a,r=null!=(c=e)&&n.call(c,u);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=i:delete e[a],o}:function(e){return t.call(e)},c=Date.prototype.getDay,u=r();function s(e){return"object"==typeof e&&(e instanceof Date||(u?function(e){try{return c.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o(e)))}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+g(i):g(i)+e,n&&(e="-"+e)),e}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function y(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!f(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function m(e){return"string"==typeof e}var v=Math.abs,w=String.prototype.toLowerCase,_=String.prototype.toUpperCase,j=String.prototype.replace,E=/e\+(\d)$/,S=/e-(\d)$/,T=/^(\d+)$/,x=/^(\d+)e/,V=/\.0$/,k=/\.0*e/,I=/(\..*[^0])0*e/;function F(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":v(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=j.call(t,I,"$1e"),t=j.call(t,k,"e"),t=j.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=j.call(t,E,"e+0$1"),t=j.call(t,S,"e-0$1"),e.alternate&&(t=j.call(t,T,"$1."),t=j.call(t,x,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===_.call(e.specifier)?_.call(t):w.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+O(n):O(n)+e}var N=String.fromCharCode,P=isNaN,$=Array.isArray;function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function D(e){var r,t,n,i,a,o,c,u,s;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,u=0;u<e.length;u++)if(m(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,P(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,P(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!P(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=P(a)?String(n.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Y(e){var r,t,n,i;for(t=[],i=0,n=M.exec(e);n;)(r=e.slice(i,M.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=M.lastIndex,n=M.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function G(e){return"string"==typeof e}function Z(e){var r,t,n;if(!G(e))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Y(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return D.apply(null,t)}var L=Object.prototype,W=L.toString,z=L.__defineGetter__,U=L.__defineSetter__,X=L.__lookupGetter__,q=L.__lookupSetter__,B=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(e,r)||q.call(e,r)?(n=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&z&&z.call(e,r,t.get),o&&U&&U.call(e,r,t.set),e};function H(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(e){return"string"==typeof e}var K=String.prototype.valueOf,Q=r();function ee(e){return"object"==typeof e&&(e instanceof String||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object String]"===o(e)))}function re(e){return J(e)||ee(e)}function te(e){return"number"==typeof e}H(re,"isPrimitive",J),H(re,"isObject",ee);var ne=Number,ie=ne.prototype.toString,ae=r();function oe(e){return"object"==typeof e&&(e instanceof ne||(ae?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function ce(e){return te(e)||oe(e)}H(ce,"isPrimitive",te),H(ce,"isObject",oe);var ue=Number.POSITIVE_INFINITY,se=ne.NEGATIVE_INFINITY,le=Math.floor;function pe(e){return e<ue&&e>se&&le(r=e)===r;var r}function fe(e){return te(e)&&pe(e)}function ge(e){return oe(e)&&pe(e.valueOf())}function de(e){return fe(e)||ge(e)}function he(e){if(!J(e))throw new TypeError(Z("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e.toLowerCase()}(e)}function be(){return(new Date).getFullYear()}function ye(e){var r;if(arguments.length)if(s(e))r=e.getFullYear();else{if(!fe(e))return!1;r=e}else r=be();return r%100==0?r%400==0:r%4==0}H(de,"isPrimitive",fe),H(de,"isObject",ge);var me={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};return function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(s(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!J(e)&&!fe(e))throw new TypeError(Z("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=be(),n=e}else{if(!J(e)&&!fe(e))throw new TypeError(Z("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!fe(r))throw new TypeError(Z("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(fe(n)&&(n<1||n>12))throw new RangeError(Z("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=he(n.toString()),void 0===(t=me[n]))throw new Error(Z("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 40320===t&&ye(i)&&(t+=1440),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).minutesInMonth=r();
//# sourceMappingURL=index.js.map
