import Marquee from "@/components/marquee/marquee1";
import Reveal from "@/components/marquee/reveal";


export default function Page() {
	return (
		<div className="bg-[background] w-full">
			<div className="h-[80vh] w-full flex flex-col items-center justify-center bg-pink-200 gap-20">
				<span className="leading-none w-[80%]">
					<h1 className="text-[170px] tracking-tighter text-black text-center font-bold font-druk">IT STARTS WITH A CONVERSATION</h1>
				</span>

				<span className="w-[35vw]">
					<p className="text-black text-2xl text-center font-twid">If you're considering working together, this is the right place to start. Every message is read by a partner.</p>
				</span>
			</div>

			<Reveal>
				<Marquee text="contact us©" />
			</Reveal>
			<UnderlineHover>
				<span className="text-2xl font-onest">
					View Project
				</span>
			</UnderlineHover>
		</div>
	)
}

interface UnderlineHoverProps {
	children: React.ReactNode;
}

export function UnderlineHover({
	children,
}: UnderlineHoverProps) {
	return (
		<div className="group relative w-full pb-2 cursor-pointer">
			{children}

			<div className="absolute bottom-0 left-0 h-px w-full bg-zinc-500" />

			<div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
		</div>
	);
}