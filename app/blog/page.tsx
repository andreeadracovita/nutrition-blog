import BlogCard from "../components/BlogCard";
import BlogNav from "../components/BlogNav";
import Header from "../components/Header";
import HighlightPost from "../components/HighlightPost";
import Search from "../ui/Search";

export default function BlogPage() {
	const category = ["All", "Power Tips", "Recipes", "Research"];
	const data = {
		author: "Wolf Chan",
		readTime: 2,
		title: "Fear of Fats - the modern conditioning",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare quis augue quis porttitor. Cras dapibus sed est at aliquam. Pellentesque tempor in elit sed dictum. Nunc at sem ut eros tempor auctor id at augue. Pellentesque efficitur libero at nisi aliquet, et maximus mauris varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl mauris, tincidunt quis arcu eget, dignissim feugiat nulla. Cras et sapien non eros placerat pharetra sit amet vitae orci. Ut volutpat est id orci pulvinar, in fringilla libero dapibus. Vivamus elementum, nunc sit amet finibus faucibus, ipsum velit feugiat diam, eu bibendum elit magna vel nunc. Maecenas sit amet risus ac ex gravida facilisis ac sed magna. In id lorem nulla. Donec at consequat ex.",
		views: 40,
		comments: 10,
		category: "tips"
	};

	return (
		<>
			<Header
				title="Power tips, recipes & more"
				subtitle="Our Blog"
			/>

			<HighlightPost />

			<div className="my-6 grid grid-cols-3 gap-4">
				<div className="col-span-2 flex items-end">
					<BlogNav categories={category} />
				</div>
				<Search />
			</div>

			<div className="my-4 grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:grid-cols-4">
				<BlogCard data={data} />
				<BlogCard data={data} />
				<BlogCard data={data} />
				<BlogCard data={data} />
				<BlogCard data={data} />
				<BlogCard data={data} />
			</div>
		</>
	);
}