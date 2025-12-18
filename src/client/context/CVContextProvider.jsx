import React, { createContext, useMemo, useState } from "react";
export const CVContext = createContext();

export const CVContextProvider = ({ children }) => {
	const [finalFormData, setFinalFormData] = useState({});
	const value = useMemo(
		() => ({ finalFormData, setFinalFormData }),
		[finalFormData]
	);
	return <CVContext value={value}>{children}</CVContext>;
};
