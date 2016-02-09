package ithril.elements;

import ithril.Component;

class Chip extends Component<{?onremove: Void -> Void}> {
	
	public function view() [
		(div.ithril.chip)
			(child in children)
				[child]
			($if (state.onremove != null))
				(a.remove (onclick=state.onremove) > '×')
	];
	
}