import React from "react";
import { ImageCruser } from "../components/home/ImageCruser";

export const Gallery = () => {
	return (
		<div className="w-full flex flex-col mt-4 mb-34">
			<h2 className="font-black text-shadow-transparent text-[min(5vw,62px)]">
				Choose from 50+ Resume Templates
			</h2>
			<p className="text-gray-600 text-[min(4vw,22px)]">
				Our free resume templates help you create a professional resume that
				stands out.
			</p>
			<ImageCruser />
			<button className=" border-2 px-6 py-4 rounded-xl border-violet-950 w-auto self-center font-bold">
				All Resume Templates
			</button>
		</div>
	);
};
