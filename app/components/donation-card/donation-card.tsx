import { useState } from "react"

interface IProps {
    title: string
    image: string
    imageAlt: string
    visibleText: string
    hiddenText?: string
}

export default function DonationCard({ title, image, imageAlt, visibleText, hiddenText }: IProps) {
    return (
        <div className="flex rounded overflow-hidden shadow-md shadow-black/50">
            <div className="flex bg-neutral-800">
                <img className="object-cover w-full" src="/test-website-2/circuit-board.svg" alt={imageAlt} />
            </div>
            <div className="bg-white p-4">
                <div className="mb-4">
                    <div className="text-gray-900 font-bold text-xl mb-2">Love what we do? Donate To Wolfman Repairs!</div>
                    <p className="text-gray-700 text-base">Support our mission to revive retro gaming by donating today. Every contribution helps us continue our work of restoring gaming nostalgia and sharing it with enthusiasts worldwide. Join us in preserving gaming history and creating memories for generations to come. Thank you for your support </p>
                </div>

                <form className="text-center" action="https://www.paypal.com/donate" method="post" target="_blank">
                    <input type="hidden" name="hosted_button_id" value="INSERT_ID_HERE" />
                    <input className="border-0" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                </form>
            </div>
        </div>
    );
}
