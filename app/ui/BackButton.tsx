"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
	const router = useRouter();
	return (
		<div className="flex items-center hover:cursor-pointer hover:font-bold" onClick={() => router.back()}>
			<IoIosArrowBack />
			<span>Back</span>
		</div>
	);
}