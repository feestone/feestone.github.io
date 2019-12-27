<template>
  <div id="app" :class="foot?'pbot':''">
    <router-view />
    <Footer v-if="foot"></Footer>
  </div>
</template>

<script>
import Footer from "../src/components/foot";
export default {
  name: "App",
  components: { Footer },
  data(){
    return{
      foot:true,
    }
  },
  created() {
    this.$on('nofoot',data=>{this.foot = data;})
  }
};
</script>
<style >
.pbot {
  padding-bottom: 36px;
}
</style>