type UserIconBoxProps = {
    size: number; // 例: 50, 80, 100 など
    profileSrc: string | null; // APIから取得した画像URL
};

const UserIconBox = ({ size, profileSrc }: UserIconBoxProps) => {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "50%",
                overflow: "hidden",
                marginRight: "10px",
            }}
        >
            <img
                src={profileSrc || ""}
                alt="ユーザーアイコン"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    );
};

export default UserIconBox;
