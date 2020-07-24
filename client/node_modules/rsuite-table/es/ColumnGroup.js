import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { defaultClassPrefix, prefix } from './utils';
var classPrefix = defaultClassPrefix('table-column-group');

var addPrefix = function addPrefix(name) {
  return prefix(classPrefix)(name);
};

var ColumnGroup = React.forwardRef(function (props, ref) {
  var header = props.header,
      className = props.className,
      children = props.children,
      _props$headerHeight = props.headerHeight,
      headerHeight = _props$headerHeight === void 0 ? 80 : _props$headerHeight,
      verticalAlign = props.verticalAlign,
      width = props.width,
      rest = _objectWithoutPropertiesLoose(props, ["header", "className", "children", "headerHeight", "verticalAlign", "width"]);

  var height = headerHeight / 2;
  var styles = {
    height: height,
    width: width
  };

  var contentStyles = _extends({}, styles, {
    verticalAlign: verticalAlign
  });

  return React.createElement("div", _extends({
    ref: ref,
    className: classNames(classPrefix, className)
  }, rest), React.createElement("div", {
    className: addPrefix('header'),
    style: styles
  }, React.createElement("div", {
    className: addPrefix('header-content'),
    style: contentStyles
  }, header)), React.Children.map(children, function (node) {
    var _node$props, _node$props2, _node$props2$style;

    var nodeStyles = _extends({
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
  header: PropTypes.node,
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom'])
};
export default ColumnGroup;