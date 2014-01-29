YogurtShowcase.Home = CLASS({

	preset : function() {'use strict';
		return VIEW;
	},

	init : function(cls, inner, self) {'use strict';

		var
		// wrapper
		wrapper,

		// close.
		close;

		TITLE('Yogurt Toolbar.');

		wrapper = Yogurt.Wrapper({
			childs : [

			// toolbar
			Yogurt.Toolbar({

				// title
				title : 'Yogurt!'
			}),

			// content
			DIV({
				childs : [IMG({
					style : {
						maxWidth : '100%'
					},
					src : YogurtShowcase.R_URI('yogurt.jpg')
				}), P({
					childs : ['Welcome to Yogurt Showcase.']
				}), UL({
					childs : [LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Toolbar',
							onTap : function() {
								YogurtShowcase.GO('Toolbar');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Toolbar Button',
							onTap : function() {
								YogurtShowcase.GO('ToolbarButton');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Toolbar Input',
							onTap : function() {
								YogurtShowcase.GO('ToolbarInput');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Button',
							onTap : function() {
								YogurtShowcase.GO('Button');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Form',
							onTap : function() {
								YogurtShowcase.GO('Form');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'List',
							onTap : function() {
								YogurtShowcase.GO('List');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Icon',
							onTap : function() {
								YogurtShowcase.GO('Icon');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Tap',
							onTap : function() {
								YogurtShowcase.GO('Tap');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Action Sheet',
							onTap : function() {
								YogurtShowcase.GO('ActionSheet');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Alert',
							onTap : function() {
								YogurtShowcase.GO('Alert');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Prompt',
							onTap : function() {
								YogurtShowcase.GO('Prompt');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Confirm',
							onTap : function() {
								YogurtShowcase.GO('Confirm');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Picker',
							onTap : function() {
								YogurtShowcase.GO('Picker');
							}
						})]
					}), LI({
						childs : [UUI.TEXT_BUTTON({
							msg : 'Menu',
							onTap : function() {
								YogurtShowcase.GO('Menu');
							}
						})]
					})]
				})]
			})]
		}).appendTo(YogurtShowcase.GLOBAL.content);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
