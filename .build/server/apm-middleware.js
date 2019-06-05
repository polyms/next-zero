"use strict";var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));var _elasticApmNode = _interopRequireDefault(require("elastic-apm-node"));

// function redactAuthHeaders(payload) {
//   if (payload.context && payload.context.request && payload.context.request.headers) {
//     const headers = payload.context.request.headers;
//     if (headers['x-authenticated-userid']) {
//       headers['x-authenticated-userid'] = '[REDACTED]';
//     }
//   }
//   return payload;
// }

// apm.addFilter(redactAuthHeaders);
var _default =
function _default() {
  return (/*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(ctx, next) {var reqId, custom;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (

                _elasticApmNode.default.isStarted()) {_context.next = 4;break;}_context.next = 3;return (

                  next());case 3:return _context.abrupt("return");case 4:_context.prev = 4;_context.next = 7;return (




                  next());case 7:_context.next = 13;break;case 9:_context.prev = 9;_context.t0 = _context["catch"](4);

                // Sending error when response is sent
                ctx.res.on('finish', function () {
                  _elasticApmNode.default.captureError(_context.t0);

                  // Sent error to APM server
                });throw _context.t0;case 13:_context.prev = 13;


                // Set custom context data
                reqId = ctx.state.reqId || ctx.reqId || ctx.req.id || ctx.get('X-Request-Id');
                custom = { reqId: reqId };
                _elasticApmNode.default.setCustomContext(custom);

                // Set user context data
                _elasticApmNode.default.setUserContext({ userId: 'test' }); // ctx.state.user
                return _context.finish(13);case 19:case "end":return _context.stop();}}}, _callee, null, [[4, 9, 13, 19]]);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());

};exports.default = _default;
//# sourceMappingURL=apm-middleware.js.map