// import type { Metadata } from "next";
import Hero from "./components/Hero";
import Header from "./components/Header";
import TextCard from "./components/TextCard";

export default function IndexPage() {
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
		</>
	);
}

// export const metadata: Metadata = {
//     title: "Redux Toolkit",
// };
