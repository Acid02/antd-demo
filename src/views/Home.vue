<!--
 * @Author: your name
 * @Date: 2021-07-29 10:05:08
 * @LastEditTime: 2021-07-29 10:42:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-demo\src\views\Home.vue
-->
<template>
  <div class="home">首页</div>
  <a-button>123</a-button>

  <br />
  <a-badge
    color="#f50"
    status="success"
    text="哈哈"
    title="123"
    :numberStyle="style"
  />
  {{ style }}
  <br />
  <a-badge :count="5" :numberStyle="style">
    <a href="#" class="head-example">2134123</a>
  </a-badge>
  <br />
  <a-badge :count="5" />
</template>

<script>
// @ is an alias to /src
import { reactive } from "vue";
export default {
  name: "Home",
  setup() {
    let style = reactive({
      color: "#42B983",
    });
    // console.log(style);
    return { style };
  },
};
</script>
<style>
.ant-badge-status-text {
  font-size: 30px;
}
</style>
