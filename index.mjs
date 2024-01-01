// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@v0.1.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-time-minutes-in-day@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/time-current-year@v0.1.1-esm/index.mjs";var o={1:44640,2:40320,3:44640,4:43200,5:44640,6:43200,7:44640,8:44640,9:43200,10:44640,11:43200,12:44640,jan:44640,january:44640,feb:40320,february:40320,mar:44640,march:44640,apr:43200,april:43200,may:44640,jun:43200,june:43200,jul:44640,july:44640,aug:44640,august:44640,sep:43200,september:43200,oct:44640,october:44640,nov:43200,november:43200,dec:44640,december:44640};function d(d,l){var g,u,j,h;if(0===arguments.length)u=(h=new Date).getMonth()+1,j=h.getFullYear();else if(1===arguments.length)if(e(d))u=(h=d).getMonth()+1,j=h.getFullYear();else{if(!t(d)&&!r(d))throw new TypeError(n("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",d));j=m(),u=d}else{if(!t(d)&&!r(d))throw new TypeError(n("invalid argument. First argument must be either a string or integer. Value: `%s`.",d));if(!r(l))throw new TypeError(n("invalid argument. Second argument must be an integer. Value: `%s`.",l));u=d,j=l}if(r(u)&&(u<1||u>12))throw new RangeError(n("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",u));if(u=s(u.toString()),void 0===(g=o[u]))throw new Error(n("invalid argument. Must provide a recognized month. Value: `%s`.",u));return 40320===g&&i(j)&&(g+=a),g}export{d as default};
//# sourceMappingURL=index.mjs.map
