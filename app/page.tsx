// import type { Metadata } from "next";
import BlogCard from "./components/BlogCard";
import Hero from "./components/Hero";
import Header from "./components/Header";
import TextCard from "./components/TextCard";

export default function IndexPage() {
	const data = {
		author: "Wolf Chan",
		readTime: 2,
		title: "Fear of Fats - the modern conditioning",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare quis augue quis porttitor. Cras dapibus sed est at aliquam. Pellentesque tempor in elit sed dictum. Nunc at sem ut eros tempor auctor id at augue. Pellentesque efficitur libero at nisi aliquet, et maximus mauris varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl mauris, tincidunt quis arcu eget, dignissim feugiat nulla. Cras et sapien non eros placerat pharetra sit amet vitae orci. Ut volutpat est id orci pulvinar, in fringilla libero dapibus. Vivamus elementum, nunc sit amet finibus faucibus, ipsum velit feugiat diam, eu bibendum elit magna vel nunc. Maecenas sit amet risus ac ex gravida facilisis ac sed magna. In id lorem nulla. Donec at consequat ex.",
		views: 40,
		comments: 10
	};

	return (
		<>
			<Hero />
			<Header
				title={"Our Story"}
				subtitle={"About Us"}
			/>
			<div className="grid grid-cols-2 gap-8">
				<div className="grid grid-rows-2 gap-8">
					<TextCard
						title="Mission"
						body="We believe that the human body knows best what it needs and has clear signs to show it. We explored the body’s needs and designed the optimal recipe to unlock our full potential."
					/>
					<TextCard
						title="Values"
						body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque malesuada neque, vel hendrerit ante semper sit amet. Duis et rutrum arcu, fermentum fermentum erat."
					/>
				</div>
				<img src="cooking.avif" className="rounded-3xl" />
			</div>

			<Header
				title="Power tips, recipes & more"
				subtitle="Our Blog"
			/>
			<div className="my-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
				<BlogCard data={data} />
				<BlogCard data={data} />
				<BlogCard data={data} />
			</div>
		</>
	);
}

// export const metadata: Metadata = {
//     title: "Redux Toolkit",
// };
