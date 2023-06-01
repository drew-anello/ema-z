import Link from "next/link"
function Nav() {
    return (
        <div className="mt-3 font-serif text-xl">
            <ul className="flex">
                <li className="pl-10 mr-auto text-2xl font-semibold">
                    <Link href='/'>
                        Ema Zivkovic
                    </Link>
                </li>
                <div className="flex justify-between flex-auto pl-4">
                    <li>
                        <Link href='/resume'>
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link href='/choreography'>
                            Choreography
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            Contact
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Nav