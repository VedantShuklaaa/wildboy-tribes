


export default function Feature() {
	return (
		<div className="h-[90vh] w-full flex flex-col justify-between border-b border-black dark:border-zinc-600">
			<div className="flex flex-col">
				<div className="grid grid-cols-[2fr_2fr_1fr] h-[70vh] w-full font-onest border-b border-black dark:border-zinc-600">
					<div className="border-r border-black dark:border-zinc-600">
						<div className="h-[25%] w-full flex flex-col justify-center gap-2 px-10">
							<span className="text-5xl">Bloc</span>
							<span className="text-xl">Brand Identity, Product Design</span>
						</div>

						<div className="h-[75%] w-full flex items-center justify-center py-4 px-6">
							<div className="project-card h-full w-full bg-black dark:bg-white rounded-xl" />
						</div>
					</div>

					<div className="border-r border-black dark:border-zinc-600">
						<div className="h-[25%] w-full flex flex-col justify-center gap-2 px-10">
							<span className="text-5xl">Redmi 11S</span>
							<span className="text-xl">Product Launch Video</span>
						</div>

						<div className="h-[75%] w-full flex items-center justify-center py-4 px-6">
							<div className="project-card h-full w-full bg-black dark:bg-white rounded-xl" />
						</div>
					</div>

					<div className="p-4 group overflow-hidden">
						<div className=" h-full w-full bg-[#ff2d55] rounded-xl transition-all cursor-pointer duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-[1.1] group-hover:rounded-none flex items-center justify-center">
							<span className="text-black text-3xl">View All Projects</span>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full h-[5%] flex items-center justify-between px-4 text-black dark:text-zinc-400 text-xl">
				<span>© Process</span>
				<span>(CAD® — 04)</span>
				<span>Design Method
				</span>
			</div>
		</div>
	)
}