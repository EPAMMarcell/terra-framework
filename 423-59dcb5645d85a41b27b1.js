(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1036:function(e,t,a){"use strict";a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___23YxA","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___3qIhu","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___3Uv7G","tab-content":"TabsTemplate-module__tab-content___2tpdx"}},1046:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=n(a(5)),u=n(a(2)),d=n(a(1036)),c=r.default.bind(d.default),i={isLabelHidden:u.default.bool,label:u.default.string,id:u.default.string},f=function(e){var t=e.isLabelHidden,a=e.label,n=e.id;return l.default.createElement("div",{className:c("tab-content"),id:n},t?l.default.createElement("h3",{className:"truncationHeader"},a):null,"Content for"," ",l.default.createElement("i",null,a))};f.propTypes=i;var o=f;t.default=o},2094:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(21)),r=n(a(25)),u=n(a(31)),d=n(a(28)),c=n(a(29)),i=n(a(30)),f=n(a(0)),o=n(a(1070)),s=n(a(1046));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,i.default)(e);if(t){var l=(0,i.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,c.default)(this,a)}}var p=function(e){(0,d.default)(a,e);var t=b(a);function a(e){var n;return(0,l.default)(this,a),(n=t.call(this,e)).state={activeKey:"Tab2"},n.handleSelection=n.handleSelection.bind((0,u.default)(n)),n}return(0,r.default)(a,[{key:"handleSelection",value:function(e,t){t!==this.state.activeKey&&this.setState({activeKey:t})}},{key:"render",value:function(){var e=f.default.createElement(o.default.Pane,{label:"Tab 1",key:"Tab1",id:"tab1"},f.default.createElement(s.default,{label:"Tab 1",id:"tab1Content"})),t=f.default.createElement(o.default.Pane,{label:"Tab 2",key:"Tab2",id:"tab2"},f.default.createElement(s.default,{label:"Tab 2",id:"tab2Content"})),a=f.default.createElement(o.default.Pane,{label:"Tab 3",key:"Tab 3",id:"tab3"},f.default.createElement(s.default,{label:"Tab 3",id:"tab3Content"}));return f.default.createElement("div",null,f.default.createElement("div",{id:"current-selection"},f.default.createElement("p",null,"Last Triggered Tab:",this.state.activeKey)),f.default.createElement(o.default,{id:"controlledTabs",onChange:this.handleSelection,activeKey:this.state.activeKey},e,t,a))}}]),a}(f.default.Component);t.default=p}}]);