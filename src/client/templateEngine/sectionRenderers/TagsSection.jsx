import React from "react";

export const TagsSection = ({ title, data }) => {
	if (!data || data.length === 0) return null;
	return (
		<section className="w-full flex flex-col space-y-3 px-8">
			<div className="w-full bg-[#eadfdf] flex items-center justify-center py-1">
				<h3 className=" text-[#131313] text-[13px] font-bold">{title}</h3>
			</div>
			{
				<ul className="space-y-1">
					{data.map((item, i) => (
						<li key={i} className="list-disc text-[#636363] text-[12px]">
							{item.skil}
						</li>
					))}
				</ul>
			}
		</section>
	);
};
