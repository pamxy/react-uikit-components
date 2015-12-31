webpackHotUpdate(0,{

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ufunc = __webpack_require__(1137);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar breakpoints = function breakpoints() {\n  var media = {\n    small: 767,\n    medium: 768,\n    large: 960,\n    xlarge: 1200\n  };\n\n  var screen = {\n    small: window.innerWidth <= media.small,\n    medium: window.innerWidth >= media.medium && window.innerWidth < media.large,\n    large: window.innerWidth >= media.large && window.innerWidth < media.xlarge,\n    xlarge: window.innerWidth >= media.xlarge\n  };\n\n  return {\n    media: media,\n    screen: screen\n  };\n};\n\nvar cleanClasses = function cleanClasses(c) {\n  var str = _ufunc2.default.cleanAll(c).join(' ').trim().replace(/,/gi, ' ');\n  return _ufunc2.default.maybeIf(str)(str !== '');\n};\n\nvar cleanProps = function cleanProps(ignoreKeys) {\n  return function (obj) {\n    var newObj = _extends({}, obj);\n\n    for (var i = 0; i < ignoreKeys.length; i++) {\n      console.log(ignoreKeys);\n      if (obj[ignoreKeys[i]]) {\n        delete newObj[ignoreKeys[i]];\n      }\n    }\n\n    return newObj;\n  };\n};\n\nvar closeClass = function closeClass(alt) {\n  return alt ? 'uk-close-alt' : ' uk-close';\n};\n\nvar colSpan = ['1-1', '1-2', '1-3', '2-3', '1-4', '2-4', '3-4', '1-5', '2-5', ' 3-5', '4-5', '1-6', '2-6', ' 3-6', '4-6', '5-6', '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'];\n\nvar stringToClasses = function stringToClasses(str, cssClasses) {\n  var classes = str.split(' ').map(function (item) {\n    return cssClasses[item];\n  });\n\n  return classes.join(' ');\n};\n\nvar getClasses = function getClasses(str, cssClasses) {\n  return typeof str === 'string' ? stringToClasses(str, cssClasses) : '';\n};\n\nvar getClass = function getClass(str, cssClasses) {\n  return cssClasses[str] ? cssClasses[str] : '';\n};\n\nvar queryData = function queryData(value) {\n  return document.querySelector('[data-' + value + ']');\n};\n\nvar queryDataAll = function queryDataAll(value) {\n  return document.querySelectorAll('[data-' + value + ']');\n};\n\nvar getElement = function getElement(dataId) {\n  return queryData('kitid=\"' + dataId + '\"');\n};\n\nexports.default = {\n  breakpoints: breakpoints,\n  closeClass: closeClass,\n  colSpan: colSpan,\n  cleanClasses: cleanClasses,\n  cleanProps: cleanProps,\n  getClasses: getClasses,\n  getClass: getClass,\n  getElement: getElement,\n  stringToClasses: stringToClasses,\n  queryData: queryData,\n  queryDataAll: queryDataAll\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1iYXNlL2xpYi9oZWxwZXJzLmpzPzMwZTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUU7QUFBRSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUFFLFFBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtBQUFFLFVBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRTtBQUFFLGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7T0FBRTtLQUFFO0dBQUcsT0FBTyxNQUFNLENBQUM7Q0FBRSxDQUFDOztBQUVqUSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxJQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRTs7QUFFL0YsSUFBSSxXQUFXLEdBQUcsU0FBUyxXQUFXLEdBQUc7QUFDdkMsTUFBSSxLQUFLLEdBQUc7QUFDVixTQUFLLEVBQUUsR0FBRztBQUNWLFVBQU0sRUFBRSxH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ZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBicmVha3BvaW50cyA9IGZ1bmN0aW9uIGJyZWFrcG9pbnRzKCkge1xuICB2YXIgbWVkaWEgPSB7XG4gICAgc21hbGw6IDc2NyxcbiAgICBtZWRpdW06IDc2OCxcbiAgICBsYXJnZTogOTYwLFxuICAgIHhsYXJnZTogMTIwMFxuICB9O1xuXG4gIHZhciBzY3JlZW4gPSB7XG4gICAgc21hbGw6IHdpbmRvdy5pbm5lcldpZHRoIDw9IG1lZGlhLnNtYWxsLFxuICAgIG1lZGl1bTogd2luZG93LmlubmVyV2lkdGggPj0gbWVkaWEubWVkaXVtICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgbWVkaWEubGFyZ2UsXG4gICAgbGFyZ2U6IHdpbmRvdy5pbm5lcldpZHRoID49IG1lZGlhLmxhcmdlICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgbWVkaWEueGxhcmdlLFxuICAgIHhsYXJnZTogd2luZG93LmlubmVyV2lkdGggPj0gbWVkaWEueGxhcmdlXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtZWRpYTogbWVkaWEsXG4gICAgc2NyZWVuOiBzY3JlZW5cbiAgfTtcbn07XG5cbnZhciBjbGVhbkNsYXNzZXMgPSBmdW5jdGlvbiBjbGVhbkNsYXNzZXMoYykge1xuICB2YXIgc3RyID0gX3VmdW5jMi5kZWZhdWx0LmNsZWFuQWxsKGMpLmpvaW4oJyAnKS50cmltKCkucmVwbGFjZSgvLC9naSwgJyAnKTtcbiAgcmV0dXJuIF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKHN0cikoc3RyICE9PSAnJyk7XG59O1xuXG52YXIgY2xlYW5Qcm9wcyA9IGZ1bmN0aW9uIGNsZWFuUHJvcHMoaWdub3JlS2V5cykge1xuICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBuZXdPYmogPSBfZXh0ZW5kcyh7fSwgb2JqKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWdub3JlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coaWdub3JlS2V5cyk7XG4gICAgICBpZiAob2JqW2lnbm9yZUtleXNbaV1dKSB7XG4gICAgICAgIGRlbGV0ZSBuZXdPYmpbaWdub3JlS2V5c1tpXV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfTtcbn07XG5cbnZhciBjbG9zZUNsYXNzID0gZnVuY3Rpb24gY2xvc2VDbGFzcyhhbHQpIHtcbiAgcmV0dXJuIGFsdCA/ICd1ay1jbG9zZS1hbHQnIDogJyB1ay1jbG9zZSc7XG59O1xuXG52YXIgY29sU3BhbiA9IFsnMS0xJywgJzEtMicsICcxLTMnLCAnMi0zJywgJzEtNCcsICcyLTQnLCAnMy00JywgJzEtNScsICcyLTUnLCAnIDMtNScsICc0LTUnLCAnMS02JywgJzItNicsICcgMy02JywgJzQtNicsICc1LTYnLCAnMS0xMCcsICcyLTEwJywgJzMtMTAnLCAnNC0xMCcsICc1LTEwJywgJzYtMTAnLCAnNy0xMCcsICc4LTEwJywgJzktMTAnXTtcblxudmFyIHN0cmluZ1RvQ2xhc3NlcyA9IGZ1bmN0aW9uIHN0cmluZ1RvQ2xhc3NlcyhzdHIsIGNzc0NsYXNzZXMpIHtcbiAgdmFyIGNsYXNzZXMgPSBzdHIuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gY3NzQ2xhc3Nlc1tpdGVtXTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxudmFyIGdldENsYXNzZXMgPSBmdW5jdGlvbiBnZXRDbGFzc2VzKHN0ciwgY3NzQ2xhc3Nlcykge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBzdHJpbmdUb0NsYXNzZXMoc3RyLCBjc3NDbGFzc2VzKSA6ICcnO1xufTtcblxudmFyIGdldENsYXNzID0gZnVuY3Rpb24gZ2V0Q2xhc3Moc3RyLCBjc3NDbGFzc2VzKSB7XG4gIHJldHVybiBjc3NDbGFzc2VzW3N0cl0gPyBjc3NDbGFzc2VzW3N0cl0gOiAnJztcbn07XG5cbnZhciBxdWVyeURhdGEgPSBmdW5jdGlvbiBxdWVyeURhdGEodmFsdWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLScgKyB2YWx1ZSArICddJyk7XG59O1xuXG52YXIgcXVlcnlEYXRhQWxsID0gZnVuY3Rpb24gcXVlcnlEYXRhQWxsKHZhbHVlKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS0nICsgdmFsdWUgKyAnXScpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRFbGVtZW50KGRhdGFJZCkge1xuICByZXR1cm4gcXVlcnlEYXRhKCdraXRpZD1cIicgKyBkYXRhSWQgKyAnXCInKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICBjbG9zZUNsYXNzOiBjbG9zZUNsYXNzLFxuICBjb2xTcGFuOiBjb2xTcGFuLFxuICBjbGVhbkNsYXNzZXM6IGNsZWFuQ2xhc3NlcyxcbiAgY2xlYW5Qcm9wczogY2xlYW5Qcm9wcyxcbiAgZ2V0Q2xhc3NlczogZ2V0Q2xhc3NlcyxcbiAgZ2V0Q2xhc3M6IGdldENsYXNzLFxuICBnZXRFbGVtZW50OiBnZXRFbGVtZW50LFxuICBzdHJpbmdUb0NsYXNzZXM6IHN0cmluZ1RvQ2xhc3NlcyxcbiAgcXVlcnlEYXRhOiBxdWVyeURhdGEsXG4gIHF1ZXJ5RGF0YUFsbDogcXVlcnlEYXRhQWxsXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtYmFzZS9saWIvaGVscGVycy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})