"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "@/components/scrolltriger/fillColor";
import SlidingText from "../aboutUsButton/aboutUsButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "@/components/marquee/marquee1";
import CardStack from "../cardStack/cardStack";

gsap.registerPlugin(ScrollTrigger);

interface OrbitBackgroundProps {
	pivotX?: string;
	pivotY?: string;
	className?: string;
}

const CARD_COUNT = 6;
const getRadius = () => {
	if (typeof window === "undefined") return 420;
	const width = window.innerWidth;

	// Small phones
	if (width < 375) return 90;
	// Large phones
	if (width < 480) return 110;
	// Landscape phones / small tablets
	if (width < 640) return 130;
	// Tablets
	if (width < 768) return 150;
	// Large tablets
	if (width < 1024) return 220;
	// Small laptops
	if (width < 1280) return 320;
	// Large laptops
	if (width < 1536) return 380;
	// Ultra-wide desktops
	return 420;
  };

export function OrbitBackground({
	pivotX = "50%",
	pivotY = "50%",
	className = "",
}: OrbitBackgroundProps) {
	const orbitRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!orbitRef.current) return;

		const orbit = orbitRef.current;

		const baseTween = gsap.to(orbit, {
			rotateY: "+=360",
			duration: 40,
			ease: "none",
			repeat: -1,
			force3D: true,
		});

		const pause = () => baseTween.pause();
		const resume = () => baseTween.resume();

		orbit.addEventListener("mouseenter", pause);
		orbit.addEventListener("mouseleave", resume);

		let lastScrollY = window.scrollY;
		let scrollTimeout: ReturnType<typeof setTimeout>;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const delta = currentScrollY - lastScrollY;

			clearTimeout(scrollTimeout);

			if (delta > 0) {
				gsap.to(baseTween, {
					timeScale: 8,
					duration: 0.3,
				});
			} else if (delta < 0) {
				gsap.to(baseTween, {
					timeScale: -6,
					duration: 0.3,
				});
			}

			scrollTimeout = setTimeout(() => {
				gsap.to(baseTween, {
					timeScale: 1,
					duration: 1,
				});
			}, 120);

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			orbit.removeEventListener("mouseenter", pause);
			orbit.removeEventListener("mouseleave", resume);
			baseTween.kill();
		};
	}, { dependencies: [] });

	return (
		<div
			className={`absolute inset-0 overflow-visible pointer-events-none ${className}`}
			style={{
				perspective: "1800px",
			}}
		>
			<div
				ref={orbitRef}
				className="absolute"
				style={{
					left: pivotX,
					top: pivotY,
					transformStyle: "preserve-3d",
				}}
			>
				{Array.from({ length: CARD_COUNT }).map((_, index) => {
					const angle = (360 / CARD_COUNT) * index;

					return (
						<div
							key={index}
							className="absolute left-1/2 top-1/2 h-[120px] w-[180px] md:h-[180px] md:w-[280px] lg:h-[250px] lg:w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-black dark:bg-white shadow-2xl"
							style={{
								transform: `rotateY(${angle}deg) translateZ(${getRadius()}px)`,
							}}
						>
							<div className="flex h-full w-full items-center justify-center">
								<span className="text-2xl md:text-4xl lg:text-6xl font-bold text-white dark:text-black">
									{index + 1}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}



const text = "This is where we deploy our systems. Each space becomes a live environment where we test potential, apply operational expertise, and refine performance in real time. From unlocking venue potential to experimenting with new models, business architecture, and growth strategies, everything is built to drive relevance, consistency, and demand. If it doesn’t perform, it doesn’t stay.";

export default function carouselPage() {
	return (
		<div className="relative w-full font-twid" id="ai-labs">
			<section className="relative min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center gap-6 lg:gap-8 border-b border-black dark:border-zinc-600">
				<div className="absolute inset-0 pointer-events-none">
					<OrbitBackground pivotY="30%" />
				</div>

				<div className="relative z-10 w-[90vw] md:w-[70vw] lg:w-[45vw] text-center mt-55 lg:mt-100">
					<ScrollRevealText
						text={text}
						className="text-xl md:text-3xl lg:text-4xl"
					/>
				</div>

				<div className="group relative z-10 w-fit h-10 px-5 border-2 rounded-xl border-black dark:border-white flex items-center justify-center overflow-hidden">
					<div className="absolute inset-0 bg-[#ff2d55] origin-bottom scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-y-100 rounded-xl" />

					<span className="relative z-10">
						<SlidingText text="INSIDE AI LABS" />
					</span>
				</div>
			</section>

			<Marquee text="@Intellectual Property" />

			{/* STACK SECTION */}
			<CardStack />

			{/* EXTRA CONTENT AFTER STACK */}
			<section className="min-h-[12vh] lg:h-[20vh] w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 px-4 py-4 text-sm md:text-lg lg:text-2xl text-black dark:text-zinc-400 border-b border-black dark:border-zinc-600">
				<span>© Clients</span>
				<span>(CAD® — 06)</span>
				<span>Brand Partners</span>
			</section>
		</div>

	)
}