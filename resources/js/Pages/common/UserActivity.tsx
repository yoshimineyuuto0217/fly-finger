import { useState } from "react";
import FollowModal from "./FollowModal";

export const UserActivity = () => {
    const [followModal, setFollowModal] = useState(false);
    return (
        <>
            <div className="flex w-full justify-between px-2 relative">
                <div className="text-center hover:cursor-pointer">
                    投稿<p>1</p>
                </div>
                <div className="text-center hover:cursor-pointer">
                    保存<p>3</p>
                </div>
                <div className="text-center hover:cursor-pointer">
                    総いいね<p>20</p>
                </div>
                <div
                    className="text-center hover:cursor-pointer"
                    onClick={() => setFollowModal(true)}
                >
                    フォロー<p>2</p>
                </div>
                <div
                    className="text-center hover:cursor-pointer"
                    onClick={() => setFollowModal(true)}
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
