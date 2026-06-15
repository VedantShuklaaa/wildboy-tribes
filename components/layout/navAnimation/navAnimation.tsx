"use client";
import { motion } from "framer-motion";

interface NavLinkProps {
	text: string;
}

export function NavLink({ text }: NavLinkProps) {
	return (
		<motion.div
			initial="rest"
			whileHover="hover"
			animate="rest"
			className="relative overflow-hidden h-[1.2em] cursor-pointer"
		>
			{/* Current text */}
			<div className="flex">
				{text.split("").map((char, i) => (
					<motion.span
						key={`top-${i}`}
						variants={{
							rest: { y: 0 },
							hover: { y: "-100%" },
						}}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
							delay: i * 0.03,
						}}
						className="inline-block"
					>
						{char === " " ? "\u00A0" : char}
					</motion.span>
				))}
			</div>

			{/* Incoming text */}
			<div className="absolute inset-0 flex">
				{text.split("").map((char, i) => (
					<motion.span
						key={`bottom-${i}`}
						variants={{
							rest: { y: "100%" },
							hover: { y: 0 },
						}}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
							delay: i * 0.03,
						}}
						className="inline-block"
					>
						{char === " " ? "\u00A0" : char}
					</motion.span>
				))}
			</div>
		</motion.div>
	);
}

interface WordRollProps {
	text: string;
}

export function WordRoll({ text }: WordRollProps) {
	const words = text.split(" ");

	return (
		<motion.div
			initial="rest"
			whileHover="hover"
			animate="rest"
			className="relative overflow-hidden h-[1.2em] cursor-pointer"
		>
			{/* Current words */}
			<div className="flex gap-2">
				{words.map((word, i) => (
					<motion.span
						key={`top-${i}`}
						variants={{
							rest: { y: 0 },
							hover: { y: "-100%" },
						}}
						transition={{
							duration: 0.35,
							ease: "easeInOut",
							delay: i * 0.08,
						}}
						className="inline-block"
					>
						{word}
					</motion.span>
				))}
			</div>

			{/* Incoming words */}
			<div className="absolute inset-0 flex gap-2">
				{words.map((word, i) => (
					<motion.span
						key={`bottom-${i}`}
						variants={{
							rest: { y: "100%" },
							hover: { y: 0 },
						}}
						transition={{
							duration: 0.35,
							ease: "easeInOut",
							delay: i * 0.08,
						}}
						className="inline-block"
					>
						{word}
					</motion.span>
				))}
			</div>
		</motion.div>
	);
}

interface SentenceRollProps {
	text: string;
	className?: string;
}

export function SentenceRoll({
	text,
	className = "",
}: SentenceRollProps) {
	return (
		<motion.div
			initial="rest"
			whileHover="hover"
			animate="rest"
			className={`relative overflow-hidden h-[1.2em] cursor-pointer ${className}`}
		>
			{/* Current sentence */}
			<motion.div
				variants={{
					rest: { y: 0 },
					hover: { y: "-100%" },
				}}
				transition={{
					duration: 0.35,
					ease: [0.76, 0, 0.24, 1],
				}}
				className="whitespace-nowrap"
			>
				{text}
			</motion.div>

			{/* Incoming sentence */}
			<motion.div
				variants={{
					rest: { y: "100%" },
					hover: { y: 0 },
				}}
				transition={{
					duration: 0.35,
					ease: [0.76, 0, 0.24, 1],
				}}
				className="absolute inset-0 whitespace-nowrap"
			>
				{text}
			</motion.div>
		</motion.div>
	);
}