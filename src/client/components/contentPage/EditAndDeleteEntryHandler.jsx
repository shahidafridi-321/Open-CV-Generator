import { useContext } from "react";
import { CVContext } from "../../context/CVContextProvider";
import { FormDataContext } from "../../context/FormDataContextProvider";

export const EditAndDelete = ({ entry, sectionName }) => {
	const { finalFormData, setFinalFormData } = useContext(CVContext);
	const { setFormData } = useContext(FormDataContext);

	const handleDelete = () => {
		const sectionData = finalFormData[sectionName].filter(
			(item) => item.id !== entry.id
		);

		setFinalFormData((prevData) => {
			return {
				...prevData,
				[sectionName]: [...sectionData],
			};
		});
	};
	return (
		<div
			className="w-full justify-between mt-4 flex gap-2 flex-wrap"
			key={entry.id}
		>
			<button
				onClick={() => setFormData(entry)}
				className="px-4 py-2 bg-gray-300 rounded"
			>
				{entry.degree || "Edit Entry"}
			</button>
			<button
				onClick={() => handleDelete()}
				className="px-4 py-2 bg-red-400 rounded"
			>
				Delete
			</button>
		</div>
	);
};
