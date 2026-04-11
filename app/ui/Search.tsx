import { IoSearch } from "react-icons/io5";

export default function Search() {
	
	return (
		<div className="rounded-3xl px-4 py-2 border-1 border-solid border-neutral-300 flex justify-between items-center">
			<span>Search blog...</span>
			<IoSearch size="24" />
		</div>
	);
}