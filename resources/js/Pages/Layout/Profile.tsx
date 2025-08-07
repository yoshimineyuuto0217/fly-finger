import {
    getProfile,
    profileImageRegister,
    profileNameRegister,
    profileTextRegister,
} from "Pages/api/Auth";
import App from "Pages/App";
import HederTitle from "Pages/common/HederTitle";
import MyIconBox from "Pages/common/MyIconBox";
import PostCardList from "Pages/common/PostCardList";
import { UserActivity } from "Pages/common/UserActivity";
import SaveCardList from "Pages/components/SaveCardList";
import { useModal } from "Pages/context/modalContext";
import { useEffect, useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState<{
        name: string | undefined;
        my_img: string | undefined | null;
        profile_text: string | undefined;
    }>({ name: "", my_img: "", profile_text: "" });

    const {
        homeCardList,
        savedCardList,
        setSavedCardList,
        setHomeCardList,
        darkMode,
    } = useModal();

    const post = () => {
        setHomeCardList(true);
        setSavedCardList(false);
    };
    // 画像交換と画像更新api読んでる
    const postImageChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const createURL = URL.createObjectURL(file);
        setProfile({ ...profile, my_img: createURL });
        await profileImageRegister({upDateFile:file})
    };

    useEffect(() => {
        (async () => {
            const data = await getProfile();
            console.log(data?.profile_img)
            if (data) {
                setProfile({
                    name: data.name,
                    my_img: data.profile_img,
                    profile_text: data.profile_text,
                });
            }
        })();
    }, []);

    return (
        <>
            <App>
                <div className="w-[90%] mx-auto">
                    <HederTitle
                        title="Profile"
                        src={`${
                            darkMode
                                ? "/assets/human.svg"
                                : "/assets/userblack.svg"
                        }`}
                    />
                    <div className="w-full  mt-[11%]">
                        <div className="flex w-full">
                            <MyIconBox
                                size={140}
                                profileSrc={
                                    profile?.my_img === "" ||
                                    profile?.my_img === null
                                        ? "/assets/default.png"
                                        : profile.my_img
                                }
                                imageChange={postImageChange}
                                setProfile={setProfile}
                            />
                            <div className="py-2 w-[75%]  ml-auto flex flex-col justify-between">
                                <input
                                    placeholder="12字以内で入力してください"
                                    className="text-1xl border-none h-[30px] w-full bg-transparent"
                                    value={profile?.name}
                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            name: e.target.value,
                                        })
                                    }
                                    onBlur={(e) =>
                                        profileNameRegister({
                                            e,
                                            profileName: profile.name ?? "",
                                        })
                                    }
                                />
                                <div className="border h-[60px]">
                                    <textarea
                                        className="w-full h-full resize-none bg-transparent"
                                        value={profile?.profile_text}
                                        placeholder="100字以内で入力してください"
                                        onChange={(e) =>
                                            setProfile({
                                                ...profile,
                                                profile_text: e.target.value,
                                            })
                                        }
                                        onBlur={(e) =>
                                            profileTextRegister({
                                                e,
                                                profileText:
                                                    profile.profile_text ?? "",
                                            })
                                        }
                                    />
                                </div>
                                <UserActivity onClick={post} />
                            </div>
                        </div>
                        {homeCardList && <PostCardList />}
                        {savedCardList && <SaveCardList />}
                    </div>
                </div>
            </App>
        </>
    );
};

export default Profile;
