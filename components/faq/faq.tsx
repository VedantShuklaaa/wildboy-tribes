import { ReactNode } from "react"
import FAQAccordion from "../layout/FAQAccordian/FAQAccordian"
import { LayersIcon, Link2Icon } from "lucide-react"
import { Component1Icon, DashboardIcon, Share1Icon, SketchLogoIcon } from "@radix-ui/react-icons"


export default function FAQ() {
	return (
		<div className="h-screen w-full flex flex-col font-twid border-b border-black dark:border-zinc-600">
			<div className="h-[95%] flex items-center justify-center">
				<div className="h-full w-full flex items-center  p-4 text-9xl" >
					FAQ
				</div>

				<div className="h-full w-full relative z-50 px-4 flex items-center justify-center">
					<FAQAccordion />
				</div>
			</div>

			<div className="h-[5%] w-full h-[5vh] flex items-center justify-between px-4 text-black dark:text-zinc-400 text-xl">
				<span>© Get in Touch</span>
				<span>(CAD® — 09)</span>
				<span>Studio Wrap</span>
			</div>
		</div>
	)
}

