webpackJsonp([2],{727:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__=__webpack_require__(10),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__),__WEBPACK_IMPORTED_MODULE_5_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_5_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__),ChatScreen=function(_PureComponent){function ChatScreen(){var _ref,_temp,_this,_ret;__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this,ChatScreen);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this,(_ref=ChatScreen.__proto__||__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ChatScreen)).call.apply(_ref,[this].concat(args))),_this.state={messages:[],newMessageText:""},_this.handleMessageChange=function(e){return _this.setState({newMessageText:e.target.value})},_this.handleSendMessage=function(e){e.preventDefault(),_this.state.newMessageText&&_this.setState({messages:_this.state.messages.concat([_this.state.newMessageText]),newMessageText:""})},_ret=_temp,__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this,_ret)}return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ChatScreen,_PureComponent),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ChatScreen,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react__.Fragment,null,__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h1",null,this.props.category," chat"),this.state.messages.map(function(message,idx){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p",{key:idx},message)}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("textarea",{rows:2,name:"message",id:"message",placeholder:"Enter your message",value:this.state.newMessageText,onChange:this.handleMessageChange}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button",{onClick:this.handleSendMessage},"Send"))}}]),ChatScreen}(__WEBPACK_IMPORTED_MODULE_5_react__.PureComponent);__webpack_exports__.default=ChatScreen,ChatScreen.__docgenInfo={description:"",displayName:"ChatScreen"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/screens/ChatScreen.jsx"]={name:"ChatScreen",docgenInfo:ChatScreen.__docgenInfo,path:"src/components/screens/ChatScreen.jsx"})}});