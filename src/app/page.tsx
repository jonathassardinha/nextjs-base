import Link from "next/link";

export default function Home() {
	return (
		<main className="flex grow items-center justify-center gap-4 p-24">
			<Link
				href="/new-route"
				className="text-blue-300 underline-offset-4 hover:text-blue-400 hover:underline"
			>
				New Route
			</Link>
		</main>
	);
}
