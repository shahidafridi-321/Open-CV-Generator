import React from "react";
import { reviews } from "../../../utils/reviewsData";

export const Reviews = () => {
	return (
		<div className="w-full flex flex-col space-y-4">
			<h2 className="font-black text-shadow-transparent text-[min(5vw,62px)]">
				Loved & Trusted by Millions of Users{" "}
			</h2>
			<p className="text-gray-600 text-[min(4vw,22px)]">
				Used by over 4 million job seekers worldwide, FlowCV is top-rated
				(4.9/5)* on Trustpilot, Product Hunt, and Google Reviews.
			</p>
			<div className="flex flex-col md:flex-row sm:justify-around items-center">
				{reviews.map((review) => (
					<div
						className="flex flex-col space-y-3 w-[400px] p-8 shadow-2xl bg-gray-200 rounded-4xl mt-6"
						key={review.name}
					>
						<p className="italic text-[16px]">{review.comment}</p>
						<div className="w-full flex space-x-2">
							<div>{review.icon}</div>
							<div className="w-full flex flex-col">
								<p className="font-bold text-base lg:text-lg text-primaryBlack leading-[1.4] lg:leading-[1.4]">
									{review.name}
								</p>
								<a href="#" className="text-sm text-gray-700 underline">
									{review.source}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<p className="text-base text-gray-500 italic mt-4">
				* ratings as of Nov 2025
			</p>
		</div>
	);
};
