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
var GooglePayButton = (function (_super) {
    __extends(GooglePayButton, _super);
    function GooglePayButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GooglePayButton.prototype.render = function () {
        var _this = this;
        return (React.createElement(Context_1.ContextConsumer, null, function (context) { return (React.createElement("div", null,
            React.createElement("button", { id: context.formId + "-sq-google-pay", className: "sq-google-pay", style: { display: context.googlePayState === 'ready' ? 'block' : 'none' } }),
            context.googlePayState === 'loading' && _this.props.loadingView,
            context.googlePayState === 'unavailable' && _this.props.unavailableView)); }));
    };
    return GooglePayButton;
}(React.Component));
exports.default = GooglePayButton;
//# sourceMappingURL=GooglePayButton.js.map