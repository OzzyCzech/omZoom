var e,t,o,n,i,r,d,a,m;e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},n=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},i=function(e){try{if(Array.isArray(e))return e.filter(t);if(NodeList.prototype.isPrototypeOf(e))return[].slice.call(e).filter(t);if(o(e))return[e].filter(t);if("string"==typeof e)return[].slice.call(document.querySelectorAll(e)).filter(t);return[]}catch(e){throw TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},r=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},d=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,m=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+m+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},a=function(t,o){var n=e({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(t,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),i},function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),m=function t(m){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=window.Promise||function(e){function t(){}e(t,t)},u=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce(function(e,t){return[].concat(e,i(t))},[]);return n.filter(function(e){return -1===g.indexOf(e)}).forEach(function(e){g.push(e),e.classList.add("medium-zoom-image")}),h.forEach(function(e){var t=e.type,o=e.listener,i=e.options;n.forEach(function(e){e.addEventListener(t,o,i)})}),w},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.target,r=function(){var t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},i=void 0,r=void 0;if(y.container){if(y.container instanceof Object)i=(t=e({},t,y.container)).width-t.left-t.right-2*y.margin,r=t.height-t.top-t.bottom-2*y.margin;else{var d=(o(y.container)?y.container:document.querySelector(y.container)).getBoundingClientRect();t=e({},t,{width:d.width,height:d.height,left:d.left,top:d.top})}}i=i||t.width-2*y.margin,r=r||t.height-2*y.margin;var a=b.zoomedHd||b.original,m=n(a)?i:a.naturalWidth||i,c=n(a)?r:a.naturalHeight||r,l=a.getBoundingClientRect(),u=l.top,s=l.left,f=l.width,p=l.height,g=Math.min(Math.min(Math.max(f,m),i)/f,Math.min(Math.max(p,c),r)/p),h=(-s+(i-f)/2+y.margin+t.left)/g,v=(-u+(r-p)/2+y.margin+t.top)/g,z="scale("+g+") translate3d("+h+"px, "+v+"px, 0)";b.zoomed.style.transform=z,b.zoomedHd&&(b.zoomedHd.style.transform=z)};return new l(function(e){if(i&&-1===g.indexOf(i)||b.zoomed){e(w);return}if(i)b.original=i;else if(g.length>0){var t=g;b.original=t[0]}else{e(w);return}if(b.original.dispatchEvent(a("medium-zoom:open",{detail:{zoom:w}})),z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,v=!0,b.zoomed=d(b.original),document.body.appendChild(E),y.template){var n=o(y.template)?y.template:document.querySelector(y.template);b.template=document.createElement("div"),b.template.appendChild(n.content.cloneNode(!0)),document.body.appendChild(b.template)}if(b.original.parentElement&&"PICTURE"===b.original.parentElement.tagName&&b.original.currentSrc&&(b.zoomed.src=b.original.currentSrc),document.body.appendChild(b.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),b.original.classList.add("medium-zoom-image--hidden"),b.zoomed.classList.add("medium-zoom-image--opened"),b.zoomed.addEventListener("click",f),b.zoomed.addEventListener("transitionend",function t(){v=!1,b.zoomed.removeEventListener("transitionend",t),b.original.dispatchEvent(a("medium-zoom:opened",{detail:{zoom:w}})),e(w)}),b.original.getAttribute("data-zoom-src")){b.zoomedHd=b.zoomed.cloneNode(),b.zoomedHd.removeAttribute("srcset"),b.zoomedHd.removeAttribute("sizes"),b.zoomedHd.removeAttribute("loading"),b.zoomedHd.src=b.zoomed.getAttribute("data-zoom-src"),b.zoomedHd.onerror=function(){clearInterval(m),console.warn("Unable to reach the zoom image target "+b.zoomedHd.src),b.zoomedHd=null,r()};var m=setInterval(function(){b.zoomedHd.complete&&(clearInterval(m),b.zoomedHd.classList.add("medium-zoom-image--opened"),b.zoomedHd.addEventListener("click",f),document.body.appendChild(b.zoomedHd),r())},10)}else if(b.original.hasAttribute("srcset")){b.zoomedHd=b.zoomed.cloneNode(),b.zoomedHd.removeAttribute("sizes"),b.zoomedHd.removeAttribute("loading");var c=b.zoomedHd.addEventListener("load",function(){b.zoomedHd.removeEventListener("load",c),b.zoomedHd.classList.add("medium-zoom-image--opened"),b.zoomedHd.addEventListener("click",f),document.body.appendChild(b.zoomedHd),r()})}else r()})},f=function(){return new l(function(e){if(v||!b.original){e(w);return}v=!0,document.body.classList.remove("medium-zoom--opened"),b.zoomed.style.transform="",b.zoomedHd&&(b.zoomedHd.style.transform=""),b.template&&(b.template.style.transition="opacity 150ms",b.template.style.opacity=0),b.original.dispatchEvent(a("medium-zoom:close",{detail:{zoom:w}})),b.zoomed.addEventListener("transitionend",function t(){b.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(b.zoomed),b.zoomedHd&&document.body.removeChild(b.zoomedHd),document.body.removeChild(E),b.zoomed.classList.remove("medium-zoom-image--opened"),b.template&&document.body.removeChild(b.template),v=!1,b.zoomed.removeEventListener("transitionend",t),b.original.dispatchEvent(a("medium-zoom:closed",{detail:{zoom:w}})),b.original=null,b.zoomed=null,b.zoomedHd=null,b.template=null,e(w)})})},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return b.original?f():s({target:t})},g=[],h=[],v=!1,z=0,y=c,b={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(m)?y=m:(m||"string"==typeof m)&&u(m);var E=r((y=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},y)).background);document.addEventListener("click",function(e){var t=e.target;if(t===E){f();return}-1!==g.indexOf(t)&&p({target:t})}),document.addEventListener("keyup",function(e){var t=e.key||e.keyCode;("Escape"===t||"Esc"===t||27===t)&&f()}),document.addEventListener("scroll",function(){if(!v&&b.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(z-e)>y.scrollOffset&&setTimeout(f,150)}}),window.addEventListener("resize",f);var w={open:s,close:f,toggle:p,update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.background&&(E.style.background=t.background),t.container&&t.container instanceof Object&&(t.container=e({},y.container,t.container)),t.template){var n=o(t.template)?t.template:document.querySelector(t.template);t.template=n}return y=e({},y,t),g.forEach(function(e){e.dispatchEvent(a("medium-zoom:update",{detail:{zoom:w}}))}),w},clone:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e({},y,o))},attach:u,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];b.zoomed&&f();var n=t.length>0?t.reduce(function(e,t){return[].concat(e,i(t))},[]):g;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(a("medium-zoom:detach",{detail:{zoom:w}}))}),g=g.filter(function(e){return -1===n.indexOf(e)}),w},on:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.forEach(function(n){n.addEventListener("medium-zoom:"+e,t,o)}),h.push({type:"medium-zoom:"+e,listener:t,options:o}),w},off:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.forEach(function(n){n.removeEventListener("medium-zoom:"+e,t,o)}),h=h.filter(function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())}),w},getOptions:function(){return y},getImages:function(){return g},getZoomedImage:function(){return b.original}};return w},document.onreadystatechange=function(){if("complete"==document.readyState){let e=[];document.querySelectorAll('a[href*=".jpg" i], a[href*=".jpeg" i], a[href*=".png" i], a[href*=".gif" i]').forEach(t=>{let o=t.querySelector("img");o.setAttribute("data-zoom-src",t.href),t.addEventListener("click",e=>e.preventDefault()),e.push(o)}),m(e,{background:"transparent"})}};
//# sourceMappingURL=omZoom.js.map
