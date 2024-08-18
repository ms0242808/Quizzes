import React, { useState, useEffect } from 'react';

const PageTransition = ({ children, isVisible, duration = 1000 }) => {
	const [shouldRender, setShouldRender] = useState(isVisible);

	useEffect(() => {
		setShouldRender(false);
		if (isVisible) {
			setShouldRender(true);
		} else {
			const timer = setTimeout(() => setShouldRender(false), duration);
			return () => clearTimeout(timer);
		}
	}, [isVisible, duration]);

	return (
		<div
			className={`transition-opacity ease-in-out duration-${duration} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
			style={{ transitionDuration: `${duration}ms` }}
		>
			{shouldRender && children}
		</div>
	);
};

export default PageTransition;
