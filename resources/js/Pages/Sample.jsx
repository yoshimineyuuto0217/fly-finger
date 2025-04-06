import { useEffect } from "react";

const Sample = () => {
    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('component unmounted')
        };
    }, []);

    return <div>サンプルだよ</div>;
}

export default Sample;
