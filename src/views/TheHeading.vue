<template>
	<div class="header">
		<el-menu 
			:default-active="$route.path" 
			class="el-menu-demo" 
			mode="horizontal" 
			:router="true"
			background-color="#4195f2"
  			text-color="#fff"
  			active-text-color="#fff">
		  <el-menu-item index="/home">首页</el-menu-item>
		  <el-menu-item index="/users">个人事物</el-menu-item>
		  <el-menu-item index="/system">系统管理</el-menu-item>
		</el-menu>
		<div class="menu-right">
			<el-dropdown trigger="click">
			  <span class="el-dropdown-link">
			    消息中心<i class="el-icon-caret-bottom el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item class="clearfix">
			      通知消息
			      <el-badge class="mark" :value="12" />
			    </el-dropdown-item>
			    <el-dropdown-item class="clearfix">
			      版本更新
			      <el-badge class="mark" :value="3" />
			    </el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped="scoped">
	.header{position: relative;}
	.menu-right{position: absolute;right: 20px; top: 20px;}
	.el-dropdown{color: #fff;}
</style>