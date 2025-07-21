// resources/js/bootstrap.ts

import axios from 'axios';

// window.axios をグローバルに用意
window.axios = axios;

// XMLHttpRequest ヘッダをセット（Inertia/SPA 向け）
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// CSRF トークンもここでセットするとさらに安心
const token = document
  .querySelector('meta[name="csrf-token"]')
  ?.getAttribute('content');
if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
}
