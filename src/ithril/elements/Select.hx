package ithril.elements;

import ithril.Component;
import ithril.elements.Field;
import ithril.elements.OptionList;

typedef SelectOptions = {
	>FieldOptions<Select, Array<String>>,
	?canAdd: Bool,
	?options: Map<String, String>,
	?placeholder: String
}

typedef SelectOptionList = OptionList<String>;
typedef SelectOption = Option<String>;

class Select extends Field<SelectOptions, Array<String>> {
	var query: String = null;
	var show = false;
	var focusEl = null;
	
	override public function mount() {
		super.mount();
		setState({canAdd: false, options: new Map(), placeholder: 'Add…'});
		value = [];
	}
	
	public function open(?show: Bool) {
		this.show = show == null ? !this.show : show;
		dispatch(this.show?Focus:Blur);
		if (this.show) {
			focusEl.focus();
		} else {
			focusEl.blur();
			query = null;
		}
	}
	
	function focusChange(show: Bool, e: FieldEvent<Text>) {
		open(show);
	}
	
	function add(key: String) {
		value.push(key);
		query = null;
		open(false);
		dispatch(Change);
	}
	
	function filter(key: String) {
		var option = state.options.get(key).toLowerCase();
		return option.indexOf(query.toLowerCase()) > -1;
	}

	function confirm(e: FieldEvent<Text>) {
		add(e.field.value);
		focusEl.focus();
	}
	
	public function remove(key: String) {
		value = value.filter(function(k) return key != k);
		dispatch(Change);
	}

	public function view() [
		(div.ithril.select ('class'=(show?'open':'')))
			($if (state.options != null && show))
				(SelectOptionList (
					filter=(query!=null?filter:null),  
					onchange=function(e) add(e.field.value)
				))
					(key in state.options.keys())
						(SelectOption (key = key))
							[state.options.get(key)]
			(div.main)
				(div.chips)
					(key in value)
						(Chip (onremove=remove.bind(key)))
							[state.options.exists(key)?state.options.get(key):key]
				(focusEl = Text (
					onfocus=focusChange.bind(true, _),
					onblur=focusChange.bind(false, _),
					oninput=function(e) query = e.field.value,
					value = query,
					placeholder=state.placeholder,
					onconfirm=confirm
				))
	];
}