import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
// import Map from '@/components/page/Map'
import App from '@/App'
import Hot from '@/components/page/hot'
import Find from '@/components/page/find'
import Dynamic from '@/components/page/dynamic'
import Menu from '@/components/common/menu'
import More from '@/components/page/more'

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
        path:'/index',
        component: Menu,
        children:[
            {path: '/index/dynamic',component:Dynamic},
            {path: '/index/hot' , component: Hot},
            {path: '/index/find', component: Find}
        ]
    },
    {
        path:'/more',
        component: More
    }
	// {
 //    	path: '/hot',
 //    	name: 'Hot',
 //    	component: Hot
	// },
 //    {
 //        path:'/',
 //        component: Dynamic
 //    }
  ]
})

// const index = new Router({
// 	routes: [
// 	]
// })