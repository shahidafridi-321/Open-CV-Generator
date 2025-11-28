import React from "react";
import { features } from "../../../utils/featuresData";

export const Feacture = () => {
	return (
		<div className="w-full flex flex-col mt-4 mb-3">
			<h3 className="font-black text-shadow-transparent text-[min(5vw,62px)]">
				What's included in FlowCV's Free Plan{" "}
			</h3>
			<p className="text-gray-600 text-[min(4vw,22px)]">
				You won't find a more generous free plan among resume builders. Here's
				what you get with FlowCV's free plan.{" "}
			</p>
			<div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{features.map((feature) => (
					<div className="w-full flex flex-col gap-4 py-6" key={feature.title}>
						<div className="w-12 h-12 bg-[#200e32] p-2 flex items-center justify-center rounded">
							{feature.icon}
						</div>
						<h3 className="font-black text-shadow-transparent text-[min(4vw,16px)]">
							{feature.title}
						</h3>
						<p className="text-gray-500 text-[min(4vw,16px)]">
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
