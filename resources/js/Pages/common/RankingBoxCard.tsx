import  { useEffect, useState } from "react";
import BoxTitle from "./BoxTitle";
import GoodListBox from "./GoodListBox";
import {
    mockData,
    UserProp,
} from "Pages/types/mockData";

const RankingBoxCard = () => {
    const [newCard, setNewCard] = useState<UserProp>();

    useEffect(() => {
        try {
            if (mockData.tasks.length > 0) {
                const first = mockData.tasks[0];
                setNewCard({
                    mainText: first.mainText,
                    mainTitle: first.mainTitle,
                    name:first.name
                });
            }
        } catch (error) {
            console.error(`エラー出てます:${error}`);
        }
    }, []);

    return (

        <>
            <div className="border w-[90%] mx-auto h-auto p-2">
                <BoxTitle
                    size={30}
                    profileSrc="/assets/grey.png"
                    mainTitle={newCard?.mainTitle ?? ""}
                    name={newCard?.name ?? ""}
                />
                <div className="h-auto font-bold">{newCard?.mainTitle}</div>
                <GoodListBox />
            </div>
        </>
    );
};

export default RankingBoxCard;
