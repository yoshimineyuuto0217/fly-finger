import OtherModal from "Pages/common/OtherModal";
import { INLINE_SIZE } from "Pages/constants/inlinesize";
import { useModal } from "Pages/context/modalContext";
import { modeChangeFunction } from "Pages/hooks/Modal";

const OtherButton = () => {

    const textSize = INLINE_SIZE.text_size.large;
    const {otherModal,changeOtherModal,OtherRef} = modeChangeFunction();
    const {darkMode} = useModal();

    return (
        <>
            <div
                className="flex mx-5 rounded-xl py-2  cursor-pointer fixed bottom-[5%]"
                onClick={changeOtherModal}
            >
                <img src={`${darkMode?"/assets/others.svg":"/assets/othersblack.svg"}`} />
                <div className={`${textSize} `}>Others</div>
            </div>
            {otherModal && (
                <OtherModal
                    className="absolute left-[19%] bottom-[12%]"
                    otherRef={OtherRef}
                />
            )}
        </>
    );
};

export default OtherButton;
