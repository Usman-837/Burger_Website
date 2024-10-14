import React from "react"
import about from "./images/about.jpg"

const About = () => {
    return (
        <>
        <section id="about">
            <div className="container flex flex-col gap-10 md:flex-row">
                <div className="flex-1">
                    <img src={about} alt="about image" className="rounded-lg"/>
                </div>
            </div>
        </section>
        </>
    );
}

export default About