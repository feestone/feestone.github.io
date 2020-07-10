webpackJsonp([7],{"J8o+":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var u={components:{detailHeader:s("LysL").a},created:function(){}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"vue-01"},[i("detailHeader"),this._v(" "),this._m(0),this._v(" "),i("div",{attrs:{id:"toTop"}})],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"content"},[s("div",{staticClass:"detailCont"},[s("h3",[t._v("GitHub Pages + Vue-cli 搭建个人博客")]),t._v(" "),s("p",[t._v("学习Git的时候，接触了GitHub，意外发现了GitHub Pages这个东西，这是一个GitHub提供的免费空间。可利用这个空间来搭建博客网站，下面介绍一下我具体是怎么搭建的。")]),t._v(" "),s("p",[t._v("首先是在GitHub上开通一个带有GitHub pages 的仓库。")]),t._v(" "),s("p",[t._v("首先注册GitHub 账号，这步不做过多介绍。")]),t._v(" "),s("p",[t._v("有了账号之后，接下来要新建一个仓库")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B6/wKgBOV4EZI6AK3CjAABgG4ON83M862.jpg"}}),t._v(" "),s("p",[t._v("新建仓库的时候需要注意的是仓库的名称，一定要和自己的GitHub账户的用户名一直，并且加上 .github.io 整体的名称就是 yourUserName.github.io ,这个很关键，一定加上.github.io，不然的话就不能用以用户名的域名访问了。就会出现层级。变成yourUserName.github.io/仓库名。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B7/wKgBOV4EZSmASaGeAAM0ByLWxVI506.png"}}),t._v(" "),s("p",[t._v("为你的仓库开通GitHub pages，进入仓库，点击setting ，向下滑动，会看见GitHubpages。这里已经默认开通了，如果没有开通的话，会让你选择一个分支，选择后，就开通了。上方会显示开通后的访问地址。点击地址就可以访问了。默认访问仓库里的index文件。（但是如果你的仓库里没有代码文件的话，打开应该是空的吧。）。到这里GitHub里里面的准备工作就做好了。接下来需要写代码上传到你的仓库了。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B7/wKgBOV4EZVCANr8jAACudezR29M543.png"}}),t._v(" "),s("p",[t._v("\n        接下来为仓库里添加代码文件。向GitHub里提交代码，当然是需要Git了。如果能不熟练运用Git，而且英文不好的话，建议使用Git可视化工具 “TortoiseGit”，下载这两个一个安装程序，一个汉化包。安装过程也很简单，一直下一步就可以。先安装Git，然后在安装汉化包。\n        下载地址：\n        "),s("a",{attrs:{target:"_blank",href:"https://tortoisegit.org/download/"}},[t._v("https://tortoisegit.org/download/")])]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B8/wKgBOV4EZZWAG6e_AAFg8Mubktk198.png"}}),t._v(" "),s("p",[t._v("\n        7.空间有了，上传工具也有了，就差代码了。接下来就是搭建Vue，写Vue的代码，这里不做Vue的搭建过程，假设我们都会。下面就是搭建好的项目。假设代码我们已经写好，接下来我们就该向GitHub上传代码。\n        dist 是我代码打包之后的文件夹。进入这个文件夹。\n      ")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B8/wKgBOV4EZbSAcNN6AACOWOxJa1s285.png"}}),t._v(" "),s("p",[t._v("进入dist文件夹，正常的打包后只有static 和index.html，我这里多出来的是我需要的另外的文件，大家可忽略。")]),t._v(" "),s("p",[t._v("接下来我们需要创建版本库。点击鼠标右键，点击“在这里创建版本库”，这里会出现这个弹窗，我们不要勾选那个复选框。点击确定后会提示完成。下面我们就可以向提交代码了")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B8/wKgBOV4EZdyAfE9RAACJHZ9N5QQ501.png"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B8/wKgBOV4EZe6ABY6pAABi6BRPv8Y540.png"}}),t._v(" "),s("p",[t._v("9.点击右键会出现，同步和提交。我们需要拉取Github的代码，因为直接提交的话可能会提交不了，先拉取。右键点击同步，我们填写下远端地址，点击保存、确定，回到上一弹窗，这时候要选择分支，如果GitHub上没有新建分支的话，默认就一个master。我们选择master，点击拉取。这一步可能会弹窗让填写用户名密码，需要填写GitHub的账号密码就好。等待拉取成功。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B9/wKgBOV4EZgqAZcxiAABMnpnDJq4900.png"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B9/wKgBOV4EZiCAHqMiAADGf96o5Po545.png"}}),t._v(" "),s("p",[t._v("拉取成功后，我们就可以提交了，右键选择提交，选择你要上传的文件，点击提交并推送，会出现让你填写分支和远端的地址（就是拉取仓库代码的Git地址。）")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B9/wKgBOV4EZjyADO80AAD4w1TjaVA457.png"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/B9/wKgBOV4EZk6ASWhEAABQy6Wlvwc772.png"}}),t._v(" "),s("p",[t._v("我们填写下远端地址，点击保存、确定，回到上一弹窗，这时候要选择分支，如果GitHub上没有新建分支的话，默认就一个master。我们选择master，点击确定，等待上传成功。成功之后可以去GitHub上刷新你的仓库，会发现代码已经上传成功了。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/BA/wKgBOV4EZmqAb08bAADGf96o5Po618.png"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/BA/wKgBOV4EZnaAAZEWAABRuNlLIv4256.png"}}),t._v(" "),s("p",[t._v("这时候就可以取访问Github pages里的访问地址了。这是我的。")]),t._v(" "),s("img",{attrs:{src:"https://cdn.u1.huluxia.com/g3/M01/B0/BA/wKgBOV4EZpGAAh30AABjA19srQk635.png"}})])])}]};var g=s("C7Lr")(u,a,!1,function(t){s("UvHF")},"data-v-63286b62",null);i.default=g.exports},UvHF:function(t,i){}});