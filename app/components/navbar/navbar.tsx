"use client"
import Link from "next/link";
import { useState } from "react";

const links = [
    { name: 'eBay', href: 'https://www.ebay.com/usr/wolfmanrepairs', target: '_blank' },
    { name: 'Etsy', href: 'https://www.etsy.com/shop/WolfmanRepairs', target: '_blank' },
    { name: 'Videos', href: '/#video' },
    { name: 'About', href: '/#about' },
];

export default function NavBar() {
    const [expanded, setActive] = useState(false);
    const toggleExpanded = () => {
        setActive(!expanded)
    }
    return (
        <header className="sticky top-0 z-10 p-4 bg-gray-500 w-full">
            <nav className="flex items-center justify-between flex-wrap min-h-[40px]">
                <div className="flex items-center flex-grow text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <Link href="/" className="text-2xl font-semibold inline-block hover:text-gray-200">Wolfman Repairs</Link>
                </div>
                <div className="flex w-auto max-sm:hidden">
                    <div className="text-lg flex-grow font-md">
                        {links.map((link) => {
                            return (
                                <Link href={link.href} key={link.name} target={link.target}
                                    className="inline-block p-1 rounded text-gray-200 hover:text-white hover:bg-gray-700 ml-2">{link.name}</Link>
                            );
                        })}
                    </div>
                </div>
                <button onClick={toggleExpanded} type="button" className="sm:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 18h16M4 12h16M4 6h16" />
                    </svg>
                </button>
                <div className={"sm:hidden text-2xl whitespace-pre-line text-center pt-4 w-full " + (expanded ? "" : "hidden")}>
                    <div className="flex flex-col font-semibold rounded-b-lg rounded-t-lg bg-gray-800">
                        {links.map((link) => {
                            return (
                                <Link href={link.href} key={link.name} target={link.target} onClick={toggleExpanded}
                                    className="block p-2 rounded-b-lg rounded-t-lg text-gray-200 hover:bg-gray-700 hover:text-white">{link.name}</Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
