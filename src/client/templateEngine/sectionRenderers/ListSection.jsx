import React from "react";
import { Dots } from "./Dots";

export const ListSection = ({ title, data, field }) => {
	if (!data || data.length === 0) return null;

	return (
		<section className="w-full flex flex-col space-y-3 ">
			<div className="w-full bg-[#283e4d] flex items-center justify-center py-1">
				<h3 className=" text-white text-[13px] font-bold">{title}</h3>
			</div>
			{field === "language" && (
				<ul className="space-y-1">
					{data.map((item, i) => (
						<li
							key={i}
							className="flex justify-between items-center text-white text-[14px]"
						>
							<span>{item.language}</span>
							<Dots level={item.level} />
						</li>
					))}
				</ul>
			)}
			{field === "award" && (
				<div className="space-y-2">
					{data.map((item, i) => (
						<div key={i}>
							<h4 className="text-white text-[13px] font-bold">{item.award}</h4>
							<p className="text-white text-[11px]">
								{item.issuer} • {item.date}
							</p>
						</div>
					))}
				</div>
			)}
			{field === "reference" && (
				<div className="space-y-2">
					{data.map((item, i) => (
						<div key={i}>
							<h4 className="text-white text-[13px] font-bold">{item.name}</h4>
						</div>
					))}
				</div>
			)}
		</section>
	);
};
