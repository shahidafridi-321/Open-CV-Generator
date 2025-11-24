import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen bg-[#f0eeeb] text-gray-900">
			<div className="w-full sticky top-0 z-50 p-6">
				<Header />
			</div>
			<main className="flex-grow w-full max-w-7xl mx-auto px-4 py-6">
				{/* Main content will go here */}
			</main>
			<Footer />
		</div>
	);
};
