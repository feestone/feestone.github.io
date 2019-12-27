<template>
  <div class="searbox">
      <div class="content clearfix">
        <router-link to="/" class="logo" title="返回主页"></router-link>
        <div class="search">
          <div class="clearfix">
             <input type="text" v-model="searchText" class="searchInt">
              <div class="searchIcon" @click="searchCon(searchText)" ></div>
            </div> 
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'searbox',
  props:['listData','emitName'],
  data () {
    return {
      searchText:'',//搜索内容
      searchComplete:[],//搜索组成的新数组
    }
  },
  created(){
    let _this = this;
    // 回车搜索
    document.onkeydown = function (e) { 
        var theEvent = window.event || e;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            _this.searchCon(_this.searchText)
        }
    }
  },
  methods:{

      // 搜索内容
      searchCon(val){
          let _this = this;
          _this.searchComplete = [];
          this.listData.forEach(element => {
            if(element.title.indexOf(val.trim())!=-1){
              _this.searchComplete.push(element);
            }
          });
          _this.$parent.$emit(_this.emitName,_this.searchComplete);
      },
      
  }
}
</script>
<style scoped>
  .searbox{
    box-shadow: 2px 0px 10px #999;
    background: #fff;
    padding: 20px 0px;
    margin-bottom: 40px;
  }
  .search{
    float: right;
  }
  .search .searchInt{
    margin-top: 8px; 
    height: 30px;
    width: 200px;
    float: left;
    text-indent: 1em;
    outline: none;
  }
  .searbox .searchIcon{
      width: 40px;
      height: 34px;
      background:#999 url('../../static/img/search.png') no-repeat center;
      background-size: 20px;
      display: inline-block;
      margin: 8px 0 0 0px ;
      float: left;
      cursor: pointer;
  }
  .searbox .searchIcon{
    
  }
</style>
