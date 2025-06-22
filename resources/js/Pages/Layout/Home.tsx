import App from "Pages/App";
import HederTitle from "Pages/common/HederTitle";
import HomeCard from "Pages/common/HomeCard";
import SelectBox from "Pages/common/SelectBox";
import { listUserProps, mockData } from "Pages/types/mockData";
import { useEffect, useState } from "react";


const Home = () => {

    const [cards, setCards] = useState<listUserProps>();

    useEffect(() => {
        try {
            setCards(mockData);
        } catch (error) {
            console.error(`エラー出てます:${error}`);
        }
    }, []);
    return (
        <App>
            <>
                <div className="w-[90%] mx-auto">
                    <SelectBox />
                    <HederTitle title="Home" src="/assets/blackhome.svg"/>
                    <div className="w-full">
                        {cards?.tasks.map((task) => (
                            <HomeCard
                                key={task.id}
                                name={task.name}
                                mainTitle={task.mainTitle}
                                profileSrc={task.profileSrc}
                                mainText={task.mainText}
                            />
                        ))}
                    </div>
                </div>
            </>
        </App>
    );
};

export default Home;
