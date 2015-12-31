webpackHotUpdate(0,{

/***/ 3624:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(696);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _tableData = __webpack_require__(3622);\n\nvar _tableData2 = _interopRequireDefault(_tableData);\n\nvar _sortIt = __webpack_require__(3533);\n\nvar _sortIt2 = _interopRequireDefault(_sortIt);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n// Convert object to array with index column position\nvar bodyToArray = function bodyToArray(body, columns) {\n  return body.map(function (item) {\n    return Object.keys(item).map(function (k) {\n      var pos = columns.indexOf(k);\n      return [k, item[k], pos];\n    });\n  });\n};\n\n// Sorts a collection of data\nvar sort = function sort(data, critera) {\n  if (!critera) return data;\n  return (0, _sortIt2.default)(data, critera);\n};\n\nvar numbered = function numbered(index) {\n  return _react2.default.createElement('td', null, index + 1);\n};\n\nvar TableRows = function TableRows(props, columns) {\n  return bodyToArray(sort(props.body, props.sort), columns).map(function (item, index) {\n    return _react2.default.createElement('tr', { key: index, 'data-kitid': 'tablerow-' + index + '-' + props.kitid }, props.numbered ? numbered(index) : null, (0, _tableData2.default)({\n      item: item,\n      index: index,\n      kitid: props.kitid\n    }));\n  });\n};\n\nTableRows.propTypes = {\n  body: _react2.default.PropTypes.array,\n  kitid: _react2.default.PropTypes.string,\n  numbered: _react2.default.PropTypes.number,\n  sort: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.string])\n};\n\nexports.default = TableRows;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtcm93cy5qcz9hY2E4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElBQUksVUFBVSxHQUFHLG1CQUFPLENBQUMsSUFBYyxDQUFDLENBQUM7O0FBRXpDLElBQUksV0FBVyxHQUFHLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVyRCxJQUFJLE9BQU8sR0FBRyxtQkFBTyxDQUFDLElBQVMsQ0FBQyxDQUFDOztBQUVqQyxJQUFJLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFL0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOzs7QUFHL0YsSUFBSSxXQUFXLEdBQUcsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNwRCxTQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUU7QUFDOUIsV0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUN4QyxVQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLGFBQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKOzs7QUFHRCxJQUFJLElBQUksR0FBRyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3RDLE1BQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFDMUIsU0FBTyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztDQUM3QyxDQUFDOztBQUVGLElBQUksUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUN0QyxTQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUNsQyxJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssR0FBRyxDQUFDLENBQ1YsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxTQUFTLEdBQUcsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUNqRCxTQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNuRixXQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUNsQyxJQUFJLEVBQ0osRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxXQUFXLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQ3JFLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFDdkMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRTtBQUN2QixVQUFJLEVBQUUsSUFBSTtBQUNWLFdBQUssRUFBRSxLQUFLO0FBQ1osV0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO0tBQ25CLENBQUMsQ0FDSCxDQUFDO0dBQ0gsQ0FBQyxDQUFDO0NBQ0osQ0FBQzs7QUFFRixTQUFTLENBQUMsU0FBUyxHQUFHO0FBQ3BCLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3JDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLFVBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQzFDLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDL0csQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHLFNBQVMiLCJmaWxlIjoiMzYyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3RhYmxlRGF0YSA9IHJlcXVpcmUoJy4vdGFibGUtZGF0YScpO1xuXG52YXIgX3RhYmxlRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJsZURhdGEpO1xuXG52YXIgX3NvcnRJdCA9IHJlcXVpcmUoJ3NvcnQtaXQnKTtcblxudmFyIF9zb3J0SXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc29ydEl0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gQ29udmVydCBvYmplY3QgdG8gYXJyYXkgd2l0aCBpbmRleCBjb2x1bW4gcG9zaXRpb25cbnZhciBib2R5VG9BcnJheSA9IGZ1bmN0aW9uIGJvZHlUb0FycmF5KGJvZHksIGNvbHVtbnMpIHtcbiAgcmV0dXJuIGJvZHkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZW0pLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgdmFyIHBvcyA9IGNvbHVtbnMuaW5kZXhPZihrKTtcbiAgICAgIHJldHVybiBbaywgaXRlbVtrXSwgcG9zXTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBTb3J0cyBhIGNvbGxlY3Rpb24gb2YgZGF0YVxudmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KGRhdGEsIGNyaXRlcmEpIHtcbiAgaWYgKCFjcml0ZXJhKSByZXR1cm4gZGF0YTtcbiAgcmV0dXJuICgwLCBfc29ydEl0Mi5kZWZhdWx0KShkYXRhLCBjcml0ZXJhKTtcbn07XG5cbnZhciBudW1iZXJlZCA9IGZ1bmN0aW9uIG51bWJlcmVkKGluZGV4KSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAndGQnLFxuICAgIG51bGwsXG4gICAgaW5kZXggKyAxXG4gICk7XG59O1xuXG52YXIgVGFibGVSb3dzID0gZnVuY3Rpb24gVGFibGVSb3dzKHByb3BzLCBjb2x1bW5zKSB7XG4gIHJldHVybiBib2R5VG9BcnJheShzb3J0KHByb3BzLmJvZHksIHByb3BzLnNvcnQpLCBjb2x1bW5zKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RyJyxcbiAgICAgIHsga2V5OiBpbmRleCwgJ2RhdGEta2l0aWQnOiAndGFibGVyb3ctJyArIGluZGV4ICsgJy0nICsgcHJvcHMua2l0aWQgfSxcbiAgICAgIHByb3BzLm51bWJlcmVkID8gbnVtYmVyZWQoaW5kZXgpIDogbnVsbCxcbiAgICAgICgwLCBfdGFibGVEYXRhMi5kZWZhdWx0KSh7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAga2l0aWQ6IHByb3BzLmtpdGlkXG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xufTtcblxuVGFibGVSb3dzLnByb3BUeXBlcyA9IHtcbiAgYm9keTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBudW1iZXJlZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5udW1iZXIsXG4gIHNvcnQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFycmF5LCBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZ10pXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZVJvd3M7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10YWJsZS9saWIvdGFibGUtcm93cy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})