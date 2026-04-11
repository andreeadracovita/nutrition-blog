import { FaRegEye } from "react-icons/fa";
import { BsChatLeft } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

export default function BlogCard() {
	const data = {
		author: "Wolf Chan",
		readTime: 2,
		title: "Fear of Fats - the modern conditioning",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare quis augue quis porttitor. Cras dapibus sed est at aliquam. Pellentesque tempor in elit sed dictum. Nunc at sem ut eros tempor auctor id at augue. Pellentesque efficitur libero at nisi aliquet, et maximus mauris varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl mauris, tincidunt quis arcu eget, dignissim feugiat nulla. Cras et sapien non eros placerat pharetra sit amet vitae orci. Ut volutpat est id orci pulvinar, in fringilla libero dapibus. Vivamus elementum, nunc sit amet finibus faucibus, ipsum velit feugiat diam, eu bibendum elit magna vel nunc. Maecenas sit amet risus ac ex gravida facilisis ac sed magna. In id lorem nulla. Donec at consequat ex.",
		views: 40,
		comments: 10
	};

	return (
		<div className="border-1 border-solid rounded-3xl border-neutral-200 overflow-hidden">
			<img src="butter.jpg" />
			<div className="p-8">
				<p>{data.author}</p>
				<p>{data.readTime} min read</p>
				<h4>{data.title}</h4>
				<p className="line-clamp-3 mb-4">{data.body}</p>
				<hr className="h-px bg-neutral-300 border-0" />
				<div className="mt-4 flex justify-between items-center">
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
					<div>
						<FaRegHeart color="#ef4444" />
					</div>
				</div>
			</div>
		</div>
	);
}