(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{2028:function(e,t,n){"use strict";var u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(21)),a=u(n(25)),c=u(n(28)),r=u(n(29)),s=u(n(30)),f=u(n(0)),o=u(n(2)),i=u(n(96)),d=u(n(337));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,s.default)(e);if(t){var l=(0,s.default)(this).constructor;n=Reflect.construct(u,arguments,l)}else n=u.apply(this,arguments);return(0,r.default)(this,n)}}var I={isSelectableMenu:o.default.bool},p=function(e){(0,c.default)(n,e);var t=m(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,a.default)(n,[{key:"getChildContext",value:function(){return{isSelectableMenu:!0}}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("div",{id:"isSelected"},f.default.createElement("p",null,"Menu Items with eIFU Icon")),f.default.createElement(i.default,{role:"menu"},f.default.createElement(d.default.Item,{text:"eIFU Icon Menu Item",key:"1",className:"TestMenuItem",isInstructionsForUse:!0}),f.default.createElement(d.default.Item,{isSelectable:!0,text:"eIFU Icon Nested Menu",key:"2",className:"TestMenuItem",isInstructionsForUse:!0,subMenuItems:[f.default.createElement(d.default.Item,{text:"Default 2.1",key:"2.1",className:"TestNestedMenuContent"})]}),f.default.createElement(d.default.Item,{text:"Selectable+Selected eIFU Icon Menu Item",key:"3",className:"TestMenuItem",isSelectable:!0,isSelected:!0,isInstructionsForUse:!0})))}}]),n}(f.default.Component);p.childContextTypes=I;var y=p;t.default=y}}]);