import React, { createContext, useMemo, useState } from "react";
import { allCvs as CV } from "../../utils/config/allCvs";

export const CVContext = createContext({
	finalFormData: {},
	setFinalFormData: () => {},
	allCvs: [],
	setAllCvs: () => {},
});

export const CVContextProvider = ({ children }) => {
	const [finalFormData, setFinalFormData] = useState({});
	const [allCvs, setAllCvs] = useState(CV);

	const value = useMemo(
		() => ({ finalFormData, setFinalFormData, allCvs, setAllCvs }),
		[finalFormData, allCvs]
	);

	return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};
