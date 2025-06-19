import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async (name) => {
    const pages = {
      ...import.meta.glob('./Pages/**/*.tsx'),
      ...import.meta.glob('./Pages/**/*.jsx'),
    };
    return await pages[`./Pages/${name}.tsx`]?.() || pages[`./Pages/${name}.jsx`]?.();
  },
  setup({ el, App, props }) {
    // React 18 推奨の hydrateRoot を使う（SSR or 初期マウント時）
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
  progress: {
    color: '#4B5563',
  },
});
