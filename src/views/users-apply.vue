<template>
	<div class="main">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/users'}">我的申请</el-breadcrumb-item>
		  <el-breadcrumb-item>申请发起</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="content">
			<el-row :gutter="12">
			  <el-col :span="8">
			    <el-card shadow="hover">
			    	<div slot="header" class="clearfix">
					    <span><i class="el-icon-edit"></i>申购流程</span>
					</div>
					<ul>
						<li v-for="(item, index) in shengous" :key="index" class="text item">
							<router-link :to="{path: '/users/details/'+ item.index}">
								{{ item.message }}
					        </router-link>
						</li>
					</ul>
			    </el-card>
			  </el-col>
			  <el-col :span="8">
			    <el-card shadow="hover">
			    	<div slot="header" class="clearfix">
					    <span><i class="el-icon-edit"></i>人事流程</span>
					</div>
			        <ul>
						<li v-for="(item, index) in renshis" :key="index" class="text item">
							<router-link :to="{path: '/users/details/'+ item.index}">
								{{ item.message }}
					        </router-link>
						</li>
					</ul>
			    </el-card>
			  </el-col>
			  <el-col :span="8">
			    <el-card shadow="hover">
			    	<div slot="header" class="clearfix">
					    <span><i class="el-icon-edit"></i>行政申请</span>
					</div>
			        <ul>
						<li v-for="(item, index) in xingzhengs" :key="index" class="text item">
							<router-link :to="{path: '/users/details/'+ item.index}">
								{{ item.message }}
					        </router-link>
						</li>
					</ul>
			    </el-card>
			  </el-col>
			  <el-col :span="8">
			    <el-card shadow="hover">
			    	<div slot="header" class="clearfix">
					    <span><i class="el-icon-edit"></i>财务流程</span>
					</div>
			        <ul>
						<li v-for="(item, index) in caiwus" :key="index" class="text item">
							<router-link :to="{path: '/users/details/'+ item.index}">
								{{ item.message }}
					        </router-link>
						</li>
					</ul>
			    </el-card>
			  </el-col>
			  <el-col :span="8">
			    <el-card shadow="hover">
			    	<div slot="header" class="clearfix">
					    <span><i class="el-icon-edit"></i>财务付款</span>
					</div>
			      	<ul>
						<li v-for="(item, index) in fukuans" :key="index" class="text item">
							<router-link :to="{path: '/users/details/'+ item.index}">
								{{ item.message }}
					        </router-link>
						</li>
					</ul>
			    </el-card>
			  </el-col>
			  <el-col :span="8">
			    <el-card shadow="hover">
			    	<div slot="header" class="clearfix">
					    <span><i class="el-icon-edit"></i>IT部流程</span>
					</div>
			        <ul>
						<li v-for="(item, index) in its" :key="index" class="text item">
							<router-link :to="{path: '/users/details/'+ item.index}">
								{{ item.message }}
					        </router-link>
						</li>
					</ul>
			    </el-card>
			  </el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
    export default {
    	data(){
    		return {
    			shengous: [
    				{ message: '申购申请'},
    			],
    			renshis: [
    				{ message: '请休假'},
    				{ message: '未打卡'},
    			],
    			xingzhengs: [
    				{ message: '贵重物品申请'},
    				{ message: '用印申请'},
    				{ message: '行政报修单'}
    			],
    			caiwus: [
    				{ message: '出差申请'},
    				{ message: '借款申请'},
    			],
    			fukuans: [
    				{ message: '付款申请'},
    				{ message: '差旅报销申请'},
    				{ message: '会计报销汇总'}
    			],
    			its: [
    				{ message: 'IT运维 '},
    				{ message: 'IT账号申请'},
    				{ message: 'IT变更申请'},
    				{ message: 'BPM系统运维申请'}
    			]
    		}
    	}
    }
</script>
<style scoped="scoped">
	.el-breadcrumb{padding: 20px;background-color: #fff;margin-bottom: 20px;}
	.el-card{margin: 6px 0;}
	.content{background-color: transparent;}
	ul,li{list-style: none;margin: 0;padding: 0;}
	ul{min-height: 140px;}
	li{margin: 10px 0 20px;}
	a:link{ color:#5A5A5A; text-decoration:none; behavior:url(/scripts/blur.htc);}
	a:visited{ color:#5A5A5A; text-decoration:none;}
	a:hover{ color:#409EFF; text-decoration:none;}
	a:focus { -moz-outline-style: none; }
	a:active{ outline:none; text-decoration:none;}
</style>