import BlogPost from "./[slug]/page"

export default function BlogPage() {
	return (
		<>
			<h1>Blog</h1>
			<p>Search</p>

			<h2>All posts</h2>
			<div className="columns-3">
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</div>
		</>
	);
}