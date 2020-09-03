import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/account/login', component: '@/pages/account/login' },
    { path: '/', component: '@/pages/index' },
    { path: '/404', component: '@/pages/404' },
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:8081',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    }
  }
});
