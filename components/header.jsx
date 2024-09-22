import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/icon-128.png';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' }
    // { linkText: 'Revalidation', href: '/revalidation' },
    // { linkText: 'Image CDN', href: '/image-cdn' },
    // { linkText: 'Edge Function', href: '/edge' },
    // { linkText: 'Blobs', href: '/blobs' },
    // { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={netlifyLogo} alt="logo" width={48} height={48} />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex-grow flex justify-end items-center gap-4">
                <Link
                    href="https://chromewebstore.google.com/detail/stand-up-report-generator/iiokonekdbnkbpbdoppdenommagiaheh"
                    className="btn btn-sm btn-primary rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Install
                </Link>
                <Link href="https://github.com/josephj/standup-report" target="_blank" rel="noopener noreferrer">
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div>
        </nav>
    );
}
