<template>
  <!--编写页面静态部分，及view部分-->
  <div>

    <el-form :model="params">
      <el-select v-model="params.siteId" placeholder="请选择站点">
        <el-option
          v-for="item in siteList"
          :key="item.siteId"
          :label="item.siteName"
          :value="item.siteId">
        </el-option>
      </el-select>
      页面别名：<el-input v-model="params.pageAliase" style="width: 100px;" placeholder="请输入内容"></el-input>
      <el-button type="primary" size="small" v-on:click="query">查询</el-button>
      <router-link :to="{path:'/cms/page/add', query: {
        page: this.params.page,
        siteId: this.params.siteId
       }}">
        <el-button  type="primary" size="small">新增页面</el-button>
      </router-link>
    </el-form>
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120">
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="150">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="250">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
      </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" width="180" >
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template slot-scope="page">
          <el-button
            size="small"type="text"
            @click="edit(page.row.pageId)">编辑
          </el-button>
          <el-button
            size="small"type="text"
            @click="del(page.row.pageId)">删除
          </el-button>
        </template>

      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :page-size="params.size"
      :current-page="params.page"
      v-on:current-change="changePage"
      style="float:right">
    </el-pagination>
  </div>
</template>
<script>
  /*编写页面静态部分，即model和vm部分*/
  import * as cmsApi from  '../api/cms'
  export default {
    data() {
      return {
        siteList: [],
        list: [],
        total: 0,
        params:{
          page: 1,
          size: 10,
          siteId: "",
          pageAliase: "",
          sitePage: 1,
          siteSize: 10
        }
      }
    },
    methods: {
      query: function () {
        cmsApi.page_list(this.params.page, this.params.size, this.params).then( (res) => {
          console.log(res)
          this.total = res.queryResult.total
          this.list = res.queryResult.list
        })
       /* alert('hhhh')*/
      },
      changePage: function (page) { //page就是当前页码
        // alert(page)
        this.params.page = page
        this.query()
      },
      querySites: function () {
        cmsApi.site_list(this.params.sitePage, this.params.siteSize).then((res) => {
          this.siteList = res.queryResult.list
        })
      },
      edit: function (pageId) {
        this.$router.push({ path: '/cms/page/edit/' + pageId, query: {
          page: this.params.page,
          siteId: this.params.siteId
          }})
      },
      //删除
      del: function (pageId) {
        this.$confirm('确定要删除此页面吗？', '提示', {}).then(()=>{
          cmsApi.page_del(pageId).then((res) => {
            if (res.success) {
              this.$message({
                type: 'success',
                message: '删除成功'
              });
              this.query()
            } else {
              this.$message({
                type: 'error',
                message: '删除失败'
              })
            }
          })
        })
      }
    },
    mounted() {
      //当DOM元素完成渲染后调用
      this.query()
      this.querySites()
    },
    created() {
      //从路由上获取参数
      this.params.page = Number.parseInt(this.$route.query.page || 1);
      this.params.siteId = this.$route.query.siteId || '';
    }
  }
</script>
<style>
  /*编写页面样式，不是必须*/
</style>
