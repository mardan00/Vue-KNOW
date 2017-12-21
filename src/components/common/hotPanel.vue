<template>
	<div id="HotPanel">
		<div class="list">{{ list }}</div>
		<div class="content">
			<div class="title"> {{ title }} </div>
			<div class="descrip"> {{ description }} </div>
			<!-- <div> -->
			<div class="hotNumber">{{ reply }}回答·{{ attention }}关注</div>
				<!-- <div>{{ attention }}关注</div> -->
			<!-- </div> -->
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:'01',
				title:'这是标题',
				description: '这是描述',
				reply: '1227',
				attention: '2.2万'
			}
		}
	}
</script>
<style scoped>
	#HotPanel{
		width: 100%;
		height: 70px;
		padding: 0 0%;
		background-color: #fff;
		clear: both;
		text-align: left;
		padding: 4% 0;
		border-top: 1px solid #ccc;
		/*margin-left: 4%;*/
	}
	.list{
		float:left;
		width: 10%;
		height: 100%;
		margin-top: 2px;
		font-weight: 600;
		color:red;
		padding-left: 4%;
	}
	.title{
		margin-top: 0;
		/*font-size: 16px;*/
	}
	.descrip{
		margin-top: 3%;
		font-size: 10px;
	}
	.content{
		float: left;
		width: 86%;
	}
	.hotNumber{
		font-size: 10px;
		margin-top: 3%;
		color:#ccc;
	}

</style>
	