Yogurt.Toolbar = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.leftChilds
		//OPTIONAL: params.title
		//OPTIONAL: params.rightChilds
		//OPTIONAL: params.style

		var
		// left childs
		leftChilds = params === undefined ? undefined : params.leftChilds,

		// title
		title = params === undefined ? undefined : params.title,

		// right childs
		rightChilds = params === undefined ? undefined : params.rightChilds,

		// style
		style = params === undefined ? undefined : params.style,

		// div
		div,

		// left
		left,

		// center
		center,

		// right
		right,

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
		addStyle,

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow;

		div = DIV({
			style : {
				backgroundColor : '#333',
				height : 50
			},
			childs : [DIV({
				style : {
					position : 'fixed',
					top : 0,
					backgroundColor : '#333',
					color : '#fff',
					height : 50,
					width : '100%'
				},
				childs : [ left = DIV({
					style : {
						position : 'absolute',
						top : 0,
						left : 0
					}
				}), title = H1({
					style : {
						paddingTop : 13,
						fontSize : 20,
						textAlign : 'center',
						fontWeight : 'bold'
					},
					childs : [title]
				}), right = DIV({
					style : {
						position : 'absolute',
						top : 0,
						right : 0
					}
				})]
			})]
		});

		if (leftChilds !== undefined) {
			EACH(leftChilds, function(child, i) {
				left.append(child);
			});
		}

		if (rightChilds !== undefined) {
			EACH(rightChilds, function(child, i) {
				right.append(child);
			});
		}

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
