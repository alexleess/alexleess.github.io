(function(e){function t(t){for(var r,a,o=t[0],s=t[1],i=t[2],f=0,d=[];f<o.length;f++)a=o[f],c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0c65b524":"88a28b25","chunk-265479cc":"637adb22","chunk-2d0d2f73":"b3c9c5f3","chunk-2d0d6794":"342ce5b2","chunk-2d0d6fa0":"b4d317d2","chunk-2d0ea0d5":"5925a65b","chunk-2d2105c2":"9a6e08c2","chunk-2d2107db":"df8d703c","chunk-2d21f841":"ee6534a4","chunk-3dc4660a":"437bcfe9","chunk-628bc8b6":"79eded51","chunk-6f506719":"bfbb6b63","chunk-8b935110":"a4accdc1","chunk-24533179":"dcb6032e","chunk-2d221b5a":"3523e69a","chunk-37b090f0":"9eee3f15","chunk-37b4372e":"8b0a4b5b","chunk-01c80f76":"1335e7e1","chunk-01f1f804":"2b457597","chunk-2d8c1ec1":"b6a169fe","chunk-3ca5d8c6":"8cfb4a27","chunk-47d5e903":"26e4572f","chunk-785c0552":"fbb9530a","chunk-dfc139fe":"48b80765","chunk-e256cf54":"31985c9a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0c65b524":1,"chunk-265479cc":1,"chunk-3dc4660a":1,"chunk-628bc8b6":1,"chunk-8b935110":1,"chunk-24533179":1,"chunk-37b090f0":1,"chunk-37b4372e":1,"chunk-01c80f76":1,"chunk-01f1f804":1,"chunk-2d8c1ec1":1,"chunk-3ca5d8c6":1,"chunk-47d5e903":1,"chunk-785c0552":1,"chunk-dfc139fe":1,"chunk-e256cf54":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c65b524":"6eea1178","chunk-265479cc":"dba17947","chunk-2d0d2f73":"31d6cfe0","chunk-2d0d6794":"31d6cfe0","chunk-2d0d6fa0":"31d6cfe0","chunk-2d0ea0d5":"31d6cfe0","chunk-2d2105c2":"31d6cfe0","chunk-2d2107db":"31d6cfe0","chunk-2d21f841":"31d6cfe0","chunk-3dc4660a":"0b20aac1","chunk-628bc8b6":"04faa35a","chunk-6f506719":"31d6cfe0","chunk-8b935110":"81dd9d5c","chunk-24533179":"6eea1178","chunk-2d221b5a":"31d6cfe0","chunk-37b090f0":"6eea1178","chunk-37b4372e":"6eea1178","chunk-01c80f76":"9960a046","chunk-01f1f804":"9960a046","chunk-2d8c1ec1":"1f1d4f00","chunk-3ca5d8c6":"1f1d4f00","chunk-47d5e903":"1f1d4f00","chunk-785c0552":"1f1d4f00","chunk-dfc139fe":"1f1d4f00","chunk-e256cf54":"1f1d4f00"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var o=c[u],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===r||i===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){o=f[u],i=o.getAttribute("data-href");if(i===r||i===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=u);var i,f=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e),i=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}c[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,f.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0285":function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return u});var r={SET_TAB:"SET_SELECT_TAB",NEXT_TAB:"NEXT_TAB",PREV_TAB:"PREV_TAB"},a={PREV_PAGE:"PREV_PAGE",NEXT_PAGE:"NEXT_PAGE"},c={CURRENTPAGE:"currentPage"},u="home"},"034f":function(e,t,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},"0613":function(e,t,n){"use strict";var r,a,c,u,o,s,i=n("a34a"),f=n.n(i),d=n("3040"),p=n("a322"),l=n("2b0e"),b=n("2f62"),h=n("79f6"),_=n("d257"),m=n("6011"),E=n("3747"),k=n("0285"),O={namespaced:!0,state:{selectTab:E["b"].all,pages:{ask:1,share:1,all:1,good:1,job:1,dev:1}},mutations:Object(p["a"])({},k["d"].SET_TAB,function(e,t){e.selectTab=t}),actions:(r={},Object(p["a"])(r,k["a"].PREV_PAGE,function(){var e=Object(d["a"])(f.a.mark(function e(t,n){var r,a;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.state,a=E["b"][n],!(r.pages[a]>1)){e.next=7;break}return r.pages[a]-=1,e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()),Object(p["a"])(r,k["a"].NEXT_PAGE,function(){var e=Object(d["a"])(f.a.mark(function e(t,n){var r,a;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,a=E["b"][n],r.pages[a]+=1,e.abrupt("return",!0);case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()),r),getters:Object(p["a"])({},k["b"].CURRENTPAGE,function(e){return function(t){var n=E["b"][t];return e.pages[n]}})},v=O,T=(a={},Object(p["a"])(a,m["p"].GET_TOPIC_DETAIL,function(){var e=Object(d["a"])(f.a.mark(function e(t,n){var r,a;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,Object(h["a"])(n);case 4:return a=e.sent,r(m["q"].SET_TOPIC_DETAIL,a),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](1),_["a"].err(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(p["a"])(a,m["p"].COLLECT_OR_DE_COLLECT,function(){var e=Object(d["a"])(f.a.mark(function e(t){var n,r,a,c,u;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,a=t.rootState,c=t.dispatch,null!==r.topicDetail){e.next=4;break}return n(m["o"].SHOW_SNACK_BAR,"主题为空",{root:!0}),e.abrupt("return");case 4:if(e.prev=4,!r.topicDetail.is_collect){e.next=13;break}return e.next=8,Object(h["h"])({accesstoken:a.accesstoken,topic_id:r.topicDetail.id});case 8:return e.next=10,c(m["p"].GET_TOPIC_DETAIL,r.topicDetail.id);case 10:n(m["o"].SHOW_SNACK_BAR,{message:"取消收藏成功",color:"success"},{root:!0}),e.next=18;break;case 13:return e.next=15,Object(h["g"])({accesstoken:a.accesstoken,topic_id:r.topicDetail.id});case 15:return e.next=17,c(m["p"].GET_TOPIC_DETAIL,r.topicDetail.id);case 17:n(m["o"].SHOW_SNACK_BAR,{message:"收藏成功",color:"success"},{root:!0});case 18:e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](4),u=r.topicDetail.is_collect?"取消收藏失败！":"收藏失败！",n(m["o"].SHOW_SNACK_BAR,{message:u},{root:!0});case 24:case"end":return e.stop()}},e,this,[[4,20]])}));return function(t){return e.apply(this,arguments)}}()),Object(p["a"])(a,m["p"].POST_REPLY_UPS,function(){var e=Object(d["a"])(f.a.mark(function e(t,n){var r,a,c,u,o;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.state,c=t.rootState,u=t.dispatch,null!==a.topicDetail){e.next=3;break}return e.abrupt("return");case 3:if(null!==c.accesstoken){e.next=6;break}return r(m["o"].SHOW_SNACK_BAR,{message:"未登录！"},{root:!0}),e.abrupt("return");case 6:return e.prev=6,e.next=9,Object(h["j"])(n,{accesstoken:c.accesstoken});case 9:return e.next=11,u(m["p"].GET_TOPIC_DETAIL,a.topicDetail.id);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](6),o=e.t0.message||"网络错误",r(m["o"].SHOW_SNACK_BAR,{message:o},{root:!0});case 17:case"end":return e.stop()}},e,this,[[6,13]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(p["a"])(a,m["p"].POST_NEW_REPLY,function(){var e=Object(d["a"])(f.a.mark(function e(t,n){var r,a,c,u,o,s;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.state,c=t.rootState,u=t.dispatch,null!==c.accesstoken){e.next=4;break}return r(m["o"].SHOW_SNACK_BAR,{message:"未登录！"},{root:!0}),e.abrupt("return",!1);case 4:if(!a.topicDetail){e.next=22;break}return e.prev=5,c.addPrefix&&(n+=c.prefix),e.next=9,Object(h["i"])(a.topicDetail.id,{content:n,accesstoken:c.accesstoken});case 9:return o=e.sent,_["a"].log(o),e.next=13,u(m["p"].GET_TOPIC_DETAIL,a.topicDetail.id);case 13:r(m["o"].SHOW_SNACK_BAR,{message:"评论成功！",color:"success"},{root:!0}),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](5),s=e.t0.message||"评论失败！",r(m["o"].SHOW_SNACK_BAR,{message:s},{root:!0});case 20:e.next=23;break;case 22:r(m["o"].SHOW_SNACK_BAR,{message:"主题不存在！"},{root:!0});case 23:case"end":return e.stop()}},e,this,[[5,16]])}));return function(t,n){return e.apply(this,arguments)}}()),a),S=(c={},Object(p["a"])(c,m["q"].SET_TOPIC_DETAIL,function(e,t){e.topicDetail=t}),Object(p["a"])(c,m["q"].DELET_TOPIC_DETAIL,function(e){e.topicDetail=null}),Object(p["a"])(c,m["q"].SET_REPLY_ID,function(e,t){e.replyId=t}),Object(p["a"])(c,m["q"].DELET_REPLY_ID,function(e){e.replyId=null}),c),A={namespaced:!0,state:{topicDetail:null,replyId:null},mutations:S,actions:T},g=A,j=n("8afe"),w={namespaced:!0,state:{favorites:[]},mutations:Object(p["a"])({},m["l"].SET_FAVORITES,function(e,t){e.favorites=Object(j["a"])(t)}),actions:Object(p["a"])({},m["k"].GET_FAVORITES,function(){var e=Object(d["a"])(f.a.mark(function e(t){var n,r,a,c;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.rootState,r=t.commit,a=t.dispatch,!n.user||!n.user.loginname){e.next=16;break}return e.prev=2,e.next=5,Object(h["c"])(n.user.loginname);case 5:c=e.sent,_["a"].log(c),r(m["l"].SET_FAVORITES,c),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](2),_["a"].err(e.t0),r(m["o"].SHOW_SNACK_BAR,{message:e.t0.message||"err"},{root:!0});case 14:e.next=17;break;case 16:null===n.user&&n.accesstoken?(r(m["o"].SHOW_SNACK_BAR,{message:"正在获取用户信息...请等待.",color:"info",timeout:1e3},{root:!0}),setTimeout(function(){a(m["k"].GET_FAVORITES)},100)):r(m["o"].SHOW_SNACK_BAR,{message:"未登录"},{root:!0});case 17:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t){return e.apply(this,arguments)}}())},R=w,x=n("326d"),y={namespaced:!0,state:{author:null},mutations:(u={},Object(p["a"])(u,x["c"].SET_AUTHOR,function(e,t){e.author=t}),Object(p["a"])(u,x["c"].CLEAR_AUTHOR,function(e){e.author=null}),u),actions:Object(p["a"])({},x["b"].GET_AUTHOR,function(){var e=Object(d["a"])(f.a.mark(function e(t,n){var r,a,c;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,Object(h["d"])(n);case 4:a=e.sent,r(x["c"].SET_AUTHOR,a),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),c=e.t0.message||"用户详情获取失败！",r(m["o"].SHOW_SNACK_BAR,{message:c},{root:!0});case 12:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t,n){return e.apply(this,arguments)}}())},C=y,I=n("e57f"),P={namespaced:!0,state:{message:{has_read_messages:[],hasnot_read_messages:[]}},mutations:Object(p["a"])({},I["c"].SET_MESSAGES,function(e,t){e.message=t}),actions:Object(p["a"])({},I["b"].GET_USER_MESSAGES,function(){var e=Object(d["a"])(f.a.mark(function e(t){var n,r,a;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.rootState,!r.accesstoken){e.next=8;break}return e.next=4,Object(h["e"])({accesstoken:r.accesstoken});case 4:a=e.sent,n(I["c"].SET_MESSAGES,a),e.next=10;break;case 8:_["a"].err("未登录"),n(m["o"].SHOW_SNACK_BAR,{message:"未登录!"},{root:!0});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},N=P;l["default"].use(b["a"]);var L={showTabbar:!0,user:null,accesstoken:Object(_["b"])(),snackBar:{value:!1,timeout:6e3,color:"error",message:""},prefix:"\n  ------\n  来自[MaterialCNode](https://alexlees.top)\n  ",addPrefix:!0},B=(o={},Object(p["a"])(o,m["o"].SHOW_TABBAR,function(e){e.showTabbar=!0}),Object(p["a"])(o,m["o"].HIDE_TABBAR,function(e){e.showTabbar=!1}),Object(p["a"])(o,m["o"].SET_ACCESS_TOKEN,function(e,t){e.accesstoken=t,Object(_["e"])(t)}),Object(p["a"])(o,m["o"].SET_USER_INFO,function(e,t){e.user=t}),Object(p["a"])(o,m["o"].SHOW_SNACK_BAR,function(e,t){var n=t.message,r=t.timeout,a=void 0===r?6e3:r,c=t.color,u=void 0===c?"error":c;e.snackBar.color=u,e.snackBar.timeout=a,e.snackBar.message=n,e.snackBar.value=!0}),Object(p["a"])(o,m["o"].HIDE_SNACK_BAR,function(e){e.snackBar={value:!1,timeout:6e3,color:"error",message:""}}),Object(p["a"])(o,m["o"].DELETE_ACCESS_TOKEN,function(e){e.accesstoken=null,Object(_["c"])()}),Object(p["a"])(o,m["o"].TOGGLE_ADD_PREFIX,function(e){e.addPrefix=!e.addPrefix}),o),D=(s={},Object(p["a"])(s,m["n"].LOGIN,function(){var e=Object(d["a"])(f.a.mark(function e(t,n){var r,a,c,u;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.dispatch,c=t.state,n||!c.accesstoken){e.next=5;break}n=c.accesstoken,e.next=8;break;case 5:if(n||c.accesstoken){e.next=8;break}return r(m["o"].SHOW_SNACK_BAR,{message:"accesstoken错误"}),e.abrupt("return",!1);case 8:return e.prev=8,e.next=11,Object(h["f"])(n);case 11:return u=e.sent,r(m["o"].SET_ACCESS_TOKEN,n),e.next=15,a(m["n"].GET_USER_INFO,u.loginname);case 15:if(!e.sent){e.next=17;break}return e.abrupt("return",!0);case 17:return e.abrupt("return",!1);case 20:return e.prev=20,e.t0=e["catch"](8),_["a"].err(e.t0),e.abrupt("return",!1);case 24:case"end":return e.stop()}},e,this,[[8,20]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(p["a"])(s,m["n"].GET_USER_INFO,function(){var e=Object(d["a"])(f.a.mark(function e(t,n){var r,a;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,Object(h["d"])(n);case 4:return a=e.sent,r(m["o"].SET_USER_INFO,a),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](1),_["a"].err(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(p["a"])(s,m["n"].LOGOUT,function(){var e=Object(d["a"])(f.a.mark(function e(t){var n;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n(m["o"].SET_USER_INFO,null),n(m["o"].DELETE_ACCESS_TOKEN);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),s),G=new b["a"].Store({state:L,mutations:B,actions:D,modules:{home:v,topic:g,favorite:R,author:C,messages:N}});G.dispatch(m["n"].LOGIN);t["a"]=G},"326d":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return c});var r={GET_AUTHOR:"GET_AUTHOR"},a={SET_AUTHOR:"SET_AUTHOR",CLEAR_AUTHOR:"CLEAR_AUTHOR"},c="author"},3747:function(e,t,n){"use strict";var r;(function(e){e[e["ask"]=0]="ask",e[e["share"]=1]="share",e[e["all"]=2]="all",e[e["good"]=3]="good",e[e["job"]=4]="job",e[e["dev"]=5]="dev"})(r||(r={}));var a={ask:{code:r.ask,name:"问答"},share:{code:r.share,name:"分享"},all:{code:r.all,name:"推荐"},good:{code:r.good,name:"精华"},job:{code:r.job,name:"招聘"},dev:{code:r.dev,name:"测试"}};n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a})},6011:function(e,t,n){"use strict";var r=n("0285"),a={GET_TOPIC_DETAIL:"GET_TOPIC_DETAIL",COLLECT_OR_DE_COLLECT:"COLLECT_OR_DE_COLLECT",POST_REPLY_UPS:"POST_REPLY_UPS",POST_NEW_REPLY:"POST_NEW_REPLY"},c={SET_TOPIC_DETAIL:"SET_TOPIC_DETAIL",DELET_TOPIC_DETAIL:"DELET_TOPIC_DETAIL",SET_REPLY_ID:"SET_REPLY_ID",DELET_REPLY_ID:"DELET_REPLY_ID"},u="topic",o={GET_FAVORITES:"GET_FAVORITES"},s={SET_FAVORITES:"SET_FAVORITES"},i="favorite",f=n("326d"),d=n("e57f");n.d(t,"o",function(){return p}),n.d(t,"n",function(){return l}),n.d(t,"f",function(){return r["d"]}),n.d(t,"c",function(){return r["a"]}),n.d(t,"d",function(){return r["b"]}),n.d(t,"e",function(){return r["c"]}),n.d(t,"p",function(){return a}),n.d(t,"q",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"k",function(){return o}),n.d(t,"l",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"i",function(){return f["b"]}),n.d(t,"j",function(){return f["c"]}),n.d(t,"a",function(){return f["a"]}),n.d(t,"g",function(){return d["a"]}),n.d(t,"m",function(){return d["b"]});var p={SHOW_TABBAR:"SHOW_TABBAR",HIDE_TABBAR:"HIDE_TABBAR",SET_USER_INFO:"SET_USER_INFO",SET_ACCESS_TOKEN:"SET_ACCESS_TOKEN",DELETE_ACCESS_TOKEN:"DELETE_ACCESS_TOKEN",SHOW_SNACK_BAR:"SHOW_SNACK_BAR",HIDE_SNACK_BAR:"HIDE_SNACK_BAR",TOGGLE_ADD_PREFIX:"TOGGLE_ADD_PREFIX"},l={LOGIN:"LOGIN",GET_USER_INFO:"GET_USER_INFO",LOGOUT:"LOGOUT"}},"79f6":function(e,t,n){"use strict";var r=n("a34a"),a=n.n(r),c=n("3040"),u=n("3747"),o=n("d257"),s={limit:20};function i(){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(a.a.mark(function e(){var t,n,r,c,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},n={},Object.assign(n,s,t),"number"===typeof n.tab&&(n.tab=u["b"][n.tab]),e.next=6,o["d"].get("/topics",{params:n});case 6:if(r=e.sent,c=r.data,!c.data){e.next=12;break}return e.abrupt("return",c.data);case 12:return e.abrupt("return",Promise.reject("数据错误"));case 13:case"end":return e.stop()}},e,this)})),f.apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(a.a.mark(function e(t){var n,r,c,u,s,i,f,d,p=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},r=n.accesstoken,c=void 0===r?Object(o["b"])():r,u=n.mdrender,s=void 0===u||u,i="/topic/".concat(t),e.next=4,o["d"].get(i,{params:{accesstoken:c,mdrender:s}});case 4:if(f=e.sent,d=f.data,!d.data){e.next=10;break}return e.abrupt("return",d.data);case 10:return e.abrupt("return",Promise.reject("数据错误"));case 11:case"end":return e.stop()}},e,this)})),p.apply(this,arguments)}function l(e){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["d"].post("/topic_collect/collect",t);case 2:return n=e.sent,r=n.data,o["a"].log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)})),b.apply(this,arguments)}function h(e){return _.apply(this,arguments)}function _(){return _=Object(c["a"])(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["d"].post("/topic_collect/de_collect",t);case 2:return n=e.sent,r=n.data,o["a"].log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)})),_.apply(this,arguments)}function m(e,t){return E.apply(this,arguments)}function E(){return E=Object(c["a"])(a.a.mark(function e(t,n){var r,c;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["d"].post("/reply/".concat(t,"/ups"),n);case 2:return r=e.sent,c=r.data,o["a"].log(c),e.abrupt("return",c);case 6:case"end":return e.stop()}},e,this)})),E.apply(this,arguments)}function k(e,t){return O.apply(this,arguments)}function O(){return O=Object(c["a"])(a.a.mark(function e(t,n){var r,c;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["d"].post("/topic/".concat(t,"/replies"),n);case 2:return r=e.sent,c=r.data,e.abrupt("return",c);case 5:case"end":return e.stop()}},e,this)})),O.apply(this,arguments)}function v(e){return T.apply(this,arguments)}function T(){return T=Object(c["a"])(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["d"].post("/accesstoken",{accesstoken:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e,this)})),T.apply(this,arguments)}function S(e){return A.apply(this,arguments)}function A(){return A=Object(c["a"])(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["d"].get("/user/".concat(t));case 2:if(n=e.sent,r=n.data,!r.data){e.next=6;break}return e.abrupt("return",r.data);case 6:return e.abrupt("return",Promise.reject("网络未知错误，请重试"));case 7:case"end":return e.stop()}},e,this)})),A.apply(this,arguments)}function g(e){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(a.a.mark(function e(t){var n,r,c;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["d"].get("/topic_collect/".concat(t));case 2:return n=e.sent,r=n.data,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}},e,this)})),j.apply(this,arguments)}function w(e){return R.apply(this,arguments)}function R(){return R=Object(c["a"])(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["d"].get("/messages",{params:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)})),R.apply(this,arguments)}n.d(t,"b",function(){return i}),n.d(t,"a",function(){return d}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return h}),n.d(t,"j",function(){return m}),n.d(t,"i",function(){return k}),n.d(t,"f",function(){return v}),n.d(t,"d",function(){return S}),n.d(t,"c",function(){return g}),n.d(t,"e",function(){return w})},c21b:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var r=n("2b0e"),a=n("5a0c"),c=n.n(a),u=(n("a471"),n("4208")),o=n.n(u);c.a.locale("zh-cn"),c.a.extend(o.a),r["default"].filter("fromNow",function(e){return c()(e).fromNow()});var s=n("d437"),i=n.n(s),f=n("d421"),d=n.n(f),p=n("12d0"),l=n.n(p),b=n("d553"),h=n.n(b),_=n("5d92"),m=n.n(_),E=n("6a6f"),k=n.n(E),O=n("e62c"),v=n.n(O),T=n("9b13"),S=n.n(T),A=n("c713"),g=n.n(A),j=n("68d6"),w=n.n(j),R=n("db3b"),x=n.n(R),y=n("25b1"),C=n.n(y),I=n("3e8b"),P=n.n(I),N=n("b3ee"),L=n.n(N),B=n("0fad"),D=n.n(B),G=n("9f3b"),H=n.n(G),K=n("2330"),U=n.n(K),V=(n("da64"),n("d7a2")),W=n("25a2");r["default"].use(i.a,{components:{VApp:d.a,VToolbar:l.a,VGrid:h.a,VBtn:m.a,VIcon:k.a,VBottomNav:v.a,VTabs:S.a,VCard:g.a,VDivider:w.a,VTextField:x.a,VSnackbar:C.a,VAvatar:P.a,VChip:L.a,VAutocomplete:D.a,VSwitch:H.a,transitions:U.a},theme:{},directives:{Ripple:V["Ripple"],Touch:V["Touch"]},customProperties:!0,iconfont:"md",lang:{locales:{zhHans:W["a"]},current:"zh-Hans"}});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1),n("CommSnakBar")],1)},Y=[],M=n("c665"),q=n("dc0a"),X=n("d328"),z=n("11d9"),J=n("9ab4"),$=n("60a3"),Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{value:e.snackBar.value,color:e.snackBar.color,timeout:e.snackBar.timeout},on:{input:e.input}},[e._v("\n  "+e._s(e.snackBar.message)+"\n  "),n("v-btn",{attrs:{dark:"",flat:""},on:{click:e.hide}},[e._v("知道了")])],1)},Z=[],ee=n("aa9a"),te=n("4bb5"),ne=n("6011"),re=function(e){function t(){return Object(M["a"])(this,t),Object(X["a"])(this,Object(z["a"])(t).apply(this,arguments))}return Object(ee["a"])(t,[{key:"input",value:function(e){!1===e&&this.hide()}}]),Object(q["a"])(t,e),t}($["c"]);J["a"]([Object(te["c"])(function(e){return e.snackBar})],re.prototype,"snackBar",void 0),J["a"]([Object(te["b"])(ne["o"].HIDE_SNACK_BAR)],re.prototype,"hide",void 0),re=J["a"]([$["a"]],re);var ae=re,ce=ae,ue=n("2877"),oe=Object(ue["a"])(ce,Q,Z,!1,null,null,null);oe.options.__file="CommSnakBar.vue";var se=oe.exports,ie=function(e){function t(){return Object(M["a"])(this,t),Object(X["a"])(this,Object(z["a"])(t).apply(this,arguments))}return Object(q["a"])(t,e),t}($["c"]);ie=J["a"]([Object($["a"])({components:{CommSnakBar:se}})],ie);var fe=ie,de=fe,pe=(n("034f"),Object(ue["a"])(de,F,Y,!1,null,null,null));pe.options.__file="App.vue";var le=pe.exports,be=n("8c4f"),he=function(){return n.e("chunk-2d2105c2").then(n.bind(null,"b80f"))},_e=function(){return n.e("chunk-3dc4660a").then(n.bind(null,"16c0"))},me=function(){return n.e("chunk-0c65b524").then(n.bind(null,"3ab1"))},Ee=function(){return n.e("chunk-2d2107db").then(n.bind(null,"b7b2"))},ke=function(){return n.e("chunk-2d0ea0d5").then(n.bind(null,"8fc4"))},Oe=function(){return n.e("chunk-6f506719").then(n.bind(null,"7da0"))},ve=function(){return n.e("chunk-2d21f841").then(n.bind(null,"d9c9"))},Te=function(){return n.e("chunk-2d0d6794").then(n.bind(null,"7368"))},Se=function(){return n.e("chunk-2d0d6fa0").then(n.bind(null,"759e"))},Ae=function(){return n.e("chunk-265479cc").then(n.bind(null,"afb3"))},ge=function(){return n.e("chunk-2d0d2f73").then(n.bind(null,"5b6f"))},je=function(){return n.e("chunk-628bc8b6").then(n.bind(null,"fc8b"))},we=function(){return n.e("chunk-8b935110").then(n.bind(null,"39aa"))};r["default"].use(be["a"]);var Re=new be["a"]({mode:"history",base:"/",routes:[{path:"",component:he,redirect:"/home",children:[{path:"/home",component:_e},{path:"/favorite",component:me},{path:"/message",component:ke},{path:"/me",component:Ee}]},{path:"/topic/:id",component:Oe,redirect:"/topic/:id/topic",children:[{path:"/topic/:id/topic",component:Ae},{path:"/topic/:id/reply",component:je},{path:"/topic/:id/info",component:ge},{path:"/topic/:id/newreply",component:we}]},{path:"/login",component:ve},{path:"/user/:name",component:Te},{path:"*",component:Se}]}),xe=n("0613"),ye=n("9483");Object(ye["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d5e8"),n("d1e7");r["default"].config.productionTip=!1,new r["default"]({router:Re,store:xe["a"],render:function(e){return e(le)}}).$mount("#app")},d257:function(e,t,n){"use strict";var r=n("c665"),a=n("aa9a"),c=function(){function e(){Object(r["a"])(this,e),this.development=!1}return Object(a["a"])(e,[{key:"log",value:function(){var e;this.development&&(e=console).log.apply(e,arguments)}},{key:"err",value:function(){var e;this.development&&(e=console).error.apply(e,arguments)}},{key:"dev",get:function(){return this.development}}],[{key:"getLog",value:function(){return new e}}]),e}(),u=c.getLog(),o=n("bc3a"),s=n.n(o),i=n("4328"),f=n.n(i),d={baseURL:"https://cnodejs.org/api/v1/",paramsSerializer:function(e){return f.a.stringify(e)},timeout:3e3,responseType:"json",validateStatus:function(e){return e>=200&&e<500}},p=n("0613"),l=n("6011"),b=s.a.create(d),h=[],_=s.a.CancelToken;b.interceptors.request.use(function(e){return e.cancelToken=new _(function(t){h.push({url:"".concat(e.url,"&request_type=").concat(e.method),cancel:t})}),e}),b.interceptors.response.use(function(e){return e.data.success?e:(p["a"].commit(l["o"].SHOW_SNACK_BAR,{message:e.data.error_msg}),u.log(e.data.error_msg),Promise.reject(e.data.error_msg))},function(e){return e.message?(p["a"].commit(l["o"].SHOW_SNACK_BAR,{message:e.message}),u.err(e.message)):u.err(e),Promise.reject(e)});var m=b,E=function(){function e(){Object(r["a"])(this,e),this.store=window.localStorage}return Object(a["a"])(e,[{key:"setItem",value:function(e,t){this.store.setItem(e,JSON.stringify(t))}},{key:"getItem",value:function(e){var t=this.store.getItem(e);return t?JSON.parse(t):null}},{key:"clear",value:function(){this.store.clear()}},{key:"remove",value:function(e){this.store.removeItem(e)}}],[{key:"getInstace",value:function(){return new e}}]),e}(),k=E.getInstace(),O="ACCESSTOKEN_KEY";function v(e){k.setItem(O,e)}function T(){return k.getItem(O)}function S(){k.remove(O)}n.d(t,"a",function(){return u}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return v}),n.d(t,"b",function(){return T}),n.d(t,"c",function(){return S})},e57f:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return c});var r="messages",a={SET_MESSAGES:"SET_MESSAGES"},c={GET_USER_MESSAGES:"GET_USER_MESSAGES"}}});
//# sourceMappingURL=app.15c653d9.js.map