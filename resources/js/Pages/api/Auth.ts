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
        const res = await axios.post("/logins", credentials, {
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
      '/logout',
      {},
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (res.status === 200) {
      console.log('ログアウト完了');
    }
  } catch (error) {
    console.error('ログアウトできませんでした', error);
  }
};
