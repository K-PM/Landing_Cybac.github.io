(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{6365:function(e,t,a){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==a.g?a.g:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,u=l||d||Function("return this")(),m=Object.prototype.toString,f=Math.max,h=Math.min,p=function(){return u.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return n;if(v(e)){var t,a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var l=r.test(e);return l||s.test(e)?c(e.slice(2),l?2:8):o.test(e)?n:+e}var g=function(e,a,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(t);return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,a,n){var i,o,r,s,c,l,d=0,u=!1,m=!1,g=!0;if("function"!=typeof e)throw TypeError(t);function A(t){var a=i,n=o;return i=o=void 0,d=t,s=e.apply(n,a)}function y(e){var t=e-l;return void 0===l||t>=a||t<0||m&&e-d>=r}function w(){var e,t=p();if(y(t))return x(t);c=setTimeout(w,(e=a-(t-l),m?h(e,r-(t-d)):e))}function x(e){return c=void 0,g&&i?A(e):(i=o=void 0,s)}function j(){var e,t=p(),n=y(t);if(i=arguments,o=this,l=t,n){if(void 0===c)return d=e=l,c=setTimeout(w,a),u?A(e):s;if(m)return c=setTimeout(w,a),A(l)}return void 0===c&&(c=setTimeout(w,a)),s}return a=b(a)||0,v(n)&&(u=!!n.leading,r=(m="maxWait"in n)?f(b(n.maxWait)||0,a):r,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==c&&clearTimeout(c),d=0,i=l=o=c=void 0},j.flush=function(){return void 0===c?s:x(p())},j}(e,a,{leading:i,maxWait:a,trailing:o})},A=NaN,y=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,j=/^0o[0-7]+$/i,k=parseInt,N="object"==typeof e&&e&&e.Object===Object&&e,E="object"==typeof self&&self&&self.Object===Object&&self,C=N||E||Function("return this")(),O=Object.prototype.toString,M=Math.max,z=Math.min,T=function(){return C.Date.now()};function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function D(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==O.call(t))return A;if(L(e)){var t,a="function"==typeof e.valueOf?e.valueOf():e;e=L(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var n=x.test(e);return n||j.test(e)?k(e.slice(2),n?2:8):w.test(e)?A:+e}var S=function(e,t,a){var n,i,o,r,s,c,l=0,d=!1,u=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var a=n,o=i;return n=i=void 0,l=t,r=e.apply(o,a)}function h(e){var a=e-c;return void 0===c||a>=t||a<0||u&&e-l>=o}function p(){var e,a=T();if(h(a))return v(a);s=setTimeout(p,(e=t-(a-c),u?z(e,o-(a-l)):e))}function v(e){return s=void 0,m&&n?f(e):(n=i=void 0,r)}function b(){var e,a=T(),o=h(a);if(n=arguments,i=this,c=a,o){if(void 0===s)return l=e=c,s=setTimeout(p,t),d?f(e):r;if(u)return s=setTimeout(p,t),f(c)}return void 0===s&&(s=setTimeout(p,t)),r}return t=D(t)||0,L(a)&&(d=!!a.leading,o=(u="maxWait"in a)?M(D(a.maxWait)||0,t):o,m="trailing"in a?!!a.trailing:m),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=c=i=s=void 0},b.flush=function(){return void 0===s?r:v(T())},b},B=function(){};function Q(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes);if(function e(t){var a=void 0,n=void 0;for(a=0;a<t.length;a+=1)if((n=t[a]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(a)))return B()})}function H(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var q={isSupported:function(){return!!H()},ready:function(e,t){var a=window.document,n=new(H())(Q);B=t,n.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},I=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},P=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,W=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function $(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){I(this,e)}return P(e,[{key:"phone",value:function(){var e=$();return!(!_.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=$();return!(!W.test(e)&&!Y.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),K=function(e,t){var a=void 0;return U.ie11()?(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):a=new CustomEvent(e,{detail:t}),document.dispatchEvent(a)},V=function(e){return e.forEach(function(e,t){var a,n,i,o,r,s;return a=window.pageYOffset,n=e.options,i=e.position,o=e.node,e.data,r=function(){var t;e.animated&&((t=n.animatedClassNames)&&t.forEach(function(e){return o.classList.remove(e)}),K("aos:out",o),e.options.id&&K("aos:in:"+e.options.id,o),e.animated=!1)},void(n.mirror&&a>=i.out&&!n.once?r():a>=i.in?e.animated||((s=n.animatedClassNames)&&s.forEach(function(e){return o.classList.add(e)}),K("aos:in",o),e.options.id&&K("aos:in:"+e.options.id,o),e.animated=!0):e.animated&&!n.once&&r())})},Z=function(e){for(var t=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),a+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:a,left:t}},J=function(e,t,a){var n=e.getAttribute("data-aos-"+t);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||a},R=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},X=[],ee=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ea=function(){return document.all&&!window.atob},en=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ee=!0),ee&&(e=X,t=et,e.forEach(function(e,a){var n,i,o,r,s,c=J(e.node,"mirror",t.mirror),l=J(e.node,"once",t.once),d=J(e.node,"id"),u=t.useClassNames&&e.node.getAttribute("data-aos"),m=[t.animatedClassName].concat(u?u.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,a){var n=window.innerHeight,i=J(e,"anchor"),o=J(e,"anchor-placement"),r=Number(J(e,"offset",o?0:t)),s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var c=Z(s).top-n;switch(o||a){case"top-bottom":break;case"center-bottom":c+=s.offsetHeight/2;break;case"bottom-bottom":c+=s.offsetHeight;break;case"top-center":c+=n/2;break;case"center-center":c+=n/2+s.offsetHeight/2;break;case"bottom-center":c+=n/2+s.offsetHeight;break;case"top-top":c+=n;break;case"bottom-top":c+=n+s.offsetHeight;break;case"center-top":c+=n+s.offsetHeight/2}return c+r}(e.node,t.offset,t.anchorPlacement),out:c&&(n=e.node,i=t.offset,window.innerHeight,o=J(n,"anchor"),r=J(n,"offset",i),s=n,o&&document.querySelectorAll(o)&&(s=document.querySelectorAll(o)[0]),Z(s).top+s.offsetHeight-r)},e.options={once:l,mirror:c,animatedClassNames:m,id:d}}),V(X=e),window.addEventListener("scroll",g(function(){V(X,et.once)},et.throttleDelay)))},ei=function(){if(X=R(),er(et.disable)||ea())return eo();en()},eo=function(){X.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),et.initClassName&&e.node.classList.remove(et.initClassName),et.animatedClassName&&e.node.classList.remove(et.animatedClassName)})},er=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return et=F(et,e),X=R(),et.disableMutationObserver||q.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),et.disableMutationObserver=!0),et.disableMutationObserver||q.ready("[data-aos]",ei),er(et.disable)||ea()?eo():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),-1===["DOMContentLoaded","load"].indexOf(et.startEvent)?document.addEventListener(et.startEvent,function(){en(!0)}):window.addEventListener("load",function(){en(!0)}),"DOMContentLoaded"===et.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&en(!0),window.addEventListener("resize",S(en,et.debounceDelay,!0)),window.addEventListener("orientationchange",S(en,et.debounceDelay,!0)),X)},refresh:en,refreshHard:ei}}()},6057:function(e,t,a){Promise.resolve().then(a.bind(a,299))},299:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(7437),i=a(2265),o=a(6365),r=a.n(o);a(7002);var s=a(6691),c=a.n(s),l={src:"/_next/static/media/Cybac2.52a98a71.jpg",height:206,width:502,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAArgif/8QAGRAAAwADAAAAAAAAAAAAAAAAAQIDABEh/9oACAEBAAE/AJSmVYle7z//xAAbEQAABwEAAAAAAAAAAAAAAAAAAQIDEhMiMf/aAAgBAgEBPwCSrHdH0f/EABoRAAEFAQAAAAAAAAAAAAAAAAEAAhESITH/2gAIAQMBAT8AgUZg4v/Z",blurWidth:8,blurHeight:3};function d(){return(0,n.jsx)("footer",{children:(0,n.jsxs)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:[(0,n.jsxs)("div",{className:"grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200",children:[(0,n.jsxs)("div",{className:"sm:col-span-12 lg:col-span-3",children:[(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)(c(),{src:l,alt:"",height:35})}),(0,n.jsxs)("div",{className:"text-sm text-gray-600",children:[(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Terminos"})," \xb7 ",(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Politica de privacidad"})]})]}),(0,n.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,n.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"Products"}),(0,n.jsxs)("ul",{className:"text-sm",children:[(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Hino"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Ginecologo"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Gourmand"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Magmar"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Titanium"})})]})]}),(0,n.jsxs)("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,n.jsx)("h6",{className:"text-gray-800 font-medium mb-2",children:"Compa\xf1ia"}),(0,n.jsxs)("ul",{className:"text-sm",children:[(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Direcci\xf3n: : Av. Primavera No. 237-A Col. Jardines de Tuxtla, Tuxtla Guti\xe9rrez, Chiapas"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Tel\xe9fono y Fax: (961) 6157858"})}),(0,n.jsx)("li",{className:"mb-2",children:(0,n.jsx)("a",{href:"#0",className:"text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out",children:"Email: ventas@grupocybac.com"})})]})]})]}),(0,n.jsxs)("div",{className:"md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200",children:[(0,n.jsxs)("ul",{className:"flex mb-4 md:order-1 md:ml-4 md:mb-0",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#0",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Twitter",children:(0,n.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"})})})}),(0,n.jsx)("li",{className:"ml-4",children:(0,n.jsx)("a",{href:"#0",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Github",children:(0,n.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"})})})}),(0,n.jsx)("li",{className:"ml-4",children:(0,n.jsx)("a",{href:"#0",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Facebook",children:(0,n.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"})})})})]}),(0,n.jsx)("div",{className:"text-sm text-gray-600 mr-4",children:"\xa9 Cybac.com. All rights reserved."})]})]})})}function u(e){let{children:t}=e;return(0,i.useEffect)(()=>{r().init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("main",{className:"grow",children:t}),(0,n.jsx)(d,{})]})}},7002:function(){}},function(e){e.O(0,[986,464,971,938,744],function(){return e(e.s=6057)}),_N_E=e.O()}]);