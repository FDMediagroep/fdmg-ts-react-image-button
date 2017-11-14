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
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Renders an image with an onClick hook for parent component.
     */
    var ImageButton = /** @class */ (function (_super) {
        __extends(ImageButton, _super);
        function ImageButton(props) {
            var _this = _super.call(this, props) || this;
            _this.props = props;
            console.info('ImageButton component', props);
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
            return (React.createElement("img", { onClick: this.props.onClick, src: this.props.src, alt: this.props.alt, className: this.props.className }));
        };
        return ImageButton;
    }(React.Component));
    exports.default = ImageButton;
});
