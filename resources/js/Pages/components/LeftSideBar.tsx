import OtherButton from "./OtherButton";
import LiTitle from "Pages/common/LiTitle";
import { useState } from "react";
import PostModal from "Pages/common/PostModal";

const LeftSideBar = () => {

    const [postModal, setPostModal] = useState(false);

    const changeModal = () => {
        setPostModal((prev)=> !prev)
    }

    return (
        <>
        <div className="fixed left-[0%] top-[0%] w-[20%]">
            <div className=" border-r h-screen flex flex-col justify-between relative ">
                <div className="p-[8%]">
                    <h1 className="font-bold text-4xl  mb-[70px]">
                        Fly Finger
                    </h1>
                    <ul className="space-y-7">
                        <LiTitle
                            src="/assets/home.svg"
                            title="Home"
                            href="home"
                        />
                        <LiTitle
                            src="/assets/ranking.svg"
                            title="Ranking"
                            href="ranking"
                        />
                        <div onClick={() => setPostModal((prev) => !prev)}>
                            <LiTitle src="/assets/post.svg" title="Post" />
                        </div>
                        <LiTitle
                            src="/assets/profile.svg"
                            title="Profile"
                            href="profile"
                        />
                    </ul>
                </div>
                <OtherButton />
                {postModal && <PostModal changeModal={changeModal}/>}
            </div>
            </div>
        </>
    );
};

export default LeftSideBar;
