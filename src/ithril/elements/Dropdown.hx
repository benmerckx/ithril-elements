package ithril.elements;

import haxe.DynamicAccess;
import ithril.Component;
import ithril.elements.Field;
import ithril.elements.OptionList;
using Lambda;

typedef DropdownOptions = {
	>FieldOptions<Checkbox, String>,
	options: Map<String, String>,
	?searchable: Bool,
	?placeholder: String
};

typedef Options = OptionList<String>;
typedef Item = Option<String>;

class Dropdown extends Field<DropdownOptions, String> {
	var query: String = null;
	var show = false;
	var focusEl = null;
	
	override public function mount() {
		super.mount();
		setState({options: null, placeholder: 'Select…', searchable: false});
	}
	
	public function open(?show: Bool) {
		this.show = show == null ? !this.show : show;
		dispatch(this.show?Focus:Blur);
		#if js 
		if (this.show) {
			focusEl.focus();
		} else {
			focusEl.blur();
			query = null;
		}
		#end
	}
	
	function openClick(e) {
		e.preventDefault();
		open();
	}
	
	function focusChange(show: Bool, e: FieldEvent<Text>) {
		open(show);
	}
	
	function select(key: String) {
		value = key;
		query = null;
		open(false);
		dispatch(Change);
	}
	
	function filter(key: String) {
		var option = state.options.get(key).toLowerCase();
		return option.indexOf(query.toLowerCase()) > -1;
	}
	
	function focusAttr(): Dynamic {
		if (!state.searchable) return {
			tabindex: '0',
			onfocus:focusChange.bind(true, _),
			onblur:focusChange.bind(false, _)
		};
		return {};
	}
	
	function config(el) {
		if (!state.searchable) focusEl = el;
	}
	
	public function view() [
		(div.ithril.dropdown (config=config, 'class'= (show?'open':'')) (focusAttr))
			($if (show))
				(Options (
					filter=(query!=null?filter:null), 
					height=40, 
					onchange=function(e) select(e.field.value)
				))
					(key in state.options.keys())
						(Item (key = key))
							[state.options.get(key)]
			(div.main)
				($if (state.searchable))
					(focusEl = Text (
						onfocus=focusChange.bind(true, _),
						onblur=focusChange.bind(false, _),
						oninput=function(e) query = e.field.value,
						value = query,
						placeholder=(value==null?state.placeholder:state.options.get(value))
					))
				($else)
					($if (value == null))
						(div.value (onmousedown=openClick) > state.placeholder)
					($else)
						(div.value (onmousedown=openClick) > state.options.get(value))
				($if (!state.required && value != null))
					(a.remove (onmousedown=select.bind(null)) > '×')
	];
	
}