import { defineConfig } from 'umi';

export default defineConfig({
    define: {
        'process.env.REQUEST_BASE_URL': '/api',//由于本地需要启用跨域代理，所以添加"/api"，在代理中移除
        'process.env.VERSION': '开发版',
    },
    proxy: {
        '/api': {
            target: 'http://localhost:8081',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        }
    },
});
