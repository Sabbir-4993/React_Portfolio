import React from "react";

import home_01 from "../assets/images/home_01/1.jpg"
import {ExternalLink} from "react-external-link";
import {Link} from "react-router-dom";

class ProfileSidebar extends React.Component{
    render() {
        return(
            <>
                <div className="col-lg-4 profileColumn">
                    <div className="profileSidebar">
                        <div className="psHeader">
                            <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                                <polygon points="0 20, 100 20, 0 100" opacity=".65"></polygon>
                            </svg>
                            <svg className="svg2" preserveAspectRatio="none" viewBox="0 0 100 120">
                                <polygon points="0 20, 100 20, 15 120" opacity=".8"></polygon>
                            </svg>
                            <div className="psContent">
                                <h3>Linda M. Bellamy</h3>
                                <span>Sr. Developer</span>
                            </div>
                        </div>
                        <div className="psPhoto">
                            <img src={home_01} alt="" />
                            <div className="psSocial">
                                <ExternalLink href="https://facebook.com" target="_blank" className="fac"><i className="icofont-facebook"></i></ExternalLink>
                                <ExternalLink href="https://twitter.com" target="_blank" className="twi"><i className="icofont-twitter"></i></ExternalLink>
                                <ExternalLink href="https://dribbble.com/" target="_blank" className="dri"><i className="icofont-dribbble"></i></ExternalLink>
                                <ExternalLink href="https://www.instagram.com/" target="_blank" className="ins"><i className="icofont-instagram"></i></ExternalLink>
                            </div>
                        </div>
                        <div className="psSkills">
                            <div className="pssBox" data-count="85">
                                <div className="pssbCount">85.</div>
                                <h5>Backend Development</h5>
                                <div className="pssbBars">
                                    <div className="pssbBar" style={{width: '0%'}}></div>
                                </div>
                            </div>
                            <div className="pssBox" data-count="92">
                                <div className="pssbCount">92.</div>
                                <h5>Frontend Development</h5>
                                <div className="pssbBars">
                                    <div className="pssbBar gr2" style={{width: '0%'}}></div>
                                </div>
                            </div>
                            <div className="pssBox" data-count="71">
                                <div className="pssbCount">71.</div>
                                <h5>Illustration</h5>
                                <div className="pssbBars">
                                    <div className="pssbBar gr3" style={{width: '0%'}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="psFooter">
                            <Link to="/" className="btt_btn only_icon btt_reverse"><span><i className="icon icon-DownloadCloud"></i></span></Link>
                            <Link to="/contact" className="btt_btn"><span><i className="icon icon-Bag"></i> Hire Me</span></Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProfileSidebar;