"use client";

import Link from "next/link";

import styles from "../styles/layout.module.css";

export const Nav = () => {
	return (
		<nav className={styles.nav}>
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
		</nav>
	);
};
