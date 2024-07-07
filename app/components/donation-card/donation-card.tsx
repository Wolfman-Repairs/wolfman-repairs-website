export default function DonationCard() {
    return (
        <form className="flex rounded overflow-hidden shadow-md shadow-black/50 hover:scale-105 transition-transform"
            action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="hosted_button_id" value="984335KR9EFTE" />
            <button className="h-full w-full bg-neutral-800" type="submit">
                <div className="flex">
                    <div className="bg-green-900">
                        <img className="object-cover w-full h-full" src="/wolfman-repairs-website/circuit-board.svg" alt="circuit board" />
                    </div>
                    <div className="flex flex-col items-center bg-neutral-200 p-4">
                        <div className="text-left">
                            <div className="text-neutral-900 font-bold text-xl mb-2">Love what we do? Donate To Wolfman Repairs!</div>
                            <p className="text-neutral-800 text-base">Support our mission to revive retro gaming by donating today. Every contribution helps us continue our work of restoring gaming nostalgia and sharing it with enthusiasts worldwide. Join us in preserving gaming history and creating memories for generations to come. Thank you for your support </p>
                        </div>

                        <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                            title="PayPal - The safer, easier way to pay online!"
                            alt="Donate with PayPal button"
                        />
                    </div>
                </div>
            </button>
        </form>
    );
}
