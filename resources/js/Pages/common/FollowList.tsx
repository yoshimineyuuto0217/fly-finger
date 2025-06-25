import { FollowButton } from "./FollowButton";
import UserIconBox from "./UserIconBox";

const FollowList = ({onClick,title}:{onClick:()=>void;title:string}) => {
    return (
        <>
            <div className="flex items-center justify-between w-[70%] mx-auto my-3">
                <div className="flex items-center">
                <UserIconBox size={60} profileSrc="/assets/grey.png" />
                <p>{title}</p>
                </div>
                <FollowButton onClick={onClick}/>
            </div>
        </>
    );
};

export default FollowList;
