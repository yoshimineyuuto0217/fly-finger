import { useModal } from "Pages/context/modalContext";
import LiTitle from "./LiTitle";
import { PostTextBox } from "./PostTextBox";
import { modeChangeFunction } from "Pages/hooks/Modal";
import { usePage } from "@inertiajs/react";

type OtherProps = {
    className: string;
    otherRef: React.RefObject<HTMLDivElement | null>;
};

const OtherModal = ({ className, otherRef }: OtherProps) => {
    const { problem, changeProblemModal, closeProblemModal } =
        modeChangeFunction();
    const { darkMode, toggleDarkMode} = useModal();
    const { url } = usePage();
    const pathName = url === "/fly";
    return (
        <>
            <div
                ref={otherRef}
                className={`Mode ${
                    darkMode ? "dark" : "light"
                } w-[250px] h-[220px] border bg-white z-10 rounded-xl p-3 flex flex-col justify-between   ${className}`}
            >
                <LiTitle
                    title={pathName ? "Fly Finger" : "作者投稿"}
                    href={pathName ? "/home" : "/fly"}
                    src={`${darkMode?"/assets/F.svg":"/assets/Fblack.svg"}`}
                    size="small"
                />
                <LiTitle
                    title="問題の報告"
                    onClick={changeProblemModal}
                    src={`${darkMode?"/assets/problem.svg":"/assets/problemblack.svg"}`}
                    size="small"
                />
                <LiTitle
                    title="モード切り替え"
                    src={`${darkMode?"/assets/mode.svg":"/assets/modeblack.svg"}`}
                    onClick={toggleDarkMode}
                    size="small"
                />
                <LiTitle
                    title="ログアウト"
                    href="login"
                    src={`${darkMode?"/assets/logout.svg":"/assets/logoutblack.svg"}`}
                    size="small"
                />
            </div>
            {problem && (
                <PostTextBox
                    changeModal={closeProblemModal}
                    className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] Mode ${
                        darkMode ? "dark" : "light"
                    }`}
                    problemClass={true}
                />
            )}
        </>
    );
};

export default OtherModal;
