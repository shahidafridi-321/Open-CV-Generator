import React from "react";
import { PersonalInfoForm } from "../../forms/PersonalInfoForm";
import { FormEngine } from "../../forms/FormEngine";
import {
	awardsFormControls,
	educationFormControls,
	languagesFormControls,
	professionalExperieceFormControls,
	profileFormControls,
	projectsFormControls,
	referenciesFormControls,
	skillsFormControls,
} from "../../../utils/config";

export const SectionFormRenderer = ({ opensection, selectedSection }) => {
	return (
		<>
			{opensection === "Personal Information" &&
				selectedSection === "Personal Information" && <PersonalInfoForm />}
			{opensection === "Education" && selectedSection === "Education" && (
				<FormEngine
					formControls={educationFormControls}
					sectionName={selectedSection.toLowerCase()}
				/>
			)}
			{opensection === "Profile" && selectedSection === "Profile" && (
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
			{opensection === "Projects" && selectedSection === "Projects" && (
				<FormEngine
					formControls={projectsFormControls}
					sectionName={selectedSection.toLowerCase()}
				/>
			)}
			{opensection === "Languages" && selectedSection === "Languages" && (
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
			{opensection === "References" && selectedSection === "References" && (
				<FormEngine
					formControls={referenciesFormControls}
					sectionName={selectedSection.toLowerCase()}
				/>
			)}
		</>
	);
};
