import Link from "next/link";

function Nav() {
  return (
    <div className="mt-3 font-serif text-xl md:text-center">
      <ul className="flex flex-wrap md:flex-no-wrap">
        <li className="pl-4 mr-auto text-2xl font-semibold md:pl-10">
          <Link href="/">Ema Zivkovic</Link>
        </li>
        <div className="flex flex-col md:flex-row md:justify-between md:flex-auto">
          <li className="mt-2 md:mt-0">
            <Link href="/resume">Resume</Link>
          </li>
          <li className="mt-2 md:mt-0 md:ml-4">
            <Link href="/choreography">Choreography</Link>
          </li>
          <li className="mt-2 md:mt-0 md:ml-4">
            <Link href="/media">Media</Link>
          </li>
          <li className="mt-2 md:mt-0 md:ml-4">
            <Link href="/contact">Contact</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Nav;
