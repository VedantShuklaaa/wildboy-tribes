import HoverExpand from "../layout/hoverCard/hoverCardDisplay";


export default function HoverCards() {
	return (
		<div className="h-screen w-full flex flex-col items-center justify-center border-b border-black dark:border-zinc-600">
			<div className="h-[95%] w-full flex items-center justify-center">
				<HoverExpand />
			</div>

			<div className="h-[5%] w-full px-4 flex items-center justify-between text-xl text-black dark:text-zinc-400">
				<span>© Featured Projects</span>
				<span>(CAD® — 04)</span>
				<span>Digital Showcase</span>
			</div>
		</div>
	)
}