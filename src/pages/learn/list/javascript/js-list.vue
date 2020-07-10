<template>
  <div class="vueList">
    <searBox :listData="pubList" :emitName="emitName"></searBox>
    <div class="content">
      <ul class="ListUl">
        <li v-for="item in searchList" >
          <h4 class="title">
            <router-link :to="item.todetailUrl">{{item.title}}</router-link>
          </h4>
          <p class="intr">{{item.Introduction}}</p>
          <p class="time">发布时间：{{item.time}}</p>
        </li>
      </ul>
      <pagintion :listData="searchPagesList" :emitName="listType" v-if="searchList && searchList.length>10"></pagintion>
      <div class="noData" v-if="!searchList || searchList.length<=0"></div>
    </div>
  </div>
</template>
<script>
import searBox from "../../../../components/header";
import pagintion from "../../../../components/pagination";
import List from "../javascript/list"
export default {
  components: { searBox , pagintion},
  data() {
    return {
      pubList:List.pageList,//所有列表
      searchPagesList:List.pageList, //搜索后列表
      searchList:List.pageList,  //展示列表
      emitName:'vuelist',//广播名称
      listType:'pages'
    };
  },
  created() {
    this.$on(this.emitName, item => {this.searchList = item;this.searchPagesList = item});
    this.$on(this.listType, item => {this.searchList = item;});
  },
  methods: {}
};
</script>
<style scoped>

</style>