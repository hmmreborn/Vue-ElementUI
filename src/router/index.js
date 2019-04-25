import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Users from '@/views/users'
import UsersApply from '@/views/users-apply'
import UsersList from '@/views/users-list'
import UsersSearch from '@/views/users-search'
import UsersDetails from '@/views/users-details'
import UsersDrafts from '@/views/users-drafts'
import UsersAddress from '@/views/users-address'
import Usersinfo from '@/views/users-info'
import System from '@/views/system'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path: '/home',
      name: 'Home',
      component: Home
    },
    {
    	path: '/users',
      name: 'Users',
      component: Users,
      children: [
      	{
      		path: '/users/apply',
		      name: 'UsersApply',
		      component: UsersApply
      	},
      	{
      		path: '/users/list',
		      name: 'UsersList',
		      component: UsersList
      	},
      	{
      		path: '/users/search',
		      name: 'UsersSearch',
		      component: UsersSearch
      	},
      	{
      		path: '/users/details/:id',
      		name: 'UsersDetails',
		      component: UsersDetails
      	},
      	{
      		path: '/users/drafts',
		      name: 'UsersDrafts',
		      component: UsersDrafts
      	},
      	{
      		path: '/users/address',
		      name: 'UsersAddress',
		      component: UsersAddress
      	},
      	{
      		path: '/users/info',
		      name: 'Usersinfo',
		      component: Usersinfo
      	},
      ]
    },
    {
    	path: '/system',
      name: 'System',
      component: System
    },
  ]
})
