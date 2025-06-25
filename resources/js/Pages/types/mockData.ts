export type UserProps = {
    name:string;
    id: string;
    mainTitle: string;
    profileSrc: string;
    mainText: string;
};
export type UserProp = {
    mainTitle: string;
    mainText: string;
    name:string;
};
export type listUserProp = {
    tasks: UserProps[];
};

export type listUserProps = {
    tasks: UserProps[];
};

export const mockData = {
    tasks: [
        {
            name:"一口",
            id: "1",
            mainTitle: "机の角で小指をぶつけて壊死した話",
            mainText:
                "これはテストの詳細1ですこれはテストの詳細1ですこれはテストの詳細1ですこれはテストの詳細1です",
            profileSrc: "/assets/grey.png",
        },
        {
            name:"霜上",
            id: "2",
            mainTitle: "小指を切断した話",
            mainText: "これはテストの詳細2です",
            profileSrc: "/assets/user4.svg",
        },
        {
            name:"今西",
            id: "3",
            mainTitle: "ヤクザに絡まれた時の話",
            mainText: "これはテストの詳細3です",
            profileSrc: "/assets/user3.svg",
        },
        {
            name:"笹田",
            id: "4",
            mainTitle: "パワハラ上司の話",
            mainText: "これはテストの詳細4です",
            profileSrc: "/assets/grey.png",
        },
        {
            name:"若松",
            id: "5",
            mainTitle: "test5",
            mainText: "これはテストの詳細5です",
            profileSrc: "/assets/user1.svg",
        },
        {
            name: "吉嶺",
            id: "6",
            mainTitle: "test6",
            mainText: "これはテストの詳細6です",
            profileSrc: "/assets/user2.svg",
        },
        {
            name: "吉嶺",
            id: "7",
            mainTitle: "test6",
            mainText: "これはテストの詳細6です",
            profileSrc: "/assets/user2.svg",
        },
        {
            name: "吉嶺",
            id: "8",
            mainTitle: "test6",
            mainText: "これはテストの詳細6です",
            profileSrc: "/assets/user2.svg",
        },
        {
            name: "吉嶺",
            id: "9",
            mainTitle: "test6",
            mainText: "これはテストの詳細6です",
            profileSrc: "/assets/user2.svg",
        },
        {
            name: "吉嶺",
            id: "10",
            mainTitle: "test6",
            mainText: "これはテストの詳細6です",
            profileSrc: "/assets/user2.svg",
        },
    ],
};
