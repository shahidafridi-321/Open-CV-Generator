import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";

export const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen bg-[#f0eeeb] text-gray-900">
			<div className="w-full sticky top-0 z-50 p-6">
				<Header />
			</div>
			<Outlet />
			<div className="w-full">
				<Footer />
			</div>
		</div>
	);
};
