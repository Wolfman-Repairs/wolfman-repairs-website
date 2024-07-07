interface IProps {
    title: string
    image: string
    imageAlt: string
    text: string
}

export default function ContentCard({ title, image, imageAlt, text }: IProps) {
    return (
        <div className={"flex flex-col w-full rounded shadow-md shadow-black/50 bg-neutral-800"}>
            <div style={{ '--image-url': `url(${image})` } as React.CSSProperties}
                className="rounded-t bg-center bg-repeat bg-[image:var(--image-url)] bg-blend-multiply bg-neutral-700 shadow-md shadow-black/50">
                <div className="text-white font-bold text-4xl text-center m-10">{title}</div>
            </div>
            <div className="p-2 md:p-6">
                <p className="text-white text-base whitespace-pre-line">{text}</p>
            </div>
        </div>
    );
}
