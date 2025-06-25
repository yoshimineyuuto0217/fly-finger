import { Dispatch, SetStateAction } from "react";
import UserIconBox from "./UserIconBox";

const FollowCancelBox = ({onClick}:{onClick:()=>void;}) => {
    return (
        <>
            <div className="fixed bg-white w-[25%] h-auto pt-6  top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 rounded-xl z-20 flex flex-col justify-between">
                <div className="flex items-center justify-center pb-7">
                    <UserIconBox size={100} profileSrc="/assets/grey.png" />
                    <div className="text-center">
                        <p className="text-2xl pb-2">吉嶺</p>
                        <p>フォロー解除しますか？</p>
                    </div>
                </div>
                <div className="flex w-full border-t ">
                    <p className="w-[50%] text-center border-r hover:bg-gray-200 hover:cursor-pointer py-2 rounded-bl-xl" onClick={onClick}>キャンセル</p>
                    <p className="w-[50%] text-center hover:bg-gray-200 py-2 hover:cursor-pointer rounded-br-xl" onClick={()=>alert("テスト")}>フォロー解除</p>
                </div>
            </div>
        </>
    );
};

export default FollowCancelBox;
