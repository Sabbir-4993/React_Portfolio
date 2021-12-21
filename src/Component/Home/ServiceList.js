import React from "react";
import {Link} from "react-router-dom";

class ServiceList extends React.Component{
    render() {
        return(
            <>
                <div className="row mt52">
                    <div className="col-lg-12">
                        <h2 className="sectionTitle">What I Do?</h2>
                    </div>
                </div>
                <div className="row itemMb30">
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-Settings"></i>
                            </div>
                            <h3><Link to="/">Web Development</Link></h3>
                            <h5>Frontend & Backend</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-Pen"></i>
                            </div>
                            <h3><Link to="/">UI UX design</Link></h3>
                            <h5>Web & App</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-Layers"></i>
                            </div>
                            <h3><Link to="/">App Development</Link></h3>
                            <h5>Learning</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-Share"></i>
                            </div>
                            <h3><Link to="/">Digital Marketing</Link></h3>
                            <h5>Social Media</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-ChartUp"></i>
                            </div>
                            <h3><Link to="/">Search Engine Optimization</Link></h3>
                            <h5>SEO</h5>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ServiceList;