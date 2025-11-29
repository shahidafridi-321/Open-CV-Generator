import React from "react";
import { Link } from "react-router";

export const Navbar = () => {
	return (
		<nav className="w-full">
			<div className="flex space-x-4 items-center justify-end sm:justify-between p-6">
				<ul className="hidden sm:flex space-x-8">
					<li className=" text-gray-400 p-3 hover:opacity-90 text-[min(3vw,18px)]">
						<a href="#">Templates</a>
					</li>
					<li className=" text-gray-400 p-3 hover:opacity-90 text-[min(3vw,18px)]">
						<a href="#">About</a>
					</li>
					<li className=" text-gray-400 p-3 hover:opacity-90 text-[min(3vw,18px)]">
						<a href="#">Contact</a>
					</li>
				</ul>
				<button className="flex bg-blue-950 h-10 lg:h-12  w-auto px-3.5 sm:px-5 lg:px-8 cursor-pointer appearance-none items-center justify-center rounded-lg border-none text-sm lg:text-base font-bold text-white  hover:opacity-80 lg:rounded-xl ">
					<Link to="resume">Start Now</Link>
				</button>
			</div>
		</nav>
	);
};
