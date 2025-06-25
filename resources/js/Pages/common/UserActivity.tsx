import { useState } from "react";
import FollowModal from "./FollowModal";
import { useModal } from "Pages/context/modalContext";

export const UserActivity = () => {
    const [followModal, setFollowModal] = useState(false);
    const { setFollowListModal, setFollowers,setSavedCardList,setHomeCardList} = useModal();
    return (
        <>
            <div className="flex w-full justify-between px-2 relative">
                <div className="text-center hover:cursor-pointer" onClick={()=>{setHomeCardList(true);setSavedCardList(false);}}>
                    投稿<p>1</p>
                </div>
                <div className="text-center hover:cursor-pointer" onClick={()=>{setSavedCardList(true);setHomeCardList(false)}}>
                    保存<p>3</p>
                </div>
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
