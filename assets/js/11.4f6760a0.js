(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{564:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("JavaScript 本质上是一门单线程语言。对于在它被设计出来的那个年代来说，这样的设计是一个很好的选择。那个时候的人们很少有多处理器计算机，并且当时也只是打算用 JavaScript 来编写少量的代码。")]),t._v(" "),a("p",[t._v("当然，随着时间的流逝，电脑的性能得到了飞速的提升。JavaScript 也变成了众多流行语言中的一员。许多非常受欢迎的应用或多或少都有 JavaScript 的影子。为此，找到一种可以突破传统单线程语言限制的方法变得很有必要。")]),t._v(" "),a("p",[t._v("自从 (setTimeout() 和 setInterval()) 加入到 Web API 后，浏览器提供的 JavaScript 环境就已经逐渐开始包含了任务安排、多线程应用开发等强大的特性。了解 JavaScript 运行时是如何安排和运行代码的对了解 queueMicrotask() 会非常有作用。")]),t._v(" "),a("p",[t._v("JavaScript 执行上下文\n注意：对于大多数 JavaScript 开发人员来说，这些细节并不重要。这里提供的信息只用于了解为什么微任务非常有用以及它们是如何工作的。如果你并不关心这些内容，你可以跳过这部分或者在你觉得需要的时候再倒回来查看。")]),t._v(" "),a("p",[t._v("当一段 JavaScript 代码在运行的时候，它实际上是运行在执行上下文中。下面3种类型的代码会创建一个新的执行上下文：")]),t._v(" "),a("p",[t._v("全局上下文是为运行代码主体而创建的执行上下文，也就是说它是为那些存在于JavaScript 函数之外的任何代码而创建的。\n每个函数会在执行的时候创建自己的执行上下文。这个上下文就是通常说的 “本地上下文”。\n使用 eval() 函数也会创建一个新的执行上下文。\n每一个上下文在本质上都是一种作用域层级。每个代码段开始执行的时候都会创建一个新的上下文来运行它，并且在代码退出的时候销毁掉。看看下面这段 JavaScript 程序：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" outputElem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"output"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" userLanguages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"Mike"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"Teresa"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greetUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("localGreeting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" language "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userLanguages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("language"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("¡Hola, ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        greeting "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello, ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  outputElem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("localGreeting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<br>\\r"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greetUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mike"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greetUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Teresa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greetUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Veronica"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这段程序代码包含了三个执行上下文，其中有些会在程序运行的过程中多次创建和销毁。每个上下文创建的时候会被推入执行上下文栈。当退出的时候，它会从上下文栈中移除。")]),t._v(" "),a("p",[t._v("程序开始运行时，全局上下文就会被创建好。\n当执行到 "),a("code",[t._v('greetUser("Mike")')]),t._v(" 的时候会为 "),a("code",[t._v("greetUser()")]),t._v(" 函数创建一个它的上下文。这个执行上下文会被推入执行上下文栈中。\n当 "),a("code",[t._v("greetUser()")]),t._v(" 调用 "),a("code",[t._v("localGreeting()")]),t._v("的时候会为该方法创建一个新的上下文。并且在 "),a("code",[t._v("localGreeting()")]),t._v(" 退出的时候它的上下文也会从执行栈中弹出并销毁。 程序会从栈中获取下一个上下文并恢复执行, 也就是从 "),a("code",[t._v("greetUser()")]),t._v(" 剩下的部分开始执行。\n"),a("code",[t._v("greetUser()")]),t._v(" 执行完毕并退出，其上下文也从栈中弹出并销毁。\n当 "),a("code",[t._v('greetUser("Teresa")')]),t._v(" 开始执行时，程序又会为它创建一个上下文并推入栈顶。\n当 "),a("code",[t._v("greetUser()")]),t._v(" 调用 "),a("code",[t._v("localGreeting()")]),t._v("的时候另一个上下文被创建并用于运行该函数。 当 "),a("code",[t._v("localGreeting()")]),t._v(" 退出的时候它的上下文也从栈中弹出并销毁。 "),a("code",[t._v("greetUser()")]),t._v(" 得到恢复并继续执行剩下的部分。\n"),a("code",[t._v("greetUser()")]),t._v(" 执行完毕并退出，其上下文也从栈中弹出并销毁。\n然后执行到 "),a("code",[t._v('greetUser("Veronica")')]),t._v(" 又再为它创建一个上下文并推入栈顶。\n当 "),a("code",[t._v("greetUser()")]),t._v(" 调用 "),a("code",[t._v("localGreeting()")]),t._v("的时候，另一个上下文被创建用于执行该函数。当 "),a("code",[t._v("localGreeting()")]),t._v("执行完毕，它的上下文也从栈中弹出并销毁。\n"),a("code",[t._v("greetUser()")]),t._v(" 执行完毕退出，其上下文也从栈中弹出并销毁。\n主程序退出，全局执行上下文从执行栈中弹出。此时栈中所有的上下文都已经弹出，程序执行完毕。\n以这种方式来使用执行上下文，使得每个程序和函数都能够拥有自己的变量和其他对象。每个上下文还能够额外的跟踪程序中下一行需要执行的代码以及一些对上下文非常重要的信息。以这种方式来使用上下文和上下文栈，使得我们可以对程序运行的一些基础部分进行管理，包括局部和全局变量、函数的调用与返回等。")]),t._v(" "),a("p",[t._v("关于递归函数——即多次调用自身的函数，需要特别注意：每次递归调用自身都会创建一个新的上下文。这使得 JavaScript 运行时能够追踪递归的层级以及从递归中得到的返回值，但这也意味着每次递归都会消耗内存来创建新的上下文。")])])}),[],!1,null,null,null);s.default=e.exports}}]);