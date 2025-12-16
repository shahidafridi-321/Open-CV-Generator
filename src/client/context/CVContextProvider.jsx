import React, { createContext, useState } from "react";
export const CVContext = createContext();

export const CVContextProvider = ({ children }) => {
	const [finalFormData, setFinalFormData] = useState({});
	return (
		<CVContext value={{ finalFormData, setFinalFormData }}>
			{children}
		</CVContext>
	);
};
