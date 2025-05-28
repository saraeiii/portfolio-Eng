'use client';
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice.js";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl">My Portfolio</h1>
      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </header>
  );
}