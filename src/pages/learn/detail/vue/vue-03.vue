<template>
  <div class="vue-01">
    <detailHeader></detailHeader>
    <div class="content">
      <div class="detailCont">
        <h3>Vue路由的设置及获取</h3>
        <p>之前对路由这块不是很清楚，现在好好整理一下路由的知识。</p>
        <p>vue设置路由参数html中和js中都有2中方式。jQuery和params。</p>
        <p>1.html中</p>
        <div class="pleft-15">
          <p>
            (1).普通跳转：直接在to中填写跳转路径。
            <span class="code">router-link to="/index"</span>
          </p>
          <p>
            (2).query传参跳转：
            <span class="code">router-link :to="{path:'/index', query:{val:'参数值'}}"</span>,这里的to里面放的是一组对象，由path和query组成，path为路径，query为传参。
          </p>
          <p>
            (3).params传参跳转：
            <span class="code">router-link :to="{name:'/index', params:{val:'参数值'}}"</span>,这里的to里面放的也是一组对象，由name和params组成，name为路由里的name名称，会跳转到和name对应的路径，params为传参。
          </p>
        </div>
        <p>2.js中</p>
        <div class="pleft-15">
          <p>
            (1).普通跳转,直接在push()里写路径
            <span class="code">this.$router.push('/index')</span>
          </p>
          <p>(2).query 传参跳转：<span class="code">this.$router.push({path:'/index',query:{val:'1212'}})</span></p>
          <p>(2).params 传参跳转：<span class="code">this.$router.push({name:'/index',params:{val:'1212'}})</span></p>
        </div>
        <p>接收值：用哪种方式传的参，就用哪种方式接收参数。</p>
        <div class="pleft-15">
            <p>(1).query方式传参，接收参数用：<span class="code">this.$route.query.val</span></p>
            <p>(1).params方式传参，接收参数用：<span class="code">this.$route.params.val</span></p>
        </div>
        <hr>
        <p>说一下两个传参的不同之处</p>
        <p>query传参，参数会显示在地址栏上，但是params的参数就不会显示在地址栏上。</p>
        <p>$router 和 $route</p>
        <p>$router用于发送参数。$route用于接收参数。</p>
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