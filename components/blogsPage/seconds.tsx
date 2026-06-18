"use client";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Second() {
	return (
		<div className="w-full flex flex-col p-4 gap-2 font-twid border-b border-zinc-100 dark:border-zinc-900">
			{blogs.map((items, idx) => (
				<motion.div
					key={idx}
					className="h-[30vh] lg:h-[20vh] w-full flex flex-col md:flex-row"
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					initial={{ opacity: 0, y: 120 }}
					transition={{
						duration: 1,
						delay: idx * 0.2,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					<div className="relative h-full w-[30%] overflow-hidden border border-black dark:border-zinc-600 hidden md:flex lg:w-[15%]">
						<Image
							src={items.src}
							alt={items.title}
							fill
							priority
							className="object-cover"
							sizes="(max-width: 1024px) 30vw, 15vw"
						/>
					</div>

					<div className=" lg:h-full w-full p-4 flex flex-col gap-2">
						<span className="text-zinc-400 text-body-sm xl:text-body-md">
							{items.date}
						</span>

						<span className="lg:text-body-lg 2xl:text-heading-lg">
							{items.title}
						</span>

						<span className="text-body-sm 2xl:text-body-lg text-zinc-500 h-full lg:w-[70%] xl:w-[50%]">
							{items.description}
						</span>
					</div>
				</motion.div>
			))}
		</div>
	)
}

const blogs = [
	{
		date: "SEP 12, 2023",
		title: "4 Ways to Elevate Your Designs With Authentic Photos",
		description: "Four ways designers can push themselves when deciding which photos to place in their projects, presentations, and pitches.",
		src: "/1.png"
	},
	{
		date: "AUG 29, 2023",
		title: "How to make (and keep) money as a freelance designer",
		description: "Use this guide to establish strong practices and automate recurring processes so you can consistently grow your business and revenue over time.",
		src: "/2.png"
	},
	{
		date: "AUG 25, 2023",
		title: "The Remarkable Evolution of the Drawing Tablet: Why Designers Should Ditch the Mouse",
		description: "The artist's tools have seen radical transformations from the ancient caves of Lascaux to modern digital canvases.",
		src: "/3.png"
	},
	{
		date: "JUN 29, 2023",
		title: "A guide to mastering financial security: 5 tips from freelancing experts",
		description: "Get actionable tips and lessons learned from financial experts who specialize in assisting freelancers and entrepreneurs!",
		src: "/4.png"
	},
	{
		date: "JUN 27, 2023",
		title: "This BIG mistake could cost you your job as a UX designer",
		description: "Learn how to avoid the biggest pitfall in UX design. (Hint: It's not just about the client.)",
		src: "/5.png"
	},
];