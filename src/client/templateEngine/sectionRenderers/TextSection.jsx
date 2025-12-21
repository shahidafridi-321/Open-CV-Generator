import React from "react";

export const TextSection = ({ data, title }) => {
	return (
		<section className="w-full flex flex-col space-y-3 justify-center items-center">
			<div className="w-full bg-[#283e4d] flex items-center justify-center py-1">
				<h3 className=" text-white text-[13px] font-bold">{title}</h3>
			</div>
			{data.map((item, i) => (
				<p className="w-full text-white text-[10px] no" key={i}>
					{item.description}
				</p>
			))}
		</section>
	);
};
