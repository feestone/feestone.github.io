webpackJsonp([2],{"2NXm":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("Ued4"),n={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"index"},[i.islook?i._e():s("div",{staticClass:"webcomBg"},[s("div",{staticClass:"welcomePages"},[s("div",{staticClass:"welcome",on:{click:function(t){return i.comeIn()}}},[i._v("欢迎")])])]),i._v(" "),s("div",{staticClass:"home",class:i.islook?"blockImport":""},[s("div",{staticClass:"content"},[s("div",{staticClass:"blogIndex"},[s("div",{staticClass:"logobox",on:{click:function(t){return i.goLife()}}},[s("img",{staticClass:"indexlogo",attrs:{src:e("OYj3"),alt:""}})]),i._v(" "),s("ul",{staticClass:"nav"},[s("li",{staticClass:"navList",class:1==i.navActive?"active":"",on:{click:function(t){return i.navTab()}}},[i._v("学习积累")])]),i._v(" "),1==i.navActive?s("ul",{staticClass:"learnSubset"},[i._l(i.learnSubsetList,function(t){return s("li",{key:t.title},[s("router-link",{attrs:{to:t.url}},[i._v(i._s(t.title))])],1)}),i._v(" "),!i.learnSubsetList||i.learnSubsetList.length<=0?s("div",{staticClass:"noData"}):i._e()],2):i._e()])])]),i._v(" "),s("div",{staticClass:"lifeAlert",class:{isShow:i.lifeAlert}},[s("div",{staticClass:"lifeShadow",on:{click:function(t){return i.hideLife()}}}),i._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:i.lifePass,expression:"lifePass"}],attrs:{type:"text"},domProps:{value:i.lifePass},on:{change:function(t){return i.chackPass()},input:function(t){t.target.composing||(i.lifePass=t.target.value)}}})])])},staticRenderFns:[]};var c=function(i){e("aSLB")},a=e("VU/8")(s.a,n,!1,c,"data-v-039d3655",null);t.default=a.exports},OYj3:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABdCAYAAAAsRtHAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF3WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMi0yN1QwOTo1NjoyNSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTItMjdUMTA6MTk6MjcrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMjdUMTA6MTk6MjcrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2Y4NjRmZDEtN2VkNC05NDQ3LTgzZmUtN2ZhODg2OWJhYTEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmE4ZTk5NGM3LTNmMzktZDQ0Ny1iMWZkLTYzYjg5YTU0MzU0YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmE4ZTk5NGM3LTNmMzktZDQ0Ny1iMWZkLTYzYjg5YTU0MzU0YyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YThlOTk0YzctM2YzOS1kNDQ3LWIxZmQtNjNiODlhNTQzNTRjIiBzdEV2dDp3aGVuPSIyMDE5LTEyLTI3VDA5OjU2OjI1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Zjg2NGZkMS03ZWQ0LTk0NDctODNmZS03ZmE4ODY5YmFhMTMiIHN0RXZ0OndoZW49IjIwMTktMTItMjdUMTA6MTk6MjcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IpU+ZgAAC/ZJREFUeJztnXmQFdUVxn+z4EDJDCiMgE4CDpsaRwPirphSoxaFUVE0i0m5xhiTuCVKyqTKqFhk0yRKFo1UEpcQozFqmcJoolYwboi7qEFEcUERN2YUZODLH6cf9tx3+q3zeD3LV3VrprvPu7f7u7fvvX2X79RIogJoAY4AxgEjgJFAc/T/cKCmEomWgY3AauDNKLwV/V0K3Aq82t0J1nQj8S3AicCxwKeAO4FHgZXAa3zyMKuAiuR2GajFCsQI4NPArsAUoA0YCzwD/BW4BnuWstEdxLcBs4EJwB1YCbkf2FBuxClB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"},Ued4:function(i,t,e){"use strict";(function(i){t.a={name:"welcome",data:function(){return{navActive:0,learnSubsetList:[{title:"HTML",url:"/htmlList"},{title:"VUE",url:"/vueList"}],lifeSubsetList:[],islook:!1,goLifeNum:0,lifeAlert:!1}},created:function(){var i=this;this.islook=sessionStorage.getItem("isLook")||!1,document.onkeydown=function(t){var e=window.event||t,s=e.keyCode||e.which||e.charCode;(t.ctrlKey||t.metaKey)&&13==s&&i.$router.push("/life/lifeList")},this.$parent.$emit("nofoot",!1),localStorage.removeItem("isShowGOmi")},mounted:function(){i(".welcomePages").height(document.body.offsetHeight)},beforeDestroy:function(){this.$parent.$emit("nofoot",!0)},methods:{comeIn:function(){i(".webcomBg").fadeOut(1500,function(){i(".home").fadeIn(1500)}),sessionStorage.setItem("isLook",!0)},navTab:function(){0==this.navActive?this.navActive=1:this.navActive=0},goLife:function(){this.isPc()||(this.goLifeNum++,this.goLifeNum>10&&(this.lifeAlert=!0))},isPc:function(){for(var i=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],e=!0,s=0;s<t.length;s++)if(i.indexOf(t[s])>0){e=!1;break}return e},hideLife:function(){this.lifeAlert=!1},chackPass:function(){"634946"==this.lifePass&&this.$router.push("/life/lifeList")}}}}).call(t,e("7t+N"))},aSLB:function(i,t){}});