import React from "react";
import { Link, NavLink } from "react-router";

export const CoverLetter = () => {
	return (
		<main className="grid grid-cols-4 h-[80vh] w-full">
			{/* Sidebar */}
			<div className="col-span-1 h-full hidden md:flex md:flex-col gap-6 rounded shadow bg-gray-100 p-4">
				<nav className="w-full flex flex-col gap-2">
					<NavLink
						to="/resumes"
						className={({ isActive }) =>
							`w-auto py-3 px-16 rounded font-bold ${
								isActive ? "bg-gray-300" : " text-black"
							}`
						}
					>
						Resume
					</NavLink>
					<NavLink
						to="/cover-letters"
						className={({ isActive }) =>
							`w-auto py-3 px-16 rounded font-bold ${
								isActive ? "bg-gray-200" : " text-black"
							}`
						}
					>
						Cover Letter
					</NavLink>
				</nav>
			</div>

			{/* Main Content */}
			<div className=" w-full col-span-4 md:col-span-3 h-full p-10 flex justify-center items-start md:justify-center  md:items-start">
				<div className="flex flex-col space-y-2 justify-center items-center border p-20 rounded-2xl shadow border-[#200e32]">
					<h1 className="text-4xl font-bold">Hey, There</h1>
					<p className="text-lg mt-4">
						Cover Lettes Coming Soon Thanks For Your Patience.
					</p>
					<Link
						to={"/resumes"}
						className="bg-gray-200 w-auto py-3 px-2 md:px-16 rounded font-bold text-black"
					>
						Back to Resumes
					</Link>
					<Link
						to={"/"}
						className="bg-gray-200 w-auto py-3  px-2 md:px-16 rounded font-bold text-black"
					>
						Back to Home
					</Link>
				</div>
			</div>
		</main>
	);
};
