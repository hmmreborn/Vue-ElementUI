<template>
	<div class="main">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/users'}">个人事务</el-breadcrumb-item>
		  <el-breadcrumb-item>通讯录</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="content">
			<el-table
		    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
		    :default-sort = "{prop: 'entrytime', order: 'descending'}"
		    style="width: 100%">
		    <el-table-column type="expand">
		      <template slot-scope="props">
		        <el-form label-position="left" inline class="demo-table-expand">
		          <el-form-item label="员工编号">
		            <span>{{ props.row.id }}</span>
		          </el-form-item>
		          <el-form-item label="姓名">
		            <span>{{ props.row.name }}</span>
		          </el-form-item>
		          <el-form-item label="手机号">
		            <span>{{ props.row.phone }}</span>
		          </el-form-item>
		          <el-form-item label="邮箱">
		            <span>{{ props.row.email }}</span>
		          </el-form-item>
		          <el-form-item label="身份证号">
		            <span>{{ props.row.codeID }}</span>
		          </el-form-item>
		          <el-form-item label="地址">
		            <span>{{ props.row.address }}</span>
		          </el-form-item>
		          <el-form-item label="在职状态">
		            <span>{{ props.row.status }}</span>
		          </el-form-item>
		          <el-form-item label="入职时间">
		            <span>{{ props.row.entrytime }}</span>
		          </el-form-item>
		        </el-form>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="入职时间"
		      sortable
		      prop="entrytime">
		    </el-table-column>
		    <el-table-column
		      label="员工编号"
		      sortable
		      prop="id">
		    </el-table-column>
		    <el-table-column
		      label="姓名"
		      prop="name">
		    </el-table-column>
		    <el-table-column
		      label="联系电话"
		      prop="phone">
		    </el-table-column>
		    <el-table-column
		      label="邮箱"
		      prop="email">
		    </el-table-column>
		    <el-table-column
		        prop="status"
		        label="筛选"
		        width="100"
		        :filters="[{ text: '在职', value: '在职' }, { text: '离职', value: '离职' }]"
		        :filter-method="filterTag"
		        filter-placement="bottom-end">
		        <template slot-scope="scope">
		          <el-tag
		            :type="scope.row.status === '在职' ? 'primary' : 'success'"
		            disable-transitions>{{scope.row.status}}</el-tag>
		        </template>
		    </el-table-column>
		    <el-table-column label="操作">
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click.native.prevent="handleDelete(scope.$index, tableData)">删除</el-button>
		          
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
      filterTag(value, row) {
        return row.status === value;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, rows) {
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          rows.splice(index, 1);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
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
			this.tableData = response.data.users
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