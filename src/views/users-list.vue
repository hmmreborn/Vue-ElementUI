<template>
	<div class="main">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/users'}">我的申请</el-breadcrumb-item>
		  <el-breadcrumb-item>申请跟踪</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="content">
			<el-table
		    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
		    :default-sort = "{prop: 'id', order: 'descending'}"
		    style="width: 100%">
		    <el-table-column 
		      align="center"	
		      label="单号"
		      sortable
		      prop="id">
		    </el-table-column>
		    <el-table-column
		      label="标题"
		      align="center"	
		      sortable
		      prop="title">
		    </el-table-column>
		    <el-table-column
		      label="流程名称"
		      align="center"	
		      prop="lcname">
		    </el-table-column>
		    <el-table-column
		      label="流程名称"
		      align="center"	
		      prop="name">
		    </el-table-column>
		    <el-table-column
		      label="申请时间"
		      sortable
		      align="center"	
		      prop="sq_date">
		    </el-table-column>
		    <el-table-column
		      label="审批人"
		      align="center"	
		      prop="approval">
		    </el-table-column>
		    <el-table-column label="操作" align="center">
		      <template slot-scope="scope">
		      	<router-link :to="{path: '/users/details/'+ scope.row.id}">
		        	<el-button type="text" size="small">查看</el-button>
		        </router-link>
		        <el-button type="text" size="small" @click="open" style="color: #F56C6C;padding: 0 10px;">撤销</el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		  <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]" 
            :page-size="pagesize" 
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
        </el-pagination>
		</div>
	</div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
      	currentPage:1,
        pagesize:10, 
        tableData: []
      }
    },
    created(){
    	this.getData();
    },
    methods: {
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
	  },
	  handleCurrentChange: function(currentPage){
	    this.currentPage = currentPage;
	    console.log(this.currentPage)  //点击第几页
	  },
	  getData: function(){
	  	axios.get('../../static/data.json', {
//	  		params: {
//		      id: 12345
//		    }
	  	})
		.then((response) => {
			console.log(response.data.users)
			this.tableData = response.data.myList
		})
		.catch(function (error) {
		    console.log(error);
		});
	  },
	  open() {
        this.$confirm('撤销此次申请, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '撤销成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }
    }
  }
</script>

<style >
	.el-breadcrumb{padding: 20px;background-color: #fff;margin-bottom: 20px;}
	.content{background-color: #fff;}
	.demo-table-expand {
	    font-size: 0;
	}
	.demo-table-expand label {
	    width: 90px;
	    color: #99a9bf !important;	
	}
	.demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 25%;
	}
	.el-table__expanded-cell {
	    padding: 20px 50px;
	    background-color: #fbfdff;
	}
	.el-pagination{padding: 20px;}
</style>