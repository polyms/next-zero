"use strict";var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "apmMiddleware", { enumerable: true, get: function get() {return _apmMiddleware.default;} });Object.defineProperty(exports, "withNZ", { enumerable: true, get: function get() {return _withNz.default;} });exports.default = void 0;var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/taggedTemplateLiteral"));var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/parse-int"));
var _chalk = _interopRequireDefault(require("chalk"));
var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));
var _koaRequestId = _interopRequireDefault(require("@kasa/koa-request-id"));

var _apmMiddleware = _interopRequireDefault(require("./apm-middleware"));
var _withNz = _interopRequireDefault(require("./with-nz"));function _templateObject2() {var data = (0, _taggedTemplateLiteral2.default)(["{blue ", "} ENV {green ", "}"]);_templateObject2 = function _templateObject2() {return data;};return data;}function _templateObject() {var data = (0, _taggedTemplateLiteral2.default)(["{blue ", "} Start WEB server."]);_templateObject = function _templateObject() {return data;};return data;}var _default =

function _default(_ref) {var nextServer = _ref.nextServer,app = _ref.app,router = _ref.router,_ref$name = _ref.name,name = _ref$name === void 0 ? 'App' : _ref$name;var _process$env$PORT =
  process.env.PORT,PORT = _process$env$PORT === void 0 ? 4000 : _process$env$PORT;
  var port = (0, _parseInt2.default)(PORT, 10);

  // Handle uncaught errors

  app.use(
  (0, _koaBodyparser.default)({
    enableTypes: ['json', 'form'],
    formLimit: '10mb',
    jsonLimit: '10mb' }));



  app.use((0, _koaRequestId.default)());

  app.use( /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(ctx, next) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

              ctx.res.statusCode = 200;_context.next = 4;return (
                next());case 4:_context.next = 10;break;case 6:_context.prev = 6;_context.t0 = _context["catch"](0);

              ctx.status = _context.t0.statusCode || _context.t0.status || 500;
              ctx.body = {
                message: _context.t0.message };case 10:case "end":return _context.stop();}}}, _callee, null, [[0, 6]]);}));return function (_x, _x2) {return _ref2.apply(this, arguments);};}());




  router.get('*', /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(ctx) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                nextServer.getRequestHandler()(ctx.req, ctx.res));case 2:
              ctx.respond = false;case 3:case "end":return _context2.stop();}}}, _callee2);}));return function (_x3) {return _ref3.apply(this, arguments);};}());


  return {
    app: app,
    nextServer: nextServer,
    handleListen: function handleListen() {
      /* eslint-disable no-console */
      console.log((0, _chalk.default)(_templateObject(), name));
      console.log((0, _chalk.default)(_templateObject2(), name, app.env));
      console.log("> Ready on http://localhost:".concat(port));
    } };

};exports.default = _default;
//# sourceMappingURL=index.js.map