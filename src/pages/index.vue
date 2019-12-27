<template>
  <div class="index">
    <div class="webcomBg" v-if="!islook">
      <div class="welcomePages">
        <div class="welcome" @click="comeIn()">欢迎</div>
      </div>
    </div>
    <div class="home" :class="islook?'blockImport':''">
      <div class="content">
        <div class="blogIndex">
          <div class="logobox">
            <img src="../../static/img/logoIndex.png" alt class="indexlogo" />
          </div>
          <ul class="nav">
            <li class="navList" @click="navTab()" :class="navActive==1?'active':''">学习积累</li>
          </ul>
          <ul class="learnSubset" v-if="navActive==1">
            <li v-for="(item) in learnSubsetList" :key="item.title">
              <router-link :to="item.url">{{item.title}}</router-link>
            </li>
            <div class="noData" v-if="!learnSubsetList || learnSubsetList.length<=0"></div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      navActive: 0,
      learnSubsetList: [
        {
          title: "VUE",
          url: "/vueList"
        }
      ],
      lifeSubsetList: [],
      islook: false
    };
  },
  created() {
    let _this = this;
    this.islook = sessionStorage.getItem("isLook") || false;
    document.onkeydown = function(e) {
      var theEvent = window.event || e;
      var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
      var ctrlKey = e.ctrlKey || e.metaKey;
      if (ctrlKey && code == 13) {
        _this.$router.push("/life/lifeList");
      }
    };
    this.$parent.$emit('nofoot',false)
  },
  mounted() {
    $('.welcomePages').height(document.body.offsetHeight)
  },
  beforeDestroy(){
    this.$parent.$emit('nofoot',true)
  },
  methods: {
    comeIn() {
      let _this = this;
      $(".webcomBg").fadeOut(1500, function() {
        $(".home").fadeIn(1500);
      });
      sessionStorage.setItem("isLook", true);
    },
    navTab() {
      this.navActive == 0 ? (this.navActive = 1) : (this.navActive = 0);
    }
  }
};
</script>
<style scoped>
.footerBox{
  display: none;
}
.index {
  height: 100%;
}
.webcomBg {
  height: 100%;
  background: linear-gradient(to bottom, #01cbb9 0%, #ffffff 100%);
}
.welcomePages {
  height: 100%;
  background: url("../../static/img/xkbg.png") repeat-x center bottom;
  background-size: 500px auto;
}
.welcome {
  position: fixed;
  top: 40%;
  left: 50%;
  z-index: 99;
  background: #000;
  color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  font-weight: bold;
  animation: myfirst 2s infinite ease-in-out;
  text-align: center;
  line-height: 200px;
  transform: translate(-50%, -50%);
  font-size: 40px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.welcome:hover {
  background: lightseagreen;
  animation: none;
  box-shadow: 0 0 20px #fff;
}
@keyframes myfirst {
  0% {
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-size: 40px;
  }
  25% {
    width: 300px;
    height: 300px;
    line-height: 300px;
    font-size: 70px;
  }
  35% {
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-size: 40px;
  }
  50% {
    width: 270px;
    height: 270px;
    font-size: 60px;
    line-height: 270px;
  }
  75% {
    width: 200px;
    height: 200px;
    font-size: 40px;
    line-height: 200px;
  }
  90% {
    width: 250px;
    height: 250px;
    font-size: 55px;
    line-height: 250px;
  }
  100% {
    width: 200px;
    height: 200px;
    font-size: 40px;
    line-height: 200px;
  }
}
@keyframes shadow {
  0% {
    box-shadow: 0 0 0 #000;
  }
  100% {
    box-shadow: 0 0 10px #000;
  }
}
.home {
  display: none;
  height: 100%;
}
.home .content {
}
.home .content .blogIndex {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.logobox {
  position: relative;
  background: #666;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: 0 auto;
  animation: shadow 1s infinite ease-in-out;
  animation-direction: alternate;
}
.logobox .indexlogo {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home .nav {
  text-align: center;
  margin: 50px auto 50px auto;
}
.home .nav .navList {
  display: inline-block;
  margin: 0 20px;
  border: 1px solid #ddd;
  padding: 8px 30px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 0px #999;
}
.home .nav .navList.active {
  background: #666;
  color: #fff;
}
.home .nav li:hover {
  background: #fff;
}
.home .learnSubset,
.home .lifeSubset {
  width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  min-height: 200px;
}
.home .learnSubset li,
.home .lifeSubset li {
  background: #f5f5f5;
  display: inline-block;
  margin: 0 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 0px #999;
}
.home .learnSubset li a,
.home .lifeSubset li a {
  display: block;
  height: 100%;
  padding: 8px 30px;
}
.home .learnSubset li:hover,
.home .lifeSubset li:hover {
  background: #fff;
}
.noData {
  margin: 0;
}
</style>