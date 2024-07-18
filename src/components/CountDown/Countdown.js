"use client"
import React, { useState, useEffect } from "react";
// import "./styles.css";
import styles from "./Countdown.module.css";
const COUNTDOWN_END = new Date("2024-12-31T23:59:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_END - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const mins = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const secs = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, mins, secs };
};


const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

	useEffect(() => {
        const updateTimer = () => {
            setTimeLeft(getTimeLeft());
          };
      
          updateTimer(); // Update immediately on mount
      
          const timer = setInterval(updateTimer, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

    return (
        <div className={styles.countdown}>
			<div className={styles.content}>
				{Object.entries(timeLeft).map((el) => {
					const label = el[0];
					const value = el[1];
					return (
						<div className={styles.box} key={label}>
							<div className={styles.value}>
								<span>{value}</span>
							</div>
							<span className={styles.label}> {label} </span>
						</div>
					);
				})}
			</div>
		</div>
    );
};

export default Countdown;