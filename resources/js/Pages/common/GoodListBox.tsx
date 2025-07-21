import { useModal } from "Pages/context/modalContext";

const GoodListBox = () => {
    const { darkMode } = useModal();
    return (
        <div className="flex justify-end">
            <div className="text-center">
                <img
                    className="mx-auto"
                    src={`${
                        darkMode
                            ? "/assets/donmai.svg"
                            : "/assets/blackdonmai.svg"
                    }`}
                    alt="どんまい"
                />
                <p className="text-[10px]">ドンマイ!!</p>
                <p>10</p>
            </div>
            <div className="text-center">
                <img
                    className="mx-auto"
                    src={`${
                        darkMode
                            ? "/assets/fight.svg"
                            : "/assets/fightblack.svg"
                    }`}
                    alt="ファィト"
                />
                <p className="text-[10px]">ファィト!!</p>
                <p>10</p>
            </div>
            <div className="text-center">
                <img
                    className="mx-auto"
                    src={`${
                        darkMode ? "/assets/yaba.svg" : "/assets/yabablack.svg"
                    }`}
                    alt="やばっ"
                />
                <p className="text-[10px]">ヤバッ!!</p>
                <p>10</p>
            </div>
            <div className="text-center">
                <img
                    className="mx-auto"
                    src={`${
                        darkMode ? "/assets/hart.svg" : "/assets/hartblack.svg"
                    }`}
                />
                <p className="text-[10px]">共感!!</p>
                <p>10</p>
            </div>
            <div className="text-center">
                <img
                    className="mx-auto"
                    src={`${
                        darkMode
                            ? "/assets/total.svg"
                            : "/assets/totalblack.svg"
                    }`}
                    alt="総合"
                />
                <p className="text-[10px]">総合</p>
                <p>10</p>
            </div>
        </div>
    );
};

export default GoodListBox;
