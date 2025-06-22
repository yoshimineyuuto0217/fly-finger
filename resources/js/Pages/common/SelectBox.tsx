import { useState } from "react";

const SelectBox = () => {
        const [change, setChange] = useState(true);
    // 画像の切り替え
    const vectorChange = () => {
        setChange((prev) => !prev);
    };
    return (
        <div className="flex relative mt-[3%]">
            <img
                src={
                    change
                        ? "/assets/blackarrow1.svg"
                        : "/assets/blackarrow2.svg"
                }
                alt="矢印アイコン"
                className="absolute top-1/2 -translate-y-1/2"
                onClick={vectorChange}
            />
            <input type="text" className="rounded-xl h-[25px] w-[180px] pl-5" />
        </div>
    );
};

export default SelectBox;
