<template>
  <div class="vue-01">
    <detailHeader></detailHeader>
    <div class="content">
      <div class="detailCont">
        <h3>数组的常用方法</h3>
        <p>
          <code>arr.join(",")</code> 将
          <b>数组</b>变成
          <b>字符串</b>，并以 "，"连接。
        </p>
        <p>
          <code>arr.split("")</code> 将
          <b>字符串</b>变成
          <b>数组</b>
        </p>
        <hr />
        <p>
          <code>arr.push()</code> 在最后一位添加对象
        </p>
        <p>
          <code>arr.pop()</code> 删除最后一位
        </p>
        <hr />
        <p>
          <code>arr.unshift()</code> 在数组第一位前添加
        </p>
        <p>
          <code>arr.shift()</code> 删除第一位
        </p>
        <hr />
        <p>
          <code>arr.concat()</code> 合并数组
        </p>
        <hr />
        <p>
          <code>arr.splice()</code> 添加/删除数组中的元素。用法 arr.splice(index,length,arr); index:起始下标，length：操作长度。arr：要添加的新数组。 可以用于“复制”，“去重”功能。
        </p>
        <p>
          <code>arr.slice()</code> 截取数组中的元素。用法 arr.splice(index,endIndex); index:起始下标，endIndex：结束下标；如果不写endIndex默认截取到最后
        </p>
        <hr />
        <p>
          <code>arr.reverse()</code> 倒叙；反转数组
        </p>
        <span v-for="item in list" :key="item">{{item}}----</span>
        <button @click="reverseS()">reverse</button>
      </div>
    </div>
    <div id="toTop"></div>
  </div>
</template>
<script>
import detailHeader from "../../../../components/detailHeader";
export default {
  components: { detailHeader },
  data() {
    return {
      list: ["1","2", "3", "4","5","6","7"]
    };
  },
  created() {},
  methods:{
    reverseS(){
      this.list.reverse();
    }
  }
};
</script>
<style  scoped>
code {
  order: 1px dotted #fff;
  background: #000;
  line-height: 1.4;
  color: #fff;
  padding: 5px 10px;
  margin: 0 10px 0 0;
  font-family: Consolas;
  font-weight: bold;
  font-size: 18px;
}
</style>