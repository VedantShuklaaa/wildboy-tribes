import ProcessCardLeft, { ProcessCardRight } from "../layout/verticalCarousel/verticalCarousel";

export default function AboutUs() {
	return (
		<div className="w-full flex flex-col justify-between border-b border-black dark:border-zinc-600">
			<section className="relative w-full">
				<div className="flex justify-between px-6 py-24">

					<div className="w-[30vw] sticky top-24 h-fit">
						<ProcessCardLeft />
					</div>

					<div className="w-[50vw]">
						<ProcessCardRight />
					</div>

				</div>
			</section>

			<div className="w-full h-[5vh] flex items-center justify-between px-4 text-black dark:text-zinc-400 text-xl">
				<span>© Everything You Want to Know</span>
				<span>(CAD® — 08)</span>
				<span>Clarifications</span>
			</div>
		</div>
	)
}