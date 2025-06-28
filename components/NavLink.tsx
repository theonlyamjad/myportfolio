"use client";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="w-full border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-all duration-200 hover:bg-zinc-800/40 rounded-lg"
  >
    <span>{label}</span>
    <BiChevronRight className="text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200" />
  </Link>
);