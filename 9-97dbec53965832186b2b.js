(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1071:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(19)),u=l(n(24)),a=l(n(21)),o=l(n(25)),r=l(n(31)),d=l(n(28)),s=l(n(29)),c=l(n(30)),f=l(n(0)),h=l(n(134)),p=l(n(2)),m=l(n(10)),b=l(n(5)),C=l(n(7)),v=n(9),y=l(n(1535)),g=l(n(1538)),O=l(n(1539)),_=l(n(1548)),k=l(n(1131));function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,i)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var w=b.default.bind(k.default),I={children:p.default.node.isRequired,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),boundingRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func})},M=function(e){(0,d.default)(n,e);var t=R(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).setContainer=l.setContainer.bind((0,r.default)(l)),l.setMenuButton=l.setMenuButton.bind((0,r.default)(l)),l.resetCache=l.resetCache.bind((0,r.default)(l)),l.handleResize=l.handleResize.bind((0,r.default)(l)),l.resetCache(),l}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new h.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.handleResize(this.contentWidth),this.resizeObserver.observe(this.container)}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.contentWidth))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"handleResize",value:function(e){for(var t=e-this.menuButton.getBoundingClientRect().width,n=-1,l=0,i=!0,u=0;u<f.default.Children.count(this.props.children);u+=1){if((l+=this.container.children[u].getBoundingClientRect().width)>t){if(u===this.props.children.length-1&&l<=e)break;n=f.default.Children.count(this.props.children)>1&&this.props.children[u].type===_.default?u-1:u,i=!1;break}}this.menuHidden===i&&this.hiddenStartIndex===n||(this.menuHidden=i,this.hiddenStartIndex=n,this.forceUpdate())}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuButton",value:function(e){null!==e&&(this.menuButton=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.boundingRef,l=e.menuWidth,a=e.intl,o=(0,u.default)(e,["children","boundingRef","menuWidth","intl"]),r=f.default.Children.toArray(t),d=null;this.hiddenStartIndex>=0&&(d=r.splice(this.hiddenStartIndex));var s=this.context,c=(0,m.default)(w("collapsible-menu-view",{"is-calculating":this.isCalculating},s.className),o.className),h=w("menu-button",{hidden:this.menuHidden});return f.default.createElement("div",(0,i.default)({},o,{className:c,ref:this.setContainer}),r,f.default.createElement("div",{className:h,ref:this.setMenuButton},f.default.createElement(y.default,{"data-collapsible-menu-toggle":!0,icon:f.default.createElement("span",{className:w("menu-button-icon")}),subMenuItems:d,boundingRef:n,menuWidth:l,isIconOnly:!0,text:a.formatMessage({id:"Terra.collapsibleMenuView.more"}),variant:"utility"})))}}]),n}(f.default.Component);M.Item=y.default,M.ItemGroup=g.default,M.Toggle=O.default,M.Divider=_.default,M.propTypes=I,M.contextType=C.default;var x=(0,v.injectIntl)(M);t.default=x},1131:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"CollapsibleMenuView-module__orion-fusion-theme___2TMij","clinical-lowlight-theme":"CollapsibleMenuView-module__clinical-lowlight-theme___262Bk","collapsible-menu-view":"CollapsibleMenuView-module__collapsible-menu-view___2fgIl","menu-button":"CollapsibleMenuView-module__menu-button___1lt9o",hidden:"CollapsibleMenuView-module__hidden___Os8Gc","menu-button-icon":"CollapsibleMenuView-module__menu-button-icon___3jAVT","face-up-item":"CollapsibleMenuView-module__face-up-item___36k9Q",control:"CollapsibleMenuView-module__control___4cSM5","is-disabled":"CollapsibleMenuView-module__is-disabled___2KSJi",divider:"CollapsibleMenuView-module__divider___30Dvq","is-calculating":"CollapsibleMenuView-module__is-calculating___10TM0"}},1349:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(19)),u=l(n(24)),a=l(n(21)),o=l(n(25)),r=l(n(31)),d=l(n(28)),s=l(n(29)),c=l(n(30)),f=l(n(0)),h=l(n(2)),p=l(n(5)),m=l(n(337)),b=l(n(7)),C=l(n(1131));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,i)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var y=p.default.bind(C.default),g={children:h.default.node.isRequired,boundingRef:h.default.func,contentWidth:h.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),button:h.default.element.isRequired},O={isCollapsibleMenuItem:h.default.bool},_=function(e){(0,d.default)(n,e);var t=v(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).handleRequestClose=l.handleRequestClose.bind((0,r.default)(l)),l.wrappedOnClick=l.wrappedOnClick.bind((0,r.default)(l)),l.wrapButtonClick=l.wrapButtonClick.bind((0,r.default)(l)),l.wrapChildrenOnClick=l.wrapChildrenOnClick.bind((0,r.default)(l)),l.setButtonNode=l.setButtonNode.bind((0,r.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,r.default)(l)),l.state={isOpen:!1},l}return(0,o.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleMenuItem:!0}}},{key:"handleRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"wrappedOnClick",value:function(e){var t=this;return function(n){t.handleRequestClose(),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapButtonClick",value:function(e){var t=this;return function(n){t.setState({isOpen:!0}),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapChildrenOnClick",value:function(e){var t=this,n=e?[]:void 0;return f.default.Children.forEach(e,(function(e){var l=e;if(e.props.shouldCloseOnClick)l=f.default.cloneElement(e,{onClick:t.wrappedOnClick(e)});else if(e.props.children){var i=t.wrapChildrenOnClick(e.props.children);l=f.default.cloneElement(e,{children:i})}else if(e.props.subMenuItems){var u=t.wrapChildrenOnClick(e.props.subMenuItems);l=f.default.cloneElement(e,{subMenuItems:u})}n.push(l)})),n}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.button,l=e.contentWidth,a=(0,u.default)(e,["children","button","contentWidth"]),o=f.default.cloneElement(n,{onClick:this.wrapButtonClick(n)}),r=this.context;return f.default.createElement("div",{className:y("face-up-item",r.className),ref:this.setButtonNode},f.default.createElement(m.default,(0,i.default)({},a,{onRequestClose:this.handleRequestClose,isArrowDisplayed:!0,isOpen:this.state.isOpen,targetRef:this.getButtonNode,contentWidth:l}),this.wrapChildrenOnClick(t)),o)}}]),n}(f.default.Component);_.propTypes=g,_.childContextTypes=O,_.Item=m.default.Item,_.ItemGroup=m.default.ItemGroup,_.Opts={widths:m.default.Opts.widths},_.contextType=b.default;var k=_;t.default=k},1535:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(19)),u=l(n(63)),a=l(n(24)),o=l(n(21)),r=l(n(25)),d=l(n(31)),s=l(n(28)),c=l(n(29)),f=l(n(30)),h=l(n(0)),p=l(n(2)),m=l(n(5)),b=l(n(46)),C=l(n(1190)),v=l(n(1349)),y=l(n(1131));function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(l,arguments,i)}else n=l.apply(this,arguments);return(0,c.default)(this,n)}}var _=m.default.bind(y.default),k={text:p.default.string.isRequired,boundingRef:p.default.func,icon:p.default.element,isIconOnly:p.default.bool,isReversed:p.default.bool,isSelected:p.default.bool,isDisabled:p.default.bool,shouldCloseOnClick:p.default.bool,subMenuItems:p.default.arrayOf(p.default.element),onClick:p.default.func,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"])},R={isCollapsibleGroupItem:p.default.bool,isCollapsibleMenuItem:p.default.bool},w=function(e){(0,s.default)(n,e);var t=O(n);function n(e){var l;return(0,o.default)(this,n),(l=t.call(this,e)).setButtonNode=l.setButtonNode.bind((0,d.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,d.default)(l)),l}return(0,r.default)(n,[{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isIconOnly,l=e.isReversed,o=e.text,r=e.isSelected,d=e.isDisabled,s=e.subMenuItems,c=(e.shouldCloseOnClick,e.boundingRef),f=e.menuWidth,p=(0,a.default)(e,["icon","isIconOnly","isReversed","text","isSelected","isDisabled","subMenuItems","shouldCloseOnClick","boundingRef","menuWidth"]),m=this.context,y=m.isCollapsibleGroupItem,O=m.isCollapsibleMenuItem,k=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p);return O?h.default.createElement(v.default.Item,(0,i.default)({},k,{text:o,isSelected:r&&y,isDisabled:d,subMenuItems:s})):y?h.default.createElement(C.default.Button,(0,i.default)({},k,{icon:t,text:o,isDisabled:d})):s&&s.length>0?h.default.createElement(v.default,{contentWidth:f,boundingRef:c,button:h.default.createElement(b.default,(0,i.default)({},k,{icon:t,text:o,isReversed:l,isDisabled:d,onClick:this.handleButtonClick,isIconOnly:n}))},s):h.default.createElement("div",{className:_("face-up-item")},h.default.createElement(b.default,(0,i.default)({},k,{icon:t,text:o,isReversed:l,isDisabled:d,isIconOnly:n})))}}]),n}(h.default.Component);w.propTypes=k,w.defaultProps={isSelected:!1,isReversed:!1,shouldCloseOnClick:!0,isIconOnly:!1},w.contextTypes=R,w.Opts={widths:v.default.Opts.widths};var I=w;t.default=I},1538:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(19)),u=l(n(24)),a=l(n(21)),o=l(n(25)),r=l(n(31)),d=l(n(28)),s=l(n(29)),c=l(n(30)),f=l(n(0)),h=l(n(2)),p=l(n(5)),m=l(n(1190)),b=l(n(1349)),C=l(n(1131));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,i)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var y=p.default.bind(C.default),g={onChange:h.default.func,children:h.default.node.isRequired,selectedKeys:h.default.arrayOf(h.default.string)},O={isCollapsibleGroupItem:h.default.bool},_={isCollapsibleMenuItem:h.default.bool},k=function(e){(0,d.default)(n,e);var t=v(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).handleOnChange=l.handleOnChange.bind((0,r.default)(l)),l}return(0,o.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleGroupItem:!0}}},{key:"handleOnChange",value:function(e,t){if(this.props.onChange){var n=t;f.default.Children.forEach(this.props.children,(function(e,l){t===l&&(n=e.key)})),this.props.onChange(e,n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onChange,l=e.selectedKeys,a=(0,u.default)(e,["children","onChange","selectedKeys"]),o=this.context.isCollapsibleMenuItem;if(o&&l.length)return f.default.createElement("li",{role:"none"},f.default.createElement(b.default.ItemGroup,(0,i.default)({},a,{onChange:this.handleOnChange}),t));if(o)return f.default.createElement("div",a,t);var r=y(["face-up-item",a.className]);return f.default.createElement(m.default,(0,i.default)({},a,{onChange:n,className:r,selectedKeys:l}),t)}}]),n}(f.default.Component);k.propTypes=g,k.defaultProps={selectedKeys:[]},k.childContextTypes=O,k.contextTypes=_;var R=k;t.default=R},1539:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(19)),u=l(n(24)),a=l(n(21)),o=l(n(25)),r=l(n(31)),d=l(n(28)),s=l(n(29)),c=l(n(30)),f=l(n(0)),h=l(n(2)),p=l(n(5)),m=l(n(1540)),b=l(n(1349)),C=l(n(1131));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,i)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var y=p.default.bind(C.default),g={text:h.default.string.isRequired,isSelected:h.default.bool,onChange:h.default.func,isSelectable:h.default.bool,isDisabled:h.default.bool,shouldCloseOnClick:h.default.bool},O={isCollapsibleMenuItem:h.default.bool},_=function(e){(0,d.default)(n,e);var t=v(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).wrappedOnChange=l.wrappedOnChange.bind((0,r.default)(l)),l}return(0,o.default)(n,[{key:"wrappedOnChange",value:function(e){this.props.onChange&&this.props.onChange(e,e.target.checked)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isSelected,l=e.isSelectable,a=e.isDisabled,o=e.onChange,r=(e.shouldCloseOnClick,(0,u.default)(e,["text","isSelected","isSelectable","isDisabled","onChange","shouldCloseOnClick"])),d=this.context.isCollapsibleMenuItem,s=y(["control",{"is-disabled":a||!l},r.className]);return d?f.default.createElement(b.default.Item,(0,i.default)({},r,{text:t,isSelected:n,isSelectable:l,isDisabled:a,onChange:o})):f.default.createElement("div",{className:y(["face-up-item"])},f.default.createElement(m.default,(0,i.default)({},r,{className:s,labelText:t,defaultChecked:n,onChange:this.wrappedOnChange,disabled:a||!l})))}}]),n}(f.default.Component);_.propTypes=g,_.defaultProps={isSelected:!1,isSelectable:!0,shouldCloseOnClick:!0},_.contextTypes=O;var k=_;t.default=k},1548:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),u=l(n(2)),a=l(n(5)),o=l(n(337)),r=l(n(7)),d=l(n(1131)),s=a.default.bind(d.default),c={isCollapsibleMenuItem:u.default.bool},f=function(e,t){var n=t.isCollapsibleMenuItem,l=i.default.useContext(r.default);return n?i.default.createElement(o.default.Divider,null):i.default.createElement("div",{className:s(["divider","face-up-item",l.className])})};f.contextTypes=c;var h=f;t.default=h}}]);