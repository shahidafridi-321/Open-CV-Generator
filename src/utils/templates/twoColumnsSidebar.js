export const twoColumnsSidebar = {
	id: "twoColumnsSidebar",
	name: "Two column Sidebar",
	layout: "twoColumn",
	header: {
		section: "personalInformation",
		showAvatar: true,
	},
	columns: {
		left: [
			{
				section: "profile",
				type: "text",
				label: "Profile",
				field: "description",
			},
			{
				section: "languages",
				type: "list",
				label: "Languages",
				field: "language",
			},
			{ section: "awards", type: "list", label: "Awards", field: "award" },
		],
		right: [
			{
				section: "professionalExperience",
				type: "timeline",
				label: "Experience",
			},
			{
				section: "education",
				type: "timeline",
				label: "Education",
			},
			{ section: "skills", type: "tags", label: "Skills", field: "skil" },
		],
	},
	styles: {
		leftSideBg: "bg-[#1b3142]",
		rightSideBg: "bg-white",
		leftSideFont: "Roman",
		padding: "py-16 px-12",
		rightSideFont: "font-sans text-black",
	},
};
