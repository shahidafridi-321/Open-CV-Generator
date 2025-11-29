import React from "react";
import { NavLink } from "react-router";
const arr = [1, 2, 3, 4, 5, 6, 7, 22, 33, 44, 55, 69, 90];

export const ResumePage = () => {
	return (
		<main className="grid grid-cols-4  w-full">
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
			<div className="col-span-4 md:col-span-3 flex flex-col ">
				<div className="flex flex-col py-4 px-6 gap-3">
					<h1 className="text-4xl font-bold">My Resumes</h1>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
						<div className="col-span-1 h-[400px] bg-blue-800"></div>
						{arr.map((item) => (
							<div key={item} className="col-span-1 h-[400px] bg-red-800"></div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};
