import Marquee from "@/components/marquee/marquee1";
import Reveal from "@/components/marquee/reveal";
import FloatCard from "@/components/aboutUsPage/floatCard";
import ContactUs from "@/components/contactUsCard/contactUs";
import BottomDesc from "@/components/layout/bottomDesc/bottomDesc";



export default function Page() {
	return (
		<div className="w-full bg-[background]">
			<div className="w-full flex flex-col items-center gap-10 justify-between bg-[#938ACF]">
				<div className="w-full max-w-6xl flex flex-col gap-2 justify-center p-4 mt-10 leading-none">
					<span className="text-display-md font-onest leading-none text-center font-bold text-black">THIS PAGE ISN'T ABOUT US, IT'S ABOUT YOU.</span>

					<span className="max-w-8xl text-center">
						<p className="text-body-lg font-onest leading-tight text-black">
							We are <span className="italic">not</span> vendors. We're an extension
							of your team across brand and web.
						</p>
					</span>
				</div>


				<div className="h-60 xl:h-110 w-60 xl:w-110 rounded-full border">

				</div>

				<BottomDesc text1="© About Apes" text2="(CAD® — 02)" text3="Behind Us" />
			</div>

			<Reveal>
				<Marquee text="about apes©" />
			</Reveal>
			<FloatCard />

			<div className="h-screen w-full flex flex-col border-b border-black dark:border-zinc-600">
				<div className="flex flex-col p-4">
					<span className="text-display-lg leading-none font-twid">MEET THE TEAM</span>
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
