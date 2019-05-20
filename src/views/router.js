import loginRouter from './login/router'; //登录页
import testRouter from './test/router';//测试页面
const allRouters = [
	{
		name: 'home',
		path: '/',
		component: function (resolve) {
			require(['./home/Home.vue'], resolve);
		},
		meta: {
			title: '首页',
			keepAlive: true
		},
		children: [].concat(loginRouter,testRouter)
	}
];
export default allRouters;
