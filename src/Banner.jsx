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
                    <div className="text-center">
                        <h1 className="home__title">HAPPY TUMMY WITH TASTY BURGERS.</h1>
                        <div className="separator mx-auto"></div>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque quia amet nesciunt quibusdam harum, repudiandae ipsum nostrum qui reiciendis animi, voluptate ut quos tenetur voluptatem? Laborum vitae eum harum.
                        </p>
                    </div>    
                </div>
            </section>
        </>
    )
}

export default Banner