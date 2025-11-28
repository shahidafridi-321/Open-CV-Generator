import React, { useState, useEffect } from "react";

const data = ["cloud", "car", "animal", "cow", "lion", "mano"];

export const About = () => {
	const [imageIndex, setImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setImageIndex((preImage) => (preImage + 1) % data.length);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [data.length]);

	return <div>{data[imageIndex]}</div>;
};
