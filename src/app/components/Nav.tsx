import Link from "next/link"
function Nav() {
    return (
        <div>
            <ul>
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
            </ul>
        </div>
    )
}

export default Nav