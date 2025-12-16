import React, { useContext, useState } from "react";
import { PersonalInfoForm } from "../forms/PersonalInfoForm";
import { CVContext } from "../context/CVContextProvider";

const sections = [
	"Profile",
	"Education",
	"Professional Experience",
	"Skills",
	"Projects",
	"Languages",
	"Awards",
	"References",
];

export const ResumeContentPage = () => {
	const { finalFormData, setFinalFormData } = useContext(CVContext);

	const [selectedSections, setSelectedSections] = useState([
		"Personal Information",
	]);
	const [showPopup, setShowPopup] = useState(false);
	const [opensection, setOpensection] = useState(null);

	return (
		<main className="w-full p-4 grid grid-cols-5">
			{/* Sidebar */}
			{!showPopup ? (
				<>
					<div className="col-span-5 md:col-span-2 h-full md:flex md:flex-col gap-6 rounded shadow bg-gray-100 p-4">
						<div className="w-full flex flex-col gap-2">
							{selectedSections.map((selectedSection, index) => (
								<div className="w-full self-stretch" key={index}>
									<button
										className="py-3 px-16 rounded font-bold bg-gray-300"
										onClick={() =>
											setOpensection(
												opensection === selectedSection ? null : selectedSection
											)
										}
									>
										{opensection === selectedSection ? "Hide" : "Edit"}{" "}
										{selectedSection}
									</button>
									{opensection === "Personal Information" &&
										selectedSection === "Personal Information" && (
											<PersonalInfoForm />
										)}
									{opensection === "Education" &&
										selectedSection === "Education" && <p>education form</p>}
								</div>
							))}
						</div>

						<button
							onClick={() => setShowPopup(!showPopup)}
							className="bg-pink-500 hover:bg-pink-600 w-40 py-2 px-6 rounded text-gray-100 font-bold transition-all"
						>
							Add Section
						</button>
					</div>

					{/* Main Content */}
					<div className="col-span-5 md:col-span-3 flex flex-col ">
						<div className="flex flex-col py-4 px-6 gap-3">
							<h1 className="text-4xl font-bold">Resume Content</h1>
							{/* Form content goes here */}
							{JSON.stringify(finalFormData)}
						</div>
					</div>
				</>
			) : (
				<div className="w-full bg-gray-200  rounded-xl flex  flex-col gap-3 col-span-5 shadow-2xl p-10 ">
					<div className="w-full flex flex-col space-y-3 md:flex-row justify-between md:items-center px-6 py-4">
						<h2 className="text-4xl font-bold">Add Section</h2>
						<button
							className="bg-pink-500 hover:bg-pink-600 w-40 py-2 px-6 rounded text-gray-100 font-bold transition-all"
							onClick={() => setShowPopup(false)}
						>
							Close
						</button>
					</div>
					<div className="flex flex-wrap items-center gap-5">
						{sections.map((section) => (
							<div
								key={section}
								className="max-w-[350px] rounded-xl shadow px-6 py-4 bg-gray-100"
								onClick={() => {
									if (!selectedSections.includes(section)) {
										setSelectedSections([...selectedSections, section]);
										setFinalFormData((prevData) => ({
											...prevData,
											[section.toLowerCase()]: [],
										}));
									}
									setShowPopup(false);
								}}
							>
								<h2 className="text-xl font-bold">{section}</h2>
								<p className="text-[16px] text-gray-400">
									Make a great first impression by presenting yourself in a few
									sentences.
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</main>
	);
};
