(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ELNm:function(t,e,n){var s;n("Tze0"),n("bWfx"),n("91GP"),n("Vd3H"),n("HAE/"),s=function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={exports:{},id:s,loaded:!1};return t[s].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),a=n(1),r=n(3),i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a.initializer.load(this,n,e),this.begin()}return s(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),a=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=r.htmlParser.typeHtmlChars(t,e,n);var s=0,i=t.substr(e);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var o=1;o+=(i=/\d+/.exec(i)[0]).length,s=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+o),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==t.substr(e+a).charAt(0)&&(a++,!(e+a>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+a),c=t.substring(e+a+1);t=u+l+c,a--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,a),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var s=t.substr(0,e);this.replaceText(s),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=r.htmlParser.backSpaceHtmlChars(t,e,n);var s=t.substr(0,e);if(n.replaceText(s),n.smartBackspace){var a=n.strings[n.arrayPos+1];a&&s===a.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),s)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=i,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),i=n(2),o=(s=i)&&s.__esModule?s:{default:s},u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=a({},o.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var s=Array.prototype.slice.apply(t.stringsElement.children),r=s.length;if(r)for(var i=0;i<r;i+=1){var u=s[i];t.strings.push(u.innerHTML.trim())}}for(var i in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[i]=i;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var e=document.createElement("style");e.type="text/css",e.setAttribute("data-typed-js-css",!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=n,document.body.appendChild(e))}}}]),t}();e.default=u;var l=new u;e.initializer=l},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if("<"===s||"&"===s){var a="";for(a="<"===s?">":";";t.substr(e+1).charAt(0)!==a&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if(">"===s||";"===s){var a="";for(a=">"===s?"<":"&";t.substr(e-1).charAt(0)!==a&&!(--e<0););e--}return e}}]),t}();e.default=s;var a=new s;e.htmlParser=a}])},t.exports=s()},RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return f}));n("0mN4");var s=n("q1tI"),a=n.n(s),r=n("ELNm"),i=n.n(r),o=n("9eSz"),u=n.n(o),l=n("IP2g"),c=n("8tEE"),p=(n("pxef"),n("KHDO"));var h=function(t){var e,n;function s(){return t.apply(this,arguments)||this}n=t,(e=s).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=s.prototype;return r.componentDidMount=function(){new i.a("#typer",{strings:['\n        <span class="highlight-const">const</span> \n          <span class="highlight-variable">description</span> <span class="highlight-equalsign">=</span> {<br> \n          &nbsp;&nbsp;<span class="highlight-key">name</span>: <span class="highlight-string">"Chenxiao Guan"</span>,<br>\n          &nbsp;&nbsp;<span class="highlight-key">speaks</span>: [<span class="highlight-string">"English"</span>, <span class="highlight-string">"Mandarin Chinese"</span>],<br>\n          &nbsp;&nbsp;<span class="highlight-key">interestedIn</span>: [<span class="highlight-string">"Web Development"</span>, <span class="highlight-string">"DevOps"</span>, <span class="highlight-string">"Digital Privacy"</span>],<br>\n          &nbsp;&nbsp;<span class="highlight-key">favoriteLanguage</span>: <span class="highlight-string">"JavaScript"</span>,<br>\n          &nbsp;&nbsp;<span class="highlight-key">frameworksOfChoice</span>: [<span class="highlight-string">"React"</span>, <span class="highlight-string">"Express"</span>],<br>\n        };'],typeSpeed:30})},r.render=function(){var t=this.props.data;return a.a.createElement("div",{id:"app-container",className:"container"},a.a.createElement("div",{className:"landing-left"}),a.a.createElement("div",{className:"landing-right"}),a.a.createElement("div",{id:"main-content",className:"main-content"},a.a.createElement(p.a,null),a.a.createElement("div",{className:"personal-card"},a.a.createElement("div",{className:"personal-card-main"},a.a.createElement(u.a,{className:"personal-card-icon",fixed:t.file.childImageSharp.fixed})),a.a.createElement("div",{className:"personal-card-name"},a.a.createElement("h2",null,"Chenxiao"),a.a.createElement("h2",null,"Guan")),a.a.createElement("div",{className:"personal-card-title"},a.a.createElement("span",{className:"separate"}),a.a.createElement("h4",null,"Aspiring Software Engineer")),a.a.createElement("div",{className:"personal-card-bottom"},a.a.createElement("div",{className:"socialmedia-icons"},a.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/tismy97"},a.a.createElement(l.a,{size:"lg",icon:c.d})),a.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/oddguan"},a.a.createElement(l.a,{size:"lg",icon:c.b})),a.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/oddguan"},a.a.createElement(l.a,{size:"lg",icon:c.a})),a.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://linkedin.com/in/chenxiao-guan"},a.a.createElement(l.a,{size:"lg",icon:c.c}))))),a.a.createElement("div",{className:"self-intro"},a.a.createElement("div",{className:"paragraphs"},a.a.createElement("h1",null,"Hello There!"),a.a.createElement("h2",null,"Welcome to my space on the World Wide Web."),a.a.createElement("div",{id:"typer-wrapper"},a.a.createElement("div",{id:"typer"}))))))},s}(a.a.Component);e.default=h;var f="2379360127"},pxef:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-21666c683ea1eacea213.js.map