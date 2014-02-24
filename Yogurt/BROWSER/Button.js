Yogurt.Button = CLASS({

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
		//OPTIONAL: params.onTap

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

		// on tap
		onTap = params.onTap,

		// color
		color = BROWSER_CONFIG.Yogurt === undefined || BROWSER_CONFIG.Yogurt.ButtonColor === undefined ? '#333' : BROWSER_CONFIG.Yogurt.ButtonColor,

		// a
		a,

		// span
		span,

		// set title.
		setTitle,

		// get img.
		getImg,

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
		checkIsShow,

		// tap.
		tap;

		a = A({
			style : {
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
				backgroundColor : '#fff'
			},
			href : href,
			target : target
		});

		if (title !== undefined) {
			a.prepend(DIV({
				children : [ span = SPAN({
					children : [title === undefined ? '' : title]
				})]
			}));
		}

		if (img !== undefined) {
			a.prepend(DIV({
				style : {
					marginBottom : title !== undefined ? 5 : 0
				},
				children : [img]
			}));
		}

		if (onTap !== undefined) {
			EVENT({
				node : a,
				name : 'tap'
			}, function(e) {
				onTap(e, self);
			});
		}

		EVENT({
			node : a,
			name : 'mouseover'
		}, function(e) {
			a.addStyle({
				color : '#fff',
				backgroundColor : color
			});
		});

		EVENT({
			node : a,
			name : 'mouseout'
		}, function(e) {
			a.addStyle({
				color : color,
				backgroundColor : '#fff'
			});
		});

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

		self.append = append = function(node) {
			//REQUIRED: node

			a.append(node);
		};

		self.appendTo = appendTo = function(node) {
			//REQUIRED: node

			node.append(a);

			return self;
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			a.prepend(node);
		};

		self.prependTo = prependTo = function(node) {
			//REQUIRED: node

			node.prepend(a);

			return self;
		};

		self.after = after = function(node) {
			//REQUIRED: node

			a.after(node);
		};

		self.insertAfter = insertAfter = function(node) {
			//REQUIRED: node

			node.after(a);

			return self;
		};

		self.before = before = function(node) {
			//REQUIRED: node

			a.before(node);
		};

		self.insertBefore = insertBefore = function(node) {
			//REQUIRED: node

			node.before(a);

			return self;
		};

		self.remove = remove = function() {
			a.remove();
		};

		self.removeAllChildren = removeAllChildren = function() {
			a.removeAllChildren();
		};

		self.getParent = getParent = function() {
			return a.getParent();
		};

		self.setParent = setParent = function(parent) {
			//REQUIRED: parent

			a.setParent(parent);
		};

		self.getChildren = getChildren = function() {
			return a.getChildren();
		};

		self.addStyle = addStyle = function(style) {
			//REQUIRED: style

			a.addStyle(style);
		};

		if (style !== undefined) {
			addStyle(style);
		}

		self.show = show = function() {
			a.show();
		};

		self.hide = hide = function() {
			a.hide();
		};

		self.checkIsShow = checkIsShow = function() {
			return a.checkIsShow();
		};

		self.tap = tap = function() {
			onTap();
		};
	}
});
