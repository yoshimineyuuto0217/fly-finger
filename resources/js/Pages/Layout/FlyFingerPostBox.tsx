import FlyFinger from "Pages/FlyFinger";

const FlyFingerPostBox = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <FlyFinger>
            <p className="my-[5%]">{title}</p>
            <div>{description}</div>
        </FlyFinger>
    );
};

export default FlyFingerPostBox;
