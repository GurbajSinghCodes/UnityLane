import React from 'react';
import style from "@/styles/home.module.css";

const Home = () => {
    return (
        <div className={style.container}>
            <header className={style.hero}>
                <h1>Welcome to HopeBridge</h1>
                <p>Empowering communities through compassion and service</p>
            </header>

            <section className={style.section}>
                <h2>Our Mission</h2>
                <p>We aim to uplift underprivileged communities by providing access to education, healthcare, and skill development programs.</p>
            </section>

            <section className={style.section}>
                <h2>What We Do</h2>
                <ul>
                    <li>Organize food and supply drives</li>
                    <li>Run free medical camps and awareness sessions</li>
                    <li>Promote education via scholarships and tutoring</li>
                    <li>Support local entrepreneurs and artisans</li>
                </ul>
            </section>

            <section className={style.section}>
                <h2>Get Involved</h2>
                <p>Join us as a volunteer, sponsor a child, or help fund a local initiative.</p>
            </section>
        </div>
    );
};

export default Home;
