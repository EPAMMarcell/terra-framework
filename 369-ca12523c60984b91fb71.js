(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{1005:function(t,o,e){"use strict";e.r(o),o.default={wrapper:"HookshotTestDocCommon-module__wrapper___232un",content:"HookshotTestDocCommon-module__content___1OjRA","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___2f5AK","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___uQY81","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___3pFVu","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___1ysoU","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___AVQSw","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___1nqBM","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___3Vl7s","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___3W1xV","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___3mruV","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___14DA9","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___3Ya6C","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___3TotB","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___1rhG-","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___3nf-d","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___1NBb8","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___3mSko","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___3YI7W","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___2m43N","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___3GPo2","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___YtlgK"}},1015:function(t,o,e){"use strict";var n=e(6);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(0)),r=n(e(5)),s=n(e(164)),l=n(e(1005)),u=r.default.bind(l.default),i=function(t){return a.default.createElement(s.default.Content,t,a.default.createElement("div",{className:u("hookshot-content-wrapper")},"Hookshot"))};o.default=i},1016:function(t,o,e){"use strict";var n=e(6);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(19)),r=n(e(24)),s=n(e(21)),l=n(e(25)),u=n(e(31)),i=n(e(28)),h=n(e(29)),c=n(e(30)),d=n(e(0)),p=n(e(5)),m=n(e(2)),f=n(e(164)),_=n(e(1015)),k=n(e(1005));function v(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=(0,c.default)(t);if(o){var a=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,h.default)(this,e)}}var g=p.default.bind(k.default),C={hookshotContentProps:m.default.any,id:m.default.string,isOpen:m.default.bool,includeSvgs:m.default.bool,contentAttachment:m.default.string,targetAttachment:m.default.string,type:m.default.string,attachmentMargin:m.default.number},w=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},y=function(t){(0,i.default)(e,t);var o=v(e);function e(t){var n;return(0,s.default)(this,e),(n=o.call(this,t)).triggerHookshot=n.triggerHookshot.bind((0,u.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,u.default)(n)),n.state={open:t.isOpen},n}return(0,l.default)(e,[{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var t=this.props,o=t.hookshotContentProps,e=t.id,n=(t.isOpen,t.contentAttachment),s=t.targetAttachment,l=t.attachmentMargin,u=t.includeSvgs,i=t.type,h=(0,r.default)(t,["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"]),c=d.default.createElement("div",null,d.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},d.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),d.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),d.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},d.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return d.default.createElement("div",{id:"".concat(e,"-bounds"),className:g(["wrapper","hookshot-wrapper-".concat(i)])},d.default.createElement(f.default,(0,a.default)({id:e,contentAttachment:w(n),targetAttachment:w(s),attachmentMargin:l,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(e))},boundingRef:function(){return document.getElementById("".concat(e,"-bounds"))}},h),d.default.createElement(_.default,{id:"".concat(e,"-content"),onEsc:o.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:o.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:o.closeOnResize?this.handleRequestClose:void 0})),d.default.createElement("button",{type:"button",id:"trigger-".concat(e),className:g(["content","hookshot-".concat(i)]),onClick:this.triggerHookshot},"Trigger Hookshot"),u&&c)}}]),e}(d.default.Component);y.propTypes=C,y.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};var b=y;o.default=b},1984:function(t,o,e){"use strict";var n=e(6);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(21)),r=n(e(25)),s=n(e(31)),l=n(e(28)),u=n(e(29)),i=n(e(30)),h=n(e(0)),c=n(e(1016));function d(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=(0,i.default)(t);if(o){var a=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,u.default)(this,e)}}var p=function(t){(0,l.default)(e,t);var o=d(e);function e(t){var n;return(0,a.default)(this,e),(n=o.call(this,t)).state={position:"primary"},n.handlePositionClick=n.handlePositionClick.bind((0,s.default)(n)),n}return(0,r.default)(e,[{key:"handlePositionClick",value:function(t){this.setState({position:t.target.value})}},{key:"render",value:function(){var t="primary";return"pushed"===this.state.position&&(t="push-pushed"),h.default.createElement("div",null,h.default.createElement(c.default,{attachmentBehavior:"push",id:"attachment-behavior-push",isOpen:!1,type:t}),h.default.createElement("p",null,"Choose the positioning behavior"),h.default.createElement("p",null,"Primary position is on the middle right"),h.default.createElement("button",{type:"button",id:"position-primary",value:"primary",onClick:this.handlePositionClick},"Primary"),h.default.createElement("button",{type:"button",id:"position-pushed",value:"pushed",onClick:this.handlePositionClick},"Pushed by bounds"))}}]),e}(h.default.Component);o.default=p}}]);