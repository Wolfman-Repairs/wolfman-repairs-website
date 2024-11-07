interface IProps {
    image: string
    imageAlt: string
    text: string
}

export default function HeroBanner({ image, imageAlt, text }: IProps) {
    return (
        <section className="bg-neutral-900 text-white w-full">
            <div className="flex flex-col gap-3">
                <h1>
                    <img
                        className="object-contain w-full h-auto max-h-96"
                        src={image}
                        alt={imageAlt}
                    />
                </h1>
                <p className="text-neutral-400 sm:text-2xl lg:text-4xl font-bold text-center">
                    {text}
                </p>
            </div>
            <hr className="mt-8 border-neutral-700" />
        </section>
    );
}
