import Link from "next/link"
function Nav() {
    return (
        <div className="mt-3 font-serif text-xl">
            <ul className="flex justify-around">
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
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
            </ul>
        </div>
    )
}

export default Nav