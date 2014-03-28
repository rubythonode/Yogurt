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
		getDom,

		// append.
		append,

		// append to.
		appendTo,

		// prepend.
		prepend,

		// prepend to.
		prependTo,

		// after.
		after,

		// insert after.
		insertAfter,

		// before.
		before,

		// insert before.
		insertBefore,

		// remove.
		remove,

		// remove all children.
		removeAllChildren,

		// get parent.
		getParent,

		// set parent.
		setParent,

		// get children.
		getChildren,

		// add style.
		addStyle,

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow;

		div = DIV({
			style : {
				backgroundColor : color,
				height : cls.height,
				color : textColor
			},
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

		self.append = append = function(node) {
			//REQUIRED: node

			div.append(node);
		};

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(div);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			div.prepend(node);
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(div);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			div.after(node);
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(div);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			div.before(node);
		};

		self.insertBefore = insertBefore = function(node) {
			//REQUIRED: node

			node.before(div);

			return self;
		};

		self.remove = remove = function() {
			div.remove();
		};

		self.removeAllChildren = removeAllChildren = function() {
			div.removeAllChildren();
		};

		self.getParent = getParent = function() {
			return div.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			div.setParent(parent);
		};

		self.getChildren = getChildren = function() {
			return div.getChildren();
		};

		self.addStyle = addStyle = function(style) {
			//REQUIRED: style

			div.addStyle(style);
		};

		if (style !== undefined) {
			addStyle(style);
		}

		self.show = show = function() {
			div.show();
		};

		self.hide = hide = function() {
			div.hide();
		};

		self.checkIsShow = checkIsShow = function() {
			return div.checkIsShow();
		};
	}
});
