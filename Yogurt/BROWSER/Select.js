Yogurt.Select = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.value
		//REQUIRED: params.options
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.selectStyle
		//OPTIONAL: params.on

		var
		// name
		name = params.name,

		// value
		value = params.value,

		// options
		options = params.options,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// select style
		selectStyle = params.selectStyle,

		// on
		on = params.on,

		// wrapper
		wrapper,

		// _select
		_select,

		// get dom.
		getDom,

		// get name.
		getName,

		// get value.
		getValue,

		// set value.
		setValue,

		// select.
		select,

		// blur.
		blur,

		// add wrapper style.
		addWrapperStyle,

		// add select style.
		addSelectStyle,

		// add option.
		addOption;

		wrapper = DIV({
			style : {
				padding : 5,
				backgroundColor : '#FFF',
				position : 'relative',
				border : '1px solid #666',
				borderLeft : '5px solid #666'
			},
			c : _select = SELECT({
				style : {
					width : '100%',
					backgroundColor : 'transparent',
					border : 'none'
				},
				name : name,
				on : on
			})
		});

		// for VALID_FORM.
		wrapper.isValidWrapper = true;

		self.getDom = getDom = function() {
			return wrapper;
		};

		self.getName = getName = function() {
			return name;
		};

		self.getValue = getValue = function() {
			return _select.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			_select.setValue(value);
		};

		if (value !== undefined) {
			setValue(value);
		}

		self.select = select = function() {
			_select.select();
		};

		self.blur = blur = function() {
			_select.blur();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addSelectStyle = addSelectStyle = function(style) {
			//REQUIRED: style

			_select.addStyle(style);
		};

		if (selectStyle !== undefined) {
			addSelectStyle(selectStyle);
		}

		self.addOption = addOption = function(option) {
			//REQUIRED: option

			_select.append(option);
		};

		if (options !== undefined) {
			EACH(options, function(option) {
				addOption(option);
			});
		}
	}
});
