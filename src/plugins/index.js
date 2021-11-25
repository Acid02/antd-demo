import router from '@/router'
import { Button, badge } from 'ant-design-vue';
/*
 * @Author: hupeng
 * 插件集
 * @type {import("vue").Plugin[]}
 */
const plugins = [router, Button, badge];
/**
 * 批量注册
 * @param {import("vue").App} app
 */
export const usePlugins = app => plugins.forEach(app.use, app)
