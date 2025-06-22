import OtherModal from "Pages/common/OtherModal";
import { INLINE_SIZE } from "Pages/constants/inlinesize";
import { useModal } from "Pages/context/modalContext";
import { modeChangeFunction } from "Pages/hooks/Modal";
import { useEffect, useRef } from "react";

const OtherButton = () => {

    const textSize = INLINE_SIZE.text_size.large;
    const {otherModal,changeOtherModal,OtherRef} = modeChangeFunction();

    return (
        <>
            <div
                className="flex mx-5 rounded-xl py-2 mb-[15%] cursor-pointer changCaller"
                onClick={changeOtherModal}
            >
                <img src="/assets/others.svg" />
                <div className={`${textSize} `}>Others</div>
            </div>
            {otherModal && (
                <OtherModal
                    className="absolute left-[20%] bottom-[12%]"
                    otherRef={OtherRef}
                />
            )}
        </>
    );
};

export default OtherButton;
