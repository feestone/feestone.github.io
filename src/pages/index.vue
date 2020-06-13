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
          <div class="logobox" @click="goLife()">
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
    <div class="lifeAlert" :class="{'isShow':lifeAlert}">
      <div class="lifeShadow" @click="hideLife()"></div>
      <input type="text" v-model="lifePass" @change="chackPass()" />
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
          title: "HTML",
          url: "/htmlList"
        },
        {
          title: "VUE",
          url: "/vueList"
        }
      ],
      lifeSubsetList: [],
      islook: false,
      goLifeNum: 0,
      lifeAlert: false
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
    this.$parent.$emit("nofoot", false);
    localStorage.removeItem("isShowGOmi");
  },
  mounted() {
    $(".welcomePages").height(document.body.offsetHeight);
  },
  beforeDestroy() {
    this.$parent.$emit("nofoot", true);
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
    },
    goLife() {
      if (!this.isPc()) {
        this.goLifeNum++;
        if (this.goLifeNum > 10) {
          this.lifeAlert = true;
        }
      }
    },
    isPc() {
      var userAgentInfo = navigator.userAgent;
      var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      ];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    hideLife() {
      this.lifeAlert = false;
    },
    chackPass() {
      if (this.lifePass == "634946") {
        this.$router.push("/life/lifeList");
      }
    }
  }
};
</script>
<style scoped>
.footerBox {
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
  background: lightseagreen;
  animation: none;
  box-shadow: 0 0 15px #fff;
  border: 1px solid #fff;
  color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  font-weight: bold;
  /* animation: myfirst 2s infinite ease-in-out; */
  text-align: center;
  line-height: 150px;
  transform: translate(-50%, -50%);
  font-size: 40px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.welcome:hover {
  width: 180px;
  height: 180px;
  line-height: 180px;
  box-shadow: 0 0 30px #fff;
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
.lifeAlert {
  display: none;
}
.lifeShadow {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
}
.lifeAlert input {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0.6rem;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}
.lifeAlert.isShow {
  display: block;
  animation: lifeAlert 1s;
}
@keyframes lifeAlert {
  0% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}
@media screen and (max-width: 760px) {
  .home .nav .navList {
    font-size: 0.24rem;
  }
  .welcome {
    position: fixed;
    top: 40%;
    left: 50%;
    z-index: 99;
    background: lightseagreen;
    animation: none;
    box-shadow: 0 0 0.15rem #fff;
    border: 1px solid #fff;
    color: #fff;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    font-weight: bold;
    text-align: center;
    line-height: 1.5rem;
    transform: translate(-50%, -50%);
    font-size: 0.4rem;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  .welcome:hover {
    width: 1.8rem;
    height: 1.8rem;
    line-height: 1.8rem;
    box-shadow: 0 0 0.3rem #fff;
  }
  .logobox {
    width: 1rem;
    height: 1rem;
  }
  .logobox .indexlogo {
    width: 0.7rem;
    height: 0.7rem;
  }
  .home .nav {
    margin: 0.5rem auto 0.5rem auto;
  }
  .home .nav .navList {
    margin: 0 0.2rem;
    padding: 0.08rem 0.3rem;
    border-radius: 6px;
    font-size: 0.24rem;
  }
  .home .learnSubset,
  .home .lifeSubset {
    max-width: 100%;
    padding: 0.2rem;
    min-height: 2rem;
  }
  .home .learnSubset li,
  .home .lifeSubset li {
    margin: 0.2rem;
  }
  .home .learnSubset li a,
  .home .lifeSubset li a {
    padding: 0.08rem 0.3rem;
  }
}
</style>