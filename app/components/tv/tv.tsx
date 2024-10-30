"use client"
import { useState } from "react"
import { useSound } from 'use-sound'
import VideoPlayer from "../video-player/video-player";

interface IProps {
    playlist: Array<string>
    offImage?: string
    offImageAlt?: string
}

export default function TV({ playlist, offImage, offImageAlt }: IProps) {
    const [play] = useSound("/sounds/switch-click.wav");

    const [powerClicked, setPowerClicked] = useState(true);
    const togglePowerClicked = (e: React.ChangeEvent<HTMLInputElement>) => {
        play();
        setPowerClicked(e.target.checked);
    }

    const fullRotationDegrees = 360;
    const channelRotationDegrees = fullRotationDegrees / playlist.length;

    const [channelRotation, setChannelChanged] = useState(0);
    const [playlistUrl, setPlaylistUrl] = useState(playlist[0]);
    const channelChanged = () => {
        play();
        var rotation = channelRotation + channelRotationDegrees;
        var channelIndex = Math.floor(rotation % fullRotationDegrees / channelRotationDegrees);
        setPlaylistUrl(playlist[channelIndex]);
        setChannelChanged(rotation);
    }

    return (
        <section className="relative">
            <img
                className="object-contain w-full h-auto"
                src="/retro_tv.svg"
                alt="Wolfman Repairs Youtube TV Frame"
            />
            <div className="absolute top-[6%] left-[3.7%] w-[78.5%] border-2 md:border-4 border-solid border-black before:block before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:z-10 before:pointer-events-none before:bg-[size:100%_2px,3px_100%] before:bg-gradient-crt ">
                <div className={powerClicked ? "" : "hidden"}>
                    <VideoPlayer playlist={powerClicked ? playlistUrl : ""} />
                </div>
                <img className={powerClicked ? "hidden" : "py-[12%] opacity-5"} src={offImage} alt={offImageAlt} />
            </div>
            <div className="absolute top-[9.9%] left-[87.1%] w-[7.8%] h-[14%]">
                <div className="relative cursor-pointer w-full h-full rounded-full">
                    <button className="appearance-none absolute z-10 w-full h-full opacity-0 cursor-pointer"
                        onClick={channelChanged} />
                    <div className="relative w-full h-full transition-transform"
                        style={{ transform: `rotate(${channelRotation}deg)` }}>
                        <svg className="w-full h-full fill-neutral-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 20">
                            <path d="M2.156.001C1.14-.045 0 1.34 0 2.532v15.132c0 1.148 1.179 2.38 2.156 2.335C3.059 19.957 4 18.726 4 17.664V2.532C4 1.422 3.1.044 2.156.002z" />
                            <path fill="#fff" d="M2.107.8C1.343.773.59 2.52.59 2.52l2.844.012S2.834.825 2.107.8z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="absolute top-[52.5%] left-[87.1%] w-[7.8%] h-[32%]">
                <div className="relative overflow-hidden cursor-pointer w-full h-full border-2 md:border-4 border-solid border-black">
                    <input className="appearance-none absolute z-10 w-full h-full opacity-0 cursor-pointer"
                        type="checkbox" checked={powerClicked} onChange={togglePowerClicked} />
                    <div className={"w-full h-full py-1 inline-flex transition-colors shadow-[inset_0_0_0.5em_rgba(0,0,0,0.6)] " + (powerClicked ? "bg-red-500" : "bg-neutral-600")}>
                        <div className={"w-full h-full flex flex-col justify-evenly relative items-center sm:rounded-md transition-transform bg-gradient-to-b from-[49%] to-[51%] border-y border-neutral-800 border-opacity-10 " + (powerClicked ? "-translate-y-[10%]  from-neutral-700  to-neutral-500" : "translate-y-[10%] from-neutral-500 to-neutral-700")}>
                            <svg className="w-[70%] h-[70%]" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <rect className={powerClicked ? "fill-white" : "fill-neutral-400"} x="7" y="3" width="2" height="12" rx="1" />
                            </svg>
                            <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path className={powerClicked ? "fill-neutral-400" : "fill-white"} d="M8 0C3.594 0 0 3.594 0 8c0 4.406 3.594 8 8 8 4.406 0 8-3.594 8-8 0-4.406-3.594-8-8-8Zm0 2.018A5.967 5.967 0 0 1 13.982 8 5.967 5.967 0 0 1 8 13.982 5.967 5.967 0 0 1 2.018 8 5.967 5.967 0 0 1 8 2.018Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
