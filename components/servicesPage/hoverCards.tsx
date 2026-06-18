import BottomDesc from "../layout/bottomDesc/bottomDesc";
import HoverExpand from "../layout/hoverCard/hoverCardDisplay";


export default function HoverCards() {
	return (
		<div className="min-h-screen w-full flex flex-col border-b border-zinc-100 dark:border-zinc-900">
			<div className="flex-1 w-full flex items-center justify-center py-10 lg:py-0">
				<HoverExpand />
			</div>

			<BottomDesc text1="© Featured Projects" text2="(CAD® — 04)" text3="Digital Showcase" className="text-black dark:text-zinc-400" />
		</div>
	)
}