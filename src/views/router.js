import loginRouter from './login/router'; //登录页
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
        children: [].concat(loginRouter)
    }
];
export default allRouters;
