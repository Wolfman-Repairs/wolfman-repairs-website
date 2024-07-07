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
            className={"flex w-full rounded-full overflow-hidden shadow-md shadow-black/50 bg-neutral-800 bg-contain bg-no-repeat bg-[95%_50%] bg-[image:var(--image-url)] hover:scale-105 transition-transform"}>
            <a href={url} target="_blank"
                className="w-full flex flex-col justify-end">
                <div className="text-white text-left m-8">
                    <div className="flex space-x-2">
                        <div className="font-bold text-4xl">{title}</div>
                        <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0f0" stroke-width="4" viewBox="0 0 64 64">
                            <path d="M55.4 32v21.58a1.81 1.81 0 0 1-1.82 1.82H10.42a1.81 1.81 0 0 1-1.82-1.82V10.42a1.81 1.81 0 0 1 1.82-1.82H32M40.32 8.6H55.4v15.58M19.32 45.72 54.61 8.91" />
                        </svg>
                    </div>
                    <div className="text-base">{text}</div>
                </div>
            </a>
        </div>
    );
}
