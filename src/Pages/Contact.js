import React from "react";
import Map from "../Component/Map";

class Contact extends React.Component{
    render() {
        return(
            <>
                <Map />
                <section className="comonSection contactSection">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="sectionTitle">Contact Me</h2>
                            </div>
                        </div>
                        <div className="row mb30">
                            <div className="col-lg-8">
                                <div className="contact_form">
                                    <form method="post" action="#" id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" className="required" name="full_name" placeholder="Full Name *"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="required" name="email" placeholder="Email *"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" name="phone" placeholder="Phone"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="required" name="sjubject" placeholder="Subject *"/>
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea name="message" className="required" placeholder="Message *"></textarea>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="btt_btn"><span><i className="icon icon-Mail"></i>Send Message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon_box_01">
                                    <i className="icon icon-Mail"></i>
                                    <h3>Email Address</h3>
                                    <p>k.melissa@caroll.me</p>
                                </div>
                                <div className="icon_box_01">
                                    <i className="icon icon-Phone"></i>
                                    <h3>Phone Number</h3>
                                    <p>1.800.987.6987</p>
                                </div>
                                <div className="icon_box_01 addrBox">
                                    <i className="icon icon-Pointer"></i>
                                    <h3>Address</h3>
                                    <p>
                                        189 Lodge Avenue,
                                        Dagenham, RM8 2HQ,
                                        United Kingdom
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Contact;