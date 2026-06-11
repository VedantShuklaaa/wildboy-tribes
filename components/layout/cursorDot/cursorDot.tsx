"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorDot() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			setPosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener("mousemove", moveCursor);

		return () => {
			window.removeEventListener("mousemove", moveCursor);
		};
	}, []);

	return (
		<motion.div
			animate={{
				x: position.x - 8,
				y: position.y - 8,
			}}
			transition={{
				type: "spring",
				stiffness: 800,
				damping: 35,
				mass: 0.2,
			}}
			className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        h-4
        w-4
        rounded-full
        bg-[#ff2d55]
        shadow-[0_0_20px_rgba(255,45,85,0.8)]
      "
		/>
	);
}