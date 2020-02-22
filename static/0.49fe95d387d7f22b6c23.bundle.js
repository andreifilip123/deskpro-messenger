webpackJsonp([0],{2206:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Footer});var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1__utils_asset__=__webpack_require__(150),Footer=function Footer(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"dpmsg-ScreenFooter"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"dpmsg-ScreenLine"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"dpmsg-ScreenFooterText"},"Powered by"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"dpmsg-VertLine"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"https://deskpro.com",target:"_blank",rel:"noreferrer noopener",title:"Deskpro"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{className:"dpmsg-ScreenFooterLogo",src:Object(__WEBPACK_IMPORTED_MODULE_1__utils_asset__.a)("img/deskpro-logo.svg"),alt:"Deskpro"})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"dpmsg-ScreenLine"}))}},730:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__=__webpack_require__(10),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__),__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__=__webpack_require__(9),__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__),__WEBPACK_IMPORTED_MODULE_6_react__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_6_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__),__WEBPACK_IMPORTED_MODULE_7_prop_types__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_7_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__),__WEBPACK_IMPORTED_MODULE_8_react_redux__=__webpack_require__(80),__WEBPACK_IMPORTED_MODULE_9_redux__=__webpack_require__(205),__WEBPACK_IMPORTED_MODULE_10_react_intl__=__webpack_require__(81),__WEBPACK_IMPORTED_MODULE_11__components_chat_Chat__=__webpack_require__(1177),__WEBPACK_IMPORTED_MODULE_12__components_core_Block__=__webpack_require__(727),__WEBPACK_IMPORTED_MODULE_13__components_core_ConfigContext__=__webpack_require__(207),__WEBPACK_IMPORTED_MODULE_14__modules_chat__=__webpack_require__(152),__WEBPACK_IMPORTED_MODULE_15__modules_guest__=__webpack_require__(131),__WEBPACK_IMPORTED_MODULE_16__modules_info__=__webpack_require__(204),__WEBPACK_IMPORTED_MODULE_17__components_core_Footer__=__webpack_require__(2206),ChatScreen=function(_PureComponent){function ChatScreen(){var _ref,_temp,_this,_ret;__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this,ChatScreen);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _temp=_this=__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this,(_ref=ChatScreen.__proto__||__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ChatScreen)).call.apply(_ref,[this].concat(args))),_this.state={endChatBlock:!1},_this.handleSendMessage=function(message){var type=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chat.message";if(message){var messageModel=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({origin:"user",type:type},"string"==typeof message?{message:message}:message);_this.props.sendMessage(messageModel,_this.props.chatData)}},_this.onEndClick=function(){_this.setState({endChatBlock:!0})},_this.onCancelEndChat=function(){_this.setState({endChatBlock:!1})},_this.handleEndChat=function(){_this.props.endChatMessage(_this.props.chatData)},_ret=_temp,__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this,_ret)}return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ChatScreen,_PureComponent),__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ChatScreen,[{key:"componentDidMount",value:function componentDidMount(){this.props.chatData.id&&this.props.chatOpened()}},{key:"render",value:function render(){var _props=this.props,departments=_props.departments,chatConfig=_props.chatConfig,chatData=_props.chatData,intl=_props.intl,user=_props.user,agent=_props.agent,department=chatConfig.department?departments[chatConfig.department]:{},chat=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},chatData,{assigned:this.props.chatAssigned});return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react__.Fragment,null,__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_core_Block__.a,{title:intl.formatMessage({id:"chat.header.title",defaultMessage:"{department} conversation"},{department:department.title}),className:"Block--chat"},"ended"!==chatData.status&&__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div",{className:"dpmsg-endChatButton"},__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span",{onClick:this.onEndClick},"End chat")),__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_chat_Chat__.a,{messages:this.props.messages,onSendMessage:this.handleSendMessage,onEndChat:this.handleEndChat,onCancelEndChat:this.onCancelEndChat,endChatBlock:this.state.endChatBlock,typing:this.props.typing,user:user,agent:agent,chat:chat,chatConfig:chatConfig})),__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_core_Footer__.a,null))}}]),ChatScreen}(__WEBPACK_IMPORTED_MODULE_6_react__.PureComponent);ChatScreen.propTypes={agent:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,user:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,match:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.shape({params:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.shape({chatId:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string.isRequired})}),chatData:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.shape({fromScreen:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string.isRequired}).isRequired,chatConfig:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.shape({department:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number.isRequired,noAnswerBehavior:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf(["","save_ticket","new_ticket"])}).isRequired,departments:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object.isRequired,messages:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.array,typing:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool]),sendMessage:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,endChatMessage:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired,chatOpened:__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired},ChatScreen.defaultProps={messages:[],typing:null};__webpack_exports__.default=Object(__WEBPACK_IMPORTED_MODULE_9_redux__.d)(__WEBPACK_IMPORTED_MODULE_10_react_intl__.d,__WEBPACK_IMPORTED_MODULE_13__components_core_ConfigContext__.d,Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__.b)(function mapStateToProps(state,props){return{user:Object(__WEBPACK_IMPORTED_MODULE_15__modules_guest__.d)(state),chatData:Object(__WEBPACK_IMPORTED_MODULE_14__modules_chat__.k)(state,props),agent:Object(__WEBPACK_IMPORTED_MODULE_14__modules_chat__.j)(state,props),messages:Object(__WEBPACK_IMPORTED_MODULE_14__modules_chat__.l)(state,props),typing:Object(__WEBPACK_IMPORTED_MODULE_14__modules_chat__.m)(state,props),departments:Object(__WEBPACK_IMPORTED_MODULE_16__modules_info__.e)(state,props),chatAssigned:Object(__WEBPACK_IMPORTED_MODULE_14__modules_chat__.n)(state,props)}},{sendMessage:__WEBPACK_IMPORTED_MODULE_14__modules_chat__.q,endChatMessage:__WEBPACK_IMPORTED_MODULE_14__modules_chat__.h,chatOpened:__WEBPACK_IMPORTED_MODULE_14__modules_chat__.e}),function mapProps(WrappedComponent){return function(props){var chatConfig=props.chatData&&props.chatData.fromScreen?props.screens[props.chatData.fromScreen]:{};return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(WrappedComponent,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},props,{chatConfig:chatConfig}))}})(ChatScreen),ChatScreen.__docgenInfo={description:"",displayName:"ChatScreen",props:{agent:{type:{name:"object"},required:!1,description:""},user:{type:{name:"object"},required:!1,description:""},match:{type:{name:"shape",value:{params:{name:"shape",value:{chatId:{name:"string",required:!0}},required:!1}}},required:!1,description:""},chatData:{type:{name:"shape",value:{fromScreen:{name:"string",required:!0}}},required:!0,description:""},chatConfig:{type:{name:"shape",value:{department:{name:"number",required:!0},noAnswerBehavior:{name:"enum",value:[{value:"''",computed:!1},{value:"'save_ticket'",computed:!1},{value:"'new_ticket'",computed:!1}],required:!1}}},required:!0,description:""},departments:{type:{name:"object"},required:!0,description:""},messages:{type:{name:"array"},required:!1,description:"",defaultValue:{value:"[]",computed:!1}},typing:{type:{name:"union",value:[{name:"object"},{name:"bool"}]},required:!1,description:"",defaultValue:{value:"null",computed:!1}},sendMessage:{type:{name:"func"},required:!0,description:""},endChatMessage:{type:{name:"func"},required:!0,description:""},chatOpened:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/ChatScreen.jsx"]={name:"ChatScreen",docgenInfo:ChatScreen.__docgenInfo,path:"src/screens/ChatScreen.jsx"})}});