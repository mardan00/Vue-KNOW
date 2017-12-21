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
			<li class="chose">
				<i class=" iconfont icon-barrage_fill"></i>
				<span>首页</span>
			</li>
			<li>
				<i class="iconfont icon-xiangfa"></i>
				<span>想法</span>
			</li>
			<li>
				<i class="iconfont icon-shichang"></i>
				<span>市场</span>
			</li>
			<li>
				<i class="iconfont icon-tongzhi"></i>
				<span>通知</span>
			</li>
			<li @click="goMore">
				<i class="iconfont icon-gengduo"></i>
				<span>更多</span>
			</li>
		</ul>
	</div>
</template>
<script>
	// import fonts from '../../assets/font/iconfont.css'
	export default{
		data(){
			return{
				number: '首页',
				name: '想法',
				email: '市场',	
				item: 0 //下方菜单点击状态
			}
		},
		mounted(){
			// alert(this.item)
			this.listClick(this.item);
		},
		methods:{
			listClick(item){
				// let foot = document.getELementById('footer');
				let foot = document.getElementById('footer')
				let list = foot.getElementsByTagName('li');
				let len = list.length;
				// alert(len);
				for(let i = 0; i < len; i++){
					list[i].onclick=function(){
						// alert(item)
						list[item].className = 'unchose';	
						item = i;
						list[item].className = 'chose';
						// switch(i){
						// 	case 0:
						// 		this.className = 'chose';
						// 		list[1].className = 'unchose';
						// 		list[2].className = 'unchose';
						// 		list[3].className = 'unchose';
						// 		list[4].className = 'unchose';
						// 		break;
						// 	case 1:
						// 		this.className = 'chose';
						// 		list[0].className = 'unchose';
						// 		list[2].className = 'unchose';
						// 		list[3].className = 'unchose';
						// 		list[4].className = 'unchose';
						// 		break;
						// 	case 2:
						// 		this.className = 'chose';
						// 		list[0].className = 'unchose';
						// 		list[1].className = 'unchose';
						// 		list[3].className = 'unchose';
						// 		list[4].className = 'unchose';
						// 		break;
						// 	case 3:
						// 		this.className = 'chose';
						// 		list[1].className = 'unchose';
						// 		list[2].className = 'unchose';
						// 		list[0].className = 'unchose';
						// 		list[4].className = 'unchose';
						// 		break;
						// 	case 4:
						// 		this.className = 'chose';
						// 		list[0].className = 'unchose';
						// 		list[1].className = 'unchose';
						// 		list[2].className = 'unchose';
						// 		list[3].className = 'unchose';
						// 		break;
						// }
					}
				}
			},
			goMore(){
				this.$router.push('/more')
			}
		}
	}
</script>
<style>
@import url('//at.alicdn.com/t/font_510427_5382kvjj91k8olxr.css');
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
		font-size: 11px;


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
		/*font-size: 20px;*/
		line-height: 24px;

	}
	.iconfont{
		font-size: 24px;
	}
	.chose{
		color:#2083E8;
	}
	.unchose{
		color:#2c3e50;
	}
</style>