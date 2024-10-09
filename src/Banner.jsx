import React from "react";
import homeimage from "./images/home-image.png"

const Banner = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="mx-auto">
                        <img src={homeimage} alt="home image" className="w-60"/>
                    </div>    
                </div>
            </section>
        </>
    )
}

export default Banner