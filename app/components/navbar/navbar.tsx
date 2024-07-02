"use client"
import Link from "next/link";
import { useState } from "react";

const links = [
    { name: 'eBay', href: 'https://www.ebay.com/usr/wolfmanrepairs', target: '_blank' },
    { name: 'Etsy', href: 'https://www.etsy.com/shop/WolfmanRepairs', target: '_blank' },
    { name: 'Videos', href: '#video' },
    { name: 'About', href: '#about' },
];

export default function NavBar() {
    const [expanded, setActive] = useState(false);
    const toggleExpanded = () => {
        setActive(!expanded)
    }
    return (
        <header className="sticky top-0 z-10 p-4 bg-neutral-900 w-full">
            <nav className="flex items-center justify-between flex-wrap min-h-[40px]">
                <div className="flex items-center flex-grow text-white mr-6">
                    <svg className="h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321 321">
                        {/* <g stroke="#fff" strokeOpacity={0}> */}
                        <path className="fill-white" d="M90.5 315.5v-5h-10v-40h-10v20h-10v20h-20v-10h-10v-20h-10v-20h-10v10H.5v-20h10v-10h10v-10h10v-10h10v-10h-30v-10H.5v-30h10v-10h10v-10h20v-10h10v-20h10v-20h10v-10h20v-10h10v-10h70v-10h10v-10h10v-10h10v-10h10v-10h10v-10h10V.5h20v10h10v10h10v60h-10v10h-10v10h-10v30h40v-10h10v-10h10v-10h20v60h-10v10h-20v10h-10v10h-20v10h-10v10h-10v10h-10v30h-10v40h10v20h10v10h-20v-20h-10v-10h-20v10h-10v10h-10v10h-20v-10h-10v-10h-10v-20h-10v10h-10v30h-20Zm10-25v-10h10v-20h20v10h10v20h10v10h20v-10h10v-10h10v-10h10v10h10v-40h10v-30h10v-10h10v-10h10v-10h20v-10h10v-10h20v-10h10v-30h-10v10h-10v10h-60v-50h10v-10h10v-10h10v-50h-10v-10h-20v20h-10v10h-10v10h-10v10h-10v10h-10v10h-70v10h-10v10h-20v10h-10v20h-10v20h-10v10h-20v10h-10v10h-10v10h10v10h60v-10h40v10h-20v10h-30v10h-20v10h-10v10h-10v30h10v20h10v-10h10v-20h10v-10h20v50h10zm-70-105v-5h10v-10h20v-10h20v10h10v10h-20v10h-40Zm90-70v-5h10v-10h20v-10h20v10h-10v10h-20v10h-20z" />
                        {/* <path className="fill-transparent" d="M.5 295.5v-25h10v-10h10v20h10v20h10v10h20v-20h10v-20h10v40h10v10H.5Zm110 10v-15h10v-10h10v20h10v10h10v10h-40zm60 10v-5h10v-10h10v-10h20v10h10v20h-50zm-40-90v-5h40v-10h30v-10h30v10h-20v10h-30v10h-50Zm-110-30v-5h-10v-10h10v-10h10v-10h20v-10h30v10h-20v10h-20v10h-10v10h40v-10h30v10h-20v10h-60Zm80-75v-10h10v-10h10v-10h20v-10h40v30h-10v10h-20v10h-50zm40-5v-5h20v-10h10v-10h-20v10h-20v10h-10v10h20zm100-80v-5h-10v-20h20v10h10v20h-20z" /> */}
                        <path className="fill-[#8bac0f]" d="M90.5 275.5v-25h-20v10h-10v20h-10v10h-10v-20h-10v-30h10v-10h10v-10h20v-10h30v-10h20v-10h-20v-10h-10v-10h-10v-20h-20v-20h10v-20h10v-10h20v-10h10v-10h30v10h-20v10h-10v10h-10v20h50v-10h20v-10h10v-40h10v-10h10v-10h10v-10h10v-10h20v10h20v30h-10v10h-10v10h-10v50h60v-10h10v-10h10v30h-10v10h-20v10h-10v10h-20v10h-10v10h-40v10h-30v10h-40v10h50v-10h30v-10h10v30h-10v40h-10v-10h-10v10h-10v10h-10v10h-20v-10h-10v-20h-10v-10h-20v20h-10v20h-10Zm180-150v-5h10v-10h10v-10h10v10h-10v10h-10v10h-10zm-30-20v-5h10v-10h10v-10h10v10h-10v10h-10v10h-10z" />
                        {/* </g> */}
                    </svg>

                    <Link href="/" className="text-2xl font-semibold inline-block hover:text-gray-200">Wolfman Repairs</Link>
                </div>
                <div className="flex w-auto max-sm:hidden">
                    <div className="text-lg flex-grow font-md">
                        {links.map((link) => {
                            return (
                                /* TODO: Set this as a Link after changing base path to "" */
                                <a href={link.href} key={link.name} target={link.target}
                                    className="inline-block p-1 rounded text-gray-200 hover:text-white hover:bg-neutral-700 ml-2">{link.name}</a>
                            );
                        })}
                    </div>
                </div>
                <button onClick={toggleExpanded} type="button" className="sm:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg hover:bg-neutral-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 18h16M4 12h16M4 6h16" />
                    </svg>
                </button>
                <div className={"sm:hidden text-2xl whitespace-pre-line text-center pt-4 w-full " + (expanded ? "" : "hidden")}>
                    <div className="flex flex-col font-semibold rounded-b-lg rounded-t-lg bg-neutral-800">
                        {links.map((link) => {
                            return (
                                /* TODO: Set this as a Link after changing base path to "" */
                                <a href={link.href} key={link.name} target={link.target} onClick={toggleExpanded}
                                    className="block p-2 rounded-b-lg rounded-t-lg text-gray-200 hover:bg-neutral-700 hover:text-white">{link.name}</a>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
