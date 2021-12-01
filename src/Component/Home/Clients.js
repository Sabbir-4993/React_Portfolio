import React from "react";
import {Link} from "react-router-dom";

class Clients extends React.Component{
    render() {
        return(
            <>
                <div className="row mt30">
                    <div className="col-lg-12">
                        <div className="clientSlider owl-carousel">
                            <div className="sliderItem">
                                <Link to="/">
                                    <img src="assets/images/client/8.png" alt="Client" />
                                </Link>
                            </div>
                            <div className="sliderItem">
                                <Link to="/">
                                    <img src="assets/images/client/9.png" alt="Client" />
                                </Link>
                            </div>
                            <div className="sliderItem">
                                <Link to="/">
                                    <img src="assets/images/client/10.png" alt="Client" />
                                </Link>
                            </div>
                            <div className="sliderItem">
                                <Link to="/">
                                    <img src="assets/images/client/11.png" alt="Client" />
                                </Link>
                            </div>
                            <div className="sliderItem">
                                <Link to="/">
                                    <img src="assets/images/client/12.png" alt="Client" />
                                </Link>
                            </div>
                            <div className="sliderItem">
                                <Link to="/">
                                    <img src="assets/images/client/13.png" alt="Client" />
                                </Link>
                            </div>
                            <div className="sliderItem">
                                <Link to="/">
                                    <img src="assets/images/client/14.png" alt="Client" />
                                </Link>
                            </div>
                            <div className="sliderItem">
                                <Link to="/">
                                    <img src="assets/images/client/15.png" alt="Client" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Clients;