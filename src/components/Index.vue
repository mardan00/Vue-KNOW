
<template>
	<div>
		<!-- <head-top></head-top> -->
		<p>{{ msg }}</p>
		<div></div>
		<div></div>
		<router-link to="/">返回root</router-link>
		<router-link to="test">Test</router-link>
		<!-- <footer-button></footer-button> -->
	</div>
</template>
<script>
	import headTop from './common/head'
	import footerButton from './common/footer'
	// import test from '/components/Test.vue'

	export default {
		name: 'Index',
		data() {
			return {
				msg: '这是首页'
			}
		},
		components:{
			headTop,
			footerButton
		}
	}
</script>
<style>
	p{
		/*background: blue;*/
		height: 100px;
		width: 100px;
	}
</style>