import App from "Pages/App";
import HederTitle from "Pages/common/HederTitle";
import PostCardList from "Pages/common/PostCardList";
import { UserActivity } from "Pages/common/UserActivity";
import UserIconBox from "Pages/common/UserIconBox";
import SaveCardList from "Pages/components/SaveCardList";
import { useModal } from "Pages/context/modalContext";
import { useState } from "react";

const Profile = () => {
    const [profileText, setProfileText] = useState<string>("");
    const [profileName, setProfileName] = useState<string>("吉嶺勇斗");
    const { homeCardList, savedCardList } = useModal();
    return (
        <>
                <App>
                    <div className="w-[90%] mx-auto">
                        <HederTitle
                            title="Profile"
                            src="/assets/humanblack.svg"
                        />
                        <div className="w-full  mt-[11%]">
                            <div className="flex w-full">
                                <UserIconBox
                                    size={140}
                                    profileSrc="/assets/grey.png"
                                />
                                <div className="py-2 w-[75%]  ml-auto flex flex-col justify-between">
                                    <input
                                        className="text-1xl border-none h-[30px] w-full"
                                        value={profileName}
                                        onChange={(e) =>
                                            setProfileName(e.target.value)
                                        }
                                    />
                                    <div className="border h-[60px]">
                                        <textarea
                                            className="w-full h-full resize-none"
                                            value={profileText}
                                            onChange={(e) =>
                                                setProfileText(e.target.value)
                                            }
                                        />
                                    </div>
                                    <UserActivity />
                                </div>
                            </div>
                            {homeCardList && <PostCardList/>}
                            {savedCardList && <SaveCardList />}
                        </div>
                    </div>
                </App>
        </>
    );
};

export default Profile;
