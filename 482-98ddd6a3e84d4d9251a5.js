(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{1185:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"SizePopupCommon-module__content-wrapper___2-0Lt","popup-area-small":"SizePopupCommon-module__popup-area-small___RVmB1","popup-area-medium":"SizePopupCommon-module__popup-area-medium___t2e48","popup-area-invalid":"SizePopupCommon-module__popup-area-invalid___3oIYR"}},2073:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(21)),a=o(n(25)),d=o(n(31)),i=o(n(28)),l=o(n(29)),r=o(n(30)),s=o(n(0)),p=o(n(5)),c=o(n(132)),f=o(n(1185));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,r.default)(e);if(t){var u=(0,r.default)(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return(0,l.default)(this,n)}}var m=p.default.bind(f.default),N=function(e){(0,i.default)(n,e);var t=h(n);function n(e){var o;return(0,u.default)(this,n),(o=t.call(this,e)).handleButtonClick=o.handleButtonClick.bind((0,d.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,d.default)(o)),o.setButtonNode=o.setButtonNode.bind((0,d.default)(o)),o.getButtonNode=o.getButtonNode.bind((0,d.default)(o)),o.setParentNode=o.setParentNode.bind((0,d.default)(o)),o.getParentNode=o.getParentNode.bind((0,d.default)(o)),o.state={open:!0},o}return(0,a.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return s.default.createElement("div",{className:m("content-wrapper")},s.default.createElement("div",{id:"test-popup-area",className:m("popup-area-invalid"),ref:this.setParentNode},s.default.createElement(c.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"test",contentWidth:"NaN",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},s.default.createElement("p",null,"This popup defaults its size.")),s.default.createElement("button",{type:"button",id:"dimension-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Invalid Popup")))}}]),n}(s.default.Component);t.default=N}}]);