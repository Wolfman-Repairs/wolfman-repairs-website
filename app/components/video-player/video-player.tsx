interface IProps {
    playlist: string
}

export default function VideoPlayer({ playlist }: IProps) {
    return (
        <div className="relative pt-[56.25%]">
            <iframe className="absolute inset-0 w-full h-full border-0"
                id="video-player-iframe"
                title="YouTube playlist"
                src={playlist}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy">
            </iframe>
        </div>
    );
}
