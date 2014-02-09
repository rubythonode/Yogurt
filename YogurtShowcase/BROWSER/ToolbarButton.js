YogurtShowcase.ToolbarButton = CLASS({

	preset : function() {'use strict';
		return VIEW;
	},

	init : function(cls, inner, self) {'use strict';

		var
		//

		// wrapper
		wrapper,

		// close.
		close;

		TITLE('Yogurt Toolbar Button.');

		wrapper = Yogurt.Wrapper({
			childs : [

			// toolbar
			Yogurt.Toolbar({

				// left childs
				leftChilds : [Yogurt.ToolbarButton({
					style : {
						flt : 'left'
					},
					img : IMG({
						src : Yogurt.R('back.png')
					}),
					onTap : function() {
						YogurtShowcase.GO('');
					}
				}), Yogurt.ToolbarButton({
					style : {
						flt : 'left'
					},
					img : IMG({
						src : Yogurt.R('back.png')
					}),
					onTap : function() {

					}
				})],

				// title
				title : 'Toolbar Button',

				// right childs
				rightChilds : [Yogurt.ToolbarButton({
					msg : 'Button',
					onTap : function() {

					}
				})]
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				childs : [P({
					childs : ['Welcome to Yogurt Showcase.']
				})]
			})]
		}).appendTo(BODY);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
