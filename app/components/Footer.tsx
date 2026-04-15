export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="layout-spacing bg-amber-300 p-8 rounded-3xl h-100 grid grid-cols-2 rounded-3xl">
			<div className="grid content-between">
				<h2>Unlock with Nutrition</h2>

				<div>
					<p>123-456-7890</p>
					<p>info@mysite.com</p>
					<p>Sundlaugavegur 105,</p>
					<p>105 Reykjavík, Iceland</p>
				</div>
			</div>
			<div className="grid content-end">
				<p className="text-end label">© {currentYear} by Unlock With Nutrition</p>
			</div>
		</footer>
	);
}