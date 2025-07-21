import App from "Pages/App";
import HederTitle from "Pages/common/HederTitle";
import HomeCard from "Pages/common/HomeCard";
import SelectBox from "Pages/common/SelectBox";
import { useModal } from "Pages/context/modalContext";
import { listUserProps, mockData } from "Pages/types/mockData";
import { useEffect, useState } from "react";


const Home = () => {

    const [cards, setCards] = useState<listUserProps>();
    const {darkMode} = useModal();

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
                <div className={`w-[90%] mx-auto `}>
                    <SelectBox />
                    <HederTitle title="Home" src={`${darkMode?"/assets/home.svg":"/assets/homeblack.svg"}`}/>
                    <div className="w-full">
                        <a href="user">
                        {cards?.tasks.map((task) => (
                            <HomeCard
                                key={task.id}
                                name={task.name}
                                mainTitle={task.mainTitle}
                                profileSrc={task.profileSrc}
                                mainText={task.mainText}
                            />
                        ))}
                        </a>
                    </div>
                </div>
            </>
        </App>
    );
};

export default Home;
