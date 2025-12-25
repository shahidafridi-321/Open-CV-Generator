import React from "react";
import { PreviewShell } from "../templateEngine/PreviewShell";
import { TemplateRenderer } from "../templateEngine/TemplateRenderer";
import { twoColumnsSidebar } from "../../utils/templates/twoColumnsSidebar";
export const ResumePreviewPage = () => {
	return (
		<main className="w-full p-4">
			<PreviewShell>
				<TemplateRenderer template={twoColumnsSidebar} />
			</PreviewShell>
		</main>
	);
};
