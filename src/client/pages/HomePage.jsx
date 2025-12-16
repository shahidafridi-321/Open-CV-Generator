import React from "react";
import { Feacture } from "../components/home/Feacture";
import { Testimonials } from "../components/home/Testimonials";
import { Gallery } from "../components/Gallery";
import { Works } from "../components/home/Works";
import { Hero } from "../components/home/Hero";
import { Reviews } from "../components/home/Reviews";
import { FAQs } from "../components/home/FAQs";

export const HomePage = () => {
	return (
		<main className=" flex flex-col grow w-full px-6 py-4 ">
			{/* Hero section */}
			<Hero />
			<div className="w-full h-1px bg-gray-300 my-16 lg:my-20"></div>

			{/* Testimonials section */}
			<Testimonials />

			{/* Works section */}
			<Works />

			{/* Gallery section*/}
			<Gallery />

			{/* Features section */}
			<Feacture />
			<div className="w-full h-1px bg-gray-300 my-16 lg:my-20"></div>

			{/* Reviews Section */}
			<Reviews />
			<div className="w-full h-1px bg-gray-300 my-16 lg:my-20"></div>

			{/* Frequently Asked Questions  */}
			<FAQs />
			<div className="w-full h-1px bg-gray-300 my-16 lg:my-20"></div>
		</main>
	);
};
