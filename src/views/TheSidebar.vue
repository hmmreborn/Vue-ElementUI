<template>
	<div class="aside">
	    <el-menu
	      default-active="$route.path"
	      router
	      :default-openeds="['users']"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose">
	      <el-submenu index="users">
	        <template slot="title">
	          <i class="el-icon-edit"></i>
	          <span>我的申请</span>
	        </template>
	        <el-menu-item-group>
	          <el-menu-item index="1-1">申请发起</el-menu-item>
	          <el-menu-item index="1-2">申请跟踪</el-menu-item>
	          <el-menu-item index="1-3">申请查询</el-menu-item>
	          <el-menu-item index="1-4">草稿箱</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-menu-item index="usersinfo">
	        <i class="el-icon-view"></i>
	        <span slot="title">人事档案</span>
	      </el-menu-item>
	    </el-menu>
		<router-view></router-view>
	</div>
</template>

<script>
  export default {
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
	.aside{height: 100%;}
	.el-menu-vertical-demo{overflow: hidden;height: 100%;}
</style>