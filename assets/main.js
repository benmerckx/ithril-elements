(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var ithril_ComponentAbstract = function() {
};
var Web = function() {
	ithril_ComponentAbstract.call(this);
};
Web.main = function() {
	m.mount(window.document,new Web());
};
Web.__super__ = ithril_ComponentAbstract;
Web.prototype = $extend(ithril_ComponentAbstract.prototype,{
	view: function() {
		return [{ tag : "title", attrs : { }, children : ["Ithril Elements"]},{ tag : "meta", attrs : { charset : "utf-8"}, children : []},{ tag : "link", attrs : { rel : "stylesheet", href : "assets/layout.css"}, children : []},this.body()];
	}
	,body: function() {
		return { tag : "div", attrs : { }, children : ["Hello world"]};
	}
});
Web.main();
})();
