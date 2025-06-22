import { FollowButton } from "./FollowButton";
import UserIconBox from "./UserIconBox";

const FollowBox = () => {
    return (
        <>
            <div className="flex items-center justify-between w-[70%] mx-auto my-3">
                <div className="flex items-center">
                <UserIconBox size={60} profileSrc="/assets/grey.png" />
                <p>title</p>
                </div>
                <FollowButton/>
            </div>
        </>
    );
};

export default FollowBox;
