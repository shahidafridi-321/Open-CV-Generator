import React, { useEffect, useState } from "react";

export const ImageCruser = () => {
	const images = [
		"/images/1.webp",
		"/images/2.webp",
		"/images/3.webp",
		"/images/4.webp",
		"/images/5.webp",
		"/images/6.webp",
		"/images/7.webp",
		"/images/8.webp",
		"/images/9.webp",
		"/images/10.webp",
		"/images/480.webp",
	];

	const [imageIndex, setImageIndex] = useState(0);
	const [visibleCount, setVisibleCount] = useState(getCols(window.innerWidth));
	const [loadedKeys, setLoadedKeys] = useState(new Set());

	useEffect(() => {
		const id = setInterval(() => {
			setImageIndex((prev) => (prev + 1) % images.length);
		}, 2000);
		return () => clearInterval(id);
	}, [images.length]);

	useEffect(() => {
		setLoadedKeys(new Set());
	}, [imageIndex]);

	useEffect(() => {
		const onResize = () => setVisibleCount(getCols(window.innerWidth));
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	function getCols(width) {
		if (width >= 1024) return 4;
		if (width >= 768) return 3;
		return 2;
	}

	const getImage = (offset) => {
		return images[(imageIndex + offset) % images.length];
	};

	const offsets = Array.from({ length: visibleCount }, (_, i) => i);

	return (
		<div
			className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-16 mb-16`}
		>
			{offsets.map((offset) => {
				const src = getImage(offset);
				const key = `${imageIndex}-${offset}`;
				const isLoaded = loadedKeys.has(key);

				return (
					<div key={offset} className="w-full overflow-hidden">
						<img
							key={key}
							src={src}
							alt=""
							loading="lazy"
							onLoad={() =>
								setLoadedKeys((prev) => {
									const next = new Set(prev);
									next.add(key);
									return next;
								})
							}
							className="rounded-lg shadow-lg w-full
                         h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px]
                         transition-opacity duration-700 ease-in-out block object-cover"
							style={{ opacity: isLoaded ? 1 : 0 }}
						/>
					</div>
				);
			})}
		</div>
	);
};
