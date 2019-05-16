const loginRouter = [
	{
		name:'login',
		path:'/login/index',
		component:function(resolve){
			require(['./Login.vue'],resolve);
		}
	}
];
export default loginRouter;
