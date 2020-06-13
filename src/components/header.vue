<template>
  <div class="searbox">
    <div class="content clearfix">
      <router-link to="/" class="logo" title="返回主页"></router-link>
      <div class="search">
        <div class="clearfix">
          <input type="text" v-model="searchText" class="searchInt" />
          <div class="searchIcon" @click="searchCon(searchText)"></div>
          <div class="mobilesearchIcon" @click="mobilesearchIcon()"></div>
        </div>
      </div>
    </div>
    <div class="mobileSearch" :class="{'isShow':mobileSearch}">
      <input type="text" v-model="searchText" placeholder="按手机自带输入法搜索或确认键进行搜索" />
    </div>
  </div>
</template>

<script>
export default {
  name: "searbox",
  props: ["listData", "emitName"],
  data() {
    return {
      searchText: "", //搜索内容
      searchComplete: [], //搜索组成的新数组
      mobileSearch: false
    };
  },
  created() {
    let _this = this;
    // 回车搜索
    document.onkeydown = function(e) {
      var theEvent = window.event || e;
      var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
      if (code == 13) {
        _this.searchCon(_this.searchText);
        _this.mobileSearch = false;
        _this.searchText = ""
      }
    };
  },
  methods: {
    // 搜索内容
    searchCon(val) {
      let _this = this;
      _this.searchComplete = [];
      this.listData.forEach(element => {
        if (element.title.indexOf(val.trim()) != -1) {
          _this.searchComplete.push(element);
        }
      });
      _this.$parent.$emit(_this.emitName, _this.searchComplete);
    },
    mobilesearchIcon() {
      this.mobileSearch == false
        ? (this.mobileSearch = true)
        : (this.mobileSearch = false);
    }
  }
};
</script>
<style scoped>
.searbox {
  box-shadow: 2px 0px 10px #999;
  background: #fff;
  padding: 20px 0px;
  margin-bottom: 40px;
  position: relative;
}
.search {
  float: right;
}
.search .searchInt {
  margin-top: 8px;
  height: 30px;
  width: 200px;
  float: left;
  text-indent: 1em;
  outline: none;
}
.searbox .searchIcon {
  width: 40px;
  height: 34px;
  background: #999 url("../../static/img/search.png") no-repeat center;
  background-size: 20px;
  display: inline-block;
  margin: 8px 0 0 0px;
  float: left;
  cursor: pointer;
}
.mobilesearchIcon,
.mobileSearch {
  display: none;
}
@media screen and (max-width: 760px) {
  .content.clearfix {
    position: relative;
    padding: 0 0.2rem;
     z-index: 99;
  }
  .searbox {
    padding: 0.2rem 0px;
    margin-bottom: 0.4rem;
  }
  .search .searchInt,
  .searbox .searchIcon {
    display: none;
  }
  .mobileSearch {
    display: block;
  }
  .searbox .mobilesearchIcon {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    right: 0.2rem;
    transform: translateY(-50%);
    margin: 0px;
    background: #999 url("../../static/img/search.png") no-repeat center;
    background-size: 20px;
    transition-duration: 0.3s;
  }
  .searbox .mobileSearch.isShow {
    border-top: 1px solid #ccc;
    animation: identifier 0.5s;
    bottom: -0.9rem;
    box-shadow: 0px 10px 10px #ccc;
     z-index: 2;
  }
  @keyframes identifier {
    0% {
      bottom: 0px;
    }
    100% {
      bottom: -0.9rem;
    }
  }
  .mobileSearch {
    position: absolute;
    left: 0;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    background: #fff;
    bottom: 0px;
    z-index: -1;
  }
  .mobileSearch input {
    display: block;
    height: 0.5rem;
    width: 100%;
    border: 1px solid #ccc;
    text-indent: 1em;
  }
}
</style>
