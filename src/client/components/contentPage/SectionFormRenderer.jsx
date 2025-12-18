import React, { useContext, useState } from "react";
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
import { CVContext } from "../../context/CVContextProvider";

const EditAndDelete = ({ entry, setFormData, sectionName }) => {
	const { finalFormData, setFinalFormData } = useContext(CVContext);

	const handleDelete = () => {
		const sectionData = finalFormData[sectionName].filter(
			(item) => item.id !== entry.id
		);

		setFinalFormData((prevData) => {
			return {
				...prevData,
				[sectionName]: [...sectionData],
			};
		});
	};
	return (
		<div
			className="w-full justify-between mt-4 flex gap-2 flex-wrap"
			key={entry.id}
		>
			<button
				onClick={() => setFormData(entry)}
				className="px-4 py-2 bg-gray-300 rounded"
			>
				{entry.degree || "Edit Entry"}
			</button>
			<button
				onClick={() => handleDelete()}
				className="px-4 py-2 bg-red-400 rounded"
			>
				Delete
			</button>
		</div>
	);
};

export const SectionFormRenderer = ({ opensection, selectedSection }) => {
	const [formData, setFormData] = useState({});

	const { finalFormData } = useContext(CVContext);
	return (
		<>
			{opensection === "Personal Information" &&
				selectedSection === "Personal Information" && <PersonalInfoForm />}
			{opensection === "Education" && selectedSection === "Education" && (
				<>
					<FormEngine
						formControls={educationFormControls}
						sectionName={selectedSection.toLowerCase()}
						formData={formData}
						setFormData={setFormData}
					/>
					{finalFormData[opensection.toLowerCase()].map((entry) => (
						<EditAndDelete
							entry={entry}
							setFormData={setFormData}
							sectionName={opensection.toLowerCase()}
						/>
					))}
				</>
			)}
			{opensection === "Profile" && selectedSection === "Profile" && (
				<>
					<FormEngine
						formControls={profileFormControls}
						sectionName={selectedSection.toLowerCase()}
						formData={formData}
						setFormData={setFormData}
					/>
					{finalFormData[opensection.toLowerCase()].map((entry) => (
						<EditAndDelete
							entry={entry}
							setFormData={setFormData}
							sectionName={opensection.toLowerCase()}
						/>
					))}
				</>
			)}
			{opensection === "Professional Experience" &&
				selectedSection === "Professional Experience" && (
					<>
						<FormEngine
							formControls={professionalExperieceFormControls}
							sectionName={selectedSection.toLowerCase()}
							formData={formData}
							setFormData={setFormData}
						/>
						{finalFormData[opensection.toLowerCase()].map((entry) => (
							<EditAndDelete
								entry={entry}
								setFormData={setFormData}
								sectionName={opensection.toLowerCase()}
							/>
						))}
					</>
				)}
			{opensection === "Skills" && selectedSection === "Skills" && (
				<>
					<FormEngine
						formControls={skillsFormControls}
						sectionName={selectedSection.toLowerCase()}
						formData={formData}
						setFormData={setFormData}
					/>
					{finalFormData[opensection.toLowerCase()].map((entry) => (
						<EditAndDelete
							entry={entry}
							setFormData={setFormData}
							sectionName={opensection.toLowerCase()}
						/>
					))}
				</>
			)}
			{opensection === "Projects" && selectedSection === "Projects" && (
				<>
					<FormEngine
						formControls={projectsFormControls}
						sectionName={selectedSection.toLowerCase()}
						formData={formData}
						setFormData={setFormData}
					/>
					{finalFormData[opensection.toLowerCase()].map((entry) => (
						<EditAndDelete
							entry={entry}
							setFormData={setFormData}
							sectionName={opensection.toLowerCase()}
						/>
					))}
				</>
			)}
			{opensection === "Languages" && selectedSection === "Languages" && (
				<>
					<FormEngine
						formControls={languagesFormControls}
						sectionName={selectedSection.toLowerCase()}
						formData={formData}
						setFormData={setFormData}
					/>
					{finalFormData[opensection.toLowerCase()].map((entry) => (
						<EditAndDelete
							entry={entry}
							setFormData={setFormData}
							sectionName={opensection.toLowerCase()}
						/>
					))}
				</>
			)}
			{opensection === "Awards" && selectedSection === "Awards" && (
				<>
					<FormEngine
						formControls={awardsFormControls}
						sectionName={selectedSection.toLowerCase()}
						formData={formData}
						setFormData={setFormData}
					/>
					{finalFormData[opensection.toLowerCase()].map((entry) => (
						<EditAndDelete
							entry={entry}
							setFormData={setFormData}
							sectionName={opensection.toLowerCase()}
						/>
					))}
				</>
			)}
			{opensection === "References" && selectedSection === "References" && (
				<>
					<FormEngine
						formControls={referenciesFormControls}
						sectionName={selectedSection.toLowerCase()}
						formData={formData}
						setFormData={setFormData}
					/>
					{finalFormData[opensection.toLowerCase()].map((entry) => (
						<EditAndDelete
							entry={entry}
							setFormData={setFormData}
							sectionName={opensection.toLowerCase()}
						/>
					))}
				</>
			)}
		</>
	);
};
