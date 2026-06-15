import SlidingText from "../layout/aboutUsButton/aboutUsButton";
import FloatingCard from "../layout/floatingCard/floatingCard";
import ScrollRevealText from "../scrolltriger/fillColor";


const text = "What begins within our community doesn't stay here. It moves outward — shaping the work, the experiences, and the culture we bring into the world. Every collaboration and every exchange adds to something larger — influencing how ideas take form and how creative work evolves beyond individual effort. Over time, this shared momentum builds depth, direction, and relevance — allowing us to create work that resonates, performs, and lasts.";

const CARDS = [
	{ col: 0, h: "h-90", top: "top-30" },
	{ col: 1, h: "h-60", top: "top-40" },
	{ col: 2, h: "h-80", top: "top-20" },

	{ col: 0, h: "h-60", top: "top-[560px]" },
	{ col: 1, h: "h-90", top: "top-[470px]" },
	{ col: 2, h: "h-70", top: "top-[460px]" },
];

const COL_POSITIONS = ["left-10", "left-72", "left-[36rem]"];

export default function Second() {
	return (
		<div className="h-screen w-full flex relative">
			<div className="absolute text-[250px] text-center leading-none left-1/2 -translate-x-1/2 tracing-tighter">
				Innovation In Motion
			</div>

			{/* cards column — aligned to 3 fixed X positions */}
			<div className="h-full w-full relative">
				{CARDS.map((card, i) => (
					<FloatingCard
						key={i}
						y={80}
						className={`absolute ${COL_POSITIONS[card.col]} ${card.top}`}
					>
						<div className={`${card.h} w-56 border border-black dark:border-zinc-600 rounded-sm`} />
					</FloatingCard>
				))}
			</div>

			{/* text + cta */}
			<div className="h-full w-full flex flex-col justify-end p-4 gap-4">
				<ScrollRevealText text={text} className="text-3xl" />
				<div className="group relative w-fit h-10 px-5 border-2 rounded-xl border-black dark:border-white flex items-center justify-center overflow-hidden">
					<div className="absolute inset-0 bg-[#ff2d55] origin-bottom scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-y-100 rounded-xl" />
					<span className="relative z-10">
						<SlidingText text="ABOUT US" />
					</span>
				</div>
			</div>
		</div>
	)
}