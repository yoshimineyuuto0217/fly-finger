import { useModal } from "Pages/context/modalContext";

export const FollowButton = ({onClick}:{onClick:()=>void;}) => {
    const {darkMode} = useModal();
    return (
                <button
                    onClick={onClick}
                    className={`w-[140px] h-[35px] border  rounded-md Mode ${darkMode ? "hover:bg-gray-400" : "hover:bg-white"}`}
                >
                    フォロー中
                </button>
    );
};
