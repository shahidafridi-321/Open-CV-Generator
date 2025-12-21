import React from "react";
import { CgProfile } from "react-icons/cg";

export const TextSection = ({ data, title }) => {
	if (!data || data.length === 0) return null;
	return (
		<section className="w-full flex flex-col space-y-3 ">
			<div className="w-full bg-[#283e4d] flex items-center justify-center py-1">
				<CgProfile className="text-white mr-2"></CgProfile>
				<h3 className=" text-white text-[13px] font-bold">{title}</h3>
			</div>
			{data.map((item, i) => (
				<p className="w-full text-white text-[13px] leading-relaxed" key={i}>
					{item.description}
				</p>
			))}
		</section>
	);
};
