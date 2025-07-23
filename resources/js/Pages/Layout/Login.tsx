import { submitLogin } from "Pages/api/Auth";
import React, { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl mb-4">Login</h2>
            <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                    submitLogin(e, { name, email, password })
                }
            >
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
