import React from "react";
import {ExternalLink} from "react-external-link";

class Footer extends React.Component{
    render() {
        return(
            <>
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="copyRight">&copy; {(new Date().getFullYear())} All Rights Reserved By
                                    <ExternalLink href="https://mrsabbir.website" target="_blank"> Sabbir</ExternalLink></div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;