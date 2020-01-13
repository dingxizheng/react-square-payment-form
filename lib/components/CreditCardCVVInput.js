"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Context_1 = require("./Context");
var CreditCardCVVInput = (function (_super) {
    __extends(CreditCardCVVInput, _super);
    function CreditCardCVVInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCardCVVInput.prototype.render = function () {
        var _this = this;
        return (React.createElement(Context_1.ContextConsumer, null, function (context) { return (React.createElement("div", null,
            _this.props.label && React.createElement("span", { className: "sq-label" }, _this.props.label),
            React.createElement("div", { id: context.formId + "-sq-cvv" }))); }));
    };
    CreditCardCVVInput.defaultProps = {
        label: 'CVV',
    };
    return CreditCardCVVInput;
}(React.Component));
exports.default = CreditCardCVVInput;
//# sourceMappingURL=CreditCardCVVInput.js.map