<template>
  <div class="vue-01">
    <detailHeader></detailHeader>
    <div class="content">
      <div class="detailCont">
        <h3>Vue的项目搭建</h3>
        <p>现在社会上对前端的要求都越来越高了，前端的知识又很复杂，框架之类的多很多，拿Vue来说，目前应该是前端必会的技能之一了。下面简单介绍下Vue的项目流程。</p>
        <p>首先，先了解做Vue项目都所需要的工具。下面奉上所需工具及下载地址。</p>
        <p>编辑器：VScode 。<a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a> (这个编辑器挺强大的，可安装各种插件。也支持各个语言的编程。下文也会用这个来做示例。)</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/8D/wKgBOV4FpfeAGq05AAGO0bVl6dg548.jpg' />
        <p>node.js: <a href="http://nodejs.cn/download/">http://nodejs.cn/download/</a> (安装vue需要运行node命令 npm等。)</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/8E/wKgBOV4FptiANW85AAEz77fp-RM444.jpg' />
        <p>有了这两个就可以开始搭建了。软件安装过程就不做介绍了。基本都是下一步，下一步。一直到结束。开始搭建。</p>
        <p>1.新建个空文件夹。用vscode打开，打开vscode的终端，我选择这个编辑器的原因就是自带终端。打开终端有两种常用方法，在文件夹上右键，会出现在终端打开，还有就是快捷键"ctrl+~"，~是tab键上面的键子。这两种方式都可以。打开后应该是这样的。</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/90/wKgBOV4FqLaAPHoCAAChin9mdSU401.jpg' />
        <p>2.安装vue-cli。使用命令<span class="code">npm install --global vue-cli</span> 安装好之后，可以用<span class="code">vue -V</span>来检查安装的版本。需要注意的是这里查看的版本是vue-cli的版本，具体查看使用的vue版本，是要到搭建好项目的package.json文件里去看的。不要混淆这两个版本。</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/92/wKgBOV4FqsuAZuBNAAExAayJzJU772.jpg' />
        <p>3.安装好之后，我们来利用vue-cli 创建一个基于webpack的项目。使用命令 <span class="code">vue init webpack projectName</span>,projectName是你的项目名称，可以随便起。运行后会让你设置一些项目信息及配置。除了严禁模式的，一路回车就好。项目名称不允许有大写，如果想大写的会大写字母钱加'-'横杠就好。</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/95/wKgBOV4FrR2AJPDjAACNvazLMeE546.jpg' />
        <p>4.项目初始化成功的话，你的目录会多出一些文件，安装成功后，终端会给出提示，进入你的项目目录，启用<span class="code">npm run dev</span>,就可以启动你的vue项目。启动成功后，出现连接，按住ctrl点击地址会自动访问。</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/96/wKgBOV4FrgGAfkr-AAHCs8dqaug562.jpg' />
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/97/wKgBOV4FrpaAb5wzAAEBIjQaARw835.jpg' />
        <p>5.访问成功。</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/97/wKgBOV4FrvmAK6HZAACYCAjXCBA062.jpg' />
        <hr>
        <p>在说一些平时会用到的一些配置文件的修改。现在就想起什么写什么，以后再补充。</p>
        <p>1.项目的运行命令和打包命令的修改。这两个命令是可以修改的，不是固定死的。可以在package.json里修改启动命令。前面的"dev" 和"build" 可以随便修改。修改后启动命令就相应的修改就好了。<span class="code">npm run 修改后</span>,也是可以成功的。</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/9C/wKgBOV4FsYmAEDMoAAFk8FomNHw448.jpg' />
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/9E/wKgBOV4FskCAeylyAAGCOR9Mypo332.jpg' />
        <p>2.在平时做项目中，如果和别人协作，需要让其他人能访问到自己的项目。这时候，修改一下config/index.js里的host地址就好，端口也是可以修改的。将host地址改为自己的电脑ip。这时候别人就可以访问你的项目了。查看自己电脑ip使用 <span class="code">ipconfig</span></p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/A0/wKgBOV4Fs4-Acu7TAAD7WuSuqKQ856.jpg' />
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/A1/wKgBOV4Fs9mAWj8GAACZ6rwj3MI386.jpg' />
        <p>3.开发过程中背景图显示正常，打包上传后，背景图404。大多数原因是config/index.js里的assetsPublicPath路径不对导致的。仔细检查什么相对路径，绝对路径是不是写错了。对应修改即可</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/A5/wKgBOV4Ftl-AVpQqAAFGyuJO6CI146.jpg' />
        <p>4.修改打包后静态资源路径的修改,也是在config/index.js 修改index的路径和assetsRoot的路径。assetsRoot后面就是生成的文件存放的文件夹，可以随意更改。注意index的地址也对应修改。</p>
        <img src = 'https://cdn.u1.huluxia.com/g3/M01/B2/A9/wKgBOV4FuJ6AWffGAAE4VZqrCF4771.jpg' />
      </div>
    </div>
    <div id="toTop"></div>
  </div>
</template>
<script>

import detailHeader from "../../../../components/detailHeader";
export default {
  components: { detailHeader },
  created(){
    console.log(this.$route.params.userId)
  }
};
</script>
<style  scoped>
</style>