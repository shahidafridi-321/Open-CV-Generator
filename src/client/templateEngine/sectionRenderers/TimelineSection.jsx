import React from "react";

export const TimelineSection = ({ title, data }) => {
	if (!data || data.length === 0) return null;
	return (
		<section className="w-full flex flex-col space-y-3 px-8">
			<div className="w-full bg-[#eadfdf] flex items-center justify-center py-1">
				<h3 className=" text-[#131313] text-[13px] font-bold">{title}</h3>
			</div>
			{data.map((item, i) => (
				<div key={i} className="space-y-1">
					<h4 className="text-[#131313] text-[15px] font-extrabold">
						{item.jobTitle || item.degree}
					</h4>
					<h5 className="text-[#636363] text-[14px] font-semibold">
						{item.employer || item.school}
					</h5>
					<p className="text-[#636363] text-[12px]">
						{item.startDate} - {item.endDate}
					</p>
					<p className="text-[#636363] text-[12px]">{item.description}</p>
				</div>
			))}
		</section>
	);
};
