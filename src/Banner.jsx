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
                        <div className="text-base flex items-center justify-center gap-4 py-10">
                            <div className="text-center"> 
                                <i className="fa-solid fa-utensils text-secondaryColor text-4xl"></i>
                                <br/>
                                Delicious
                            </div>
                            <div className="text-center"> 
                                <i class="fa-solid fa-droplet text-secondaryColor text-4xl"></i>
                                <br/>
                                Fresh
                            </div>
                            <div className="text-center"> 
                                <i class="fa-brands fa-envira text-secondaryColor text-4xl"></i>
                                <br/>
                                Organic
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
        </>
    )
}

export default Banner