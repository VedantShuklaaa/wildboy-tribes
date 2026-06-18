import { Skiper49 } from "../layout/skipper/skipper2";



export default function Hero() {
	return (
		<div className="py-10 w-full flex flex-col items-center gap-10 pt-10 font-twid bg-purple-300 text-black">
			<div className="flex flex-col items-center leading-none">
				<span className="text-display-2xl tracking-tight font-dage">BLOGS</span>
				<span className="text-xl text-zinc-600 text-center">Expert perspectives, industry trends, and practical wisdom.</span>
			</div>

			<Skiper49 />
		</div>
	)
}