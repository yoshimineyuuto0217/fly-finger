import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import FollowCancelBox from "./FollowCancelBox";
import FollowList from "./FollowList";
import FollowBox from "Pages/components/FollowBox";
import FollowersBox from "Pages/components/FollowersBox";
import { useModal } from "Pages/context/modalContext";

const FollowModal = ({
    followModal,
    setFollowModal,
}: {
    followModal: boolean;
    setFollowModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const followModalRef = useRef<HTMLDivElement | null>(null);
    const [cancelModal, setCancelModal] = useState(false);
    const CancelModal = () => setCancelModal(false);
    const { setFollowListModal, setFollowers, followListModal, followers } =
        useModal();
    useEffect(() => {
        const handleClickOutSide = (event: MouseEvent) => {
            if (cancelModal) return;
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
    }, [setFollowModal, cancelModal]);
    return (
        <>
            <div className="w-full h-screen bg-black opacity-[50%] fixed top-0 left-0"></div>
            {cancelModal && (
                <div className="bg-black w-full h-screen opacity-[50%] z-10 top-0 left-0 fixed"></div>
            )}
            {cancelModal && <FollowCancelBox onClick={CancelModal} />}
            <div
                ref={followModalRef}
                className="border w-[700px]  rounded-xl h-[550px] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white overflow-y-scroll"
            >
                <div className="flex w-full border-b ">
                    <div
                        onClick={() => {
                            setFollowListModal(true),
                            setFollowers(false);
                        }}
                        className="w-[50%] text-center border-r hover:cursor-pointer hover:bg-gray-200"
                    >
                        <p>Follow</p>
                        <p>200</p>
                    </div>
                    <div
                        onClick={() => {
                            setFollowers(true),
                            setFollowListModal(false);
                        }}
                        className="w-[50%] text-center hover:cursor-pointer hover:bg-gray-200"
                    >
                        <p>Followers</p>
                        <p>300</p>
                    </div>
                </div>
                <div className="relative flex w-[70%] mx-auto my-5  h-[25px] ">
                    <img src="/assets/searchblack.svg" alt="検索ボタン" />
                    <input type="text" className="w-full rounded-md " />
                </div>
                {followListModal && (
                    <FollowBox onClick={() => setCancelModal(true)} />
                )}
                {followers && (
                    <FollowersBox onClick={() => setCancelModal(true)} />
                )}
            </div>
        </>
    );
};

export default FollowModal;
