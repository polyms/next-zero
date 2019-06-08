"use strict";var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.personallyReducer = exports.removeKeyAction = exports.addKeyAction = void 0;var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));
var _reduxStarterKit = require("redux-starter-kit"); /* eslint-disable no-param-reassign */

var addKeyAction = (0, _reduxStarterKit.createAction)('ADD_KEY');exports.addKeyAction = addKeyAction;
var removeKeyAction = (0, _reduxStarterKit.createAction)('REMOVE_KEY');exports.removeKeyAction = removeKeyAction;

var personallyReducer = (0, _reduxStarterKit.createReducer)(
{},
{
  ADD_KEY: function ADD_KEY(state, _ref) {var payload = _ref.payload;var _payload = (0, _slicedToArray2.default)(
    payload, 2),key = _payload[0],value = _payload[1];
    state[key] = value;
  },
  REMOVE_KEY: function REMOVE_KEY(state, _ref2) {var payload = _ref2.payload;
    delete state[payload];
    return state;
  } });exports.personallyReducer = personallyReducer;
//# sourceMappingURL=personally-reducer.js.map