interface IProps {
    playlist: string
    index?: number
}

export default function VideoPlayer({ playlist, index }: IProps) {
    var playlistUrl = "https://www.youtube-nocookie.com/embed?listType=playlist&list=" + playlist
    if (index) playlistUrl += "&index=" + index
    return (
        <div className="relative pt-[56.25%]">
            <iframe className="absolute inset-0 w-full h-full border-0"
                src={playlistUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    );
}
