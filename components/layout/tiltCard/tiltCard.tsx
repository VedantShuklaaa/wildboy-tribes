"use client";
interface TiltCardProps {
	children?: React.ReactNode;
	className?: string;
	tilt?: string,
}

export default function TiltCard({
	children,
	className = "",
	tilt = "4"
}: TiltCardProps) {
	return (
		<div
			className={`relative ${className}`}
			style={{
				perspective: "1200px",
			}}
		>
			<div
				className="h-full w-full bg-[#938ACF] shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
				style={{
					transform: `rotateZ(${tilt}deg)`,
					transformStyle: "preserve-3d",
				}}
			>
				{children}
			</div>
		</div>
	);
}