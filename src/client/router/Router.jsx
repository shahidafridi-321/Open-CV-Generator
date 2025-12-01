import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { About } from "../pages/About";
import { ResumesPage } from "../pages/ResumesPage";
import { CoverLetter } from "../pages/CoverLetter";
import { ResumePage } from "../pages/ResumePage";
import { ResumeContentPage } from "../pages/ResumeContentPage";
import { Practice } from "../pages/Practice";

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
				element: <ResumesPage />,
			},
			{
				path: "/cover-letters",
				element: <CoverLetter />,
			},
			{
				path: "/resume",
				element: <ResumePage />,
			},
			{
				path: "/resume/content",
				element: <ResumeContentPage />,
			},
			{
				path: "/practice",
				element: <Practice />,
			},
		],
	},
]);
