// resources/js/app.tsx
import { ModalProvider } from 'Pages/context/modalContext';
import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async (name) => {
    const pages = {
      ...import.meta.glob('./Pages/**/*.tsx'),
      ...import.meta.glob('./Pages/**/*.jsx'),
    };
    return (
      (pages[`./Pages/${name}.tsx`]?.() as Promise<any>) ||
      pages[`./Pages/${name}.jsx`]?.()
    );
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      <ModalProvider>                {/* ← ここでラップ */}
        <App {...props} />
      </ModalProvider>
    );
  },
  progress: {
    color: '#4B5563',
  },
});
