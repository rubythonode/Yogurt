YogurtShowcase.Control = CLASS({

	preset : function() {'use strict';
		return VIEW;
	},

	init : function(cls, inner, self) {'use strict';

		var
		// wrapper
		wrapper,

		// close.
		close;

		YogurtShowcase.GLOBAL.wrapper = wrapper = Yogurt.Wrapper({
			childs : [

			// content
			YogurtShowcase.GLOBAL.content = DIV()]
		}).appendTo(BODY);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
