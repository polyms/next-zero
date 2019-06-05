"use strict";var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");Object.defineProperty(exports, "__esModule", { value: true });exports.bpfrpt_proptype_AppProps = exports.bpfrpt_proptype_WrappedAppProps = exports.bpfrpt_proptype_InitStoreOptions = exports.bpfrpt_proptype_MakeStore = exports.bpfrpt_proptype_MakeStoreOptions = exports.bpfrpt_proptype_NextJSAppContext = exports.bpfrpt_proptype_Config = exports.withRedux = void 0;



var _react = _interopRequireWildcard(require("react"));var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));var _detectNode = _interopRequireDefault(require("detect-node"));var _propTypes = _interopRequireDefault(require("prop-types")); /* eslint-disable no-console */ // https://github.com/kirill-konshin/next-redux-wrapper/blob/master/packages/wrapper/src/index.tsx




var defaultConfig = {
  storeKey: '__NEXT_REDUX_STORE__',
  debug: false,
  serializeState: function serializeState(state) {return state;},
  deserializeState: function deserializeState(state) {return state;} };


var withRedux = function withRedux(makeStore, customConfig) {
  var config = (0, _objectSpread2.default)({},
  defaultConfig,
  customConfig);


  var initStore = function initStore(_ref) {var initialState = _ref.initialState,ctx = _ref.ctx;var
    storeKey = config.storeKey;

    var createStore = function createStore() {return (
        makeStore(config.deserializeState(initialState), (0, _objectSpread2.default)({},
        ctx,
        config, {
          isServer: _detectNode.default })));};


    // Always make a new store if server, otherwise state is shared between requests
    if (_detectNode.default) return createStore();

    // Memoize store if client
    // Create store if unavailable on the client and set it on the window object
    if (!Object.prototype.hasOwnProperty.call(window, storeKey)) {
      window[storeKey] = createStore();
    }

    return window[storeKey];
  };

  return function (App) {var _class, _temp;return _temp = _class = /*#__PURE__*/function (_Component) {(0, _inherits2.default)(NextZeroApp, _Component);



      function NextZeroApp(props, context) {var _this;(0, _classCallCheck2.default)(this, NextZeroApp);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NextZeroApp).call(this, props, context));var

        initialState = props.initialState;

        if (config.debug) console.log('3. NextZeroApp.render created new store with initialState', initialState);

        _this.store = initStore({
          initialState: initialState });return _this;

      }(0, _createClass2.default)(NextZeroApp, [{ key: "render", value: function render()

































        {var _this$props =
          this.props,initialProps = _this$props.initialProps,initialState = _this$props.initialState,props = (0, _objectWithoutProperties2.default)(_this$props, ["initialProps", "initialState"]);

          // Cmp render must return something like <Provider><Component/></Provider>
          return _react.default.createElement(App, (0, _extends2.default)({}, props, initialProps, { store: this.store }));
        } }]);return NextZeroApp;}(_react.Component), (0, _defineProperty2.default)(_class, "getInitialProps", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(appCtx) {var store, ctx, initialProps;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (appCtx) {_context.next = 2;break;}throw new Error('No app context');case 2:if (appCtx.ctx) {_context.next = 4;break;}throw new Error('No page context');case 4:store = initStore({ ctx: appCtx.ctx });if (config.debug) console.log('1. NextZeroApp.getInitialProps wrapper got the store with state', store.getState());ctx = appCtx.ctx;ctx.store = store;ctx.isServer = _detectNode.default;initialProps = {};if (!('getInitialProps' in App)) {_context.next = 14;break;}_context.next = 13;return App.getInitialProps.call(App, appCtx);case 13:initialProps = _context.sent;case 14:if (config.debug) console.log('2. NextZeroApp.getInitialProps has store state', store.getState());return _context.abrupt("return", { isServer: _detectNode.default, initialState: config.serializeState(store.getState()), initialProps: initialProps });case 16:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref2.apply(this, arguments);};}()), _temp;};

};exports.withRedux = withRedux;var bpfrpt_proptype_Config = { serializeState: _propTypes.default.func, deserializeState: _propTypes.default.func, storeKey: _propTypes.default.string, debug: _propTypes.default.bool, overrideIsServer: _propTypes.default.bool };exports.bpfrpt_proptype_Config = bpfrpt_proptype_Config;var bpfrpt_proptype_NextJSAppContext = { ctx: _propTypes.default.shape({ store: function store() {return (typeof Store === "function" ? _propTypes.default.instanceOf(Store).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);}, isServer: _propTypes.default.bool.isRequired }).isRequired };exports.bpfrpt_proptype_NextJSAppContext = bpfrpt_proptype_NextJSAppContext;var bpfrpt_proptype_MakeStoreOptions = { isServer: _propTypes.default.bool.isRequired };exports.bpfrpt_proptype_MakeStoreOptions = bpfrpt_proptype_MakeStoreOptions;var bpfrpt_proptype_MakeStore = _propTypes.default.func;exports.bpfrpt_proptype_MakeStore = bpfrpt_proptype_MakeStore;var bpfrpt_proptype_InitStoreOptions = { initialState: function initialState() {return (typeof object === "function" ? _propTypes.default.instanceOf(object) : _propTypes.default.any).apply(this, arguments);}, ctx: _propTypes.default.shape({ store: function store() {return (typeof Store === "function" ? _propTypes.default.instanceOf(Store).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);}, isServer: _propTypes.default.bool.isRequired }) };exports.bpfrpt_proptype_InitStoreOptions = bpfrpt_proptype_InitStoreOptions;var bpfrpt_proptype_WrappedAppProps = { initialProps: function initialProps() {return (typeof object === "function" ? _propTypes.default.instanceOf(object).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);},






























  // stuff returned from getInitialProps
  initialState: function initialState() {return (typeof object === "function" ? _propTypes.default.instanceOf(object).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);}, // stuff in the Store state after getInitialProps
  isServer: _propTypes.default.bool.isRequired };exports.bpfrpt_proptype_WrappedAppProps = bpfrpt_proptype_WrappedAppProps;var bpfrpt_proptype_AppProps = { store: function store() {return (typeof Store === "function" ? _propTypes.default.instanceOf(Store).isRequired : _propTypes.default.any.isRequired).apply(this, arguments);} };exports.bpfrpt_proptype_AppProps = bpfrpt_proptype_AppProps;
//# sourceMappingURL=with-redux-app.js.map