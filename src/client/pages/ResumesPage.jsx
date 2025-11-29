import React from "react";
import { NavLink, useNavigate } from "react-router";
const resumes = [1];

export const ResumesPage = () => {
	const navigate = useNavigate();
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
						<div
							className=" flex flex-col justify-center items-center col-span-1 h-[350px] shadow border-2 border-gray-400 border-dashed rounded-lg cursor-pointer"
							onClick={() => {
								navigate("/resume");
							}}
						>
							<span className="text-5xl text-gray-400">+</span>
							<p className="text-xl text-gray-400">New Resume</p>
						</div>
						{resumes.map((item) => (
							<div
								key={item}
								className="col-span-1 h-[350px] bg-red-800 cursor-pointer rounded-lg"
								onClick={() => {
									navigate("/resume/content");
								}}
							></div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};
