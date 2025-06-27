import axios from "axios";
import App from "Pages/App";
import DescriptionCard from "Pages/common/DescriptionCard";
import HederTitle from "Pages/common/HederTitle";
import PostCardList from "Pages/common/PostCardList";
import { UserActivity } from "Pages/common/UserActivity";
import UserIconBox from "Pages/common/UserIconBox";
import { useModal } from "Pages/context/modalContext";
import { useEffect, useState } from "react";

const User = () => {
    const [userName, setUserName] = useState("");
    const [postList,setPostList] = useState(false);
    const [image,setImage] = useState();
    const [userProfileText, setUserProfileText] = useState();
    const { homeCardList,setHomeCardList } = useModal();
    const post = () => {
        setPostList(true);
        setHomeCardList(false);
    }
    useEffect(() => {
        const name = async () => {
            const res = await axios.get("https://randomuser.me/api");
            console.log(res)
            const userNames = res.data.results[0];
            const name = userNames.name.first;
            const gazou = userNames.picture.large;
            setUserName(name);
            setImage(gazou);
        };
        name();
    }, []);
    return (
        <App>
            <div className="w-[90%] mx-auto">
                <HederTitle title="Home" src="/assets/humanblack.svg" />
                <div className="w-full  mt-[11%]">
                    <div className="flex w-full">
                        <UserIconBox size={140} profileSrc={image ?? ""} />
                        <div className="py-2 w-[75%]  ml-auto flex flex-col justify-between">
                            <input
                                readOnly
                                disabled
                                className="text-1xl border-none h-[30px] w-full"
                                value={userName}
                            />
                            <div className="border h-[60px]">
                                <textarea
                                    readOnly
                                    disabled
                                    className="w-full h-full resize-none"
                                    value={userProfileText}
                                />
                            </div>
                            <UserActivity onClick={post}/>
                        </div>
                    </div>
                    {homeCardList && <DescriptionCard />}
                    {postList && <PostCardList/>}
                </div>
            </div>
        </App>
    );
};

export default User;
