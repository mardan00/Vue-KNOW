<template>
	<div id="panel">
		<div class="blank">
			<div class="clear">		
				<div class="img float"><img :src="img"></img></div>
				<div class="name float">{{ name }}</div>
			</div>
			<div class="title">{{ title }}</div>
			<div class="text"> {{ text }} </div>
		</div>
	</div>
</template>
<script>
	import image from '../../images/faker.jpg'
	export default {
		data(){
			return {
				name:'Chokcoe',
				title:'How to learn Basketball',
				text:'Stephen Hawking once claimed that time traveling was impossible; however, due to a lack of a law that supported this, he changed his mind saying that “Time travel may be possible, but it is not practical',
				img: image
			}
		}
	}
</script>
<style>
	.float{
		float: left;
	}
	#panel{
		width: 100%;
		height: 150px;
		box-shadow: 2px 1.5px 2px #7D7978 ;
		margin-top: 6px;
		padding-top: 10px;
	}
/*	.img{
		width: 10px;
		height: 10px;
	}*/
	img{
		width: 16px;
		height: 16px;
		border-radius:8px; 
	}
	.blank{
		width: 92%;
		height: 100%;
		margin:0 auto;
		/*padding-top: 10px;*/
		/*margin-top: 5px;*/
	}
	.clear{
		/*margin-top: 10px;*/
		overflow: hidden;
	}
	.name{
		font-size: 13px;
		color:#ccc;
		margin-left: 5px;
		padding-top: 1px;
	}
	.title{
		margin-top: 5px;
		font-size: 16px;
		text-align: left;
		font-weight: 600;
	}
	.text{
		margin-top: 5px;
		font-size: 13px;
		text-align: left;
	}
</style>