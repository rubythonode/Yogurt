YogurtShowcase.MAIN = METHOD({

	run : function(m, params) {'use strict';

		YogurtShowcase.MATCH_VIEW({
			uris : ['', '**'],
			target : YogurtShowcase.Control
		});

		YogurtShowcase.MATCH_VIEW({
			uris : [''],
			target : YogurtShowcase.Home
		});

		YogurtShowcase.MATCH_VIEW({
			uris : ['Toolbar'],
			target : YogurtShowcase.Toolbar
		});
	}
});
