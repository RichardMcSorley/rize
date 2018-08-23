(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Rize provides some basic operations for page such as navigation and authentication.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The most common operation is visit a page by using "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#goto",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("goto")]),a("OutboundLink")],1),t._v(" method.")]),t._v(" "),t._m(2),a("p",[t._v("And, you can go forward, go back and refresh current page:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("You can specify user agent string:")]),t._v(" "),t._m(5),a("p",[t._v("HTTP authentication:")]),t._v(" "),t._m(6),a("p",[t._v("HTTP headers:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("You can evaluating function or expression in "),a("em",[t._v("browser")]),t._v(" context. Note that it is in browser not in Node.js, so if you want to do something in Node.js environment, please use "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#execute",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("execute")]),a("OutboundLink")],1),t._v(" method.")]),t._v(" "),t._m(10),a("p",[t._v("You can pass a string and it will be treated as an expression:")]),t._v(" "),t._m(11),a("p",[t._v("Beginners may make a mistake to visit variables directly:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("The solution is write a function with parameter(s) and pass argument(s) manually like this:")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("To keep the API chainable, the "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#evaluate",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("evaluate")]),a("OutboundLink")],1),t._v(" method doesn't return the value of your function or expression and it will return the current "),a("code",[t._v("Rize")]),t._v(" instance, though your function or expression will return something.")]),t._v(" "),a("p",[t._v("There is another method called "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#evaluatewithreturn",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("evaluateWithReturn")]),a("OutboundLink")],1),t._v(" and it can let you retrieve the return value(wrapped with "),a("code",[t._v("Promise")]),t._v(").")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("And the "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#execute",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("execute")]),a("OutboundLink")],1),t._v(" method just give you a chance to do something after last operation. All the code will be execute in Node.js. For example, we can log something to a file on the disk:")]),t._v(" "),t._m(21),a("p",[t._v("You can check out more info by reading documentation of "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#execute",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("execute")]),a("OutboundLink")],1),t._v(" method.")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("To add "),a("code",[t._v("<script>")]),t._v(" tag, please use "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#addscripttag",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("addScriptTag")]),a("OutboundLink")],1),t._v(" method; to add "),a("code",[t._v("<style>")]),t._v(" tag, please use "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#addstyletag",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("addStyleTag")]),a("OutboundLink")],1),t._v(" method.")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("Rize supports multiple pages (aka tabs).")]),t._v(" "),a("p",[t._v("You should understand something when using multiple pages in Rize. When you launched puppeteer, there will be two pages. One is created by puppeteer by default and the another one is created by Rize. This is useful if you aren't going to use multiple pages. (You don't need to open a new page manually.)")]),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("To open a new page, just call the "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#newpage",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("newPage")]),a("OutboundLink")],1),t._v(" method.")]),t._v(" "),t._m(29),a("p",[t._v("The "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#newpage",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("newPage")]),a("OutboundLink")],1),t._v(" receive two arguments (both are optional). The first one is "),a("code",[t._v("name")]),t._v(". You can use this to identify different pages and it is useful when you want to switch page.")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("To close the page, just call "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#closepage",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("closePage")]),a("OutboundLink")],1),t._v(" method.")]),t._v(" "),t._m(34),a("p",[t._v("Or you can give the name of the page you want to close:")]),t._v(" "),t._m(35),t._m(36),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#switchpage",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("switchPage")]),a("OutboundLink")],1),t._v(" receive one argument and it can be a string or a number.")]),t._v(" "),t._m(37),t._v(" "),a("p",[t._v("When it is a number, it will find the page by index in the internal array of pages and switch to it.")]),t._v(" "),t._m(38)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"page-operations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-operations","aria-hidden":"true"}},[this._v("#")]),this._v(" Page Operations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"navigation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navigation","aria-hidden":"true"}},[this._v("#")]),this._v(" Navigation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[this._v("rize"),e("span",{attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{attrs:{class:"token function"}},[this._v("goto")]),e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{attrs:{class:"token string"}},[this._v("'http://example.com'")]),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forward")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("back")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("refresh")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"page-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Page configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[this._v("rize"),e("span",{attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{attrs:{class:"token function"}},[this._v("withUserAgent")]),e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{attrs:{class:"token comment"}},[this._v("/* user agent */")]),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("withAuth")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'username'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'password'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("withHeaders")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token comment"}},[t._v("/* extra headers */")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"evaluating-function-in-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evaluating-function-in-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Evaluating function in page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"basic-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic usage")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("evaluate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'output in browser not node.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[this._v("rize"),e("span",{attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{attrs:{class:"token function"}},[this._v("evaluate")]),e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{attrs:{class:"token string"}},[this._v("'console.log(\"output in browser not node.js\")'")]),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Don't do like this!")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" greeting "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hi'")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("evaluate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("As mentioned above, the function or expression will be evaluated in browser context. However, the variable "),e("code",[this._v("greeting")]),this._v(" was not existed in browser context. (Unless the page really defined it or you have defined it.) So the code above will throw a "),e("code",[this._v("ReferenceError")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" greeting "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hi'")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("evaluate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" greeting"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// Works!")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"retrieve-return-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-return-value","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieve return value")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Rize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" byExpr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("evaluateWithReturn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'document.title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" byFunc "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("evaluateWithReturn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"difference-between-evaluate-method-and-execute-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#difference-between-evaluate-method-and-execute-method","aria-hidden":"true"}},[this._v("#")]),this._v(" Difference between "),e("code",[this._v("evaluate")]),this._v(" method and "),e("code",[this._v("execute")]),this._v(" method")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("TL;DR: The code in "),e("code",[this._v("evaluate")]),this._v(" method will be evaluate in browser while the code in "),e("code",[this._v("execute")]),this._v(" method will be execute in Node.js.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When you use "),e("code",[this._v("evaluate")]),this._v(" method, your function will be stringify (by calling "),e("code",[this._v("toString")]),this._v(" method) and your arguments will be serialized. So if your arguments cannot be serialized some errors will be occurred.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After stringified your function (expression will be passed as string so no need to do that) and serialized your arguments, those code will be sent to browser and evaluated in browser. That means your code can visit variables in browser context (such as "),e("code",[this._v("window")]),this._v(" and "),e("code",[this._v("document")]),this._v(").")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Rize")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("goto")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'http://example.com'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("execute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" fs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("writeFileSync")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'operations.log'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'visiting...'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"adding-tags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-tags","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding tags")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can add "),e("code",[this._v("<script>")]),this._v(" or "),e("code",[this._v("<style>")]),this._v(" tag to current page, just like injecting some JavaScript code or CSS code.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("These two method have the same function signature. The first parameter "),a("code",[t._v("type")]),t._v(" can "),a("strong",[t._v("only")]),t._v(" be "),a("code",[t._v("url")]),t._v(", "),a("code",[t._v("path")]),t._v(" or "),a("code",[t._v("content")]),t._v(". The second parameter is "),a("code",[t._v("value")]),t._v(", which decided by the first parameter.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("If the first parameter "),a("code",[t._v("type")]),t._v(" is "),a("code",[t._v("url")]),t._v(", you should give a URL to a remote JS/CSS file.")]),t._v(" "),a("li",[t._v("If the first parameter "),a("code",[t._v("type")]),t._v(" is "),a("code",[t._v("path")]),t._v(", you should give a path to a local JS/CSS file.")]),t._v(" "),a("li",[t._v("If the first parameter "),a("code",[t._v("type")]),t._v(" is "),a("code",[t._v("content")]),t._v(", you should give valid JavaScript code/CSS code.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Unless you have specify an old version Chrome/Chromium, you can feel free to use latest ES features.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"multiple-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" Multiple pages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"open-a-new-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-a-new-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Open a new page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[this._v("rize"),e("span",{attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{attrs:{class:"token function"}},[this._v("newPage")]),e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The second one is "),e("code",[this._v("options")]),this._v(" which has two options.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("force")]),this._v(" option is used to replace the old page with the same "),e("code",[this._v("name")]),this._v(" you gave. If "),e("code",[this._v("force")]),this._v(" is true, when you open a new page with duplicated name, existing page will be replaced with this new one. Otherwise, the existing page will be kept and no new page will be created.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("stayCurrent")]),this._v(" option is used to determine if stay in current page after new page was created. If "),e("code",[this._v("stayCurrent")]),this._v(" is true, after opened a new page, the active page won't be changed. Otherwise, the active page will be switched to the new page.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"close-a-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#close-a-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Close a page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[this._v("rize"),e("span",{attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{attrs:{class:"token function"}},[this._v("closePage")]),e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[this._v("rize"),e("span",{attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{attrs:{class:"token function"}},[this._v("closePage")]),e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{attrs:{class:"token string"}},[this._v("'page1'")]),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"switch-to-another-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch-to-another-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch to another page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When it is a string, it means "),e("code",[this._v("name")]),this._v(". It is the name of the page you want to switch to.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("switchPage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("switchPage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'page0'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="page.md";e.default=n.exports}}]);