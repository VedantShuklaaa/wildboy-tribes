"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";


export default function Works() {
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		cardsRef.current.forEach((card) => {
			if (!card) return;

			gsap.fromTo(card, {
				opacity: 0,
				scale: 0.9,
				y: 50,
			}, {
				opacity: 1,
				scale: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			}
			);
		});
	}, { scope: containerRef, dependencies: [] });
	return (
		<div className="w-full flex flex-col p-4 font-twid gap-8" ref={containerRef}>
			{projects.map((items, idx) => (
				<Link
					key={idx}
					href={`/work/${items.slug}`}
				>
					<div
						className=" flex flex-col lg:flex-row w-full border overflow-hidden min-h-[300px] lg:h-[500px] xl:h-[500px]"
						ref={(el) => {
							cardsRef.current[idx] = el;
						}}
					>
						{/* Image Section */}
						<div className="w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto bg-black" />

						{/* Content Section */}
						<div className="flex flex-col justify-between w-full lg:w-1/2 p-6 md:p-8 lg:p-10 gap-6">
							<div className=" flex-1 flex items-center">
								<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none break-words">
									{items.title}
								</h2>
							</div>

							<div className="flex flex-col gap-1">
								<span className=" text-base sm:text-lg md:text-xl">
									{items.description}
								</span>

								<span className=" text-sm md:text-base text-black dark:text-zinc-400" >
									Bengaluru, India
								</span>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

const projects = [
	{
		title: "Groww",
		description: "Launch Video Campaign",
		slug: "Groww",
	},
	{
		title: "Cult",
		description: "Smartwatch Launch Video",
		slug: "Cult",
	},
	{
		title: "Arovalis",
		description: "Brand Identity Design",
		slug: "Arovalis",
	},
	{
		title: "Pure Project",
		description: "Brand Identity & Packaging Design",
		slug: "Pur Project",
	},
	{
		title: "Slice",
		description: "Feature Launch Commercial",
		slug: "Slice",
	},
	{
		title: "MadDrop",
		description: "Website Design & Development",
		slug: "MadDrop",
	},
];