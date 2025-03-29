
export default function BannerSection() {

    return (

        <div className="banner_section layout_padding">
            <div className="container">
                <div id="my_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row-top">
                                <div className="col-md-6">
                                    <h1 className="video_text">Glasses and frames</h1>
                                    <h1 className="controller_text">something for every taste</h1>
                                    <p className="banner_text">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some
                                        form, by injected humour, or randomised words which don&#39;t look
                                        even slightly believable
                                    </p>
                                    <div className="shop_bt">
                                        <a href="#">Shop Now</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image_1">
                                        <img src="/images/glassesall.svg" alt={""}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                      
                    </div>     
                </div>
            </div>
        </div>

    )


}
