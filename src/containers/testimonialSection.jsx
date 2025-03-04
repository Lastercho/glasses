export default function TestimonialSection() {
    return (
        <div className="testimonial_section layout_padding">
            <div className="container">
                <h1 className="testimonial_text">Testimonial</h1>
                <p className="ipsum_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud
                </p>
                <div className="testimonial_section_2">
                    <div className="box_main">
                        <div className="quote_icon">
                            <img src="/images/quote-icon.png" alt={""}/>
                        </div>
                        <p className="dolor_text">
                            {" "}
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum{" "}
                        </p>
                        <div className="client_main">
                            <div className="client_left">
                                <div className="images_5">
                                    <img src="/images/img-5.png" alt={""}/>
                                </div>
                            </div>
                            <div className="client_right">
                                <h1 className="sandy_text">Sandy Delex</h1>
                                <p className="sandy_text_1">Reprehenderit</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="see_main">
                    <div className="see_bt">
                        <a href="#">See More</a>
                    </div>
                </div>
            </div>
        </div>

    )

}

