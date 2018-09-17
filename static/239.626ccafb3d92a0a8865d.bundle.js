webpackJsonp([239],{910:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__=__webpack_require__(48),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__),__WEBPACK_IMPORTED_MODULE_2_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_2_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__),__WEBPACK_IMPORTED_MODULE_3_react_router_dom__=__webpack_require__(194),__WEBPACK_IMPORTED_MODULE_4_react_intl__=__webpack_require__(95),__WEBPACK_IMPORTED_MODULE_5__components_core_Block__=__webpack_require__(909),__WEBPACK_IMPORTED_MODULE_6__components_form_Button__=__webpack_require__(193),transMessages={startChatTitle:{id:"blocks.start_chat.title",defaultMessage:"Conversations"},startChatLink:{id:"blocks.start_chat.link",defaultMessage:"Start Chat"},ticketsTitle:{id:"blocks.tickets.title",defaultMessage:"Your Tickets"},ticketsViewAllLink:{id:"blocks.tickets.view_all_link",defaultMessage:"view all"}},blocksMapping={StartChatBlock:Object(__WEBPACK_IMPORTED_MODULE_4_react_intl__.d)(function(_ref){var to=_ref.to,intl=_ref.intl,linkText=_ref.linkText,props=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref,["to","intl","linkText"]);return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_core_Block__.a,{title:intl.formatMessage(transMessages.startChatTitle)},__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_form_Button__.a,{to:"/screens/"+to,width:"full",color:"primary"},intl.formatMessage(linkText?{id:linkText,defaultMessage:linkText}:transMessages.startChatLink,props)))}),TicketsBlock:Object(__WEBPACK_IMPORTED_MODULE_4_react_intl__.d)(function(_ref2){var intl=_ref2.intl;return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_core_Block__.a,{title:intl.formatMessage(transMessages.ticketsTitle)},__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__.a,{to:"/screens/tickets"},intl.formatMessage(transMessages.ticketsViewAllLink)))}),ScreenLink:Object(__WEBPACK_IMPORTED_MODULE_4_react_intl__.d)(function(_ref3){var to=_ref3.to,intl=_ref3.intl,label=_ref3.label,blockTitle=_ref3.blockTitle;return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_core_Block__.a,{title:intl.formatMessage({id:blockTitle,defaultMessage:blockTitle})},__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__.a,{to:"/screens/"+to},intl.formatMessage({id:label,defaultMessage:label})))})},Blocks=function Blocks(_ref4){var blocks=_ref4.blocks;return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react__.Fragment,null,blocks.map(function(_ref5,index){var blockType=_ref5.blockType,props=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref5,["blockType"]),Component=blocksMapping[blockType];return Component?__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({key:blockType+index},props)):null}))};__webpack_exports__.default=Blocks,Blocks.__docgenInfo={description:"",displayName:"Blocks"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/Blocks.jsx"]={name:"Blocks",docgenInfo:Blocks.__docgenInfo,path:"src/screens/Blocks.jsx"})}});