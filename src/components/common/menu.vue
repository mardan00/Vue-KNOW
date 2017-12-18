<template>
	<div id="menu">
		<ul>
			<div id="underline"></div>
			<li class="chose">
			{{ dynamic }}</li>
			<li>{{ hot }}</li>
			<li>{{ find }}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"menu",
		data(){
			return{
				dynamic: '动态',
				hot: '热门',
				find: '发现',
				A:false
			}
		},
		mounted(){
			// function(){
				// this.underline();
				// alert('work')
				this.underline();
			// }
		},
		methods:{
			// toggle(){
			// 	this.A = !this.A;
			// 	// this.underline();
			// },
			// // underline(){
			// // 	document.getElementById('underline').className += 'change';
			// // },
			underline(){
				// alert('work')
				let m = document.getElementById('menu');
				let list = m.getElementsByTagName('li')
				let line = document.getElementById('underline');
				// line.className = 'change'
				let len = list.length;
				// list[0].style.color = 'black';
				for(let i = 0; i < len; i++){
					// alert(len);
					list[i].onclick=function(){
						// this.class
						switch(i){
							case 0:
								line.className = 'change_1'
								this.className = 'chose' 
								list[1].className = 'unchose';
								list[2].className = 'unchose';
								break;
							case 1:
								line.className = 'change_2';
								this.className = 'chose' 
								list[0].className = 'unchose';
								list[2].className = 'unchose';
								// alert(i)
								break;
							case 2:
								line.className = 'change_3'
								this.className = 'chose' 
								list[1].className = 'unchose';
								list[0].className = 'unchose';
								break;
						}
					}
				}
			}
		}
	}
</script>
<style>
	#menu{
		width: 100%;
		position: fixed;
		top:40px;
		left: 0px;
		background-color: #fff;
	}
	ul{
		overflow: hidden;
		box-shadow: 0px 2px 2px #ccc;
	}
	li{
		font-size: 13px;
		float: left;
		width: 33.3%;
		list-style: none;
		text-align: center;
		line-height: 40px;
		height: 40px;
		color:#ccc;
	}
	.chose{
		color: black;		/*border-bottom: 1.5px solid black;*/
	}
	.unchose{
		color: #ccc;
	}
	#underline{
		position: absolute;
		margin-top: 38px;
		/*margin-left: 33.3%;*/
		width: 33.3%;
		height: 2px;
		background-color: black;
		/*border-top:2px solid #333;*/
		}
	@keyframes underline_1{
		/*from{}*/
		to{margin-left:0;}
	}
	@keyframes underline_2{
		/*0%{margin-left: 0;}*/
		100%{margin-left:33.3%;}
	}
	@keyframes underline_3{
		100%{margin-left: 66.6%}
	}
	.change_1{
		margin-left: 0;
		transition: margin-left 1s;
	}
	.change_2{
		/*animation: underline_2 1s;
		animation-fill-mode: forwards;
		margin-left: 33.3%;*/
		margin-left: 33.3%;
		transition: margin-left 1s;
	}
	.change_3{
		margin-left: 66.6%;
		transition: margin-left 1s;
	}
</style>