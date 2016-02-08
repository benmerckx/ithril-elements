package ithril.elements;

import ithril.Component;
using Reflect;

typedef OriginalEvent = #if js js.html.Event #else Dynamic #end;

enum FieldEventType {
	Change;
	Input;
	Focus;
	Blur;
}

typedef FieldEvent<F> = {
	type: FieldEventType,
	field: F,
	?originalEvent: OriginalEvent
}

typedef FieldEventListener<F> = FieldEvent<F> -> Void;

typedef FieldEvents<F> = {
	?onchange: FieldEventListener<F>,
	?oninput: FieldEventListener<F>,
	?onfocus: FieldEventListener<F>,
	?onblur: FieldEventListener<F>
}

typedef FieldOptions<F, D> = {
	>FieldEvents<F>,
	?key: String,
	?value: D,
	?required: Bool,
	?disabled: Bool
}

class Field<Options: FieldOptions<Dynamic, Data>, Data> extends Component<Options> {
	@:isVar public var value(get, set): Data;
	function get_value()
		return value;
	function set_value(value)
		return this.value = value;
		
	override public function mount() {
		setState(cast {required: false, disabled: false});
	}

	function dispatch(e: FieldEventType, ?originalEvent: OriginalEvent) {
		var method = switch e {
			case Change: state.onchange;
			case Input: state.oninput;
			case Focus: state.onfocus;
			case Blur: state.onblur;
		};
		if (method != null)
			method({type: FieldEventType.Change, field: this, originalEvent: originalEvent});
	}
		
	function events() {
		return {
			onchange: function(e: OriginalEvent) {
				value = untyped e.target.value;
				dispatch(Change, e);
			},
			oninput: function(e: OriginalEvent) {
				value = untyped e.target.value;
				dispatch(Input, e);
			},
			onfocus: dispatch.bind(Focus, _),
			onblur: dispatch.bind(Blur, _)
		};
	}

	override public function setState(state: Options) {
		if (this.state == null) this.state = cast {};
		for (key in state.fields()) {
			if (state.hasField(key)) 
				this.state.setField(key, state.field(key));
		}
		if (this.state.hasField('value'))
			value = this.state.value;
	}
}