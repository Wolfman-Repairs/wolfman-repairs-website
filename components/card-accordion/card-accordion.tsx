"use client"
import { useState } from "react"

interface IProps {
    title: string
    image: string
    imageAlt: string
    visibleText: string
    hiddenText?: string
}

export default function CardAccordion({ title, image, imageAlt, visibleText, hiddenText }: IProps) {
    const [expanded, setActive] = useState(false);
    const toggleExpanded = () => {
        setActive(!expanded)
    }
    return (
        <div className="md:w-96 flex-1 md:flex-initial h-full rounded overflow-hidden shadow-md bg-neutral-800 shadow-black/50 my-4">
            <img className="w-full h-44 bg-neutral-800" src={image} alt={imageAlt} />
            <div className="p-4 mt-4 ">
                <div className="font-bold text-xl text-center">{title}</div>
                <div className="text-base whitespace-pre-line text-center">
                    {visibleText}
                </div>
                <div className={"transition-[max-height] ease-in-out delay-75 text-base whitespace-pre-line text-center " + (expanded ? "max-h-screen" : "invisible max-h-0")}>
                    <br />
                    {hiddenText}
                </div>
            </div>
            <button className="w-full text-center bg-gray-200 hover:bg-gray-300 py-2" onClick={toggleExpanded}>
                <span className="text-sm font-semibold text-gray-700">{expanded ? "- Show Less" : "+ Read More"}</span>
            </button>
        </div>
    );
}
