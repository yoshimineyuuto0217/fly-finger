import { listUserProps, mockData } from "Pages/types/mockData";
import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";

const PostCardList = () => {
    const [cards, setCards] = useState<listUserProps>();

    useEffect(() => {
        try {
            setCards(mockData);
        } catch (error) {
            console.error(`エラー出てます:${error}`);
        }
    }, []);
    return (
        <div>
            {cards?.tasks.map((task) => (
                <HomeCard
                    mainTitle={task.mainTitle}
                    name="吉嶺"
                    profileSrc={task.profileSrc}
                />
            ))}
        </div>
    );
};

export default PostCardList;
