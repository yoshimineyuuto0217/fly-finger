// resources/js/app.tsx
import { ModalProvider } from "Pages/context/modalContext";
import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "Pages/context/authContext";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const pages = {
            ...import.meta.glob("./Pages/**/*.tsx"),
            ...import.meta.glob("./Pages/**/*.jsx"),
        };
        return (
            (pages[`./Pages/${name}.tsx`]?.() as Promise<any>) ||
            pages[`./Pages/${name}.jsx`]?.()
        );
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <AuthProvider>
                <ModalProvider>
                    {" "}
                    <App {...props} />
                </ModalProvider>
            </AuthProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
