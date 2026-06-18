import BottomDesc from "../layout/bottomDesc/bottomDesc";



export default function Details() {
	return (
		<div className="w-full flex flex-col items-end border-b border-zinc-100 dark:border-zinc-900">
			<div className="py-40 md:w-[50%] flex items-center justify-center p-4">
				<span className="text-heading-xl font-twid leading-none">
					<p>Our work blends minimal design with distinct ideas to create visual and digital experiences that feel timeless and effective. Each project aims to bring clarity, intention, and a sense of purpose to the brands we collaborate with.</p>
				</span>
			</div>

			<BottomDesc text1="© Featured Projects" text2="(CAD® — 02)" text3="Digital Showcase" className="text-black dark:text-zinc-400"/>
		</div>
	)
}