import { trouble } from "Pages/api/Auth";
import { useModal } from "Pages/context/modalContext";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";

export const PostTextBox = ({
    changeModal,
    className,
    problemClass,
    text,
    setText,
}: {
    changeModal: () => void;
    text: string;
    setText: (val: string | null) => void;
    className?: string;
    problemClass?: boolean;
}) => {
    const troubleRef = useRef<HTMLInputElement | null>(null);
    const [troubleImg, setTroubleImg] = useState<string[]>([]);
    const [submitImg, setSubmitImg] = useState<File[] >([]);

    const { darkMode } = useModal();

    const submitProblem = async (e: React.FormEvent) => {
        e.preventDefault();
        await trouble({ text, submitImg });
        // setTroubleImg([]);
        // setText("");
    };

    const handleChangeProfileImg = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setSubmitImg(files);
        if (!files) return;
        const preview = files.map((f) => URL.createObjectURL(f));
        setTroubleImg(preview);
    };

    return (
        <>
            {problemClass && (
                <div className="w-full h-screen bg-black fixed z-[9998] opacity-[60%] left-0 top-0"></div>
            )}
            {problemClass ? (
                <form onSubmit={submitProblem}>
                    <div
                        className={`w-[55%]  h-auto border rounded-xl  changCallers ${className}`}
                    >
                        <div className="flex h-8 border-b items-center">
                            <p className="border-r px-2">本文</p>
                            <div className="flex space-x-2 px-2">
                                <img
                                    src={`${
                                        darkMode
                                            ? "/assets/image.svg"
                                            : "/assets/imageblack.svg"
                                    }`}
                                    alt="画像追加"
                                    className="cursor-pointer"
                                    onClick={() =>
                                        troubleRef.current &&
                                        troubleRef.current.click()
                                    }
                                />
                                <input
                                    multiple
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    ref={troubleRef}
                                    onChange={handleChangeProfileImg}
                                />
                            </div>
                        </div>
                        <textarea
                            name=""
                            id=""
                            placeholder="問題の内容を入れてください"
                            className="w-full h-[350px] bg-transparent overflow-y-scroll border-none resize-none focus:outline-none scrollbar-none"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                        {troubleImg && troubleImg.length > 0 && (
                            <div className="flex space-x-2 p-2">
                                {troubleImg.map((url, i) => (
                                    <div
                                        key={i}
                                        className="relative w-[50px] h-[50px]"
                                    >
                                        {/* 画像プレビュー */}
                                        <img
                                            src={url}
                                            alt={`プレビュー${i + 1}`}
                                            className="w-full h-full object-cover rounded"
                                        />

                                        {/* 画像ごとのキャンセルボタン */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setTroubleImg((imgs) =>
                                                    imgs.filter(
                                                        (_, idx) => idx !== i
                                                    )
                                                )
                                            }
                                            className="absolute top-0 right-0 w-[15px] h-[15px]"
                                        >
                                            <img
                                                src="/assets/blackCancel.svg"
                                                alt="削除"
                                                className="w-full h-full"
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex border-t h-8 items-center">
                            <button
                                type="button"
                                onClick={changeModal}
                                className="mr-auto border-r w-[120px] hover:bg-gray-800 rounded-bl-xl"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="border-l ml-auto w-[120px] hover:bg-gray-800 rounded-br-xl"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <div className={`w-full h-auto border rounded-xl `}>
                    <div className="flex h-8 border-b items-center">
                        <p className="border-r px-2">本文</p>
                        <div className="flex space-x-2 px-2">
                            <img
                                src={`${
                                    darkMode
                                        ? "/assets/image.svg"
                                        : "/assets/imageblack.svg"
                                }`}
                                alt="画像追加"
                            />
                        </div>
                    </div>
                    <textarea
                        name=""
                        id=""
                        className="w-full h-[350px] bg-transparent overflow-y-scroll border-none resize-none focus:outline-none"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <div className="flex border-t h-8 items-center">
                        <button
                            type="button"
                            onClick={changeModal}
                            className="mr-auto border-r w-[120px] hover:bg-gray-800 rounded-bl-xl"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="border-l ml-auto w-[120px] hover:bg-gray-800 rounded-br-xl"
                        >
                            Post
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
