import axios from "axios";
import { BASE_URL } from "Pages/constants/inlinesize";
import { ChangeEvent } from "react";

export type ProfileData = {
    user: {
        name: string;
        profile_img: string | null;
        profile_text: string;
    };
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
    submitImg,
}: {
    text: string;
    submitImg: File[];
}) => {
    try {
        const formData = new FormData();
        formData.append("report_text", text);

        submitImg.forEach((file) => {
            formData.append(`report_imageUrl[]`, file);
        });

        const res = await axios.post("trouble", formData, {
            withCredentials: true,
        });

        console.log(`問題報告をしました:`, JSON.stringify(res.data, null, 2));
    } catch (error: any) {
        console.error("ステータス:", error.response?.status);
        console.error("レスポンスボディ:", error.response?.data);
    }
};

// profileを取得api
export const getProfile = async (): Promise<ProfileData["user"] | null> => {
    try {
        const res = await axios.get<ProfileData>("/me", {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        console.log(res.data);
        return {
            name: res.data.user.name,
            profile_img: res.data.user.profile_img
                ? `${BASE_URL}/storage/${res.data.user.profile_img}`
                : null,
            profile_text: res.data.user.profile_text,
        };
    } catch (error) {
        console.error(`プロフィール情報の取得に失敗しました`, error);
        return null;
    }
};

// プロフィール文のpatch処理api
export const profileTextRegister = async ({
    e,
    profileText,
}: {
    e: React.FormEvent;
    profileText: string;
}) => {
    e.preventDefault();
    try {
        const res = await axios.patch(
            "/patchText",
            { profile_text: profileText },
            { withCredentials: true }
        );
        console.log(`プロフィール文の更新成功です`, JSON.stringify(res.data));
    } catch (error) {
        console.error(`プロフィール文の更新失敗です${error}`);
        alert("100文字以内で入力してください");
    }
};

// プロフィールの名前を更新api
export const profileNameRegister = async ({
    e,
    profileName,
}: {
    e: ChangeEvent<HTMLInputElement>;
    profileName: string;
}) => {
    e.preventDefault();
    try {
        const res = await axios.patch(
            "/patchName",
            { name: profileName },
            { withCredentials: true }
        );
        console.log(`名前の更新に成功しました`, JSON.stringify(res.data));
    } catch (error) {
        console.error("名前の更新に失敗しました", error);
        alert("12文字以内で入力してください");
    }
};

// 画像更新api
export const profileImageRegister = async ({
    upDateFile,
}: {
    upDateFile: any;
}) => {
    const formData = new FormData();
    formData.append("file", upDateFile);
    try {
        const res = await axios.post("/postImage", formData, {
            withCredentials: true,
        });
        console.log("画像の更新に成功しました", res.data);
    } catch (error) {
        console.error(`画像の更新に失敗しました`);
    }
};

// 全記事取得api
export const getAllArticle = async () => {
    try {
        const res = await axios.get("/articlePost", { withCredentials: true });
        return res.data;
    } catch (error) {
        console.log(`エラー出てます${error}`);
    }
};
