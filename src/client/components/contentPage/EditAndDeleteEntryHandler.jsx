import { useContext } from "react";
import { CVContext } from "../../context/CVContextProvider";
import { FormDataContext } from "../../context/FormDataContextProvider";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

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
				className=" bg-gray-300 rounded font-bold"
			>
				{/*  */}
				<div className="flex gap-2 justify-center items-center px-4 py-2">
					<BiEditAlt className=" text-gray-800 text-2xl"></BiEditAlt>
					{entry.degree || "Edit Entry"}
				</div>
			</button>
			<button
				onClick={() => handleDelete()}
				className=" bg-gray-300 rounded font-bold"
			>
				<div className="flex gap-2 justify-center items-center px-4 py-2">
					<MdDeleteForever className="text-red-500 text-2xl"></MdDeleteForever>{" "}
					Delete
				</div>
			</button>
		</div>
	);
};
