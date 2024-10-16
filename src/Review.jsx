import React from "react"
import customerimg1 from "./images/review-1.jpg"
import customerimg2 from "./images/review-2.jpg"
import customerimg3 from "./images/review-3.jpg"
import customerimg4 from "./images/review-4.jpg"
import customerimg5 from "./images/review-5.jpg"

const Review = () => {

    const customer_review = [
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg1,
            name: "JOHN DOE",
            profession: "Designer"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg2,
            name: "MARYAM",
            profession: "Developer"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg3,
            name: "AWAIS",
            profession: "Developer"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg4,
            name: "MAHNOR",
            profession: "Designer"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, necessitatibus deserunt voluptatum nobis quod sapiente fuga rem provident soluta odit, cum eius consequuntur, similique accusamus veniam voluptate consectetur ut maiores!",
            img: customerimg5,
            name: "HASNAIN",
            profession: "Marketer"
        },
    ];

    return (
        <>
            <section id="menu">
                <div className="container">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="section__title">CUSTOMER REVIEW</h2>
                        <div className="separator mx-auto"></div>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium totam dolores asperiores eaque ea architecto nostrum, delectus hic vitae iste. Nemo soluta, suscipit porro sit dignissimos libero magni in.</p>
                    </div>
                    <div>
                        <ul>
                            {   
                                customer_review.map((data, index) => (
                                    <li key={index}>
                                        <div className="flex flex-col gap-5 bg-primaryColorLight rounded-lg p-6">
                                            <p className="paragraph">{data.des}</p>
                                            <div className="flex items-center">
                                                <img src={data.img} alt="review image" className="w-12 h-12 rounded-full"/>
                                                <div className="ml-2">
                                                    <p className="font-oswald uppercase">{data.name}</p>
                                                    <p className="paragraph">{data.profession}</p>
                                                </div>
                                                <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }                          
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review