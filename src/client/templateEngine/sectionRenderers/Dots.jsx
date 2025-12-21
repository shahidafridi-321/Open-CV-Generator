export const Dots = ({ level, max = 5 }) => {
	return (
		<div className="flex gap-1">
			{Array.from({ length: max }).map((_, index) => (
				<span
					key={index}
					className={`w-2 h-2 rounded-full ${
						index < level ? "bg-white" : "bg-gray-500"
					}`}
				/>
			))}
		</div>
	);
};
