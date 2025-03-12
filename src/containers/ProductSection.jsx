export default function ProductSection() {
    return (
        <div className="product_section layout_padding">
            <div className="container">
                <div className="product_text">
                    Our <span style={{color: "#5ca0e9"}}>products</span>
                </div>
                <p className="long_text">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem
                </p>
                <div className="product_section_2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image_2" >
                                <img src="/images/oip.jpg" alt={""}/>
                            </div>
                            <div className="price_text">
                                Price € <span style={{color: "#3a3a38"}}>20</span>
                            </div>
                            <h1 className="game_text">Perfect frames</h1>
                            <p className="long_text">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The
                                point of using Lorem
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="image_2">
                                <img src="/images/oip4.jpg" alt={""}/>
                            </div>
                            <div className="price_text">
                                Price € <span style={{color: "#3a3a38"}}>30</span>
                            </div>
                            <h1 className="game_text">Sunglasses</h1>
                            <p className="long_text">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The
                                point of using Lorem
                            </p>
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

