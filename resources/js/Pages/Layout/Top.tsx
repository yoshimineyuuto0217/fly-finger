import { Link } from "@inertiajs/react";


const Top = () => {
    return (
        <>
        <div>
        <div className="flex justify-between w-[80%] mx-auto p-5">
            <h1>Fly Finger</h1>
            <div className="flex gap-x-5">
                <Link href="/login">Login</Link>
                <button>Sign up</button>
            </div>
        </div>
        </div>
        <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            このサイトはやらかしたことを呟くアプリです<br />
            私のやらかしは小指を節電したことです
        </section>
        </>
    );
};

export default Top;
