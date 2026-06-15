



export default function Hero() {
	return (
		<div className="h-[60vh] w-full flex flex-col border-b border-black dark:border-zinc-600">
			<div className="h-[90%] w-full flex items-center px-4">
				<div className="h-full w-full"></div>
				<div className="w-[80vw] text-4xl font-light">
					Our services cover the full spectrum of venue business development — from strategy and audience growth to event design, talent programming, and on-ground execution — all designed to move your business forward.
				</div>
			</div>
			<div className="h-[10%] w-full px-4 py-2 flex items-center justify-between text-xl text-black dark:text-zinc-400">
				<span>© Studio Capabilities</span>
				<span>(CAD® — 02)</span>
				<span>Digital Execution</span>
			</div>
		</div>
	)
}