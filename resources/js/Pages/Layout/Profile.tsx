import App from "Pages/App";
import HederTitle from "Pages/common/HederTitle";
import HomeCard from "Pages/common/HomeCard";
import { UserActivity } from "Pages/common/UserActivity";
import UserIconBox from "Pages/common/UserIconBox";
import { listUserProps, mockData } from "Pages/types/mockData";
import { useEffect, useState } from "react";

const Profile = () => {
    const [profileText, setProfileText] = useState<string>("");
    const [profileName, setProfileName] = useState<string>("吉嶺勇斗");
    const [cards, setCards] = useState<listUserProps>();
    useEffect(() => {
        try {
            setCards(mockData);
        } catch (error) {
            console.error(`エラー出てます:${error}`);
        }
    }, []);
    return (
        <>
            <App>
                <div className="w-[90%] mx-auto">
                    <HederTitle title="Profile" src="/assets/humanblack.svg" />
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
                        {cards?.tasks.map((task) => (
                            <HomeCard
                                mainTitle={task.mainTitle}
                                name="吉嶺"
                                profileSrc={task.profileSrc}
                            />
                        ))}
                    </div>
                </div>
            </App>
        </>
    );
};

export default Profile;
