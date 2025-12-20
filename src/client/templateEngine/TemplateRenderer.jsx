import React from "react";
import { CVContext } from "../context/CVContextProvider";
import { defaultData } from "../../utils/resumePopulatingData";
import { MdEmail } from "react-icons/md";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

export const TemplateRenderer = ({ template }) => {
	if (template.layout === "twoColumn") {
		return (
			<div className="w-full h-full grid grid-cols-5 font-['Roman'] ">
				<div
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
									{defaultData[template.header.key].email}
								</p>
							</div>
							<div className="flex items-center space-x-2">
								<BiPhoneCall className="text-white text-[10px]"></BiPhoneCall>
								<p className="text-white text-[10px]">
									{defaultData[template.header.key].phone}
								</p>
							</div>
							<div className="flex items-center space-x-2">
								<GoLocation className="text-white text-[10px]"></GoLocation>
								<p className="text-white text-[10px]">
									{defaultData[template.header.key].location}
								</p>
							</div>
						</div>
					</div>

					<div className="w-full">
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
					</div>
				</div>
				<div className={`col-span-3 bg-white`}></div>
			</div>
		);
	}
	return <div className="w-full bg-red-400 h-full">TemplateRenderer</div>;
};
