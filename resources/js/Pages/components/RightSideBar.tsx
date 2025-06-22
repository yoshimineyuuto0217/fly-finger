import RankingBox from 'Pages/common/RankingBox'

const RightSideBar = () => {
  return (
    <>
    <div className='fixed w-[20%] top-[0%] right-[0%]'>
    <div className=' border-l flex flex-col py-2 h-screen'>
        <RankingBox title='Week King'/>
        <RankingBox title='Month King'/>
        <RankingBox title='Year King'/>
    </div>
    </div>
    </>
  )
}

export default RightSideBar
