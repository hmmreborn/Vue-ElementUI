<template>
	<div class="main">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/users'}">人事档案</el-breadcrumb-item>
		  <el-breadcrumb-item>档案管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="userinfo">
			<el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
			  <el-tab-pane label="基本信息" name="first">
			  	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			  	  <el-row :gutter="24">
			  	  	<el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
			  	  	  <div class="grid-content">
			  	  	  	<el-row :gutter="24">
			  	  	  		<el-col :span="8">
			  	  	  			<div class="grid-content">
									<el-form-item label="员工编号" prop="zquid">
									  <el-input v-model="ruleForm.zquid" disabled></el-input>
									</el-form-item>
									<el-form-item label="曾用名" prop="zqnamed">
									  <el-input v-model="ruleForm.zqnamed"></el-input>
									</el-form-item>
									<el-form-item label="身份证" prop="zqid">
									  <el-input v-model="ruleForm.zqid"></el-input>
									</el-form-item>
									<el-form-item label="手机号码" prop="zqphone">
									  <el-input v-model.number="ruleForm.zqphone"></el-input>
									</el-form-item>
									<el-form-item label="家庭电话" prop="zqfamily">
									  <el-input v-model="ruleForm.zqfamily"></el-input>
									</el-form-item>
									<el-form-item label="常住地" prop="zqresidence">
									  <el-input v-model="ruleForm.zqresidence"></el-input>
									</el-form-item>
									<el-form-item label="所属部门" prop="affiliate">
									    <el-select v-model="ruleForm.affiliate" clearable placeholder="请选择">
										    <el-option
										      v-for="item in ruleForm.options"
										      :key="item.value"
										      :label="item.label"
										      :value="item.value">
										    </el-option>
										</el-select>
								    </el-form-item>
									<el-form-item label="工作地点" prop="zqworkplace">
									  <el-input v-model="ruleForm.zqworkplace"></el-input>
									</el-form-item>
									<el-form-item label="劳动手册" prop="zqhandbook">
									    <el-select v-model="ruleForm.zqhandbook" placeholder="请选择">
									      <el-option label="有" value="1"></el-option>
									      <el-option label="无" value="2"></el-option>
									    </el-select>
									</el-form-item>
									<el-form-item label="是否">
								      <el-checkbox v-model="ruleForm.checked">曾被劳动教养、拘留或依法被追究刑事责任</el-checkbox>
								    </el-form-item>
								    <el-form-item label="备注">
								    <el-input
									  type="textarea"
									  :rows="2"
									  placeholder="请输入内容"
									  v-model="ruleForm.textarea">
									</el-input>
								    </el-form-item>
			  	  	  			</div>
			  	  	  		</el-col>
			  	  	  		<el-col :span="8">
			  	  	  			<div class="grid-content">
									<el-form-item label="姓名" prop="zqname">
									  <el-input v-model="ruleForm.zqname"></el-input>
									</el-form-item>
									<el-form-item label="性别" prop="zqsex">
										<el-radio class="radio" v-model="ruleForm.zqsex" label="1">男</el-radio>
  										<el-radio class="radio" v-model="ruleForm.zqsex" label="2">女</el-radio>
									</el-form-item>
									<el-form-item label="身份证到期日" prop="zqidexpires"> 
										<el-date-picker
									      v-model="ruleForm.zqidexpires"
									      type="date"
									      placeholder="选择日期"
									      :picker-options="ruleForm.pickerOptions0">
									    </el-date-picker>
									</el-form-item>
									<el-form-item label="紧急联系人" prop="zqcname">
									  <el-input v-model="ruleForm.zqcname"></el-input>
									</el-form-item>
									<el-form-item label="电子邮箱" prop="zqemail">
									  <el-input v-model="ruleForm.zqemail"></el-input>
									</el-form-item>
									<el-form-item label="常住地邮编" prop="zqresidencode">
									  <el-input v-model="ruleForm.zqresidencode"></el-input>
									</el-form-item>
									<el-form-item label="所在小组" prop="zqgroup">
									  <el-input v-model="ruleForm.zqgroup"></el-input>
									</el-form-item>
								    <el-form-item label="工作部门" prop="zqdepartment">
									  <el-input v-model="ruleForm.zqdepartment"></el-input>
									</el-form-item>
									<el-form-item label="在职状态" prop="zqregion">
									    <el-select v-model="ruleForm.zqregion" placeholder="请选择">
									      <el-option label="在职" value="1"></el-option>
									      <el-option label="离职" value="2"></el-option>
									    </el-select>
									</el-form-item>
									<el-form-item label="户籍" prop="zqcode">
									  <el-input v-model="ruleForm.zqcode"></el-input>
									</el-form-item>
			  	  	  			</div>
			  	  	  		</el-col>
			  	  	  		<el-col :span="8">
			  	  	  			<div class="grid-content">
									<el-form-item label="出生年月" prop="zqbirth">
									  <el-input v-model="ruleForm.zqbirth" disabled></el-input>
									</el-form-item>
									<el-form-item label="年龄" prop="zqage">
									  <el-input v-model="ruleForm.zqage" disabled></el-input>
									</el-form-item>
									<el-form-item label="属相" prop="zqzodiac">
									  <el-input v-model="ruleForm.zqzodiac" disabled></el-input>
									</el-form-item>
									<el-form-item label="星座" prop="zqstarsign">
									  <el-input v-model="ruleForm.zqstarsign" disabled></el-input>
									</el-form-item>
									<el-form-item label="婚姻状况" prop='zqmarriage'>
									    <el-select v-model="ruleForm.zqmarriage" placeholder="请选择">
									      <el-option label="已婚" value="married"></el-option>
									      <el-option label="未婚" value="unmarried"></el-option>
									    </el-select>
									</el-form-item>
									<el-form-item label="生育状态" prop='zqborn'>
									    <el-select v-model="ruleForm.zqborn" placeholder="请选择">
									      <el-option label="已生育" value="borned"></el-option>
									      <el-option label="未生育" value="unborned"></el-option>
									    </el-select>
									</el-form-item>
									<el-form-item label="子女数" prop="zqchild">
									  <el-input v-model="ruleForm.zqchild"></el-input>
									</el-form-item>
									<el-form-item label="民族" prop='zqnation'>
									    <el-select v-model="ruleForm.zqnation" placeholder="请选择">
									      <el-option label="汉族" value="nation1"></el-option>
									      <el-option label="其他" value="nation2"></el-option>
									    </el-select>
									</el-form-item>
									<el-form-item label="党派" prop='zqparty'>
									    <el-select v-model="ruleForm.zqparty" placeholder="请选择">
									      <el-option label="共产党" value="1"></el-option>
									      <el-option label="民主党" value="2"></el-option>
									      <el-option label="其他" value="3"></el-option>
									    </el-select>
									</el-form-item>
									<el-form-item label="户籍性质" prop='zqcode1'>
									    <el-select v-model="ruleForm.zqcode1" placeholder="请选择">
									      <el-option label="城镇" value="1"></el-option>
									      <el-option label="农村" value="2"></el-option>
									    </el-select>
									</el-form-item>
			  	  	  			</div>
			  	  	  		</el-col>
			  	  	  	</el-row>
			  	  	  	<el-row :gutter="24">
			  	  	  		<el-col :span='24'>
			  	  	  			<div class="grid-content">
			  	  	  				<el-form-item>
									  <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
									  <el-button @click="resetForm('ruleForm')">重置</el-button>
									</el-form-item>
			  	  	  			</div>
			  	  	  		</el-col>
			  	  	  	</el-row>
			  	  	  </div>
			  	  	</el-col>
			  	  	<el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
			  	  	  <div class="grid-content">
			  	  	  	<el-row :gutter='24'>
				  	  	  	<el-col :span="24">
				  	  	  		<div class="grid-content">
				  	  	  			<el-form-item label="照片" prop="zqpic">
									  <el-upload
										  class="avatar-uploader"
										  action="https://jsonplaceholder.typicode.com/posts/"
										  :show-file-list="false"
										  :on-success="handleAvatarSuccess"
										  :before-upload="beforeAvatarUpload">
										  <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
										  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
										</el-upload>
									</el-form-item>
				  	  	  		</div>
				  	  	  	</el-col>
			  	  	  	</el-row>
			  	  	  </div>
			  	  	</el-col>
			  	  </el-row>	
				</el-form>
			  </el-tab-pane>
			  <el-tab-pane label="工作经验" name="second">工作经验
			  </el-tab-pane>
			  <el-tab-pane label="教育背景" name="third">教育背景</el-tab-pane>
			  <el-tab-pane label="培训记录" name="fourth">培训记录</el-tab-pane>
			  <el-tab-pane label="技能信息" name="five">技能信息</el-tab-pane>
			  <el-tab-pane label="健康信息" name="six">健康信息</el-tab-pane>
			  <el-tab-pane label="社会关系" name="seven">社会关系</el-tab-pane>
			  <el-tab-pane label="职位信息" name="eight">职位信息</el-tab-pane>
			  <el-tab-pane label="合同信息" name="nine">合同信息</el-tab-pane>
			  <el-tab-pane label="奖惩记录" name="ten">奖惩记录</el-tab-pane>
			  <el-tab-pane label="其他申请" name="eleven">其他申请</el-tab-pane>
			  <el-tab-pane label="公司资产" name="twelve">公司资产</el-tab-pane>
			  <el-tab-pane label="员工离职" name="thirteen">员工离职</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
	 var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }else{
        	const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        	if(reg.test(value)){
        		callback()
        	}else{
        		return callback(new Error('请输入正确的手机号'))
        	}
        }
      };
      return {
      	activeName: 'first',
        ruleForm: {
          zqid: '编号自动生成',
          zqname: '',
          zqbirth: '根据身份证自动带入',
          zqnamed: '',
          zqsex: '1',
          zqage: '根据身份证自动带入',
          zqid: '',
          zqidexpires: '',
          pickerOptions0: {
          	disabledDate(time){
          		return time.getTime() < Date.now() - 8.64e7;
          	}
          },
          zqzodiac: '根据身份证自动带入',
          zqphone: '',
          zqcname: '',
          zqstarsign: '',
          zqfamily: '',
          zqemail: '',
          zqmarriage: '',
          zqresidence: '',
          zqresidencode: '',
          zqborn: '',
          options: [{
	          value: '选项1',
	          label: '行政部'
	        }, {
	          value: '选项2',
	          label: '财务部'
	        }, {
	          value: '选项3',
	          label: '信息技术部'
	        }, {
	          value: '选项4',
	          label: '采购部'
	        }, {
	          value: '选项5',
	          label: '人事部'
	        }],
	      affiliate: '',
	      zqchild: '',
	      zqgroup: '',
	      zqdepartment: '',
	      zqnation: '',
	      zqworkplace: '',
	      zqregion: '',
	      zqparty: '',
	      zqhandbook: '',
	      zqcode: '',
	      zqcode1: '',
	      checked: false,
	      textarea: '',
	      zqpic: '',
	      imageUrl: ''
        },
        rules: {
          zqname: [
            { required: true, message: '姓名不能为空', trigger: 'blur' },
          ],
          zqid: [
          	{ required: true, message: '请输入身份证号', trigger: 'blur' },
          ],
          zqphone: [
          	{ required: true, validator: checkAge, trigger: 'blur' },
          ],
          zqemail: [
          	{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
      		{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          zqresidence: [
          	{ required: true, message: '请输入常住地址', trigger: 'blur' },
          ],
          zqworkplace: [
          	{ required: true, message: '工作地点不能为空', trigger: 'blur' },
          ],
          zqregion: [
          	{ required: true, message: '在职状态不能为空', trigger: 'blur' },
          ],
          affiliate: [
          	{ required: true, message: '请选择', trigger: 'blur' },
          ],
          zqhandbook: [
          	{ required: true, message: '请选择', trigger: 'blur' },
          ]
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({path: '/usersinfo'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style>
	.el-breadcrumb{padding: 20px;background-color: #fff;margin-bottom: 20px;}
	.userinfo{background-color: #fff;}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
	  .el-input,.el-select{width: 100% !important;}
</style>