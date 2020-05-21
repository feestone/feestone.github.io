<template>
  <div class="vueList">
    <searBox :listData="pubList" :emitName="emitName"></searBox>
    <div class="content">
      <ul class="ListUl">
        <li v-for="item in searchList">
          <h4 class="title">
            <router-link :to="item.todetailUrl">{{item.title}}</router-link>
          </h4>
          <p class="intr">{{item.Introduction}}</p>
          <p class="time">发布时间：{{item.time}}</p>
        </li>
      </ul>
      <pagintion
        :listData="searchPagesList"
        :emitName="listType"
        v-if="searchList && searchList.length>10"
      ></pagintion>
      <div class="noData" v-if="!searchList || searchList.length<=0"></div>
    </div>
    <div class="goMi" v-if="!isShowGOmi">
      <span>你一定是来回忆的！</span>
    </div>
  </div>
</template>
<script>
import searBox from "../../../components/header";
import pagintion from "../../../components/pagination";
import List from "../list/list";
export default {
  components: { searBox, pagintion },
  data() {
    return {
      pubList: List.pageList, //所有列表
      searchPagesList: List.pageList, //搜索后列表
      searchList: List.pageList, //展示列表
      emitName: "vuelist", //广播名称
      listType: "pages",
      isShowGOmi:false,
    };
  },
  created() {
    this.$on(this.emitName, item => {
      this.searchList = item;
      this.searchPagesList = item;
    });
    this.$on(this.listType, item => {
      this.searchList = item;
    });
    this.isShowGOmi = localStorage.getItem('isShowGOmi')?localStorage.getItem('isShowGOmi'):flase;
  },
  mounted() {
    setTimeout(function() {
      $(".goMi").fadeOut(1000);
      localStorage.setItem('isShowGOmi',true)
    }, 1500);
  },
  methods: {}
};
</script>
<style scoped>
.goMi {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 9999;
}
.goMi span {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  font-size: 18px;
  transform: translate(-50%, -50%);
}
</style>