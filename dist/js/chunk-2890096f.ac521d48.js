(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2890096f"],{bd0c:function(t,n,e){},c7ca:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-main",[e("v-fade-transition",{attrs:{mode:"out-in"}},[e("router-view")],1)],1)},i=[],o={name:"BaseView"},s=o,r=e("0c7c"),c=e("6544"),d=e.n(c),u=e("0789"),p=(e("bd0c"),e("d10f")),f=p["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,e=t.top,a=t.right,i=t.footer,o=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:"".concat(e+n,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(i+o+s,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var n={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,n,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),l=Object(r["a"])(s,a,i,!1,null,null,null);n["default"]=l.exports;d()(l,{VFadeTransition:u["b"],VMain:f})},d10f:function(t,n,e){"use strict";var a=e("2b0e");n["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-2890096f.ac521d48.js.map