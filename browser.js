// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString,t=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"",o=r()?function(e){var r,n,o,s,c;if(null==e)return i.call(e);n=e[a],c=a,r=null!=(s=e)&&t.call(s,c);try{e[a]=void 0}catch(r){return i.call(e)}return o=i.call(e),r?e[a]=n:delete e[a],o}:function(e){return i.call(e)},s=Date.prototype.getDay,c=r();function p(e){return"object"==typeof e&&(e instanceof Date||(c?function(e){try{return s.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o(e)))}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,u=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function d(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+g(n):g(n)+e,t&&(e="-"+e)),e}var h=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function b(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!f(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=d(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=d(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===w.call(e.specifier)?w.call(i):h.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function v(e){return"string"==typeof e}var m=Math.abs,y=String.prototype.toLowerCase,E=String.prototype.toUpperCase,x=String.prototype.replace,k=/e\+(\d)$/,S=/e-(\d)$/,V=/^(\d+)$/,I=/^(\d+)e/,F=/\.0$/,T=/\.0*e/,$=/(\..*[^0])0*e/;function _(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":m(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=x.call(i,$,"$1e"),i=x.call(i,T,"e"),i=x.call(i,F,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=x.call(i,k,"e+0$1"),i=x.call(i,S,"e-0$1"),e.alternate&&(i=x.call(i,V,"$1."),i=x.call(i,I,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===E.call(e.specifier)?E.call(i):y.call(i)}function j(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function A(e,r,i){var t=r-e.length;return t<0?e:e=i?e+j(t):j(t)+e}var C=String.fromCharCode,R=isNaN,O=Array.isArray;function Z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,i,t,n,a,o,s,c,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(v(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Z(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,R(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,R(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=b(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!R(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=R(a)?String(t.arg):C(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=_(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=d(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,i,t,n;for(i=[],n=0,t=P.exec(e);t;)(r=e.slice(n,P.lastIndex-t[0].length)).length&&i.push(r),i.push(W(t)),n=P.lastIndex,t=P.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function G(e){return"string"==typeof e}function M(e){var r,i;if(!G(e))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[L(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return N.apply(null,r)}var D=Object.prototype,U=D.toString,X=D.__defineGetter__,Y=D.__defineSetter__,z=D.__lookupGetter__,q=D.__lookupSetter__,B=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?u:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===U.call(i))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(z.call(e,r)||q.call(e,r)?(t=e.__proto__,e.__proto__=D,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&X&&X.call(e,r,i.get),o&&Y&&Y.call(e,r,i.set),e};function H(e,r,i){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function J(e){return"string"==typeof e}var K=String.prototype.valueOf,Q=r();function ee(e){return"object"==typeof e&&(e instanceof String||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object String]"===o(e)))}function re(e){return J(e)||ee(e)}function ie(e){return"number"==typeof e}H(re,"isPrimitive",J),H(re,"isObject",ee);var te=Number,ne=te.prototype.toString,ae=r();function oe(e){return"object"==typeof e&&(e instanceof te||(ae?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function se(e){return ie(e)||oe(e)}H(se,"isPrimitive",ie),H(se,"isObject",oe);var ce=Number.POSITIVE_INFINITY,pe=te.NEGATIVE_INFINITY,le=Math.floor;function ue(e){return e<ce&&e>pe&&le(r=e)===r;var r}function fe(e){return ie(e)&&ue(e)}function ge(e){return oe(e)&&ue(e.valueOf())}function de(e){return fe(e)||ge(e)}function he(e){return"number"==typeof e}function we(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function be(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+we(n):we(n)+e,t&&(e="-"+e)),e}H(de,"isPrimitive",fe),H(de,"isObject",ge);var ve=String.prototype.toLowerCase,me=String.prototype.toUpperCase;function ye(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!he(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=be(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=be(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===me.call(e.specifier)?me.call(i):ve.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ee(e){return"string"==typeof e}var xe=Math.abs,ke=String.prototype.toLowerCase,Se=String.prototype.toUpperCase,Ve=String.prototype.replace,Ie=/e\+(\d)$/,Fe=/e-(\d)$/,Te=/^(\d+)$/,$e=/^(\d+)e/,_e=/\.0$/,je=/\.0*e/,Ae=/(\..*[^0])0*e/;function Ce(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!he(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":xe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Ve.call(i,Ae,"$1e"),i=Ve.call(i,je,"e"),i=Ve.call(i,_e,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ve.call(i,Ie,"e+0$1"),i=Ve.call(i,Fe,"e-0$1"),e.alternate&&(i=Ve.call(i,Te,"$1."),i=Ve.call(i,$e,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Se.call(e.specifier)?Se.call(i):ke.call(i)}function Re(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Oe(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Re(t):Re(t)+e}var Ze=String.fromCharCode,Ne=isNaN,Pe=Array.isArray;function We(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Le(e){var r,i,t,n,a,o,s,c,p;if(!Pe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Ee(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=We(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ne(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ne(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ye(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ne(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ne(a)?String(t.arg):Ze(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ce(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=be(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Oe(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ge=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Me(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function De(e){var r,i,t,n;for(i=[],n=0,t=Ge.exec(e);t;)(r=e.slice(n,Ge.lastIndex-t[0].length)).length&&i.push(r),i.push(Me(t)),n=Ge.lastIndex,t=Ge.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ue(e){return"string"==typeof e}function Xe(e){var r,i;if(!Ue(e))throw new TypeError(Xe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[De(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Le.apply(null,r)}function Ye(e){if(!J(e))throw new TypeError(Xe("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e.toLowerCase()}(e)}function ze(){return(new Date).getFullYear()}function qe(e){var r;if(arguments.length)if(p(e))r=e.getFullYear();else{if(!fe(e))return!1;r=e}else r=ze();return r%100==0?r%400==0:r%4==0}function Be(e){return"number"==typeof e}function He(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Je(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+He(n):He(n)+e,t&&(e="-"+e)),e}var Ke=String.prototype.toLowerCase,Qe=String.prototype.toUpperCase;function er(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Be(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Je(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Je(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Qe.call(e.specifier)?Qe.call(i):Ke.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function rr(e){return"string"==typeof e}var ir=Math.abs,tr=String.prototype.toLowerCase,nr=String.prototype.toUpperCase,ar=String.prototype.replace,or=/e\+(\d)$/,sr=/e-(\d)$/,cr=/^(\d+)$/,pr=/^(\d+)e/,lr=/\.0$/,ur=/\.0*e/,fr=/(\..*[^0])0*e/;function gr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Be(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ir(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ar.call(i,fr,"$1e"),i=ar.call(i,ur,"e"),i=ar.call(i,lr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ar.call(i,or,"e+0$1"),i=ar.call(i,sr,"e-0$1"),e.alternate&&(i=ar.call(i,cr,"$1."),i=ar.call(i,pr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===nr.call(e.specifier)?nr.call(i):tr.call(i)}function dr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function hr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+dr(t):dr(t)+e}var wr=String.fromCharCode,br=isNaN,vr=Array.isArray;function mr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function yr(e){var r,i,t,n,a,o,s,c,p;if(!vr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(rr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=mr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,br(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,br(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=er(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!br(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=br(a)?String(t.arg):wr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=gr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Je(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=hr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Er=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function xr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function kr(e){var r,i,t,n;for(i=[],n=0,t=Er.exec(e);t;)(r=e.slice(n,Er.lastIndex-t[0].length)).length&&i.push(r),i.push(xr(t)),n=Er.lastIndex,t=Er.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Sr(e){return"string"==typeof e}function Vr(e){var r,i,t;if(!Sr(e))throw new TypeError(Vr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=kr(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return yr.apply(null,i)}var Ir={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};return function(e,r){var i,t,n,a;if(0===arguments.length)t=(a=new Date).getMonth()+1,n=a.getFullYear();else if(1===arguments.length)if(p(e))t=(a=e).getMonth()+1,n=a.getFullYear();else{if(!J(e)&&!fe(e))throw new TypeError(Vr("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));n=ze(),t=e}else{if(!J(e)&&!fe(e))throw new TypeError(Vr("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!fe(r))throw new TypeError(Vr("invalid argument. Second argument must be an integer. Value: `%s`.",r));t=e,n=r}if(fe(t)&&(t<1||t>12))throw new RangeError(Vr("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",t));if(t=Ye(t.toString()),void 0===(i=Ir[t]))throw new Error(Vr("invalid argument. Must provide a recognized month. Value: `%s`.",t));return 40320===i&&qe(n)&&(i+=1440),i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).minutesInMonth=r();
//# sourceMappingURL=browser.js.map
