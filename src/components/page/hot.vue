<template>
	<div id="hot" style="">
		<hot-Panel></hot-Panel>
		<hot-Panel></hot-Panel>
		<hot-Panel></hot-Panel>
		<hot-Panel></hot-Panel>
		<hot-Panel></hot-Panel>
	</div>
</template>
<script>
	import panel from '../common/panel'
	import hotPanel from '../common/hotPanel'
	export default {
		data(){
			return{

			}
		},
		components: {
			panel,
			hotPanel
		}
	}
</script>