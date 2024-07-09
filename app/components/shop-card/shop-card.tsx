interface IProps {
    title: string
    image: string
    imageAlt: string
    text: string
    url?: string
}

export default function ShopCard({ title, image, imageAlt, text, url }: IProps) {
    return (
        <div className={"w-full rounded-full overflow-hidden shadow-md shadow-black/50 bg-green-900 hover:bg-green-700 hover:scale-105 transition-transform"}>
            <a href={url} target="_blank"
                className="w-full max-h-28 flex flex-row justify-between">
                <div className="flex items-center ml-8">
                    <div className="flex flex-col text-white">
                        <div className="flex gap-2">
                            <div className="font-bold text-4xl">{title}</div>
                            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0f0" strokeWidth="4" viewBox="0 0 64 64">
                                <path d="M55.4 32v21.58a1.81 1.81 0 0 1-1.82 1.82H10.42a1.81 1.81 0 0 1-1.82-1.82V10.42a1.81 1.81 0 0 1 1.82-1.82H32M40.32 8.6H55.4v15.58M19.32 45.72 54.61 8.91" />
                            </svg>
                        </div>
                        <div className="text-base">{text}</div>
                    </div>
                </div>
                <img className="object-contain max-h-28 mr-8" src={image} alt={imageAlt} />
            </a>
        </div>
    );
}
