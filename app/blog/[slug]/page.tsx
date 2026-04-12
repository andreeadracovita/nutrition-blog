import parse from "html-react-parser";

import Avatar from "app/components/Avatar";

export default function BlogPostPage() {
	const data = {
		author: "Wolf Chan",
		readTime: 2,
		title: "Fear of Fats - the modern conditioning",
		body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare quis augue quis porttitor. Cras dapibus sed est at aliquam. Pellentesque tempor in elit sed dictum. Nunc at sem ut eros tempor auctor id at augue. Pellentesque efficitur libero at nisi aliquet, et maximus mauris varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><img src='/butter.jpg' /><p>Donec nisl mauris, tincidunt quis arcu eget, dignissim feugiat nulla. Cras et sapien non eros placerat pharetra sit amet vitae orci. Ut volutpat est id orci pulvinar, in fringilla libero dapibus. Vivamus elementum, nunc sit amet finibus faucibus, ipsum velit feugiat diam, eu bibendum elit magna vel nunc. Maecenas sit amet risus ac ex gravida facilisis ac sed magna. In id lorem nulla. Donec at consequat ex.</p>",
		views: 40,
		comments: 10,
		category: "tips"
	};

	return (
		<div className="component-container p-6">
			<div className="flex items-center space-x-2">
				<Avatar name={data.author} />
				<span>·</span>

			</div>
			<h2 className="my-4">{data.title}</h2>
			<div className="[&>img]:rounded-3xl">
				{parse(data.body)}
			</div>
		</div>
	);
}