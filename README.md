<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# minutesInMonth

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine the number of minutes in a month.



<section class="usage">

## Usage

```javascript
import minutesInMonth from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-minutes-in-month@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/time-minutes-in-month/tags). For example,

```javascript
import minutesInMonth from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-minutes-in-month@v0.2.2-esm/index.mjs';
```

#### minutesInMonth( \[month\[, year]] )

Returns the number of minutes in a month.

```javascript
var num = minutesInMonth();
// returns <number>
```

By default, the function returns the number of minutes in the current month of the current year (according to local time). To determine the number of minutes for a particular month and year, provide `month` and `year` arguments.

```javascript
var num = minutesInMonth( 2 );
// returns <number>

num = minutesInMonth( 2, 2016 );
// returns 41760

num = minutesInMonth( 2, 2017 );
// returns 40320
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var num = minutesInMonth( 2, 2016 );
// returns 41760

num = minutesInMonth( 'feb', 2016 );
// returns 41760

num = minutesInMonth( 'february', 2016 );
// returns 41760
```

The function also supports providing a [`Date`][date-object] object.

```javascript
var num = minutesInMonth( new Date() );
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import minutesInMonth from 'https://cdn.jsdelivr.net/gh/stdlib-js/time-minutes-in-month@esm/index.mjs';

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = minutesInMonth( 'feb', i );
    console.log( 'In the year %d, February has %d minutes.', i, v );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/time-minutes-in-year`][@stdlib/time/minutes-in-year]</span><span class="delimiter">: </span><span class="description">determine the number of minutes in a year according to the Gregorian calendar.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-minutes-in-month.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-minutes-in-month

[test-image]: https://github.com/stdlib-js/time-minutes-in-month/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/time-minutes-in-month/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-minutes-in-month/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-minutes-in-month?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-minutes-in-month.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-minutes-in-month/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/time-minutes-in-month#cli
[cli-url]: https://github.com/stdlib-js/time-minutes-in-month/tree/cli
[@stdlib/time-minutes-in-month]: https://github.com/stdlib-js/time-minutes-in-month/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-minutes-in-month/tree/deno
[deno-readme]: https://github.com/stdlib-js/time-minutes-in-month/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/time-minutes-in-month/tree/umd
[umd-readme]: https://github.com/stdlib-js/time-minutes-in-month/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/time-minutes-in-month/tree/esm
[esm-readme]: https://github.com/stdlib-js/time-minutes-in-month/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/time-minutes-in-month/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-minutes-in-month/main/LICENSE

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<!-- <related-links> -->

[@stdlib/time/minutes-in-year]: https://github.com/stdlib-js/time-minutes-in-year/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
