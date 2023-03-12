<template>
  <h2> 这里是request请求页面 </h2>
  <br />
  <router-link to="/">点击跳转至首页</router-link>
  <button @click="requestRes()"> 普通请求</button>
  <button @click="requestResAPI()"> login api 请求</button>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import request from '@/utils/http';
  import API from '@/api';
  export default defineComponent({
      name: 'RequestPage',
      setup() {
          const requestRes = async () => {
              let result = await request({
                  url: '/api/course?_limit=5',
                  method: 'get'
              });
              console.log(result);
          };
          const requestResAPI = async () => {
              let result = await API.login('zhangsan', '123456');
              console.log(result);
          };
          return {
              requestRes,
              requestResAPI
          };
      }
  });
</script>