import React, { createContext, useMemo, useState } from "react";
import { allCvs as CV } from "../../utils/config/allCvs";

export const CVContext = createContext({
	finalFormData: {},
	setFinalFormData: () => {},
	allCvs: [],
	setAllCvs: () => {},
	selectedSections: [],
	setSelectedSections: () => {},
});

export const CVContextProvider = ({ children }) => {
	const [finalFormData, setFinalFormData] = useState({});
	const [allCvs, setAllCvs] = useState(CV);
	const [selectedSections, setSelectedSections] = useState([
		{ key: "personalInformation", label: "Personal Information" },
	]);
	const value = useMemo(
		() => ({
			finalFormData,
			setFinalFormData,
			allCvs,
			setAllCvs,
			selectedSections,
			setSelectedSections,
		}),
		[finalFormData, allCvs, selectedSections]
	);

	return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};
