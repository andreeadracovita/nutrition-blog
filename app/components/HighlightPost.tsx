import parse from "html-react-parser";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import Avatar from "./Avatar";
import { getArticleWithId } from "@/lib/features/articles/data";

export default function HighlightPost() {
	const data = getArticleWithId(3);

	if (!data) {
		return (<></>);
	}

	const imgUrl = "/" + data.cover;
	const options = {
		year: "numeric" as const,
		month: "short" as const,
		day: "numeric" as const
	};
	
	return (
		<Link href={`/blog/${data.id}`}>
			<div className="bg-cover bg-center w-full rounded-3xl overflow-hidden h-150 relative layout-spacing" style={{ backgroundImage: `url(${imgUrl})`}}>
				<div className="absolute bg-stone-50/80 p-8 inset-x-0 bottom-0">
					<div className="relative">
						<MdArrowOutward className="absolute top-0 right-0" size="46" />
						<h4>{data.title}</h4>
					</div>
					<span className="[&>p]:truncate [&>p]:hidden [&>p:first-child]:block [&>img]:hidden">{parse(data.body)}</span>
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