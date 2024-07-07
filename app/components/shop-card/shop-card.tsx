interface IProps {
    title: string
    image: string
    imageAlt: string
    text: string
    url?: string
}

export default function ShopCard({ title, image, imageAlt, text, url }: IProps) {
    return (
        <div style={{ '--image-url': `url(${image})` } as React.CSSProperties}
            className={"flex w-full rounded shadow-md shadow-black/50 bg-neutral-800 bg-contain bg-no-repeat bg-[95%_50%] bg-[image:var(--image-url)] hover:scale-105 transition-transform"}>
            <a href={url} target="_blank"
                className="w-full flex flex-col justify-end">
                <div className="text-white text-left m-8">
                    <div className="font-bold text-4xl">{title}</div>
                    <div className="text-base">{text}</div>
                </div>
            </a>
        </div>
    );
}
