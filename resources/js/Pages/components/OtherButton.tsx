import OtherModal from "Pages/common/OtherModal";
import { INLINE_SIZE } from "Pages/constants/inlinesize";
import { useState } from "react";


const OtherButton = () => {
    const [otherModal, setOtherModal] = useState(false);
    const textSize = INLINE_SIZE.text_size.large;
    return (
        <>
            <div
                className="flex ml-[8%] mb-[15%] relative cursor-pointer"
                onClick={() => setOtherModal(prev => !prev)}
            >
                <img src="/assets/others.svg"/>
                <div className={textSize}>Others</div>
            </div>
            {otherModal && <OtherModal className="absolute left-[4%] bottom-[12%]" />}
        </>
    );
};

export default OtherButton;
