import { Link } from "@inertiajs/react";
import { INLINE_SIZE } from "Pages/constants/inlinesize";

type LiProps = {
    title: string;
    src: string;
    href?: string;
    size?: "large" | "small"
};
const LiTitle = ({ title, src, href,size="large" }: LiProps) => {
    const textSize =  size === "large" ? INLINE_SIZE.text_size.large : INLINE_SIZE.text_size.small
    return (
        <li className={`${textSize} flex py-2 bg-black hover:bg-gray-900 rounded-xl`}>
            <img src={src} className="mr-2" />
            {href ? <Link href={href} className="w-full">{title}</Link> : <p>{title}</p>}
        </li>
    );
};

export default LiTitle;
