Yogurt.Toolbar = CLASS({

	statics : function(cls) {'use strict';

		// z index
		cls.zIndex = 999;

		// height
		cls.height = 50;
	},

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.left
		//OPTIONAL: params.title
		//OPTIONAL: params.right
		//OPTIONAL: params.style

		var
		// left
		left = params === undefined ? undefined : params.left,

		// title
		title = params === undefined ? undefined : params.title,

		// right
		right = params === undefined ? undefined : params.right,

		// style
		style = params === undefined ? undefined : params.style,

		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ToolbarColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.ToolbarColor,

		// text color
		textColor = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ToolbarTextColor === undefined ? '#fff' : BROWSER_CONFIG.Yogurt.ToolbarTextColor,

		// div
		div,

		// get dom.
		getDom;

		div = DIV({
			style : COMBINE_DATA({
				origin : {
					backgroundColor : color,
					height : cls.height,
					color : textColor
				},
				extend : style
			}),
			children : [DIV({
				style : {
					position : 'fixed',
					top : 0,
					backgroundColor : color,
					height : cls.height,
					width : '100%',
					zIndex : cls.zIndex
				},
				children : [left === undefined ? '' : DIV({
					style : {
						position : 'absolute',
						top : 0,
						left : 0
					},
					children : [left]
				}), H1({
					style : {
						paddingTop : 13,
						fontSize : 20,
						textAlign : 'center',
						fontWeight : 'bold'
					},
					children : [title === undefined ? '' : title]
				}), right === undefined ? '' : DIV({
					style : {
						position : 'absolute',
						top : 0,
						right : 0
					},
					children : [right]
				})]
			})]
		});

		self.getDom = getDom = function() {
			return div;
		};
	}
});
