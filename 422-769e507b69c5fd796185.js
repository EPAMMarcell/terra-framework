(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{1036:function(e,t,a){"use strict";a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___23YxA","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___3qIhu","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___3Uv7G","tab-content":"TabsTemplate-module__tab-content___2tpdx"}},1046:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(5)),u=n(a(2)),d=n(a(1036)),c=l.default.bind(d.default),o={isLabelHidden:u.default.bool,label:u.default.string,id:u.default.string},s=function(e){var t=e.isLabelHidden,a=e.label,n=e.id;return r.default.createElement("div",{className:c("tab-content"),id:n},t?r.default.createElement("h3",{className:"truncationHeader"},a):null,"Content for"," ",r.default.createElement("i",null,a))};s.propTypes=o;var f=s;t.default=f},2093:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(168)),l=n(a(21)),u=n(a(25)),d=n(a(31)),c=n(a(28)),o=n(a(29)),s=n(a(30)),f=n(a(0)),i=n(a(1070)),p=n(a(1046));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,s.default)(e);if(t){var r=(0,s.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,o.default)(this,a)}}var _=function(e){(0,c.default)(a,e);var t=b(a);function a(e){var n;return(0,l.default)(this,a),(n=t.call(this,e)).state={tabKeys:(0,r.default)(Array(5).keys())},n.addMoreTabPanes=n.addMoreTabPanes.bind((0,d.default)(n)),n}return(0,u.default)(a,[{key:"createTabPanes",value:function(){return this.state.tabKeys.map((function(e){return f.default.createElement(i.default.Pane,{label:"Tab ".concat(e),key:e,id:e},f.default.createElement(p.default,{label:"Tab ".concat(e),id:"Tab ".concat(e)}))}))}},{key:"addMoreTabPanes",value:function(){this.setState({tabKeys:(0,r.default)(Array(20).keys())})}},{key:"render",value:function(){var e=5===this.state.tabKeys.length?"tabsWrapper-5":20===this.state.tabKeys.length?"tabsWrapper-20":"tabsWrapper";return f.default.createElement("div",null,f.default.createElement("button",{type:"button",onClick:this.addMoreTabPanes},"Add Tabs"),f.default.createElement(i.default,{id:e},this.createTabPanes()))}}]),a}(f.default.Component);t.default=_}}]);