Yogurt.BottomTap=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,d,l,c,a=void 0===e?void 0:void 0===e.c||CHECK_IS_ARRAY(e.c)===!0?e.c:[e.c],f=void 0===e?void 0:e.style,g=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarColor?"#333":BROWSER_CONFIG.Yogurt.ToolbarColor;n=DIV({style:COMBINE_DATA({origin:{height:60,color:"#fff"},extend:f}),c:r=DIV({style:{position:"fixed",bottom:0,backgroundColor:g,height:60,width:"100%",textAlign:"center"}})}),o.getDom=i=function(){return n},o.append=u=function(t){r.append(t)},void 0!==a&&EACH(a,function(t){u(t)}),o.prepend=d=function(t){r.prepend(t)},o.empty=l=function(){r.empty()},o.getChildren=c=function(){return r.getChildren()}}}),Yogurt.Button=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,d,l,c=e.img,a=e.title,f=e.href,g=e.target,s=e.style,p=e.on,C=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor;n=A({style:COMBINE_DATA({origin:{display:"block",textAlign:"center",paddingTop:20,paddingBottom:20,cursor:"pointer",textDecoration:"none",color:C,fontSize:24,border:"1px solid "+C,borderRadius:5,touchCallout:"none",userSelect:"none",backgroundColor:"#fff"},extend:s}),href:f,target:g,on:p}),void 0!==a&&n.prepend(DIV({c:r=SPAN({c:void 0===a?"":a})})),void 0!==c&&n.prepend(DIV({style:{marginBottom:void 0!==a?5:0},c:[c]})),EVENT({node:n,name:"mouseover"},function(){n.addStyle({color:"#fff",backgroundColor:C})}),EVENT({node:n,name:"mouseout"},function(){n.addStyle({color:C,backgroundColor:"#fff"})}),o.setTitle=i=function(t){r.empty(),r.append(t)},o.getImg=u=function(){return c},o.getDom=d=function(){return n},o.tap=l=function(){n.tap()}}}),Yogurt.Checkbox=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,d,l,c,a,f,g,s,p=e.name,C=e.label,S=e.value,v=void 0===e.c||CHECK_IS_ARRAY(e.c)===!0?e.c:[e.c],O=e.wrapperStyle,y=e.inputStyle,E=e.on,R=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor;n=DIV({style:{textDecoration:"none",color:R,border:"1px solid "+R,paddingLeft:10},on:{tap:function(t){r.toggleCheck(),t.stop()}},c:[r=INPUT({style:{flt:"left",marginTop:10,marginRight:5},name:p,type:"checkbox",value:S,on:E}),i=SPAN({style:{flt:"left",padding:10,paddingLeft:0},c:C}),CLEAR_BOTH()]}),n.isValidWrapper=!0,o.getDom=u=function(){return n},void 0!==v&&EACH(v,function(t){i.after(t)}),o.getName=d=function(){return p},o.getValue=l=function(){return r.getValue()},o.setValue=c=function(t){r.setValue(t)},o.select=a=function(){r.select()},o.blur=f=function(){r.blur()},o.addWrapperStyle=g=function(t){n.addStyle(t)},void 0!==O&&g(O),o.addInputStyle=s=function(t){r.addStyle(t)},void 0!==y&&s(y)}}),Yogurt.Select=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,d,l,c,a,f,g,s,p=e.name,C=e.value,S=e.options,v=e.wrapperStyle,O=e.selectStyle,y=e.on;n=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666",borderLeft:"5px solid #666"},c:r=SELECT({style:{width:"100%",backgroundColor:"transparent",border:"none"},name:p,on:y})}),n.isValidWrapper=!0,o.getDom=i=function(){return n},o.getName=u=function(){return p},o.getValue=d=function(){return r.getValue()},o.setValue=l=function(t){r.setValue(t)},void 0!==C&&l(C),o.select=c=function(){r.select()},o.blur=a=function(){r.blur()},o.addWrapperStyle=f=function(t){n.addStyle(t)},void 0!==v&&f(v),o.addSelectStyle=g=function(t){r.addStyle(t)},void 0!==O&&g(O),o.addOption=s=function(t){r.append(t)},void 0!==S&&EACH(S,function(t){s(t)})}}),Yogurt.Submit=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i=void 0===e?void 0:e.style,u=void 0===e?void 0:e.value,d=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor;n=INPUT({type:"submit",style:COMBINE_DATA({origin:{display:"block",textAlign:"center",paddingTop:20,paddingBottom:20,cursor:"pointer",textDecoration:"none",color:d,fontSize:24,border:"1px solid "+d,borderRadius:5,touchCallout:"none",userSelect:"none",backgroundColor:"#fff",width:"100%"},extend:i})}),void 0!==u&&n.setValue(u),EVENT({node:n,name:"mouseover"},function(){n.addStyle({color:"#fff",backgroundColor:d})}),EVENT({node:n,name:"mouseout"},function(){n.addStyle({color:d,backgroundColor:"#fff"})}),o.getDom=r=function(){return n}}}),Yogurt.Toolbar=CLASS(function(){"use strict";var t=999,o=50;return{preset:function(){return NODE},init:function(e,n,r){var i,u,d=void 0===r?void 0:r.left,l=void 0===r?void 0:r.title,c=void 0===r?void 0:r.right,a=void 0===r?void 0:r.style,f=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarColor?"#333":BROWSER_CONFIG.Yogurt.ToolbarColor,g=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarTextColor?"#fff":BROWSER_CONFIG.Yogurt.ToolbarTextColor;i=DIV({style:COMBINE_DATA({origin:{backgroundColor:f,height:o,color:g},extend:a}),c:[DIV({style:{position:"fixed",top:0,backgroundColor:f,height:o,width:"100%",zIndex:t},c:[void 0===d?"":DIV({style:{position:"absolute",top:0,left:0},c:d}),H1({style:{paddingTop:13,fontSize:20,textAlign:"center",fontWeight:"bold"},c:void 0===l?"":l}),void 0===c?"":DIV({style:{position:"absolute",top:0,right:0},c:c})]})]}),n.getDom=u=function(){return i}}}}),Yogurt.ToolbarButton=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,d,l,c,a,f=e.img,g=e.title,s=e.href,p=e.target,C=e.style,S=e.on;n=A({style:COMBINE_DATA({origin:{display:"block",padding:"16px 10px",cursor:"pointer",fontSize:16},extend:C}),href:s,target:p,on:S,c:[l=DIV({style:{flt:"left"},c:r=SPAN({c:void 0===g?"":g})}),CLEAR_BOTH()]}),void 0!==f&&(f.addStyle({flt:"left"}),void 0===f.getStyle("margin")&&void 0===f.getStyle("marginRight")&&f.addStyle({marginRight:5}),n.prepend(f),i=EVENT({node:f,name:"load"},function(){l.addStyle({marginTop:(f.getHeight()-l.getHeight())/2}),i.remove()})),o.setTitle=u=function(t){r.empty(),r.append(t)},o.getImg=d=function(){return f},o.getDom=c=function(){return n},o.tap=a=function(){n.tap()}}}),Yogurt.Wrapper=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i=void 0===e?void 0:void 0===e.c||CHECK_IS_ARRAY(e.c)===!0?e.c:[e.c],u=COMBINE_DATA({origin:void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.WrapperStyle?{}:BROWSER_CONFIG.Yogurt.WrapperStyle,extend:e.style});n=DIV({style:COMBINE_DATA({origin:{backgroundColor:"#fff",color:"#000",fontSize:16,position:"absolute",left:0,top:0,width:"100%"},extend:u}),c:i}),o.getDom=r=function(){return n}}});