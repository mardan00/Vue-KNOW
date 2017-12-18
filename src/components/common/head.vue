<template>
	<div id="head">
		<h2>
			{{ msg }}		
		</h2>
	</div>
</template>
<script>
	export default{
		name: 'Head',
		data(){
			return{
				msg: 'KNOW'
			}
		}
	}
</script>
<style>
	#head{
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
