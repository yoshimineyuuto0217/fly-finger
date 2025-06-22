import OtherModal from "Pages/common/OtherModal";
import { useModal } from "Pages/context/modalContext";
import { modeChangeFunction } from "Pages/hooks/Modal";
import { useEffect } from "react";

const FlySideBar = () => {
    const { OtherRef, setOtherModal, otherModal } = modeChangeFunction();

    return (
        <>
            <div className="w-[5%] border-r h-screen flex flex-col justify-between px-5 py-8">
                <img
                    src="assets/home.svg"
                    alt="home"
                    className="mx-auto hover:bg-gray-800"
                />
                <img
                    src="assets/place.svg"
                    alt="post"
                    className="mx-auto hover:bg-gray-800"
                />
                <img
                    src="assets/others.svg"
                    alt="その他"
                    className="relative mx-auto hover:bg-gray-800"
                    onClick={() => setOtherModal((prev) => !prev)}
                />
                {otherModal && (
                    <OtherModal
                        className="absolute left-[3%] bottom-[8%]"
                        otherRef={OtherRef}
                    />
                )}
            </div>
        </>
    );
};

export default FlySideBar;
