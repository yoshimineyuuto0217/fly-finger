import { Inertia } from "@inertiajs/inertia";
import axios from "axios";

// ログイン処理
export const submitLogin = async (
    e: React.FormEvent<HTMLFormElement>,
    credentials: { name: string; email: string; password: string }
) => {
    e.preventDefault();
    try {
        await axios.get("/sanctum/csrf-cookie", { withCredentials: true });
        const res = await axios.post("/login", credentials, {
            withCredentials: true,
        });
        if (res.status === 200) {
            console.log("送信完了", res);
            Inertia.visit("/home");
        }
    } catch (error) {
        console.error("ログインに失敗しました", error);
    }
};

// ログアウト処理
export const submitLogout = async () => {
    try {
        const res = await axios.post(
            "/logout",
            {},
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (res.status === 200) {
            // ログアウトしてもキャッシュの影響でtokenが残ってるからここで強制的に消す
            window.location.href = "/login";
            console.log("ログアウト完了");
        }
    } catch (error) {
        console.error("ログアウトできませんでした", error);
    }
};

// 記事投稿api
export const submitRegister = async ({
    text,
    title,
    tags,
}: {
    text: string;
    title: string;
    tags: string;
}) => {
    try {
        const tagArray = tags
            .split(/[、,、\s]+/) // ← カンマ、読点、スペースすべてで分割
            .map((tag) => tag.trim())
            .filter((tag) => tag !== "");

        if (tagArray.length > 3) {
            alert("タグは最大3つまでです");
            return;
        }
        const res = await axios.post(
            "/article",
            {
                title: title,
                content: text,
                tags: tagArray,
                image_url: null,
            },
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }
        );
        return console.log(`投稿成功しました ${res}`);
    } catch (error) {
        return console.error(`新規投稿に失敗しました ${error}`);
    }
};

// 問題報告api
export const trouble = async ({
    text,
}: {
    text: string;
}) => {
    try {
        const res = await axios.post("trouble",{
        report_text:text,
        report_imageUrl:null,
        })
        console.log(`問題報告をしました ${res}`)
    } catch (error) {
        console.error(`問題を報告できませんでした${error}`);
    }
};
