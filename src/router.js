import Vue from 'vue';
import Router from 'vue-router';
import mainRouters from './views/router';

Vue.use(Router);

export default new Router({
	routes: mainRouters
});
