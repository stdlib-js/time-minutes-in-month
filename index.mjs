// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-minutes-in-day@v0.0.8-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/time-current-year@v0.0.2-esm/index.mjs";var a={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};function d(d,l){var j,h,g,p;if(0===arguments.length)h=(p=new Date).getMonth()+1,g=p.getFullYear();else if(1===arguments.length)if(e(d))h=(p=d).getMonth()+1,g=p.getFullYear();else{if(!t(d)&&!r(d))throw new TypeError(n("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",d));g=o(),h=d}else{if(!t(d)&&!r(d))throw new TypeError(n("0i1BF",d));if(!r(l))throw new TypeError(n("0i17x",l));h=d,g=l}if(r(h)&&(h<1||h>12))throw new RangeError(n("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",h));if(h=s(h.toString()),void 0===(j=a[h]))throw new Error(n("0i1BJ",h));return 40320===j&&i(g)&&(j+=m),j}export{d as default};
//# sourceMappingURL=index.mjs.map
