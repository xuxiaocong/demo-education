import { defineConfig } from 'umi';

export default defineConfig({
    define: {
        'process.env.REQUEST_BASE_URL': 'http://www.damengsanqian.com:8081',
        'process.env.VERSION': 'beta版',
    },
});
