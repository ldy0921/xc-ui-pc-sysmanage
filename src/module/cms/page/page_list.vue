<template>
  <!--编写页面静态部分，及view部分-->
  <div>
    <el-button type="primary" size="small" v-on:click="query">查询</el-button>
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
        list: [
          {
            "siteId": "5a751fab6abb5044e0d19ea1",
            "pageId": "5ad92f5468db52404cad0f7c",
            "pageName": "402885816243d2dd016243f24c030002.html",
            "pageAliase": "课程详情页面",
            "pageWebPath": "/course/",
            "pageParameter": null,
            "pagePhysicalPath": "F:/eduprojects/xc-edu-snapshotv1.0/xc-ui-pc-static-portal/course/detail/",
            "pageType": "1",
            "pageTemplate": null,
            "pageHtml": null,
            "pageStatus": null,
            "pageCreateTime": "2018-05-26T08:49:33.332+0000",
            "templateId": "5aec5dd70e661808240ab7a6",
            "pageParams": null,
            "htmlFileId": "5b091f97c5e9b7070c94a2bb",
            "dataUrl": null
          },
          {
            "siteId": "5a751fab6abb5044e0d19ea1",
            "pageId": "5ad94b9168db5243ec846e8e",
            "pageName": "preview_4028858162e0bc0a0162e0bfdf1a0000.html",
            "pageAliase": "课程预览页面",
            "pageWebPath": "/coursepre/",
            "pageParameter": null,
            "pagePhysicalPath": "F:\\develop\\xc_portal_static\\course\\preview\\",
            "pageType": "1",
            "pageTemplate": null,
            "pageHtml": null,
            "pageStatus": null,
            "pageCreateTime": "2018-04-20T02:08:17.621+0000",
            "templateId": "5a925be7b00ffc4b3c1578b5",
            "pageParams": null,
            "htmlFileId": "5ad94b9168db5243ec846e8f",
            "dataUrl": "http://localhost:40200/portalview/course/get/4028858162e0bc0a0162e0bfdf1a0000"
          },
          {
            "siteId": "5a751fab6abb5044e0d19ea1",
            "pageId": "5ad94ba368db5243ec846e91",
            "pageName": "4028858162e0bc0a0162e0bfdf1a0000.html",
            "pageAliase": "课程详情页面",
            "pageWebPath": "/course/",
            "pageParameter": null,
            "pagePhysicalPath": "F:\\develop\\xc_portal_static\\course\\detail\\",
            "pageType": "1",
            "pageTemplate": null,
            "pageHtml": null,
            "pageStatus": null,
            "pageCreateTime": "2018-04-20T02:08:35.601+0000",
            "templateId": "5a925be7b00ffc4b3c1578b5",
            "pageParams": null,
            "htmlFileId": "5ad94b9168db5243ec846e8f",
            "dataUrl": null
          }
        ],
        total: 20,
        params:{
          page: 1,
          size: 10
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
        alert('hhhh')
      },
      changePage: function () {
        this.query()
      }
    }
  }
</script>
<style>
  /*编写页面样式，不是必须*/
</style>
