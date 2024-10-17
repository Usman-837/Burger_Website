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
                </ul>
            </div>
        </section>
        </>
    )
}

export default Footer