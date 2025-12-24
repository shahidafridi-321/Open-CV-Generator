import React, { useEffect, useRef, useState } from "react";

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

export const PreviewShell = ({ children, maxScale = 1 }) => {
	const ref = useRef(null);
	const [scale, setScale] = useState(1);

	useEffect(() => {
		const updateScale = () => {
			if (!ref.current) return;

			const containerWidth = ref.current.offsetWidth;
			const nextScale = Math.min(containerWidth / A4_WIDTH, maxScale);

			setScale(nextScale);
		};

		updateScale();
		window.addEventListener("resize", updateScale);
		return () => window.removeEventListener("resize", updateScale);
	}, [maxScale]);

	return (
		<div
			ref={ref}
			className="w-full h-full overflow-hidden flex justify-center items-start"
		>
			<div
				style={{
					width: A4_WIDTH,
					minHeight: A4_HEIGHT,
					transform: `scale(${scale})`,
					transformOrigin: "top center",
				}}
			>
				{children}
			</div>
		</div>
	);
};
