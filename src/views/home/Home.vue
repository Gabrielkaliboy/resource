<template>
  <div class="home">
		<div v-for="(item,index) in menuList" :key="index">
			<a @click="menuClick(item)">{{ item.name }}</a>
		</div>
  </div>
</template>

<script>
export default {
	data(){
		return{
			menuList:[
				{
					show:true,
					name:'首页',
					href:'/'
				},{
					show:true,
					name:'登陆',
					href:'/login'
				},{
					show:true,
					name:'测试',
					href:'/test'
				}
			]
		};
	},
	methods:{
		menuClick:function(item){
			this.$router.push(item.href);
		}
	}
};
</script>
