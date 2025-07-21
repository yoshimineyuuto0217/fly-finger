import OtherButton from "./OtherButton";
import LiTitle from "Pages/common/LiTitle";
import PostModal from "Pages/common/PostModal";
import { useModal } from "Pages/context/modalContext";

const LeftSideBar = () => {
    const { setHomeCardList ,setRightBar,changeModal,postModal,setPostModal,darkMode} = useModal();

    return (
        <>
            <div className={`fixed left-[0%] top-[0%] w-[20%] `}>
                <div className=" border-r h-screen flex flex-col justify-between relative ">
                    <div className="p-[8%]">
                        <h1 className="font-bold text-4xl  mb-[70px]">
                            <img src={darkMode ?"/assets/Flyfinger.svg":"/assets/Flyfingerblack.svg"} alt="flyfingerロゴ" />
                        </h1>
                        <ul className="space-y-7">
                            <LiTitle
                                src={`${darkMode?"/assets/home.svg":"/assets/homeblack.svg"}`}
                                title="Home"
                                href="home"
                                onClick={()=>setRightBar(true)}
                            />
                            <LiTitle
                                src={`${darkMode?"/assets/ranking.svg":"/assets/rankingblack.svg"}`}
                                title="Ranking"
                                href="ranking"
                                onClick={()=>setRightBar(false)}
                            />
                            <LiTitle
                                src={`${darkMode?"/assets/post.svg":"/assets/postblack.svg"}`}
                                title="Post"
                                onClick={() => setPostModal((prev) => !prev)}
                            />
                            <LiTitle
                                    src={`${darkMode?"/assets/profile.svg":"/assets/userblack.svg"}`}
                                    title="Profile"
                                    href="profile"
                                    onClick={() => {setHomeCardList(true); setRightBar(true);}}
                            />
                        </ul>
                    </div>
                    <OtherButton />
                    {postModal && <PostModal changeModal={changeModal} />}
                </div>
            </div>
        </>
    );
};

export default LeftSideBar;
