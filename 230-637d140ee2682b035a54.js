(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1036:function(e,t,a){"use strict";a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___23YxA","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___3qIhu","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___3Uv7G","tab-content":"TabsTemplate-module__tab-content___2tpdx"}},1046:function(e,t,a){"use strict";var l=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(5)),u=l(a(2)),d=l(a(1036)),c=r.default.bind(d.default),o={isLabelHidden:u.default.bool,label:u.default.string,id:u.default.string},f=function(e){var t=e.isLabelHidden,a=e.label,l=e.id;return n.default.createElement("div",{className:c("tab-content"),id:l},t?n.default.createElement("h3",{className:"truncationHeader"},a):null,"Content for"," ",n.default.createElement("i",null,a))};f.propTypes=o;var i=f;t.default=i},1118:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),n=r(a(27));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var d=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M43 6h-4V2.2C39 1 38 0 36.8 0h-1.7C33.9.1 33 1 33 2.2V6H15V2.2C15 1 14 0 12.8 0h-1.7C9.9.1 9 1 9 2.2V6H5c-1.1 0-2 .9-2 2v38c0 1.1.9 2 2 2h24c1.3-.1 2.5-.6 3.4-1.4l11.2-11.1c.8-.9 1.3-2.1 1.4-3.4V8c0-1.1-.9-2-2-2zM6 21h36v10H30c-1.1 0-2 .9-2 2v12H6V21zm25 22.8V34h9.8L31 43.8z"}))};d.displayName="IconCalendar",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=d;t.default=c},1166:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),n=r(a(27));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var d=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M46.1 12H37V4c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v8H1.9c-1 0-1.9.8-1.9 1.9v29.3c0 1 .8 1.9 1.9 1.9h44.3c1 0 1.9-.8 1.9-1.9V13.9c-.1-1.1-.9-1.9-2-1.9zM14 7h20v5H14V7zm21 20.6V31h-9v9h-4v-9h-9v-4h9v-9h4v9h9v.6z"}))};d.displayName="IconBriefcase",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=d;t.default=c},1382:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),n=r(a(27));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var d=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M24 34l14 14V0H10v48z"}))};d.displayName="IconBookmark",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=d;t.default=c},2095:function(e,t,a){"use strict";var l=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(1166)),u=l(a(226)),d=l(a(1382)),c=l(a(1118)),o=l(a(1070)),f=l(a(1046)),i=function(){var e=n.default.createElement(o.default.Pane,{label:"Search",icon:n.default.createElement(u.default,null),isIconOnly:!0,key:"Search",id:"search"},n.default.createElement(f.default,{label:"Search",id:"searchContent"})),t=n.default.createElement(o.default.Pane,{label:"Briefcase",icon:n.default.createElement(r.default,null),isIconOnly:!0,key:"Briefcase",id:"briefcase"},n.default.createElement(f.default,{label:"Briefcase",id:"briefcaseContent"})),a=n.default.createElement(o.default.Pane,{label:"Bookmark",icon:n.default.createElement(d.default,null),isIconOnly:!0,key:"Bookmark",id:"bookmark"},n.default.createElement(f.default,{label:"Bookmark",id:"bookmarkContent"})),l=n.default.createElement(o.default.Pane,{label:"Calendar",icon:n.default.createElement(c.default,null),isIconOnly:!0,key:"Calendar",id:"calendar"},n.default.createElement(f.default,{label:"Calendar",id:"calendarContent"}));return n.default.createElement(o.default,{id:"iconOnlyTabs"},e,t,a,l)};t.default=i}}]);