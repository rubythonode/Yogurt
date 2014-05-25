Yogurt.Submit = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.style
		//OPTIONAL: params.value

		var
		// style
		style = params === undefined ? undefined : params.style,

		// value
		value = params === undefined ? undefined : params.value,

		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ButtonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.ButtonColor,

		// input
		input,

		// get dom.
		getDom;

		input = INPUT({
			type : 'submit',
			style : COMBINE_DATA({
				origin : {
					display : 'block',
					textAlign : 'center',
					paddingTop : 20,
					paddingBottom : 20,
					cursor : 'pointer',
					textDecoration : 'none',
					color : color,
					fontSize : 24,
					border : '1px solid ' + color,
					borderRadius : 5,
					touchCallout : 'none',
					userSelect : 'none',
					backgroundColor : '#fff',
					width : '100%'
				},
				extend : style
			})
		});

		if (value !== undefined) {
			input.setValue(value);
		}

		EVENT({
			node : input,
			name : 'mouseover'
		}, function(e) {
			input.addStyle({
				color : '#fff',
				backgroundColor : color
			});
		});

		EVENT({
			node : input,
			name : 'mouseout'
		}, function(e) {
			input.addStyle({
				color : color,
				backgroundColor : '#fff'
			});
		});

		self.getDom = getDom = function() {
			return input;
		};
	}
});
