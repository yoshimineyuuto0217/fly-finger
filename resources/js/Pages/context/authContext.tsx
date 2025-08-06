import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

// type profileProps = {
//     name: string;
//     profile_text: string;
//     profile_image: string;
// };

type authProps = {
    // user: profileProps | null;
    submitLogin: (
        e: React.FormEvent<HTMLFormElement>,
        credentials: { name: string; email: string; password: string }
    ) => Promise<void>;
    // profileName: string;
    // setProfileName: Dispatch<SetStateAction<string>>;
    // profileText: string;
    // setProfileText: Dispatch<SetStateAction<string>>;
    // profileImage: string;
    // setProfileImage: Dispatch<SetStateAction<string>>;
    // getProfile: () => Promise<null | undefined>;
};

const authContextProvider = createContext<authProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: any }) => {

    // ログイン処理
    const submitLogin = async (
        e: React.FormEvent<HTMLFormElement>,
        credentials: { name: string; email: string; password: string }
    ) => {
        e.preventDefault();
        try {
            await axios.get("/sanctum/csrf-cookie", { withCredentials: true });
            const res = await axios.post("/login", credentials, {
                withCredentials: true,
            });
            if (res.status === 200) {
                Inertia.visit("/home");
            }
        } catch (error) {
            console.error("ログインに失敗しました", error);
        }
    };
    return (
        <authContextProvider.Provider
            value={{
                submitLogin,
            }}
        >
            {children}
        </authContextProvider.Provider>
    );
};

export const useAuthProvider = () => {
    const context = useContext(authContextProvider);
    if (!context) throw new Error("useModal must be used inside ModalProvider");
    return context;
};
