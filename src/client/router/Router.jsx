import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { About } from "../pages/About";
import { ResumePage } from "../pages/ResumePage";
import { CoverLetter } from "../pages/CoverLetter";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/home",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/resumes",
				element: <ResumePage />,
			},
			{
				path: "/cover-letters",
				element: <CoverLetter />,
			},
		],
	},
]);
