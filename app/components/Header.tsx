interface Props {
	readonly title: string;
	readonly subtitle: string;
}

export default function Header ({title, subtitle}: Props) {
	return (
		<div className="layout-spacing bg-amber-300 rounded-3xl px-8 py-10">
			<h3>{subtitle}</h3>
			<h2>{title}</h2>
		</div>
	);
}