import parse from "html-react-parser";

import Avatar from "app/components/Avatar";
import { getArticleWithId } from "@/lib/features/articles/data";

export default function BlogPostPage() {
	const data = getArticleWithId(3);

	if (!data) {
		return (<></>);
	}

	return (
		<div className="component-container p-6">
			<div className="flex items-center space-x-2">
				{ data.author && <Avatar name={data.author} /> }
				<span>·</span>

			</div>
			<h2 className="my-4">{data.title}</h2>
			<div className="[&>img]:rounded-3xl">
				{ data.body && parse(data.body) }
			</div>
		</div>
	);
}