"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition() {
	const pathname = usePathname();

	return (
		<motion.div
			key={pathname}
			initial={{ y: "0%" }}
			animate={{ y: "-100%" }}
			transition={{
				duration: 0.9,
				ease: [0.76, 0, 0.24, 1],
			}}
			className="fixed inset-0 z-[9998] bg-black pointer-events-none"
		/>
	);
}