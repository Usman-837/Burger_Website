import React from "react"
import menuimg1 from "./images/burger-1.png"
import menuimg2 from "./images/burger-2.png"
import menuimg3 from "./images/burger-3.png"
import menuimg4 from "./images/burger-4.png"
import menuimg5 from "./images/burger-5.png"

const Menu = () => {

    const burgermenu = [
        {
            title: "REGULAR BEEF BURGER",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            price: "$42.00",
            image: menuimg1
        },
        {
            title: "REGULAR BEEF BURGER",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            price: "$40.00",
            image: menuimg2
        },
        {
            title: "REGULAR BEEF BURGER",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            price: "$45.00",
            image: menuimg3
        },
        {
            title: "REGULAR BEEF BURGER",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            price: "$48.00",
            image: menuimg4
        },
        {
            title: "REGULAR BEEF BURGER",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            price: "$35.00",
            image: menuimg5
        }
    ]

    return (
        <>
            <section id="menu">
                <div className="container">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="section__title">OUR BEST MENU</h2>
                        <div className="separator mx-auto"></div>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium totam dolores asperiores eaque ea architecto nostrum, delectus hic vitae iste. Nemo soluta, suscipit porro sit dignissimos libero magni in.</p>
                        <div className="tabs_wrap">
                            <ul className="flex flex-wrap justify-center gap-3 py-10">
                                <li className="btn bg-primaryColorLight active">All</li>
                                <li className="btn bg-primaryColorLight">Food</li>
                                <li className="btn bg-primaryColorLight">Snack</li>
                                <li className="btn bg-primaryColorLight">Beverage</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                            {/* food */}
                            {
                                burgermenu.map((data) => (
                                    <li>
                                        <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                                            <img src={data.image} alt="food image" className="w-40 hover:scale-110 ease-linear duration-200 md:w-40 lg:w-24" />
                                        </div>
                                        <div className="pt-5">
                                            <div className="mb-2">
                                                <h4 className="card__title">{data.title}</h4>
                                                <p className="paragraph">{data.des}</p>
                                            </div>
                                            <p className="text-secondaryColor">{data.price}</p>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Menu