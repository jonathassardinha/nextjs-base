import Link from "next/link";

export default function NewRoute() {
	return (
		<main className="flex grow items-center justify-center">
			<Link
				href="/"
				className="text-blue-300 underline-offset-4 hover:text-blue-400 hover:underline"
			>
				Back to root
			</Link>
		</main>
	);
}
