"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { flushSync } from "react-dom";

interface LoaderProps {
	onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
	const loaderRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const bgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log("Loader fallback triggered");
			onComplete?.();
		}, 5000);
		return () => clearTimeout(timer);
	}, [onComplete]);

	useGSAP(() => {
		const isMobile = window.innerWidth < 768;

		const tl = gsap.timeline();

		tl.fromTo(textRef.current, {
			y: "-100vh",
			opacity: 1,
		}, {
			y: 0,
			duration: 1.5,
			ease: "power3.out",
		}).to(textRef.current, {
			y: isMobile ? "22vh" : "26vh",
			scale: isMobile ? 1.5 : 2,
			duration: 2,
			ease: "power3.inOut",
		}).to([bgRef.current, textRef.current], {
			autoAlpha: 0,
			duration: 0.8,
			ease: "power2.inOut",
			onComplete: () => {
				console.log("loader complete");
				onComplete?.();
			},
		});

		return () => tl.kill();
	}, { scope: loaderRef, dependencies: [] });

	return (
		<div
			ref={loaderRef}
			className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
		>
			<div ref={bgRef} className="absolute inset-0 bg-background" />
			<div
				ref={textRef}
				className="relative max-w-[90vw] z-10 text-white text-xl sm:text-2xl md:text-3xl font-twid font-medium flex flex-col text-center leading-none"
			>
				<span>WILDBOYS TRIBE</span>
				<span>NIGHTLIFE & ENTERTAINMENT</span>
				<span>ARCHITECTS</span>
			</div>
		</div>
	);
}

export function LoaderWrapper({ children }: { children: React.ReactNode }) {
	const [loaded, setLoaded] = useState(false);

	return (
		<>
			{!loaded && (
				<Loader
					onComplete={() => {
						setLoaded(true);
					}}
				/>
			)}
			{children}
		</>
	);
}