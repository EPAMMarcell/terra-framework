(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1396:function(t,e,n){"use strict";n.r(e),e.default={"test-popup-area":"AutomaticHeightAndResizedContentCommon-module__test-popup-area___20QDh","popup-text":"AutomaticHeightAndResizedContentCommon-module__popup-text___1vBxu","popup-button":"AutomaticHeightAndResizedContentCommon-module__popup-button___1kzA0"}},1774:function(t,e,n){"use strict";var o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(0)),a=o(n(2)),l=o(n(5)),i=o(n(1775)),s=l.default.bind(i.default),d={onClick:a.default.func,size:a.default.oneOf(["small","large"])},r=function(t){var e=t.onClick,n=t.size;return u.default.createElement("div",{className:s("popup-content-".concat(n))},u.default.createElement("button",{type:"button",id:"resize-content",onClick:e},"Resize"))};r.propTypes=d;var c=r;e.default=c},1775:function(t,e,n){"use strict";n.r(e),e.default={"popup-content-small":"TestPopupContent-module__popup-content-small___2kVt-","popup-content-large":"TestPopupContent-module__popup-content-large___2rJCA"}},2072:function(t,e,n){"use strict";var o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(21)),a=o(n(25)),l=o(n(31)),i=o(n(28)),s=o(n(29)),d=o(n(30)),r=o(n(0)),c=o(n(5)),p=o(n(132)),f=o(n(1774)),h=o(n(1396));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,d.default)(t);if(e){var u=(0,d.default)(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return(0,s.default)(this,n)}}var _=c.default.bind(h.default),v=function(t){(0,i.default)(n,t);var e=m(n);function n(t){var o;return(0,u.default)(this,n),(o=e.call(this,t)).handleButtonClick=o.handleButtonClick.bind((0,l.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,l.default)(o)),o.setButtonNode=o.setButtonNode.bind((0,l.default)(o)),o.getButtonNode=o.getButtonNode.bind((0,l.default)(o)),o.state={open:!0,size:"small"},o}return(0,a.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var t=this;return r.default.createElement("div",{id:"test-popup-area",className:_("test-popup-area")},r.default.createElement(p.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"auto",contentWidth:"auto",isArrowDisplayed:!0,isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},r.default.createElement(f.default,{size:this.state.size,onClick:function(){return t.setState({size:"large"})}})),r.default.createElement("button",{type:"button",className:_("popup-button"),id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),n}(r.default.Component);e.default=v}}]);