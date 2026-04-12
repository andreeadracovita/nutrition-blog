import type { ReactNode } from "react";

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

			<div className="my-6 flex justify-between">
				<p>Recent Posts</p>
				<p>See All</p>
			</div>
		</div>
	);
}