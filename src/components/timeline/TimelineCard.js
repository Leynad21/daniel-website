import styles from "./timeline.module.css"
import React from 'react'

const TimelineCard = ({ date, title, description, iconUrl, bifurcationStart }) => {
    return (
        <div className={styles.card__container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h3>{title}</h3>
                    <div className={styles.header__right}>
                        <h2>{date}</h2>
                        <img src={iconUrl} alt={date} />
                    </div>
                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.arrow__container}>
                <div className={bifurcationStart === "end-line" ? "none"
                    : bifurcationStart === true ? styles.duo_arrow : styles.arrow} />
            </div>

        </div>
    )
}

export default TimelineCard