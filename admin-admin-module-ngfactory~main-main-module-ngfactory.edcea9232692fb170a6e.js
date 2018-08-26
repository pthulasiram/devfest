(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{PCNd:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(){}},TVUz:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("VnD/"),o=r("67Y/"),s=(r("6233"),r("hja+"),r("iru4")),i=function(){function e(e,t){this.db=e,this.yearService=t,this.speakersByYear={},this.scheduleByYear={}}return e.prototype.getSpeakers=function(e){return this.speakersByYear[e]?this.speakersByYear[e]:(this.speakersByYear[e]=this.listPath("speakers",function(e){return e.orderByChild("name")}).pipe(Object(n.a)(function(e){return!!e}),Object(s.a)("speakerCache"+e)),this.speakersByYear[e])},e.prototype.getSchedule=function(e){return this.scheduleByYear[e]?this.scheduleByYear[e]:(this.scheduleByYear[e]=this.listPath("schedule",function(e){return e.orderByChild("title")}).pipe(Object(n.a)(function(e){return!!e}),Object(s.a)("sessionsCache"+e)),this.scheduleByYear[e])},e.prototype.getVenueLayout=function(){var e,t;return this.yearService.year<2018?(e=["Large Auditorium","Small Auditorium","Lab","Classroom A","Classroom B","Classroom C","Classroom D"],t={"Large Auditorium":1,"Small Auditorium":1,Lab:3,"Classroom A":3,"Classroom B":3,"Classroom C":3,"Classroom D":3}):(e=["Large Auditorium","Small Auditorium","235","238","244","321","334","446","458"],t={"Large Auditorium":"Schultze","Small Auditorium":"Schultze",235:"Law",238:"Law",244:"Law",321:"Law",334:"Law",446:"Law",458:"Law"}),{floors:t,rooms:e}},e.prototype.getFeedback=function(){return this.listPath("feedback")},e.prototype.getVolunteers=function(){return this.db.object("devfest"+this.yearService.year+"/volunteers")},e.prototype.getAgenda=function(e,t){var r="devfest"+this.yearService.year+"/agendas/"+e+"/"+t+"/";return console.log("fetching agenda stored at",r),this.db.object(r)},e.prototype.customDateFormatter=function(e){var t=new Date(e),r=t.getHours(),n=(r-=6-t.getTimezoneOffset()/60)>=12&&r<24?"PM":"AM";return r>12&&(r-=12),r+" "+n},e.prototype.save=function(e,t){console.log("Attempting to save",e,t);var r,n=this.modifiableList(e);if(t.$key){var o=t.$key;delete t.$key,r=n.update(o,t),t.$key=o}else r=n.push(t);return r},e.prototype.delete=function(e,t){console.log("Attempting to delete",t,"of type",e),this.modifiableList(e).remove(t.$key)},e.prototype.deleteSpeakerFromSession=function(e,t){this.db.list("devfest"+this.yearService.year+"/schedule/"+e.$key+"/speakers").remove(t).then(function(){console.log("Speaker ("+t+" deleted from session ("+e.$key+") .")}).catch(function(e){console.error("Error deleting speaker from session",e)})},e.prototype.listPath=function(e,t){return this.modifiableList(e,t).snapshotChanges().pipe(Object(o.a)(function(e){return e.map(function(e){var t=e.payload.val();return t.$key=e.key,t})}))},e.prototype.modifiableList=function(e,t){return this.db.list("devfest"+this.yearService.year+"/"+e,t)},e}()},"t/Na":function(e,t,r){"use strict";r.d(t,"k",function(){return z}),r.d(t,"n",function(){return F}),r.d(t,"o",function(){return D}),r.d(t,"l",function(){return U}),r.d(t,"m",function(){return B}),r.d(t,"b",function(){return c}),r.d(t,"f",function(){return d}),r.d(t,"c",function(){return E}),r.d(t,"a",function(){return L}),r.d(t,"d",function(){return M}),r.d(t,"e",function(){return q}),r.d(t,"j",function(){return I}),r.d(t,"g",function(){return R}),r.d(t,"i",function(){return N}),r.d(t,"h",function(){return H});var n=r("mrSG"),o=r("CcnG"),s=r("F/XL"),i=r("6blF"),a=r("Phjn"),u=r("VnD/"),p=r("67Y/"),h=r("Ip0R"),d=function(){},c=function(){},l=function(){function e(e){var t=this;this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?function(){t.headers=new Map,e.split("\n").forEach(function(e){var r=e.indexOf(":");if(r>0){var n=e.slice(0,r),o=n.toLowerCase(),s=e.slice(r+1).trim();t.maybeSetNormalizedName(n,o),t.headers.has(o)?t.headers.get(o).push(s):t.headers.set(o,[s])}})}:function(){t.headers=new Map,Object.keys(e).forEach(function(r){var n=e[r],o=r.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(t.headers.set(o,n),t.maybeSetNormalizedName(r,o))})}:this.headers=new Map}return e.prototype.has=function(e){return this.init(),this.headers.has(e.toLowerCase())},e.prototype.get=function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null},e.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},e.prototype.getAll=function(e){return this.init(),this.headers.get(e.toLowerCase())||null},e.prototype.append=function(e,t){return this.clone({name:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({name:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({name:e,value:t,op:"d"})},e.prototype.maybeSetNormalizedName=function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)},e.prototype.init=function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(e){return t.applyUpdate(e)}),this.lazyUpdate=null))},e.prototype.copyFrom=function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach(function(r){t.headers.set(r,e.headers.get(r)),t.normalizedNames.set(r,e.normalizedNames.get(r))})},e.prototype.clone=function(t){var r=new e;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([t]),r},e.prototype.applyUpdate=function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);var o=("a"===e.op?this.headers.get(t):void 0)||[];o.push.apply(o,Object(n.d)(r)),this.headers.set(t,o);break;case"d":var s=e.value;if(s){var i=this.headers.get(t);if(!i)return;0===(i=i.filter(function(e){return-1===s.indexOf(e)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}else this.headers.delete(t),this.normalizedNames.delete(t)}},e.prototype.forEach=function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(r){return e(t.normalizedNames.get(r),t.headers.get(r))})},e}(),f=function(){function e(){}return e.prototype.encodeKey=function(e){return y(e)},e.prototype.encodeValue=function(e){return y(e)},e.prototype.decodeKey=function(e){return decodeURIComponent(e)},e.prototype.decodeValue=function(e){return decodeURIComponent(e)},e}();function y(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var m=function(){function e(e){void 0===e&&(e={});var t,r,o,s=this;if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new f,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(t=e.fromString,r=this.encoder,o=new Map,t.length>0&&t.split("&").forEach(function(e){var t=e.indexOf("="),s=Object(n.c)(-1==t?[r.decodeKey(e),""]:[r.decodeKey(e.slice(0,t)),r.decodeValue(e.slice(t+1))],2),i=s[0],a=s[1],u=o.get(i)||[];u.push(a),o.set(i,u)}),o)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(function(t){var r=e.fromObject[t];s.map.set(t,Array.isArray(r)?r:[r])})):this.map=null}return e.prototype.has=function(e){return this.init(),this.map.has(e)},e.prototype.get=function(e){this.init();var t=this.map.get(e);return t?t[0]:null},e.prototype.getAll=function(e){return this.init(),this.map.get(e)||null},e.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},e.prototype.append=function(e,t){return this.clone({param:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({param:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({param:e,value:t,op:"d"})},e.prototype.toString=function(){var e=this;return this.init(),this.keys().map(function(t){var r=e.encoder.encodeKey(t);return e.map.get(t).map(function(t){return r+"="+e.encoder.encodeValue(t)}).join("&")}).join("&")},e.prototype.clone=function(t){var r=new e({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat([t]),r},e.prototype.init=function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return e.map.set(t,e.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var r=("a"===t.op?e.map.get(t.param):void 0)||[];r.push(t.value),e.map.set(t.param,r);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var n=e.map.get(t.param)||[],o=n.indexOf(t.value);-1!==o&&n.splice(o,1),n.length>0?e.map.set(t.param,n):e.map.delete(t.param)}}),this.cloneFrom=null)},e}();function v(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function b(e){return"undefined"!=typeof Blob&&e instanceof Blob}function g(e){return"undefined"!=typeof FormData&&e instanceof FormData}var w=function(){function e(e,t,r,n){var o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new l),this.params){var s=this.params.toString();if(0===s.length)this.urlWithParams=t;else{var i=t.indexOf("?");this.urlWithParams=t+(-1===i?"?":i<t.length-1?"&":"")+s}}else this.params=new m,this.urlWithParams=t}return e.prototype.serializeBody=function(){return null===this.body?null:v(this.body)||b(this.body)||g(this.body)||"string"==typeof this.body?this.body:this.body instanceof m?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},e.prototype.detectContentTypeHeader=function(){return null===this.body?null:g(this.body)?null:b(this.body)?this.body.type||null:v(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof m?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},e.prototype.clone=function(t){void 0===t&&(t={});var r=t.method||this.method,n=t.url||this.url,o=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,i=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,p=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce(function(e,r){return e.set(r,t.setHeaders[r])},u)),t.setParams&&(p=Object.keys(t.setParams).reduce(function(e,r){return e.set(r,t.setParams[r])},p)),new e(r,n,s,{params:p,headers:u,reportProgress:a,responseType:o,withCredentials:i})},e}(),T=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({}),k=function(){return function(e,t,r){void 0===t&&(t=200),void 0===r&&(r="OK"),this.headers=e.headers||new l,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}(),C=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,t)||this;return r.type=T.ResponseHeader,r}return Object(n.b)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(k),O=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,t)||this;return r.type=T.Response,r.body=void 0!==t.body?t.body:null,r}return Object(n.b)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(k),j=function(e){function t(t){var r=e.call(this,t,0,"Unknown Error")||this;return r.name="HttpErrorResponse",r.ok=!1,r.message=r.status>=200&&r.status<300?"Http failure during parsing for "+(t.url||"(unknown url)"):"Http failure response for "+(t.url||"(unknown url)")+": "+t.status+" "+t.statusText,r.error=t.error||null,r}return Object(n.b)(t,e),t}(k);function S(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var E=function(){function e(e){this.handler=e}return e.prototype.request=function(e,t,r){var n,o=this;if(void 0===r&&(r={}),e instanceof w)n=e;else{var i;i=r.headers instanceof l?r.headers:new l(r.headers);var h=void 0;r.params&&(h=r.params instanceof m?r.params:new m({fromObject:r.params})),n=new w(e,t,void 0!==r.body?r.body:null,{headers:i,params:h,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}var d=Object(s.a)(n).pipe(Object(a.a)(function(e){return o.handler.handle(e)}));if(e instanceof w||"events"===r.observe)return d;var c=d.pipe(Object(u.a)(function(e){return e instanceof O}));switch(r.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return c.pipe(Object(p.a)(function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return c.pipe(Object(p.a)(function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return c.pipe(Object(p.a)(function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return c.pipe(Object(p.a)(function(e){return e.body}))}case"response":return c;default:throw new Error("Unreachable: unhandled observe type "+r.observe+"}")}},e.prototype.delete=function(e,t){return void 0===t&&(t={}),this.request("DELETE",e,t)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this.request("GET",e,t)},e.prototype.head=function(e,t){return void 0===t&&(t={}),this.request("HEAD",e,t)},e.prototype.jsonp=function(e,t){return this.request("JSONP",e,{params:(new m).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},e.prototype.options=function(e,t){return void 0===t&&(t={}),this.request("OPTIONS",e,t)},e.prototype.patch=function(e,t,r){return void 0===r&&(r={}),this.request("PATCH",e,S(r,t))},e.prototype.post=function(e,t,r){return void 0===r&&(r={}),this.request("POST",e,S(r,t))},e.prototype.put=function(e,t,r){return void 0===r&&(r={}),this.request("PUT",e,S(r,t))},e}(),A=function(){function e(e,t){this.next=e,this.interceptor=t}return e.prototype.handle=function(e){return this.interceptor.intercept(e,this.next)},e}(),L=new o.p("HTTP_INTERCEPTORS"),P=function(){function e(){}return e.prototype.intercept=function(e,t){return t.handle(e)},e}(),x=/^\)\]\}',?\n/,N=function(){},z=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e}(),R=function(){function e(e){this.xhrFactory=e}return e.prototype.handle=function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new i.a(function(r){var n=t.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach(function(e,t){return n.setRequestHeader(e,t.join(","))}),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var o=e.detectContentTypeHeader();null!==o&&n.setRequestHeader("Content-Type",o)}if(e.responseType){var s=e.responseType.toLowerCase();n.responseType="json"!==s?s:"text"}var i=e.serializeBody(),a=null,u=function(){if(null!==a)return a;var t=1223===n.status?204:n.status,r=n.statusText||"OK",o=new l(n.getAllResponseHeaders()),s=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(n)||e.url;return a=new C({headers:o,status:t,statusText:r,url:s})},p=function(){var t=u(),o=t.headers,s=t.status,i=t.statusText,a=t.url,p=null;204!==s&&(p=void 0===n.response?n.responseText:n.response),0===s&&(s=p?200:0);var h=s>=200&&s<300;if("json"===e.responseType&&"string"==typeof p){var d=p;p=p.replace(x,"");try{p=""!==p?JSON.parse(p):null}catch(e){p=d,h&&(h=!1,p={error:e,text:p})}}h?(r.next(new O({body:p,headers:o,status:s,statusText:i,url:a||void 0})),r.complete()):r.error(new j({error:p,headers:o,status:s,statusText:i,url:a||void 0}))},h=function(e){var t=new j({error:e,status:n.status||0,statusText:n.statusText||"Unknown Error"});r.error(t)},d=!1,c=function(t){d||(r.next(u()),d=!0);var o={type:T.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===e.responseType&&n.responseText&&(o.partialText=n.responseText),r.next(o)},f=function(e){var t={type:T.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),r.next(t)};return n.addEventListener("load",p),n.addEventListener("error",h),e.reportProgress&&(n.addEventListener("progress",c),null!==i&&n.upload&&n.upload.addEventListener("progress",f)),n.send(i),r.next({type:T.Sent}),function(){n.removeEventListener("error",h),n.removeEventListener("load",p),e.reportProgress&&(n.removeEventListener("progress",c),null!==i&&n.upload&&n.upload.removeEventListener("progress",f)),n.abort()}})},e}(),U=new o.p("XSRF_COOKIE_NAME"),B=new o.p("XSRF_HEADER_NAME"),H=function(){},F=function(){function e(e,t,r){this.doc=e,this.platform=t,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return e.prototype.getToken=function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(h.x)(e,this.cookieName),this.lastCookieString=e),this.lastToken},e}(),D=function(){function e(e,t){this.tokenService=e,this.headerName=t}return e.prototype.intercept=function(e,t){var r=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return t.handle(e);var n=this.tokenService.getToken();return null===n||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,n)})),t.handle(e)},e}(),I=function(){function e(e,t){this.backend=e,this.injector=t,this.chain=null}return e.prototype.handle=function(e){if(null===this.chain){var t=this.injector.get(L,[]);this.chain=t.reduceRight(function(e,t){return new A(e,t)},this.backend)}return this.chain.handle(e)},e}(),q=function(){function e(){}return e.disable=function(){return{ngModule:e,providers:[{provide:D,useClass:P}]}},e.withOptions=function(t){return void 0===t&&(t={}),{ngModule:e,providers:[t.cookieName?{provide:U,useValue:t.cookieName}:[],t.headerName?{provide:B,useValue:t.headerName}:[]]}},e}(),M=function(){}}}]);