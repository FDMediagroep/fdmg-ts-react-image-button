"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var fdmg_ts_react_image_1 = require("fdmg-ts-react-image");
/**
 * Renders an image with an onClick hook for parent component.
 */
var ImageButton = /** @class */ (function (_super) {
    __extends(ImageButton, _super);
    function ImageButton(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        console.info('ImageButton composite', props);
        return _this;
    }
    ImageButton.prototype.componentDidMount = function () {
        console.info('ImageButton mounted');
    };
    ImageButton.prototype.componentWillUnmount = function () {
        console.info('ImageButton will unmount');
    };
    ImageButton.prototype.componentWillReceiveProps = function (nextProps) {
        console.info('ImageButton next props', nextProps);
    };
    ImageButton.prototype.render = function () {
        return (React.createElement("span", { onClick: this.props.onClick, className: this.props.className, role: "button", tabIndex: this.props.tabIndex ? this.props.tabIndex : 0, "aria-label": this.props.alt },
            React.createElement(fdmg_ts_react_image_1.default, { alt: this.props.alt, src: this.props.src })));
    };
    return ImageButton;
}(React.Component));
exports.default = ImageButton;
