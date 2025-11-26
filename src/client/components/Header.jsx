import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
	return (
		<header className="flex  bg-[#200e32] h-20 rounded-2xl  items-center w-full px-6 py-4 m-0">
			<div className="w-full m-0">
				<h1 className="text-4xl font-bold text-white">Open CV</h1>
			</div>
			<Navbar />
		</header>
	);
};
