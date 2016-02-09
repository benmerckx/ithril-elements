package ithril.elements;

import ithril.Component;
import ithril.elements.Field;

typedef OptionListOptions<K> = {
	>FieldOptions<OptionList<K>, K>,
	?filter: K -> Bool
}

class Option<K> extends Component<{key: K}> {
	
	var list(get, never): OptionList<K>;
	function get_list() return cast parent;
	
	function select(e) {
		e.preventDefault();
		list.select(state.key);
	}
	
	public function view() [
		(div.option (onmousedown=select, 'class'=(list.value==state.key?'selected':'')))
			(child in children)
				[child]
	];
	
}

class OptionList<K> extends Field<OptionListOptions<K>, K> {
	
	public function select(key: K) {
		value = key;
		dispatch(Change);
	}
	
	function config(el, i, ctx) {
		#if js
		var top = el.getBoundingClientRect().top;
		if (top + el.offsetHeight > js.Browser.window.innerHeight)
			el.className += ' align-top';
		#end
	}
	
	function filtered() {
		if (state.filter == null) return children;
		return children.filter(function(child: Option<K>) {
			return state.filter(child.state.key);
		});
	}
	
	public function view() [
		(div.ithril.option-list (config=config))
			(child in filtered())
				[child]
	];
	
}