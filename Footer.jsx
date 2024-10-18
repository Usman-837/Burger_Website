import React from "react"

const Footer = () => {
    return (
        <>
        <section className="footer">
            <div className="container">
                <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2">
                    <li>
                        <div className="space-y-3">
                            <a href="" className="text-4xl font-oswald uppercase">
                                Bur<span className="text-secondaryColor">ger</span>
                            </a>
                            <p className="text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, iusto, impedit accusantium mollitia consequatur vel laudantium architecto soluta assumenda repellendus unde facilis velit vero aut! Doloremque, expedita quam. Deserunt, debitis!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg uppercase font-oswald">SUPPORT</h3>
                            <a href="" className="text-xs hover:text-secondaryColor">FAQ's</a>
                            <a href="" className="text-xs hover:text-secondaryColor">Privacy Policy</a>
                            <a href="" className="text-xs hover:text-secondaryColor">Term & Condition</a>
                            <a href="" className="text-xs hover:text-secondaryColor">Contact</a>
                        </div>
                    </li>
                    <li className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-lg uppercase font-oswald">phone</h3>
                            <p className="flex items-center gap-2 text-xs">
                                <i className="fa-solid fa-phone text-lg text-secondaryColor"></i>
                                +1 000 000 0000
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg uppercase font-oswald">email</h3>
                            <p className="flex items-center gap-2 text-xs">
                                <i className="fa-solid fa-envelope text-lg text-secondaryColor"></i>
                                burger.infor@email.com
                            </p>
                        </div>
                    </li>
                    <li className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-lg uppercase font-oswald">address</h3>
                            <p className="flex items-center gap-2 text-xs">
                                <i className="fa-solid fa-location-dot text-lg text-secondaryColor"></i>
                                address goes here
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Footer