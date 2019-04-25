<template>
	<div class="main">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/users'}">我的申请</el-breadcrumb-item>
		  <el-breadcrumb-item>申请详情</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="content">
			<el-form ref="form" :model="form" label-width="80px">
				<el-row :gutter="24">
					<el-col :xs="24" :sm="20" :md="18" :lg="14" :xl="8">
						<div class="grid-content">
						  <el-form-item label="标题">
						    <el-input v-model="form.title"></el-input>
						  </el-form-item>
						  <el-form-item label="申请人">
						    <el-input v-model="form.name" disabled></el-input>
						  </el-form-item>
						  <el-form-item label="公司">
						    <el-input v-model="form.company" disabled></el-input>
						  </el-form-item>
						  <el-form-item label="部门">
						    <el-input v-model="form.group" disabled></el-input>
						  </el-form-item>
						  <el-form-item label="时间">
						    <el-date-picker
						      v-model="form.value_date"
						      type="datetimerange"
						      range-separator="至"
						      start-placeholder="开始日期"
						      end-placeholder="结束日期">
						    </el-date-picker>
						  </el-form-item>
						  <el-form-item label="理由">
						    <el-input
							  type="textarea"
							  :rows="2"
							  placeholder="请输入内容"
							  v-model="form.reason">
							</el-input>
						  </el-form-item>
						  <el-form-item label="附件">
						    <el-upload
							  class="upload-demo"
							  action="https://jsonplaceholder.typicode.com/posts/"
							  :on-change="handleChange"
							  :file-list="fileList">
							  <el-button size="small" type="primary">点击上传</el-button>
							  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
							</el-upload>
						  </el-form-item>
						  <el-form-item>
						    <el-button type="primary" @click="onSubmit">确定</el-button>
						    <el-button>取消</el-button>
						  </el-form-item>
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          title: '病假',
          name: '胡苗苗',
          company: '新速马',
          group: '信息技术部',
          start_date: '2018-11-07 08:30:00',
          end_date: '2018-11-07 17:30:00',
          reason: '',
          value_date: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        },
        fileList: [{
          name: '病假单.jpeg',
          url: ''
        }, {
          name: '挂号单.jpeg',
          url: ''
        }, {
          name: '病历单.jpeg',
          url: ''
        }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
    }
  }
</script>
<style scoped="scoped">
	.el-breadcrumb{padding: 20px;background-color: #fff;margin-bottom: 20px;}
	.content{background-color: #fff;padding: 20px;}
	.el-input,.el-select,.el-date-editor{width: 100% !important;}
</style>