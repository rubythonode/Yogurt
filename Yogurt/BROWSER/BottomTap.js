Yogurt.BottomTap = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style

		var
		// children
		children = params === undefined ? undefined : (params.c === undefined || CHECK_IS_ARRAY(params.c) === true ? params.c : [params.c]),

		// style
		style = params === undefined ? undefined : params.style,

		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ToolbarColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.ToolbarColor,

		// wrapper
		wrapper,

		// content
		content,

		// get dom.
		getDom,

		// append.
		append,

		// prepend.
		prepend,

		// empty
		empty,

		// get children.
		getChildren;

		wrapper = DIV({
			style : COMBINE_DATA({
				origin : {
					height : 60,
					color : '#fff'
				},
				extend : style
			}),
			c : content = DIV({
				style : {
					position : 'fixed',
					bottom : 0,
					backgroundColor : color,
					height : 60,
					width : '100%',
					textAlign : 'center'
				}
			})
		});

		self.getDom = getDom = function() {
			return wrapper;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			content.append(node);
		};

		if (children !== undefined) {
			EACH(children, function(child) {
				append(child);
			});
		}

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			content.prepend(node);
		};

		self.empty = empty = function() {
			content.empty();
		};

		self.getChildren = getChildren = function() {
			return content.getChildren();
		};
	}
});
