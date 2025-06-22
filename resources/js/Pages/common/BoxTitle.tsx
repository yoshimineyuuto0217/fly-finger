import UserIconBox from "./UserIconBox";

const BoxTitle = ({profileSrc,name,size}:UserProps) => {
    return (
        <div className="flex items-center mb-2">
            <UserIconBox size={size as number} profileSrc={profileSrc} />
            <p>{name}</p>
        </div>
    );
};

export default BoxTitle;
