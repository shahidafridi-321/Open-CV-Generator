import React from "react";
import { PreviewShell } from "../templateEngine/PreviewShell";
import { TemplateRenderer } from "../templateEngine/TemplateRenderer";
import { twoColumnsSidebar } from "../../utils/templates/twoColumnsSidebar";
import { useLocation } from "react-router";

export const ResumePreviewPage = () => {
	const { state } = useLocation();
	return (
		<main className="w-full p-4">
			<PreviewShell>
				<TemplateRenderer template={twoColumnsSidebar} data={state} />
			</PreviewShell>
		</main>
	);
};
