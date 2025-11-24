import React from "react";

export const Navbar = () => {
	return (
		<nav className="w-full">
			<div className="flex space-x-4 items-center justify-end p-6">
				<ul className="flex space-x-8">
					<li className=" text-gray-400 p-3 hover:opacity-90">
						<a href="#">Home</a>
					</li>
					<li className=" text-gray-400 p-3 hover:opacity-90">
						<a href="#">About</a>
					</li>
					<li className=" text-gray-400 p-3 hover:opacity-90">
						<a href="#">Contact</a>
					</li>
				</ul>
				<button className="border-none bg-[#200e32] hover:bg-[#49236e] font-bold text-gray-200 py-4 px-12 rounded-2xl transition p-3 cursor-pointer">
					Start Now
				</button>
			</div>
		</nav>
	);
};
