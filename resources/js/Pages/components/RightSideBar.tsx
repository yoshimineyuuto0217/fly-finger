import RankingBox from 'Pages/common/RankingBox'

const RightSideBar = () => {
  return (
    <>
    <div className='w-[20%] border-l flex flex-col justify-between py-2 h-screen'>
        <RankingBox title='Week King'/>
        <RankingBox title='Month King'/>
        <RankingBox title='Year King'/>
    </div>
    </>
  )
}

export default RightSideBar
