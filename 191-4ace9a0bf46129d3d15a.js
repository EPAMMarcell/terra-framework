(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1006:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=c(n(2)),u=c(n(10)),l=c(n(5)),i=c(n(7)),d=c(n(991));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var a=_(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=l.default.bind(d.default),w={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,onInput:o.default.func,name:o.default.string,pattern:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},I={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,n,r,o=g(l);function l(){return b(this,l),o.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,o=t.isIncomplete,l=t.isInvalid,i=t.onBlur,d=t.onChange,c=t.onFocus,b=t.onInput,h=t.name,y=t.pattern,g=t.refCallback,v=t.required,_=t.type,w=t.ariaLabel,I=t.value,j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),F=this.context,E=(0,u.default)(O("form-input",{"form-error":l},{"form-incomplete":o&&v&&!l},F.className),j.className);return j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=w||j["aria-label"]:w&&(e=w),j["aria-label"]=e,v&&(j["aria-required"]="true"),void 0!==I?j.value=I:void 0!==n&&(j.defaultValue=n),j.placeholder&&(j.placeholder=null),a.default.createElement("input",s({},j,{ref:function(e){g&&g(e)},name:h,type:_,pattern:y,onBlur:i,onChange:d,onFocus:c,onInput:b,disabled:r,required:v,className:E}))}}])&&h(t.prototype,n),r&&h(t,r),l}(a.default.Component);j.propTypes=w,j.defaultProps=I,j.contextType=i.default,j.isInput=!0;var F=j;t.default=F},1012:function(e,t,n){"use strict";var r=n(12),a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(63)),u=a(n(19)),l=a(n(24)),i=r(n(0)),d=a(n(2)),c=n(9),s=a(n(10)),f=a(n(5)),p=a(n(7)),m=a(n(133)),b=a(n(222)),h=a(n(165)),y=a(n(1018)),g=a(n(1039)),v=a(n(1014));function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=f.default.bind(v.default),I={legend:d.default.string.isRequired,name:d.default.string.isRequired,dayAttributes:d.default.object,disabled:d.default.bool,displayFormat:d.default.string,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLegendHidden:d.default.bool,intl:d.default.shape({formatMessage:d.default.func}),legendAttributes:d.default.object,monthAttributes:d.default.object,maxWidth:d.default.string,onBlur:d.default.func,onChange:d.default.func,onFocus:d.default.func,required:d.default.bool,showOptional:d.default.bool,value:d.default.string,yearAttributes:d.default.object},j={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},F=function(e){var t=e.dayAttributes,n=e.disabled,r=e.displayFormat,a=e.error,o=e.help,d=e.hideRequired,c=e.isIncomplete,f=e.isInline,v=e.isInvalid,_=e.isLegendHidden,I=e.intl,j=e.legend,F=e.legendAttributes,E=e.monthAttributes,T=(e.maxWidth,e.name),C=e.onBlur,P=e.onChange,D=e.onFocus,x=e.required,q=e.showOptional,A=e.value,S=e.yearAttributes,k=(0,l.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),N=(0,i.useRef)((0,m.default)()),B=i.default.useContext(p.default),R=(0,s.default)(w("date-input-field",{"is-inline":f},B.className),k.className),L=(0,s.default)(w("legend",B.className),F.className),M="terra-date-input-field-description-help-".concat(N.current),V="terra-date-input-field-description-error-".concat(N.current),W=M;a&&v&&(W="".concat(V," ").concat(M));var H=E&&E["aria-describedby"],z=t&&t["aria-describedby"],J=S&&S["aria-describedby"],K=H?"".concat(W," ").concat(H):W,U=z?"".concat(W," ").concat(z):W,Y=J?"".concat(W," ").concat(J):W,G=i.default.createElement("legend",{className:w(["legend-group",{"legend-group-hidden":_}])},i.default.createElement("div",(0,u.default)({},F,{className:L}),v&&i.default.createElement("span",{className:w("error-icon")},i.default.createElement(b.default,null)),x&&(v||!d)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:w("required")},"*"),i.default.createElement(h.default,{text:I.formatMessage({id:"Terra.date.input.required"})})),j,x&&!v&&d&&i.default.createElement("span",{className:w("required-hidden")},"*"),q&&!x&&i.default.createElement("span",{className:w("optional")},I.formatMessage({id:"Terra.date.input.optional"})),!v&&i.default.createElement("span",{className:w("error-icon-hidden")}))),Q=g.default.getDateFormat({displayFormat:r,intl:I});return i.default.createElement("fieldset",(0,u.default)({},k,{className:R}),G,i.default.createElement(y.default,{name:T,onChange:P,onBlur:C,onFocus:D,value:A,displayFormat:r,disabled:n,isInvalid:v,isIncomplete:c,useExternalFormatMask:!0,required:x,monthAttributes:O(O({},E),{"aria-describedby":K}),dayAttributes:O(O({},t),{"aria-describedby":U}),yearAttributes:O(O({},S),{"aria-describedby":Y})}),v&&a&&i.default.createElement("div",{id:V,className:w("error-text")},a),o?i.default.createElement("div",{id:M,className:w("help-text"),"aria-label":"".concat(I.formatMessage({id:"Terra.date.input.dateFormatLabel"})," ").concat(Q,", ").concat(o)},Q," ",o):i.default.createElement("div",{id:M,className:w("help-text"),"aria-label":"".concat(I.formatMessage({id:"Terra.date.input.dateFormatLabel"})," ").concat(Q)},Q))};F.propTypes=I,F.defaultProps=j;var E=(0,c.injectIntl)(F);t.default=E},1014:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___1b5gY","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___3k5l6","date-input-field":"DateInputField-module__date-input-field___1M_VI","is-inline":"DateInputField-module__is-inline___1Etvd","legend-group":"DateInputField-module__legend-group___1mhF8","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BWTV",legend:"DateInputField-module__legend___2cUjM","error-icon":"DateInputField-module__error-icon___3WS5S","error-icon-hidden":"DateInputField-module__error-icon-hidden___3zOAH",required:"DateInputField-module__required___sd-Md","required-hidden":"DateInputField-module__required-hidden___2l4dy",optional:"DateInputField-module__optional___2WxM1","help-text":"DateInputField-module__help-text___2Koxr","error-text":"DateInputField-module__error-text___3u5L4"}},1885:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(21)),o=r(n(25)),u=r(n(31)),l=r(n(28)),i=r(n(29)),d=r(n(30)),c=r(n(0)),s=r(n(1012));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var p=function(e){(0,l.default)(n,e);var t=f(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={blurTriggerCount:0,focusTriggerCount:0,value:""},r.handleBlur=r.handleBlur.bind((0,u.default)(r)),r.handleFocus=r.handleFocus.bind((0,u.default)(r)),r.blurCount=0,r.focusCount=0,r}return(0,o.default)(n,[{key:"handleBlur",value:function(){this.blurCount+=1,this.setState({blurTriggerCount:this.blurCount})}},{key:"handleFocus",value:function(){this.focusCount+=1,this.setState({focusTriggerCount:this.focusCount})}},{key:"handleOnChangeFocus",value:function(e,t){this.setState({value:t})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:"date-input-value"},c.default.createElement("h3",null,"onBlur Trigger Count:",c.default.createElement("span",{id:"blur-count"},this.state.blurTriggerCount),c.default.createElement("br",null),c.default.createElement("br",null),"onFocus Trigger Count:",c.default.createElement("span",{id:"focus-count"},this.state.focusTriggerCount))),c.default.createElement(s.default,{legend:"Legend text",name:"date-input",value:this.state.value,onChange:this.handleOnChange,onBlur:this.handleBlur,onFocus:this.handleFocus,error:"Error message",help:"Help message"}))}}]),n}(c.default.Component);t.default=p},991:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2m4Lc","orion-fusion-theme":"Input-module__orion-fusion-theme___1P-S4","form-input":"Input-module__form-input___3oe9F","form-error":"Input-module__form-error___3tyh6","form-incomplete":"Input-module__form-incomplete___2OzNB"}},992:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var i,d=[],c=!1,s=-1;function f(){c&&i&&(c=!1,i.length?d=i.concat(d):s=-1,d.length&&p())}function p(){if(!c){var e=l(f);c=!0;for(var t=d.length;t;){for(i=d,d=[];++s<t;)i&&i[s].run();s=-1,t=d.length}i=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new m(e,t)),1!==d.length||c||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}}]);