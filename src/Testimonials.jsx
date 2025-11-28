import React from "react";
import { testimonials } from "./client/data/testimonialsData";

export const Testimonials = () => {
	return (
		<div className="w-full flex flex-col  items-start sm:flex-row pb-24 sm:items-center sm:justify-around">
			{testimonials.map((testimonial) => (
				<div
					className="flex sm:flex-col gap-5 items-center justify-center mb-8 sm:mb-0"
					key={testimonial.description}
				>
					{testimonial.icon}
					<p className="text-xl font-bold leading-tight tracking-tight sm:text-center sm:text-lg md:text-xl lg:text-2xl text-wrapped ">
						{testimonial.description}
					</p>
				</div>
			))}
		</div>
	);
};
