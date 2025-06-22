import {
    createContext,
    useContext,
    ReactNode,
} from "react";

type ModalProps = {
    modeChange: () => void;
};
const ModalContext = createContext<ModalProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    // モードの切り替え処理
    const modeChange = () => {
        const body = document.body;
        const allCallers = document.querySelectorAll(".changCaller");
        const bgChangeCallers = document.querySelectorAll(".changCallers");

        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            body.classList.add("light");
            bgChangeCallers.forEach((el) => {
                el.classList.add("bg-white");
                el.classList.remove("bg-black");
            });
            allCallers.forEach((el) => {
                el.classList.remove("bg-black", "hover:bg-gray-900");
                el.classList.add("bg-white", "hover:bg-gray-100");
            });
        } else {
            body.classList.remove("light");
            body.classList.add("dark");
            bgChangeCallers.forEach((el) => {
                el.classList.add("bg-black");
                el.classList.remove("bg-white");
            });
            allCallers.forEach((el) => {
                el.classList.remove("bg-white", "hover:bg-gray-100");
                el.classList.add("bg-black", "hover:bg-gray-900");
            });
        }
    };

    return (
        <ModalContext.Provider
            value={{
                modeChange,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

// context内で useModal フックを定義しているファイルで修正
export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
