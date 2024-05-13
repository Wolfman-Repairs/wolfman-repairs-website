import Link from "next/link";

const links = [
    { name: 'Videos', href: '/' },
    { name: 'About', href: '/' },
];

export default function NavBar() {
    return (
        <header className="sticky top-0 p-4 bg-gray-500 w-full">
            <nav className="flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-grow text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <Link href="/" className="text-xl font-semibold inline-block hover:text-gray-200">Wolfman Repairs</Link>
                </div>
                <div className="flex w-auto">
                    <div className="text-sm flex-grow">
                        {links.map((link) => {
                            return (
                                <Link href={link.href} key={link.name}
                                    className="inline-block text-gray-200 hover:text-white mr-4">{link.name}</Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
