import OtherModal from "Pages/common/OtherModal";
import PostModal from "Pages/common/PostModal";
import { useModal } from "Pages/context/modalContext";
import { modeChangeFunction } from "Pages/hooks/Modal";

const FlySideBar = () => {
    const { OtherRef, setOtherModal, otherModal } = modeChangeFunction();
    const { setPostModal, postModal, changeModal,darkMode} = useModal();
    return (
        <>
            <div className="w-[5%] border-r h-screen flex flex-col justify-between px-5 py-8 fixed top-0 left-0">
                    <img
                        src={`${darkMode?"/assets/home.svg":"/assets/homeblack.svg"}`}
                        alt="home"
                        className="mx-auto "
                    />
                <img
                    src={`${darkMode?"/assets/place.svg":"/assets/placeblack.svg"}`}
                    alt="post"
                    className="mx-auto cursor-pointer"
                    onClick={() => setPostModal((prev) => !prev)}
                />
                <img
                    src={`${darkMode?"/assets/others.svg":"/assets/othersblack.svg"}`}
                    alt="その他"
                    className="relative mx-auto cursor-pointer"
                    onClick={() => setOtherModal((prev) => !prev)}
                />
                {otherModal && (
                    <OtherModal
                        className="absolute left-[3%] bottom-[8%]"
                        otherRef={OtherRef}
                    />
                )}
                {postModal && <PostModal changeModal={changeModal} />}
            </div>
        </>
    );
};

export default FlySideBar;
