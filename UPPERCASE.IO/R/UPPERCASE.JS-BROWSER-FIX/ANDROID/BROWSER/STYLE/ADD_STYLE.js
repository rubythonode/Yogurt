OVERRIDE(ADD_STYLE,function(o){"use strict";global.ADD_STYLE=ADD_STYLE=METHOD({run:function(e,t){var n=t.node,l=t.style,d=n.getDom().getEl();EACH(l,function(e,t){var n,l,c;if("onDisplayResize"===t)n={},n[t]=e,o({dom:dom,style:n});else try{"overflow"===t&&ANDROID.version<3?(EVENT({node:dom,name:"touchmove"},function(o){void 0===l?l=d.scrollLeft+o.getLeft():d.scrollLeft=l-o.getLeft(),void 0===c?c=d.scrollTop+o.getTop():d.scrollTop=c-o.getTop(),o.stopDefault()}),EVENT({node:dom,name:"touchend"},function(){l=void 0,c=void 0})):"overflowX"===t&&ANDROID.version<3?(EVENT({node:dom,name:"touchmove"},function(o){void 0===l?l=d.scrollLeft+o.getLeft():d.scrollLeft=l-o.getLeft(),o.stopDefault()}),EVENT({node:dom,name:"touchend"},function(){l=void 0})):"overflowY"===t&&ANDROID.version<3&&(EVENT({node:dom,name:"touchmove"},function(o){void 0===c?c=d.scrollTop+o.getTop():d.scrollTop=c-o.getTop(),o.stopDefault()}),EVENT({node:dom,name:"touchend"},function(){c=void 0})),n={},n[t]=e,o({dom:dom,style:n})}catch(f){}})}})});