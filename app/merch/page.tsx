export default function Page() {
	return (
		<section className="flex min-h-[80vh] items-center justify-center bg-black px-6 text-white">
			<div className="mx-auto flex max-w-4xl flex-col items-center text-center">
				<p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
					Wildboy Tribe
				</p>

				<h1 className="text-5xl font-bold uppercase tracking-tight md:text-7xl">
					Merch is coming soon
				</h1>

				<p className="mt-6 max-w-4xl text-base leading-7 text-zinc-400 md:text-lg">
					We’re working on a limited collection built around the tribe. Drops,
					details, and early access will land here soon.
				</p>

				<button className="mt-8 rounded-full border border-white px-6 py-3 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black">
					Notify me
				</button>
			</div>
		</section>
	);
}