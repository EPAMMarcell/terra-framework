(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1072:function(e,t,n){"use strict";n.r(t),t.default={placeholder:"InfiniteListDocExampleCommon-module__placeholder___1F6cs","item-content":"InfiniteListDocExampleCommon-module__item-content___1EwQg","main-content":"InfiniteListDocExampleCommon-module__main-content___3YhfB"}},1097:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=a(n(5)),s=a(n(1072)),o=r.default.bind(s.default),l=function(e){var t=e.children;return i.default.createElement("div",{className:o("main-content")},t)};t.default=l},1111:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),i=n.n(a),r=n(986),s=n.n(r),o=function(e){var t=e.url;return i.a.createElement(s.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-infinite-list",name:"terra-infinite-list",version:"3.34.0",url:t})}},1153:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=a(n(5)),s=n(1034),o=a(n(1154)),l=r.default.bind(o.default),u=function(){return i.default.createElement("div",{className:l("indicator")},i.default.createElement(s.Placeholder,{title:"I'm Loading"}))};t.default=u},1154:function(e,t,n){"use strict";n.r(t),t.default={indicator:"MyInitialLoadingIndicator-module__indicator___3GFWh"}},1155:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=a(n(5)),s=n(1034),o=a(n(1156)),l=r.default.bind(o.default),u=function(){return i.default.createElement("div",{className:l("indicator")},i.default.createElement(s.Placeholder,{title:"I'm Loading More"}))};t.default=u},1156:function(e,t,n){"use strict";n.r(t),t.default={indicator:"MyProgressiveLoadingIndicator-module__indicator___3tBAh"}},1374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return new Promise((function(t){return setTimeout((function(){t(function(e){var t=!1,n=(e>=0?e:0)+1;n>9&&(t=!0);for(var a=[],i=0;i<10;i+=1)a.push({title:"Item ".concat(10*e+i),key:"unique-".concat(10*e+i)});return{nextPageKey:n,items:a,isFinalPage:t}}(e))}),2e3)}))};t.default=a},1660:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(21)),r=a(n(25)),s=a(n(31)),o=a(n(28)),l=a(n(29)),u=a(n(30)),d=a(n(0)),c=a(n(1661));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.default)(e);if(t){var i=(0,u.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,l.default)(this,n)}}var m=function(e){(0,o.default)(n,e);var t=f(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).updateKey=a.updateKey.bind((0,s.default)(a)),a.state={refreshKey:0},a}return(0,r.default)(n,[{key:"updateKey",value:function(){this.setState((function(e){return{refreshKey:e.refreshKey+1}}))}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("button",{type:"button",onClick:this.updateKey},"Refresh"),d.default.createElement(c.default,{key:"".concat(this.state.refreshKey)}))}}]),n}(d.default.Component);t.default=m},1661:function(e,t,n){"use strict";var a=n(12),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(21)),s=i(n(25)),o=i(n(31)),l=i(n(28)),u=i(n(29)),d=i(n(30)),c=i(n(0)),f=n(1034),m=a(n(341)),p=i(n(5)),g=i(n(1153)),h=i(n(1155)),v=i(n(1097)),y=i(n(1374)),b=i(n(1072));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var x=p.default.bind(b.default),j=function(e){(0,l.default)(n,e);var t=_(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).requestData=a.requestData.bind((0,o.default)(a)),a.state={isFinishedLoading:!1,currentPageKey:null,items:[]},a}return(0,s.default)(n,[{key:"requestData",value:function(){var e=this;(0,y.default)(this.state.currentPageKey).then((function(t){return e.setState((function(e){return{isFinishedLoading:t.isFinalPage,currentPageKey:t.nextPageKey,items:e.items.concat(t.items)}}))}))}},{key:"createItems",value:function(){return this.state.items.map((function(e){return c.default.createElement(m.Item,{key:e.key},c.default.createElement(f.Placeholder,{title:e.title,className:x("placeholder")}))}))}},{key:"render",value:function(){return c.default.createElement(v.default,null,c.default.createElement(m.default,{dividerStyle:"standard",isFinishedLoading:this.state.isFinishedLoading,onRequestItems:this.requestData,ariaLabel:"Progressive Loading",initialLoadingIndicator:c.default.createElement(g.default,null),progressiveLoadingIndicator:c.default.createElement(h.default,null)},this.createItems()))}}]),n}(c.default.Component);t.default=j},1800:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(19),i=n.n(a),r=n(24),s=n.n(r),o=(n(0),n(334)),l=n(1111),u=n(1660),d=n.n(u),c={};function f(e){var t=e.components,n=s()(e,["components"]);return Object(o.mdx)("wrapper",i()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-infinitelist---progressive-loading"},"Terra InfiniteList - Progressive Loading"),Object(o.mdx)("p",null,"To limit the impact of large data sets, progressive loading of list items is available through the InfiniteList. As the InfiniteList approaches the bottom of its scrollHeight the ",Object(o.mdx)("inlineCode",{parentName:"p"},"onRequestItems")," callback will execute, allowing the implementation to lazy load data into the list."),Object(o.mdx)("h2",{id:"state-management"},"State Management"),Object(o.mdx)("p",null,"First we'll be defaulting our state to an empty array of items, a null page key, and false for isFinishedLoading in the constructor. "),Object(o.mdx)("pre",null,Object(o.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"  constructor(props) {\n    super(props);\n\n    this.state = { isFinishedLoading: false, currentPageKey: null, items: [] };\n  }\n")),Object(o.mdx)("p",null,"In our data request callback we'll pass our parameters of our page key, then wait for the response returned from our async service. Upon receiving the response we'll map our returned paging indicators and add our new items to our existing state."),Object(o.mdx)("pre",null,Object(o.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"  requestData() {\n    mockRequest(this.state.currentPageKey).then(response => (\n      this.setState(prevState => ({\n        isFinishedLoading: response.isFinalPage,\n        currentPageKey: response.nextPageKey,\n        items: prevState.items.concat(response.items),\n      }))\n    ));\n  }\n")),Object(o.mdx)("h2",{id:"unpack-data"},"Unpack Data"),Object(o.mdx)("p",null,"We can then implement the unpack of our state data into our list items. Provide unique key value to prop ",Object(o.mdx)("inlineCode",{parentName:"p"},"key"),", if internal state of ",Object(o.mdx)("inlineCode",{parentName:"p"},"InfiniteList")," needs to be updated."),Object(o.mdx)("pre",null,Object(o.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"  createItems() {\n    return this.state.items.map(item => (\n      <Item key={item.key}>\n        <Placeholder title={item.title} />\n      </Item>\n    ));\n  }\n")),Object(o.mdx)("p",null,"Finally we'll declare our infinite list looping. Providing the InfiniteList with an ",Object(o.mdx)("inlineCode",{parentName:"p"},"initialLoadingIndicator")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"progressiveLoadingIndicator"),". The infinite list does not have visual styling, so loading indicators are customizable. Followed up with setting the ",Object(o.mdx)("inlineCode",{parentName:"p"},"onRequestItems")," to our requestData method."),Object(o.mdx)("pre",null,Object(o.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),'  render() {\n    return (\n      <MyExampleContainer>\n        <InfiniteList\n          dividerStyle="standard"\n          isFinishedLoading={this.state.isFinishedLoading}\n          onRequestItems={this.requestData}\n          initialLoadingIndicator={<MyInitialLoadingIndicator />}\n          progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}\n        >\n          {this.createItems()}\n        </InfiniteList>\n      </MyExampleContainer>\n    );\n  }\n')),Object(o.mdx)("p",null,"Using these steps we get the following example:"),Object(o.mdx)("h2",{id:"example"},"Example"),Object(o.mdx)(d.a,{title:"Sections Header Infinite List",mdxType:"RefreshProgressive"}))}f.isMDXComponent=!0},986:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(2)),r=o(n(5)),s=o(n(987));function o(e){return e&&e.__esModule?e:{default:e}}var l=r.default.bind(s.default),u={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},d=function(e){var t=e.src,n=e.name,i=e.url,r=e.version,s=a.default.createElement("a",{className:l("badge"),href:i||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},a.default.createElement("span",{className:l("badge-name")},i?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(r))),o=t?a.default.createElement("a",{className:l("badge"),href:t},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},s,o)};d.propTypes=u;var c=d;t.default=c},987:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);