Yogurt.Wrapper = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style

		var
		// children
		children = params === undefined ? undefined : (params.c === undefined || CHECK_IS_ARRAY(params.c) === true ? params.c : [params.c]),

		// style
		style = COMBINE_DATA({
			origin : BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.WrapperStyle === undefined ? {} : BROWSER_CONFIG.Yogurt.WrapperStyle,
			extend : params.style
		}),

		// div
		div,

		// get dom.
		getDom;

		div = DIV({
			style : COMBINE_DATA({
				origin : {
					backgroundColor : '#fff',
					color : '#000',
					fontSize : 16,
					position : 'absolute',
					left : 0,
					top : 0,
					width : '100%'
				},
				extend : style
			}),
			c : children
		});

		self.getDom = getDom = function() {
			return div;
		};
	}
});
