import FlyHomeCard from "Pages/common/FlyHomeCard";
import SelectBox from "Pages/common/SelectBox";
import FlyFinger from "Pages/FlyFinger";
import { listUserProps, mockData, UserProps } from "Pages/types/mockData";
import { useEffect, useState } from "react";

const FlyFingerHome = () => {
    
    const [info, setInfo] = useState<listUserProps | undefined>(undefined);

    useEffect(() => {
        try {
            const res = mockData;
            setInfo(res);
        } catch (error) {
            console.error(`エラー出てます:${error}`);
        }
    }, []);

    return (
        <>
            <FlyFinger>
                <div className="mb-[5%]">
                    <SelectBox />
                </div>
                {info?.tasks.map((task) => (
                    <FlyHomeCard
                        key={task.id}
                        title={task.mainTitle}
                        description={task.mainText}
                    />
                ))}
            </FlyFinger>
        </>
    );
};

export default FlyFingerHome;
