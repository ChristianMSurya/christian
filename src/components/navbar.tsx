'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-10">
      <Link 
        href="/" 
        className={`cursor-pointer text-sm py-2 pr-2 ${pathname === '/' ? '' : 'opacity-40 hover:opacity-100 transition-opacity duration-300'}`}
      >
        <p>1</p>
      </Link>
      <Link 
        href="/work" 
        className={`cursor-pointer text-sm p-2 ${pathname === '/work' ? '' : 'opacity-40 hover:opacity-100 transition-opacity duration-300'}`}
      >
        <p>2</p>
      </Link>
      <Link 
        href="/writing" 
        className={`cursor-pointer text-sm p-2 ${pathname === '/writing' ? '' : 'opacity-40 hover:opacity-100 transition-opacity duration-300'}`}
      >
        <p>3</p>
      </Link>
    </div>
  );
}