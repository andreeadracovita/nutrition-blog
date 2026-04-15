import Link from "next/link";
import { heroImgUrl } from "app/constants";

export default function Hero() {
	const url = "/" + heroImgUrl;

	return (
		<div className="layout-spacing bg-cover bg-center bg-no-repeat grid grid-cols-2 rounded-3xl h-220" style={{ backgroundImage: `url(${url})`}}>
			<div className="bg-stone-50/80 m-8 p-8 grid content-between rounded-3xl min-w-120 pb-18">
				<div>
					<p className="text-[clamp(4.5rem,6vw,7rem)] font-extrabold">Unlock Your</p>
					<p className="text-[clamp(4rem,5vw,6rem)] font-extrabold">Potential with</p>
					<div className="bg-[url('/highlight.png')] bg-center bg-contain bg-no-repeat -m-10 mt-0 inline-block">
						<p className="text-[clamp(4.5rem,6vw,6rem)] font-extrabold m-10 inline">Nutrition</p>
					</div>
				</div>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque malesuada neque, vel hendrerit ante semper sit amet. Duis et rutrum arcu, fermentum fermentum erat.</p>

				<div>
					<Link href="/blog" className="btn">Our Blog</Link>
				</div>
			</div>
		</div>
	);
}