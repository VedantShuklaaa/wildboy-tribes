// components/projects/hoverRevealCard.tsx
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import Image from "next/image";

interface HoverRevealCardProps {
	topSrc: string;
	underSrc: string;
	alt: string;
	priority?: boolean;
	radius?: number;
}

export default function HoverRevealCard({
	topSrc,
	underSrc,
	alt,
	priority = false,
	radius = 180,
}: HoverRevealCardProps) {
	const wrapRef = useRef<HTMLDivElement>(null);
	const [pos, setPos] = useState({ x: -9999, y: -9999 });
	const [hovering, setHovering] = useState(false);

	const handleMove = (e: React.MouseEvent) => {
		const rect = wrapRef.current?.getBoundingClientRect();
		if (!rect) return;
		setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	const maskStyle = hovering
		? {
			WebkitMaskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, transparent 99%, black 100%)`,
			maskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, transparent 99%, black 100%)`,
		}
		: {};

	return (
		<div
			ref={wrapRef}
			className="relative w-full h-full overflow-hidden rounded-2xl"
			style={{ cursor: hovering ? "none" : "default" }}
			onMouseMove={handleMove}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			{/* Bottom (revealed) image */}
			<Image
				src={underSrc}
				alt={`${alt} underlying`}
				fill
				className="object-cover select-none pointer-events-none"
				sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
			/>

			{/* Top image with cursor-following mask */}
			<Image
				src={topSrc}
				alt={alt}
				fill
				priority={priority}
				className="object-cover select-none pointer-events-none transition-[mask-image,-webkit-mask-image] duration-150"
				sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
				style={maskStyle}
			/>

			<MorphBlobCursor x={pos.x} y={pos.y} visible={hovering} size={radius * 2} color="#ffffff" blendMode="difference" />

			<div
				className="pointer-events-none absolute text-xs uppercase tracking-widest text-white mix-blend-difference font-medium"
				style={{
					left: pos.x,
					top: pos.y,
					transform: "translate(-50%, -50%)",
					opacity: hovering ? 1 : 0,
				}}
			>
				View Project
			</div>
		</div>
	);
}

const BLOB_PATHS = [
	"M 168.53 100.0 Q 168.53 100.0 163.325 121.115 Q 158.12 142.23 141.895 160.615 Q 125.67 179.0 102.185 172.285 Q 78.7 165.57 60.935 153.43 Q 43.17 141.29 35.24 120.645 Q 27.31 100.0 39.27 82.28 Q 51.23 64.56 64.745 48.82 Q 78.26 33.08 100.565 31.35 Q 122.87 29.62 143.4 41.585 Q 163.93 53.55 166.23 76.775 Z",
	"M 184.11 100.0 Q 184.11 100.0 165.89 117.315 Q 147.67 134.63 132.385 143.625 Q 117.1 152.62 95.36 166.9 Q 73.62 181.18 62.43 158.305 Q 51.24 135.43 46.465 117.715 Q 41.69 100.0 40.645 78.055 Q 39.6 56.11 59.72 47.03 Q 79.84 37.95 102.59 29.985 Q 125.34 22.02 137.645 42.865 Q 149.95 63.71 167.03 81.855 Z",
	"M 172.17 100.0 Q 172.17 100.0 166.05 121.77 Q 159.93 143.54 142.29 159.7 Q 124.65 175.86 102.57 167.955 Q 80.49 160.05 60.035 151.97 Q 39.58 143.89 28.77 121.945 Q 17.96 100.0 25.57 75.725 Q 33.18 51.45 57.265 47.03 Q 81.35 42.61 102.215 35.795 Q 123.08 28.98 141.315 42.855 Q 159.55 56.73 165.86 78.365 Z",
	"M 167.18 100.0 Q 167.18 100.0 162.43 120.95 Q 157.68 141.9 141.38 159.54 Q 125.08 177.18 103.265 167.14 Q 81.45 157.1 65.835 146.635 Q 50.22 136.17 47.36 118.085 Q 44.5 100.0 48.71 82.9 Q 52.92 65.8 67.98 56.805 Q 83.04 47.81 100.7 45.645 Q 118.36 43.48 137.665 51.045 Q 156.97 58.61 162.075 79.305 Z",
	"M 157.38 100.0 Q 157.38 100.0 162.62 124.65 Q 167.86 149.3 143.08 152.81 Q 118.3 156.32 97.195 164.955 Q 76.09 173.59 55.48 160.455 Q 34.87 147.32 28.63 123.66 Q 22.39 100.0 35.345 81.22 Q 48.3 62.44 64.04 50.105 Q 79.78 37.77 101.76 32.35 Q 123.74 26.93 145.985 38.68 Q 168.23 50.43 162.805 75.215 Z",
];

interface MorphBlobCursorProps {
	x: number;
	y: number;
	visible: boolean;
	size?: number;
	color?: string;
	blendMode?: React.CSSProperties["mixBlendMode"];
}

function MorphBlobCursor({
	x,
	y,
	visible,
	size = 200,
	color = "#ffffff",
	blendMode = "difference",
}: MorphBlobCursorProps) {
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	// position follows the cursor
	useGSAP(() => {
		if (!wrapperRef.current) return;
		gsap.to(wrapperRef.current, {
			x: x - size / 2,
			y: y - size / 2,
			duration: 0.5,
			ease: "power3.out",
			overwrite: "auto",
		});
	}, [x, y]);

	// fade/scale in or out based on hover state
	useGSAP(() => {
		if (!wrapperRef.current) return;
		gsap.to(wrapperRef.current, {
			opacity: visible ? 1 : 0,
			scale: visible ? 1 : 0.6,
			duration: 0.4,
			ease: "power3.out",
			overwrite: "auto",
		});
	}, [visible]);

	return (
		<div
			ref={wrapperRef}
			className="pointer-events-none absolute top-0 left-0"
			style={{ width: size, height: size, opacity: 0, mixBlendMode: blendMode }}
		>
			<svg viewBox="0 0 200 200" width="100%" height="100%">
				<circle cx="100" cy="100" r="70" fill={color} />
			</svg>
		</div>
	);
}