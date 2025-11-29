import React from "react";

export const ResumeContentPage = () => {
	return (
		<main className="w-full p-4 grid grid-cols-5 h-[80vh]">
			{/* Sidebar */}
			<div className="col-span-1 h-full hidden md:flex md:flex-col gap-6 rounded shadow bg-gray-100 p-4">
				<nav className="w-full flex flex-col gap-2">
					<button className="w-auto py-3 px-16 rounded font-bold bg-gray-300">
						Personal Info
					</button>
					<button className="w-auto py-3 px-16 rounded font-bold text-black">
						Work Experience
					</button>
					<button className="w-auto py-3 px-16 rounded font-bold text-black">
						Education
					</button>
					<button className="w-auto py-3 px-16 rounded font-bold text-black">
						Skills
					</button>
					<button className="w-auto py-3 px-16 rounded font-bold text-black">
						Projects
					</button>
				</nav>
			</div>

			{/* Main Content */}
			<div className="col-span-5 md:col-span-4 flex flex-col ">
				<div className="flex flex-col py-4 px-6 gap-3">
					<h1 className="text-4xl font-bold">Resume Content</h1>
					{/* Form content goes here */}
				</div>
			</div>
		</main>
	);
};
