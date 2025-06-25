import { useState } from "react";
import FollowCancelBox from "./FollowCancelBox";

export const FollowButton = ({onClick}:{onClick:()=>void;}) => {
    return (
                <button
                    onClick={onClick}
                    className="w-[140px] h-[35px] border hover:bg-gray-200 rounded-md "
                >
                    フォロー中
                </button>
    );
};
