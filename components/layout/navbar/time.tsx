"use client";
import { useEffect, useState } from "react";

export default function LiveTime() {
	const [time, setTime] = useState("");

	useEffect(() => {
		const updateTime = () => {
			setTime(
				new Date().toLocaleTimeString("en-US", {
					hour: "numeric",
					minute: "2-digit",
					hour12: true,
				})
			);
		};

		updateTime(); // initial render

		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	return <span>{time}</span>;
}