<template>
	<div id="footer">
		<div class="line"></div>
		<!-- <div>canfafaf</div> -->
		<!-- <ul class="list">
			<li>首页</li>
			<li>想法</li>
			<li>市场</li>
			<li>通知</li>
			<li>更多</li>
		</ul> -->
		<ul class="list">
			<!-- <li>{{ number }}</li>
			<li>{{ name }}</li>
			<li>{{ email }}</li>
			<li>{{ }}</li>
			<li>{{ }}</li> -->
			<li>
				<i class="icon icon-barrage_fill">图标</i>
				<i>首页</i>
			</li>
			<li>想法</li>
			<li>市场</li>
			<li>通知</li>
			<li>更多</li>
		</ul>
	</div>
</template>
<script>
	import fonts from '../../assets/font/iconfont.css'
	export default{
		data(){
			return{
				number: '首页',
				name: '想法',
				email: '市场'		
			}
		}
	}
</script>
<style>
	.line{
		width: 100%;
		height:0;
		border-top: .5px solid #ccc;
		box-shadow: 0 -1px .8px #ccc;
	}
	.list li{
		/*color: #ccc;*/
		float: left;
		list-style-type: none;
		width: 20%;
		font-size: 12px;

	}
	#footer{
		position: fixed;
		width: 100%;
		bottom:0;
		background: #fff;
		/*: 0;*/
	}
	i{
		float: left;
		display: inline-block;
		width: 100%;
		height: 50%;
		line-height: 20px;

	}
</style>