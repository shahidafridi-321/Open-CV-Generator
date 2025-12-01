export let personalFormControls = [
	{
    headers: [
    {
				name: "profilePhoto",
				label: "Photo",
				placeholder: "Images",
				type: "file",
				componentType: "file",
			},
			{
				name: "fullName",
				label: "Full Name",
				placeholder: "Enter your title, first and last name",
				type: "text",
				componentType: "input",
			},
			{
				name: "professionalTitle",
				label: "Professional title",
				placeholder: "Target Position or current role.",
				type: "text",
				componentType: "input",
			},
			
		],
  },
  {
    body: [
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
	{
		name: "location",
		label: "Location",
		placeholder: "City,Country",
		type: "text",
		componentType: "input",
	},

    ]
  }
	];
