global.CLASS=METHOD({statics:function(n){"use strict";var t=0;n.getInstanceSeq=function(){return t+=1,t-1}},run:function(n,t){"use strict";{var i,e,r=t.statics,o=t.preset,s=t.init,c=t.params;t.funcs}return e=function(t,r){var o={},s={};return s.id=n.getInstanceSeq(),s.type=e,i(o,s,t,r),s},e.type=CLASS,e.innerInit=i=function(n,t,i,r){var u,v,a;void 0!==c&&(void 0===i?i=c(e):CHECK_IS_DATA(i)===!0?(v=c(e),void 0!==v&&(EXTEND_DATA({origin:v,extend:i}),i=v)):(a=i,i=c(e))),void 0!==o&&(u=o(e,i,r),void 0!==u&&(u.type===CLASS?u.innerInit(n,t,i,r):u.type.innerInit(n,t,i,r))),void 0!==s&&s(e,n,t,void 0===a?i:a,r)},void 0!==r&&r(e),e}});