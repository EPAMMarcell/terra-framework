(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{1008:function(e,t,l){"use strict";l.r(t),t.default={"content-wrapper":"DatePicker-test-module__content-wrapper___1XBty"}},1022:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(l(0)),a=u(l(2)),i=l(9),n=u(l(5)),d=u(l(222)),o=u(l(1095));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function f(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){p(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function b(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var m=n.default.bind(o.default),v={children:a.default.node,error:a.default.node,errorIcon:a.default.element,help:a.default.node,hideRequired:a.default.bool,htmlFor:a.default.string,isInvalid:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,label:a.default.node.isRequired,labelAttrs:a.default.object,maxWidth:a.default.string,required:a.default.bool,showOptional:a.default.bool,style:a.default.object},h={children:null,error:null,errorIcon:r.default.createElement(d.default,null),help:null,hideRequired:!1,htmlFor:void 0,isInvalid:!1,isInline:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,required:!1,showOptional:!1},_=function(e){var t=e.children,l=e.error,a=e.errorIcon,n=e.help,d=e.hideRequired,o=e.htmlFor,u=e.isInvalid,s=e.isInline,p=e.isLabelHidden,v=e.label,h=e.labelAttrs,_=e.maxWidth,g=e.required,y=e.showOptional,O=e.style,I=b(e,["children","error","errorIcon","help","hideRequired","htmlFor","isInvalid","isInline","isLabelHidden","label","labelAttrs","maxWidth","required","showOptional","style"]),w=_?f({maxWidth:_},O):O,D=m(["field",{"field-inline":s},I.className]),j=m(["label",h.className]);var P=window.navigator.userAgent.indexOf("Trident/6.0")>-1||window.navigator.userAgent.indexOf("Trident/7.0")>-1?r.default.createElement("div",{className:m("visually-hidden-text")},u&&l?l:null,n):null,x=r.default.Children.map(t,(function(e){return(g||u)&&e&&(e.type.isInput||e.type.isSelect||e.type.isTextarea)?r.default.cloneElement(e,f({},g&&{required:!0},{},u&&{isInvalid:!0})):e})),q=r.default.createElement("div",{className:m(["label-group",{"label-group-hidden":p}])},u&&r.default.createElement("div",{className:m("error-icon")},a),r.default.createElement("label",c({htmlFor:o},h,{className:j}),g&&(u||!d)&&r.default.createElement("div",{className:m("required")},"*"),v,g&&!u&&d&&r.default.createElement("div",{className:m("required-hidden")},"*"),y&&!g&&r.default.createElement(i.FormattedMessage,{id:"Terra.form.field.optional"},(function(e){return r.default.createElement("div",{className:m("optional")},e)})),P),!u&&r.default.createElement("div",{className:m("error-icon-hidden")},a));return r.default.createElement("div",c({style:w},I,{className:D}),q,x,u&&l&&r.default.createElement("div",{"aria-live":"assertive",tabIndex:"-1",id:o?"".concat(o,"-error"):void 0,className:m("error-text")},l),n&&r.default.createElement("div",{tabIndex:"-1",id:o?"".concat(o,"-help"):void 0,className:m("help-text")},n))};_.propTypes=v,_.defaultProps=h;var g=_;t.default=g},1095:function(e,t,l){"use strict";l.r(t),t.default={field:"Field-module__field___2WSjj","field-inline":"Field-module__field-inline___JsHjw","label-group":"Field-module__label-group___1IuJQ","label-group-hidden":"Field-module__label-group-hidden___22HFo",label:"Field-module__label___2Ezvc","error-icon":"Field-module__error-icon___eLpmD","error-icon-hidden":"Field-module__error-icon-hidden___3tKhH",required:"Field-module__required___2_jyu","required-hidden":"Field-module__required-hidden___W84_U",optional:"Field-module__optional___1JKCZ","help-text":"Field-module__help-text___3H9rF","error-text":"Field-module__error-text___2ysBw","visually-hidden-text":"Field-module__visually-hidden-text___3HlVr"}},1124:function(e,t,l){"use strict";var r=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(19)),i=r(l(63)),n=r(l(24)),d=r(l(0)),o=r(l(2)),u=r(l(1022)),c=l(9),s=r(l(222)),f=r(l(995));function p(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function b(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?p(Object(l),!0).forEach((function(t){(0,i.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var m={datePickerId:o.default.string.isRequired,disabled:o.default.bool,error:o.default.node,errorIcon:o.default.element,excludeDates:o.default.arrayOf(o.default.string),filterDate:o.default.func,help:o.default.node,hideRequired:o.default.bool,includeDates:o.default.arrayOf(o.default.string),inputAttributes:o.default.object,intl:o.default.shape({formatMessage:o.default.func,locale:o.default.string}).isRequired,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLabelHidden:o.default.bool,label:o.default.node.isRequired,labelAttrs:o.default.object,maxDate:o.default.string,minDate:o.default.string,name:o.default.string.isRequired,onBlur:o.default.func,onChange:o.default.func,onChangeRaw:o.default.func,onClickOutside:o.default.func,onRequestClose:o.default.func,onFocus:o.default.func,onSelect:o.default.func,required:o.default.bool,maxWidth:o.default.string,selectedDate:o.default.string,showOptional:o.default.bool,value:o.default.string},v={disabled:!1,error:null,errorIcon:d.default.createElement(s.default,null),excludeDates:void 0,filterDate:void 0,help:null,hideRequired:!1,includeDates:void 0,inputAttributes:void 0,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxDate:void 0,maxWidth:void 0,minDate:void 0,onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,selectedDate:void 0,showOptional:!1},h=function(e){var t=e.datePickerId,l=e.disabled,r=e.inputAttributes,i=e.error,o=(e.errorIcon,e.excludeDates),c=e.filterDate,s=e.help,p=e.hideRequired,m=e.isIncomplete,v=e.isInvalid,h=e.isInline,_=e.isLabelHidden,g=e.includeDates,y=e.intl,O=e.label,I=e.labelAttrs,w=e.maxDate,D=e.minDate,j=e.maxWidth,P=e.name,x=e.onBlur,q=e.onChange,E=e.onChangeRaw,F=e.onClickOutside,k=e.onRequestClose,C=e.onFocus,R=e.onSelect,A=e.required,S=e.selectedDate,H=e.showOptional,N=e.value,L=(0,n.default)(e,["datePickerId","disabled","inputAttributes","error","errorIcon","excludeDates","filterDate","help","hideRequired","isIncomplete","isInvalid","isInline","isLabelHidden","includeDates","intl","label","labelAttrs","maxDate","minDate","maxWidth","name","onBlur","onChange","onChangeRaw","onClickOutside","onRequestClose","onFocus","onSelect","required","selectedDate","showOptional","value"]),W="".concat(t,"-help");i&&v&&(W="".concat(t,"-error ").concat(t,"-help"));var T=r&&r["aria-describedby"],M=r;W&&(M=b(b({},r),{},{"aria-describedby":T?"".concat(W," ").concat(T):W}));var B=y.formatMessage({id:"Terra.datePicker.dateFormat"}),J=s?d.default.createElement("div",{"aria-label":"".concat(y.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(B,", ").concat(s)},"(".concat(B,")")," ",s):d.default.createElement("div",{"aria-label":"".concat(y.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(B)},"(".concat(B,")"));return d.default.createElement(u.default,(0,a.default)({},L,{label:O,labelAttrs:I,error:i,help:J,hideRequired:p,required:A,showOptional:H,isInvalid:v,isInline:h,isLabelHidden:_,htmlFor:t,maxWidth:j}),d.default.createElement(f.default,{disabled:l,id:t,inputAttributes:M,excludeDates:o,filterDate:c,useExternalFormatMask:!0,includeDates:g,isInvalid:v,isIncomplete:m,maxDate:w,minDate:D,ariaLabel:O,name:P,onBlur:x,onChange:q,onChangeRaw:E,onRequestClose:k,onClickOutside:F,onFocus:C,onSelect:R,required:A,selectedDate:S,value:N}))};h.propTypes=m,h.defaultProps=v;var _=(0,c.injectIntl)(h);t.default=_},1936:function(e,t,l){"use strict";var r=l(12),a=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(55)),n=r(l(0)),d=a(l(5)),o=a(l(1124)),u=a(l(1008)),c=d.default.bind(u.default),s=function(){var e=(0,n.useState)(!1),t=(0,i.default)(e,2),l=t[0],r=t[1],a=(0,n.useState)(!1),d=(0,i.default)(a,2),u=d[0],s=d[1],f=(0,n.useState)(!1),p=(0,i.default)(f,2),b=p[0],m=p[1];return n.default.createElement("div",{className:c("content-wrapper")},n.default.createElement("button",{type:"button",id:"validity-toggle",onClick:function(){r(!l)}},"Toggle Validity"),n.default.createElement("button",{type:"button",id:"incomplete-toggle",onClick:function(){s(!u),m(!b)}},"Toggle Incomplete"),n.default.createElement("div",{id:"primary-description"},"Description text provided by user for Primary Date Picker"),n.default.createElement(o.default,{label:"Primary Date Picker",isInvalid:l,isIncomplete:u,required:b,error:"Error message.",name:"date-input",datePickerId:"primary",help:"Help message.",inputAttributes:{"aria-describedby":"primary-description"}}),n.default.createElement(o.default,{label:"Secondary Date Picker",isInvalid:l,isIncomplete:u,required:b,error:"Error message.",name:"date-input",datePickerId:"secondary",help:"Help message."}))};t.default=s}}]);