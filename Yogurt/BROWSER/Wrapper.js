Yogurt.Wrapper = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.childs
		//OPTIONAL: params.style

		var
		// childs
		childs = params === undefined ? undefined : params.childs,

		// style
		style = params === undefined ? undefined : params.style,

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

		// remove all childs.
		removeAllChilds,

		// get parent.
		getParent,

		// set parent.
		setParent,

		// get childs.
		getChilds,

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

		if (childs !== undefined) {
			EACH(childs, function(child) {
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

		self.removeAllChilds = removeAllChilds = function() {
			div.removeAllChilds();
		};

		self.getParent = getParent = function() {
			return div.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			div.setParent(parent);
		};

		self.getChilds = getChilds = function() {
			return div.getChilds();
		};

		self.addStyle = addStyle = function(style) {
			//REQUIRED: style

			div.addStyle(style);
		};

		if (style !== undefined) {
			addStyle(style);
		}
	}
});
