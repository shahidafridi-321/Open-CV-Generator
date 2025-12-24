import React, { useContext } from "react";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { sectionRendererMap } from "./sectionRenderers";
import { BiPhoneCall } from "react-icons/bi";
import { CVContext } from "../context/CVContextProvider";

const BASE_WIDTH = 794; // px (A4)
const BASE_HEIGHT = 1123;

export const TemplateRenderer = ({ template, data }) => {
	const context = useContext(CVContext);
	const finalFormData = data || context?.finalFormData || {};
	const renderSection = (config) => {
		const Component = sectionRendererMap[config.type];
		if (!Component) return null;
		return (
			<Component
				key={config.section}
				title={config.label}
				data={finalFormData[config.section]}
				field={config.field}
			/>
		);
	};

	if (template.layout === "twoColumn") {
		return (
			<div
				className="bg-white shadow"
				style={{
					width: BASE_WIDTH,
					height: BASE_HEIGHT,
				}}
			>
				<div className="w-full h-full grid grid-cols-5 items-start">
					<aside className="flex h-full  flex-col items-start text-left col-span-2 bg-[#1b3142] py-6 px-4 space-y-6 overflow-visible box-border">
						<div className="w-full flex-col space-y-3 justify-center items-center ">
							<h2 className="text-white text-[1.6rem] font-serif font-bold">
								{finalFormData?.personalInformation?.fullName || ""}
							</h2>
							<p className="font-['Roman'] text-gray-200 text-[0.9rem]">
								{finalFormData?.personalInformation?.professionalTitle || ""}
							</p>
							<div className="w-20 h-20 rounded-full flex items-center justify-center  transition">
								<img
									src={finalFormData?.personalInformation?.profilePhoto || ""}
									alt=""
									className="w-full h-full object-center rounded-full "
								/>
							</div>
							<div className="flex flex-col space-y-2 mt-2">
								<div className="flex items-center space-x-2">
									<MdEmail className="text-white text-[10px]"></MdEmail>
									<p className="text-white text-[10px]">
										{finalFormData?.[template.header.section]?.email || ""}
									</p>
								</div>
								<div className="flex items-center space-x-2">
									<BiPhoneCall className="text-white text-[10px]"></BiPhoneCall>
									<p className="text-white text-[10px]">
										<p>
											{finalFormData?.[template.header.section]?.phone || ""}
										</p>
									</p>
								</div>
								<div className="flex items-center space-x-2">
									<GoLocation className="text-white text-[10px]"></GoLocation>
									<p className="text-white text-[10px]">
										<p>
											{finalFormData?.[template.header.section]?.location || ""}
										</p>
									</p>
								</div>
							</div>
						</div>
						{template.columns.left.map(renderSection)}
					</aside>
					<main
						className={`box-border w-full h-full col-span-3 bg-white flex  flex-col py-9 px-6 space-y-8`}
					>
						{template.columns.right.map(renderSection)}
					</main>
				</div>
			</div>
		);
	}
	return null;
};
