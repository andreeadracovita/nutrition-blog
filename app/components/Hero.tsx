import Link from "next/link";

export default function Hero() {
	return (
		<>
			<div className="hero">
				<div className="bg-stone-50/80 m-8 p-8 grid content-between rounded-3xl min-w-120">
					<h1>Unlock Your Potential with Nutrition</h1>

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque malesuada neque, vel hendrerit ante semper sit amet. Duis et rutrum arcu, fermentum fermentum erat.</p>

					<Link href="/blog" className="btn">Our Blog</Link>
				</div>
			</div>
		</>
	);
}