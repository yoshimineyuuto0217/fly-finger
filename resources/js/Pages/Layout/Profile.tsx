import App from "Pages/App";
import HederTitle from "Pages/common/HederTitle";
import PostCardList from "Pages/common/PostCardList";
import { UserActivity } from "Pages/common/UserActivity";
import UserIconBox from "Pages/common/UserIconBox";
import SaveCardList from "Pages/components/SaveCardList";
import { useModal } from "Pages/context/modalContext";
import { useState } from "react";

const Profile = () => {
    const [myProfileText, setMyProfileText] = useState<string>("");
    const [myProfileName, setMyProfileName] = useState<string>("吉嶺勇斗");
    const { homeCardList, savedCardList,setSavedCardList,
        setHomeCardList,darkMode} = useModal();

        const post =()=>{
            setHomeCardList(true);
                        setSavedCardList(false);
        }
    return (
        <>
                <App>
                    <div className="w-[90%] mx-auto">
                        <HederTitle
                            title="Profile"
                            src={`${darkMode?"/assets/human.svg":"/assets/userblack.svg"}`}
                        />
                        <div className="w-full  mt-[11%]">
                            <div className="flex w-full">
                                <UserIconBox
                                    size={140}
                                    profileSrc="/assets/grey.png"
                                />
                                <div className="py-2 w-[75%]  ml-auto flex flex-col justify-between">
                                    <input
                                        className="text-1xl border-none h-[30px] w-full bg-transparent"
                                        value={myProfileName}
                                        onChange={(e) =>
                                            setMyProfileName(e.target.value)
                                        }
                                    />
                                    <div className="border h-[60px]">
                                        <textarea
                                            className="w-full h-full resize-none bg-transparent"
                                            value={myProfileText}
                                            placeholder="100字以内で入力してください"
                                            onChange={(e) =>
                                                setMyProfileText(e.target.value)
                                            }
                                        />
                                    </div>
                                    <UserActivity onClick={post}/>
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
