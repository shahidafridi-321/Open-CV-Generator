import React, { useContext, useRef, useState } from "react";
import {
	initalPersonalFormData,
	personalFormControls,
} from "../../utils/personalFormControls";
import { CVContext } from "../context/CVContextProvider";

export const PersonalInfoForm = () => {
	const [formData, setFormData] = useState(initalPersonalFormData);
	const { setFinalFormData } = useContext(CVContext);
	const fileInputRef = useRef(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (!file) return;
		const imageURL = URL.createObjectURL(file);
		setFormData((prevData) => ({
			...prevData,
			profilePhoto: imageURL,
		}));
	};

	const handleDivClick = () => {
		fileInputRef.current.click();
	};

	const handleInputField = (dataObject) => {
		switch (dataObject.componentType) {
			case "input":
				return (
					<div className="w-full flex flex-col gap-1 ">
						<label
							htmlFor={dataObject.name}
							className="text-sm font-semibold text-gray-800"
						>
							{dataObject.label}
						</label>

						<input
							id={dataObject.name}
							type={dataObject.type}
							placeholder={dataObject.placeholder}
							className="w-full bg-gray-100 text-gray-700 rounded-lg outline-none px-4 py-3 shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-500"
							value={formData[dataObject.name] || ""}
							onChange={(e) => {
								setFormData((prevData) => ({
									...prevData,
									[dataObject.name]: e.target.value,
								}));
							}}
						/>
					</div>
				);

			case "file":
				return (
					<div className="w-full flex flex-col items-center col-span-2 md:col-span-1">
						<label className="text-sm font-semibold text-gray-800 mb-2">
							{dataObject.label}
						</label>

						<div
							onClick={handleDivClick}
							className="w-[160px] h-[160px] rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition"
						>
							{formData.profilePhoto ? (
								<img
									src={formData.profilePhoto}
									alt=""
									className="w-full h-full rounded-full object-center"
								/>
							) : (
								<span className="text-gray-600 text-sm">Upload Photo</span>
							)}
							<input
								type="file"
								ref={fileInputRef}
								className="hidden"
								onChange={handleImageChange}
							/>
						</div>
					</div>
				);
		}
	};

	return (
		<div className="w-full flex items-start justify-center py-10">
			<div className="w-full bg-white rounded-xl p-8 space-y-6">
				<form className="w-full flex flex-col gap-6 justify-center items-center">
					{personalFormControls.headers.map((item, index) => (
						<div key={index} className="w-full">
							{item.componentType === "file" ? (
								<div className="w-full">{handleInputField(item)}</div>
							) : (
								<div className="w-full">{handleInputField(item)}</div>
							)}
						</div>
					))}
				</form>
				<form className="w-full flex flex-col gap-6 justify-center items-center">
					{personalFormControls.body.map((item, index) => (
						<div key={index} className="w-full">
							<div className="w-full">{handleInputField(item)}</div>
						</div>
					))}
					<button
						onClick={(e) => {
							e.preventDefault();
							setFinalFormData((prevData) => ({
								...prevData,
								personalInformation: {
									...formData,
								},
							}));
							setFormData(initalPersonalFormData);
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
