"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CrossIcon from "../../../public/assets/images/cross-icon.svg";
import HamburgerIcon from "../../../public/assets/images/hamburger-icon.svg";
import Logo from "../../../public/assets/images/logo.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative">
            <div className="flex justify-between items-center px-0 sm:px-6 md:px-8 lg:px-211 mt-35 relative z-30">
                {/* Placeholder div for layout balance */}
                <div className="w-6 h-6 lg:hidden"></div>

                {/* Centered Logo */}
                <Link
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
                >
                    <Image
                        src={Logo}
                        width={173.12}
                        height={74}
                        alt="logo"
                        className="w-32 md:w-auto"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-10 font-figtree text-lg leading-none font-semibold text-gray">
                    <li className="cursor-pointer hover:text-gray-500 transition-colors duration-200">
                        About us
                    </li>
                    <li className="cursor-pointer hover:text-gray-500 transition-colors duration-200">
                        Contact
                    </li>
                </ul>

                {/* Hamburger Menu Button */}
                <button
                    className="lg:hidden relative w-6 h-6 mr-29"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="relative w-6 h-6 transition-opacity duration-300">
                        <Image
                            src={HamburgerIcon}
                            width={24}
                            height={24}
                            alt="menu"
                            className={`absolute top-0 left-0 transition-all duration-300 ${
                                isMenuOpen
                                    ? "opacity-0 rotate-90"
                                    : "opacity-100 rotate-0"
                            }`}
                        />
                        <Image
                            src={CrossIcon}
                            width={24}
                            height={24}
                            alt="close"
                            className={`absolute top-0 left-0 transition-all duration-300 ${
                                isMenuOpen
                                    ? "opacity-100 rotate-0"
                                    : "opacity-0 -rotate-90"
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-50 mt-5 ${
                    isMenuOpen
                        ? "max-h-[200px] opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-4 font-figtree text-lg font-semibold text-gray p-4 items-center">
                    <li className="cursor-pointer hover:underline transition-colors duration-200 transform">
                        About us
                    </li>
                    <li className="cursor-pointer hover:underline transition-colors duration-200 transform">
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
