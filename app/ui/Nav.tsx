"use client";

import Link from "next/link";

export const Nav = () => {
	return (
		<nav className="mt-6 bg-amber-300 rounded-3xl px-8 py-4 flex justify-between items-center">
			<Link href="/">
				<div className="text-3xl font-extrabold">Unlock with Nutrition</div>
			</Link>
			<div className="space-x-10">
				<Link href="/">
					Home
				</Link>
				<Link href="/about">
					About
				</Link>
				<Link href="/blog">
					Blog
				</Link>
				<Link href="/#contact">
					Contact
				</Link>
			</div>
		</nav>
	);
};
