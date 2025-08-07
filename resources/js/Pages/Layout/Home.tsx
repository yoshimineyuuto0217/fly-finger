import { getAllArticle } from "Pages/api/Auth";
import App from "Pages/App";
import HederTitle from "Pages/common/HederTitle";
import HomeCard from "Pages/common/HomeCard";
import SelectBox from "Pages/common/SelectBox";
import { useModal } from "Pages/context/modalContext";
import {
    APIlistUserProps,
    ApiUserPropsNested,
    listUserProps,
    mockData,
} from "Pages/types/mockData";
import { useEffect, useState } from "react";

const Home = () => {
    const [cards, setCards] = useState<ApiUserPropsNested[]>([]);

    const { darkMode } = useModal();

    useEffect(() => {
        (async () => {
            try {
                const res = await getAllArticle(); // 2025年8月の環境
                console.log(res); // { 記事取得: [...] }
                setCards(res.tasks); // setState に配列をセット
            } catch (error) {
                console.error(`エラー:${error}`);
            }
        })();
    }, []);

    return (
        <App>
            <>
                <div className={`w-[90%] mx-auto `}>
                    <SelectBox />
                    <HederTitle
                        title="Home"
                        src={`${
                            darkMode
                                ? "/assets/home.svg"
                                : "/assets/homeblack.svg"
                        }`}
                    />
                    <div className="w-full">
                            {cards?.map((task) => (
                                <HomeCard
                                    key={task.post_id}
                                    name={task.user.name}
                                    mainTitle={task.title}
                                    profileSrc={task.user.profile_img}
                                    mainText={task.content}
                                />
                            ))}
                    </div>
                </div>
            </>
        </App>
    );
};

export default Home;
