import HomeCard from "Pages/common/HomeCard";
import { listUserProps, mockData } from "Pages/types/mockData";
import { useEffect, useState } from "react";

const SaveCardList = () => {

    const [cards, setCards] = useState<listUserProps>();

    useEffect(() => {
        try {
            setCards(mockData);
        } catch (error) {
            console.error(`エラー出てます:${error}`);
        }
    }, []);
    return <div>
            {cards?.tasks.map((task) => (
                <HomeCard
                    mainTitle={task.mainTitle}
                    name="吉嶺"
                    profileSrc={task.profileSrc}
                />
            ))}
        </div>;
};

export default SaveCardList;
