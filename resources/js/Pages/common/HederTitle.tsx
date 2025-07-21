const HederTitle = ({title,src,className}:{title:string;src:string; className?:string;}) => {

    return (
        <h2 className={`font-bold text-4xl absolute top-[2%] left-1/2 -translate-x-1/2 mb-4 flex items-center ${className}`}>
            <img src={src} alt={`${src}の画像`} />
            {title}
        </h2>
    );
};

export default HederTitle;
