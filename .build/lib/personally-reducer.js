"use strict";var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.personallyReducer = void 0;var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));var personallyReducer = function personallyReducer(state, _ref) {var type = _ref.type,payload = _ref.payload;
  if (type === 'test') {
    return (0, _objectSpread2.default)({},
    state, {
      personally: payload });

  }
  return state;
};exports.personallyReducer = personallyReducer;
//# sourceMappingURL=personally-reducer.js.map