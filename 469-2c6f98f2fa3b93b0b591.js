(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{1761:function(t,e,n){"use strict";n.r(e),e.default={"test-popup-area":"ArrowVerticalAttachmentsPopup-test-module__test-popup-area___266JY","popup-text":"ArrowVerticalAttachmentsPopup-test-module__popup-text___D-Ryy","popup-button":"ArrowVerticalAttachmentsPopup-test-module__popup-button___eInfq"}},2057:function(t,e,n){"use strict";var a=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(21)),u=a(n(25)),l=a(n(31)),r=a(n(28)),c=a(n(29)),d=a(n(30)),i=a(n(0)),s=a(n(5)),h=a(n(132)),f=a(n(1761));function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=(0,d.default)(t);if(e){var o=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var m=s.default.bind(f.default),b=function(t){(0,r.default)(n,t);var e=p(n);function n(t){var a;return(0,o.default)(this,n),(a=e.call(this,t)).handleButtonClick=a.handleButtonClick.bind((0,l.default)(a)),a.handleAttachment=a.handleAttachment.bind((0,l.default)(a)),a.handleRequestClose=a.handleRequestClose.bind((0,l.default)(a)),a.setButtonNode=a.setButtonNode.bind((0,l.default)(a)),a.getButtonNode=a.getButtonNode.bind((0,l.default)(a)),a.setParentNode=a.setParentNode.bind((0,l.default)(a)),a.getParentNode=a.getParentNode.bind((0,l.default)(a)),a.state={open:!1,attachment:"bottom left"},a}return(0,u.default)(n,[{key:"handleAttachment",value:function(t){this.setState({attachment:t.target.value,open:!0})}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("div",{id:"test-popup-area",className:m("test-popup-area"),ref:this.setParentNode},i.default.createElement(h.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:this.state.attachment,contentHeight:"80",contentWidth:"160",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},i.default.createElement("p",{className:m("popup-text")},"This popup arrow has vertical attachment.")),i.default.createElement("button",{type:"button",id:"alignment-button",className:m("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},"")),i.default.createElement("p",null,"Choose Content Attachment:"),i.default.createElement("button",{type:"button",id:"attach-Left",value:"bottom left",onClick:this.handleAttachment},"Attach Bottom Left"),i.default.createElement("button",{type:"button",id:"attach-Center",value:"bottom center",onClick:this.handleAttachment},"Attach Bottom Center"),i.default.createElement("button",{type:"button",id:"attach-Right",value:"bottom right",onClick:this.handleAttachment},"Attach Bottom Right"))}}]),n}(i.default.Component);e.default=b}}]);