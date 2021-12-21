import React from "react";


import Author_1 from "../../assets/images/author/1.jpg";
import Author_2 from "../../assets/images/author/2.jpg";
import Author_3 from "../../assets/images/author/3.jpg";

class Testimonial extends React.Component{

    componentDidMount() {

    }

    render() {
        return(
            <>
                <div className="row mt30">
                    <div className="col-lg-12">
                        <h2 className="sectionTitle">What They Says?</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonialSlider">
                            <div className="singleTestimonial">
                                <div className="testiImg">
                                    <img src={Author_1} alt="Author" />
                                    <span></span>
                                </div>
                                <div className="testicon">
                                    <p>
                                        They'll have to make the best of things its an uphill climb. Said
                                        Californ'y is the place you ought
                                        to be So they loaded up the truck and moved to Beverly. Hills that
                                        is. Swimmin' pools movie stars.
                                        Maybe you and me were never meant to be.
                                    </p>
                                    <div className="tesAuthor"><h5>Edward Johnson,</h5>
                                        <h6>themewar.com</h6></div>
                                </div>
                            </div> <br/>
                            <div className="singleTestimonial">
                                <div className="testiImg">
                                    <img src={Author_2} alt="Author" />
                                    <span></span>
                                </div>
                                <div className="testicon">
                                    <p>
                                        They'll have to make the best of things its an uphill climb. Said
                                        Californ'y is the place you ought
                                        to be So they loaded up the truck and moved to Beverly. Hills that
                                        is. Swimmin' pools movie stars.
                                        Maybe you and me were never meant to be.
                                    </p>
                                    <div className="tesAuthor"><h5>Mosharof Khondoker,</h5>
                                        <h6>themewar.com</h6></div>
                                </div>
                            </div> <br/>
                            <div className="singleTestimonial">
                                <div className="testiImg">
                                    <img src={Author_3} alt="Author" />
                                    <span></span>
                                </div>
                                <div className="testicon">
                                    <p>
                                        They'll have to make the best of things its an uphill climb. Said
                                        Californ'y is the place you ought
                                        to be So they loaded up the truck and moved to Beverly. Hills that
                                        is. Swimmin' pools movie stars.
                                        Maybe you and me were never meant to be.
                                    </p>
                                    <div className="tesAuthor"><h5>Sara Ferdoush,</h5>
                                        <h6>themewar.com</h6></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Testimonial;