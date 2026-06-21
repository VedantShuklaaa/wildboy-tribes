"use client";
import Image from "next/image";
import FloatingCard from "../layout/floatingCard/floatingCard";
import ScrollRevealText from "../scrolltriger/fillColor";
import { useRef } from "react";


const text = "We’re India’s first nightlife architects and management studio. We design operating systems that make venues culturally relevant, community - led, and consistently engaging.";

export default function FloatCard() {
	return (
		<div className="relative h-screen w-full font-twid flex flex-col lg:flex-row items-center justify-center">

			<div className="z-100 h-full w-full flex items-center justify-center p-4">
				<ScrollRevealText text={text} className="text-heading-xl font-druk leading-none bg-clip-text" />
			</div>

			<div className="h-full w-full relative">
				<FloatingCard y={100} className="absolute top-0 right-4">
					<TiltImage src="/1.webp" alt="Nightlife venue" sizes="320px" />
				</FloatingCard>

				<FloatingCard y={100} className="absolute bottom-0 left-4">
					<TiltImage src="/2.webp" alt="Nightlife crowd" sizes="400px" />
				</FloatingCard>
			</div>
		</div>
	)
}

function TiltImage({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateX = ((y - centerY) / centerY) * -12;
		const rotateY = ((x - centerX) / centerX) * 12;
		card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
	};

	const handleMouseLeave = () => {
		const card = cardRef.current;
		if (!card) return;
		card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transition: "transform 0.15s ease-out" }}
			className="relative h-60 w-40 md:h-80 md:w-80 lg:h-90 xl:h-120 xl:w-80 2xl:w-[23vw] overflow-hidden rounded-[10px]"
		>
			<Image
				src={src}
				alt={alt}
				fill
				className="object-cover"
				sizes={sizes}
			/>
		</div>
	);
}