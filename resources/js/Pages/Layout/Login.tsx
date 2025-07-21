import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [errors,setErrors] = useState("")
    const handleSubmit = async (e: any) => {
        const token =
            document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content") ?? "";
        e.preventDefault();
        try {
              await axios.get("/sanctum/csrf-cookie", { withCredentials: true });
            const res = await axios.post(
                "/register",
                {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: confirmation,
                },
                {
                    headers: {
                        "X-CSRF-TOKEN": token, // メタタグから取得したトークン
                        Accept: "application/json",
                    },
                    withCredentials: true,
                }
            );
            Inertia.visit("/home");
        } catch (error:any) {
            if (error.response?.status === 422) {
                // ← まずここで何が悪いか丸わかりに！
                console.error("Validation failed:", error.response.data.errors);
                /**
                 * 例:
                 * {
                 *   name: ["名前は必須です"],
                 *   email: ["メールアドレスはすでに登録されています"],
                 *   password: ["パスワードは最低8文字必要です"],
                 * }
                 */
                setErrors(error.response.data.errors);
            } else {
                console.error("Unexpected error:", error);
            }
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl mb-4">ログイン</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">名前</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">メールアドレス</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">パスワード</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">確認用パスワード</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={confirmation}
                        onChange={(e) =>setConfirmation(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded"
                >
                    送信
                </button>
            </form>
        </div>
    );
};

export default Login;
