<template>
  <div class="detailHeader">
    <div class="content">
      <a @click="goback()" class="backBtn">返回</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "searbox",
  data() {
    return {};
  },
  created() {},
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.detailHeader {
  background: #fff url("../../static/img/running.gif") no-repeat left center;
  background-size: 120px auto;
  height: 88px;
  animation: running 8s infinite linear;
  padding-top: 20px;
  box-shadow: 2px 0 10px #999;
}
@keyframes running {
  0% {
    background-position: 0px center;
  }
  100% {
    background-position: 100% center;
  }
}
@media screen {
  .detailHeader {
    padding: 0 0.2rem;
    background-size: 1.2rem auto;
    height: 0.88rem;
    padding-top: 0.2rem;
  }
}
</style>