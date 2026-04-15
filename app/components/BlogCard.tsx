import parse from "html-react-parser";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { BsChatLeft } from "react-icons/bs";

interface Props {
	readonly data: any;
}

export default function BlogCard({data}: Props) {

	if (!data) {
		return (<></>);
	}

	const imgUrl = "/" + data.cover;

	return (
		<Link href={`/blog/${data.id}`}>
			<div className="component-container overflow-hidden">
				<div className="bg-cover bg-center h-70" style={{ backgroundImage: `url(${imgUrl})`}}></div>
				<div className="p-6">
					<p className="label">{data.author}</p>
					<p className="label">{data.readTime} min read</p>
					<h4 className="my-2">{data.title}</h4>
					{data.body && <span className="line-clamp-3 mb-4">{parse(data.body)}</span>}
					<hr className="h-px bg-neutral-300 border-0" />
					<div className="mt-4 flex items-center">
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
					</div>
				</div>
			</div>
		</Link>
	);
}