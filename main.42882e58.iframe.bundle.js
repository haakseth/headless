(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./headless-ui/Dialog.stories.tsx":"./stories/headless-ui/Dialog.stories.tsx","./radix-ui/Dialog.stories.tsx":"./stories/radix-ui/Dialog.stories.tsx","./react-aria/Dialog.stories.tsx":"./stories/react-aria/Dialog.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/headless-ui/Dialog.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Dialog",(function(){return Dialog_stories_Dialog}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),transition=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),dialog=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function HeadlessUIDialog(props){var isOpen=props.isOpen,closeModal=props.closeModal;return Object(jsx_runtime.jsx)(transition.a,{appear:!0,show:isOpen,as:react.Fragment,children:Object(jsx_runtime.jsxs)(dialog.a,{as:"div",className:"relative z-10",onClose:closeModal,children:[Object(jsx_runtime.jsx)(transition.a.Child,{as:react.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(jsx_runtime.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),Object(jsx_runtime.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:Object(jsx_runtime.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:Object(jsx_runtime.jsx)(transition.a.Child,{as:react.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(jsx_runtime.jsxs)(dialog.a.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[Object(jsx_runtime.jsx)(dialog.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Payment successful"}),Object(jsx_runtime.jsx)("div",{className:"mt-2",children:Object(jsx_runtime.jsx)("p",{className:"text-sm text-gray-500",children:"Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."})}),Object(jsx_runtime.jsx)("div",{className:"mt-4",children:Object(jsx_runtime.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:closeModal,children:"Got it, thanks!"})})]})})})})]})})}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}HeadlessUIDialog.displayName="HeadlessUIDialog";__webpack_exports__.default={title:"HeadlessUI/Dialog",component:HeadlessUIDialog};var Dialog_stories_Dialog=function Dialog(){var _useState2=_slicedToArray(Object(react.useState)(!0),2),isOpen=_useState2[0],setIsOpen=_useState2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("div",{className:"fixed inset-0 flex items-center justify-center",children:Object(jsx_runtime.jsx)("button",{type:"button",onClick:function openModal(){setIsOpen(!0)},className:"rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",children:"Open dialog"})}),Object(jsx_runtime.jsx)(HeadlessUIDialog,{isOpen:isOpen,closeModal:function closeModal(){setIsOpen(!1)}})]})};Dialog_stories_Dialog.parameters=Object.assign({storySource:{source:'() => {\n  let [isOpen, setIsOpen] = useState(true);\n  function closeModal() {\n    setIsOpen(false);\n  }\n  function openModal() {\n    setIsOpen(true);\n  }\n  return (\n    <>\n      <div className="fixed inset-0 flex items-center justify-center">\n        <button\n          type="button"\n          onClick={openModal}\n          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"\n        >\n          Open dialog\n        </button>\n      </div>\n      <HeadlessUIDialog isOpen={isOpen} closeModal={closeModal} />\n    </>\n  );\n}'}},Dialog_stories_Dialog.parameters)},"./stories/radix-ui/Dialog.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Dialog",(function(){return Dialog_stories_Dialog}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var index_module=__webpack_require__("./node_modules/@radix-ui/react-dialog/dist/index.module.js"),jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Dialog_RadixDialog=function RadixDialog(props){var title=props.title,description=props.description;return Object(jsx_runtime.jsxs)(index_module.e,{children:[Object(jsx_runtime.jsx)(index_module.d,{children:Object(jsx_runtime.jsx)("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,background:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(4px)"}})}),Object(jsx_runtime.jsx)(index_module.b,{children:Object(jsx_runtime.jsxs)("div",{style:{background:"white",position:"absolute",border:"solid black 1px"},children:[Object(jsx_runtime.jsx)(index_module.g,{children:title}),Object(jsx_runtime.jsx)(index_module.c,{children:description}),Object(jsx_runtime.jsx)(index_module.a,{children:"close"})]})})]})};Dialog_RadixDialog.displayName="RadixDialog";var radix_ui_Dialog=Dialog_RadixDialog,Dialog_stories_Dialog=(__webpack_exports__.default={title:"RadixUI/Dialog",component:radix_ui_Dialog},function Dialog(){return Object(jsx_runtime.jsxs)(index_module.f,{children:[Object(jsx_runtime.jsx)(index_module.h,{children:"Show dialog"}),Object(jsx_runtime.jsx)(radix_ui_Dialog,{title:"Test",description:"Hello, this is a test"})]})});Dialog_stories_Dialog.displayName="Dialog",Dialog_stories_Dialog.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <Radix_Dialog.Root>\n      <Radix_Dialog.Trigger>Show dialog</Radix_Dialog.Trigger>\n      <RadixDialog\n        title="Test"\n        description="Hello, this is a test"\n      ></RadixDialog>\n    </Radix_Dialog.Root>\n  );\n}'}},Dialog_stories_Dialog.parameters)},"./stories/react-aria/Dialog.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Dialog",(function(){return Dialog_stories_Dialog}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var dist_module=__webpack_require__("./node_modules/@react-stately/overlays/dist/module.js"),overlays_dist_module=__webpack_require__("./node_modules/@react-aria/overlays/dist/module.js"),react=__webpack_require__("./node_modules/react/index.js"),button_dist_module=__webpack_require__("./node_modules/@react-aria/button/dist/module.js"),dialog_dist_module=__webpack_require__("./node_modules/@react-aria/dialog/dist/module.js"),focus_dist_module=__webpack_require__("./node_modules/@react-aria/focus/dist/module.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ModalDialog(props){var title=props.title,children=props.children,ref=Object(react.useRef)(),_useOverlay=Object(overlays_dist_module.d)(props,ref),overlayProps=_useOverlay.overlayProps,underlayProps=_useOverlay.underlayProps;Object(overlays_dist_module.e)();var modalProps=Object(overlays_dist_module.c)().modalProps,_useDialog=Object(dialog_dist_module.a)(props,ref),dialogProps=_useDialog.dialogProps,titleProps=_useDialog.titleProps;return Object(jsx_runtime.jsx)("div",Object.assign({style:{position:"fixed",zIndex:100,top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center"}},underlayProps,{children:Object(jsx_runtime.jsx)(focus_dist_module.a,{contain:!0,restoreFocus:!0,autoFocus:!0,children:Object(jsx_runtime.jsxs)("div",Object.assign({},overlayProps,dialogProps,modalProps,{ref:ref,style:{background:"white",color:"black",padding:30},children:[Object(jsx_runtime.jsx)("h3",Object.assign({},titleProps,{style:{marginTop:0},children:title})),children]}))})}))}ModalDialog.displayName="ModalDialog";__webpack_exports__.default={title:"ReactAria/Dialog",component:ModalDialog};var Dialog_stories_Dialog=function Dialog(){var state=Object(dist_module.a)({}),openButtonRef=Object(react.useRef)(),closeButtonRef=Object(react.useRef)(),openButtonProps=Object(button_dist_module.a)({onPress:function onPress(){return state.open()}},openButtonRef).buttonProps,closeButtonProps=Object(button_dist_module.a)({onPress:function onPress(){return state.close()}},closeButtonRef).buttonProps;return Object(jsx_runtime.jsxs)(overlays_dist_module.b,{children:[Object(jsx_runtime.jsx)("button",Object.assign({},openButtonProps,{ref:openButtonRef,children:"Open Dialog"})),state.isOpen&&Object(jsx_runtime.jsx)(overlays_dist_module.a,{children:Object(jsx_runtime.jsx)(ModalDialog,{title:"Enter your name",isOpen:!0,onClose:state.close,isDismissable:!0,children:Object(jsx_runtime.jsxs)("form",{style:{display:"flex",flexDirection:"column"},children:[Object(jsx_runtime.jsx)("label",{htmlFor:"first-name",children:"First Name:"}),Object(jsx_runtime.jsx)("input",{id:"first-name"}),Object(jsx_runtime.jsx)("label",{htmlFor:"last-name",children:"Last Name:"}),Object(jsx_runtime.jsx)("input",{id:"last-name"}),Object(jsx_runtime.jsx)("button",Object.assign({},closeButtonProps,{ref:closeButtonRef,style:{marginTop:10},children:"Submit"}))]})})})]})};Dialog_stories_Dialog.displayName="Dialog",Dialog_stories_Dialog.parameters=Object.assign({storySource:{source:'() => {\n  let state = useOverlayTriggerState({});\n  let openButtonRef = useRef();\n  let closeButtonRef = useRef();\n\n  // useButton ensures that focus management is handled correctly,\n  // across all browsers. Focus is restored to the button once the\n  // dialog closes.\n  let { buttonProps: openButtonProps } = useButton(\n    {\n      onPress: () => state.open(),\n    },\n    openButtonRef\n  );\n\n  let { buttonProps: closeButtonProps } = useButton(\n    {\n      onPress: () => state.close(),\n    },\n    closeButtonRef\n  );\n  return (\n    <OverlayProvider>\n      <button {...openButtonProps} ref={openButtonRef}>\n        Open Dialog\n      </button>\n      {state.isOpen && (\n        <OverlayContainer>\n          <ModalDialog\n            title="Enter your name"\n            isOpen\n            onClose={state.close}\n            isDismissable\n          >\n            <form\n              style={{\n                display: "flex",\n                flexDirection: "column",\n              }}\n            >\n              <label htmlFor="first-name">First Name:</label>\n              <input id="first-name" />\n              <label htmlFor="last-name">Last Name:</label>\n              <input id="last-name" />\n              <button\n                {...closeButtonProps}\n                ref={closeButtonRef}\n                style={{ marginTop: 10 }}\n              >\n                Submit\n              </button>\n            </form>\n          </ModalDialog>\n        </OverlayContainer>\n      )}\n    </OverlayProvider>\n  );\n}'}},Dialog_stories_Dialog.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);