import { UserProp } from "Pages/types/mockData";
import BoxTitle from "./BoxTitle";
import GoodListBox from "./GoodListBox";

const RankingBoxCard = ({newCard}:{newCard: UserProp | undefined;}) => {

    return (

        <>
            <div className="border w-[90%] mx-auto h-auto p-2 my-[5%]">
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
