"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function featuredProjects() {
	return (
		<div>
			<div className="h-[80vh] w-full bg-black flex flex-col">
				<div className="h-[10vh] flex items-center justify-between p-4">
					<span className="text-4xl font-twid font-[800]">SELECTED CLIENT PROJECTS</span>
					<span className="h-10 px-4 border-2 border-black dark:border-white flex items-center justify-center font-[500] cursor-pointer italic">
						<Link href="/projects" className="flex gap-1">VIEW ALL PROJECTS <ArrowRight /></Link>
					</span>
				</div>

				<div className="h-[70vh] w-full flex items-start justify-center p-4 gap-2">
					<div className="h-[50vh] w-[15vw] border"></div>
					<div className="h-[50vh] w-[15vw] border"></div>
					<div className="h-[50vh] w-[15vw] border"></div>
					<div className="h-[50vh] w-[15vw] border"></div>
				</div>
			</div>

			<div className="h-[20vh] w-full flex items-end justify-between border-b border-black dark:border-zinc-600 text-xl font-twid text-black dark:text-zinc-400 p-4">
				<span>© AI Labs</span>
				<span>(CAD® — 05)</span>
				<span>Modern Intelligence</span>
			</div>
		</div>
	)
}