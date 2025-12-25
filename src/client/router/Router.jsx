import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { About } from "../pages/About";
import { ResumesPage } from "../pages/ResumesPage";
import { CoverLetter } from "../pages/CoverLetter";
import { ResumePage } from "../pages/ResumePage";
import { ResumeContentPage } from "../pages/ResumeContentPage";
import { CVContextProvider } from "../context/CVContextProvider";
import { FormDataContextProvider } from "../context/FormDataContextProvider";
import { ResumePreviewPage } from "../pages/ResumePreviewPage";

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
				element: (
					<CVContextProvider>
						<FormDataContextProvider>
							<ResumesPage />,
						</FormDataContextProvider>
					</CVContextProvider>
				),
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
				element: (
					<CVContextProvider>
						<FormDataContextProvider>
							<ResumeContentPage />
						</FormDataContextProvider>
					</CVContextProvider>
				),
			},
		],
	},
	{
		path: "/resume-preview",
		element: (
			<CVContextProvider>
				<FormDataContextProvider>
					<ResumePreviewPage />
				</FormDataContextProvider>
			</CVContextProvider>
		),
	},
]);
