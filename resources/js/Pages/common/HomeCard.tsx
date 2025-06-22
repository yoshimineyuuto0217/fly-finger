import BoxTitle from "./BoxTitle";
import GoodListBox from "./GoodListBox";

const HomeCard = ({ mainTitle, profileSrc, name }: UserProps) => {
    return (
        <div className="mt-[5%] h-auto border mx-auto px-3 py-2 hover:cursor-pointer">
            <BoxTitle profileSrc={profileSrc} name={name} size={30} />
            <div className="border h-auto  mx-auto text-2xl p-3">
                {mainTitle}
            </div>
        </div>
    );
};

export default HomeCard;
