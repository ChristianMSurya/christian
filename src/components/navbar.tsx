'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const showFourthPage = pathname === "/thoughts" || pathname === "/christina";

  return (
    <div data-return-reveal className="number-navigation flex flex-row">
      <Link
        href="/"
        aria-current={pathname === "/" ? "page" : undefined}
        className={`cursor-pointer text-sm py-2 pr-2 site-link nav-link ${pathname === '/' ? 'site-link-active' : ''}`}
      >
        <p>1</p>
      </Link>
      <Link
        href="/work"
        aria-current={pathname === "/work" ? "page" : undefined}
        className={`cursor-pointer text-sm p-2 site-link nav-link ${pathname === '/work' ? 'site-link-active' : ''}`}
      >
        <p>2</p>
      </Link>
      <Link
        href="/thoughts"
        aria-current={pathname === "/thoughts" ? "page" : undefined}
        className={`cursor-pointer text-sm p-2 site-link nav-link ${pathname === '/thoughts' ? 'site-link-active' : ''}`}
      >
        <p>3</p>
      </Link>
      <Link
        href="/christina"
        aria-current={pathname === "/christina" ? "page" : undefined}
        aria-hidden={!showFourthPage}
        tabIndex={showFourthPage ? undefined : -1}
        className={`cursor-pointer text-sm p-2 site-link nav-link ${showFourthPage ? 'fourth-page-reveal' : 'invisible'} ${pathname === '/christina' ? 'site-link-active' : ''}`}
      >
        <p>4</p>
      </Link>
      <Link
        href="/"
        onClick={() => sessionStorage.setItem("home-return-intro", "true")}
        aria-hidden={pathname !== "/christina"}
        tabIndex={pathname === "/christina" ? undefined : -1}
        className={`cursor-pointer text-sm p-2 site-link nav-link ${pathname === '/christina' ? 'fourth-page-reveal' : 'invisible'}`}
      >
        <p>5</p>
      </Link>
    </div>
  );
}
