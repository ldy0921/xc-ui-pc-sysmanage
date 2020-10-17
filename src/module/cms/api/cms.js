import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

export const page_list = (page, size, params) => {
  //将json对象转成key/value对
  let queryStr = querystring.stringify(params);
  return http.requestQuickGet(apiUrl + '/cms/page/list/'+ page + '/' + size + "?" + queryStr)
};

export const page_add = (params) => {
  return http.requestPost(apiUrl + '/cms/page/add/', params)
};

export const page_get = (id) => {
  return http.requestQuickGet(apiUrl + '/cms/page/get/'+ id)
};

export const page_edit = (id, params) => {
  return http.requestPut(apiUrl + '/cms/page/edit/'+ id, params)
};

export const page_del = (id) => {
  return http.requestDelete(apiUrl + '/cms/page/del/'+ id)
};

export const site_list = (page, size) => {
  return http.requestQuickGet(apiUrl + '/cms/site/list/'+ page + '/' + size)
};


