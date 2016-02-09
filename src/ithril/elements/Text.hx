package ithril.elements;

import ithril.Component;
import ithril.elements.Field;

typedef TextOptions = {
	>FieldOptions<Text, String>,
	?multiline: Bool,
	?placeholder: String,
	?tabindex: Int
}

class Text extends Field<TextOptions, String> {
	var el: Dynamic;
	
	override public function mount() {
		super.mount();
		setState({multiline: false, placeholder: '', tabindex: 0});
		value = '';
	}
	
	function mirror(el, isInitialized, ctx) {
		#if js
		setHeight(el);
		if (!isInitialized) return;
		var cb = setHeight.bind(el);
		js.Browser.window.addEventListener('resize', cb);
		ctx.onunload = function() js.Browser.window.removeEventListener('resize', cb);
		#end
	}

	function setHeight(mirror) {
		var area = mirror.previousSibling;
		mirror.style.width = area.offsetWidth+'px';
		area.style.height = mirror.offsetHeight+'px';
	}
	
	function config(el) this.el = el;
	
	@:keep
	public function focus() el.focus();
	@:keep
	public function blur() el.blur();
	
	function key(e) {
		switch e.keyCode {
			case 13:
				dispatch(Confirm, cast e);
			default:
		}
	}

	public function view() [
		(div.ithril.text)
			($if (state.multiline))
				(textarea.field 
					(
						placeholder=state.placeholder, 
						required = state.required, 
						config=config
					) 
					(events) > value
				)
				(div.mirror (config = mirror) > value+"\n")
			($else)
				(input.field 
					(
						tabindex=''+state.tabindex,
						placeholder=state.placeholder, 
						required=state.required, 
						value=value,
						config=config,
						onkeyup=key
					) 
					(events)
				)
	];
}