import { Dispatch, SetStateAction, useRef } from "react";

type UserIconBoxProps = {
    size: number; // 例: 50, 80, 100 など
    profileSrc: string | undefined;
    setProfile: Dispatch<SetStateAction<{ name: string | undefined; my_img: string | null | undefined; profile_text: string | undefined; }>>
    imageChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const MyIconBox = ({ size, profileSrc,imageChange}: UserIconBoxProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    return (
        <>
            <div
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginRight: "10px",
                    position: "relative",
                }}
            >
                <img
                    // 他のユーザーのアイコンを表示するもの
                    src={profileSrc}
                    alt="ユーザーアイコン"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <>
                    <input
                        type="file"
                        className="w-[89.5px] h-[90px]"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={imageChange}
                        hidden
                    />
                    <div className="bg-[#000] w-full h-[100px] absolute z-30 top-[70%] opacity-[50%]"></div>
                    <img
                        onClick={() =>
                            !!fileInputRef.current &&
                            fileInputRef.current.click()
                        }
                        src="/assets/camera.svg"
                        alt="変更ボタン"
                        className="absolute top-[75%] z-40 left-1/2 -translate-x-1/2 w-6 h-6 cursor-pointer"
                    />
                </>
            </div>
        </>
    );
};

export default MyIconBox;
