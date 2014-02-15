YogurtShowcase.Form = CLASS({

	preset : function() {'use strict';
		return VIEW;
	},

	init : function(cls, inner, self) {'use strict';

		var
		// wrapper
		wrapper,

		// close.
		close;

		TITLE('Yogurt Form.');

		wrapper = Yogurt.Wrapper({
			childs : [

			// toolbar
			Yogurt.Toolbar({

				// left child
				leftChild : Yogurt.ToolbarButton({
					img : IMG({
						src : Yogurt.R('back.png')
					}),
					onTap : function() {
						YogurtShowcase.GO('');
					}
				}),

				// title
				title : 'Form'
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				childs : [P({
					childs : ['Welcome to Form Showcase.']
				}), UUI.VALID_FORM({
					style : {
						marginTop : 15
					},
					childs : [Yogurt.Input({
						
					})]
				})]
			})]
		}).appendTo(BODY);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
