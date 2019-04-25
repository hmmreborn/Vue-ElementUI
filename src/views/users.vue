<template>
	<div class="user">
		<the-heading></the-heading>
		<el-container>
		    <el-aside width="200px">
		    	<div class="aside">
				    <el-menu 
				    	default-active="$route.path" 
				    	:unique-opened='true'
				    	:default-openeds="['1']"
				    	router
				    	class="el-menu-vertical-demo" 
				    	@open="handleOpen" 
				    	@close="handleClose">
				      <el-submenu index="1">
				        <template slot="title"><i class="el-icon-edit"></i>我的申请</template>
				        <el-menu-item index="/users/apply">申请发起</el-menu-item>
				        <el-menu-item index="/users/list">申请跟踪</el-menu-item>
				        <el-menu-item index="/users/search">申请查询</el-menu-item>
				        <el-menu-item index="/users/drafts">草稿箱</el-menu-item>
				      </el-submenu>
				      <el-submenu index="2">
				        <template slot="title"><i class="el-icon-date"></i>我的任务</template>
				        <el-menu-item index="#">待办任务</el-menu-item>
				        <el-menu-item index="#">已办任务</el-menu-item>
				        <el-menu-item index="#">代理任务</el-menu-item>
				      </el-submenu>
				      <el-menu-item index="#"><i class="el-icon-document"></i>委托管理</el-menu-item>
				      <el-menu-item index="/users/address"><i class="el-icon-time"></i>通讯录</el-menu-item>
				      <el-menu-item index="/users/info"><i class="el-icon-setting"></i>人事档案</el-menu-item>
				    </el-menu>
				</div>
		    </el-aside>
		    <el-main>
		    	<router-view></router-view>
		    </el-main>
		</el-container>
	</div>
</template>

<script>
	import TheHeading from './TheHeading'
	export default {
		data() {
	      return {
	      };
	    },
		components: {
			TheHeading
		},
		methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>

<style scoped="scoped">
	.user,.el-container,.el-aside{height: 100%;}
	.el-main{padding: 0 0px 20px 20px;}
	.aside{height: 100%;}
	.el-menu-vertical-demo{overflow: hidden;height: 100%;}
</style>