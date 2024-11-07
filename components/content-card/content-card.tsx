interface IProps {
    title: string
    image?: string
    imageAlt?: string
    text: string
}

export default function ContentCard({ title, image, imageAlt, text }: IProps) {
    return (
        <div className={"flex flex-col w-full rounded-md overflow-hidden shadow-md shadow-black/50 bg-neutral-800"}>
            <div style={image ? { '--image-url': `url(${image})` } as React.CSSProperties : undefined}
                className="bg-center bg-repeat bg-[image:var(--image-url)] bg-blend-multiply bg-neutral-700 shadow-md shadow-black/50">
                <h2 className="text-white font-bold text-4xl text-center m-4 sm:m-8">{title}</h2>
            </div>
            <div className="p-2 md:p-6">
                <p className="text-white text-base whitespace-pre-line">{text}</p>
            </div>
        </div>
    );
}
