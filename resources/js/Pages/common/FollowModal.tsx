import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import FollowBox from "./FollowBox";

const FollowModal = ({
    followModal,
    setFollowModal,
}: {
    followModal: boolean;
    setFollowModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const followModalRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutSide = (event: MouseEvent) => {
            if (
                followModal &&
                followModalRef.current &&
                !followModalRef.current.contains(event.target as Node)
            ) {
                setFollowModal(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, [setFollowModal]);
    return (
        <>
            <div className="w-full h-screen bg-black opacity-[50%] fixed top-0 left-0"></div>
            <div
                ref={followModalRef}
                className="border w-[700px]  rounded-xl h-[550px] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white overflow-y-scroll"
            >
                <div className="flex w-full border-b ">
                    <div className="w-[50%] text-center border-r hover:cursor-pointer">
                        <p>Follow</p>
                        <p>200</p>
                    </div>
                    <div className="w-[50%] text-center hover:cursor-pointer">
                        <p>Followers</p>
                        <p>300</p>
                    </div>
                </div>
                <div className="relative flex w-[70%] mx-auto my-5  h-[25px] ">
                    <img src="/assets/searchblack.svg" alt="検索ボタン" />
                    <input type="text" className="w-full rounded-md " />
                </div>
                <FollowBox />
                <FollowBox />
                <FollowBox />
                <FollowBox />
                <FollowBox />
                <FollowBox />
                <FollowBox />
                <FollowBox />
                <FollowBox />
            </div>
        </>
    );
};

export default FollowModal;
