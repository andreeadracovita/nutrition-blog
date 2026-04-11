import BlogCard from "../components/BlogCard";
import BlogNav from "../components/BlogNav";
import Header from "../components/Header";
import HighlightPost from "../components/HighlightPost";
import Search from "../ui/Search";

export default function BlogPage() {
	const category = ["All", "Power Tips", "Recipes", "Research"];

	return (
		<>
			<Header
				title="Power tips, recipes & more"
				subtitle="Our Blog"
			/>

			<HighlightPost />

			<div className="my-4 grid grid-cols-3 gap-4">
				<div className="col-span-2 flex items-end">
					<BlogNav categories={category} />
				</div>
				<Search />
			</div>

			<div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</>
	);
}