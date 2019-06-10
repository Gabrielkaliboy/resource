const loginRouter = [
	{
		name:'login',
		path:'login',
		component:function(resolve){
			require(['./Login.vue'],resolve);
		}
	}
];
export default loginRouter;
