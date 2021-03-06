'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sensor = require('./sensor');

var _sensor2 = _interopRequireDefault(_sensor);

var _osUtils = require('os-utils');

var _osUtils2 = _interopRequireDefault(_osUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CPU Sensor
 * 
 * @class CpuSensor
 * @extends {Sensor}
 */
var CpuSensor = function (_Sensor) {
    _inherits(CpuSensor, _Sensor);

    function CpuSensor() {
        _classCallCheck(this, CpuSensor);

        return _possibleConstructorReturn(this, (CpuSensor.__proto__ || Object.getPrototypeOf(CpuSensor)).call(this, {
            title: 'CPU Sensor',
            description: 'Sensor de CPU'
        }));
    }

    _createClass(CpuSensor, [{
        key: 'pool',
        value: function pool() {
            return new Promise(function (resolve, reject) {
                _osUtils2.default.cpuUsage(function (usage) {
                    return resolve(usage);
                });
            });
        }
    }]);

    return CpuSensor;
}(_sensor2.default);

exports.default = CpuSensor;