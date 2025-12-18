import React, { useContext, useState } from "react";
import { PersonalInfoForm } from "../forms/PersonalInfoForm";
import { CVContext } from "../context/CVContextProvider";
import { FormEngine } from "../forms/FormEngine";
import {
	awardsFormControls,
	educationFormControls,
	languagesFormControls,
	professionalExperieceFormControls,
	profileFormControls,
	projectsFormControls,
	skillsFormControls,
} from "../../utils/config";
import { PopUp } from "../components/contentPage/PopUp";

export const ResumeContentPage = () => {
	const { finalFormData } = useContext(CVContext);

	const [selectedSections, setSelectedSections] = useState([
		"Personal Information",
	]);
	const [showPopup, setShowPopup] = useState(false);
	const [opensection, setOpensection] = useState(null);

	return (
		<main className="w-full min-h-screen p-4 grid grid-cols-5">
			{/* Sidebar */}
			{!showPopup ? (
				<>
					<div className="col-span-5 md:col-span-2 h-full md:flex md:flex-col gap-6 rounded shadow bg-gray-100 p-4">
						<div className="w-full flex flex-col gap-2">
							{selectedSections.map((selectedSection, index) => (
								<div className="w-full self-stretch" key={index}>
									<button
										className="w-full py-3 px-16 rounded font-bold bg-gray-300"
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
										selectedSection === "Education" && (
											<FormEngine
												formControls={educationFormControls}
												sectionName={selectedSection.toLowerCase()}
											/>
										)}
									{opensection === "Profile" &&
										selectedSection === "Profile" && (
											<FormEngine
												formControls={profileFormControls}
												sectionName={selectedSection.toLowerCase()}
											/>
										)}
									{opensection === "Professional Experience" &&
										selectedSection === "Professional Experience" && (
											<FormEngine
												formControls={professionalExperieceFormControls}
												sectionName={selectedSection.toLowerCase()}
											/>
										)}
									{opensection === "Skills" && selectedSection === "Skills" && (
										<FormEngine
											formControls={skillsFormControls}
											sectionName={selectedSection.toLowerCase()}
										/>
									)}
									{opensection === "Projects" &&
										selectedSection === "Projects" && (
											<FormEngine
												formControls={projectsFormControls}
												sectionName={selectedSection.toLowerCase()}
											/>
										)}
									{opensection === "Languages" &&
										selectedSection === "Languages" && (
											<FormEngine
												formControls={languagesFormControls}
												sectionName={selectedSection.toLowerCase()}
											/>
										)}
									{opensection === "Awards" && selectedSection === "Awards" && (
										<FormEngine
											formControls={awardsFormControls}
											sectionName={selectedSection.toLowerCase()}
										/>
									)}
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
				<PopUp
					setShowPopup={setShowPopup}
					selectedSections={selectedSections}
					setSelectedSections={setSelectedSections}
				/>
			)}
		</main>
	);
};
