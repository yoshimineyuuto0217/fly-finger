import RankingBoxCard from "./RankingBoxCard"

type RankingBoxProps = {
    title:string;
}

const RankingBox = ({title}:RankingBoxProps) => {
  return (
    <>
    <div className="w-[100%] ">
    <div className="text-center text-[30px] mb-2">{title}</div>
    <RankingBoxCard/>
    </div>
    </>
  )
}

export default RankingBox
