import { UserProp } from "Pages/types/mockData";
import RankingBoxCard from "./RankingBoxCard"

type RankingBoxProps = {
    title:string;
    newCard: UserProp | undefined;
}

const RankingBox = ({title,newCard}:RankingBoxProps) => {
  return (
    <>
    <div className="w-[100%] ">
    <div className="text-center text-[30px] mb-2">{title}</div>
    <RankingBoxCard newCard={newCard}/>
    </div>
    </>
  )
}

export default RankingBox
