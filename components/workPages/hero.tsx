import TiltCard from "../layout/tiltCard/tiltCard";


export default function Hero() {
	return (
		<div className="h-screen w-full flex items-center justify-center relative bg-[#ff2d55] leading-none">
			<span className="absolute text-[250px] font-onest top-30 left-10 flex gap-100 leading-none font-[500]">
				<p className="text-black z-30">EXPE-</p>
				<p className="text-black z-10">RTISE</p>
			</span>


			<div className="relative h-[700px] w-[900px] mx-auto">
				<div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<TiltCard tilt="-2" className="h-[800px] w-[700px]" />
				</div>

				<div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<TiltCard tilt="2" className="h-[800px] w-[700px]" />
				</div>
			</div>

			<div className="absolute text-black left-20 bottom-10 w-105 font-twid text-2xl">
				<p>We don't just build for launch day. We build for everything that came before it, and it <span className="italic font-[600]">growth</span> that comes after it.</p>
			</div>
		</div>
	)
}