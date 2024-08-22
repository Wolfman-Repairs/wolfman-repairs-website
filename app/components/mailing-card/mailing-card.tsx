interface IProps {
    title: string
    image: string
    imageAlt: string
    text: string
}

export default function MailingCard({ title, image, imageAlt, text }: IProps) {
    return (
        <div className={"p-2 sm:p-4 md:p-8 rounded-md overflow-hidden shadow-md shadow-black/50 bg-neutral-800 flex lg:flex-col justify-between"}>
            <div className="flex flex-col text-white gap-2">
                <h2 className="font-bold text-3xl">{title}</h2>
                <div className="text-base whitespace-pre-line">{text}</div>
            </div>
            <img className="w-28 lg:w-full hidden sm:inline" src={image} alt={imageAlt} />
        </div>
    );
}
