import React from "react";
import { defaultData } from "../../utils/resumePopulatingData";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { sectionRendererMap } from "./sectionRenderers";

export const TemplateRenderer = ({ template }) => {
	if (!template) {
		return null;
	}

	const renderSection = (config) => {
		const Component = sectionRendererMap[config.type];
		if (!Component) return null;
		return (
			<Component
				key={config.section}
				title={config.label}
				data={defaultData[config.section]}
				field={config.field}
			/>
		);
	};

	if (template.layout === "twoColumn") {
		return (
			<div className="w-full h-full grid grid-cols-5 font-['Roman'] ">
				<aside
					className={`flex flex-col  items-center col-span-2 bg-[#1b3142] py-9 px-6 space-y-8`}
				>
					<div className="w-full flex-col space-y-3 justify-center items-center ">
						<h2 className="text-white text-[min(4vw,32px)] font-serif font-bold">
							{defaultData.personalInformation.fullName}
						</h2>
						<p className="font-['Roman'] text-gray-200 text-[min(3vw,16px)]">
							{defaultData.personalInformation.professionalTitle}
						</p>
						<div className="w-20 h-20 rounded-full flex items-center justify-center  transition">
							<img
								src="../../../public/images/9.webp"
								alt=""
								className="w-full h-full object-center rounded-full "
							/>
						</div>

						<div className="flex flex-col space-y-2 mt-2">
							<div className="flex items-center space-x-2">
								<MdEmail className="text-white text-[10px]"></MdEmail>
								<p className="text-white text-[10px]">
									{defaultData[template.header.section].email}
								</p>
							</div>
							<div className="flex items-center space-x-2">
								<BiPhoneCall className="text-white text-[10px]"></BiPhoneCall>
								<p className="text-white text-[10px]">
									{defaultData[template.header.section].phone}
								</p>
							</div>
							<div className="flex items-center space-x-2">
								<GoLocation className="text-white text-[10px]"></GoLocation>
								<p className="text-white text-[10px]">
									{defaultData[template.header.section].location}
								</p>
							</div>
						</div>
					</div>
					{template.columns.left.map(renderSection)}
				</aside>
				<main className={`col-span-3 bg-white`}>
					{template.columns.right.map(renderSection)}
				</main>
			</div>
		);
	}
	return null;
};

{
	/* <div className="w-full">
						<div className="w-full bg-[#283e4d] flex items-center justify-center">
							<h3 className=" text-white text-[13px] font-bold mb-2">
								{template.leftSide[0].label}
							</h3>
						</div>
						<p className="text-white text-[10px] ">
							{defaultData[template.leftSide[0].key][0].description}
						</p>
					</div>
					<div className="w-full">
						<div className="w-full bg-[#283e4d] flex items-center justify-center">
							<h3 className=" text-white text-[13px] font-bold mb-2">
								{template.leftSide[1].label}
							</h3>
						</div>
						{defaultData[template.leftSide[1].key].map((section) => (
							<p key={section} className="text-white text-[10px]">
								{section.language}
							</p>
						))}
					</div> */
}
