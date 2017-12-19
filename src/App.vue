<template>
    <div id="app">
      <header-top></header-top>
 <!--      <menu-list></menu-list> -->
      <div>
        <!-- <transition  mode="out-in" name="slide-fade"> -->
          <router-view/>
        <!-- </transition>       -->
      </div>  
      <backgroud></backgroud>
      <footer-button></footer-button>
  </div>
</template>
 
<script>
import headerTop from './components/common/head'
import footerButton from './components/common/footer'
import menuList from './components/common/menu'
import panel from './components/common/panel'
import backgroud from './components/common/backgroud'
// import hot from './components/page/hot'
import VeLine from 'v-charts/lib/line'
export default {
  name: 'app',
  components:{
    headerTop,
    footerButton,
    menuList,
    panel,
    backgroud,
    VeLine,
    // hot
    // map
  }
}
</script>
<style Modle>
body,div,h2,li,ul{
    padding: 0;
    margin:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-fade-enter-active {
  opacity: 1;
  transition: all .5s ease;
}
.slide-fade-leave-active{
  transition: all .5s cubic-bezier(0.5,0,.1,1);
}
.slide-fade-enter{
  transform: translateX(40px);
  opacity: 1;
}
.slide-fade-leave-to{
  transform: translateX(-20px);
  opacity: 1;
}
.slideleft-enter-active,.slideleft-leave-active,.slideright-enter-active,.slideright-leave-active{transition: all 1s;}
.slideleft-enter,.slideleft-leave-to,.slideright-enter,.slideright-leave-to{opacity: 0;}
.slideright-enter {transform: translateX(+100%);}
.slideright-leave-active {transform: translateX(-100%);}
.slideleft-enter {transform: translateX(-100%);}
.slideleft-leave-active {transform: translateX(+100%);}
</style>

