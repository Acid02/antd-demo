/*
 * @Author: your name
 * @Date: 2021-07-29 10:05:08
 * @LastEditTime: 2021-07-29 10:28:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-demo\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from './router';


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
