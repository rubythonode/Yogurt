YogurtShowcase.ToolbarButton = CLASS({

	preset : function() {'use strict';
		return VIEW;
	},

	init : function(inner, self) {'use strict';

		var
		//

		// wrapper
		wrapper,

		// close.
		close;

		TITLE('Yogurt Toolbar Button.');

		wrapper = Yogurt.Wrapper({
			children : [

			// toolbar
			Yogurt.Toolbar({

				// left child
				leftChild : Yogurt.ToolbarButton({
					style : {
						flt : 'left'
					},
					img : IMG({
						src : Yogurt.R('back.png')
					}),
					onTap : function() {
						YogurtShowcase.GO('');
					}
				}),

				// title
				title : 'Toolbar Button',

				// right child
				rightChild : Yogurt.ToolbarButton({
					msg : 'Button',
					onTap : function() {

					}
				})
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				children : [P({
					children : ['Welcome to Yogurt Showcase.']
				})]
			})]
		}).appendTo(BODY);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
