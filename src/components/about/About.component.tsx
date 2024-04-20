import React from 'react';

import styles from './about.module.css';

const AboutComponent = () => {
    const myName: string = 'Viktor';
    const img: string =
        'https://images.unsplash.com/photo-1618603817351-f1634ddfd67a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <section className={styles.about}>
            <h2 className={`text-27 ${styles.about__title}`}>About me</h2>
            <div className={styles.about__dsc_container}>
                <div className={styles.about__dsc}>
                    <p>
                        Hi! My name is {myName} and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies
                        like React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p>This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.</p>
                    <p>
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p>You can contact me via [social network name] and check out my GitHub.</p>
                </div>
            </div>
            <img className={styles.about__image} src={img} alt="about" />
        </section>
    );
};

export default AboutComponent;
