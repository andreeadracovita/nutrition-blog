import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import Avatar from "./Avatar";

export default function HighlightPost() {
	const data = {
		title: "Too many choices",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare quis augue quis porttitor. Cras dapibus sed est at aliquam. Pellentesque tempor in elit sed dictum. Nunc at sem ut eros tempor auctor id at augue. Pellentesque efficitur libero at nisi aliquet, et maximus mauris varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl mauris, tincidunt quis arcu eget, dignissim feugiat nulla. Cras et sapien non eros placerat pharetra sit amet vitae orci. Ut volutpat est id orci pulvinar, in fringilla libero dapibus. Vivamus elementum, nunc sit amet finibus faucibus, ipsum velit feugiat diam, eu bibendum elit magna vel nunc. Maecenas sit amet risus ac ex gravida facilisis ac sed magna. In id lorem nulla. Donec at consequat ex.",
		author: "Wolf Chan",
		date: new Date("01 Jan 2026")
	};

	const options = {
		day: "numeric",
		month: "short",
		year: "numeric"
	}
	
	return (
		<Link href={`/blog/${data.slug}`}>
			<div className="bg-[url('/grocery.jpg')] bg-cover bg-center w-full rounded-3xl overflow-hidden h-150 relative">
				<div className="absolute bg-stone-50/80 p-8 inset-x-0 bottom-0">
					<div className="relative">
						<MdArrowOutward className="absolute top-0 right-0" size="46" />
						<h4>{data.title}</h4>
					</div>
					<p className="truncate">{data.body}</p>
					<div className="flex items-center mt-6 space-x-6">
						<Avatar name={data.author} />
						<div className="flex items-center space-x-2">
							<div className="border-1 border-solid border-black w-8 h-8 rounded-full flex items-center justify-center">
								<FaRegCalendar />
							</div>
							<span className="label">{data.date.toLocaleString("en-GB", options)}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}