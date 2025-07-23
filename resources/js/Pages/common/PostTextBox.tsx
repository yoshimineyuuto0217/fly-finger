import { trouble } from "Pages/api/Auth";
import { useModal } from "Pages/context/modalContext";
import { Dispatch, SetStateAction, useState } from "react";

export const PostTextBox = ({
    changeModal,
    className,
    problemClass,
    text,
    setText
}: {
    changeModal: () => void;
    text:string;
    setText: (val: string) => void;
    className?: string;
    problemClass?: boolean;
}) => {
    const {darkMode} = useModal();
    
    const submitProblem = async(e: React.FormEvent) => {
        e.preventDefault();
        await trouble({text})
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
                                <img src={`${darkMode?"/assets/image.svg":"/assets/imageblack.svg"}`} alt="画像追加" />
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
                <div
                    className={`w-full h-auto border rounded-xl `}
                >
                    <div className="flex h-8 border-b items-center">
                        <p className="border-r px-2">本文</p>
                        <div className="flex space-x-2 px-2">
                            <img src={`${darkMode?"/assets/image.svg":"/assets/imageblack.svg"}`} alt="画像追加" />
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
