import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
import Map from '@/components/page/Map'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'app',
    //   component: App
    // },
	// {
		{
    	path: '/index',
    	name: 'Map',
    	component: Map
	}
  ]
})

// const index = new Router({
// 	routes: [
// 	]
// })