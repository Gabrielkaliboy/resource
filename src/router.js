import Vue from 'vue';
import Router from 'vue-router';
import allRouters from './views/router';

Vue.use(Router);

export default new Router({
	routes: allRouters,
	mode:'history'
});
