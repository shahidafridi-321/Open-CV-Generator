import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";

export const MainLayout = () => {
	return (
		<div
			className="flex flex-col min-h-screen  text-gray-900  inset-0 z-0"
			style={{
				background:
					"radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
			}}
		>
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
