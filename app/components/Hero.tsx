import Link from "next/link";

export default function Hero() {
	return (
		<>
			<h1>Unlock Your Full Potential with Nutrition</h1>

			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque malesuada neque, vel hendrerit ante semper sit amet. Duis et rutrum arcu, fermentum fermentum erat.</p>

			<Link href="/blog" className="btn">Our Blog</Link>
		</>
	);
}