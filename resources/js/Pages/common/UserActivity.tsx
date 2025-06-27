import { useState } from "react";
import FollowModal from "./FollowModal";
import { useModal } from "Pages/context/modalContext";
import { usePage } from "@inertiajs/react";

export const UserActivity = ({onClick}:{onClick:()=>void;}) => {
    const [followModal, setFollowModal] = useState(false);
    const {
        setFollowListModal,
        setFollowers,
    } = useModal();
    const {url} = usePage();
    const pathName = url === "/user";

    return (
        <>
            <div className="flex w-full justify-between px-2 relative">
                <div
                    className="text-center hover:cursor-pointer"
                    onClick={onClick}>
                    投稿<p>1</p>
                </div>
                {pathName ? (
                    ""
                ) : (
                    <div
                        className="text-center hover:cursor-pointer"
                        onClick={onClick}>
                        保存<p>3</p>
                    </div>
                )}
                <div className="text-center hover:cursor-pointer">
                    総いいね<p>20</p>
                </div>
                <div
                    className="text-center hover:cursor-pointer"
                    onClick={() => {
                        setFollowModal(true);
                        setFollowListModal(true);
                        setFollowers(false);
                    }}
                >
                    フォロー<p>2</p>
                </div>
                <div
                    className="text-center hover:cursor-pointer"
                    onClick={() => {
                        setFollowModal(true);
                        setFollowers(true);
                        setFollowListModal(false);
                    }}
                >
                    フォロワー<p>5</p>
                </div>
            </div>
            {followModal && (
                <FollowModal
                    followModal={followModal}
                    setFollowModal={setFollowModal}
                />
            )}
        </>
    );
};
