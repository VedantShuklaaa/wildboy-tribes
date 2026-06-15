import Marquee from "@/components/marquee/marquee1";
import Reveal from "@/components/marquee/reveal";
import FloadCard from "@/components/aboutUsPage/floatCard";
import ContactUs from "@/components/contactUsCard/contactUs";



export default function Page() {
	return (
		<div className="w-full bg-[background]">
			<div className="h-[150vh] w-full flex flex-col justify-between items-center bg-[#938ACF]">
				<div className="w-full flex p-4 mt-10">
					<span className="text-[140px] font-onest leading-none text-center font-bold text-black">THIS PAGE ISN'T ABOUT US, IT'S ABOUT YOU.</span>
				</div>

				<div className="max-w-xl text-center">
					<p className="text-3xl font-onest leading-tight text-black">
						We are <span className="italic">not</span> vendors. We're an extension
						of your team across brand and web.
					</p>
				</div>

				<div className="h-140 w-140 rounded-full border">

				</div>

				<div className="p-4 w-full font-twid flex item-center justify-between border-b border-black dark:border-zinc-600">
					<span>© About Apes</span>
					<span>(CAD® — 02)</span>
					<span>Behind Us</span>
				</div>
			</div>

			<Reveal>
				<Marquee text="about apes©" />
			</Reveal>
			<FloadCard />

			<div className="h-screen w-full flex flex-col border-b border-black dark:border-zinc-600">
				<div className="flex flex-col p-4">
					<span className="text-[160px] leading-none font-twid">MEET THE TEAM</span>
					<span></span>
				</div>
				<div>

				</div>
			</div>

			<Reveal>
				<Marquee text="contact©" />
			</Reveal>
			<ContactUs />
		</div>
	)
}
