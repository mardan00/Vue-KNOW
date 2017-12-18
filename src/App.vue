<template>
    <div id="app">
    <header-top></header-top>
    <menu-list></menu-list>
    <div style="margin-top:86px;">
      <panel></panel>
      <panel></panel>
      <panel></panel>
      <router-link to="/index">首页</router-link>
      <panel></panel>
      <panel></panel>
      <!-- <map></map> -->
    </div>
    
    <!-- <img src="./assets/logo.png"> -->
    <transition  mode="out-in" name="slide-fade">
      <router-view/>
    </transition>
    <backgroud></backgroud>
    <ve-line></ve-line>
    <map></map>
    <footer-button></footer-button>
  </div>
</template>
 
<script>
import headerTop from './components/common/head'
import footerButton from './components/common/footer'
import menuList from './components/common/menu'
import panel from './components/common/panel'
import backgroud from './components/common/backgroud'
// import map from './components/page/map'
import VeLine from 'v-charts/lib/line'
export default {
  name: 'app',
  components:{
    headerTop,
    footerButton,
    menuList,
    panel,
    backgroud,
    VeLine
    // map
  }
}
</script>
<style>
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
  transition: all .8s ease;
}
.slide-fade-leave-active{
  transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0);
}
.slide-fade-enter{
  transform: translateX(200px);
  opacity: 0;
}
.slide-fade-leave-to{
  transform: translateX(-200px);
  opacity: 0;
}
</style>

