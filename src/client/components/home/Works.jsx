import React from "react";
import { works } from "../../../utils/worksSectionData";

export const Works = () => {
	return (
		<div className="w-full grid  gap-12 sm:gap-26 place-content-center place-items-center mt-10 mb-40">
			<h2 className="font-black text-shadow-transparent text-[min(5vw,62px)]">
				How FlowCV works
			</h2>
			{works.map((work) => (
				<div
					className="w-full flex space-y-10 flex-col sm:space-y-0 sm:flex-row sm:space-x-20 items-center justify-center"
					key={work.title}
				>
					<div className="w-full sm:w-[300px] md:w-[500px]">
						<img
							src={work.imageURL}
							alt={work.title}
							className="w-full shadow rounded-2xl"
						/>
					</div>
					<div className="flex flex-col gap-4 max-w-[500px]">
						<h3 className="text-[min(4vw,42px)]">{work.title}</h3>
						<p className="text-gray-600 text-[min(4vw,22px)]">
							{work.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};
