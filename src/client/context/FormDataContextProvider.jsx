import React, { createContext, useMemo, useState } from "react";
export const FormDataContext = createContext(null);
export const FormDataContextProvider = ({ children }) => {
	const [formData, setFormData] = useState({});

	const value = useMemo(() => ({ formData, setFormData }), [formData]);
	return <FormDataContext value={value}>{children}</FormDataContext>;
};
