import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { PreviewShell } from "../templateEngine/PreviewShell";
import { TemplateRenderer } from "../templateEngine/TemplateRenderer";
import { twoColumnsSidebar } from "../../utils/templates/twoColumnsSidebar";
import { CVContext } from "../context/CVContextProvider";

export const ResumesPage = () => {
	const navigate = useNavigate();
	const { setFinalFormData, allCvs, setSelectedSections } =
		useContext(CVContext);

	return (
		<main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-4 bg-gray-50">
			{/* Sidebar */}
			<aside className="hidden md:flex md:col-span-1 flex-col gap-6 bg-white border-r border-r-gray-300 p-6">
				<nav className="flex flex-col gap-2">
					<NavLink
						to="/resumes"
						className={({ isActive }) =>
							`py-3 px-6 rounded font-semibold transition ${
								isActive ? "bg-gray-200" : "hover:bg-gray-100"
							}`
						}
					>
						Resumes
					</NavLink>

					<NavLink
						to="/cover-letters"
						className={({ isActive }) =>
							`py-3 px-6 rounded font-semibold transition ${
								isActive ? "bg-gray-200" : "hover:bg-gray-100"
							}`
						}
					>
						Cover Letters
					</NavLink>
				</nav>
			</aside>

			<section className="col-span-1 md:col-span-3 p-6">
				<div className="max-w-7xl mx-auto flex flex-col gap-6">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800">
						My Resumes
					</h1>

					{/* Resume Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
						<div
							onClick={() => {
								setFinalFormData({});
								setSelectedSections([
									{ key: "personalInformation", label: "Personal Information" },
								]);
								navigate("/resume/content");
							}}
							className="h-[300px] flex flex-col justify-center items-center border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-100 transition"
						>
							<span className="text-5xl text-gray-400">+</span>
							<p className="text-lg font-medium text-gray-500 mt-2">
								New Resume
							</p>
						</div>

						{Array.isArray(allCvs) &&
							allCvs.map((item, i) => (
								<div
									key={i}
									onClick={() => {
										setFinalFormData(item);
										const sectionsFromResume = Object.keys(item).map((key) => {
											if (key === "personalInformation") {
												return { key, label: "Personal Information" };
											}
											if (key === "professionalExperience") {
												return { key, label: "Professional Experience" };
											}
											return {
												key,
												label: key.charAt(0).toUpperCase() + key.slice(1),
											};
										});
										setSelectedSections(sectionsFromResume);

										navigate("/resume/content");
									}}
									className="h-[300px] rounded-2xl shadow hover:shadow-lg transition cursor-pointer bg-white "
								>
									<PreviewShell>
										<TemplateRenderer
											template={twoColumnsSidebar}
											data={item}
										/>
									</PreviewShell>
								</div>
							))}
					</div>
				</div>
			</section>
		</main>
	);
};
