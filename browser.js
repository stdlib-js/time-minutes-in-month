// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",a=r()?function(e){var r,a,o,c,l;if(null==e)return t.call(e);a=e[i],l=i,r=null!=(c=e)&&n.call(c,l);try{e[i]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[i]=a:delete e[i],o}:function(e){return t.call(e)},o=Date.prototype.getDay,c=r();function l(e){return"object"==typeof e&&(e instanceof Date||(c?function(e){try{return o.call(e),!0}catch(e){return!1}}(e):"[object Date]"===a(e)))}var s="function"==typeof Object.defineProperty?Object.defineProperty:null,u=Object.defineProperty,p=Object.prototype,f=p.toString,g=p.__defineGetter__,d=p.__defineSetter__,h=p.__lookupGetter__,b=p.__lookupSetter__,y=function(){try{return s({},"x",{}),!0}catch(e){return!1}}()?u:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(h.call(e,r)||b.call(e,r)?(n=e.__proto__,e.__proto__=p,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&g&&g.call(e,r,t.get),o&&d&&d.call(e,r,t.set),e};function w(e,r,t){y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function v(e){return"string"==typeof e}var m=String.prototype.valueOf,_=r();function j(e){return"object"==typeof e&&(e instanceof String||(_?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object String]"===a(e)))}function E(e){return v(e)||j(e)}function S(e){return"number"==typeof e}w(E,"isPrimitive",v),w(E,"isObject",j);var x=Number,T=x.prototype.toString,I=r();function k(e){return"object"==typeof e&&(e instanceof x||(I?function(e){try{return T.call(e),!0}catch(e){return!1}}(e):"[object Number]"===a(e)))}function F(e){return S(e)||k(e)}w(F,"isPrimitive",S),w(F,"isObject",k);var V=Number.POSITIVE_INFINITY,O=x.NEGATIVE_INFINITY,A=Math.floor;function N(e){return e<V&&e>O&&A(r=e)===r;var r}function P(e){return S(e)&&N(e)}function $(e){return k(e)&&N(e.valueOf())}function C(e){return P(e)||$(e)}function D(e){return"number"==typeof e}function R(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Y(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+R(i):R(i)+e,n&&(e="-"+e)),e}w(C,"isPrimitive",P),w(C,"isObject",$);var M=String.prototype.toLowerCase,G=String.prototype.toUpperCase;function Z(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!D(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Y(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Y(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===G.call(e.specifier)?G.call(t):M.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function L(e){return"string"==typeof e}var W=Math.abs,U=String.prototype.toLowerCase,B=String.prototype.toUpperCase,X=String.prototype.replace,z=/e\+(\d)$/,J=/e-(\d)$/,q=/^(\d+)$/,H=/^(\d+)e/,K=/\.0$/,Q=/\.0*e/,ee=/(\..*[^0])0*e/;function re(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!D(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":W(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=X.call(t,ee,"$1e"),t=X.call(t,Q,"e"),t=X.call(t,K,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=X.call(t,z,"e+0$1"),t=X.call(t,J,"e-0$1"),e.alternate&&(t=X.call(t,q,"$1."),t=X.call(t,H,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===B.call(e.specifier)?B.call(t):U.call(t)}function te(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ne(e,r,t){var n=r-e.length;return n<0?e:e=t?e+te(n):te(n)+e}var ie=String.fromCharCode,ae=isNaN,oe=Array.isArray;function ce(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function le(e){var r,t,n,i,a,o,c,l,s;if(!oe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,l=0;l<e.length;l++)if(L(n=e[l]))o+=n;else{if(r=void 0!==n.precision,!(n=ce(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ae(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ae(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Z(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ae(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ae(a)?String(n.arg):ie(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=re(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ne(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var se=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ue(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function pe(e){var r,t,n,i;for(t=[],i=0,n=se.exec(e);n;)(r=e.slice(i,se.lastIndex-n[0].length)).length&&t.push(r),t.push(ue(n)),i=se.lastIndex,n=se.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function fe(e){return"string"==typeof e}function ge(e){var r,t,n;if(!fe(e))throw new TypeError(ge("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=pe(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return le.apply(null,t)}function de(e){if(!v(e))throw new TypeError(ge("invalid argument. Must provide a string. Value: `%s`.",e));return e.toLowerCase()}function he(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!P(e))return!1;r=e}else r=(new Date).getFullYear();return r%100==0?r%400==0:r%4==0}function be(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var ye={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};return function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(l(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!v(e)&&!P(e))throw new TypeError(be("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!v(e)&&!P(e))throw new TypeError(be("0i1BF",e));if(!P(r))throw new TypeError(be("0i17x",r));n=e,i=r}if(P(n)&&(n<1||n>12))throw new RangeError(be("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=de(n.toString()),void 0===(t=ye[n]))throw new Error(be("0i1BJ",n));return 40320===t&&he(i)&&(t+=1440),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).minutesInMonth=r();
//# sourceMappingURL=browser.js.map
