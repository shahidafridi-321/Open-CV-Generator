import React, { useRef, useState } from "react";
import { personalFormControls } from "../../utils/personalFormControls";
import { defaultData } from "../../utils/resumePopulatingData";

export const Practice = () => {
	const [newFormData, setNewFormData] = useState(defaultData);
	const fileInputRef = useRef(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		console.log(file);
	};

	const handleDivClick = () => {
		fileInputRef.current.click();
	};

	const handleInputField = (dataObject) => {
		switch (dataObject.componentType) {
			case "input":
				return (
					<div className="w-full flex flex-col gap-1 col-span-2 md:col-span-1">
						<label
							htmlFor={dataObject.name}
							className="text-sm font-semibold text-gray-800"
						>
							{dataObject.label}
						</label>

						<input
							type={dataObject.type}
							placeholder={dataObject.placeholder}
							className="w-full bg-gray-100 text-gray-700 rounded-lg outline-none px-4 py-3 shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-500"
							value={newFormData[0].personalDetails[dataObject.name] || ""}
							onChange={(e) => {
								setNewFormData((prevData) => {
									const updatedData = [...prevData];
									updatedData[0].personalDetails[dataObject.name] =
										e.target.value;
									return updatedData;
								});
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
							<span className="text-gray-600 text-sm">Upload Photo</span>

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
		<div className="w-full md:w-[50%] min-h-[80vh] flex items-start justify-center py-10">
			<div className="w-[95%] md:w-[70%] lg:w-[55%] bg-white rounded-xl p-8 space-y-6">
				<form className="w-full flex flex-col gap-6 justify-center items-center">
					{personalFormControls[0].headers.map((item, index) => (
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
					{personalFormControls[1].body.map((item, index) => (
						<div key={index} className="w-full">
							<div className="w-full">{handleInputField(item)}</div>
						</div>
					))}
					<button
						onClick={(e) => {
							e.preventDefault();
							console.log(newFormData);
						}}
					>
						submit
					</button>
				</form>
			</div>
		</div>
	);
};
