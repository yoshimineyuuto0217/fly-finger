import React from "react";
import LiTitle from "./LiTitle";

type OtherProps = {
    className:string;
}

const OtherModal = ({className}:OtherProps) => {
    return (
        <>
            <div className={`w-[250px] h-[220px] border bg-black  z-1 rounded-xl flex flex-col justify-between p-4 ${className}`}>
                <LiTitle
                    title="Fly Finger"
                    href="flyfinger"
                    src="/assets/problem.svg"
                    size="small"
                />
                <LiTitle
                    title="問題の方向"
                    href=""
                    src="/assets/problem.svg"
                    size="small"
                />
                <div onClick={()=>alert("失敗")} className="cursor-pointer">
                <LiTitle
                    title="モード切り替え"
                    href=""
                    src="/assets/mode.svg"
                    size="small"
                />
                </div>
                <LiTitle
                    title="ログアウト"
                    href="login"
                    src="/assets/logout.svg"
                    size="small"
                />
            </div>
        </>
    );
};

export default OtherModal;
