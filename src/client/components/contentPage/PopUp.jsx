import React, { useContext } from "react";
import { CVContext } from "../../context/CVContextProvider";
import { sections } from "../../../utils/config";

export const PopUp = ({ setShowPopup }) => {
	const { setFinalFormData, selectedSections, setSelectedSections } =
		useContext(CVContext);
	return (
		<div className="w-full bg-gray-200  rounded-xl flex  flex-col gap-3 col-span-5 shadow-2xl p-10 ">
			<div className="w-full flex flex-col space-y-3 md:flex-row justify-between md:items-center px-6 py-4">
				<h2 className="text-4xl font-bold">Add Section</h2>
				<button
					className="bg-pink-500 hover:bg-pink-600 w-40 py-2 px-6 rounded text-gray-100 font-bold transition-all"
					onClick={() => setShowPopup(false)}
				>
					Close
				</button>
			</div>
			<div className="flex flex-wrap items-center gap-5">
				{sections.map((section, index) => (
					<div
						key={index}
						className="max-w-[350px] rounded-xl shadow px-6 py-4 bg-gray-100"
						onClick={() => {
							const exists = selectedSections.some(
								(s) => s.key === section.key
							);
							if (!exists) {
								setSelectedSections([...selectedSections, section]);
								setFinalFormData((prevData) => ({
									...prevData,
									[section.key]: [],
								}));
							}
							setShowPopup(false);
						}}
					>
						<h2 className="text-xl font-bold">{section.label}</h2>
						<p className="text-[16px] text-gray-400">
							Make a great first impression by presenting yourself in a few
							sentences.
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
