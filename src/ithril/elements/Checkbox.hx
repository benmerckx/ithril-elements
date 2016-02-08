package ithril.elements;

import ithril.Component;
import ithril.elements.Field;

typedef CheckboxOptions = {
	>FieldOptions<Checkbox, Bool>,
	label: String
};

class Checkbox extends Field<CheckboxOptions, Bool> {
	override public function mount() {
		super.mount();
		value = false;
	}
	
	public function view() [
		(div.ithril.checkbox)
			(label)
				(input[type="checkbox"] (checked = value) (events))
				(span > state.label)
	];
	
}