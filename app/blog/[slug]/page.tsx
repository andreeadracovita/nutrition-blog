import parse from "html-react-parser";
import { FaRegEye, FaShare } from "react-icons/fa";
import { BsChatLeft } from "react-icons/bs";

import Avatar from "app/components/Avatar";
import { getArticleWithId } from "@/lib/features/articles/data";

export default function BlogPostPage() {
	const data = getArticleWithId(3);

	if (!data) {
		return (<></>);
	}

	const options = {
		year: "numeric" as const,
		month: "short" as const,
		day: "numeric" as const
	};

	return (
		<div className="component-container p-6 px-16">
			<div className="flex items-center space-x-2">
				{ data.author && <Avatar name={data.author} /> }
				<span>·</span>
				<span className="label">{ data.date.toLocaleString("en-GB", options) }</span>
				<span>·</span>
				<span className="label">{ data.readTime } min read</span>
			</div>

			<h2 className="my-4">{data.title}</h2>

			<div className="[&>img]:rounded-3xl [&>img]:my-4 [&>img]:max-w-full">
				{ data.body && parse(data.body) }
			</div>

			<hr className="my-6 h-px bg-neutral-300 border-0" />

			<div className="flex items-center justify-between">
				<div className="flex space-x-4">
					<div className="flex items-center space-x-2">
						<FaRegEye />
						<span className="label">{data.views}</span>
					</div>
					<div className="flex items-center space-x-2">
						<BsChatLeft />
						<span className="label">{data.comments}</span>
					</div>
				</div>
				<div className="flex items-center space-x-2">
					<FaShare />
					<span className="label">Share</span>
				</div>
			</div>
		</div>
	);
}