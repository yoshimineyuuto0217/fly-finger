import { useState } from "react";
import { PostTextBox } from "./PostTextBox";
import { createPortal } from "react-dom";


const PostModal = ({ changeModal }: {changeModal:()=>void;}) => {
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");

    const submitPost = (e: React.FormEvent) => {
        e.preventDefault();
        alert("投稿");
    };

    return createPortal(
        <>
            <div className="fixed bg-black opacity-[70%] w-full h-screen z-[9998] top-0 left-0"></div>
            <div className="w-[850px] h-[565px] bg-black border fixed  left-1/2 rounded-xl top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999]">
                <div className="w-[750px] h-[30px]  rounded-xl mx-auto  ">
                    <form onSubmit={submitPost}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full h-full bg-transparent rounded-xl border-white text-white my-[15px]"
                        />
                        <input
                            type="text"
                            placeholder="タグを入力してください 3つまで入力可能です"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                            className="w-full h-full bg-transparent rounded-xl border-white text-white mb-[15px]"
                        />
                        <PostTextBox changeModal={changeModal} />
                    </form>
                </div>
            </div>
        </>,
        document.body
    );
};

export default PostModal;
