(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var ithril_ComponentAbstract = function() {
	this.dirty = false;
	this.parent = null;
};
ithril_ComponentAbstract.__name__ = true;
ithril_ComponentAbstract.prototype = {
	setState: function(state) {
		this.state = state;
	}
	,mount: function() {
	}
	,unmount: function() {
	}
	,setChildren: function(children) {
		var _g = this;
		if(children.length == 1 && ((children[0] instanceof Array) && children[0].__enum__ == null)) children = children[0];
		this.children = children;
		if((children instanceof Array) && children.__enum__ == null) children.map(function(child) {
			if(js_Boot.__instanceof(child,ithril_ComponentAbstract)) child.parent = _g;
		});
	}
	,__class__: ithril_ComponentAbstract
};
var Web = function() {
	this.selected = ["United States","Russia","China"];
	this.countries = ["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bangladesh","Barbados","Bahamas","Bahrain","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei Darussalam","Bulgaria","Burkina Faso","Burma","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo-Brazzaville","Congo-Kinshasa","Cook Islands","Costa Rica","Croatia","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","El Salvador","Egypt","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Federated States of Micronesia","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Lands","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Réunion","Romania","Russia","Rwanda","Saint Barthélemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent","Samoa","San Marino","São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia","South Korea","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Sweden","Swaziland","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Vietnam","Venezuela","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];
	ithril_ComponentAbstract.call(this);
};
Web.__name__ = true;
Web.main = function() {
	m.mount(window.document,new Web());
};
Web.__super__ = ithril_ComponentAbstract;
Web.prototype = $extend(ithril_ComponentAbstract.prototype,{
	view: function() {
		return [{ tag : "title", attrs : { }, children : ["Ithril Elements"]},{ tag : "meta", attrs : { charset : "utf-8"}, children : []},{ tag : "meta", attrs : { content : "width=device-width, initial-scale=1.0", name : "viewport"}, children : []},{ tag : "link", attrs : { rel : "stylesheet", href : "assets/layout.css"}, children : []},{ tag : "body", attrs : { }, children : [this.body()]}];
	}
	,body: function() {
		var _g1 = this;
		var tmp;
		var tmp10;
		var children1 = ["Tab 1 content"];
		var tmp13 = ithril_component_ComponentCache.getComponent_ithril_elements_Tab("b18b105260432f48148c9fcf48a9d2b2",ithril_elements_Tab,children1,ithril_Attributes.attrs("Tab 1"));
		tmp13.setChildren(children1);
		tmp13.setState(ithril_Attributes.attrs("Tab 1"));
		tmp10 = tmp13;
		var tmp11;
		var children2 = ["Tab 2 content"];
		var tmp14 = ithril_component_ComponentCache.getComponent_ithril_elements_Tab("55c9d56eb5b2aa70fadfc161a6adcd46",ithril_elements_Tab,children2,ithril_Attributes.attrs("Tab 2"));
		tmp14.setChildren(children2);
		tmp14.setState(ithril_Attributes.attrs("Tab 2"));
		tmp11 = tmp14;
		var children = [tmp10,tmp11];
		var tmp12 = ithril_component_ComponentCache.getComponent_ithril_elements_Tabs("c3d4ff92cc9c59bb0d25519a0a5eff5e",ithril_elements_Tabs,children,{ });
		tmp12.setChildren(children);
		tmp12.setState({ });
		tmp = tmp12;
		var tmp1;
		var children3 = [];
		var tmp15 = ithril_component_ComponentCache.getComponent_ithril_elements_Text("885cc3cc0f3fe43375fe4b6b491dc93b",ithril_elements_Text,children3,{ });
		tmp15.setChildren(children3);
		tmp15.setState({ });
		tmp1 = tmp15;
		var tmp2;
		var children4 = [];
		var tmp16 = ithril_component_ComponentCache.getComponent_ithril_elements_Text("f243afc3700c66e1fd19794abb818b27",ithril_elements_Text,children4,{ multiline : true});
		tmp16.setChildren(children4);
		tmp16.setState({ multiline : true});
		tmp2 = tmp16;
		var tmp3;
		var children5 = [];
		var tmp17 = ithril_component_ComponentCache.getComponent_ithril_elements_Checkbox("a310d15535bb88841007973c4abc42c7",ithril_elements_Checkbox,children5,{ label : "Checkbox"});
		tmp17.setChildren(children5);
		tmp17.setState({ label : "Checkbox"});
		tmp3 = tmp17;
		var tmp4;
		var children6 = [];
		var tmp18;
		var _g = new haxe_ds_StringMap();
		var _g11 = 0;
		var _g2 = this.countries;
		while(_g11 < _g2.length) {
			var country = _g2[_g11];
			++_g11;
			if(__map_reserved[country] != null) _g.setReserved(country,country); else _g.h[country] = country;
		}
		tmp18 = _g;
		var tmp19 = ithril_component_ComponentCache.getComponent_ithril_elements_Dropdown("ab335cbedb19fb1a72f19576bf86787a",ithril_elements_Dropdown,children6,{ options : tmp18});
		tmp19.setChildren(children6);
		var tmp20;
		var _g12 = new haxe_ds_StringMap();
		var _g21 = 0;
		var _g3 = this.countries;
		while(_g21 < _g3.length) {
			var country1 = _g3[_g21];
			++_g21;
			if(__map_reserved[country1] != null) _g12.setReserved(country1,country1); else _g12.h[country1] = country1;
		}
		tmp20 = _g12;
		tmp19.setState({ options : tmp20});
		tmp4 = tmp19;
		var tmp5;
		var children7 = [];
		var tmp21;
		var _g4 = new haxe_ds_StringMap();
		var _g13 = 0;
		var _g22 = this.countries;
		while(_g13 < _g22.length) {
			var country2 = _g22[_g13];
			++_g13;
			if(__map_reserved[country2] != null) _g4.setReserved(country2,country2); else _g4.h[country2] = country2;
		}
		tmp21 = _g4;
		var tmp22 = ithril_component_ComponentCache.getComponent_ithril_elements_Dropdown("c5506bf9731f1fceeffee2423f4e5bc0",ithril_elements_Dropdown,children7,{ searchable : true, options : tmp21});
		tmp22.setChildren(children7);
		var tmp23;
		var _g14 = new haxe_ds_StringMap();
		var _g23 = 0;
		var _g31 = this.countries;
		while(_g23 < _g31.length) {
			var country3 = _g31[_g23];
			++_g23;
			if(__map_reserved[country3] != null) _g14.setReserved(country3,country3); else _g14.h[country3] = country3;
		}
		tmp23 = _g14;
		tmp22.setState({ searchable : true, options : tmp23});
		tmp5 = tmp22;
		var tmp6;
		var children8 = ["One"];
		var tmp24 = ithril_component_ComponentCache.getComponent_ithril_elements_Chip("f1212820840368d6be7b4623cf6d2873",ithril_elements_Chip,children8,{ onremove : function() {
			console.log("remove");
		}});
		tmp24.setChildren(children8);
		tmp24.setState({ onremove : function() {
			console.log("remove");
		}});
		tmp6 = tmp24;
		var tmp7;
		var children9 = ["Two"];
		var tmp25 = ithril_component_ComponentCache.getComponent_ithril_elements_Chip("381f118ea4ec579a46dbe8e96ac34696",ithril_elements_Chip,children9,{ });
		tmp25.setChildren(children9);
		tmp25.setState({ });
		tmp7 = tmp25;
		var tmp8;
		var children10 = ["Three ",{ tag : "em", attrs : { }, children : ["(any html)"]}];
		var tmp26 = ithril_component_ComponentCache.getComponent_ithril_elements_Chip("e33a122629a88921ea82020cffd0c364",ithril_elements_Chip,children10,{ });
		tmp26.setChildren(children10);
		tmp26.setState({ });
		tmp8 = tmp26;
		var tmp9;
		var children11 = [];
		var tmp27;
		var _g5 = new haxe_ds_StringMap();
		var _g15 = 0;
		var _g24 = this.countries;
		while(_g15 < _g24.length) {
			var country4 = _g24[_g15];
			++_g15;
			if(__map_reserved[country4] != null) _g5.setReserved(country4,country4); else _g5.h[country4] = country4;
		}
		tmp27 = _g5;
		var tmp28 = ithril_component_ComponentCache.getComponent_ithril_elements_Select("ff666e46060f1685b89095e8d3920f1d",ithril_elements_Select,children11,{ value : this.selected, options : tmp27, onchange : function(e) {
			_g1.selected = e.field.value;
		}, canAdd : true});
		tmp28.setChildren(children11);
		var tmp29;
		var _g16 = new haxe_ds_StringMap();
		var _g25 = 0;
		var _g32 = this.countries;
		while(_g25 < _g32.length) {
			var country5 = _g32[_g25];
			++_g25;
			if(__map_reserved[country5] != null) _g16.setReserved(country5,country5); else _g16.h[country5] = country5;
		}
		tmp29 = _g16;
		tmp28.setState({ value : this.selected, options : tmp29, onchange : function(e1) {
			_g1.selected = e1.field.get_value();
		}, canAdd : true});
		tmp9 = tmp28;
		return [{ tag : "h1", attrs : { }, children : ["Tabs"]},{ tag : "div", attrs : { }, children : [tmp]},{ tag : "h1", attrs : { }, children : ["Text"]},{ tag : "h2", attrs : { }, children : ["Single line"]},tmp1,{ tag : "h2", attrs : { }, children : ["Multiline"]},tmp2,{ tag : "h1", attrs : { }, children : ["Checkbox"]},tmp3,{ tag : "h1", attrs : { }, children : ["Dropdown"]},{ tag : "h2", attrs : { }, children : ["Default"]},tmp4,{ tag : "h2", attrs : { }, children : ["Searchable"]},tmp5,{ tag : "h1", attrs : { }, children : ["Chips"]},tmp6,tmp7,tmp8,{ tag : "h1", attrs : { }, children : ["Select"]},tmp9];
	}
	,__class__: Web
});
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
haxe_ds__$StringMap_StringMapIterator.__name__ = true;
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		var tmp;
		var _this = this.map;
		var key = this.keys[this.index++];
		if(__map_reserved[key] != null) tmp = _this.getReserved(key); else tmp = _this.h[key];
		return tmp;
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		return this.rh == null?null:this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		var tmp;
		var _this = this.arrayKeys();
		tmp = HxOverrides.iter(_this);
		return tmp;
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,__class__: haxe_ds_StringMap
};
var ithril__$Attributes_ValueOrCallable_$Impl_$ = {};
ithril__$Attributes_ValueOrCallable_$Impl_$.__name__ = true;
ithril__$Attributes_ValueOrCallable_$Impl_$.toT = function(this1) {
	if(Reflect.isFunction(this1)) return this1();
	return this1;
};
var ithril_Attributes = function() { };
ithril_Attributes.__name__ = true;
ithril_Attributes.attrs = function(input) {
	return ithril__$Attributes_ValueOrCallable_$Impl_$.toT(input);
};
ithril_Attributes.combine = function(a,b) {
	a = ithril_Attributes.attrs(a);
	b = ithril_Attributes.attrs(b);
	var _g = 0;
	var _g1 = Reflect.fields(a);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		if(key == "class" && Object.prototype.hasOwnProperty.call(b,key)) {
			var value = ithril_Attributes.combineClassNames(Reflect.field(b,key),Reflect.field(a,key));
			b[key] = value;
		} else {
			var value1 = Reflect.field(a,key);
			b[key] = value1;
		}
	}
	return b;
};
ithril_Attributes.combineClassNames = function(a,b) {
	if((a instanceof Array) && a.__enum__ == null) a = a.join(" ");
	if((b instanceof Array) && b.__enum__ == null) b = b.join(" ");
	return Std.string(b) + " " + Std.string(a);
};
var ithril_component_ComponentCache = function() { };
ithril_component_ComponentCache.__name__ = true;
ithril_component_ComponentCache.getComponent_ithril_elements_OptionList__ = function(key,type,children,state) {
	return ithril_component_ComponentCache.getInstance(key,children,state,function() {
		return new ithril_elements_OptionList();
	});
};
ithril_component_ComponentCache.getComponent_ithril_elements_Option__ = function(key,type,children,state) {
	return ithril_component_ComponentCache.getInstance(key,children,state,function() {
		return new ithril_elements_Option();
	});
};
ithril_component_ComponentCache.getComponent_ithril_elements_Select = function(key,type,children,state) {
	return ithril_component_ComponentCache.getInstance(key,children,state,function() {
		return new ithril_elements_Select();
	});
};
ithril_component_ComponentCache.getComponent_ithril_elements_Chip = function(key,type,children,state) {
	return ithril_component_ComponentCache.getInstance(key,children,state,function() {
		return new ithril_elements_Chip();
	});
};
ithril_component_ComponentCache.getComponent_ithril_elements_Dropdown = function(key,type,children,state) {
	return ithril_component_ComponentCache.getInstance(key,children,state,function() {
		return new ithril_elements_Dropdown();
	});
};
ithril_component_ComponentCache.getComponent_ithril_elements_Checkbox = function(key,type,children,state) {
	return ithril_component_ComponentCache.getInstance(key,children,state,function() {
		return new ithril_elements_Checkbox();
	});
};
ithril_component_ComponentCache.getComponent_ithril_elements_Text = function(key,type,children,state) {
	return ithril_component_ComponentCache.getInstance(key,children,state,function() {
		return new ithril_elements_Text();
	});
};
ithril_component_ComponentCache.getComponent_ithril_elements_Tabs = function(key,type,children,state) {
	return ithril_component_ComponentCache.getInstance(key,children,state,function() {
		return new ithril_elements_Tabs();
	});
};
ithril_component_ComponentCache.getComponent_ithril_elements_Tab = function(key,type,children,state) {
	return ithril_component_ComponentCache.getInstance(key,children,state,function() {
		return new ithril_elements_Tab();
	});
};
ithril_component_ComponentCache.createKey = function(key,state) {
	var id = "";
	if(Object.prototype.hasOwnProperty.call(state,"key")) id = "__key__" + Std.string(Reflect.field(state,"key")); else {
		var tmp;
		var _this = ithril_component_ComponentCache.componentCount;
		if(__map_reserved[key] != null) tmp = _this.existsReserved(key); else tmp = _this.h.hasOwnProperty(key);
		var tmp1;
		if(tmp) {
			var tmp2;
			var _this1 = ithril_component_ComponentCache.componentCount;
			if(__map_reserved[key] != null) tmp2 = _this1.getReserved(key); else tmp2 = _this1.h[key];
			tmp1 = tmp2;
		} else tmp1 = 0;
		var count = tmp1;
		var _this2 = ithril_component_ComponentCache.componentCount;
		var value = count + 1;
		if(__map_reserved[key] != null) _this2.setReserved(key,value); else _this2.h[key] = value;
		id = count == null?"null":"" + count;
		if(ithril_component_ComponentCache.timeout == null) {
			var tmp3;
			var _this3 = ithril_component_ComponentCache.componentInstances;
			tmp3 = new haxe_ds__$StringMap_StringMapIterator(_this3,_this3.arrayKeys());
			while( tmp3.hasNext() ) {
				var component = tmp3.next();
				component.dirty = true;
			}
			ithril_component_ComponentCache.timeout = window.requestAnimationFrame(function(_) {
				ithril_component_ComponentCache.componentCount = new haxe_ds_StringMap();
				ithril_component_ComponentCache.timeout = null;
				var $it0 = ithril_component_ComponentCache.componentInstances.keys();
				while( $it0.hasNext() ) {
					var key1 = $it0.next();
					var tmp4;
					var _this4 = ithril_component_ComponentCache.componentInstances;
					if(__map_reserved[key1] != null) tmp4 = _this4.getReserved(key1); else tmp4 = _this4.h[key1];
					var component1 = tmp4;
					if(component1.dirty) {
						component1.unmount();
						ithril_component_ComponentCache.componentInstances.remove(key1);
					}
				}
			});
		}
	}
	return key + id;
};
ithril_component_ComponentCache.getInstance = function(key,children,state,create) {
	key = ithril_component_ComponentCache.createKey(key,state);
	var tmp;
	var _this = ithril_component_ComponentCache.componentInstances;
	if(__map_reserved[key] != null) tmp = _this.existsReserved(key); else tmp = _this.h.hasOwnProperty(key);
	if(!tmp) {
		var c = create();
		c.mount();
		var _this1 = ithril_component_ComponentCache.componentInstances;
		if(__map_reserved[key] != null) _this1.setReserved(key,c); else _this1.h[key] = c;
	}
	var tmp1;
	var _this2 = ithril_component_ComponentCache.componentInstances;
	if(__map_reserved[key] != null) tmp1 = _this2.getReserved(key); else tmp1 = _this2.h[key];
	var component = tmp1;
	component.dirty = false;
	return component;
};
var ithril_elements_Field = function() {
	ithril_ComponentAbstract.call(this);
};
ithril_elements_Field.__name__ = true;
ithril_elements_Field.__super__ = ithril_ComponentAbstract;
ithril_elements_Field.prototype = $extend(ithril_ComponentAbstract.prototype,{
	get_value: function() {
		return this.value;
	}
	,set_value: function(value) {
		return this.value = value;
	}
	,mount: function() {
		this.setState({ required : false, disabled : false});
	}
	,dispatch: function(e,originalEvent) {
		var tmp;
		switch(e[1]) {
		case 0:
			tmp = this.state.onchange;
			break;
		case 1:
			tmp = this.state.oninput;
			break;
		case 2:
			tmp = this.state.onfocus;
			break;
		case 3:
			tmp = this.state.onblur;
			break;
		case 4:
			tmp = this.state.onconfirm;
			break;
		}
		var method = tmp;
		if(method != null) method({ type : ithril_elements_FieldEventType.Change, field : this, originalEvent : originalEvent});
	}
	,events: function() {
		var _g = this;
		return { onchange : function(e) {
			_g.set_value(e.target.value);
			_g.dispatch(ithril_elements_FieldEventType.Change,e);
		}, oninput : function(e1) {
			_g.set_value(e1.target.value);
			_g.dispatch(ithril_elements_FieldEventType.Input,e1);
		}, onfocus : (function($this) {
			var $r;
			var f = $bind($this,$this.dispatch);
			$r = function(a1) {
				f(ithril_elements_FieldEventType.Focus,a1);
			};
			return $r;
		}(this)), onblur : (function($this) {
			var $r;
			var f1 = $bind($this,$this.dispatch);
			$r = function(a11) {
				f1(ithril_elements_FieldEventType.Blur,a11);
			};
			return $r;
		}(this)), onconfirm : (function($this) {
			var $r;
			var f2 = $bind($this,$this.dispatch);
			$r = function(a12) {
				f2(ithril_elements_FieldEventType.Confirm,a12);
			};
			return $r;
		}(this))};
	}
	,setState: function(state) {
		if(this.state == null) this.state = { };
		var _g = 0;
		var _g1 = Reflect.fields(state);
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(state,key)) {
				var value = Reflect.field(state,key);
				this.state[key] = value;
			}
		}
		if(Object.prototype.hasOwnProperty.call(this.state,"value")) this.set_value(this.state.value);
	}
	,__class__: ithril_elements_Field
});
var ithril_elements_Checkbox = function() {
	ithril_elements_Field.call(this);
};
ithril_elements_Checkbox.__name__ = true;
ithril_elements_Checkbox.__super__ = ithril_elements_Field;
ithril_elements_Checkbox.prototype = $extend(ithril_elements_Field.prototype,{
	mount: function() {
		ithril_elements_Field.prototype.mount.call(this);
		this.set_value(false);
	}
	,view: function() {
		return { tag : "div", attrs : { 'class' : "ithril checkbox"}, children : [{ tag : "label", attrs : { }, children : [{ tag : "input", attrs : ithril_Attributes.combine({ type : "checkbox"},ithril_Attributes.combine({ checked : this.get_value()},ithril_Attributes.attrs($bind(this,this.events)))), children : []},{ tag : "span", attrs : { }, children : [this.state.label]}]}]};
	}
	,__class__: ithril_elements_Checkbox
});
var ithril_elements_Chip = function() {
	ithril_ComponentAbstract.call(this);
};
ithril_elements_Chip.__name__ = true;
ithril_elements_Chip.__super__ = ithril_ComponentAbstract;
ithril_elements_Chip.prototype = $extend(ithril_ComponentAbstract.prototype,{
	view: function() {
		var tmp;
		var _g = [];
		var _g1 = 0;
		var _g2 = this.children;
		while(_g1 < _g2.length) {
			var child = _g2[_g1];
			++_g1;
			_g.push(child);
		}
		tmp = _g;
		return { tag : "div", attrs : { 'class' : "ithril chip"}, children : [tmp,this.state.onremove != null?[{ tag : "a", attrs : { onclick : this.state.onremove, 'class' : "remove"}, children : ["×"]}]:null]};
	}
	,__class__: ithril_elements_Chip
});
var ithril_elements_Dropdown = function() {
	this.focusEl = null;
	this.show = false;
	this.query = null;
	ithril_elements_Field.call(this);
};
ithril_elements_Dropdown.__name__ = true;
ithril_elements_Dropdown.__super__ = ithril_elements_Field;
ithril_elements_Dropdown.prototype = $extend(ithril_elements_Field.prototype,{
	mount: function() {
		ithril_elements_Field.prototype.mount.call(this);
		this.setState({ options : null, placeholder : "Select…", searchable : false});
	}
	,open: function(show) {
		this.show = show == null?!this.show:show;
		this.dispatch(this.show?ithril_elements_FieldEventType.Focus:ithril_elements_FieldEventType.Blur);
		if(this.show) this.focusEl.focus(); else {
			this.focusEl.blur();
			this.query = null;
		}
	}
	,openClick: function(e) {
		e.preventDefault();
		this.open();
	}
	,focusChange: function(show,e) {
		this.open(show);
	}
	,select: function(key) {
		this.set_value(key);
		this.query = null;
		this.open(false);
		this.dispatch(ithril_elements_FieldEventType.Change);
	}
	,filter: function(key) {
		var tmp;
		var _this = this.state.options;
		if(__map_reserved[key] != null) tmp = _this.getReserved(key); else tmp = _this.h[key];
		var option = tmp.toLowerCase();
		return option.indexOf(this.query.toLowerCase()) > -1;
	}
	,focusAttr: function() {
		if(!this.state.searchable) {
			var tmp;
			var f = $bind(this,this.focusChange);
			tmp = function(e) {
				f(true,e);
			};
			var tmp1;
			var f1 = $bind(this,this.focusChange);
			tmp1 = function(e1) {
				f1(false,e1);
			};
			return { tabindex : "0", onfocus : tmp, onblur : tmp1};
		}
		return { };
	}
	,config: function(el) {
		if(!this.state.searchable) this.focusEl = el;
	}
	,view: function() {
		var _g1 = this;
		var tmp;
		if(this.show) {
			var tmp3;
			var tmp4;
			var _g = [];
			var $it0 = this.state.options.keys();
			while( $it0.hasNext() ) {
				var key = $it0.next();
				var tmp6;
				var tmp7;
				var _this = this.state.options;
				if(__map_reserved[key] != null) tmp7 = _this.getReserved(key); else tmp7 = _this.h[key];
				var children1 = [tmp7];
				var tmp8 = ithril_component_ComponentCache.getComponent_ithril_elements_Option__("a791cefb61aad5487cdd5ebe3befafb1",ithril_elements_Option,children1,{ key : key});
				tmp8.setChildren(children1);
				tmp8.setState({ key : key});
				tmp6 = tmp8;
				_g.push(tmp6);
			}
			tmp4 = _g;
			var children = tmp4;
			var tmp5 = ithril_component_ComponentCache.getComponent_ithril_elements_OptionList__("bf2e76ee6add6512e5eccf85bbee800e",ithril_elements_OptionList,children,{ filter : this.query != null?$bind(this,this.filter):null, onchange : function(e) {
				_g1.select(e.field.value);
			}});
			tmp5.setChildren(children);
			tmp5.setState({ filter : this.query != null?$bind(this,this.filter):null, onchange : function(e1) {
				_g1.select(e1.field.get_value());
			}});
			tmp3 = tmp5;
			tmp = [tmp3];
		} else tmp = null;
		var tmp1;
		if(this.state.searchable) {
			var tmp9;
			var children2 = [];
			var tmp10;
			var f = $bind(this,this.focusChange);
			tmp10 = function(e3) {
				f(true,e3);
			};
			var tmp11;
			var f1 = $bind(this,this.focusChange);
			tmp11 = function(e4) {
				f1(false,e4);
			};
			var tmp12;
			if(this.get_value() == null) tmp12 = this.state.placeholder; else {
				var key1 = this.get_value();
				var _this1 = this.state.options;
				if(__map_reserved[key1] != null) tmp12 = _this1.getReserved(key1); else tmp12 = _this1.h[key1];
			}
			var tmp13 = ithril_component_ComponentCache.getComponent_ithril_elements_Text("055265e0fabd3d409474b6346fef8b29",ithril_elements_Text,children2,{ onfocus : tmp10, onblur : tmp11, oninput : function(e2) {
				_g1.query = e2.field.value;
			}, value : this.query, placeholder : tmp12});
			tmp13.setChildren(children2);
			var tmp14;
			var f2 = $bind(this,this.focusChange);
			tmp14 = function(e5) {
				f2(true,e5);
			};
			var tmp15;
			var f3 = $bind(this,this.focusChange);
			tmp15 = function(e6) {
				f3(false,e6);
			};
			var tmp16;
			if(this.get_value() == null) tmp16 = this.state.placeholder; else {
				var key2 = this.get_value();
				var _this2 = this.state.options;
				if(__map_reserved[key2] != null) tmp16 = _this2.getReserved(key2); else tmp16 = _this2.h[key2];
			}
			tmp13.setState({ onfocus : tmp14, onblur : tmp15, oninput : function(e7) {
				_g1.query = e7.field.get_value();
			}, value : this.query, placeholder : tmp16});
			tmp9 = tmp13;
			tmp1 = [this.focusEl = tmp9];
		} else {
			var tmp17;
			if(this.get_value() == null) tmp17 = [{ tag : "div", attrs : { onmousedown : $bind(this,this.openClick), 'class' : "value"}, children : [this.state.placeholder]}]; else {
				var tmp18;
				var key3 = this.get_value();
				var _this3 = this.state.options;
				if(__map_reserved[key3] != null) tmp18 = _this3.getReserved(key3); else tmp18 = _this3.h[key3];
				tmp17 = [{ tag : "div", attrs : { onmousedown : $bind(this,this.openClick), 'class' : "value"}, children : [tmp18]}];
			}
			tmp1 = [tmp17];
		}
		var tmp2;
		if(!this.state.required && this.get_value() != null) {
			var tmp19;
			var f4 = $bind(this,this.select);
			tmp19 = function() {
				f4(null);
			};
			tmp2 = [{ tag : "a", attrs : { onmousedown : tmp19, 'class' : "remove"}, children : ["×"]}];
		} else tmp2 = null;
		return { tag : "div", attrs : ithril_Attributes.combine({ 'class' : "ithril dropdown"},ithril_Attributes.combine({ config : $bind(this,this.config), 'class' : this.show?"open":""},ithril_Attributes.attrs($bind(this,this.focusAttr)))), children : [tmp,{ tag : "div", attrs : { 'class' : "main"}, children : [tmp1,tmp2]}]};
	}
	,__class__: ithril_elements_Dropdown
});
var ithril_elements_FieldEventType = { __ename__ : true, __constructs__ : ["Change","Input","Focus","Blur","Confirm"] };
ithril_elements_FieldEventType.Change = ["Change",0];
ithril_elements_FieldEventType.Change.toString = $estr;
ithril_elements_FieldEventType.Change.__enum__ = ithril_elements_FieldEventType;
ithril_elements_FieldEventType.Input = ["Input",1];
ithril_elements_FieldEventType.Input.toString = $estr;
ithril_elements_FieldEventType.Input.__enum__ = ithril_elements_FieldEventType;
ithril_elements_FieldEventType.Focus = ["Focus",2];
ithril_elements_FieldEventType.Focus.toString = $estr;
ithril_elements_FieldEventType.Focus.__enum__ = ithril_elements_FieldEventType;
ithril_elements_FieldEventType.Blur = ["Blur",3];
ithril_elements_FieldEventType.Blur.toString = $estr;
ithril_elements_FieldEventType.Blur.__enum__ = ithril_elements_FieldEventType;
ithril_elements_FieldEventType.Confirm = ["Confirm",4];
ithril_elements_FieldEventType.Confirm.toString = $estr;
ithril_elements_FieldEventType.Confirm.__enum__ = ithril_elements_FieldEventType;
var ithril_elements_Option = function() {
	ithril_ComponentAbstract.call(this);
};
ithril_elements_Option.__name__ = true;
ithril_elements_Option.__super__ = ithril_ComponentAbstract;
ithril_elements_Option.prototype = $extend(ithril_ComponentAbstract.prototype,{
	get_list: function() {
		return this.parent;
	}
	,select: function(e) {
		e.preventDefault();
		this.get_list().select(this.state.key);
	}
	,view: function() {
		var tmp;
		var _g = [];
		var _g1 = 0;
		var _g2 = this.children;
		while(_g1 < _g2.length) {
			var child = _g2[_g1];
			++_g1;
			_g.push(child);
		}
		tmp = _g;
		return { tag : "div", attrs : { onmousedown : $bind(this,this.select), 'class' : ithril_Attributes.combineClassNames(this.get_list().get_value() == this.state.key?"selected":"","option")}, children : tmp};
	}
	,__class__: ithril_elements_Option
});
var ithril_elements_OptionList = function() {
	ithril_elements_Field.call(this);
};
ithril_elements_OptionList.__name__ = true;
ithril_elements_OptionList.__super__ = ithril_elements_Field;
ithril_elements_OptionList.prototype = $extend(ithril_elements_Field.prototype,{
	select: function(key) {
		this.set_value(key);
		this.dispatch(ithril_elements_FieldEventType.Change);
	}
	,config: function(el,i,ctx) {
		var top = el.getBoundingClientRect().top;
		if(top + el.offsetHeight > window.innerHeight) el.className += " align-top";
	}
	,filtered: function() {
		var _g = this;
		if(this.state.filter == null) return this.children;
		return this.children.filter(function(child) {
			return _g.state.filter(child.state.key);
		});
	}
	,view: function() {
		var tmp;
		var _g = [];
		var _g1 = 0;
		var _g2 = this.filtered();
		while(_g1 < _g2.length) {
			var child = _g2[_g1];
			++_g1;
			_g.push(child);
		}
		tmp = _g;
		return { tag : "div", attrs : { config : $bind(this,this.config), 'class' : "ithril option-list"}, children : tmp};
	}
	,__class__: ithril_elements_OptionList
});
var ithril_elements_Select = function() {
	this.focusEl = null;
	this.show = false;
	this.query = null;
	ithril_elements_Field.call(this);
};
ithril_elements_Select.__name__ = true;
ithril_elements_Select.__super__ = ithril_elements_Field;
ithril_elements_Select.prototype = $extend(ithril_elements_Field.prototype,{
	mount: function() {
		ithril_elements_Field.prototype.mount.call(this);
		this.setState({ canAdd : false, options : new haxe_ds_StringMap(), placeholder : "Add…"});
		this.set_value([]);
	}
	,open: function(show) {
		this.show = show == null?!this.show:show;
		this.dispatch(this.show?ithril_elements_FieldEventType.Focus:ithril_elements_FieldEventType.Blur);
		if(this.show) this.focusEl.focus(); else {
			this.focusEl.blur();
			this.query = null;
		}
	}
	,focusChange: function(show,e) {
		this.open(show);
	}
	,add: function(key) {
		this.get_value().push(key);
		this.query = null;
		this.open(false);
		this.dispatch(ithril_elements_FieldEventType.Change);
	}
	,filter: function(key) {
		var tmp;
		var _this = this.state.options;
		if(__map_reserved[key] != null) tmp = _this.getReserved(key); else tmp = _this.h[key];
		var option = tmp.toLowerCase();
		return option.indexOf(this.query.toLowerCase()) > -1;
	}
	,confirm: function(e) {
		this.add(e.field.get_value());
		this.focusEl.focus();
	}
	,remove: function(key) {
		this.set_value(this.get_value().filter(function(k) {
			return key != k;
		}));
		this.dispatch(ithril_elements_FieldEventType.Change);
	}
	,view: function() {
		var _g1 = this;
		var tmp;
		if(this.state.options != null && this.show) {
			var tmp3;
			var tmp4;
			var _g = [];
			var $it0 = this.state.options.keys();
			while( $it0.hasNext() ) {
				var key = $it0.next();
				var tmp6;
				var tmp7;
				var _this = this.state.options;
				if(__map_reserved[key] != null) tmp7 = _this.getReserved(key); else tmp7 = _this.h[key];
				var children1 = [tmp7];
				var tmp8 = ithril_component_ComponentCache.getComponent_ithril_elements_Option__("7eb6b9a33c927cab54e9203a791cd2b2",ithril_elements_Option,children1,{ key : key});
				tmp8.setChildren(children1);
				tmp8.setState({ key : key});
				tmp6 = tmp8;
				_g.push(tmp6);
			}
			tmp4 = _g;
			var children = tmp4;
			var tmp5 = ithril_component_ComponentCache.getComponent_ithril_elements_OptionList__("ee12d142ea5dc161601c50bbb1d565a5",ithril_elements_OptionList,children,{ filter : this.query != null?$bind(this,this.filter):null, onchange : function(e) {
				_g1.add(e.field.value);
			}});
			tmp5.setChildren(children);
			tmp5.setState({ filter : this.query != null?$bind(this,this.filter):null, onchange : function(e1) {
				_g1.add(e1.field.get_value());
			}});
			tmp3 = tmp5;
			tmp = [tmp3];
		} else tmp = null;
		var tmp1;
		var _g2 = [];
		var _g11 = 0;
		var _g21 = this.get_value();
		while(_g11 < _g21.length) {
			var key1 = _g21[_g11];
			++_g11;
			var tmp9;
			var tmp10;
			var _this1 = this.state.options;
			if(__map_reserved[key1] != null) tmp10 = _this1.existsReserved(key1); else tmp10 = _this1.h.hasOwnProperty(key1);
			var tmp11;
			if(tmp10) {
				var tmp15;
				var _this2 = this.state.options;
				if(__map_reserved[key1] != null) tmp15 = _this2.getReserved(key1); else tmp15 = _this2.h[key1];
				tmp11 = tmp15;
			} else tmp11 = key1;
			var children2 = [tmp11];
			var tmp12;
			var f = [$bind(this,this.remove)];
			var a1 = [key1];
			tmp12 = (function(a1,f) {
				return function() {
					f[0](a1[0]);
				};
			})(a1,f);
			var tmp13 = ithril_component_ComponentCache.getComponent_ithril_elements_Chip("dae128aea8d90eefc9c76a74041fc9a7",ithril_elements_Chip,children2,{ onremove : tmp12});
			tmp13.setChildren(children2);
			var tmp14;
			var f1 = [$bind(this,this.remove)];
			var a11 = [key1];
			tmp14 = (function(a11,f1) {
				return function() {
					f1[0](a11[0]);
				};
			})(a11,f1);
			tmp13.setState({ onremove : tmp14});
			tmp9 = tmp13;
			_g2.push(tmp9);
		}
		tmp1 = _g2;
		var tmp2;
		var children3 = [];
		var tmp16;
		var f2 = $bind(this,this.focusChange);
		tmp16 = function(e3) {
			f2(true,e3);
		};
		var tmp17;
		var f3 = $bind(this,this.focusChange);
		tmp17 = function(e4) {
			f3(false,e4);
		};
		var tmp18 = ithril_component_ComponentCache.getComponent_ithril_elements_Text("6e7c69f497f1fc2887503ae1716490d8",ithril_elements_Text,children3,{ onfocus : tmp16, onblur : tmp17, oninput : function(e2) {
			_g1.query = e2.field.value;
		}, value : this.query, placeholder : this.state.placeholder, onconfirm : $bind(this,this.confirm)});
		tmp18.setChildren(children3);
		var tmp19;
		var f4 = $bind(this,this.focusChange);
		tmp19 = function(e5) {
			f4(true,e5);
		};
		var tmp20;
		var f5 = $bind(this,this.focusChange);
		tmp20 = function(e6) {
			f5(false,e6);
		};
		tmp18.setState({ onfocus : tmp19, onblur : tmp20, oninput : function(e7) {
			_g1.query = e7.field.get_value();
		}, value : this.query, placeholder : this.state.placeholder, onconfirm : $bind(this,this.confirm)});
		tmp2 = tmp18;
		return { tag : "div", attrs : { 'class' : ithril_Attributes.combineClassNames(this.show?"open":"","ithril select")}, children : [tmp,{ tag : "div", attrs : { 'class' : "main"}, children : [{ tag : "div", attrs : { 'class' : "chips"}, children : tmp1},this.focusEl = tmp2]}]};
	}
	,__class__: ithril_elements_Select
});
var ithril_elements_Tab = function() {
	ithril_ComponentAbstract.call(this);
};
ithril_elements_Tab.__name__ = true;
ithril_elements_Tab.__super__ = ithril_ComponentAbstract;
ithril_elements_Tab.prototype = $extend(ithril_ComponentAbstract.prototype,{
	labelView: function(selected,onclick) {
		var tmp;
		var f = onclick;
		var a1 = this;
		tmp = function() {
			f(a1);
		};
		return { tag : "a", attrs : { onclick : tmp, 'class' : selected?"active":""}, children : [this.state]};
	}
	,view: function() {
		return { tag : "div", attrs : { 'class' : "tab"}, children : [this.children]};
	}
	,__class__: ithril_elements_Tab
});
var ithril_elements_Tabs = function() {
	this.selected = 0;
	ithril_ComponentAbstract.call(this);
};
ithril_elements_Tabs.__name__ = true;
ithril_elements_Tabs.__super__ = ithril_ComponentAbstract;
ithril_elements_Tabs.prototype = $extend(ithril_ComponentAbstract.prototype,{
	setSelected: function(tab) {
		this.selected = this.children.indexOf(tab);
	}
	,isSelected: function(tab) {
		return this.children.indexOf(tab) == this.selected;
	}
	,view: function() {
		var tmp;
		var _g = [];
		var _g1 = 0;
		var _g2 = this.children;
		while(_g1 < _g2.length) {
			var tab = _g2[_g1];
			++_g1;
			_g.push(tab.labelView(this.isSelected(tab),$bind(this,this.setSelected)));
		}
		tmp = _g;
		return { tag : "div", attrs : { 'class' : "ithril tabs"}, children : [{ tag : "nav", attrs : { }, children : tmp},this.children[this.selected]]};
	}
	,__class__: ithril_elements_Tabs
});
var ithril_elements_Text = function() {
	ithril_elements_Field.call(this);
};
ithril_elements_Text.__name__ = true;
ithril_elements_Text.__super__ = ithril_elements_Field;
ithril_elements_Text.prototype = $extend(ithril_elements_Field.prototype,{
	mount: function() {
		ithril_elements_Field.prototype.mount.call(this);
		this.setState({ multiline : false, placeholder : "", tabindex : 0});
		this.set_value("");
	}
	,mirror: function(el,isInitialized,ctx) {
		this.setHeight(el);
		if(!isInitialized) return;
		var tmp;
		var f = $bind(this,this.setHeight);
		var a1 = el;
		tmp = function() {
			f(a1);
		};
		var cb = tmp;
		window.addEventListener("resize",cb);
		ctx.onunload = function() {
			window.removeEventListener("resize",cb);
		};
	}
	,setHeight: function(mirror) {
		var area = mirror.previousSibling;
		mirror.style.width = area.offsetWidth + "px";
		area.style.height = mirror.offsetHeight + "px";
	}
	,config: function(el) {
		this.el = el;
	}
	,focus: function() {
		this.el.focus();
	}
	,blur: function() {
		this.el.blur();
	}
	,key: function(e) {
		var _g = e.keyCode;
		switch(_g) {
		case 13:
			this.dispatch(ithril_elements_FieldEventType.Confirm,e);
			break;
		default:
		}
	}
	,view: function() {
		return { tag : "div", attrs : { 'class' : "ithril text"}, children : [this.state.multiline?[{ tag : "textarea", attrs : ithril_Attributes.combine({ 'class' : "field"},ithril_Attributes.combine({ placeholder : this.state.placeholder, required : this.state.required, config : $bind(this,this.config)},ithril_Attributes.attrs($bind(this,this.events)))), children : [this.get_value()]},{ tag : "div", attrs : { config : $bind(this,this.mirror), 'class' : "mirror"}, children : [this.get_value() + "\n"]}]:[{ tag : "input", attrs : ithril_Attributes.combine({ 'class' : "field"},ithril_Attributes.combine({ tabindex : "" + this.state.tabindex, placeholder : this.state.placeholder, required : this.state.required, value : this.get_value(), config : $bind(this,this.config), onkeyup : $bind(this,this.key)},ithril_Attributes.attrs($bind(this,this.events)))), children : []}]]};
	}
	,__class__: ithril_elements_Text
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
ithril_component_ComponentCache.componentInstances = new haxe_ds_StringMap();
ithril_component_ComponentCache.componentCount = new haxe_ds_StringMap();
js_Boot.__toStr = {}.toString;
Web.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
