'use client'

import { navIcons } from "@/app/utils/constant";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />
          <p className="nav-logo">
            Price<span className="text-red-400">Wise</span>
          </p>
        </Link>
        <div className="flex gap-4 items-center">
          {navIcons.map((icon, i) => <Image
              className="object-contain"
              key={i}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
