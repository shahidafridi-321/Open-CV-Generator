import React, { useContext, useState } from "react";
import { CVContext } from "../context/CVContextProvider";

import { PopUp } from "../components/contentPage/PopUp";
import { SectionFormRenderer } from "../components/contentPage/SectionFormRenderer";
import { TemplateRenderer } from "../templateEngine/TemplateRenderer";
import { twoColumnsSidebar } from "../../utils/templates/twoColumnsSidebar";
import { PreviewShell } from "../templateEngine/PreviewShell";
import { useNavigate } from "react-router";
import { BiSave } from "react-icons/bi";

export const ResumeContentPage = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [opensection, setOpensection] = useState(null);
	const { finalFormData, allCvs, setAllCvs, selectedSections } =
		useContext(CVContext);
	const navigate = useNavigate();

	return (
		<main className="w-full min-h-screen p-4 grid grid-cols-5 gap-5">
			{/* Sidebar */}
			{!showPopup ? (
				<>
					<div className="col-span-5 md:col-span-2 h-full md:flex md:flex-col space-y-3 rounded shadow bg-gray-100 p-4">
						<div className="w-full flex flex-col gap-2">
							{selectedSections.map(
								(selectedSection) =>
									selectedSection.key !== "id" && (
										<div
											className="w-full self-stretch"
											key={selectedSection.key}
										>
											<button
												className="w-full py-3 px-16 rounded font-bold bg-gray-300"
												onClick={() =>
													setOpensection(
														opensection === selectedSection.key
															? null
															: selectedSection.key
													)
												}
											>
												{opensection === selectedSection.key ? "Hide" : "Edit"}{" "}
												{selectedSection.label}
											</button>

											<SectionFormRenderer
												selectedSection={selectedSection.key}
												opensection={opensection}
											/>
										</div>
									)
							)}
						</div>

						<button
							onClick={() => setShowPopup(!showPopup)}
							className="bg-pink-500 hover:bg-pink-600 w-full py-2 px-6 rounded text-gray-100 font-bold transition-all"
						>
							Add Section
						</button>
						<button
							onClick={() => {
								const newCvsList = allCvs.filter(
									(cv) => cv.id !== finalFormData.id
								);
								setAllCvs([...newCvsList, finalFormData]);
								navigate("/resumes");
							}}
							className="w-full flex gap-6 justify-center items-center bg-green-500 hover:bg-green-600  py-2 px-6 rounded text-gray-100 font-bold transition-all"
						>
							Save Resume <BiSave></BiSave>
						</button>
					</div>

					{/* Main Content */}
					<div className="col-span-5 md:col-span-3 flex flex-col ">
						<PreviewShell>
							{<TemplateRenderer template={twoColumnsSidebar} />}
						</PreviewShell>
					</div>
				</>
			) : (
				<PopUp setShowPopup={setShowPopup} />
			)}
		</main>
	);
};
