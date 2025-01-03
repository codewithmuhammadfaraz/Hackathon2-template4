"use client"; // Mark this component as a Client Component

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setIsPagesDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Main Header */}
      <div className="w-full h-[80px] flex justify-center items-center border-b-2">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-10">
          {/* Left Section: Logo and Search Bar */}
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-bold">Hekto</h1>
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="hidden sm:flex items-center gap-x-8">
            <ul className="flex gap-x-8 items-center">
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li className="relative" ref={dropdownRef}>
                <button
                  className="hover:text-[#FB2E86] transition-colors"
                  onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                >
                  Pages
                </button>
                {isPagesDropdownOpen && (
                  <ul className="absolute top-full mt-2 bg-white shadow-md rounded-md text-black text-sm">
                    {[
                      { href: "/cart", label: "Cart" },
                      { href: "/checkout", label: "Billing Details" },
                      { href: "/ordercompleted", label: "Order Completed" },
                      { href: "/about", label: "About Us" },
                      { href: "/contact-us", label: "Contact Us" },
                      { href: "/account", label: "My Account" },
                      { href: "/creatorpage", label: "About Creator" },
                      { href: "/faq", label: "FAQ" },
                    ].map((item, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100">
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/shoplist">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Icons */}
          <div className="hidden sm:flex items-center gap-x-6">
            <Link
              href="/cart"
              className="hover:text-[#FB2E86] transition-colors flex items-center gap-1"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link
              href="/wishlist"
              className="hover:text-[#FB2E86] transition-colors flex items-center gap-1"
            >
              <HeartIcon className="w-5 h-5" />
              <span>Wishlist</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-black" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-center px-4 py-2 border-t">
          <ul className="w-full text-center">
            {[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Blog" },
              { href: "/shoplist", label: "Shop" },
              { href: "/account", label: "My Account" },
            ].map((item, index) => (
              <li key={index}>
                <Link className="block py-2 hover:text-[#FB2E86]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center border rounded-md overflow-hidden bg-gray-100 px-4 py-2 mx-4 mt-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 text-sm outline-none bg-transparent"
            />
            <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar; // Adjusted to match the new name