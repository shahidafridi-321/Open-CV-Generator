import React, { useState } from "react";
import { faqs } from "../../../utils/FAQsData";

export const FAQs = () => {
	const [newFaqs, setNewFaqs] = useState(faqs);

	const handleShowDetails = (id) => {
		setNewFaqs(
			newFaqs.map((faq) =>
				faq.id === id ? { ...faq, showDetails: !faq.showDetails } : { ...faq }
			)
		);
	};
	return (
		<div className="w-full flex flex-col md:items-center space-y-8">
			<h2 className="font-black text-shadow-transparent text-[min(5vw,62px)]">
				Frequently Asked Questions
			</h2>
			<div className="w-full flex flex-col gap-1">
				{newFaqs.map((faq) => (
					<div
						className="w-full flex flex-col items-start sm:items-center  "
						key={faq.id}
						onClick={() => {
							handleShowDetails(faq.id);
						}}
					>
						<div
							className={`w-full sm:w-[72%] md:w-[60%] h-auto  px-2 py-4 ${
								faq.showDetails ? "rounded-b-none" : ""
							}  bg-neutral-200 rounded`}
						>
							<div className="w-full flex justify-between">
								<h3 className="font-bold text-[16px]">{faq.question}</h3>
								<button
									onClick={() => handleShowDetails(faq.id)}
									className="font-extrabold"
								>
									{faq.showDetails ? "X" : "+"}
								</button>
							</div>
						</div>
						{faq.showDetails ? (
							<div className="w-full flex sm:w-[72%] md:w-[60%] justify-start px-2   bg-neutral-200">
								<p className="cursor-default  text-gray-700 leading-relaxed">
									{faq.answer}
								</p>
							</div>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
};
