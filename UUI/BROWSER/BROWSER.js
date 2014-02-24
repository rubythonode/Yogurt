UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,E,T,P,I,b,w,D=o.img,V=o.title,U=void 0===o.spacing?0:o.spacing,N=o.href,O=o.target,L=o.style,k=o.onTap,_=o.onMouseover,M=o.onMouseout;r=A({style:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:N,target:O}),void 0!==V&&r.prepend(i=DIV({children:[void 0===V?"":V]})),void 0!==D&&r.prepend(DIV({style:{marginBottom:void 0!==V?U:0},children:[D]})),void 0!==k&&EVENT({node:r,name:"tap"},function(e){k(e,t)}),void 0!==_&&EVENT({node:r,name:"mouseover"},function(e){_(e,t)}),void 0!==M&&EVENT({node:r,name:"mouseout"},function(e){M(e,t)}),t.setTitle=u=function(e){i.removeAllChildren(),i.append(e)},t.getImg=d=function(){return D},t.getDom=c=function(){return r},t.append=f=function(e){r.append(e)},t.appendTo=a=function(e){return e.append(r),t},t.prepend=l=function(e){r.prepend(e)},t.prependTo=p=function(e){return e.prepend(r),t},t.after=s=function(e){r.after(e)},t.insertAfter=v=function(e){return e.after(r),t},t.before=h=function(e){r.before(e)},t.insertBefore=g=function(e){return e.before(r),t},t.remove=m=function(){r.remove()},t.removeAllChildren=S=function(){r.removeAllChildren()},t.getParent=C=function(){return r.getParent()},t.setParent=y=function(e){r.setParent(e)},t.getChildren=E=function(){return r.getChildren()},t.addStyle=T=function(e){r.addStyle(e)},void 0!==L&&T(L),t.show=P=function(){r.show()},t.hide=I=function(){r.hide()},t.checkIsShow=b=function(){return r.checkIsShow()},t.tap=w=function(){k()}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,i,f,a,l,p,s,v,h,g,m,S,C,y,E,T,P,I,b,w,D,V=o.img,U=o.title,N=void 0===o.spacing?0:o.spacing,O=o.href,L=o.target,k=o.style,_=o.onTap,M=o.onMouseover,R=o.onMouseout;r=A({style:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:O,target:L,children:[i=DIV({style:{flt:"left"},children:[void 0===U?"":U]}),CLEAR_BOTH()]}),void 0!==V&&(V.addStyle({flt:"left"}),void 0===V.getStyle("margin")&&void 0===V.getStyle("marginRight")&&V.addStyle({marginRight:N}),r.prepend(V),u=EVENT({node:V,name:"load"},function(){i.addStyle({marginTop:(V.getHeight()-i.getHeight())/2}),u.remove()})),void 0!==_&&EVENT({node:r,name:"tap"},function(e){_(e,t)}),void 0!==M&&EVENT({node:r,name:"mouseover"},function(e){M(e,t)}),void 0!==R&&EVENT({node:r,name:"mouseout"},function(e){R(e,t)}),t.setTitle=d=function(e){i.removeAllChildren(),i.append(e)},t.getImg=c=function(){return V},t.getDom=f=function(){return r},t.append=a=function(e){r.append(e)},t.appendTo=l=function(e){return e.append(r),t},t.prepend=p=function(e){r.prepend(e)},t.prependTo=s=function(e){return e.prepend(r),t},t.after=v=function(e){r.after(e)},t.insertAfter=h=function(e){return e.after(r),t},t.before=g=function(e){r.before(e)},t.insertBefore=m=function(e){return e.before(r),t},t.remove=S=function(){r.remove()},t.removeAllChildren=C=function(){r.removeAllChildren()},t.getParent=y=function(){return r.getParent()},t.setParent=E=function(e){r.setParent(e)},t.getChildren=T=function(){return r.getChildren()},t.addStyle=P=function(e){r.addStyle(e)},void 0!==k&&P(k),t.show=I=function(){r.show()},t.hide=b=function(){r.hide()},t.checkIsShow=w=function(){return r.checkIsShow()},t.tap=D=function(){_()}}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,P,I,b,w,D,V,U,N,O=o.name,L=o.label,k=o.value,_=o.children,M=o.wrapperStyle,R=o.inputStyle,B=o.onChange;r=DIV({style:{position:"relative"},on:{tap:function(e){i.toggleCheck(),e.stop()}},children:[i=INPUT({style:{flt:"left",marginRight:5},name:O,type:"checkbox",value:k}),u=SPAN({style:{flt:"left"},children:[L]}),CLEAR_BOTH()]}),r.isValidWrapper=!0,t.getDom=d=function(){return r},t.append=c=function(e){r.append(e)},void 0!==_&&EACH(_,function(e){u.after(e)}),t.appendTo=f=function(e){return e.append(r),t},t.prepend=a=function(e){r.prepend(e)},t.prependTo=l=function(e){return e.prepend(r),t},t.after=p=function(e){r.after(e)},t.insertAfter=s=function(e){return e.after(r),t},t.before=v=function(e){r.before(e)},t.insertBefore=h=function(e){return e.before(r),t},t.remove=g=function(){r.remove()},t.removeAllChildren=m=function(){r.removeAllChildren()},t.getParent=S=function(){return r.getParent()},t.setParent=C=function(e){r.setParent(e)},t.getChildren=y=function(){return r.getChildren()},t.getName=A=function(){return O},t.getValue=E=function(){return i.getValue()},t.setValue=T=function(e){i.setValue(e)},t.select=P=function(){i.select()},t.blur=I=function(){i.blur()},t.addWrapperStyle=b=function(e){r.addStyle(e)},void 0!==M&&b(M),t.addInputStyle=w=function(e){i.addStyle(e)},void 0!==R&&w(R),t.addChangeValueProc=D=function(e){i.addChangeValueProc(e)},void 0!==B&&D(B),t.show=V=function(){r.show()},t.hide=U=function(){r.hide()},t.checkIsShow=N=function(){return r.checkIsShow()}}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,P,I,b,w,D,V,U,N,O,L,k,_,M=o.name,R=o.type,B=o.placeholder,F=o.value,H=o.wrapperStyle,x=o.inputStyle,W=o.onChange,Y=COMBINE_DATA({origin:{position:"absolute",top:0,color:"#999",cursor:"text"},extend:void 0!==x&&"center"===x.textAlign?{left:0,width:"100%",textAlign:"center"}:{left:void 0===F?0:F.length}});i=DIV({style:{padding:5,backgroundColor:"#FFF"},children:[DIV({style:{position:"relative",overflow:"hidden"},children:[u=INPUT({style:{width:"100%",backgroundColor:"transparent",border:"none"},name:M,type:R,value:F,onChange:c}),d=UUI.TEXT_BUTTON({style:Y,title:B,onTap:function(){D()}})]})]}),c=RAR(function(){var e=u.getValue(),n=0,t=u.getStyle("fontSize"),o=void 0===t?12:parseInt(t,10);"center"===u.getStyle("textAlign")?(d.addStyle({left:0,width:"100%",textAlign:"center"}),""===e?d.show():d.hide()):(REPEAT(e.length,function(t){var o=e.charAt(t);n+=escape(o).length>4?1.8:1}),d.addStyle({left:n*o/1.6+(n>0?5:0),width:"auto",textAlign:"left"}))}),EVENT({node:u,name:"keydown"},function(){r=DELAY(function(){c()})}),i.addAfterRemoveProc(function(){void 0!==r&&r.remove()}),u.addChangeValueProc(function(){c()}),i.isValidWrapper=!0,t.getInputDom=f=function(){return u},t.getDom=a=function(){return i},t.append=l=function(e){i.append(e)},t.appendTo=p=function(e){return e.append(i),t},t.prepend=s=function(e){i.prepend(e)},t.prependTo=v=function(e){return e.prepend(i),t},t.after=h=function(e){i.after(e)},t.insertAfter=g=function(e){return e.after(i),t},t.before=m=function(e){i.before(e)},t.insertBefore=S=function(e){return e.before(i),t},t.remove=C=function(){i.remove()},t.removeAllChildren=y=function(){i.removeAllChildren()},t.getParent=A=function(){return i.getParent()},t.setParent=E=function(e){i.setParent(e)},t.getChildren=T=function(){return i.getChildren()},t.getName=P=function(){return M},t.getValue=I=function(){return u.getValue()},t.setValue=b=function(e){u.setValue(e)},t.select=w=function(){u.select()},t.focus=D=function(){u.focus()},t.blur=V=function(){u.blur()},t.addWrapperStyle=U=function(e){i.addStyle(e)},void 0!==H&&U(H),t.addInputStyle=N=function(e){u.addStyle(e),d.addStyle(e),d.addStyle(Y)},void 0!==x&&N(x),t.addChangeValueProc=O=function(e){u.addChangeValueProc(e)},void 0!==W&&O(W),t.show=L=function(){i.show()},t.hide=k=function(){i.hide()},t.checkIsShow=_=function(){return i.checkIsShow()}}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,P,I,b,w,D,V,U,N,O=o.name,L=o.value,k=o.options,_=o.wrapperStyle,M=o.selectStyle,R=o.onChange;r=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative"},children:[i=SELECT({style:{width:"100%",backgroundColor:"transparent",border:"none"},name:O})]}),r.isValidWrapper=!0,t.getDom=u=function(){return r},t.append=d=function(e){r.append(e)},t.appendTo=c=function(e){return e.append(r),t},t.prepend=f=function(e){r.prepend(e)},t.prependTo=a=function(e){return e.prepend(r),t},t.after=l=function(e){r.after(e)},t.insertAfter=p=function(e){return e.after(r),t},t.before=s=function(e){r.before(e)},t.insertBefore=v=function(e){return e.before(r),t},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){r.removeAllChildren()},t.getParent=m=function(){return r.getParent()},t.setParent=S=function(e){r.setParent(e)},t.getChildren=C=function(){return r.getChildren()},t.getName=y=function(){return O},t.getValue=A=function(){return i.getValue()},t.setValue=E=function(e){i.setValue(e)},void 0!==L&&E(L),t.select=T=function(){i.select()},t.blur=P=function(){i.blur()},t.addWrapperStyle=I=function(e){r.addStyle(e)},void 0!==_&&I(_),t.addSelectStyle=b=function(e){i.addStyle(e)},void 0!==M&&b(M),t.addOption=w=function(e){i.append(e)},void 0!==k&&EACH(k,function(e){w(e)}),t.addChangeValueProc=D=function(e){i.addChangeValueProc(e)},void 0!==R&&D(R),t.show=V=function(){r.show()},t.hide=U=function(){r.hide()},t.checkIsShow=N=function(){return r.checkIsShow()}}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T=void 0===o?void 0:o.style,P=void 0===o?void 0:o.value,I=void 0===o?void 0:o.onMouseover,b=void 0===o?void 0:o.onMouseout;r=INPUT({type:"submit",style:{border:"none",width:"100%",padding:"10px 0",cursor:"pointer"}}),void 0!==P&&r.setValue(P),void 0!==I&&EVENT({node:r,name:"mouseover"},function(e){I(e,t)}),void 0!==b&&EVENT({node:r,name:"mouseout"},function(e){b(e,t)}),t.getDom=i=function(){return r},t.append=u=function(e){r.append(e)},t.appendTo=d=function(e){return e.append(r),t},t.prepend=c=function(e){r.prepend(e)},t.prependTo=f=function(e){return e.prepend(r),t},t.after=a=function(e){r.after(e)},t.insertAfter=l=function(e){return e.after(r),t},t.before=p=function(e){r.before(e)},t.insertBefore=s=function(e){return e.before(r),t},t.remove=v=function(){r.remove()},t.removeAllChildren=h=function(){r.removeAllChildren()},t.getParent=g=function(){return r.getParent()},t.setParent=m=function(e){r.setParent(e)},t.getChildren=S=function(){return r.getChildren()},t.addStyle=C=function(e){r.addStyle(e)},void 0!==T&&C(T),t.show=y=function(){r.show()},t.hide=A=function(){r.hide()},t.checkIsShow=E=function(){return r.checkIsShow()}}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,P,I,b,w,D,V,U,N,O,L=o.name,k=o.placeholder,_=o.value,M=o.wrapperStyle,R=o.textareaStyle,B=o.onChange;r=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative",height:100},children:[i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:L,placeholder:k,value:_})]}),r.isValidWrapper=!0,t.getTextareaDom=u=function(){return i},t.getDom=d=function(){return r},t.append=c=function(e){r.append(e)},t.appendTo=f=function(e){return e.append(r),t},t.prepend=a=function(e){r.prepend(e)},t.prependTo=l=function(e){return e.prepend(r),t},t.after=p=function(e){r.after(e)},t.insertAfter=s=function(e){return e.after(r),t},t.before=v=function(e){r.before(e)},t.insertBefore=h=function(e){return e.before(r),t},t.remove=g=function(){r.remove()},t.removeAllChildren=m=function(){r.removeAllChildren()},t.getParent=S=function(){return r.getParent()},t.setParent=C=function(e){r.setParent(e)},t.getChildren=y=function(){return r.getChildren()},t.getName=A=function(){return L},t.getValue=E=function(){return i.getValue()},t.setValue=T=function(e){i.setValue(e)},t.select=P=function(){i.select()},t.focus=I=function(){i.focus()},t.blur=b=function(){i.blur()},t.addWrapperStyle=w=function(e){r.addStyle(e)},void 0!==M&&w(M),t.addTextareaStyle=D=function(e){i.addStyle(e)},void 0!==R&&D(R),t.addChangeValueProc=V=function(e){i.addChangeValueProc(e)},void 0!==B&&V(B),t.show=U=function(){r.show()},t.hide=N=function(){r.hide()},t.checkIsShow=O=function(){return r.checkIsShow()}}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,P,I,b,w,D,V,U,N,T,P,I,O=o.wrapperStyle,L=o.formStyle,k=o.inputStyle,_=o.uploadingStyle,M=o.box,R=o.afterUpload,B=o.onChange;r=DIV({style:{padding:5,background:"#FFF",position:"relative"},children:[d=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+t.id}),i=FORM({action:"/"+M.boxName+"/__UPLOAD?"+CONFIG.version,target:"__UPLOAD_FORM_"+t.id,method:"POST",enctype:"multipart/form-data",style:{padding:5},children:[u=INPUT({type:"file",isMultiple:!0,style:{width:"100%",height:"100%",color:"#000",border:"none"}}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]}),c=UUI.PANEL({wrapperStyle:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none"},contentStyle:{backgroundColor:"#000",position:"absolute",top:"50%",left:"50%",width:100,marginLeft:-55,marginTop:-13,padding:5,textAlign:"center",borderRadius:10},children:["Uploading..."]})]}),i.isValidWrapper=!0,EVENT({node:d,name:"load"},function(){var e=global["__UPLOAD_FORM_"+t.id],n=void 0!==e?e.fileDatas:void 0,o=void 0!==e?e.errorCode:void 0;(void 0!==n||void 0!==o)&&(EACH(n,function(e,t){n[t]=UNPACK_DATA(e)}),u.setValue(""),R(n,o)),c.hide()}),EVENT({node:u,name:"change"},function(){c.show(),i.submit(!0)}),t.getDom=f=function(){return r},t.append=a=function(e){r.append(e)},t.appendTo=l=function(e){return e.append(r),t},t.prepend=p=function(e){r.prepend(e)},t.prependTo=s=function(e){return e.prepend(r),t},t.after=v=function(e){r.after(e)},t.insertAfter=h=function(e){return e.after(r),t},t.before=g=function(e){r.before(e)},t.insertBefore=m=function(e){return e.before(r),t},t.remove=S=function(){r.remove()},t.removeAllChildren=C=function(){r.removeAllChildren()},t.getParent=y=function(){return r.getParent()},t.setParent=A=function(e){r.setParent(e)},t.getChildren=E=function(){return r.getChildren()},t.show=T=function(){r.show()},t.hide=P=function(){r.hide()},t.checkIsShow=I=function(){return r.checkIsShow()},t.select=b=function(){u.select()},t.addWrapperStyle=w=function(e){r.addStyle(e)},void 0!==O&&w(O),t.addFormStyle=D=function(e){i.addStyle(e)},void 0!==L&&D(L),t.addInputStyle=V=function(e){u.addStyle(e)},void 0!==k&&V(k),t.addUploadingStyle=U=function(e){c.addWrapperStyle(e)},void 0!==_&&U(_),t.addChangeValueProc=N=function(e){u.addChangeValueProc(e)},void 0!==B&&N(B),t.show=T=function(){r.show()},t.hide=P=function(){r.hide()},t.checkIsShow=I=function(){return r.checkIsShow()}}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,E,T,P,I,b=o.img,w=o.href,D=o.target,V=o.style,U=o.onTap,N=o.onMouseover,O=o.onMouseout;r=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:w,target:D,children:[b]}),void 0!==U&&EVENT({node:r,name:"tap"},function(e){U(e,t)}),void 0!==N&&EVENT({node:r,name:"mouseover"},function(e){N(e,t)}),void 0!==O&&EVENT({node:r,name:"mouseout"},function(e){O(e,t)}),t.getImg=i=function(){return b},t.getDom=u=function(){return r},t.append=d=function(e){r.append(e)},t.appendTo=c=function(e){return e.append(r),t},t.prepend=f=function(e){r.prepend(e)},t.prependTo=a=function(e){return e.prepend(r),t},t.after=l=function(e){r.after(e)},t.insertAfter=p=function(e){return e.after(r),t},t.before=s=function(e){r.before(e)},t.insertBefore=v=function(e){return e.before(r),t},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){r.removeAllChildren()},t.getParent=m=function(){return r.getParent()},t.setParent=S=function(e){r.setParent(e)},t.getChildren=C=function(){return r.getChildren()},t.addStyle=y=function(e){r.addStyle(e)},void 0!==V&&y(V),t.show=E=function(){r.show()},t.hide=T=function(){r.hide()},t.checkIsShow=P=function(){return r.checkIsShow()},t.tap=I=function(){U()}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,P,I,b,w=void 0===o?void 0:o.children,D=void 0===o?void 0:o.style,V=void 0===o?void 0:o.items,U=[],N={};void 0===V&&(V={}),r=UL(),t.getDom=i=function(){return r},t.append=u=function(e){r.append(e)},void 0!==w&&EACH(w,function(e){u(e)}),t.appendTo=d=function(e){return e.append(r),t},t.prepend=c=function(e){r.prepend(e)},t.prependTo=f=function(e){return e.prepend(r),t},t.after=a=function(e){r.after(e)},t.insertAfter=l=function(e){return e.after(r),t},t.before=p=function(e){r.before(e)},t.insertBefore=s=function(e){return e.before(r),t},t.remove=v=function(){r.remove()},t.removeAllChildren=h=function(){r.removeAllChildren()},t.getParent=g=function(){return r.getParent()},t.setParent=m=function(e){r.setParent(e)},t.getChildren=S=function(){return r.getChildren()},t.addStyle=C=function(e){r.addStyle(e)},void 0!==D&&C(D),t.addItem=y=function(e){var n=e.key,t=e.item,o=e.isFirst;void 0!==V[n]?(t.insertBefore(V[n]),U[FIND_KEY({data:U,value:V[n]})]=t,V[n].remove()):o===!0&&U.length>0?(t.insertBefore(U[0]),U.unshift(t)):(r.append(t),U.push(t)),V[n]=t},EACH(V,function(e){U.push(e),r.append(e)}),t.removeItem=A=function(e){var n=V[e],t=N[e];void 0!==n&&n.remove(),void 0!==t&&EACH(t,function(e){e()}),REMOVE({data:U,value:n}),REMOVE_AT({data:V,key:e}),REMOVE_AT({data:N,key:e})},t.addRemoveItemHandler=E=function(e,n){void 0===N[e]&&(N[e]=[]),N[e].push(n)},t.removeAllItems=T=function(){EACH(V,function(e,n){var t=N[n];e.remove(),void 0!==t&&EACH(t,function(e){e()})}),V={},U=[],N={}},t.show=P=function(){r.show()},t.hide=I=function(){r.hide()},t.checkIsShow=b=function(){return r.checkIsShow()}}}),UUI.LOADING=CLASS({init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h=o.wrapperStyle,g=o.contentStyle,m=o.indicator,S=o.msg;r=UUI.MODAL({wrapperStyle:COMBINE_DATA({origin:{textAlign:"center"},extend:h}),contentStyle:g,isCannotClose:!0,children:[void 0===m?"":m,P({style:void 0===m?{}:{marginTop:10},children:[S]})]}),t.getDom=i=function(){return r.getDom()},t.append=u=function(e){r.append(e)},t.prepend=d=function(e){r.prepend(e)},t.after=c=function(e){r.after(e)},t.before=f=function(e){r.before(e)},t.remove=a=function(){r.remove()},t.removeAllChildren=l=function(){r.removeAllChildren()},t.getChildren=p=function(){return r.getChildren()},t.addWrapperStyle=s=function(e){r.addWrapperStyle(e)},t.addContentStyle=v=function(e){r.addContentStyle(e)}}}),UUI.MODAL=CLASS({init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y=void 0===o?void 0:o.children,A=void 0===o?void 0:o.wrapperStyle,E=void 0===o?void 0:o.contentStyle,T=void 0===o?void 0:o.xStyle,P=void 0===o?void 0:o.xImg,I=void 0===o?void 0:o.isCannotClose,b=void 0===o?void 0:o.onClose;void 0===P&&I!==!0&&(P=IMG({src:UUI.R("x.png")})),r=DIV({children:[i=DIV(),I===!0?"":UUI.IMG_BUTTON({style:COMBINE_DATA({origin:{position:"absolute"},extend:void 0===T?{top:-20,right:-20,padding:10}:T}),img:P,onTap:function(){h(),void 0!==b&&b()},onMouseover:function(){S({opacity:.8})},onMouseout:function(){S({opacity:1})}})]}).appendTo(BODY),f=RAR(function(){var e,n=(WIN_WIDTH()-r.getWidth())/2+SCROLL_LEFT(),t=(WIN_HEIGHT()-r.getHeight())/2+SCROLL_TOP();r.addStyle({position:"absolute",left:0>n?0:n,top:0>t?0:t}),(e=function(n){EACH(n,function(n){n.type===IMG&&EVENT({node:n,name:"load"},function(){f()}),void 0!==n.getChildren&&e(n.getChildren())})})(r.getChildren())}),r.addAfterShowProc(f),u=EVENT({name:"resize"},f),d=EVENT({name:"scroll"},f),c=EVENT({name:"keydown"},function(e){27===e.getKeyCode()&&I!==!0&&(h(),void 0!==b&&b())}),r.addAfterRemoveProc(function(){u.remove(),d.remove(),c.remove()}),t.getDom=a=function(){return r},t.append=l=function(e){i.append(e),f()},void 0!==y&&EACH(y,function(e){l(e)}),t.prepend=p=function(e){i.prepend(e),f()},t.after=s=function(e){r.after(e),f()},t.before=v=function(e){r.before(e),f()},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){r.removeAllChildren()},t.getChildren=m=function(){return r.getChildren()},t.addWrapperStyle=S=function(e){r.addStyle(e),f()},void 0!==A&&S(A),t.addContentStyle=C=function(e){i.addStyle(e),f()},void 0!==E&&C(E)}}),UUI.NOTICE=CLASS({init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h=o.wrapperStyle,g=o.contentStyle,m=o.isCannotClose,S=o.msg;r=UUI.MODAL({wrapperStyle:COMBINE_DATA({origin:{textAlign:"center"},extend:h}),contentStyle:g,isCannotClose:!0,children:[S]}),t.getDom=i=function(){return r.getDom()},t.append=u=function(e){r.append(e)},t.prepend=d=function(e){r.prepend(e)},t.after=c=function(e){r.after(e)},t.before=f=function(e){r.before(e)},t.remove=a=function(){r.remove()},t.removeAllChildren=l=function(){r.removeAllChildren()},t.getChildren=p=function(){return r.getChildren()},t.addWrapperStyle=s=function(e){r.addWrapperStyle(e)},t.addContentStyle=v=function(e){r.addContentStyle(e)},m!==!0&&DELAY(2,a)}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,P,I=void 0===o?void 0:o.children,b=void 0===o?void 0:o.wrapperStyle,w=void 0===o?void 0:o.contentStyle;r=DIV({children:[i=DIV()]}),t.getDom=u=function(){return r},t.append=d=function(e){i.append(e)},void 0!==I&&EACH(I,function(e){d(e)}),t.appendTo=c=function(e){return e.append(r),t},t.prepend=f=function(e){i.prepend(e)},t.prependTo=a=function(e){return e.prepend(r),t},t.after=l=function(e){r.after(e)},t.insertAfter=p=function(e){return e.after(r),t},t.before=s=function(e){r.before(e)},t.insertBefore=v=function(e){return e.before(r),t},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){i.removeAllChildren()},t.getParent=m=function(){return r.getParent()},t.setParent=S=function(e){r.setParent(e)},t.getChildren=C=function(){return i.getChildren()},t.addWrapperStyle=y=function(e){r.addStyle(e)},void 0!==b&&y(b),t.addContentStyle=A=function(e){i.addStyle(e)},void 0!==w&&A(w),t.show=E=function(){r.show()},t.hide=T=function(){r.hide()},t.checkIsShow=P=function(){return r.checkIsShow()}}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,P,I,b,w=void 0===o?void 0:o.children,D=void 0===o?void 0:o.style,V=void 0===o?void 0:o.trs,U=[],N={};void 0===V&&(V={}),r=TABLE(),t.getDom=i=function(){return r},t.append=u=function(e){r.append(e)},void 0!==w&&EACH(w,function(e){u(e)}),t.appendTo=d=function(e){return e.append(r),t},t.prepend=c=function(e){r.prepend(e)},t.prependTo=f=function(e){return e.prepend(r),t},t.after=a=function(e){r.after(e)},t.insertAfter=l=function(e){return e.after(r),t},t.before=p=function(e){r.before(e)},t.insertBefore=s=function(e){return e.before(r),t},t.remove=v=function(){r.remove()},t.removeAllChildren=h=function(){r.removeAllChildren()},t.getParent=g=function(){return r.getParent()},t.setParent=m=function(e){r.setParent(e)},t.getChildren=S=function(){return r.getChildren()},t.addStyle=C=function(e){r.addStyle(e)},void 0!==D&&C(D),t.addTR=y=function(e){var n=e.key,t=e.tr,o=e.isFirst;void 0!==V[n]?(t.insertBefore(V[n]),U[FIND_KEY({data:U,value:V[n]})]=t,V[n].remove()):o===!0&&U.length>0?(t.insertBefore(U[0]),U.unshift(t)):(r.append(t),U.push(t)),V[n]=t},EACH(V,function(e){U.push(e),r.append(e)}),t.removeTR=A=function(e){var n=V[e],t=N[e];void 0!==n&&n.remove(),void 0!==t&&EACH(t,function(e){e()}),REMOVE({data:U,value:n}),REMOVE_AT({data:V,key:e}),REMOVE_AT({data:N,key:e})},t.addRemoveTRHandler=E=function(e,n){void 0===N[e]&&(N[e]=[]),N[e].push(n)},t.removeAllTRs=T=function(){EACH(V,function(e,n){var t=N[n];e.remove(),void 0!==t&&EACH(t,function(e){e()})}),V={},U=[],N={}},t.show=P=function(){r.show()},t.hide=I=function(){r.hide()},t.checkIsShow=b=function(){return r.checkIsShow()}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,E,T,P,I,b,w=o.title,D=o.href,V=o.target,U=o.style,N=o.onTap,O=o.onMouseover,L=o.onMouseout;r=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:D,target:V,children:[i=SPAN({children:[void 0===w?"":w]})]}),void 0!==N&&EVENT({node:r,name:"tap"},function(e){N(e,t)}),void 0!==O&&EVENT({node:r,name:"mouseover"},function(e){O(e,t)}),void 0!==L&&EVENT({node:r,name:"mouseout"},function(e){L(e,t)}),t.setTitle=u=function(e){i.removeAllChildren(),i.append(e)},t.getDom=d=function(){return r},t.append=c=function(e){r.append(e)},t.appendTo=f=function(e){return e.append(r),t},t.prepend=a=function(e){r.prepend(e)},t.prependTo=l=function(e){return e.prepend(r),t},t.after=p=function(e){r.after(e)},t.insertAfter=s=function(e){return e.after(r),t},t.before=v=function(e){r.before(e)},t.insertBefore=h=function(e){return e.before(r),t},t.remove=g=function(){r.remove()},t.removeAllChildren=m=function(){r.removeAllChildren()},t.getParent=S=function(){return r.getParent()},t.setParent=C=function(e){r.setParent(e)},t.getChildren=y=function(){return r.getChildren()},t.addStyle=E=function(e){r.addStyle(e)},void 0!==U&&E(U),t.show=T=function(){r.show()},t.hide=P=function(){r.hide()},t.checkIsShow=I=function(){return r.checkIsShow()},t.tap=b=function(){N()}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,I,b,w,D,V,U=void 0===o?void 0:o.errorMsgs,N=void 0===o?void 0:o.onSubmit,O=void 0===o?void 0:o.children,L=void 0===o?void 0:o.style,k=void 0===o?void 0:o.errorMsgStyle;r=FORM(),t.getDom=i=function(){return r},t.append=u=function(e){r.append(e)},void 0!==O&&EACH(O,function(e){u(e)}),t.appendTo=d=function(e){return e.append(r),t},t.prepend=c=function(e){r.prepend(e)},t.prependTo=f=function(e){return e.prepend(r),t},t.after=a=function(e){r.after(e)},t.insertAfter=l=function(e){return e.after(r),t},t.before=p=function(e){r.before(e)},t.insertBefore=s=function(e){return e.before(r),t},t.remove=v=function(){r.remove()},t.removeAllChildren=h=function(){r.removeAllChildren()},t.getParent=g=function(){return r.getParent()},t.setParent=m=function(e){r.setParent(e)},t.getChildren=S=function(){return r.getChildren()},t.getData=C=function(){return r.getData()},t.setData=y=function(e){return r.setData(e)},t.addSubmitProc=A=function(e){r.addSubmitProc(function(n){e(n,t)})},void 0!==N&&A(N),t.submit=E=function(){r.submit()},t.showErrors=T=function(e){var n=COPY_DATA(e),o=function(e){EACH(e.getChildren(),function(e){var t,r,i,u;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),r=n[t],void 0!==r&&void 0!==U&&(i=U[t][r.type],"function"==typeof i&&(i=i(void 0!==r.validParam?r.validParam:r.validParams)),(e.getParent().getParent().isValidWrapper===!0?e.getParent().getParent():e.getParent().isValidWrapper===!0?e.getParent():e).after(u=P({style:k,children:[i]})),REMOVE_AT({data:n,key:t}),DELAY(2,function(){u.remove()}))),o(e)})};o(t)},t.getErrorMsgs=I=function(e){var n=COPY_DATA(e),o=[],r=function(e){EACH(e.getChildren(),function(e){var t,i,u;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),i=n[t],void 0!==i&&void 0!==U&&(u=U[t][i.type],"function"==typeof u&&(u=u(void 0!==i.validParam?i.validParam:i.validParams)),o.push(u),REMOVE_AT({data:n,key:t}))),r(e)})};return r(t),o},t.addStyle=b=function(e){r.addStyle(e)},void 0!==L&&b(L),t.show=w=function(){r.show()},t.hide=D=function(){r.hide()},t.checkIsShow=V=function(){return r.checkIsShow()}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(e,n,t,o){"use strict";var r,i,u,d,c,f,a,l,p,s,v,h,g,m,S,C,y,A,E,T,P,I=void 0===o?void 0:o.children,b=void 0===o?void 0:o.wrapperStyle,w=void 0===o?void 0:o.contentStyle;r=TABLE({style:{width:"100%",margin:0,padding:0},children:[TR({style:{margin:0,padding:0},children:[i=TD({style:{margin:0,padding:0}})]})]}),t.getDom=u=function(){return r},t.append=d=function(e){i.append(e)},void 0!==I&&EACH(I,function(e){d(e)}),t.appendTo=c=function(e){return e.append(r),t},t.prepend=f=function(e){i.prepend(e)},t.prependTo=a=function(e){return e.prepend(r),t},t.after=l=function(e){r.after(e)},t.insertAfter=p=function(e){return e.after(r),t},t.before=s=function(e){r.before(e)},t.insertBefore=v=function(e){return e.before(r),t},t.remove=h=function(){r.remove()},t.removeAllChildren=g=function(){i.removeAllChildren()},t.getParent=m=function(){return r.getParent()},t.setParent=S=function(e){r.setParent(e)},t.getChildren=C=function(){return i.getChildren()},t.addWrapperStyle=y=function(e){r.addStyle(e)},void 0!==b&&y(b),t.addContentStyle=A=function(e){i.addStyle(e)},void 0!==w&&A(w),t.show=E=function(){r.show()},t.hide=T=function(){r.hide()},t.checkIsShow=P=function(){return r.checkIsShow()}}});