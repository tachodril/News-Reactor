"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var classPrefix = (0, _utils.defaultClassPrefix)('table-column-group');

var addPrefix = function addPrefix(name) {
  return (0, _utils.prefix)(classPrefix)(name);
};

var ColumnGroup = React.forwardRef(function (props, ref) {
  var header = props.header,
      className = props.className,
      children = props.children,
      _props$headerHeight = props.headerHeight,
      headerHeight = _props$headerHeight === void 0 ? 80 : _props$headerHeight,
      verticalAlign = props.verticalAlign,
      width = props.width,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["header", "className", "children", "headerHeight", "verticalAlign", "width"]);
  var height = headerHeight / 2;
  var styles = {
    height: height,
    width: width
  };
  var contentStyles = (0, _extends2["default"])({}, styles, {
    verticalAlign: verticalAlign
  });
  return React.createElement("div", (0, _extends2["default"])({
    ref: ref,
    className: (0, _classnames["default"])(classPrefix, className)
  }, rest), React.createElement("div", {
    className: addPrefix('header'),
    style: styles
  }, React.createElement("div", {
    className: addPrefix('header-content'),
    style: contentStyles
  }, header)), React.Children.map(children, function (node) {
    var _node$props, _node$props2, _node$props2$style;

    var nodeStyles = (0, _extends2["default"])({
      height: height
    }, (_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.style, {
      top: styles.height
    });
    var width = (_node$props2 = node.props) === null || _node$props2 === void 0 ? void 0 : (_node$props2$style = _node$props2.style) === null || _node$props2$style === void 0 ? void 0 : _node$props2$style.width;
    var nodeContentStyles = {
      height: height,
      width: width,
      verticalAlign: verticalAlign
    };
    return React.cloneElement(node, {
      className: addPrefix('cell'),
      style: nodeStyles,
      children: React.createElement("div", {
        className: addPrefix('cell-content'),
        style: nodeContentStyles
      }, node.props.children)
    });
  }));
});
ColumnGroup.displayName = 'ColumnGroup';
ColumnGroup.propTypes = {
  header: _propTypes["default"].node,
  verticalAlign: _propTypes["default"].oneOf(['top', 'middle', 'bottom'])
};
var _default = ColumnGroup;
exports["default"] = _default;
module.exports = exports.default;