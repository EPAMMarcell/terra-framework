(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1085:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(19)),o=r(n(24)),l=r(n(21)),a=r(n(25)),d=r(n(28)),c=r(n(29)),i=r(n(30)),s=r(n(0)),f=r(n(2));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.default)(e);if(t){var u=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}n(1107),n(1108);var h={children:f.default.node.isRequired},p=function(e){(0,d.default)(n,e);var t=m(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,a.default)(n,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,o.default)(e,["children"]);return s.default.createElement("div",(0,u.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}]),n}(s.default.Component);p.propTypes=h;var v=p;t.default=v},1086:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___1WHhV"}},1107:function(e,t,n){"use strict";n.r(t)},1108:function(e,t,n){"use strict";n.r(t)},1417:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(21)),o=r(n(25)),l=r(n(31)),a=r(n(28)),d=r(n(29)),c=r(n(30)),i=r(n(0)),s=n(225),f=r(n(5)),m=r(n(1085)),h=r(n(1086));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var u=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var v=f.default.bind(h.default),b=function(e){(0,a.default)(n,e);var t=p(n);function n(e){var r;return(0,u.default)(this,n),(r=t.call(this,e)).onClick=r.onClick.bind((0,l.default)(r)),r}return(0,o.default)(n,[{key:"onClick",value:function(){s.Provider.trigger("EventA")}},{key:"render",value:function(){return i.default.createElement("div",{className:v("content-wrapper")},i.default.createElement("h1",null,"Listening to Custom Event"),i.default.createElement("p",null,"A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. "),i.default.createElement("p",null,"This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker."),i.default.createElement("ol",null,i.default.createElement("li",null,i.default.createElement("p",null,"Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.")),i.default.createElement("li",null,i.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content"))),i.default.createElement("button",{id:"EventA",onClick:this.onClick,type:"button"},"Set Border Color!"))}}]),n}(i.default.Component),y=function(){return i.default.createElement(m.default,null,i.default.createElement(b,null))};t.default=y}}]);