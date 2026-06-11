"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/theme-button";
import { NavLink } from "@/components/layout/navAnimation/navAnimation";
import LiveTime from "./time";

const navItems = ["Home", "About", "Work", "Services", "AI Labs", "Contact"];

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};


export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="h-20 w-full border-b border-black dark:border-zinc-700 flex items-center justify-between px-4 lg:px-5 font-onest relative">
			{/* Logo */}
			<div className="text-lg sm:text-xl lg:text-xl flex items-center gap-2 text-black dark:text-white leading-none font-[700]">
				<div className="h-10 w-10 lg:h-12 lg:w-12 border border-black dark:border-white"></div>

				<div className="flex flex-col">
					<h1>creative</h1>
					<h1>apes</h1>
				</div>
			</div>

			{/* Desktop Navigation */}
			<div className="hidden lg:flex items-center gap-4 lg:gap-25">
				<motion.div
					className="flex gap-2"
					variants={container}
					initial="hidden"
					animate="show"
				>
					{navItems.map((label, i) => (
						<motion.div
							key={label}
							variants={item}
							className="flex items-center text-black dark:text-zinc-400 hover:text-[#F04D5A] dark:hover:text-[#F04D5A]"
						>
							<NavLink text={label} />

							{i < navItems.length - 1 && (
								<span className="pointer-events-none">,</span>
							)}
						</motion.div>
					))}
				</motion.div>

				<div className="flex flex-col">
					<div className="flex gap-2">
						<span className="text-black dark:text-white text-sm">
							Based in India
						</span>
						<span className="text-xs flex items-end text-red-500">
							<LiveTime />
						</span>
					</div>

					<div className="text-black dark:text-zinc-400">
						<p>AI-First Creative Solutions</p>
					</div>
				</div>

				<ThemeToggle />
			</div>

			{/* Mobile Menu Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="lg:hidden text-black dark:text-white"
			>
				{isOpen ? <X size={28} /> : <Menu size={28} />}
			</button>

			{/* Mobile Dropdown */}
			<motion.div
				initial={false}
				animate={{
					opacity: isOpen ? 1 : 0,
					y: isOpen ? 0 : -10,
					pointerEvents: isOpen ? "auto" : "none",
				}}
				transition={{ duration: 0.25 }}
				className="absolute top-20 left-0 w-full bg-white dark:bg-black border-b border-black dark:border-zinc-700 lg:hidden z-50"
			>
				<div className="flex flex-col items-center p-6 gap-6">
					{navItems.map((item) => (
						<NavLink key={item} text={item} />
					))}

					<div className="border-t border-zinc-300 dark:border-zinc-700 pt-6">
						<ThemeToggle />
					</div>
				</div>
			</motion.div>
		</div>
	)
}