import { i as __toESM, n as __commonJSMin, t as require_react } from "./react-D57lpOvP.js";
import { A as min$1, B as color, F as number, H as rgb$1, I as rgb, L as rgbBasis, M as cubehelixLong, N as interpolateTransformCss, P as interpolateTransformSvg, R as string, V as cubehelix$1, d as ordinal, j as sum, k as max$1, z as zoom$1 } from "./d3-scale-D5th8jzE.js";
// node_modules/jerrypick/dist/jerrypick.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function _iterableToArrayLimit$2(arr, i) {
	var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
	if (null != _i) {
		var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
		try {
			if (_x = (_i = _i.call(arr)).next, 0 === i) {
				if (Object(_i) !== _i) return;
				_n = !1;
			} else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
		} catch (err) {
			_d = !0, _e = err;
		} finally {
			try {
				if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
			} finally {
				if (_d) throw _e;
			}
		}
		return _arr;
	}
}
function _defineProperty(obj, key, value) {
	key = _toPropertyKey$2(key);
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function _slicedToArray$2(arr, i) {
	return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$2();
}
function _toConsumableArray$2(arr) {
	return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread$2();
}
function _arrayWithoutHoles$2(arr) {
	if (Array.isArray(arr)) return _arrayLikeToArray$3(arr);
}
function _arrayWithHoles$2(arr) {
	if (Array.isArray(arr)) return arr;
}
function _iterableToArray$2(iter) {
	if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray$3(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	return arr2;
}
function _nonIterableSpread$2() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest$2() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive$2(input, hint) {
	if (typeof input !== "object" || input === null) return input;
	var prim = input[Symbol.toPrimitive];
	if (prim !== void 0) {
		var res = prim.call(input, hint || "default");
		if (typeof res !== "object") return res;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey$2(arg) {
	var key = _toPrimitive$2(arg, "string");
	return typeof key === "symbol" ? key : String(key);
}
var omit = function omit(obj, keys) {
	var keySet = new Set(keys);
	return Object.assign.apply(Object, [{}].concat(_toConsumableArray$2(Object.entries(obj).filter(function(_ref2) {
		var key = _slicedToArray$2(_ref2, 1)[0];
		return !keySet.has(key);
	}).map(function(_ref4) {
		var _ref5 = _slicedToArray$2(_ref4, 2), key = _ref5[0], val = _ref5[1];
		return _defineProperty({}, key, val);
	}))));
};
// node_modules/react-kapsule/dist/react-kapsule.mjs
function index$5(kapsuleComponent, { wrapperElementType = "div", nodeMapper = (node) => node, methodNames = [], initPropNames = [] } = {}) {
	return /*#__PURE__*/ (0, import_react.forwardRef)((props, ref) => {
		const domEl = (0, import_react.useRef)();
		const comp = (0, import_react.useMemo)(() => {
			return kapsuleComponent(Object.fromEntries(initPropNames.filter((p) => props.hasOwnProperty(p)).map((prop) => [prop, props[prop]])));
		}, []);
		useEffectOnce(() => {
			comp(nodeMapper(domEl.current));
		}, import_react.useLayoutEffect);
		useEffectOnce(() => {
			return comp._destructor instanceof Function ? comp._destructor : void 0;
		});
		const _call = (0, import_react.useCallback)((method, ...args) => comp[method] instanceof Function ? comp[method](...args) : void 0, [comp]);
		const prevPropsRef = (0, import_react.useRef)({});
		Object.keys(omit(props, [...methodNames, ...initPropNames])).filter((p) => prevPropsRef.current[p] !== props[p]).forEach((p) => _call(p, props[p]));
		prevPropsRef.current = props;
		(0, import_react.useImperativeHandle)(ref, () => Object.fromEntries(methodNames.map((method) => [method, (...args) => _call(method, ...args)])), [_call]);
		return /*#__PURE__*/ import_react.createElement(wrapperElementType, { ref: domEl });
	});
}
function useEffectOnce(effect, useEffectFn = import_react.useEffect) {
	const destroyFunc = (0, import_react.useRef)();
	const effectCalled = (0, import_react.useRef)(false);
	const renderAfterCalled = (0, import_react.useRef)(false);
	const [val, setVal] = (0, import_react.useState)(0);
	if (effectCalled.current) renderAfterCalled.current = true;
	useEffectFn(() => {
		if (!effectCalled.current) {
			destroyFunc.current = effect();
			effectCalled.current = true;
		}
		setVal((val) => val + 1);
		return () => {
			if (!renderAfterCalled.current) return;
			if (destroyFunc.current) destroyFunc.current();
			destroyFunc.current = void 0;
			effectCalled.current = false;
			renderAfterCalled.current = false;
		};
	}, []);
}
// node_modules/d3-selection/dist/d3-selection.mjs
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces = {
	svg: "http://www.w3.org/2000/svg",
	xhtml,
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
	var prefix = name += "", i = prefix.indexOf(":");
	if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	return namespaces.hasOwnProperty(prefix) ? {
		space: namespaces[prefix],
		local: name
	} : name;
}
function creatorInherit(name) {
	return function() {
		var document = this.ownerDocument, uri = this.namespaceURI;
		return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
	};
}
function creatorFixed(fullname) {
	return function() {
		return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	};
}
function creator(name) {
	var fullname = namespace(name);
	return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {}
function selector(selector) {
	return selector == null ? none : function() {
		return this.querySelector(selector);
	};
}
function selection_select(select) {
	if (typeof select !== "function") select = selector(select);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
		if ("__data__" in node) subnode.__data__ = node.__data__;
		subgroup[i] = subnode;
	}
	return new Selection$1(subgroups, this._parents);
}
function array(x) {
	return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty() {
	return [];
}
function selectorAll(selector) {
	return selector == null ? empty : function() {
		return this.querySelectorAll(selector);
	};
}
function arrayAll(select) {
	return function() {
		return array(select.apply(this, arguments));
	};
}
function selection_selectAll(select) {
	if (typeof select === "function") select = arrayAll(select);
	else select = selectorAll(select);
	for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) {
		subgroups.push(select.call(node, node.__data__, i, group));
		parents.push(node);
	}
	return new Selection$1(subgroups, parents);
}
function matcher(selector) {
	return function() {
		return this.matches(selector);
	};
}
function childMatcher(selector) {
	return function(node) {
		return node.matches(selector);
	};
}
var find$1 = Array.prototype.find;
function childFind(match) {
	return function() {
		return find$1.call(this.children, match);
	};
}
function childFirst() {
	return this.firstElementChild;
}
function selection_selectChild(match) {
	return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
	return Array.from(this.children);
}
function childrenFilter(match) {
	return function() {
		return filter.call(this.children, match);
	};
}
function selection_selectChildren(match) {
	return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
	if (typeof match !== "function") match = matcher(match);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
	return new Selection$1(subgroups, this._parents);
}
function sparse(update) {
	return new Array(update.length);
}
function selection_enter() {
	return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum) {
	this.ownerDocument = parent.ownerDocument;
	this.namespaceURI = parent.namespaceURI;
	this._next = null;
	this._parent = parent;
	this.__data__ = datum;
}
EnterNode.prototype = {
	constructor: EnterNode,
	appendChild: function(child) {
		return this._parent.insertBefore(child, this._next);
	},
	insertBefore: function(child, next) {
		return this._parent.insertBefore(child, next);
	},
	querySelector: function(selector) {
		return this._parent.querySelector(selector);
	},
	querySelectorAll: function(selector) {
		return this._parent.querySelectorAll(selector);
	}
};
function constant$2(x) {
	return function() {
		return x;
	};
}
function bindIndex(parent, group, enter, update, exit, data) {
	var i = 0, node, groupLength = group.length, dataLength = data.length;
	for (; i < dataLength; ++i) if (node = group[i]) {
		node.__data__ = data[i];
		update[i] = node;
	} else enter[i] = new EnterNode(parent, data[i]);
	for (; i < groupLength; ++i) if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
	var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
	for (i = 0; i < groupLength; ++i) if (node = group[i]) {
		keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
		if (nodeByKeyValue.has(keyValue)) exit[i] = node;
		else nodeByKeyValue.set(keyValue, node);
	}
	for (i = 0; i < dataLength; ++i) {
		keyValue = key.call(parent, data[i], i, data) + "";
		if (node = nodeByKeyValue.get(keyValue)) {
			update[i] = node;
			node.__data__ = data[i];
			nodeByKeyValue.delete(keyValue);
		} else enter[i] = new EnterNode(parent, data[i]);
	}
	for (i = 0; i < groupLength; ++i) if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function datum(node) {
	return node.__data__;
}
function selection_data(value, key) {
	if (!arguments.length) return Array.from(this, datum);
	var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
	if (typeof value !== "function") value = constant$2(value);
	for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
		var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength);
		bind(parent, group, enterGroup, updateGroup, exit[j] = new Array(groupLength), data, key);
		for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) if (previous = enterGroup[i0]) {
			if (i0 >= i1) i1 = i0 + 1;
			while (!(next = updateGroup[i1]) && ++i1 < dataLength);
			previous._next = next || null;
		}
	}
	update = new Selection$1(update, parents);
	update._enter = enter;
	update._exit = exit;
	return update;
}
function arraylike(data) {
	return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit() {
	return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
	var enter = this.enter(), update = this, exit = this.exit();
	if (typeof onenter === "function") {
		enter = onenter(enter);
		if (enter) enter = enter.selection();
	} else enter = enter.append(onenter + "");
	if (onupdate != null) {
		update = onupdate(update);
		if (update) update = update.selection();
	}
	if (onexit == null) exit.remove();
	else onexit(exit);
	return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(context) {
	var selection = context.selection ? context.selection() : context;
	for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) if (node = group0[i] || group1[i]) merge[i] = node;
	for (; j < m0; ++j) merges[j] = groups0[j];
	return new Selection$1(merges, this._parents);
}
function selection_order() {
	for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) if (node = group[i]) {
		if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
		next = node;
	}
	return this;
}
function selection_sort(compare) {
	if (!compare) compare = ascending;
	function compareNode(a, b) {
		return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	}
	for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
		for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) if (node = group[i]) sortgroup[i] = node;
		sortgroup.sort(compareNode);
	}
	return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a, b) {
	return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
	var callback = arguments[0];
	arguments[0] = this;
	callback.apply(null, arguments);
	return this;
}
function selection_nodes() {
	return Array.from(this);
}
function selection_node() {
	for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
		var node = group[i];
		if (node) return node;
	}
	return null;
}
function selection_size() {
	let size = 0;
	for (const node of this) ++size;
	return size;
}
function selection_empty() {
	return !this.node();
}
function selection_each(callback) {
	for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) if (node = group[i]) callback.call(node, node.__data__, i, group);
	return this;
}
function attrRemove$1(name) {
	return function() {
		this.removeAttribute(name);
	};
}
function attrRemoveNS$1(fullname) {
	return function() {
		this.removeAttributeNS(fullname.space, fullname.local);
	};
}
function attrConstant$1(name, value) {
	return function() {
		this.setAttribute(name, value);
	};
}
function attrConstantNS$1(fullname, value) {
	return function() {
		this.setAttributeNS(fullname.space, fullname.local, value);
	};
}
function attrFunction$1(name, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) this.removeAttribute(name);
		else this.setAttribute(name, v);
	};
}
function attrFunctionNS$1(fullname, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
		else this.setAttributeNS(fullname.space, fullname.local, v);
	};
}
function selection_attr(name, value) {
	var fullname = namespace(name);
	if (arguments.length < 2) {
		var node = this.node();
		return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
	}
	return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function defaultView(node) {
	return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
function styleRemove$1(name) {
	return function() {
		this.style.removeProperty(name);
	};
}
function styleConstant$1(name, value, priority) {
	return function() {
		this.style.setProperty(name, value, priority);
	};
}
function styleFunction$1(name, value, priority) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) this.style.removeProperty(name);
		else this.style.setProperty(name, v, priority);
	};
}
function selection_style(name, value, priority) {
	return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
	return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
	return function() {
		delete this[name];
	};
}
function propertyConstant(name, value) {
	return function() {
		this[name] = value;
	};
}
function propertyFunction(name, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) delete this[name];
		else this[name] = v;
	};
}
function selection_property(name, value) {
	return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
function classArray(string) {
	return string.trim().split(/^|\s+/);
}
function classList(node) {
	return node.classList || new ClassList(node);
}
function ClassList(node) {
	this._node = node;
	this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
	add: function(name) {
		if (this._names.indexOf(name) < 0) {
			this._names.push(name);
			this._node.setAttribute("class", this._names.join(" "));
		}
	},
	remove: function(name) {
		var i = this._names.indexOf(name);
		if (i >= 0) {
			this._names.splice(i, 1);
			this._node.setAttribute("class", this._names.join(" "));
		}
	},
	contains: function(name) {
		return this._names.indexOf(name) >= 0;
	}
};
function classedAdd(node, names) {
	var list = classList(node), i = -1, n = names.length;
	while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
	var list = classList(node), i = -1, n = names.length;
	while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
	return function() {
		classedAdd(this, names);
	};
}
function classedFalse(names) {
	return function() {
		classedRemove(this, names);
	};
}
function classedFunction(names, value) {
	return function() {
		(value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	};
}
function selection_classed(name, value) {
	var names = classArray(name + "");
	if (arguments.length < 2) {
		var list = classList(this.node()), i = -1, n = names.length;
		while (++i < n) if (!list.contains(names[i])) return false;
		return true;
	}
	return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function textRemove() {
	this.textContent = "";
}
function textConstant$1(value) {
	return function() {
		this.textContent = value;
	};
}
function textFunction$1(value) {
	return function() {
		var v = value.apply(this, arguments);
		this.textContent = v == null ? "" : v;
	};
}
function selection_text(value) {
	return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function htmlRemove() {
	this.innerHTML = "";
}
function htmlConstant(value) {
	return function() {
		this.innerHTML = value;
	};
}
function htmlFunction(value) {
	return function() {
		var v = value.apply(this, arguments);
		this.innerHTML = v == null ? "" : v;
	};
}
function selection_html(value) {
	return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function raise() {
	if (this.nextSibling) this.parentNode.appendChild(this);
}
function selection_raise() {
	return this.each(raise);
}
function lower() {
	if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
	return this.each(lower);
}
function selection_append(name) {
	var create = typeof name === "function" ? name : creator(name);
	return this.select(function() {
		return this.appendChild(create.apply(this, arguments));
	});
}
function constantNull() {
	return null;
}
function selection_insert(name, before) {
	var create = typeof name === "function" ? name : creator(name), select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
	return this.select(function() {
		return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	});
}
function remove$1() {
	var parent = this.parentNode;
	if (parent) parent.removeChild(this);
}
function selection_remove() {
	return this.each(remove$1);
}
function selection_cloneShallow() {
	var clone = this.cloneNode(false), parent = this.parentNode;
	return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
	var clone = this.cloneNode(true), parent = this.parentNode;
	return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
	return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
	return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener(listener) {
	return function(event) {
		listener.call(this, event, this.__data__);
	};
}
function parseTypenames$1(typenames) {
	return typenames.trim().split(/^|\s+/).map(function(t) {
		var name = "", i = t.indexOf(".");
		if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
		return {
			type: t,
			name
		};
	});
}
function onRemove(typename) {
	return function() {
		var on = this.__on;
		if (!on) return;
		for (var j = 0, i = -1, m = on.length, o; j < m; ++j) if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
		else on[++i] = o;
		if (++i) on.length = i;
		else delete this.__on;
	};
}
function onAdd(typename, value, options) {
	return function() {
		var on = this.__on, o, listener = contextListener(value);
		if (on) {
			for (var j = 0, m = on.length; j < m; ++j) if ((o = on[j]).type === typename.type && o.name === typename.name) {
				this.removeEventListener(o.type, o.listener, o.options);
				this.addEventListener(o.type, o.listener = listener, o.options = options);
				o.value = value;
				return;
			}
		}
		this.addEventListener(typename.type, listener, options);
		o = {
			type: typename.type,
			name: typename.name,
			value,
			listener,
			options
		};
		if (!on) this.__on = [o];
		else on.push(o);
	};
}
function selection_on(typename, value, options) {
	var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;
	if (arguments.length < 2) {
		var on = this.node().__on;
		if (on) {
			for (var j = 0, m = on.length, o; j < m; ++j) for (i = 0, o = on[j]; i < n; ++i) if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
		}
		return;
	}
	on = value ? onAdd : onRemove;
	for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
	return this;
}
function dispatchEvent(node, type, params) {
	var window = defaultView(node), event = window.CustomEvent;
	if (typeof event === "function") event = new event(type, params);
	else {
		event = window.document.createEvent("Event");
		if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
		else event.initEvent(type, false, false);
	}
	node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
	return function() {
		return dispatchEvent(this, type, params);
	};
}
function dispatchFunction(type, params) {
	return function() {
		return dispatchEvent(this, type, params.apply(this, arguments));
	};
}
function selection_dispatch(type, params) {
	return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
function* selection_iterator() {
	for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) if (node = group[i]) yield node;
}
var root$1 = [null];
function Selection$1(groups, parents) {
	this._groups = groups;
	this._parents = parents;
}
function selection() {
	return new Selection$1([[document.documentElement]], root$1);
}
function selection_selection() {
	return this;
}
Selection$1.prototype = selection.prototype = {
	constructor: Selection$1,
	select: selection_select,
	selectAll: selection_selectAll,
	selectChild: selection_selectChild,
	selectChildren: selection_selectChildren,
	filter: selection_filter,
	data: selection_data,
	enter: selection_enter,
	exit: selection_exit,
	join: selection_join,
	merge: selection_merge,
	selection: selection_selection,
	order: selection_order,
	sort: selection_sort,
	call: selection_call,
	nodes: selection_nodes,
	node: selection_node,
	size: selection_size,
	empty: selection_empty,
	each: selection_each,
	attr: selection_attr,
	style: selection_style,
	property: selection_property,
	classed: selection_classed,
	text: selection_text,
	html: selection_html,
	raise: selection_raise,
	lower: selection_lower,
	append: selection_append,
	insert: selection_insert,
	remove: selection_remove,
	clone: selection_clone,
	datum: selection_datum,
	on: selection_on,
	dispatch: selection_dispatch,
	[Symbol.iterator]: selection_iterator
};
function select(selector) {
	return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root$1);
}
var nextId$1 = 0;
function local() {
	return new Local();
}
function Local() {
	this._ = "@" + (++nextId$1).toString(36);
}
Local.prototype = local.prototype = {
	constructor: Local,
	get: function(node) {
		var id = this._;
		while (!(id in node)) if (!(node = node.parentNode)) return;
		return node[id];
	},
	set: function(node, value) {
		return node[this._] = value;
	},
	remove: function(node) {
		return this._ in node && delete node[this._];
	},
	toString: function() {
		return this._;
	}
};
function sourceEvent(event) {
	let sourceEvent;
	while (sourceEvent = event.sourceEvent) event = sourceEvent;
	return event;
}
function pointer(event, node) {
	event = sourceEvent(event);
	if (node === void 0) node = event.currentTarget;
	if (node) {
		var svg = node.ownerSVGElement || node;
		if (svg.createSVGPoint) {
			var point = svg.createSVGPoint();
			point.x = event.clientX, point.y = event.clientY;
			point = point.matrixTransform(node.getScreenCTM().inverse());
			return [point.x, point.y];
		}
		if (node.getBoundingClientRect) {
			var rect = node.getBoundingClientRect();
			return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
		}
	}
	return [event.pageX, event.pageY];
}
// node_modules/d3-dispatch/dist/d3-dispatch.mjs
var noop = { value: () => {} };
function dispatch() {
	for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
		if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
		_[t] = [];
	}
	return new Dispatch(_);
}
function Dispatch(_) {
	this._ = _;
}
function parseTypenames(typenames, types) {
	return typenames.trim().split(/^|\s+/).map(function(t) {
		var name = "", i = t.indexOf(".");
		if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
		if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
		return {
			type: t,
			name
		};
	});
}
Dispatch.prototype = dispatch.prototype = {
	constructor: Dispatch,
	on: function(typename, callback) {
		var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
		if (arguments.length < 2) {
			while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
			return;
		}
		if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
		while (++i < n) if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
		else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
		return this;
	},
	copy: function() {
		var copy = {}, _ = this._;
		for (var t in _) copy[t] = _[t].slice();
		return new Dispatch(copy);
	},
	call: function(type, that) {
		if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
		if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
		for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	},
	apply: function(type, that, args) {
		if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
		for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	}
};
function get$1(type, name) {
	for (var i = 0, n = type.length, c; i < n; ++i) if ((c = type[i]).name === name) return c.value;
}
function set$1(type, name, callback) {
	for (var i = 0, n = type.length; i < n; ++i) if (type[i].name === name) {
		type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
		break;
	}
	if (callback != null) type.push({
		name,
		value: callback
	});
	return type;
}
// node_modules/d3-drag/dist/d3-drag.mjs
var nonpassive = { passive: false };
var nonpassivecapture = {
	capture: true,
	passive: false
};
function nopropagation$1(event) {
	event.stopImmediatePropagation();
}
function noevent$1(event) {
	event.preventDefault();
	event.stopImmediatePropagation();
}
function nodrag(view) {
	var root = view.document.documentElement, selection = select(view).on("dragstart.drag", noevent$1, nonpassivecapture);
	if ("onselectstart" in root) selection.on("selectstart.drag", noevent$1, nonpassivecapture);
	else {
		root.__noselect = root.style.MozUserSelect;
		root.style.MozUserSelect = "none";
	}
}
function yesdrag(view, noclick) {
	var root = view.document.documentElement, selection = select(view).on("dragstart.drag", null);
	if (noclick) {
		selection.on("click.drag", noevent$1, nonpassivecapture);
		setTimeout(function() {
			selection.on("click.drag", null);
		}, 0);
	}
	if ("onselectstart" in root) selection.on("selectstart.drag", null);
	else {
		root.style.MozUserSelect = root.__noselect;
		delete root.__noselect;
	}
}
var constant$1 = (x) => () => x;
function DragEvent(type, { sourceEvent, subject, target, identifier, active, x, y, dx, dy, dispatch }) {
	Object.defineProperties(this, {
		type: {
			value: type,
			enumerable: true,
			configurable: true
		},
		sourceEvent: {
			value: sourceEvent,
			enumerable: true,
			configurable: true
		},
		subject: {
			value: subject,
			enumerable: true,
			configurable: true
		},
		target: {
			value: target,
			enumerable: true,
			configurable: true
		},
		identifier: {
			value: identifier,
			enumerable: true,
			configurable: true
		},
		active: {
			value: active,
			enumerable: true,
			configurable: true
		},
		x: {
			value: x,
			enumerable: true,
			configurable: true
		},
		y: {
			value: y,
			enumerable: true,
			configurable: true
		},
		dx: {
			value: dx,
			enumerable: true,
			configurable: true
		},
		dy: {
			value: dy,
			enumerable: true,
			configurable: true
		},
		_: { value: dispatch }
	});
}
DragEvent.prototype.on = function() {
	var value = this._.on.apply(this._, arguments);
	return value === this._ ? this : value;
};
function defaultFilter$1(event) {
	return !event.ctrlKey && !event.button;
}
function defaultContainer() {
	return this.parentNode;
}
function defaultSubject(event, d) {
	return d == null ? {
		x: event.x,
		y: event.y
	} : d;
}
function defaultTouchable$1() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag() {
	var filter = defaultFilter$1, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable$1, gestures = {}, listeners = dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
	function drag(selection) {
		selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function mousedowned(event, d) {
		if (touchending || !filter.call(this, event, d)) return;
		var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
		if (!gesture) return;
		select(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
		nodrag(event.view);
		nopropagation$1(event);
		mousemoving = false;
		mousedownx = event.clientX;
		mousedowny = event.clientY;
		gesture("start", event);
	}
	function mousemoved(event) {
		noevent$1(event);
		if (!mousemoving) {
			var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
			mousemoving = dx * dx + dy * dy > clickDistance2;
		}
		gestures.mouse("drag", event);
	}
	function mouseupped(event) {
		select(event.view).on("mousemove.drag mouseup.drag", null);
		yesdrag(event.view, mousemoving);
		noevent$1(event);
		gestures.mouse("end", event);
	}
	function touchstarted(event, d) {
		if (!filter.call(this, event, d)) return;
		var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i = 0, gesture;
		for (; i < n; ++i) if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
			nopropagation$1(event);
			gesture("start", event, touches[i]);
		}
	}
	function touchmoved(event) {
		var touches = event.changedTouches, n = touches.length, i = 0, gesture;
		for (; i < n; ++i) if (gesture = gestures[touches[i].identifier]) {
			noevent$1(event);
			gesture("drag", event, touches[i]);
		}
	}
	function touchended(event) {
		var touches = event.changedTouches, n = touches.length, i, gesture;
		if (touchending) clearTimeout(touchending);
		touchending = setTimeout(function() {
			touchending = null;
		}, 500);
		for (i = 0; i < n; ++i) if (gesture = gestures[touches[i].identifier]) {
			nopropagation$1(event);
			gesture("end", event, touches[i]);
		}
	}
	function beforestart(that, container, event, d, identifier, touch) {
		var dispatch = listeners.copy(), p = pointer(touch || event, container), dx, dy, s;
		if ((s = subject.call(that, new DragEvent("beforestart", {
			sourceEvent: event,
			target: drag,
			identifier,
			active,
			x: p[0],
			y: p[1],
			dx: 0,
			dy: 0,
			dispatch
		}), d)) == null) return;
		dx = s.x - p[0] || 0;
		dy = s.y - p[1] || 0;
		return function gesture(type, event, touch) {
			var p0 = p, n;
			switch (type) {
				case "start":
					gestures[identifier] = gesture, n = active++;
					break;
				case "end": delete gestures[identifier], --active;
				case "drag": p = pointer(touch || event, container), n = active;
			}
			dispatch.call(type, that, new DragEvent(type, {
				sourceEvent: event,
				subject: s,
				target: drag,
				identifier,
				active: n,
				x: p[0] + dx,
				y: p[1] + dy,
				dx: p[0] - p0[0],
				dy: p[1] - p0[1],
				dispatch
			}), d);
		};
	}
	drag.filter = function(_) {
		return arguments.length ? (filter = typeof _ === "function" ? _ : constant$1(!!_), drag) : filter;
	};
	drag.container = function(_) {
		return arguments.length ? (container = typeof _ === "function" ? _ : constant$1(_), drag) : container;
	};
	drag.subject = function(_) {
		return arguments.length ? (subject = typeof _ === "function" ? _ : constant$1(_), drag) : subject;
	};
	drag.touchable = function(_) {
		return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$1(!!_), drag) : touchable;
	};
	drag.on = function() {
		var value = listeners.on.apply(listeners, arguments);
		return value === listeners ? drag : value;
	};
	drag.clickDistance = function(_) {
		return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
	};
	return drag;
}
// node_modules/d3-timer/dist/d3-timer.mjs
var frame = 0;
var timeout$1 = 0;
var interval$1 = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
	setTimeout(f, 17);
};
function now$2() {
	return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
	clockNow = 0;
}
function Timer() {
	this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
	constructor: Timer,
	restart: function(callback, delay, time) {
		if (typeof callback !== "function") throw new TypeError("callback is not a function");
		time = (time == null ? now$2() : +time) + (delay == null ? 0 : +delay);
		if (!this._next && taskTail !== this) {
			if (taskTail) taskTail._next = this;
			else taskHead = this;
			taskTail = this;
		}
		this._call = callback;
		this._time = time;
		sleep();
	},
	stop: function() {
		if (this._call) {
			this._call = null;
			this._time = Infinity;
			sleep();
		}
	}
};
function timer(callback, delay, time) {
	var t = new Timer();
	t.restart(callback, delay, time);
	return t;
}
function timerFlush() {
	now$2();
	++frame;
	var t = taskHead, e;
	while (t) {
		if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
		t = t._next;
	}
	--frame;
}
function wake() {
	clockNow = (clockLast = clock.now()) + clockSkew;
	frame = timeout$1 = 0;
	try {
		timerFlush();
	} finally {
		frame = 0;
		nap();
		clockNow = 0;
	}
}
function poke() {
	var now = clock.now(), delay = now - clockLast;
	if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
	var t0, t1 = taskHead, t2, time = Infinity;
	while (t1) if (t1._call) {
		if (time > t1._time) time = t1._time;
		t0 = t1, t1 = t1._next;
	} else {
		t2 = t1._next, t1._next = null;
		t1 = t0 ? t0._next = t2 : taskHead = t2;
	}
	taskTail = t0;
	sleep(time);
}
function sleep(time) {
	if (frame) return;
	if (timeout$1) timeout$1 = clearTimeout(timeout$1);
	if (time - clockNow > 24) {
		if (time < Infinity) timeout$1 = setTimeout(wake, Math.ceil(time - clock.now() - clockSkew) + 1);
		if (interval$1) interval$1 = clearInterval(interval$1);
	} else {
		if (!interval$1) clockLast = clock.now(), interval$1 = setInterval(poke, pokeDelay);
		frame = 1, setFrame(wake);
	}
}
function timeout(callback, delay, time) {
	var t = new Timer();
	delay = delay == null ? 0 : +delay;
	t.restart((elapsed) => {
		t.stop();
		callback(elapsed + delay);
	}, delay, time);
	return t;
}
// node_modules/d3-ease/dist/d3-ease.mjs
function cubicInOut(t) {
	return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var exponent = 3;
(function custom(e) {
	e = +e;
	function polyIn(t) {
		return Math.pow(t, e);
	}
	polyIn.exponent = custom;
	return polyIn;
})(exponent);
(function custom(e) {
	e = +e;
	function polyOut(t) {
		return 1 - Math.pow(1 - t, e);
	}
	polyOut.exponent = custom;
	return polyOut;
})(exponent);
(function custom(e) {
	e = +e;
	function polyInOut(t) {
		return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
	}
	polyInOut.exponent = custom;
	return polyInOut;
})(exponent);
function tpmt(x) {
	return (Math.pow(2, -10 * x) - .0009765625) * 1.0009775171065494;
}
var b1 = 4 / 11;
1 / b1 / b1;
var overshoot = 1.70158;
(function custom(s) {
	s = +s;
	function backIn(t) {
		return (t = +t) * t * (s * (t - 1) + t);
	}
	backIn.overshoot = custom;
	return backIn;
})(overshoot);
(function custom(s) {
	s = +s;
	function backOut(t) {
		return --t * t * ((t + 1) * s + t) + 1;
	}
	backOut.overshoot = custom;
	return backOut;
})(overshoot);
(function custom(s) {
	s = +s;
	function backInOut(t) {
		return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
	}
	backInOut.overshoot = custom;
	return backInOut;
})(overshoot);
var tau$1 = 2 * Math.PI;
var amplitude = 1;
var period = .3;
(function custom(a, p) {
	var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau$1);
	function elasticIn(t) {
		return a * tpmt(- --t) * Math.sin((s - t) / p);
	}
	elasticIn.amplitude = function(a) {
		return custom(a, p * tau$1);
	};
	elasticIn.period = function(p) {
		return custom(a, p);
	};
	return elasticIn;
})(amplitude, period);
(function custom(a, p) {
	var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau$1);
	function elasticOut(t) {
		return 1 - a * tpmt(t = +t) * Math.sin((t + s) / p);
	}
	elasticOut.amplitude = function(a) {
		return custom(a, p * tau$1);
	};
	elasticOut.period = function(p) {
		return custom(a, p);
	};
	return elasticOut;
})(amplitude, period);
(function custom(a, p) {
	var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau$1);
	function elasticInOut(t) {
		return ((t = t * 2 - 1) < 0 ? a * tpmt(-t) * Math.sin((s - t) / p) : 2 - a * tpmt(t) * Math.sin((s + t) / p)) / 2;
	}
	elasticInOut.amplitude = function(a) {
		return custom(a, p * tau$1);
	};
	elasticInOut.period = function(p) {
		return custom(a, p);
	};
	return elasticInOut;
})(amplitude, period);
// node_modules/d3-transition/dist/d3-transition.mjs
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node, name, id, index, group, timing) {
	var schedules = node.__transition;
	if (!schedules) node.__transition = {};
	else if (id in schedules) return;
	create(node, id, {
		name,
		index,
		group,
		on: emptyOn,
		tween: emptyTween,
		time: timing.time,
		delay: timing.delay,
		duration: timing.duration,
		ease: timing.ease,
		timer: null,
		state: CREATED
	});
}
function init(node, id) {
	var schedule = get(node, id);
	if (schedule.state > CREATED) throw new Error("too late; already scheduled");
	return schedule;
}
function set(node, id) {
	var schedule = get(node, id);
	if (schedule.state > STARTED) throw new Error("too late; already running");
	return schedule;
}
function get(node, id) {
	var schedule = node.__transition;
	if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
	return schedule;
}
function create(node, id, self) {
	var schedules = node.__transition, tween;
	schedules[id] = self;
	self.timer = timer(schedule, 0, self.time);
	function schedule(elapsed) {
		self.state = SCHEDULED;
		self.timer.restart(start, self.delay, self.time);
		if (self.delay <= elapsed) start(elapsed - self.delay);
	}
	function start(elapsed) {
		var i, j, n, o;
		if (self.state !== SCHEDULED) return stop();
		for (i in schedules) {
			o = schedules[i];
			if (o.name !== self.name) continue;
			if (o.state === STARTED) return timeout(start);
			if (o.state === RUNNING) {
				o.state = ENDED;
				o.timer.stop();
				o.on.call("interrupt", node, node.__data__, o.index, o.group);
				delete schedules[i];
			} else if (+i < id) {
				o.state = ENDED;
				o.timer.stop();
				o.on.call("cancel", node, node.__data__, o.index, o.group);
				delete schedules[i];
			}
		}
		timeout(function() {
			if (self.state === STARTED) {
				self.state = RUNNING;
				self.timer.restart(tick, self.delay, self.time);
				tick(elapsed);
			}
		});
		self.state = STARTING;
		self.on.call("start", node, node.__data__, self.index, self.group);
		if (self.state !== STARTING) return;
		self.state = STARTED;
		tween = new Array(n = self.tween.length);
		for (i = 0, j = -1; i < n; ++i) if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
		tween.length = j + 1;
	}
	function tick(elapsed) {
		var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
		while (++i < n) tween[i].call(node, t);
		if (self.state === ENDING) {
			self.on.call("end", node, node.__data__, self.index, self.group);
			stop();
		}
	}
	function stop() {
		self.state = ENDED;
		self.timer.stop();
		delete schedules[id];
		for (var i in schedules) return;
		delete node.__transition;
	}
}
function interrupt(node, name) {
	var schedules = node.__transition, schedule, active, empty = true, i;
	if (!schedules) return;
	name = name == null ? null : name + "";
	for (i in schedules) {
		if ((schedule = schedules[i]).name !== name) {
			empty = false;
			continue;
		}
		active = schedule.state > STARTING && schedule.state < ENDING;
		schedule.state = ENDED;
		schedule.timer.stop();
		schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
		delete schedules[i];
	}
	if (empty) delete node.__transition;
}
function selection_interrupt(name) {
	return this.each(function() {
		interrupt(this, name);
	});
}
function tweenRemove(id, name) {
	var tween0, tween1;
	return function() {
		var schedule = set(this, id), tween = schedule.tween;
		if (tween !== tween0) {
			tween1 = tween0 = tween;
			for (var i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
				tween1 = tween1.slice();
				tween1.splice(i, 1);
				break;
			}
		}
		schedule.tween = tween1;
	};
}
function tweenFunction(id, name, value) {
	var tween0, tween1;
	if (typeof value !== "function") throw new Error();
	return function() {
		var schedule = set(this, id), tween = schedule.tween;
		if (tween !== tween0) {
			tween1 = (tween0 = tween).slice();
			for (var t = {
				name,
				value
			}, i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
				tween1[i] = t;
				break;
			}
			if (i === n) tween1.push(t);
		}
		schedule.tween = tween1;
	};
}
function transition_tween(name, value) {
	var id = this._id;
	name += "";
	if (arguments.length < 2) {
		var tween = get(this.node(), id).tween;
		for (var i = 0, n = tween.length, t; i < n; ++i) if ((t = tween[i]).name === name) return t.value;
		return null;
	}
	return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
	var id = transition._id;
	transition.each(function() {
		var schedule = set(this, id);
		(schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	});
	return function(node) {
		return get(node, id).value[name];
	};
}
function interpolate(a, b) {
	var c;
	return (typeof b === "number" ? number : b instanceof color ? rgb : (c = color(b)) ? (b = c, rgb) : string)(a, b);
}
function attrRemove(name) {
	return function() {
		this.removeAttribute(name);
	};
}
function attrRemoveNS(fullname) {
	return function() {
		this.removeAttributeNS(fullname.space, fullname.local);
	};
}
function attrConstant(name, interpolate, value1) {
	var string00, string1 = value1 + "", interpolate0;
	return function() {
		var string0 = this.getAttribute(name);
		return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	};
}
function attrConstantNS(fullname, interpolate, value1) {
	var string00, string1 = value1 + "", interpolate0;
	return function() {
		var string0 = this.getAttributeNS(fullname.space, fullname.local);
		return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	};
}
function attrFunction(name, interpolate, value) {
	var string00, string10, interpolate0;
	return function() {
		var string0, value1 = value(this), string1;
		if (value1 == null) return void this.removeAttribute(name);
		string0 = this.getAttribute(name);
		string1 = value1 + "";
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	};
}
function attrFunctionNS(fullname, interpolate, value) {
	var string00, string10, interpolate0;
	return function() {
		var string0, value1 = value(this), string1;
		if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
		string0 = this.getAttributeNS(fullname.space, fullname.local);
		string1 = value1 + "";
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	};
}
function transition_attr(name, value) {
	var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
	return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
function attrInterpolate(name, i) {
	return function(t) {
		this.setAttribute(name, i.call(this, t));
	};
}
function attrInterpolateNS(fullname, i) {
	return function(t) {
		this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
	};
}
function attrTweenNS(fullname, value) {
	var t0, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
		return t0;
	}
	tween._value = value;
	return tween;
}
function attrTween(name, value) {
	var t0, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
		return t0;
	}
	tween._value = value;
	return tween;
}
function transition_attrTween(name, value) {
	var key = "attr." + name;
	if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	if (value == null) return this.tween(key, null);
	if (typeof value !== "function") throw new Error();
	var fullname = namespace(name);
	return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id, value) {
	return function() {
		init(this, id).delay = +value.apply(this, arguments);
	};
}
function delayConstant(id, value) {
	return value = +value, function() {
		init(this, id).delay = value;
	};
}
function transition_delay(value) {
	var id = this._id;
	return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
}
function durationFunction(id, value) {
	return function() {
		set(this, id).duration = +value.apply(this, arguments);
	};
}
function durationConstant(id, value) {
	return value = +value, function() {
		set(this, id).duration = value;
	};
}
function transition_duration(value) {
	var id = this._id;
	return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
}
function easeConstant(id, value) {
	if (typeof value !== "function") throw new Error();
	return function() {
		set(this, id).ease = value;
	};
}
function transition_ease(value) {
	var id = this._id;
	return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
}
function easeVarying(id, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (typeof v !== "function") throw new Error();
		set(this, id).ease = v;
	};
}
function transition_easeVarying(value) {
	if (typeof value !== "function") throw new Error();
	return this.each(easeVarying(this._id, value));
}
function transition_filter(match) {
	if (typeof match !== "function") match = matcher(match);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
	return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition) {
	if (transition._id !== this._id) throw new Error();
	for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) if (node = group0[i] || group1[i]) merge[i] = node;
	for (; j < m0; ++j) merges[j] = groups0[j];
	return new Transition(merges, this._parents, this._name, this._id);
}
function start(name) {
	return (name + "").trim().split(/^|\s+/).every(function(t) {
		var i = t.indexOf(".");
		if (i >= 0) t = t.slice(0, i);
		return !t || t === "start";
	});
}
function onFunction(id, name, listener) {
	var on0, on1, sit = start(name) ? init : set;
	return function() {
		var schedule = sit(this, id), on = schedule.on;
		if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
		schedule.on = on1;
	};
}
function transition_on(name, listener) {
	var id = this._id;
	return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
}
function removeFunction(id) {
	return function() {
		var parent = this.parentNode;
		for (var i in this.__transition) if (+i !== id) return;
		if (parent) parent.removeChild(this);
	};
}
function transition_remove() {
	return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select) {
	var name = this._name, id = this._id;
	if (typeof select !== "function") select = selector(select);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
		if ("__data__" in node) subnode.__data__ = node.__data__;
		subgroup[i] = subnode;
		schedule(subgroup[i], name, id, i, subgroup, get(node, id));
	}
	return new Transition(subgroups, this._parents, name, id);
}
function transition_selectAll(select) {
	var name = this._name, id = this._id;
	if (typeof select !== "function") select = selectorAll(select);
	for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) {
		for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) if (child = children[k]) schedule(child, name, id, k, children, inherit);
		subgroups.push(children);
		parents.push(node);
	}
	return new Transition(subgroups, parents, name, id);
}
var Selection = selection.prototype.constructor;
function transition_selection() {
	return new Selection(this._groups, this._parents);
}
function styleNull(name, interpolate) {
	var string00, string10, interpolate0;
	return function() {
		var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
	};
}
function styleRemove(name) {
	return function() {
		this.style.removeProperty(name);
	};
}
function styleConstant(name, interpolate, value1) {
	var string00, string1 = value1 + "", interpolate0;
	return function() {
		var string0 = styleValue(this, name);
		return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	};
}
function styleFunction(name, interpolate, value) {
	var string00, string10, interpolate0;
	return function() {
		var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
		if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	};
}
function styleMaybeRemove(id, name) {
	var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
	return function() {
		var schedule = set(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : void 0;
		if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
		schedule.on = on1;
	};
}
function transition_style(name, value, priority) {
	var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
	return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate(name, i, priority) {
	return function(t) {
		this.style.setProperty(name, i.call(this, t), priority);
	};
}
function styleTween(name, value, priority) {
	var t, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
		return t;
	}
	tween._value = value;
	return tween;
}
function transition_styleTween(name, value, priority) {
	var key = "style." + (name += "");
	if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	if (value == null) return this.tween(key, null);
	if (typeof value !== "function") throw new Error();
	return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function textConstant(value) {
	return function() {
		this.textContent = value;
	};
}
function textFunction(value) {
	return function() {
		var value1 = value(this);
		this.textContent = value1 == null ? "" : value1;
	};
}
function transition_text(value) {
	return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
function textInterpolate(i) {
	return function(t) {
		this.textContent = i.call(this, t);
	};
}
function textTween(value) {
	var t0, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
		return t0;
	}
	tween._value = value;
	return tween;
}
function transition_textTween(value) {
	var key = "text";
	if (arguments.length < 1) return (key = this.tween(key)) && key._value;
	if (value == null) return this.tween(key, null);
	if (typeof value !== "function") throw new Error();
	return this.tween(key, textTween(value));
}
function transition_transition() {
	var name = this._name, id0 = this._id, id1 = newId();
	for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) {
		var inherit = get(node, id0);
		schedule(node, name, id1, i, group, {
			time: inherit.time + inherit.delay + inherit.duration,
			delay: 0,
			duration: inherit.duration,
			ease: inherit.ease
		});
	}
	return new Transition(groups, this._parents, name, id1);
}
function transition_end() {
	var on0, on1, that = this, id = that._id, size = that.size();
	return new Promise(function(resolve, reject) {
		var cancel = { value: reject }, end = { value: function() {
			if (--size === 0) resolve();
		} };
		that.each(function() {
			var schedule = set(this, id), on = schedule.on;
			if (on !== on0) {
				on1 = (on0 = on).copy();
				on1._.cancel.push(cancel);
				on1._.interrupt.push(cancel);
				on1._.end.push(end);
			}
			schedule.on = on1;
		});
		if (size === 0) resolve();
	});
}
var id = 0;
function Transition(groups, parents, name, id) {
	this._groups = groups;
	this._parents = parents;
	this._name = name;
	this._id = id;
}
function transition(name) {
	return selection().transition(name);
}
function newId() {
	return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = transition.prototype = {
	constructor: Transition,
	select: transition_select,
	selectAll: transition_selectAll,
	selectChild: selection_prototype.selectChild,
	selectChildren: selection_prototype.selectChildren,
	filter: transition_filter,
	merge: transition_merge,
	selection: transition_selection,
	transition: transition_transition,
	call: selection_prototype.call,
	nodes: selection_prototype.nodes,
	node: selection_prototype.node,
	size: selection_prototype.size,
	empty: selection_prototype.empty,
	each: selection_prototype.each,
	on: transition_on,
	attr: transition_attr,
	attrTween: transition_attrTween,
	style: transition_style,
	styleTween: transition_styleTween,
	text: transition_text,
	textTween: transition_textTween,
	remove: transition_remove,
	tween: transition_tween,
	delay: transition_delay,
	duration: transition_duration,
	ease: transition_ease,
	easeVarying: transition_easeVarying,
	end: transition_end,
	[Symbol.iterator]: selection_prototype[Symbol.iterator]
};
var defaultTiming = {
	time: null,
	delay: 0,
	duration: 250,
	ease: cubicInOut
};
function inherit(node, id) {
	var timing;
	while (!(timing = node.__transition) || !(timing = timing[id])) if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
	return timing;
}
function selection_transition(name) {
	var id, timing;
	if (name instanceof Transition) id = name._id, name = name._name;
	else id = newId(), (timing = defaultTiming).time = now$2(), name = name == null ? null : name + "";
	for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) schedule(node, name, id, i, group, timing || inherit(node, id));
	return new Transition(groups, this._parents, name, id);
}
selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;
// node_modules/d3-zoom/dist/d3-zoom.mjs
var constant = (x) => () => x;
function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
	Object.defineProperties(this, {
		type: {
			value: type,
			enumerable: true,
			configurable: true
		},
		sourceEvent: {
			value: sourceEvent,
			enumerable: true,
			configurable: true
		},
		target: {
			value: target,
			enumerable: true,
			configurable: true
		},
		transform: {
			value: transform,
			enumerable: true,
			configurable: true
		},
		_: { value: dispatch }
	});
}
function Transform(k, x, y) {
	this.k = k;
	this.x = x;
	this.y = y;
}
Transform.prototype = {
	constructor: Transform,
	scale: function(k) {
		return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
	},
	translate: function(x, y) {
		return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
	},
	apply: function(point) {
		return [point[0] * this.k + this.x, point[1] * this.k + this.y];
	},
	applyX: function(x) {
		return x * this.k + this.x;
	},
	applyY: function(y) {
		return y * this.k + this.y;
	},
	invert: function(location) {
		return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
	},
	invertX: function(x) {
		return (x - this.x) / this.k;
	},
	invertY: function(y) {
		return (y - this.y) / this.k;
	},
	rescaleX: function(x) {
		return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
	},
	rescaleY: function(y) {
		return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
	while (!node.__zoom) if (!(node = node.parentNode)) return identity;
	return node.__zoom;
}
function nopropagation(event) {
	event.stopImmediatePropagation();
}
function noevent(event) {
	event.preventDefault();
	event.stopImmediatePropagation();
}
function defaultFilter(event) {
	return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
	var e = this;
	if (e instanceof SVGElement) {
		e = e.ownerSVGElement || e;
		if (e.hasAttribute("viewBox")) {
			e = e.viewBox.baseVal;
			return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
		}
		return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
	}
	return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
	return this.__zoom || identity;
}
function defaultWheelDelta(event) {
	return -event.deltaY * (event.deltaMode === 1 ? .05 : event.deltaMode ? 1 : .002) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
	var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
	return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function zoom() {
	var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom$1, listeners = dispatch("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
	function zoom(selection) {
		selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	zoom.transform = function(collection, transform, point, event) {
		var selection = collection.selection ? collection.selection() : collection;
		selection.property("__zoom", defaultTransform);
		if (collection !== selection) schedule(collection, transform, point, event);
		else selection.interrupt().each(function() {
			gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
		});
	};
	zoom.scaleBy = function(selection, k, p, event) {
		zoom.scaleTo(selection, function() {
			return this.__zoom.k * (typeof k === "function" ? k.apply(this, arguments) : k);
		}, p, event);
	};
	zoom.scaleTo = function(selection, k, p, event) {
		zoom.transform(selection, function() {
			var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
			return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
		}, p, event);
	};
	zoom.translateBy = function(selection, x, y, event) {
		zoom.transform(selection, function() {
			return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
		}, null, event);
	};
	zoom.translateTo = function(selection, x, y, p, event) {
		zoom.transform(selection, function() {
			var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
			return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
		}, p, event);
	};
	function scale(transform, k) {
		k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
		return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
	}
	function translate(transform, p0, p1) {
		var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
		return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
	}
	function centroid(extent) {
		return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
	}
	function schedule(transition, transform, point, event) {
		transition.on("start.zoom", function() {
			gesture(this, arguments).event(event).start();
		}).on("interrupt.zoom end.zoom", function() {
			gesture(this, arguments).event(event).end();
		}).tween("zoom", function() {
			var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
			return function(t) {
				if (t === 1) t = b;
				else {
					var l = i(t), k = w / l[2];
					t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
				}
				g.zoom(null, t);
			};
		});
	}
	function gesture(that, args, clean) {
		return !clean && that.__zooming || new Gesture(that, args);
	}
	function Gesture(that, args) {
		this.that = that;
		this.args = args;
		this.active = 0;
		this.sourceEvent = null;
		this.extent = extent.apply(that, args);
		this.taps = 0;
	}
	Gesture.prototype = {
		event: function(event) {
			if (event) this.sourceEvent = event;
			return this;
		},
		start: function() {
			if (++this.active === 1) {
				this.that.__zooming = this;
				this.emit("start");
			}
			return this;
		},
		zoom: function(key, transform) {
			if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
			if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
			if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
			this.that.__zoom = transform;
			this.emit("zoom");
			return this;
		},
		end: function() {
			if (--this.active === 0) {
				delete this.that.__zooming;
				this.emit("end");
			}
			return this;
		},
		emit: function(type) {
			var d = select(this.that).datum();
			listeners.call(type, this.that, new ZoomEvent(type, {
				sourceEvent: this.sourceEvent,
				target: zoom,
				transform: this.that.__zoom,
				dispatch: listeners
			}), d);
		}
	};
	function wheeled(event, ...args) {
		if (!filter.apply(this, arguments)) return;
		var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer(event);
		if (g.wheel) {
			if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
			clearTimeout(g.wheel);
		} else if (t.k === k) return;
		else {
			g.mouse = [p, t.invert(p)];
			interrupt(this);
			g.start();
		}
		noevent(event);
		g.wheel = setTimeout(wheelidled, wheelDelay);
		g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
		function wheelidled() {
			g.wheel = null;
			g.end();
		}
	}
	function mousedowned(event, ...args) {
		if (touchending || !filter.apply(this, arguments)) return;
		var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
		nodrag(event.view);
		nopropagation(event);
		g.mouse = [p, this.__zoom.invert(p)];
		interrupt(this);
		g.start();
		function mousemoved(event) {
			noevent(event);
			if (!g.moved) {
				var dx = event.clientX - x0, dy = event.clientY - y0;
				g.moved = dx * dx + dy * dy > clickDistance2;
			}
			g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
		}
		function mouseupped(event) {
			v.on("mousemove.zoom mouseup.zoom", null);
			yesdrag(event.view, g.moved);
			noevent(event);
			g.event(event).end();
		}
	}
	function dblclicked(event, ...args) {
		if (!filter.apply(this, arguments)) return;
		var t0 = this.__zoom, p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? .5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
		noevent(event);
		if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
		else select(this).call(zoom.transform, t1, p0, event);
	}
	function touchstarted(event, ...args) {
		if (!filter.apply(this, arguments)) return;
		var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
		nopropagation(event);
		for (i = 0; i < n; ++i) {
			t = touches[i], p = pointer(t, this);
			p = [
				p,
				this.__zoom.invert(p),
				t.identifier
			];
			if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
			else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
		}
		if (touchstarting) touchstarting = clearTimeout(touchstarting);
		if (started) {
			if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
				touchstarting = null;
			}, touchDelay);
			interrupt(this);
			g.start();
		}
	}
	function touchmoved(event, ...args) {
		if (!this.__zooming) return;
		var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
		noevent(event);
		for (i = 0; i < n; ++i) {
			t = touches[i], p = pointer(t, this);
			if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
			else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
		}
		t = g.that.__zoom;
		if (g.touch1) {
			var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
			t = scale(t, Math.sqrt(dp / dl));
			p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
			l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
		} else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
		else return;
		g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
	}
	function touchended(event, ...args) {
		if (!this.__zooming) return;
		var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
		nopropagation(event);
		if (touchending) clearTimeout(touchending);
		touchending = setTimeout(function() {
			touchending = null;
		}, touchDelay);
		for (i = 0; i < n; ++i) {
			t = touches[i];
			if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
			else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
		}
		if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
		if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
		else {
			g.end();
			if (g.taps === 2) {
				t = pointer(t, this);
				if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
					var p = select(this).on("dblclick.zoom");
					if (p) p.apply(this, arguments);
				}
			}
		}
	}
	zoom.wheelDelta = function(_) {
		return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
	};
	zoom.filter = function(_) {
		return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
	};
	zoom.touchable = function(_) {
		return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
	};
	zoom.extent = function(_) {
		return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
	};
	zoom.scaleExtent = function(_) {
		return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
	};
	zoom.translateExtent = function(_) {
		return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
	};
	zoom.constrain = function(_) {
		return arguments.length ? (constrain = _, zoom) : constrain;
	};
	zoom.duration = function(_) {
		return arguments.length ? (duration = +_, zoom) : duration;
	};
	zoom.interpolate = function(_) {
		return arguments.length ? (interpolate = _, zoom) : interpolate;
	};
	zoom.on = function() {
		var value = listeners.on.apply(listeners, arguments);
		return value === listeners ? zoom : value;
	};
	zoom.clickDistance = function(_) {
		return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
	};
	zoom.tapDistance = function(_) {
		return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
	};
	return zoom;
}
// node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
// node_modules/lodash-es/_root.js
/** Detect free variable `self`. */
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function("return this")();
// node_modules/lodash-es/_Symbol.js
/** Built-in value references. */
var Symbol$1 = root.Symbol;
// node_modules/lodash-es/_getRawTag.js
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString$1 = objectProto.toString;
/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
function getRawTag(value) {
	var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	try {
		value[symToStringTag$1] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString$1.call(value);
	if (unmasked) {
		if (isOwn) value[symToStringTag$1] = tag;
		else delete value[symToStringTag$1];
	}
	return result;
}
// node_modules/lodash-es/_objectToString.js
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString = Object.prototype.toString;
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString(value) {
	return nativeObjectToString.call(value);
}
// node_modules/lodash-es/_baseGetTag.js
/** `Object#toString` result references. */
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
// node_modules/lodash-es/isObjectLike.js
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
// node_modules/lodash-es/isSymbol.js
/** `Object#toString` result references. */
var symbolTag = "[object Symbol]";
/**
* Checks if `value` is classified as a `Symbol` primitive or object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
* @example
*
* _.isSymbol(Symbol.iterator);
* // => true
*
* _.isSymbol('abc');
* // => false
*/
function isSymbol(value) {
	return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
// node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;
/**
* Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
* character of `string`.
*
* @private
* @param {string} string The string to inspect.
* @returns {number} Returns the index of the last non-whitespace character.
*/
function trimmedEndIndex(string) {
	var index = string.length;
	while (index-- && reWhitespace.test(string.charAt(index)));
	return index;
}
// node_modules/lodash-es/_baseTrim.js
/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;
/**
* The base implementation of `_.trim`.
*
* @private
* @param {string} string The string to trim.
* @returns {string} Returns the trimmed string.
*/
function baseTrim(string) {
	return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
// node_modules/lodash-es/isObject.js
/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
// node_modules/lodash-es/toNumber.js
/** Used as references for various `Number` constants. */
var NAN = NaN;
/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;
/**
* Converts `value` to a number.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to process.
* @returns {number} Returns the number.
* @example
*
* _.toNumber(3.2);
* // => 3.2
*
* _.toNumber(Number.MIN_VALUE);
* // => 5e-324
*
* _.toNumber(Infinity);
* // => Infinity
*
* _.toNumber('3.2');
* // => 3.2
*/
function toNumber(value) {
	if (typeof value == "number") return value;
	if (isSymbol(value)) return NAN;
	if (isObject(value)) {
		var other = typeof value.valueOf == "function" ? value.valueOf() : value;
		value = isObject(other) ? other + "" : other;
	}
	if (typeof value != "string") return value === 0 ? value : +value;
	value = baseTrim(value);
	var isBinary = reIsBinary.test(value);
	return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
// node_modules/lodash-es/now.js
/**
* Gets the timestamp of the number of milliseconds that have elapsed since
* the Unix epoch (1 January 1970 00:00:00 UTC).
*
* @static
* @memberOf _
* @since 2.4.0
* @category Date
* @returns {number} Returns the timestamp.
* @example
*
* _.defer(function(stamp) {
*   console.log(_.now() - stamp);
* }, _.now());
* // => Logs the number of milliseconds it took for the deferred invocation.
*/
var now$1 = function() {
	return root.Date.now();
};
// node_modules/lodash-es/debounce.js
/** Error message constants. */
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
/**
* Creates a debounced function that delays invoking `func` until after `wait`
* milliseconds have elapsed since the last time the debounced function was
* invoked. The debounced function comes with a `cancel` method to cancel
* delayed `func` invocations and a `flush` method to immediately invoke them.
* Provide `options` to indicate whether `func` should be invoked on the
* leading and/or trailing edge of the `wait` timeout. The `func` is invoked
* with the last arguments provided to the debounced function. Subsequent
* calls to the debounced function return the result of the last `func`
* invocation.
*
* **Note:** If `leading` and `trailing` options are `true`, `func` is
* invoked on the trailing edge of the timeout only if the debounced function
* is invoked more than once during the `wait` timeout.
*
* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
* until to the next tick, similar to `setTimeout` with a timeout of `0`.
*
* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
* for details over the differences between `_.debounce` and `_.throttle`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to debounce.
* @param {number} [wait=0] The number of milliseconds to delay.
* @param {Object} [options={}] The options object.
* @param {boolean} [options.leading=false]
*  Specify invoking on the leading edge of the timeout.
* @param {number} [options.maxWait]
*  The maximum time `func` is allowed to be delayed before it's invoked.
* @param {boolean} [options.trailing=true]
*  Specify invoking on the trailing edge of the timeout.
* @returns {Function} Returns the new debounced function.
* @example
*
* // Avoid costly calculations while the window size is in flux.
* jQuery(window).on('resize', _.debounce(calculateLayout, 150));
*
* // Invoke `sendMail` when clicked, debouncing subsequent calls.
* jQuery(element).on('click', _.debounce(sendMail, 300, {
*   'leading': true,
*   'trailing': false
* }));
*
* // Ensure `batchLog` is invoked once after 1 second of debounced calls.
* var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
* var source = new EventSource('/stream');
* jQuery(source).on('message', debounced);
*
* // Cancel the trailing debounced invocation.
* jQuery(window).on('popstate', debounced.cancel);
*/
function debounce(func, wait, options) {
	var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
	if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT$1);
	wait = toNumber(wait) || 0;
	if (isObject(options)) {
		leading = !!options.leading;
		maxing = "maxWait" in options;
		maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
		trailing = "trailing" in options ? !!options.trailing : trailing;
	}
	function invokeFunc(time) {
		var args = lastArgs, thisArg = lastThis;
		lastArgs = lastThis = void 0;
		lastInvokeTime = time;
		result = func.apply(thisArg, args);
		return result;
	}
	function leadingEdge(time) {
		lastInvokeTime = time;
		timerId = setTimeout(timerExpired, wait);
		return leading ? invokeFunc(time) : result;
	}
	function remainingWait(time) {
		var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
		return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
	}
	function shouldInvoke(time) {
		var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
		return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
	}
	function timerExpired() {
		var time = now$1();
		if (shouldInvoke(time)) return trailingEdge(time);
		timerId = setTimeout(timerExpired, remainingWait(time));
	}
	function trailingEdge(time) {
		timerId = void 0;
		if (trailing && lastArgs) return invokeFunc(time);
		lastArgs = lastThis = void 0;
		return result;
	}
	function cancel() {
		if (timerId !== void 0) clearTimeout(timerId);
		lastInvokeTime = 0;
		lastArgs = lastCallTime = lastThis = timerId = void 0;
	}
	function flush() {
		return timerId === void 0 ? result : trailingEdge(now$1());
	}
	function debounced() {
		var time = now$1(), isInvoking = shouldInvoke(time);
		lastArgs = arguments;
		lastThis = this;
		lastCallTime = time;
		if (isInvoking) {
			if (timerId === void 0) return leadingEdge(lastCallTime);
			if (maxing) {
				clearTimeout(timerId);
				timerId = setTimeout(timerExpired, wait);
				return invokeFunc(lastCallTime);
			}
		}
		if (timerId === void 0) timerId = setTimeout(timerExpired, wait);
		return result;
	}
	debounced.cancel = cancel;
	debounced.flush = flush;
	return debounced;
}
// node_modules/lodash-es/throttle.js
/** Error message constants. */
var FUNC_ERROR_TEXT = "Expected a function";
/**
* Creates a throttled function that only invokes `func` at most once per
* every `wait` milliseconds. The throttled function comes with a `cancel`
* method to cancel delayed `func` invocations and a `flush` method to
* immediately invoke them. Provide `options` to indicate whether `func`
* should be invoked on the leading and/or trailing edge of the `wait`
* timeout. The `func` is invoked with the last arguments provided to the
* throttled function. Subsequent calls to the throttled function return the
* result of the last `func` invocation.
*
* **Note:** If `leading` and `trailing` options are `true`, `func` is
* invoked on the trailing edge of the timeout only if the throttled function
* is invoked more than once during the `wait` timeout.
*
* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
* until to the next tick, similar to `setTimeout` with a timeout of `0`.
*
* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
* for details over the differences between `_.throttle` and `_.debounce`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to throttle.
* @param {number} [wait=0] The number of milliseconds to throttle invocations to.
* @param {Object} [options={}] The options object.
* @param {boolean} [options.leading=true]
*  Specify invoking on the leading edge of the timeout.
* @param {boolean} [options.trailing=true]
*  Specify invoking on the trailing edge of the timeout.
* @returns {Function} Returns the new throttled function.
* @example
*
* // Avoid excessively updating the position while scrolling.
* jQuery(window).on('scroll', _.throttle(updatePosition, 100));
*
* // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
* var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
* jQuery(element).on('click', throttled);
*
* // Cancel the trailing throttled invocation.
* jQuery(window).on('popstate', throttled.cancel);
*/
function throttle(func, wait, options) {
	var leading = true, trailing = true;
	if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
	if (isObject(options)) {
		leading = "leading" in options ? !!options.leading : leading;
		trailing = "trailing" in options ? !!options.trailing : trailing;
	}
	return debounce(func, wait, {
		"leading": leading,
		"maxWait": wait,
		"trailing": trailing
	});
}
// node_modules/@tweenjs/tween.js/dist/tween.esm.js
/**
* The Ease class provides a collection of easing functions for use with tween.js.
*/
var Easing = Object.freeze({
	Linear: Object.freeze({
		None: function(amount) {
			return amount;
		},
		In: function(amount) {
			return amount;
		},
		Out: function(amount) {
			return amount;
		},
		InOut: function(amount) {
			return amount;
		}
	}),
	Quadratic: Object.freeze({
		In: function(amount) {
			return amount * amount;
		},
		Out: function(amount) {
			return amount * (2 - amount);
		},
		InOut: function(amount) {
			if ((amount *= 2) < 1) return .5 * amount * amount;
			return -.5 * (--amount * (amount - 2) - 1);
		}
	}),
	Cubic: Object.freeze({
		In: function(amount) {
			return amount * amount * amount;
		},
		Out: function(amount) {
			return --amount * amount * amount + 1;
		},
		InOut: function(amount) {
			if ((amount *= 2) < 1) return .5 * amount * amount * amount;
			return .5 * ((amount -= 2) * amount * amount + 2);
		}
	}),
	Quartic: Object.freeze({
		In: function(amount) {
			return amount * amount * amount * amount;
		},
		Out: function(amount) {
			return 1 - --amount * amount * amount * amount;
		},
		InOut: function(amount) {
			if ((amount *= 2) < 1) return .5 * amount * amount * amount * amount;
			return -.5 * ((amount -= 2) * amount * amount * amount - 2);
		}
	}),
	Quintic: Object.freeze({
		In: function(amount) {
			return amount * amount * amount * amount * amount;
		},
		Out: function(amount) {
			return --amount * amount * amount * amount * amount + 1;
		},
		InOut: function(amount) {
			if ((amount *= 2) < 1) return .5 * amount * amount * amount * amount * amount;
			return .5 * ((amount -= 2) * amount * amount * amount * amount + 2);
		}
	}),
	Sinusoidal: Object.freeze({
		In: function(amount) {
			return 1 - Math.sin((1 - amount) * Math.PI / 2);
		},
		Out: function(amount) {
			return Math.sin(amount * Math.PI / 2);
		},
		InOut: function(amount) {
			return .5 * (1 - Math.sin(Math.PI * (.5 - amount)));
		}
	}),
	Exponential: Object.freeze({
		In: function(amount) {
			return amount === 0 ? 0 : Math.pow(1024, amount - 1);
		},
		Out: function(amount) {
			return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
		},
		InOut: function(amount) {
			if (amount === 0) return 0;
			if (amount === 1) return 1;
			if ((amount *= 2) < 1) return .5 * Math.pow(1024, amount - 1);
			return .5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
		}
	}),
	Circular: Object.freeze({
		In: function(amount) {
			return 1 - Math.sqrt(1 - amount * amount);
		},
		Out: function(amount) {
			return Math.sqrt(1 - --amount * amount);
		},
		InOut: function(amount) {
			if ((amount *= 2) < 1) return -.5 * (Math.sqrt(1 - amount * amount) - 1);
			return .5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
		}
	}),
	Elastic: Object.freeze({
		In: function(amount) {
			if (amount === 0) return 0;
			if (amount === 1) return 1;
			return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
		},
		Out: function(amount) {
			if (amount === 0) return 0;
			if (amount === 1) return 1;
			return Math.pow(2, -10 * amount) * Math.sin((amount - .1) * 5 * Math.PI) + 1;
		},
		InOut: function(amount) {
			if (amount === 0) return 0;
			if (amount === 1) return 1;
			amount *= 2;
			if (amount < 1) return -.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
			return .5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
		}
	}),
	Back: Object.freeze({
		In: function(amount) {
			var s = 1.70158;
			return amount === 1 ? 1 : amount * amount * ((s + 1) * amount - s);
		},
		Out: function(amount) {
			var s = 1.70158;
			return amount === 0 ? 0 : --amount * amount * ((s + 1) * amount + s) + 1;
		},
		InOut: function(amount) {
			var s = 2.5949095;
			if ((amount *= 2) < 1) return .5 * (amount * amount * ((s + 1) * amount - s));
			return .5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
		}
	}),
	Bounce: Object.freeze({
		In: function(amount) {
			return 1 - Easing.Bounce.Out(1 - amount);
		},
		Out: function(amount) {
			if (amount < 1 / 2.75) return 7.5625 * amount * amount;
			else if (amount < 2 / 2.75) return 7.5625 * (amount -= 1.5 / 2.75) * amount + .75;
			else if (amount < 2.5 / 2.75) return 7.5625 * (amount -= 2.25 / 2.75) * amount + .9375;
			else return 7.5625 * (amount -= 2.625 / 2.75) * amount + .984375;
		},
		InOut: function(amount) {
			if (amount < .5) return Easing.Bounce.In(amount * 2) * .5;
			return Easing.Bounce.Out(amount * 2 - 1) * .5 + .5;
		}
	}),
	generatePow: function(power) {
		if (power === void 0) power = 4;
		power = power < Number.EPSILON ? Number.EPSILON : power;
		power = power > 1e4 ? 1e4 : power;
		return {
			In: function(amount) {
				return Math.pow(amount, power);
			},
			Out: function(amount) {
				return 1 - Math.pow(1 - amount, power);
			},
			InOut: function(amount) {
				if (amount < .5) return Math.pow(amount * 2, power) / 2;
				return (1 - Math.pow(2 - amount * 2, power)) / 2 + .5;
			}
		};
	}
});
var now = function() {
	return performance.now();
};
/**
* Controlling groups of tweens
*
* Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
* In these cases, you may want to create your own smaller groups of tween
*/
var Group = function() {
	function Group() {
		var tweens = [];
		for (var _i = 0; _i < arguments.length; _i++) tweens[_i] = arguments[_i];
		this._tweens = {};
		this._tweensAddedDuringUpdate = {};
		this.add.apply(this, tweens);
	}
	Group.prototype.getAll = function() {
		var _this = this;
		return Object.keys(this._tweens).map(function(tweenId) {
			return _this._tweens[tweenId];
		});
	};
	Group.prototype.removeAll = function() {
		this._tweens = {};
	};
	Group.prototype.add = function() {
		var _a;
		var tweens = [];
		for (var _i = 0; _i < arguments.length; _i++) tweens[_i] = arguments[_i];
		for (var _b = 0, tweens_1 = tweens; _b < tweens_1.length; _b++) {
			var tween = tweens_1[_b];
			(_a = tween._group) === null || _a === void 0 || _a.remove(tween);
			tween._group = this;
			this._tweens[tween.getId()] = tween;
			this._tweensAddedDuringUpdate[tween.getId()] = tween;
		}
	};
	Group.prototype.remove = function() {
		var tweens = [];
		for (var _i = 0; _i < arguments.length; _i++) tweens[_i] = arguments[_i];
		for (var _a = 0, tweens_2 = tweens; _a < tweens_2.length; _a++) {
			var tween = tweens_2[_a];
			tween._group = void 0;
			delete this._tweens[tween.getId()];
			delete this._tweensAddedDuringUpdate[tween.getId()];
		}
	};
	/** Return true if all tweens in the group are not paused or playing. */
	Group.prototype.allStopped = function() {
		return this.getAll().every(function(tween) {
			return !tween.isPlaying();
		});
	};
	Group.prototype.update = function(time, preserve) {
		if (time === void 0) time = now();
		if (preserve === void 0) preserve = true;
		var tweenIds = Object.keys(this._tweens);
		if (tweenIds.length === 0) return;
		while (tweenIds.length > 0) {
			this._tweensAddedDuringUpdate = {};
			for (var i = 0; i < tweenIds.length; i++) {
				var tween = this._tweens[tweenIds[i]];
				var autoStart = !preserve;
				if (tween && tween.update(time, autoStart) === false && !preserve) this.remove(tween);
			}
			tweenIds = Object.keys(this._tweensAddedDuringUpdate);
		}
	};
	return Group;
}();
/**
*
*/
var Interpolation = {
	Linear: function(v, k) {
		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = Interpolation.Utils.Linear;
		if (k < 0) return fn(v[0], v[1], f);
		if (k > 1) return fn(v[m], v[m - 1], m - f);
		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
	},
	Bezier: function(v, k) {
		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = Interpolation.Utils.Bernstein;
		for (var i = 0; i <= n; i++) b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		return b;
	},
	CatmullRom: function(v, k) {
		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = Interpolation.Utils.CatmullRom;
		if (v[0] === v[m]) {
			if (k < 0) i = Math.floor(f = m * (1 + k));
			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
		} else {
			if (k < 0) return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			if (k > 1) return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
		}
	},
	Utils: {
		Linear: function(p0, p1, t) {
			return (p1 - p0) * t + p0;
		},
		Bernstein: function(n, i) {
			var fc = Interpolation.Utils.Factorial;
			return fc(n) / fc(i) / fc(n - i);
		},
		Factorial: (function() {
			var a = [1];
			return function(n) {
				var s = 1;
				if (a[n]) return a[n];
				for (var i = n; i > 1; i--) s *= i;
				a[n] = s;
				return s;
			};
		})(),
		CatmullRom: function(p0, p1, p2, p3, t) {
			var v0 = (p2 - p0) * .5;
			var v1 = (p3 - p1) * .5;
			var t2 = t * t;
			var t3 = t * t2;
			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
		}
	}
};
/**
* Utils
*/
var Sequence = function() {
	function Sequence() {}
	Sequence.nextId = function() {
		return Sequence._nextId++;
	};
	Sequence._nextId = 0;
	return Sequence;
}();
var mainGroup = new Group();
/**
* Tween.js - Licensed under the MIT license
* https://github.com/tweenjs/tween.js
* ----------------------------------------------
*
* See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
* Thank you all, you're awesome!
*/
var Tween = function() {
	function Tween(object, group) {
		this._isPaused = false;
		this._pauseStart = 0;
		this._valuesStart = {};
		this._valuesEnd = {};
		this._valuesStartRepeat = {};
		this._duration = 1e3;
		this._isDynamic = false;
		this._initialRepeat = 0;
		this._repeat = 0;
		this._yoyo = false;
		this._isPlaying = false;
		this._reversed = false;
		this._delayTime = 0;
		this._startTime = 0;
		this._easingFunction = Easing.Linear.None;
		this._interpolationFunction = Interpolation.Linear;
		this._chainedTweens = [];
		this._onStartCallbackFired = false;
		this._onEveryStartCallbackFired = false;
		this._id = Sequence.nextId();
		this._isChainStopped = false;
		this._propertiesAreSetUp = false;
		this._goToEnd = false;
		this._object = object;
		if (typeof group === "object") {
			this._group = group;
			group.add(this);
		} else if (group === true) {
			this._group = mainGroup;
			mainGroup.add(this);
		}
	}
	Tween.prototype.getId = function() {
		return this._id;
	};
	Tween.prototype.isPlaying = function() {
		return this._isPlaying;
	};
	Tween.prototype.isPaused = function() {
		return this._isPaused;
	};
	Tween.prototype.getDuration = function() {
		return this._duration;
	};
	Tween.prototype.to = function(target, duration) {
		if (duration === void 0) duration = 1e3;
		if (this._isPlaying) throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
		this._valuesEnd = target;
		this._propertiesAreSetUp = false;
		this._duration = duration < 0 ? 0 : duration;
		return this;
	};
	Tween.prototype.duration = function(duration) {
		if (duration === void 0) duration = 1e3;
		this._duration = duration < 0 ? 0 : duration;
		return this;
	};
	Tween.prototype.dynamic = function(dynamic) {
		if (dynamic === void 0) dynamic = false;
		this._isDynamic = dynamic;
		return this;
	};
	Tween.prototype.start = function(time, overrideStartingValues) {
		if (time === void 0) time = now();
		if (overrideStartingValues === void 0) overrideStartingValues = false;
		if (this._isPlaying) return this;
		this._repeat = this._initialRepeat;
		if (this._reversed) {
			this._reversed = false;
			for (var property in this._valuesStartRepeat) {
				this._swapEndStartRepeatValues(property);
				this._valuesStart[property] = this._valuesStartRepeat[property];
			}
		}
		this._isPlaying = true;
		this._isPaused = false;
		this._onStartCallbackFired = false;
		this._onEveryStartCallbackFired = false;
		this._isChainStopped = false;
		this._startTime = time;
		this._startTime += this._delayTime;
		if (!this._propertiesAreSetUp || overrideStartingValues) {
			this._propertiesAreSetUp = true;
			if (!this._isDynamic) {
				var tmp = {};
				for (var prop in this._valuesEnd) tmp[prop] = this._valuesEnd[prop];
				this._valuesEnd = tmp;
			}
			this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, overrideStartingValues);
		}
		return this;
	};
	Tween.prototype.startFromCurrentValues = function(time) {
		return this.start(time, true);
	};
	Tween.prototype._setupProperties = function(_object, _valuesStart, _valuesEnd, _valuesStartRepeat, overrideStartingValues) {
		for (var property in _valuesEnd) {
			var startValue = _object[property];
			var startValueIsArray = Array.isArray(startValue);
			var propType = startValueIsArray ? "array" : typeof startValue;
			var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
			if (propType === "undefined" || propType === "function") continue;
			if (isInterpolationList) {
				var endValues = _valuesEnd[property];
				if (endValues.length === 0) continue;
				var temp = [startValue];
				for (var i = 0, l = endValues.length; i < l; i += 1) {
					var value = this._handleRelativeValue(startValue, endValues[i]);
					if (isNaN(value)) {
						isInterpolationList = false;
						console.warn("Found invalid interpolation list. Skipping.");
						break;
					}
					temp.push(value);
				}
				if (isInterpolationList) _valuesEnd[property] = temp;
			}
			if ((propType === "object" || startValueIsArray) && startValue && !isInterpolationList) {
				_valuesStart[property] = startValueIsArray ? [] : {};
				var nestedObject = startValue;
				for (var prop in nestedObject) _valuesStart[property][prop] = nestedObject[prop];
				_valuesStartRepeat[property] = startValueIsArray ? [] : {};
				var endValues = _valuesEnd[property];
				if (!this._isDynamic) {
					var tmp = {};
					for (var prop in endValues) tmp[prop] = endValues[prop];
					_valuesEnd[property] = endValues = tmp;
				}
				this._setupProperties(nestedObject, _valuesStart[property], endValues, _valuesStartRepeat[property], overrideStartingValues);
			} else {
				if (typeof _valuesStart[property] === "undefined" || overrideStartingValues) _valuesStart[property] = startValue;
				if (!startValueIsArray) _valuesStart[property] *= 1;
				if (isInterpolationList) _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
				else _valuesStartRepeat[property] = _valuesStart[property] || 0;
			}
		}
	};
	Tween.prototype.stop = function() {
		if (!this._isChainStopped) {
			this._isChainStopped = true;
			this.stopChainedTweens();
		}
		if (!this._isPlaying) return this;
		this._isPlaying = false;
		this._isPaused = false;
		if (this._onStopCallback) this._onStopCallback(this._object);
		return this;
	};
	Tween.prototype.end = function() {
		this._goToEnd = true;
		this.update(this._startTime + this._duration);
		return this;
	};
	Tween.prototype.pause = function(time) {
		if (time === void 0) time = now();
		if (this._isPaused || !this._isPlaying) return this;
		this._isPaused = true;
		this._pauseStart = time;
		return this;
	};
	Tween.prototype.resume = function(time) {
		if (time === void 0) time = now();
		if (!this._isPaused || !this._isPlaying) return this;
		this._isPaused = false;
		this._startTime += time - this._pauseStart;
		this._pauseStart = 0;
		return this;
	};
	Tween.prototype.stopChainedTweens = function() {
		for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) this._chainedTweens[i].stop();
		return this;
	};
	Tween.prototype.group = function(group) {
		if (!group) {
			console.warn("tween.group() without args has been removed, use group.add(tween) instead.");
			return this;
		}
		group.add(this);
		return this;
	};
	/**
	* Removes the tween from whichever group it is in.
	*/
	Tween.prototype.remove = function() {
		var _a;
		(_a = this._group) === null || _a === void 0 || _a.remove(this);
		return this;
	};
	Tween.prototype.delay = function(amount) {
		if (amount === void 0) amount = 0;
		this._delayTime = amount;
		return this;
	};
	Tween.prototype.repeat = function(times) {
		if (times === void 0) times = 0;
		this._initialRepeat = times;
		this._repeat = times;
		return this;
	};
	Tween.prototype.repeatDelay = function(amount) {
		this._repeatDelayTime = amount;
		return this;
	};
	Tween.prototype.yoyo = function(yoyo) {
		if (yoyo === void 0) yoyo = false;
		this._yoyo = yoyo;
		return this;
	};
	Tween.prototype.easing = function(easingFunction) {
		if (easingFunction === void 0) easingFunction = Easing.Linear.None;
		this._easingFunction = easingFunction;
		return this;
	};
	Tween.prototype.interpolation = function(interpolationFunction) {
		if (interpolationFunction === void 0) interpolationFunction = Interpolation.Linear;
		this._interpolationFunction = interpolationFunction;
		return this;
	};
	Tween.prototype.chain = function() {
		var tweens = [];
		for (var _i = 0; _i < arguments.length; _i++) tweens[_i] = arguments[_i];
		this._chainedTweens = tweens;
		return this;
	};
	Tween.prototype.onStart = function(callback) {
		this._onStartCallback = callback;
		return this;
	};
	Tween.prototype.onEveryStart = function(callback) {
		this._onEveryStartCallback = callback;
		return this;
	};
	Tween.prototype.onUpdate = function(callback) {
		this._onUpdateCallback = callback;
		return this;
	};
	Tween.prototype.onRepeat = function(callback) {
		this._onRepeatCallback = callback;
		return this;
	};
	Tween.prototype.onComplete = function(callback) {
		this._onCompleteCallback = callback;
		return this;
	};
	Tween.prototype.onStop = function(callback) {
		this._onStopCallback = callback;
		return this;
	};
	/**
	* @returns true if the tween is still playing after the update, false
	* otherwise (calling update on a paused tween still returns true because
	* it is still playing, just paused).
	*
	* @param autoStart - When true, calling update will implicitly call start()
	* as well. Note, if you stop() or end() the tween, but are still calling
	* update(), it will start again!
	*/
	Tween.prototype.update = function(time, autoStart) {
		var _this = this;
		var _a;
		if (time === void 0) time = now();
		if (autoStart === void 0) autoStart = Tween.autoStartOnUpdate;
		if (this._isPaused) return true;
		var property;
		if (!this._goToEnd && !this._isPlaying) {
			if (autoStart) this.start(time, true);
			else return false;
		}
		this._goToEnd = false;
		if (time < this._startTime) return true;
		if (this._onStartCallbackFired === false) {
			if (this._onStartCallback) this._onStartCallback(this._object);
			this._onStartCallbackFired = true;
		}
		if (this._onEveryStartCallbackFired === false) {
			if (this._onEveryStartCallback) this._onEveryStartCallback(this._object);
			this._onEveryStartCallbackFired = true;
		}
		var elapsedTime = time - this._startTime;
		var durationAndDelay = this._duration + ((_a = this._repeatDelayTime) !== null && _a !== void 0 ? _a : this._delayTime);
		var totalTime = this._duration + this._repeat * durationAndDelay;
		var calculateElapsedPortion = function() {
			if (_this._duration === 0) return 1;
			if (elapsedTime > totalTime) return 1;
			var timeIntoCurrentRepeat = elapsedTime - Math.trunc(elapsedTime / durationAndDelay) * durationAndDelay;
			var portion = Math.min(timeIntoCurrentRepeat / _this._duration, 1);
			if (portion === 0 && elapsedTime === _this._duration) return 1;
			return portion;
		};
		var elapsed = calculateElapsedPortion();
		var value = this._easingFunction(elapsed);
		this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
		if (this._onUpdateCallback) this._onUpdateCallback(this._object, elapsed);
		if (this._duration === 0 || elapsedTime >= this._duration) {
			if (this._repeat > 0) {
				var completeCount = Math.min(Math.trunc((elapsedTime - this._duration) / durationAndDelay) + 1, this._repeat);
				if (isFinite(this._repeat)) this._repeat -= completeCount;
				for (property in this._valuesStartRepeat) {
					if (!this._yoyo && typeof this._valuesEnd[property] === "string") this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
					if (this._yoyo) this._swapEndStartRepeatValues(property);
					this._valuesStart[property] = this._valuesStartRepeat[property];
				}
				if (this._yoyo) this._reversed = !this._reversed;
				this._startTime += durationAndDelay * completeCount;
				if (this._onRepeatCallback) this._onRepeatCallback(this._object);
				this._onEveryStartCallbackFired = false;
				return true;
			} else {
				if (this._onCompleteCallback) this._onCompleteCallback(this._object);
				for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) this._chainedTweens[i].start(this._startTime + this._duration, false);
				this._isPlaying = false;
				return false;
			}
		}
		return true;
	};
	Tween.prototype._updateProperties = function(_object, _valuesStart, _valuesEnd, value) {
		for (var property in _valuesEnd) {
			if (_valuesStart[property] === void 0) continue;
			var start = _valuesStart[property] || 0;
			var end = _valuesEnd[property];
			if (!Array.isArray(_object[property]) && Array.isArray(end)) _object[property] = this._interpolationFunction(end, value);
			else if (typeof end === "object" && end) this._updateProperties(_object[property], start, end, value);
			else {
				end = this._handleRelativeValue(start, end);
				if (typeof end === "number") _object[property] = start + (end - start) * value;
			}
		}
	};
	Tween.prototype._handleRelativeValue = function(start, end) {
		if (typeof end !== "string") return end;
		if (end.charAt(0) === "+" || end.charAt(0) === "-") return start + parseFloat(end);
		return parseFloat(end);
	};
	Tween.prototype._swapEndStartRepeatValues = function(property) {
		var tmp = this._valuesStartRepeat[property];
		var endValue = this._valuesEnd[property];
		if (typeof endValue === "string") this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
		else this._valuesStartRepeat[property] = this._valuesEnd[property];
		this._valuesEnd[property] = tmp;
	};
	Tween.autoStartOnUpdate = false;
	return Tween;
}();
Sequence.nextId;
/**
* Controlling groups of tweens
*
* Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
* In these cases, you may want to create your own smaller groups of tweens.
*/
var TWEEN = mainGroup;
TWEEN.getAll.bind(TWEEN);
TWEEN.removeAll.bind(TWEEN);
TWEEN.add.bind(TWEEN);
TWEEN.remove.bind(TWEEN);
TWEEN.update.bind(TWEEN);
// node_modules/kapsule/dist/kapsule.mjs
function _arrayLikeToArray$2(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
function _arrayWithHoles$1(r) {
	if (Array.isArray(r)) return r;
}
function _classCallCheck$1(a, n) {
	if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _createClass$1(e, r, t) {
	return Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _iterableToArrayLimit$1(r, l) {
	var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		var e, n, i, u, a = [], f = true, o = false;
		try {
			if (i = (t = t.call(r)).next, 0 === l);
			else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
		} catch (r) {
			o = true, n = r;
		} finally {
			try {
				if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
			} finally {
				if (o) throw n;
			}
		}
		return a;
	}
}
function _nonIterableRest$1() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$1(r, e) {
	return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$2(r, e) || _nonIterableRest$1();
}
function _unsupportedIterableToArray$2(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray$2(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
	}
}
var Prop = /*#__PURE__*/ _createClass$1(function Prop(name, _ref) {
	var _ref$default = _ref["default"], defaultVal = _ref$default === void 0 ? null : _ref$default, _ref$triggerUpdate = _ref.triggerUpdate, triggerUpdate = _ref$triggerUpdate === void 0 ? true : _ref$triggerUpdate, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? function(newVal, state) {} : _ref$onChange;
	_classCallCheck$1(this, Prop);
	this.name = name;
	this.defaultVal = defaultVal;
	this.triggerUpdate = triggerUpdate;
	this.onChange = onChange;
});
function index$4(_ref2) {
	var _ref2$stateInit = _ref2.stateInit, stateInit = _ref2$stateInit === void 0 ? function() {
		return {};
	} : _ref2$stateInit, _ref2$props = _ref2.props, rawProps = _ref2$props === void 0 ? {} : _ref2$props, _ref2$methods = _ref2.methods, methods = _ref2$methods === void 0 ? {} : _ref2$methods, _ref2$aliases = _ref2.aliases, aliases = _ref2$aliases === void 0 ? {} : _ref2$aliases, _ref2$init = _ref2.init, initFn = _ref2$init === void 0 ? function() {} : _ref2$init, _ref2$update = _ref2.update, updateFn = _ref2$update === void 0 ? function() {} : _ref2$update;
	var props = Object.keys(rawProps).map(function(propName) {
		return new Prop(propName, rawProps[propName]);
	});
	return function KapsuleComp() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		var classMode = !!(this instanceof KapsuleComp ? this.constructor : void 0);
		var nodeElement = classMode ? args.shift() : void 0;
		var _args$ = args[0], options = _args$ === void 0 ? {} : _args$;
		var state = Object.assign({}, stateInit instanceof Function ? stateInit(options) : stateInit, { initialised: false });
		var changedProps = {};
		function comp(nodeElement) {
			initStatic(nodeElement, options);
			digest();
			return comp;
		}
		var initStatic = function initStatic(nodeElement, options) {
			initFn.call(comp, nodeElement, state, options);
			state.initialised = true;
		};
		var digest = debounce(function() {
			if (!state.initialised) return;
			updateFn.call(comp, state, changedProps);
			changedProps = {};
		}, 1);
		props.forEach(function(prop) {
			comp[prop.name] = getSetProp(prop);
			function getSetProp(_ref3) {
				var prop = _ref3.name, _ref3$triggerUpdate = _ref3.triggerUpdate, redigest = _ref3$triggerUpdate === void 0 ? false : _ref3$triggerUpdate, _ref3$onChange = _ref3.onChange, onChange = _ref3$onChange === void 0 ? function(newVal, state) {} : _ref3$onChange, _ref3$defaultVal = _ref3.defaultVal, defaultVal = _ref3$defaultVal === void 0 ? null : _ref3$defaultVal;
				return function(_) {
					var curVal = state[prop];
					if (!arguments.length) return curVal;
					var val = _ === void 0 ? defaultVal : _;
					state[prop] = val;
					onChange.call(comp, val, state, curVal);
					!changedProps.hasOwnProperty(prop) && (changedProps[prop] = curVal);
					if (redigest) digest();
					return comp;
				};
			}
		});
		Object.keys(methods).forEach(function(methodName) {
			comp[methodName] = function() {
				var _methods$methodName;
				for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
				return (_methods$methodName = methods[methodName]).call.apply(_methods$methodName, [comp, state].concat(args));
			};
		});
		Object.entries(aliases).forEach(function(_ref4) {
			var _ref5 = _slicedToArray$1(_ref4, 2), alias = _ref5[0];
			return comp[alias] = comp[_ref5[1]];
		});
		comp.resetProps = function() {
			props.forEach(function(prop) {
				comp[prop.name](prop.defaultVal);
			});
			return comp;
		};
		comp.resetProps();
		state._rerender = digest;
		classMode && nodeElement && comp(nodeElement);
		return comp;
	};
}
// node_modules/accessor-fn/dist/accessor-fn.mjs
var index$3 = (function(p) {
	return typeof p === "function" ? p : typeof p === "string" ? function(obj) {
		return obj[p];
	} : function(obj) {
		return p;
	};
});
// node_modules/tinycolor2/esm/tinycolor.js
function _typeof(obj) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
		return typeof obj;
	} : function(obj) {
		return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	}, _typeof(obj);
}
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color, opts) {
	color = color ? color : "";
	opts = opts || {};
	if (color instanceof tinycolor) return color;
	if (!(this instanceof tinycolor)) return new tinycolor(color, opts);
	var rgb = inputToRGB(color);
	this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
	this._gradientType = opts.gradientType;
	if (this._r < 1) this._r = Math.round(this._r);
	if (this._g < 1) this._g = Math.round(this._g);
	if (this._b < 1) this._b = Math.round(this._b);
	this._ok = rgb.ok;
}
tinycolor.prototype = {
	isDark: function isDark() {
		return this.getBrightness() < 128;
	},
	isLight: function isLight() {
		return !this.isDark();
	},
	isValid: function isValid() {
		return this._ok;
	},
	getOriginalInput: function getOriginalInput() {
		return this._originalInput;
	},
	getFormat: function getFormat() {
		return this._format;
	},
	getAlpha: function getAlpha() {
		return this._a;
	},
	getBrightness: function getBrightness() {
		var rgb = this.toRgb();
		return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
	},
	getLuminance: function getLuminance() {
		var rgb = this.toRgb();
		var RsRGB = rgb.r / 255, GsRGB = rgb.g / 255, BsRGB = rgb.b / 255, R, G, B;
		if (RsRGB <= .03928) R = RsRGB / 12.92;
		else R = Math.pow((RsRGB + .055) / 1.055, 2.4);
		if (GsRGB <= .03928) G = GsRGB / 12.92;
		else G = Math.pow((GsRGB + .055) / 1.055, 2.4);
		if (BsRGB <= .03928) B = BsRGB / 12.92;
		else B = Math.pow((BsRGB + .055) / 1.055, 2.4);
		return .2126 * R + .7152 * G + .0722 * B;
	},
	setAlpha: function setAlpha(value) {
		this._a = boundAlpha(value);
		this._roundA = Math.round(100 * this._a) / 100;
		return this;
	},
	toHsv: function toHsv() {
		var hsv = rgbToHsv(this._r, this._g, this._b);
		return {
			h: hsv.h * 360,
			s: hsv.s,
			v: hsv.v,
			a: this._a
		};
	},
	toHsvString: function toHsvString() {
		var hsv = rgbToHsv(this._r, this._g, this._b);
		var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
		return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
	},
	toHsl: function toHsl() {
		var hsl = rgbToHsl(this._r, this._g, this._b);
		return {
			h: hsl.h * 360,
			s: hsl.s,
			l: hsl.l,
			a: this._a
		};
	},
	toHslString: function toHslString() {
		var hsl = rgbToHsl(this._r, this._g, this._b);
		var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
		return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
	},
	toHex: function toHex(allow3Char) {
		return rgbToHex(this._r, this._g, this._b, allow3Char);
	},
	toHexString: function toHexString(allow3Char) {
		return "#" + this.toHex(allow3Char);
	},
	toHex8: function toHex8(allow4Char) {
		return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
	},
	toHex8String: function toHex8String(allow4Char) {
		return "#" + this.toHex8(allow4Char);
	},
	toRgb: function toRgb() {
		return {
			r: Math.round(this._r),
			g: Math.round(this._g),
			b: Math.round(this._b),
			a: this._a
		};
	},
	toRgbString: function toRgbString() {
		return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
	},
	toPercentageRgb: function toPercentageRgb() {
		return {
			r: Math.round(bound01(this._r, 255) * 100) + "%",
			g: Math.round(bound01(this._g, 255) * 100) + "%",
			b: Math.round(bound01(this._b, 255) * 100) + "%",
			a: this._a
		};
	},
	toPercentageRgbString: function toPercentageRgbString() {
		return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
	},
	toName: function toName() {
		if (this._a === 0) return "transparent";
		if (this._a < 1) return false;
		return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
	},
	toFilter: function toFilter(secondColor) {
		var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
		var secondHex8String = hex8String;
		var gradientType = this._gradientType ? "GradientType = 1, " : "";
		if (secondColor) {
			var s = tinycolor(secondColor);
			secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
		}
		return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
	},
	toString: function toString(format) {
		var formatSet = !!format;
		format = format || this._format;
		var formattedString = false;
		var hasAlpha = this._a < 1 && this._a >= 0;
		if (!formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name")) {
			if (format === "name" && this._a === 0) return this.toName();
			return this.toRgbString();
		}
		if (format === "rgb") formattedString = this.toRgbString();
		if (format === "prgb") formattedString = this.toPercentageRgbString();
		if (format === "hex" || format === "hex6") formattedString = this.toHexString();
		if (format === "hex3") formattedString = this.toHexString(true);
		if (format === "hex4") formattedString = this.toHex8String(true);
		if (format === "hex8") formattedString = this.toHex8String();
		if (format === "name") formattedString = this.toName();
		if (format === "hsl") formattedString = this.toHslString();
		if (format === "hsv") formattedString = this.toHsvString();
		return formattedString || this.toHexString();
	},
	clone: function clone() {
		return tinycolor(this.toString());
	},
	_applyModification: function _applyModification(fn, args) {
		var color = fn.apply(null, [this].concat([].slice.call(args)));
		this._r = color._r;
		this._g = color._g;
		this._b = color._b;
		this.setAlpha(color._a);
		return this;
	},
	lighten: function lighten() {
		return this._applyModification(_lighten, arguments);
	},
	brighten: function brighten() {
		return this._applyModification(_brighten, arguments);
	},
	darken: function darken() {
		return this._applyModification(_darken, arguments);
	},
	desaturate: function desaturate() {
		return this._applyModification(_desaturate, arguments);
	},
	saturate: function saturate() {
		return this._applyModification(_saturate, arguments);
	},
	greyscale: function greyscale() {
		return this._applyModification(_greyscale, arguments);
	},
	spin: function spin() {
		return this._applyModification(_spin, arguments);
	},
	_applyCombination: function _applyCombination(fn, args) {
		return fn.apply(null, [this].concat([].slice.call(args)));
	},
	analogous: function analogous() {
		return this._applyCombination(_analogous, arguments);
	},
	complement: function complement() {
		return this._applyCombination(_complement, arguments);
	},
	monochromatic: function monochromatic() {
		return this._applyCombination(_monochromatic, arguments);
	},
	splitcomplement: function splitcomplement() {
		return this._applyCombination(_splitcomplement, arguments);
	},
	triad: function triad() {
		return this._applyCombination(polyad, [3]);
	},
	tetrad: function tetrad() {
		return this._applyCombination(polyad, [4]);
	}
};
tinycolor.fromRatio = function(color, opts) {
	if (_typeof(color) == "object") {
		var newColor = {};
		for (var i in color) if (color.hasOwnProperty(i)) {
			if (i === "a") newColor[i] = color[i];
			else newColor[i] = convertToPercentage(color[i]);
		}
		color = newColor;
	}
	return tinycolor(color, opts);
};
function inputToRGB(color) {
	var rgb = {
		r: 0,
		g: 0,
		b: 0
	};
	var a = 1;
	var s = null;
	var v = null;
	var l = null;
	var ok = false;
	var format = false;
	if (typeof color == "string") color = stringInputToObject(color);
	if (_typeof(color) == "object") {
		if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
			rgb = rgbToRgb(color.r, color.g, color.b);
			ok = true;
			format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
		} else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
			s = convertToPercentage(color.s);
			v = convertToPercentage(color.v);
			rgb = hsvToRgb(color.h, s, v);
			ok = true;
			format = "hsv";
		} else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
			s = convertToPercentage(color.s);
			l = convertToPercentage(color.l);
			rgb = hslToRgb(color.h, s, l);
			ok = true;
			format = "hsl";
		}
		if (color.hasOwnProperty("a")) a = color.a;
	}
	a = boundAlpha(a);
	return {
		ok,
		format: color.format || format,
		r: Math.min(255, Math.max(rgb.r, 0)),
		g: Math.min(255, Math.max(rgb.g, 0)),
		b: Math.min(255, Math.max(rgb.b, 0)),
		a
	};
}
function rgbToRgb(r, g, b) {
	return {
		r: bound01(r, 255) * 255,
		g: bound01(g, 255) * 255,
		b: bound01(b, 255) * 255
	};
}
function rgbToHsl(r, g, b) {
	r = bound01(r, 255);
	g = bound01(g, 255);
	b = bound01(b, 255);
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;
	if (max == min) h = s = 0;
	else {
		var d = max - min;
		s = l > .5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b: h = (r - g) / d + 4;
		}
		h /= 6;
	}
	return {
		h,
		s,
		l
	};
}
function hslToRgb(h, s, l) {
	var r, g, b;
	h = bound01(h, 360);
	s = bound01(s, 100);
	l = bound01(l, 100);
	function hue2rgb(p, q, t) {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	}
	if (s === 0) r = g = b = l;
	else {
		var q = l < .5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}
	return {
		r: r * 255,
		g: g * 255,
		b: b * 255
	};
}
function rgbToHsv(r, g, b) {
	r = bound01(r, 255);
	g = bound01(g, 255);
	b = bound01(b, 255);
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, v = max;
	var d = max - min;
	s = max === 0 ? 0 : d / max;
	if (max == min) h = 0;
	else {
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b: h = (r - g) / d + 4;
		}
		h /= 6;
	}
	return {
		h,
		s,
		v
	};
}
function hsvToRgb(h, s, v) {
	h = bound01(h, 360) * 6;
	s = bound01(s, 100);
	v = bound01(v, 100);
	var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [
		v,
		q,
		p,
		p,
		t,
		v
	][mod], g = [
		t,
		v,
		v,
		q,
		p,
		p
	][mod], b = [
		p,
		p,
		t,
		v,
		v,
		q
	][mod];
	return {
		r: r * 255,
		g: g * 255,
		b: b * 255
	};
}
function rgbToHex(r, g, b, allow3Char) {
	var hex = [
		pad2(Math.round(r).toString(16)),
		pad2(Math.round(g).toString(16)),
		pad2(Math.round(b).toString(16))
	];
	if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
	return hex.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
	var hex = [
		pad2(Math.round(r).toString(16)),
		pad2(Math.round(g).toString(16)),
		pad2(Math.round(b).toString(16)),
		pad2(convertDecimalToHex(a))
	];
	if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
	return hex.join("");
}
function rgbaToArgbHex(r, g, b, a) {
	return [
		pad2(convertDecimalToHex(a)),
		pad2(Math.round(r).toString(16)),
		pad2(Math.round(g).toString(16)),
		pad2(Math.round(b).toString(16))
	].join("");
}
tinycolor.equals = function(color1, color2) {
	if (!color1 || !color2) return false;
	return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
	return tinycolor.fromRatio({
		r: Math.random(),
		g: Math.random(),
		b: Math.random()
	});
};
function _desaturate(color, amount) {
	amount = amount === 0 ? 0 : amount || 10;
	var hsl = tinycolor(color).toHsl();
	hsl.s -= amount / 100;
	hsl.s = clamp01(hsl.s);
	return tinycolor(hsl);
}
function _saturate(color, amount) {
	amount = amount === 0 ? 0 : amount || 10;
	var hsl = tinycolor(color).toHsl();
	hsl.s += amount / 100;
	hsl.s = clamp01(hsl.s);
	return tinycolor(hsl);
}
function _greyscale(color) {
	return tinycolor(color).desaturate(100);
}
function _lighten(color, amount) {
	amount = amount === 0 ? 0 : amount || 10;
	var hsl = tinycolor(color).toHsl();
	hsl.l += amount / 100;
	hsl.l = clamp01(hsl.l);
	return tinycolor(hsl);
}
function _brighten(color, amount) {
	amount = amount === 0 ? 0 : amount || 10;
	var rgb = tinycolor(color).toRgb();
	rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
	rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
	rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
	return tinycolor(rgb);
}
function _darken(color, amount) {
	amount = amount === 0 ? 0 : amount || 10;
	var hsl = tinycolor(color).toHsl();
	hsl.l -= amount / 100;
	hsl.l = clamp01(hsl.l);
	return tinycolor(hsl);
}
function _spin(color, amount) {
	var hsl = tinycolor(color).toHsl();
	var hue = (hsl.h + amount) % 360;
	hsl.h = hue < 0 ? 360 + hue : hue;
	return tinycolor(hsl);
}
function _complement(color) {
	var hsl = tinycolor(color).toHsl();
	hsl.h = (hsl.h + 180) % 360;
	return tinycolor(hsl);
}
function polyad(color, number) {
	if (isNaN(number) || number <= 0) throw new Error("Argument to polyad must be a positive number");
	var hsl = tinycolor(color).toHsl();
	var result = [tinycolor(color)];
	var step = 360 / number;
	for (var i = 1; i < number; i++) result.push(tinycolor({
		h: (hsl.h + i * step) % 360,
		s: hsl.s,
		l: hsl.l
	}));
	return result;
}
function _splitcomplement(color) {
	var hsl = tinycolor(color).toHsl();
	var h = hsl.h;
	return [
		tinycolor(color),
		tinycolor({
			h: (h + 72) % 360,
			s: hsl.s,
			l: hsl.l
		}),
		tinycolor({
			h: (h + 216) % 360,
			s: hsl.s,
			l: hsl.l
		})
	];
}
function _analogous(color, results, slices) {
	results = results || 6;
	slices = slices || 30;
	var hsl = tinycolor(color).toHsl();
	var part = 360 / slices;
	var ret = [tinycolor(color)];
	for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
		hsl.h = (hsl.h + part) % 360;
		ret.push(tinycolor(hsl));
	}
	return ret;
}
function _monochromatic(color, results) {
	results = results || 6;
	var hsv = tinycolor(color).toHsv();
	var h = hsv.h, s = hsv.s, v = hsv.v;
	var ret = [];
	var modification = 1 / results;
	while (results--) {
		ret.push(tinycolor({
			h,
			s,
			v
		}));
		v = (v + modification) % 1;
	}
	return ret;
}
tinycolor.mix = function(color1, color2, amount) {
	amount = amount === 0 ? 0 : amount || 50;
	var rgb1 = tinycolor(color1).toRgb();
	var rgb2 = tinycolor(color2).toRgb();
	var p = amount / 100;
	return tinycolor({
		r: (rgb2.r - rgb1.r) * p + rgb1.r,
		g: (rgb2.g - rgb1.g) * p + rgb1.g,
		b: (rgb2.b - rgb1.b) * p + rgb1.b,
		a: (rgb2.a - rgb1.a) * p + rgb1.a
	});
};
tinycolor.readability = function(color1, color2) {
	var c1 = tinycolor(color1);
	var c2 = tinycolor(color2);
	return (Math.max(c1.getLuminance(), c2.getLuminance()) + .05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + .05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
	var readability = tinycolor.readability(color1, color2);
	var wcag2Parms, out = false;
	wcag2Parms = validateWCAG2Parms(wcag2);
	switch (wcag2Parms.level + wcag2Parms.size) {
		case "AAsmall":
		case "AAAlarge":
			out = readability >= 4.5;
			break;
		case "AAlarge":
			out = readability >= 3;
			break;
		case "AAAsmall": out = readability >= 7;
	}
	return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
	var bestColor = null;
	var bestScore = 0;
	var readability;
	var includeFallbackColors, level, size;
	args = args || {};
	includeFallbackColors = args.includeFallbackColors;
	level = args.level;
	size = args.size;
	for (var i = 0; i < colorList.length; i++) {
		readability = tinycolor.readability(baseColor, colorList[i]);
		if (readability > bestScore) {
			bestScore = readability;
			bestColor = tinycolor(colorList[i]);
		}
	}
	if (tinycolor.isReadable(baseColor, bestColor, {
		level,
		size
	}) || !includeFallbackColors) return bestColor;
	else {
		args.includeFallbackColors = false;
		return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
	}
};
var names = tinycolor.names = {
	aliceblue: "f0f8ff",
	antiquewhite: "faebd7",
	aqua: "0ff",
	aquamarine: "7fffd4",
	azure: "f0ffff",
	beige: "f5f5dc",
	bisque: "ffe4c4",
	black: "000",
	blanchedalmond: "ffebcd",
	blue: "00f",
	blueviolet: "8a2be2",
	brown: "a52a2a",
	burlywood: "deb887",
	burntsienna: "ea7e5d",
	cadetblue: "5f9ea0",
	chartreuse: "7fff00",
	chocolate: "d2691e",
	coral: "ff7f50",
	cornflowerblue: "6495ed",
	cornsilk: "fff8dc",
	crimson: "dc143c",
	cyan: "0ff",
	darkblue: "00008b",
	darkcyan: "008b8b",
	darkgoldenrod: "b8860b",
	darkgray: "a9a9a9",
	darkgreen: "006400",
	darkgrey: "a9a9a9",
	darkkhaki: "bdb76b",
	darkmagenta: "8b008b",
	darkolivegreen: "556b2f",
	darkorange: "ff8c00",
	darkorchid: "9932cc",
	darkred: "8b0000",
	darksalmon: "e9967a",
	darkseagreen: "8fbc8f",
	darkslateblue: "483d8b",
	darkslategray: "2f4f4f",
	darkslategrey: "2f4f4f",
	darkturquoise: "00ced1",
	darkviolet: "9400d3",
	deeppink: "ff1493",
	deepskyblue: "00bfff",
	dimgray: "696969",
	dimgrey: "696969",
	dodgerblue: "1e90ff",
	firebrick: "b22222",
	floralwhite: "fffaf0",
	forestgreen: "228b22",
	fuchsia: "f0f",
	gainsboro: "dcdcdc",
	ghostwhite: "f8f8ff",
	gold: "ffd700",
	goldenrod: "daa520",
	gray: "808080",
	green: "008000",
	greenyellow: "adff2f",
	grey: "808080",
	honeydew: "f0fff0",
	hotpink: "ff69b4",
	indianred: "cd5c5c",
	indigo: "4b0082",
	ivory: "fffff0",
	khaki: "f0e68c",
	lavender: "e6e6fa",
	lavenderblush: "fff0f5",
	lawngreen: "7cfc00",
	lemonchiffon: "fffacd",
	lightblue: "add8e6",
	lightcoral: "f08080",
	lightcyan: "e0ffff",
	lightgoldenrodyellow: "fafad2",
	lightgray: "d3d3d3",
	lightgreen: "90ee90",
	lightgrey: "d3d3d3",
	lightpink: "ffb6c1",
	lightsalmon: "ffa07a",
	lightseagreen: "20b2aa",
	lightskyblue: "87cefa",
	lightslategray: "789",
	lightslategrey: "789",
	lightsteelblue: "b0c4de",
	lightyellow: "ffffe0",
	lime: "0f0",
	limegreen: "32cd32",
	linen: "faf0e6",
	magenta: "f0f",
	maroon: "800000",
	mediumaquamarine: "66cdaa",
	mediumblue: "0000cd",
	mediumorchid: "ba55d3",
	mediumpurple: "9370db",
	mediumseagreen: "3cb371",
	mediumslateblue: "7b68ee",
	mediumspringgreen: "00fa9a",
	mediumturquoise: "48d1cc",
	mediumvioletred: "c71585",
	midnightblue: "191970",
	mintcream: "f5fffa",
	mistyrose: "ffe4e1",
	moccasin: "ffe4b5",
	navajowhite: "ffdead",
	navy: "000080",
	oldlace: "fdf5e6",
	olive: "808000",
	olivedrab: "6b8e23",
	orange: "ffa500",
	orangered: "ff4500",
	orchid: "da70d6",
	palegoldenrod: "eee8aa",
	palegreen: "98fb98",
	paleturquoise: "afeeee",
	palevioletred: "db7093",
	papayawhip: "ffefd5",
	peachpuff: "ffdab9",
	peru: "cd853f",
	pink: "ffc0cb",
	plum: "dda0dd",
	powderblue: "b0e0e6",
	purple: "800080",
	rebeccapurple: "663399",
	red: "f00",
	rosybrown: "bc8f8f",
	royalblue: "4169e1",
	saddlebrown: "8b4513",
	salmon: "fa8072",
	sandybrown: "f4a460",
	seagreen: "2e8b57",
	seashell: "fff5ee",
	sienna: "a0522d",
	silver: "c0c0c0",
	skyblue: "87ceeb",
	slateblue: "6a5acd",
	slategray: "708090",
	slategrey: "708090",
	snow: "fffafa",
	springgreen: "00ff7f",
	steelblue: "4682b4",
	tan: "d2b48c",
	teal: "008080",
	thistle: "d8bfd8",
	tomato: "ff6347",
	turquoise: "40e0d0",
	violet: "ee82ee",
	wheat: "f5deb3",
	white: "fff",
	whitesmoke: "f5f5f5",
	yellow: "ff0",
	yellowgreen: "9acd32"
};
var hexNames = tinycolor.hexNames = flip(names);
function flip(o) {
	var flipped = {};
	for (var i in o) if (o.hasOwnProperty(i)) flipped[o[i]] = i;
	return flipped;
}
function boundAlpha(a) {
	a = parseFloat(a);
	if (isNaN(a) || a < 0 || a > 1) a = 1;
	return a;
}
function bound01(n, max) {
	if (isOnePointZero(n)) n = "100%";
	var processPercent = isPercentage(n);
	n = Math.min(max, Math.max(0, parseFloat(n)));
	if (processPercent) n = parseInt(n * max, 10) / 100;
	if (Math.abs(n - max) < 1e-6) return 1;
	return n % max / parseFloat(max);
}
function clamp01(val) {
	return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
	return parseInt(val, 16);
}
function isOnePointZero(n) {
	return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
	return typeof n === "string" && n.indexOf("%") != -1;
}
function pad2(c) {
	return c.length == 1 ? "0" + c : "" + c;
}
function convertToPercentage(n) {
	if (n <= 1) n = n * 100 + "%";
	return n;
}
function convertDecimalToHex(d) {
	return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
	return parseIntFromHex(h) / 255;
}
var matchers = function() {
	var CSS_UNIT = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)";
	var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
	var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
	return {
		CSS_UNIT: new RegExp(CSS_UNIT),
		rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
		rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
		hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
		hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
		hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
		hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
		hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
	};
}();
function isValidCSSUnit(color) {
	return !!matchers.CSS_UNIT.exec(color);
}
function stringInputToObject(color) {
	color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
	var named = false;
	if (names[color]) {
		color = names[color];
		named = true;
	} else if (color == "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var match;
	if (match = matchers.rgb.exec(color)) return {
		r: match[1],
		g: match[2],
		b: match[3]
	};
	if (match = matchers.rgba.exec(color)) return {
		r: match[1],
		g: match[2],
		b: match[3],
		a: match[4]
	};
	if (match = matchers.hsl.exec(color)) return {
		h: match[1],
		s: match[2],
		l: match[3]
	};
	if (match = matchers.hsla.exec(color)) return {
		h: match[1],
		s: match[2],
		l: match[3],
		a: match[4]
	};
	if (match = matchers.hsv.exec(color)) return {
		h: match[1],
		s: match[2],
		v: match[3]
	};
	if (match = matchers.hsva.exec(color)) return {
		h: match[1],
		s: match[2],
		v: match[3],
		a: match[4]
	};
	if (match = matchers.hex8.exec(color)) return {
		r: parseIntFromHex(match[1]),
		g: parseIntFromHex(match[2]),
		b: parseIntFromHex(match[3]),
		a: convertHexToDecimal(match[4]),
		format: named ? "name" : "hex8"
	};
	if (match = matchers.hex6.exec(color)) return {
		r: parseIntFromHex(match[1]),
		g: parseIntFromHex(match[2]),
		b: parseIntFromHex(match[3]),
		format: named ? "name" : "hex"
	};
	if (match = matchers.hex4.exec(color)) return {
		r: parseIntFromHex(match[1] + "" + match[1]),
		g: parseIntFromHex(match[2] + "" + match[2]),
		b: parseIntFromHex(match[3] + "" + match[3]),
		a: convertHexToDecimal(match[4] + "" + match[4]),
		format: named ? "name" : "hex8"
	};
	if (match = matchers.hex3.exec(color)) return {
		r: parseIntFromHex(match[1] + "" + match[1]),
		g: parseIntFromHex(match[2] + "" + match[2]),
		b: parseIntFromHex(match[3] + "" + match[3]),
		format: named ? "name" : "hex"
	};
	return false;
}
function validateWCAG2Parms(parms) {
	var level, size;
	parms = parms || {
		level: "AA",
		size: "small"
	};
	level = (parms.level || "AA").toUpperCase();
	size = (parms.size || "small").toLowerCase();
	if (level !== "AA" && level !== "AAA") level = "AA";
	if (size !== "small" && size !== "large") size = "small";
	return {
		level,
		size
	};
}
// node_modules/canvas-color-tracker/dist/canvas-color-tracker.mjs
function _arrayLikeToArray$1(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
function _arrayWithoutHoles$1(r) {
	if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function _assertClassBrand(e, t, n) {
	if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
	throw new TypeError("Private element is not present on this object");
}
function _checkPrivateRedeclaration(e, t) {
	if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(a, n) {
	if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _classPrivateFieldGet2(s, a) {
	return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldInitSpec(e, t, a) {
	_checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _classPrivateFieldSet2(s, a, r) {
	return s.set(_assertClassBrand(s, a), r), r;
}
function _defineProperties(e, r) {
	for (var t = 0; t < r.length; t++) {
		var o = r[t];
		o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey$1(o.key), o);
	}
}
function _createClass(e, r, t) {
	return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _iterableToArray$1(r) {
	if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread$1() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$1(r) {
	return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
function _toPrimitive$1(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r);
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return String(t);
}
function _toPropertyKey$1(t) {
	var i = _toPrimitive$1(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray$1(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
	}
}
var ENTROPY = 123;
var int2HexColor = function int2HexColor(num) {
	return "#".concat(Math.min(num, Math.pow(2, 24)).toString(16).padStart(6, "0"));
};
var rgb2Int = function rgb2Int(r, g, b) {
	return (r << 16) + (g << 8) + b;
};
var colorStr2Int = function colorStr2Int(str) {
	var _tinyColor$toRgb = tinycolor(str).toRgb(), r = _tinyColor$toRgb.r, g = _tinyColor$toRgb.g, b = _tinyColor$toRgb.b;
	return rgb2Int(r, g, b);
};
var checksum = function checksum(n, csBits) {
	return n * ENTROPY % Math.pow(2, csBits);
};
var _registry = /*#__PURE__*/ new WeakMap();
var _csBits = /*#__PURE__*/ new WeakMap();
var _default = /*#__PURE__*/ function() {
	function _default() {
		var csBits = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 6;
		_classCallCheck(this, _default);
		_classPrivateFieldInitSpec(this, _registry, void 0);
		_classPrivateFieldInitSpec(this, _csBits, void 0);
		_classPrivateFieldSet2(_csBits, this, csBits);
		this.reset();
	}
	return _createClass(_default, [
		{
			key: "reset",
			value: function reset() {
				_classPrivateFieldSet2(_registry, this, ["__reserved for background__"]);
			}
		},
		{
			key: "register",
			value: function register(obj) {
				if (_classPrivateFieldGet2(_registry, this).length >= Math.pow(2, 24 - _classPrivateFieldGet2(_csBits, this))) return null;
				var idx = _classPrivateFieldGet2(_registry, this).length;
				var color = int2HexColor(idx + (checksum(idx, _classPrivateFieldGet2(_csBits, this)) << 24 - _classPrivateFieldGet2(_csBits, this)));
				_classPrivateFieldGet2(_registry, this).push(obj);
				return color;
			}
		},
		{
			key: "lookup",
			value: function lookup(color) {
				if (!color) return null;
				var n = typeof color === "string" ? colorStr2Int(color) : rgb2Int.apply(void 0, _toConsumableArray$1(color));
				if (!n) return null;
				var idx = n & Math.pow(2, 24 - _classPrivateFieldGet2(_csBits, this)) - 1;
				var cs = n >> 24 - _classPrivateFieldGet2(_csBits, this) & Math.pow(2, _classPrivateFieldGet2(_csBits, this)) - 1;
				if (checksum(idx, _classPrivateFieldGet2(_csBits, this)) !== cs || idx >= _classPrivateFieldGet2(_registry, this).length) return null;
				return _classPrivateFieldGet2(_registry, this)[idx];
			}
		}
	]);
}();
// node_modules/preact/dist/preact.mjs
var n;
var t$1;
var r;
var u;
var i;
var f;
var o;
var e;
var l;
var c$3;
var a$1;
var h = Symbol.for("pv");
var p = {};
var y$1 = [];
var v = /^m(i|n|o|s|text|space)$/;
var w = Array.isArray;
var d = y$1.slice;
var _ = Object.assign;
function g(n) {
	n && n.parentNode && n.remove();
}
function b(n, t, r) {
	var u, i, f, o = _({}, n.props), e = arguments.length;
	for (f in t) "key" == f ? u = t[f] : "ref" == f && "function" != typeof n.type ? i = t[f] : o[f] = t[f];
	return e > 2 && (o.children = e > 3 ? d.call(arguments, 2) : r), m$1(n.type, o, void 0 !== u ? u : n.key, void 0 !== i ? i : n.ref, null);
}
function m$1(r, u, i, f, o) {
	var e = {
		type: r,
		props: u,
		key: i,
		ref: f,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: h,
		__v: o || ++t$1,
		__i: -1,
		__u: 0
	};
	return !o && n.vnode && n.vnode(e), e;
}
function $(n) {
	return n.children;
}
function x$1(n, t) {
	this.props = n, this.context = t, this.__g = 0;
}
function S(n, t) {
	if (null == t) return n.__ && S(n.__, n.__i + 1);
	for (var r; t < n.__k.length; t++) if ((r = n.__k[t]) && r.__e) return r.__e;
	return "function" != typeof n.type || n.props.__P ? null : S(n);
}
function C(t) {
	var r, u = t.__v, i = u.__e, f = [], o = [], e = t.__P;
	e && ((r = _({ constructor: h }, u)).__v = u.__v + 1, n.vnode && n.vnode(r), z$1(e, r, u, t.__n, e.namespaceURI, 32 & u.__u ? [i] : null, f, i || S(u), 32 & u.__u, o), r.__v = u.__v, r.__.__k[r.__i] = r, E(f, r, o), u.__ = u.__e = null, r.__e != i && j(r));
}
function j(n) {
	if ((n = n.__) && n.__c && !n.props.__P) return n.__e = null, n.__k.some(function(t) {
		return t && (n.__e = t.__e);
	}), j(n);
}
function L(t) {
	(8 & t.__g || (t.__g |= 8, u.push(t), f++)) && i == n.debounceRendering || ((i = n.debounceRendering) || queueMicrotask)(H);
}
function H() {
	try {
		for (var n, t = 1; u.length;) u.length > t && u.sort(o), n = u.shift(), t = u.length, 8 & n.__g && C(n);
	} finally {
		(f = u.length) && (i || queueMicrotask)(H);
	}
}
function I(n, t, r, u, i, f, o, e, l, c, a) {
	var s, h, v, w, d, _, g = u.__k || y$1, k = t.length;
	for (l = q(r, t, g, l, k), s = 0; s < k; s++) null != (v = r.__k[s]) && (h = ~v.__i && g[v.__i] || p, v.__i = s, _ = z$1(n, v, h, i, f, o, e, l, c, a), w = v.__e, (h.ref != v.ref || 8 & h.__u) && (h.ref && G(h.ref, null, v, h), v.ref && a.push(v.ref, v.__c || w, v)), d = d || w, 4 & v.__u ? (l = A(v, l, n, !h.__v), h.__e && (h.__e = null)) : "function" == typeof v.type && void 0 !== _ ? l = _ : w && (l = w.nextSibling), v.__u &= -21);
	return r.__e = d, l;
}
function q(n, t, r, u, i) {
	var f, o, e, l, c, a, s, p, y, v = r.length, d = v, _ = 0, g = 0, k = n.__k = Array(i);
	for (f = 0; f < i; f++) null != (o = t[f]) && "boolean" != typeof o && "function" != typeof o ? ("object" != typeof o || o.constructor === String ? o = k[f] = m$1(null, o) : w(o) ? o = k[f] = m$1($, { children: o }) : o.constructor === h && o.__b ? o = k[f] = m$1(o.type, o.props, o.key, o.ref, o.__v) : k[f] = o, l = f + _, o.__ = n, o.__b = n.__b + 1, e = null, ~(c = o.__i = P(o, r, l, d)) && (d--, (e = r[c]) && (e.__u |= 2)), e && e.__v ? (o.__u |= 16, c == l - 1 ? _-- : c == l + 1 ? _++ : c != l && (c > l ? _-- : _++, g = 1)) : (~c || (i > v ? _-- : i < v && _++), "function" != typeof o.type && (o.__u |= 4))) : k[f] = null;
	if (g) {
		for (a = [], s = [], f = 0; f < i; f++) if ((o = k[f]) && 16 & o.__u) {
			for (_ = 0, p = a.length; _ < p;) a[y = _ + p >> 1] < o.__i ? _ = y + 1 : p = y;
			a[_] = o.__i, s[f] = _ + 1;
		}
		for (_ = a.length; f--;) s[f] && (s[f] == _ ? _-- : k[f].__u |= 4);
	}
	if (d) for (f = 0; f < v; f++) !(e = r[f]) || 2 & e.__u || (e.__e == u && (u = S(e)), J(e, e));
	return u;
}
function A(n, t, r, u) {
	var i, f, o, e;
	if ("function" == typeof n.type) {
		if (n.props.__P) return t;
		if (i = n.__k) for (f = 0; f < i.length; f++) i[f] && (i[f].__ = n, t = A(i[f], t, r, !1));
		return t;
	}
	for (t && !t.parentNode && (t = S(n)) && !t.parentNode && (t = null), o = n.__e, e = t; e && 8 == e.nodeType;) e = e.nextSibling;
	for (o != e && (!u && r.moveBefore && o.parentNode ? r.moveBefore(o, t) : r.insertBefore(o, t || null)), t = o; (t = t && t.nextSibling) && 8 == t.nodeType && !t.data.startsWith("$s"););
	return t;
}
function P(n, t, r, u) {
	var i, f = n.key, o = n.type, e = t[r], l = e && !(2 & e.__u);
	if (null === e && null == f || l && f == e.key && o == e.type) return r;
	if (u > (l ? 1 : 0)) {
		for (i = r - 1; i >= 0; i--) if ((e = t[i]) && !(2 & e.__u) && f == e.key && o == e.type) return i;
		for (i = r + 1; i < t.length; i++) if ((e = t[i]) && !(2 & e.__u) && f == e.key && o == e.type) return i;
	}
	return -1;
}
function T(n, t, r) {
	r ??= "", "-" == t[0] ? n.setProperty(t, r) : n[t] = r;
}
function N(n, t, r, u, i) {
	var f, o;
	if ("style" == t) if ("string" == typeof r) n.style.cssText = r;
	else {
		if ("string" == typeof u && (n.style.cssText = u = ""), u) for (t in u) r && t in r || T(n.style, t);
		if (r) for (t in r) u && r[t] == u[t] || T(n.style, t, r[t]);
	}
	else if ("o" == t[0] && "n" == t[1]) "function" != typeof r && (r = null), "function" != typeof u && (u = null), (n.__e || (n.__e = {}))[t] = r, r && u || (o = a$1[t] || (a$1[t] = V(t)), (n.__a || (n.__a = {}))[t] = c$3, f = t != (t = t.replace(l, "$1")), (t = t.slice(2))[0] < "a" && (t = t.toLowerCase()), r ? n.addEventListener(t, o, f) : n.removeEventListener(t, o, f));
	else {
		if ("http://www.w3.org/2000/svg" == i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in n) try {
			n[t] = null == r ? "" : r;
			return;
		} catch (n) {}
		if ("function" == typeof r) return;
		null == r || !1 === r && "-" != t[4] ? n.removeAttribute(t) : n.setAttribute(t, "popover" == t && 1 == r ? "" : r);
	}
}
function V(t) {
	return function(r) {
		var u = this.__e;
		if (u) {
			if (u = u[t], null == r[e]) r[e] = c$3++;
			else if (r[e] < this.__a[t]) return;
			return u(n.event ? n.event(r) : r);
		}
	};
}
function z$1(t, r, u, i, f, o, e, l, c, a) {
	var s, p, v, d, k, b, m, M, C, j, L, H, q, A, O, P, T, N, V = r.type;
	if (r.constructor !== h) return null;
	128 & u.__u && (c = 32 & u.__u, s = u.__c.__z) && (r.__u |= c, p = o = [], 8 == s.nodeType ? l = B(s, o) : o.push(s), l = o[0] || l), (s = n.__b) && s(r);
	n: if ("function" == typeof V) {
		v = e.length;
		try {
			if (M = r.props, C = (s = V.prototype) && s.render, j = (s = V.contextType) && i[s.__c], L = s ? j ? j.props.value : s.__ : i, (d = u.__c) ? (r.__c = d, 2 & d.__g && (d.__g |= 1)) : (C ? r.__c = d = new V(M, L) : (r.__c = d = new x$1(M, L), d.constructor = V, d.render = K), j && j.sub(d), d.state || (d.state = {}), d.__n = i, d.__g |= 8, d.__h = [], d.__k = []), C && (d.__s || (d.__s = d.state), V.getDerivedStateFromProps && (d.__s == d.state && (d.__s = _({}, d.__s)), _(d.__s, V.getDerivedStateFromProps(M, d.__s)))), k = d.props, b = d.state, d.__v = r, u.__c) {
				if (M !== k && C && !V.getDerivedStateFromProps && d.componentWillReceiveProps && d.componentWillReceiveProps(M, L), r.__v == u.__v && !(8 & d.__g) || !(4 & d.__g) && d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(M, d.__s, L)) {
					r.__v != u.__v && (d.props = M, d.state = d.__s, d.__g &= -9), r.__e = u.__e, r.__k = u.__k, r.__k.some(function(n) {
						n && (n.__ = r);
					}), y$1.push.apply(d.__h, d.__k), d.__k = [], d.__h.length && e.push(d), l = S(u);
					break n;
				}
				d.componentWillUpdate && d.componentWillUpdate(M, d.__s, L), C && d.componentDidUpdate && d.__h.push(function() {
					d.componentDidUpdate(k, b, m);
				});
			} else C && !V.getDerivedStateFromProps && d.componentWillMount && d.componentWillMount(), C && d.componentDidMount && d.__h.push(d.componentDidMount);
			d.context = L, d.props = M, d.__P = t, d.__g &= -5, H = n.__r, q = C ? 25 : 0;
			do
				d.__g &= -9, H && H(r), s = d.render(d.props, d.state = d.__s, d.context);
			while (8 & d.__g && ++q < 25);
			C && (y$1.push.apply(d.__h, d.__k), d.__k = []), d.state = d.__s, d.getChildContext && (i = _({}, i, d.getChildContext())), C && u.__c && d.getSnapshotBeforeUpdate && (m = d.getSnapshotBeforeUpdate(k, b)), A = s && s.type === $ && null == s.key ? s.props.children : s, M.__P && (s = l, f = (t = M.__P).namespaceURI, c = o = null, u.props && u.props.__P != t && (u.__k.some(function(n) {
				n && J(n, n);
			}), u.__k = null), l = u.__k ? S(u, 0) : null), l = I(t, w(A) ? A : [A], r, u, i, f, o, e, l, c, a), M.__P && (r.__e = null, l = s), r.__u &= -161, p && p.some(g), d.__h.length && e.push(d), 1 & d.__g && (d.__g &= -4);
		} catch (t) {
			if (e.length = v, r.__v = null, c || o) if (t && t.then) {
				if (r.__u |= 128 | c, o) {
					for (~(T = o.indexOf(l || void 0)) || (T = o.length); (N = o[T - 1]) && 8 == N.nodeType;) T--;
					for (; T < o.length; T++) if (N = o[T]) if (o[T] = null, O) {
						if (N == P) break;
					} else {
						if (8 != N.nodeType) break;
						N.data.startsWith("$s") && (P = B(O = N));
					}
				}
				if (!O) {
					for (; l && 8 == l.nodeType && l.nextSibling;) l = l.nextSibling;
					O = l;
				}
				(s = B(O = r.__c.__z || (r.__c.__z = O))) ? (r.__e = O, l = s) : r.__e = l, l = l && l.nextSibling;
			} else o && o.some(g);
			else r.__e = u.__e;
			r.__k || (r.__k = u.__k || []), t && t.then || D(r), n.__e(t, r, u);
		}
	} else l = r.__e = F(u.__e, r, u, i, f, o, e, c, a, t);
	return (s = n.diffed) && s(r), l;
}
function B(n, t) {
	if (n && 8 == n.nodeType && n.data.startsWith("$s")) for (var r = 1; n = n.nextSibling;) {
		if (8 == n.nodeType) {
			if (n.data.startsWith("$s")) r++;
			else if (n.data.startsWith("/$s") && !--r) return n;
		}
		t && t.push(n);
	}
}
function D(n) {
	n && (n.__c && (n.__c.__g |= 4), n.__k && n.__k.some(D));
}
function E(t, r, u) {
	for (var i = 0; i < u.length;) G(u[i++], u[i++], u[i++]);
	n.__c && n.__c(r, t), t.some(function(r) {
		try {
			t = r.__h, r.__h = [], t.some(function(n) {
				n.call(r);
			});
		} catch (t) {
			n.__e(t, r.__v);
		}
	});
}
function F(t, r, u, i, f, o, e, l, c, a) {
	var s, h, y, _, k, b, m, M, $ = u.props || p, x = r.props, C = r.type;
	if ("svg" == C ? f = "http://www.w3.org/2000/svg" : "math" == C ? f = "http://www.w3.org/1998/Math/MathML" : f || (f = "http://www.w3.org/1999/xhtml"), o) {
		for (s = 0; s < o.length; s++) if ((k = o[s]) && (C ? k.localName == C : 3 == k.nodeType)) {
			t = k, o[s] = null;
			break;
		}
	}
	if (!t) {
		if (M = a.ownerDocument || document, !C) return M.createTextNode(x);
		t = M.createElementNS(f, C, x.is ? x : a), l && (n.__m && n.__m(r, o), l = !1), o = null;
	}
	if (C) {
		if (a = "template" == C && t.content || t, o = "textarea" == C && null != x.defaultValue ? null : o && d.call(a.childNodes), !l && o) for ($ = {}, s = 0; s < t.attributes.length; s++) $[(k = t.attributes[s]).name] = k.value;
		for (s in $) k = $[s], "dangerouslySetInnerHTML" == s ? y = k : "children" == s || s in x || "value" == s && "defaultValue" in x || "checked" == s && "defaultChecked" in x || N(t, s, null, k, f);
		for (s in x) k = x[s], "children" == s ? _ = k : "dangerouslySetInnerHTML" == s ? h = k : "value" == s ? b = k : "checked" == s ? m = k : l && "function" != typeof k || $[s] === k || N(t, s, k, $[s], f);
		h ? (l || y && (h.__html == y.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), r.__k = []) : (y && (t.textContent = ""), ("foreignObject" == C || "http://www.w3.org/1998/Math/MathML" == f && v.test(C)) && (f = "http://www.w3.org/1999/xhtml"), I(a, w(_) ? _ : [_], r, u, i, f, o, e, o ? o[0] : u.__k && S(u, 0), l, c), o && o.some(g)), l && "textarea" != C || (s = "value", "progress" == C && null == b ? t.removeAttribute(s) : null == b || b === t[s] && ("progress" != C || b) || N(t, s, b, $[s], f), s = "checked", null != m && m != t[s] && N(t, s, m, $[s], f));
	} else $ === x || l && t.data == x || (t.data = x);
	return t;
}
function G(t, r, u, i) {
	try {
		"function" == typeof t ? r ? r.__x = t(r) || 1 : i && (i = i.__c || i.__e) && (r = i.__x) && (i.__x = null, "function" == typeof r ? r() : t(null)) : t.current = r;
	} catch (t) {
		n.__e(t, u);
	}
}
function J(t, r, u) {
	var i, f, o, e;
	if (n.unmount && n.unmount(t), !(i = t.ref) || i.current && i.current != t.__e || G(i, null, r, t), i = t.__c) {
		if (i.componentWillUnmount) try {
			i.componentWillUnmount();
		} catch (t) {
			n.__e(t, r);
		}
		i.__P = i.__n = null;
	}
	if (i = t.__k) for (e = 0; e < i.length; e++) i[e] && J(i[e], r, "function" != typeof t.type || u && !t.props.__P);
	!u && (i = t.__c) && (i = i.__z) && (f = B(i, o = [])) && (i == t.__e && o.some(g), g(f), g(i)), u || g(t.__e), t.__e = t.__c = t.__ = null;
}
function K(n, t, r) {
	return this.constructor(n, r);
}
function Q(t, r) {
	var u, i, f, o;
	n.__ && n.__(t, r), 9 == r.nodeType && (r = r.documentElement), i = (u = t && 32 & t.__u) ? null : r.__k, r.__k = m$1($, { children: [t] }), f = [], o = [], z$1(r, r.__k, i || p, p, r.namespaceURI, i ? null : r.firstChild ? d.call(r.childNodes) : null, f, i ? i.__e : r.firstChild, u, o), E(f, r.__k, o), r.__k.props.children = null;
}
n = { __e: function(n, t, r, u) {
	for (var i, o, e; t = t.__;) if ((i = t.__c) && !(1 & i.__g)) {
		i.__g |= 4;
		try {
			if ((e = (o = i.constructor) && o.getDerivedStateFromError) && i.setState(o.getDerivedStateFromError(n)), i.componentDidCatch && (i.componentDidCatch(n, u || {}), e = 1), e && 8 & i.__g) return void (i.__g |= 2);
		} catch (t) {
			n = t;
		}
	}
	throw f = 0, n;
} }, t$1 = 0, r = function(n) {
	return null != n && n.constructor === h;
}, x$1.prototype.setState = function(n, t) {
	var r = this.__s;
	r && r != this.state || (r = this.__s = _({}, this.state)), "function" == typeof n && (n = n(_({}, r), this.props)), n && (_(r, n), this.__v && (t && this.__k.push(t), L(this)));
}, x$1.prototype.forceUpdate = function(n) {
	this.__v && (this.__g |= 4, n && this.__h.push(n), L(this));
}, x$1.prototype.render = $, u = [], f = 0, o = function(n, t) {
	return n.__v.__b - t.__v.__b;
}, e = Symbol(), l = /(PointerCapture)$|Capture$/i, c$3 = 0, a$1 = {};
// node_modules/float-tooltip/dist/float-tooltip.mjs
var reactElement2VNode = (el) => {
	if (!(typeof el === "object")) return el;
	const res = b(el);
	if (res.props) {
		res.props = { ...res.props };
		if (res?.props?.children) res.props.children = Array.isArray(res.props.children) ? res.props.children.map(reactElement2VNode) : reactElement2VNode(res.props.children);
	}
	return res;
};
var isReactRenderable = (o) => r(b(o));
var render = (jsx, domEl) => {
	delete domEl.__k;
	Q(reactElement2VNode(jsx), domEl);
};
function styleInject$1(css, ref) {
	if (ref === void 0) ref = {};
	var insertAt = ref.insertAt;
	if (typeof document === "undefined") return;
	var head = document.head || document.getElementsByTagName("head")[0];
	var style = document.createElement("style");
	style.type = "text/css";
	if (insertAt === "top") {
		if (head.firstChild) head.insertBefore(style, head.firstChild);
		else head.appendChild(style);
	} else head.appendChild(style);
	if (style.styleSheet) style.styleSheet.cssText = css;
	else style.appendChild(document.createTextNode(css));
}
styleInject$1(".float-tooltip-kap {\n  position: absolute;\n  width: max-content; /* prevent shrinking near right edge */\n  max-width: max(50%, 150px);\n  padding: 3px 5px;\n  border-radius: 3px;\n  font: 12px sans-serif;\n  color: #eee;\n  background: rgba(0,0,0,0.6);\n  pointer-events: none;\n}\n");
var index$2 = index$4({
	props: {
		content: { default: false },
		offsetX: { triggerUpdate: false },
		offsetY: { triggerUpdate: false }
	},
	methods: { positionFromEvent(state, ev) {
		const domNode = state.container;
		const mousePos = pointer(ev, domNode);
		const canvasWidth = domNode.offsetWidth;
		const canvasHeight = domNode.offsetHeight;
		const translate = [state.offsetX === null || state.offsetX === void 0 ? `-${mousePos[0] / canvasWidth * 100}%` : typeof state.offsetX === "number" ? `calc(-50% + ${state.offsetX}px)` : state.offsetX, state.offsetY === null || state.offsetY === void 0 ? canvasHeight > 130 && canvasHeight - mousePos[1] < 100 ? "calc(-100% - 6px)" : "21px" : typeof state.offsetY === "number" ? state.offsetY < 0 ? `calc(-100% - ${Math.abs(state.offsetY)}px)` : `${state.offsetY}px` : state.offsetY];
		state.tooltipEl.style("left", mousePos[0] + "px").style("top", mousePos[1] + "px").style("transform", `translate(${translate.join(",")})`);
		return this;
	} },
	init: function(domNode, state, { style = {} } = {}) {
		const el = select(!!domNode && typeof domNode === "object" && !!domNode.node && typeof domNode.node === "function" ? domNode.node() : domNode);
		state.container = el.node();
		el.style("position") === "static" && el.style("position", "relative");
		state.tooltipEl = el.append("div").attr("class", "float-tooltip-kap");
		Object.entries(style).forEach(([k, v]) => state.tooltipEl.style(k, v));
		state.tooltipEl.style("left", "-10000px").style("display", "none");
		const evSuffix = `tooltip-${Math.round(Math.random() * 0xe8d4a51000)}`;
		state.mouseInside = false;
		el.on(`mousemove.${evSuffix}`, (ev) => {
			state.mouseInside = true;
			this.positionFromEvent(ev);
			state.content && state.tooltipEl.style("display", "inline");
		});
		el.on(`mouseover.${evSuffix}`, () => {
			state.mouseInside = true;
			state.content && state.tooltipEl.style("display", "inline");
		});
		el.on(`mouseout.${evSuffix}`, () => {
			state.mouseInside = false;
			state.tooltipEl.style("display", "none");
		});
	},
	update: function(state) {
		state.tooltipEl.style("display", !!state.content && state.mouseInside ? "inline" : "none");
		if (!state.content) state.tooltipEl.text("");
		else if (state.content instanceof HTMLElement) {
			state.tooltipEl.text("");
			state.tooltipEl.append(() => state.content);
		} else if (typeof state.content === "string") state.tooltipEl.html(state.content);
		else if (isReactRenderable(state.content)) {
			state.tooltipEl.text("");
			render(state.content, state.tooltipEl.node());
		} else {
			state.tooltipEl.style("display", "none");
			console.warn("Tooltip content is invalid, skipping.", state.content, state.content.toString());
		}
	}
});
// node_modules/d3-force-3d/src/center.js
function center_default(x, y, z) {
	var nodes, strength = 1;
	if (x == null) x = 0;
	if (y == null) y = 0;
	if (z == null) z = 0;
	function force() {
		var i, n = nodes.length, node, sx = 0, sy = 0, sz = 0;
		for (i = 0; i < n; ++i) node = nodes[i], sx += node.x || 0, sy += node.y || 0, sz += node.z || 0;
		for (sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, sz = (sz / n - z) * strength, i = 0; i < n; ++i) {
			node = nodes[i];
			if (sx) node.x -= sx;
			if (sy) node.y -= sy;
			if (sz) node.z -= sz;
		}
	}
	force.initialize = function(_) {
		nodes = _;
	};
	force.x = function(_) {
		return arguments.length ? (x = +_, force) : x;
	};
	force.y = function(_) {
		return arguments.length ? (y = +_, force) : y;
	};
	force.z = function(_) {
		return arguments.length ? (z = +_, force) : z;
	};
	force.strength = function(_) {
		return arguments.length ? (strength = +_, force) : strength;
	};
	return force;
}
// node_modules/d3-binarytree/src/add.js
function add_default$1(d) {
	const x = +this._x.call(null, d);
	return add$2(this.cover(x), x, d);
}
function add$2(tree, x, d) {
	if (isNaN(x)) return tree;
	var parent, node = tree._root, leaf = { data: d }, x0 = tree._x0, x1 = tree._x1, xm, xp, right, i, j;
	if (!node) return tree._root = leaf, tree;
	while (node.length) {
		if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
		else x1 = xm;
		if (parent = node, !(node = node[i = +right])) return parent[i] = leaf, tree;
	}
	xp = +tree._x.call(null, node.data);
	if (x === xp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
	do {
		parent = parent ? parent[i] = new Array(2) : tree._root = new Array(2);
		if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
		else x1 = xm;
	} while ((i = +right) === (j = +(xp >= xm)));
	return parent[j] = node, parent[i] = leaf, tree;
}
function addAll$2(data) {
	if (!Array.isArray(data)) data = Array.from(data);
	const n = data.length;
	const xz = new Float64Array(n);
	let x0 = Infinity, x1 = -Infinity;
	for (let i = 0, x; i < n; ++i) {
		if (isNaN(x = +this._x.call(null, data[i]))) continue;
		xz[i] = x;
		if (x < x0) x0 = x;
		if (x > x1) x1 = x;
	}
	if (x0 > x1) return this;
	this.cover(x0).cover(x1);
	for (let i = 0; i < n; ++i) add$2(this, xz[i], data[i]);
	return this;
}
// node_modules/d3-binarytree/src/cover.js
function cover_default$1(x) {
	if (isNaN(x = +x)) return this;
	var x0 = this._x0, x1 = this._x1;
	if (isNaN(x0)) x1 = (x0 = Math.floor(x)) + 1;
	else {
		var z = x1 - x0 || 1, node = this._root, parent, i;
		while (x0 > x || x >= x1) {
			i = +(x < x0);
			parent = new Array(2), parent[i] = node, node = parent, z *= 2;
			switch (i) {
				case 0:
					x1 = x0 + z;
					break;
				case 1: x0 = x1 - z;
			}
		}
		if (this._root && this._root.length) this._root = node;
	}
	this._x0 = x0;
	this._x1 = x1;
	return this;
}
// node_modules/d3-binarytree/src/data.js
function data_default$1() {
	var data = [];
	this.visit(function(node) {
		if (!node.length) do
			data.push(node.data);
		while (node = node.next);
	});
	return data;
}
// node_modules/d3-binarytree/src/extent.js
function extent_default$1(_) {
	return arguments.length ? this.cover(+_[0][0]).cover(+_[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
// node_modules/d3-binarytree/src/half.js
function half_default(node, x0, x1) {
	this.node = node;
	this.x0 = x0;
	this.x1 = x1;
}
// node_modules/d3-binarytree/src/find.js
function find_default$1(x, radius) {
	var data, x0 = this._x0, x1, x2, x3 = this._x1, halves = [], node = this._root, q, i;
	if (node) halves.push(new half_default(node, x0, x3));
	if (radius == null) radius = Infinity;
	else {
		x0 = x - radius;
		x3 = x + radius;
	}
	while (q = halves.pop()) {
		if (!(node = q.node) || (x1 = q.x0) > x3 || (x2 = q.x1) < x0) continue;
		if (node.length) {
			var xm = (x1 + x2) / 2;
			halves.push(new half_default(node[1], xm, x2), new half_default(node[0], x1, xm));
			if (i = +(x >= xm)) {
				q = halves[halves.length - 1];
				halves[halves.length - 1] = halves[halves.length - 1 - i];
				halves[halves.length - 1 - i] = q;
			}
		} else {
			var d = Math.abs(x - +this._x.call(null, node.data));
			if (d < radius) {
				radius = d;
				x0 = x - d;
				x3 = x + d;
				data = node.data;
			}
		}
	}
	return data;
}
// node_modules/d3-binarytree/src/remove.js
function remove_default$1(d) {
	if (isNaN(x = +this._x.call(null, d))) return this;
	var parent, node = this._root, retainer, previous, next, x0 = this._x0, x1 = this._x1, x, xm, right, i, j;
	if (!node) return this;
	if (node.length) while (true) {
		if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
		else x1 = xm;
		if (!(parent = node, node = node[i = +right])) return this;
		if (!node.length) break;
		if (parent[i + 1 & 1]) retainer = parent, j = i;
	}
	while (node.data !== d) if (!(previous = node, node = node.next)) return this;
	if (next = node.next) delete node.next;
	if (previous) return next ? previous.next = next : delete previous.next, this;
	if (!parent) return this._root = next, this;
	next ? parent[i] = next : delete parent[i];
	if ((node = parent[0] || parent[1]) && node === (parent[1] || parent[0]) && !node.length) {
		if (retainer) retainer[j] = node;
		else this._root = node;
	}
	return this;
}
function removeAll$2(data) {
	for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
	return this;
}
// node_modules/d3-binarytree/src/root.js
function root_default$1() {
	return this._root;
}
// node_modules/d3-binarytree/src/size.js
function size_default$1() {
	var size = 0;
	this.visit(function(node) {
		if (!node.length) do
			++size;
		while (node = node.next);
	});
	return size;
}
// node_modules/d3-binarytree/src/visit.js
function visit_default$1(callback) {
	var halves = [], q, node = this._root, child, x0, x1;
	if (node) halves.push(new half_default(node, this._x0, this._x1));
	while (q = halves.pop()) if (!callback(node = q.node, x0 = q.x0, x1 = q.x1) && node.length) {
		var xm = (x0 + x1) / 2;
		if (child = node[1]) halves.push(new half_default(child, xm, x1));
		if (child = node[0]) halves.push(new half_default(child, x0, xm));
	}
	return this;
}
// node_modules/d3-binarytree/src/visitAfter.js
function visitAfter_default$1(callback) {
	var halves = [], next = [], q;
	if (this._root) halves.push(new half_default(this._root, this._x0, this._x1));
	while (q = halves.pop()) {
		var node = q.node;
		if (node.length) {
			var child, x0 = q.x0, x1 = q.x1, xm = (x0 + x1) / 2;
			if (child = node[0]) halves.push(new half_default(child, x0, xm));
			if (child = node[1]) halves.push(new half_default(child, xm, x1));
		}
		next.push(q);
	}
	while (q = next.pop()) callback(q.node, q.x0, q.x1);
	return this;
}
// node_modules/d3-binarytree/src/x.js
function defaultX$2(d) {
	return d[0];
}
function x_default$1(_) {
	return arguments.length ? (this._x = _, this) : this._x;
}
// node_modules/d3-binarytree/src/binarytree.js
function binarytree(nodes, x) {
	var tree = new Binarytree(x == null ? defaultX$2 : x, NaN, NaN);
	return nodes == null ? tree : tree.addAll(nodes);
}
function Binarytree(x, x0, x1) {
	this._x = x;
	this._x0 = x0;
	this._x1 = x1;
	this._root = void 0;
}
function leaf_copy$2(leaf) {
	var copy = { data: leaf.data }, next = copy;
	while (leaf = leaf.next) next = next.next = { data: leaf.data };
	return copy;
}
var treeProto$2 = binarytree.prototype = Binarytree.prototype;
treeProto$2.copy = function() {
	var copy = new Binarytree(this._x, this._x0, this._x1), node = this._root, nodes, child;
	if (!node) return copy;
	if (!node.length) return copy._root = leaf_copy$2(node), copy;
	nodes = [{
		source: node,
		target: copy._root = new Array(2)
	}];
	while (node = nodes.pop()) for (var i = 0; i < 2; ++i) if (child = node.source[i]) {
		if (child.length) nodes.push({
			source: child,
			target: node.target[i] = new Array(2)
		});
		else node.target[i] = leaf_copy$2(child);
	}
	return copy;
};
treeProto$2.add = add_default$1;
treeProto$2.addAll = addAll$2;
treeProto$2.cover = cover_default$1;
treeProto$2.data = data_default$1;
treeProto$2.extent = extent_default$1;
treeProto$2.find = find_default$1;
treeProto$2.remove = remove_default$1;
treeProto$2.removeAll = removeAll$2;
treeProto$2.root = root_default$1;
treeProto$2.size = size_default$1;
treeProto$2.visit = visit_default$1;
treeProto$2.visitAfter = visitAfter_default$1;
treeProto$2.x = x_default$1;
// node_modules/d3-quadtree/dist/d3-quadtree.mjs
function tree_add(d) {
	const x = +this._x.call(null, d), y = +this._y.call(null, d);
	return add$1(this.cover(x, y), x, y, d);
}
function add$1(tree, x, y, d) {
	if (isNaN(x) || isNaN(y)) return tree;
	var parent, node = tree._root, leaf = { data: d }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
	if (!node) return tree._root = leaf, tree;
	while (node.length) {
		if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
		else x1 = xm;
		if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
		else y1 = ym;
		if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
	}
	xp = +tree._x.call(null, node.data);
	yp = +tree._y.call(null, node.data);
	if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
	do {
		parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
		if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
		else x1 = xm;
		if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
		else y1 = ym;
	} while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
	return parent[j] = node, parent[i] = leaf, tree;
}
function addAll$1(data) {
	if (!Array.isArray(data)) data = Array.from(data);
	const n = data.length;
	const xz = new Float64Array(n);
	const yz = new Float64Array(n);
	let x0 = Infinity, y0 = x0, x1 = -x0, y1 = x1;
	for (let i = 0, d, x, y; i < n; ++i) {
		if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) {
			xz[i] = NaN;
			continue;
		}
		xz[i] = x;
		yz[i] = y;
		if (x < x0) x0 = x;
		if (x > x1) x1 = x;
		if (y < y0) y0 = y;
		if (y > y1) y1 = y;
	}
	if (x0 > x1 || y0 > y1) return this;
	this.cover(x0, y0).cover(x1, y1);
	for (let i = 0; i < n; ++i) add$1(this, xz[i], yz[i], data[i]);
	return this;
}
function tree_cover(x, y) {
	if (isNaN(x = +x) || isNaN(y = +y)) return this;
	var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
	if (isNaN(x0)) {
		x1 = (x0 = Math.floor(x)) + 1;
		y1 = (y0 = Math.floor(y)) + 1;
	} else {
		var z = x1 - x0 || 1, node = this._root, parent, i;
		while (x0 > x || x >= x1 || y0 > y || y >= y1) {
			i = (y < y0) << 1 | x < x0;
			parent = new Array(4), parent[i] = node, node = parent, z *= 2;
			switch (i) {
				case 0:
					x1 = x0 + z, y1 = y0 + z;
					break;
				case 1:
					x0 = x1 - z, y1 = y0 + z;
					break;
				case 2:
					x1 = x0 + z, y0 = y1 - z;
					break;
				case 3: x0 = x1 - z, y0 = y1 - z;
			}
		}
		if (this._root && this._root.length) this._root = node;
	}
	this._x0 = x0;
	this._y0 = y0;
	this._x1 = x1;
	this._y1 = y1;
	return this;
}
function tree_data() {
	var data = [];
	this.visit(function(node) {
		if (!node.length) do
			data.push(node.data);
		while (node = node.next);
	});
	return data;
}
function tree_extent(_) {
	return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function Quad(node, x0, y0, x1, y1) {
	this.node = node;
	this.x0 = x0;
	this.y0 = y0;
	this.x1 = x1;
	this.y1 = y1;
}
function tree_find(x, y, radius) {
	var data, x0 = this._x0, y0 = this._y0, x1, y1, x2, y2, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q, i;
	if (node) quads.push(new Quad(node, x0, y0, x3, y3));
	if (radius == null) radius = Infinity;
	else {
		x0 = x - radius, y0 = y - radius;
		x3 = x + radius, y3 = y + radius;
		radius *= radius;
	}
	while (q = quads.pop()) {
		if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;
		if (node.length) {
			var xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
			quads.push(new Quad(node[3], xm, ym, x2, y2), new Quad(node[2], x1, ym, xm, y2), new Quad(node[1], xm, y1, x2, ym), new Quad(node[0], x1, y1, xm, ym));
			if (i = (y >= ym) << 1 | x >= xm) {
				q = quads[quads.length - 1];
				quads[quads.length - 1] = quads[quads.length - 1 - i];
				quads[quads.length - 1 - i] = q;
			}
		} else {
			var dx = x - +this._x.call(null, node.data), dy = y - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
			if (d2 < radius) {
				var d = Math.sqrt(radius = d2);
				x0 = x - d, y0 = y - d;
				x3 = x + d, y3 = y + d;
				data = node.data;
			}
		}
	}
	return data;
}
function tree_remove(d) {
	if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this;
	var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x, y, xm, ym, right, bottom, i, j;
	if (!node) return this;
	if (node.length) while (true) {
		if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
		else x1 = xm;
		if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
		else y1 = ym;
		if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
		if (!node.length) break;
		if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
	}
	while (node.data !== d) if (!(previous = node, node = node.next)) return this;
	if (next = node.next) delete node.next;
	if (previous) return next ? previous.next = next : delete previous.next, this;
	if (!parent) return this._root = next, this;
	next ? parent[i] = next : delete parent[i];
	if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
		if (retainer) retainer[j] = node;
		else this._root = node;
	}
	return this;
}
function removeAll$1(data) {
	for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
	return this;
}
function tree_root() {
	return this._root;
}
function tree_size() {
	var size = 0;
	this.visit(function(node) {
		if (!node.length) do
			++size;
		while (node = node.next);
	});
	return size;
}
function tree_visit(callback) {
	var quads = [], q, node = this._root, child, x0, y0, x1, y1;
	if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
	while (q = quads.pop()) if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
		var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
		if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
		if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
		if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
		if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	}
	return this;
}
function tree_visitAfter(callback) {
	var quads = [], next = [], q;
	if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
	while (q = quads.pop()) {
		var node = q.node;
		if (node.length) {
			var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
			if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
			if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
			if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
			if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
		}
		next.push(q);
	}
	while (q = next.pop()) callback(q.node, q.x0, q.y0, q.x1, q.y1);
	return this;
}
function defaultX$1(d) {
	return d[0];
}
function tree_x(_) {
	return arguments.length ? (this._x = _, this) : this._x;
}
function defaultY$1(d) {
	return d[1];
}
function tree_y(_) {
	return arguments.length ? (this._y = _, this) : this._y;
}
function quadtree(nodes, x, y) {
	var tree = new Quadtree(x == null ? defaultX$1 : x, y == null ? defaultY$1 : y, NaN, NaN, NaN, NaN);
	return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x, y, x0, y0, x1, y1) {
	this._x = x;
	this._y = y;
	this._x0 = x0;
	this._y0 = y0;
	this._x1 = x1;
	this._y1 = y1;
	this._root = void 0;
}
function leaf_copy$1(leaf) {
	var copy = { data: leaf.data }, next = copy;
	while (leaf = leaf.next) next = next.next = { data: leaf.data };
	return copy;
}
var treeProto$1 = quadtree.prototype = Quadtree.prototype;
treeProto$1.copy = function() {
	var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
	if (!node) return copy;
	if (!node.length) return copy._root = leaf_copy$1(node), copy;
	nodes = [{
		source: node,
		target: copy._root = new Array(4)
	}];
	while (node = nodes.pop()) for (var i = 0; i < 4; ++i) if (child = node.source[i]) {
		if (child.length) nodes.push({
			source: child,
			target: node.target[i] = new Array(4)
		});
		else node.target[i] = leaf_copy$1(child);
	}
	return copy;
};
treeProto$1.add = tree_add;
treeProto$1.addAll = addAll$1;
treeProto$1.cover = tree_cover;
treeProto$1.data = tree_data;
treeProto$1.extent = tree_extent;
treeProto$1.find = tree_find;
treeProto$1.remove = tree_remove;
treeProto$1.removeAll = removeAll$1;
treeProto$1.root = tree_root;
treeProto$1.size = tree_size;
treeProto$1.visit = tree_visit;
treeProto$1.visitAfter = tree_visitAfter;
treeProto$1.x = tree_x;
treeProto$1.y = tree_y;
// node_modules/d3-octree/src/add.js
function add_default(d) {
	const x = +this._x.call(null, d), y = +this._y.call(null, d), z = +this._z.call(null, d);
	return add(this.cover(x, y, z), x, y, z, d);
}
function add(tree, x, y, z, d) {
	if (isNaN(x) || isNaN(y) || isNaN(z)) return tree;
	var parent, node = tree._root, leaf = { data: d }, x0 = tree._x0, y0 = tree._y0, z0 = tree._z0, x1 = tree._x1, y1 = tree._y1, z1 = tree._z1, xm, ym, zm, xp, yp, zp, right, bottom, deep, i, j;
	if (!node) return tree._root = leaf, tree;
	while (node.length) {
		if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
		else x1 = xm;
		if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
		else y1 = ym;
		if (deep = z >= (zm = (z0 + z1) / 2)) z0 = zm;
		else z1 = zm;
		if (parent = node, !(node = node[i = deep << 2 | bottom << 1 | right])) return parent[i] = leaf, tree;
	}
	xp = +tree._x.call(null, node.data);
	yp = +tree._y.call(null, node.data);
	zp = +tree._z.call(null, node.data);
	if (x === xp && y === yp && z === zp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
	do {
		parent = parent ? parent[i] = new Array(8) : tree._root = new Array(8);
		if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
		else x1 = xm;
		if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
		else y1 = ym;
		if (deep = z >= (zm = (z0 + z1) / 2)) z0 = zm;
		else z1 = zm;
	} while ((i = deep << 2 | bottom << 1 | right) === (j = (zp >= zm) << 2 | (yp >= ym) << 1 | xp >= xm));
	return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
	if (!Array.isArray(data)) data = Array.from(data);
	const n = data.length;
	const xz = new Float64Array(n);
	const yz = new Float64Array(n);
	const zz = new Float64Array(n);
	let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
	for (let i = 0, d, x, y, z; i < n; ++i) {
		if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d)) || isNaN(z = +this._z.call(null, d))) continue;
		xz[i] = x;
		yz[i] = y;
		zz[i] = z;
		if (x < x0) x0 = x;
		if (x > x1) x1 = x;
		if (y < y0) y0 = y;
		if (y > y1) y1 = y;
		if (z < z0) z0 = z;
		if (z > z1) z1 = z;
	}
	if (x0 > x1 || y0 > y1 || z0 > z1) return this;
	this.cover(x0, y0, z0).cover(x1, y1, z1);
	for (let i = 0; i < n; ++i) add(this, xz[i], yz[i], zz[i], data[i]);
	return this;
}
// node_modules/d3-octree/src/cover.js
function cover_default(x, y, z) {
	if (isNaN(x = +x) || isNaN(y = +y) || isNaN(z = +z)) return this;
	var x0 = this._x0, y0 = this._y0, z0 = this._z0, x1 = this._x1, y1 = this._y1, z1 = this._z1;
	if (isNaN(x0)) {
		x1 = (x0 = Math.floor(x)) + 1;
		y1 = (y0 = Math.floor(y)) + 1;
		z1 = (z0 = Math.floor(z)) + 1;
	} else {
		var t = x1 - x0 || 1, node = this._root, parent, i;
		while (x0 > x || x >= x1 || y0 > y || y >= y1 || z0 > z || z >= z1) {
			i = (z < z0) << 2 | (y < y0) << 1 | x < x0;
			parent = new Array(8), parent[i] = node, node = parent, t *= 2;
			switch (i) {
				case 0:
					x1 = x0 + t, y1 = y0 + t, z1 = z0 + t;
					break;
				case 1:
					x0 = x1 - t, y1 = y0 + t, z1 = z0 + t;
					break;
				case 2:
					x1 = x0 + t, y0 = y1 - t, z1 = z0 + t;
					break;
				case 3:
					x0 = x1 - t, y0 = y1 - t, z1 = z0 + t;
					break;
				case 4:
					x1 = x0 + t, y1 = y0 + t, z0 = z1 - t;
					break;
				case 5:
					x0 = x1 - t, y1 = y0 + t, z0 = z1 - t;
					break;
				case 6:
					x1 = x0 + t, y0 = y1 - t, z0 = z1 - t;
					break;
				case 7: x0 = x1 - t, y0 = y1 - t, z0 = z1 - t;
			}
		}
		if (this._root && this._root.length) this._root = node;
	}
	this._x0 = x0;
	this._y0 = y0;
	this._z0 = z0;
	this._x1 = x1;
	this._y1 = y1;
	this._z1 = z1;
	return this;
}
// node_modules/d3-octree/src/data.js
function data_default() {
	var data = [];
	this.visit(function(node) {
		if (!node.length) do
			data.push(node.data);
		while (node = node.next);
	});
	return data;
}
// node_modules/d3-octree/src/extent.js
function extent_default(_) {
	return arguments.length ? this.cover(+_[0][0], +_[0][1], +_[0][2]).cover(+_[1][0], +_[1][1], +_[1][2]) : isNaN(this._x0) ? void 0 : [[
		this._x0,
		this._y0,
		this._z0
	], [
		this._x1,
		this._y1,
		this._z1
	]];
}
// node_modules/d3-octree/src/octant.js
function octant_default(node, x0, y0, z0, x1, y1, z1) {
	this.node = node;
	this.x0 = x0;
	this.y0 = y0;
	this.z0 = z0;
	this.x1 = x1;
	this.y1 = y1;
	this.z1 = z1;
}
// node_modules/d3-octree/src/find.js
function find_default(x, y, z, radius) {
	var data, x0 = this._x0, y0 = this._y0, z0 = this._z0, x1, y1, z1, x2, y2, z2, x3 = this._x1, y3 = this._y1, z3 = this._z1, octs = [], node = this._root, q, i;
	if (node) octs.push(new octant_default(node, x0, y0, z0, x3, y3, z3));
	if (radius == null) radius = Infinity;
	else {
		x0 = x - radius, y0 = y - radius, z0 = z - radius;
		x3 = x + radius, y3 = y + radius, z3 = z + radius;
		radius *= radius;
	}
	while (q = octs.pop()) {
		if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (z1 = q.z0) > z3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0 || (z2 = q.z1) < z0) continue;
		if (node.length) {
			var xm = (x1 + x2) / 2, ym = (y1 + y2) / 2, zm = (z1 + z2) / 2;
			octs.push(new octant_default(node[7], xm, ym, zm, x2, y2, z2), new octant_default(node[6], x1, ym, zm, xm, y2, z2), new octant_default(node[5], xm, y1, zm, x2, ym, z2), new octant_default(node[4], x1, y1, zm, xm, ym, z2), new octant_default(node[3], xm, ym, z1, x2, y2, zm), new octant_default(node[2], x1, ym, z1, xm, y2, zm), new octant_default(node[1], xm, y1, z1, x2, ym, zm), new octant_default(node[0], x1, y1, z1, xm, ym, zm));
			if (i = (z >= zm) << 2 | (y >= ym) << 1 | x >= xm) {
				q = octs[octs.length - 1];
				octs[octs.length - 1] = octs[octs.length - 1 - i];
				octs[octs.length - 1 - i] = q;
			}
		} else {
			var dx = x - +this._x.call(null, node.data), dy = y - +this._y.call(null, node.data), dz = z - +this._z.call(null, node.data), d2 = dx * dx + dy * dy + dz * dz;
			if (d2 < radius) {
				var d = Math.sqrt(radius = d2);
				x0 = x - d, y0 = y - d, z0 = z - d;
				x3 = x + d, y3 = y + d, z3 = z + d;
				data = node.data;
			}
		}
	}
	return data;
}
// node_modules/d3-octree/src/findAll.js
var distance = (x1, y1, z1, x2, y2, z2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);
function findAllWithinRadius(x, y, z, radius) {
	const result = [];
	const xMin = x - radius;
	const yMin = y - radius;
	const zMin = z - radius;
	const xMax = x + radius;
	const yMax = y + radius;
	const zMax = z + radius;
	this.visit((node, x1, y1, z1, x2, y2, z2) => {
		if (!node.length) do {
			const d = node.data;
			if (distance(x, y, z, this._x(d), this._y(d), this._z(d)) <= radius) result.push(d);
		} while (node = node.next);
		return x1 > xMax || y1 > yMax || z1 > zMax || x2 < xMin || y2 < yMin || z2 < zMin;
	});
	return result;
}
// node_modules/d3-octree/src/remove.js
function remove_default(d) {
	if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d)) || isNaN(z = +this._z.call(null, d))) return this;
	var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, z0 = this._z0, x1 = this._x1, y1 = this._y1, z1 = this._z1, x, y, z, xm, ym, zm, right, bottom, deep, i, j;
	if (!node) return this;
	if (node.length) while (true) {
		if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
		else x1 = xm;
		if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
		else y1 = ym;
		if (deep = z >= (zm = (z0 + z1) / 2)) z0 = zm;
		else z1 = zm;
		if (!(parent = node, node = node[i = deep << 2 | bottom << 1 | right])) return this;
		if (!node.length) break;
		if (parent[i + 1 & 7] || parent[i + 2 & 7] || parent[i + 3 & 7] || parent[i + 4 & 7] || parent[i + 5 & 7] || parent[i + 6 & 7] || parent[i + 7 & 7]) retainer = parent, j = i;
	}
	while (node.data !== d) if (!(previous = node, node = node.next)) return this;
	if (next = node.next) delete node.next;
	if (previous) return next ? previous.next = next : delete previous.next, this;
	if (!parent) return this._root = next, this;
	next ? parent[i] = next : delete parent[i];
	if ((node = parent[0] || parent[1] || parent[2] || parent[3] || parent[4] || parent[5] || parent[6] || parent[7]) && node === (parent[7] || parent[6] || parent[5] || parent[4] || parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
		if (retainer) retainer[j] = node;
		else this._root = node;
	}
	return this;
}
function removeAll(data) {
	for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
	return this;
}
// node_modules/d3-octree/src/root.js
function root_default() {
	return this._root;
}
// node_modules/d3-octree/src/size.js
function size_default() {
	var size = 0;
	this.visit(function(node) {
		if (!node.length) do
			++size;
		while (node = node.next);
	});
	return size;
}
// node_modules/d3-octree/src/visit.js
function visit_default(callback) {
	var octs = [], q, node = this._root, child, x0, y0, z0, x1, y1, z1;
	if (node) octs.push(new octant_default(node, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
	while (q = octs.pop()) if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, z0 = q.z0, x1 = q.x1, y1 = q.y1, z1 = q.z1) && node.length) {
		var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
		if (child = node[7]) octs.push(new octant_default(child, xm, ym, zm, x1, y1, z1));
		if (child = node[6]) octs.push(new octant_default(child, x0, ym, zm, xm, y1, z1));
		if (child = node[5]) octs.push(new octant_default(child, xm, y0, zm, x1, ym, z1));
		if (child = node[4]) octs.push(new octant_default(child, x0, y0, zm, xm, ym, z1));
		if (child = node[3]) octs.push(new octant_default(child, xm, ym, z0, x1, y1, zm));
		if (child = node[2]) octs.push(new octant_default(child, x0, ym, z0, xm, y1, zm));
		if (child = node[1]) octs.push(new octant_default(child, xm, y0, z0, x1, ym, zm));
		if (child = node[0]) octs.push(new octant_default(child, x0, y0, z0, xm, ym, zm));
	}
	return this;
}
// node_modules/d3-octree/src/visitAfter.js
function visitAfter_default(callback) {
	var octs = [], next = [], q;
	if (this._root) octs.push(new octant_default(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
	while (q = octs.pop()) {
		var node = q.node;
		if (node.length) {
			var child, x0 = q.x0, y0 = q.y0, z0 = q.z0, x1 = q.x1, y1 = q.y1, z1 = q.z1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
			if (child = node[0]) octs.push(new octant_default(child, x0, y0, z0, xm, ym, zm));
			if (child = node[1]) octs.push(new octant_default(child, xm, y0, z0, x1, ym, zm));
			if (child = node[2]) octs.push(new octant_default(child, x0, ym, z0, xm, y1, zm));
			if (child = node[3]) octs.push(new octant_default(child, xm, ym, z0, x1, y1, zm));
			if (child = node[4]) octs.push(new octant_default(child, x0, y0, zm, xm, ym, z1));
			if (child = node[5]) octs.push(new octant_default(child, xm, y0, zm, x1, ym, z1));
			if (child = node[6]) octs.push(new octant_default(child, x0, ym, zm, xm, y1, z1));
			if (child = node[7]) octs.push(new octant_default(child, xm, ym, zm, x1, y1, z1));
		}
		next.push(q);
	}
	while (q = next.pop()) callback(q.node, q.x0, q.y0, q.z0, q.x1, q.y1, q.z1);
	return this;
}
// node_modules/d3-octree/src/x.js
function defaultX(d) {
	return d[0];
}
function x_default(_) {
	return arguments.length ? (this._x = _, this) : this._x;
}
// node_modules/d3-octree/src/y.js
function defaultY(d) {
	return d[1];
}
function y_default(_) {
	return arguments.length ? (this._y = _, this) : this._y;
}
// node_modules/d3-octree/src/z.js
function defaultZ(d) {
	return d[2];
}
function z_default(_) {
	return arguments.length ? (this._z = _, this) : this._z;
}
// node_modules/d3-octree/src/octree.js
function octree(nodes, x, y, z) {
	var tree = new Octree(x == null ? defaultX : x, y == null ? defaultY : y, z == null ? defaultZ : z, NaN, NaN, NaN, NaN, NaN, NaN);
	return nodes == null ? tree : tree.addAll(nodes);
}
function Octree(x, y, z, x0, y0, z0, x1, y1, z1) {
	this._x = x;
	this._y = y;
	this._z = z;
	this._x0 = x0;
	this._y0 = y0;
	this._z0 = z0;
	this._x1 = x1;
	this._y1 = y1;
	this._z1 = z1;
	this._root = void 0;
}
function leaf_copy(leaf) {
	var copy = { data: leaf.data }, next = copy;
	while (leaf = leaf.next) next = next.next = { data: leaf.data };
	return copy;
}
var treeProto = octree.prototype = Octree.prototype;
treeProto.copy = function() {
	var copy = new Octree(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), node = this._root, nodes, child;
	if (!node) return copy;
	if (!node.length) return copy._root = leaf_copy(node), copy;
	nodes = [{
		source: node,
		target: copy._root = new Array(8)
	}];
	while (node = nodes.pop()) for (var i = 0; i < 8; ++i) if (child = node.source[i]) {
		if (child.length) nodes.push({
			source: child,
			target: node.target[i] = new Array(8)
		});
		else node.target[i] = leaf_copy(child);
	}
	return copy;
};
treeProto.add = add_default;
treeProto.addAll = addAll;
treeProto.cover = cover_default;
treeProto.data = data_default;
treeProto.extent = extent_default;
treeProto.find = find_default;
treeProto.findAllWithinRadius = findAllWithinRadius;
treeProto.remove = remove_default;
treeProto.removeAll = removeAll;
treeProto.root = root_default;
treeProto.size = size_default;
treeProto.visit = visit_default;
treeProto.visitAfter = visitAfter_default;
treeProto.x = x_default;
treeProto.y = y_default;
treeProto.z = z_default;
// node_modules/d3-force-3d/src/constant.js
function constant_default(x) {
	return function() {
		return x;
	};
}
// node_modules/d3-force-3d/src/jiggle.js
function jiggle_default(random) {
	return (random() - .5) * 1e-6;
}
// node_modules/d3-force-3d/src/link.js
function index$1(d) {
	return d.index;
}
function find(nodeById, nodeId) {
	var node = nodeById.get(nodeId);
	if (!node) throw new Error("node not found: " + nodeId);
	return node;
}
function link_default(links) {
	var id = index$1, strength = defaultStrength, strengths, distance = constant_default(30), distances, nodes, nDim, count, bias, random, iterations = 1;
	if (links == null) links = [];
	function defaultStrength(link) {
		return 1 / Math.min(count[link.source.index], count[link.target.index]);
	}
	function force(alpha) {
		for (var k = 0, n = links.length; k < iterations; ++k) for (var i = 0, link, source, target, x = 0, y = 0, z = 0, l, b; i < n; ++i) {
			link = links[i], source = link.source, target = link.target;
			x = target.x + target.vx - source.x - source.vx || jiggle_default(random);
			if (nDim > 1) y = target.y + target.vy - source.y - source.vy || jiggle_default(random);
			if (nDim > 2) z = target.z + target.vz - source.z - source.vz || jiggle_default(random);
			l = Math.sqrt(x * x + y * y + z * z);
			l = (l - distances[i]) / l * alpha * strengths[i];
			x *= l, y *= l, z *= l;
			target.vx -= x * (b = bias[i]);
			if (nDim > 1) target.vy -= y * b;
			if (nDim > 2) target.vz -= z * b;
			source.vx += x * (b = 1 - b);
			if (nDim > 1) source.vy += y * b;
			if (nDim > 2) source.vz += z * b;
		}
	}
	function initialize() {
		if (!nodes) return;
		var i, n = nodes.length, m = links.length, nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])), link;
		for (i = 0, count = new Array(n); i < m; ++i) {
			link = links[i], link.index = i;
			if (typeof link.source !== "object") link.source = find(nodeById, link.source);
			if (typeof link.target !== "object") link.target = find(nodeById, link.target);
			count[link.source.index] = (count[link.source.index] || 0) + 1;
			count[link.target.index] = (count[link.target.index] || 0) + 1;
		}
		for (i = 0, bias = new Array(m); i < m; ++i) link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
		strengths = new Array(m), initializeStrength();
		distances = new Array(m), initializeDistance();
	}
	function initializeStrength() {
		if (!nodes) return;
		for (var i = 0, n = links.length; i < n; ++i) strengths[i] = +strength(links[i], i, links);
	}
	function initializeDistance() {
		if (!nodes) return;
		for (var i = 0, n = links.length; i < n; ++i) distances[i] = +distance(links[i], i, links);
	}
	force.initialize = function(_nodes, ...args) {
		nodes = _nodes;
		random = args.find((arg) => typeof arg === "function") || Math.random;
		nDim = args.find((arg) => [
			1,
			2,
			3
		].includes(arg)) || 2;
		initialize();
	};
	force.links = function(_) {
		return arguments.length ? (links = _, initialize(), force) : links;
	};
	force.id = function(_) {
		return arguments.length ? (id = _, force) : id;
	};
	force.iterations = function(_) {
		return arguments.length ? (iterations = +_, force) : iterations;
	};
	force.strength = function(_) {
		return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default(+_), initializeStrength(), force) : strength;
	};
	force.distance = function(_) {
		return arguments.length ? (distance = typeof _ === "function" ? _ : constant_default(+_), initializeDistance(), force) : distance;
	};
	return force;
}
// node_modules/d3-force-3d/src/lcg.js
var a = 1664525;
var c$2 = 1013904223;
var m = 4294967296;
function lcg_default() {
	let s = 1;
	return () => (s = (a * s + c$2) % m) / m;
}
// node_modules/d3-force-3d/src/simulation.js
var MAX_DIMENSIONS = 3;
function x(d) {
	return d.x;
}
function y(d) {
	return d.y;
}
function z(d) {
	return d.z;
}
var initialRadius = 10;
var initialAngleRoll = Math.PI * (3 - Math.sqrt(5));
var initialAngleYaw = Math.PI * 20 / (9 + Math.sqrt(221));
function simulation_default(nodes, numDimensions) {
	numDimensions = numDimensions || 2;
	var nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(numDimensions))), simulation, alpha = 1, alphaMin = .001, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = .6, forces = /* @__PURE__ */ new Map(), stepper = timer(step), event = dispatch("tick", "end"), random = lcg_default();
	if (nodes == null) nodes = [];
	function step() {
		tick();
		event.call("tick", simulation);
		if (alpha < alphaMin) {
			stepper.stop();
			event.call("end", simulation);
		}
	}
	function tick(iterations) {
		var i, n = nodes.length, node;
		if (iterations === void 0) iterations = 1;
		for (var k = 0; k < iterations; ++k) {
			alpha += (alphaTarget - alpha) * alphaDecay;
			forces.forEach(function(force) {
				force(alpha);
			});
			for (i = 0; i < n; ++i) {
				node = nodes[i];
				if (node.fx == null) node.x += node.vx *= velocityDecay;
				else node.x = node.fx, node.vx = 0;
				if (nDim > 1) {
					if (node.fy == null) node.y += node.vy *= velocityDecay;
					else node.y = node.fy, node.vy = 0;
				}
				if (nDim > 2) {
					if (node.fz == null) node.z += node.vz *= velocityDecay;
					else node.z = node.fz, node.vz = 0;
				}
			}
		}
		return simulation;
	}
	function initializeNodes() {
		for (var i = 0, n = nodes.length, node; i < n; ++i) {
			node = nodes[i], node.index = i;
			if (node.fx != null) node.x = node.fx;
			if (node.fy != null) node.y = node.fy;
			if (node.fz != null) node.z = node.fz;
			if (isNaN(node.x) || nDim > 1 && isNaN(node.y) || nDim > 2 && isNaN(node.z)) {
				var radius = initialRadius * (nDim > 2 ? Math.cbrt(.5 + i) : nDim > 1 ? Math.sqrt(.5 + i) : i), rollAngle = i * initialAngleRoll, yawAngle = i * initialAngleYaw;
				if (nDim === 1) node.x = radius;
				else if (nDim === 2) {
					node.x = radius * Math.cos(rollAngle);
					node.y = radius * Math.sin(rollAngle);
				} else {
					node.x = radius * Math.sin(rollAngle) * Math.cos(yawAngle);
					node.y = radius * Math.cos(rollAngle);
					node.z = radius * Math.sin(rollAngle) * Math.sin(yawAngle);
				}
			}
			if (isNaN(node.vx) || nDim > 1 && isNaN(node.vy) || nDim > 2 && isNaN(node.vz)) {
				node.vx = 0;
				if (nDim > 1) node.vy = 0;
				if (nDim > 2) node.vz = 0;
			}
		}
	}
	function initializeForce(force) {
		if (force.initialize) force.initialize(nodes, random, nDim);
		return force;
	}
	initializeNodes();
	return simulation = {
		tick,
		restart: function() {
			return stepper.restart(step), simulation;
		},
		stop: function() {
			return stepper.stop(), simulation;
		},
		numDimensions: function(_) {
			return arguments.length ? (nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(_))), forces.forEach(initializeForce), simulation) : nDim;
		},
		nodes: function(_) {
			return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
		},
		alpha: function(_) {
			return arguments.length ? (alpha = +_, simulation) : alpha;
		},
		alphaMin: function(_) {
			return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
		},
		alphaDecay: function(_) {
			return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
		},
		alphaTarget: function(_) {
			return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
		},
		velocityDecay: function(_) {
			return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
		},
		randomSource: function(_) {
			return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
		},
		force: function(name, _) {
			return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
		},
		find: function() {
			var args = Array.prototype.slice.call(arguments);
			var x = args.shift() || 0, y = (nDim > 1 ? args.shift() : null) || 0, z = (nDim > 2 ? args.shift() : null) || 0, radius = args.shift() || Infinity;
			var i = 0, n = nodes.length, dx, dy, dz, d2, node, closest;
			radius *= radius;
			for (i = 0; i < n; ++i) {
				node = nodes[i];
				dx = x - node.x;
				dy = y - (node.y || 0);
				dz = z - (node.z || 0);
				d2 = dx * dx + dy * dy + dz * dz;
				if (d2 < radius) closest = node, radius = d2;
			}
			return closest;
		},
		on: function(name, _) {
			return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
		}
	};
}
// node_modules/d3-force-3d/src/manyBody.js
function manyBody_default() {
	var nodes, nDim, node, random, alpha, strength = constant_default(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = .81;
	function force(_) {
		var i, n = nodes.length, tree = (nDim === 1 ? binarytree(nodes, x) : nDim === 2 ? quadtree(nodes, x, y) : nDim === 3 ? octree(nodes, x, y, z) : null).visitAfter(accumulate);
		for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
	}
	function initialize() {
		if (!nodes) return;
		var i, n = nodes.length, node;
		strengths = new Array(n);
		for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
	}
	function accumulate(treeNode) {
		var strength = 0, q, c, weight = 0, x, y, z, i;
		var numChildren = treeNode.length;
		if (numChildren) {
			for (x = y = z = i = 0; i < numChildren; ++i) if ((q = treeNode[i]) && (c = Math.abs(q.value))) strength += q.value, weight += c, x += c * (q.x || 0), y += c * (q.y || 0), z += c * (q.z || 0);
			strength *= Math.sqrt(4 / numChildren);
			treeNode.x = x / weight;
			if (nDim > 1) treeNode.y = y / weight;
			if (nDim > 2) treeNode.z = z / weight;
		} else {
			q = treeNode;
			q.x = q.data.x;
			if (nDim > 1) q.y = q.data.y;
			if (nDim > 2) q.z = q.data.z;
			do
				strength += strengths[q.data.index];
			while (q = q.next);
		}
		treeNode.value = strength;
	}
	function apply(treeNode, x1, arg1, arg2, arg3) {
		if (!treeNode.value) return true;
		var x2 = [
			arg1,
			arg2,
			arg3
		][nDim - 1];
		var x = treeNode.x - node.x, y = nDim > 1 ? treeNode.y - node.y : 0, z = nDim > 2 ? treeNode.z - node.z : 0, w = x2 - x1, l = x * x + y * y + z * z;
		if (w * w / theta2 < l) {
			if (l < distanceMax2) {
				if (x === 0) x = jiggle_default(random), l += x * x;
				if (nDim > 1 && y === 0) y = jiggle_default(random), l += y * y;
				if (nDim > 2 && z === 0) z = jiggle_default(random), l += z * z;
				if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
				node.vx += x * treeNode.value * alpha / l;
				if (nDim > 1) node.vy += y * treeNode.value * alpha / l;
				if (nDim > 2) node.vz += z * treeNode.value * alpha / l;
			}
			return true;
		} else if (treeNode.length || l >= distanceMax2) return;
		if (treeNode.data !== node || treeNode.next) {
			if (x === 0) x = jiggle_default(random), l += x * x;
			if (nDim > 1 && y === 0) y = jiggle_default(random), l += y * y;
			if (nDim > 2 && z === 0) z = jiggle_default(random), l += z * z;
			if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
		}
		do
			if (treeNode.data !== node) {
				w = strengths[treeNode.data.index] * alpha / l;
				node.vx += x * w;
				if (nDim > 1) node.vy += y * w;
				if (nDim > 2) node.vz += z * w;
			}
		while (treeNode = treeNode.next);
	}
	force.initialize = function(_nodes, ...args) {
		nodes = _nodes;
		random = args.find((arg) => typeof arg === "function") || Math.random;
		nDim = args.find((arg) => [
			1,
			2,
			3
		].includes(arg)) || 2;
		initialize();
	};
	force.strength = function(_) {
		return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default(+_), initialize(), force) : strength;
	};
	force.distanceMin = function(_) {
		return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
	};
	force.distanceMax = function(_) {
		return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
	};
	force.theta = function(_) {
		return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
	};
	return force;
}
// node_modules/d3-force-3d/src/radial.js
function radial_default(radius, x, y, z) {
	var nodes, nDim, strength = constant_default(.1), strengths, radiuses;
	if (typeof radius !== "function") radius = constant_default(+radius);
	if (x == null) x = 0;
	if (y == null) y = 0;
	if (z == null) z = 0;
	function force(alpha) {
		for (var i = 0, n = nodes.length; i < n; ++i) {
			var node = nodes[i], dx = node.x - x || 1e-6, dy = (node.y || 0) - y || 1e-6, dz = (node.z || 0) - z || 1e-6, r = Math.sqrt(dx * dx + dy * dy + dz * dz), k = (radiuses[i] - r) * strengths[i] * alpha / r;
			node.vx += dx * k;
			if (nDim > 1) node.vy += dy * k;
			if (nDim > 2) node.vz += dz * k;
		}
	}
	function initialize() {
		if (!nodes) return;
		var i, n = nodes.length;
		strengths = new Array(n);
		radiuses = new Array(n);
		for (i = 0; i < n; ++i) {
			radiuses[i] = +radius(nodes[i], i, nodes);
			strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
		}
	}
	force.initialize = function(initNodes, ...args) {
		nodes = initNodes;
		nDim = args.find((arg) => [
			1,
			2,
			3
		].includes(arg)) || 2;
		initialize();
	};
	force.strength = function(_) {
		return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default(+_), initialize(), force) : strength;
	};
	force.radius = function(_) {
		return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default(+_), initialize(), force) : radius;
	};
	force.x = function(_) {
		return arguments.length ? (x = +_, force) : x;
	};
	force.y = function(_) {
		return arguments.length ? (y = +_, force) : y;
	};
	force.z = function(_) {
		return arguments.length ? (z = +_, force) : z;
	};
	return force;
}
// node_modules/bezier-js/src/utils.js
var { abs: abs$1, cos: cos$1, sin: sin$1, acos: acos$1, atan2, sqrt: sqrt$1, pow } = Math;
function crt(v) {
	return v < 0 ? -pow(-v, 1 / 3) : pow(v, 1 / 3);
}
var pi$1 = Math.PI;
var tau = 2 * pi$1;
var quart = pi$1 / 2;
var epsilon = 1e-6;
var nMax = Number.MAX_SAFE_INTEGER || 9007199254740991;
var nMin = Number.MIN_SAFE_INTEGER || -9007199254740991;
var ZERO = {
	x: 0,
	y: 0,
	z: 0
};
var utils = {
	Tvalues: [
		-.06405689286260563,
		.06405689286260563,
		-.1911188674736163,
		.1911188674736163,
		-.3150426796961634,
		.3150426796961634,
		-.4337935076260451,
		.4337935076260451,
		-.5454214713888396,
		.5454214713888396,
		-.6480936519369755,
		.6480936519369755,
		-.7401241915785544,
		.7401241915785544,
		-.820001985973903,
		.820001985973903,
		-.8864155270044011,
		.8864155270044011,
		-.9382745520027328,
		.9382745520027328,
		-.9747285559713095,
		.9747285559713095,
		-.9951872199970213,
		.9951872199970213
	],
	Cvalues: [
		.12793819534675216,
		.12793819534675216,
		.1258374563468283,
		.1258374563468283,
		.12167047292780339,
		.12167047292780339,
		.1155056680537256,
		.1155056680537256,
		.10744427011596563,
		.10744427011596563,
		.09761865210411388,
		.09761865210411388,
		.08619016153195327,
		.08619016153195327,
		.0733464814110803,
		.0733464814110803,
		.05929858491543678,
		.05929858491543678,
		.04427743881741981,
		.04427743881741981,
		.028531388628933663,
		.028531388628933663,
		.0123412297999872,
		.0123412297999872
	],
	arcfn: function(t, derivativeFn) {
		const d = derivativeFn(t);
		let l = d.x * d.x + d.y * d.y;
		if (typeof d.z !== "undefined") l += d.z * d.z;
		return sqrt$1(l);
	},
	compute: function(t, points, _3d) {
		if (t === 0) {
			points[0].t = 0;
			return points[0];
		}
		const order = points.length - 1;
		if (t === 1) {
			points[order].t = 1;
			return points[order];
		}
		const mt = 1 - t;
		let p = points;
		if (order === 0) {
			points[0].t = t;
			return points[0];
		}
		if (order === 1) {
			const ret = {
				x: mt * p[0].x + t * p[1].x,
				y: mt * p[0].y + t * p[1].y,
				t
			};
			if (_3d) ret.z = mt * p[0].z + t * p[1].z;
			return ret;
		}
		if (order < 4) {
			let mt2 = mt * mt, t2 = t * t, a, b, c, d = 0;
			if (order === 2) {
				p = [
					p[0],
					p[1],
					p[2],
					ZERO
				];
				a = mt2;
				b = mt * t * 2;
				c = t2;
			} else if (order === 3) {
				a = mt2 * mt;
				b = mt2 * t * 3;
				c = mt * t2 * 3;
				d = t * t2;
			}
			const ret = {
				x: a * p[0].x + b * p[1].x + c * p[2].x + d * p[3].x,
				y: a * p[0].y + b * p[1].y + c * p[2].y + d * p[3].y,
				t
			};
			if (_3d) ret.z = a * p[0].z + b * p[1].z + c * p[2].z + d * p[3].z;
			return ret;
		}
		const dCpts = JSON.parse(JSON.stringify(points));
		while (dCpts.length > 1) {
			for (let i = 0; i < dCpts.length - 1; i++) {
				dCpts[i] = {
					x: dCpts[i].x + (dCpts[i + 1].x - dCpts[i].x) * t,
					y: dCpts[i].y + (dCpts[i + 1].y - dCpts[i].y) * t
				};
				if (typeof dCpts[i].z !== "undefined") dCpts[i].z = dCpts[i].z + (dCpts[i + 1].z - dCpts[i].z) * t;
			}
			dCpts.splice(dCpts.length - 1, 1);
		}
		dCpts[0].t = t;
		return dCpts[0];
	},
	computeWithRatios: function(t, points, ratios, _3d) {
		const mt = 1 - t, r = ratios, p = points;
		let f1 = r[0], f2 = r[1], f3 = r[2], f4 = r[3], d;
		f1 *= mt;
		f2 *= t;
		if (p.length === 2) {
			d = f1 + f2;
			return {
				x: (f1 * p[0].x + f2 * p[1].x) / d,
				y: (f1 * p[0].y + f2 * p[1].y) / d,
				z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z) / d,
				t
			};
		}
		f1 *= mt;
		f2 *= 2 * mt;
		f3 *= t * t;
		if (p.length === 3) {
			d = f1 + f2 + f3;
			return {
				x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x) / d,
				y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y) / d,
				z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z) / d,
				t
			};
		}
		f1 *= mt;
		f2 *= 1.5 * mt;
		f3 *= 3 * mt;
		f4 *= t * t * t;
		if (p.length === 4) {
			d = f1 + f2 + f3 + f4;
			return {
				x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x + f4 * p[3].x) / d,
				y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y + f4 * p[3].y) / d,
				z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z + f4 * p[3].z) / d,
				t
			};
		}
	},
	derive: function(points, _3d) {
		const dpoints = [];
		for (let p = points, d = p.length, c = d - 1; d > 1; d--, c--) {
			const list = [];
			for (let j = 0, dpt; j < c; j++) {
				dpt = {
					x: c * (p[j + 1].x - p[j].x),
					y: c * (p[j + 1].y - p[j].y)
				};
				if (_3d) dpt.z = c * (p[j + 1].z - p[j].z);
				list.push(dpt);
			}
			dpoints.push(list);
			p = list;
		}
		return dpoints;
	},
	between: function(v, m, M) {
		return m <= v && v <= M || utils.approximately(v, m) || utils.approximately(v, M);
	},
	approximately: function(a, b, precision) {
		return abs$1(a - b) <= (precision || epsilon);
	},
	length: function(derivativeFn) {
		const z = .5, len = utils.Tvalues.length;
		let sum = 0;
		for (let i = 0, t; i < len; i++) {
			t = z * utils.Tvalues[i] + z;
			sum += utils.Cvalues[i] * utils.arcfn(t, derivativeFn);
		}
		return z * sum;
	},
	map: function(v, ds, de, ts, te) {
		const d1 = de - ds;
		return ts + (te - ts) * ((v - ds) / d1);
	},
	lerp: function(r, v1, v2) {
		const ret = {
			x: v1.x + r * (v2.x - v1.x),
			y: v1.y + r * (v2.y - v1.y)
		};
		if (v1.z !== void 0 && v2.z !== void 0) ret.z = v1.z + r * (v2.z - v1.z);
		return ret;
	},
	pointToString: function(p) {
		let s = p.x + "/" + p.y;
		if (typeof p.z !== "undefined") s += "/" + p.z;
		return s;
	},
	pointsToString: function(points) {
		return "[" + points.map(utils.pointToString).join(", ") + "]";
	},
	copy: function(obj) {
		return JSON.parse(JSON.stringify(obj));
	},
	angle: function(o, v1, v2) {
		const dx1 = v1.x - o.x, dy1 = v1.y - o.y, dx2 = v2.x - o.x, dy2 = v2.y - o.y;
		return atan2(dx1 * dy2 - dy1 * dx2, dx1 * dx2 + dy1 * dy2);
	},
	round: function(v, d) {
		const s = "" + v;
		const pos = s.indexOf(".");
		return parseFloat(s.substring(0, pos + 1 + d));
	},
	dist: function(p1, p2) {
		const dx = p1.x - p2.x, dy = p1.y - p2.y;
		return sqrt$1(dx * dx + dy * dy);
	},
	closest: function(LUT, point) {
		let mdist = pow(2, 63), mpos, d;
		LUT.forEach(function(p, idx) {
			d = utils.dist(point, p);
			if (d < mdist) {
				mdist = d;
				mpos = idx;
			}
		});
		return {
			mdist,
			mpos
		};
	},
	abcratio: function(t, n) {
		if (n !== 2 && n !== 3) return false;
		if (typeof t === "undefined") t = .5;
		else if (t === 0 || t === 1) return t;
		const bottom = pow(t, n) + pow(1 - t, n);
		return abs$1((bottom - 1) / bottom);
	},
	projectionratio: function(t, n) {
		if (n !== 2 && n !== 3) return false;
		if (typeof t === "undefined") t = .5;
		else if (t === 0 || t === 1) return t;
		const top = pow(1 - t, n);
		return top / (pow(t, n) + top);
	},
	lli8: function(x1, y1, x2, y2, x3, y3, x4, y4) {
		const nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4), ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4), d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
		if (d == 0) return false;
		return {
			x: nx / d,
			y: ny / d
		};
	},
	lli4: function(p1, p2, p3, p4) {
		const x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y, x3 = p3.x, y3 = p3.y, x4 = p4.x, y4 = p4.y;
		return utils.lli8(x1, y1, x2, y2, x3, y3, x4, y4);
	},
	lli: function(v1, v2) {
		return utils.lli4(v1, v1.c, v2, v2.c);
	},
	makeline: function(p1, p2) {
		return new Bezier(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2, p2.x, p2.y);
	},
	findbbox: function(sections) {
		let mx = nMax, my = nMax, MX = nMin, MY = nMin;
		sections.forEach(function(s) {
			const bbox = s.bbox();
			if (mx > bbox.x.min) mx = bbox.x.min;
			if (my > bbox.y.min) my = bbox.y.min;
			if (MX < bbox.x.max) MX = bbox.x.max;
			if (MY < bbox.y.max) MY = bbox.y.max;
		});
		return {
			x: {
				min: mx,
				mid: (mx + MX) / 2,
				max: MX,
				size: MX - mx
			},
			y: {
				min: my,
				mid: (my + MY) / 2,
				max: MY,
				size: MY - my
			}
		};
	},
	shapeintersections: function(s1, bbox1, s2, bbox2, curveIntersectionThreshold) {
		if (!utils.bboxoverlap(bbox1, bbox2)) return [];
		const intersections = [];
		const a1 = [
			s1.startcap,
			s1.forward,
			s1.back,
			s1.endcap
		];
		const a2 = [
			s2.startcap,
			s2.forward,
			s2.back,
			s2.endcap
		];
		a1.forEach(function(l1) {
			if (l1.virtual) return;
			a2.forEach(function(l2) {
				if (l2.virtual) return;
				const iss = l1.intersects(l2, curveIntersectionThreshold);
				if (iss.length > 0) {
					iss.c1 = l1;
					iss.c2 = l2;
					iss.s1 = s1;
					iss.s2 = s2;
					intersections.push(iss);
				}
			});
		});
		return intersections;
	},
	makeshape: function(forward, back, curveIntersectionThreshold) {
		const bpl = back.points.length;
		const fpl = forward.points.length;
		const start = utils.makeline(back.points[bpl - 1], forward.points[0]);
		const end = utils.makeline(forward.points[fpl - 1], back.points[0]);
		const shape = {
			startcap: start,
			forward,
			back,
			endcap: end,
			bbox: utils.findbbox([
				start,
				forward,
				back,
				end
			])
		};
		shape.intersections = function(s2) {
			return utils.shapeintersections(shape, shape.bbox, s2, s2.bbox, curveIntersectionThreshold);
		};
		return shape;
	},
	getminmax: function(curve, d, list) {
		if (!list) return {
			min: 0,
			max: 0
		};
		let min = nMax, max = nMin, t, c;
		if (list.indexOf(0) === -1) list = [0].concat(list);
		if (list.indexOf(1) === -1) list.push(1);
		for (let i = 0, len = list.length; i < len; i++) {
			t = list[i];
			c = curve.get(t);
			if (c[d] < min) min = c[d];
			if (c[d] > max) max = c[d];
		}
		return {
			min,
			mid: (min + max) / 2,
			max,
			size: max - min
		};
	},
	align: function(points, line) {
		const tx = line.p1.x, ty = line.p1.y, a = -atan2(line.p2.y - ty, line.p2.x - tx), d = function(v) {
			return {
				x: (v.x - tx) * cos$1(a) - (v.y - ty) * sin$1(a),
				y: (v.x - tx) * sin$1(a) + (v.y - ty) * cos$1(a)
			};
		};
		return points.map(d);
	},
	roots: function(points, line) {
		line = line || {
			p1: {
				x: 0,
				y: 0
			},
			p2: {
				x: 1,
				y: 0
			}
		};
		const order = points.length - 1;
		const aligned = utils.align(points, line);
		const reduce = function(t) {
			return 0 <= t && t <= 1;
		};
		if (order === 2) {
			const a = aligned[0].y, b = aligned[1].y, c = aligned[2].y, d = a - 2 * b + c;
			if (d !== 0) {
				const m1 = -sqrt$1(b * b - a * c), m2 = -a + b;
				return [-(m1 + m2) / d, -(-m1 + m2) / d].filter(reduce);
			} else if (b !== c && d === 0) return [(2 * b - c) / (2 * b - 2 * c)].filter(reduce);
			return [];
		}
		const pa = aligned[0].y, pb = aligned[1].y, pc = aligned[2].y, pd = aligned[3].y;
		let d = -pa + 3 * pb - 3 * pc + pd, a = 3 * pa - 6 * pb + 3 * pc, b = -3 * pa + 3 * pb, c = pa;
		if (utils.approximately(d, 0)) {
			if (utils.approximately(a, 0)) {
				if (utils.approximately(b, 0)) return [];
				return [-c / b].filter(reduce);
			}
			const q = sqrt$1(b * b - 4 * a * c), a2 = 2 * a;
			return [(q - b) / a2, (-b - q) / a2].filter(reduce);
		}
		a /= d;
		b /= d;
		c /= d;
		const p = (3 * b - a * a) / 3, p3 = p / 3, q = (2 * a * a * a - 9 * a * b + 27 * c) / 27, q2 = q / 2, discriminant = q2 * q2 + p3 * p3 * p3;
		let u1, v1, x1, x2, x3;
		if (discriminant < 0) {
			const mp3 = -p / 3, r = sqrt$1(mp3 * mp3 * mp3), t = -q / (2 * r), phi = acos$1(t < -1 ? -1 : t > 1 ? 1 : t), t1 = 2 * crt(r);
			x1 = t1 * cos$1(phi / 3) - a / 3;
			x2 = t1 * cos$1((phi + tau) / 3) - a / 3;
			x3 = t1 * cos$1((phi + 2 * tau) / 3) - a / 3;
			return [
				x1,
				x2,
				x3
			].filter(reduce);
		} else if (discriminant === 0) {
			u1 = q2 < 0 ? crt(-q2) : -crt(q2);
			x1 = 2 * u1 - a / 3;
			x2 = -u1 - a / 3;
			return [x1, x2].filter(reduce);
		} else {
			const sd = sqrt$1(discriminant);
			u1 = crt(-q2 + sd);
			v1 = crt(q2 + sd);
			return [u1 - v1 - a / 3].filter(reduce);
		}
	},
	droots: function(p) {
		if (p.length === 3) {
			const a = p[0], b = p[1], c = p[2], d = a - 2 * b + c;
			if (d !== 0) {
				const m1 = -sqrt$1(b * b - a * c), m2 = -a + b;
				return [-(m1 + m2) / d, -(-m1 + m2) / d];
			} else if (b !== c && d === 0) return [(2 * b - c) / (2 * (b - c))];
			return [];
		}
		if (p.length === 2) {
			const a = p[0], b = p[1];
			if (a !== b) return [a / (a - b)];
			return [];
		}
		return [];
	},
	curvature: function(t, d1, d2, _3d, kOnly) {
		let num, dnm, adk, dk, k = 0, r = 0;
		const d = utils.compute(t, d1);
		const dd = utils.compute(t, d2);
		const qdsum = d.x * d.x + d.y * d.y;
		if (_3d) {
			num = sqrt$1(pow(d.y * dd.z - dd.y * d.z, 2) + pow(d.z * dd.x - dd.z * d.x, 2) + pow(d.x * dd.y - dd.x * d.y, 2));
			dnm = pow(qdsum + d.z * d.z, 3 / 2);
		} else {
			num = d.x * dd.y - d.y * dd.x;
			dnm = pow(qdsum, 3 / 2);
		}
		if (num === 0 || dnm === 0) return {
			k: 0,
			r: 0
		};
		k = num / dnm;
		r = dnm / num;
		if (!kOnly) {
			const pk = utils.curvature(t - .001, d1, d2, _3d, true).k;
			const nk = utils.curvature(t + .001, d1, d2, _3d, true).k;
			dk = (nk - k + (k - pk)) / 2;
			adk = (abs$1(nk - k) + abs$1(k - pk)) / 2;
		}
		return {
			k,
			r,
			dk,
			adk
		};
	},
	inflections: function(points) {
		if (points.length < 4) return [];
		const p = utils.align(points, {
			p1: points[0],
			p2: points.slice(-1)[0]
		}), a = p[2].x * p[1].y, b = p[3].x * p[1].y, c = p[1].x * p[2].y, d = p[3].x * p[2].y, v1 = 18 * (-3 * a + 2 * b + 3 * c - d), v2 = 18 * (3 * a - b - 3 * c), v3 = 18 * (c - a);
		if (utils.approximately(v1, 0)) {
			if (!utils.approximately(v2, 0)) {
				let t = -v3 / v2;
				if (0 <= t && t <= 1) return [t];
			}
			return [];
		}
		const d2 = 2 * v1;
		if (utils.approximately(d2, 0)) return [];
		const trm = v2 * v2 - 4 * v1 * v3;
		if (trm < 0) return [];
		const sq = Math.sqrt(trm);
		return [(sq - v2) / d2, -(v2 + sq) / d2].filter(function(r) {
			return 0 <= r && r <= 1;
		});
	},
	bboxoverlap: function(b1, b2) {
		const dims = ["x", "y"], len = dims.length;
		for (let i = 0, dim, l, t, d; i < len; i++) {
			dim = dims[i];
			l = b1[dim].mid;
			t = b2[dim].mid;
			d = (b1[dim].size + b2[dim].size) / 2;
			if (abs$1(l - t) >= d) return false;
		}
		return true;
	},
	expandbox: function(bbox, _bbox) {
		if (_bbox.x.min < bbox.x.min) bbox.x.min = _bbox.x.min;
		if (_bbox.y.min < bbox.y.min) bbox.y.min = _bbox.y.min;
		if (_bbox.z && _bbox.z.min < bbox.z.min) bbox.z.min = _bbox.z.min;
		if (_bbox.x.max > bbox.x.max) bbox.x.max = _bbox.x.max;
		if (_bbox.y.max > bbox.y.max) bbox.y.max = _bbox.y.max;
		if (_bbox.z && _bbox.z.max > bbox.z.max) bbox.z.max = _bbox.z.max;
		bbox.x.mid = (bbox.x.min + bbox.x.max) / 2;
		bbox.y.mid = (bbox.y.min + bbox.y.max) / 2;
		if (bbox.z) bbox.z.mid = (bbox.z.min + bbox.z.max) / 2;
		bbox.x.size = bbox.x.max - bbox.x.min;
		bbox.y.size = bbox.y.max - bbox.y.min;
		if (bbox.z) bbox.z.size = bbox.z.max - bbox.z.min;
	},
	pairiteration: function(c1, c2, curveIntersectionThreshold) {
		const c1b = c1.bbox(), c2b = c2.bbox(), r = 1e5, threshold = curveIntersectionThreshold || .5;
		if (c1b.x.size + c1b.y.size < threshold && c2b.x.size + c2b.y.size < threshold) return [(r * (c1._t1 + c1._t2) / 2 | 0) / r + "/" + (r * (c2._t1 + c2._t2) / 2 | 0) / r];
		let cc1 = c1.split(.5), cc2 = c2.split(.5), pairs = [
			{
				left: cc1.left,
				right: cc2.left
			},
			{
				left: cc1.left,
				right: cc2.right
			},
			{
				left: cc1.right,
				right: cc2.right
			},
			{
				left: cc1.right,
				right: cc2.left
			}
		];
		pairs = pairs.filter(function(pair) {
			return utils.bboxoverlap(pair.left.bbox(), pair.right.bbox());
		});
		let results = [];
		if (pairs.length === 0) return results;
		pairs.forEach(function(pair) {
			results = results.concat(utils.pairiteration(pair.left, pair.right, threshold));
		});
		results = results.filter(function(v, i) {
			return results.indexOf(v) === i;
		});
		return results;
	},
	getccenter: function(p1, p2, p3) {
		const dx1 = p2.x - p1.x, dy1 = p2.y - p1.y, dx2 = p3.x - p2.x, dy2 = p3.y - p2.y, dx1p = dx1 * cos$1(quart) - dy1 * sin$1(quart), dy1p = dx1 * sin$1(quart) + dy1 * cos$1(quart), dx2p = dx2 * cos$1(quart) - dy2 * sin$1(quart), dy2p = dx2 * sin$1(quart) + dy2 * cos$1(quart), mx1 = (p1.x + p2.x) / 2, my1 = (p1.y + p2.y) / 2, mx2 = (p2.x + p3.x) / 2, my2 = (p2.y + p3.y) / 2, mx1n = mx1 + dx1p, my1n = my1 + dy1p, mx2n = mx2 + dx2p, my2n = my2 + dy2p, arc = utils.lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n), r = utils.dist(arc, p1);
		let s = atan2(p1.y - arc.y, p1.x - arc.x), m = atan2(p2.y - arc.y, p2.x - arc.x), e = atan2(p3.y - arc.y, p3.x - arc.x), _;
		if (s < e) {
			if (s > m || m > e) s += tau;
			if (s > e) {
				_ = e;
				e = s;
				s = _;
			}
		} else if (e < m && m < s) {
			_ = e;
			e = s;
			s = _;
		} else e += tau;
		arc.s = s;
		arc.e = e;
		arc.r = r;
		return arc;
	},
	numberSort: function(a, b) {
		return a - b;
	}
};
// node_modules/bezier-js/src/poly-bezier.js
/**
* Poly Bezier
* @param {[type]} curves [description]
*/
var PolyBezier = class PolyBezier {
	constructor(curves) {
		this.curves = [];
		this._3d = false;
		if (!!curves) {
			this.curves = curves;
			this._3d = this.curves[0]._3d;
		}
	}
	valueOf() {
		return this.toString();
	}
	toString() {
		return "[" + this.curves.map(function(curve) {
			return utils.pointsToString(curve.points);
		}).join(", ") + "]";
	}
	addCurve(curve) {
		this.curves.push(curve);
		this._3d = this._3d || curve._3d;
	}
	length() {
		return this.curves.map(function(v) {
			return v.length();
		}).reduce(function(a, b) {
			return a + b;
		});
	}
	curve(idx) {
		return this.curves[idx];
	}
	bbox() {
		const c = this.curves;
		var bbox = c[0].bbox();
		for (var i = 1; i < c.length; i++) utils.expandbox(bbox, c[i].bbox());
		return bbox;
	}
	offset(d) {
		const offset = [];
		this.curves.forEach(function(v) {
			offset.push(...v.offset(d));
		});
		return new PolyBezier(offset);
	}
};
// node_modules/bezier-js/src/bezier.js
/**
A javascript Bezier curve library by Pomax.

Based on http://pomax.github.io/bezierinfo

This code is MIT licensed.
**/
var { abs, min, max, cos, sin, acos, sqrt } = Math;
var pi = Math.PI;
/**
* Bezier curve constructor.
*
* ...docs pending...
*/
var Bezier = class Bezier {
	constructor(coords) {
		let args = coords && coords.forEach ? coords : Array.from(arguments).slice();
		let coordlen = false;
		if (typeof args[0] === "object") {
			coordlen = args.length;
			const newargs = [];
			args.forEach(function(point) {
				[
					"x",
					"y",
					"z"
				].forEach(function(d) {
					if (typeof point[d] !== "undefined") newargs.push(point[d]);
				});
			});
			args = newargs;
		}
		let higher = false;
		const len = args.length;
		if (coordlen) {
			if (coordlen > 4) {
				if (arguments.length !== 1) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
				higher = true;
			}
		} else if (len !== 6 && len !== 8 && len !== 9 && len !== 12) {
			if (arguments.length !== 1) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
		}
		const _3d = this._3d = !higher && (len === 9 || len === 12) || coords && coords[0] && typeof coords[0].z !== "undefined";
		const points = this.points = [];
		for (let idx = 0, step = _3d ? 3 : 2; idx < len; idx += step) {
			var point = {
				x: args[idx],
				y: args[idx + 1]
			};
			if (_3d) point.z = args[idx + 2];
			points.push(point);
		}
		const order = this.order = points.length - 1;
		const dims = this.dims = ["x", "y"];
		if (_3d) dims.push("z");
		this.dimlen = dims.length;
		const aligned = utils.align(points, {
			p1: points[0],
			p2: points[order]
		});
		const baselength = utils.dist(points[0], points[order]);
		this._linear = aligned.reduce((t, p) => t + abs(p.y), 0) < baselength / 50;
		this._lut = [];
		this._t1 = 0;
		this._t2 = 1;
		this.update();
	}
	static quadraticFromPoints(p1, p2, p3, t) {
		if (typeof t === "undefined") t = .5;
		if (t === 0) return new Bezier(p2, p2, p3);
		if (t === 1) return new Bezier(p1, p2, p2);
		const abc = Bezier.getABC(2, p1, p2, p3, t);
		return new Bezier(p1, abc.A, p3);
	}
	static cubicFromPoints(S, B, E, t, d1) {
		if (typeof t === "undefined") t = .5;
		const abc = Bezier.getABC(3, S, B, E, t);
		if (typeof d1 === "undefined") d1 = utils.dist(B, abc.C);
		const d2 = d1 * (1 - t) / t;
		const selen = utils.dist(S, E), lx = (E.x - S.x) / selen, ly = (E.y - S.y) / selen, bx1 = d1 * lx, by1 = d1 * ly, bx2 = d2 * lx, by2 = d2 * ly;
		const e1 = {
			x: B.x - bx1,
			y: B.y - by1
		}, e2 = {
			x: B.x + bx2,
			y: B.y + by2
		}, A = abc.A, v1 = {
			x: A.x + (e1.x - A.x) / (1 - t),
			y: A.y + (e1.y - A.y) / (1 - t)
		}, v2 = {
			x: A.x + (e2.x - A.x) / t,
			y: A.y + (e2.y - A.y) / t
		}, nc1 = {
			x: S.x + (v1.x - S.x) / t,
			y: S.y + (v1.y - S.y) / t
		}, nc2 = {
			x: E.x + (v2.x - E.x) / (1 - t),
			y: E.y + (v2.y - E.y) / (1 - t)
		};
		return new Bezier(S, nc1, nc2, E);
	}
	static getUtils() {
		return utils;
	}
	getUtils() {
		return Bezier.getUtils();
	}
	static get PolyBezier() {
		return PolyBezier;
	}
	valueOf() {
		return this.toString();
	}
	toString() {
		return utils.pointsToString(this.points);
	}
	toSVG() {
		if (this._3d) return false;
		const p = this.points, s = [
			"M",
			p[0].x,
			p[0].y,
			this.order === 2 ? "Q" : "C"
		];
		for (let i = 1, last = p.length; i < last; i++) {
			s.push(p[i].x);
			s.push(p[i].y);
		}
		return s.join(" ");
	}
	setRatios(ratios) {
		if (ratios.length !== this.points.length) throw new Error("incorrect number of ratio values");
		this.ratios = ratios;
		this._lut = [];
	}
	verify() {
		const print = this.coordDigest();
		if (print !== this._print) {
			this._print = print;
			this.update();
		}
	}
	coordDigest() {
		return this.points.map(function(c, pos) {
			return "" + pos + c.x + c.y + (c.z ? c.z : 0);
		}).join("");
	}
	update() {
		this._lut = [];
		this.dpoints = utils.derive(this.points, this._3d);
		this.computedirection();
	}
	computedirection() {
		const points = this.points;
		const angle = utils.angle(points[0], points[this.order], points[1]);
		this.clockwise = angle > 0;
	}
	length() {
		return utils.length(this.derivative.bind(this));
	}
	static getABC(order = 2, S, B, E, t = .5) {
		const u = utils.projectionratio(t, order), um = 1 - u, C = {
			x: u * S.x + um * E.x,
			y: u * S.y + um * E.y
		}, s = utils.abcratio(t, order);
		return {
			A: {
				x: B.x + (B.x - C.x) / s,
				y: B.y + (B.y - C.y) / s
			},
			B,
			C,
			S,
			E
		};
	}
	getABC(t, B) {
		B = B || this.get(t);
		let S = this.points[0];
		let E = this.points[this.order];
		return Bezier.getABC(this.order, S, B, E, t);
	}
	getLUT(steps) {
		this.verify();
		steps = steps || 100;
		if (this._lut.length === steps + 1) return this._lut;
		this._lut = [];
		steps++;
		this._lut = [];
		for (let i = 0, p, t; i < steps; i++) {
			t = i / (steps - 1);
			p = this.compute(t);
			p.t = t;
			this._lut.push(p);
		}
		return this._lut;
	}
	on(point, error) {
		error = error || 5;
		const lut = this.getLUT(), hits = [];
		for (let i = 0, c, t = 0; i < lut.length; i++) {
			c = lut[i];
			if (utils.dist(c, point) < error) {
				hits.push(c);
				t += i / lut.length;
			}
		}
		if (!hits.length) return false;
		return t /= hits.length;
	}
	project(point) {
		const LUT = this.getLUT(), l = LUT.length - 1, closest = utils.closest(LUT, point), mpos = closest.mpos, t1 = (mpos - 1) / l, t2 = (mpos + 1) / l, step = .1 / l;
		let mdist = closest.mdist, t = t1, ft = t, p;
		mdist += 1;
		for (let d; t < t2 + step; t += step) {
			p = this.compute(t);
			d = utils.dist(point, p);
			if (d < mdist) {
				mdist = d;
				ft = t;
			}
		}
		ft = ft < 0 ? 0 : ft > 1 ? 1 : ft;
		p = this.compute(ft);
		p.t = ft;
		p.d = mdist;
		return p;
	}
	get(t) {
		return this.compute(t);
	}
	point(idx) {
		return this.points[idx];
	}
	compute(t) {
		if (this.ratios) return utils.computeWithRatios(t, this.points, this.ratios, this._3d);
		return utils.compute(t, this.points, this._3d, this.ratios);
	}
	raise() {
		const p = this.points, np = [p[0]], k = p.length;
		for (let i = 1, pi, pim; i < k; i++) {
			pi = p[i];
			pim = p[i - 1];
			np[i] = {
				x: (k - i) / k * pi.x + i / k * pim.x,
				y: (k - i) / k * pi.y + i / k * pim.y
			};
		}
		np[k] = p[k - 1];
		return new Bezier(np);
	}
	derivative(t) {
		return utils.compute(t, this.dpoints[0], this._3d);
	}
	dderivative(t) {
		return utils.compute(t, this.dpoints[1], this._3d);
	}
	align() {
		let p = this.points;
		return new Bezier(utils.align(p, {
			p1: p[0],
			p2: p[p.length - 1]
		}));
	}
	curvature(t) {
		return utils.curvature(t, this.dpoints[0], this.dpoints[1], this._3d);
	}
	inflections() {
		return utils.inflections(this.points);
	}
	normal(t) {
		return this._3d ? this.__normal3(t) : this.__normal2(t);
	}
	__normal2(t) {
		const d = this.derivative(t);
		const q = sqrt(d.x * d.x + d.y * d.y);
		return {
			t,
			x: -d.y / q,
			y: d.x / q
		};
	}
	__normal3(t) {
		const r1 = this.derivative(t), r2 = this.derivative(t + .01), q1 = sqrt(r1.x * r1.x + r1.y * r1.y + r1.z * r1.z), q2 = sqrt(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z);
		r1.x /= q1;
		r1.y /= q1;
		r1.z /= q1;
		r2.x /= q2;
		r2.y /= q2;
		r2.z /= q2;
		const c = {
			x: r2.y * r1.z - r2.z * r1.y,
			y: r2.z * r1.x - r2.x * r1.z,
			z: r2.x * r1.y - r2.y * r1.x
		};
		const m = sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
		c.x /= m;
		c.y /= m;
		c.z /= m;
		const R = [
			c.x * c.x,
			c.x * c.y - c.z,
			c.x * c.z + c.y,
			c.x * c.y + c.z,
			c.y * c.y,
			c.y * c.z - c.x,
			c.x * c.z - c.y,
			c.y * c.z + c.x,
			c.z * c.z
		];
		return {
			t,
			x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
			y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
			z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z
		};
	}
	hull(t) {
		let p = this.points, _p = [], q = [], idx = 0;
		q[idx++] = p[0];
		q[idx++] = p[1];
		q[idx++] = p[2];
		if (this.order === 3) q[idx++] = p[3];
		while (p.length > 1) {
			_p = [];
			for (let i = 0, pt, l = p.length - 1; i < l; i++) {
				pt = utils.lerp(t, p[i], p[i + 1]);
				q[idx++] = pt;
				_p.push(pt);
			}
			p = _p;
		}
		return q;
	}
	split(t1, t2) {
		if (t1 === 0 && !!t2) return this.split(t2).left;
		if (t2 === 1) return this.split(t1).right;
		const q = this.hull(t1);
		const result = {
			left: this.order === 2 ? new Bezier([
				q[0],
				q[3],
				q[5]
			]) : new Bezier([
				q[0],
				q[4],
				q[7],
				q[9]
			]),
			right: this.order === 2 ? new Bezier([
				q[5],
				q[4],
				q[2]
			]) : new Bezier([
				q[9],
				q[8],
				q[6],
				q[3]
			]),
			span: q
		};
		result.left._t1 = utils.map(0, 0, 1, this._t1, this._t2);
		result.left._t2 = utils.map(t1, 0, 1, this._t1, this._t2);
		result.right._t1 = utils.map(t1, 0, 1, this._t1, this._t2);
		result.right._t2 = utils.map(1, 0, 1, this._t1, this._t2);
		if (!t2) return result;
		t2 = utils.map(t2, t1, 1, 0, 1);
		return result.right.split(t2).left;
	}
	extrema() {
		const result = {};
		let roots = [];
		this.dims.forEach(function(dim) {
			let mfn = function(v) {
				return v[dim];
			};
			let p = this.dpoints[0].map(mfn);
			result[dim] = utils.droots(p);
			if (this.order === 3) {
				p = this.dpoints[1].map(mfn);
				result[dim] = result[dim].concat(utils.droots(p));
			}
			result[dim] = result[dim].filter(function(t) {
				return t >= 0 && t <= 1;
			});
			roots = roots.concat(result[dim].sort(utils.numberSort));
		}.bind(this));
		result.values = roots.sort(utils.numberSort).filter(function(v, idx) {
			return roots.indexOf(v) === idx;
		});
		return result;
	}
	bbox() {
		const extrema = this.extrema(), result = {};
		this.dims.forEach(function(d) {
			result[d] = utils.getminmax(this, d, extrema[d]);
		}.bind(this));
		return result;
	}
	overlaps(curve) {
		const lbbox = this.bbox(), tbbox = curve.bbox();
		return utils.bboxoverlap(lbbox, tbbox);
	}
	offset(t, d) {
		if (typeof d !== "undefined") {
			const c = this.get(t), n = this.normal(t);
			const ret = {
				c,
				n,
				x: c.x + n.x * d,
				y: c.y + n.y * d
			};
			if (this._3d) ret.z = c.z + n.z * d;
			return ret;
		}
		if (this._linear) {
			const nv = this.normal(0), coords = this.points.map(function(p) {
				const ret = {
					x: p.x + t * nv.x,
					y: p.y + t * nv.y
				};
				if (p.z && nv.z) ret.z = p.z + t * nv.z;
				return ret;
			});
			return [new Bezier(coords)];
		}
		return this.reduce().map(function(s) {
			if (s._linear) return s.offset(t)[0];
			return s.scale(t);
		});
	}
	simple() {
		if (this.order === 3) {
			const a1 = utils.angle(this.points[0], this.points[3], this.points[1]);
			const a2 = utils.angle(this.points[0], this.points[3], this.points[2]);
			if (a1 > 0 && a2 < 0 || a1 < 0 && a2 > 0) return false;
		}
		const n1 = this.normal(0);
		const n2 = this.normal(1);
		let s = n1.x * n2.x + n1.y * n2.y;
		if (this._3d) s += n1.z * n2.z;
		return abs(acos(s)) < pi / 3;
	}
	reduce() {
		let i, t1 = 0, t2 = 0, step = .01, segment, pass1 = [], pass2 = [];
		let extrema = this.extrema().values;
		if (extrema.indexOf(0) === -1) extrema = [0].concat(extrema);
		if (extrema.indexOf(1) === -1) extrema.push(1);
		for (t1 = extrema[0], i = 1; i < extrema.length; i++) {
			t2 = extrema[i];
			segment = this.split(t1, t2);
			segment._t1 = t1;
			segment._t2 = t2;
			pass1.push(segment);
			t1 = t2;
		}
		pass1.forEach(function(p1) {
			t1 = 0;
			t2 = 0;
			while (t2 <= 1) for (t2 = t1 + step; t2 <= 1.01; t2 += step) {
				segment = p1.split(t1, t2);
				if (!segment.simple()) {
					t2 -= step;
					if (abs(t1 - t2) < step) return [];
					segment = p1.split(t1, t2);
					segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
					segment._t2 = utils.map(t2, 0, 1, p1._t1, p1._t2);
					pass2.push(segment);
					t1 = t2;
					break;
				}
			}
			if (t1 < 1) {
				segment = p1.split(t1, 1);
				segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
				segment._t2 = p1._t2;
				pass2.push(segment);
			}
		});
		return pass2;
	}
	translate(v, d1, d2) {
		d2 = typeof d2 === "number" ? d2 : d1;
		const o = this.order;
		let d = this.points.map((_, i) => (1 - i / o) * d1 + i / o * d2);
		return new Bezier(this.points.map((p, i) => ({
			x: p.x + v.x * d[i],
			y: p.y + v.y * d[i]
		})));
	}
	scale(d) {
		const order = this.order;
		let distanceFn = false;
		if (typeof d === "function") distanceFn = d;
		if (distanceFn && order === 2) return this.raise().scale(distanceFn);
		const clockwise = this.clockwise;
		const points = this.points;
		if (this._linear) return this.translate(this.normal(0), distanceFn ? distanceFn(0) : d, distanceFn ? distanceFn(1) : d);
		const r1 = distanceFn ? distanceFn(0) : d;
		const r2 = distanceFn ? distanceFn(1) : d;
		const v = [this.offset(0, 10), this.offset(1, 10)];
		const np = [];
		const o = utils.lli4(v[0], v[0].c, v[1], v[1].c);
		if (!o) throw new Error("cannot scale this curve. Try reducing it first.");
		[0, 1].forEach(function(t) {
			const p = np[t * order] = utils.copy(points[t * order]);
			p.x += (t ? r2 : r1) * v[t].n.x;
			p.y += (t ? r2 : r1) * v[t].n.y;
		});
		if (!distanceFn) {
			[0, 1].forEach((t) => {
				if (order === 2 && !!t) return;
				const p = np[t * order];
				const d = this.derivative(t);
				const p2 = {
					x: p.x + d.x,
					y: p.y + d.y
				};
				np[t + 1] = utils.lli4(p, p2, o, points[t + 1]);
			});
			return new Bezier(np);
		}
		[0, 1].forEach(function(t) {
			if (order === 2 && !!t) return;
			var p = points[t + 1];
			var ov = {
				x: p.x - o.x,
				y: p.y - o.y
			};
			var rc = distanceFn ? distanceFn((t + 1) / order) : d;
			if (distanceFn && !clockwise) rc = -rc;
			var m = sqrt(ov.x * ov.x + ov.y * ov.y);
			ov.x /= m;
			ov.y /= m;
			np[t + 1] = {
				x: p.x + rc * ov.x,
				y: p.y + rc * ov.y
			};
		});
		return new Bezier(np);
	}
	outline(d1, d2, d3, d4) {
		d2 = d2 === void 0 ? d1 : d2;
		if (this._linear) {
			const n = this.normal(0);
			const start = this.points[0];
			const end = this.points[this.points.length - 1];
			let s, mid, e;
			if (d3 === void 0) {
				d3 = d1;
				d4 = d2;
			}
			s = {
				x: start.x + n.x * d1,
				y: start.y + n.y * d1
			};
			e = {
				x: end.x + n.x * d3,
				y: end.y + n.y * d3
			};
			mid = {
				x: (s.x + e.x) / 2,
				y: (s.y + e.y) / 2
			};
			const fline = [
				s,
				mid,
				e
			];
			s = {
				x: start.x - n.x * d2,
				y: start.y - n.y * d2
			};
			e = {
				x: end.x - n.x * d4,
				y: end.y - n.y * d4
			};
			mid = {
				x: (s.x + e.x) / 2,
				y: (s.y + e.y) / 2
			};
			const bline = [
				e,
				mid,
				s
			];
			const ls = utils.makeline(bline[2], fline[0]);
			const le = utils.makeline(fline[2], bline[0]);
			return new PolyBezier([
				ls,
				new Bezier(fline),
				le,
				new Bezier(bline)
			]);
		}
		const reduced = this.reduce(), len = reduced.length, fcurves = [];
		let bcurves = [], p, alen = 0, tlen = this.length();
		const graduated = typeof d3 !== "undefined" && typeof d4 !== "undefined";
		function linearDistanceFunction(s, e, tlen, alen, slen) {
			return function(v) {
				const f1 = alen / tlen, f2 = (alen + slen) / tlen, d = e - s;
				return utils.map(v, 0, 1, s + f1 * d, s + f2 * d);
			};
		}
		reduced.forEach(function(segment) {
			const slen = segment.length();
			if (graduated) {
				fcurves.push(segment.scale(linearDistanceFunction(d1, d3, tlen, alen, slen)));
				bcurves.push(segment.scale(linearDistanceFunction(-d2, -d4, tlen, alen, slen)));
			} else {
				fcurves.push(segment.scale(d1));
				bcurves.push(segment.scale(-d2));
			}
			alen += slen;
		});
		bcurves = bcurves.map(function(s) {
			p = s.points;
			if (p[3]) s.points = [
				p[3],
				p[2],
				p[1],
				p[0]
			];
			else s.points = [
				p[2],
				p[1],
				p[0]
			];
			return s;
		}).reverse();
		const fs = fcurves[0].points[0], fe = fcurves[len - 1].points[fcurves[len - 1].points.length - 1], bs = bcurves[len - 1].points[bcurves[len - 1].points.length - 1], be = bcurves[0].points[0], ls = utils.makeline(bs, fs), le = utils.makeline(fe, be);
		return new PolyBezier([ls].concat(fcurves).concat([le]).concat(bcurves));
	}
	outlineshapes(d1, d2, curveIntersectionThreshold) {
		d2 = d2 || d1;
		const outline = this.outline(d1, d2).curves;
		const shapes = [];
		for (let i = 1, len = outline.length; i < len / 2; i++) {
			const shape = utils.makeshape(outline[i], outline[len - i], curveIntersectionThreshold);
			shape.startcap.virtual = i > 1;
			shape.endcap.virtual = i < len / 2 - 1;
			shapes.push(shape);
		}
		return shapes;
	}
	intersects(curve, curveIntersectionThreshold) {
		if (!curve) return this.selfintersects(curveIntersectionThreshold);
		if (curve.p1 && curve.p2) return this.lineIntersects(curve);
		if (curve instanceof Bezier) curve = curve.reduce();
		return this.curveintersects(this.reduce(), curve, curveIntersectionThreshold);
	}
	lineIntersects(line) {
		const mx = min(line.p1.x, line.p2.x), my = min(line.p1.y, line.p2.y), MX = max(line.p1.x, line.p2.x), MY = max(line.p1.y, line.p2.y);
		return utils.roots(this.points, line).filter((t) => {
			var p = this.get(t);
			return utils.between(p.x, mx, MX) && utils.between(p.y, my, MY);
		});
	}
	selfintersects(curveIntersectionThreshold) {
		const reduced = this.reduce(), len = reduced.length - 2, results = [];
		for (let i = 0, result, left, right; i < len; i++) {
			left = reduced.slice(i, i + 1);
			right = reduced.slice(i + 2);
			result = this.curveintersects(left, right, curveIntersectionThreshold);
			results.push(...result);
		}
		return results;
	}
	curveintersects(c1, c2, curveIntersectionThreshold) {
		const pairs = [];
		c1.forEach(function(l) {
			c2.forEach(function(r) {
				if (l.overlaps(r)) pairs.push({
					left: l,
					right: r
				});
			});
		});
		let intersections = [];
		pairs.forEach(function(pair) {
			const result = utils.pairiteration(pair.left, pair.right, curveIntersectionThreshold);
			if (result.length > 0) intersections = intersections.concat(result);
		});
		return intersections;
	}
	arcs(errorThreshold) {
		errorThreshold = errorThreshold || .5;
		return this._iterate(errorThreshold, []);
	}
	_error(pc, np1, s, e) {
		const q = (e - s) / 4, c1 = this.get(s + q), c2 = this.get(e - q), ref = utils.dist(pc, np1), d1 = utils.dist(pc, c1), d2 = utils.dist(pc, c2);
		return abs(d1 - ref) + abs(d2 - ref);
	}
	_iterate(errorThreshold, circles) {
		let t_s = 0, t_e = 1, safety;
		do {
			safety = 0;
			t_e = 1;
			let np1 = this.get(t_s), np2, np3, arc, prev_arc;
			let curr_good = false, prev_good = false, done;
			let t_m = t_e, prev_e = 1, step = 0;
			do {
				prev_good = curr_good;
				prev_arc = arc;
				t_m = (t_s + t_e) / 2;
				step++;
				np2 = this.get(t_m);
				np3 = this.get(t_e);
				arc = utils.getccenter(np1, np2, np3);
				arc.interval = {
					start: t_s,
					end: t_e
				};
				curr_good = this._error(arc, np1, t_s, t_e) <= errorThreshold;
				done = prev_good && !curr_good;
				if (!done) prev_e = t_e;
				if (curr_good) {
					if (t_e >= 1) {
						arc.interval.end = prev_e = 1;
						prev_arc = arc;
						if (t_e > 1) {
							let d = {
								x: arc.x + arc.r * cos(arc.e),
								y: arc.y + arc.r * sin(arc.e)
							};
							arc.e += utils.angle({
								x: arc.x,
								y: arc.y
							}, d, this.get(1));
						}
						break;
					}
					t_e = t_e + (t_e - t_s) / 2;
				} else t_e = t_m;
			} while (!done && safety++ < 100);
			if (safety >= 100) break;
			prev_arc = prev_arc ? prev_arc : arc;
			circles.push(prev_arc);
			t_s = prev_e;
		} while (t_e < 1);
		return circles;
	}
};
// node_modules/index-array-by/dist/index-array-by.mjs
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
	if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
	if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
	var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		var e, n, i, u, a = [], f = !0, o = !1;
		try {
			if (i = (t = t.call(r)).next, 0 === l);
			else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
		} catch (r) {
			o = !0, n = r;
		} finally {
			try {
				if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
			} finally {
				if (o) throw n;
			}
		}
		return a;
	}
}
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.includes(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _slicedToArray(r, e) {
	return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
	return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r);
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return String(t);
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
var index = (function() {
	var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
	var keyAccessors = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	var multiItem = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
	var flattenKeys = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
	var keys = (keyAccessors instanceof Array ? keyAccessors.length ? keyAccessors : [void 0] : [keyAccessors]).map(function(key) {
		return {
			keyAccessor: key,
			isProp: !(key instanceof Function)
		};
	});
	var indexedResult = list.reduce(function(res, item) {
		var iterObj = res;
		var itemVal = item;
		keys.forEach(function(_ref, idx) {
			var keyAccessor = _ref.keyAccessor, isProp = _ref.isProp;
			var key;
			if (isProp) {
				var _itemVal = itemVal, propVal = _itemVal[keyAccessor], rest = _objectWithoutProperties(_itemVal, [keyAccessor].map(_toPropertyKey));
				key = propVal;
				itemVal = rest;
			} else key = keyAccessor(itemVal, idx);
			if (idx + 1 < keys.length) {
				if (!iterObj.hasOwnProperty(key)) iterObj[key] = {};
				iterObj = iterObj[key];
			} else if (multiItem) {
				if (!iterObj.hasOwnProperty(key)) iterObj[key] = [];
				iterObj[key].push(itemVal);
			} else iterObj[key] = itemVal;
		});
		return res;
	}, {});
	if (multiItem instanceof Function) (function reduce(node) {
		var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
		if (level === keys.length) Object.keys(node).forEach(function(k) {
			return node[k] = multiItem(node[k]);
		});
		else Object.values(node).forEach(function(child) {
			return reduce(child, level + 1);
		});
	})(indexedResult);
	var result = indexedResult;
	if (flattenKeys) {
		result = [];
		(function flatten(node) {
			var accKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
			if (accKeys.length === keys.length) result.push({
				keys: accKeys,
				vals: node
			});
			else Object.entries(node).forEach(function(_ref2) {
				var _ref3 = _slicedToArray(_ref2, 2), key = _ref3[0], val = _ref3[1];
				return flatten(val, [].concat(_toConsumableArray(accKeys), [key]));
			});
		})(indexedResult);
		if (keyAccessors instanceof Array && keyAccessors.length === 0 && result.length === 1) result[0].keys = [];
	}
	return result;
});
// node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.mjs
function colors(specifier) {
	var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
	while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
	return colors;
}
colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
colors("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");
var Paired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
colors("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
var ramp$1 = (scheme) => rgbBasis(scheme[scheme.length - 1]);
ramp$1(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(colors));
ramp$1(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(colors));
ramp$1(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(colors));
ramp$1(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(colors));
ramp$1(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(colors));
ramp$1(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(colors));
ramp$1(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(colors));
ramp$1(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(colors));
ramp$1(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(colors));
ramp$1(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(colors));
ramp$1(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(colors));
ramp$1(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(colors));
ramp$1(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(colors));
ramp$1(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(colors));
ramp$1(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(colors));
ramp$1(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(colors));
ramp$1(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(colors));
ramp$1(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(colors));
ramp$1(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(colors));
ramp$1(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(colors));
ramp$1(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(colors));
ramp$1(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(colors));
ramp$1(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(colors));
ramp$1(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(colors));
ramp$1(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(colors));
ramp$1(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(colors));
ramp$1(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(colors));
cubehelixLong(cubehelix$1(300, .5, 0), cubehelix$1(-240, .5, 1));
cubehelixLong(cubehelix$1(-100, .75, .35), cubehelix$1(80, 1.5, .8));
cubehelixLong(cubehelix$1(260, .75, .35), cubehelix$1(80, 1.5, .8));
cubehelix$1();
rgb$1();
function ramp(range) {
	var n = range.length;
	return function(t) {
		return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
	};
}
ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
// node_modules/force-graph/dist/force-graph.mjs
function styleInject(css, ref) {
	if (ref === void 0) ref = {};
	var insertAt = ref.insertAt;
	if (typeof document === "undefined") return;
	var head = document.head || document.getElementsByTagName("head")[0];
	var style = document.createElement("style");
	style.type = "text/css";
	if (insertAt === "top") {
		if (head.firstChild) head.insertBefore(style, head.firstChild);
		else head.appendChild(style);
	} else head.appendChild(style);
	if (style.styleSheet) style.styleSheet.cssText = css;
	else style.appendChild(document.createTextNode(css));
}
styleInject(".force-graph-container canvas {\n  display: block;\n  user-select: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.force-graph-container .clickable {\n  cursor: pointer;\n}\n\n.force-graph-container .grabbable {\n  cursor: move;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.force-graph-container .grabbable:active {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n");
var autoColorScale = ordinal(Paired);
function autoColorObjects(objects, colorByAccessor, colorField) {
	if (!colorByAccessor || typeof colorField !== "string") return;
	objects.filter((obj) => !obj[colorField]).forEach((obj) => {
		obj[colorField] = autoColorScale(colorByAccessor(obj));
	});
}
function getDagDepths({ nodes, links }, idAccessor, { nodeFilter = () => true, onLoopError = (loopIds) => {
	throw `Invalid DAG structure! Found cycle in node path: ${loopIds.join(" -> ")}.`;
} } = {}) {
	const graph = {};
	nodes.forEach((node) => graph[idAccessor(node)] = {
		data: node,
		out: [],
		depth: -1,
		skip: !nodeFilter(node)
	});
	links.forEach(({ source, target }) => {
		const sourceId = getNodeId(source);
		const targetId = getNodeId(target);
		if (!graph.hasOwnProperty(sourceId)) throw `Missing source node with id: ${sourceId}`;
		if (!graph.hasOwnProperty(targetId)) throw `Missing target node with id: ${targetId}`;
		const sourceNode = graph[sourceId];
		const targetNode = graph[targetId];
		sourceNode.out.push(targetNode);
		function getNodeId(node) {
			return typeof node === "object" ? idAccessor(node) : node;
		}
	});
	const foundLoops = [];
	traverse(Object.values(graph));
	return Object.assign({}, ...Object.entries(graph).filter(([, node]) => !node.skip).map(([id, node]) => ({ [id]: node.depth })));
	function traverse(nodes, nodeStack = [], currentDepth = 0) {
		for (let i = 0, l = nodes.length; i < l; i++) {
			const node = nodes[i];
			if (nodeStack.indexOf(node) !== -1) {
				const loop = [...nodeStack.slice(nodeStack.indexOf(node)), node].map((d) => idAccessor(d.data));
				if (!foundLoops.some((foundLoop) => foundLoop.length === loop.length && foundLoop.every((id, idx) => id === loop[idx]))) {
					foundLoops.push(loop);
					onLoopError(loop);
				}
				continue;
			}
			if (currentDepth > node.depth) {
				node.depth = currentDepth;
				traverse(node.out, [...nodeStack, node], currentDepth + (node.skip ? 0 : 1));
			}
		}
	}
}
var DAG_LEVEL_NODE_RATIO = 2;
var notifyRedraw = (_, state) => state.onNeedsRedraw && state.onNeedsRedraw();
var updDataPhotons = (_, state) => {
	if (!state.isShadow) {
		const linkParticlesAccessor = index$3(state.linkDirectionalParticles);
		state.graphData.links.forEach((link) => {
			const numPhotons = Math.round(Math.abs(linkParticlesAccessor(link)));
			if (numPhotons) link.__photons = [...Array(numPhotons)].map(() => ({}));
			else delete link.__photons;
		});
	}
};
var CanvasForceGraph = index$4({
	props: {
		graphData: {
			default: {
				nodes: [],
				links: []
			},
			onChange(_, state) {
				state.engineRunning = false;
				updDataPhotons(_, state);
			}
		},
		dagMode: { onChange(dagMode, state) {
			!dagMode && (state.graphData.nodes || []).forEach((n) => n.fx = n.fy = void 0);
		} },
		dagLevelDistance: {},
		dagNodeFilter: { default: (node) => true },
		onDagError: { triggerUpdate: false },
		nodeRelSize: {
			default: 4,
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		nodeId: { default: "id" },
		nodeVal: {
			default: "val",
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		nodeColor: {
			default: "color",
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		nodeAutoColorBy: {},
		nodeCanvasObject: {
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		nodeCanvasObjectMode: {
			default: () => "replace",
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		nodeVisibility: {
			default: true,
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkSource: { default: "source" },
		linkTarget: { default: "target" },
		linkVisibility: {
			default: true,
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkColor: {
			default: "color",
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkAutoColorBy: {},
		linkLineDash: {
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkWidth: {
			default: 1,
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkCurvature: {
			default: 0,
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkSelfCurveRotation: {
			default: 0,
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkCanvasObject: {
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkCanvasObjectMode: {
			default: () => "replace",
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkDirectionalArrowLength: {
			default: 0,
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkDirectionalArrowColor: {
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkDirectionalArrowRelPos: {
			default: .5,
			triggerUpdate: false,
			onChange: notifyRedraw
		},
		linkDirectionalParticles: {
			default: 0,
			triggerUpdate: false,
			onChange: updDataPhotons
		},
		linkDirectionalParticleSpeed: {
			default: .01,
			triggerUpdate: false
		},
		linkDirectionalParticleOffset: {
			default: 0,
			triggerUpdate: false
		},
		linkDirectionalParticleWidth: {
			default: 4,
			triggerUpdate: false
		},
		linkDirectionalParticleColor: { triggerUpdate: false },
		linkDirectionalParticleCanvasObject: { triggerUpdate: false },
		globalScale: {
			default: 1,
			triggerUpdate: false
		},
		d3AlphaMin: {
			default: 0,
			triggerUpdate: false
		},
		d3AlphaDecay: {
			default: .0228,
			triggerUpdate: false,
			onChange(alphaDecay, state) {
				state.forceLayout.alphaDecay(alphaDecay);
			}
		},
		d3AlphaTarget: {
			default: 0,
			triggerUpdate: false,
			onChange(alphaTarget, state) {
				state.forceLayout.alphaTarget(alphaTarget);
			}
		},
		d3VelocityDecay: {
			default: .4,
			triggerUpdate: false,
			onChange(velocityDecay, state) {
				state.forceLayout.velocityDecay(velocityDecay);
			}
		},
		warmupTicks: {
			default: 0,
			triggerUpdate: false
		},
		cooldownTicks: {
			default: Infinity,
			triggerUpdate: false
		},
		cooldownTime: {
			default: 15e3,
			triggerUpdate: false
		},
		onUpdate: {
			default: () => {},
			triggerUpdate: false
		},
		onFinishUpdate: {
			default: () => {},
			triggerUpdate: false
		},
		onEngineTick: {
			default: () => {},
			triggerUpdate: false
		},
		onEngineStop: {
			default: () => {},
			triggerUpdate: false
		},
		onNeedsRedraw: { triggerUpdate: false },
		isShadow: {
			default: false,
			triggerUpdate: false
		}
	},
	methods: {
		d3Force: function(state, forceName, forceFn) {
			if (forceFn === void 0) return state.forceLayout.force(forceName);
			state.forceLayout.force(forceName, forceFn);
			return this;
		},
		d3ReheatSimulation: function(state) {
			state.forceLayout.alpha(1);
			this.resetCountdown();
			return this;
		},
		resetCountdown: function(state) {
			state.cntTicks = 0;
			state.startTickTime = /* @__PURE__ */ new Date();
			state.engineRunning = true;
			return this;
		},
		isEngineRunning: (state) => !!state.engineRunning,
		tickFrame: function(state) {
			!state.isShadow && layoutTick();
			paintLinks();
			!state.isShadow && paintArrows();
			!state.isShadow && paintPhotons();
			paintNodes();
			return this;
			function layoutTick() {
				if (state.engineRunning) {
					if (++state.cntTicks > state.cooldownTicks || /* @__PURE__ */ new Date() - state.startTickTime > state.cooldownTime || state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin) {
						state.engineRunning = false;
						state.onEngineStop();
					} else {
						state.forceLayout.tick();
						state.onEngineTick();
					}
				}
			}
			function paintNodes() {
				const getVisibility = index$3(state.nodeVisibility);
				const getVal = index$3(state.nodeVal);
				const getColor = index$3(state.nodeColor);
				const getNodeCanvasObjectMode = index$3(state.nodeCanvasObjectMode);
				const ctx = state.ctx;
				const padAmount = state.isShadow / state.globalScale;
				const visibleNodes = state.graphData.nodes.filter(getVisibility);
				ctx.save();
				visibleNodes.forEach((node) => {
					const nodeCanvasObjectMode = getNodeCanvasObjectMode(node);
					if (state.nodeCanvasObject && (nodeCanvasObjectMode === "before" || nodeCanvasObjectMode === "replace")) {
						state.nodeCanvasObject(node, ctx, state.globalScale);
						if (nodeCanvasObjectMode === "replace") {
							ctx.restore();
							return;
						}
					}
					const r = Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize + padAmount;
					ctx.beginPath();
					ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
					ctx.fillStyle = getColor(node) || "rgba(31, 120, 180, 0.92)";
					ctx.fill();
					if (state.nodeCanvasObject && nodeCanvasObjectMode === "after") state.nodeCanvasObject(node, state.ctx, state.globalScale);
				});
				ctx.restore();
			}
			function paintLinks() {
				const getVisibility = index$3(state.linkVisibility);
				const getColor = index$3(state.linkColor);
				const getWidth = index$3(state.linkWidth);
				const getLineDash = index$3(state.linkLineDash);
				const getCurvature = index$3(state.linkCurvature);
				const getSelfCurveRotation = index$3(state.linkSelfCurveRotation);
				const getLinkCanvasObjectMode = index$3(state.linkCanvasObjectMode);
				const ctx = state.ctx;
				const padAmount = state.isShadow * 2;
				const visibleLinks = state.graphData.links.filter(getVisibility);
				visibleLinks.forEach(calcLinkControlPoints);
				let beforeCustomLinks = [], afterCustomLinks = [], defaultPaintLinks = visibleLinks;
				if (state.linkCanvasObject) {
					const replaceCustomLinks = [], otherCustomLinks = [];
					visibleLinks.forEach((d) => ({
						before: beforeCustomLinks,
						after: afterCustomLinks,
						replace: replaceCustomLinks
					}[getLinkCanvasObjectMode(d)] || otherCustomLinks).push(d));
					defaultPaintLinks = [
						...beforeCustomLinks,
						...afterCustomLinks,
						...otherCustomLinks
					];
					beforeCustomLinks = beforeCustomLinks.concat(replaceCustomLinks);
				}
				ctx.save();
				beforeCustomLinks.forEach((link) => state.linkCanvasObject(link, ctx, state.globalScale));
				ctx.restore();
				const linksPerColor = index(defaultPaintLinks, [
					getColor,
					getWidth,
					getLineDash
				]);
				ctx.save();
				Object.entries(linksPerColor).forEach(([color, linksPerWidth]) => {
					const lineColor = !color || color === "undefined" ? "rgba(0,0,0,0.15)" : color;
					Object.entries(linksPerWidth).forEach(([width, linesPerLineDash]) => {
						const lineWidth = (width || 1) / state.globalScale + padAmount;
						Object.entries(linesPerLineDash).forEach(([dashSegments, links]) => {
							const lineDashSegments = getLineDash(links[0]);
							ctx.beginPath();
							links.forEach((link) => {
								const start = link.source;
								const end = link.target;
								if (!start || !end || !start.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
								ctx.moveTo(start.x, start.y);
								const controlPoints = link.__controlPoints;
								if (!controlPoints) ctx.lineTo(end.x, end.y);
								else ctx[controlPoints.length === 2 ? "quadraticCurveTo" : "bezierCurveTo"](...controlPoints, end.x, end.y);
							});
							ctx.strokeStyle = lineColor;
							ctx.lineWidth = lineWidth;
							ctx.setLineDash(lineDashSegments || []);
							ctx.stroke();
						});
					});
				});
				ctx.restore();
				ctx.save();
				afterCustomLinks.forEach((link) => state.linkCanvasObject(link, ctx, state.globalScale));
				ctx.restore();
				function calcLinkControlPoints(link) {
					const curvature = getCurvature(link);
					if (!curvature) {
						link.__controlPoints = null;
						return;
					}
					const start = link.source;
					const end = link.target;
					if (!start || !end || !start.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
					const l = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
					if (l > 0) {
						const a = Math.atan2(end.y - start.y, end.x - start.x);
						const d = l * curvature;
						const cp = {
							x: (start.x + end.x) / 2 + d * Math.cos(a - Math.PI / 2),
							y: (start.y + end.y) / 2 + d * Math.sin(a - Math.PI / 2)
						};
						link.__controlPoints = [cp.x, cp.y];
					} else {
						const d = curvature * 70;
						const angleRad = (getSelfCurveRotation(link) || 0) * Math.PI / 180;
						const outAngle = angleRad - Math.PI / 2;
						const inAngle = angleRad;
						link.__controlPoints = [
							end.x + d * Math.cos(outAngle),
							end.y + d * Math.sin(outAngle),
							end.x + d * Math.cos(inAngle),
							end.y + d * Math.sin(inAngle)
						];
					}
				}
			}
			function paintArrows() {
				const ARROW_WH_RATIO = 1.6;
				const getLength = index$3(state.linkDirectionalArrowLength);
				const getRelPos = index$3(state.linkDirectionalArrowRelPos);
				const getVisibility = index$3(state.linkVisibility);
				const getColor = index$3(state.linkDirectionalArrowColor || state.linkColor);
				const getNodeVal = index$3(state.nodeVal);
				const ctx = state.ctx;
				ctx.save();
				state.graphData.links.filter(getVisibility).forEach((link) => {
					const arrowLength = getLength(link);
					if (!arrowLength || arrowLength < 0) return;
					const start = link.source;
					const end = link.target;
					if (!start || !end || !start.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
					const startR = Math.sqrt(Math.max(0, getNodeVal(start) || 1)) * state.nodeRelSize;
					const endR = Math.sqrt(Math.max(0, getNodeVal(end) || 1)) * state.nodeRelSize;
					const arrowRelPos = Math.min(1, Math.max(0, getRelPos(link)));
					const arrowColor = getColor(link) || "rgba(0,0,0,0.28)";
					const arrowHalfWidth = arrowLength / ARROW_WH_RATIO / 2;
					const bzLine = link.__controlPoints && new Bezier(start.x, start.y, ...link.__controlPoints, end.x, end.y);
					const getCoordsAlongLine = bzLine ? (t) => bzLine.get(t) : (t) => ({
						x: start.x + (end.x - start.x) * t || 0,
						y: start.y + (end.y - start.y) * t || 0
					});
					const lineLen = bzLine ? bzLine.length() : Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
					const posAlongLine = startR + arrowLength + (lineLen - startR - endR - arrowLength) * arrowRelPos;
					const arrowHead = getCoordsAlongLine(posAlongLine / lineLen);
					const arrowTail = getCoordsAlongLine((posAlongLine - arrowLength) / lineLen);
					const arrowTailVertex = getCoordsAlongLine((posAlongLine - arrowLength * .8) / lineLen);
					const arrowTailAngle = Math.atan2(arrowHead.y - arrowTail.y, arrowHead.x - arrowTail.x) - Math.PI / 2;
					ctx.beginPath();
					ctx.moveTo(arrowHead.x, arrowHead.y);
					ctx.lineTo(arrowTail.x + arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y + arrowHalfWidth * Math.sin(arrowTailAngle));
					ctx.lineTo(arrowTailVertex.x, arrowTailVertex.y);
					ctx.lineTo(arrowTail.x - arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y - arrowHalfWidth * Math.sin(arrowTailAngle));
					ctx.fillStyle = arrowColor;
					ctx.fill();
				});
				ctx.restore();
			}
			function paintPhotons() {
				const getNumPhotons = index$3(state.linkDirectionalParticles);
				const getSpeed = index$3(state.linkDirectionalParticleSpeed);
				const getOffset = index$3(state.linkDirectionalParticleOffset);
				const getDiameter = index$3(state.linkDirectionalParticleWidth);
				const getVisibility = index$3(state.linkVisibility);
				const getColor = index$3(state.linkDirectionalParticleColor || state.linkColor);
				const ctx = state.ctx;
				ctx.save();
				state.graphData.links.filter(getVisibility).forEach((link) => {
					const numCyclePhotons = getNumPhotons(link);
					if (!link.hasOwnProperty("__photons") || !link.__photons.length) return;
					const start = link.source;
					const end = link.target;
					if (!start || !end || !start.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
					const particleSpeed = getSpeed(link);
					const particleOffset = Math.abs(getOffset(link));
					const photons = link.__photons || [];
					const photonR = Math.max(0, getDiameter(link) / 2) / Math.sqrt(state.globalScale);
					const photonColor = getColor(link) || "rgba(0,0,0,0.28)";
					ctx.fillStyle = photonColor;
					const bzLine = link.__controlPoints ? new Bezier(start.x, start.y, ...link.__controlPoints, end.x, end.y) : null;
					let cyclePhotonIdx = 0;
					let needsCleanup = false;
					photons.forEach((photon) => {
						const singleHop = !!photon.__singleHop;
						if (!photon.hasOwnProperty("__progressRatio")) photon.__progressRatio = singleHop ? particleSpeed < 0 ? 1 : 0 : (cyclePhotonIdx + particleOffset) / numCyclePhotons;
						!singleHop && cyclePhotonIdx++;
						photon.__progressRatio += particleSpeed;
						if (photon.__progressRatio >= 1 || photon.__progressRatio < 0) {
							if (!singleHop) {
								photon.__progressRatio = photon.__progressRatio % 1;
								photon.__progressRatio < 0 && photon.__progressRatio++;
							} else {
								needsCleanup = true;
								return;
							}
						}
						const photonPosRatio = photon.__progressRatio;
						const coords = bzLine ? bzLine.get(photonPosRatio) : {
							x: start.x + (end.x - start.x) * photonPosRatio || 0,
							y: start.y + (end.y - start.y) * photonPosRatio || 0
						};
						if (state.linkDirectionalParticleCanvasObject) state.linkDirectionalParticleCanvasObject(coords.x, coords.y, link, ctx, state.globalScale);
						else {
							ctx.beginPath();
							ctx.arc(coords.x, coords.y, photonR, 0, 2 * Math.PI, false);
							ctx.fill();
						}
					});
					if (needsCleanup) link.__photons = link.__photons.filter((photon) => !photon.__singleHop || photon.__progressRatio <= 1 && photon.__progressRatio >= 0);
				});
				ctx.restore();
			}
		},
		emitParticle: function(state, link) {
			if (link) {
				!link.__photons && (link.__photons = []);
				link.__photons.push({ __singleHop: true });
			}
			return this;
		}
	},
	stateInit: () => ({
		forceLayout: simulation_default().force("link", link_default()).force("charge", manyBody_default()).force("center", center_default()).force("dagRadial", null).stop(),
		engineRunning: false
	}),
	init(canvasCtx, state) {
		state.ctx = canvasCtx;
	},
	update(state, changedProps) {
		state.engineRunning = false;
		state.onUpdate();
		if (state.nodeAutoColorBy !== null) autoColorObjects(state.graphData.nodes, index$3(state.nodeAutoColorBy), state.nodeColor);
		if (state.linkAutoColorBy !== null) autoColorObjects(state.graphData.links, index$3(state.linkAutoColorBy), state.linkColor);
		state.graphData.links.forEach((link) => {
			link.source = link[state.linkSource];
			link.target = link[state.linkTarget];
		});
		state.forceLayout.stop().alpha(1).nodes(state.graphData.nodes);
		const linkForce = state.forceLayout.force("link");
		if (linkForce) linkForce.id((d) => d[state.nodeId]).links(state.graphData.links);
		const nodeDepths = state.dagMode && getDagDepths(state.graphData, (node) => node[state.nodeId], {
			nodeFilter: state.dagNodeFilter,
			onLoopError: state.onDagError || void 0
		});
		const maxDepth = Math.max(...Object.values(nodeDepths || []));
		const dagLevelDistance = state.dagLevelDistance || state.graphData.nodes.length / (maxDepth || 1) * DAG_LEVEL_NODE_RATIO * (["radialin", "radialout"].indexOf(state.dagMode) !== -1 ? .7 : 1);
		if ([
			"lr",
			"rl",
			"td",
			"bu"
		].includes(changedProps.dagMode)) {
			const resetProp = ["lr", "rl"].includes(changedProps.dagMode) ? "fx" : "fy";
			state.graphData.nodes.filter(state.dagNodeFilter).forEach((node) => delete node[resetProp]);
		}
		if ([
			"lr",
			"rl",
			"td",
			"bu"
		].includes(state.dagMode)) {
			const invert = ["rl", "bu"].includes(state.dagMode);
			const fixFn = (node) => (nodeDepths[node[state.nodeId]] - maxDepth / 2) * dagLevelDistance * (invert ? -1 : 1);
			const resetProp = ["lr", "rl"].includes(state.dagMode) ? "fx" : "fy";
			state.graphData.nodes.filter(state.dagNodeFilter).forEach((node) => node[resetProp] = fixFn(node));
		}
		state.forceLayout.force("dagRadial", ["radialin", "radialout"].indexOf(state.dagMode) !== -1 ? radial_default((node) => {
			const nodeDepth = nodeDepths[node[state.nodeId]] || -1;
			return (state.dagMode === "radialin" ? maxDepth - nodeDepth : nodeDepth) * dagLevelDistance;
		}).strength((node) => state.dagNodeFilter(node) ? 1 : 0) : null);
		for (let i = 0; i < state.warmupTicks && !(state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin); i++) state.forceLayout.tick();
		this.resetCountdown();
		state.onFinishUpdate();
	}
});
function linkKapsule(kapsulePropNames, kapsuleType) {
	const propNames = kapsulePropNames instanceof Array ? kapsulePropNames : [kapsulePropNames];
	const dummyK = new kapsuleType();
	dummyK._destructor && dummyK._destructor();
	return {
		linkProp: function(prop) {
			return {
				default: dummyK[prop](),
				onChange(v, state) {
					propNames.forEach((propName) => state[propName][prop](v));
				},
				triggerUpdate: false
			};
		},
		linkMethod: function(method) {
			return function(state, ...args) {
				const returnVals = [];
				propNames.forEach((propName) => {
					const kapsuleInstance = state[propName];
					const returnVal = kapsuleInstance[method](...args);
					if (returnVal !== kapsuleInstance) returnVals.push(returnVal);
				});
				return returnVals.length ? returnVals[0] : this;
			};
		}
	};
}
var HOVER_CANVAS_THROTTLE_DELAY = 800;
var ZOOM2NODES_FACTOR = 4;
var DRAG_CLICK_TOLERANCE_PX = 5;
var bindFG = linkKapsule("forceGraph", CanvasForceGraph);
var bindBoth = linkKapsule(["forceGraph", "shadowGraph"], CanvasForceGraph);
var linkedProps = Object.assign(...[
	"nodeColor",
	"nodeAutoColorBy",
	"nodeCanvasObject",
	"nodeCanvasObjectMode",
	"linkColor",
	"linkAutoColorBy",
	"linkLineDash",
	"linkWidth",
	"linkCanvasObject",
	"linkCanvasObjectMode",
	"linkDirectionalArrowLength",
	"linkDirectionalArrowColor",
	"linkDirectionalArrowRelPos",
	"linkDirectionalParticles",
	"linkDirectionalParticleSpeed",
	"linkDirectionalParticleOffset",
	"linkDirectionalParticleWidth",
	"linkDirectionalParticleColor",
	"linkDirectionalParticleCanvasObject",
	"dagMode",
	"dagLevelDistance",
	"dagNodeFilter",
	"onDagError",
	"d3AlphaMin",
	"d3AlphaDecay",
	"d3VelocityDecay",
	"warmupTicks",
	"cooldownTicks",
	"cooldownTime",
	"onEngineTick",
	"onEngineStop"
].map((p) => ({ [p]: bindFG.linkProp(p) })), ...[
	"nodeRelSize",
	"nodeId",
	"nodeVal",
	"nodeVisibility",
	"linkSource",
	"linkTarget",
	"linkVisibility",
	"linkCurvature",
	"linkSelfCurveRotation"
].map((p) => ({ [p]: bindBoth.linkProp(p) })));
var linkedMethods = Object.assign(...[
	"d3Force",
	"d3ReheatSimulation",
	"emitParticle"
].map((p) => ({ [p]: bindFG.linkMethod(p) })));
function adjustCanvasSize(state) {
	if (state.canvas) {
		let curWidth = state.canvas.width;
		let curHeight = state.canvas.height;
		if (curWidth === 300 && curHeight === 150) curWidth = curHeight = 0;
		const pxScale = window.devicePixelRatio;
		curWidth /= pxScale;
		curHeight /= pxScale;
		[state.canvas, state.shadowCanvas].forEach((canvas) => {
			canvas.style.width = `${state.width}px`;
			canvas.style.height = `${state.height}px`;
			canvas.width = state.width * pxScale;
			canvas.height = state.height * pxScale;
			if (!curWidth && !curHeight) canvas.getContext("2d").scale(pxScale, pxScale);
		});
		const k = transform(state.canvas).k;
		state.zoom.translateBy(state.zoom.__baseElem, (state.width - curWidth) / 2 / k, (state.height - curHeight) / 2 / k);
		state.needsRedraw = true;
	}
}
function resetTransform(ctx) {
	const pxRatio = window.devicePixelRatio;
	ctx.setTransform(pxRatio, 0, 0, pxRatio, 0, 0);
}
function clearCanvas(ctx, width, height) {
	ctx.save();
	resetTransform(ctx);
	ctx.clearRect(0, 0, width, height);
	ctx.restore();
}
var forceGraph = index$4({
	props: {
		width: {
			default: window.innerWidth,
			onChange: (_, state) => adjustCanvasSize(state),
			triggerUpdate: false
		},
		height: {
			default: window.innerHeight,
			onChange: (_, state) => adjustCanvasSize(state),
			triggerUpdate: false
		},
		graphData: {
			default: {
				nodes: [],
				links: []
			},
			onChange: (d, state) => {
				[d.nodes, d.links].every((arr) => (arr || []).every((d) => !d.hasOwnProperty("__indexColor"))) && state.colorTracker.reset();
				[{
					type: "Node",
					objs: d.nodes
				}, {
					type: "Link",
					objs: d.links
				}].forEach(hexIndex);
				state.forceGraph.graphData(d);
				state.shadowGraph.graphData(d);
				function hexIndex({ type, objs }) {
					objs.filter((d) => {
						if (!d.hasOwnProperty("__indexColor")) return true;
						const cur = state.colorTracker.lookup(d.__indexColor);
						return !cur || !cur.hasOwnProperty("d") || cur.d !== d;
					}).forEach((d) => {
						d.__indexColor = state.colorTracker.register({
							type,
							d
						});
					});
				}
			},
			triggerUpdate: false
		},
		backgroundColor: {
			onChange(color, state) {
				state.canvas && color && (state.canvas.style.background = color);
			},
			triggerUpdate: false
		},
		nodeLabel: {
			default: "name",
			triggerUpdate: false
		},
		nodePointerAreaPaint: {
			onChange(paintFn, state) {
				state.shadowGraph.nodeCanvasObject(!paintFn ? null : (node, ctx, globalScale) => paintFn(node, node.__indexColor, ctx, globalScale));
				state.flushShadowCanvas && state.flushShadowCanvas();
			},
			triggerUpdate: false
		},
		linkPointerAreaPaint: {
			onChange(paintFn, state) {
				state.shadowGraph.linkCanvasObject(!paintFn ? null : (link, ctx, globalScale) => paintFn(link, link.__indexColor, ctx, globalScale));
				state.flushShadowCanvas && state.flushShadowCanvas();
			},
			triggerUpdate: false
		},
		linkLabel: {
			default: "name",
			triggerUpdate: false
		},
		linkHoverPrecision: {
			default: 4,
			triggerUpdate: false
		},
		minZoom: {
			default: .01,
			onChange(minZoom, state) {
				state.zoom.scaleExtent([minZoom, state.zoom.scaleExtent()[1]]);
			},
			triggerUpdate: false
		},
		maxZoom: {
			default: 1e3,
			onChange(maxZoom, state) {
				state.zoom.scaleExtent([state.zoom.scaleExtent()[0], maxZoom]);
			},
			triggerUpdate: false
		},
		enableNodeDrag: {
			default: true,
			triggerUpdate: false
		},
		enableZoomInteraction: {
			default: true,
			triggerUpdate: false
		},
		enablePanInteraction: {
			default: true,
			triggerUpdate: false
		},
		enableZoomPanInteraction: {
			default: true,
			triggerUpdate: false
		},
		enablePointerInteraction: {
			default: true,
			onChange(_, state) {
				state.hoverObj = null;
			},
			triggerUpdate: false
		},
		autoPauseRedraw: {
			default: true,
			triggerUpdate: false
		},
		onNodeDrag: {
			default: () => {},
			triggerUpdate: false
		},
		onNodeDragEnd: {
			default: () => {},
			triggerUpdate: false
		},
		onNodeClick: { triggerUpdate: false },
		onNodeRightClick: { triggerUpdate: false },
		onNodeHover: { triggerUpdate: false },
		onLinkClick: { triggerUpdate: false },
		onLinkRightClick: { triggerUpdate: false },
		onLinkHover: { triggerUpdate: false },
		onBackgroundClick: { triggerUpdate: false },
		onBackgroundRightClick: { triggerUpdate: false },
		showPointerCursor: {
			default: true,
			triggerUpdate: false
		},
		onZoom: { triggerUpdate: false },
		onZoomEnd: { triggerUpdate: false },
		onRenderFramePre: { triggerUpdate: false },
		onRenderFramePost: { triggerUpdate: false },
		...linkedProps
	},
	aliases: { stopAnimation: "pauseAnimation" },
	methods: {
		graph2ScreenCoords: function(state, x, y) {
			const t = transform(state.canvas);
			return {
				x: x * t.k + t.x,
				y: y * t.k + t.y
			};
		},
		screen2GraphCoords: function(state, x, y) {
			const t = transform(state.canvas);
			return {
				x: (x - t.x) / t.k,
				y: (y - t.y) / t.k
			};
		},
		centerAt: function(state, x, y, transitionDuration) {
			if (!state.canvas) return null;
			if (x !== void 0 || y !== void 0) {
				const finalPos = Object.assign({}, x !== void 0 ? { x } : {}, y !== void 0 ? { y } : {});
				if (!transitionDuration) setCenter(finalPos);
				else state.tweenGroup.add(new Tween(getCenter()).to(finalPos, transitionDuration).easing(Easing.Quadratic.Out).onUpdate(setCenter).onComplete(function() {
					state.tweenGroup.remove(this);
				}).start());
				return this;
			}
			return getCenter();
			function getCenter() {
				const t = transform(state.canvas);
				return {
					x: (state.width / 2 - t.x) / t.k,
					y: (state.height / 2 - t.y) / t.k
				};
			}
			function setCenter({ x, y }) {
				state.zoom.translateTo(state.zoom.__baseElem, x === void 0 ? getCenter().x : x, y === void 0 ? getCenter().y : y);
				state.needsRedraw = true;
			}
		},
		zoom: function(state, k, transitionDuration) {
			if (!state.canvas) return null;
			if (k !== void 0) {
				if (!transitionDuration) setZoom(k);
				else state.tweenGroup.add(new Tween({ k: getZoom() }).to({ k }, transitionDuration).easing(Easing.Quadratic.Out).onUpdate(({ k }) => setZoom(k)).onComplete(function() {
					state.tweenGroup.remove(this);
				}).start());
				return this;
			}
			return getZoom();
			function getZoom() {
				return transform(state.canvas).k;
			}
			function setZoom(k) {
				state.zoom.scaleTo(state.zoom.__baseElem, k);
				state.needsRedraw = true;
			}
		},
		zoomToFit: function(state, transitionDuration = 0, padding = 10, ...bboxArgs) {
			const bbox = this.getGraphBbox(...bboxArgs);
			if (bbox) {
				const center = {
					x: (bbox.x[0] + bbox.x[1]) / 2,
					y: (bbox.y[0] + bbox.y[1]) / 2
				};
				const zoomK = Math.max(1e-12, Math.min(0xe8d4a51000, (state.width - padding * 2) / (bbox.x[1] - bbox.x[0]), (state.height - padding * 2) / (bbox.y[1] - bbox.y[0])));
				this.centerAt(center.x, center.y, transitionDuration);
				this.zoom(zoomK, transitionDuration);
			}
			return this;
		},
		getGraphBbox: function(state, nodeFilter = () => true) {
			const getVal = index$3(state.nodeVal);
			const getR = (node) => Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize;
			const nodesPos = state.graphData.nodes.filter(nodeFilter).map((node) => ({
				x: node.x,
				y: node.y,
				r: getR(node)
			}));
			return !nodesPos.length ? null : {
				x: [min$1(nodesPos, (node) => node.x - node.r), max$1(nodesPos, (node) => node.x + node.r)],
				y: [min$1(nodesPos, (node) => node.y - node.r), max$1(nodesPos, (node) => node.y + node.r)]
			};
		},
		pauseAnimation: function(state) {
			if (state.animationFrameRequestId) {
				cancelAnimationFrame(state.animationFrameRequestId);
				state.animationFrameRequestId = null;
			}
			return this;
		},
		resumeAnimation: function(state) {
			if (!state.animationFrameRequestId) this._animationCycle();
			return this;
		},
		_destructor: function() {
			this.pauseAnimation();
			this.graphData({
				nodes: [],
				links: []
			});
		},
		...linkedMethods
	},
	stateInit: () => ({
		lastSetZoom: 1,
		zoom: zoom(),
		forceGraph: new CanvasForceGraph(),
		shadowGraph: new CanvasForceGraph().cooldownTicks(0).nodeColor("__indexColor").linkColor("__indexColor").isShadow(true),
		colorTracker: new _default(),
		tweenGroup: new Group()
	}),
	init: function(domNode, state) {
		domNode.innerHTML = "";
		const container = document.createElement("div");
		container.classList.add("force-graph-container");
		container.style.position = "relative";
		domNode.appendChild(container);
		state.canvas = document.createElement("canvas");
		if (state.backgroundColor) state.canvas.style.background = state.backgroundColor;
		container.appendChild(state.canvas);
		state.shadowCanvas = document.createElement("canvas");
		const ctx = state.canvas.getContext("2d");
		const shadowCtx = state.shadowCanvas.getContext("2d", { willReadFrequently: true });
		const pointerPos = {
			x: -0xe8d4a51000,
			y: -0xe8d4a51000
		};
		const getObjUnderPointer = () => {
			let obj = null;
			const pxScale = window.devicePixelRatio;
			const px = pointerPos.x > 0 && pointerPos.y > 0 ? shadowCtx.getImageData(pointerPos.x * pxScale, pointerPos.y * pxScale, 1, 1) : null;
			px && (obj = state.colorTracker.lookup(px.data));
			return obj;
		};
		select(state.canvas).call(drag().subject(() => {
			if (!state.enableNodeDrag) return null;
			const obj = getObjUnderPointer();
			return obj && obj.type === "Node" ? obj.d : null;
		}).on("start", (ev) => {
			const obj = ev.subject;
			obj.__initialDragPos = {
				x: obj.x,
				y: obj.y,
				fx: obj.fx,
				fy: obj.fy
			};
			if (!ev.active) {
				obj.fx = obj.x;
				obj.fy = obj.y;
			}
			state.canvas.classList.add("grabbable");
		}).on("drag", (ev) => {
			const obj = ev.subject;
			const initPos = obj.__initialDragPos;
			const dragPos = ev;
			const k = transform(state.canvas).k;
			const translate = {
				x: initPos.x + (dragPos.x - initPos.x) / k - obj.x,
				y: initPos.y + (dragPos.y - initPos.y) / k - obj.y
			};
			["x", "y"].forEach((c) => obj[`f${c}`] = obj[c] = initPos[c] + (dragPos[c] - initPos[c]) / k);
			if (!obj.__dragged && DRAG_CLICK_TOLERANCE_PX >= Math.sqrt(sum(["x", "y"].map((k) => (ev[k] - initPos[k]) ** 2)))) return;
			state.forceGraph.d3AlphaTarget(.3).resetCountdown();
			state.isPointerDragging = true;
			obj.__dragged = true;
			state.onNodeDrag(obj, translate);
		}).on("end", (ev) => {
			const obj = ev.subject;
			const initPos = obj.__initialDragPos;
			const translate = {
				x: obj.x - initPos.x,
				y: obj.y - initPos.y
			};
			if (initPos.fx === void 0) obj.fx = void 0;
			if (initPos.fy === void 0) obj.fy = void 0;
			delete obj.__initialDragPos;
			if (state.forceGraph.d3AlphaTarget()) state.forceGraph.d3AlphaTarget(0).resetCountdown();
			state.canvas.classList.remove("grabbable");
			state.isPointerDragging = false;
			if (obj.__dragged) {
				delete obj.__dragged;
				state.onNodeDragEnd(obj, translate);
			}
		}));
		state.zoom(state.zoom.__baseElem = select(state.canvas));
		state.zoom.__baseElem.on("dblclick.zoom", null);
		state.zoom.filter((ev) => !ev.button && state.enableZoomPanInteraction && (ev.type !== "wheel" || index$3(state.enableZoomInteraction)(ev)) && (ev.type === "wheel" || index$3(state.enablePanInteraction)(ev))).on("zoom", (ev) => {
			const t = ev.transform;
			[ctx, shadowCtx].forEach((c) => {
				resetTransform(c);
				c.translate(t.x, t.y);
				c.scale(t.k, t.k);
			});
			state.isPointerDragging = true;
			state.onZoom && state.onZoom({
				...t,
				...this.centerAt()
			});
			state.needsRedraw = true;
		}).on("end", (ev) => {
			state.isPointerDragging = false;
			state.onZoomEnd && state.onZoomEnd({
				...ev.transform,
				...this.centerAt()
			});
		});
		adjustCanvasSize(state);
		state.forceGraph.onNeedsRedraw(() => state.needsRedraw = true).onFinishUpdate(() => {
			if (transform(state.canvas).k === state.lastSetZoom && state.graphData.nodes.length) {
				state.zoom.scaleTo(state.zoom.__baseElem, state.lastSetZoom = ZOOM2NODES_FACTOR / Math.cbrt(state.graphData.nodes.length));
				state.needsRedraw = true;
			}
		});
		state.tooltip = new index$2(container);
		["pointermove", "pointerdown"].forEach((evType) => container.addEventListener(evType, (ev) => {
			if (evType === "pointerdown") {
				state.isPointerPressed = true;
				state.pointerDownEvent = ev;
			}
			!state.isPointerDragging && ev.type === "pointermove" && state.onBackgroundClick && (ev.pressure > 0 || state.isPointerPressed) && (ev.pointerType === "mouse" || ev.movementX === void 0 || [ev.movementX, ev.movementY].some((m) => Math.abs(m) > 1)) && (state.isPointerDragging = true);
			const offset = getOffset(container);
			pointerPos.x = ev.pageX - offset.left;
			pointerPos.y = ev.pageY - offset.top;
			function getOffset(el) {
				const rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return {
					top: rect.top + scrollTop,
					left: rect.left + scrollLeft
				};
			}
		}, { passive: true }));
		container.addEventListener("pointerup", (ev) => {
			if (!state.isPointerPressed) return;
			state.isPointerPressed = false;
			if (state.isPointerDragging) {
				state.isPointerDragging = false;
				return;
			}
			const cbEvents = [ev, state.pointerDownEvent];
			requestAnimationFrame(() => {
				if (ev.button === 0) {
					if (state.hoverObj) {
						const fn = state[`on${state.hoverObj.type}Click`];
						fn && fn(state.hoverObj.d, ...cbEvents);
					} else state.onBackgroundClick && state.onBackgroundClick(...cbEvents);
				}
				if (ev.button === 2) {
					if (state.hoverObj) {
						const fn = state[`on${state.hoverObj.type}RightClick`];
						fn && fn(state.hoverObj.d, ...cbEvents);
					} else state.onBackgroundRightClick && state.onBackgroundRightClick(...cbEvents);
				}
			});
		}, { passive: true });
		container.addEventListener("contextmenu", (ev) => {
			if (!state.onBackgroundRightClick && !state.onNodeRightClick && !state.onLinkRightClick) return true;
			ev.preventDefault();
			return false;
		});
		state.forceGraph(ctx);
		state.shadowGraph(shadowCtx);
		const refreshShadowCanvas = throttle(() => {
			clearCanvas(shadowCtx, state.width, state.height);
			state.shadowGraph.linkWidth((l) => index$3(state.linkWidth)(l) + state.linkHoverPrecision);
			const t = transform(state.canvas);
			state.shadowGraph.globalScale(t.k).tickFrame();
		}, HOVER_CANVAS_THROTTLE_DELAY);
		state.flushShadowCanvas = refreshShadowCanvas.flush;
		(this._animationCycle = function animate() {
			const doRedraw = !state.autoPauseRedraw || !!state.needsRedraw || state.forceGraph.isEngineRunning() || state.graphData.links.some((d) => d.__photons && d.__photons.length);
			state.needsRedraw = false;
			if (state.enablePointerInteraction) {
				const obj = !state.isPointerDragging ? getObjUnderPointer() : null;
				if (obj !== state.hoverObj) {
					const prevObj = state.hoverObj;
					const prevObjType = prevObj ? prevObj.type : null;
					const objType = obj ? obj.type : null;
					if (prevObjType && prevObjType !== objType) {
						const fn = state[`on${prevObjType}Hover`];
						fn && fn(null, prevObj.d);
					}
					if (objType) {
						const fn = state[`on${objType}Hover`];
						fn && fn(obj.d, prevObjType === objType ? prevObj.d : null);
					}
					state.tooltip.content(obj ? index$3(state[`${obj.type.toLowerCase()}Label`])(obj.d) || null : null);
					state.canvas.classList[(obj && state[`on${objType}Click`] || !obj && state.onBackgroundClick) && index$3(state.showPointerCursor)(obj?.d) ? "add" : "remove"]("clickable");
					state.hoverObj = obj;
				}
				doRedraw && refreshShadowCanvas();
			}
			if (doRedraw) {
				clearCanvas(ctx, state.width, state.height);
				const globalScale = transform(state.canvas).k;
				state.onRenderFramePre && state.onRenderFramePre(ctx, globalScale);
				state.forceGraph.globalScale(globalScale).tickFrame();
				state.onRenderFramePost && state.onRenderFramePost(ctx, globalScale);
			}
			state.tweenGroup.update();
			state.animationFrameRequestId = requestAnimationFrame(animate);
		})();
	},
	update: function updateFn(state) {}
});
// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
/** @license React v16.13.1
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var hasSymbol = typeof Symbol === "function" && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
		function isValidElementType(type) {
			return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		}
		function typeOf(object) {
			if (typeof object === "object" && object !== null) {
				var $$typeof = object.$$typeof;
				switch ($$typeof) {
					case REACT_ELEMENT_TYPE:
						var type = object.type;
						switch (type) {
							case REACT_ASYNC_MODE_TYPE:
							case REACT_CONCURRENT_MODE_TYPE:
							case REACT_FRAGMENT_TYPE:
							case REACT_PROFILER_TYPE:
							case REACT_STRICT_MODE_TYPE:
							case REACT_SUSPENSE_TYPE: return type;
							default:
								var $$typeofType = type && type.$$typeof;
								switch ($$typeofType) {
									case REACT_CONTEXT_TYPE:
									case REACT_FORWARD_REF_TYPE:
									case REACT_LAZY_TYPE:
									case REACT_MEMO_TYPE:
									case REACT_PROVIDER_TYPE: return $$typeofType;
									default: return $$typeof;
								}
						}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
		var AsyncMode = REACT_ASYNC_MODE_TYPE;
		var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
		var ContextConsumer = REACT_CONTEXT_TYPE;
		var ContextProvider = REACT_PROVIDER_TYPE;
		var Element = REACT_ELEMENT_TYPE;
		var ForwardRef = REACT_FORWARD_REF_TYPE;
		var Fragment = REACT_FRAGMENT_TYPE;
		var Lazy = REACT_LAZY_TYPE;
		var Memo = REACT_MEMO_TYPE;
		var Portal = REACT_PORTAL_TYPE;
		var Profiler = REACT_PROFILER_TYPE;
		var StrictMode = REACT_STRICT_MODE_TYPE;
		var Suspense = REACT_SUSPENSE_TYPE;
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		function isAsyncMode(object) {
			if (!hasWarnedAboutDeprecatedIsAsyncMode) {
				hasWarnedAboutDeprecatedIsAsyncMode = true;
				console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
			}
			return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
		}
		function isConcurrentMode(object) {
			return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
		}
		function isContextConsumer(object) {
			return typeOf(object) === REACT_CONTEXT_TYPE;
		}
		function isContextProvider(object) {
			return typeOf(object) === REACT_PROVIDER_TYPE;
		}
		function isElement(object) {
			return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function isForwardRef(object) {
			return typeOf(object) === REACT_FORWARD_REF_TYPE;
		}
		function isFragment(object) {
			return typeOf(object) === REACT_FRAGMENT_TYPE;
		}
		function isLazy(object) {
			return typeOf(object) === REACT_LAZY_TYPE;
		}
		function isMemo(object) {
			return typeOf(object) === REACT_MEMO_TYPE;
		}
		function isPortal(object) {
			return typeOf(object) === REACT_PORTAL_TYPE;
		}
		function isProfiler(object) {
			return typeOf(object) === REACT_PROFILER_TYPE;
		}
		function isStrictMode(object) {
			return typeOf(object) === REACT_STRICT_MODE_TYPE;
		}
		function isSuspense(object) {
			return typeOf(object) === REACT_SUSPENSE_TYPE;
		}
		exports.AsyncMode = AsyncMode;
		exports.ConcurrentMode = ConcurrentMode;
		exports.ContextConsumer = ContextConsumer;
		exports.ContextProvider = ContextProvider;
		exports.Element = Element;
		exports.ForwardRef = ForwardRef;
		exports.Fragment = Fragment;
		exports.Lazy = Lazy;
		exports.Memo = Memo;
		exports.Portal = Portal;
		exports.Profiler = Profiler;
		exports.StrictMode = StrictMode;
		exports.Suspense = Suspense;
		exports.isAsyncMode = isAsyncMode;
		exports.isConcurrentMode = isConcurrentMode;
		exports.isContextConsumer = isContextConsumer;
		exports.isContextProvider = isContextProvider;
		exports.isElement = isElement;
		exports.isForwardRef = isForwardRef;
		exports.isFragment = isFragment;
		exports.isLazy = isLazy;
		exports.isMemo = isMemo;
		exports.isPortal = isPortal;
		exports.isProfiler = isProfiler;
		exports.isStrictMode = isStrictMode;
		exports.isSuspense = isSuspense;
		exports.isValidElementType = isValidElementType;
		exports.typeOf = typeOf;
	})();
}));
// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_development();
}));
// node_modules/object-assign/index.js
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
		if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(val);
	}
	function shouldUseNative() {
		try {
			if (!Object.assign) return false;
			var test1 = /* @__PURE__ */ new String("abc");
			test1[5] = "de";
			if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
			var test2 = {};
			for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
			if (Object.getOwnPropertyNames(test2).map(function(n) {
				return test2[n];
			}).join("") !== "0123456789") return false;
			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function(letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
			return true;
		} catch (err) {
			return false;
		}
	}
	module.exports = shouldUseNative() ? Object.assign : function(target, source) {
		var from;
		var to = toObject(target);
		var symbols;
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
			for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
			}
		}
		return to;
	};
}));
// node_modules/prop-types/lib/ReactPropTypesSecret.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}));
// node_modules/prop-types/lib/has.js
var require_has = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}));
// node_modules/prop-types/checkPropTypes.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_checkPropTypes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var printWarning = function() {};
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var loggedTypeFailures = {};
	var has = require_has();
	printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	/**
	* Assert that the values match with the type specs.
	* Error messages are memorized and will only be shown once.
	*
	* @param {object} typeSpecs Map of name to a ReactPropType
	* @param {object} values Runtime values that need to be type-checked
	* @param {string} location e.g. "prop", "context", "child context"
	* @param {string} componentName Name of the component for error messages.
	* @param {?Function} getStack Returns the component stack.
	* @private
	*/
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
			var error;
			try {
				if (typeof typeSpecs[typeSpecName] !== "function") {
					var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
					err.name = "Invariant Violation";
					throw err;
				}
				error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
			} catch (ex) {
				error = ex;
			}
			if (error && !(error instanceof Error)) printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
			if (error instanceof Error && !(error.message in loggedTypeFailures)) {
				loggedTypeFailures[error.message] = true;
				var stack = getStack ? getStack() : "";
				printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
			}
		}
	}
	/**
	* Resets warning cache when testing.
	*
	* @private
	*/
	checkPropTypes.resetWarningCache = function() {
		loggedTypeFailures = {};
	};
	module.exports = checkPropTypes;
}));
// node_modules/prop-types/factoryWithTypeCheckers.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_factoryWithTypeCheckers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactIs = require_react_is();
	var assign = require_object_assign();
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var has = require_has();
	var checkPropTypes = require_checkPropTypes();
	var printWarning = function() {};
	printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	function emptyFunctionThatReturnsNull() {
		return null;
	}
	module.exports = function(isValidElement, throwOnDirectAccess) {
		var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		/**
		* Returns the iterator method function contained on the iterable object.
		*
		* Be sure to invoke the function with the iterable as context:
		*
		*     var iteratorFn = getIteratorFn(myIterable);
		*     if (iteratorFn) {
		*       var iterator = iteratorFn.call(myIterable);
		*       ...
		*     }
		*
		* @param {?object} maybeIterable
		* @return {?function}
		*/
		function getIteratorFn(maybeIterable) {
			var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
			if (typeof iteratorFn === "function") return iteratorFn;
		}
		/**
		* Collection of methods that allow declaration and validation of props that are
		* supplied to React components. Example usage:
		*
		*   var Props = require('ReactPropTypes');
		*   var MyArticle = React.createClass({
		*     propTypes: {
		*       // An optional string prop named "description".
		*       description: Props.string,
		*
		*       // A required enum prop named "category".
		*       category: Props.oneOf(['News','Photos']).isRequired,
		*
		*       // A prop named "dialog" that requires an instance of Dialog.
		*       dialog: Props.instanceOf(Dialog).isRequired
		*     },
		*     render: function() { ... }
		*   });
		*
		* A more formal specification of how these methods are used:
		*
		*   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
		*   decl := ReactPropTypes.{type}(.isRequired)?
		*
		* Each and every declaration produces a function with the same signature. This
		* allows the creation of custom validation functions. For example:
		*
		*  var MyLink = React.createClass({
		*    propTypes: {
		*      // An optional string or URI prop named "href".
		*      href: function(props, propName, componentName) {
		*        var propValue = props[propName];
		*        if (propValue != null && typeof propValue !== 'string' &&
		*            !(propValue instanceof URI)) {
		*          return new Error(
		*            'Expected a string or an URI for ' + propName + ' in ' +
		*            componentName
		*          );
		*        }
		*      }
		*    },
		*    render: function() {...}
		*  });
		*
		* @internal
		*/
		var ANONYMOUS = "<<anonymous>>";
		var ReactPropTypes = {
			array: createPrimitiveTypeChecker("array"),
			bigint: createPrimitiveTypeChecker("bigint"),
			bool: createPrimitiveTypeChecker("boolean"),
			func: createPrimitiveTypeChecker("function"),
			number: createPrimitiveTypeChecker("number"),
			object: createPrimitiveTypeChecker("object"),
			string: createPrimitiveTypeChecker("string"),
			symbol: createPrimitiveTypeChecker("symbol"),
			any: createAnyTypeChecker(),
			arrayOf: createArrayOfTypeChecker,
			element: createElementTypeChecker(),
			elementType: createElementTypeTypeChecker(),
			instanceOf: createInstanceTypeChecker,
			node: createNodeChecker(),
			objectOf: createObjectOfTypeChecker,
			oneOf: createEnumTypeChecker,
			oneOfType: createUnionTypeChecker,
			shape: createShapeTypeChecker,
			exact: createStrictShapeTypeChecker
		};
		/**
		* inlined Object.is polyfill to avoid requiring consumers ship their own
		* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		*/
		function is(x, y) {
			if (x === y) return x !== 0 || 1 / x === 1 / y;
			else return x !== x && y !== y;
		}
		/**
		* We use an Error-like object for backward compatibility as people may call
		* PropTypes directly and inspect their output. However, we don't use real
		* Errors anymore. We don't inspect their stack anyway, and creating them
		* is prohibitively expensive if they are created too often, such as what
		* happens in oneOfType() for any type before the one that matched.
		*/
		function PropTypeError(message, data) {
			this.message = message;
			this.data = data && typeof data === "object" ? data : {};
			this.stack = "";
		}
		PropTypeError.prototype = Error.prototype;
		function createChainableTypeChecker(validate) {
			var manualPropTypeCallCache = {};
			var manualPropTypeWarningCount = 0;
			function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
				componentName = componentName || ANONYMOUS;
				propFullName = propFullName || propName;
				if (secret !== ReactPropTypesSecret) {
					if (throwOnDirectAccess) {
						var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						err.name = "Invariant Violation";
						throw err;
					} else if (typeof console !== "undefined") {
						var cacheKey = componentName + ":" + propName;
						if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
							printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
							manualPropTypeCallCache[cacheKey] = true;
							manualPropTypeWarningCount++;
						}
					}
				}
				if (props[propName] == null) {
					if (isRequired) {
						if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
						return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
					}
					return null;
				} else return validate(props, propName, componentName, location, propFullName);
			}
			var chainedCheckType = checkType.bind(null, false);
			chainedCheckType.isRequired = checkType.bind(null, true);
			return chainedCheckType;
		}
		function createPrimitiveTypeChecker(expectedType) {
			function validate(props, propName, componentName, location, propFullName, secret) {
				var propValue = props[propName];
				if (getPropType(propValue) !== expectedType) {
					var preciseType = getPreciseType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createAnyTypeChecker() {
			return createChainableTypeChecker(emptyFunctionThatReturnsNull);
		}
		function createArrayOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
				var propValue = props[propName];
				if (!Array.isArray(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
				}
				for (var i = 0; i < propValue.length; i++) {
					var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!isValidElement(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!ReactIs.isValidElementType(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createInstanceTypeChecker(expectedClass) {
			function validate(props, propName, componentName, location, propFullName) {
				if (!(props[propName] instanceof expectedClass)) {
					var expectedClassName = expectedClass.name || ANONYMOUS;
					var actualClassName = getClassName(props[propName]);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createEnumTypeChecker(expectedValues) {
			if (!Array.isArray(expectedValues)) {
				if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
				else printWarning("Invalid argument supplied to oneOf, expected an array.");
				return emptyFunctionThatReturnsNull;
			}
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				for (var i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
				var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
					if (getPreciseType(value) === "symbol") return String(value);
					return value;
				});
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createObjectOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
				for (var key in propValue) if (has(propValue, key)) {
					var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createUnionTypeChecker(arrayOfTypeCheckers) {
			if (!Array.isArray(arrayOfTypeCheckers)) {
				printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
				return emptyFunctionThatReturnsNull;
			}
			for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
				var checker = arrayOfTypeCheckers[i];
				if (typeof checker !== "function") {
					printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
					return emptyFunctionThatReturnsNull;
				}
			}
			function validate(props, propName, componentName, location, propFullName) {
				var expectedTypes = [];
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
					if (checkerResult == null) return null;
					if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
				}
				var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createNodeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function invalidValidatorError(componentName, location, propFullName, key, type) {
			return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
		}
		function createShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in shapeTypes) {
					var checker = shapeTypes[key];
					if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createStrictShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in assign({}, props[propName], shapeTypes)) {
					var checker = shapeTypes[key];
					if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function isNode(propValue) {
			switch (typeof propValue) {
				case "number":
				case "string":
				case "undefined": return true;
				case "boolean": return !propValue;
				case "object":
					if (Array.isArray(propValue)) return propValue.every(isNode);
					if (propValue === null || isValidElement(propValue)) return true;
					var iteratorFn = getIteratorFn(propValue);
					if (iteratorFn) {
						var iterator = iteratorFn.call(propValue);
						var step;
						if (iteratorFn !== propValue.entries) {
							while (!(step = iterator.next()).done) if (!isNode(step.value)) return false;
						} else while (!(step = iterator.next()).done) {
							var entry = step.value;
							if (entry) {
								if (!isNode(entry[1])) return false;
							}
						}
					} else return false;
					return true;
				default: return false;
			}
		}
		function isSymbol(propType, propValue) {
			if (propType === "symbol") return true;
			if (!propValue) return false;
			if (propValue["@@toStringTag"] === "Symbol") return true;
			if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
			return false;
		}
		function getPropType(propValue) {
			var propType = typeof propValue;
			if (Array.isArray(propValue)) return "array";
			if (propValue instanceof RegExp) return "object";
			if (isSymbol(propType, propValue)) return "symbol";
			return propType;
		}
		function getPreciseType(propValue) {
			if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
			var propType = getPropType(propValue);
			if (propType === "object") {
				if (propValue instanceof Date) return "date";
				else if (propValue instanceof RegExp) return "regexp";
			}
			return propType;
		}
		function getPostfixForTypeWarning(value) {
			var type = getPreciseType(value);
			switch (type) {
				case "array":
				case "object": return "an " + type;
				case "boolean":
				case "date":
				case "regexp": return "a " + type;
				default: return type;
			}
		}
		function getClassName(propValue) {
			if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
			return propValue.constructor.name;
		}
		ReactPropTypes.checkPropTypes = checkPropTypes;
		ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}));
// node_modules/react-force-graph-2d/dist/react-force-graph-2d.mjs
var import_prop_types = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactIs = require_react_is();
	module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, true);
})))(), 1);
var commonPropTypes = {
	width: import_prop_types.default.number,
	height: import_prop_types.default.number,
	graphData: import_prop_types.default.shape({
		nodes: import_prop_types.default.arrayOf(import_prop_types.default.object).isRequired,
		links: import_prop_types.default.arrayOf(import_prop_types.default.object).isRequired
	}),
	backgroundColor: import_prop_types.default.string,
	nodeRelSize: import_prop_types.default.number,
	nodeId: import_prop_types.default.string,
	nodeLabel: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	nodeVal: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	nodeVisibility: import_prop_types.default.oneOfType([
		import_prop_types.default.bool,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	nodeColor: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	nodeAutoColorBy: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	onNodeHover: import_prop_types.default.func,
	onNodeClick: import_prop_types.default.func,
	linkSource: import_prop_types.default.string,
	linkTarget: import_prop_types.default.string,
	linkLabel: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	linkVisibility: import_prop_types.default.oneOfType([
		import_prop_types.default.bool,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkColor: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	linkAutoColorBy: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	linkWidth: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkCurvature: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkDirectionalArrowLength: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkDirectionalArrowColor: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	linkDirectionalArrowRelPos: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkDirectionalParticles: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkDirectionalParticleSpeed: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkDirectionalParticleOffset: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkDirectionalParticleWidth: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkDirectionalParticleColor: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	onLinkHover: import_prop_types.default.func,
	onLinkClick: import_prop_types.default.func,
	dagMode: import_prop_types.default.oneOf([
		"td",
		"bu",
		"lr",
		"rl",
		"zin",
		"zout",
		"radialin",
		"radialout"
	]),
	dagLevelDistance: import_prop_types.default.number,
	dagNodeFilter: import_prop_types.default.func,
	onDagError: import_prop_types.default.func,
	d3AlphaMin: import_prop_types.default.number,
	d3AlphaDecay: import_prop_types.default.number,
	d3VelocityDecay: import_prop_types.default.number,
	warmupTicks: import_prop_types.default.number,
	cooldownTicks: import_prop_types.default.number,
	cooldownTime: import_prop_types.default.number,
	onEngineTick: import_prop_types.default.func,
	onEngineStop: import_prop_types.default.func,
	getGraphBbox: import_prop_types.default.func
};
var pointerBasedPropTypes = {
	zoomToFit: import_prop_types.default.func,
	onNodeRightClick: import_prop_types.default.func,
	onNodeDrag: import_prop_types.default.func,
	onNodeDragEnd: import_prop_types.default.func,
	onLinkRightClick: import_prop_types.default.func,
	linkHoverPrecision: import_prop_types.default.number,
	onBackgroundClick: import_prop_types.default.func,
	onBackgroundRightClick: import_prop_types.default.func,
	showPointerCursor: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.func]),
	enablePointerInteraction: import_prop_types.default.bool,
	enableNodeDrag: import_prop_types.default.bool
};
var threeBasedPropTypes = {
	showNavInfo: import_prop_types.default.bool,
	nodeOpacity: import_prop_types.default.number,
	nodeResolution: import_prop_types.default.number,
	nodeThreeObject: import_prop_types.default.oneOfType([
		import_prop_types.default.object,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	nodeThreeObjectExtend: import_prop_types.default.oneOfType([
		import_prop_types.default.bool,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	nodePositionUpdate: import_prop_types.default.func,
	linkOpacity: import_prop_types.default.number,
	linkResolution: import_prop_types.default.number,
	linkCurveRotation: import_prop_types.default.oneOfType([
		import_prop_types.default.number,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkMaterial: import_prop_types.default.oneOfType([
		import_prop_types.default.object,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkThreeObject: import_prop_types.default.oneOfType([
		import_prop_types.default.object,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkThreeObjectExtend: import_prop_types.default.oneOfType([
		import_prop_types.default.bool,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	linkPositionUpdate: import_prop_types.default.func,
	linkDirectionalArrowResolution: import_prop_types.default.number,
	linkDirectionalParticleResolution: import_prop_types.default.number,
	linkDirectionalParticleThreeObject: import_prop_types.default.oneOfType([
		import_prop_types.default.object,
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	forceEngine: import_prop_types.default.oneOf(["d3", "ngraph"]),
	ngraphPhysics: import_prop_types.default.object,
	numDimensions: import_prop_types.default.oneOf([
		1,
		2,
		3
	])
};
var ForceGraph2DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, {
	linkLineDash: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.number),
		import_prop_types.default.string,
		import_prop_types.default.func
	]),
	nodeCanvasObjectMode: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	nodeCanvasObject: import_prop_types.default.func,
	nodePointerAreaPaint: import_prop_types.default.func,
	linkCanvasObjectMode: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	linkCanvasObject: import_prop_types.default.func,
	linkPointerAreaPaint: import_prop_types.default.func,
	linkDirectionalParticleCanvasObject: import_prop_types.default.func,
	autoPauseRedraw: import_prop_types.default.bool,
	minZoom: import_prop_types.default.number,
	maxZoom: import_prop_types.default.number,
	enableZoomInteraction: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.func]),
	enablePanInteraction: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.func]),
	onZoom: import_prop_types.default.func,
	onZoomEnd: import_prop_types.default.func,
	onRenderFramePre: import_prop_types.default.func,
	onRenderFramePost: import_prop_types.default.func
});
Object.assign({}, commonPropTypes, pointerBasedPropTypes, threeBasedPropTypes, {
	enableNavigationControls: import_prop_types.default.bool,
	controlType: import_prop_types.default.oneOf([
		"trackball",
		"orbit",
		"fly"
	]),
	rendererConfig: import_prop_types.default.object,
	extraRenderers: import_prop_types.default.arrayOf(import_prop_types.default.shape({ render: import_prop_types.default.func.isRequired }))
});
Object.assign({}, commonPropTypes, threeBasedPropTypes, {
	nodeDesc: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
	linkDesc: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func])
});
Object.assign({}, commonPropTypes, threeBasedPropTypes, {
	markerAttrs: import_prop_types.default.object,
	yOffset: import_prop_types.default.number,
	glScale: import_prop_types.default.number
});
var ForceGraph2D = index$5(forceGraph, { methodNames: [
	"emitParticle",
	"d3Force",
	"d3ReheatSimulation",
	"stopAnimation",
	"pauseAnimation",
	"resumeAnimation",
	"centerAt",
	"zoom",
	"zoomToFit",
	"getGraphBbox",
	"screen2GraphCoords",
	"graph2ScreenCoords"
] });
ForceGraph2D.displayName = "ForceGraph2D";
ForceGraph2D.propTypes = ForceGraph2DPropTypes;
export { ForceGraph2D as default };
