(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0def49eb"],{"625b":function(t,a,e){t.exports={topic:"BaseTopic_topic_3Q3et",content:"BaseTopic_content_2YKGP",author:"BaseTopic_author_egzP1",header:"BaseTopic_header_1VWuh",right:"BaseTopic_right_2GpDc",footer:"BaseTopic_footer_eelkh"}},"6e95":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{class:t.$style.topic},[e("header",{class:t.$style.header},[e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],class:t.$style.author,attrs:{tag:"div",to:"/user/"+t.data.author.loginname}},[e("v-avatar",{attrs:{size:40}},[e("img",{attrs:{src:t.data.author.avatar_url,alt:t.data.author.loginname}})]),e("span",{staticStyle:{"text-indent":"1em"}},[t._v(t._s(t.data.author.loginname))])],1),e("div",{class:t.$style.right})],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],class:t.$style.content,attrs:{tag:"main",to:"/topic/"+t.data.id}},[e("p",[t._v(t._s(t.data.title))])]),e("v-divider"),e("footer",{class:t.$style.footer},[e("v-btn",{attrs:{flat:"",round:"",disabled:""}},[t._v(t._s(t.data.visit_count)+"浏览")]),e("v-btn",{attrs:{flat:"",round:"",disabled:""}},[t._v(t._s(t.data.reply_count)+"评论")]),e("v-btn",{attrs:{flat:"",round:"",disabled:""}},[t._v("\n      "+t._s(t._f("fromNow")(t.data.last_reply_at))+"\n    ")])],1)],1)},i=[],o=e("c665"),n=e("dc0a"),s=e("d328"),c=e("11d9"),l=e("9ab4"),u=e("60a3"),d=function(t){function a(){return Object(o["a"])(this,a),Object(s["a"])(this,Object(c["a"])(a).apply(this,arguments))}return Object(n["a"])(a,t),a}(u["c"]);l["a"]([Object(u["b"])({required:!0})],d.prototype,"data",void 0),d=l["a"]([u["a"]],d);var p=d,_=p,v=e("90f0"),f=e("2877");function b(t){this["$style"]=v["default"].locals||v["default"]}var h=Object(f["a"])(_,r,i,!1,b,null,null);h.options.__file="BaseTopic.vue";a["a"]=h.exports},"90f0":function(t,a,e){"use strict";var r=e("625b"),i=e.n(r);a["default"]=i.a},a4de:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.topics,function(t){return e("BaseTopic",{key:t.id,attrs:{data:t}})}))},i=[],o=e("c665"),n=e("dc0a"),s=e("d328"),c=e("11d9"),l=e("9ab4"),u=e("60a3"),d=e("4bb5"),p=e("6011"),_=e("6e95"),v=Object(d["d"])(p["a"]),f=function(t){function a(){return Object(o["a"])(this,a),Object(s["a"])(this,Object(c["a"])(a).apply(this,arguments))}return Object(n["a"])(a,t),a}(u["c"]);l["a"]([v.State(function(t){return t.author?t.author.recent_topics:[]})],f.prototype,"topics",void 0),f=l["a"]([Object(u["a"])({components:{BaseTopic:_["a"]}})],f);var b=f,h=b,y=e("2877"),m=Object(y["a"])(h,r,i,!1,null,null,null);m.options.__file="RecentTopic.vue";a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-0def49eb.ef15a64d.js.map