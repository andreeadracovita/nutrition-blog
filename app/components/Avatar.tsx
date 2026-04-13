interface Props {
	readonly name: string;
}

export default function Avatar({name}: Props) {
	
	return (
		<div className="flex items-center space-x-2">
			<div className="bg-black w-8 h-8 rounded-full"></div>
			<span className="label">{name}</span>
		</div>
	);
}