import FloatingCard from "../layout/floatingCard/floatingCard";
import ScrollRevealText from "../scrolltriger/fillColor";


const text = "We’re India’s first nightlife architects and management studio. We design operating systems that make venues culturally relevant, community - led, and consistently engaging.";

export default function FloadCard() {
	return (
		<div className="relative h-[100vh] w-full font-twid">
			<FloatingCard
				y={100}
				className="absolute top-50 left-40"
			>
				<div className="h-160 w-80 rounded-3xl border border-black dark:border-zinc-600" />
			</FloatingCard>

			<div className="absolute left-1/2 -translate-x-1/2 top-20">
				<ScrollRevealText text={text} className="text-6xl w-240" />
			</div>

			<FloatingCard
				y={100}
				className="absolute top-20 right-30"
			>
				<div className="h-150 w-100 rounded-3xl border border-black dark:border-zinc-600" />
			</FloatingCard>
		</div>
	)
}