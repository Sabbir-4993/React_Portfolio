import React from "react";
import {Link} from "react-router-dom";

import dogdash from "../../assets/images/client/dogdash.png"
import squeeder from "../../assets/images/client/squeeder.png"
import satez from "../../assets/images/client/satez.png"
import sounddistric from "../../assets/images/client/sounddistric.png"
import privachef from "../../assets/images/client/privachef.png"
import srijonerhut from "../../assets/images/client/srijonerhut.png"
import nadim from "../../assets/images/client/nadim.png"
import trimatric from "../../assets/images/client/trimatric.png"
import uttaran from "../../assets/images/client/uttaran.png"
import artact from "../../assets/images/client/artact.png"
import indecor from "../../assets/images/client/indecor.png"

class Clients extends React.Component{
    render() {
        return(
            <>
                <div className="row mt30">
                    <div className="col-lg-12">
                        <h2 className="sectionTitle">Clients</h2>

                        <div className="row">
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={dogdash} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={squeeder} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={satez} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={sounddistric} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={privachef} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={srijonerhut} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={artact} alt="Client" />
                                </Link>
                            </div>

                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={trimatric} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={uttaran} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={nadim} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="/">
                                    <img src={indecor} alt="Client" />
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