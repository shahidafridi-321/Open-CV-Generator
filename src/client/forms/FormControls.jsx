import React, { useContext, useState } from "react";
import { CVContext } from "../context/CVContextProvider";

export const FormControls = ({ formControls, sectionName }) => {
	const { finalFormData, setFinalFormData } = useContext(CVContext);
	const [formData, setFormData] = useState({});

	const handleInputField = (field, index) => {
		switch (field.componentType) {
			case "textarea":
				return (
					<div className="w-full flex flex-col gap-1">
						<label
							htmlFor={field.name}
							className="text-sm font-semibold text-gray-800"
						>
							{field.label}
						</label>
						<textarea
							className="w-full min-h-[124px] max-h-[1274] bg-gray-100 text-gray-700 rounded-lg outline-none px-4 py-3 shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-500 resize-none"
							name={field.name}
							id={field.name}
							placeholder={field.placeholder}
							value={formData[field.name] || ""}
							onChange={(e) => {
								setFormData((prevData) => ({
									...prevData,
									[field.name]: e.target.value,
								}));
							}}
						></textarea>
					</div>
				);
			case "input":
				return (
					<div className="w-full flex flex-col gap-1 ">
						<label
							htmlFor={field.name}
							className="text-sm font-semibold text-gray-800"
						>
							{field.label}
						</label>

						<input
							id={field.name}
							type={field.type}
							placeholder={field.placeholder}
							className="w-full bg-gray-100 text-gray-700 rounded-lg outline-none px-4 py-3 shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-500"
							value={formData[field.name] || ""}
							onChange={(e) => {
								setFormData((prevData) => ({
									...prevData,
									[field.name]: e.target.value,
								}));
							}}
						/>
					</div>
				);
		}
	};

	return (
		<div className="w-full flex items-start justify-center py-10">
			<div className="w-full bg-white rounded-xl p-8 space-y-6">
				<form className="w-full flex flex-col gap-6 justify-center items-center">
					{formControls.map((controlItem, index) => (
						<div
							key={index}
							className="w-full flex flex-col gap-2 justify-center"
						>
							<div>{handleInputField(controlItem, index)}</div>
						</div>
					))}
					<button
						onClick={(e) => {
							e.preventDefault();
							setFinalFormData((prevData) => ({
								...prevData,
								[sectionName]: [...prevData[sectionName], { ...formData }],
							}));
							setFormData({});
						}}
						className="w-[50%] py-4 bg-green-400 hover:bg-green-500 rounded-xl text-violet-100 font-bold"
					>
						submit
					</button>
				</form>
			</div>
		</div>
	);
};
