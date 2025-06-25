import App from "Pages/App";
import HederTitle from "Pages/common/HederTitle";
import RankingBoxCard from "Pages/common/RankingBoxCard";
import { mockData, UserProp } from "Pages/types/mockData";
import { useEffect, useState } from "react";

const Ranking = () => {
    const [newCard, setNewCard] = useState<UserProp[]>([]);
    useEffect(() => {
        try {
            const cards = mockData.tasks.slice(0, 10).map((task) => ({
                mainText: task.mainText,
                mainTitle: task.mainTitle,
                name: task.name,
            }));
            setNewCard(cards);
        } catch (error) {
            console.error(`エラー出てます:${error}`);
        }
    }, []);
    return (
        <>
            <App>
                <HederTitle title="Ranking" src="/assets/medalblack.svg" />
                <div className="mt-[8%] flex justify-between  ">
                    <div className="w-full">
                        <p className="text-2xl text-center mb-5 ">Week King</p>
                        <div >
                            {newCard.map((card, idx) => (
                                <div
                                    key={idx}
                                >
                                    <RankingBoxCard newCard={card} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-2xl text-center mb-5">Month King</p>
                        <div >
                            {newCard.map((card, idx) => (
                                <div
                                    key={idx}
                                >
                                    <RankingBoxCard newCard={card} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-2xl text-center mb-5">Year King</p>
                        <div >
                            {newCard.map((card, idx) => (
                                <div
                                    key={idx}
                                >
                                    <RankingBoxCard newCard={card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </App>
        </>
    );
};

export default Ranking;
