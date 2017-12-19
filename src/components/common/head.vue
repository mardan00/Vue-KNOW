<template>
	<div id="header">
		<h2>
			{{ msg }}		
		</h2>
	</div>
</template>
<script>
	export default{
		name: 'headerTop',
		data(){
			return{
				msg: 'KNOW'
			}
		}
	}
</script>
<style>
	#header{
		width: 100%;
		height: 40px;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #333333;
		color:#ccc;
	}
	h2{
		line-height: 40px;
	}
</style>
