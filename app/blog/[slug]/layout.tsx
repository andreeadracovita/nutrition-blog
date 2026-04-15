import type { ReactNode } from "react";
import Link from "next/link";

import RecentPosts from "app/components/RecentPosts";
import BackButton from "app/ui/BackButton";
import Search from "app/ui/Search";

interface Props {
	readonly children: ReactNode;
}

export default function BlogPostLayout({ children }: Props) {
	return (
		<div className="mx-46">
			<div className="flex justify-between my-4">
				<BackButton />
				<Search />
			</div>

			{children}

			<div className="layout-spacing flex justify-between">
				<p>Recent Posts</p>
				<Link href="/blog"><p>See All</p></Link>
			</div>
			<RecentPosts />
		</div>
	);
}