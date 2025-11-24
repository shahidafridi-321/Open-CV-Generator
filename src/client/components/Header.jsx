import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
	return (
		<header className="flex justify-center bg-[#f0e9df] h-20 rounded-2xl  items-center w-full px-6 py-4 m-0">
			<div className="w-full">
				<h1 className="text-4xl font-bold    ">Open CV</h1>
			</div>
			<Navbar />
		</header>
	);
};
