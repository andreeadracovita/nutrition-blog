import BlogCard from "app/components/BlogCard";
import { getArticles } from "@/lib/features/articles/data";

export default function RecentPosts() {
	const data = getArticles();
	
	return (
		<div className="layout-spacing grid grid-cols-1 gap-6 xl:grid-cols-3">
		{
			data && data.map((entry: any) => <BlogCard key={entry.id} data={entry} />)
		}
		</div>
	);
}