import { createRef, useEffect, useRef, useState } from "react";

export const modeChangeFunction = () => {
    const [problem, setProblem] = useState(false);

    const [otherModal, setOtherModal] = useState(false);
    const OtherRef = useRef<HTMLDivElement | null>(null);
    const changeOtherModal = () => setOtherModal((prev) => !prev);
    const changeProblemModal = () => {
        setProblem(true);
    };

    const closeProblemModal = () => {
        setProblem(false);
        setOtherModal(false);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                otherModal &&
                OtherRef.current &&
                !OtherRef.current.contains(event.target as Node)
            ) {
                setOtherModal(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [otherModal]);
    return {
        problem,
        otherModal,
        setOtherModal,
        OtherRef,
        changeOtherModal,
        changeProblemModal,
        closeProblemModal,
    };
};
