(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1062:function(e,l,t){"use strict";var a=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=a(t(19)),i=a(t(24)),d=a(t(0)),u=a(t(221)),n=a(t(2)),r=a(t(10)),s=a(t(5)),c=a(t(7)),f=a(t(1069)),_=s.default.bind(f.default),m={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},h={ariaLabel:n.default.string.isRequired,header:n.default.element.isRequired,footer:n.default.element.isRequired,children:n.default.node,onRequestClose:n.default.func.isRequired,isOpen:n.default.bool,width:n.default.oneOf(Object.keys(m)),closeOnOutsideClick:n.default.bool,rootSelector:n.default.string},p=function(e){var l=e.header,t=e.footer,a=e.children,n=e.onRequestClose,s=e.isOpen,f=e.ariaLabel,h=e.width,p=e.closeOnOutsideClick,g=e.rootSelector,v=(0,i.default)(e,["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"]),w=d.default.useContext(c.default);if(!s)return null;var M=["dialog-modal-wrapper",w.className];return h in m?M.push("width-".concat(m[h])):M.push("width-1120"),d.default.createElement(u.default,{ariaLabel:f,role:"dialog",classNameModal:_(M),isOpen:s,onRequestClose:n,zIndex:"7000",closeOnOutsideClick:p,rootSelector:g},d.default.createElement("div",(0,o.default)({},v,{className:(0,r.default)(_("dialog-modal-inner-wrapper"),v.className)}),d.default.createElement("div",{className:_("dialog-modal-container")},d.default.createElement("div",null,l),d.default.createElement("div",{className:_("dialog-modal-body")},a),d.default.createElement("div",null,t))))};p.propTypes=h,p.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};var g=p;l.default=g},1069:function(e,l,t){"use strict";t.r(l),l.default={"clinical-lowlight-theme":"DialogModal-module__clinical-lowlight-theme___SaKc0","orion-fusion-theme":"DialogModal-module__orion-fusion-theme___3o9Mk","dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___3sPcp","width-320":"DialogModal-module__width-320___1F-q-","width-480":"DialogModal-module__width-480___2t4Xb","width-560":"DialogModal-module__width-560___3aETX","width-640":"DialogModal-module__width-640___13ULp","width-800":"DialogModal-module__width-800___29VLV","width-960":"DialogModal-module__width-960___2zV1i","width-1120":"DialogModal-module__width-1120___ybLhM","width-1280":"DialogModal-module__width-1280___1ysQr","width-1440":"DialogModal-module__width-1440___1jbz7","width-1600":"DialogModal-module__width-1600___L_2gu","width-1760":"DialogModal-module__width-1760___2WapK","width-1920":"DialogModal-module__width-1920___2CmC6","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___2YfG7","dialog-modal-container":"DialogModal-module__dialog-modal-container___2-s0w","dialog-modal-header":"DialogModal-module__dialog-modal-header___3g6p2","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___fEXtA","dialog-modal-body":"DialogModal-module__dialog-modal-body___SHhUf"}},1752:function(e,l,t){"use strict";t.r(l),l.default={"selection-list":"DialogModalWithSelect-test-module__selection-list___38NKv"}},1975:function(e,l,t){"use strict";var a=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=a(t(21)),i=a(t(25)),d=a(t(31)),u=a(t(28)),n=a(t(29)),r=a(t(30)),s=a(t(0)),c=a(t(46)),f=a(t(85)),_=a(t(227)),m=a(t(348)),h=a(t(5)),p=a(t(1062)),g=a(t(1752));function v(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,r.default)(e);if(l){var o=(0,r.default)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return(0,n.default)(this,t)}}var w=h.default.bind(g.default),M=function(e){(0,u.default)(t,e);var l=v(t);function t(){var e;return(0,o.default)(this,t),(e=l.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,d.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,d.default)(e)),e}return(0,i.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(p.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement(f.default,{title:"Action Header used here",onClose:this.handleCloseModal}),footer:s.default.createElement(_.default,{start:"Footer Goes here"})},s.default.createElement("p",null,e),s.default.createElement(m.default,{variant:"combobox",placeholder:"Select a color",className:w("selection-list")},s.default.createElement(m.default.Option,{value:"blue",display:"Blue"}),s.default.createElement(m.default.Option,{value:"green",display:"Green"}),s.default.createElement(m.default.Option,{value:"purple",display:"Purple"}),s.default.createElement(m.default.Option,{value:"red",display:"Red"}),s.default.createElement(m.default.Option,{value:"violet",display:"Violet"})),s.default.createElement("p",null,e)),s.default.createElement(c.default,{id:"trigger-dialog-modal",text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),t}(s.default.Component);l.default=M}}]);