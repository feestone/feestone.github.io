webpackJsonp([1],{"+JAn":function(t,e){},"2s0k":function(t,e){},"4fK3":function(t,e){},"60M9":function(t,e){},"9PWt":function(t,e){},Cz8s:function(t,e,s){"use strict";var i={name:"searbox",props:["listData","emitName"],data:function(){return{searchText:"",searchComplete:[]}},created:function(){var t=this;document.onkeydown=function(e){var s=window.event||e;13==(s.keyCode||s.which||s.charCode)&&t.searchCon(t.searchText)}},methods:{searchCon:function(t){var e=this;e.searchComplete=[],this.listData.forEach(function(s){-1!=s.title.indexOf(t.trim())&&e.searchComplete.push(s)}),e.$parent.$emit(e.emitName,e.searchComplete)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searbox"},[s("div",{staticClass:"content clearfix"},[s("router-link",{staticClass:"logo",attrs:{to:"/",title:"返回主页"}}),t._v(" "),s("div",{staticClass:"search"},[s("div",{staticClass:"clearfix"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"searchInt",attrs:{type:"text"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),s("div",{staticClass:"searchIcon",on:{click:function(e){return t.searchCon(t.searchText)}}})])])],1)])},staticRenderFns:[]};var n=s("VU/8")(i,a,!1,function(t){s("2s0k")},"data-v-2bd5c30f",null);e.a=n.exports},FAIf:function(t,e){},"N2/d":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footerBox"},[this._v("©Feest"),e("span",[this._v("--")]),this._v("笔耕不辍")])}]};var n={name:"App",components:{Footer:s("VU/8")({},a,!1,function(t){s("c389")},"data-v-21b2c3a8",null).exports},created:function(){}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var o=s("VU/8")(n,c,!1,function(t){s("eYG8")},null,null).exports,r=s("/ocq"),u=s("Ued4"),l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[t.islook?t._e():s("div",{staticClass:"webcomBg"},[s("div",{staticClass:"welcomePages"},[s("div",{staticClass:"welcome",on:{click:function(e){return t.comeIn()}}},[t._v("欢迎")])])]),t._v(" "),s("div",{staticClass:"home",class:t.islook?"blockImport":""},[s("div",{staticClass:"content"},[s("div",{staticClass:"blogIndex"},[t._m(0),t._v(" "),s("ul",{staticClass:"nav"},[s("li",{staticClass:"navList",class:1==t.navActive?"active":"",on:{click:function(e){return t.navTab()}}},[t._v("学习积累")])]),t._v(" "),1==t.navActive?s("ul",{staticClass:"learnSubset"},[t._l(t.learnSubsetList,function(e){return s("li",{key:e.title},[s("router-link",{attrs:{to:e.url}},[t._v(t._s(e.title))])],1)}),t._v(" "),!t.learnSubsetList||t.learnSubsetList.length<=0?s("div",{staticClass:"noData"}):t._e()],2):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logobox"},[e("img",{staticClass:"indexlogo",attrs:{src:s("OYj3"),alt:""}})])}]};var v=function(t){s("FAIf")},p=s("VU/8")(u.a,l,!1,v,"data-v-163aaf3e",null).exports,d=s("Cz8s"),m=s("spLH"),h={pageList:[{title:"GitHub pages + Vue-cli搭建个人博客",time:"2019-12-25 18:23",Introduction:"一直没有使用过Git，想着看看Git，毕竟是主流的版本管理工具，在这期间意外发现了GitHub pages，一个免费的空间，可以放一些文件，查了一下可以搭建博客。这种机会怎么可以错过。本文介绍下我搭建的过程。",todetailUrl:"/vueList/vue01"},{title:"Vue的项目搭建",time:"2019-12-27 14:22",Introduction:"现在vue作为前端必会的技能，简单的介绍下vue的项目搭建流程。主要是vue-cli的使用。",todetailUrl:"/vueList/vue02"},{title:"Vue的路由设置和获取",time:"2019-12-27 16:30",Introduction:"记录下vue路由的设置和获取的集中方法。",todetailUrl:"/vueList/vue03"}]},g={components:{searBox:d.a,pagintion:m.a},data:function(){return{pubList:h.pageList,searchPagesList:h.pageList,searchList:h.pageList,emitName:"vuelist",listType:"pages"}},created:function(){var t=this;this.$on(this.emitName,function(e){t.searchList=e,t.searchPagesList=e}),this.$on(this.listType,function(e){t.searchList=e})},methods:{}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vueList"},[s("searBox",{attrs:{listData:t.pubList,emitName:t.emitName}}),t._v(" "),s("div",{staticClass:"content"},[s("ul",{staticClass:"ListUl"},t._l(t.searchList,function(e){return s("li",[s("h4",{staticClass:"title"},[s("router-link",{attrs:{to:e.todetailUrl}},[t._v(t._s(e.title))])],1),t._v(" "),s("p",{staticClass:"intr"},[t._v(t._s(e.Introduction))]),t._v(" "),s("p",{staticClass:"time"},[t._v("发布时间："+t._s(e.time))])])}),0),t._v(" "),t.searchList&&t.searchList.length>10?s("pagintion",{attrs:{listData:t.searchPagesList,emitName:t.listType}}):t._e(),t._v(" "),!t.searchList||t.searchList.length<=0?s("div",{staticClass:"noData"}):t._e()],1)],1)},staticRenderFns:[]};var f=s("VU/8")(g,A,!1,function(t){s("gUE+")},"data-v-27685714",null).exports,_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detailHeader"},[s("div",{staticClass:"content"},[s("a",{staticClass:"backBtn",on:{click:function(e){return t.goback()}}},[t._v("返回")])])])},staticRenderFns:[]};var C=s("VU/8")({name:"searbox",data:function(){return{}},created:function(){},methods:{goback:function(){this.$router.go(-1)}}},_,!1,function(t){s("60M9")},"data-v-91d86b9c",null).exports,b={components:{detailHeader:C},created:function(){}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-01"},[e("detailHeader"),this._v(" "),this._m(0),this._v(" "),e("div",{attrs:{id:"toTop"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"detailCont"},[s("h3",[t._v("GitHub Pages + Vue-cli 搭建个人博客")]),t._v(" "),s("p",[t._v("学习Git的时候，接触了GitHub，意外发现了GitHub Pages这个东西，这是一个GitHub提供的免费空间。可利用这个空间来搭建博客网站，下面介绍一下我具体是怎么搭建的。")]),t._v(" "),s("p",[t._v("首先是在GitHub上开通一个带有GitHub pages 的仓库。")]),t._v(" "),s("p",[t._v("首先注册GitHub 账号，这步不做过多介绍。")]),t._v(" "),s("p",[t._v("有了账号之后，接下来要新建一个仓库")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B6/wKgBOV4EZI6AK3CjAABgG4ON83M862.jpg"}}),t._v(" "),s("p",[t._v("新建仓库的时候需要注意的是仓库的名称，一定要和自己的GitHub账户的用户名一直，并且加上 .github.io 整体的名称就是 yourUserName.github.io ,这个很关键，一定加上.github.io，不然的话就不能用以用户名的域名访问了。就会出现层级。变成yourUserName.github.io/仓库名。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B7/wKgBOV4EZSmASaGeAAM0ByLWxVI506.png"}}),t._v(" "),s("p",[t._v("为你的仓库开通GitHub pages，进入仓库，点击setting ，向下滑动，会看见GitHubpages。这里已经默认开通了，如果没有开通的话，会让你选择一个分支，选择后，就开通了。上方会显示开通后的访问地址。点击地址就可以访问了。默认访问仓库里的index文件。（但是如果你的仓库里没有代码文件的话，打开应该是空的吧。）。到这里GitHub里里面的准备工作就做好了。接下来需要写代码上传到你的仓库了。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B7/wKgBOV4EZVCANr8jAACudezR29M543.png"}}),t._v(" "),s("p",[t._v("\n        接下来为仓库里添加代码文件。向GitHub里提交代码，当然是需要Git了。如果能不熟练运用Git，而且英文不好的话，建议使用Git可视化工具 “TortoiseGit”，下载这两个一个安装程序，一个汉化包。安装过程也很简单，一直下一步就可以。先安装Git，然后在安装汉化包。\n        下载地址：\n        "),s("a",{attrs:{target:"_blank",href:"https://tortoisegit.org/download/"}},[t._v("https://tortoisegit.org/download/")])]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B8/wKgBOV4EZZWAG6e_AAFg8Mubktk198.png"}}),t._v(" "),s("p",[t._v("\n        7.空间有了，上传工具也有了，就差代码了。接下来就是搭建Vue，写Vue的代码，这里不做Vue的搭建过程，假设我们都会。下面就是搭建好的项目。假设代码我们已经写好，接下来我们就该向GitHub上传代码。\n        dist 是我代码打包之后的文件夹。进入这个文件夹。\n      ")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B8/wKgBOV4EZbSAcNN6AACOWOxJa1s285.png"}}),t._v(" "),s("p",[t._v("进入dist文件夹，正常的打包后只有static 和index.html，我这里多出来的是我需要的另外的文件，大家可忽略。")]),t._v(" "),s("p",[t._v("接下来我们需要创建版本库。点击鼠标右键，点击“在这里创建版本库”，这里会出现这个弹窗，我们不要勾选那个复选框。点击确定后会提示完成。下面我们就可以向提交代码了")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B8/wKgBOV4EZdyAfE9RAACJHZ9N5QQ501.png"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B8/wKgBOV4EZe6ABY6pAABi6BRPv8Y540.png"}}),t._v(" "),s("p",[t._v("9.点击右键会出现，同步和提交。我们需要拉取Github的代码，因为直接提交的话可能会提交不了，先拉取。右键点击同步，我们填写下远端地址，点击保存、确定，回到上一弹窗，这时候要选择分支，如果GitHub上没有新建分支的话，默认就一个master。我们选择master，点击拉取。这一步可能会弹窗让填写用户名密码，需要填写GitHub的账号密码就好。等待拉取成功。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B9/wKgBOV4EZgqAZcxiAABMnpnDJq4900.png"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B9/wKgBOV4EZiCAHqMiAADGf96o5Po545.png"}}),t._v(" "),s("p",[t._v("拉取成功后，我们就可以提交了，右键选择提交，选择你要上传的文件，点击提交并推送，会出现让你填写分支和远端的地址（就是拉取仓库代码的Git地址。）")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B9/wKgBOV4EZjyADO80AAD4w1TjaVA457.png"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B9/wKgBOV4EZk6ASWhEAABQy6Wlvwc772.png"}}),t._v(" "),s("p",[t._v("我们填写下远端地址，点击保存、确定，回到上一弹窗，这时候要选择分支，如果GitHub上没有新建分支的话，默认就一个master。我们选择master，点击确定，等待上传成功。成功之后可以去GitHub上刷新你的仓库，会发现代码已经上传成功了。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/BA/wKgBOV4EZmqAb08bAADGf96o5Po618.png"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/BA/wKgBOV4EZnaAAZEWAABRuNlLIv4256.png"}}),t._v(" "),s("p",[t._v("这时候就可以取访问Github pages里的访问地址了。这是我的。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/BA/wKgBOV4EZpGAAh30AABjA19srQk635.png"}})])])}]};var N=s("VU/8")(b,B,!1,function(t){s("X3No")},"data-v-63286b62",null).exports,L={components:{detailHeader:C},created:function(){console.log(this.$route.params.userId)}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-01"},[e("detailHeader"),this._v(" "),this._m(0),this._v(" "),e("div",{attrs:{id:"toTop"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"detailCont"},[s("h3",[t._v("Vue的项目搭建")]),t._v(" "),s("p",[t._v("现在社会上对前端的要求都越来越高了，前端的知识又很复杂，框架之类的多很多，拿Vue来说，目前应该是前端必会的技能之一了。下面简单介绍下Vue的项目流程。")]),t._v(" "),s("p",[t._v("首先，先了解做Vue项目都所需要的工具。下面奉上所需工具及下载地址。")]),t._v(" "),s("p",[t._v("编辑器：VScode 。"),s("a",{attrs:{href:"https://code.visualstudio.com/"}},[t._v("https://code.visualstudio.com/")]),t._v(" (这个编辑器挺强大的，可安装各种插件。也支持各个语言的编程。下文也会用这个来做示例。)")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/8D/wKgBOV4FpfeAGq05AAGO0bVl6dg548.jpg"}}),t._v(" "),s("p",[t._v("node.js: "),s("a",{attrs:{href:"http://nodejs.cn/download/"}},[t._v("http://nodejs.cn/download/")]),t._v(" (安装vue需要运行node命令 npm等。)")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/8E/wKgBOV4FptiANW85AAEz77fp-RM444.jpg"}}),t._v(" "),s("p",[t._v("有了这两个就可以开始搭建了。软件安装过程就不做介绍了。基本都是下一步，下一步。一直到结束。开始搭建。")]),t._v(" "),s("p",[t._v('1.新建个空文件夹。用vscode打开，打开vscode的终端，我选择这个编辑器的原因就是自带终端。打开终端有两种常用方法，在文件夹上右键，会出现在终端打开，还有就是快捷键"ctrl+~"，~是tab键上面的键子。这两种方式都可以。打开后应该是这样的。')]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/90/wKgBOV4FqLaAPHoCAAChin9mdSU401.jpg"}}),t._v(" "),s("p",[t._v("2.安装vue-cli。使用命令"),s("span",{staticClass:"code"},[t._v("npm install --global vue-cli")]),t._v(" 安装好之后，可以用"),s("span",{staticClass:"code"},[t._v("vue -V")]),t._v("来检查安装的版本。需要注意的是这里查看的版本是vue-cli的版本，具体查看使用的vue版本，是要到搭建好项目的package.json文件里去看的。不要混淆这两个版本。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/92/wKgBOV4FqsuAZuBNAAExAayJzJU772.jpg"}}),t._v(" "),s("p",[t._v("3.安装好之后，我们来利用vue-cli 创建一个基于webpack的项目。使用命令 "),s("span",{staticClass:"code"},[t._v("vue init webpack projectName")]),t._v(",projectName是你的项目名称，可以随便起。运行后会让你设置一些项目信息及配置。除了严禁模式的，一路回车就好。项目名称不允许有大写，如果想大写的会大写字母钱加'-'横杠就好。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/95/wKgBOV4FrR2AJPDjAACNvazLMeE546.jpg"}}),t._v(" "),s("p",[t._v("4.项目初始化成功的话，你的目录会多出一些文件，安装成功后，终端会给出提示，进入你的项目目录，启用"),s("span",{staticClass:"code"},[t._v("npm run dev")]),t._v(",就可以启动你的vue项目。启动成功后，出现连接，按住ctrl点击地址会自动访问。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/96/wKgBOV4FrgGAfkr-AAHCs8dqaug562.jpg"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/97/wKgBOV4FrpaAb5wzAAEBIjQaARw835.jpg"}}),t._v(" "),s("p",[t._v("5.访问成功。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/97/wKgBOV4FrvmAK6HZAACYCAjXCBA062.jpg"}}),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("在说一些平时会用到的一些配置文件的修改。现在就想起什么写什么，以后再补充。")]),t._v(" "),s("p",[t._v('1.项目的运行命令和打包命令的修改。这两个命令是可以修改的，不是固定死的。可以在package.json里修改启动命令。前面的"dev" 和"build" 可以随便修改。修改后启动命令就相应的修改就好了。'),s("span",{staticClass:"code"},[t._v("npm run 修改后")]),t._v(",也是可以成功的。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/9C/wKgBOV4FsYmAEDMoAAFk8FomNHw448.jpg"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/9E/wKgBOV4FskCAeylyAAGCOR9Mypo332.jpg"}}),t._v(" "),s("p",[t._v("2.在平时做项目中，如果和别人协作，需要让其他人能访问到自己的项目。这时候，修改一下config/index.js里的host地址就好，端口也是可以修改的。将host地址改为自己的电脑ip。这时候别人就可以访问你的项目了。查看自己电脑ip使用 "),s("span",{staticClass:"code"},[t._v("ipconfig")])]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/A0/wKgBOV4Fs4-Acu7TAAD7WuSuqKQ856.jpg"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/A1/wKgBOV4Fs9mAWj8GAACZ6rwj3MI386.jpg"}}),t._v(" "),s("p",[t._v("3.开发过程中背景图显示正常，打包上传后，背景图404。大多数原因是config/index.js里的assetsPublicPath路径不对导致的。仔细检查什么相对路径，绝对路径是不是写错了。对应修改即可")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/A5/wKgBOV4Ftl-AVpQqAAFGyuJO6CI146.jpg"}}),t._v(" "),s("p",[t._v("4.修改打包后静态资源路径的修改,也是在config/index.js 修改index的路径和assetsRoot的路径。assetsRoot后面就是生成的文件存放的文件夹，可以随意更改。注意index的地址也对应修改。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B2/A9/wKgBOV4FuJ6AWffGAAE4VZqrCF4771.jpg"}})])])}]};var k=s("VU/8")(L,w,!1,function(t){s("+JAn")},"data-v-46b495cc",null).exports,I={components:{detailHeader:C},created:function(){}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-01"},[e("detailHeader"),this._v(" "),this._m(0),this._v(" "),e("div",{attrs:{id:"toTop"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"detailCont"},[s("h3",[t._v("Vue路由的设置及获取")]),t._v(" "),s("p",[t._v("之前对路由这块不是很清楚，现在好好整理一下路由的知识。")]),t._v(" "),s("p",[t._v("vue设置路由参数html中和js中都有2中方式。jQuery和params。")]),t._v(" "),s("p",[t._v("1.html中")]),t._v(" "),s("div",{staticClass:"pleft-15"},[s("p",[t._v("\n          (1).普通跳转：直接在to中填写跳转路径。\n          "),s("span",{staticClass:"code"},[t._v('router-link to="/index"')])]),t._v(" "),s("p",[t._v("\n          (2).query传参跳转：\n          "),s("span",{staticClass:"code"},[t._v("router-link :to=\"{path:'/index', query:{val:'参数值'}}\"")]),t._v(",这里的to里面放的是一组对象，由path和query组成，path为路径，query为传参。\n        ")]),t._v(" "),s("p",[t._v("\n          (3).params传参跳转：\n          "),s("span",{staticClass:"code"},[t._v("router-link :to=\"{name:'/index', params:{val:'参数值'}}\"")]),t._v(",这里的to里面放的也是一组对象，由name和params组成，name为路由里的name名称，会跳转到和name对应的路径，params为传参。\n        ")])]),t._v(" "),s("p",[t._v("2.js中")]),t._v(" "),s("div",{staticClass:"pleft-15"},[s("p",[t._v("\n          (1).普通跳转,直接在push()里写路径\n          "),s("span",{staticClass:"code"},[t._v("this.$router.push('/index')")])]),t._v(" "),s("p",[t._v("(2).query 传参跳转："),s("span",{staticClass:"code"},[t._v("this.$router.push({path:'/index',query:{val:'1212'}})")])]),t._v(" "),s("p",[t._v("(2).params 传参跳转："),s("span",{staticClass:"code"},[t._v("this.$router.push({name:'/index',params:{val:'1212'}})")])])]),t._v(" "),s("p",[t._v("接收值：用哪种方式传的参，就用哪种方式接收参数。")]),t._v(" "),s("div",{staticClass:"pleft-15"},[s("p",[t._v("(1).query方式传参，接收参数用："),s("span",{staticClass:"code"},[t._v("this.$route.query.val")])]),t._v(" "),s("p",[t._v("(1).params方式传参，接收参数用："),s("span",{staticClass:"code"},[t._v("this.$route.params.val")])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("说一下两个传参的不同之处")]),t._v(" "),s("p",[t._v("query传参，参数会显示在地址栏上，但是params的参数就不会显示在地址栏上。")]),t._v(" "),s("p",[t._v("$router 和 $route")]),t._v(" "),s("p",[t._v("$router用于发送参数。$route用于接收参数。")])])])}]};var x=s("VU/8")(I,M,!1,function(t){s("9PWt")},"data-v-d6bd9742",null).exports,j=s("az1u"),E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vueList"},[s("searBox",{attrs:{listData:t.pubList,emitName:t.emitName}}),t._v(" "),s("div",{staticClass:"content"},[s("ul",{staticClass:"ListUl"},t._l(t.searchList,function(e){return s("li",[s("h4",{staticClass:"title"},[s("router-link",{attrs:{to:e.todetailUrl}},[t._v(t._s(e.title))])],1),t._v(" "),s("p",{staticClass:"intr"},[t._v(t._s(e.Introduction))]),t._v(" "),s("p",{staticClass:"time"},[t._v("发布时间："+t._s(e.time))])])}),0),t._v(" "),t.searchList&&t.searchList.length>10?s("pagintion",{attrs:{listData:t.searchPagesList,emitName:t.listType}}):t._e(),t._v(" "),!t.searchList||t.searchList.length<=0?s("div",{staticClass:"noData"}):t._e()],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"secret"},[e("span",[this._v("你一定是来回忆的")])])}]};var T=function(t){s("N2/d")},S=s("VU/8")(j.a,E,!1,T,"data-v-35ac4a87",null).exports;i.default.use(r.a);var y=new r.a({routes:[{path:"/",name:"Index",component:p},{path:"/vueList",name:"vueList",component:f},{path:"/vueList/vue01",name:"vue01",component:N},{path:"/vueList/vue02",name:"vue02",component:k},{path:"/vueList/vue03",name:"vue03",component:x},{path:"/life/lifeList",name:"lifeList",component:S}]}),G=s("zL8q"),O=s.n(G),V=(s("tvR6"),s("7t+N"),s("t+Gu"),s("y6zN"),s("//Fk")),Z=s.n(V),R=s("mvHQ"),D=s.n(R),H=s("mtWM"),J=s("mw3O"),F=H.create({timeout:2e4,withCredentials:!0,baseURL:"/"});function K(t,e,s,i,a,n){F({method:t,url:e,data:"POST"===t||"PUT"===t?"payload"==n?s:J.stringify(s):null,params:"GET"===t||"DELETE"===t?s:null}).then(function(t){t?i&&i(t.data):a?a(t.data):console.log("error: "+D()(t.data))}).catch(function(t){if(console.log(e.indexOf("delay")),t.response){switch(t.response.status){case 401:G.Message.error("用户名或密码不正确!");break;case 404:G.Message.error("请求的资源不存在!");break;case 500:G.Message.error({type:"success",message:t.response.data})}return Z.a.reject(t)}return t.message.includes("timeout")&&-1==e.indexOf("delay")?(G.Message.error("请求超时,请检查网络!"),Z.a.reject(t)):Z.a.reject(t)})}var W={get:function(t,e,s,i,a){return K("GET",t+"?access_token="+sessionStorage.getItem("access_token"),e,s,i,a)},post:function(t,e,s,i,a){return K("POST",t+"?access_token="+sessionStorage.getItem("access_token"),e,s,i,a)},put:function(t,e,s,i,a){return K("PUT",t+"?access_token="+sessionStorage.getItem("access_token"),e,s,i,a)},delete:function(t,e,s,i,a){return K("DELETE",t+"?access_token="+sessionStorage.getItem("access_token"),e,s,i,a)}};i.default.config.productionTip=!1,i.default.use(O.a),i.default.prototype.$api=W,new i.default({el:"#app",router:y,components:{App:o},template:"<App/>"})},OYj3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABdCAYAAAAsRtHAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF3WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMi0yN1QwOTo1NjoyNSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTItMjdUMTA6MTk6MjcrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMjdUMTA6MTk6MjcrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2Y4NjRmZDEtN2VkNC05NDQ3LTgzZmUtN2ZhODg2OWJhYTEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmE4ZTk5NGM3LTNmMzktZDQ0Ny1iMWZkLTYzYjg5YTU0MzU0YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmE4ZTk5NGM3LTNmMzktZDQ0Ny1iMWZkLTYzYjg5YTU0MzU0YyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YThlOTk0YzctM2YzOS1kNDQ3LWIxZmQtNjNiODlhNTQzNTRjIiBzdEV2dDp3aGVuPSIyMDE5LTEyLTI3VDA5OjU2OjI1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Zjg2NGZkMS03ZWQ0LTk0NDctODNmZS03ZmE4ODY5YmFhMTMiIHN0RXZ0OndoZW49IjIwMTktMTItMjdUMTA6MTk6MjcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IpU+ZgAAC/ZJREFUeJztnXmQFdUVxn+z4EDJDCiMgE4CDpsaRwPirphSoxaFUVE0i0m5xhiTuCVKyqTKqFhk0yRKFo1UEpcQozFqmcJoolYwboi7qEFEcUERN2YUZODLH6cf9tx3+q3zeD3LV3VrprvPu7f7u7fvvX2X79RIogJoAY4AxgEjgJFAc/T/cKCmEomWgY3AauDNKLwV/V0K3Aq82t0J1nQj8S3AicCxwKeAO4FHgZXAa3zyMKuAiuR2GajFCsQI4NPArsAUoA0YCzwD/BW4BnuWstEdxLcBs4EJwB1YCbkf2FBuxClB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"},Ued4:function(t,e,s){"use strict";(function(t){e.a={name:"welcome",data:function(){return{navActive:0,learnSubsetList:[{title:"VUE",url:"/vueList"}],lifeSubsetList:[],islook:!1}},created:function(){var t=this;this.islook=sessionStorage.getItem("isLook")||!1,document.onkeydown=function(e){var s=window.event||e,i=s.keyCode||s.which||s.charCode;(e.ctrlKey||e.metaKey)&&13==i&&t.$router.push("/life/lifeList")}},mounted:function(){},methods:{comeIn:function(){t(".webcomBg").fadeOut(1500,function(){t(".home").fadeIn(1500)}),sessionStorage.setItem("isLook",!0)},navTab:function(){0==this.navActive?this.navActive=1:this.navActive=0}}}}).call(e,s("7t+N"))},X3No:function(t,e){},az1u:function(t,e,s){"use strict";(function(t){var i=s("Cz8s"),a=s("spLH"),n=s("kydZ");e.a={components:{searBox:i.a,pagintion:a.a},data:function(){return{pubList:n.a.pageList,searchPagesList:n.a.pageList,searchList:n.a.pageList,emitName:"vuelist",listType:"pages"}},created:function(){var e=this;setTimeout(function(){t(".secret").fadeOut(5e3)}),this.$on(this.emitName,function(t){e.searchList=t,e.searchPagesList=t}),this.$on(this.listType,function(t){e.searchList=t})},methods:{}}}).call(e,s("7t+N"))},c389:function(t,e){},eYG8:function(t,e){},"gUE+":function(t,e){},kydZ:function(t,e,s){"use strict";e.a={pageList:[{title:"详情",time:"2019-12-25 18:23",Introduction:"一直没有使用过Git，想着看看Git，毕竟是主流的版本管理工具，在这期间意外发现了GitHub pages，一个免费的空间，可以放一些文件，查了一下可以搭建博客。这种机会怎么可以错过。本文介绍下我搭建的过程。",todetailUrl:"/vueList/vue01"}]}},spLH:function(t,e,s){"use strict";var i={name:"pagination",props:["listData","emitName"],data:function(){return{pageNo:10,total:"",pagesInfo:[],starNum:0,endNum:10,searchComplete:[],nowNum:0}},created:function(){this.pageInit()},methods:{pageInit:function(){var t=this.listData.length;this.pagesInfo=[],this.total=Math.ceil(t/this.pageNo);for(var e=0;e<this.total;e++)this.pagesInfo.push({num:e});this.getList()},getList:function(t){var e=this;void 0!==t&&(e.starNum=0==t?0:t*e.pageNo,e.endNum=0==t?e.pageNo:(t+1)*e.pageNo),e.nowNum=t||0,e.searchComplete=[],this.listData.forEach(function(t,s){s+1>e.starNum&&s<e.endNum&&e.searchComplete.push(t)}),e.$parent.$emit(e.emitName,e.searchComplete)},leftPage:function(){this.nowNum>0&&this.getList(this.nowNum-1)},rightPage:function(){this.nowNum<this.total-1&&this.getList(this.nowNum+1)}},watch:{listData:function(t,e){t!=e&&this.pageInit()}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[s("ul",{staticClass:"paginationUl"},[s("li",{staticClass:"leftIcon",on:{click:function(e){return t.leftPage()}}},[t._v("<")]),t._v(" "),t._l(t.pagesInfo,function(e){return s("li",{staticClass:"num",class:e.num==t.nowNum?"active":"",on:{click:function(s){return t.getList(e.num)}}},[t._v(t._s(e.num+1))])}),t._v(" "),s("li",{staticClass:"rightIcon",on:{click:function(e){return t.rightPage()}}},[t._v(">")]),t._v(" "),s("span",[t._v("共"+t._s(t.total)+"页")])],2)])},staticRenderFns:[]};var n=s("VU/8")(i,a,!1,function(t){s("4fK3")},"data-v-2ab5c15e",null);e.a=n.exports},"t+Gu":function(t,e){},tvR6:function(t,e){},y6zN:function(t,e,s){(function(t){t("body").on("click",".detailCont img",function(){var e='<div class="imgShadow">  <img src="'+t(this).attr("src")+'" alt="">';t("body").append(e).addClass("static"),t(".imgShadow").fadeIn(500),t("body")}),t("body").on("click",".imgShadow",function(){t("body").removeClass("static"),t(".imgShadow").fadeOut(500,function(){t(".imgShadow").remove()})}),t(window).scroll(function(){t(window).scrollTop()>1e3?t("#toTop").fadeIn(500):t("#toTop").fadeOut(500)}),t("body").on("click","#toTop",function(){return t("body,html").animate({scrollTop:0},1e3),!1})}).call(e,s("7t+N"))}},["NHnr"]);
//# sourceMappingURL=app.0ffc05d20ec88c0397d8.js.map