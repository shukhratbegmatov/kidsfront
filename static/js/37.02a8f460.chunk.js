(this["webpackJsonpkids-sport"]=this["webpackJsonpkids-sport"]||[]).push([[37],{534:function(e,t,n){"use strict";var o=n(1),r=(n(0),n(297)),a=n.n(r),i=n(296),c=n.n(i),l=n(688),s=n(575),u=n(689),p=n(718),f=n(535),d=n.n(f),h=function(){return Object(o.jsx)("div",{className:d.a.icon,children:Object(o.jsx)("svg",{width:"13",height:"9",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M7.02737 8.05362C6.62726 8.5428 5.87936 8.5428 5.47925 8.05362L0.227837 1.63311C-0.306226 0.980155 0.158345 9.91932e-07 1.0019 9.18186e-07L11.5047 0C12.3483 -7.37456e-08 12.8128 0.980154 12.2788 1.63311L7.02737 8.05362Z",fill:"#558EF7"})})})};t.a=function(e){var t=e.title,n=e.content,r=e.expanded,i=e.index,f=e.handleChange;try{var b=n?c()(JSON.parse(n)):null}catch(v){}return Object(o.jsx)("div",{className:d.a.container,children:Object(o.jsxs)(p.a,{className:r===i?"".concat(d.a.accordion," ").concat(d.a.expanded):d.a.accordion,expanded:r===i,onChange:f(i),children:[Object(o.jsx)(l.a,{expandIcon:Object(o.jsx)(h,{}),className:r===i?d.a.titleBar:d.a.borderBottom,"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(o.jsx)(s.a,{className:d.a.title,children:t})}),Object(o.jsx)(u.a,{className:"p-0",children:Object(o.jsx)(s.a,{className:d.a.text,children:b?a()(b):null})})]})})}},535:function(e,t,n){e.exports={container:"accordion_container__1oB9k",title:"accordion_title__8a_TG",accordion:"accordion_accordion__2Rf3i",expanded:"accordion_expanded__3aH4G",text:"accordion_text__yWbPY",borderBottom:"accordion_borderBottom__3R73b",titleBar:"accordion_titleBar__2g84Z",icon:"accordion_icon__2iryL"}},536:function(e,t,n){var o;o=function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var o=e.direction,r=e.value;switch(o){case"top":return n.top+r<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+r<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-r>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-r>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var o=n(1),r=n.n(o),a=n(2),i=n.n(a),c=n(0),l=n.n(c),s=n(3),u=n.n(s);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=d(t).call(this,e),n=!r||"object"!==p(r)&&"function"!==typeof r?h(o):r,v(h(n),"getContainer",(function(){return n.props.containment||window})),v(h(n),"addEventListener",(function(e,t,o,r){var a;n.debounceCheck||(n.debounceCheck={});var i=function(){a=null,n.check()},c={target:e,fn:r>-1?function(){a||(a=setTimeout(i,r||0))}:function(){clearTimeout(a),a=setTimeout(i,o||0)},getLastTimeout:function(){return a}};e.addEventListener(t,c.fn),n.debounceCheck[t]=c})),v(h(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),v(h(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),v(h(n),"check",(function(){var e,t,o=n.node;if(!o)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(o.getBoundingClientRect())),n.props.containment){var r=n.props.containment.getBoundingClientRect();t={top:r.top,left:r.left,bottom:r.bottom,right:r.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var a=n.props.offset||{};"object"===p(a)&&(t.top+=a.top||0,t.left+=a.left||0,t.bottom-=a.bottom||0,t.right-=a.right||0);var i={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},c=e.height>0&&e.width>0,l=c&&i.top&&i.left&&i.bottom&&i.right;if(c&&n.props.partialVisibility){var s=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"===typeof n.props.partialVisibility&&(s=i[n.props.partialVisibility]),l=n.props.minTopValue?s&&e.top<=t.bottom-n.props.minTopValue:s}"string"===typeof a.direction&&"number"===typeof a.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",a.direction,a.value),l=u()(a,e,t));var f=n.state;return n.state.isVisible!==l&&(f={isVisible:l,visibilityRect:i},n.setState(f),n.props.onChange&&n.props.onChange(l)),f})),n.state={isVisible:null,visibilityRect:{}},n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.node=i.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=i.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):r.a.Children.only(this.props.children)}}])&&f(n.prototype,o),a&&f(n,a),t}(r.a.Component);v(m,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:r.a.createElement("span",null)}),v(m,"propTypes",{onChange:l.a.func,active:l.a.bool,partialVisibility:l.a.oneOfType([l.a.bool,l.a.oneOf(["top","right","bottom","left"])]),delayedCall:l.a.bool,offset:l.a.oneOfType([l.a.shape({top:l.a.number,left:l.a.number,bottom:l.a.number,right:l.a.number}),l.a.shape({direction:l.a.oneOf(["top","right","bottom","left"]),value:l.a.number})]),scrollCheck:l.a.bool,scrollDelay:l.a.number,scrollThrottle:l.a.number,resizeCheck:l.a.bool,resizeDelay:l.a.number,resizeThrottle:l.a.number,intervalCheck:l.a.bool,intervalDelay:l.a.number,containment:"undefined"!==typeof window?l.a.instanceOf(window.Element):l.a.any,children:l.a.oneOfType([l.a.element,l.a.func]),minTopValue:l.a.number})},function(e,t,n){"use strict";var o=n(6);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=o(n(0),n(20))},597:function(e,t,n){e.exports={bgImg:"faq_bgImg__QWN_s",backgImg:"faq_backgImg__3cXCA",path:"faq_path__3gxBa",link:"faq_link__OxLcH",dot:"faq_dot__17Hrg",current:"faq_current__ZJjEC",pageTitle:"faq_pageTitle__c4h3X",share:"faq_share__1FNeT",iconCont:"faq_iconCont__2k1jF",tableHeader:"faq_tableHeader__30P-y",leftHead:"faq_leftHead__2SZz-",poiner:"faq_poiner__18yhd","slick-dots":"faq_slick-dots__oJdn7",faqs:"faq_faqs__1_Thw",content:"faq_content__3emxi",searchbarCont:"faq_searchbarCont__2gacz",container:"faq_container__fbGM6"}},690:function(e,t,n){"use strict";n.r(t);var o=n(5),r=n(11),a=n.n(r),i=n(22),c=n(9),l=n(1),s=n(0),u=n.n(s),p=(n(49),n(597)),f=n.n(p),d=n(80),h=n(82),b=n(128),v=n(534),m=n(56),y=(n(536),n(50)),_=n(127),g=n(131),j=n.n(g);t.default=function(){var e,t=Object(m.a)(),n=Object(s.useState)(1),r=Object(c.a)(n,2),p=r[0],g=r[1],O=Object(s.useState)(!1),x=Object(c.a)(O,2),k=x[0],w=x[1],C=Object(s.useState)(!1),T=Object(c.a)(C,2),S=T[0],q=T[1],N=Object(s.useState)(!1),P=Object(c.a)(N,2),E=P[0],R=P[1],D=Object(s.useState)([]),V=Object(c.a)(D,2),M=V[0],L=V[1],W=u.a.useState(!1),z=Object(c.a)(W,2),B=z[0],I=z[1],H=Object(_.a)().t,F=Object(s.useRef)(!1);Object(s.useEffect)((function(){var e,n;F.current?(g(1),A({search:null===t||void 0===t||null===(e=t.values)||void 0===e?void 0:e.search})):(window.scrollTo(0,0),F.current=!0,A({search:null===t||void 0===t||null===(n=t.values)||void 0===n?void 0:n.search}))}),[null===t||void 0===t||null===(e=t.values)||void 0===e?void 0:e.search]);var A=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,o,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,d.a.faqs.getAll(t);case 4:i=e.sent,w(!1),L(null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.results),R(!!(null===i||void 0===i||null===(o=i.data)||void 0===o?void 0:o.next)),(null===i||void 0===i||null===(r=i.data)||void 0===r?void 0:r.next)&&g(2),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),w(!1);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(i.a)(a.a.mark((function e(){var n,r,i,c,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q(!0),e.next=4,d.a.faqs.getAll({search:(null===t||void 0===t||null===(n=t.values)||void 0===n?void 0:n.search)||void 0,page:p});case 4:l=e.sent,L([].concat(Object(o.a)(M),Object(o.a)(null===l||void 0===l||null===(r=l.data)||void 0===r?void 0:r.results))),q(!1),R(!!(null===l||void 0===l||null===(i=l.data)||void 0===i?void 0:i.next)),(null===l||void 0===l||null===(c=l.data)||void 0===c?void 0:c.next)&&g(p+1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),q(!1);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"container-fluid ".concat(f.a.faqs," ").concat(f.a.backgImg," "),children:Object(l.jsxs)("div",{className:f.a.content,children:[Object(l.jsxs)("div",{className:"container-fluid p-0 ".concat(f.a.path),children:[Object(l.jsx)(y.b,{to:"/",className:f.a.link,children:H("classes.main")}),Object(l.jsx)("div",{className:f.a.dot}),Object(l.jsx)("span",{className:f.a.current,children:"F.A.Q"})]}),Object(l.jsx)("h1",{className:f.a.pageTitle,children:"F.A.Q"}),Object(l.jsx)("div",{className:f.a.searchbarCont,children:Object(l.jsx)(h.a,{queryKey:"search"})}),Object(l.jsx)(j.a,{pageStart:0,loadMore:k||S||!E?function(){}:function(){return J()},hasMore:E,children:Object(l.jsx)("div",{className:f.a.container,children:(null===M||void 0===M?void 0:M.length)?M.map((function(e,t){return Object(l.jsx)(v.a,{title:e.question,content:e.answer,expanded:B,index:t,handleChange:function(e){return t=e,function(e,n){I(!!n&&t)};var t}},t)})):null})}),k||S?Object(l.jsx)("div",{className:"ml-3",children:Object(l.jsx)(b.a,{})}):null]})})}}}]);