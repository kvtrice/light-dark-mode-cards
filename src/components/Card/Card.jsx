import styles from "./Card.module.scss";
import { useEffect, useState } from "react";

// Create a Card component that when it is rendered randomly generates a number from 0-24
// 0-24 Represents the hour on a 24 hour clock.
// If the hour is between 6AM - 6PM Render a sun icon (try font awesome or something similar) and the card should be in "Light Mode"
// Otherwise render a moon icon and the card should be in "Dark Mode"
// There should be a button to toggle light and dark mode.
// There should be a button to generate a new hour.
// Each card should have it's own light or dark mode. It shouldn't affect the whole application

const Card = () => {
	const initialHour = Math.floor(Math.random() * 24 + 1);
	const [currentHour, setCurrentHour] = useState(initialHour);
	const [isDark, setIsDark] = useState(initialHour < 6 || initialHour > 18);
	let imageSrc = isDark ? "/moon.png" : "/sun.png";

	const generateRandomNumber = () => {
		const randomNum = Math.floor(Math.random() * 24 + 1);
		setCurrentHour(randomNum);
		setIsDark(randomNum < 6 || randomNum > 18);
	};

	const handleDarkMode = () => {
		setIsDark(!isDark);
	};

	let buttonClasses = isDark
		? styles.button + " " + styles["button-dark"]
		: styles.button;

	return (
		<div className={styles.card + " " + (isDark ? styles.dark : "")}>
			<h1 className={styles.heading}>{currentHour}:00</h1>
			<img
				className={styles.image}
				src={imageSrc}
			/>
			<button
				className={buttonClasses}
				onClick={handleDarkMode}
			>
				{isDark ? "Light" : "Dark"} Mode
			</button>
			<button
				className={buttonClasses}
				onClick={generateRandomNumber}
			>
				Generate new hour
			</button>
		</div>
	);
};
export default Card;
