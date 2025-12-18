export const profileFormControls = [
	{
		name: "profile",
		label: "Professional Profile",
		placeholder:
			"Write a professional summary or objective that highlights your key qualification and career goals.",
		componentType: "textarea",
		type: "text",
	},
];

export const educationFormControls = [
	{
		name: "degree",
		label: "Degree",
		placeholder: "Enter Degree/Field of study",
		componentType: "input",
		type: "text",
	},
	{
		name: "school",
		label: "School",
		placeholder: "Enter School/University",
		componentType: "input",
		type: "text",
	},
	{
		name: "startDate",
		label: "Start Date",
		placeholder: "Enter Start Date",
		componentType: "input",
		type: "date",
	},
	{
		name: "endDate",
		label: "End Date",
		placeholder: "Enter End Date",
		componentType: "input",
		type: "date",
	},
	{
		name: "description",
		label: "Description",
		placeholder: "Add a description of your education entry...",
		componentType: "textarea",
		type: "text",
	},
];

export const professionalExperieceFormControls = [
	{
		name: "jobTitle",
		label: "Job Title",
		placeholder: "Enter Job Title",
		componentType: "input",
		type: "input",
	},
	{
		name: "employer",
		label: "Employer",
		placeholder: "Enter employer",
		componentType: "input",
		type: "input",
	},
	{
		name: "startDate",
		label: "Start Date",
		placeholder: "Enter Start Date",
		componentType: "input",
		type: "date",
	},
	{
		name: "endDate",
		label: "End Date",
		placeholder: "Enter End Date",
		componentType: "input",
		type: "date",
	},
	{
		name: "location",
		label: "Location",
		placeholder: "City,Country",
		type: "text",
		componentType: "input",
	},
	{
		name: "description",
		label: "Description",
		placeholder: "Describe your role & achievements",
		componentType: "textarea",
		type: "text",
	},
];

export const skillsFormControls = [
	{
		name: "skill",
		label: "Skill",
		placeholder: "Enter Skill",
		componentType: "input",
		type: "text",
	},
	{
		name: "information",
		label: "Information / Sub - skills",
		placeholder: "Enter information or a sub-skill",
		componentType: "input",
		type: "text",
	},
	{
		name: "skillLevel",
		label: "Skill Level",
		placeholder: "Select skill level",
		componentType: "select",
		type: "text",
		options: ["Beginner", "Amatuer", "Competent", "Proficient", "Expert"],
	},
];

export const projectsFormControls = [
	{
		name: "projectTitle",
		label: "Project Title",
		placeholder: "Enter Project Title",
		componentType: "input",
		type: "input",
	},
	{
		name: "subTitle",
		label: "Sub title",
		placeholder: "Enter sub title",
		componentType: "input",
		type: "input",
	},
	{
		name: "startDate",
		label: "Start Date",
		placeholder: "Enter Start Date",
		componentType: "input",
		type: "date",
	},
	{
		name: "endDate",
		label: "End Date",
		placeholder: "Enter End Date",
		componentType: "input",
		type: "date",
	},
	{
		name: "description",
		label: "Description",
		placeholder: "Describe the project and its outcomes.",
		componentType: "textarea",
		type: "text",
	},
];

export const languagesFormControls = [
	{
		name: "language",
		label: "Language",
		placeholder: "Enter language",
		componentType: "input",
		type: "input",
	},
	{
		name: "additionalInformation",
		label: "Additional information",
		placeholder: "e.g. CO2, 4+, TOEFL, IELTS.",
		componentType: "textarea",
		type: "text",
	},
	{
		name: "languageLevel",
		label: "Language Level",
		placeholder: "Select language level",
		componentType: "select",
		type: "text",
		options: ["Basic", "Conversetional", "Proficient", "Fluent", "Native"],
	},
];

export const awardsFormControls = [
	{
		name: "award",
		label: "Award",
		placeholder: "Enter Award",
		componentType: "input",
		type: "input",
	},
	{
		name: "issuer",
		label: "Issuer",
		placeholder: "Enter Issuer",
		componentType: "input",
		type: "input",
	},
	{
		name: "date",
		label: "Date",
		placeholder: "Enter Date",
		componentType: "input",
		type: "date",
	},
	{
		name: "description",
		label: "Description",
		placeholder: "Describe your award...",
		componentType: "textarea",
		type: "text",
	},
];

export const referenciesFormControls = [
	{
		name: "name",
		label: "Name",
		placeholder: "Enter The Full Name",
		type: "text",
		componentType: "input",
	},
	{
		name: "jobTitle",
		label: "Job Title",
		placeholder: "Enter Job Title",
		componentType: "input",
		type: "input",
	},
	{
		name: "organization",
		label: "Organization",
		placeholder: "Enter Organization",
		componentType: "input",
		type: "input",
	},
	{
		name: "email",
		label: "Email",
		placeholder: "Enter email",
		type: "email",
		componentType: "input",
	},
	{
		name: "phone",
		label: "Phone",
		placeholder: "Enter phone",
		type: "number",
		componentType: "input",
	},
];

export const sections = [
	{ key: "profile", label: "Profile" },
	{ key: "education", label: "Education" },
	{ key: "professionalExperience", label: "Professional Experience" },
	{ key: "skills", label: "Skills" },
	{ key: "projects", label: "Projects" },
	{ key: "languages", label: "Languages" },
	{ key: "awards", label: "Awards" },
	{ key: "references", label: "References" },
];
