Yogurt.ToolbarButton = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.img
		//OPTIONAL: params.title
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		var
		// img
		img = params.img,

		// title
		title = params.title,

		// href
		href = params.href,

		// target
		target = params.target,

		// style
		style = params.style,

		// on
		on = params.on,

		// a
		a,

		// span
		span,

		// evt
		evt,

		// set title.
		setTitle,

		// get img.
		getImg,

		// title dom
		titleDom,

		// get dom.
		getDom,

		// tap.
		tap;

		a = A({
			style : COMBINE_DATA({
				origin : {
					display : 'block',
					padding : '16px 10px',
					cursor : 'pointer',
					fontSize : 16
				},
				extend : style
			}),
			href : href,
			target : target,
			on : on,
			children : [ titleDom = DIV({
				style : {
					flt : 'left'
				},
				children : [ span = SPAN({
					children : [title === undefined ? '' : title]
				})]
			}), CLEAR_BOTH()]
		});

		if (img !== undefined) {

			img.addStyle({
				flt : 'left'
			});

			if (img.getStyle('margin') === undefined && img.getStyle('marginRight') === undefined) {
				img.addStyle({
					marginRight : 5
				});
			}

			a.prepend(img);

			evt = EVENT({
				node : img,
				name : 'load'
			}, function(e) {
				titleDom.addStyle({
					marginTop : (img.getHeight() - titleDom.getHeight()) / 2
				});

				evt.remove();
			});
		}

		self.setTitle = setTitle = function(title) {
			span.removeAllChildren();
			span.append(title);
		};

		self.getImg = getImg = function() {
			return img;
		};

		self.getDom = getDom = function() {
			return a;
		};

		self.tap = tap = function() {
			a.tap();
		};
	}
});
