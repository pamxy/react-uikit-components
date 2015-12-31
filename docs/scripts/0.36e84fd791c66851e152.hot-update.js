webpackHotUpdate(0,{

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar pos = function pos(element) {\n  return {\n    top: element.offsetTop,\n    left: element.offsetLeft\n  };\n};\n\nvar dim = function dim(element) {\n  return {\n    height: element.offsetHeight,\n    width: element.offsetWidth\n  };\n};\n\nvar offset = function offset(opts) {\n  var target = opts.target;\n  var element = opts.element;\n  var flip = opts.flip;\n  var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);\n  var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);\n\n  var targetDetails = {\n    pos: pos(target),\n    dim: dim(target),\n    boundary: target.getBoundingClientRect()\n  };\n\n  var elementDetails = {\n    pos: pos(element),\n    dim: dim(element),\n    boundary: element.getBoundingClientRect()\n  };\n\n  var calc = {\n    top: targetDetails.pos.top - elementDetails.dim.height,\n    bottom: targetDetails.pos.top + targetDetails.dim.height,\n    left: targetDetails.pos.left,\n    right: left - (elementDetails.dim.width - targetDetails.dim.width),\n    horCenter: left - (elementDetails.dim.width - targetDetails.dim.width) / 2,\n    verCenter: bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2\n  };\n\n  var top = _ufunc2.default.either(function () {\n    return targetDetails.pos.top + targetDetails.dim.height;\n  }, function () {\n    return targetDetails.pos.top - elementDetails.dim.height;\n  })(flip && elementDetails.boundary.top < 0);\n\n  var bottom = _ufunc2.default.either(function () {\n    return targetDetails.pos.top - targetDetails.dim.height;\n  }, function () {\n    return targetDetails.pos.top + targetDetails.dim.height;\n  })(flip && elementDetails.boundary.top < 0);\n\n  var left = targetDetails.pos.left;\n\n  var right = left - (elementDetails.dim.width - targetDetails.dim.width);\n\n  var horCenter = left - (elementDetails.dim.width - targetDetails.dim.width) / 2;\n  var verCenter = bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2;\n  console.log(bottom);\n  console.log(elementDetails.boundary);\n\n  var position = {\n    top: top,\n    bottom: bottom,\n    left: left,\n    right: right,\n\n    'bottom-left': { top: bottom, left: left },\n    'bottom-center': { top: bottom, left: horCenter },\n    'bottom-right': { top: bottom, left: right },\n\n    'top-left': { top: top, left: left },\n    'top-center': { top: top, left: horCenter },\n    'top-right': { top: top, left: right },\n\n    'left-top': { top: top, left: left - elementDetails.dim.width },\n    'left-center': { top: verCenter, left: left - elementDetails.dim.width },\n    'left-bottom': { top: bottom, left: left - elementDetails.dim.width },\n\n    'right-top': { top: top, left: right + elementDetails.dim.width },\n    'right-center': { top: verCenter, left: right + elementDetails.dim.width },\n    'right-bottom': { top: bottom, left: right + elementDetails.dim.width }\n  };\n\n  return function (prop) {\n    return position[prop] || position['bottom-left'];\n  };\n};\n\nexports.default = {\n  dim: dim,\n  pos: pos,\n  offset: offset\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvcG9zT2Zmc2V0LmpzP2NlMjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDOUIsU0FBTztBQUNMLE9BQUcsRUFBRSxPQUFPLENBQUMsU0FBUztBQUN0QixRQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVU7R0FDekIsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzlCLFNBQU87QUFDTCxVQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVk7QUFDNUIsU0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0dBQzNCLENBQUM7Q0FDSCxDQUFDOztBQUVGLElBQUksTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNqQyxNQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0IsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixNQUFJLGFBQWEsR0FBRyxJ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QUFJLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7O0FBRXJFLGVBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtBQUNqRSxrQkFBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQzFFLGtCQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7R0FDeEUsQ0FBQzs7QUFFRixTQUFPLFVBQVUsSUFBSSxFQUFFO0FBQ3JCLFdBQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUNsRCxDQUFDO0NBQ0gsQ0FBQzs7QUFFRixPQUFPLENBQUMsT0FBTyxHQUFHO0FBQ2hCLEtBQUcsRUFBRSxHQUFHO0FBQ1IsS0FBRyxFQUFFLEdBQUc7QUFDUixRQUFNLEVBQUUsTUFBTTtDQUNmIiwiZmlsZSI6IjYyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91ZnVuYyA9IHJlcXVpcmUoJ3VmdW5jJyk7XG5cbnZhciBfdWZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdWZ1bmMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcG9zID0gZnVuY3Rpb24gcG9zKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdFxuICB9O1xufTtcblxudmFyIGRpbSA9IGZ1bmN0aW9uIGRpbShlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICB9O1xufTtcblxudmFyIG9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldChvcHRzKSB7XG4gIHZhciB0YXJnZXQgPSBvcHRzLnRhcmdldDtcbiAgdmFyIGVsZW1lbnQgPSBvcHRzLmVsZW1lbnQ7XG4gIHZhciBmbGlwID0gb3B0cy5mbGlwO1xuICB2YXIgdmlld1BvcnRXaWR0aCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIHZhciB2aWV3UG9ydEhlaWdodCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICB2YXIgdGFyZ2V0RGV0YWlscyA9IHtcbiAgICBwb3M6IHBvcyh0YXJnZXQpLFxuICAgIGRpbTogZGltKHRhcmdldCksXG4gICAgYm91bmRhcnk6IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9O1xuXG4gIHZhciBlbGVtZW50RGV0YWlscyA9IHtcbiAgICBwb3M6IHBvcyhlbGVtZW50KSxcbiAgICBkaW06IGRpbShlbGVtZW50KSxcbiAgICBib3VuZGFyeTogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9O1xuXG4gIHZhciBjYWxjID0ge1xuICAgIHRvcDogdGFyZ2V0RGV0YWlscy5wb3MudG9wIC0gZWxlbWVudERldGFpbHMuZGltLmhlaWdodCxcbiAgICBib3R0b206IHRhcmdldERldGFpbHMucG9zLnRvcCArIHRhcmdldERldGFpbHMuZGltLmhlaWdodCxcbiAgICBsZWZ0OiB0YXJnZXREZXRhaWxzLnBvcy5sZWZ0LFxuICAgIHJpZ2h0OiBsZWZ0IC0gKGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCAtIHRhcmdldERldGFpbHMuZGltLndpZHRoKSxcbiAgICBob3JDZW50ZXI6IGxlZnQgLSAoZWxlbWVudERldGFpbHMuZGltLndpZHRoIC0gdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGgpIC8gMixcbiAgICB2ZXJDZW50ZXI6IGJvdHRvbSAtIChlbGVtZW50RGV0YWlscy5kaW0uaGVpZ2h0ICsgdGFyZ2V0RGV0YWlscy5kaW0uaGVpZ2h0KSAvIDJcbiAgfTtcblxuICB2YXIgdG9wID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRhcmdldERldGFpbHMucG9zLnRvcCArIHRhcmdldERldGFpbHMuZGltLmhlaWdodDtcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YXJnZXREZXRhaWxzLnBvcy50b3AgLSBlbGVtZW50RGV0YWlscy5kaW0uaGVpZ2h0O1xuICB9KShmbGlwICYmIGVsZW1lbnREZXRhaWxzLmJvdW5kYXJ5LnRvcCA8IDApO1xuXG4gIHZhciBib3R0b20gPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFyZ2V0RGV0YWlscy5wb3MudG9wIC0gdGFyZ2V0RGV0YWlscy5kaW0uaGVpZ2h0O1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRhcmdldERldGFpbHMucG9zLnRvcCArIHRhcmdldERldGFpbHMuZGltLmhlaWdodDtcbiAgfSkoZmxpcCAmJiBlbGVtZW50RGV0YWlscy5ib3VuZGFyeS50b3AgPCAwKTtcblxuICB2YXIgbGVmdCA9IHRhcmdldERldGFpbHMucG9zLmxlZnQ7XG5cbiAgdmFyIHJpZ2h0ID0gbGVmdCAtIChlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggLSB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCk7XG5cbiAgdmFyIGhvckNlbnRlciA9IGxlZnQgLSAoZWxlbWVudERldGFpbHMuZGltLndpZHRoIC0gdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGgpIC8gMjtcbiAgdmFyIHZlckNlbnRlciA9IGJvdHRvbSAtIChlbGVtZW50RGV0YWlscy5kaW0uaGVpZ2h0ICsgdGFyZ2V0RGV0YWlscy5kaW0uaGVpZ2h0KSAvIDI7XG4gIGNvbnNvbGUubG9nKGJvdHRvbSk7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnREZXRhaWxzLmJvdW5kYXJ5KTtcblxuICB2YXIgcG9zaXRpb24gPSB7XG4gICAgdG9wOiB0b3AsXG4gICAgYm90dG9tOiBib3R0b20sXG4gICAgbGVmdDogbGVmdCxcbiAgICByaWdodDogcmlnaHQsXG5cbiAgICAnYm90dG9tLWxlZnQnOiB7IHRvcDogYm90dG9tLCBsZWZ0OiBsZWZ0IH0sXG4gICAgJ2JvdHRvbS1jZW50ZXInOiB7IHRvcDogYm90dG9tLCBsZWZ0OiBob3JDZW50ZXIgfSxcbiAgICAnYm90dG9tLXJpZ2h0JzogeyB0b3A6IGJvdHRvbSwgbGVmdDogcmlnaHQgfSxcblxuICAgICd0b3AtbGVmdCc6IHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfSxcbiAgICAndG9wLWNlbnRlcic6IHsgdG9wOiB0b3AsIGxlZnQ6IGhvckNlbnRlciB9LFxuICAgICd0b3AtcmlnaHQnOiB7IHRvcDogdG9wLCBsZWZ0OiByaWdodCB9LFxuXG4gICAgJ2xlZnQtdG9wJzogeyB0b3A6IHRvcCwgbGVmdDogbGVmdCAtIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCB9LFxuICAgICdsZWZ0LWNlbnRlcic6IHsgdG9wOiB2ZXJDZW50ZXIsIGxlZnQ6IGxlZnQgLSBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfSxcbiAgICAnbGVmdC1ib3R0b20nOiB7IHRvcDogYm90dG9tLCBsZWZ0OiBsZWZ0IC0gZWxlbWVudERldGFpbHMuZGltLndpZHRoIH0sXG5cbiAgICAncmlnaHQtdG9wJzogeyB0b3A6IHRvcCwgbGVmdDogcmlnaHQgKyBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfSxcbiAgICAncmlnaHQtY2VudGVyJzogeyB0b3A6IHZlckNlbnRlciwgbGVmdDogcmlnaHQgKyBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfSxcbiAgICAncmlnaHQtYm90dG9tJzogeyB0b3A6IGJvdHRvbSwgbGVmdDogcmlnaHQgKyBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfVxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiBwb3NpdGlvbltwcm9wXSB8fCBwb3NpdGlvblsnYm90dG9tLWxlZnQnXTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGltOiBkaW0sXG4gIHBvczogcG9zLFxuICBvZmZzZXQ6IG9mZnNldFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWRyb3Bkb3duL2xpYi9wb3NPZmZzZXQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})