<template>
  <div class="vue-01">
    <detailHeader></detailHeader>
    <div class="content">
      <div class="detailCont">
        <h3>vue项目防止别人看到源码的方法</h3>
        <p>不管是自己还是公司，制作的网站都怕被别人窃取。查看自己的源码，甚至扒掉自己的网站占为己有。我也想过很多办法，什么禁止右键，禁止组合键。都不能从根本上解决问题。但是框架可以解决。</p>
        <p>用vue-cli做的项目就可以解决这个问题。</p>
        <p>修改config/index.js文件。把 <span class="code">productionSourceMap:true。</span>改为false。</p>
        <p>改好之后在打包，这时候你的代码就是加过密之后的了。但是不方便的事看不了报错的具体位置了。但是我觉得整体项目制作完成后，在再启用加密的方式打包。安全！</p>
      </div>
    </div>
    <div id="toTop"></div>
  </div>
</template>
<script>
import detailHeader from "../../../../components/detailHeader";
export default {
  components: { detailHeader },
  created() {}
};
</script>
<style  scoped>
</style>