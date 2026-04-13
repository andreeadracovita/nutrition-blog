interface Props {
	readonly categories: string[];
}

export default function BlogNav({categories}: Props) {
	
	return (
		<div className="w-full">
			<div className="flex space-x-10 pb-2">
			{
				categories.map(category => <span key={category}>{category}</span>)
			}
			</div>
			<hr className="h-px bg-neutral-300 border-0" />
		</div>
	)
}