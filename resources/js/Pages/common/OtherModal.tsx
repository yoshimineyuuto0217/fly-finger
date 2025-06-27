import { useModal } from "Pages/context/modalContext";
import LiTitle from "./LiTitle";
import { PostTextBox } from "./PostTextBox";
import { modeChangeFunction } from "Pages/hooks/Modal";


type OtherProps = {
    className: string;
    otherRef: React.RefObject<HTMLDivElement | null>;
};

const OtherModal = ({ className, otherRef }: OtherProps) => {
    const { problem, changeProblemModal, closeProblemModal } =
        modeChangeFunction();
        const {modeChange} = useModal();
    return (
        <>
            <div
                ref={otherRef}
                className={`w-[250px] h-[220px] border bg-white z-10 rounded-xl flex flex-col justify-between p-4 changCallers ${className}`}
            >
                <LiTitle
                    title="Fly Finger"
                    href="flyfinger"
                    src="/assets/problem.svg"
                    size="small"
                />
                <LiTitle
                    title="問題の報告"
                    onClick={changeProblemModal}
                    src="/assets/problem.svg"
                    size="small"
                />
                <LiTitle
                    title="モード切り替え"
                    src="/assets/mode.svg"
                    onClick={modeChange}
                    size="small"
                />
                <LiTitle
                    title="ログアウト"
                    href="login"
                    src="/assets/logout.svg"
                    size="small"
                />
            </div>
            {problem && (
                <PostTextBox
                    changeModal={closeProblemModal}
                    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
                    problemClass={true}
                />
            )}
        </>
    );
};

export default OtherModal;
