import { Link } from "@inertiajs/react";
import OtherButton from "./OtherButton";
import LiTitle from "Pages/common/LiTitle";

const LeftSideBar = () => {
    return (
        <>
            <div className="w-[20%] border-r h-screen flex flex-col justify-between">
                <div className="p-[8%]">
                    <h1 className="font-bold text-4xl  mb-[70px]">
                        Fly Finger
                    </h1>
                    <ul className="space-y-7">
                        <LiTitle src="/assets/home.svg" title="Home" href="home"/>
                        <LiTitle src="/assets/ranking.svg" title="Ranking" href="ranking"/>
                        <LiTitle src="/assets/post.svg" title="Post"/>
                        <LiTitle src="/assets/profile.svg" title="Profile" href="profile"/>
                    </ul>
                </div>
                <OtherButton />
            </div>
        </>
    );
};

export default LeftSideBar;
