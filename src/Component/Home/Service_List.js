import React from "react";
import {Link} from "react-router-dom";

class Service_List extends React.Component{
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
                            <h5>from scratch</h5>
                            <p>
                                Sunt explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-Pen"></i>
                            </div>
                            <h3><Link to="/">UX recherche</Link></h3>
                            <h5>data collection</h5>
                            <p>
                                Sunt explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-Layers"></i>
                            </div>
                            <h3><Link to="/">UI design</Link></h3>
                            <h5>creativ design</h5>
                            <p>
                                Sunt explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-Phone"></i>
                            </div>
                            <h3><Link to="/">Application</Link></h3>
                            <h5>stand alone</h5>
                            <p>
                                Sunt explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-Share"></i>
                            </div>
                            <h3><Link to="/">Social Media</Link></h3>
                            <h5>digital product</h5>
                            <p>
                                Sunt explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="icon_box_02">
                            <div className="i_div">
                                <i className="icon icon-ChartUp"></i>
                            </div>
                            <h3><Link to="/">Search Engine</Link></h3>
                            <h5>page rank</h5>
                            <p>
                                Sunt explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Service_List;