<template>
	<div class="from-wrap">
		<!--<div class="text-center">
			<img src="../assets/logo.png">
		</div>-->
		<el-row type="flex" class="row-bg" justify="center" align='middle'>
			<el-col :xs="24" :sm="11" :md="9" :lg="7" :xl="5">
				<div class="grid-content">
				 	<el-card class="box-card">
						<el-tabs v-model="activeName" @tab-click="handleClick">
						    <el-tab-pane label="登录" name="login">
						    	<div>
						    		<el-form :model="loginForm" status-icon ref="loginFormRefs" label-width="100px" class="demo-ruleForm">
										  <el-form-item 
										  	label="账号" 
										  	prop="username" 
										  	:rules="[{ required: true, message: '请输入账号', trigger: 'blur' },]">
										     <el-input v-model="loginForm.username"></el-input>
										  </el-form-item>
										  <el-form-item 
										  	label="密码" 
										  	prop="password"
										  	:rules="[{ required: true, message: '请输入密码', trigger: 'blur' },]">
										    <el-input type="password" v-model="loginForm.password"></el-input>
										  </el-form-item>
										  <el-form-item>
										    <el-button type="primary" @click="submitLoginForm('loginFormRefs')">提交</el-button>
										  </el-form-item>
									</el-form>
						    	</div>
						    </el-tab-pane>
						    <el-tab-pane label="注册" name="register">
						    	<div>
						    		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						    		  <el-form-item label="账号" prop="uname">
									    <el-input  v-model="ruleForm.uname" autocomplete="off"></el-input>
									  </el-form-item>	
									  <el-form-item label="密码" prop="pass">
									    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
									  </el-form-item>
									  <el-form-item label="确认密码" prop="checkPass">
									    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
									  </el-form-item>
									  <el-form-item label="邮箱" prop="email">
									    <el-input type='email' v-model="ruleForm.email" autocomplete="off"></el-input>
									  </el-form-item>
									  <el-form-item label="年龄" prop="age">
									    <el-input v-model.number="ruleForm.age"></el-input>
									  </el-form-item>
									  <el-form-item>
									    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
									    <el-button @click="resetForm('ruleForm')">重置</el-button>
									  </el-form-item>
									</el-form>
						    	</div>
						    </el-tab-pane>
						</el-tabs>
					</el-card>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var checkEmail = (rule, value, callback) => {
      	const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }
        setTimeout(() => {
          if (mailReg.test(value)) {
          	callback()
          } else {
          	callback(new Error('请输入正确邮箱'));
          }
        }, 1000);
      };
      var checkUname = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else {
        	if(value.length < 5){
        		callback(new Error('长度不得少于 5 个字符'));
        	}else{
        		callback();
        	}
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'login',
        loginForm: {
          username: '',
          password: '',
        },
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          email: ''
        },
        rules: {
          uname: [
          	{ validator: checkUname, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          email: [
          	{ validator: checkEmail, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      submitLoginForm(formName){
      	this.$refs[formName].validate((valid) => {
      		if(valid){
      			//console.log(this.$router)
      			this.$router.push({path: '/home'})
      		}else{
      			console.log('error submit!!');
      			return false;
      		}
      	})
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>
<style scoped="scoped">
	.text-center{text-align: center;}
	.from-wrap{margin: 120px auto;}
</style>