import Link from 'next/link'

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <header className="container mx-auto max-w-screen-md py-10 flex flex-justify">
                <nav className="flex-grow flex">
                    <ul className="flex list-none items-center">
                        <li className="mr-5 lg:mr-10">
                            <Link href="/" passHref>
                                <a className="no-underline font-semibold">
                                    Mark Janiczak
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" passHref>
                                <a className="no-underline font-semibold">
                                    Blog
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <a className="inline-block no-underline font-semibold border rounded-md px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200" href="mailto:mark@janiczak.me">
                    Get in touch
                </a>
            </header>
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </>
    )
}
