const testRouter = [
	{
		name:'test',
		path:'/test',
		component:function(resolve){
			require(['./Test.vue'],resolve);
		}
	}
];
export default testRouter;
