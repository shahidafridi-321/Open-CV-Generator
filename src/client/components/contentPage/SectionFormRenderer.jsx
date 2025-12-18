import React, { useContext } from "react";
import { PersonalInfoForm } from "../../forms/PersonalInfoForm";
import { FormEngine } from "../../forms/FormEngine";

import { CVContext } from "../../context/CVContextProvider";
import { formControlsData } from "../../../utils/formControlsData";
import { EditAndDelete } from "./EditAndDeleteEntryHandler";

export const SectionFormRenderer = ({ opensection, selectedSection }) => {
	const { finalFormData } = useContext(CVContext);
	if (opensection !== selectedSection) return null;
	const formControls = formControlsData[selectedSection];
	const sectionData = finalFormData[selectedSection] || [];

	if (selectedSection === "personalInformation") {
		return <PersonalInfoForm />;
	}
	return (
		<>
			<FormEngine formControls={formControls} sectionName={selectedSection} />
			{sectionData.map((entry) => (
				<EditAndDelete
					key={entry.id}
					entry={entry}
					sectionName={selectedSection}
				/>
			))}
		</>
	);
};
