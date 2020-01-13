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
var MasterpassButton = (function (_super) {
    __extends(MasterpassButton, _super);
    function MasterpassButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MasterpassButton.prototype.render = function () {
        var _this = this;
        return (React.createElement(Context_1.ContextConsumer, null, function (context) { return (React.createElement("div", null,
            React.createElement("button", { id: context.formId + "-sq-masterpass", className: "sq-masterpass", style: { display: context.masterpassState === 'ready' ? 'block' : 'none' } }),
            context.masterpassState === 'loading' && _this.props.loadingView,
            context.masterpassState === 'unavailable' && _this.props.unavailableView)); }));
    };
    return MasterpassButton;
}(React.Component));
exports.default = MasterpassButton;
//# sourceMappingURL=MasterpassButton.js.map