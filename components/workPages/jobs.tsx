import { Sparkle } from "lucide-react";
import Link from "next/link";


export default function Jobs() {
	return (
		<div className="w-full flex flex-col items-center justify-between border-b border-zinc-100 dark:border-zinc-900">
			<div className="py-2 w-full flex items-center justify-center">
				<h1 className="text-display-sm">JOB OPENINGS</h1>
			</div>

			<div className="w-full flex md:flex-col gap-2">
				<div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-center gap-4 text-body-sm px-2 leading-none">
					<Link href="/" className="flex items-center justify-center gap-1"><Sparkle className="h-4 w-4 text-purple-400" /><p>Artist Manager</p></Link>
					<Link href="/" className="flex items-center justify-center gap-1"><Sparkle className="h-4 w-4 text-purple-400" /><p>Programming & Event Manager</p></Link>
					<Link href="/" className="flex items-center justify-center gap-1"><Sparkle className="h-4 w-4 text-purple-400" /><p>Graphics Designer</p></Link>
					<Link href="/" className="flex items-center justify-center gap-1"><Sparkle className="h-4 w-4 text-purple-400" /><p>Marketing & Social Media Manager</p></Link>
				</div>
				<div className="flex flex-col text-body-sm justify-center">
					<span className="w-full flex items-center justify-center text-center">
						<p>Mail your CV to <span className="text-purple-400">@gmail.com</span> with subject - <span className="font-[700]">'job application'</span> and mention the role you're applying for.</p>
					</span>
					<span className="w-full flex items-center justify-center text-center">
						<p>Please make sure your application is supported by a professional cover letter</p>
					</span>
				</div>
			</div>

			<div className="w-full flex flex-col items-center justify-between">
				<div className="text-display-sm"><h1>APPLY FOR JOB</h1></div>
				<div className="w-full flex items-center justify-center gap-10">
					<span className="flex items-center justify-center p-2 gap-2">
						<div className="h-5 w-5 md:h-7 md:w-7 lg:h-11 lg:w-11 rounded-full bg-purple-400 flex items-center justify-center text-black text-body-sm text-onest font-bold">?</div>
						<div className="flex flex-col">
							<span className="font-bold text-body-sm">General Inquiries</span>
							<span className="text-black text-body-sm dark:text-zinc-400">lmao@gmail.com</span>
						</div>
					</span>
					<span className="flex items-center justify-center p-2 gap-2">
						<div className="h-5 w-5 md:h-7 md:w-7 lg:h-11 lg:w-11 rounded-full bg-purple-400 flex items-center justify-center text-black text-body-sm text-onest font-bold">i</div>
						<div className="flex flex-col">
							<span className="font-bold text-body-sm">Interested in joining us?</span>
							<span className="text-black text-body-sm dark:text-zinc-400">lmao2@gmail.com</span>
						</div>
					</span>
				</div>
			</div>
		</div>
	)
}