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
				style : {
					padding : 20
				},
				childs : [IMG({
					style : {
						display : 'block',
						maxWidth : '100%'
					},
					src : YogurtShowcase.R_URI('yogurt.jpg')
				}), P({
					style : {
						marginTop : 20
					},
					childs : ['Welcome to Yogurt Showcase.\nYogurt is ', A({
						href : 'http://uppercase.io',
						target : '_blank',
						childs : ['UPPERCASE']
					}), '-Based Mobile UI Framework.']
				}), UL({
					style : {
						marginTop : 20
					},
					childs : RUN(function() {

						var
						// array
						array = [];

						EACH([{
							title : 'Toolbar',
							uri : 'Toolbar'
						}, {
							title : 'Toolbar Button',
							uri : 'ToolbarButton'
						}, {
							title : 'Toolbar Input',
							uri : 'ToolbarInput'
						}, {
							title : 'Button',
							uri : 'Button'
						}, {
							title : 'Form',
							uri : 'Form'
						}, {
							title : 'List',
							uri : 'List'
						}, {
							title : 'Icon',
							uri : 'Icon'
						}, {
							title : 'Tap',
							uri : 'Tap'
						}, {
							title : 'Action Sheet',
							uri : 'ActionSheet'
						}, {
							title : 'Alert',
							uri : 'Alert'
						}, {
							title : 'Prompt',
							uri : 'Prompt'
						}, {
							title : 'Confirm',
							uri : 'Confirm'
						}, {
							title : 'Picker',
							uri : 'Picker'
						}, {
							title : 'Menu',
							uri : 'Menu'
						}], function(data, i) {

							array.push(Yogurt.Button({
								style : {
									marginTop : i === 0 ? 0 : 15
								},
								msg : data.title,
								onTap : function() {
									YogurtShowcase.GO(data.uri);
								}
							}));
						});

						return array;
					})
				})]
			})]
		}).appendTo(YogurtShowcase.GLOBAL.content);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
