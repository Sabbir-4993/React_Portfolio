import React from "react";
import Map from "../Component/Map";
import {ExternalLink} from "react-external-link";
import {Contact_Form} from "../Component/Contact_Form";

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
                                    <Contact_Form />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon_box_01">
                                    <i className="icon icon-Mail"></i>
                                    <h3>Email Address</h3>
                                    <p><ExternalLink href="mailto:sabbir5795@gmail.com">sabbir5795@gmail.com</ExternalLink></p>
                                </div>
                                <div className="icon_box_01">
                                    <i className="icon icon-Phone"></i>
                                    <h3>Phone Number</h3>
                                    <p><ExternalLink href="tel:+8801521463599">+8801521463599</ExternalLink></p>
                                </div>
                                <div className="icon_box_01 addrBox">
                                    <i className="icon icon-Pointer"></i>
                                    <h3>Address</h3>
                                    <p>
                                        Basabo, Dhaka - 1214, BD
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