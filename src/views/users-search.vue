<template>
	<div class="main">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/users'}">我的申请</el-breadcrumb-item>
		  <el-breadcrumb-item>申请查询</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="content">
			<el-table
		    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
		    :default-sort = "{prop: 'entrytime', order: 'descending'}"
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
		      label="申请人"
		      align="center"	
		      width="180">
		      <template slot-scope="scope">
		        <el-popover trigger="hover" placement="top">
		          <p>姓名: {{ scope.row.name }}</p>
		          <p>合计时间: {{ scope.row.total }}</p>
		          <div slot="reference" class="name-wrapper">
		            <el-tag size="medium">{{ scope.row.name }}</el-tag>
		          </div>
		        </el-popover>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="申请时间"
		      sortable
		      align="center"	
		      prop="sq_date">
		    </el-table-column>
		    <el-table-column
		      label="处理结果"
		      align="center"	
		      prop="result">
		      <template slot-scope="scope">
		        <el-tag
		          :type="scope.row.result === '同意' ? 'primary' : 'danger'"
		          disable-transitions>{{scope.row.result}}</el-tag>
		      </template>
		    </el-table-column>
		    <el-table-column label="操作" align="center">
		      <template slot-scope="scope">
		      	<router-link :to="{path: '/users/details/'+ scope.row.id}">
		        <el-button type="text" size="small">查看</el-button>
		        </router-link>
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
	  	axios.get('../../static/data.json', {})
		.then((response) => {
			console.log(response.data.users)
			this.tableData = response.data.myApplication
		})
		.catch(function (error) {
		    console.log(error);
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