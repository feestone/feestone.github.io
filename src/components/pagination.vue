<template>
  <div class="pagination">
    <ul class="paginationUl">
      <li class="leftIcon" @click="leftPage()" ><</li>
      <li class="num" v-for="item in pagesInfo" @click="getList(item.num)" :class="item.num == nowNum ?'active':''">{{item.num+1}}</li>
      <li class="rightIcon" @click="rightPage()" >></li>
      <span>共{{total}}页</span>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: ["listData", "emitName"],
  data() {
    return {
      pageNo: 10,
      total: "",
      pagesInfo: [],
      starNum: 0,
      endNum: 10,
      searchComplete: [],
      nowNum:0,
    };
  },
  created() {
    this.pageInit();
  },
  methods: {
     
    // 初始化列表
    pageInit() {
      let _this = this;
      let dataLength = this.listData.length;
      _this.pagesInfo = [];
      this.total = Math.ceil(dataLength / _this.pageNo);
      for (let i = 0; i < this.total; i++) {
        _this.pagesInfo.push({ num: i });
      }
      _this.getList();
    },
    // 获取对应页码数据
    getList(val) {
      let _this = this;
      if (typeof(val)!='undefined') {
        _this.starNum = val == 0 ? 0 : val * _this.pageNo;
        _this.endNum = val == 0 ? _this.pageNo : (val + 1) * _this.pageNo;
      }
      _this.nowNum = val || 0;
      _this.searchComplete = [];
      
      this.listData.forEach((item, index) => {
        if (index+1 > _this.starNum && index < _this.endNum) {
          _this.searchComplete.push(item);
        }
      });
      _this.$parent.$emit(_this.emitName, _this.searchComplete);
    },
    // 上一页
    leftPage(){
        let _this = this;
        if(_this.nowNum>0){
            _this.getList(_this.nowNum-1)
        }
    },
    // 下一页
    rightPage(){
        let _this = this;
        if(_this.nowNum<this.total-1){
            _this.getList(_this.nowNum+1)
        }
    }
  },
  watch:{     
    listData: function(a,b){ 
        if(a!=b)   {
            this.pageInit();
        }
    }
  }
};
</script>
<style scoped>
.pagination {
  text-align: center;
}
.paginationUl {
  display: inline-block;
  margin: 50px auto;
}
.paginationUl li {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #333;
  background: #fff;
  border-radius: 2px;
  color: #333;
  cursor: pointer;
  margin: 0 5px;
}
.paginationUl li.active {
  background: #333;
  color: #fff;
}
</style>
