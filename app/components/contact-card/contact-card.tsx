"use client"
import { useState } from "react"
import { BaseSyntheticEvent } from "react";
// import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactCard() {
    const [result, setResult] = useState("");

    // const onHCaptchaChange = (token) => {
    //     setValue("h-captcha-response", token);
    // };

    async function onSubmit(event: BaseSyntheticEvent) {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "48a0a6b2-e345-4c3b-847f-43bbee4601e2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Thank you for the message!");
            event.target.reset();
        } else {
            setResult(data.message);
            console.error(data);
        }
    }

    return (
        <div className="p-2 sm:p-4 md:p-8 rounded-md shadow-md shadow-black/50 bg-neutral-800 text-white">
            <div className="text-center mb-4">
                <h1 className="text-3xl font-semibold ">
                    Contact Wolfman
                </h1>
                <p className="">
                    Fill out the form below to send Wolfman a message.
                </p>
            </div>
            <div className="">
                <form id="form" onSubmit={onSubmit}>
                    <input type="hidden" name="subject" value="New Submission from your Website" />
                    <input type="hidden" name="from_name" value="Help Wolfman!"></input>
                    <input className="hidden" type="checkbox" name="botcheck" style={{ display: "none" }} />
                    <div className="flex flex-col space-y-4">
                        <div className="">
                            <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="Wolfman Repairs" required autoComplete="name"
                                className="w-full p-2 border rounded-md bg-neutral-700 placeholder-green-500 placeholder-opacity-50 border-neutral-600 focus:outline-none focus:ring focus:ring-green-900 focus:border-green-800 focus:bg-neutral-900"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="you@wolfmanrepairs.com" required autoComplete="email"
                                className="w-full p-2 border rounded-md bg-neutral-700 placeholder-green-500 placeholder-opacity-50 border-neutral-600 focus:outline-none focus:ring focus:ring-green-900 focus:border-green-800 focus:bg-neutral-900"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="phone" className="text-sm">Phone Number</label>
                            <input type="tel" name="phone" id="phone" placeholder="+1 (555) 123-4567" autoComplete="tel"
                                className="w-full p-2 border rounded-md bg-neutral-700 placeholder-green-500 placeholder-opacity-50 border-neutral-600 focus:outline-none focus:ring focus:ring-green-900 focus:border-green-800 focus:bg-neutral-900"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="message" className="block mb-2 text-sm">Your Message</label>
                            <textarea rows={5} name="message" id="message" placeholder="Your Message" required
                                className="w-full p-2 border rounded-md bg-neutral-700 placeholder-green-500 placeholder-opacity-50 border-neutral-600 focus:outline-none focus:ring focus:ring-green-900 focus:border-green-800 focus:bg-neutral-900"
                            />
                        </div>
                        {/* <HCaptcha
                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                            reCaptchaCompat={false}
                            onVerify={onHCaptchaChange}
                            theme="dark"
                        /> */}
                        <div className="">
                            <button type="submit" className="w-full p-4 shadow-md shadow-black/50 bg-green-900 rounded-full focus:bg-green-800 focus:outline-none hover:hover:bg-green-700">
                                Send Message
                            </button>
                        </div>
                        <p className="text-base text-center" id="result">{result}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
