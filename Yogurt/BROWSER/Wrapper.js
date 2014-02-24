Yogurt.Wrapper = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.children
		//OPTIONAL: params.style

		var
		// children
		children = params === undefined ? undefined : params.children,

		// style
		style = COMBINE_DATA({
			origin : BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.WrapperStyle === undefined ? {} : BROWSER_CONFIG.Yogurt.WrapperStyle,
			extend : params.style
		}),

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
		addStyle;

		div = DIV({
			style : {
				backgroundColor : '#fff',
				color : '#000',
				fontSize : 16,
				position : 'absolute',
				left : 0,
				top : 0,
				width : '100%'
			}
		});

		self.getDom = getDom = function() {
			return div;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			div.append(node);
		};

		if (children !== undefined) {
			EACH(children, function(child) {
				append(child);
			});
		}

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

		addStyle(style);
	}
});
