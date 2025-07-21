import { usePage, useRemember } from "@inertiajs/react";
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
    useEffect,
} from "react";

type ModalProps = {
    followListModal: boolean;
    setFollowListModal: Dispatch<SetStateAction<boolean>>;
    followers: boolean;
    setFollowers: Dispatch<SetStateAction<boolean>>;
    homeCardList: boolean;
    setHomeCardList: Dispatch<SetStateAction<boolean>>;
    savedCardList: boolean;
    setSavedCardList: Dispatch<SetStateAction<boolean>>;
    rightBar: boolean;
    setRightBar: Dispatch<SetStateAction<boolean>>;
    postModal: boolean;
    setPostModal: Dispatch<SetStateAction<boolean>>;
    changeModal: () => void;
    toggleDarkMode: () => void;
    darkMode: boolean;
};

const ModalContext = createContext<ModalProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [postModal, setPostModal] = useState(false);
    const [rightBar, setRightBar] = useRemember(true, "rightBar");
    const [homeCardList, setHomeCardList] = useState(true);
    const [savedCardList, setSavedCardList] = useState(false);
    const [followListModal, setFollowListModal] = useState(false);
    const [followers, setFollowers] = useState(false);

    const changeModal = () => {
        setPostModal((prev) => !prev);
    };
    // それ以外のダークモード切り替え
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <ModalContext.Provider
            value={{
                darkMode,
                toggleDarkMode,
                rightBar,
                setRightBar,
                followers,
                setFollowers,
                followListModal,
                setFollowListModal,
                homeCardList,
                setHomeCardList,
                savedCardList,
                setSavedCardList,
                postModal,
                setPostModal,
                changeModal,
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
