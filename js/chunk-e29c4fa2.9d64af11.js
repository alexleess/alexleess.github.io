(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e29c4fa2"],{"3ab1":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-toolbar",{attrs:{app:"",color:"primary"}},[e("v-toolbar-title",{staticClass:"white--text"},[t._v("收藏")]),e("v-spacer"),e("v-btn",{attrs:{dark:"",icon:""},on:{click:t.getFavorites}},[e("v-icon",[t._v("refresh")])],1)],1),t._l(t.favorites,function(t){return e("BaseTopic",{key:t.id,attrs:{data:t}})})],2)},i=[],o=e("c665"),s=e("dc0a"),n=e("aa9a"),c=e("d328"),l=e("11d9"),u=e("9ab4"),d=e("60a3"),v=e("4bb5"),p=e("6011"),_=e("d257"),f=e("6e95"),b=Object(v["d"])(p["b"]),h=function(t){function a(){return Object(o["a"])(this,a),Object(c["a"])(this,Object(l["a"])(a).apply(this,arguments))}return Object(n["a"])(a,[{key:"created",value:function(){_["a"].log("created"),this.getFavorites()}},{key:"activated",value:function(){this.getFavorites()}}]),Object(s["a"])(a,t),a}(d["c"]);u["a"]([b.Action(p["k"].GET_FAVORITES)],h.prototype,"getFavorites",void 0),u["a"]([b.State(function(t){return t.favorites})],h.prototype,"favorites",void 0),h=u["a"]([Object(d["a"])({components:{BaseTopic:f["a"]}})],h);var y=h,g=y,m=e("2877"),O=Object(m["a"])(g,r,i,!1,null,null,null);O.options.__file="index.vue";a["default"]=O.exports},"625b":function(t,a,e){t.exports={topic:"BaseTopic_topic_3Q3et",content:"BaseTopic_content_2YKGP",author:"BaseTopic_author_egzP1",header:"BaseTopic_header_1VWuh",right:"BaseTopic_right_2GpDc",footer:"BaseTopic_footer_eelkh"}},"6e95":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{class:t.$style.topic},[e("header",{class:t.$style.header},[e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],class:t.$style.author,attrs:{tag:"div",to:"/user/"+t.data.author.loginname}},[e("v-avatar",{attrs:{size:40}},[e("img",{attrs:{src:t.data.author.avatar_url,alt:t.data.author.loginname}})]),e("span",{staticStyle:{"text-indent":"1em"}},[t._v(t._s(t.data.author.loginname))])],1),e("div",{class:t.$style.right})],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],class:t.$style.content,attrs:{tag:"main",to:"/topic/"+t.data.id}},[e("p",[t._v(t._s(t.data.title))])]),e("v-divider"),e("footer",{class:t.$style.footer},[e("v-btn",{attrs:{flat:"",round:"",disabled:""}},[t._v(t._s(t.data.visit_count)+"浏览")]),e("v-btn",{attrs:{flat:"",round:"",disabled:""}},[t._v(t._s(t.data.reply_count)+"评论")]),e("v-btn",{attrs:{flat:"",round:"",disabled:""}},[t._v("\n      "+t._s(t._f("fromNow")(t.data.last_reply_at))+"\n    ")])],1)],1)},i=[],o=e("c665"),s=e("dc0a"),n=e("d328"),c=e("11d9"),l=e("9ab4"),u=e("60a3"),d=function(t){function a(){return Object(o["a"])(this,a),Object(n["a"])(this,Object(c["a"])(a).apply(this,arguments))}return Object(s["a"])(a,t),a}(u["c"]);l["a"]([Object(u["b"])({required:!0})],d.prototype,"data",void 0),d=l["a"]([u["a"]],d);var v=d,p=v,_=e("90f0"),f=e("2877");function b(t){this["$style"]=_["default"].locals||_["default"]}var h=Object(f["a"])(p,r,i,!1,b,null,null);h.options.__file="BaseTopic.vue";a["a"]=h.exports},"90f0":function(t,a,e){"use strict";var r=e("625b"),i=e.n(r);a["default"]=i.a}}]);
//# sourceMappingURL=chunk-e29c4fa2.9d64af11.js.map