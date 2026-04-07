interface Props {
	readonly title: string;
	readonly body: string;
}

export default function TextCard({title, body}: Props) {
	return (
		<div className="bg-amber-100 rounded-3xl p-8">
			<h4>{title}</h4>
			<p>{body}</p>
		</div>
	);
}