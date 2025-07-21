import { useForm } from '@inertiajs/react';

const FlyHomeCard = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    const form = useForm({ title, description });
    return (
        <div className="border w-full h-auto p-5 my-5">
            <div onClick={() => form.post('/article')} className='cursor-pointer'>
                <div className='flex justify-between'><p className="mb-3">{title}</p><p>2002/02/17</p></div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FlyHomeCard;
