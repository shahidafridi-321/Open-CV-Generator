import React, { useContext, useState } from "react";
import { CVContext } from "../context/CVContextProvider";

export const FormEngine = ({
	formControls,
	sectionName,
	formData,
	setFormData,
}) => {
	const { finalFormData, setFinalFormData } = useContext(CVContext);

	const handleInputField = (field) => {
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
			case "select":
				return (
					<div className="w-full flex flex-col gap-1 ">
						<label
							htmlFor={field.name}
							className="text-sm font-semibold text-gray-800"
						>
							{field.label}
						</label>
						<select
							name={field.name}
							id={field.name}
							value={formData[field.name] || ""}
							className="w-full bg-gray-100 text-gray-700 rounded-lg outline-none px-4 py-3 shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-500"
							onChange={(e) => {
								setFormData((prevData) => ({
									...prevData,
									[field.name]: e.target.value,
								}));
							}}
						>
							<option value="" disabled>
								{field.placeholder}
							</option>

							{field.options.map((option, index) => (
								<option value={option} key={index}>
									{option}
								</option>
							))}
						</select>
					</div>
				);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFinalFormData((prevData) => {
			const sectionData = finalFormData[sectionName] || [];
			if (formData.id) {
				return {
					...prevData,
					[sectionName]: sectionData.map((item) =>
						item.id === formData.id ? formData : item
					),
				};
			}
			return {
				...prevData,
				[sectionName]: [
					...sectionData,
					{ ...formData, id: crypto.randomUUID() },
				],
			};
		});

		setFormData({});
	};

	return (
		<div className="w-full flex items-start justify-center py-10">
			<div className="w-full bg-white rounded-xl p-8 space-y-6">
				<form
					className="w-full flex flex-col gap-6 justify-center items-center"
					onSubmit={handleSubmit}
				>
					{formControls.map((field) => (
						<div
							key={field.name}
							className="w-full flex flex-col gap-2 justify-center"
						>
							<div>{handleInputField(field)}</div>
						</div>
					))}
					<button className="w-1/2 py-4 bg-green-500 rounded-xl text-white font-bold">
						{formData.id ? "Update" : "Add"}
					</button>
				</form>
			</div>
		</div>
	);
};
