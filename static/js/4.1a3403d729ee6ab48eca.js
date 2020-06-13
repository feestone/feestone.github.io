webpackJsonp([4],{RwLA:function(t,a){},UInF:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={components:{detailHeader:s("LysL").a},created:function(){}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"vue-01"},[a("detailHeader"),this._v(" "),this._m(0),this._v(" "),a("div",{attrs:{id:"toTop"}})],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("div",{staticClass:"detailCont"},[s("h3",[t._v("Vue路由的设置及获取")]),t._v(" "),s("p",[t._v("之前对路由这块不是很清楚，现在好好整理一下路由的知识。")]),t._v(" "),s("p",[t._v("vue设置路由参数html中和js中都有2中方式。jQuery和params。")]),t._v(" "),s("p",[t._v("1.html中")]),t._v(" "),s("div",{staticClass:"pleft-15"},[s("p",[t._v("\n          (1).普通跳转：直接在to中填写跳转路径。\n          "),s("span",{staticClass:"code"},[t._v('router-link to="/index"')])]),t._v(" "),s("p",[t._v("\n          (2).query传参跳转：\n          "),s("span",{staticClass:"code"},[t._v("router-link :to=\"{path:'/index', query:{val:'参数值'}}\"")]),t._v(",这里的to里面放的是一组对象，由path和query组成，path为路径，query为传参。\n        ")]),t._v(" "),s("p",[t._v("\n          (3).params传参跳转：\n          "),s("span",{staticClass:"code"},[t._v("router-link :to=\"{name:'/index', params:{val:'参数值'}}\"")]),t._v(",这里的to里面放的也是一组对象，由name和params组成，name为路由里的name名称，会跳转到和name对应的路径，params为传参。\n        ")])]),t._v(" "),s("p",[t._v("2.js中")]),t._v(" "),s("div",{staticClass:"pleft-15"},[s("p",[t._v("\n          (1).普通跳转,直接在push()里写路径\n          "),s("span",{staticClass:"code"},[t._v("this.$router.push('/index')")])]),t._v(" "),s("p",[t._v("(2).query 传参跳转："),s("span",{staticClass:"code"},[t._v("this.$router.push({path:'/index',query:{val:'1212'}})")])]),t._v(" "),s("p",[t._v("(2).params 传参跳转："),s("span",{staticClass:"code"},[t._v("this.$router.push({name:'/index',params:{val:'1212'}})")])])]),t._v(" "),s("p",[t._v("接收值：用哪种方式传的参，就用哪种方式接收参数。")]),t._v(" "),s("div",{staticClass:"pleft-15"},[s("p",[t._v("(1).query方式传参，接收参数用："),s("span",{staticClass:"code"},[t._v("this.$route.query.val")])]),t._v(" "),s("p",[t._v("(1).params方式传参，接收参数用："),s("span",{staticClass:"code"},[t._v("this.$route.params.val")])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("说一下两个传参的不同之处")]),t._v(" "),s("p",[t._v("query传参，参数会显示在地址栏上，但是params的参数就不会显示在地址栏上。")]),t._v(" "),s("p",[t._v("$router 和 $route")]),t._v(" "),s("p",[t._v("$router用于发送参数。$route用于接收参数。")])])])}]};var r=s("VU/8")(e,v,!1,function(t){s("RwLA")},"data-v-d6bd9742",null);a.default=r.exports}});