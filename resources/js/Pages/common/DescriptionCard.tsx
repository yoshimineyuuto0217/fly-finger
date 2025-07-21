const DescriptionCard = ({
    mainTitle,
    mainText,
}: {
    mainTitle: string;
    mainText: string;
}) => {
    return (
        <div className="mt-[10%] ">
            <h3 className="text-[40px]">{mainTitle}</h3>
            <div className="w-full mx-auto bg-green-600 ">{mainText}</div>
        </div>
    );
};

export default DescriptionCard;
