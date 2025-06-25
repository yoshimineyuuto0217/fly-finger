import RankingBox from 'Pages/common/RankingBox'
import { useModal } from 'Pages/context/modalContext';
import { mockData, UserProp } from 'Pages/types/mockData';
import { useEffect, useState } from 'react';

const RightSideBar = () => {
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
    <div className="fixed w-[20%] top-[0%] right-[0%]">
    <div className=' border-l flex flex-col py-2 h-screen'>
        <RankingBox title='Week King'  newCard={newCard}/>
        <RankingBox title='Month King' newCard={newCard}/>
        <RankingBox title='Year King' newCard={newCard}/>
    </div>
    </div>
    </>
  )
}

export default RightSideBar
