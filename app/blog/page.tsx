import BlogCard from "app/components/BlogCard";
import BlogNav from "app/components/BlogNav";
import Header from "app/components/Header";
import HighlightPost from "app/components/HighlightPost";
import Search from "app/ui/Search";
import { getArticles } from "@/lib/features/articles/data";

export default function BlogPage() {
	const category = ["All", "Power Tips", "Recipes", "Research"];
	const data = getArticles();

	return (
		<>
			<Header
				title="Power tips, recipes & more"
				subtitle="Our Blog"
			/>

			<HighlightPost />

			<div className="layout-spacing grid grid-cols-3 gap-4">
				<div className="col-span-2 flex items-end">
					<BlogNav categories={category} />
				</div>
				<Search />
			</div>

			<div className="layout-spacing grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:grid-cols-4">
			{
				data && data.map((entry: any) => <BlogCard key={entry.id} data={entry} />)
			}
			</div>
		</>
	);
}