require('./UPPERCASE/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'YogurtShowcase',
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotNeedDbAuth : true
	}
});
