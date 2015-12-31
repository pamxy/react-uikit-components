webpackHotUpdate(0,{

/***/ 4428:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3924);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(4426);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Button = function Button(props) {\n  // CSS classes\n  var context = {\n    primary: ' uk-button-primary',\n    success: ' uk-button-success',\n    danger: ' uk-button-danger',\n    link: ' uk-button-link'\n  };\n\n  var size = {\n    mini: ' uk-button-mini',\n    small: ' uk-button-small',\n    large: ' uk-button-large'\n  };\n\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-button', props.classes, props.block ? 'uk-width-1-1' : null, props.context ? context[props.context] : null, props.size ? size[props.size] : null, props.className]);\n\n  // Elements\n  var ignoreProps = ['type'];\n  var cleanProps = _reactUikitBase2.default.helpers.cleanProps(ignoreProps)(props);\n\n  var attr = _extends({}, _reactUikitBase2.default.events(props), {\n    'data-kitid': props.kitid\n  });\n\n  var type = {\n    button: _react2.default.createElement(\n      'button',\n      _extends({}, cleanProps, attr, {\n        className: cssClassNames,\n        type: 'button',\n        disabled: props.disabled\n      }),\n      props.body,\n      props.children\n    ),\n\n    close: _react2.default.createElement('a', _extends({}, cleanProps, attr, {\n      className: 'uk-close ' + cssClassNames,\n      href: '#'\n    })),\n\n    link: _react2.default.createElement(\n      'a',\n      _extends({}, cleanProps, attr, {\n        className: cssClassNames,\n        href: '#',\n        role: 'button'\n      }),\n      props.body,\n      props.children\n    )\n  };\n\n  // Return Component\n  return type[props.type] || type['button'];\n};\n\nButton.propTypes = {\n  body: _react2.default.PropTypes.string,\n  block: _react2.default.PropTypes.bool,\n  context: _react2.default.PropTypes.oneOf(['primary', 'success', 'danger', 'link']),\n  disabled: _react2.default.PropTypes.bool,\n  size: _react2.default.PropTypes.oneOf(['mini', 'small', 'large']),\n  type: _react2.default.PropTypes.oneOf(['button', 'close', 'link'])\n};\n\nexports.default = _reactUikitBase2.default.base(Button);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10cmlnZ2VyL34vcmVhY3QtdWlraXQtYnV0dG9uL2xpYi9idXR0b24uanM/YThjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI0NDI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCcuLi8uLi9yZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQnV0dG9uID0gZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gIC8vIENTUyBjbGFzc2VzXG4gIHZhciBjb250ZXh0ID0ge1xuICAgIHByaW1hcnk6ICcgdWstYnV0dG9uLXByaW1hcnknLFxuICAgIHN1Y2Nlc3M6ICcgdWstYnV0dG9uLXN1Y2Nlc3MnLFxuICAgIGRhbmdlcjogJyB1ay1idXR0b24tZGFuZ2VyJyxcbiAgICBsaW5rOiAnIHVrLWJ1dHRvbi1saW5rJ1xuICB9O1xuXG4gIHZhciBzaXplID0ge1xuICAgIG1pbmk6ICcgdWstYnV0dG9uLW1pbmknLFxuICAgIHNtYWxsOiAnIHVrLWJ1dHRvbi1zbWFsbCcsXG4gICAgbGFyZ2U6ICcgdWstYnV0dG9uLWxhcmdlJ1xuICB9O1xuXG4gIHZhciBjc3NDbGFzc05hbWVzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFsndWstYnV0dG9uJywgcHJvcHMuY2xhc3NlcywgcHJvcHMuYmxvY2sgPyAndWstd2lkdGgtMS0xJyA6IG51bGwsIHByb3BzLmNvbnRleHQgPyBjb250ZXh0W3Byb3BzLmNvbnRleHRdIDogbnVsbCwgcHJvcHMuc2l6ZSA/IHNpemVbcHJvcHMuc2l6ZV0gOiBudWxsLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAvLyBFbGVtZW50c1xuICB2YXIgaWdub3JlUHJvcHMgPSBbJ3R5cGUnXTtcbiAgdmFyIGNsZWFuUHJvcHMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhblByb3BzKGlnbm9yZVByb3BzKShwcm9wcyk7XG5cbiAgdmFyIGF0dHIgPSBfZXh0ZW5kcyh7fSwgX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmV2ZW50cyhwcm9wcyksIHtcbiAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkXG4gIH0pO1xuXG4gIHZhciB0eXBlID0ge1xuICAgIGJ1dHRvbjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIF9leHRlbmRzKHt9LCBjbGVhblByb3BzLCBhdHRyLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZFxuICAgICAgfSksXG4gICAgICBwcm9wcy5ib2R5LFxuICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApLFxuXG4gICAgY2xvc2U6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdhJywgX2V4dGVuZHMoe30sIGNsZWFuUHJvcHMsIGF0dHIsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3VrLWNsb3NlICcgKyBjc3NDbGFzc05hbWVzLFxuICAgICAgaHJlZjogJyMnXG4gICAgfSkpLFxuXG4gICAgbGluazogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICBfZXh0ZW5kcyh7fSwgY2xlYW5Qcm9wcywgYXR0ciwge1xuICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgIGhyZWY6ICcjJyxcbiAgICAgICAgcm9sZTogJ2J1dHRvbidcbiAgICAgIH0pLFxuICAgICAgcHJvcHMuYm9keSxcbiAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKVxuICB9O1xuXG4gIC8vIFJldHVybiBDb21wb25lbnRcbiAgcmV0dXJuIHR5cGVbcHJvcHMudHlwZV0gfHwgdHlwZVsnYnV0dG9uJ107XG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBib2R5OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgYmxvY2s6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY29udGV4dDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc3VjY2VzcycsICdkYW5nZXInLCAnbGluayddKSxcbiAgZGlzYWJsZWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ21pbmknLCAnc21hbGwnLCAnbGFyZ2UnXSksXG4gIHR5cGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydidXR0b24nLCAnY2xvc2UnLCAnbGluayddKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoQnV0dG9uKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdHJpZ2dlci9+L3JlYWN0LXVpa2l0LWJ1dHRvbi9saWIvYnV0dG9uLmpzXG4gKiogbW9kdWxlIGlkID0gNDQyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})