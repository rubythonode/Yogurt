global.CALENDAR=CLASS({init:function(cls,inner,self,date){"use strict";var getYear,getMonth,getDate,getDay,getHour,getMinute,getSecond;self.getYear=getYear=function(){return date.getFullYear()};self.getMonth=getMonth=function(){return date.getMonth()+1};self.getDate=getDate=function(){return date.getDate()};self.getDay=getDay=function(){return date.getDay()};self.getHour=getHour=function(){return date.getHours()};self.getMinute=getMinute=function(){return date.getMinutes()};self.getSecond=getSecond=function(){return date.getSeconds()}}});global.CONFIG={isDevMode:false,port:8888,defaultBoxName:"UPPERCASE",defaultTitle:"UPPERCASE",defaultLang:"en",contactAddress:"contact@btncafe.com",maxUploadFileMB:10};global.DELAY=CLASS({init:function(cls,inner,self,seconds,func){"use strict";var timeout,remove;if(func===undefined){func=seconds;seconds=0}timeout=setTimeout(func,seconds*1e3);self.remove=remove=function(){clearTimeout(timeout)}}});global.EACH=METHOD({run:function(m,data,func){"use strict";var length,name,i;if(data===undefined){return false}if(CHECK_IS_ARRAY(data)===true||CHECK_IS_ARGUMENTS(data)===true){length=data.length;for(i=0;i<length;i+=1){if(func(data[i],i)===false){return false}if(data.length===length-1){i-=1;length-=1}}}else{for(name in data){if(data.hasOwnProperty(name)===true){if(func(data[name],name)===false){return false}}}}return true}});global.FIND_KEY=METHOD({run:function(m,params){"use strict";var data=params.data,value=params.value,retKey;EACH(data,function(_value,key){if(_value===value){retKey=key;return false}});return retKey}});global.FOR=METHOD({run:function(m,params,func){"use strict";var start=params.start,end=params.end,i;for(i=parseInt(start,10);i<=parseInt(end,10);i+=1){func(i)}}});global.LOOP=CLASS({statics:function(cls){"use strict";var beforeTime,animationFrame,loopInfos=[],runs=[],callback,fire,stop,addLoopInfo,removeLoopInfo,addRun,removeRun;callback=function(){var time=Date.now(),times=time-beforeTime,loopInfo,count,interval,i,j;animationFrame=requestAnimationFrame(callback);for(i=0;i<loopInfos.length;i+=1){loopInfo=loopInfos[i];if(loopInfo.fps!==undefined&&loopInfo.fps>0){if(loopInfo.timeSigma===undefined){loopInfo.timeSigma=0;loopInfo.countSigma=0}count=parseInt(loopInfo.fps/(1e3/times)*(loopInfo.timeSigma/times+1),10)-loopInfo.countSigma;if(loopInfo.start!==undefined){loopInfo.start()}interval=loopInfo.interval;for(j=0;j<count;j+=1){interval()}if(loopInfo.end!==undefined){loopInfo.end(times)}loopInfo.countSigma+=count;loopInfo.timeSigma+=times;if(loopInfo.timeSigma>1e3){loopInfo.timeSigma=undefined}}}for(i=0;i<runs.length;i+=1){runs[i](times)}beforeTime=time};fire=function(){if(animationFrame===undefined){beforeTime=Date.now();animationFrame=requestAnimationFrame(callback)}};stop=function(){if(loopInfos.length<=0&&runs.length<=0){cancelAnimationFrame(animationFrame);animationFrame=undefined}};cls.addLoopInfo=addLoopInfo=function(loopInfo){loopInfos.push(loopInfo);fire()};cls.removeLoopInfo=removeLoopInfo=function(loopInfo){REMOVE({data:loopInfos,value:loopInfo});stop()};cls.addRun=addRun=function(run){runs.push(run);fire()};cls.removeRun=removeRun=function(run){REMOVE({data:runs,value:run});stop()}},init:function(cls,inner,self,fps,funcs){"use strict";var run=funcs===undefined?fps:undefined,start=funcs===undefined?undefined:funcs.start,interval=funcs===undefined?undefined:funcs.interval,end=funcs===undefined?undefined:funcs.end,info,changeFPS,remove;if(funcs!==undefined){cls.addLoopInfo(info={fps:fps,start:start,interval:interval,end:end});self.changeFPS=changeFPS=function(fps){info.fps=fps};self.remove=remove=function(){cls.removeLoopInfo(info)}}else{cls.addRun(run);self.remove=remove=function(){cls.removeRun(run)}}}});FOR_BOX(function(box){"use strict";box.MODEL=CLASS({init:function(cls,inner,self,params){}})});global.OVERRIDE=METHOD({run:function(m,funcs){"use strict";var origin=funcs.origin,func=funcs.func;func(origin)}});global.PACK_DATA=METHOD({run:function(m,data){"use strict";var result=COPY_DATA(data),dateAttrNames=[];EACH(result,function(value,name){if(value instanceof Date===true){result[name]=parseInt(value.getTime());dateAttrNames.push(name)}else if(CHECK_IS_DATA(value)===true){result[name]=PACK_DATA(value)}else if(CHECK_IS_ARRAY(value)===true){EACH(value,function(v,i){if(CHECK_IS_DATA(v)===true){value[i]=PACK_DATA(v)}else{}})}else{}});result._dateAttrNames=dateAttrNames;return result}});global.RAR=METHOD({run:function(m,func){"use strict";func();return func}});global.REMOVE=METHOD({run:function(m,params){"use strict";var data=params.data,value=params.value;EACH(data,function(_value,key){if(_value===value){REMOVE_AT({data:data,key:key})}})}});global.REMOVE_AT=METHOD({run:function(m,params){"use strict";var data=params.data,key=params.key;if(CHECK_IS_ARRAY(data)===true){data.splice(key,1)}else if(CHECK_IS_DATA(data)===true){delete data[key]}}});global.REPEAT=METHOD({run:function(m,count,func){"use strict";var i;for(i=0;i<parseInt(count,10);i+=1){if(func(i)===false){break}}}});global.RUN=METHOD({run:function(m,func){"use strict";return func()}});global.TO_DELETE=null;global.UNPACK_DATA=METHOD({run:function(m,data){"use strict";var result=COPY_DATA(data);if(result._dateAttrNames!==undefined){EACH(result._dateAttrNames,function(dateAttrName,i){result[dateAttrName]=new Date(result[dateAttrName])});delete result._dateAttrNames}EACH(result,function(value,name){if(CHECK_IS_DATA(value)===true){result[name]=UNPACK_DATA(value)}else if(CHECK_IS_ARRAY(value)===true){EACH(value,function(v,i){if(CHECK_IS_DATA(v)===true){value[i]=UNPACK_DATA(v)}else{}})}else{}});return result}});global.VALID=CLASS({statics:function(cls){"use strict";var undef,notEmpty,regex,size,integer,real,bool,date,min,max,email,png,url,username,id,one,array,data,element,each,detail,is;cls.undef=undef=function(value){return value===undefined};cls.notEmpty=notEmpty=function(value){var str=value===undefined||value===TO_DELETE?"":String(value);return CHECK_IS_ARRAY(value)===true||str.trim()!==""};cls.regex=regex=function(params){var pattern=params.pattern,str=String(params.value);return str===str.match(pattern)[0]};cls.size=size=function(params){var min=params.min,max=params.max,str=String(params.value),length=str.length;if(min===undefined){min=0}return min<=length&&(max===undefined||length<=max)};cls.integer=integer=function(value){var str=String(value);return notEmpty(value)===true&&str.match(/^(?:-?(?:0|[1-9][0-9]*))$/)!==null};cls.real=real=function(value){var str=String(value);return notEmpty(value)===true&&str.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/)!==null};cls.bool=bool=function(value){var str=String(value);return str==="true"||str==="false"};cls.date=date=function(value){var str=String(value),date=Date.parse(str);return isNaN(date)===false};cls.min=min=function(params){var min=params.min,value=params.value;return real(value)===true&&min<=value};cls.max=max=function(params){var max=params.max,value=params.value;return real(value)===true&&max>=value};cls.email=email=function(value){var str=String(value);return notEmpty(value)===true&&str.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)!==null};cls.png=png=function(value){var str=String(value);return notEmpty(value)===true&&str.match(/^data:image\/png;base64,/)!==null};cls.url=url=function(value){var str=String(value);return notEmpty(value)===true&&str.match(/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i)!==null&&str.length<=2083};cls.username=username=function(value){var str=String(value);return notEmpty(value)===true&&str.match(/^[_a-zA-Z0-9\-]+$/)!==null};cls.id=id=function(value){var str=String(value);return notEmpty(value)===true&&str.match(/[0-9a-f]{24}/)!==null&&str.length===24};cls.one=one=function(params){var value=params.value,array=params.array;return EACH(array,function(_value){if(value===_value){return false}})===false};cls.array=array=function(value){return CHECK_IS_ARRAY(value)===true};cls.data=data=function(value){return CHECK_IS_DATA(value)===true};cls.element=element=function(params){var array=params.array,valid=VALID({_:params.validData});return EACH(array,function(value){if(valid.check({data:{_:value}}).checkHasError()===true){return false}})===true};cls.each=each=function(params){var data=params.data,valid=VALID({_:params.validData});return EACH(data,function(value){if(valid.check({data:{_:value}}).checkHasError()===true){return false}})===true};cls.detail=detail=function(params){var data=params.data,valid=VALID(params.validDatas);return!valid.check({data:data}).checkHasError()};cls.is=is=function(params){var value=params.value,str=String(value),validValue=params.validValue,validStr=String(validValue);return str===validStr}},init:function(cls,inner,self,validDatas){"use strict";var check;self.check=check=CLASS({init:function(_cls,inner,self,params){var data=params.data,isExceptUndefined=params.isExceptUndefined,hasError=false,errors={},checkHasError,getErrors;EACH(validDatas,function(validData,attr){EACH(validData,function(validParams,name){var value=data[attr];if(isExceptUndefined===true&&value===undefined){return false}if((isExceptUndefined===true||name!=="undef")&&name!=="notEmpty"&&cls.notEmpty(value)!==true){if(name==="integer"||name==="real"||name==="bool"||name==="date"){data[attr]=TO_DELETE}return true}if(name==="one"){if(cls.one({array:validParams,value:value})===false){hasError=true;errors[attr]={type:name,array:validParams,value:value};return false}}else if(name==="element"){if(cls.element({validData:validParams,array:value})===false){hasError=true;errors[attr]={type:name,validData:validParams,array:value};return false}}else if(name==="each"){if(cls.each({validData:validParams,data:value})===false){hasError=true;errors[attr]={type:name,validData:validParams,data:value};return false}}else if(name==="detail"){if(cls.detail({validDatas:validParams,data:value})===false){hasError=true;errors[attr]={type:name,validDatas:validParams,data:value};return false}}else if(name==="size"){if(cls[name](CHECK_IS_DATA(validParams)===true?COMBINE_DATA({origin:validParams,extend:{value:value}}):COMBINE_DATA({origin:{min:validParams,max:validParams},extend:{value:value}}))===false){hasError=true;errors[attr]={type:name,validParams:validParams,value:value};return false}}else if(name==="regex"){if(cls[name]({pattern:validParams,value:value})===false){hasError=true;errors[attr]={type:name,validParam:validParams,value:value};return false}}else if(name==="min"){if(cls[name]({min:validParams,value:value})===false){hasError=true;errors[attr]={type:name,validParam:validParams,value:value};return false}}else if(name==="max"){if(cls[name]({max:validParams,value:value})===false){hasError=true;errors[attr]={type:name,validParam:validParams,value:value};return false}}else if(name==="is"){if(cls[name]({value:value,validValue:validParams})===false){hasError=true;errors[attr]={type:name,validParam:validParams,value:value};return false}}else if(validParams===true){if(cls[name](value)===false){hasError=true;errors[attr]={type:name,value:value};return false}}if(cls.notEmpty(value)===true&&typeof value==="string"){if(name==="integer"){data[attr]=parseInt(value,10)}else if(name==="real"){data[attr]=parseFloat(value,10)}else if(name==="bool"){data[attr]=value==="true"}else if(name==="date"){data[attr]=Date.parse(value)}else if(name==="username"){data[attr]=value.toLowerCase()}}})});self.checkHasError=checkHasError=function(){return hasError};self.getErrors=getErrors=function(){return errors}}})}});global.CHECK_ARE_SAME_ARRAYS=METHOD({run:function(m,params){"use strict";var array1=params.array1,array2=params.array2,areSame;if(array1.length!==array2.length){return false}areSame=EACH(array1,function(value,i){if(value instanceof Date===true){if(array2[i]instanceof Date!==true||value.getTime()!==array2[i].getTime()){return false}}else if(CHECK_IS_DATA(value)===true){if(CHECK_ARE_SAME_DATAS({data1:value,data2:array2[i]})!==true){return false}}else if(CHECK_IS_ARRAY(value)===true){if(CHECK_ARE_SAME_ARRAYS({array1:value,array2:array2[i]})!==true){return false}}else if(value!==array2[i]){return false}});return areSame}});global.CHECK_ARE_SAME_DATAS=METHOD({run:function(m,params){"use strict";var data1=params.data1,data2=params.data2,check;check=function(data1,data2){var areSame;areSame=EACH(data1,function(value,name){if(value instanceof Date===true){if(data2[name]instanceof Date!==true||value.getTime()!==data2[name].getTime()){return false}}else if(CHECK_IS_DATA(value)===true){if(CHECK_ARE_SAME_DATAS({data1:value,data2:data2[name]})!==true){return false}}else if(CHECK_IS_ARRAY(value)===true){if(CHECK_ARE_SAME_ARRAYS({array1:value,array2:data2[name]})!==true){return false}}else if(value!==data2[name]){return false}});return areSame};return check(data1,data2)===true&&check(data2,data1)===true}});global.CHECK_IS_ARGUMENTS=METHOD({run:function(m,data){"use strict";if(data!==undefined&&data!==TO_DELETE&&typeof data==="object"&&(Object.prototype.toString.call(data)==="[object Arguments]"||data.callee!==undefined&&typeof data.callee==="function")){return true}return false}});global.CHECK_IS_ARRAY=METHOD({run:function(m,data){"use strict";if(data!==undefined&&data!==TO_DELETE&&typeof data==="object"&&Object.prototype.toString.call(data)==="[object Array]"){return true}return false}});global.CHECK_IS_DATA=METHOD({run:function(m,data){"use strict";if(data!==undefined&&data!==TO_DELETE&&CHECK_IS_ARGUMENTS(data)!==true&&CHECK_IS_ARRAY(data)!==true&&data instanceof Date!==true&&typeof data==="object"){return true}return false}});global.COMBINE_ARRAY=METHOD({run:function(m,params){"use strict";var origin=params.origin,extend=params.extend,result=COPY_ARRAY(origin);if(extend!==undefined){EXTEND_ARRAY({origin:result,extend:extend})}return result}});global.COMBINE_DATA=METHOD({run:function(m,params){"use strict";var origin=params.origin,extend=params.extend,result=COPY_DATA(origin);if(extend!==undefined){EXTEND_DATA({origin:result,extend:extend})}return result}});global.COPY_ARRAY=METHOD({run:function(m,array){"use strict";var copy=[];EACH(array,function(value,i){if(value instanceof Date===true){copy.push(new Date(value.getTime()))}else if(CHECK_IS_DATA(value)===true){copy.push(COPY_DATA(value))}else if(CHECK_IS_ARRAY(value)===true){copy.push(COPY_ARRAY(value))}else{copy.push(value)}});return copy}});global.COPY_DATA=METHOD({run:function(m,data){"use strict";var copy={};EACH(data,function(value,name){if(value instanceof Date===true){copy[name]=new Date(value.getTime())}else if(CHECK_IS_DATA(value)===true){copy[name]=COPY_DATA(value)}else if(CHECK_IS_ARRAY(value)===true){copy[name]=COPY_ARRAY(value)}else{copy[name]=value}});return copy}});global.EXTEND_ARRAY=METHOD({run:function(m,params){"use strict";var origin=params.origin,extend=params.extend;EACH(extend,function(value){var temp;if(value instanceof Date===true){origin.push(new Date(value.getTime()))}else if(CHECK_IS_DATA(value)===true){origin.push(COPY_DATA(value))}else if(CHECK_IS_ARRAY(value)===true){origin.push(COPY_ARRAY(value))}else{origin.push(value)}})}});global.EXTEND_DATA=METHOD({run:function(m,params){"use strict";var origin=params.origin,extend=params.extend;EACH(extend,function(value,name){if(value instanceof Date===true){origin[name]=new Date(value.getTime())}else if(CHECK_IS_DATA(value)===true){if(origin[name]===undefined){origin[name]={}}EXTEND_DATA({origin:origin[name],extend:value})}else if(CHECK_IS_ARRAY(value)===true){if(origin[name]===undefined){origin[name]=[]}EXTEND_ARRAY({origin:origin[name],extend:value})}else{origin[name]=value}})}});